declare module 'express-unless' {
        declare function unless(options: unless$unless$Options): express.unless$RequestHandler

	declare export interface unless$Options {
custom?: (req: express.Request) => boolean,
path?: any,
ext?: any,
method?: any
} 

declare export type unless$RequestHandler = {
unless?: typeof unless
} & express.unless$RequestHandler

	declare module.exports: typeof unless

    }
