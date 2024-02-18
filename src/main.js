const util = require("util");
const { onLoad, peer, pendingCallbacks } = require("./main/onload");
const { output } = require("./main/utils");

let account = "0";

function printObject(object) {
    return util.inspect(object, {
        compact: true,
        depth: null,
        showHidden: true,
    });
}

// 创建窗口时触发
function onBrowserWindowCreated(window) {
    const original_send = window.webContents.send;
    const patched_send = (channel, ...args) => {
        switch (args?.[1]?.[0]?.cmdName) {
            case "nodeIKernelMsgListener/onRecvMsg":
                // 接收消息
                window.webContents.send("new_message-main", args);
                break;
            case "onGroupListUpdate":
                // 群列表更新
                window.webContents.send("groups-list-updated-main", args);
                break;
            case "onBuddyListChange":
                // 好友列表更新
                window.webContents.send("friends-list-updated-main", args);
                break;
            case "nodeIKernelProfileListener/onProfileSimpleChanged":
                // 用户信息更新
                window.webContents.send("user-info-list-main", args);
                break;
            case "nodeIKernelGroupListener/onGroupDetailInfoChange":
                // 群信息更新
                break;
            case "nodeIKernelRecentContactListener/onRecentContactListChanged":
                // 最近联系人列表更新
                break;
            case "nodeIKernelGroupListener/onGroupSingleScreenNotifies":
                // 群聊通知
                break;
            case "nodeIKernelMsgListener/onAddSendMsg":
                // 发送消息成功
                break;
        }
        if (!channel.includes("LiteLoader")) {
            if (args?.[1]?.account?.length > 0 && account == "0") {
                window.webContents.send("user-login-main", args[1]);
            }
            // output(channel, JSON.stringify(args[1]));
        }
        if (args[0]?.callbackId) {
            const id = args[0].callbackId;
            if (id in pendingCallbacks) {
                window.webContents.send(pendingCallbacks[id], args[1]);
                delete pendingCallbacks[id];
            }
        }
        return original_send.call(window.webContents, channel, ...args);
    };
    window.webContents.send = patched_send;
    function ipc_message(_, status, name, ...args) {
        if (name !== "___!log" && args[0][1] && args[0][1][0] != "info") {
            const event = args[0][0];
            const data = args[0][1];
            switch (data?.[0]) {
                case "nodeIKernelMsgService/setMsgRead":
                    const msgPeer = data[1]?.peer;
                    peer.uid = msgPeer.peerUid;
                    peer.guildId = msgPeer.guildId;
                    peer.chatType =
                        msgPeer.chatType == 1
                            ? "friend"
                            : msgPeer.chatType == 2
                            ? "group"
                            : "others";
                    window.webContents.send("set_message-main");
                    break;
                case "nodeIKernelMsgService/sendMsg":
                    // output(JSON.stringify(args[0][1]));
                    break;
                case "nodeIKernelMsgService/forwardMsgWithComment":
                    // output(JSON.stringify(args))
                    break;
                case "nodeIKernelMsgService/getRichMediaFilePathForGuild":
                    // output(JSON.stringify(args))
                    break;
                case "openExternalWindow":
                    // output(JSON.stringify(args))
                    break;
                default:
                    // output(JSON.stringify(args))
                    break;
            }
        }
    }
    const ipc_message_proxy =
        window.webContents._events["-ipc-message"]?.[0] ||
        window.webContents._events["-ipc-message"];

    const proxyEvents = new Proxy(ipc_message_proxy, {
        // 拦截函数调用
        apply(target, thisArg, argumentsList) {
            /**
            if (argumentsList[3][1] && argumentsList[3][1][0] && argumentsList[3][1][0].includes("fetchGetHitEmotionsByWord")) {
                // 消息内容数据
                // 消息内容
                //output(content.msgElements[0].textElement.content)
                //content.msgElements[0].textElement.content = "测试"
                output("ipc-msg被拦截", argumentsList[3][1][1].inputWordInfo.word);
            }
             */
            ipc_message(...argumentsList);
            return target.apply(thisArg, argumentsList);
        },
    });
    if (window.webContents._events["-ipc-message"][0]) {
        window.webContents._events["-ipc-message"][0] = proxyEvents;
    } else {
        window.webContents._events["-ipc-message"] = proxyEvents;
    }
    window.webContents.on("ipc-message-sync", (event, channel, ...args) => {
        if (channel == "___!boot") {
            event.returnValue = {
                enabled: true,
                webContentsId: window.webContents.id.toString(),
            };
        }
    });

    window.webContents.on("did-finish-load", () => {
        output("Page finished loading");
    });
}

onLoad();

module.exports = {
    onBrowserWindowCreated,
};
