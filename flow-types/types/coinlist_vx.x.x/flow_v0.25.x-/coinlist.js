declare module "coinlist" {
  declare module.exports: typeof coins;

  declare var coins: coins$coins$Coin[] & coins$coins$CoinsAPI;
  declare type coins$Coin = coinsJson.coins$Coin;

  declare interface coins$CoinsAPI {
    get(symbol: string): coins$Coin | void;
    get(symbol: string, property: "id" | "symbol" | "name"): string | void;
  }
}
