declare module "then-eos" {
  declare type Stream = NodeJS$ReadableStream | NodeJS$WritableStream;
  declare function thenEos(stream: Stream): Promise<void>;

  declare export default typeof thenEos;
}
