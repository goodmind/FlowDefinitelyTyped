declare module 'simple-peer' {
        import typeof * as stream from 'stream';

	declare var SimplePeer$SimplePeer: SimplePeer$SimplePeer.SimplePeer$SimplePeer;
	declare interface SimplePeer$Options {
initiator?: boolean,
channelConfig?: {},
channelName?: string,
config?: {},
constraints?: {},
offerConstraints?: {},
answerConstraints?: {},
reconnectTimer?: boolean | number,
sdpTransform<T: any>(sdp: T): T,
stream?: MediaStream,
trickle?: boolean,
wrtc?: {},
objectMode?: boolean
} 

declare interface SimplePeer$SimplePeer {
new (opts?: SimplePeer$Options): SimplePeer$Instance,
(opts?: SimplePeer$Options): SimplePeer$Instance,
+WEBRTC_SUPPORT: boolean
} 

declare type SimplePeer$TypedArray = Int8Array
| Uint8Array
| Uint8ClampedArray
| Int16Array
| Uint16Array
| Int32Array
| Uint32Array
| Float32Array
| Float64Array;

declare type SimplePeer$SimplePeerData = string
| Buffer
| SimplePeer$TypedArray
| ArrayBuffer
| Blob;

declare interface SimplePeer$SignalData {
sdp?: any,
candidate?: any
} 

declare type SimplePeer$Instance = {
signal(data: string | SimplePeer$SignalData): void,
send(data: SimplePeer$SimplePeerData): void,
destroy(error?: Error): void,
+bufferSize: number,
address(): {
port: string,
family: string,
address: string
},
_debug(message?: any, ...optionalParams: any[]): void
} & stream.Duplex

	declare module.exports: typeof SimplePeer$SimplePeer

    }
