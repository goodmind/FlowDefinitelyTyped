declare module "less2sass" {
  declare class Less2Sass {
    convert(file: string): string;
  }
  declare var less2sass: Less2Sass;
  declare module.exports: typeof less2sass;
}
