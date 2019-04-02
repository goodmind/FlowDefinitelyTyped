declare module "acl" {
  import typeof * as http from "http";

  import typeof * as Promise from "bluebird";

  import typeof * as express from "express";

  import typeof * as redis from "redis";

  import typeof * as mongo from "mongodb";

  declare export default typeof AclStatic;

  declare var AclStatic: AclStatic;
  declare type strings = string | string[];
  declare type Value = string | number;
  declare type Values = Value | Value[];
  declare type Action = () => any;
  declare type Callback = (err?: Error) => any;
  declare type AnyCallback = (err: Error, obj: any) => any;
  declare type AllowedCallback = (err: Error, allowed: boolean) => any;
  declare type GetUserId = (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => Value;
  declare interface AclStatic {
    new(
      backend: AclStatic$Backend<any>,
      logger?: AclStatic$Logger,
      options?: AclStatic$Option
    ): AclStatic$Acl;
    +memoryBackend: AclStatic$MemoryBackendStatic;
    +mongodbBackend: AclStatic$MongodbBackendStatic;
    +redisBackend: AclStatic$RedisBackendStatic;
  }
  declare interface AclStatic$Logger {
    debug: (msg: string) => any;
  }

  declare interface AclStatic$Acl {
    addUserRoles: (
      userId: Value,
      roles: strings,
      cb?: Callback
    ) => Promise<void>;
    removeUserRoles: (
      userId: Value,
      roles: strings,
      cb?: Callback
    ) => Promise<void>;
    userRoles: (
      userId: Value,
      cb?: (err: Error, roles: string[]) => any
    ) => Promise<string[]>;
    roleUsers: (
      role: Value,
      cb?: (err: Error, users: Values) => any
    ) => Promise<any>;
    hasRole: (
      userId: Value,
      role: string,
      cb?: (err: Error, isInRole: boolean) => any
    ) => Promise<boolean>;
    addRoleParents: (
      role: string,
      parents: Values,
      cb?: Callback
    ) => Promise<void>;
    removeRole: (role: string, cb?: Callback) => Promise<void>;
    removeResource: (resource: string, cb?: Callback) => Promise<void>;
    allow: {
      (
        roles: Values,
        resources: strings,
        permissions: strings,
        cb?: Callback
      ): Promise<void>,
      (aclSets: AclStatic$AclSet | AclStatic$AclSet[]): Promise<void>
    };
    removeAllow: (
      role: string,
      resources: strings,
      permissions: strings,
      cb?: Callback
    ) => Promise<void>;
    removePermissions: (
      role: string,
      resources: strings,
      permissions: strings,
      cb?: Callback
    ) => Promise<void>;
    allowedPermissions: (
      userId: Value,
      resources: strings,
      cb?: AnyCallback
    ) => Promise<void>;
    isAllowed: (
      userId: Value,
      resources: strings,
      permissions: strings,
      cb?: AllowedCallback
    ) => Promise<boolean>;
    areAnyRolesAllowed: (
      roles: strings,
      resource: strings,
      permissions: strings,
      cb?: AllowedCallback
    ) => Promise<any>;
    whatResources: {
      (roles: strings, cb?: AnyCallback): Promise<any>,
      (roles: strings, permissions: strings, cb?: AnyCallback): Promise<any>
    };
    permittedResources: (
      roles: strings,
      permissions: strings,
      cb?: Callback
    ) => Promise<void>;
    middleware: (
      numPathComponents?: number,
      userId?: Value | GetUserId,
      actions?: strings
    ) => express.RequestHandler;
  }

  declare interface AclStatic$Option {
    buckets?: AclStatic$BucketsOption;
  }

  declare interface AclStatic$BucketsOption {
    meta?: string;
    parents?: string;
    permissions?: string;
    resources?: string;
    roles?: string;
    users?: string;
  }

  declare interface AclStatic$AclSet {
    roles: strings;
    allows: AclStatic$AclAllow[];
  }

  declare interface AclStatic$AclAllow {
    resources: strings;
    permissions: strings;
  }

  declare type AclStatic$MemoryBackend = {} & AclStatic$Backend<Action[]>;

  declare interface AclStatic$MemoryBackendStatic {
    new(): AclStatic$MemoryBackend;
  }

  declare interface AclStatic$Backend<T> {
    begin: () => T;
    end: (transaction: T, cb?: Action) => void;
    clean: (cb?: Action) => void;
    get: (bucket: string, key: Value, cb?: Action) => void;
    union: (bucket: string, keys: Value[], cb?: Action) => void;
    add: (transaction: T, bucket: string, key: Value, values: Values) => void;
    del: (transaction: T, bucket: string, keys: Value[]) => void;
    remove: (
      transaction: T,
      bucket: string,
      key: Value,
      values: Values
    ) => void;
    endAsync: (
      transaction: T,
      cb?: (err: Error | null) => void
    ) => Promise<void>;
    getAsync: (
      bucket: string,
      key: Value,
      cb?: (err: Error | null, value: any) => void
    ) => Promise<any>;
    cleanAsync: (cb?: (error?: Error) => void) => Promise<void>;
    unionAsync: (
      bucket: string,
      keys: Value[],
      cb?: (error: Error | void, results: any[]) => void
    ) => Promise<any[]>;
  }

  declare interface AclStatic$Contract {
    (args: IArguments): AclStatic$Contract | AclStatic$NoOp;
    debug: boolean;
    fulfilled: boolean;
    args: any[];
    checkedParams: string[];
    params: (...types: string[]) => AclStatic$Contract | AclStatic$NoOp;
    end: () => void;
  }

  declare interface AclStatic$NoOp {
    params: (...types: string[]) => AclStatic$NoOp;
    end: () => void;
  }

  declare type AclStatic$RedisBackend = {} & AclStatic$Backend<redis.RedisClient>;

  declare interface AclStatic$RedisBackendStatic {
    new(redis: redis.RedisClient, prefix?: string): AclStatic$RedisBackend;
  }

  declare type AclStatic$MongodbBackend = {} & AclStatic$Backend<Callback>;

  declare interface AclStatic$MongodbBackendStatic {
    new(
      db: mongo.Db,
      prefix?: string,
      useSingle?: boolean
    ): AclStatic$MongodbBackend;
  }
}
