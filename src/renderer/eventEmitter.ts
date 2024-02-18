/*
 * @Date: 2024-01-17 16:32:39
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-18 23:02:53
 */
export class EventEmitter {
    events: {};
    constructor() {
        this.events = {};
    }

    on(eventName: string, listener: any) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }
    
    once(eventName: string, listener: any) {
        const onceListener = (...args: any[]) => {
            listener(...args);
            this.off(eventName, onceListener);
        };
        this.on(eventName, onceListener);
    }

    off(eventName: string, listener: any) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter((fn: any) => fn !== listener);
        }
    }

    emit(eventName: string, ...args: any[]) {
        const listeners = this.events[eventName];
        listeners?.forEach((listener: (arg0: any[]) => void) => {
            listener(...args);
        });
    }
}