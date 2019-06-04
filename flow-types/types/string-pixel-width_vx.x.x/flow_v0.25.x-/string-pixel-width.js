declare module "string-pixel-width" {
  declare export default typeof getWidth;

  declare function getWidth(string: string, settings?: Settings): number;

  declare interface Settings {
    bold?: boolean;
    font?:
      | "andale mono"
      | "arial"
      | "avenir next"
      | "avenir"
      | "comic sans ms"
      | "courier new"
      | "georgia"
      | "impact"
      | "open sans"
      | "tahoma"
      | "times new roman"
      | "trebuchet ms"
      | "verdana"
      | "webdings";
    italic?: boolean;
    size?: number;
  }
}
