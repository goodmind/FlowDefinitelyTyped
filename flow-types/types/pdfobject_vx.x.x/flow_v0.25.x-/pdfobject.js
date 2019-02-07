declare module "pdfobject" {
  declare interface PDFObject {
    embed(url: string, target?: any, options?: any): HTMLElement;
    pdfobjectversion: string;
    supportsPDFs: boolean;
  }
  declare var pdfObject: PDFObject;
  declare module.exports: typeof pdfObject;
}
