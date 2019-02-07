declare module "react-instantsearch-native" {
  import typeof * as React from "react";

  declare export { connectToggleRefinement } from "react-instantsearch-core";

  declare export interface InstantSearchProps {
    apiKey: string;
    appId: string;
    indexName: string;
    algoliaClient?: any;
    searchClient?: any;
    createURL?: (...args: any[]) => any;
    searchState?: any;
    refresh?: boolean;
    onSearchStateChange?: (...args: any[]) => any;
    onSearchParameters?: (...args: any[]) => any;
    resultsState?: any;
    root?: {
      Root: string | ((...args: any[]) => any),
      props: any
    };
  }

  /**
   * <InstantSearch> is the root component of all React InstantSearch implementations. It provides all the connected components (aka widgets) a means to interact with the searchState.
   *
   * https://community.algolia.com/react-instantsearch/widgets/%3CInstantSearch%3E.html
   */
  declare export class InstantSearch
    mixins React.Component<InstantSearchProps> {}
  declare export class Index mixins React.Component<any> {}
}
