declare module 'hapi-pino' {
        import type {
          Plugin
        } from 'hapi';

	import typeof * as pino from 'pino';

	declare module 'hapi' {
        declare interface Server {
logger: () => pino.Logger
} 
	declare interface Request {
logger: pino.Logger
} 
    }

	declare type HapiPino$LogLevels = "trace"
| "debug"
| "info"
| "warn"
| "error";

declare interface HapiPino$Options {
logPayload?: boolean,
logRouteTags?: boolean,
stream?: NodeJS.WriteStream,
prettyPrint?: boolean,
levelTags?: $ObjMapi<{[k: HapiPino$LogLevels]: any}, <key>(key) => string>,
allTags?: HapiPino$LogLevels,
serializers?: {
[key: string]: (param: any) => void
},
instance?: pino.Logger,
logEvents?: string[] | false | null,
mergeHapiLogData?: boolean,
ignorePaths?: string[],
level?: HapiPino$LogLevels,
redact?: string[]
} 
	declare var HapiPino: Plugin<HapiPino$HapiPino$Options>;
	declare module.exports: typeof HapiPino

    }
