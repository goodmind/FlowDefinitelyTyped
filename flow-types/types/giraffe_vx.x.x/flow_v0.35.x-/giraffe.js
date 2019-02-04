declare module 'giraffe' {
        
      declare var npm$namespace$Giraffe: {
        bindAppEvents: typeof Giraffe$bindAppEvents,
bindDataEvents: typeof Giraffe$bindDataEvents,
bindEvent: typeof Giraffe$bindEvent,
unbindEvent: typeof Giraffe$unbindEvent,
bindEventMap: typeof Giraffe$bindEventMap,
unbindEventMap: typeof Giraffe$unbindEventMap,
configure: typeof Giraffe$configure,
dispose: typeof Giraffe$dispose,
disposeThis: typeof Giraffe$disposeThis,
wrapFn: typeof Giraffe$wrapFn,
        app: typeof Giraffe$app,
apps: typeof Giraffe$apps,
defaultOptions: typeof Giraffe$defaultOptions,
version: typeof Giraffe$version,
views: typeof Giraffe$views,
      }
declare interface Giraffe$GiraffeObject {
app: Giraffe$App,
appEvents?: Giraffe$StringMap,
dataEvents?: Giraffe$StringMap,
defaultOptions?: Giraffe$DefaultOptions,
initialize(): void,
beforeInitialize(): void,
afterInitialize(): void,
dispose(): void,
beforeDispose(): void,
afterDispose(): void
} 

declare interface Giraffe$AttachmentOptions {
method?: string,
forceRender?: boolean,
suppressRender?: boolean
} 

declare interface Giraffe$DefaultOptions {
disposeOnDetach?: boolean,
alwaysRender?: boolean,
saveScrollPosition?: boolean,
documentTitle?: string
} 

declare interface Giraffe$AppMap {
[cid: string]: Giraffe$App
} 

declare interface Giraffe$ViewMap<TModel: Giraffe$Model> {
[cid: string]: Giraffe$View<TModel>
} 

declare interface Giraffe$StringMap {
[def: string]: string
} 

declare var Giraffe$app: Giraffe$App;

declare var Giraffe$apps: Giraffe$AppMap;

declare var Giraffe$defaultOptions: Giraffe$DefaultOptions;

declare var Giraffe$version: string;

declare var Giraffe$views: Giraffe$ViewMap<Giraffe$Model>;

declare function Giraffe$bindAppEvents(instance: Giraffe$GiraffeObject): Giraffe$GiraffeObject


declare function Giraffe$bindDataEvents(instance: Giraffe$GiraffeObject): Giraffe$GiraffeObject


declare function Giraffe$bindEvent(
context: Backbone.Events,
target: Backbone.Events,
event: any,
callback: Function): void


declare function Giraffe$unbindEvent(
context: Backbone.Events,
target: Backbone.Events,
event: any,
callback: Function): void


declare function Giraffe$bindEventMap(context: Backbone.Events, target: Backbone.Events, eventMap: any): void


declare function Giraffe$unbindEventMap(context: Backbone.Events, target: Backbone.Events, eventMap: any): void


declare function Giraffe$configure(instance: any, options?: any): void


declare function Giraffe$dispose(instance: Giraffe$GiraffeObject, ...args: any[]): Giraffe$GiraffeObject


declare function Giraffe$disposeThis(...args: any[]): Giraffe$GiraffeObject


declare function Giraffe$wrapFn(obj: any, name: string, before: Function, after: Function): void


declare class Giraffe$Collection<TModel: Giraffe$Model> mixins Backbone.Giraffe$Collection<TModel>, Giraffe$GiraffeObject {
Giraffe$app: Giraffe$App;
model: {
new (): TModel
}
}

declare class Giraffe$Model mixins Backbone.Giraffe$Model, Giraffe$GiraffeObject {
Giraffe$app: Giraffe$App
}

declare class Giraffe$Router mixins Backbone.Giraffe$Router, Giraffe$GiraffeObject {
Giraffe$app: Giraffe$App;
namespace: string;
triggers: Giraffe$StringMap;
cause(appEvent: string, ...args: any[]): void;
isCaused(appEvent: string, ...args: any[]): boolean;
getRoute(appEvent: string, ...args: any[]): string;
reload(url: string): void
}

declare class Giraffe$View<TModel: Giraffe$Model> mixins Backbone.Giraffe$View<TModel>, Giraffe$GiraffeObject {
Giraffe$app: Giraffe$App;
appEvents: Giraffe$StringMap;
children: Giraffe$View<TModel>[];
dataEvents: Giraffe$StringMap;
Giraffe$defaultOptions: Giraffe$DefaultOptions;
documentTitle: string;
parent: Giraffe$View<TModel>;
template: any;
ui: Giraffe$StringMap;
attachTo(el: any, options?: Giraffe$AttachmentOptions): Giraffe$View<TModel>;
attach(
view: Giraffe$View<TModel>,
options?: Giraffe$AttachmentOptions): Giraffe$View<TModel>;
isAttached(el: any): boolean;
render(options?: any): Giraffe$View<TModel>;
beforeRender(): void;
afterRender(): void;
templateStrategy(): string;
serialize(): any;
setParent(parent: Giraffe$View<TModel>): Giraffe$View<TModel>;
addChild(child: Giraffe$View<TModel>): Giraffe$View<TModel>;
addChildren(children: Giraffe$View<TModel>[]): Giraffe$View<TModel>;
removeChild(child: Giraffe$View<TModel>, preserve?: boolean): Giraffe$View<TModel>;
removeChildren(preserve?: boolean): Giraffe$View<TModel>;
detach(preserve?: boolean): Giraffe$View<TModel>;
detachChildren(preserve?: boolean): Giraffe$View<TModel>;
invoke(method: string, ...args: any[]): void;
dispose(): Giraffe$View<TModel>;
beforeDispose(): Giraffe$View<TModel>;
afterDispose(): Giraffe$View<TModel>;
static detachByElement(el: any, preserve?: boolean): Giraffe$View<Giraffe$Model>;
static getClosestView<TModel>(el: any): Giraffe$View<Giraffe$Model>;
static getByCid(cid: string): Giraffe$View<Giraffe$Model>;
static to$El(el: any, parent?: any, allowParentMatch?: boolean): JQuery;
static setDocumentEvents(events: string[], prefix?: string): string[];
static removeDocumentEvents(prefix?: string): void;
static setDocumentEventPrefix(prefix?: string): void;
static setTemplateStrategy(strategy: any, instance?: any): void
}

declare class Giraffe$App mixins Giraffe$View<Giraffe$Model> {
routes: Giraffe$StringMap;
addInitializer(initializer: (options?: any, callback?: () => void) => void): Giraffe$App;
start(options?: any): Giraffe$App
}

declare class Contrib$Controller mixins Giraffe$GiraffeObject, Backbone.Events {
on(eventName: string, callback?: (...args: any[]) => void, context?: any): void;
on(eventMap: Backbone.EventsHash): void;
on(eventName: any, callback?: any, context?: any): void;
off(eventName?: string, callback?: (...args: any[]) => void, context?: any): void;
trigger(eventName: string, ...args: any[]): void;
bind(eventName: string, callback: (...args: any[]) => void, context?: any): void;
unbind(eventName?: string, callback?: (...args: any[]) => void, context?: any): void;
once(events: string, callback: (...args: any[]) => void, context?: any): any;
listenTo(object: any, events: string, callback: (...args: any[]) => void): any;
listenToOnce(object: any, events: string, callback: (...args: any[]) => void): any;
stopListening(object?: any, events?: string, callback?: (...args: any[]) => void): any;
Giraffe$app: Giraffe$App
}

declare class Contrib$CollectionView<TModel: Giraffe$Model> mixins Giraffe$View<TModel> {
collection: Giraffe$Collection<TModel>;
modelView: Giraffe$View<TModel>;
modelViewArgs: any[];
modelViewEl: any;
renderOnChange: boolean;
findByModel(model: Giraffe$Model): Giraffe$View<TModel>;
addOne(model: Giraffe$Model): Giraffe$View<TModel>;
removeOne(model: Giraffe$Model): Giraffe$View<TModel>;
static getDefaults(ctx: any): any
}

declare class Contrib$FastCollectionView<TModel: Giraffe$Model> mixins Giraffe$View<TModel> {
collection: Giraffe$Collection<TModel>;
modelTemplate: any;
modelTemplateStrategy: string;
modelEl: any;
renderOnChange: boolean;
modelSerialize(): any;
addAll(): Giraffe$View<TModel>;
addOne(model: Giraffe$Model): Giraffe$View<TModel>;
removeOne(model: Giraffe$Model): Giraffe$View<TModel>;
removeByIndex(index: number): Giraffe$View<TModel>;
findElByModel(model: Giraffe$Model): JQuery;
findElByIndex(index: number): JQuery;
findModelByEl(el: any): Giraffe$Model;
static getDefaults(ctx: any): any
}
    }
