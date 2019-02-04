declare module 'timer-machine' {
        declare module.exports: typeof Timer

	declare type Timer$TimerEvent = "start" | "stop" | "time";
	declare class Timer  {
static get(reference: string): Timer;
static destroy(reference: string): Timer;
constructor(started?: boolean): this;
isStarted(): boolean;
isStopped(): boolean;
start(): void;
timeFromStart(): number;
stop(): void;
time(): number;
toggle(): void;
emitTime(): void;
valueOf(): number;
on(event: Timer$Timer$TimerEvent, callback?: () => void): void
}
    }
