declare interface AsciifyOptions {
  font?: string;
  maxWidth?: number;
  color?: string;
}
declare interface AsciifyCallback {
  (err: any, asciifiedText: string): void;
}
declare module "asciify" {
  declare function asciify(text: string, callback: AsciifyCallback): void;

  declare function asciify(
    text: string,
    options: string,
    callback: AsciifyCallback
  ): void;

  declare function asciify(
    text: string,
    options: AsciifyOptions,
    callback: AsciifyCallback
  ): void;

  declare var npm$namespace$asciify: {
    getFonts: typeof asciify$getFonts
  };
  declare function asciify$getFonts(
    callback: (err: Error, fonts: string[]) => void
  ): void;

  declare export default typeof asciify;
}
