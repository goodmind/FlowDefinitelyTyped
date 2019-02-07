declare module "ascii-art" {
  declare export type StyleType = (
    text: string,
    style?: string,
    close?: boolean
  ) => Art;
  declare export type FontType = (
    text: string,
    font?: string,
    styleOrCallback?: string | Cb,
    callback?: Cb
  ) => Art;
  declare export type ImageType = (
    options: { [key: string]: any },
    callback?: Cb
  ) => Art;
  declare export type TableType = (
    options: { [key: string]: any },
    callback?: Cb
  ) => Art;
  declare export type ArtworkType = (
    options: { [key: string]: any },
    callback?: Cb
  ) => Art;
  declare export type LinesType = (...options: any[]) => Art;
  declare export type OverlayType = (...options: any[]) => Art;
  declare export type JoinType = (...options: any[]) => Art;
  declare export type StringsType = (...options: any[]) => Art;
  declare export var style: StyleType;
  declare export var font: FontType;
  declare export var image: ImageType;
  declare export var table: TableType;
  declare export var artwork: ArtworkType;
  declare export var lines: LinesType;
  declare export var overlay: OverlayType;
  declare export var join: JoinType;
  declare export var strings: StringsType;
  declare export var Figlet: any;
  declare export var Image: any;
  declare export interface Art {
    style: StyleType;
    font: FontType;
    image: ImageType;
    table: TableType;
    artwork: ArtworkType;
    lines: LinesType;
    overlay: OverlayType;
    join: JoinType;
    working: boolean;
    toPromise: () => Promise<string>;
  }
  declare export type Cb = (result: string) => void;
}
