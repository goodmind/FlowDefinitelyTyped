declare var npm$namespace$Rx: {
  TestScheduler: typeof Rx$TestScheduler,
  ReactiveTest: typeof Rx$ReactiveTest,
  MockObserver: typeof Rx$MockObserver
};
declare type Rx$TestScheduler = {
  createColdObservable<T>(...records: Rx$Recorded[]): Observable<T>,
  createHotObservable<T>(...records: Rx$Recorded[]): Observable<T>,
  createObserver<T>(): Rx$MockObserver<T>,
  startWithTiming<T>(
    create: () => Observable<T>,
    createdAt: number,
    subscribedAt: number,
    disposedAt: number
  ): Rx$MockObserver<T>,
  startWithDispose<T>(
    create: () => Observable<T>,
    disposedAt: number
  ): Rx$MockObserver<T>,
  startWithCreate<T>(create: () => Observable<T>): Rx$MockObserver<T>
} & VirtualTimeScheduler<number, number>;

declare var Rx$TestScheduler: {
  new(): Rx$TestScheduler
};

declare class Rx$Recorded {
  constructor(
    time: number,
    value: any,
    equalityComparer?: (x: any, y: any) => boolean
  ): this;
  equals(other: Rx$Recorded): boolean;
  toString(): string;
  time: number;
  value: any;
}

declare var Rx$ReactiveTest: {
  created: number,
  subscribed: number,
  disposed: number,
  onNext(ticks: number, value: any): Rx$Recorded,
  onError(ticks: number, exception: any): Rx$Recorded,
  onCompleted(ticks: number): Rx$Recorded,
  subscribe(subscribeAt: number, unsubscribeAt?: number): Rx$Subscription
};

declare class Rx$Subscription {
  constructor(subscribeAt: number, unsubscribeAt?: number): this;
  equals(other: Rx$Subscription): boolean;
}

declare type Rx$MockObserver<T> = {
  messages: Rx$Recorded[]
} & Observer<T>;

declare type Rx$MockObserverStatic = {
  new<T>(scheduler: IScheduler): Rx$MockObserver<T>
} & ObserverStatic;

declare var Rx$MockObserver: Rx$MockObserverStatic;
declare module "rx-lite-testing" {
  declare module.exports: typeof Rx;
}
