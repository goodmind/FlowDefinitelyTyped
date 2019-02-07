declare module "react-coinhive" {
  import typeof * as React from "react";

  declare export interface CoinHiveProps {
    autoThreads?: boolean;
    run?: boolean;
    siteKey: string;
    src?: string;
    threads?: number;
    throttle?: number;
    userName?: string;
    onInit?: (callback: any) => void;
    onStart?: (callback: any) => void;
    onStop?: (callback: any) => void;
  }
  declare export default class CoinHive
    mixins React.Component<CoinHiveProps, any> {
    static getMinerData(miner: any): any;
    static src: {
      authedmine: string,
      coinhive: string
    };
    onInit(miner: any): any;
    onStart(miner: any): any;
    onStop(miner: any): any;
  }
}
