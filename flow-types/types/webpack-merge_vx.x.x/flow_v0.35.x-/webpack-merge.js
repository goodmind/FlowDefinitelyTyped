declare module 'webpack-merge' {
        import type {
          Configuration
        } from 'webpack';

	declare module.exports: typeof webpackMerge

	declare var webpackMerge: webpackMerge$webpackMerge$WebpackMerge;
	declare type webpackMerge$CustomizeArrayFunction = (a: any[], b: any[], key: string) => any[] | null | void;

declare type webpackMerge$CustomizeObjectFunction = (a: {}, b: {}, key: string) => {} | null | void;

declare type webpackMerge$UniqueFunction = (
field: string,
fields: string[],
keyFn: (field: any) => string) => webpackMerge$CustomizeArrayFunction;

declare interface webpackMerge$CustomizeOptions {
customizeArray?: webpackMerge$CustomizeArrayFunction | webpackMerge$UniqueFunction,
customizeObject?: webpackMerge$CustomizeObjectFunction
} 

declare type webpackMerge$ConfigurationMergeFunction = (...configs: Configuration[]) => Configuration;

declare type webpackMerge$ConfigurationMergeConfigFunction = (
customizeOptions: webpackMerge$CustomizeOptions) => webpackMerge$ConfigurationMergeFunction;

declare type webpackMerge$MergeFunction = webpackMerge$ConfigurationMergeFunction | webpackMerge$ConfigurationMergeConfigFunction;

declare type webpackMerge$MergeStrategy = "prepend" | "append" | "replace";

declare interface webpackMerge$WebpackMerge {
(...configs: Configuration[]): Configuration,
(customizeOptions: webpackMerge$CustomizeOptions): webpackMerge$ConfigurationMergeFunction,
unique: webpackMerge$UniqueFunction,
smart: webpackMerge$ConfigurationMergeFunction,
multiple: webpackMerge$ConfigurationMergeFunction,
strategy(
options: {
[field: string]: webpackMerge$MergeStrategy
}): webpackMerge$ConfigurationMergeFunction,
smartStrategy(
options: {
[key: string]: webpackMerge$MergeStrategy
}): webpackMerge$ConfigurationMergeFunction
} 
    }
