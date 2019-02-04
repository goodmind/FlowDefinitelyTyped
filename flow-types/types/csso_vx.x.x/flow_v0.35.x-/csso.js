declare module "csso" {
    import typeof * as csstree from "css-tree";

    declare interface csso$Result {
        /**
         * Resulting CSS.
         */
        css: string;

        /**
         * Instance of SourceMapGenerator or null.
         */
        map: { [key: string]: any } | null;
    }

    declare interface csso$Usage {
        tags?: string[];
        ids?: string[];
        classes?: string[];
        scopes?: string[][];
        blacklist?: {
            tags?: string[],
            ids?: string[],
            classes?: string[]
        };
    }

    declare interface csso$CompressOptions {
        /**
         * Disable or enable a structure optimisations.
         * @default true
         */
        restructure?: boolean;

        /**
         * Enables merging of @media rules with the same media query by splitted by other rules.
         * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
         * @default false
         */
        forceMediaMerge?: boolean;

        /**
         * Transform a copy of input AST if true. Useful in case of AST reuse.
         * @default false
         */
        clone?: boolean;

        /**
         * Specify what comments to leave:
         * - 'exclamation' or true – leave all exclamation comments
         * - 'first-exclamation' – remove every comment except first one
         * - false – remove all comments
         * @default true
         */
        comments?: string | boolean;

        /**
         * Usage data for advanced optimisations.
         */
        usage?: csso$Usage;

        /**
         * Function to track every step of transformation.
         */
        logger?: () => void;
    }

    declare interface csso$MinifyOptions {
        /**
         * Generate a source map when true.
         * @default false
         */
        sourceMap?: boolean;

        /**
         * Filename of input CSS, uses for source map generation.
         * @default '<unknown>'
         */
        filename?: string;

        /**
         * Output debug information to stderr.
         * @default false
         */
        debug?: boolean;

        /**
         * Called right after parse is run.
         */
        beforeCompress?: csso$BeforeCompressFn | csso$BeforeCompressFn[];

        /**
         * Called right after compress() is run.
         */
        afterCompress?: csso$AfterCompressFn | csso$AfterCompressFn[];
        restructure?: boolean;
    }

    declare type csso$BeforeCompressFn = (
        ast: { [key: string]: any },
        options: csso$CompressOptions
    ) => void;

    declare type csso$AfterCompressFn = (
        compressResult: string,
        options: csso$CompressOptions
    ) => void;
    declare interface Csso {
        /**
         * Minify source CSS passed as String
         * @param source
         * @param options
         */
        minify(
            source: string,
            options?: csso$csso$MinifyOptions & csso$csso$CompressOptions
        ): csso$csso$Result;

        /**
         * The same as minify() but for list of declarations. Usually it's a style attribute value.
         * @param source
         * @param options
         */
        minifyBlock(
            source: string,
            options?: csso$csso$MinifyOptions & csso$csso$CompressOptions
        ): csso$csso$Result;

        /**
         * Does the main task – compress an AST.
         */
        compress(
            ast: csstree.CssNode,
            options?: csso$csso$CompressOptions
        ): {
            ast: csstree.CssNode
        };
        syntax: typeof csstree;
    }
    declare var csso: Csso;
    declare module.exports: typeof csso;
}
