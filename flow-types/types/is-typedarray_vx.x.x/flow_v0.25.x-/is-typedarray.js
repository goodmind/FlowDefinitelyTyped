declare module "is-typedarray" {
  declare export default typeof isTypedArray;

  declare function isTypedArray(candidate: any): boolean;

  declare var npm$namespace$isTypedArray: {
    strict: typeof isTypedArray$strict,
    loose: typeof isTypedArray$loose
  };
  declare function isTypedArray$strict(candidate: any): boolean;

  declare function isTypedArray$loose(candidate: any): boolean;

  declare type isTypedArray$TypedArray =
    | Int8Array
    | Int16Array
    | Int32Array
    | Uint8Array
    | Uint8ClampedArray
    | Uint16Array
    | Uint32Array
    | Float32Array
    | Float64Array
    | Buffer;
}
