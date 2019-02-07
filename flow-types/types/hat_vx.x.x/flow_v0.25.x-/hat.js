declare module "hat" {
  declare interface HatsList {
    [key: string]: any;
  }
  declare interface Rack {
    bits: number;
    base: number;
    hats: HatsList;
    (data: any): string;
    get(id: string): any;
    set(id: string, value: any): Rack;
  }
  declare type CreateRack = (
    bits?: number,
    base?: number,
    expandBy?: number
  ) => Rack;
  declare interface Hat {
    (bits?: number, base?: number): string;
    rack: CreateRack;
  }
  declare var hat: Hat;
  declare module.exports: typeof hat;
}
