declare module "windows-1251" {
  declare var windows1251$windows1251: {
    encode(
      input: string,
      options?: {
        mode?: windows1251$windows1251.windows1251$EncoderMode
      }
    ): string,
    decode(
      text: string,
      options?: {
        mode?: windows1251$windows1251.windows1251$DecoderMode
      }
    ): string,
    version: string,
    labels: string[]
  };
  declare module.exports: typeof windows1251$windows1251;

  declare type windows1251$EncoderMode = "fatal" | "html";

  declare type windows1251$DecoderMode = "replacement" | "fatal";

  declare interface windows1251$windows1251 {
    encode(
      input: string,
      options?: {
        mode?: windows1251$EncoderMode
      }
    ): string;
    decode(
      text: string,
      options?: {
        mode?: windows1251$DecoderMode
      }
    ): string;
  }
}
