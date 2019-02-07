declare module "web3" {
  import type Providers, { Provider } from "./providers";

  import type { Bzz, Shh } from "./types";

  import type { BatchRequest, Net, Personal } from "./eth/types";

  import typeof Utils from "./utils";

  import typeof Eth from "./eth/index";

  declare class Web3 {
    static providers: Providers;
    static givenProvider: Provider;
    static modules: {
      Eth: (provider: Provider) => Eth,
      Net: (provider: Provider) => Net,
      Personal: (provider: Provider) => Personal,
      Shh: (provider: Provider) => Shh,
      Bzz: (provider: Provider) => Bzz
    };
    static utils: Utils;
    constructor(provider?: Provider | string): this;
    version: string;
    BatchRequest: () => BatchRequest;
    extend(methods: any): any;
    bzz: Bzz;
    currentProvider: Provider;
    eth: Eth;
    shh: Shh;
    givenProvider: Provider;
    providers: Providers;
    setProvider(provider: Provider): void;
    utils: Utils;
  }
  declare module.exports: typeof Web3;
}
