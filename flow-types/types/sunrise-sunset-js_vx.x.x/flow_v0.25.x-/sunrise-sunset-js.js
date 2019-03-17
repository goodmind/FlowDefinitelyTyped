declare module "sunrise-sunset-js" {
  declare export function getSunrise(
    latitude: number,
    longitude: number,
    date?: Date
  ): Date;

  declare export function getSunset(
    latitude: number,
    longitude: number,
    date?: Date
  ): Date;
}
