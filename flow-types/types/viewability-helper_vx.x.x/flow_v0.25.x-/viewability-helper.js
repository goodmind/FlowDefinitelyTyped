declare module "viewability-helper" {
  declare export interface Options {
    callbackParams?: any[];
    rootMargin?: string;
    intersectionPercentage?: number;
    scrollDimmer?: number;
    unobserve?: boolean;
    threshold?: number[];
  }
  declare export class ViewabilityHelper {
    constructor(
      element: Element | HTMLElement,
      callback: () => void,
      options?: Options
    ): this;
    observe(): void;
  }
}
