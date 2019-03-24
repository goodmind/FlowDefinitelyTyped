declare module "@carbon/layout" {
  declare export var baseFontSize: number;
  declare export var breakpoints: {
    lg: {
      columns: number,
      margin: string,
      width: string
    },
    max: {
      columns: number,
      margin: string,
      width: string
    },
    md: {
      columns: number,
      margin: string,
      width: string
    },
    sm: {
      columns: number,
      margin: string,
      width: string
    },
    xlg: {
      columns: number,
      margin: string,
      width: string
    }
  };
  declare export var miniUnit: number;
  declare export var spacing: number[];
  declare export function breakpoint(...args: any[]): string;

  declare export function breakpointDown(name: string): string;

  declare export function breakpointUp(name: string): string;

  declare export function em(px: number): string;

  declare export function miniUnits(count: number): string;

  declare export function px(value: number): string;

  declare export function rem(px: number): string;

  declare var breakpoint: typeof npm$namespace$breakpoint;

  declare var npm$namespace$breakpoint: {
    prototype: typeof breakpoint$prototype
  };
  declare var breakpoint$prototype: {};
  declare var breakpointDown: typeof npm$namespace$breakpointDown;

  declare var npm$namespace$breakpointDown: {
    prototype: typeof breakpointDown$prototype
  };
  declare var breakpointDown$prototype: {};
  declare var breakpointUp: typeof npm$namespace$breakpointUp;

  declare var npm$namespace$breakpointUp: {
    prototype: typeof breakpointUp$prototype
  };
  declare var breakpointUp$prototype: {};
  declare var em: typeof npm$namespace$em;

  declare var npm$namespace$em: {
    prototype: typeof em$prototype
  };
  declare var em$prototype: {};
  declare var miniUnits: typeof npm$namespace$miniUnits;

  declare var npm$namespace$miniUnits: {
    prototype: typeof miniUnits$prototype
  };
  declare var miniUnits$prototype: {};
  declare var px: typeof npm$namespace$px;

  declare var npm$namespace$px: {
    prototype: typeof px$prototype
  };
  declare var px$prototype: {};
  declare var rem: typeof npm$namespace$rem;

  declare var npm$namespace$rem: {
    prototype: typeof rem$prototype
  };
  declare var rem$prototype: {};
}
