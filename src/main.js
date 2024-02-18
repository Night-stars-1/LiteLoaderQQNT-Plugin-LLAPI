const { ipcMain } = require("electron");
const { existsSync } = require("fs");
const util = require("util");
const fs = require("fs");
const path = require("path");
const { encode, getDuration } = require("../silk-wasm");

let peer;
let account = "0";
let i = 0;
const pendingCallbacks = {};

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
                    peer = data[1]?.peer;
                    peer = {
                        uid: peer.peerUid,
                        guildId: peer.guildId,
                        chatType:
                            peer.chatType == 1
                                ? "friend"
                                : peer.chatType == 2
                                ? "group"
                                : "others",
                    };
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
        if (name === "___!add_message_list") {
            const peer = args[0][0];
            const message = args[0][1];
            const data = [];
            i++;
            original_send.call(window.webContents, "IPC_DOWN_2", ...data);
            const data1 = [];
            original_send.call(window.webContents, "IPC_DOWN_2", ...data1);
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

// 清理文件夹的函数
function clearDirectory(directory) {
    // 读取文件夹中的所有文件和文件夹
    const files = fs.readdirSync(directory);

    for (const file of files) {
        // 获取当前文件或文件夹的完整路径
        const fullPath = path.join(directory, file);
        // 检查当前路径是文件还是文件夹
        if (fs.lstatSync(fullPath).isDirectory()) {
            // 如果是文件夹，递归调用清理函数
            clearDirectory(fullPath);
            // 删除空文件夹
            fs.rmdirSync(fullPath);
        } else {
            // 如果是文件，直接删除文件
            fs.unlinkSync(fullPath);
        }
    }
}

function onLoad() {
    const pluginDataPath = LiteLoader.plugins.LLAPI.path.data;
    const pttPath = path.join(pluginDataPath, "ptt");
    if (!fs.existsSync(pttPath)) {
        fs.mkdirSync(pttPath, { recursive: true });
    } else {
        clearDirectory(pttPath);
    }
    // 加载插件时触发
    ipcMain.on("___!boot", (event) => {
        if (!event.returnValue) event.returnValue = { enabled: false };
    });

    ipcMain.on("___!log", (event, level, ...args) => {
        console[
            { 0: "debug", 1: "log", 2: "info", 3: "warn", 4: "error" }[level] ||
                "log"
        ](`[!Renderer:Log:${event.sender.id}]`, ...args);
    });
    // 安装
    ipcMain.handle("LiteLoader.LLAPI_PRE.log", (event, ...message) => {
        console.log(...message);
    });
    ipcMain.handle(
        "LiteLoader.LLAPI_PRE.set_id",
        (event, id, webContentsId) => {
            try {
                pendingCallbacks[id] = "LL_DOWN_" + id;
            } catch (error) {
                output(error);
                return {};
            }
        }
    );
    ipcMain.handle("LiteLoader.LLAPI_PRE.get_peer", (event) => {
        try {
            return peer;
        } catch (error) {
            output(error);
            return {};
        }
    });
    ipcMain.handle("LiteLoader.LLAPI_PRE.exists", (event, filePath) => {
        try {
            return existsSync(filePath);
        } catch (error) {
            console.log(error);
            return {};
        }
    });
    ipcMain.handle("LiteLoader.LLAPI_PRE.getSilk", async (event, filePath) => {
        try {
            const fileName = path.basename(filePath);
            const pcm = fs.readFileSync(filePath);
            const silk = await encode(pcm, 24000);
            fs.writeFileSync(`${pttPath}/${fileName}`, silk.data);
            return {
                path: `${pttPath}/${fileName}`,
                duration: silk.duration,
            };
        } catch (error) {
            console.log(error);
            return {};
        }
    });
}

function output(...args) {
    console.log("\x1b[32m[LLAPI]\x1b[0m", ...args);
}

onLoad();

module.exports = {
    onBrowserWindowCreated,
};
