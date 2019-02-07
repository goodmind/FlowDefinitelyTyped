declare interface Less$RootFileInfo {
  /**
   * whether to adjust URL's to be relative
   */
  rewriteUrls?: boolean;

  /**
   * full resolved filename of current file
   */
  filename: string;
  relativeUrls: boolean;

  /**
   * path to append to normal URLs for this node
   */
  rootpath: string;

  /**
   * path to the current file, absolute
   */
  currentDirectory: string;

  /**
   * absolute path to the entry file
   */
  entryPath: string;

  /**
   * filename of the base file
   */
  rootFilename: string;

  /**
   * whether the file should not be output and only output parts that are referenced
   */
  reference: boolean;
}

declare class Less$PluginManager {
  constructor(less: LessStatic): this;
  addPreProcessor(preProcessor: Less$PreProcessor, priority?: number): void;
}

declare interface Less$Plugin {
  install: (less: LessStatic, pluginManager: Less$PluginManager) => void;
}

declare interface Less$PreProcessor {
  process: (src: string, extra: Less$PreProcessorExtraInfo) => string;
}

declare interface Less$PreProcessorExtraInfo {
  context: {
    pluginManager: Less$PluginManager
  };
  fileInfo: Less$RootFileInfo;
  imports: {
    [key: string]: any
  };
}

declare interface Less$SourceMapOption {
  sourceMapURL?: string;
  sourceMapBasepath?: string;
  sourceMapRootpath?: string;
  outputSourceFiles?: boolean;
  sourceMapFileInline?: boolean;
}

declare interface Less$StaticOptions {
  async: boolean;
  fileAsync: boolean;
  modifyVars: {
    [variable: string]: string
  };
}

declare interface Less$ImportManager {
  contents: {
    [fileName: string]: string
  };
}

/**
 * Reference to:
 * * https://github.com/less/less.js/blob/master/bin/lessc
 * * http://lesscss.org/usage/#less-options
 * @interface Options
 */
declare interface Less$Options {
  sourceMap?: Less$SourceMapOption;

  /**
   * Filename of the main file to be passed to less.render()
   */
  filename?: string;

  /**
   * The locations for less looking for files in @import rules
   */
  paths?: string[];

  /**
   * True, if run the less parser and just reports errors without any output.
   */
  lint?: boolean;

  /**
   * Pre-load global Less.js plugins
   */
  plugins?: Less$Plugin[];

  /**
   * @deprecated If true, compress using less built-in compression.
   */
  compress?: boolean;
  strictImports?: boolean;

  /**
   * If true, allow imports from insecure https hosts.
   */
  insecure?: boolean;
  depends?: boolean;
  maxLineLen?: number;

  /**
   * @deprecated If false, No color in compiling.
   */
  color?: boolean;

  /**
   * @deprecated False by default.
   */
  ieCompat?: boolean;

  /**
   * @deprecated If true, enable evaluation of JavaScript inline in `.less` files.
   */
  javascriptEnabled?: boolean;

  /**
   * Whether output file information and line numbers in compiled CSS code.
   */
  dumpLineNumbers?: "comment" | string;

  /**
   * Add a path to every generated import and url in output css files.
   */
  rootpath?: string;

  /**
   * Math mode options for avoiding symbol conficts on math expressions.
   */
  math?:
    | "always"
    | "strict"
    | "parens-division"
    | "parens"
    | "strict-legacy"
    | number;

  /**
   * If true, stops any warnings from being shown.
   */
  silent?: boolean;

  /**
   * Without this option, Less attempts to guess at the output unit when it does maths.
   */
  strictUnits?: boolean;

  /**
   * Defines a variable that can be referenced by the file.
   */
  globalVars?: {
    [key: string]: string
  };

  /**
   * Puts Var declaration at the end of base file.
   */
  modifyVars?: {
    [key: string]: string
  };
}

declare interface Less$RenderError {
  column: number;
  extract: string[];
  filename: string;
  index: number;
  line: number;
  message: string;
  type: string;
}

declare interface Less$RenderOutput {
  css: string;
  map: string;
  imports: string[];
}

declare interface Less$RefreshOutput {
  endTime: Date;
  startTime: Date;
  sheets: number;
  totalMilliseconds: number;
}
declare interface LessStatic {
  options: Less$Less$StaticOptions;
  importManager?: Less$Less$ImportManager;
  sheets: HTMLLinkElement[];
  modifyVars(vars: {
    [name: string]: string
  }): Promise<Less$Less$RefreshOutput>;
  refreshStyles(): void;
  render(
    input: string,
    callback: (
      error: Less$Less$RenderError,
      output: Less$Less$RenderOutput
    ) => void
  ): void;
  render(
    input: string,
    options: Less$Less$Options,
    callback: (
      error: Less$Less$RenderError,
      output: Less$Less$RenderOutput
    ) => void
  ): void;
  render(input: string): Promise<Less$Less$RenderOutput>;
  render(
    input: string,
    options: Less$Less$Options
  ): Promise<Less$Less$RenderOutput>;
  refresh(
    reload?: boolean,
    modifyVars?: {
      [variable: string]: string
    },
    clearFileCache?: boolean
  ): Promise<Less$Less$RefreshOutput>;
  version: number[];
  watch(): void;
}
declare module "less" {
  declare module.exports: typeof less;
}
declare var less: LessStatic;
