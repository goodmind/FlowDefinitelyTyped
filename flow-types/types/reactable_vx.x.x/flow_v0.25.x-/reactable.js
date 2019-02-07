declare module "reactable" {
  import typeof * as React from "react";

  declare export interface KeyLabelObject {
    key: string;
    label: string;
  }
  declare export type ColumnsType = string | KeyLabelObject;
  declare export type SortDirection = "asc" | "desc";
  declare export type FilterMethodType = (text: string) => void;
  declare export interface TableComponentProperties<T> {
    data?: T[];
    className?: string;
    columns?: ColumnsType[];
    defaultSort?: {
      column: string,
      direction: SortDirection
    };
    id?: string;
    sortable?: string[] | boolean;
    sortBy?: boolean;
    filterable?: string[];
    filterBy?: string;
    onFilter?: FilterMethodType;
    itemsPerPage?: number;
    noDataText?: string;
    pageButtonLimit?: number;
    currentPage?: number;
    hideFilterInput?: boolean;
  }
  declare export interface ThProperties {
    column: string;
    className?: string;
  }
  declare export interface TrProperties<T> {
    data?: T;
    className?: string;
  }
  declare export interface TdProperties {
    column: string;
    value?: any;
    data?: any;
  }
  declare export class Table<T>
    mixins React.Component<TableComponentProperties<T>> {}
  declare export class Thead mixins React.Component {}
  declare export class Th mixins React.Component<ThProperties> {}
  declare export class Tr<T> mixins React.Component<TrProperties<T>> {}
  declare export class Td mixins React.Component<TdProperties> {}
  declare export class Tfoot mixins React.Component {}
}
