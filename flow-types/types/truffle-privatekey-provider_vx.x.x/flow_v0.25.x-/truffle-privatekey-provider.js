declare module "truffle-privatekey-provider" {
  declare export default typeof PrivateKeyProvider;

  declare class PrivateKeyProvider {
    constructor(privateKey: any, providerUrl: any): this;
    send(...args: any[]): any;
    sendAsync(...args: any[]): void;
  }
}
