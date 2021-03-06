declare interface Quixote {
  createFrame(
    options: QuixoteFrameOptions,
    callback: (err: Error, loadedFrame: QFrame) => void
  ): QFrame;
}
declare interface QFrame {
  reset(): void;
  remove(): void;
  get(selector: string, nickname?: string): QElement;
  getAll(selector: string, nickname?: string): QElementList;
  add(html: string, nickname?: string): QElement;
  viewport(): QElement;
  page(): QElement;
  body(): QElement;
  resize(width: number, height: number): void;
  scroll(x: number, y: number): void;
  getRawScrollPosition(x: number, y: number): Object;
  toDomElement(): HTMLIFrameElement;
}
declare interface QElement {
  assert(expected: ElementDescriptor, message?: string): void;
  diff(expected: ElementDescriptor): string;
  getRawStyle(property: string): string;
  getRawPosition(): RawPositionObject;
  toDomElement(): HTMLElement;
}
declare interface QElementList {
  length(): number;
  at(index: number, nickname?: string): QElement;
}
declare interface ElementDescriptor {
  top?: PositionDescriptor;
  right?: PositionDescriptor;
  bottom?: PositionDescriptor;
  left?: PositionDescriptor;
  center?: PositionDescriptor;
  middle?: PositionDescriptor;
  width?: SizeDescriptor;
  height?: SizeDescriptor;
}
declare interface ViewportDescriptor {
  top: PositionDescriptor;
  right: PositionDescriptor;
  bottom: PositionDescriptor;
  left: PositionDescriptor;
  center: PositionDescriptor;
  middle: PositionDescriptor;
  width: SizeDescriptor;
  height: SizeDescriptor;
}
declare interface PageDescriptor {
  top: PositionDescriptor;
  right: PositionDescriptor;
  bottom: PositionDescriptor;
  left: PositionDescriptor;
  center: PositionDescriptor;
  middle: PositionDescriptor;
  width: SizeDescriptor;
  height: SizeDescriptor;
}
declare interface PositionDescriptor {
  plus(amount: SizeDescriptor): PositionDescriptor;
  plus(amount: number): PositionDescriptor;
  minus(amount: SizeDescriptor): PositionDescriptor;
  minus(amount: number): PositionDescriptor;
}
declare interface SizeDescriptor {
  plus(amount: SizeDescriptor): SizeDescriptor;
  plus(amount: number): SizeDescriptor;
  minus(amount: SizeDescriptor): SizeDescriptor;
  minus(amount: number): SizeDescriptor;
  times(multiple: number): SizeDescriptor;
}
declare interface QuixoteFrameOptions {
  width?: number;
  height?: number;
  src?: string;
  stylesheet?: string;
}
declare interface RawPositionObject {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}
declare var quixote: Quixote;
declare module "quixote" {
  declare class Quixote {
    constructor(): this;
    createFrame(
      options: QuixoteFrameOptions,
      callback: (err: Error, loadedFrame: QFrame) => void
    ): QFrame;
  }
  declare module.exports: typeof Quixote;
}
