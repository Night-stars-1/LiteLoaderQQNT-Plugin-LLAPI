/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-05 13:44:33
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-01-26 18:03:22
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
// Electron 主进程 与 渲染进程 交互的桥梁
const { contextBridge, ipcRenderer } = require("electron");

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("LLAPI_PRE", {
    // 获取配置
    ipcRenderer_LL: ipcRenderer,
    ipcRenderer_LL_on: (channel, callback) => {
        ipcRenderer.on(channel, callback)
    },
    ipcRenderer_LL_once: (channel, callback) => {
        ipcRenderer.once(channel, callback)
    },
    set_id: (id, webContentsId) => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.set_id",
        id, webContentsId
    ),
    get_peer: () => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.get_peer"
    ),
    exists: (path) => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.exists",
        path
    )
});
