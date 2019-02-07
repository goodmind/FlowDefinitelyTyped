declare module "jsreport-core" {
  declare type JsReport$Helpers =
    | string
    | {
        [fun: string]: (...args: any[]) => any
      };

  declare type JsReport$Engine = "none";

  declare type JsReport$Recipe = "html";

  declare interface JsReport$Template {
    content: string;
    engine: JsReport$Engine | string;
    helpers: JsReport$Helpers;
    recipe: JsReport$Recipe | string;
  }

  declare interface JsReport$Request {
    template: $Shape<JsReport$Template>;
    options: { [key: string]: any };
    data: any;
  }

  declare interface JsReport$Response {
    content: Buffer;
    stream: NodeJS.ReadableStream;
    headers: {
      [header: string]: string | number | boolean
    };
  }

  declare interface JsReport$ListenerCollection {
    add(
      type: string,
      callback: (
        req: JsReport$Request,
        res: JsReport$Response,
        err?: any
      ) => Promise<any> | void
    ): void;
  }

  declare interface JsReport$Collection {
    find(query: {
      [field: string]: any
    }): Promise<{ [key: string]: any }[]>;
    update(
      query: {
        [field: string]: any
      },
      update: { [key: string]: any },
      options?: { [key: string]: any }
    ): Promise<any>;
    remove(query: {
      [field: string]: any
    }): Promise<any>;
    insert(obj: { [key: string]: any }): Promise<{ [key: string]: any }>;
  }

  declare interface JsReport$DocumentStore {
    collection(name: string): JsReport$Collection;
  }

  declare type JsReport$Extension = (
    reporter: JsReport$Reporter,
    definition: { [key: string]: any }
  ) => void;

  declare interface JsReport$ExtensionDefinition {
    options: any;
    main: any;
    directory: string;
  }

  declare interface JsReport$Reporter {
    use(
      extension: JsReport$Extension | JsReport$ExtensionDefinition
    ): JsReport$Reporter;
    afterRenderListeners: JsReport$ListenerCollection;
    afterTemplatingEnginesExecutedListeners: JsReport$ListenerCollection;
    beforeRenderListeners: JsReport$ListenerCollection;
    documentStore: JsReport$DocumentStore;
    initializeListeners: JsReport$ListenerCollection;
    logger: any;
    validateRenderListeners: JsReport$ListenerCollection;
    version: string;
    init(): Promise<JsReport$Reporter>;
    render(options: $Shape<JsReport$Request>): Promise<JsReport$Response>;
    discover(): JsReport$Reporter;
    createListenerCollection(): JsReport$ListenerCollection;
  }

  declare interface JsReport$Configuration {
    autoTempCleanup: boolean;
    dataDirectory: string;
    extensionsLocationCache: boolean;
    loadConfig: boolean;
    logger: {
      silent: boolean
    };
    rootDirectory: string;
    scripts: {
      allowedModules: string[]
    };
    tasks: $Shape<{
      allowedModules: string[] | string,
      strategy: "dedicated-process" | "http-server" | "in-process" | string
    }>;
    tempDirectory: string;
  }
  declare function JsReport(
    config?: $Shape<JsReport$JsReport$Configuration>
  ): JsReport$JsReport$Reporter;

  declare module.exports: typeof JsReport;
}
