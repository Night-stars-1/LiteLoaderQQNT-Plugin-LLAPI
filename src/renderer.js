/*
 * @Author: Night-stars-1
 * @Date: 2023-08-03 23:18:21
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-02 19:59:12
 * @Description: 借鉴了NTIM, 和其他大佬的代码
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { hookVue3 } from "./renderer/vue.js";
import { apiInstance, qmenu } from "./renderer/llapi.js";
import { output, delay } from "./renderer/utils.js";

//const plugin_path = LiteLoader.plugins.LLAPI.path.plugin;
//const ipcRenderer_on = LLAPI_PRE.ipcRenderer_LL_on;
//const ipcRenderer_once = LLAPI_PRE.ipcRenderer_LL_once;

let first_ckeditorInstance = false

function monitor_qmenu(event) {
    /**
    const ckeditorInstance = document.querySelector(".ck.ck-content.ck-editor__editable").ckeditorInstance;
    const originalset = ckeditorInstance.data.set;
    const patchedset = new Proxy(originalset, {
        apply(target, thisArg, argumentsList) {
            console.log(target, thisArg, argumentsList);
            return Reflect.apply(target, thisArg, argumentsList);
        }
    });
    ckeditorInstance.data.set = patchedset;
    
    const ckeditorInstance = document.querySelector(".ck.ck-content.ck-editor__editable").ckeditorInstance;
    const originalApplyOperation = ckeditorInstance.editing.model.applyOperation;
    const patchedApplyOperation = new Proxy(originalApplyOperation, {
        apply(target, thisArg, argumentsList) {
            console.log(target, thisArg, argumentsList);
            return Reflect.apply(target, thisArg, argumentsList);
        }
    });
    ckeditorInstance.editing.model.applyOperation = patchedApplyOperation;
     */
    let { target } = event
    const { classList } = target
    if (classList?.[0] !== "q-context-menu" && typeof qContextMenu !== "undefined" && (qContextMenu.innerText.includes("转发") || qContextMenu.innerText.includes("转文字"))) {
        const msgIds = target.closest(".ml-item")?.id
        if (qContextMenu.innerText.includes("转文字")) {
            target.classList = ["ptt-element__progress"]
        }
        apiInstance.emit("context-msg-menu", event, target, msgIds);
    }
}

function onLoad() {
    // 扩展 CanvasRenderingContext2D 原型链
    /**
    CanvasRenderingContext2D.prototype._originalDrawFunction = CanvasRenderingContext2D.prototype.drawImage;

    CanvasRenderingContext2D.prototype.drawImage = function (image, ...args) {
        output('Drawing with custom interception:', image);
        return this._originalDrawFunction.call(this, image, ...args);
    };
    */
    const observer = new MutationObserver((mutationsList, observer) => {
        // 遍历每个变化
        for (const { type, addedNodes } of mutationsList) {
            if (type !== 'childList') continue;
            // 遍历每个新增的节点
            addedNodes.forEach(node => {
                // 判断节点是否为元素节点
                if (node.nodeType === Node.ELEMENT_NODE) {
                    node.querySelectorAll('.image.pic-element').forEach((img_node) => {
                        img_node.addEventListener('contextmenu', monitor_qmenu)
                    })
                    node.querySelectorAll('.image.market-face-element').forEach((img_node) => {
                        img_node.addEventListener('contextmenu', monitor_qmenu)
                    })
                }
                // QQ菜单弹出
                if (node?.previousSibling?.classList?.[0] === "q-context-menu"  && (node?.previousSibling?.innerText.includes("转发") || node?.previousSibling?.innerText.includes("转文字")) && qmenu.length > 0) {
                    const ndoe_rect = node.previousSibling.getBoundingClientRect()
                    const message_element = document.elementFromPoint(ndoe_rect.x, ndoe_rect.y)
                    //?.closest(".msg-content-container")?.closest(".message");
                    qmenu.forEach(o => {
                        o.forEach(listener => {
                            listener(node.previousSibling, message_element);
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
