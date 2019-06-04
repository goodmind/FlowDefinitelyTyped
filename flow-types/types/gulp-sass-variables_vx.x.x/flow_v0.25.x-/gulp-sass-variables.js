declare module "gulp-sass-variables" {
  declare function gulpSassVariables(
    variables?: GulpSassVariables$VariableDefinitions
  ): NodeJS$ReadWriteStream;

  declare interface GulpSassVariables$VariableDefinitions {
    [variableName: string]: any;
  }
  declare export default typeof gulpSassVariables;
}
