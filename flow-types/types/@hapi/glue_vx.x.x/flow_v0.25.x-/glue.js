declare module "@hapi/glue" {
  import type { Server, ServerOptions } from "@hapi/hapi";

  declare export interface Options {
    relativeTo: string;
    preConnections?: (Server: Server, next: (err: any) => void) => void;
    preRegister?: (Server: Server, next: (err: any) => void) => void;
  }
  declare export interface Plugin {
    plugin:
      | string
      | {
          register: string,
          options?: any
        };
    options?: any;
    routes?: any;
  }
  declare export interface Manifest {
    server: ServerOptions;
    register?: {
      plugins: string[] | Plugin[] | Array<string | Plugin>
    };
  }
  declare export function compose(
    manifest: Manifest,
    options?: Options
  ): Promise<Server>;
}
