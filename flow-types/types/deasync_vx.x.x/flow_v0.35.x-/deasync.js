declare module 'deasync' {
        declare module.exports: typeof deasync

	declare function deasync(fn: (...args: any[]) => void): (...args: any[]) => any

	
      declare var npm$namespace$deasync: {
        loopWhile: typeof deasync$loopWhile,
runLoopOnce: typeof deasync$runLoopOnce,
sleep: typeof deasync$sleep,
        
      }
declare function deasync$loopWhile(pred: () => boolean): void


declare function deasync$runLoopOnce(): void


declare function deasync$sleep(ms: number): void

    }
