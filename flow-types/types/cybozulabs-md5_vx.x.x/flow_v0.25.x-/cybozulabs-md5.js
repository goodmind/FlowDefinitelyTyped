declare module "cybozulabs-md5" {
  declare var npm$namespace$CybozuLabs: {
    MD5: typeof npm$namespace$CybozuLabs$MD5
  };

  declare var npm$namespace$CybozuLabs$MD5: {
    calc: typeof CybozuLabs$MD5$calc,
    VERSION: typeof CybozuLabs$MD5$VERSION,
    BY_ASCII: typeof CybozuLabs$MD5$BY_ASCII,
    BY_UTF16: typeof CybozuLabs$MD5$BY_UTF16
  };
  declare var CybozuLabs$MD5$VERSION: string;

  declare var CybozuLabs$MD5$BY_ASCII: number;

  declare var CybozuLabs$MD5$BY_UTF16: number;

  declare function CybozuLabs$MD5$calc(str: string, option?: number): string;
}
