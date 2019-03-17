declare module 'global' {
        declare var yog: yog$Yog;
    }
declare module 'yog2-kernel' {
        import typeof * as express from 'express';

	import typeof * as _ from 'lodash';

	import typeof * as ral from 'node-ral';

	import typeof * as log from 'yog-log';

	import typeof * as yogBigpipe from 'yog-bigpipe';

	declare export interface YogBootstrapOption {
rootPath?: string,
pluginsPath?: string,
confPath?: string,
app?: express.Express
} 
	declare export type Request = {
CURRENT_APP: string,
ral: typeof ral.RAL,
ralP: typeof ral.RALPromise
} & express.Request

	declare export type Response = {
bigpipe: yogBigpipe.BigPipe
} & express.Response

	declare export interface ActionObject {
get?: express.RequestHandler,
post?: express.RequestHandler,
put?: express.RequestHandler,
delete?: express.RequestHandler,
del?: express.RequestHandler,
copy?: express.RequestHandler,
head?: express.RequestHandler,
options?: express.RequestHandler,
purge?: express.RequestHandler,
lock?: express.RequestHandler,
unlock?: express.RequestHandler,
propfind?: express.RequestHandler,
view?: express.RequestHandler,
link?: express.RequestHandler,
unlick?: express.RequestHandler,
patch?: express.RequestHandler,
[key: string]: any
} 
	declare export type Router = {
action(actionName: string): express.RequestHandler | ActionObject,
wrapAsync(
fn: (req: Request, resp: Response, next: express.NextFunction) => any): express.RequestHandler
} & express.Router

	declare var yog: typeof npm$namespace$yog;

      declare var npm$namespace$yog: {
        
        
        
        Yog: typeof yog$Yog,
        
      }
declare class yog$Yog  {
express: typeof express;
app: express.Express;
_: typeof _;
log: log.Logger;
ral: typeof ral.RAL | typeof ral.RALPromise;
RAL: typeof ral.RAL;
ralP: typeof ral.RALPromise;
view: {
cleanCache(): void
};
reloadApp(appName: string): void;
reloadView(): void;
reloadIsomorphic(): void;
ROOT_PATH: string;
bootstrap(option: YogBootstrapOption, callback?: () => void): void
}
	declare export default typeof yog

    }
