/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-18 21:14:44
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-18 21:55:49
 */
import { ipcMain } from "electron";
import fs from "node:fs";
import path from "node:path";

import { encode, getDuration } from "silk-wasm";
import { clearDirectory, getFileHeader, output } from "./utils";


const peer = {};
const pendingCallbacks = {};

declare var LiteLoader: LiteLoader;

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
            return fs.existsSync(filePath);
        } catch (error) {
            console.log(error);
            return {};
        }
    });
    ipcMain.handle("LiteLoader.LLAPI_PRE.getSilk", async (event, filePath) => {
        try {
            const fileName = path.basename(filePath);
            const pcm = fs.readFileSync(filePath);
            if (getFileHeader(filePath) !== "02232153494c4b") {
                const silk = await encode(pcm, 24000);
                fs.writeFileSync(`${pttPath}/${fileName}`, silk.data);
                return {
                    path: `${pttPath}/${fileName}`,
                    duration: silk.duration,
                };
            } else {
                const duration = getDuration(pcm);
                return {
                    path: filePath,
                    duration: duration,
                };
            }
        } catch (error) {
            console.log(error);
            return {};
        }
    });
}

export { peer, onLoad, pendingCallbacks };
