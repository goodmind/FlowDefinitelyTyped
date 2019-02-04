declare module 'xsockets' {
        declare export class XSockets$WebSocket  {
id: string;
constructor(url: string, subprotocol?: string, settings?: any): this;
on(
event: string,
handler: (data: any) => void,
confirmation?: (arg: XSockets$ConfirmationArgument) => void): void;
one(
event: string,
handler: (data: any) => void,
confirmation?: (arg: XSockets$ConfirmationArgument) => void): void;
many(
event: string,
times: number,
handler: (data: any) => void,
confirmation?: (arg: XSockets$ConfirmationArgument) => void): void;
unbind(event: string): void;
publish(topic: string, data: any): void
}

declare export interface XSockets$ConfirmationArgument {
event: string
} 

declare module 'Events' {
        declare export var close: string;
	declare export var onBlob: string;
	declare export var onError: string;
	declare module 'bindings' {
        declare export var completed: string;
    }

	declare export var open: string;
	declare module 'pubSub' {
        declare export var subscribe: string;
	declare export var unsubscribe: string;
    }

	declare module 'storage' {
        declare export var get: string;
	declare export var getAll: string;
	declare export var remove: string;
	declare export var set: string;
    }

    }

    }
