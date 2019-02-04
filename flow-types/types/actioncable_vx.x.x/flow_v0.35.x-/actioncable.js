declare module 'ActionCable' {
        declare interface Channel {
unsubscribe(): void,
perform(action: string, data: {}): void,
send(data: any): boolean
} 
	declare interface Subscriptions {
create(channel: string | ChannelNameWithParams, obj: CreateMixin): Channel
} 
	declare interface Cable {
subscriptions: Subscriptions,
send(data: any): void,
connect(): void,
disconnect(): void,
ensureActiveConnection(): void
} 
	declare interface CreateMixin {
connected(): void,
disconnected(): void,
received(obj: any): void,
[key: string]: Function
} 
	declare interface ChannelNameWithParams {
channel: string,
[key: string]: any
} 
	declare function createConsumer(): Cable

	declare function createConsumer(url: string): Cable

    }
declare interface AppInterface {
cable?: ActionCable.Cable,
network?: ActionCable.Channel
} declare var App: AppInterface;declare module 'actioncable' {
        declare module.exports: typeof ActionCable

    }
