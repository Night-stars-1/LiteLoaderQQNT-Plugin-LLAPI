<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-19 13:57:11
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-01-20 17:00:39
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
# LLAPI用法
:::warning 注意
**实验性**和**未完成**的API可能会发生变动导致不可用
:::
## __func__ `LLAPI.on("new-messages", callback)`

- **说明**

    监听新消息

- **参数**

    - callback: 实例函数

- **返回**

    - message(MessageElement): 消息elements对象

- **用法**

    ```js
    LLAPI.on("new-messages", (message) => {
        console.log(message);
    })
    ```

## __func__ `LLAPI.on("dom-up-messages", callback)`

- **说明**

    监听聊天界面消息更新

- **参数**

    - callback: 实例函数

- **返回**

    - node: 消息node对象

- **用法**

    ```js
    LLAPI.on("dom-up-messages", (node) => {
        console.log(node);
    })
    ```

## __func__ `LLAPI.on("context-msg-menu", callback)`

- **说明**

    监听QQ消息菜单打开事件

- **参数**

    - callback: 实例函数

- **返回**

    - event: 右键事件
    - target: 右键位置的消息document
    - msgIds: 消息ID

- **用法**

    ```js
    LLAPI.on("context-msg-menu", (event, target, msgIds) => {
        console.log(event, target, msgIds);
    })
    ```

## __func__ `LLAPI.add_editor(message)`

- **说明**

    添加消息编辑栏的内容(未完成)

- **参数**

    - message: 

- **返回**

    - 

- **用法**

    ```js
    ...
    ```

## __func__ `LLAPI.set_editor(message)`

- **说明**

    设置消息编辑栏的内容

- **参数**

    - message(string|HTMLElement): 消息内容

- **返回**

    - (bool): 是否执行成功

- **用法**

    ```js
    LLAPI.add_editor("123")
    ```

## __func__ `LLAPI.del_editor(type, space=false)`

- **说明**

    删除消息编辑栏的指定类型内容(实验性)

- **参数**

    - type(string): 消息类型
    - space(boolean): 是否删除空格

- **返回**

    - (bool): 是否执行成功

- **用法**

    ```js
    LLAPI.del_editor("msg-at", true)
    ```
    
## __func__ `LLAPI.add_message_list(peer, message)`

- **说明**

    添加聊天消息(不保存)(未完成)

- **参数**

    - peer(Peer): 用户ID对象
    - message(string|HTMLElement): 消息内容

- **返回**

    - (bool): 是否执行成功

- **用法**

    ```js
    ...
    ```

## __func__ `LLAPI.add_qmenu(callback)`

- **说明**

    添加聊天消息(不保存)(未完成)

- **参数**

    - callback(func): 菜单添加函数

- **返回**

    - qContextMenu(element): 菜单节点

- **用法**

    ```js
    function addqmenu(qContextMenu) {
        qContextMenu.insertAdjacentHTML('beforeend', separatorHTML)
        qContextMenu.insertAdjacentHTML('beforeend', repeatmsgHTML)
    }
    LLAPI.add_qmenu(addqmenu)
    ```

## __func__ `LLAPI.getAccountInfo()`

- **说明**

    获取当前用户信息

- **参数**

    - uid(number): QQ号

- **返回**

    - AccountInfo:
        - uid(number): uid
        - uin(number): uin

- **用法**

    ```js
    await LLAPI.getAccountInfo()
    ```

## __func__ `LLAPI.getUserInfo(uid)`

- **说明**

    获取当前用户的详细信息

- **参数**

    empty

- **返回**

    - UserInfo:
        - nickName(number): 名称
        - age(number): 年龄
        - ...

- **用法**

    ```js
    await LLAPI.getUserInfo(114514)
    ```

## __func__ `LLAPI.getPeer()`

- **说明**

    获取当前聊天窗口的Peer

- **参数**

    empty

- **返回**

    - peer(Peer): 用户ID信息

- **用法**

    ```js
    await LLAPI.getPeer()
    ```

## __func__ `LLAPI.sendMessage(peer, elements)`

- **说明**

    发送消息

- **参数**

    - peer(Peer): 用户ID对象
    - message(MessageElement): 消息内容

- **返回**

    empty

- **用法**

    ```js
    const elements = [
        {
            type: "text",
            content: "一条消息"
        },
        {
            type: "image",
            file: "FILE_PATH"
        },
    ]
    await LLAPI.sendMessage(peer, elements)
    ```

## __func__ `LLAPI.forwardMessage(srcpeer, dstpeer, msgIds)`

- **说明**

    转发消息

- **参数**

    - srcpeer(Peer): 消息发送对象ID
    - dstpeer(Peer): 转发对象ID
    - msgIds(list): 消息ID的列表

- **返回**

    empty

- **用法**

    ```js
    const peer = LLAPI.getPeer()
    await LLAPI.sendMessage(peer, peer, [msgId])
    ```

## __func__ `LLAPI.getFriendsList(forced)`

- **说明**

    获取好友列表

- **参数**

    - forced(bool): 是否强制更新

- **返回**

    - (list): 好友列表

- **用法**

    ```js
    await LLAPI.getFriendsList(true)
    ```

## __func__ `LLAPI.getGroupsList(forced)`

- **说明**

    获取群组列表

- **参数**

    - forced(bool): 是否强制更新

- **返回**

    - (list): 群组列表

- **用法**

    ```js
    await LLAPI.getGroupsList(true)
    ```

## __func__ `LLAPI.getPreviousMessages(peer, count = 20, startMsgId = "0")`

- **说明**

    获取历史聊天记录

- **参数**

    - peer(number): 是否强制更新
    - count(number): 数量
    - startMsgId(string): 起始消息ID

- **返回**

    - (MessageElement): 消息列表

- **用法**

    ```js
    const peer = await LLAPI.getPeer()
    await LLAPI.getPreviousMessages(peer, 20, "0")
    ```
    