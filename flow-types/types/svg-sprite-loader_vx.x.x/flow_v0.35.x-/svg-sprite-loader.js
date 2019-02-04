declare module 'svg-sprite-loader' {
        import type {
          loader
        } from 'webpack';

	declare module.exports: typeof SVGSpriteLoader

	declare function SVGSpriteLoader(source: string | Buffer): string | Buffer | void | void

    }
