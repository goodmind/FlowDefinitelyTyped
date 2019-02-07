declare module "react-table-filter" {
  import typeof * as React from "react";

  declare export interface TabfilterProps {
    rows:
      | string
      | string[]
      | {
          [name: string]: boolean
        };
    onFilterUpdate: (
      filteredArray: string[],
      currentFilters: any[]
    ) => any[] | void;
    rowClass?: string;
    initialFilters?:
      | string
      | string[]
      | {
          [name: string]: boolean
        };
  }
  declare export class TableFilter mixins React.Component<TabfilterProps> {}
}
