declare module "loader-runner" {
  declare export interface Loader {
    path: string;
    query: string;
    request: string;
    options: any;
    normal: null | ((request: string) => string);
    pitch: null | ((request: string) => string);
    raw: string;
    data: any;
    pitchExecuted: boolean;
    normalExecuted: boolean;
  }
  declare export interface RunLoaderOption {
    resource: string;
    loaders: any[];
    context: any;
    readResource: (
      filename: string,
      callback: (err: NodeJS.ErrnoException | null, data: Buffer | null) => void
    ) => void;
  }
  declare export interface RunLoaderResult {
    result?: (Buffer | null)[];
    resourceBuffer?: Buffer | null;
    cacheable: boolean;
    fileDependencies: string[];
    contextDependencies: string[];
  }
  declare export interface ExtendedLoaderContext {
    context: string | null;
    loaderIndex: number;
    loaders: Loader[];
    resourcePath: string | void;
    resourceQuery: string | void;
    async: (() => (() => void) | void) | null;
    callback: (() => void) | null;
    cacheable: (flag: boolean) => void;
    dependency: (file: string) => void;
    addDependency: (file: string) => void;
    addContextDependency: (context: string) => void;
    getDependencies: () => string[];
    getContextDependencies: () => string[];
    clearDependencies: () => void;
    resource: string;
    request: string;
    remainingRequest: string;
    currentRequest: string;
    previousRequest: string;
    query:
      | {
          [key: string]: any
        }
      | string;
    data: any;
  }
  declare export function getContext(resource: string): string;

  declare export function runLoaders(
    options: RunLoaderOption,
    callback: (
      err: NodeJS.ErrnoException | null,
      result: RunLoaderResult
    ) => any
  ): void;
}
