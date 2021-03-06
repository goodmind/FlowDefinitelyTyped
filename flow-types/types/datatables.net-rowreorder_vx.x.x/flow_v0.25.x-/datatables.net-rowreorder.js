declare module "datatables.net-rowreorder" {
  declare interface DataTables$Settings {
    /**
     * Enable and configure the RowReorder extension for DataTables
     */
    rowReorder?: DataTables$RowReorderSettings;
  }

  declare interface DataTables$RowReorderSettings {
    /**
     * Configure the data point that will be used for the reordering data
     */
    dataSrc?: string;

    /**
     * Attach an Editor instance for database updating
     */
    editor?: any;

    /**
     * Enable / disable RowReorder's user interaction
     */
    enable?: boolean;

    /**
     * Set the options for the Editor form when submitting data
     */
    formOptions?: any;

    /**
     * Define the selector used to pick the elements that will start a drag
     */
    selector?: string;

    /**
     * Horizontal position control of the row being dragged
     */
    snapX?: number | boolean;

    /**
     * Control automatic of data when a row is dropped
     */
    update?: boolean;
  }
}
