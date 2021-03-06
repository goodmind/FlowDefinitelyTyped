declare module "jquery.colorpicker" {
  declare interface JQueryColorpickerOptions {
    cancel?: Function;
    close?: Function;
    init?: Function;
    select?: Function;
    ok?: Function;
    open?: Function;
    alpha?: boolean;
    altAlpha?: boolean;
    altField?: string;
    altOnChange?: boolean;
    altProperties?: string;
    autoOpen?: boolean;
    buttonClass?: string;
    buttonColorize?: boolean;
    buttonImage?: string;
    buttonImageOnly?: boolean;
    buttonText?: string;
    closeOnEscape?: boolean;
    closeOnOutside?: boolean;
    color?: string;
    colorFormat?: string;
    disabled?: boolean;
    draggable?: boolean;
    duration?: string;
    format?: string;
    horizontal?: boolean;
    hsv?: boolean;
    inline?: boolean;
    inlineFrame?: boolean;
    layout?: {
      [part: string]: number[]
    };
    limit?: string;
    modal?: boolean;
    mode?: string;
    okOnEnter?: boolean;
    part?: any;
    parts?: any;
    regional?: string;
    revert?: boolean;
    rgb?: boolean;
    showAnim?: string;
    showCancelButton?: boolean;
    showCloseButton?: boolean;
    showNoneButton?: boolean;
    showOn?: string;
    showOptions?: any;
    swatches?: any;
    swatchesWidth?: number;
    title?: string;
  }
  declare interface JQueryColorpickerStatic {
    limits: {
      [name: string]: (color: any) => void
    };
    parsers: {
      [name: string]: (color: any) => any
    };
    parts: {
      [name: string]: (inst: any) => any
    };
    partslists: {
      [name: string]: string[]
    };
    regional: {
      [key: string]: string
    };
    swatches: {
      [swatch: string]: {
        [name: string]: JQueryColorpickerStatic$JQueryColorpickerStatic$RGB
      }
    };
    writers: {
      [name: string]: (color: any, that: any) => any
    };
    JQueryColorpickerStatic$Color: {
      new(
        r?: number,
        g?: number,
        b?: number,
        a?: number
      ): JQueryColorpickerStatic$JQueryColorpickerStatic$Color
    };
  }
  declare export interface JQueryColorpickerStatic$CMYK {
    c: number;
    m: number;
    y: number;
    k: number;
  }

  declare export interface JQueryColorpickerStatic$HSL {
    h: number;
    s: number;
    l: number;
  }

  declare export interface JQueryColorpickerStatic$HSV {
    h: number;
    s: number;
    v: number;
  }

  declare export interface JQueryColorpickerStatic$LAB {
    l: number;
    a: number;
    b: number;
  }

  declare export interface JQueryColorpickerStatic$RGB {
    r: number;
    g: number;
    b: number;
  }

  declare export interface JQueryColorpickerStatic$Color {
    set: boolean;
    copy(): JQueryColorpickerStatic$Color;
    distance(color: JQueryColorpickerStatic$Color): number;
    equals(color: JQueryColorpickerStatic$Color): boolean;
    getAlpha(): number;
    getChannels(): {
      A: number,
      B: number,
      L: number,
      a: number,
      b: number,
      c: number,
      g: number,
      h: number,
      k: number,
      m: number,
      r: number,
      s: number,
      v: number,
      y: number
    };
    getCMYK(): JQueryColorpickerStatic$CMYK;
    getHSL(): JQueryColorpickerStatic$HSL;
    getHSV(): JQueryColorpickerStatic$HSV;
    getLAB(): JQueryColorpickerStatic$LAB;
    getRGB(): JQueryColorpickerStatic$RGB;
    getSpaces(): {
      cmyk: JQueryColorpickerStatic$CMYK,
      hsl: JQueryColorpickerStatic$HSL,
      hsv: JQueryColorpickerStatic$HSV,
      lab: JQueryColorpickerStatic$LAB,
      rgb: JQueryColorpickerStatic$RGB
    };
    limit(steps: number): void;
    normalize(): JQueryColorpickerStatic$Color;
    setAlpha(a: number): JQueryColorpickerStatic$Color;
    setCMYK(
      c: number,
      m: number,
      y: number,
      k: number
    ): JQueryColorpickerStatic$Color;
    setHSL(h: number, s: number, l: number): JQueryColorpickerStatic$Color;
    setHSV(h: number, s: number, v: number): JQueryColorpickerStatic$Color;
    setLAB(l: number, a: number, b: number): JQueryColorpickerStatic$Color;
    setRGB(r: number, g: number, b: number): JQueryColorpickerStatic$Color;
    setSpaces(new_spaces: any): JQueryColorpickerStatic$Color;
    toCSS(): string;
    toHEX(): string;
  }
  declare interface JQueryColorpickerInstance {
    close(): void;
    destroy(): void;
    open(): void;
    setColor(color: any): void;
  }
  declare interface JQueryStatic {
    colorpicker: JQueryColorpickerStatic;
  }
  declare interface JQuery {
    colorpicker(method: "close"): JQuery;
    colorpicker(method: "destroy"): JQuery;
    colorpicker(method: "open"): JQuery;
    colorpicker(method: string): JQuery;
    colorpicker(method: "setColor", color: any): JQuery;
    colorpicker(method: string, ...params: any[]): JQuery;
    colorpicker(options?: JQueryColorpickerOptions): JQuery;
  }
}
