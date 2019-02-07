declare module "vex-js" {
  declare module.exports: typeof vex;

  declare interface vex$ICSSAttributes {
    [property: string]: string | number;
  }

  declare interface vex$IVexOptions {
    afterClose?: () => void;
    afterOpen?: (vexContent: JQuery) => void;
    content?: string;
    showCloseButton?: boolean;
    escapeButtonCloses?: boolean;
    overlayClosesOnClick?: boolean;
    appendLocation?: HTMLElement | JQuery | string;
    className?: string;
    css?: vex$ICSSAttributes;
    overlayClassName?: string;
    overlayCSS?: vex$ICSSAttributes;
    contentClassName?: string;
    contentCSS?: vex$ICSSAttributes;
    closeClassName?: string;
    closeCSS?: vex$ICSSAttributes;
  }

  declare interface vex$Vex {
    open(options: vex$IVexOptions): JQuery;
    close(id?: number): boolean;
    closeAll(): boolean;
    closeByID(id: number): boolean;
    defaultOptions?: vex$IVexOptions;
  }
  declare var vex: vex$vex$Vex;
}
