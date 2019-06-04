declare module "falafel" {
  declare function falafel(
    src: string,
    opts: ((...args: any[]) => void) | { [key: string]: any },
    fn?: (...args: any[]) => void
  ): string;

  declare export default typeof falafel;
}
