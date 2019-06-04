declare module "react-native-dotenv" {
  declare interface Env {
    [name: string]: string;
  }
  declare var env: Env;
  declare export default typeof env;
}
