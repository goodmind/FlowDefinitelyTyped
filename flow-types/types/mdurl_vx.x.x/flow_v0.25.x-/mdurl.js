declare module "mdurl" {
  declare export interface Url {
    protocol: string;
    slashes: string;
    auth: string;
    port: string;
    hostname: string;
    hash: string;
    search: string;
    pathname: string;
  }
  declare export { encode, decode, parse, format };
}
