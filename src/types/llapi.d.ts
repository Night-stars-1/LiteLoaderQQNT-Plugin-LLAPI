
declare namespace LLAPI {
    /**
     * @description 事件监听器
     * @param event 事件名
     * @param listener 事件回调
     * @tips new-messages 新消息事件
     * @tips dom-up-messages 页面消息更新
     */
    function on(
        event: "new-messages" | "dom-up-messages",
        listener: (...args: any[]) => void
    ): void;
    /**
     * @description 监听QQ消息菜单打开事件
     * @tips 该事件可以使用qContextMenu
     * @param event 事件名
     * @param listener 事件回调
     * @example
     * LLAPI.on("context-msg-menu", (event, target, msgIds) => {
     *    console.log(event, target, msgIds);
     * });
     */
    function on(
        event: "context-msg-menu",
        listener: (event: string, target: HTMLElement, msgIds: string) => void
    ): void;
    /**
     * @description 添加消息编辑栏的内容(实验性)
     * @param 消息内容
     * @example
     * LLAPI.add_editor(message)
     * message:
     * {
     *      type: "text",
     *      content: "一条消息"
     * }
     * {
     *      type: "qqFace",
     *      id: "344",
     *      label: "[大怨种]",
     *      path: "appimg://H:/QQ/nt_qq/global/nt_data/Emoji/emoji-resource/sysface_res/apng/s344.png"
     * }
     * {
     *      type: "pic",
     *      src: PATH,
     *      picSubType: 0,
     * }
     */
    function add_editor(message: editorMessage): boolean;
    /**
     * @description 设置消息编辑栏的内容
     * @param message 消息内容
     */
    function set_editor(message: string): boolean;
    /**
     * @description 删除消息编辑栏的指定类型内容(实验性)
     * @param type 消息类型
     * @param space 是否删除空格
     */
    function del_editor(type: string, space = false): boolean;
    /**
     * @description 获取消息编辑栏的内容
     */
    function get_editor(): string;
    /**
     * @description 添加消息右键菜单项目
     * @param func 函数添加逻辑
     * @example
     * function abc(qContextMenu) {
     *     qContextMenu.insertAdjacentHTML('beforeend', separatorHTML)
     *     qContextMenu.insertAdjacentHTML('beforeend', repeatmsgHTML)
     * }
     * add_qmenu(abc)
     */
    function add_qmenu(...func): void;
    /**
     * @description 添加频道消息右键菜单项目
     * @param func 函数添加逻辑
     * @example
     * function abc(qContextMenu) {
     *     qContextMenu.insertAdjacentHTML('beforeend', separatorHTML)
     *     qContextMenu.insertAdjacentHTML('beforeend', repeatmsgHTML)
     * }
     * add_qGuildMenu(abc)
     */
    function add_qGuildMenu(...func): void;
    /**
     * @description 获取当前用户信息
     * @returns 用户信息
     */
    async function getAccountInfo(): Promise<{
        /** 用户ID */
        uid: number;
        /** 用户QQ号 */
        uin: number;
    }>;
    /**
     * @description 获取当前用户的详细信息
     * @param uid QQ代号
     * @returns 用户信息
     */
    async function getUserInfo(uid: string | number): Promise<{
        /** 名称 */
        nickName: string;
        /** 年龄 */
        age: number;
    }>;
    /**
     * @description 获取当前聊天窗口的Peer
     * @returns Peer
     */
    async function getPeer(): Promise<Peer>;
    /**
     * @description 发送消息
     * @param peer 对方的ID
     * @param elements 消息元素
     * @returns 是否发送成功
     * @example
     * elements = [{
     *    type: "text",
     *    content: "一条消息"
        }]
     */
    async function sendMessage(peer: Peer, elements: message[]): Promise<boolean>;
    /**
     * @description 撤回消息
     * @param peer 对方的Peer
     * @param msgIds 消息ID的列表
     */
    async function recallMessage(peer: Peer, msgIds: string[]);
    /**
     * @description 转发消息
     * @param srcpeer 消息来源的Peer
     * @param dstpeer 转发对象的Peer
     * @param msgIds 消息ID的列表
     */
    async function forwardMessage(srcpeer: Peer, dstpeer: Peer, msgIds: string[]);
    /**
     * @description 获取好友列表
     * @param forced 是否强制更新
     */
    async function getFriendsList(forced = false): Promise<any[]>;
    /**
     * @description 获取群组列表
     * @param forced 是否强制更新
     */
    async function getGroupsList(forced = false): Promise<any[]>;
    /**
     * @description 获取历史聊天记录
     * @param peer 对象的Peer
     * @param startMsgId 起始消息ID
     * @returns 消息列表
     */
    async function getPreviousMessages(peer: Peer, count = 20, startMsgId = "0"): Promise<Element[]>;
    /**
     * @description 语音转文字(实验性)
     * @param msgId 消息ID
     * @param peer 对象的Peer
     * @param elements
     */
    async function Ptt2Text(msgId: string, peer: Peer, elements: TextElement): Promise<string>;
    /**
     * @description 获取群聊成员ID
     * @param groupId 群聊ID
     * @param num 数量
     */
    async function getGroupMemberList(groupId: string, num=30): Promise<any[]>;
    /**
     * @description 重置登录信息
     * @param uin QQ号
     */
    async function resetLoginInfo(uin: string): Promise<void>;
    /**
     * @description 发送好友赞
     * @param uid qq代号
     * @param count 点赞次数，默认一次
     */
    async function addLike(uid: string, count=1): Promise<void>;
}
