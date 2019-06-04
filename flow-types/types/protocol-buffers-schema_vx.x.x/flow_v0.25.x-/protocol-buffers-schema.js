declare module "protocol-buffers-schema" {
  import type { Schema } from "./types";

  declare var parse: typeof npm$namespace$parse;

  declare var npm$namespace$parse: {
    parse: typeof parse$parse,
    stringify: typeof parse$stringify
  };
  declare function parse$parse(buffer: string | Buffer): Schema;

  declare function parse$stringify(schema: Schema): string;

  declare function parse(buffer: string | Buffer): Schema;

  declare export default typeof parse;
}
