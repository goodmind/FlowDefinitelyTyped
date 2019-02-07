declare module "parallel-transform" {
  import type { Transform, TransformOptions, TransformCallback } from "stream";

  declare type OnTransform = (chunk: any, callback: TransformCallback) => void;
  declare type ParallelTransform$Options = {
    ordered?: boolean
  } & TransformOptions;

  declare var ParallelTransform: {
    (
      maxParallel: number,
      opts: ParallelTransform$ParallelTransform$Options | void | null,
      ontransform: OnTransform
    ): Transform,
    (
      opts: ParallelTransform$ParallelTransform$Options | number | void | null,
      ontransform: OnTransform
    ): Transform,
    (ontransform: OnTransform): Transform,
    new(
      maxParallel: number,
      opts: ParallelTransform$ParallelTransform$Options | void | null,
      ontransform: OnTransform
    ): Transform,
    new(
      opts: ParallelTransform$ParallelTransform$Options | number | void | null,
      ontransform: OnTransform
    ): Transform,
    new(ontransform: OnTransform): Transform
  };
  declare module.exports: typeof ParallelTransform;
}
