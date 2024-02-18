import { LLAPI, message } from "./types/llapi";

async function test(){
    const qq = await LLAPI.getPeer()
    qq.chatType
}
