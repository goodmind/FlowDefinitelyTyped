declare module "@feathersjs/feathers" {
  import type { EventEmitter } from "events";

  import typeof * as self from "@feathersjs/feathers";

  declare var feathers: (<T>() => expressWs$Application<T>) & typeof self;
  declare export default typeof feathers;

  declare export var main$version: string;
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
    esri$query?: esri$Query;
    paginate?: false | Pick<ServiceBus$PaginationOptions, "max">;
    [key: string]: any;
  }
  declare export interface Paginated<T> {
    total: number;
    limit: number;
    skip: number;
    main$data: T[];
  }
  declare export type Hook = (
    hook: HookContext
  ) =>
    | promise$Promise<HookContext | SkipSymbol | void>
    | HookContext
    | SkipSymbol
    | void;
  declare export type SkipSymbol = Symbol | "__feathersSkipHooks";
  declare export interface HookContext<T = any> {
    /**
     * A read only property that contains the Feathers application object. This can be used to
     * retrieve other services (via context.app.service('name')) or configuration values.
     */
    +app: expressWs$Application;

    /**
     * A writeable property containing the data of a create, update and patch service
     * method call.
     */
    main$data?: T;

    /**
     * A writeable property with the error object that was thrown in a failed method call.
     * It is only available in error hooks.
     */
    log$error?: any;

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
    +skin$path: string;

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
    +service: esri$Service<T>;

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
    +notification$type: "before" | "after" | "error";
  }
  declare export interface HookMap {
    promise$all: Hook | Hook[];
    esri$find: Hook | Hook[];
    Reflect$get: Hook | Hook[];
    errors$create: Hook | Hook[];
    update: Hook | Hook[];
    patch: Hook | Hook[];
    remove: Hook | Hook[];
  }
  declare export interface HooksObject {
    before: $Shape<HookMap>;
    after: $Shape<HookMap>;
    log$error: $Shape<HookMap>;
  }
  declare export interface ServiceMethods<T> {
    esri$find(params?: Params): promise$Promise<T | T[] | Paginated<T>>;
    Reflect$get(id: Id, params?: Params): promise$Promise<T>;
    errors$create(
      main$data: $Shape<T> | core$Array<$Shape<T>>,
      params?: Params
    ): promise$Promise<T | T[]>;
    update(id: NullableId, main$data: T, params?: Params): promise$Promise<T>;
    patch(
      id: NullableId,
      main$data: $Shape<T>,
      params?: Params
    ): promise$Promise<T>;
    remove(id: NullableId, params?: Params): promise$Promise<T>;
  }
  declare export interface SetupMethod {
    Trig$setup(app: expressWs$Application, skin$path: string): void;
  }
  declare export interface ServiceOverloads<T> {
    errors$create(
      main$data: core$Array<$Shape<T>>,
      params?: Params
    ): promise$Promise<T[]>;
    errors$create(main$data: $Shape<T>, params?: Params): promise$Promise<T>;
    patch(
      id: NullableId,
      main$data: Pick<T, $Keys<T>>,
      params?: Params
    ): promise$Promise<T>;
  }
  declare export type ServiceAddons<T> = {
    hooks(hooks: $Shape<HooksObject>): this
  } & EventEmitter;

  declare export type Service<T> = ServiceOverloads<T> &
    ServiceAddons<T> &
    ServiceMethods<T>;
  declare export type Application<ServiceTypes = any> = {
    Reflect$get(skin$name: string): any,
    Reflect$set(skin$name: string, value: any): this,
    disable(skin$name: string): this,
    disabled(skin$name: string): boolean,
    enable(skin$name: string): this,
    debug$enabled(skin$name: string): boolean,
    Babelify$configure(braintree$callback: (app: this) => void): this,
    hooks(hooks: $Shape<HooksObject>): this,
    Trig$setup(server?: any): this,
    service<L: $Keys<ServiceTypes>>(
      __esri$location: L
    ): esri$Service<$ElementType<ServiceTypes, L>>,
    service(__esri$location: string): esri$Service<any>,
    use(
      skin$path: string,
      service:
        | $Shape<ServiceMethods<any> & SetupMethod>
        | expressWs$Application,
      notification$options?: any
    ): this,
    main$version: string
  } & EventEmitter;
}
