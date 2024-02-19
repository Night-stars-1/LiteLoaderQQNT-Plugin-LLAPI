[Documentation](README.md) / Exports

# Documentation

## Table of contents

### Namespaces

- [LLAPI](modules/LLAPI.md)

### Type Aliases

- [Peer](modules.md#peer)
- [message](modules.md#message)

## Type Aliases

### Peer

Ƭ **Peer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chatType` | `number` | 消息类型 1:私聊 2:群聊 |
| `guildId` | `string` | - |
| `peerUid` | `string` | 群聊: 群号 私聊: QQ代号->u_ |
| `uid` | `string` | - |

#### Defined in

llapi.d.ts:21

___

### message

Ƭ **message**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `content?` | `string` | 文本内容 |
| `id?` | `string` | 表情ID |
| `label?` | `string` | 标签标签 |
| `path?` | `string` | 表情路径 |
| `picSubType?` | `number` | 图片子类型 |
| `src?` | `string` | 图片路径 |
| `type` | ``"text"`` \| ``"qqFace"`` \| ``"pic"`` \| `string` | 类型 |

#### Defined in

llapi.d.ts:4
