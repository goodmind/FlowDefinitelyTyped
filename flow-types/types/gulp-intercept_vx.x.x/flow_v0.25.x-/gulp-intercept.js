declare module "gulp-intercept" {
  import typeof * as Vinyl from "vinyl";

  declare interface intercept$Intercept {
    (interceptFunction: intercept$InterceptFunction): NodeJS$ReadWriteStream;
  }

  declare interface intercept$InterceptFunction {
    (file: Vinyl): Vinyl;
  }
  declare var intercept: intercept$Intercept;
  declare export default typeof intercept;
}
