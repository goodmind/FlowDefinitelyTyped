declare module '@feathersjs/socket-commons' {
        import type {
          HookContext
        } from '@feathersjs/feathers';

	declare export type Connection = any;
	declare export interface Channel {
join(...connections: Connection[]): this,
leave(...connections: Connection[]): this,
filter(callback: (connection: Connection) => boolean): Channel,
send(data: any): this
} 
	declare module '@feathersjs/feathers' {
        declare interface ServiceAddons<T> {
publish(callback: (data: T, hook: HookContext<T>) => Channel): this,
publish(event: string, callback: (data: T, hook: HookContext<T>) => Channel): this
} 
	declare interface Application<ServiceTypes> {
channel(...names: string[]): Channel,
publish<T>(
callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void): Application<ServiceTypes>,
publish<T>(
event: string,
callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void): Application<ServiceTypes>
} 
    }

    }
