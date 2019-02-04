declare module "detect-hover" {
    declare interface detectHover {
        anyHover: boolean;
        anyNone: boolean;
        hover: boolean;
        none: boolean;
        update(): void;
    }
    declare var detectHover: detectHover;
    declare export default typeof detectHover;
}
