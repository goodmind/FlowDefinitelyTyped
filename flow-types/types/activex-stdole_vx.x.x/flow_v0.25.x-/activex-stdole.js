declare module "activex-stdole" {
  declare var stdole: typeof npm$namespace$stdole;

  declare var npm$namespace$stdole: {
    LoadPictureConstants: typeof stdole$LoadPictureConstants,
    OLE_TRISTATE: typeof stdole$OLE_TRISTATE,
    StdFont: typeof stdole$StdFont,
    StdPicture: typeof stdole$StdPicture
  };
  declare type stdole$IFontDisp = stdole$StdFont;

  declare type stdole$IPictureDisp = stdole$StdPicture;

  declare type stdole$OLE_COLOR = number;

  declare type stdole$OLE_XPOS_CONTAINER = number;

  declare type stdole$OLE_XPOS_PIXELS = number;

  declare type stdole$OLE_YPOS_CONTAINER = number;

  declare type stdole$OLE_YPOS_PIXELS = number;

  declare var stdole$LoadPictureConstants: {|
    +Color: 4, // 4
    +Default: 0, // 0
    +Monochrome: 1, // 1
    +VgaColor: 2 // 2
  |};

  declare var stdole$OLE_TRISTATE: {|
    +Checked: 1, // 1
    +Gray: 2, // 2
    +Unchecked: 0 // 0
  |};

  declare interface stdole$DISPPARAMS {
    +cArgs: number;
    +cNamedArgs: number;
    +rgdispidNamedArgs: number;
    +rgvarg: any;
  }

  declare interface stdole$EXCEPINFO {
    +bstrDescription: string;
    +bstrHelpFile: string;
    +bstrSource: string;
    +dwHelpContext: number;
    +pfnDeferredFillIn: void;
    +pvReserved: void;
    +scode: any;
    +wCode: number;
    +wReserved: number;
  }

  declare interface stdole$GUID {
    +Data1: number;
    +Data2: number;
    +Data3: number;
    +Data4: SafeArray<number>;
  }

  declare class stdole$StdFont {
    constructor(): this;
    Bold: boolean;
    Charset: number;
    Italic: boolean;
    Name: string;
    Size: number;
    Strikethrough: boolean;
    Underline: boolean;
    Weight: number;
  }

  declare class stdole$StdPicture {
    constructor(): this;
    Handle: number;
    Height: number;
    hPal: number;
    Render(
      hdc: number,
      x: number,
      y: number,
      cx: number,
      cy: number,
      xSrc: number,
      ySrc: number,
      cxSrc: number,
      cySrc: number,
      prcWBounds: void
    ): void;
    Type: number;
    Width: number;
  }
  declare interface ActiveXObject {
    on(
      obj: stdole$StdFont,
      event: "FontChanged",
      argNames: ["PropertyName"],
      handler: (parameter: {
        +PropertyName: string
      }) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    StdFont: stdole$StdFont;
    StdPicture: stdole$StdPicture;
  }
}
