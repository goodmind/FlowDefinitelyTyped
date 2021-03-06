declare var npm$namespace$Rx: {
  HistoricalScheduler: typeof Rx$HistoricalScheduler
};
declare type Rx$VirtualTimeScheduler<TAbsolute, TRelative> = {
  advanceBy(time: TRelative): void,
  advanceTo(time: TAbsolute): void,
  scheduleAbsolute(dueTime: TAbsolute, action: () => void): IDisposable,
  scheduleAbsoluteWithState<TState>(
    state: TState,
    dueTime: TAbsolute,
    action: (scheduler: IScheduler, state: TState) => IDisposable
  ): IDisposable,
  scheduleRelative(dueTime: TRelative, action: () => void): IDisposable,
  scheduleRelativeWithState<TState>(
    state: TState,
    dueTime: TRelative,
    action: (scheduler: IScheduler, state: TState) => IDisposable
  ): IDisposable,
  sleep(time: TRelative): void,
  start(): IDisposable,
  stop(): void,
  isEnabled: boolean,
  add(from: TAbsolute, by: TRelative): TAbsolute,
  toDateTimeOffset(duetime: TAbsolute): number,
  toRelative(duetime: number): TRelative,
  getNext(): internals.ScheduledItem<TAbsolute>
} & Scheduler;

declare type Rx$HistoricalScheduler = {} & VirtualTimeScheduler<number, number>;

declare var Rx$HistoricalScheduler: {
  new(
    initialClock: number,
    comparer: (first: number, second: number) => number
  ): Rx$HistoricalScheduler
};
declare module "rx-lite-virtualtime" {
  declare export default typeof Rx;
}
