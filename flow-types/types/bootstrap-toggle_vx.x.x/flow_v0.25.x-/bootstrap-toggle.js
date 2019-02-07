declare module "bootstrap-toggle" {
  declare interface BootstrapToggleOptions {
    on?: string;
    off?: string;
    size?: string;
    onstyle?: string;
    offstyle?: string;
    style?: string;
    width?: number | string | null;
    height?: number | string | null;
  }
  declare interface JQuery {
    bootstrapToggle(options?: BootstrapToggleOptions): JQuery;
    bootstrapToggle(
      command: "destroy" | "on" | "off" | "toggle" | "enable" | "disable"
    ): JQuery;
  }
}
