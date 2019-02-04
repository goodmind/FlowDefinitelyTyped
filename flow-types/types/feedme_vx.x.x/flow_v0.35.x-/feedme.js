declare module 'feedme' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Writable,Readable
        } from 'stream';

	declare class FeedMe mixins Writable {

/**
 * Creates a new instance of the FeedMe parser.
 * @param buffer Can be true if you want the parser to buffer the entire feed document as a JSON object, letting you use the FeedMe#done() method.
 */
constructor(buffer?: boolean): this;

/**
 * Can only be used if buffer is true. It returns the feed as a Javascript object, should be called after end is emitted from the parser.
 * Subelements are put as children objects with their names as keys. When one object has more than one child of the same name, they are
 * put into an array. Items are always put into an array.
 */
done(): FeedMe$FeedMe$Document;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close" | "drain" | "finish", listener: () => void): this;
on(event: "pipe" | "unpipe", listener: (src: Readable) => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "item", listener: (item: FeedMe$FeedMe$Item) => void): this;
on(event: "type", listener: (type: FeedMe$FeedMe$Type) => void): this
}
	declare type FeedMe$Type = "atom"
| "rss 0.90"
| "rss 0.91"
| "rss 0.92"
| "rss 0.93"
| "rss 0.94"
| "rss 1.0"
| "rss 2.0"
| "json";

declare type FeedMe$Document = {
items: FeedMe$Item[]
} & FeedMe$Meta


declare interface FeedMe$Attrs {
name: string,
value: any,
prefix: string,
local: string,
uri: string
} 

declare interface FeedMe$NS {
[key: string]: string
} 

declare interface FeedMe$Image {
url: string,
title: string,
link: string,
width: string,
height: string
} 

declare interface FeedMe$Meta {
[key: string]: any,
"type": FeedMe$Type,
title: string,
description: string,
date: string,
pubdate: string,
lastbuilddate: string,
link: string,
xmlurl: string,
author: string,
language: string,
image: FeedMe$Image,
favicon: string,
copyright: string,
generator: string,
categories: string[]
} 

declare interface FeedMe$Item {
[key: string]: any,
title: string,
description: string,
summary: string,
date: string,
pubdate: string,
link: string,
origlink: string,
author: string,
guid: string | FeedMe$Guid,
comments: string,
image: FeedMe$Image,
categories: string[],
enclosures: string[]
} 

declare interface FeedMe$Guid {
ispermalink: string,
text: string
} 
	declare module.exports: typeof FeedMe

    }
