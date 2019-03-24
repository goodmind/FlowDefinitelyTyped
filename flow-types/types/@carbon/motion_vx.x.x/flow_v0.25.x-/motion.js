declare module "@carbon/motion" {
  declare export var easings: {
    entrance: {
      expressive: string,
      productive: string
    },
    exit: {
      expressive: string,
      productive: string
    },
    standard: {
      expressive: string,
      productive: string
    }
  };
  declare export function motion(name: string, mode: string): string;

  declare var motion: typeof npm$namespace$motion;

  declare var npm$namespace$motion: {
    prototype: typeof motion$prototype
  };
  declare var motion$prototype: {};
}
