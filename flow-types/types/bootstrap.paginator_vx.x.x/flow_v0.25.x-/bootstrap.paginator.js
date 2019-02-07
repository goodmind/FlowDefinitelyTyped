declare module "bootstrap.paginator" {
  declare interface PaginatorOptions {
    alignment?: string;
    size?: string;
    itemContainerClass?: (
      type: string,
      page: number,
      current: number
    ) => string;
    currentPage?: number;
    numberOfPages?: number;
    totalPages?: number;
    pageUrl?: (type: string, page: number, current: number) => string;
    shouldShowPage?: boolean;
    itemTexts?: (type: string, page: number, current: number) => string;
    tooltipTitles?: (type: string, page: number, current: number) => string;
    useBootstrapTooltip?: boolean;
    bootstrapTooltipOptions?: {};
    bootstrapMajorVersion?: number;
    onPageClicked?: (
      event: any,
      originalEvent: any,
      type: string,
      page: number
    ) => void;
    onPageChanged?: (
      event: any,
      originalEvent: any,
      type: string,
      page: number
    ) => void;
  }
  declare interface JQuery {
    bootstrapPaginator(options?: PaginatorOptions): JQuery;
  }
}
