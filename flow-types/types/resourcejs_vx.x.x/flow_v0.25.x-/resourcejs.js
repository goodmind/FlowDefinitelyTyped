declare module "resourcejs" {
  declare module.exports: typeof resourcejs;

  declare function resourcejs(
    app: express.Application,
    route: string,
    modelName: string,
    model: mongoose.Model<mongoose.Document>
  ): resourcejs$resourcejs$ResourceEndpoint;

  declare type resourcejs$HttpHandler = (
    req: resourcejs$Request,
    res: resourcejs$Response,
    next: express.NextFunction
  ) => void;

  declare type resourcejs$MethodBuild<T> = (
    options?: T
  ) => resourcejs$ResourceEndpoint;

  declare type resourcejs$RestOptions = {
    beforePut?: resourcejs$HttpHandler,
    beforePatch?: resourcejs$HttpHandler,
    beforePost?: resourcejs$HttpHandler,
    beforeIndex?: resourcejs$HttpHandler,
    beforeGet?: resourcejs$HttpHandler,
    afterPut?: resourcejs$HttpHandler,
    afterPatch?: resourcejs$HttpHandler,
    afterPost?: resourcejs$HttpHandler,
    afterIndex?: resourcejs$HttpHandler,
    afterGet?: resourcejs$HttpHandler
  } & resourcejs$HttpMethodOptions;

  declare type resourcejs$VirtualOptions = {
    path?: string
  } & resourcejs$HttpMethodOptions;

  declare interface resourcejs$HttpMethodOptions {
    before?: resourcejs$HttpHandler;
    after?: resourcejs$HttpHandler;
  }

  /**
   * We manually generated this interface by looking an resource like this:
   * const resource = Resource(app, route, name, model);
   * console.log(resource);
   */
  declare interface resourcejs$ResourceEndpoint {
    model: mongoose.Model<mongoose.Document>;
    modelName: string;
    name: string;
    route: string;
    methods: string[];
    __swagger: any;
    register: (
      app: express.Application,
      method: string,
      path: string,
      callback: (...args: any[]) => any,
      last: (...args: any[]) => any,
      options: { [key: string]: any }
    ) => any;
    respond: resourcejs$HttpHandler;
    setResponse: resourcejs$HttpHandler;
    getMethodOptions: (
      method: string,
      options: { [key: string]: any }
    ) => { [key: string]: any };
    rest: resourcejs$MethodBuild<resourcejs$RestOptions>;
    getParamQuery: (req: resourcejs$Request, name: string) => any;
    getFindQuery: (req: resourcejs$Request) => { [key: string]: any };
    index: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    get: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    virtual: resourcejs$MethodBuild<resourcejs$VirtualOptions>;
    post: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    put: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    patch: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    delete: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
    swagger: resourcejs$MethodBuild<resourcejs$HttpMethodOptions>;
  }

  declare type resourcejs$Request = {
    skipResource: boolean,
    noResponse: boolean,
    query: any,
    countQuery: any,
    modelQuery: any,
    skipDelete: boolean
  } & express.resourcejs$Request;

  declare type resourcejs$Response = {
    resource: resourcejs$Resource
  } & express.resourcejs$Response;

  declare interface resourcejs$Resource {
    status: number;
    error: resourcejs$Error;
    item: any;
  }

  declare interface resourcejs$Error {
    message: string;
    path: string;
    name: string;
    errors: resourcejs$Error[];
  }
}
