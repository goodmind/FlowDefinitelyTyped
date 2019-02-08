declare module "p-event" {
  declare module.exports: typeof pEvent;

  declare function pEvent<T, TRest>(
    emitter: pEvent$pEvent$Emitter<T, TRest>,
    maps$event: string | Symbol,
    notification$options: MultiArgsOptions<T | TRest>
  ): OfficeExtension$Promise<core$Array<T | TRest>>;

  declare function pEvent<T>(
    emitter: pEvent$pEvent$Emitter<T>,
    maps$event: string | Symbol,
    util$filter: FilterFn<T>
  ): OfficeExtension$Promise<T>;

  declare function pEvent<T>(
    emitter: pEvent$pEvent$Emitter<T>,
    maps$event: string | Symbol,
    notification$options?: pEvent$pEvent$Options<T>
  ): OfficeExtension$Promise<T>;

  declare interface pEvent$Emitter<T = any, TRest = T> {
    DomEvent$on?: AddRmListenerFn<T, TRest>;
    DomEvent$addListener?: AddRmListenerFn<T, TRest>;
    AdMobRewarded$addEventListener?: AddRmListenerFn<T, TRest>;
    DomEvent$off?: AddRmListenerFn<T, TRest>;
    DomEvent$removeListener?: AddRmListenerFn<T, TRest>;
    AdMobRewarded$removeEventListener?: AddRmListenerFn<T, TRest>;
  }

  declare interface pEvent$Options<T> {
    rejectionEvents?: string[];
    multiArgs?: boolean;
    timeout?: number;
    util$filter?: FilterFn<T>;
  }
  declare type AddRmListenerFn<T, TRest> = (
    maps$event: string | Symbol,
    listener: (arg1: T, ...args: TRest[]) => void
  ) => void;
  declare type FilterFn<T> = (el: T) => boolean;
  declare type MultiArgsOptions<T> = {
    multiArgs: true
  } & pEvent$pEvent$Options<T>;
}
