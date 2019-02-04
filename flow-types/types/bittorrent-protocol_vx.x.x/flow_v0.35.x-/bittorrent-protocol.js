declare module 'bittorrent-protocol' {
        import typeof * as stream from 'stream';

	declare var BittorrentProtocol$BittorrentProtocol: BittorrentProtocol$BittorrentProtocol.BittorrentProtocol$BittorrentProtocol;
	declare interface BittorrentProtocol$BittorrentProtocol {
new (): BittorrentProtocol$Wire,
(): BittorrentProtocol$Wire
} 

declare interface BittorrentProtocol$ExtensionConstructor {
new (wire: BittorrentProtocol$Wire): BittorrentProtocol$Extension
} 

declare interface BittorrentProtocol$Extension {
onHandshake(
infoHash: string,
peerId: string,
extensions: {
[name: string]: boolean
}): void,
onExtendedHandshake(handshake: {
[key: string]: any
}): void,
onMessage(buf: Buffer): void,
name: string
} 

declare interface BittorrentProtocol$Request {
piece: number,
offset: number,
length: number,
callback(): void
} 

declare type BittorrentProtocol$Wire = {
+peerId: string,
+peerIdBuffer: Buffer,
+type: "webrtc" | "tcpIncoming" | "tcpOutgoing" | "webSeed",
+amChoking: boolean,
+amInterested: boolean,
+peerChoking: boolean,
+peerInterested: boolean,
+requests: BittorrentProtocol$Request[],
+peerRequests: BittorrentProtocol$Request[],
+extendedMapping: {
[key: number]: string
},
+peerExtendedMapping: {
[key: string]: number
},
setKeepAlive(enable: boolean): void,
setTimeot(ms: number, unref?: boolean): void,
destroy(): void,
use(ext: BittorrentProtocol$ExtensionConstructor): void,
handshake(infoHash: string | Buffer, peerId: string | Buffer, extensions?: any): void,
choke(): void,
unchoke(): void,
interested(): void,
uninterested(): void,
have(index: number): void,
bitfield(bitfield: Buffer | any): void,
request<T: any>(
index: number,
offset: number,
length: number,
cb?: (err: Error) => T): T | void,
piece(index: number, offset: number, buffer: Buffer): void,
cancel(index: number, offset: number, length: number): void,
port(port: number): void,
extend(ext: number | string, obj: any): void,
on(event: "bitfield", listener: (bitfield: any) => void): this,
on(
event: "keep-alive"
| "choke"
| "unchoke"
| "interested"
| "uninterested"
| "timeout",
listener: () => void): this,
on(
event: "upload" | "have" | "download" | "port",
listener: (length: number) => void): this,
on(
event: "handshake",
listener: (
infoHash: string,
peerId: string,
extensions: BittorrentProtocol$Extension[]) => void): this,
on(
event: "request",
listener: (index: number, offset: number, length: number, respond: () => void) => void): this,
on(
event: "piece",
listener: (index: number, offset: number, buffer: Buffer) => void): this,
on(
event: "cancel",
listener: (index: number, offset: number, length: number) => void): this,
on(
event: "extended",
listener: (ext: "handshake" | string, buf: any) => void): void,
on(event: "unknownmessage", listener: (buffer: Buffer) => void): this,
on(event: string, listener: (...args: any[]) => void): this
} & stream.Duplex

	declare module.exports: typeof BittorrentProtocol$BittorrentProtocol

    }
