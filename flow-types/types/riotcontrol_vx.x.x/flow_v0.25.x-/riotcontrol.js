declare module "riotcontrol" {
  declare export default typeof RiotControl;

  declare var npm$namespace$RiotControl: {
    addStore: typeof RiotControl$addStore,
    on: typeof RiotControl$on,
    one: typeof RiotControl$one,
    off: typeof RiotControl$off,
    trigger: typeof RiotControl$trigger,
    _stores: typeof RiotControl$_stores
  };
  declare interface RiotControl$Store {
    on(events: string, fn: Function): RiotControl$Store;
    one(name: string, fn: Function): RiotControl$Store;
    off(events: string, fn?: Function): RiotControl$Store;
    trigger(name: string, ...args: any[]): RiotControl$Store;
  }

  declare var RiotControl$_stores: RiotControl$Store[];

  declare function RiotControl$addStore(store: RiotControl$Store): void;

  declare function RiotControl$on(events: string, fn: Function): void;

  declare function RiotControl$one(name: string, fn: Function): void;

  declare function RiotControl$off(events: string, fn?: Function): void;

  declare function RiotControl$trigger(name: string, ...args: any[]): void;
}
