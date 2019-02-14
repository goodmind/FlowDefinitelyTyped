declare module "babelify" {
  import typeof * as stream from "stream";

  import typeof * as babel from "babel-core";

  declare function Babelify(
    filename: string,
    opts?: Babelify$BabelifyOptions
  ): Babelify$BabelifyObject;

  declare var npm$namespace$Babelify: {
    configure: typeof Babelify$configure,

    BabelifyObject: typeof Babelify$BabelifyObject
  };
  declare export interface Babelify$BabelifyConstructor {
    (filename: string, opts: Babelify$BabelifyOptions): Babelify$BabelifyObject;
  }

  /**
   * In addition to the various purposes documented here, all of the babelify options are passed to babel which passes them on to babel.transform() when each file is transformed
   */
  declare export type Babelify$BabelifyOptions = {
    /**
     * These are passed to babel.util.canCompile() for each filename
     * default: null
     */
    extensions?: string | string[],

    /**
     * if true, a 'sourceFileName' property with a value equal to the current file being transformed is included with the options passed to babel.transform()
     * default: false
     */
    sourceMapsAbsolute?: boolean
  } & babel.TransformOptions;

  declare export class Babelify$BabelifyObject mixins stream.Transform {
    _transform(
      buf: string | Buffer,
      encoding: string,
      callback: () => void
    ): void;
    _flush(callback: () => void): void;
  }

  declare export function Babelify$configure(
    opts: Babelify$BabelifyOptions
  ): (filename: string) => Babelify$BabelifyObject;

  declare export default typeof Babelify;
}
