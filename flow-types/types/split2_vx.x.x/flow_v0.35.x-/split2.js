declare module 'split2' {
        import type {
          Transform,TransformOptions
        } from 'stream';

	declare type Matcher = string | RegExp;
	declare type Mapper = split$split$Mapper;
	declare type Options = split$split$Options;
	declare function split(): Transform

	declare function split(matcher: Matcher): Transform

	declare function split(mapper: split$Mapper): Transform

	declare function split(options: split$Options): Transform

	declare function split(matcher: Matcher, mapper: split$Mapper): Transform

	declare function split(matcher: Matcher, options: split$Options): Transform

	declare function split(mapper: split$Mapper, options: split$Options): Transform

	declare function split(matcher: Matcher, mapper: split$Mapper, options: split$Options): Transform

	declare export interface split$Mapper {
(line: string): any
} 

declare export type split$Options = {
maxLength?: number
} & TransformOptions

	declare module.exports: typeof split

    }
