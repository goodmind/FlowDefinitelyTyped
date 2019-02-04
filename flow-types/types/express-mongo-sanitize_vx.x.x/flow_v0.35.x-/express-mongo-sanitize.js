declare module 'express-mongo-sanitize' {
        declare interface MongoSanitizeOptions {
replaceWith: any
} 
	
      declare var npm$namespace$expressMongoSanitize: {
        sanitize: typeof expressMongoSanitize$sanitize,
has: typeof expressMongoSanitize$has,
        
      }
declare function expressMongoSanitize$sanitize<T>(payload: T, options?: MongoSanitizeOptions): T


declare function expressMongoSanitize$has(payload: any): boolean

	declare function expressMongoSanitize(
options?: MongoSanitizeOptions): (
req: express.Request,
res: express.Response,
next: express.NextFunction) => void

	declare module.exports: typeof expressMongoSanitize

    }
