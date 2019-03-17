declare module "zenscroll" {
  declare var zenScroll: ZenScroll$zenscroll;
  declare export default typeof zenScroll;

  declare interface ZenScroll$setupOption {
    defaultDuration: number;
    edgeOffset: number;
  }

  declare interface ZenScroll$zenscroll {
    setup(defaultDuration?: number, edgeOffset?: number): ZenScroll$setupOption;
    to(elem: HTMLElement, duration?: number, onDone?: () => void): void;
    toY(targetY: number, duration?: number, onDone?: () => void): void;
    intoView(elem: HTMLElement, duration?: number, onDone?: () => void): void;
    center(
      elem: HTMLElement,
      duration?: number,
      offset?: number,
      onDone?: () => void
    ): void;
    stop(): void;
    moving(): boolean;
    getY(): number;
    getTopOf(elem: HTMLElement): number;
    createScroller(
      scrollContainer: HTMLElement,
      defaultDuration?: number,
      edgeOffset?: number
    ): ZenScroll$zenscroll;
  }
}
