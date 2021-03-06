declare module "geoip-lite" {
  declare var npm$namespace$mod: {
    lookup: typeof mod$lookup,
    pretty: typeof mod$pretty,
    startWatchingDataUpdate: typeof mod$startWatchingDataUpdate,
    stopWatchingDataUpdate: typeof mod$stopWatchingDataUpdate
  };
  declare export interface mod$Lookup {
    range: Array<number>;
    country: string;
    region: string;
    city: string;
    ll: Array<number>;
  }

  declare export function mod$lookup(ip: string): mod$Lookup;

  declare export function mod$pretty(ip: number): string;

  declare export function mod$startWatchingDataUpdate(): void;

  declare export function mod$stopWatchingDataUpdate(): void;

  declare export default typeof mod;
}
