declare module "permit" {
  import type { IncomingMessage, ServerResponse } from "http";

  declare export interface PermitOptions {
    scheme?: string;
    proxy?: string;
    realm?: string;
  }
  declare export type BearerOptions = {
    basic?: string,
    header?: string,
    query?: string
  } & PermitOptions;

  declare export class Permit {
    constructor(options: PermitOptions): this;
    check(req: IncomingMessage): void;
    fail(res: ServerResponse): void;
  }
  declare export class Bearer mixins Permit {
    constructor(options: BearerOptions): this;
    check(req: IncomingMessage): string;
  }
  declare export class Basic mixins Permit {
    check(req: IncomingMessage): [string, string];
  }
}
