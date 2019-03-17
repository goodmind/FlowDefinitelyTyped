declare module "algoliasearch-helper" {
  import type { Client } from "algoliasearch";

  import type { EventEmitter } from "events";

  import typeof * as algoliasearch from "algoliasearch";

  /**
   * The algoliasearchHelper module is the function that will let its
   * contains everything needed to use the Algoliasearch
   * Helper. It is a also a function that instanciate the helper.
   * To use the helper, you also need the Algolia JS client v3.
   * @param client an AlgoliaSearch client
   * @param index the name of the index to query
   * @param opts
   */
  declare function algoliasearchHelper(
    client: Client,
    index: string,
    opts: algoliasearchHelper$QueryParameters
  ): algoliasearchHelper$AlgoliaSearchHelper;

  declare var algoliasearchHelper: typeof npm$namespace$algoliasearchHelper;

  declare var npm$namespace$algoliasearchHelper: {
    version: typeof algoliasearchHelper$version,

    AlgoliaSearchHelper: typeof algoliasearchHelper$AlgoliaSearchHelper,
    SearchParameters: typeof algoliasearchHelper$SearchParameters,
    SearchResults: typeof algoliasearchHelper$SearchResults
  };
  declare export var algoliasearchHelper$version: string;

  declare export class algoliasearchHelper$AlgoliaSearchHelper
    mixins EventEmitter {
    state: algoliasearchHelper$SearchParameters;
    lastResults: algoliasearchHelper$SearchResults;
    derivedHelpers: algoliasearchHelper$AlgoliaSearchHelper[];
    on(
      event: "change" | "search",
      cb: (
        state: algoliasearchHelper$SearchParameters,
        lastResults: algoliasearchHelper$SearchResults | null
      ) => any
    ): this;
    on(
      event: "searchForFacetValues",
      cb: (
        state: algoliasearchHelper$SearchParameters,
        facet: string,
        query: string
      ) => any
    ): this;
    on(
      event: "searchOnce",
      cb: (state: algoliasearchHelper$SearchParameters) => any
    ): this;
    on(
      event: "result",
      cb: (
        results: algoliasearchHelper$SearchResults,
        state: algoliasearchHelper$SearchParameters
      ) => any
    ): this;
    on(event: "error", cb: (error: any) => any): this;
    on(event: "searchQueueEmpty", cb: () => any): this;

    /**
     * Start the search with the parameters set in the state. When the
     * method is called, it triggers a `search` event. The results will
     * be available through the `result` event. If an error occurs, an
     * `error` will be fired instead.
     * @return
     * @fires search
     * @fires result
     * @fires error
     * @chainable
     */
    search(): this;

    /**
     * Gets the search query parameters that would be sent to the Algolia Client
     * for the hits
     * @return Query Parameters
     */
    getQuery(): algoliasearchHelper$QueryParameters;

    /**
     * Start a search using a modified version of the current state. This method does
     * not trigger the helper lifecycle and does not modify the state kept internally
     * by the helper. This second aspect means that the next search call will be the
     * same as a search call before calling searchOnce.
     * @param options can contain all the parameters that can be set to SearchParameters
     * plus the index
     * @param callback optional callback executed when the response from the
     * server is back.
     * @return if a callback is passed the method returns undefined
     * otherwise it returns a promise containing an object with two keys :
     * - content with a SearchResults
     * - state with the state used for the query as a SearchParameters
     * @example // Changing the number of records returned per page to 1
     * // This example uses the callback API
     * var state = helper.searchOnce({hitsPerPage: 1},
     * function(error, content, state) {
     * // if an error occurred it will be passed in error, otherwise its value is null
     * // content contains the results formatted as a SearchResults
     * // state is the instance of SearchParameters used for this search
     * });
     * @example // Changing the number of records returned per page to 1
     * // This example uses the promise API
     * var state1 = helper.searchOnce({hitsPerPage: 1})
     * .then(promiseHandler);
     *
     * function promiseHandler(res) {
     * // res contains
     * // {
     * //   content : SearchResults
     * //   state   : SearchParameters (the one used for this specific search)
     * // }
     * }
     */
    searchOnce(
      options: algoliasearchHelper$QueryParameters
    ): Promise<{
      content: algoliasearchHelper$SearchResults,
      state: algoliasearchHelper$SearchParameters
    }>;
    searchOnce(
      options: algoliasearchHelper$QueryParameters,
      cb: (
        error: any,
        content: algoliasearchHelper$SearchResults,
        state: algoliasearchHelper$SearchParameters
      ) => any
    ): void;

    /**
     * Search for facet values based on an query and the name of a faceted attribute. This
     * triggers a search and will return a promise. On top of using the query, it also sends
     * the parameters from the state so that the search is narrowed down to only the possible values.
     *
     * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
     * @param facet the name of the faceted attribute
     * @param query the string query for the search
     * @param maxFacetHits the maximum number values returned. Should be > 0 and <= 100
     * @param userState the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
     * it in the generated query.
     * @return the results of the search
     */
    searchForFacetValues(
      facet: string,
      query: string,
      maxFacetHits: number,
      userState: any
    ): Promise<AlgoliaSearchHelper$FacetSearchResult>;

    /**
     * Sets the text query used for the search.
     *
     * This method resets the current page to 0.
     * @param q the user query
     * @return
     * @fires change
     * @chainable
     */
    setQuery(q: string): this;

    /**
     * Remove all the types of refinements except tags. A string can be provided to remove
     * only the refinements of a specific attribute. For more advanced use case, you can
     * provide a function instead. This function should follow the
     * [clearCallback definition](#SearchParameters.clearCallback).
     *
     * This method resets the current page to 0.
     * @param name optional name of the facet / attribute on which we want to remove all refinements
     * @return
     * @fires change
     * @chainable
     * @example // Removing all the refinements
     * helper.clearRefinements().search();
     * @example // Removing all the filters on a the category attribute.
     * helper.clearRefinements('category').search();
     * @example // Removing only the exclude filters on the category facet.
     * helper.clearRefinements(function(value, attribute, type) {
     * return type === 'exclude' && attribute === 'category';
     * }).search();
     */
    clearRefinements(name?: string): this;
    clearRefinements(
      func: (value: any, attribute: string, type: string) => boolean
    ): this;

    /**
     * Remove all the tag filters.
     *
     * This method resets the current page to 0.
     * @return
     * @fires change
     * @chainable
     */
    clearTags(): this;

    /**
     * Updates the name of the index that will be targeted by the query.
     *
     * This method resets the current page to 0.
     * @param name the index name
     * @return
     * @fires change
     * @chainable
     */
    setIndex(name: string): this;
    addDisjunctiveFacetRefinement(...args: any[]): any;
    addDisjunctiveRefine(...args: any[]): any;
    addHierarchicalFacetRefinement(...args: any[]): any;
    addNumericRefinement(...args: any[]): any;
    addFacetRefinement(...args: any[]): any;
    addRefine(...args: any[]): any;
    addFacetExclusion(...args: any[]): any;
    addExclude(...args: any[]): any;
    addTag(...args: any[]): any;
    removeNumericRefinement(...args: any[]): any;
    removeDisjunctiveFacetRefinement(...args: any[]): any;
    removeDisjunctiveRefine(...args: any[]): any;
    removeHierarchicalFacetRefinement(...args: any[]): any;
    removeFacetRefinement(...args: any[]): any;
    removeRefine(...args: any[]): any;
    removeFacetExclusion(...args: any[]): any;
    removeExclude(...args: any[]): any;
    removeTag(...args: any[]): any;
    toggleFacetExclusion(...args: any[]): any;
    toggleExclude(...args: any[]): any;
    toggleRefinement(...args: any[]): any;
    toggleFacetRefinement(...args: any[]): any;
    toggleRefine(...args: any[]): any;
    toggleTag(...args: any[]): any;
    nextPage(...args: any[]): any;
    previousPage(...args: any[]): any;
    setCurrentPage(...args: any[]): any;
    setPage(...args: any[]): any;
    setQueryParameter(...args: any[]): any;

    /**
     * Set the whole state (warning: will erase previous state)
     * @param newState the whole new state
     * @return
     * @fires change
     * @chainable
     */
    setState(newState: algoliasearchHelper$QueryParameters): this;

    /**
     * Get the current search state stored in the helper. This object is immutable.
     * @param filters optional filters to retrieve only a subset of the state
     * @return if filters is specified a plain object is
     * returned containing only the requested fields, otherwise return the unfiltered
     * state
     * @example // Get the complete state as stored in the helper
     * helper.getState();
     * @example // Get a part of the state with all the refinements on attributes and the query
     * helper.getState(['query', 'attribute:category']);
     */
    getState(): algoliasearchHelper$SearchParameters;
    getState(filters: string[]): algoliasearchHelper$QueryParameters;
    getStateAsQueryString(...args: any[]): any;
    setStateFromQueryString(...args: any[]): any;
    overrideStateWithoutTriggeringChangeEvent(...args: any[]): any;
    isRefined(...args: any[]): any;
    hasRefinements(...args: any[]): any;
    isExcluded(...args: any[]): any;
    isDisjunctiveRefined(...args: any[]): any;
    hasTag(...args: any[]): any;
    isTagRefined(...args: any[]): any;
    getIndex(...args: any[]): any;
    getCurrentPage(...args: any[]): any;
    getPage(...args: any[]): any;
    getTags(...args: any[]): any;
    getQueryParameter(...args: any[]): any;
    getRefinements(...args: any[]): any;
    getNumericRefinement(...args: any[]): any;
    getHierarchicalFacetBreadcrumb(...args: any[]): any;
    containsRefinement(...args: any[]): any;
    clearCache(...args: any[]): any;
    setClient(...args: any[]): any;
    getClient(...args: any[]): any;
    derive(...args: any[]): any;
    detachDerivedHelper(...args: any[]): any;
    hasPendingRequests(...args: any[]): any;
  }

  /**
   * Structure of each result when using
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   */
  declare interface algoliasearchHelper$AlgoliaSearchHelper$FacetSearchHit {
    value: string;
    highlighted: string;
    count: number;
    isRefined: boolean;
  }

  /**
   * Structure of the data resolved by the
   * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
   * promise.
   */
  declare interface algoliasearchHelper$AlgoliaSearchHelper$FacetSearchResult {
    facetHits: AlgoliaSearchHelper$FacetSearchHit;
    processingTimeMS: number;
  }

  declare export type algoliasearchHelper$QueryParameters = {
    /**
     * Targeted index. This parameter is mandatory.
     */
    index?: string,

    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     */
    disjunctiveFacets?: string[],

    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     */
    hierarchicalFacets?: string[] | { [key: string]: any }[],

    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsRefinements?: {
      [facet: string]: SearchParameters$FacetList
    },

    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsExcludes?: {
      [facet: string]: SearchParameters$FacetList
    },

    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    disjunctiveFacetsRefinements?: {
      [facet: string]: SearchParameters$FacetList
    },

    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     */
    numericRefinements?: {
      [facet: string]: SearchParameters$OperatorList
    },

    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     */
    tagRefinements?: string[],

    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    hierarchicalFacetsRefinements?: {
      [facet: string]: SearchParameters$FacetList
    },

    /**
     * Contains the optional tag filters in the raw format of the Algolia API.
     * @see https://www.algolia.com/doc/rest#param-tagFilters
     */
    optionalTagFilters?: string,

    /**
     * Contains the optional facet filters in the raw format of the Algolia API.
     * @see https://www.algolia.com/doc/rest#param-tagFilters
     */
    optionalFacetFilters?: string,

    /**
     * Applies 'exact' on single word queries if the word contains at least 3 characters
     * and is not a stop word.
     * Can take two values?: true or false.
     * By default, its set to false.
     * @see https://www.algolia.com/doc/rest#param-enableExactOnSingleWordQuery
     */
    enableExactOnSingleWordQuery?: boolean
  } & algoliasearch.QueryParameters;

  declare export class algoliasearchHelper$SearchParameters
    mixins algoliasearchHelper$QueryParameters {
    index: string;
    disjunctiveFacets: string[];
    hierarchicalFacets: string[] | { [key: string]: any }[];
    facetsRefinements: {
      [facet: string]: string[]
    };
    facetsExcludes: {
      [facet: string]: string[]
    };
    disjunctiveFacetsRefinements: {
      [facet: string]: string[]
    };
    numericRefinements: {
      [facet: string]: SearchParameters$OperatorList
    };
    tagRefinements: string[];
    hierarchicalFacetsRefinements: {
      [facet: string]: string[]
    };
    optionalTagFilters: string;
    optionalFacetFilters: string;
    hitsPerPage: number;
    maxValuesPerFacet: number;
    minWordSizefor1Typo: number;
    minWordSizefor2Typos: number;
    minProximity: any;
    allowTyposOnNumericTokens: boolean;
    ignorePlurals: boolean;
    advancedSyntax: boolean;
    analytics: boolean;
    synonyms: boolean;
    replaceSynonymsInHighlight: boolean;
    highlightPreTag: string;
    highlightPostTag: string;
    distinct: number | boolean;
    aroundLatLng: string;
    aroundRadius: number;
    minimumAroundRadius: number;
    aroundPrecision: number;
    snippetEllipsisText: string;
    enableExactOnSingleWordQuery: boolean;
    query: string;
    filters: string;
    attributesToRetrieve: string[];
    restrictSearchableAttributes: string[];
    facets: string[];
    facetingAfterDistinct: boolean;
    attributesToHighlight: string[];
    attributesToSnippet: string[];
    restrictHighlightAndSnippetArrays: boolean;
    page: number;
    offset: number;
    length: number;
    typoTolerance: boolean;
    disableTypoToleranceOnAttributes: string[];
    aroundLatLngViaIP: boolean;
    insideBoundingBox: number[][];
    queryType: "prefixAll" | "prefixLast" | "prefixNone";
    insidePolygon: number[][];
    removeWordsIfNoResults: "none" | "lastWords" | "firstWords" | "allOptional";
    optionalWords: string[];
    removeStopWords: boolean | string[];
    disableExactOnAttributes: string[];
    exactOnSingleWordQuery: "none" | "attribute" | "word";
    alternativesAsExact: Array<
      "ignorePlurals" | "singleWordSynonym" | "multiWordsSynonym"
    >;
    getRankingInfo: boolean;
    numericAttributesToIndex: string[];
    numericAttributesForFiltering: string[];
    numericFilters: string[];
    tagFilters: string[];
    facetFilters: string[] | string[][];
    analyticsTags: string[];
    nbShards: number;
    userData: string | { [key: string]: any };
    constructor(newParameters?: algoliasearchHelper$QueryParameters): this;
    addDisjunctiveFacet(facet: string): algoliasearchHelper$SearchParameters;
    addDisjunctiveFacetRefinement(
      facet: string,
      value: string
    ): algoliasearchHelper$SearchParameters;
    addExcludeRefinement(
      facet: string,
      value: string
    ): algoliasearchHelper$SearchParameters;
    addFacet(facet: string): algoliasearchHelper$SearchParameters;
    addFacetRefinement(
      facet: string,
      value: string
    ): algoliasearchHelper$SearchParameters;
    addHierarchicalFacet(facet: any): algoliasearchHelper$SearchParameters;
    addHierarchicalFacetRefinement(
      facet: string,
      path: string
    ): algoliasearchHelper$SearchParameters;
    addNumericRefinement(
      attribute: string,
      operator: SearchParameters$Operator,
      value: number | number[]
    ): algoliasearchHelper$SearchParameters;
    addTagRefinement(tag: string): algoliasearchHelper$SearchParameters;
    clearRefinements(
      attribute?:
        | string
        | ((value: any, attribute: string, type: string) => any)
    ): algoliasearchHelper$SearchParameters;
    clearTags(): algoliasearchHelper$SearchParameters;
    filter(filters: string[]): any;
    getConjunctiveRefinements(facetName: string): string[];
    getDisjunctiveRefinements(facetName: string): string[];
    getExcludeRefinements(facetName: string): string[];
    getHierarchicalFacetBreadcrumb(facetName: string): string[];
    getHierarchicalFacetByName(hierarchicalFacetName: string): any;
    getHierarchicalRefinement(facetName: string): string[];
    getNumericRefinements(facetName: string): SearchParameters$OperatorList[];
    getNumericRefinement(
      attribute: string,
      operator: SearchParameters$Operator
    ): Array<number | number[]>;
    getQueryParameter(paramName: string): any;
    getRefinedDisjunctiveFacets(facet: string, value: any): string[];
    getRefinedHierarchicalFacets(facet: string, value: any): string[];
    getUnrefinedDisjunctiveFacets(): string[];
    isConjunctiveFacet(facet: string): boolean;
    isDisjunctiveFacetRefined(facet: string, value?: string): boolean;
    isDisjunctiveFacet(facet: string): boolean;
    isExcludeRefined(facet: string, value?: string): boolean;
    isFacetRefined(facet: string, value?: string): boolean;
    isHierarchicalFacetRefined(facet: string, value?: string): boolean;
    isHierarchicalFacet(facet: string): boolean;
    isNumericRefined(
      attribute: string,
      operator: SearchParameters$Operator,
      value?: string
    ): boolean;
    isTagRefined(tag: string): boolean;
    static make(
      newParameters: algoliasearchHelper$QueryParameters
    ): algoliasearchHelper$SearchParameters;
    removeExcludeRefinement(
      facet: string,
      value: string
    ): algoliasearchHelper$SearchParameters;
    removeFacet(facet: string): algoliasearchHelper$SearchParameters;
    removeFacetRefinement(
      facet: string,
      value?: string
    ): algoliasearchHelper$SearchParameters;
    removeDisjunctiveFacet(facet: string): algoliasearchHelper$SearchParameters;
    removeDisjunctiveFacetRefinement(
      facet: string,
      value?: string
    ): algoliasearchHelper$SearchParameters;
    removeHierarchicalFacet(
      facet: string
    ): algoliasearchHelper$SearchParameters;
    removeHierarchicalFacetRefinement(
      facet: string
    ): algoliasearchHelper$SearchParameters;
    removeTagRefinement(tag: string): algoliasearchHelper$SearchParameters;
    setDisjunctiveFacets(
      facets: string[]
    ): algoliasearchHelper$SearchParameters;
    setFacets(facets: string[]): algoliasearchHelper$SearchParameters;
    setHitsPerPage(n: number): algoliasearchHelper$SearchParameters;
    setPage(newPage: number): algoliasearchHelper$SearchParameters;
    setQueryParameters(params: {
      [key: string]: any
    }): algoliasearchHelper$SearchParameters;
    setQueryParameter(
      parameter: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    setQuery(newQuery: string): algoliasearchHelper$SearchParameters;
    setTypoTolerance(
      typoTolerance: string
    ): algoliasearchHelper$SearchParameters;
    toggleDisjunctiveFacetRefinement(
      facet: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    toggleExcludeFacetRefinement(
      facet: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    toggleConjunctiveFacetRefinement(
      facet: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    toggleHierarchicalFacetRefinement(
      facet: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    toggleFacetRefinement(
      facet: string,
      value: any
    ): algoliasearchHelper$SearchParameters;
    toggleTagRefinement(tag: string): algoliasearchHelper$SearchParameters;
    static validate(
      currentState: algoliasearchHelper$SearchParameters,
      parameters: algoliasearchHelper$QueryParameters
    ): null | Error;
  }

  declare type algoliasearchHelper$SearchParameters$FacetList = string[];

  declare type algoliasearchHelper$SearchParameters$OperatorList = $ObjMapi<
    { [k: SearchParameters$Operator]: any },
    <k>(k) => Array<number | number[]>
  >;

  declare type algoliasearchHelper$SearchParameters$Operator =
    | "="
    | ">"
    | ">="
    | "<"
    | "<="
    | "!=";

  declare export class algoliasearchHelper$SearchResults {
    /**
     * query used to generate the results
     */
    query: string;

    /**
     * The query as parsed by the engine given all the rules.
     */
    parsedQuery: string;

    /**
     * all the records that match the search parameters. Each record is
     * augmented with a new attribute `_highlightResult`
     * which is an object keyed by attribute and with the following properties:
     *   - `value` : the value of the facet highlighted (html)
     *   - `matchLevel`: full, partial or none depending on how the query terms match
     */
    hits: any[];

    /**
     * index where the results come from
     */
    index: string;

    /**
     * number of hits per page requested
     */
    hitsPerPage: number;

    /**
     * total number of hits of this query on the index
     */
    nbHits: number;

    /**
     * total number of pages with respect to the number of hits per page and the total number of hits
     */
    nbPages: number;

    /**
     * current page
     */
    page: number;

    /**
     * sum of the processing time of all the queries
     */
    processingTimeMS: number;

    /**
     * The position if the position was guessed by IP.
     * @example "48.8637,2.3615",
     */
    aroundLatLng: string;

    /**
     * The radius computed by Algolia.
     * @example "126792922",
     */
    automaticRadius: string;

    /**
     * String identifying the server used to serve this request.
     * @example "c7-use-2.algolia.net",
     */
    serverUsed: string;

    /**
     * Boolean that indicates if the computation of the counts did time out.
     * @deprecated
     */
    timeoutCounts: boolean;

    /**
     * Boolean that indicates if the computation of the hits did time out.
     * @deprecated
     */
    timeoutHits: boolean;

    /**
     * True if the counts of the facets is exhaustive
     */
    exhaustiveFacetsCount: boolean;

    /**
     * True if the number of hits is exhaustive
     */
    exhaustiveNbHits: boolean;

    /**
     * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
     */
    userData: any[];

    /**
     * queryID is the unique identifier of the query used to generate the current search results.
     * This value is only available if the `clickAnalytics` search parameter is set to `true`.
     */
    queryID: string;

    /**
     * disjunctive facets results
     */
    disjunctiveFacets: SearchResults$Facet[];

    /**
     * disjunctive facets results
     */
    hierarchicalFacets: SearchResults$HierarchicalFacet[];

    /**
     * other facets results
     */
    facets: SearchResults$Facet[];
    _rawResults: any;
    _state: algoliasearchHelper$SearchParameters;
    constructor(
      state: algoliasearchHelper$SearchParameters,
      results: any[]
    ): this;

    /**
     * Get a facet object with its name
     * @deprecated
     * @param name name of the faceted attribute
     * @return the facet object
     */
    getFacetByName(name: string): SearchResults$Facet;

    /**
     * Get a the list of values for a given facet attribute. Those values are sorted
     * refinement first, descending count (bigger value on top), and name ascending
     * (alphabetical order). The sort formula can overridden using either string based
     * predicates or a function.
     *
     * This method will return all the values returned by the Algolia engine plus all
     * the values already refined. This means that it can happen that the
     * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
     * might not be respected if you have facet values that are already refined.
     * @param attribute attribute name
     * @param opts configuration options.
     * @param When using strings, it consists of
     * the name of the [FacetValue](#SearchResults.FacetValue) or the
     * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
     * order (`asc` or `desc`). For example to order the value by count, the
     * argument would be `['count:asc']`.
     *
     * If only the attribute name is specified, the ordering defaults to the one
     * specified in the default value for this attribute.
     *
     * When not specified, the order is
     * ascending.  This parameter can also be a function which takes two facet
     * values and should return a number, 0 if equal, 1 if the first argument is
     * bigger or -1 otherwise.
     *
     * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
     * @return depending on the type of facet of
     * the attribute requested (hierarchical, disjunctive or conjunctive)
     * @example helper.on('results', function(content){
     * //get values ordered only by name ascending using the string predicate
     * content.getFacetValues('city', {sortBy: ['name:asc']});
     * //get values  ordered only by count ascending using a function
     * content.getFacetValues('city', {
     * // this is equivalent to ['count:asc']
     * sortBy: function(a, b) {
     * if (a.count === b.count) return 0;
     * if (a.count > b.count)   return 1;
     * if (b.count > a.count)   return -1;
     * }
     * });
     * });
     */
    getFacetValues(
      attribute: string,
      opts: any
    ): SearchResults$FacetValue[] | SearchResults$HierarchicalFacet;

    /**
     * Returns the facet stats if attribute is defined and the facet contains some.
     * Otherwise returns undefined.
     * @param attribute name of the faceted attribute
     * @return The stats of the facet
     */
    getFacetStats(attribute: string): any;

    /**
     * Returns all refinements for all filters + tags. It also provides
     * additional information: count and exhausistivity for each filter.
     *
     * See the [refinement type](#Refinement) for an exhaustive view of the available
     * data.
     * @return all the refinements
     */
    getRefinements(): SearchResults$Refinement[];
  }

  declare interface algoliasearchHelper$SearchResults$Facet {
    name: string;
    data: { [key: string]: any };
    stats: { [key: string]: any };
  }

  declare interface algoliasearchHelper$SearchResults$HierarchicalFacet {
    name: string;
    count: number;
    path: string;
    isRefined: boolean;
    data: SearchResults$HierarchicalFacet[];
  }

  declare interface algoliasearchHelper$SearchResults$FacetValue {
    name: string;
    count: number;
    isRefined: boolean;
    isExcluded: boolean;
  }

  declare interface algoliasearchHelper$SearchResults$Refinement {
    type: numeric | facet | exclude | disjunctive | hierarchical;
    attributeName: string;
    name: string;
    numericValue: number;
    operator: string;
    count: number;
    exhaustive: boolean;
  }

  declare export {};

  declare export default typeof algoliasearchHelper;
}
