/*
 * @Date: 2024-01-17 16:33:45
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-18 22:50:27
 */
class Destructor {
    destructTextElement(element: TextElement) {
        return {
            elementType: 1,
            elementId: "",
            textElement: {
                content: element.content,
                atType: element.atType || 0,
                atUid: element.atUid || "",
                atTinyId: "",
                atNtUid: element.atNtUid,
            },
        };
    }

    destructXmlElement(element: XMLElement) {
        return {
            elementType: 8,
            elementId: "",
            grayTipElement: {
                subElementType: 12,
                extBufForUI: "0x",
                xmlElement: {
                    busiType: "1",
                    busiId: "10145",
                    c2cType: 0,
                    serviceType: 0,
                    ctrlFlag: 7,
                    content:
                        '<gtip align="center"><qq uin="u_4B8ETD3ySVv--pNnQAupOA" col="3" jp="1042633805" /><nor txt="邀请"/><qq uin="u_iDVsVV8gskSMTB51hSDGVg" col="3" jp="1754196821" /> <nor txt="加入了群聊。"/> </gtip>',
                    templId: "10179",
                    seqId: "1313801018",
                    templParam: {},
                    pbReserv: "0x",
                    members: {},
                },
            },
        };
    }

    destructImageElement(_, picElement: any) {
        return {
            elementType: 2,
            elementId: "",
            picElement: picElement,
        };
    }

    destructPttElement(_, pttElement: any) {
        return {
            elementType: 4,
            elementId: "",
            pttElement,
        };
    }
    destructReplyElement(element: any) {
        return {
            elementType: 7,
            elementId: "",
            replyElement: {
                replayMsgSeq: element.msgSeq, // raw.msgSeq
                replayMsgId: element.msgId, // raw.msgId
                senderUin: element.senderUin,
                senderUinStr: element.senderUinStr,
            },
        };
    }

    destructFaceElement(element: FaceElement) {
        return {
            elementType: 6,
            elementId: "",
            faceElement: {
                faceIndex: element.faceIndex,
                faceType:
                    element.faceType == "normal"
                        ? 1
                        : element.faceType == "normal-extended"
                        ? 2
                        : element.faceType == "super"
                        ? 3
                        : element.faceType,
                ...((element.faceType == "super" || element.faceType == 3) && {
                    packId: "1",
                    faceText: element.faceText.toString(),
                    stickerId: (element.stickerId || "0").toString(),
                    imageType: 1,
                    stickerType: element.stickerType || 1,
                    sourceType: 1,
                    resultId: "",
                    superisedId: "",
                    randomType: 1,
                }),
            },
        };
    }

    destructRawElement(element: any) {
        return element.raw;
    }

    destructPeer(peer: Peer) {
        const chatTypeMap = {
            friend: 1,
            group: 2,
            temp: 100, // 临时私聊消息
        };
        return {
            chatType: chatTypeMap[peer.chatType] || peer.chatType,
            peerUid: peer.uid,
            guildId: "",
        } as Peer;
    }
}

const destructor = new Destructor();

export { destructor };
