declare module "ganache-core" {
  import type { Provider } from "ethereum-protocol";

  declare export interface GanacheOpts {
    verbose?: boolean;
    logger?: {
      log(msg: string): void
    };
    port?: number;
    network_id?: number;
    networkId?: number;
    mnemonic?: string;
    gasLimit?: number;
    vmErrorsOnRPCResponse?: boolean;
    db_path?: string;
  }
  declare export function provider(opts: GanacheOpts): Provider;
}
