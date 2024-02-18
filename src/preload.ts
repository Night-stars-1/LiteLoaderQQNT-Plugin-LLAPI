// Electron 主进程 与 渲染进程 交互的桥梁
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("LLAPI_PRE", {
    // 获取配置
    ipcRenderer_LL: ipcRenderer,
    ipcRenderer_LL_on: (channel: string, callback: (event: IpcRendererEvent, ...args: any[]) => void) => {
        ipcRenderer.on(channel, callback)
    },
    ipcRenderer_LL_once: (channel: string, callback: (event: IpcRendererEvent, ...args: any[]) => void) => {
        ipcRenderer.once(channel, callback)
    },
    set_id: (id: string, webContentsId: string) => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.set_id",
        id, webContentsId
    ),
    get_peer: () => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.get_peer"
    ),
    exists: (path: string) => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.exists",
        path
    ),
    getSilk: (path: string) => ipcRenderer.invoke(
        "LiteLoader.LLAPI_PRE.getSilk",
        path
    ),
});
