declare module 'async-polling' {
        declare export type AsyncPolling$EventName = "run"
| "start"
| "error"
| "result"
| "end"
| "schedule"
| "stop";
	declare function AsyncPolling<Result>(
pollingFunc: (end: (err?: Error, result?: Result) => any) => any,
delay: number): {
run: () => any,
stop: () => any,
on: (eventName: AsyncPolling$AsyncPolling$EventName, listener: Function) => any
}

	declare module.exports: typeof AsyncPolling

    }
