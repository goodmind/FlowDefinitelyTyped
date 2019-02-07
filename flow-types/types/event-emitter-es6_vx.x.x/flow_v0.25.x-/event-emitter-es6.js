declare module "event-emitter-es6" {
  declare interface Options {
    emitDelay?: number;
    strictMode?: boolean;
  }
  declare type Listener = (...args: any[]) => void;
  declare class EventEmitter {
    constructor(options?: Options): this;
    on(type: string, listener: Listener): void;
    once(type: string, listener: Listener): void;
    off(type: string, listener?: Listener): void;
    emit(type: string, ...eventArgs: any[]): void;
    emitSync(type: string, ...eventArgs: any[]): void;
    destroy(): void;
  }
  declare module.exports: typeof EventEmitter;
}
