declare module "mongoose-deep-populate" {
  import type { Mongoose, Schema } from "mongoose";

  declare export default function fn(
    mognoose: Mongoose
  ): (schema: Schema, options: Object) => void;
}
