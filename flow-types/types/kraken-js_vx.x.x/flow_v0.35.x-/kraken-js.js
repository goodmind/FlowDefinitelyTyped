declare module 'kraken-js' {
        import type {
          Express
        } from 'express';

	declare function k(options?: k$k$Options | string): Express

	declare type k$Kraken = {
kraken: k$Kraken
} & Express


declare interface k$Options {
protocols?: {[key: string]: any},
basedir?: string,
configdir?: string,
mountpath?: string,
inheritViews?: boolean,
startupHeaders?: {
[key: string]: string
},
onconfig(
config: Map<string, any>,
next: (err: Error | null, config?: {[key: string]: any}) => any): any,
uncaughtException(err: Error): any
} 
	declare module.exports: typeof k

    }
