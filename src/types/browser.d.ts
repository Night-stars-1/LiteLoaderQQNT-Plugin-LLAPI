/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-18 22:19:36
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-18 23:31:33
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
