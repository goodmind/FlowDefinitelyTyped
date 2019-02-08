declare module "bip21" {
  declare var npm$namespace$bip21: {
    decode: typeof bip21$decode,
    encode: typeof bip21$encode
  };
  declare export function bip21$decode(
    uri: string
  ): {
    address: string,
    amount?: number
  };

  declare export function bip21$encode(address: string, options?: any): string;

  declare export default typeof bip21;
}
