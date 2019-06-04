declare module "convert-string" {
  declare var convertString: typeof npm$namespace$convertString;

  declare var npm$namespace$convertString: {
    stringToBytes: typeof convertString$stringToBytes,
    bytesToString: typeof convertString$bytesToString,

    UTF8: typeof npm$namespace$convertString$UTF8
  };
  declare function convertString$stringToBytes(str: string): number[];

  declare function convertString$bytesToString(bytes: number[]): string;

  declare var npm$namespace$convertString$UTF8: {
    stringToBytes: typeof convertString$UTF8$stringToBytes,
    bytesToString: typeof convertString$UTF8$bytesToString
  };
  declare function convertString$UTF8$stringToBytes(str: string): number[];

  declare function convertString$UTF8$bytesToString(bytes: number[]): string;
}
