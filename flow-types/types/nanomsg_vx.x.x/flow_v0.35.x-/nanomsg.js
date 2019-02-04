declare module 'nanomsg' {
        declare export interface Options {
raw?: boolean,
tcpnodelay?: boolean,
linger?: number,
sndbuf?: number,
rcvbuf?: number,
sndtimeo?: number,
rcvtimeo?: number,
reconn?: number,
maxreconn?: number,
sndprio?: number,
rcvprio?: number,
ipv6?: boolean,
rcvmaxsize?: number,
chan?: string[],
wsopt?: "text" | "binary"
} 
	declare export class Socket  {
constructor(type: string, opts: Options): this;
shutdown(addr: string): void;
bind(addr: string): void;
connect(addr: string): void;
close(): void;
send(buf: Buffer | string): number;
on(event: string, cb: (data: Buffer) => void): void
}
	declare export function socket(type: string, opts?: Options): Socket

    }
