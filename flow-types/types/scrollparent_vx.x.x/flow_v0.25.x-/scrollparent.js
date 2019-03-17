declare module "scrollparent" {
  declare function scrollparent(
    node: HTMLElement | SVGElement
  ): HTMLElement | null;

  declare export default typeof scrollparent;
}
