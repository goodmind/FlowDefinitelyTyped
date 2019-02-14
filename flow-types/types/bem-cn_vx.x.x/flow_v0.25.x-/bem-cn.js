declare module "bem-cn" {
  declare type StateFn = (states: {
    [key: string]: boolean
  }) => BemCn$Inner;
  declare function BemCn(name: string): BemCn$Inner;

  declare var npm$namespace$BemCn: {
    reset: typeof BemCn$reset,
    setup: typeof BemCn$setup
  };
  declare function BemCn$reset(): void;

  declare function BemCn$setup(settings?: BemCn$Settings): void;

  declare interface BemCn$Modifications {
    [key: string]: string | boolean;
  }

  declare interface BemCn$Inner {
    (elem: string | BemCn$Modifications): BemCn$Inner;
    (elem: string, mods: BemCn$Modifications): BemCn$Inner;
    (): string;
    mix(mixes: string | string[]): BemCn$Inner;
    has: StateFn;
    state: StateFn;
    is: StateFn;
    toString(): string;
    valueOf(): string;
    split(separator: string, limit?: number): string[];
  }

  declare interface BemCn$Settings {
    ns?: string;
    el?: string;
    mod?: string;
    modValue?: string;
    classMap?: {
      [className: string]: string
    } | null;
  }
  declare export default typeof BemCn;
}
