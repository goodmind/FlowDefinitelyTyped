declare module "stat-mode" {
  declare module.exports: typeof Mode;

  declare class Mode {
    owner: Mode$Mode$Permissions;
    group: Mode$Mode$Permissions;
    others: Mode$Mode$Permissions;
    setuid: boolean;
    setgid: boolean;
    sticky: boolean;
    constructor(stat: {
      mode: number
    }): this;
    isBlockDevice(isBlockDevice?: boolean): boolean;
    isCharacterDevice(isCharacterDevice?: boolean): boolean;
    isDirectory(isDirectory?: boolean): boolean;
    isFIFO(isFIFO?: boolean): boolean;
    isFile(isFile?: boolean): boolean;
    isSocket(isSocket?: boolean): boolean;
    isSymbolicLink(isSymbolicLink?: boolean): boolean;
    valueOf(): number;
    toOctal(): string;
  }
  declare interface Mode$Permissions {
    read: boolean;
    write: boolean;
    execute: boolean;
  }
}
