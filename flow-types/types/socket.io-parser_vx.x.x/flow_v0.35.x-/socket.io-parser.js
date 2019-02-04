declare module 'socket.io-parser' {
        declare export interface Packet {
type: number,
data: any,
id: number
} 
	declare export type EncodedPacket = string | Buffer | ArrayBuffer | Blob;
	declare export var types: string[];
	declare export var CONNECT: number;
	declare export var DISCONNECT: number;
	declare export var EVENT: number;
	declare export var ACK: number;
	declare export var ERROR: number;
	declare export var BINARY_EVENT: number;
	declare export var BINARY_ACK: number;
	declare export class Encoder  {
encode(packet: Packet, callback: (encodedPackets: EncodedPacket[]) => void): void
}
	declare export class Decoder  {
on(event: string, callback: (decodedPacket: Packet) => void): void;
add(encodedPacket: EncodedPacket): void;
destroy(): void
}
    }
