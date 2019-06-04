declare module "html5-to-pdf" {
  import type { LaunchOptions, PDFOptions, Page } from "puppeteer";

  declare class HTML5ToPDF {
    constructor(options: HTML5ToPDF$Options): this;
    build(): Promise<Buffer>;
    close(): Promise<void>;
    includeAssets(): Promise<void>;
    parseOptions(options: HTML5ToPDF$Options): HTML5ToPDF$ParsedOptions;
    start(): Promise<Page>;
  }
  declare interface HTML5ToPDF$FileDef {
    /**
     * File type
     */
    type: "css" | "js";

    /**
     * File path
     */
    filePath: string;
  }

  declare interface HTML5ToPDF$ParsedOptions {
    body: string | Buffer;
    pdf: PDFOptions;
    templatePath: string;
    templateUrl: string;
    launchOptions: LaunchOptions;
    include: HTML5ToPDF$FileDef[];
    renderDelay: number;
  }

  declare interface HTML5ToPDF$LegacyOptions {
    /**
     * [COMPATIBLE]\
     * Page size
     */
    pageSize?: "A3" | "A4" | "Legal" | "Tabloid";

    /**
     * [COMPATIBLE]\
     * True for landscape, false for portrait.
     */
    landscape?: boolean;

    /**
     * [NOT COMPATIBLE]\
     * 0 - default\
     * 1 - none\
     * 2 - minimum
     */
    marginsType?: number;

    /**
     * [COMPATIBLE]\
     * Whether to print CSS backgrounds.
     */
    printBackground?: boolean;
  }

  declare interface HTML5ToPDF$Options {
    /**
     * Path to the input HTML.
     */
    inputPath?: string;

    /**
     * Path to the input html as a String, or Buffer. If specified this will override inputPath.
     */
    inputBody?: string | Buffer;

    /**
     * Path to the output pdf file.
     */
    outputPath?: string;

    /**
     * Delay in milliseconds before rendering the PDF (give HTML and CSS a chance to load).
     */
    rendererDelay?: number;

    /**
     * A list of CSS or JS assets to include.
     */
    include?: Array<string | HTML5ToPDF$FileDef>;

    /**
     * The template to use when rendering the html.
     */
    template?: string;

    /**
     * The template to use for rendering the html. If this is set, it will use this instead of the template path.
     */
    templateUrl?: string;

    /**
     * This object will be passed directly to `puppeteer`.
     */
    pdf?: PDFOptions;

    /**
     * This object will be passed directly to `puppeteer`.
     */
    launchOptions?: LaunchOptions;

    /**
     * @deprecated Legacy Options.
     * See `options.pdf` for pdf options. Since some of these options are converted over to work with `puppeteer`,
     * this is automatically done if `options.pdf` is left empty.
     */
    options?: HTML5ToPDF$LegacyOptions;
  }
  declare export default typeof HTML5ToPDF;
}
