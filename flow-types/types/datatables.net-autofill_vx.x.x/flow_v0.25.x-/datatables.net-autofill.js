declare module "datatables.net-autofill" {
  declare interface DataTables$Settings {
    autoFill?: boolean | DataTables$AutoFillSettings;
  }

  declare interface DataTables$AutoFillSettings {
    alwaysAsk?: boolean;
    columns: string | number[];
    enable?: boolean;
  }
}
