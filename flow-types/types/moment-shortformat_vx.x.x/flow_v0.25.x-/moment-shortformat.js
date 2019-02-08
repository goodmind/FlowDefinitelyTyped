declare module "moment" {
  declare interface Moment {
    short(withoutPreOrSuffix?: boolean, now?: Moment): string;
  }
}
declare module "moment-shortformat" {
  declare module.exports: typeof moment;
}
