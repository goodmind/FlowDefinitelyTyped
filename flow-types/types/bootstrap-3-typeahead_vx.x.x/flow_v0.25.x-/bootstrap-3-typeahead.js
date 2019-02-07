declare module "bootstrap-3-typeahead" {
  declare interface Bootstrap3Typeahead$Options {
    /**
     * The data source to query against
     */
    source?:
      | string[]
      | { [key: string]: any }[]
      | ((
          query?: string,
          process?: (
            callback: any
          ) => string | string[] | { [key: string]: any }[]
        ) => void);

    /**
     * The max number of items to display in the dropdown
     */
    items?: number;

    /**
     * The minimum character length needed before triggering autocomplete suggestions
     */
    minLength?: number;

    /**
     * If hints should be shown as soon as the input gets focus
     */
    showHintOnFocus?: boolean | "all";

    /**
     * Number of pixels the scrollable parent container scrolled down
     */
    scrollHeight?: number | (() => number);

    /**
     * The method used to determine if a query matches an item
     */
    matcher?: (item: string) => boolean;

    /**
     * Method used to sort autocomplete results
     */
    sorter?: (items: string[]) => string[];

    /**
     * The method used to return selected item
     */
    updater?: (item: string) => string;

    /**
     * Method used to highlight autocomplete results
     */
    highlighter?: (item: string) => string;

    /**
     * Method used to get textual representation of an item of the sources
     */
    displayText?: (
      item:
        | string
        | {
            name: string
          }
    ) => string;

    /**
     * Allows you to dictate whether or not the first suggestion is selected automatically
     */
    autoSelect?: boolean;

    /**
     * Call back function to execute after selected an item
     */
    afterSelect?: (item: string) => void;

    /**
     * Adds a delay between lookups
     */
    delay?: number;

    /**
     * Use this option to add the menu to another div
     */
    appendTo?: JQuery;

    /**
     * Set to true if you want the menu to be the same size than the input it is attached to
     */
    fitToElement?: boolean;

    /**
     * Adds an item to the end of the list
     */
    addItem?: { [key: string]: any };
  }
  declare interface JQuery {
    /**
     * Initialize or destroy Typeahead
     */
    typeahead(
      methodOrOptions?:
        | "destroy"
        | Bootstrap3Typeahead$Bootstrap3Typeahead$Options
    ): JQuery;

    /**
     * To get the currently active item
     */
    typeahead(method: "getActive"): void | string | { [key: string]: any };

    /**
     * To trigger the lookup function externally
     */
    typeahead(method: "lookup", defaultValue?: string): JQuery;
  }
}
