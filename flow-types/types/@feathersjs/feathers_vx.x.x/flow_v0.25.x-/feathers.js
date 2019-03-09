declare module "@feathersjs/feathers" {
  import type { EventEmitter } from "events";

  import typeof * as self from "@feathersjs/feathers";

  declare var feathers: (<T>() => Application<T>) & typeof self;
  declare export default typeof feathers;

  declare export var version: string;
  declare export var SKIP: SkipSymbol;
  declare export type Id = number | string;
  declare export type NullableId = Id | null;
  declare export interface Query {
    [key: string]: any;
  }
  declare export interface PaginationOptions {
    default: number;
    max: number;
  }
  declare export type ClientSideParams = Pick<Params, "query" | "paginate">;
  declare export type ServerSideParams = Params;
  declare export interface Params {
    query?: Query;
    paginate?: false | Pick<PaginationOptions, "max">;
    [key: string]: any;
  }
  declare export interface Paginated<T> {
    total: number;
    limit: number;
    skip: number;
    data: T[];
  }
  declare export type Hook = (
    hook: HookContext<>
  ) =>
    | Promise<HookContext<> | SkipSymbol | void>
    | HookContext<>
    | SkipSymbol
    | void;
  declare export type SkipSymbol = Symbol | "__feathersSkipHooks";
  declare export interface HookContext<T = any> {
    /**
     * A read only property that contains the Feathers application object. This can be used to
     * retrieve other services (via context.app.service('name')) or configuration values.
     */
    +app: Application<>;

    /**
     * A writeable property containing the data of a create, update and patch service
     * method call.
     */
    data?: T;

    /**
     * A writeable property with the error object that was thrown in a failed method call.
     * It is only available in error hooks.
     */
    error?: any;

    /**
     * A writeable property and the id for a get, remove, update and patch service
     * method call. For remove, update and patch context.id can also be null when
     * modifying multiple entries. In all other cases it will be undefined.
     */
    id?: string | number;

    /**
     * A read only property with the name of the service method (one of find, get,
     * create, update, patch, remove).
     */
    +method: string;

    /**
     * A writeable property that contains the service method parameters (including
     * params.query).
     */
    params: Params;

    /**
     * A read only property and contains the service name (or path) without leading or
     * trailing slashes.
     */
    +path: string;

    /**
     * A writeable property containing the result of the successful service method call.
     * It is only available in after hooks.
     *
     * `context.result` can also be set in
     *
     *   - A before hook to skip the actual service method (database) call
     *   - An error hook to swallow the error and return a result instead
     */
    result?: T;

    /**
     * A read only property and contains the service this hook currently runs on.
     */
    +service: Service<T>;

    /**
     * A writeable, optional property and contains a "safe" version of the data that
     * should be sent to any client. If context.dispatch has not been set context.result
     * will be sent to the client instead.
     */
    dispatch?: T;

    /**
     * A writeable, optional property that allows to override the standard HTTP status
     * code that should be returned.
     */
    statusCode?: number;

    /**
     * A read only property with the hook type (one of before, after or error).
     */
    +type: "before" | "after" | "error";
  }
  declare export interface HookMap {
    all: Hook | Hook[];
    find: Hook | Hook[];
    get: Hook | Hook[];
    create: Hook | Hook[];
    update: Hook | Hook[];
    patch: Hook | Hook[];
    remove: Hook | Hook[];
  }
  declare export interface HooksObject {
    before: $Shape<HookMap>;
    after: $Shape<HookMap>;
    error: $Shape<HookMap>;
  }
  declare export interface ServiceMethods<T> {
    find(params?: Params): Promise<T | T[] | Paginated<T>>;
    get(id: Id, params?: Params): Promise<T>;
    create(
      data: $Shape<T> | Array<$Shape<T>>,
      params?: Params
    ): Promise<T | T[]>;
    update(id: NullableId, data: T, params?: Params): Promise<T>;
    patch(id: NullableId, data: $Shape<T>, params?: Params): Promise<T>;
    remove(id: NullableId, params?: Params): Promise<T>;
  }
  declare export interface SetupMethod {
    setup(app: Application<>, path: string): void;
  }
  declare export interface ServiceOverloads<T> {
    create(data: Array<$Shape<T>>, params?: Params): Promise<T[]>;
    create(data: $Shape<T>, params?: Params): Promise<T>;
    patch(id: NullableId, data: Pick<T, $Keys<T>>, params?: Params): Promise<T>;
  }
  declare export type ServiceAddons<T> = {
    hooks(hooks: $Shape<HooksObject>): this
  } & EventEmitter;

  declare export type Service<T> = ServiceOverloads<T> &
    ServiceAddons<T> &
    ServiceMethods<T>;
  declare export type Application<ServiceTypes = any> = {
    get(name: string): any,
    set(name: string, value: any): this,
    disable(name: string): this,
    disabled(name: string): boolean,
    enable(name: string): this,
    enabled(name: string): boolean,
    configure(callback: (app: this) => void): this,
    hooks(hooks: $Shape<HooksObject>): this,
    setup(server?: any): this,
    service<L: $Keys<ServiceTypes>>(
      location: L
    ): Service<$ElementType<ServiceTypes, L>>,
    service(location: string): Service<any>,
    use(
      path: string,
      service: $Shape<ServiceMethods<any> & SetupMethod> | Application<>,
      options?: any
    ): this,
    version: string
  } & EventEmitter;
}
