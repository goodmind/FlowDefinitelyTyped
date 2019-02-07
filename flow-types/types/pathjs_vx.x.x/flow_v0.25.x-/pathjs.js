declare module "pathjs" {
  declare export interface IDictionary<T> {
    [id: string]: T;
  }
  declare interface IPathHistory {
    initial: any;
    pushState(state: any, title: string, path: string): void;
    popState(event: any): void;
    listen(fallback: any): void;
  }
  declare interface IPathRoute {
    to(fn: () => void): IPathRoute;
    enter(fns: Function | Function[]): IPathRoute;
    exit(fn: () => void): IPathRoute;
    partition(): string[];
    run(): void;
  }
  declare interface IPathRoutes {
    current?: string;
    root?: string;
    rescue?: Function;
    previous?: string;
    defined: IDictionary<IPathRoute>;
  }
  declare interface IPathCore {
    route: IPathRouteConstructor;
  }
  declare interface IPathRouteConstructor {
    new(path: string): IPathRoute;
  }
  declare interface IPath {
    map(path: string): IPathRoute;
    root(path: string): void;
    rescue(fn: Function): void;
    history: IPathHistory;
    match(path: string, parameterize: boolean): IPathRoute | null;
    dispatch(passed_route: string): void;
    listen(): void;
    core: IPathCore;
    routes: IPathRoutes;
  }
  declare var Path: IPath;
}
