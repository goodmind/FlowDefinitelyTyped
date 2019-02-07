declare module "siema" {
  declare export default class Siema {
    currentSlide: number;
    constructor(options?: SiemaOptions): this;
    next(index?: number, callback?: () => void): void;
    prev(index?: number, callback?: () => void): void;
    goTo(index: number, callback?: () => void): void;
    remove(index: number, callback?: () => void): void;
    insert(item: HTMLElement, index: number, callback?: () => void): void;
    prepend(item: HTMLElement, callback?: () => void): void;
    append(item: HTMLElement, callback?: () => void): void;
    destroy(restoreMarkup?: boolean, callback?: () => void): void;
  }
  declare export interface PageInterface {
    [key: number]: number;
  }
  declare export interface SiemaOptions {
    selector?: string | HTMLElement;
    duration?: number;
    easing?: string;
    perPage?: number | PageInterface;
    startIndex?: number;
    draggable?: boolean;
    multipleDrag?: boolean;
    threshold?: number;
    loop?: boolean;
    onInit?: () => void;
    onChange?: () => void;
  }
}
