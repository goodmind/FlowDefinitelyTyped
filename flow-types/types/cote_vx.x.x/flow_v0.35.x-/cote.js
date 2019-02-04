declare module 'cote' {
        import type {
          EventEmitter2
        } from 'eventemitter2';

	import typeof * as SocketIO from 'socket.io';

	import type {
          Stream
        } from 'stream';

	import type {
          Server
        } from 'http';

	declare export class Component mixins EventEmitter2 {
constructor(advertisement: Advertisement, discoveryOptions?: DiscoveryOptions): this;

/**
 * Closes socket and stops discovery.
 */
close(): void
}
	declare export class Requester mixins Component {
constructor(advertisement: RequesterAdvertisement, discoveryOptions?: DiscoveryOptions): this;

/**
 * Queues a request until a Responder is available, and once so, delivers
 * the request. Requests are dispatched to Responders in a round-robin way.
 * @param event Request.
 */
send<T: Event>(event: T): Promise<any>;

/**
 * Queues a request until a Responder is available, and once so, delivers
 * the request. Requests are dispatched to Responders in a round-robin way.
 * @param event Request.
 * @param callback Function to execute after getting a result.
 */
send<T: Event>(event: T, callback: (error: any, result: any) => void): void
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type RequesterAdvertisement = {

/**
 * Request types that a Requester can send.
 */
requests?: string[]
} & Advertisement

	declare export class Responder mixins Component {
constructor(advertisement: ResponderAdvertisement, discoveryOptions?: DiscoveryOptions): this;

/**
 * Listens to internal `cote:added` and `cote:removed` events.
 * @param listener Callback.
 */
on(type: "cote:added" | "cote:removed", listener: (event: Status) => void): this;

/**
 * Responds to certain requests from a Requester.
 * @param type Type. May be wildcarded or namespaced like in EventEmitter2.
 * @param listener Callback. Should return a result.
 */
on<T: Event>(
type: string | string[],
listener: (((event: T, callback: (error: any, result: any) => void) => void) | ((event: T) => Promise<any>))): this
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type ResponderAdvertisement = {

/**
 * Request types that a Responder can listen to.
 */
respondsTo?: string[]
} & Advertisement

	declare export class Publisher mixins Component {
constructor(advertisement: PublisherAdvertisement, discoveryOptions?: DiscoveryOptions): this;

/**
 * Publishes an event to all Subscribers. Does not wait for results. If
 * there are no Subscribers listening, the event is lost.
 * @param type EventEmitter-compatible type.
 * @param event Request.
 */
publish<T: Event>(type: string, event: T): void
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type PublisherAdvertisement = {

/**
 * Event types that a Publisher can publish.
 */
broadcasts?: string[]
} & Advertisement

	declare export class Subscriber mixins Component {
constructor(advertisement: SubscriberAdvertisement, discoveryOptions?: DiscoveryOptions): this;

/**
 * Subscribes to events emitted from a Publisher.
 * @param type Type. May be wildcarded or namespaced like in EventEmitter2.
 * @param listener Callback. Returns nothing.
 */
on<T: Event>(type: string | string[], listener: (event: T) => void): this
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type SubscriberAdvertisement = {

/**
 * Event types that a Subscriber can listen to.
 */
subscribesTo?: string[]
} & Advertisement

	declare export class Sockend mixins Component {

/**
 * Exposes APIs directly to front-end. Make sure to use namespaces.
 */
constructor(io: SocketIO.Server, advertisement: SockendAdvertisement, discoveryOptions?: DiscoveryOptions): this
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type SockendAdvertisement = {} & ResponderAdvertisement & PublisherAdvertisement

	declare export class Monitor mixins Component {
constructor(advertisement: MonitorAdvertisement, discoveryOptions?: DiscoveryOptions, stream?: Stream): this
}
	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export type MonitorAdvertisement = {

/**
 * Port for Monitor to listen on. By default will start searching from 8000.
 */
port?: number | string
} & Advertisement

	
/**
 * Displays the cote ecosystem running in your environment in a nice graph.
 * @param port Open in browser to see network graph in action.
 */
declare export function MonitoringTool(port: number): {
monitor: Monitor,
server: Server
}

	
/**
 * Takes average response times of each connected socket and balances requests
 * among them accordingly.
 */
declare export class TimeBalancedRequester mixins Requester {

/**
 * How long to wait for response before neglecting its calculation time,
 * in milliseconds.
 */
CALCULATION_TIMEOUT: number;

/**
 * How many requests to make before exploring a random server for response
 * time improvement.
 */
MAX_REQUESTS: number;

/**
 * How often to check whether a response arrived. Readonly because used in
 * constructor right after being set.
 */
SAMPLE_INTERVAL: number
}
	
/**
 * Keeps track of open, pending requests for each known Responder. Each new
 * request goes to the Responder with the minimum open requests.
 */
declare export class PendingBalancedRequester mixins Requester {}
	
/**
 * Event is nothing but object with `type`.
 */
declare export interface Event {
type: string
} 
	
/**
 * Internal `cote:added` and `cote:removed` events.
 */
declare export type Status = {
advertisement: StatusAdvertisement
} & Event

	
/**
 * Advertisement in internal `cote:added` and `cote:removed` events.
 */
declare export type StatusAdvertisement = {} & RequesterAdvertisement & ResponderAdvertisement & PublisherAdvertisement & SubscriberAdvertisement

	
/**
 * Configuration which controls the data being advertised for auto-discovery.
 */
declare export interface Advertisement {
name: string,

/**
 * Maps to a socket.io namespace. Shields a service from the rest of the
 * system. Components with different namespaces won't recognize each other
 * and try to communicate.
 */
namespace?: string,

/**
 * Tunes the performance by grouping certain components. Two components
 * with exact same `environment`s with different `key`s wouldn't be able
 * to communicate. Think of it as `${environment}_${key}`.
 */
key?: string
} 
	
/**
 * Controls the network-layer configuration and environments for components.
 */
declare export interface DiscoveryOptions {

/**
 * Multicast address if using multicast.
 */
multicast?: string,

/**
 * Broadcast address if using broadcast.
 */
broadcast?: string,

/**
 * Address to bind to.
 */
address?: string,

/**
 * How often to broadcast a hello packet in milliseconds.
 */
helloInterval?: number,

/**
 * How often to to check for missing nodes in milliseconds.
 */
checkInterval?: number,

/**
 * Consider a node dead if not seen in this many milliseconds.
 */
nodeTimeout?: number,

/**
 * Consider a master node dead if not seen in this many milliseconds.
 */
masterTimeout?: number,

/**
 * Skips key equality checks when logging.
 */
monitor?: boolean,

/**
 * If false, disables `helloLogsEnabled` and `statusLogsEnabled` no matter
 * what value they have, and also own hello log.
 */
log?: boolean,

/**
 * Notifies when another service goes online.
 */
helloLogsEnabled?: boolean,

/**
 * Notifies when another service goes online or offline. If false, disables
 * `helloLogsEnabled` as well.
 */
statusLogsEnabled?: boolean,

/**
 * Ignores messages from other services within the same process.
 */
ignoreProcess?: boolean,

/**
 * Prevents Monitor from drawing.
 */
disableScreen?: boolean,

/**
 * Milliseconds between emissions of own status for monitoring.
 */
statusInterval?: number
} 
    }
