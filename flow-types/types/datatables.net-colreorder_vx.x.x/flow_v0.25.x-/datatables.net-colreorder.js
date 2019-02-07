declare module "datatables.net-colreorder" {
  declare interface DataTables$Settings {
    colReorder?: boolean | DataTables$ColReorderSettings;
  }

  declare interface DataTables$ColReorderSettings {
    fixedColumnsLeft?: number;
    fixedColumnsRight?: number;
    order?: number[];
    realtime?: boolean;
    reorderCallback: () => void;
  }

  declare interface DataTables$Api {
    colReorder: {
      move(
        from: number,
        to: number,
        drop: boolean,
        invalidate: boolean
      ): DataTables$Api,
      order(newOrder?: number[], originalIndexes?: boolean): DataTables$Api,
      reset(): DataTables$Api,
      transpose(
        idx?: number | number[],
        direction?: "toCurrent" | "toOriginal" | "fromOriginal" | "fromCurrent"
      ): DataTables$Api
    };
  }
}
