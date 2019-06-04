declare module "gulp-stylus" {
  declare function gulpStylus(
    options?: gulpStylus$Options
  ): NodeJS$ReadWriteStream;

  declare interface gulpStylus$VariableDefinitions {
    [variableName: string]: any;
  }

  declare interface gulpStylus$Options {
    compress?: boolean;
    linenos?: boolean;
    "include css"?: boolean;
    rawDefine?: gulpStylus$VariableDefinitions;
  }
  declare export default typeof gulpStylus;
}
