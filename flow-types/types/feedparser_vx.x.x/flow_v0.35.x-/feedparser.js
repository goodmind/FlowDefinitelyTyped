declare module 'feedparser' {
        import type {
          SAXStream
        } from 'sax';

	declare module.exports: typeof FeedParser

	declare class FeedParser mixins stream.Duplex {
constructor(options: FeedParser$FeedParser$Options): this;
options: FeedParser$FeedParser$Options;
stream: SAXStream;
meta: {
[key: string]: any
};
_emitted_meta: boolean;
stack: any[];
xmlbase: any[];
in_xhtml: boolean;
xhtml: {
[key: string]: any
};
errors: Error[];
addListener(ev: any, fn: any): any;
cork(): void;
eventNames(): any;
getMaxListeners(): any;
handleAttributes(attrs: FeedParser$FeedParser$Attrs, el: string): any;
handleCloseTag(el: string): void;
handleEnd(): any;
handleError(e: Error): void;
handleItem(
node: FeedParser$FeedParser$Node,
type: FeedParser$FeedParser$Type,
options: FeedParser$FeedParser$Options): FeedParser$FeedParser$Item;
handleMeta(
node: FeedParser$FeedParser$Node,
type: FeedParser$FeedParser$Type,
options: FeedParser$FeedParser$Options): FeedParser$FeedParser$Meta;
handleOpenTag(node: FeedParser$FeedParser$Node): void;
handleProcessingInstruction(node: FeedParser$FeedParser$Node): void;
handleSaxError(e: Error): void;
handleText(text: string): void;
init(): void;
isPaused(): any;
listenerCount(type: FeedParser$FeedParser$Type): any;
listeners(type: FeedParser$FeedParser$Type): any;
on(ev: any, fn: any): any;
pause(): any;
pipe(dest: any, pipeOpts: any): any;
push(chunk: any, encoding: any): any;
read(n?: number): FeedParser$FeedParser$Item;
removeAllListeners(type: FeedParser$FeedParser$Type, ...args: any[]): any;
resume(): any;
resumeSaxError(): void;
setDefaultEncoding(encoding: any): any;
setEncoding(enc: any): any;
setMaxListeners(n: any): any;
uncork(): void;
unpipe(dest: any): any;
unshift(chunk: any): any;
wrap(stream: SAXStream, ...args: any[]): any
}
	declare type FeedParser$Type = "atom" | "rss" | "rdf";

declare interface FeedParser$Options {
normalize?: boolean,
addmeta?: boolean,
feedurl?: string,
resume_saxerror?: boolean,
MAX_BUFFER_LENGTH?: number
} 

declare interface FeedParser$Node {
[key: string]: any
} 

declare interface FeedParser$Attrs {
name: string,
value: any,
prefix: string,
local: string,
uri: string
} 

declare interface FeedParser$NS {
[key: string]: string
} 

declare interface FeedParser$Image {
url: string,
title: string
} 

declare interface FeedParser$Meta {
"#ns": FeedParser$NS[],
"#type": FeedParser$Type,
"#version": string,
title: string,
description: string,
date: Date | null,
pubdate: Date | null,
link: string,
xmlurl: string,
author: string,
language: string,
image: FeedParser$Image,
favicon: string,
copyright: string,
generator: string,
categories: string[]
} 

declare interface FeedParser$Item {
title: string,
description: string,
summary: string,
date: Date | null,
pubdate: Date | null,
link: string,
origlink: string,
author: string,
guid: string,
comments: string,
image: FeedParser$Image,
categories: string[],
enclosures: string[],
meta: FeedParser$Meta
} 
    }
