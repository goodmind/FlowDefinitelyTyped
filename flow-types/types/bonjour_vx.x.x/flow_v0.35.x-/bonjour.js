declare module 'bonjour' {
        declare function bonjour(opts?: bonjour$bonjour$BonjourOptions): bonjour$bonjour$Bonjour

	declare module.exports: typeof bonjour

	
/**
 * Start a browser
 * 
 * The browser listens for services by querying for PTR records of a given
 * type, protocol and domain, e.g. _http._tcp.local.
 * 
 * If no type is given, a wild card search is performed.
 * 
 * An internal list of online services is kept which starts out empty. When
 * ever a new service is discovered, it's added to the list and an "up" event
 * is emitted with that service. When it's discovered that the service is no
 * longer available, it is removed from the list and a "down" event is emitted
 * with that service.
 */
declare type bonjour$Browser = {
services: bonjour$Service[],
start(): void,
update(): void,
stop(): void,
on(event: "up" | "down", listener: (service: bonjour$Service) => void): this,
once(event: "up" | "down", listener: (service: bonjour$Service) => void): this,
removeListener(event: "up" | "down", listener: (service: bonjour$Service) => void): this,
removeAllListeners(event: "up" | "down"): this
} & NodeJS.EventEmitter


declare interface bonjour$BrowserOptions {
type?: string,
subtypes?: string[],
protocol?: string,
txt?: Object
} 

declare interface bonjour$ServiceOptions {
name: string,
host?: string,
port: number,
type: string,
subtypes?: string[],
protocol?: "udp" | "tcp",
txt?: Object
} 

declare type bonjour$Service = {
name: string,
type: string,
subtypes: string[],
protocol: string,
host: string,
port: number,
fqdn: string,
txt: Object,
published: boolean,
stop(cb: () => any): void,
start(): void
} & NodeJS.EventEmitter


declare interface bonjour$BonjourOptions {
multicast?: boolean,
interface?: string,
port?: number,
ip?: string,
ttl?: number,
loopback?: boolean,
reuseAddr?: boolean
} 

declare interface bonjour$Bonjour {
(opts?: bonjour$BonjourOptions): bonjour$Bonjour,
publish(options: bonjour$ServiceOptions): bonjour$Service,
unpublishAll(cb?: () => void): void,
find(
options: bonjour$BrowserOptions,
onUp?: (service: bonjour$Service) => void): bonjour$Browser,
findOne(
options: bonjour$BrowserOptions,
cb?: (service: bonjour$Service) => void): bonjour$Browser,
destroy(): void
} 
    }
