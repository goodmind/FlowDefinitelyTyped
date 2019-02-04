declare module 'node-ssdp' {
        import typeof * as events from 'events';

	import typeof * as dgram from 'dgram';

	declare export interface SsdpHeaders {

/**
 * Available while handling an SSDP response. A URL where the service description can be found.
 */
LOCATION?: string,
ST?: string,

/**
 * Available while handling an SSDP response. The Unique Service Name (USN) of the responding device.
 */
USN?: string,
[key: string]: string
| number
| boolean
| null
| void
| Symbol
} 
	declare export interface SsdpOptions {

/**
 * SSDP signature
 * @default 'node.js/NODE_VERSION UPnP/1.1 node-ssdp/PACKAGE_VERSION'
 */
ssdpSig?: string,

/**
 * SSDP multicast group
 * @default '239.255.255.250'
 */
ssdpIp?: string,

/**
 * Multicast TTL
 * @default 4
 */
ssdpTtl?: number,

/**
 * SSDP port
 * @default 1900
 */
ssdpPort?: number,

/**
 * Path to SSDP description file
 */
description?: string,

/**
 * Additional headers
 */
headers?: SsdpHeaders,

/**
 * A logger function to use instead of the default. The first argument to the function can contain a format string.
 */
customLogger?: (format: string, ...args: any[]) => void
} 
	declare export type ClientOptions = {

/**
 * List of interfaces to explicitly bind. By default, bind to all available interfaces.
 */
interfaces?: string[],

/**
 * Bind sockets to each discovered interface explicitly instead of relying on the system. Might help with issues with multiple NICs.
 */
explicitSocketBind?: boolean,

/**
 * When true socket.bind() will reuse the address, even if another process has already bound a socket on it.
 * @default true
 */
reuseAddr?: boolean
} & SsdpOptions

	declare export interface ServiceDescriptionLocation {

/**
 * Location protocol.
 * @default 'http://'
 */
protocol?: string,

/**
 * Location port.
 */
port: number,

/**
 * Location path.
 */
path: string
} 
	declare export type ServerOptions = {

/**
 * URL pointing to description of your service, or a function that returns that URL.
 * For cases where there are multiple network interfaces or the IP of the host isn't known in advance,
 * it's possible to specify location as an object. Host will be set to the IP of the responding interface.
 */
location?: string | ServiceDescriptionLocation,

/**
 * SSDP Unique Device Name
 * @default 'uuid:f40c2981-7329-40b7-8b04-27f187aecfb5'
 */
udn?: string,

/**
 * Allow wildcards in M-SEARCH packets (non-standard)
 * @default false
 */
allowWildcards?: boolean,

/**
 * When true the SSDP server will not advertise the root device (i.e. the bare UDN). In some scenarios, this advertisement is not needed.
 * @default false
 */
suppressRootDeviceAdvertisements?: boolean,

/**
 * Interval at which to send out advertisement (ms)
 * @default 10000
 */
adInterval?: number,

/**
 * Packet TTL
 * @default 1800
 */
ttl?: number
} & ClientOptions

	declare export class Base mixins events.EventEmitter {
constructor(opts?: SsdpOptions): this;
addUSN(device: string): void
}
	declare export class Client mixins Base {
constructor(opts?: ClientOptions): this;

/**
 * Start the listener for multicast notifications from SSDP devices
 * @param cb callback to socket.bind
 * @returns promise when socket.bind is ready
 */
start(cb?: (error: Error) => void): Promise<void>;

/**
 * Close UDP socket.
 */
stop(): void;
search(serviceType: string): void | Promise<void>;
on(
event: "response",
listener: (headers: SsdpHeaders, statusCode: number, rinfo: dgram.RemoteInfo) => void): this;
once(
event: "response",
listener: (headers: SsdpHeaders, statusCode: number, rinfo: dgram.RemoteInfo) => void): this;
emit(
event: "response",
headers: SsdpHeaders,
statusCode: number,
rinfo: dgram.RemoteInfo): boolean
}
	declare export class Server mixins Base {
constructor(opts?: ServerOptions): this;

/**
 * Binds UDP socket to an interface/port and starts advertising.
 * @param cb callback to socket.bind
 * @returns promise when socket.bind is ready
 */
start(cb?: (error: Error) => void): void | Promise<void>;

/**
 * Advertise shutdown and close UDP socket.
 */
stop(): void;
advertise(alive?: boolean): void;
on(
event: "advertise-alive" | "advertise-bye",
listener: (headers: SsdpHeaders) => void): this;
once(
event: "advertise-alive" | "advertise-bye",
listener: (headers: SsdpHeaders) => void): this;
emit(event: "advertise-alive" | "advertise-bye", headers: SsdpHeaders): boolean
}
    }
