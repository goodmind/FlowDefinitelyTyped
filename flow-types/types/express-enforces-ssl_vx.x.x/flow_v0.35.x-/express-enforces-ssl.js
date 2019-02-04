declare module 'express-enforces-ssl' {
        import type {
          Request,Response,NextFunction
        } from 'express';

	
/**
 * Enforces HTTPS connections on any incoming requests.
 */
declare function enforceHTTPS(): (req: Request, res: Response, next: NextFunction) => void

	declare module.exports: typeof enforceHTTPS

    }
