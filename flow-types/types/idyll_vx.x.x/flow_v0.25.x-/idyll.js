declare module "idyll" {
  import type { EventEmitter } from "events";

  import type { Options as CompilerOptions } from "idyll-compiler";

  declare interface Options {
    /**
     * Monitor input files and rebuild on changes
     */
    watch?: boolean;

    /**
     * The datasets directory
     */
    datasets?: string;

    /**
     * Whether to minify output build
     */
    minify?: boolean;

    /**
     * Pre-render HTML as part of the build
     */
    ssr?: boolean;

    /**
     * The components directory
     */
    components?: boolean;

    /**
     * The default component directory
     * This corresponds to where the idyll-components package stays
     */
    defaultComponents?: boolean;

    /**
     * The layout defined in idyll-layouts package
     */
    layout?: string;

    /**
     * The theme defined in idyll-theme package
     */
    theme?: string;

    /**
     * The output directory for compiled documents
     */
    output?: string;

    /**
     * Custom port to bind the local server to.
     */
    port?: number;

    /**
     * Temporary directory used by idyll
     */
    temp?: string;

    /**
     * path to HTML template
     */
    template?: string;

    /**
     * Custom CSS file to include in output
     */
    css?: string;

    /**
     * Custom browserify transforms to apply.
     */
    transform?: string[];

    /**
     * Compiler options
     */
    compiler?: CompilerOptions;

    /**
     * the idyll file to be compiled into
     */
    inputFile?: string;

    /**
     * used internally by IdyllInstance
     */
    inputConfig?: {
      components: any,
      transform: any[],
      compiler: CompilerOptions
    };
  }
  declare type PredefinedFile =
    | "APP_PATH"
    | "CSS_INPUT_FILE"
    | "DATA_DIR"
    | "HTML_TEMPLATE_FILE"
    | "IDYLL_INPUT_FILE"
    | "INPUT_DIR"
    | "PACKAGE_FILE"
    | "OUTPUT_DIR"
    | "TMP_DIR"
    | "CSS_OUTPUT_FILE"
    | "HTML_OUTPUT_FILE"
    | "JS_OUTPUT_FILE";
  declare type ComponentFiles = "COMPONENT_DIRS" | "DEFAULT_COMPONENT_DIRS";
  declare type Paths = Record<PredefinedFile, string> &
    Record<ComponentFiles, string[]>;
  declare class IdyllInstance mixins EventEmitter {
    /**
     * Returns internal paths used by idyll-cli
     */
    getPaths(): Paths;

    /**
     * Returns idyll compiling's options
     */
    getOptions(): Options;

    /**
     * if indexIdyllMarkup is provided, compiles it
     *
     * Otherwise, compiles and optionally watches
     * the idyll file at IOptions.inputFile
     */
    build(indexIdyllMarkup?: string | null): this;
  }
  declare function idyll(
    options: Options,
    callback?: () => void
  ): IdyllInstance;

  declare module.exports: typeof idyll;
}
