declare module 'axon' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          NetSocket
        } from 'net';

	declare export class Socket mixins EventEmitter {
set(name: string, val: any): Socket;
get(name: string): any;
enable(name: string): Socket;
disable(name: string): Socket;
enabled(name: string): boolean;
disabled(name: string): boolean;
use(plugin: (socket: Socket) => any): Socket;
pack(args: Buffer | Buffer[]): Buffer;
closeSockets(): void;
close(): void;
closeServer(fn: () => any): void;
address(): {
port: number,
family: string,
address: string,
string: string
} | void;
removeSocket(sock: Socket): void;
addSocket(sock: Socket): void;
handleErrors(sock: Socket): void;
onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void;
connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
onconnect(sock: Socket): void;
bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket
}
	declare export class SubSocket mixins Socket {
hasSubscriptions(): boolean;
matches(topic: string): boolean;
onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void;
subscribe(re: RegExp | string): RegExp;
unsubscribe(re: RegExp | string): void;
clearSubscriptions(): void;

/**
 * @throws {Error}
 */
send(): void
}
	declare export class SubEmitterSocket  {
onmessage(): (args: Buffer | Buffer[]) => void;
on(event: string, fn: (...args: any[]) => void): SubEmitterSocket;
off(event: string): SubEmitterSocket;
bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
close(): void
}
	declare export class PubSocket mixins Socket {
send(...args: any[]): PubSocket
}
	declare export class PubEmitterSocket  {
sock: PubSocket;
send(...args: any[]): PubSocket;
bind(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
connect(port: ConnectionPort, host?: string | (() => void), fn?: () => void): Socket;
close(): void
}
	declare export class PushSocket mixins Socket {
send(...args: any[]): void;
enqueue(msg: any): void
}
	declare export class ReqSocket mixins Socket {
id(): string;
onmessage(): (args: Buffer | Buffer[]) => void;
send(...args: any[]): void
}
	declare export class RepSocket mixins Socket {
onmessage(sock: NetSocket): (args: Buffer | Buffer[]) => void
}
	declare export class PullSocket mixins Socket {

/**
 * @throws {Error}
 */
send(): void
}
	declare export type ConnectionPort = number | string | {
protocol?: string,
hostname?: string,
pathname: string,
port: string | number
};
	declare export function socket(type: string, options?: any): Socket

	declare export var types: {
[propName: string]: {
new (
): PubEmitterSocket
| SubEmitterSocket
| PushSocket
| PullSocket
| PubSocket
| SubSocket
| ReqSocket
| RepSocket
| Socket
}
};
    }
