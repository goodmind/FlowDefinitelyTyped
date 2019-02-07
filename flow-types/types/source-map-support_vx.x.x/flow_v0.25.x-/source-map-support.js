declare module "source-map-support" {
  /**
   * Output of retrieveSourceMap().
   */
  declare export interface UrlAndMap {
    url: string;
    map: string | Buffer;
  }

  /**
   * Options to install().
   */
  declare export interface Options {
    handleUncaughtExceptions?: boolean;
    hookRequire?: boolean;
    emptyCacheBetweenOperations?: boolean;
    environment?: "auto" | "browser" | "node";
    overrideRetrieveFile?: boolean;
    overrideRetrieveSourceMap?: boolean;
    retrieveFile?: (path: string) => string;
    retrieveSourceMap?: (source: string) => UrlAndMap | null;
  }
  declare export interface Position {
    source: string;
    line: number;
    column: number;
  }
  declare export function wrapCallSite(frame: any): any;

  declare export function getErrorSource(error: Error): string | null;

  declare export function mapSourcePosition(position: Position): Position;

  declare export function retrieveSourceMap(source: string): UrlAndMap | null;

  /**
   * Install SourceMap support.
   * @param options Can be used to e.g. disable uncaughtException handler.
   */
  declare export function install(options?: Options): void;
}
