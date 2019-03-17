declare module "ajv-merge-patch" {
  import type { Ajv } from "ajv";

  declare function ajvMergePatch(ajv: Ajv): void;

  declare export default typeof ajvMergePatch;
}
