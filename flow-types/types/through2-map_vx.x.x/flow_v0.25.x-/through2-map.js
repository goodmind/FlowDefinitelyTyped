declare module "through2-map" {
  declare type MapCallback = (chunk: any, index: number) => void;
  declare type Through2MapOptions = {
    wantStrings?: boolean
  } & stream.DuplexOptions;

  declare function through2_map(
    options?: Through2MapOptions,
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map(fn?: MapCallback): through2.Through2Constructor;

  declare var npm$namespace$through2_map: {
    ctor: typeof through2_map$ctor,
    obj: typeof through2_map$obj,
    objCtor: typeof through2_map$objCtor
  };
  declare function through2_map$ctor(
    options?: Through2MapOptions,
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map$ctor(
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map$obj(
    options?: Through2MapOptions,
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map$obj(
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map$objCtor(
    options?: Through2MapOptions,
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare function through2_map$objCtor(
    fn?: MapCallback
  ): through2.Through2Constructor;

  declare export default typeof through2_map;
}
