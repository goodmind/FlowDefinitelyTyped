declare module "elv" {
  declare function elv(val: any): boolean;

  declare var elv: typeof npm$namespace$elv;

  declare var npm$namespace$elv: {
    coalesce: typeof elv$coalesce,
    ncoalesce: typeof elv$ncoalesce,
    populated: typeof elv$populated,
    tryGet: typeof elv$tryGet,
    behavior: typeof elv$behavior
  };
  declare var elv$behavior: {
    enableFalse: boolean,
    enableNaN: boolean,
    enableNull: boolean,
    enableUndefined: boolean
  };

  declare function elv$coalesce(...args: any[]): any;

  declare function elv$ncoalesce(...args: any[]): any;

  declare function elv$populated(val: any): boolean;

  declare function elv$tryGet(
    val: $ReadOnlyArray<any>,
    index: number,
    def?: any
  ): any;

  declare export default typeof elv;
}
