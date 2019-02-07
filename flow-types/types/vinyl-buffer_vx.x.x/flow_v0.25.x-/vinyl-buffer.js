declare module "vinyl-buffer" {
  declare type buffer$Buffer = () => NodeJS.ReadWriteStream;
  declare var buffer: buffer$buffer$Buffer;
  declare module.exports: typeof buffer;
}
