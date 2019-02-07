declare interface AltJS$StoreReduce {
action: any,
data: any
} 

declare export interface AltJS$StoreModel<S> {
bindAction?: (action: AltJS$Action<any>, handler: AltJS$ActionHandler) => void,
bindActions?: (actions: AltJS$ActionsClass) => void,
exportPublicMethods?: (exportConfig: any) => void,
bindListeners?: (config: {
[methodName: string]: AltJS$Action<any> | AltJS$Actions
}) => void,
exportAsync?: (source: AltJS$Source) => void,
registerAsync?: (datasource: AltJS$Source) => void,
setState?: (state: S) => void,
setState?: (stateFn: (currentState: S, nextState: S) => S) => void,
getState?: () => S,
waitFor?: (store: AltJS$AltStore<any>) => void,
onSerialize?: (fn: (data: any) => any) => void,
onDeserialize?: (fn: (data: any) => any) => void,
on?: (event: AltJS$AltJS$lifeCycleEvents, callback: () => any) => void,
emitChange?: () => void,
waitFor?: (storeOrStores: AltJS$AltStore<any> | Array<AltJS$AltStore<any>>) => void,
otherwise?: (data: any, action: AltJS$AltJS$Action<any>) => void,
observe?: (alt: AltJS$Alt) => any,
reduce?: (state: any, config: AltJS$StoreReduce) => Object,
preventDefault?: () => void,
afterEach?: (payload: Object, state: Object) => void,
beforeEach?: (payload: Object, state: Object) => void,
dispatcher?: any,
getInstance?: () => AltJS$AltJS$AltStore<S>,
alt?: AltJS$Alt,
displayName?: string
} 

declare export type AltJS$Source = {
[name: string]: () => AltJS$SourceModel<any>
};

declare export interface AltJS$SourceModel<S> {
local?: (state: any, ...args: any[]) => any,
remote(state: any, ...args: any[]): Promise<S>,
shouldFetch?: (fetchFn: (...args: Array<any>) => boolean) => void,
loading?: (args: any) => void,
success: (state: S) => void,
error: (args: any) => void,
interceptResponse?: (response: any, action: AltJS$Action<any>, ...args: Array<any>) => any
} 

declare export interface AltJS$AltStore<S> {
getState(): S,
listen(handler: (state: S) => any): () => void,
unlisten(handler: (state: S) => any): void,
emitChange(): void
} 

declare export  class AltJS$lifeCycleEvents {
  constructor(...args: empty): mixed;
static +bootstrap: Class<AltJS$lifeCycleEvents__bootstrap> & AltJS$lifeCycleEvents__bootstrap & 0;// 0
static +snapshot: Class<AltJS$lifeCycleEvents__snapshot> & AltJS$lifeCycleEvents__snapshot & 1;// 1
static +init: Class<AltJS$lifeCycleEvents__init> & AltJS$lifeCycleEvents__init & 2;// 2
static +rollback: Class<AltJS$lifeCycleEvents__rollback> & AltJS$lifeCycleEvents__rollback & 3;// 3
static +error: Class<AltJS$lifeCycleEvents__error> & AltJS$lifeCycleEvents__error & 4;// 4

}

declare class AltJS$lifeCycleEvents__bootstrap mixins AltJS$lifeCycleEvents {}
declare class AltJS$lifeCycleEvents__snapshot mixins AltJS$lifeCycleEvents {}
declare class AltJS$lifeCycleEvents__init mixins AltJS$lifeCycleEvents {}
declare class AltJS$lifeCycleEvents__rollback mixins AltJS$lifeCycleEvents {}
declare class AltJS$lifeCycleEvents__error mixins AltJS$lifeCycleEvents {}


declare export type AltJS$Actions = {
[action: string]: AltJS$Action<any>
};

declare export interface AltJS$Action<T> {
(args: T): void,
defer(data: any): void
} 

declare export interface AltJS$ActionsClass {
generateActions?: (...action: Array<string>) => void,
dispatch(...payload: Array<any>): void,
actions?: AltJS$Actions
} 

declare type AltJS$StateTransform = (store: AltJS$StoreModel<any>) => AltJS$AltJS$AltStore<any>;

declare interface AltJS$AltConfig {
dispatcher?: any,
serialize?: (serializeFn: (data: Object) => string) => void,
deserialize?: (deserializeFn: (serialData: string) => Object) => void,
storeTransforms?: Array<AltJS$StateTransform>,
batchingFunction?: (callback: (...data: Array<any>) => any) => void
} 

declare class AltJS$Alt  {
constructor(config?: AltJS$AltConfig): this;
actions: AltJS$Actions;
bootstrap(jsonData: string): void;
takeSnapshot(...storeNames: Array<string>): string;
flush(): Object;
recycle(...stores: Array<AltJS$AltJS$AltStore<any>>): void;
rollback(): void;
dispatch(action?: AltJS$AltJS$Action<any> | string, data?: Object, details?: any): void;
addActions(actionsName: string, AltJS$ActionsClass: AltJS$ActionsClassConstructor): void;
createActions<T>(AltJS$ActionsClass: AltJS$ActionsClassConstructor, exportObj?: Object): T;
createActions<T>(
AltJS$ActionsClass: AltJS$ActionsClassConstructor,
exportObj?: Object,
...constructorArgs: Array<any>): T;
generateActions<T>(...actions: Array<string>): T;
getActions(actionsName: string): AltJS$AltJS$Actions;
addStore(name: string, store: AltJS$StoreModel<any>, saveStore?: boolean): void;
createStore<S>(store: AltJS$StoreModel<S>, name?: string): AltJS$AltJS$AltStore<S>;
getStore(name: string): AltJS$AltJS$AltStore<any>
}

declare export interface AltJS$AltFactory {
new (config?: AltJS$AltConfig): AltJS$Alt
} 

declare type AltJS$ActionsClassConstructor = (alt: AltJS$Alt) => AltJS$AltJS$ActionsClass;

declare type AltJS$ActionHandler = (...data: Array<any>) => any;

declare type AltJS$ExportConfig = {
[key: string]: (...args: Array<any>) => any
};declare module 'alt/utils/chromeDebug' {
        declare function chromeDebug(alt: AltJS$AltJS$Alt): void

	declare module.exports: typeof chromeDebug

    }
declare module 'alt/AltContainer' {
        import typeof * as React from 'react';

	declare interface ContainerProps {
store?: AltJS$AltJS$AltStore<any>,
stores?: Array<AltJS$AltJS$AltStore<any>>,
inject?: {
[key: string]: any
},
actions?: {
[key: string]: Object
},
render?: (...props: Array<any>) => React.ReactElement<any>,
flux?: AltJS$AltJS$Alt,
transform?: (store: AltJS$AltJS$AltStore<any>, actions: any) => any,
shouldComponentUpdate?: (props: any) => boolean,
component?: React.Component<any>
} 
	declare type AltContainer = React.ReactElement<ContainerProps>;
	declare var AltContainer: React.ComponentClass<ContainerProps>;
	declare module.exports: typeof AltContainer

    }
declare module 'alt' {
        declare var alt: AltJS$AltJS$AltFactory;
	declare module.exports: typeof alt

    }
