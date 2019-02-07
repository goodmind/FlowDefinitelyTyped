declare module "zipcelx" {
  /**
   * The value and type of a single cell. Only strings and numbers are supported.
   */
  declare export interface ZipCelXCell {
    /**
     * The cell value
     */
    value: string | number;

    /**
     * The cell value type
     */
    type: "string" | "number";
  }

  /**
   * A Row (a set of cells)
   */
  declare export type ZipCelXRow = ZipCelXCell[];

  /**
   * A DataSet (a set of rows)
   */
  declare export type ZipCelXDataSet = ZipCelXRow[];

  /**
   * Represents a Sheet
   */
  declare export interface ZipCelXSheet {
    /**
     * The sheet's DataSet
     */
    data: ZipCelXDataSet;
  }

  /**
   * The zipcelx configuration
   */
  declare export interface ZipCelXConfig {
    /**
     * The file name of the exported file
     */
    filename: string;

    /**
     * The sheet to be exported as an .xlsx file
     */
    sheet: ZipCelXSheet;
  }
  declare export default function zipcelx(config: ZipCelXConfig): Promise<Blob>;
}
