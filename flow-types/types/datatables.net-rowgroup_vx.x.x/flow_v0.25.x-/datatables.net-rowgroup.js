declare module "datatables.net-rowgroup" {
  declare interface DataTables$Settings {
    /**
     * RowGroup extension options
     */
    rowGroup?: boolean | DataTables$RowGroupSettings;
  }

  declare interface DataTables$StaticFunctions {
    RowGroup: DataTables$RowGroupStaticFunctions;
  }

  declare interface DataTables$RowGroupStaticFunctions {
    new(
      dt: DataTables$Api,
      settings: boolean | DataTables$RowGroupSettings
    ): void;
    version: string;
    defaults: DataTables$RowGroupSettings;
  }

  declare interface DataTables$Api {
    rowGroup(): DataTables$RowGroupApi;
  }

  declare interface DataTables$RowGroupApi {
    /**
     * Get the data source for the row grouping
     */
    dataSrc(): number | string;

    /**
     * Set the data source for the row grouping
     */
    dataSrc(prop: number | string): DataTables$Api;

    /**
     * Disable RowGroup's interaction with the table
     */
    disable(): DataTables$Api;

    /**
     * Enable or disable RowGroup's interaction with the table
     */
    enable(enable?: boolean): DataTables$Api;
  }

  /**
   * RowGroup extension options
   */
  declare interface DataTables$RowGroupSettings {
    /**
     * Set the class name to be used for the grouping rows
     */
    className?: string;

    /**
     * Set the data point to use as the grouping data source
     */
    dataSrc?: number | string;

    /**
     * Provides the ability to disable row grouping at initialisation
     */
    enable?: boolean;

    /**
     * Set the class name to be used for the grouping end rows
     */
    endClassName?: string;

    /**
     * Provide a function that can be used to control the data shown in the end grouping row
     */
    endRender?: (
      rows: DataTables$Api,
      group: string
    ) => string | HTMLElement | JQuery;

    /**
     * Provide a function that can be used to control the data shown in the start grouping row
     */
    startRender?: (
      rows: DataTables$Api,
      group: string
    ) => string | HTMLElement | JQuery;
  }
}
