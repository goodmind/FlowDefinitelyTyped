declare module "save-csv" {
  declare interface SaveCsvProps {
    filename: string;
    sep?: string;
    eol?: string;
    quote?: string;
    bom?: boolean;
    mime?: string;
    formatter?: (value: string | JSON) => void;
  }
  declare function saveCsv(
    array: $ReadOnlyArray<any>,
    options?: SaveCsvProps
  ): void;

  declare export default typeof saveCsv;
}
