declare module "react-instantsearch-dom" {
  import typeof * as React from "react";

  import type { Hit, BasicDoc } from "react-instantsearch-core";

  declare export { connectToggleRefinement } from "react-instantsearch-core";

  declare interface CommonWidgetProps {
    /**
     * All static text rendered by widgets, such as “Load more”, “Show more” are translatable using the translations prop on relevant widgets.
     * This prop is a mapping of keys to translation values. Translation values can be either a String or a (...args: any[]) => any, as some take parameters.
     *
     * https://community.algolia.com/react-instantsearch/guide/i18n.html
     */
    translations?: {
      [key: string]: string | ((...args: any[]) => any)
    };
  }
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
  declare export class Breadcrumb mixins React.Component<any> {}
  declare export class ClearRefinements mixins React.Component<any> {}
  declare export class CurrentRefinements mixins React.Component<any> {}
  declare export class HierarchicalMenu mixins React.Component<any> {}
  declare export class Highlight mixins React.Component<any> {}
  declare export interface HitsProps<T> {
    hitComponent?: React.ComponentType<{
      hit: Hit<T>
    }>;
  }

  /**
   * Displays a list of hits.
   * To configure the number of hits being shown, use the HitsPerPage widget, connectHitsPerPage connector or the Configure widget.
   *
   * https://community.algolia.com/react-instantsearch/widgets/Hits.html
   */
  declare export class Hits<T = BasicDoc>
    mixins React.Component<HitsProps<T>> {}
  declare export class HitsPerPage mixins React.Component<any> {}
  declare export class InfiniteHits mixins React.Component<any> {}
  declare export class Menu mixins React.Component<any> {}
  declare export class MenuSelect mixins React.Component<any> {}
  declare export class NumericMenu mixins React.Component<any> {}
  declare export class Pagination mixins React.Component<any> {}
  declare export class Panel mixins React.Component<any> {}
  declare export class PoweredBy mixins React.Component<any> {}
  declare export class RangeInput mixins React.Component<any> {}
  declare export class RangeSlider mixins React.Component<any> {}
  declare export class RatingMenu mixins React.Component<any> {}
  declare export class RefinementList mixins React.Component<any> {}
  declare export class ScrollTo mixins React.Component<any> {}
  declare export type SearchBoxProps = {
    focusShortcuts?: string[],
    autoFocus?: boolean,
    defaultRefinement?: string,
    searchAsYouType?: boolean,
    showLoadingIndicator?: boolean,
    submit?: JSX.Element,
    reset?: JSX.Element,
    loadingIndicator?: JSX.Element,
    onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => any,
    onReset?: (event: React.SyntheticEvent<HTMLFormElement>) => any,
    onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => any
  } & CommonWidgetProps;

  /**
   * The SearchBox component displays a search box that lets the user search for a specific query.
   *
   * https://community.algolia.com/react-instantsearch/widgets/SearchBox.html
   */
  declare export class SearchBox mixins React.Component<SearchBoxProps> {}
  declare export class Snippet mixins React.Component<any> {}
  declare export class SortBy mixins React.Component<any> {}

  /**
   * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server).
   */
  declare export class Stats
    mixins React.Component<{
        translations?: {
          [key: string]: (n: number, ms: number) => string
        }
      }> {}
  declare export class ToggleRefinement mixins React.Component<any> {}
}
