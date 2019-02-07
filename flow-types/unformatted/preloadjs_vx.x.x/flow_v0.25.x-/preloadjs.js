declare module 'preloadjs' {
        declare export class createjs$AbstractLoader mixins EventDispatcher {
static BINARY: string;
canceled: boolean;
static CSS: string;
static GET: string;
static IMAGE: string;
static JAVASCRIPT: string;
static JSON: string;
static JSONP: string;
loaded: boolean;
static MANIFEST: string;
static POST: string;
progress: number;
resultFormatter: () => any;
static SOUND: string;
static SPRITESHEET: string;
static SVG: string;
static TEXT: string;
type: string;
static VIDEO: string;
static XML: string;
cancel(): void;
destroy(): void;
getItem(value?: string): Object;
getLoadedItems(): Object[];
getResult(value?: any, rawResult?: boolean): Object;
getTag(): Object;
load(): void;
setTag(tag: Object): void;
toString(): string
}

declare export class createjs$AbstractMediaLoader  {
constructor(loadItem: Object, preferXHR: boolean, type: string): this
}

declare export class createjs$AbstractRequest  {
constructor(item: createjs$LoadItem): this;
cancel(): void;
destroy(): void;
load(): void
}

declare export class createjs$BinaryLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$CSSLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
canLoadItem(item: Object): boolean
}

declare module 'DataUtils' {
        declare export function parseJSON(value: string): Object

	declare export function parseXML(text: string, type: string): XMLDocument

    }


declare export class createjs$ErrorEvent  {
constructor(title?: string, message?: string, data?: Object): this;
data: Object;
message: string;
title: string
}

declare export class createjs$ImageLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$JavaScriptLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$JSONLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$JSONPLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$LoadItem  {
callback: string;
crossOrigin: boolean;
data: Object;
headers: Object;
id: string;
loadTimeout: number;
maintainOrder: boolean;
method: string;
mimeType: string;
src: string;
type: string;
values: Object;
withCredentials: boolean;
static create(value: createjs$LoadItem | string | Object): Object | createjs$LoadItem;
set(props: Object): createjs$LoadItem
}

declare export class createjs$LoadQueue mixins createjs$AbstractLoader {
constructor(preferXHR?: boolean, basePath?: string, crossOrigin?: string | boolean): this;
maintainScriptOrder: boolean;
next: createjs$LoadQueue;
stopOnError: boolean;
close(): void;
getItems(loaded: boolean): Object[];
installPlugin(plugin: any): void;
loadFile(file: Object | string, loadNow?: boolean, basePath?: string): void;
loadManifest(manifest: Object | string | any[], loadNow?: boolean, basePath?: string): void;
registerLoader(loader: createjs$AbstractLoader): void;
remove(idsOrUrls: string | any[]): void;
removeAll(): void;
reset(): void;
setMaxConnections(value: number): void;
setPaused(value: boolean): void;
setPreferXHR(value: boolean): boolean;

/**
 * @deprecated - use 'preferXHR' property instead (or setUseXHR())
 */
setUseXHR(value: boolean): void;
unregisterLoader(loader: createjs$AbstractLoader): void
}

declare export class createjs$ManifestLoader mixins createjs$AbstractLoader {
constructor(loadItem: createjs$LoadItem | Object): this;
static canLoadItem(item: createjs$LoadItem | Object): boolean
}

declare export class createjs$MediaTagRequest  {
constructor(loadItem: createjs$LoadItem, tag: HTMLAudioElement | HTMLVideoElement, srcAttribute: string): this
}

declare export class createjs$PreloadJS  {
static buildDate: string;
static version: string
}

declare export class createjs$ProgressEvent  {
constructor(loaded: number, total?: number): this;
loaded: number;
progress: number;
total: number;
clone(): createjs$ProgressEvent
}

declare export class createjs$RequestUtils  {
static ABSOLUTE_PATH: RegExp;
static EXTENSION_PATT: RegExp;
static RELATIVE_PATH: RegExp;
static buildPath(src: string, data?: Object): string;
static formatQueryString(data: Object, query?: Object[]): string;
static getTypeByExtension(extension: string): string;
static isAudioTag(item: Object): boolean;
static isBinary(type: string): boolean;
static isCrossDomain(item: Object): boolean;
static isImageTag(item: Object): boolean;
static isLocal(item: Object): boolean;
static isText(type: string): boolean;
static isVideoTag(item: Object): boolean;
static parseURI(path: string): Object
}

declare export class createjs$SoundLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$SpriteSheetLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$SVGLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$TagRequest  {}

declare export class createjs$TextLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$VideoLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object, preferXHR: boolean): this;
static canLoadItem(item: Object): boolean
}

declare export class createjs$XHRRequest mixins createjs$AbstractLoader {
constructor(item: Object): this;
getAllResponseHeaders(): string;
getResponseHeader(header: string): string
}

declare export class createjs$XMLLoader mixins createjs$AbstractLoader {
constructor(loadItem: Object): this;
static canLoadItem(item: Object): boolean
}
    }
