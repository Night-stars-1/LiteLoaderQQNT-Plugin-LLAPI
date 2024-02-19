/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-18 22:19:36
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-19 17:36:49
 */
interface LLAPIMutationRecord extends MutationRecord {
    readonly addedNodes: LLAPINodeList;
}

interface LLAPINodeList extends NodeList {
    forEach(
        callbackfn: (value: LLAPINode, key: number, parent: NodeList) => void,
        thisArg?: any
    ): void;
}

interface LLAPINode extends HTMLElement {
    readonly previousSibling: HTMLElement;
}

interface editorMessage {
    /** 类型 */
    type: "text" | "qqFace" | "pic";
    /** 文本内容 */
    content?: string;
    /** 表情ID */
    id?: string;
    /** 标签标签 */
    label?: string;
    /** 表情路径 */
    path?: string;
    /** 图片路径 */
    src?: string;
    /** 图片子类型 */
    picSubType?: number;
};

interface MessageBase {
    /** 消息类型 */
    type: "text" | "face" | "image" | "reply" | "voice" | "ptt" | "raw";
    /** 图片 */
    file?: string;
}
type MessageWithText = MessageBase & { type: "text" } & TextElement;
type MessageWithFace = MessageBase & { type: "face" } & FaceElement;
type message = MessageWithText | MessageWithFace;