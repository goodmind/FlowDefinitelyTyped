declare module "is-trademarked" {
  declare module.exports: typeof isTrademarked;

  declare function isTrademarked(
    searchTerm: string,
    opts?: isTrademarked$isTrademarked$Options
  ): Promise<false | isTrademarked$isTrademarked$TrademarkedData[]>;

  declare interface isTrademarked$Options {
    token?: string;
  }

  declare interface isTrademarked$TrademarkedData {
    wordmark: string;
    reg: Date;
    description: string;
    sn: string;
    serviceCode: string;
  }
}
