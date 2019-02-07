declare module "datatables.net-select" {
  declare interface DataTables$Settings {
    select?: boolean | string | DataTables$SelectSettings;
  }

  declare interface DataTables$SelectSettings {
    blurable?: boolean;
    className?: string;
    info?: boolean;
    items?: string;
    selector?: string;
    style?: "api" | "single" | "multi" | "os" | "multi+shift";
  }

  declare interface DataTables$Api {
    select: {
      style(): string,
      style(s: "api" | "single" | "multi" | "os"): DataTables$Api
    };
  }

  declare interface DataTables$RowMethods {
    /**
     * Select a row
     */
    select(): DataTables$Api;

    /**
     * Deselect a row
     */
    deselect(): DataTables$Api;
  }

  declare interface DataTables$RowsMethods {
    /**
     * Select multiple rows
     */
    select(): DataTables$Api;

    /**
     * Deselect a row
     */
    deselect(): DataTables$Api;
  }
}
