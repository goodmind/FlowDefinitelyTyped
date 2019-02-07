declare module "jquery-awesome-cursor" {
  declare type JQueryAwesomeCursor$flip = "horizontal" | "vertical" | "both";

  declare type JQueryAwesomeCursor$cssHandler = (name: string) => void;

  declare interface JQueryAwesomeCursor$Options {
    color?: string;
    size?: number;
    hotspot?: number[] | string;
    JQueryAwesomeCursor$flip?: JQueryAwesomeCursor$flip;
    rotate?: number;
    outline?: string;
    font?: JQueryAwesomeCursor$Font;
  }

  declare interface JQueryAwesomeCursor$Font {
    family: string;
    cssClass: string | JQueryAwesomeCursor$cssHandler;
  }
  declare interface JQueryStatic {
    awesomeCursor(
      icon: string,
      options?: JQueryAwesomeCursor$JQueryAwesomeCursor$Options
    ): JQuery;
  }
  declare interface JQuery {
    awesomeCursor(
      icon: string,
      options?: JQueryAwesomeCursor$JQueryAwesomeCursor$Options
    ): JQuery;
  }
}
