declare module "purdy" {
  declare function Purdy(
    obj: { [key: string]: any },
    options: Purdy$Options
  ): void;

  declare var Purdy: typeof npm$namespace$Purdy;

  declare var npm$namespace$Purdy: {
    purdy: typeof Purdy$purdy,
    stringify: typeof Purdy$stringify
  };
  declare interface Purdy$Instance {
    (obj: { [key: string]: any }, options: Purdy$Options): void;
    print: (...args: any[]) => void;
    stringify: (...args: any[]) => string;
  }

  declare interface Purdy$Options {
    depth?: number | null;
    plain?: boolean;
    json?: boolean;
    path?: boolean;
    proto?: boolean;
    indent?: number;
    align?: "left" | "right";
    arrayIndex?: boolean;
    pathPrefix?: string;
  }

  declare function Purdy$purdy(options: Purdy$Options): Purdy$Instance;

  declare function Purdy$stringify(
    obj: { [key: string]: any },
    options: Purdy$Options
  ): string;

  declare export default typeof Purdy;
}
