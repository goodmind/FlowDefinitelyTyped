declare module 'cybozulabs-md5' {
        
      declare var npm$namespace$MD5: {
        calc: typeof MD5$calc,
        VERSION: typeof MD5$VERSION,
BY_ASCII: typeof MD5$BY_ASCII,
BY_UTF16: typeof MD5$BY_UTF16,
      }
declare var MD5$VERSION: string;

declare var MD5$BY_ASCII: number;

declare var MD5$BY_UTF16: number;

declare function MD5$calc(str: string, option?: number): string

    }
