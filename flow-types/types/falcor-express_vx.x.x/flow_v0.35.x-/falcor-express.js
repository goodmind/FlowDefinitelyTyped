declare module 'falcor-express' {
        import type {
          Request,Response,Handler
        } from 'express';

	import type {
          DataSource
        } from 'falcor';

	declare function dataSourceRoute(getDataSource: (req: Request, res: Response) => DataSource): Handler

    }
