declare module "list.js" {
  declare interface ListOptions {
    valueNames?: string[];
    item?: string;
    listClass?: string;
    searchClass?: string;
    sortClass?: string;
    indexAsync?: boolean;
    page?: number;
    i?: number;
    pagination?: boolean;
  }
  declare interface SortOptions {
    order?: string;
    alphabet?: string;
    insensitive?: boolean;
    sortFunction?: (
      a: { [key: string]: any },
      b: { [key: string]: any }
    ) => number | void;
  }
  declare class List {
    listContainer: HTMLElement;
    list: HTMLElement;
    items: { [key: string]: any }[];
    visibleItems: { [key: string]: any }[];
    matchingItems: { [key: string]: any }[];
    searched: boolean;
    filtered: boolean;
    constructor(
      element: string | HTMLElement,
      options?: ListOptions,
      values?: { [key: string]: any }[]
    ): this;
    add(
      values: { [key: string]: any }[],
      callback?: (item: ListItem) => void
    ): void;
    remove(valueName: string, value: any): number;
    get(valueName: string, value: any): ListItem[];
    sort(valueName: string, options: SortOptions): void;
    search(searchString: string, columns?: string[]): void;
    clear(): void;
    filter(filterFunction: (item: ListItem) => boolean): void;
    size(): number;
    show(i: number, page: number): void;
    update(): void;
    reIndex(): void;
    fuzzySearch(searchString: string, columns?: string[]): void;
    on(event: string, callback: () => void): void;
  }
  declare class ListItem {
    elm: HTMLElement;
    values(newValues: { [key: string]: any }): void;
    values(): { [key: string]: any };
    show(): void;
    hide(): void;
    matching(): boolean;
    visible(): boolean;
  }
  declare module.exports: typeof List;
}
