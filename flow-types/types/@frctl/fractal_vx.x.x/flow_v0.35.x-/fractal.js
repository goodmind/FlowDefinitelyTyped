declare module '@frctl/fractal' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          FileStats
        } from 'fs';

	import type {
          HttpServer
        } from 'http';

	import type {
          ReadableStream
        } from 'stream';

	import typeof * as VinylFile from 'vinyl';

	
      declare var npm$namespace$fractal: {
        
        Fractal: typeof fractal$Fractal,
      }
declare interface core$StatusInfo {
label: string,
description?: string,
color?: string
} 

declare class entities$Entity mixins mixins$entities$Entity {
isComponent: true;
isCollection: true;
isDoc: true;
isVariant: true;
status: core$StatusInfo;
getResolvedContext(): any;
hasContext(): Promise<boolean>;
setContext(data: any): void;
getContext(): any;
toJSON(): {}
}

declare type entities$EntitySource<T: entities$Entity, TConfig> = {
entities(): T[],
engine<TEngine>(
adapterFactory?: string | {
register(source: entities$EntitySource<T>, app: any): Adapter<TEngine>
} | ((
) => ({
register(source: entities$EntitySource<T>, app: any): Adapter<TEngine>
}))): Adapter<TEngine>,
getProp(key: string): string | {},
statusInfo(handle: string): core$StatusInfo | null,
toJSON(): {}
} & mixins$mixins$Source<T, TConfig>


declare type entities$EntityCollection<T: entities$Entity> = {
+entities: this,
toJSON(): {}
} & mixins$entities$Entity & mixins$mixins$Collection<T>


declare class mixins$Configurable<T>  {
config(): T;
config(config: T): this;
set<K: $Keys<T>>(path: K, value: $ElementType<T, K> | null): this;
get<K: $Keys<T>, V>(
path: K,
defaultValue?: V): $ElementType<T, K> | V | null | void
}

declare type mixins$ConfigurableEmitter<T> = {} & mixins$Configurable<T>


declare interface mixins$Collection<T> {
+isAsset: void,
+isComponent: void,
+isCollection: true,
+isDoc: void,
+isFile: void,
+isVariant: void,
+size: number,
+items: T[],
toArray(): T[],
setItems(items: T[]): this,
pushItem(item: T): this,
removeItem(item: T): this,
toJSON(): {},
toStream(): ReadableStream,
each(fn: (item: T) => void): this,
forEach(fn: (item: T) => void): this,
map(fn: (item: T) => T): this,
first(): T | void,
last(): T | void,
eq(pos: number): T | void,
collections(): this,
orderBy(): this,
find(handle: string): T,
find<TKey: $Keys<T>>(name: TKey, value: $ElementType<T, TKey>): T,
findCollection(handle: string): mixins$Collection<T>,
findCollection<TKey: $Keys<T>>(name: TKey, value: $ElementType<T, TKey>): mixins$Collection<T>,
flatten(): this,
flattenDeep(): this,
squash(): this,
filter(handle: string): T[],
filter<TKey: $Keys<T>>(name: TKey, value: $ElementType<T, TKey>): T[],
filterItems(items: T[], handle: string): T[],
filterItems<TKey: $Keys<T>>(items: T[], name: TKey, value: $ElementType<T, TKey>): T[],
flattenItems(items: T[], deep?: boolean): T[],
squashItems(items: T[]): T[],
newSelf(items: T[]): this,
undefined(): IterableIterator<T>
} 

declare class mixins$Entity  {
initEntity(name: string, config: any, parent: mixins$Entity): void;
name: string;
handle: string;
label: string;
title: string;
order: number;
id: string;
config: any;
alias: string | null;
source: entities$entities$EntitySource<entities$mixins$Entity>;
parent: mixins$Entity;
isHidden: boolean;
toJSON(): {}
}

declare type mixins$Source<T, TConfig> = {
+label: string,
+title: string,
+source: this,
+isWatching: boolean,
+fullPath: string | null,
+relPath: string,
toStream(): ReadableStream,
exists(): boolean,
load(force?: boolean): Promise<this>,
refresh(): Promise<this>,
watch(): void,
unwatch(): void,
isConfig(file: string): boolean
} & mixins$ConfigurableEmitter<TConfig> & mixins$Collection<T>


declare class assets$Asset mixins undefined.mixins$Entity {
isAsset: true;
isComponent: void;
isCollection: void;
isDoc: void;
isFile: void;
isVariant: void;
toVinyl(): VinylFile
}

declare type assets$AssetCollection = {
assets(): this,
toVinylArray(): VinylFile[]
} & undefined.entities$EntityCollection<assets$Asset>


declare type assets$AssetSource = {
assets(): VinylFile[],
toVinylArray(): VinylFile[],
toVinylStream(): ReadableStream,
gulpify(): ReadableStream
} & undefined.mixins$Source<VinylFile>


declare type assets$AssetSourceCollection = {
+label: string,
+title: string,
add(name: string, config: any): assets$AssetSource,
remove(name: string): this,
find(name: string): assets$AssetSource | void,
sources(): assets$AssetSource[],
toArray(): assets$AssetSource[],
visible(): assets$AssetSource[],
watch(): this,
unwatch(): this,
load(): Promise<void>,
toJSON(): {},
undefined(): IterableIterator<assets$AssetSource>
} & undefined.mixins$ConfigurableEmitter


declare class components$Component mixins undefined.mixins$Entity {
constructor(config: {}, files: files$files$FileCollection, resources: assets$assets$AssetCollection, parent: core$entities.mixins$Entity): this;
isAsset: void;
isComponent: true;
isCollection: void;
isDoc: void;
isFile: void;
isVariant: void;
defaultName: string;
utils$lang: string;
editorMode: string;
editorScope: string;
viewPath: string;
viewDir: string;
configData: string;
relViewPath: string;
isCollated(): boolean;
content: string;
references: any[];
referencedBy: any[];
baseHandle: string;
notes: string;
render(context: any, env: any, opts: any): Promise<string>;
getPreviewContext(): Promise<any>;
getPreviewContent(): Promise<string>;
setVariants(variantCollection: variants$variants$VariantCollection): void;
hasTag(tag: string): boolean;
resources(): assets$assets$AssetCollection;
resourcesJSON(): {};
flatten(): variants$variants$VariantCollection;
component(): this;
variants(): variants$variants$VariantCollection;
static create(
config: {},
files: files$files$FileCollection,
resources: assets$assets$AssetCollection,
parent: core$entities.mixins$Entity): IterableIterator<{} | variants$variants$VariantCollection | components$Component>
}

declare type components$ComponentCollection = {
components(): this,
variants(): this
} & undefined.entities$EntityCollection<components$Component>


declare type components$Collator = (markup: string, item: {
handle: string
}) => string;

declare interface components$ComponentDefaultConfig {
collated?: boolean,
collator?: components$Collator,
context?: any,
display?: any,
prefix?: string,
preview?: string,
status?: string
} 

declare interface components$ComponentConfig {
path?: string,
ext?: string,
default?: components$ComponentDefaultConfig,
label?: string,
statuses?: {
[status: string]: core$core$StatusInfo
},
title?: string,
yield?: string,
"default.collated"?: boolean,
"default.collator"?: components$Collator,
"default.context"?: any,
"default.display"?: any,
"default.prefix"?: string,
"default.preview"?: string,
"default.status"?: string
} 

declare type components$ComponentSource = {
resources(): files$files$FileCollection,
components(): components$Component[],
getReferencesOf(target: {
id: string,
handle: string,
alias: string
}): any[],
variants(): this,
find(): any,
findFile(filePath: string): files$files$File | void,
resolve(context: any): any,
renderString(str: string, context: any, env: any): Promise<string>,
renderPreview(
entity: string | core$entities.mixins$Entity,
preview?: boolean,
env?: any): Promise<string>,
render(
entity: string | core$entities.mixins$Entity,
context: any,
env?: any,
opts?: {}): Promise<string>
} & undefined.entities$EntitySource<components$Component, components$ComponentConfig>


declare class docs$Doc mixins undefined.mixins$Entity {
constructor(config: any, content: string, parent: core$entities.mixins$Entity): this;
isAsset: void;
isComponent: void;
isCollection: void;
isDoc: true;
isFile: void;
isVariant: void;
isIndex: boolean;
getContent(): Promise<string>;
getContentSync(): string;
render(context: any, env?: any, opts?: any): Promise<string>;
toc(maxDepth?: number): Promise<string>;
static create(config: any, content: string, parent: core$entities.mixins$Entity): docs$Doc
}

declare type docs$DocCollection = {
pages(): this
} & undefined.entities$EntityCollection<docs$Doc>


declare interface docs$DocDefaultConfig {
context?: any,
prefix?: string,
status?: string
} 

declare interface docs$DocMarkdownConfig {
gfm?: boolean,
tables?: boolean,
breaks?: boolean,
pedantic?: boolean,
sanitize?: boolean,
smartLists?: boolean,
smartypants?: boolean
} 

declare interface docs$DocConfig {
default?: docs$DocDefaultConfig,
ext?: string,
indexLabel?: string,
label?: string,
markdown?: boolean | docs$DocMarkdownConfig,
path?: string,
statuses?: {
[status: string]: core$core$StatusInfo
},
title?: string,
"default.context"?: any,
"default.prefix"?: string,
"default.status"?: string,
"markdown.gfm"?: boolean,
"markdown.tables"?: boolean,
"markdown.breaks"?: boolean,
"markdown.pedantic"?: boolean,
"markdown.sanitize"?: boolean,
"markdown.smartLists"?: boolean,
"markdown.smartypants"?: boolean
} 

declare type docs$DocSource = {
pages(): this,
docs(): this,
resolve(context: any): any,
toc(page: files$files$File, maxDepth?: number): Promise<string>,
render(
page: string | files$files$File,
context?: any,
env?: any,
opts?: {}): Promise<string>,
renderString(str: string, context: any, env?: any): Promise<string>,
isPage(file: string): boolean,
isTemplate(file: string): boolean
} & undefined.entities$EntitySource<docs$Doc, docs$DocConfig>


declare type files$FileCollection = {
files(): this,
match(test: string | RegExp | Array<string | RegExp>): this,
matchItems(
items: core$mixins.mixins$Collection<files$File>,
test: string | RegExp | Array<string | RegExp>): files$File,
toVinylArray(): VinylFile[],
toVinylStream(): ReadableStream,
gulpify(): ReadableStream
} & undefined.mixins$Collection<files$File>


declare interface files$File {
+isAsset: void,
+isComponent: void,
+isCollection: void,
+isDoc: void,
+isFile: true,
+isVariant: void,
id: string,
path: string,
cwd: string,
relPath: string,
base: string,
dir: string,
handle: string,
name: string,
ext: string,
stat: FileStats | null,
utils$lang: string,
editorMode: string,
editorScope: string,
githubColor: string,
isBinary: boolean,
mime: string,
getContext(): any,
+contents: Buffer,
+isImage: boolean,
getContent(): Promise<string>,
getContentSync(): string,
read(): Promise<string>,
readSync(): string,
toVinyl(): VinylFile
} 

declare class variants$Variant mixins undefined.mixins$Entity {
constructor(config: {}, view: any, resources: assets$assets$AssetCollection, parent: components$components$Component): this;
isAsset: void;
isComponent: void;
isCollection: void;
isDoc: void;
isFile: true;
isVariant: true;
view: any;
viewPath: string;
viewDir: string;
relViewPath: string;
isDefault: boolean;
utils$lang: string;
editorMode: string;
editorScope: string;
notes: string;
alias: string | null;
siblings: variants$VariantCollection;
content: string;
baseHandle: string;
references: any[];
referencedBy: any[];
render(context: any, env?: any, opts?: any): Promise<string>;
getPreviewContext(): Promise<any>;
getPreviewContent(): Promise<string>;
component(): components$components$Component;
variant(): this;
defaultVariant(): this;
resources(): assets$assets$AssetCollection;
resourcesJSON(): {};
getContent(): Promise<string>;
getContentSync(): string;
static create(
config: {},
view: any,
resources: assets$assets$AssetCollection,
parent: components$components$Component): variants$Variant
}

declare type variants$VariantCollection = {
default(): variants$Variant,
getCollatedContent(): Promise<string>,
getCollatedContentSync(): string,
getCOllatedContext(): Promise<any>,
+references: any[],
+referencedBy: any[]
} & undefined.entities$EntityCollection<variants$Variant>


declare class cli$Cli  {
console: cli$Console;
notify: cli$Notifier;
has(command: string): boolean;
get(command: string): any;
isInteractive(): boolean;
command(
commandString: string,
callback: (args: any, done: () => void) => void,
opts?: string | {
description?: string,
options?: string[][]
}): void;
exec(command: string): void;
log(message: string): void;
error(message: string): void
}

declare class cli$Console  {
theme: CliTheme;
br(): this;
log(text: string): this;
debug(text: string, data?: any): this;
success(text: string): this;
warn(text: string): this;
update(text: string, type?: string): this;
clear(): this;
persist(): this;
error(err: Error): this;
error(err: string, data: Error): this;
dump(data: any): void;
box(header?: string, body?: string[], footer?: string): this;
write(str: string, type?: string): void;
columns(data: any, options?: any): this;
slog(): this;
unslog(): this;
isSlogging(): boolean;
debugMode(status: boolean): void
}

declare class cli$Notifier  {
updateAvailable(details: {
current: string,
latest: string,
name: string
}): void;
versionMismatch(details: {
cli: string,
local: string
}): void
}

declare class web$Builder mixins EventEmitter {

/**
 * @deprecated Use start() instead.
 */
build(): Promise<{
errorCount: number
}>;
start(): Promise<{
errorCount: number
}>;
stop(): void;
use(): void
}

declare class web$Server mixins EventEmitter {
isSynced: boolean;
port: number;
ports: {
sync?: number,
server?: number
};
url: string;
urls: {
sync?: {
local?: string,
external?: string,
ui?: string
},
server?: string
};
start(sync?: boolean): Promise<HttpServer>;
stop(): void;
use(mount: string, middleware: any): void
}

declare interface web$WebServerSyncOptions {
open?: boolean,
browser?: string[],
notify?: boolean
} 

declare interface web$WebServerConfig {
sync?: boolean,
syncOptions?: web$WebServerSyncOptions,
port?: number,
watch?: boolean,
theme?: WebTheme | string
} 

declare interface web$WebBuilderUrls {
ext?: string
} 

declare interface web$WebBuilderConfig {
concurrency?: number,
dest?: string,
ext?: string,
urls?: web$WebBuilderUrls,
theme?: WebTheme | string
} 

declare interface web$WebStaticConfig {
path?: string,
mount?: string
} 

declare interface web$WebConfig {
builder?: web$WebBuilderConfig,
server?: web$WebServerConfig,
static?: web$WebStaticConfig,
"builder.concurrency"?: number,
"builder.dest"?: string,
"builder.ext"?: string,
"builder.urls"?: web$WebBuilderUrls,
"builder.urls.ext"?: string,
"builder.theme"?: WebTheme | string,
"server.sync"?: boolean,
"server.syncOptions"?: web$WebServerSyncOptions,
"server.syncOptions.open"?: boolean,
"server.syncOptions.browser"?: string[],
"server.syncOptions.notify"?: boolean,
"server.port"?: number,
"server.watch"?: boolean,
"server.theme"?: WebTheme | string,
"static.path"?: string,
"static.mount"?: string
} 

declare class web$Web mixins undefined.mixins$ConfigurableEmitter<web$WebConfig> {
server(config?: web$WebServerConfig): web$Server;
builder(config?: web$WebBuilderConfig): web$Builder;
theme(name: string, instance?: WebTheme): this;
defaultTheme(): WebTheme;
defaultTheme(instance: WebTheme): this
}

declare var fractal$Fractal: {
new: fractal$Fractal
};
	declare export interface FractalConfig {
project?: {
title?: string,
version?: string,
author?: string
},
"project.title"?: string,
"project.version"?: string,
"project.author"?: string
} 
	declare export function create(config?: FractalConfig): fractal$Fractal

	declare export class Fractal mixins undefined.mixins$ConfigurableEmitter<FractalConfig> {
constructor(config?: FractalConfig): this;
components: fractal$api.components.components$ComponentSource;
docs: fractal$api.docs.docs$DocSource;
assets: fractal$api.assets.assets$AssetSourceCollection;
cli: fractal$cli.cli$Cli;
web: fractal$web.web$Web;
version: string;
debug: boolean;
extend(plugin: string | ((core: any) => void)): this;
watch(): this;
unwatch(): this;
load(): Promise<void>
}
	declare export interface CliThemeConfig {
delimiter?: {
text?: string,
format?: (str: string) => string
},
styles?: {
[key: string]: any
},
"delimiter.text"?: string,
"delimiter.format"?: (str: string) => string
} 
	declare export class CliTheme mixins undefined.mixins$ConfigurableEmitter<CliThemeConfig> {
constructor(config?: CliThemeConfig): this;
setDelimiter(text: string, formatter: (str: string) => string): void;
delimiter(): string;
setStyle(name: string, opts: any): void;
style(name: string): any;
format(str: string, style?: string, strip?: boolean): string
}
	declare export interface WebThemeOptions {
skin?: string,
panels?: string[],
rtl: boolean,
utils$lang?: string,
styles?: string[],
scripts?: string[],
format?: string,
static?: {
mount?: string
},
version?: string,
favicon?: string,
nav?: string[],
"static.mount": string
} 
	declare export class WebTheme mixins undefined.mixins$ConfigurableEmitter<WebThemeOptions> {
constructor(viewPaths: string[], options?: WebThemeOptions): this;
options(): WebThemeOptions;
options(value: WebThemeOptions): this;
setOption<K: $Keys<WebThemeOptions>>(
key: K,
value: $ElementType<WebThemeOptions, K>): this;
getOption<K: $Keys<WebThemeOptions>>(key: K): $ElementType<WebThemeOptions, K>;
addLoadPath(path: string): this;
loadPaths(): string[];
setErrorView(view: string): void;
errorView(): string;
setRedirectView(view: string): void;
redirectView(): string;
addStatic(path: string, mount: string): void;
static(): Array<{
path: string,
mount: string
}>;
addRoute(path: string, opts: {
handle?: string
}, resolver?: any): this;
addResolver(handle: string, resolvers: any): this;
routes(): any[];
resolvers(): any;
matchRoute(
urlPath: string): {
route: {
handle: string,
view: string
},
params: any
} | false;
urlFromRoute(handle: string, params: any, noRedirect?: boolean): string | null
}
	declare export class Adapter<TEngine> mixins EventEmitter {
constructor(engine: TEngine, source: fractal$core.entities.entities$EntitySource<any>): this;
_source: fractal$core.entities.entities$EntitySource<any>;
engine: TEngine;
views: Array<{
handle: string,
path: string,
content: string
}>;
setHandlePrefix(prefix: string): this;
load(): void;
getReferencesForView(handle: string): any[];
getView(handle: string): any;
_resolve<T>(value: PromiseLike<T> | T): Promise<T>;
render(path: string, str: string, context: any, meta: any): Promise<string>
}
	
      declare var npm$namespace$utils: {
        lang: typeof utils$lang,
titlize: typeof utils$titlize,
slugify: typeof utils$slugify,
toJSON: typeof utils$toJSON,
escapeForRegexp: typeof utils$escapeForRegexp,
parseArgv: typeof utils$parseArgv,
stringify: typeof utils$stringify,
fileExistsSync: typeof utils$fileExistsSync,
isPromise: typeof utils$isPromise,
md5: typeof utils$md5,
mergeProp: typeof utils$mergeProp,
defaultsDeep: typeof utils$defaultsDeep,
relUrlPath: typeof utils$relUrlPath,
        
      }
declare function utils$lang(
filePath: string): {
name: string,
mode: string,
scope: string | null,
color: string | null
}


declare function utils$titlize(str: string): string


declare function utils$slugify(str: string): string


declare function utils$toJSON(item: any): {}


declare function utils$escapeForRegexp(str: string): string


declare function utils$parseArgv(): {
command: string,
args: string[],
opts: any
}


declare function utils$stringify(data: any, indent?: number): string


declare function utils$fileExistsSync(path: string): boolean


declare function utils$isPromise<T>(value: T | PromiseLike<T>): boolean


declare function utils$isPromise(value: any): boolean


declare function utils$md5(str: string): string


declare function utils$mergeProp(prop: any, upstream: any): any


declare function utils$defaultsDeep<T>(...args: T[]): T


declare function utils$relUrlPath(toPath: string, fromPath: string, opts?: any): string

	
      declare var npm$namespace$core: {
        
        Component: typeof core$Component,
Variant: typeof core$Variant,
Doc: typeof core$Doc,
      }
declare type core$Component = fractal$api.components.core$Component;

declare var core$Component: typeof undefined;

declare type core$Variant = fractal$api.variants.core$Variant;

declare var core$Variant: typeof undefined;

declare type core$Doc = fractal$api.docs.core$Doc;

declare var core$Doc: typeof undefined;
    }
