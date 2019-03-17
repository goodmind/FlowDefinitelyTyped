declare module "resize-observer-browser" {
  declare export class ResizeObserver {
    constructor(callback: ResizeObserverCallback): this;
    disconnect(): void;
    observe(target: Element): void;
    unobserve(target: Element): void;
  }
  declare export type ResizeObserverCallback = (
    entries: ResizeObserverEntry[]
  ) => void;
  declare export interface ResizeObserverEntry {
    +target: Element;
    +contentRect: DOMRectReadOnly;
  }
}
