declare module "web3-provider-engine" {
  import type {
    Provider,
    JSONRPCRequestPayload,
    JSONRPCResponsePayload
  } from "ethereum-protocol";

  declare interface Web3ProviderEngineOptions {
    pollingInterval?: number;
    blockTracker?: any;
    blockTrackerProvider?: any;
  }
  declare class Web3ProviderEngine mixins Provider {
    constructor(options?: Web3ProviderEngineOptions): this;
    on(event: string, handler: () => void): void;
    send(payload: JSONRPCRequestPayload): void;
    sendAsync(
      payload: JSONRPCRequestPayload,
      callback: (error: null | Error, response: JSONRPCResponsePayload) => void
    ): void;
    addProvider(provider: any): void;
    start(callback?: () => void): void;
    stop(): void;
  }
  declare module.exports: typeof Web3ProviderEngine;
}
