declare module "pdf2image" {
  /**
   * A token starts with the character '%'
   *
   * d - the page number, if the first page of the PDF is page 1
   * D - the page number, if the first page of the PDF is page 0
   * i - the processed page number, if the first processed page is page 1
   * I - the processed page number, if the first processed page is page 0
   * t - the total number of pages in the pdf
   * T - the total of processed pages
   * s - the name of the pdf file
   * p - the path of the pdf file
   * % - the character '%'
   * {...} - a custom piece of code where all of the above values can be used
   */
  declare export type OutputFormat =
    | ((
        pageNum: number,
        pageIndex: number,
        totalPagesProcessed: number,
        totalPDFPages: number,
        name: string,
        path: string,
        vm: $Exports<"vm">
      ) => string)
    | string;
  declare export interface Options {
    density: number;
    height: number;
    width: number;
    outputType: "jpg" | "png" | ".jpg" | ".png";
    quality: number;
    pages: "*" | string;
    singleProcess: boolean;
    backgroundColor: string;
    outputFormat: OutputFormat;
  }
  declare export interface ConvertedFile {
    page: number;
    index: number;
    name: string;
    path: string;
  }
  declare export function convertPDF(
    pdfFilePath: string,
    options?: $Shape<Options>
  ): Promise<ConvertedFile[]>;

  declare export interface Converter {
    convertPDF(pdfFilePath: string): Promise<ConvertedFile[]>;
    convertPDFList(pdfList: string[]): Promise<ConvertedFile[]>;
  }
  declare export function compileConverter(
    options?: $Shape<Options>
  ): Converter;
}
