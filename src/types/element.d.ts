interface Message {
    /**
     * 消息id
     */
    msgId: string;
    msgRandom: string;
    msgSeq: string;
    cntSeq: string;
    chatType: number;
    msgType: number;
    subMsgType: number;
    sendType: number;
    senderUid: string;
    peerUid: string;
    channelId: string;
    guildId: string;
    guildCode: string;
    fromUid: string;
    fromAppid: string;
    msgTime: string;
    msgMeta: string;
    sendStatus: number;
    sendMemberName: string;
    sendNickName: string;
    guildName: string;
    channelName: string;
    elements: Element[];
    records: any[];
    emojiLikesList: any[];
    commentCnt: string;
    directMsgFlag: number;
    directMsgMembers: any[];
    peerName: string;
    editable: boolean;
    avatarMeta: string;
    avatarPendant: string;
    feedId: string;
    roleId: string;
    timeStamp: string;
    isImportMsg: boolean;
    atType: number;
    roleType: number;
    fromChannelRoleInfo: RoleInfo;
    fromGuildRoleInfo: RoleInfo;
    levelRoleInfo: RoleInfo;
    recallTime: string;
    isOnlineMsg: boolean;
    generalFlags: string;
    clientSeq: string;
    nameType: number;
    avatarFlag: number;
    /** 发送者QQ号 */
    senderUin: string;
    /** 发送群号 */
    peerUin: string;
}

interface Element {
    elementType: number;
    elementId: string;
    extBufForUI: string;
    picElement?: PicElement;
    textElement?: TextElement;
    arkElement?: unknown;
    avRecordElement?: unknown;
    calendarElement?: unknown;
    faceElement?: FaceElement;
    fileElement?: unknown;
    giphyElement?: unknown;
    grayTipElement?: {
        xmlElement: XMLElement;
        aioOpGrayTipElement: unknown;
        blockGrayTipElement: unknown;
        buddyElement: unknown;
        buddyNotifyElement: unknown;
        emojiReplyElement: unknown;
        essenceElement: unknown;
        feedMsgElement: unknown;
        fileReceiptElement: unknown;
        groupElement: unknown;
        groupNotifyElement: unknown;
        jsonGrayTipElement: unknown;
        localGrayTipElement: unknown;
        proclamationElement: unknown;
        revokeElement: unknown;
        subElementType: unknown;
    };
    inlineKeyboardElement?: unknown;
    liveGiftElement?: unknown;
    markdownElement?: unknown;
    marketFaceElement?: unknown;
    multiForwardMsgElement?: unknown;
    pttElement?: unknown;
    replyElement?: unknown;
    structLongMsgElement?: unknown;
    textGiftElement?: unknown;
    videoElement?: unknown;
    walletElement?: unknown;
    yoloGameResultElement?: unknown;
}

interface XMLElement {
    busiType: string;
    busiId: string;
    c2cType: number;
    serviceType: number;
    ctrlFlag: number;
    content: string;
    templId: string;
    seqId: string;
    templParam: any;
    pbReserv: string;
    members: any;
}

interface PicElement {
    picSubType: number;
    fileName: string;
    fileSize: string;
    picWidth: number;
    picHeight: number;
    original: boolean;
    md5HexStr: string;
    /**
     * 图片位置
     */
    sourcePath: string;
    thumbPath: ThumbPath;
    transferStatus: number;
    progress: number;
    picType: number;
    invalidState: number;
    fileUuid: string;
    fileSubId: string;
    thumbFileSize: number;
    summary: string;
    emojiAd: EmojiAd;
    emojiMall: EmojiMall;
    emojiZplan: EmojiZplan;
}

interface EmojiAd {
    url: string;
    desc: string;
}

interface EmojiMall {
    packageId: number;
    emojiId: number;
}

interface EmojiZplan {
    actionId: number;
    actionName: string;
    actionType: number;
    playerNumber: number;
    peerUid: string;
    bytesReserveInfo: string;
}

interface ThumbPath {
}

interface TextElement {
    /**
     * 消息内容
     */
    content: string;
    atType: number;
    atUid: string;
    atTinyId: string;
    atNtUid: string;
    subElementType: number;
    atChannelId: string;
    atRoleId: string;
    atRoleColor: number;
    atRoleName: string;
    needNotify: number;
}

interface FaceElement {
    /**
     * 表情ID
     */
    faceIndex: number;
    faceText: string;
    faceType: number | string;
    packId: null;
    stickerId: null;
    sourceType: null;
    stickerType: null;
    resultId: null;
    surpriseId: null;
    randomType: null;
    imageType: null;
    pokeType: null;
    spokeSummary: null;
    doubleHit: null;
    vaspokeId: null;
    vaspokeName: null;
    vaspokeMinver: null;
    pokeStrength: null;
    msgType: null;
    faceBubbleCount: null;
    pokeFlag: null;
}

interface RoleInfo {
    roleId: string;
    name: string;
    color: number;
}

interface Peer {
    /** 消息类型 2:群聊 1:私聊 */
    chatType: number;
    /**
     * 群聊: 群号
     *
     * 私聊: QQ代号->u_
     */
    peerUid: string;
    guildId: string;
    uid: string;
}

interface User {
    uid: string;
    qid: string;
    uin: string;
    avatarUrl: string;
    nick: string;
    longNick: string;
    sex: string | number;
}

interface Group {
    groupCode: string;
    avatarUrl: string;
    groupName: string;
    memberRole: string | number;
    maxMember: string;
    memberCount: string;
}
