declare module 'freedom' {
        declare interface freedom$EventDispatchFn<T> {
(eventType: string, value?: T): void
} 

declare interface freedom$EventHandlerFn<T> {
(eventType: string, handler: (eventData: T) => void): void
} 

declare interface freedom$Error {
errcode: string,
message: string
} 

declare interface freedom$OnAndEmit<T, T2> {
on: freedom$EventHandlerFn<T>,
emit: freedom$EventDispatchFn<T2>
} 

declare interface freedom$EventHandler {
on(t: string, f: Function): void,
once(t: string, f: Function): void,
off(t: string, f: Function): void
} 

declare type freedom$PortModule<T, T2> = {
controlChannel: string
} & freedom$OnAndEmit<T, T2>


declare interface freedom$ModuleSelfConstructor {
provideSynchronous: (classFn?: Function) => void,
provideAsynchronous: (classFn?: Function) => void,
providePromises: (classFn?: Function) => void
} 

declare type freedom$ParentModuleThing = {} & freedom$ModuleSelfConstructor & freedom$OnAndEmit<any, any>


declare interface freedom$Logger {
debug(...args: any[]): void,
info(...args: any[]): void,
log(...args: any[]): void,
warn(...args: any[]): void,
error(...args: any[]): void
} 

declare interface freedom$Core {
createChannel(): Promise<freedom$ChannelSpecifier>,
bindChannel(channelIdentifier: string): Promise<freedom$Channel>,
getId(): Promise<string[]>,
getLogger(tag: string): Promise<freedom$Logger>
} 

declare type freedom$Channel = {
close(): void
} & freedom$OnAndEmit<any, any>


declare interface freedom$ChannelSpecifier {
channel: freedom$Channel,
identifier: string
} 

declare interface freedom$CoreProviderParentApp {
manifestId: string,
config: {
views: {
[viewName: string]: Object
}
},
global: {
removeEventListener: (s: string, f: Function, b: boolean) => void
}
} 

declare interface freedom$FreedomModuleFactoryManager<T> {
(...args: any[]): T,
close: (freedomModuleStubInstance?: T) => Promise<void>,
api: string
} 

declare interface freedom$FreedomInCoreEnvOptions {
debug?: string,
logger?: string
} 

declare type freedom$FreedomInCoreEnv = {
(manifestPath: string, options?: freedom$FreedomInCoreEnvOptions): Promise<freedom$FreedomModuleFactoryManager<any>>
} & freedom$OnAndEmit<any, any>


declare interface freedom$FreedomInModuleEnv {
(): freedom$ParentModuleThing,
"core": freedom$FreedomModuleFactoryManager<freedom$Core>,
"core.console": freedom$FreedomModuleFactoryManager<freedom$Console.freedom$Console>,
"core.rtcdatachannel": freedom$FreedomModuleFactoryManager<freedom$RTCDataChannel.freedom$RTCDataChannel>,
"core.rtcpeerconnection": freedom$FreedomModuleFactoryManager<freedom$RTCPeerConnection.freedom$RTCPeerConnection>,
"core.storage": freedom$FreedomModuleFactoryManager<freedom$Storage.freedom$Storage>,
"core.tcpsocket": freedom$FreedomModuleFactoryManager<freedom$TcpSocket.UdpSocket$Socket>,
"core.udpsocket": freedom$FreedomModuleFactoryManager<freedom$UdpSocket.UdpSocket$Socket>,
"pgp": freedom$FreedomModuleFactoryManager<freedom$PgpProvider.freedom$PgpProvider>,
"portControl": freedom$FreedomModuleFactoryManager<freedom$PortControl.freedom$PortControl>,
[moduleName: string]: freedom$FreedomModuleFactoryManager<any>
} 

declare interface freedom$Method0<R> {
(): Promise<R>,
reckless: () => void
} 

declare interface freedom$Method1<T, R> {
(a: T): Promise<R>,
reckless: (a: T) => void
} 

declare interface freedom$Method2<T, U, R> {
(a: T, b: U): Promise<R>,
reckless: (a: T, b: U) => void
} 

declare interface freedom$Method3<T, U, V, R> {
(a: T, b: U, c: V): Promise<R>,
reckless: (a: T, b: U, c: V) => void
} 

declare interface Console$Console {
log(source: string, message: string): Promise<void>,
debug(source: string, message: string): Promise<void>,
info(source: string, message: string): Promise<void>,
warn(source: string, message: string): Promise<void>,
error(source: string, message: string): Promise<void>
} 

declare interface RTCDataChannel$Message {
text?: string,
buffer?: ArrayBuffer,
binary?: Blob
} 

declare interface RTCDataChannel$RTCDataChannel {
getLabel(): Promise<string>,
getOrdered(): Promise<boolean>,
getMaxPacketLifeTime(): Promise<number>,
getMaxRetransmits(): Promise<number>,
getProtocol(): Promise<string>,
getNegotiated(): Promise<boolean>,
getId(): Promise<number>,
getReadyState(): Promise<string>,
getBufferedAmount(): Promise<number>,
on(t: "onopen", f: () => void): void,
on(t: "onerror", f: () => void): void,
on(t: "onclose", f: () => void): void,
on(t: "onmessage", f: (m: RTCDataChannel$Message) => void): void,
on(t: string, f: Function): void,
close(): Promise<void>,
getBinaryType(): Promise<string>,
setBinaryType(type: string): Promise<void>,
send: freedom$freedom$Method1<string, void>,
sendBuffer: freedom$freedom$Method1<ArrayBuffer, void>
} 

declare interface RTCPeerConnection$RTCIceServer {
urls: string[],
username?: string,
credential?: string
} 

declare interface RTCPeerConnection$RTCConfiguration {
iceServers: RTCPeerConnection$RTCIceServer[],
iceTransports?: string,
peerIdentity?: string
} 

declare interface RTCPeerConnection$RTCOfferOptions {
offerToReceiveVideo?: number,
offerToReceiveAudio?: number,
voiceActivityDetection?: boolean,
iceRestart?: boolean
} 

declare interface RTCPeerConnection$RTCSessionDescription {
type: string,
sdp: string
} 

declare interface RTCPeerConnection$RTCIceCandidate {
candidate: string,
sdpMid?: string,
sdpMLineIndex?: number
} 

declare interface RTCPeerConnection$OnIceCandidateEvent {
candidate: RTCPeerConnection$RTCIceCandidate
} 

declare interface RTCPeerConnection$RTCDataChannelInit {
ordered?: boolean,
maxPacketLifeTime?: number,
maxRetransmits?: number,
protocol?: string,
negotiated?: boolean,
id?: number
} 

declare interface RTCPeerConnection$RTCPeerConnection {
createOffer(
options?: RTCPeerConnection$RTCOfferOptions): Promise<RTCPeerConnection$RTCSessionDescription>,
createAnswer(): Promise<RTCPeerConnection$RTCSessionDescription>,
setLocalDescription(desc: RTCPeerConnection$RTCSessionDescription): Promise<void>,
getLocalDescription(): Promise<RTCPeerConnection$RTCSessionDescription>,
setRemoteDescription(desc: RTCPeerConnection$RTCSessionDescription): Promise<void>,
getRemoteDescription(): Promise<RTCPeerConnection$RTCSessionDescription>,
getSignalingState(): Promise<string>,
updateIce(configuration: RTCPeerConnection$RTCConfiguration): Promise<void>,
addIceCandidate(candidate: RTCPeerConnection$RTCIceCandidate): Promise<void>,
getIceGatheringState(): Promise<string>,
getIceConnectionState(): Promise<string>,
getConfiguration(): Promise<RTCPeerConnection$RTCConfiguration>,
getLocalStreams(): Promise<string[]>,
getRemoteStreams(): Promise<string[]>,
getStreamById(id: string): Promise<string>,
addStream(ref: string): Promise<void>,
removeStream(ref: string): Promise<void>,
close(): Promise<void>,
createDataChannel(label: string, init: RTCPeerConnection$RTCDataChannelInit): Promise<string>,
getStats(selector?: string): Promise<any>,
on(t: "ondatachannel", f: (d: {
channel: string
}) => void): void,
on(t: "onnegotiationneeded", f: () => void): void,
on(
t: "onicecandidate",
f: (d: RTCPeerConnection$OnIceCandidateEvent) => void): void,
on(t: "onsignalingstatechange", f: () => void): void,
on(t: "onaddstream", f: (d: {
stream: number
}) => void): void,
on(t: "onremovestream", f: (d: {
stream: number
}) => void): void,
on(t: "oniceconnectionstatechange", f: () => void): void,
on(t: string, f: Function): void
} 

declare interface Storage$Storage {
keys(): Promise<string[]>,
get(key: string): Promise<string>,
set(key: string, value: string): Promise<string>,
remove(key: string): Promise<string>,
clear(): Promise<void>
} 

declare interface TcpSocket$DisconnectInfo {
errcode: string,
message: string
} 

declare interface TcpSocket$ReadInfo {
data: ArrayBuffer
} 

declare interface TcpSocket$WriteInfo {
bytesWritten: number
} 

declare interface TcpSocket$SocketInfo {
connected: boolean,
localAddress?: string,
localPort?: number,
peerAddress?: string,
peerPort?: number,
localAddress: string,
localPort: number
} 

declare interface TcpSocket$ConnectInfo {
socket: number,
host: string,
port: number
} 

declare interface TcpSocket$Socket {
listen(address: string, port: number): Promise<void>,
connect(hostname: string, port: number): Promise<void>,
secure(): Promise<void>,
write: freedom$freedom$Method1<ArrayBuffer, TcpSocket$WriteInfo>,
pause: freedom$freedom$Method0<void>,
resume: freedom$freedom$Method0<void>,
getInfo(): Promise<TcpSocket$SocketInfo>,
close(): Promise<void>,
on(type: "onConnection", f: (i: TcpSocket$ConnectInfo) => void): void,
on(type: "onData", f: (i: TcpSocket$ReadInfo) => void): void,
off(type: "onData", f: (i: TcpSocket$ReadInfo) => void): void,
on(type: "onDisconnect", f: (i: TcpSocket$DisconnectInfo) => void): void,
on(eventType: string, f: (i: Object) => void): void,
off(eventType: string, f: (i: Object) => void): void,
bind: (address: string, port: number) => Promise<void>,
sendTo: freedom$freedom$Method3<ArrayBuffer, string, number, number>,
destroy: () => Promise<void>,
on: (name: string, listener: Function) => void,
getInfo: () => Promise<TcpSocket$SocketInfo>
} 

declare interface UdpSocket$SocketInfo {
connected: boolean,
localAddress?: string,
localPort?: number,
peerAddress?: string,
peerPort?: number,
localAddress: string,
localPort: number
} 

declare interface UdpSocket$RecvFromInfo {
resultCode: number,
address: string,
port: number,
data: ArrayBuffer
} 

declare interface UdpSocket$Implementation {
bind(address: string, port: number, continuation: () => void): void,
sendTo(
data: ArrayBuffer,
address: string,
port: number,
continuation: (bytesWritten: number) => void): void,
destroy(continuation: () => void): void,
getInfo(continuation: (socketInfo: UdpSocket$SocketInfo) => void): void
} 

declare interface UdpSocket$Socket {
listen(address: string, port: number): Promise<void>,
connect(hostname: string, port: number): Promise<void>,
secure(): Promise<void>,
write: freedom$freedom$Method1<ArrayBuffer, TcpSocket$WriteInfo>,
pause: freedom$freedom$Method0<void>,
resume: freedom$freedom$Method0<void>,
getInfo(): Promise<UdpSocket$SocketInfo>,
close(): Promise<void>,
on(type: "onConnection", f: (i: TcpSocket$ConnectInfo) => void): void,
on(type: "onData", f: (i: TcpSocket$ReadInfo) => void): void,
off(type: "onData", f: (i: TcpSocket$ReadInfo) => void): void,
on(type: "onDisconnect", f: (i: TcpSocket$DisconnectInfo) => void): void,
on(eventType: string, f: (i: Object) => void): void,
off(eventType: string, f: (i: Object) => void): void,
bind: (address: string, port: number) => Promise<void>,
sendTo: freedom$freedom$Method3<ArrayBuffer, string, number, number>,
destroy: () => Promise<void>,
on: (name: string, listener: Function) => void,
getInfo: () => Promise<UdpSocket$SocketInfo>
} 

declare interface PgpProvider$PublicKey {
key: string,
fingerprint: string,
words: string[]
} 

declare interface PgpProvider$KeyFingerprint {
fingerprint: string,
words: string[]
} 

declare interface PgpProvider$VerifyDecryptResult {
data: ArrayBuffer,
signedBy: string[]
} 

declare interface PgpProvider$PgpProvider {
setup(passphrase: string, userid: string): Promise<void>,
clear(): Promise<void>,
exportKey(): Promise<PgpProvider$PublicKey>,
getFingerprint(publicKey: string): Promise<PgpProvider$KeyFingerprint>,
ecdhBob(curve: string, pubKey: string): Promise<ArrayBuffer>,
signEncrypt(data: ArrayBuffer, encryptKey?: string, sign?: boolean): Promise<ArrayBuffer>,
verifyDecrypt(
data: ArrayBuffer,
verifyKey?: string): Promise<PgpProvider$VerifyDecryptResult>,
armor(data: ArrayBuffer, type?: string): Promise<string>,
dearmor(data: string): Promise<ArrayBuffer>
} 

declare interface PortControl$Mapping {
internalIp: string,
internalPort: number,
externalIp?: string,
externalPort: number,
lifetime: number,
protocol: string,
timeoutId?: number,
nonce?: number[],
errInfo?: string
} 

declare interface PortControl$ActiveMappings {
[extPort: string]: PortControl$Mapping
} 

declare interface PortControl$ProtocolSupport {
natPmp: boolean,
pcp: boolean,
upnp: boolean
} 

declare interface PortControl$PortControl {
addMapping(
intPort: number,
extPort: number,
lifetime: number): Promise<PortControl$Mapping>,
deleteMapping(extPort: number): Promise<boolean>,
probeProtocolSupport(): Promise<PortControl$ProtocolSupport>,
probePmpSupport(): Promise<boolean>,
addMappingPmp(
intPort: number,
extPort: number,
lifetime: number): Promise<PortControl$Mapping>,
deleteMappingPmp(extPort: number): Promise<boolean>,
probePcpSupport(): Promise<boolean>,
addMappingPcp(
intPort: number,
extPort: number,
lifetime: number): Promise<PortControl$Mapping>,
deleteMappingPcp(extPort: number): Promise<boolean>,
probeUpnpSupport(): Promise<boolean>,
addMappingUpnp(
intPort: number,
extPort: number,
lifetime: number,
controlUrl?: string): Promise<PortControl$Mapping>,
deleteMappingUpnp(extPort: number): Promise<boolean>,
getActiveMappings(): Promise<PortControl$ActiveMappings>,
getPrivateIps(): Promise<string[]>,
close(): Promise<void>
} 

declare interface Social$ClientState {
userId: string,
clientId: string,
status: string,
timestamp: number
} 

declare interface Social$UserProfile {
userId: string,
name: string,
status?: number,
url?: string,
imageData?: string,
timestamp?: number
} 

declare interface Social$Users {
[userId: string]: Social$UserProfile
} 

declare interface Social$Clients {
[clientId: string]: Social$ClientState
} 

declare interface Social$IncomingMessage {
from: Social$ClientState,
message: string
} 

declare interface Social$LoginRequest {
agent: string,
version: string,
url: string,
interactive: boolean,
rememberLogin: boolean
} 

declare interface Social$Social {
on(eventType: string, f: Function): void,
on(eventType: "onMessage", f: (message: Social$IncomingMessage) => void): void,
on(eventType: "onUserProfile", f: (profile: Social$UserProfile) => void): void,
on(eventType: "onClientState", f: (status: Social$ClientState) => void): void,
once(eventType: string, f: Function): void,
login(loginRequest: Social$LoginRequest): Promise<Social$ClientState>,
getUsers(): Promise<Social$Users>,
getClients(): Promise<Social$Clients>,
sendMessage(destinationId: string, message: string): Promise<void>,
logout(): Promise<void>,
clearCachedCredentials(): Promise<void>
} 
    }
