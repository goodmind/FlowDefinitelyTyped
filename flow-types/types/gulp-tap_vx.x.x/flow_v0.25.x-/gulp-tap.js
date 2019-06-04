declare module "gulp-tap" {
  import typeof * as Vinyl from "vinyl";

  declare interface tap$Tap {
    (tapFunction: tap$TapFunction, t?: any): NodeJS$ReadWriteStream;
  }

  declare interface tap$TapFunction {
    (file: Vinyl): any;
  }
  declare function tap(
    tapFunction: (file: Vinyl, t?: {}) => void
  ): NodeJS$ReadWriteStream;

  declare export default typeof tap;
}
