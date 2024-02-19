// global.d.ts
import { Editor, DataApi } from "@ckeditor/ckeditor5-core";

// 扩展 Document 类型
declare global {
    interface Document {
        querySelector<E extends LLAPIElement = LLAPIElement>(selectors: string): E | null;
    }
}

interface LLAPIElement extends Element {
    readonly ckeditorInstance: ckeditorInstance;
}

interface ckeditorInstance extends DataApi, Editor {
}
