declare module "fluxxor" {
  import typeof * as EventEmitter3 from "eventemitter3";

  import typeof * as React from "react";

  declare var npm$namespace$Fluxxor: {
    FluxMixin: typeof Fluxxor$FluxMixin,
    FluxChildMixin: typeof Fluxxor$FluxChildMixin,
    StoreWatchMixin: typeof Fluxxor$StoreWatchMixin,
    createStore: typeof Fluxxor$createStore,
    version: typeof Fluxxor$version
  };
  declare class Fluxxor$Dispatcher {
    constructor(stores: any): this;
    addStore(name: string, store: Fluxxor$Store): void;
    dispatch(action: Function): void;
    doDispatchLoop(action: Function): void;
    waitForStores(store: Fluxxor$Store, stores: string[], fn: Function): void;
  }

  declare class Fluxxor$Flux mixins EventEmitter3.EventEmitter {
    constructor(stores: any, actions: any): this;
    addActions(actions: any): void;
    addAction(...args: Array<string | Function>): void;
    addAction(names: string[], action: Function): void;
    store(name: string): any;
    addStore(name: string, store: Fluxxor$Store): void;
    addStores(stores: any): void;
    stores: any;
    actions: any;
  }

  declare type Fluxxor$Store = {
    bindActions(...args: Array<string | Function>): void,
    bindActions(args: Array<string | Function>): void,
    waitFor(stores: string[], fn: Function): void
  } & EventEmitter3.EventEmitter;

  declare interface Fluxxor$StoreSpec {
    initialize?: (instance?: any, options?: {}) => void;
    actions?: any;
  }

  declare interface Fluxxor$StoreClass {
    new(options?: {}): any;
  }

  declare interface Fluxxor$Context {
    flux: Fluxxor$Flux;
  }

  declare interface Fluxxor$FluxMixin {
    getFlux(): Fluxxor$Flux;
  }

  declare interface Fluxxor$FluxChildMixin {
    getFlux(): Fluxxor$Flux;
  }

  declare interface Fluxxor$StoreWatchMixin<StoreState> {
    getStateFromFlux(): StoreState;
  }

  declare function Fluxxor$FluxMixin(react: typeof React): Fluxxor$FluxMixin;

  declare function Fluxxor$FluxChildMixin(
    react: typeof React
  ): Fluxxor$FluxChildMixin;

  declare function Fluxxor$StoreWatchMixin<StoreState>(
    ...storeNames: string[]
  ): Fluxxor$StoreWatchMixin<StoreState>;

  declare function Fluxxor$createStore(
    spec: Fluxxor$StoreSpec
  ): Fluxxor$StoreClass;

  declare var Fluxxor$version: string;
  declare module.exports: typeof Fluxxor;
}
