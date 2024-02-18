import { hookVue3 } from "./renderer/vue";
import { apiInstance, qmenu, qGuildMenu } from "./renderer/llapi";

let first_ckeditorInstance = false

declare var qContextMenu: HTMLElement;
declare var navigation: Performance;

function monitor_qmenu(this: any, event: { target: any; }) {
    let { target } = event
    const { classList } = target
    if (classList?.[0] !== "q-context-menu" && typeof qContextMenu !== "undefined" && (qContextMenu.innerText.includes("转发") || qContextMenu.innerText.includes("转文字"))) {
        const msgIds = target.closest(".ml-item")?.id
        if (qContextMenu.innerText.includes("转文字")) {
            target.classList.add("ptt-element__progress")
        }
        apiInstance.emit("context-msg-menu", event, target, msgIds);
    }
}

function onLoad() {
    const observer = new MutationObserver((mutationsList: LLAPIMutationRecord[], observer) => {
        // 遍历每个变化
        for (const { type, addedNodes } of mutationsList) {
            if (type !== 'childList') continue;
            // 遍历每个新增的节点
            addedNodes.forEach(node => {
                // 判断节点是否为元素节点
                if (node.nodeType === Node.ELEMENT_NODE) {
                    node.querySelectorAll('.image.pic-element').forEach(img_node => {
                        img_node.addEventListener('contextmenu', monitor_qmenu)
                    })
                    node.querySelectorAll('.image.market-face-element').forEach(img_node => { 
                        img_node.addEventListener('contextmenu', monitor_qmenu)
                    })
                }
                // QQ菜单弹出
                if (node?.previousSibling?.classList?.[0] === "q-context-menu"
                    && (node?.previousSibling?.innerText.includes("转发") || node?.previousSibling?.innerText.includes("转文字")) 
                    && qmenu.length > 0) {
                    const ndoe_rect = node.previousSibling.getBoundingClientRect()
                    const message_element = document.elementFromPoint(ndoe_rect.x, ndoe_rect.y)
                    //?.closest(".msg-content-container")?.closest(".message");
                    qmenu.forEach(o => {
                        o.forEach(listener => {
                            listener(node.previousSibling, message_element);
                        });
                    });
                }
                // QQ频道菜单弹出
                if (node?.classList?.[0] === "context-menu"
                    && node?.innerText.includes("复制")
                    && qGuildMenu.length > 0) {
                    const ndoe_rect = node.getBoundingClientRect()
                    const message_element = document.elementFromPoint(ndoe_rect.x, ndoe_rect.y)
                    //?.closest(".msg-content-container")?.closest(".message");
                    qGuildMenu.forEach(o => {
                        o.forEach(listener => {
                            listener(node, message_element);
                        });
                    });
                }
                // QQ消息更新
                if (node.className === "ml-item" || node.className === "message vue-component") {
                    apiInstance.emit("dom-up-messages", node);
                }
                if (node.classList?.[0] === "nav-item") {
                    apiInstance.emit("dom-up-nav-item", node);
                }
                const ckeditorInstance = document.querySelector(".ck.ck-content.ck-editor__editable")?.ckeditorInstance;
                if (!first_ckeditorInstance && ckeditorInstance) {
                    ckeditorInstance.model.document.on('change', (event, data) => {
                        data.operations.forEach((item)=>{
                            item = item.toJSON()
                            if(item?.baseVersion){
                                if(item.nodes?.[0]?.data) {
                                    // 输入文字
                                    //console.log(item.nodes[0].data)
                                }
                            }
                        })
                    });
                    first_ckeditorInstance = true
                }
            });
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('contextmenu', monitor_qmenu)
    if (location.hash == "#/blank") {
        navigation.addEventListener("navigatesuccess", () => {
            apiInstance.emit("change_href", location)
        });
    } else {
        apiInstance.emit("change_href", location)
    }
}

hookVue3()
onLoad()
