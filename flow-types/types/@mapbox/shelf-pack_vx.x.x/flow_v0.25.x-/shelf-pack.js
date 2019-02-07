declare module "@mapbox/shelf-pack" {
  declare module.exports: typeof ShelfPack;

  declare class ShelfPack {
    constructor(
      width?: number,
      height?: number,
      options?: ShelfPack$ShelfPack$CreateOption
    ): this;
    pack(
      bins: Array<
        ShelfPack$ShelfPack$RequestShort | ShelfPack$ShelfPack$RequestLong
      >,
      options?: ShelfPack$ShelfPack$PackOption
    ): ShelfPack$ShelfPack$Bin[];
    packOne(
      w: number,
      h: number,
      id?: ShelfPack$ShelfPack$ID
    ): ShelfPack$ShelfPack$Bin;
    getBin(id: ShelfPack$ShelfPack$ID): ShelfPack$ShelfPack$Bin;
    ref(bin: ShelfPack$ShelfPack$Bin): number;
    unref(bin: ShelfPack$ShelfPack$Bin): number;
    clear(): void;
    resize(w: number, h: number): boolean;
    w: number;
    h: number;
  }
  declare class ShelfPack$Bin {
    constructor(
      id: ShelfPack$ID,
      x: number,
      y: number,
      w: number,
      h: number,
      maxw?: number,
      maxh?: number
    ): this;
    id: ShelfPack$ID;
    x: number;
    y: number;
    w: number;
    h: number;
  }

  declare type ShelfPack$ID = number | string;

  declare interface ShelfPack$Request {
    id?: ShelfPack$ID;
  }

  declare type ShelfPack$RequestShort = {
    w: number,
    h: number
  } & ShelfPack$Request;

  declare type ShelfPack$RequestLong = {
    width: number,
    height: number
  } & ShelfPack$Request;

  declare interface ShelfPack$PackOption {
    inPlace?: boolean;
  }

  declare interface ShelfPack$CreateOption {
    autoResize?: boolean;
  }
}
