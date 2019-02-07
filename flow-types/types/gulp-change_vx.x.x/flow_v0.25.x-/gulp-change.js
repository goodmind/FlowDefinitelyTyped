declare module "gulp-change" {
  import typeof * as eventStream from "event-stream";

  declare module.exports: typeof GulpChange;

  declare function GulpChange(
    transformer: GulpChange$GulpChange$ChangeFunction
  ): eventStream.MapStream;

  declare type GulpChange$Callback = (err: any, content: string) => any;

  declare type GulpChange$ChangeFunction = (
    content: string,
    callback: GulpChange$Callback
  ) => string | void;
}
