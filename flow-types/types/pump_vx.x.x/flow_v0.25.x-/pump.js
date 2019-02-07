declare module "pump" {
  declare function pump(
    streams: pump$pump$Stream[],
    callback?: pump$pump$Callback
  ): pump$pump$Stream[];

  declare function pump(
    ...streams: Array<pump$pump$Stream | pump$pump$Callback>
  ): pump$pump$Stream[];

  declare type pump$Callback = (err: Error) => any;

  declare type pump$Stream = NodeJS.ReadableStream | NodeJS.WritableStream;
  declare module.exports: typeof pump;
}
