declare module "geokdbush" {
  import type { KDBush } from "kdbush";

  declare export function around<T>(
    index: KDBush<T>,
    longitude: number,
    latitude: number,
    maxResults?: number,
    maxDistance?: number,
    filterFn?: any
  ): T[];

  declare export function distance(
    longitude1: number,
    latitude1: number,
    longitude2: number,
    latitude2: number
  ): number;
}
