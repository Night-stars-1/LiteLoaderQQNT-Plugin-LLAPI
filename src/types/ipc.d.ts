/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-18 21:28:36
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-18 21:41:19
 */
interface ArgsItem {
    account?: string;
    0?: {
        /** 命令名称 */
        cmdName?: string;
    };
}

type rendererArgs = [
    {
        callbackId?: string
    },
    ArgsItem?
];
