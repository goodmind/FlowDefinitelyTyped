declare module "global" {
  declare interface Function {
    __wrapped?: boolean;
  }
}
declare module "shimmer" {
  declare var shimmer: {
    (options: {
      logger?: (msg: string) => void
    }): void,
    wrap<Nodule: { [key: string]: any }, FieldName: $Keys<Nodule>>(
      nodule: Nodule,
      name: FieldName,
      wrapper: (
        original: $ElementType<Nodule, FieldName>
      ) => $ElementType<Nodule, FieldName>
    ): void,
    massWrap<Nodule: { [key: string]: any }, FieldName: $Keys<Nodule>>(
      nodules: Nodule[],
      names: FieldName[],
      wrapper: (
        original: $ElementType<Nodule, FieldName>
      ) => $ElementType<Nodule, FieldName>
    ): void,
    unwrap<Nodule: { [key: string]: any }>(
      nodule: Nodule,
      name: $Keys<Nodule>
    ): void,
    massUnwrap<Nodule: { [key: string]: any }>(
      nodules: Nodule[],
      names: Array<$Keys<Nodule>>
    ): void
  };
  declare module.exports: typeof shimmer;
}
