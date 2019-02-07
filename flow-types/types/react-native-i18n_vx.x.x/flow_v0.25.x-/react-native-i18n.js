declare module "react-native-i18n" {
  declare export function getLanguages(): Promise<string[]>;

  declare export default typeof I18n;
}
