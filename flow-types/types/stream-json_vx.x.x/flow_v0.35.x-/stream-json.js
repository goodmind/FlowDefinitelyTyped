declare module 'stream-json' {
        import typeof * as Assembler from './Assembler';

	import typeof * as Emitter from './Emitter';

	import typeof * as Parser from './Parser';

	import typeof * as Stringer from './Stringer';

	import typeof * as FilterBase from './filters/FilterBase';

	import typeof * as Pick from './filters/Pick';

	import typeof * as Replace from './filters/Replace';

	import typeof * as Ignore from './filters/Ignore';

	import typeof * as Filter from './filters/Filter';

	import typeof * as StreamArray from './streamers/StreamArray';

	import typeof * as StreamObject from './streamers/StreamObject';

	import typeof * as StreamValues from './streamers/StreamValues';

	import typeof * as emit from './utils/emit';

	import typeof * as withParser from './utils/withParser';

	declare module.exports: typeof make

	declare function make(options?: make$Parser.ParserOptions): make$Parser

	declare type ParserClass = make$Parser;
	declare type ParserType = typeof Parser;
	
      declare var npm$namespace$make: {
        parser: typeof make$parser,
        Parser: typeof make$Parser,
      }
declare type make$Parser = ParserClass;

declare var make$Parser: ParserType;

declare function make$parser(options?: make$Parser.ParserOptions): make$Parser

    }
