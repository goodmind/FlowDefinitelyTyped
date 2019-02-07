declare module 'babelify' {
        declare function Babelify(
filename: string,
opts?: Babelify$Babelify$BabelifyOptions): Babelify$Babelify$BabelifyObject

	
      declare var npm$namespace$Babelify: {
        configure: typeof Babelify$configure,
        
      }
declare export interface Babelify$BabelifyConstructor {
(filename: string, opts: Babelify$Babelify$BabelifyOptions): Babelify$Babelify$BabelifyObject
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
} & babel.TransformOptions


declare export class Babelify$BabelifyObject mixins stream.Transform {
_transform(buf: string | Buffer, encoding: string, callback: () => void): void;
_flush(callback: () => void): void
}

declare export function Babelify$configure(
opts: Babelify$Babelify$BabelifyOptions): (filename: string) => Babelify$Babelify$BabelifyObject

	declare module.exports: typeof Babelify

    }
