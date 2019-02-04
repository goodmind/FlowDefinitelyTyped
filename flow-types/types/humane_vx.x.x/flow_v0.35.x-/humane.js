declare module 'humane' {
        declare interface HumaneOptions {
queue?: string[],
baseCls?: string,
addnCls?: string,
timeout?: number,
waitForMove?: boolean,
clickToClose?: boolean,
forceNew?: boolean
} 
	declare interface Humane {
queue: string[],
baseCls: string,
addnCls: string,
timeout: number,
waitForMove: boolean,
clickToClose: boolean,
forceNew: boolean,
create(options?: HumaneOptions): Humane,
info: Function,
error: Function,
spawn(options: HumaneOptions): Function,
remove(x: any): void,
log(message: string): Humane,
log(message: string, callback: Function): Humane,
log(message: string, options: HumaneOptions): Humane,
log(message: string, callback: Function, options: HumaneOptions): Humane,
log(listOfMessages: any[]): Humane
} 
	declare var humane: Humane;
    }
