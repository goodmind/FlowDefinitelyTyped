declare module "scroll-to-element" {
  declare interface Options {
    offset: number;
    align?: "top" | "middle" | "bottom";
    ease?: string;
    duration?: number;
  }
  declare function scrollToElement(
    selector: string | HTMLElement | Element,
    options?: Options
  ): void;

  declare export default typeof scrollToElement;
}
