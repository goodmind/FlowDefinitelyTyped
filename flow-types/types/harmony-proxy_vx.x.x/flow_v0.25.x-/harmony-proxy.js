declare module "harmony-proxy" {
  declare type harmonyProxy$PropertyKey = string | number | Symbol;

  declare interface harmonyProxy$ProxyHandler<T> {
    getPrototypeOf?: (target: T) => any;
    setPrototypeOf?: (target: T, v: any) => boolean;
    isExtensible?: (target: T) => boolean;
    preventExtensions?: (target: T) => boolean;
    getOwnPropertyDescriptor?: (
      target: T,
      p: harmonyProxy$PropertyKey
    ) => PropertyDescriptor;
    has?: (target: T, p: harmonyProxy$PropertyKey) => boolean;
    get?: (target: T, p: harmonyProxy$PropertyKey, receiver: any) => any;
    set?: (
      target: T,
      p: harmonyProxy$PropertyKey,
      value: any,
      receiver: any
    ) => boolean;
    deleteProperty?: (target: T, p: harmonyProxy$PropertyKey) => boolean;
    defineProperty?: (
      target: T,
      p: harmonyProxy$PropertyKey,
      attributes: PropertyDescriptor
    ) => boolean;
    enumerate?: (target: T) => harmonyProxy$PropertyKey[];
    ownKeys?: (target: T) => harmonyProxy$PropertyKey[];
    apply?: (target: T, thisArg: any, argArray?: any) => any;
    construct?: (target: T, thisArg: any, argArray?: any) => any;
  }

  declare interface harmonyProxy$ProxyConstructor {
    revocable<T>(
      target: T,
      handler: harmonyProxy$ProxyHandler<T>
    ): {
      proxy: T,
      revoke: () => void
    };
    new<T>(target: T, handler: harmonyProxy$ProxyHandler<T>): T;
  }
  declare var _Proxy: harmonyProxy$harmonyProxy$ProxyConstructor;
  declare module.exports: typeof _Proxy;
}
