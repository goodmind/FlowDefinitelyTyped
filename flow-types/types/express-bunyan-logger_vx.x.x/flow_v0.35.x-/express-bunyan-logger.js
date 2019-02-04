declare module 'express-bunyan-logger' {
        declare module.exports: typeof Factory

	declare function Factory(options?: Factory$Factory$Options): express.RequestHandler

	
      declare var npm$namespace$Factory: {
        errorLogger: typeof Factory$errorLogger,
        
      }
declare type Factory$FormatFunction = (meta: any) => string;

declare type Factory$IncludesFunction = (req: express.Request, res: express.Response) => any;

declare type Factory$RequestIdGenFunction = (req: express.Request) => string;

declare type Factory$LevelFunction = (status: number, err: Error | null, meta: any) => string;

declare interface Factory$Options {
logger?: Bunyan,
format?: string | Factory$FormatFunction,
parseUA?: boolean,
levelFn?: Factory$LevelFunction,
includesFn?: Factory$IncludesFunction,
excludes?: string[],
obfuscate?: string[],
obfuscatePlaceholder?: string,
serializers?: {
[field: string]: Bunyan.Serializer
},
immediate?: boolean,
genReqId?: Factory$RequestIdGenFunction
} 

declare function Factory$errorLogger(options?: Factory$Options): express.ErrorRequestHandler

    }
