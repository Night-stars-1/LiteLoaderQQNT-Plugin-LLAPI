[Documentation](../README.md) / [Modules](../modules.md) / [llapi](llapi.md) / LLAPI

# Namespace: LLAPI

[llapi](llapi.md).LLAPI

## Table of contents

### Functions

- [Ptt2Text](llapi.LLAPI.md#ptt2text)
- [addLike](llapi.LLAPI.md#addlike)
- [add\_editor](llapi.LLAPI.md#add_editor)
- [add\_qGuildMenu](llapi.LLAPI.md#add_qguildmenu)
- [add\_qmenu](llapi.LLAPI.md#add_qmenu)
- [del\_editor](llapi.LLAPI.md#del_editor)
- [forwardMessage](llapi.LLAPI.md#forwardmessage)
- [getAccountInfo](llapi.LLAPI.md#getaccountinfo)
- [getFriendsList](llapi.LLAPI.md#getfriendslist)
- [getGroupMemberList](llapi.LLAPI.md#getgroupmemberlist)
- [getGroupsList](llapi.LLAPI.md#getgroupslist)
- [getPeer](llapi.LLAPI.md#getpeer)
- [getPreviousMessages](llapi.LLAPI.md#getpreviousmessages)
- [getUserInfo](llapi.LLAPI.md#getuserinfo)
- [get\_editor](llapi.LLAPI.md#get_editor)
- [on](llapi.LLAPI.md#on)
- [recallMessage](llapi.LLAPI.md#recallmessage)
- [resetLoginInfo](llapi.LLAPI.md#resetlogininfo)
- [sendMessage](llapi.LLAPI.md#sendmessage)
- [set\_editor](llapi.LLAPI.md#set_editor)

## Functions

### Ptt2Text

▸ **Ptt2Text**(`msgId`, `peer`, `elements`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgId` | `string` | 消息ID |
| `peer` | [`Peer`](../interfaces/element.Peer.md) | 对象的Peer |
| `elements` | [`TextElement`](../interfaces/element.TextElement.md) |  |

#### Returns

`Promise`\<`string`\>

**`Description`**

语音转文字(实验性)

#### Defined in

src/types/llapi.d.ts:162

___

### addLike

▸ **addLike**(`uid`, `count?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `uid` | `string` | `undefined` | qq代号 |
| `count` | `number` | `1` | 点赞次数，默认一次 |

#### Returns

`Promise`\<`void`\>

**`Description`**

发送好友赞

#### Defined in

src/types/llapi.d.ts:179

___

### add\_editor

▸ **add_editor**(`message`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `editorMessage` |

#### Returns

`boolean`

**`Description`**

添加消息编辑栏的内容(实验性)

**`Example`**

```ts
LLAPI.add_editor(message)
message:
{
     type: "text",
     content: "一条消息"
}
{
     type: "qqFace",
     id: "344",
     label: "[大怨种]",
     path: "appimg://H:/QQ/nt_qq/global/nt_data/Emoji/emoji-resource/sysface_res/apng/s344.png"
}
{
     type: "pic",
     src: PATH,
     picSubType: 0,
}
```

#### Defined in

src/types/llapi.d.ts:50

___

### add\_qGuildMenu

▸ **add_qGuildMenu**(`...func`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...func` | `any`[] | 函数添加逻辑 |

#### Returns

`void`

**`Description`**

添加频道消息右键菜单项目

**`Example`**

```ts
function abc(qContextMenu) {
    qContextMenu.insertAdjacentHTML('beforeend', separatorHTML)
    qContextMenu.insertAdjacentHTML('beforeend', repeatmsgHTML)
}
add_qGuildMenu(abc)
```

#### Defined in

src/types/llapi.d.ts:87

___

### add\_qmenu

▸ **add_qmenu**(`...func`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...func` | `any`[] | 函数添加逻辑 |

#### Returns

`void`

**`Description`**

添加消息右键菜单项目

**`Example`**

```ts
function abc(qContextMenu) {
    qContextMenu.insertAdjacentHTML('beforeend', separatorHTML)
    qContextMenu.insertAdjacentHTML('beforeend', repeatmsgHTML)
}
add_qmenu(abc)
```

#### Defined in

src/types/llapi.d.ts:76

___

### del\_editor

▸ **del_editor**(`type`, `space?`): `boolean`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | 消息类型 |
| `space` | `boolean` | `false` | 是否删除空格 |

#### Returns

`boolean`

**`Description`**

删除消息编辑栏的指定类型内容(实验性)

#### Defined in

src/types/llapi.d.ts:61

___

### forwardMessage

▸ **forwardMessage**(`srcpeer`, `dstpeer`, `msgIds`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `srcpeer` | [`Peer`](../interfaces/element.Peer.md) | 消息来源的Peer |
| `dstpeer` | [`Peer`](../interfaces/element.Peer.md) | 转发对象的Peer |
| `msgIds` | `string`[] | 消息ID的列表 |

#### Returns

`any`

**`Description`**

转发消息

#### Defined in

src/types/llapi.d.ts:138

___

### getAccountInfo

▸ **getAccountInfo**(): `Promise`\<\{ `uid`: `number` ; `uin`: `number`  }\>

#### Returns

`Promise`\<\{ `uid`: `number` ; `uin`: `number`  }\>

用户信息

**`Description`**

获取当前用户信息

#### Defined in

src/types/llapi.d.ts:92

___

### getFriendsList

▸ **getFriendsList**(`forced?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `forced` | `boolean` | `false` | 是否强制更新 |

#### Returns

`Promise`\<`any`[]\>

**`Description`**

获取好友列表

#### Defined in

src/types/llapi.d.ts:143

___

### getGroupMemberList

▸ **getGroupMemberList**(`groupId`, `num?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `groupId` | `string` | `undefined` | 群聊ID |
| `num` | `number` | `30` | 数量 |

#### Returns

`Promise`\<`any`[]\>

**`Description`**

获取群聊成员ID

#### Defined in

src/types/llapi.d.ts:168

___

### getGroupsList

▸ **getGroupsList**(`forced?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `forced` | `boolean` | `false` | 是否强制更新 |

#### Returns

`Promise`\<`any`[]\>

**`Description`**

获取群组列表

#### Defined in

src/types/llapi.d.ts:148

___

### getPeer

▸ **getPeer**(): `Promise`\<[`Peer`](../interfaces/element.Peer.md)\>

#### Returns

`Promise`\<[`Peer`](../interfaces/element.Peer.md)\>

Peer

**`Description`**

获取当前聊天窗口的Peer

#### Defined in

src/types/llapi.d.ts:113

___

### getPreviousMessages

▸ **getPreviousMessages**(`peer`, `count?`, `startMsgId?`): `Promise`\<[`Element`](../interfaces/element.Element.md)[]\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `peer` | [`Peer`](../interfaces/element.Peer.md) | `undefined` | 对象的Peer |
| `count` | `number` | `20` | - |
| `startMsgId` | `string` | `"0"` | 起始消息ID |

#### Returns

`Promise`\<[`Element`](../interfaces/element.Element.md)[]\>

消息列表

**`Description`**

获取历史聊天记录

#### Defined in

src/types/llapi.d.ts:155

___

### getUserInfo

▸ **getUserInfo**(`uid`): `Promise`\<\{ `age`: `number` ; `nickName`: `string`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `string` \| `number` | QQ代号 |

#### Returns

`Promise`\<\{ `age`: `number` ; `nickName`: `string`  }\>

用户信息

**`Description`**

获取当前用户的详细信息

#### Defined in

src/types/llapi.d.ts:103

___

### get\_editor

▸ **get_editor**(): `string`

#### Returns

`string`

**`Description`**

获取消息编辑栏的内容

#### Defined in

src/types/llapi.d.ts:65

___

### on

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"new-messages"`` \| ``"dom-up-messages"`` | 事件名 |
| `listener` | (...`args`: `any`[]) => `void` | 事件回调 |

#### Returns

`void`

**`Description`**

事件监听器

**`Tips`**

new-messages 新消息事件

**`Tips`**

dom-up-messages 页面消息更新

#### Defined in

src/types/llapi.d.ts:10

▸ **on**(`event`, `listener`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"context-msg-menu"`` | 事件名 |
| `listener` | (`event`: `string`, `target`: `HTMLElement`, `msgIds`: `string`) => `void` | 事件回调 |

#### Returns

`void`

**`Description`**

监听QQ消息菜单打开事件

**`Tips`**

该事件可以使用qContextMenu

**`Example`**

```ts
LLAPI.on("context-msg-menu", (event, target, msgIds) => {
   console.log(event, target, msgIds);
});
```

#### Defined in

src/types/llapi.d.ts:24

___

### recallMessage

▸ **recallMessage**(`peer`, `msgIds`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `peer` | [`Peer`](../interfaces/element.Peer.md) | 对方的Peer |
| `msgIds` | `string`[] | 消息ID的列表 |

#### Returns

`any`

**`Description`**

撤回消息

#### Defined in

src/types/llapi.d.ts:131

___

### resetLoginInfo

▸ **resetLoginInfo**(`uin`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uin` | `string` | QQ号 |

#### Returns

`Promise`\<`void`\>

**`Description`**

重置登录信息

#### Defined in

src/types/llapi.d.ts:173

___

### sendMessage

▸ **sendMessage**(`peer`, `elements`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `peer` | [`Peer`](../interfaces/element.Peer.md) | 对方的ID |
| `elements` | `message`[] | 消息元素 |

#### Returns

`Promise`\<`boolean`\>

是否发送成功

**`Description`**

发送消息

**`Example`**

```ts
elements = [{
   type: "text",
   content: "一条消息"
   }]
```

#### Defined in

src/types/llapi.d.ts:125

___

### set\_editor

▸ **set_editor**(`message`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 消息内容 |

#### Returns

`boolean`

**`Description`**

设置消息编辑栏的内容

#### Defined in

src/types/llapi.d.ts:55
