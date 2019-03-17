declare module "pg-copy-streams" {
  import type { Submittable, Connection } from "pg";

  import type { Transform, TransformOptions } from "stream";

  declare export function from(
    txt: string,
    options?: TransformOptions
  ): CopyStreamQuery;

  declare export function to(
    txt: string,
    options?: TransformOptions
  ): CopyToStreamQuery;

  declare export class CopyStreamQuery mixins Transform, Submittable {
    submit(connection: Connection): void;
  }
  declare export class CopyToStreamQuery mixins Transform, Submittable {
    submit(connection: Connection): void;
  }
}
