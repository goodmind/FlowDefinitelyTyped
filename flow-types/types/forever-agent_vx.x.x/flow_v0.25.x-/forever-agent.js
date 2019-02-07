declare module "forever-agent" {
  import type {
    Agent as HttpAgent,
    AgentOptions as HttpAgentOptions
  } from "http";

  declare module.exports: typeof ForeverAgentModule;

  declare type ForeverAgentOptions = {
    minSockets?: number
  } & HttpAgentOptions;

  declare class ForeverAgent mixins HttpAgent {
    constructor(options?: ForeverAgentOptions): this;
    static defaultMinSockets: number;
  }
  declare class ForeverAgentSSL mixins ForeverAgent {
    constructor(options?: ForeverAgentOptions): this;
  }
  declare var ForeverAgentModule: typeof ForeverAgent & {
    SSL: typeof ForeverAgentSSL
  };
}
