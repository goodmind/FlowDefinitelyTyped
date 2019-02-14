declare module "@sindresorhus/df" {
  declare function df(): Promise<df$SpaceInfo[]>;

  declare var npm$namespace$df: {
    fs: typeof df$fs,
    file: typeof df$file
  };
  declare function df$fs(filesystem: string): Promise<df$SpaceInfo>;

  declare function df$file(file: string): Promise<df$SpaceInfo>;

  declare interface df$SpaceInfo {
    filesystem: string;
    size: number;
    used: number;
    available: number;
    capacity: number;
    mountpoint: string;
  }
  declare export default typeof df;
}
