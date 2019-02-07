declare module "react-ultimate-pagination" {
  import typeof * as React from "react";

  declare export interface PaginationComponentProps {
    /**
     * Number of pages that user should navigate to when item is activated (for items with type `PAGE` it also can be used as a label in UI)
     */
    value: number;

    /**
     * Show if `currentPage` if the same as `value` of an item (can be used to highlight a current page or disable first, previous, next or last page links when user is already on first/last page)
     */
    isActive: boolean;

    /**
     * Show if button should be disabled
     */
    isDisabled: boolean;

    /**
     * Should be called when user interacted with a component and the current page should be changed to the page represented by item (no arguments should be used, can be used for all item types)
     */
    onClick: () => void;
  }
  declare export class ITEM_TYPES {
    constructor(...args: empty): mixed;
    static +PAGE: Class<ITEM_TYPES__PAGE> & ITEM_TYPES__PAGE & "PAGE"; // "PAGE"
    static +ELLIPSIS: Class<ITEM_TYPES__ELLIPSIS> &
      ITEM_TYPES__ELLIPSIS &
      "ELLIPSIS"; // "ELLIPSIS"
    static +FIRST_PAGE_LINK: Class<ITEM_TYPES__FIRST_PAGE_LINK> &
      ITEM_TYPES__FIRST_PAGE_LINK &
      "FIRST_PAGE_LINK"; // "FIRST_PAGE_LINK"
    static +PREVIOUS_PAGE_LINK: Class<ITEM_TYPES__PREVIOUS_PAGE_LINK> &
      ITEM_TYPES__PREVIOUS_PAGE_LINK &
      "PREVIOUS_PAGE_LINK"; // "PREVIOUS_PAGE_LINK"
    static +NEXT_PAGE_LINK: Class<ITEM_TYPES__NEXT_PAGE_LINK> &
      ITEM_TYPES__NEXT_PAGE_LINK &
      "NEXT_PAGE_LINK"; // "NEXT_PAGE_LINK"
    static +LAST_PAGE_LINK: Class<ITEM_TYPES__LAST_PAGE_LINK> &
      ITEM_TYPES__LAST_PAGE_LINK &
      "LAST_PAGE_LINK"; // "LAST_PAGE_LINK"
  }

  declare class ITEM_TYPES__PAGE mixins ITEM_TYPES {}
  declare class ITEM_TYPES__ELLIPSIS mixins ITEM_TYPES {}
  declare class ITEM_TYPES__FIRST_PAGE_LINK mixins ITEM_TYPES {}
  declare class ITEM_TYPES__PREVIOUS_PAGE_LINK mixins ITEM_TYPES {}
  declare class ITEM_TYPES__NEXT_PAGE_LINK mixins ITEM_TYPES {}
  declare class ITEM_TYPES__LAST_PAGE_LINK mixins ITEM_TYPES {}

  declare export interface ItemTypeToComponent {
    /**
     * A link to a page
     */
    PAGE: React.ComponentType<PaginationComponentProps>;

    /**
     * An item that represents groups of pages that currently are not visible in paginator (can be used to navigate to the page in the group that is the nearest to the current page)
     */
    ELLIPSIS: React.ComponentType<PaginationComponentProps>;

    /**
     * A link to the first page
     */
    FIRST_PAGE_LINK: React.ComponentType<PaginationComponentProps>;

    /**
     * A link to the previous page
     */
    PREVIOUS_PAGE_LINK: React.ComponentType<PaginationComponentProps>;

    /**
     * A link to the next page
     */
    NEXT_PAGE_LINK: React.ComponentType<PaginationComponentProps>;

    /**
     * A link to the last page
     */
    LAST_PAGE_LINK: React.ComponentType<PaginationComponentProps>;
  }
  declare export interface CreateUltimatePaginationOptions {
    /**
     * An object that is used as a map from the item type to the React.js component that will be used to render this item
     */
    itemTypeToComponent: ItemTypeToComponent;

    /**
     * A React.js component that will be used as a wrapper for pagination items
     */
    WrapperComponent?: string | React.ComponentType<any>;
  }
  declare export interface UltimatePaginationProps {
    /**
     * Current page number
     */
    currentPage: number;

    /**
     * Total number of pages
     */
    totalPages: number;

    /**
     * Number of always visible pages at the beginning and end
     */
    boundaryPagesRange?: number;

    /**
     * Number of always visible pages before and after the current one
     */
    siblingPagesRange?: number;

    /**
     * Boolean flag to hide ellipsis
     */
    hideEllipsis?: boolean;

    /**
     * Boolean flag to hide previous and next page links
     */
    hidePreviousAndNextPageLinks?: boolean;

    /**
     * Boolean flag to hide first and last page links
     */
    hideFirstAndLastPageLinks?: boolean;

    /**
     * Callback that will be called with new page when it should be changed by user interaction
     */
    onChange?: (newPage: number) => void;

    /**
     * Boolean flag to disable all buttons in pagination
     */
    disabled?: boolean;
  }
  declare export function createUltimatePagination(
    options: CreateUltimatePaginationOptions
  ): React.ComponentType<UltimatePaginationProps>;
}
