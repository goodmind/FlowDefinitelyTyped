declare module 'body-parser-xml' {
        import type {
          Request,RequestHandler,Response,NextFunction
        } from 'express';

	declare function bodyParserXml(bodyParser: any): (req: Request, res: Response, next: NextFunction) => void

	declare module.exports: typeof bodyParserXml

    }
