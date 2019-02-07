declare module "magnet-uri" {
  declare var MagnetUri$MagnetUri: MagnetUri$MagnetUri.MagnetUri$MagnetUri;
  declare interface MagnetUri$MagnetUri {
    (uri: string): MagnetUri$Instance;
    decode(uri: string): MagnetUri$Instance;
    encode(parsed: MagnetUri$Instance): string;
  }

  declare type MagnetUri$Instance = {
    dn?: string | string[],
    tr?: string | string[],
    xs?: string | string[],
    as?: string | string[],
    ws?: string | string[],
    kt?: string[],
    ix?: number | number[],
    xt?: string | string[],
    infoHash?: string,
    infoHashBuffer?: Buffer,
    name?: string | string[],
    keywords?: string | string[],
    announce?: string[],
    urlList?: string[]
  } & Object;

  declare module.exports: typeof MagnetUri$MagnetUri;
}
