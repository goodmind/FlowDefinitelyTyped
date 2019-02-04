declare module "zookeeper" {
    declare export type ACL =
        | number
        | {
              perms: number,
              scheme: string,
              auth: string
          };
    declare export type Stat = {
        czxid: number,
        mzxid: number,
        ctime: number,
        mtime: number,
        version: number,
        cversion: number,
        aversion: number,
        ephemeralOwner: string,
        dataLength: number,
        numChildren: number,
        pzxid: number
    };
    declare export type ConnectionOptions = {
        connect?: string,
        timeout?: number,
        host_order_deterministic?: boolean,
        data_as_buffer?: boolean,
        debug_level?: number
    };
    declare export type child2_callback = (
        rc: number,
        error: string,
        children: string[],
        stat: Stat
    ) => void;
    declare export type watch_callback = (
        type: number,
        state: number,
        path: string
    ) => void;
    declare export type acl_callback = (
        rc: number,
        error: string,
        acl: ACL[],
        stat: Stat
    ) => void;
    declare export type Callback<T> = (
        rc: number,
        error: string,
        value: T
    ) => void;

    declare module.exports: typeof Zookeeper;

    declare export class Zookeeper mixins Client {
        constructor(options: ConnectionOptions): this;
        connect(callback: (e: Error | null, client: Client) => void): void;
        close(): void;
    }
    declare export class Client {
        client_id: string;
        client_password: any;
        state: number;
        timeout: number;
        is_unrecoverable: boolean;
        a_create(
            path: string,
            data: string | Buffer,
            flags: number,
            callback: Callback<string>
        ): void;
        mkdirp(path: string, callback: (e?: Error) => void): void;
        a_exists(path: string, watch: boolean, callback: Callback<Stat>): void;
        a_get(
            path: string,
            watch: boolean,
            callback: Callback<Buffer | string>
        ): void;
        a_get_children(
            path: string,
            watch: boolean,
            callback: Callback<string[]>
        ): void;
        a_get_children2(
            path: string,
            watch: boolean,
            callback: child2_callback
        ): void;
        a_set(
            path: string,
            data: Buffer | string,
            version: number,
            callback: Callback<Stat>
        ): void;
        a_delete_(
            path: string,
            version: number,
            callback: Callback<void>
        ): void;
        a_set_acl(
            path: string,
            version: number,
            acl: ACL[],
            callback: Callback<void>
        ): void;
        a_get_acl(path: string, callback: acl_callback): void;
        add_auth(schema: string, auth: string, callback: Callback<void>): void;
        aw_exists(
            path: string,
            watch_callback: watch_callback,
            callback: Callback<Stat>
        ): void;
        aw_get(
            path: string,
            watch_callback: watch_callback,
            callback: Callback<Buffer | string>
        ): void;
        aw_get_children(
            path: string,
            watch_callback: watch_callback,
            callback: Callback<string[]>
        ): void;
        aw_get_children2(
            path: string,
            watch_callback: watch_callback,
            callback: child2_callback
        ): void;
    }

	declare var Zookeeper$ZOO_LOG_LEVEL_ERROR: 1;

    declare var Zookeeper$ZOO_LOG_LEVEL_WARN: 2;

    declare var Zookeeper$ZOO_LOG_LEVEL_INFO: 3;

    declare var Zookeeper$ZOO_LOG_LEVEL_DEBUG: 4;

    declare var Zookeeper$ZOO_OPEN_ACL_UNSAFE: number;

    declare var Zookeeper$ZOO_READ_ACL_UNSAFE: number;

    declare var Zookeeper$ZOO_CREATOR_ALL_ACL: number;

    declare var Zookeeper$ZOO_PERM_READ: 1;

    declare var Zookeeper$ZOO_PERM_WRITE: 2;

    declare var Zookeeper$ZOO_PERM_CREATE: 4;

    declare var Zookeeper$ZOO_PERM_DELETE: 8;

    declare var Zookeeper$ZOO_PERM_ADMIN: 16;

    declare var Zookeeper$ZOO_PERM_ALL: 31;

    declare var Zookeeper$ZOO_EPHEMERAL: 1;

    declare var Zookeeper$ZOO_SEQUENCE: 2;
	declare export var Zookeeper: {
        ZOO_LOG_LEVEL_ERROR: typeof Zookeeper$ZOO_LOG_LEVEL_ERROR,
        ZOO_LOG_LEVEL_WARN: typeof Zookeeper$ZOO_LOG_LEVEL_WARN,
        ZOO_LOG_LEVEL_INFO: typeof Zookeeper$ZOO_LOG_LEVEL_INFO,
        ZOO_LOG_LEVEL_DEBUG: typeof Zookeeper$ZOO_LOG_LEVEL_DEBUG,
        ZOO_OPEN_ACL_UNSAFE: typeof Zookeeper$ZOO_OPEN_ACL_UNSAFE,
        ZOO_READ_ACL_UNSAFE: typeof Zookeeper$ZOO_READ_ACL_UNSAFE,
        ZOO_CREATOR_ALL_ACL: typeof Zookeeper$ZOO_CREATOR_ALL_ACL,
        ZOO_PERM_READ: typeof Zookeeper$ZOO_PERM_READ,
        ZOO_PERM_WRITE: typeof Zookeeper$ZOO_PERM_WRITE,
        ZOO_PERM_CREATE: typeof Zookeeper$ZOO_PERM_CREATE,
        ZOO_PERM_DELETE: typeof Zookeeper$ZOO_PERM_DELETE,
        ZOO_PERM_ADMIN: typeof Zookeeper$ZOO_PERM_ADMIN,
        ZOO_PERM_ALL: typeof Zookeeper$ZOO_PERM_ALL,
        ZOO_EPHEMERAL: typeof Zookeeper$ZOO_EPHEMERAL,
        ZOO_SEQUENCE: typeof Zookeeper$ZOO_SEQUENCE
    };
}
