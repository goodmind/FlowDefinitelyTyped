declare module "feather-icons" {
  declare export interface FeatherAttributes {
    [key: string]: string | number;
  }
  declare export function replace(options?: FeatherAttributes): void;

  declare export var icons: {
    [key: string]: {
      name: string,
      contents: string,
      tags: string[],
      attrs: FeatherAttributes,
      toSvg: (options?: FeatherAttributes) => string
    }
  };
}
