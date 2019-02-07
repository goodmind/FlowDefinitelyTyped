declare module "badgen" {
  declare type ColorPresets =
    | "green"
    | "blue"
    | "red"
    | "yellow"
    | "orange"
    | "purple"
    | "pink"
    | "grey"
    | "gray"
    | "cyan"
    | "black";
  declare interface BadgeCreationParams {
    /**
     * Text representing the subject.
     */
    subject: string;

    /**
     * Text representing the status.
     */
    status: string;

    /**
     * Color RGB or Color Name, optional.
     */
    color?: ColorPresets | string;

    /**
     * 'flat' or undefined, optional.
     */
    style?: "flat";

    /**
     * Use icon, optional.
     */
    icon?: string;

    /**
     * Use this if icon is not square.
     * @default 13
     */
    iconWidth?: number;
  }
  declare function badgen(params: BadgeCreationParams): string;

  declare module.exports: typeof badgen;
}
