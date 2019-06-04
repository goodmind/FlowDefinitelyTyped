declare module "engine-check" {
  declare interface engineCheck$Options {
    searchRoot?: string;
    silent?: boolean;
    debug?: boolean;
  }
  declare function engineCheck(options?: engineCheck$Options): void;

  declare export default typeof engineCheck;
}
