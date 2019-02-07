declare module "from" {
  declare var mod: mod$mod$From;
  declare interface mod$From {
    (getChunk: (count: number, next: () => any) => any): NodeJS.ReadableStream;
    (chunks: any[]): NodeJS.ReadableStream;
    emit(type: string, data: any): void;
  }
  declare module.exports: typeof mod;
}
