declare module "no-scroll" {
  declare interface NoScroll {
    off(): void;
    on(): void;
    toggle(): void;
  }
  declare var noScroll: NoScroll;
  declare export default typeof noScroll;
}
