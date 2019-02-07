declare module "enhanced-resolve" {
  import type {
    LoggingCallbackWrapper,
    ResolverRequest,
    ResolveContext,
    AbstractInputFileSystem
  } from "./lib/common-types";

  import type { Dictionary } from "./lib/concord";

  declare var npm$namespace$Resolve: {
    sync: typeof Resolve$sync,
    context: typeof Resolve$context,
    loader: typeof Resolve$loader,
    create: typeof Resolve$create
  };
  declare function Resolve$sync(path: string, request: string): string;

  declare function Resolve$sync(
    Resolve$context: ResolveContext,
    path: string,
    request: string
  ): string;

  declare function Resolve$context(
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare function Resolve$context(
    Resolve$context: ResolveContext,
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare var npm$namespace$context: {
    sync: typeof context$sync
  };
  declare function context$sync(path: string, request: string): string;

  declare function context$sync(
    Resolve$context: ResolveContext,
    path: string,
    request: string
  ): string;

  declare function Resolve$loader(
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare function Resolve$loader(
    Resolve$context: ResolveContext,
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare var npm$namespace$loader: {
    sync: typeof loader$sync
  };
  declare function loader$sync(path: string, request: string): string;

  declare function loader$sync(
    Resolve$context: ResolveContext,
    path: string,
    request: string
  ): string;

  declare function Resolve$create(
    options: ResolverFactory$ResolverFactory$ResolverOption
  ): {
    (path: string, request: string, callback: LoggingCallbackWrapper): void,
    (
      Resolve$context: ResolveContext,
      path: string,
      request: string,
      callback: LoggingCallbackWrapper
    ): void
  };

  declare var npm$namespace$create: {
    sync: typeof create$sync
  };
  declare function create$sync(
    options: ResolverFactory$ResolverFactory$ResolverOption
  ): {
    (path: string, request: string): string,
    (Resolve$context: ResolveContext, path: string, request: string): string
  };

  declare var npm$namespace$ResolverFactory: {
    createResolver: typeof ResolverFactory$createResolver
  };
  declare interface ResolverFactory$ResolverOption {
    alias?: ResolverFactory$AliasItem[] | Dictionary<string>;
    aliasFields?: string[];
    cachePredicate?: (val: ResolverRequest) => boolean;
    descriptionFiles?: string[];
    enforceExtension?: boolean;
    enforceModuleExtension?: boolean;
    extensions?: string[];
    fileSystem?: AbstractInputFileSystem;
    mainFields?: string[];
    mainFiles?: string[];
    moduleExtensions?: string[];
    modules?: string[];
    plugins?: Tapable.Plugin[];
    resolver?: Resolver;
    resolveToContext?: boolean;
    symlinks?: string[] | boolean;
    unsafeCache?: boolean | Dictionary<any>;
    useSyncFileSystemCalls?: boolean;
  }

  declare interface ResolverFactory$AliasItem {
    alias: string;
    name: string;
    onlyModule?: boolean;
  }

  declare function ResolverFactory$createResolver(
    options: ResolverFactory$ResolverOption
  ): Resolver;

  declare class Resolve$NodeJsInputFileSystem {
    stat(
      path: string,
      callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any
    ): void;
    readdir(
      path: string,
      callback: (err: Error, files: string[]) => void
    ): void;
    readFile(
      filename: string,
      encoding: string,
      callback: (err: NodeJS.ErrnoException, data: string) => void
    ): void;
    readFile(
      filename: string,
      options: {
        encoding: string,
        flag?: string
      },
      callback: (err: NodeJS.ErrnoException, data: string) => void
    ): void;
    readFile(
      filename: string,
      options: {
        flag?: string
      },
      callback: (err: NodeJS.ErrnoException, data: Buffer) => void
    ): void;
    readFile(
      filename: string,
      callback: (err: NodeJS.ErrnoException, data: Buffer) => void
    ): void;
    readlink(
      path: string,
      callback?: (err: NodeJS.ErrnoException, linkString: string) => any
    ): void;
    statSync(path: string | Buffer): fs.Stats;
    readdirSync(path: string): string[];
    readFileSync(filename: string, encoding: string): string;
    readFileSync(
      filename: string,
      options: {
        encoding: string,
        flag?: string
      }
    ): string;
    readFileSync(
      filename: string,
      options?: {
        flag?: string
      }
    ): Buffer;
    readlinkSync(path: string | Buffer): string;
  }

  declare class Resolve$CachedInputFileSystem {
    fileSystem: AbstractInputFileSystem;
    constructor(fileSystem: AbstractInputFileSystem, duration: number): this;
    stat(
      path: string,
      callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => void
    ): void;
    readdir(
      path: string,
      callback: (err: NodeJS.ErrnoException, files: string[]) => void
    ): void;
    readFile(
      path: string,
      callback: (err: NodeJS.ErrnoException, data: Buffer) => void
    ): void;
    readJson(
      path: string,
      callback: (err: NodeJS.ErrnoException, data: any) => void
    ): void;
    readlink(
      path: string,
      callback: (err: NodeJS.ErrnoException, linkString: string) => void
    ): void;
    statSync(path: string | Buffer): fs.Stats;
    readdirSync(path: string): string[];
    readFileSync(
      filename: string,
      options?: {
        flag?: string
      }
    ): Buffer;
    readlinkSync(path: string | Buffer): string;
    readJsonSync(path: string): any;
    purge(what?: string | string[]): void;
  }
  declare function Resolve(
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare function Resolve(
    Resolve$context: ResolveContext,
    path: string,
    request: string,
    callback: LoggingCallbackWrapper
  ): void;

  declare module.exports: typeof Resolve;
}
