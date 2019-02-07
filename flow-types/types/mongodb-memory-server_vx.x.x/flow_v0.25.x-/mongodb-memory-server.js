declare module "mongodb-memory-server" {
  import type { ChildProcess } from "child_process";

  declare export default typeof _MongoMemoryServer$MongoMemoryServer;

  declare export {
    _MongoMemoryServer$MongoMemoryServer,
    MongoInstance,
    _MongoBinary$MongoBinary
  };

  declare interface _MongoBinary$MongoBinaryCache {
    [version: string]: string;
  }

  declare interface _MongoBinary$MongoBinaryOpts {
    version?: string;
    downloadDir?: string;
    platform?: string;
    arch?: string;
    debug?: boolean | ((...args: any[]) => any);
  }

  declare class _MongoBinary$MongoBinary {
    static cache: _MongoBinary$MongoBinaryCache;
    static getPath(opts?: _MongoBinary$MongoBinaryOpts): Promise<string>;
    static hasValidBinPath(files: string[]): boolean;
  }
  declare interface _MongoInstance$MongodOps {
    instance: {
      port: number,
      storageEngine?: string,
      dbPath: string,
      debug?: boolean | ((...args: any[]) => any)
    };
    binary?: _MongoBinary$_MongoBinary$MongoBinaryOpts;
    spawn?: {
      cwd?: string,
      env?: { [key: string]: any },
      argv0?: string,
      stdio?: string | any[],
      detached?: boolean,
      uid?: number,
      gid?: number,
      shell?: boolean | string
    };
    debug?: boolean | ((...args: any[]) => any);
  }

  declare class _MongoInstance$MongodbInstance {
    static childProcessList: ChildProcess[];
    opts: _MongoInstance$MongodOps;
    debug: (...args: any[]) => any;
    childProcess: ChildProcess;
    killerProcess: ChildProcess;
    instanceReady: (...args: any[]) => any;
    instanceFailed: (...args: any[]) => any;
    static run(
      opts: _MongoInstance$MongodOps
    ): Promise<_MongoInstance$MongodbInstance>;
    constructor(opts: _MongoInstance$MongodOps): this;
    prepareCommandArgs(): string[];
    run(): Promise<_MongoInstance$MongodbInstance>;
    kill(): Promise<_MongoInstance$MongodbInstance>;
    getPid(): number | void;
    _launchMongod(mongoBin: string): ChildProcess;
    _launchKiller(parentPid: number, childPid: number): ChildProcess;
    errorHandler(err: string): void;
    closeHandler(code: number): void;
    stderrHandler(message: string | Buffer): void;
    stdoutHandler(message: string | Buffer): void;
  }
  declare interface _MongoMemoryServer$MongoMemoryServerOptsT {
    instance: {
      port?: number,
      dbPath?: string,
      dbName?: string,
      storageEngine?: string,
      debug?: boolean | ((...args: any[]) => any)
    };
    binary: {
      version?: string,
      downloadDir?: string,
      platform?: string,
      arch?: string,
      debug?: boolean | ((...args: any[]) => any)
    };
    debug?: boolean;
    spawn: any;
    autoStart?: boolean;
  }

  declare interface _MongoMemoryServer$MongoInstanceDataT {
    port: number;
    dbPath: string;
    dbName: string;
    uri: string;
    storageEngine: string;
    instance: _MongoInstance$_MongoInstance$MongodbInstance;
    childProcess: ChildProcess;
    tmpDir?: {
      name: string,
      removeCallback: (...args: any[]) => any
    };
  }

  declare class _MongoMemoryServer$MongoMemoryServer {
    isRunning: boolean;
    runningInstance: Promise<_MongoMemoryServer$MongoInstanceDataT> | void;
    opts: _MongoMemoryServer$MongoMemoryServerOptsT;
    debug: (...args: any[]) => any;
    constructor(opts?: $Shape<_MongoMemoryServer$MongoMemoryServerOptsT>): this;
    start(): Promise<boolean>;
    _startUpInstance(): Promise<_MongoMemoryServer$MongoInstanceDataT>;
    stop(): Promise<boolean>;
    getInstanceData(): Promise<_MongoMemoryServer$MongoInstanceDataT>;
    getUri(otherDbName?: string | boolean): Promise<string>;
    getConnectionString(otherDbName?: string | boolean): Promise<string>;
    getPort(): Promise<number>;
    getDbPath(): Promise<string>;
    getDbName(): Promise<string>;
  }
}
