declare module "appdmg" {
  declare interface appdmg$Progress {
    current: number;
    total: number;
    type: "step-begin" | "step-end";
    title: string;
    status: "ok" | "skip" | "fail";
  }

  declare type appdmg$EventEmitter = {
    on(event: "progress", listener: (info: appdmg$Progress) => void): this,
    on(event: "finish", listener: () => void): this,
    on(event: "error", listener: (err: any) => void): this
  } & NodeJS.appdmg$EventEmitter;

  declare interface appdmg$SpecificationOptions {
    app: string;
    background: string;
    icon: string;
    iconSize: number;
    title: string;
  }

  declare interface appdmg$SpecificationWindow {
    position?: {
      x: number,
      y: number
    };
    size?: {
      width: number,
      height: number
    };
  }

  declare interface appdmg$SpecificationContents {
    x: number;
    y: number;
    type: "link" | "file" | "position";
    path: string;
    name?: string;
  }

  declare interface appdmg$SpecificationCodeSign {
    "signing-identity": string;
    identifier?: string;
  }

  declare interface appdmg$Specification {
    title: string;
    icon?: string;
    background?: string;
    "background-color"?: string;
    "icon-size"?: number;
    window?: appdmg$SpecificationWindow;
    format: "UDRW" | "UDRO" | "UDCO" | "UDZO" | "UDBZ" | "ULFO";
    contents: appdmg$SpecificationContents[];
    "code-sign"?: appdmg$SpecificationCodeSign;
  }

  declare interface appdmg$Options {
    target: string;
    basepath: string;
    specification: appdmg$Specification;
  }
  declare function appdmg(
    options?: appdmg$appdmg$Options
  ): appdmg$appdmg$EventEmitter;

  declare module.exports: typeof appdmg;
}
