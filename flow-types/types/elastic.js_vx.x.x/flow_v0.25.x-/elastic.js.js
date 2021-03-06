declare module "elasticjs" {
  declare export interface Facet {}
  declare export interface Geo {}
  declare export interface Suggest {}
  declare export interface Generator {}
  declare export interface Query {}
  declare export interface Filter {}
  declare export interface Aggregation {}
  declare export interface ScoreFunction {}
  declare export class AggregationMixin mixins Aggregation {
    _type(): string;
    agg(agg: Aggregation): AggregationMixin;
    aggregation(agg: Aggregation): AggregationMixin;
    toJSON(): any;
  }
  declare export class AndFilter mixins Filter {
    constructor(f: Filter | Filter[]): this;
    _type(): string;
    cache(trueFalse: boolean): AndFilter;
    cacheKey(key: string): AndFilter;
    filters(fltr: Filter | Filter[]): AndFilter;
    name(name: string): AndFilter;
    toJSON(): AndFilter;
  }
  declare export class AvgAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): AvgAggregation;
    lang(language: string): AvgAggregation;
    params(p: Object): AvgAggregation;
    script(scriptCode: string): AvgAggregation;
    scriptValuesSorted(trueFalse: boolean): AvgAggregation;
    toJSON(): any;
  }
  declare export class BoolFilter mixins Filter {
    constructor(): this;
    _type(): string;
    cache(trueFalse: boolean): BoolFilter;
    cacheKey(key: string): BoolFilter;
    must(oFilter: Filter | Filter[]): BoolFilter;
    mustNot(oFilter: Filter | Filter[]): BoolFilter;
    name(name: string): BoolFilter;
    should(oFilter: Filter | Filter[]): BoolFilter;
    toJSON(): BoolFilter;
  }
  declare export class BoolQuery mixins Query {
    constructor(): this;
    _type(): string;
    adjustPureNegative(trueFalse: string): BoolQuery;
    boost(boost: number): BoolQuery;
    disableCoord(trueFalse: string): BoolQuery;
    minimumNumberShouldMatch(minMatch: number): BoolQuery;
    must(oQuery: Object): BoolQuery;
    mustNot(oQuery: Object): BoolQuery;
    should(oQuery: Object): BoolQuery;
    toJSON(): any;
  }
  declare export class BoostFactorScoreFunction mixins ScoreFunction {
    constructor(boostVal: number): this;
    _type(): string;
    boost(b: number): BoostFactorScoreFunction;
    filter(oFilter: Filter): BoostFactorScoreFunction;
    toJSON(): any;
  }
  declare export class BoostingQuery mixins Query {
    constructor(
      positiveQry: Object,
      negativeQry: Object,
      negativeBoost: number
    ): this;
    _type(): string;
    boost(boost: number): BoostingQuery;
    negative(oQuery: Object): BoostingQuery;
    negativeBoost(boost: number): BoostingQuery;
    positive(oQuery: Object): BoostingQuery;
    toJSON(): any;
  }
  declare export class CardinalityAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): CardinalityAggregation;
    lang(language: string): CardinalityAggregation;
    params(p: Object): CardinalityAggregation;
    precisionThreshold(num: number): CardinalityAggregation;
    rehash(trueFalse: boolean): CardinalityAggregation;
    script(scriptCode: string): CardinalityAggregation;
    toJSON(): any;
  }
  declare export class CommonTermsQuery mixins Query {
    constructor(field: string, qstr: string): this;
    _type(): string;
    analyzer(analyzer: string): CommonTermsQuery;
    boost(boost: Number): CommonTermsQuery;
    cutoffFrequency(freq: Number): CommonTermsQuery;
    disableCoord(trueFalse: string): CommonTermsQuery;
    field(f: string): CommonTermsQuery;
    highFreqOperator(op: string): CommonTermsQuery;
    lowFreqOperator(op: string): CommonTermsQuery;
    minimumShouldMatch(min: number): CommonTermsQuery;
    minimumShouldMatchHighFreq(min: number): CommonTermsQuery;
    minimumShouldMatchLowFreq(min: number): CommonTermsQuery;
    query(qstr: string): CommonTermsQuery;
    toJSON(): any;
  }
  declare export class CompletionSuggester mixins Suggest {
    constructor(name: string): this;
    _type(): string;
    analyzer(analyzer: string): CompletionSuggester;
    editDistance(d: number): CompletionSuggester;
    field(field: string): CompletionSuggester;
    fuzzy(trueFalse: boolean): CompletionSuggester;
    minLength(m: number): CompletionSuggester;
    prefixLength(l: number): CompletionSuggester;
    shardSize(s: number): CompletionSuggester;
    size(s: number): CompletionSuggester;
    text(txt: string): CompletionSuggester;
    toJSON(): any;
    transpositions(trueFalse: boolean): CompletionSuggester;
    unicodeAware(trueFalse: boolean): CompletionSuggester;
  }
  declare export class ConstantScoreQuery mixins Query {
    constructor(): this;
    _type(): string;
    boost(boost: number): ConstantScoreQuery;
    cache(trueFalse: boolean): ConstantScoreQuery;
    cacheKey(k: string): ConstantScoreQuery;
    filter(oFilter: Object): ConstantScoreQuery;
    query(oQuery: Object): ConstantScoreQuery;
    toJSON(): any;
  }
  declare export class DateHistogramAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): DateHistogramAggregation;
    aggregation(agg: Aggregation): DateHistogramAggregation;
    extendedBounds(
      min: string | number,
      max: string | number
    ): DateHistogramAggregation;
    field(field: string): DateHistogramAggregation;
    format(f: string): DateHistogramAggregation;
    interval(i: string): DateHistogramAggregation;
    keyed(trueFalse: boolean): DateHistogramAggregation;
    lang(language: string): DateHistogramAggregation;
    minDocCount(num: number): DateHistogramAggregation;
    order(order: string, direction: string): DateHistogramAggregation;
    params(p: Object): DateHistogramAggregation;
    postOffset(offset: string): DateHistogramAggregation;
    postZone(tz: string): DateHistogramAggregation;
    preOffset(offset: string): DateHistogramAggregation;
    preZone(tz: string): DateHistogramAggregation;
    preZoneAdjustLargeInterval(trueFalse: boolean): DateHistogramAggregation;
    script(scriptCode: string): DateHistogramAggregation;
    scriptValuesSorted(trueFalse: boolean): DateHistogramAggregation;
    timeZone(tz: string): DateHistogramAggregation;
    toJSON(): any;
  }
  declare export class DateHistogramFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    cacheFilter(trueFalse: boolean): DateHistogramFacet;
    facetFilter(oFilter: Object): DateHistogramFacet;
    factor(f: number): DateHistogramFacet;
    field(fieldName: string): DateHistogramFacet;
    global(trueFalse: boolean): DateHistogramFacet;
    interval(timeInterval: string): DateHistogramFacet;
    keyField(fieldName: string): DateHistogramFacet;
    lang(language: string): DateHistogramFacet;
    mode(m: string): DateHistogramFacet;
    nested(path: string): DateHistogramFacet;
    order(o: string): DateHistogramFacet;
    params(p: Object): DateHistogramFacet;
    postOffset(offset: string): DateHistogramFacet;
    postZone(tz: number): DateHistogramFacet;
    preOffset(offset: string): DateHistogramFacet;
    preZone(tz: number): DateHistogramFacet;
    preZoneAdjustLargeInterval(trueFalse: boolean): DateHistogramFacet;
    scope(scope: string): DateHistogramFacet;
    timeZone(tz: number): DateHistogramFacet;
    toJSON(): any;
    valueField(fieldName: string): DateHistogramFacet;
    valueScript(scriptCode: string): DateHistogramFacet;
  }
  declare export class DateRangeAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): DateRangeAggregation;
    aggregation(agg: Aggregation): DateRangeAggregation;
    field(field: string): DateRangeAggregation;
    format(f: string): DateRangeAggregation;
    keyed(trueFalse: boolean): DateRangeAggregation;
    lang(language: string): DateRangeAggregation;
    params(p: Object): DateRangeAggregation;
    range(from: string, to: string, key: string): DateRangeAggregation;
    script(scriptCode: string): DateRangeAggregation;
    scriptValuesSorted(trueFalse: boolean): DateRangeAggregation;
    toJSON(): any;
  }
  declare export class DecayScoreFunction mixins ScoreFunction {
    constructor(field: string): this;
    _type(): string;
    decay(d: number): DecayScoreFunction;
    exp(): DecayScoreFunction;
    field(f: string): DecayScoreFunction;
    filter(oFilter: Filter): DecayScoreFunction;
    gauss(): DecayScoreFunction;
    linear(): DecayScoreFunction;
    offset(o: string): DecayScoreFunction;
    origin(o: string): DecayScoreFunction;
    scale(s: string): DecayScoreFunction;
    toJSON(): any;
  }
  declare export class DirectGenerator mixins Generator {
    constructor(): this;
    _type(): string;
    accuracy(a: number): DirectGenerator;
    field(field: string): DirectGenerator;
    maxEdits(max: number): DirectGenerator;
    maxInspections(max: number): DirectGenerator;
    maxTermFreq(max: number): DirectGenerator;
    minDocFreq(min: number): DirectGenerator;
    minWordLen(len: number): DirectGenerator;
    postFilter(analyzer: string): DirectGenerator;
    preFilter(analyzer: string): DirectGenerator;
    size(s: number): DirectGenerator;
    sort(s: string): DirectGenerator;
    stringDistance(s: string): DirectGenerator;
    suggestMode(m: string): DirectGenerator;
    toJSON(): any;
  }
  declare export class DirectSettingsMixin {
    accuracy(a: number): DirectSettingsMixin;
    maxEdits(max: number): DirectSettingsMixin;
    maxInspections(max: number): DirectSettingsMixin;
    maxTermFreq(max: number): DirectSettingsMixin;
    minDocFreq(min: number): DirectSettingsMixin;
    minWordLen(len: number): DirectSettingsMixin;
    prefixLen(len: number): DirectSettingsMixin;
    sort(s: string): DirectSettingsMixin;
    stringDistance(s: string): DirectSettingsMixin;
    suggestMode(m: string): DirectSettingsMixin;
  }
  declare export class DisMaxQuery mixins Query {
    constructor(): this;
    _type(): string;
    boost(boost: number): DisMaxQuery;
    queries(qs: Query | Query[]): DisMaxQuery;
    tieBreaker(tieBreaker: number): DisMaxQuery;
    toJSON(): any;
  }
  declare export class ExistsFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): ExistsFilter;
    cacheKey(key: string): ExistsFilter;
    field(name: string): ExistsFilter;
    name(name: string): ExistsFilter;
    toJSON(): ExistsFilter;
  }
  declare export class ExtendedStatsAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): ExtendedStatsAggregation;
    lang(language: string): ExtendedStatsAggregation;
    params(p: Object): ExtendedStatsAggregation;
    script(scriptCode: string): ExtendedStatsAggregation;
    scriptValuesSorted(trueFalse: boolean): ExtendedStatsAggregation;
    toJSON(): any;
  }
  declare export class FacetMixin {
    _type(): string;
    cacheFilter(trueFalse: boolean): FacetMixin;
    facetFilter(oFilter: Object): FacetMixin;
    global(trueFalse: boolean): FacetMixin;
    mode(m: string): FacetMixin;
    nested(path: string): FacetMixin;
    scope(scope: string): FacetMixin;
    toJSON(): any;
  }
  declare export class FieldMaskingSpanQuery mixins Query {
    constructor(spanQry: Query, field: number): this;
    _type(): string;
    boost(boost: number): FieldMaskingSpanQuery;
    field(f: string): FieldMaskingSpanQuery;
    query(spanQuery: Query): FieldMaskingSpanQuery;
    toJSON(): any;
  }
  declare export class FilterAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): FilterAggregation;
    aggregation(agg: Aggregation): FilterAggregation;
    filter(oFilter: Filter): FilterAggregation;
    toJSON(): any;
  }
  declare export class FilteredQuery mixins Query {
    constructor(someQuery: Object, someFilter: Object): this;
    _type(): string;
    boost(boost: number): FilteredQuery;
    cache(trueFalse: boolean): FilteredQuery;
    cacheKey(k: string): FilteredQuery;
    filter(oFilter: Object): FilteredQuery;
    query(oQuery: Object): FilteredQuery;
    strategy(strategy: string): FilteredQuery;
    toJSON(): any;
  }
  declare export class FilterFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    cacheFilter(trueFalse: boolean): FilterFacet;
    facetFilter(oFilter: Object): FilterFacet;
    filter(oFilter: Object): FilterFacet;
    global(trueFalse: boolean): FilterFacet;
    mode(m: string): FilterFacet;
    nested(path: string): FilterFacet;
    scope(scope: string): FilterFacet;
    toJSON(): any;
  }
  declare export class FilterMixin {
    _type(): string;
    cache(trueFalse: boolean): FilterMixin;
    cacheKey(key: string): FilterMixin;
    name(name: string): FilterMixin;
    toJSON(): FilterMixin;
  }
  declare export class FunctionScoreQuery mixins Query {
    constructor(): this;
    _type(): string;
    boost(boost: number): FunctionScoreQuery;
    boostMode(mode: string): FunctionScoreQuery;
    filter(oFilter: Filter): FunctionScoreQuery;
    functions(funcs: ScoreFunction[]): FunctionScoreQuery;
    query(oQuery: Query): FunctionScoreQuery;
    scoreMode(mode: string): FunctionScoreQuery;
    toJSON(): any;
  }
  declare export class FuzzyLikeThisFieldQuery mixins Query {
    constructor(field: string, likeText: string): this;
    _type(): string;
    analyzer(analyzerName: string): FuzzyLikeThisFieldQuery;
    boost(boost: number): FuzzyLikeThisFieldQuery;
    failOnUnsupportedField(trueFalse: boolean): FuzzyLikeThisFieldQuery;
    field(f: string): FuzzyLikeThisFieldQuery;
    ignoreTf(trueFalse: boolean): FuzzyLikeThisFieldQuery;
    likeText(s: string): FuzzyLikeThisFieldQuery;
    maxQueryTerms(max: number): FuzzyLikeThisFieldQuery;
    minSimilarity(min: number): FuzzyLikeThisFieldQuery;
    prefixLength(len: number): FuzzyLikeThisFieldQuery;
    toJSON(): any;
  }
  declare export class FuzzyLikeThisQuery mixins Query {
    constructor(likeText: string): this;
    _type(): string;
    analyzer(analyzerName: string): FuzzyLikeThisQuery;
    boost(boost: number): FuzzyLikeThisQuery;
    failOnUnsupportedField(trueFalse: boolean): FuzzyLikeThisQuery;
    fields(f: string | string[]): FuzzyLikeThisQuery;
    ignoreTf(trueFalse: boolean): FuzzyLikeThisQuery;
    likeText(s: string): FuzzyLikeThisQuery;
    maxQueryTerms(max: number): FuzzyLikeThisQuery;
    minSimilarity(min: number): FuzzyLikeThisQuery;
    prefixLength(len: number): FuzzyLikeThisQuery;
    toJSON(): any;
  }
  declare export class FuzzyQuery mixins Query {
    constructor(field: string, value: string): this;
    _type(): string;
    boost(boost: number): FuzzyQuery;
    field(f: string): FuzzyQuery;
    maxExpansions(max: number): FuzzyQuery;
    minSimilarity(min: number): FuzzyQuery;
    prefixLength(len: number): FuzzyQuery;
    rewrite(m: string): FuzzyQuery;
    toJSON(): any;
    transpositions(trueFalse: boolean): FuzzyQuery;
    value(s: string): FuzzyQuery;
  }
  declare export class GeoBboxFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    bottomRight(p: GeoPoint): GeoBboxFilter;
    cache(trueFalse: boolean): GeoBboxFilter;
    cacheKey(key: string): GeoBboxFilter;
    field(f: string): GeoBboxFilter;
    name(name: string): GeoBboxFilter;
    normalize(trueFalse: string): GeoBboxFilter;
    toJSON(): GeoBboxFilter;
    topLeft(p: GeoPoint): GeoBboxFilter;
    type(type: string): GeoBboxFilter;
  }
  declare export class GeoDistanceAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): GeoDistanceAggregation;
    aggregation(agg: Aggregation): GeoDistanceAggregation;
    center(p: GeoPoint): GeoDistanceAggregation;
    distanceType(type: string): GeoDistanceAggregation;
    field(field: string): GeoDistanceAggregation;
    keyed(trueFalse: boolean): GeoDistanceAggregation;
    origin(p: GeoPoint): GeoDistanceAggregation;
    point(p: GeoPoint): GeoDistanceAggregation;
    range(from: string, to: string, key: string): GeoDistanceAggregation;
    toJSON(): any;
    unit(unit: string): GeoDistanceAggregation;
  }
  declare export class GeoDistanceFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    addRange(from: Number, to: Number): GeoDistanceFacet;
    addUnboundedFrom(from: Number): GeoDistanceFacet;
    addUnboundedTo(to: Number): GeoDistanceFacet;
    cacheFilter(trueFalse: boolean): GeoDistanceFacet;
    distanceType(type: string): GeoDistanceFacet;
    facetFilter(oFilter: Object): GeoDistanceFacet;
    field(fieldName: string): GeoDistanceFacet;
    global(trueFalse: boolean): GeoDistanceFacet;
    lang(language: string): GeoDistanceFacet;
    mode(m: string): GeoDistanceFacet;
    nested(path: string): GeoDistanceFacet;
    normalize(trueFalse: string): GeoDistanceFacet;
    params(p: Object): GeoDistanceFacet;
    point(p: GeoPoint): GeoDistanceFacet;
    scope(scope: string): GeoDistanceFacet;
    toJSON(): any;
    unit(unit: string): GeoDistanceFacet;
    valueField(fieldName: string): GeoDistanceFacet;
    valueScript(scriptCode: string): GeoDistanceFacet;
  }
  declare export class GeoDistanceFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): GeoDistanceFilter;
    cacheKey(key: string): GeoDistanceFilter;
    distance(numericDistance: Number): GeoDistanceFilter;
    distanceType(type: string): GeoDistanceFilter;
    field(f: string): GeoDistanceFilter;
    name(name: string): GeoDistanceFilter;
    normalize(trueFalse: string): GeoDistanceFilter;
    optimizeBbox(t: string): GeoDistanceFilter;
    point(p: GeoPoint): GeoDistanceFilter;
    toJSON(): GeoDistanceFilter;
    unit(unit: string): GeoDistanceFilter;
  }
  declare export class GeoDistanceRangeFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): GeoDistanceRangeFilter;
    cacheKey(key: string): GeoDistanceRangeFilter;
    distanceType(type: string): GeoDistanceRangeFilter;
    field(f: string): GeoDistanceRangeFilter;
    from(numericDistance: Number): GeoDistanceRangeFilter;
    gt(val: Number): GeoDistanceRangeFilter;
    gte(val: Number): GeoDistanceRangeFilter;
    includeLower(trueFalse: boolean): GeoDistanceRangeFilter;
    includeUpper(trueFalse: boolean): GeoDistanceRangeFilter;
    lt(val: Number): GeoDistanceRangeFilter;
    lte(val: Number): GeoDistanceRangeFilter;
    name(name: string): GeoDistanceRangeFilter;
    normalize(trueFalse: string): GeoDistanceRangeFilter;
    optimizeBbox(t: string): GeoDistanceRangeFilter;
    point(p: GeoPoint): GeoDistanceRangeFilter;
    to(numericDistance: Number): GeoDistanceRangeFilter;
    toJSON(): GeoDistanceRangeFilter;
    unit(unit: string): GeoDistanceRangeFilter;
  }
  declare export class GeoHashGridAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): GeoHashGridAggregation;
    aggregation(agg: Aggregation): GeoHashGridAggregation;
    field(field: string): GeoHashGridAggregation;
    precision(p: number): GeoHashGridAggregation;
    shardSize(shardSize: number): GeoHashGridAggregation;
    size(size: number): GeoHashGridAggregation;
    toJSON(): any;
  }
  declare export class GeoPoint mixins Geo {
    constructor(p: any[]): this;
    _type(): string;
    array(a: any[]): GeoPoint;
    geohash(hash: string, precision: number): GeoPoint;
    properties(obj: Object): GeoPoint;
    string(s: string): GeoPoint;
    toJSON(): any;
  }
  declare export class GeoPolygonFilter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): GeoPolygonFilter;
    cacheKey(key: string): GeoPolygonFilter;
    field(f: string): GeoPolygonFilter;
    name(name: string): GeoPolygonFilter;
    normalize(trueFalse: string): GeoPolygonFilter;
    points(pointsArray: any[]): GeoPolygonFilter;
    toJSON(): GeoPolygonFilter;
  }
  declare export class GeoShapeFilter mixins Filter {
    constructor(): this;
    _type(): string;
    cache(trueFalse: boolean): GeoShapeFilter;
    cacheKey(key: string): GeoShapeFilter;
    field(f: string): GeoShapeFilter;
    indexedShape(indexedShape: string): GeoShapeFilter;
    name(name: string): GeoShapeFilter;
    relation(indexedShape: string): GeoShapeFilter;
    shape(shape: string): GeoShapeFilter;
    strategy(strategy: string): GeoShapeFilter;
    toJSON(): GeoShapeFilter;
  }
  declare export class GeoShapeQuery mixins Query {
    constructor(): this;
    _type(): string;
    boost(boost: Number): GeoShapeQuery;
    field(f: string): GeoShapeQuery;
    indexedShape(indexedShape: string): GeoShapeQuery;
    relation(indexedShape: string): GeoShapeQuery;
    shape(shape: string): GeoShapeQuery;
    strategy(strategy: string): GeoShapeQuery;
    toJSON(): any;
  }
  declare export class GlobalAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): GlobalAggregation;
    aggregation(agg: Aggregation): GlobalAggregation;
    toJSON(): any;
  }
  declare export class HasChildFilter mixins Filter {
    constructor(qry: Object, type: string): this;
    _type(): string;
    cache(trueFalse: boolean): HasChildFilter;
    cacheKey(key: string): HasChildFilter;
    filter(f: Query): HasChildFilter;
    name(name: string): HasChildFilter;
    query(q: Query): HasChildFilter;
    scope(s: string): HasChildFilter;
    shortCircuitCutoff(cutoff: number): HasChildFilter;
    toJSON(): HasChildFilter;
    type(t: string): HasChildFilter;
  }
  declare export class HasChildQuery mixins Query {
    constructor(qry: Object, type: string): this;
    _type(): string;
    boost(boost: number): HasChildQuery;
    query(q: Object): HasChildQuery;
    scope(s: string): HasChildQuery;
    scoreMode(s: string): HasChildQuery;
    scoreType(s: string): HasChildQuery;
    shortCircuitCutoff(cutoff: number): HasChildQuery;
    toJSON(): any;
    type(t: string): HasChildQuery;
  }
  declare export class HasParentFilter mixins Filter {
    constructor(qry: Object, parentType: string): this;
    _type(): string;
    cache(trueFalse: boolean): HasParentFilter;
    cacheKey(key: string): HasParentFilter;
    filter(f: Object): HasParentFilter;
    name(name: string): HasParentFilter;
    parentType(t: string): HasParentFilter;
    query(q: Object): HasParentFilter;
    scope(s: string): HasParentFilter;
    toJSON(): HasParentFilter;
  }
  declare export class HasParentQuery mixins Query {
    constructor(qry: Object, parentType: string): this;
    _type(): string;
    boost(boost: number): HasParentQuery;
    parentType(t: string): HasParentQuery;
    query(q: Object): HasParentQuery;
    scope(s: string): HasParentQuery;
    scoreMode(s: string): HasParentQuery;
    scoreType(s: string): HasParentQuery;
    toJSON(): any;
  }
  declare export class Highlight {
    constructor(fields: string | string[]): this;
    _type(): string;
    boundaryChars(charStr: string, oField: string): Highlight;
    boundaryMaxScan(cnt: number, oField: string): Highlight;
    encoder(e: string): Highlight;
    fields(vals: string | string[]): Highlight;
    fragmenter(f: string, oField: string): Highlight;
    fragmentSize(size: number, oField: string): Highlight;
    highlightFilter(trueFalse: boolean, oField: string): Highlight;
    numberOfFragments(cnt: number, oField: string): Highlight;
    options(opts: string, oField: string): Highlight;
    order(o: string, oField: string): Highlight;
    postTags(tags: string | string[], oField: string): Highlight;
    preTags(tags: string | string[], oField: string): Highlight;
    requireFieldMatch(trueFalse: boolean, oField: string): Highlight;
    tagsSchema(s: string): Highlight;
    toJSON(): any;
    type(t: string, oField: string): Highlight;
  }
  declare export class HistogramAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): HistogramAggregation;
    aggregation(agg: Aggregation): HistogramAggregation;
    extendedBounds(min: number, max: number): HistogramAggregation;
    field(field: string): HistogramAggregation;
    format(f: string): HistogramAggregation;
    interval(i: number): HistogramAggregation;
    keyed(trueFalse: boolean): HistogramAggregation;
    lang(language: string): HistogramAggregation;
    minDocCount(num: number): HistogramAggregation;
    order(order: string, direction: string): HistogramAggregation;
    params(p: Object): HistogramAggregation;
    script(scriptCode: string): HistogramAggregation;
    scriptValuesSorted(trueFalse: boolean): HistogramAggregation;
    toJSON(): any;
  }
  declare export class HistogramFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    cacheFilter(trueFalse: boolean): HistogramFacet;
    facetFilter(oFilter: Object): HistogramFacet;
    field(fieldName: string): HistogramFacet;
    from(from: Number): HistogramFacet;
    global(trueFalse: boolean): HistogramFacet;
    interval(numericInterval: Number): HistogramFacet;
    keyField(fieldName: string): HistogramFacet;
    keyScript(scriptCode: string): HistogramFacet;
    lang(language: string): HistogramFacet;
    mode(m: string): HistogramFacet;
    nested(path: string): HistogramFacet;
    order(o: string): HistogramFacet;
    params(p: Object): HistogramFacet;
    scope(scope: string): HistogramFacet;
    timeInterval(timeInterval: Number): HistogramFacet;
    to(to: Number): HistogramFacet;
    toJSON(): any;
    valueField(fieldName: string): HistogramFacet;
    valueScript(scriptCode: string): HistogramFacet;
  }
  declare export class IdsFilter mixins Filter {
    constructor(ids: string | string[]): this;
    _type(): string;
    cache(trueFalse: boolean): IdsFilter;
    cacheKey(key: string): IdsFilter;
    name(name: string): IdsFilter;
    toJSON(): IdsFilter;
    type(type: string | string[]): IdsFilter;
    values(val: string | string[]): IdsFilter;
  }
  declare export class IdsQuery mixins Query {
    constructor(ids: string | string[]): this;
    _type(): string;
    boost(boost: number): IdsQuery;
    toJSON(): any;
    type(type: string | string[]): IdsQuery;
    values(val: string | string[]): IdsQuery;
  }
  declare export class IndexedShape mixins Geo {
    constructor(type: string, id: string): this;
    _type(): string;
    id(id: string): IndexedShape;
    index(idx: string): IndexedShape;
    shapeFieldName(field: string): IndexedShape;
    toJSON(): any;
    type(t: string): IndexedShape;
  }
  declare export class IndicesFilter mixins Filter {
    constructor(fltr: Object, indices: string | string[]): this;
    _type(): string;
    cache(trueFalse: boolean): IndicesFilter;
    cacheKey(key: string): IndicesFilter;
    filter(f: Object): IndicesFilter;
    indices(i: string | string[]): IndicesFilter;
    name(name: string): IndicesFilter;
    noMatchFilter(f: Filter | string): IndicesFilter;
    toJSON(): IndicesFilter;
  }
  declare export class IndicesQuery mixins Query {
    constructor(qry: Query, indices: string | string[]): this;
    _type(): string;
    boost(boost: number): IndicesQuery;
    indices(i: string | string[]): IndicesQuery;
    noMatchQuery(q: Query | string): IndicesQuery;
    query(q: Query): IndicesQuery;
    toJSON(): any;
  }
  declare export class IPv4RangeAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): IPv4RangeAggregation;
    aggregation(agg: Aggregation): IPv4RangeAggregation;
    field(field: string): IPv4RangeAggregation;
    keyed(trueFalse: boolean): IPv4RangeAggregation;
    lang(language: string): IPv4RangeAggregation;
    params(p: Object): IPv4RangeAggregation;
    range(from: string, to: string, key: string): IPv4RangeAggregation;
    script(scriptCode: string): IPv4RangeAggregation;
    scriptValuesSorted(trueFalse: boolean): IPv4RangeAggregation;
    toJSON(): any;
  }
  declare export class LimitFilter mixins Filter {
    constructor(limit: number): this;
    _type(): string;
    cache(trueFalse: boolean): LimitFilter;
    cacheKey(key: string): LimitFilter;
    name(name: string): LimitFilter;
    toJSON(): LimitFilter;
    value(val: number): LimitFilter;
  }
  declare export class MatchAllFilter mixins Filter {
    constructor(): this;
    _type(): string;
    cache(trueFalse: boolean): MatchAllFilter;
    cacheKey(key: string): MatchAllFilter;
    name(name: string): MatchAllFilter;
    toJSON(): MatchAllFilter;
  }
  declare export class MatchAllQuery mixins Query {
    constructor(): this;
    _type(): string;
    boost(boost: number): MatchAllQuery;
    toJSON(): any;
  }
  declare export class MatchQuery mixins Query {
    constructor(field: string, qstr: string): this;
    _type(): string;
    analyzer(analyzer: string): MatchQuery;
    boost(boost: Number): MatchQuery;
    cutoffFrequency(freq: Number): MatchQuery;
    fuzziness(fuzz: number): MatchQuery;
    fuzzyRewrite(m: string): MatchQuery;
    fuzzyTranspositions(trueFalse: boolean): MatchQuery;
    lenient(trueFalse: boolean): MatchQuery;
    maxExpansions(e: number): MatchQuery;
    minimumShouldMatch(minMatch: number): MatchQuery;
    operator(op: string): MatchQuery;
    prefixLength(l: number): MatchQuery;
    query(qstr: string): MatchQuery;
    rewrite(m: string): MatchQuery;
    slop(slop: number): MatchQuery;
    toJSON(): any;
    type(type: string): MatchQuery;
    zeroTermsQuery(q: string): MatchQuery;
  }
  declare export class MaxAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): MaxAggregation;
    lang(language: string): MaxAggregation;
    params(p: Object): MaxAggregation;
    script(scriptCode: string): MaxAggregation;
    scriptValuesSorted(trueFalse: boolean): MaxAggregation;
    toJSON(): any;
  }
  declare export class MetricsAggregationMixin mixins Aggregation {
    _type(): string;
    field(field: string): MetricsAggregationMixin;
    lang(language: string): MetricsAggregationMixin;
    params(p: Object): MetricsAggregationMixin;
    script(scriptCode: string): MetricsAggregationMixin;
    scriptValuesSorted(trueFalse: boolean): MetricsAggregationMixin;
    toJSON(): any;
  }
  declare export class MinAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): MinAggregation;
    lang(language: string): MinAggregation;
    params(p: Object): MinAggregation;
    script(scriptCode: string): MinAggregation;
    scriptValuesSorted(trueFalse: boolean): MinAggregation;
    toJSON(): any;
  }
  declare export class MissingAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): MissingAggregation;
    aggregation(agg: Aggregation): MissingAggregation;
    field(field: string): MissingAggregation;
    toJSON(): any;
  }
  declare export class MissingFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): MissingFilter;
    cacheKey(key: string): MissingFilter;
    existence(trueFalse: boolean): MissingFilter;
    field(name: string): MissingFilter;
    name(name: string): MissingFilter;
    nullValue(trueFalse: boolean): MissingFilter;
    toJSON(): MissingFilter;
  }
  declare export class MoreLikeThisFieldQuery mixins Query {
    constructor(field: string, likeText: string): this;
    _type(): string;
    analyzer(analyzerName: string): MoreLikeThisFieldQuery;
    boost(boost: number): MoreLikeThisFieldQuery;
    boostTerms(boost: number): MoreLikeThisFieldQuery;
    failOnUnsupportedField(trueFalse: boolean): MoreLikeThisFieldQuery;
    field(f: string): MoreLikeThisFieldQuery;
    likeText(s: string): MoreLikeThisFieldQuery;
    maxDocFreq(max: number): MoreLikeThisFieldQuery;
    maxQueryTerms(max: number): MoreLikeThisFieldQuery;
    maxWordLen(len: number): MoreLikeThisFieldQuery;
    minDocFreq(min: number): MoreLikeThisFieldQuery;
    minTermFreq(freq: number): MoreLikeThisFieldQuery;
    minWordLen(len: number): MoreLikeThisFieldQuery;
    percentTermsToMatch(percent: number): MoreLikeThisFieldQuery;
    stopWords(stopWords: any[]): MoreLikeThisFieldQuery;
    toJSON(): any;
  }
  declare export class MoreLikeThisQuery mixins Query {
    constructor(fields: string | string[], likeText: string): this;
    _type(): string;
    analyzer(analyzerName: string): MoreLikeThisQuery;
    boost(boost: number): MoreLikeThisQuery;
    boostTerms(boost: number): MoreLikeThisQuery;
    failOnUnsupportedField(trueFalse: boolean): MoreLikeThisQuery;
    fields(f: string | string[]): MoreLikeThisQuery;
    likeText(s: string): MoreLikeThisQuery;
    maxDocFreq(max: number): MoreLikeThisQuery;
    maxQueryTerms(max: number): MoreLikeThisQuery;
    maxWordLen(len: number): MoreLikeThisQuery;
    minDocFreq(min: number): MoreLikeThisQuery;
    minTermFreq(freq: number): MoreLikeThisQuery;
    minWordLen(len: number): MoreLikeThisQuery;
    percentTermsToMatch(percent: number): MoreLikeThisQuery;
    stopWords(stopWords: any[]): MoreLikeThisQuery;
    toJSON(): any;
  }
  declare export class MultiMatchQuery mixins Query {
    constructor(fields: string | string[], qstr: string): this;
    _type(): string;
    analyzer(analyzer: string): MultiMatchQuery;
    boost(boost: number): MultiMatchQuery;
    cutoffFrequency(freq: Number): MultiMatchQuery;
    fields(f: string | string[]): MultiMatchQuery;
    fuzziness(fuzz: number): MultiMatchQuery;
    fuzzyRewrite(m: string): MultiMatchQuery;
    lenient(trueFalse: boolean): MultiMatchQuery;
    maxExpansions(e: number): MultiMatchQuery;
    minimumShouldMatch(minMatch: number): MultiMatchQuery;
    operator(op: string): MultiMatchQuery;
    prefixLength(l: number): MultiMatchQuery;
    query(qstr: string): MultiMatchQuery;
    rewrite(m: string): MultiMatchQuery;
    slop(slop: number): MultiMatchQuery;
    tieBreaker(tieBreaker: number): MultiMatchQuery;
    toJSON(): any;
    type(type: string): MultiMatchQuery;
    useDisMax(trueFalse: string): MultiMatchQuery;
    zeroTermsQuery(q: string): MultiMatchQuery;
  }
  declare export class NestedAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): NestedAggregation;
    aggregation(agg: Aggregation): NestedAggregation;
    path(path: string): NestedAggregation;
    toJSON(): any;
  }
  declare export class NestedFilter mixins Filter {
    constructor(path: string): this;
    _type(): string;
    boost(boost: number): NestedFilter;
    cache(trueFalse: boolean): NestedFilter;
    cacheKey(key: string): NestedFilter;
    filter(oFilter: Object): NestedFilter;
    join(trueFalse: boolean): NestedFilter;
    name(name: string): NestedFilter;
    path(p: string): NestedFilter;
    query(oQuery: Query): NestedFilter;
    scope(s: string): NestedFilter;
    toJSON(): NestedFilter;
  }
  declare export class NestedQuery mixins Query {
    constructor(path: string): this;
    _type(): string;
    boost(boost: number): NestedQuery;
    filter(oFilter: Object): NestedQuery;
    path(path: string): NestedQuery;
    query(oQuery: Object): NestedQuery;
    scope(s: string): NestedQuery;
    scoreMode(mode: string): NestedQuery;
    toJSON(): any;
  }
  declare export class NotFilter mixins Filter {
    constructor(oFilter: Object): this;
    _type(): string;
    cache(trueFalse: boolean): NotFilter;
    cacheKey(key: string): NotFilter;
    filter(fltr: Object): NotFilter;
    name(name: string): NotFilter;
    toJSON(): NotFilter;
  }
  declare export class NumericRangeFilter mixins Filter {
    constructor(fieldName: string): this;
    _type(): string;
    cache(trueFalse: boolean): NumericRangeFilter;
    cacheKey(key: string): NumericRangeFilter;
    field(field: string): NumericRangeFilter;
    from(startPoint: Number): NumericRangeFilter;
    gt(val: any): NumericRangeFilter;
    gte(val: any): NumericRangeFilter;
    includeLower(trueFalse: boolean): NumericRangeFilter;
    includeUpper(trueFalse: boolean): NumericRangeFilter;
    lt(val: any): NumericRangeFilter;
    lte(val: any): NumericRangeFilter;
    name(name: string): NumericRangeFilter;
    to(endPoint: Number): NumericRangeFilter;
    toJSON(): NumericRangeFilter;
  }
  declare export class OrFilter mixins Filter {
    constructor(filters: Filter | Filter[]): this;
    _type(): string;
    cache(trueFalse: boolean): OrFilter;
    cacheKey(key: string): OrFilter;
    filters(fltr: Filter | Filter[]): OrFilter;
    name(name: string): OrFilter;
    toJSON(): OrFilter;
  }
  declare export class PercentilesAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    compression(c: number): PercentilesAggregation;
    field(field: string): PercentilesAggregation;
    keyed(trueFalse: boolean): PercentilesAggregation;
    lang(language: string): PercentilesAggregation;
    params(p: Object): PercentilesAggregation;
    percent(percentile: number): PercentilesAggregation;
    percents(percents: number[]): PercentilesAggregation;
    script(scriptCode: string): PercentilesAggregation;
    scriptValuesSorted(trueFalse: boolean): PercentilesAggregation;
    toJSON(): any;
  }
  declare export class PhraseSuggester mixins Suggest {
    constructor(name: string): this;
    _type(): string;
    analyzer(analyzer: string): PhraseSuggester;
    confidence(c: number): PhraseSuggester;
    directGenerator(oGenerator: Generator | Generator[]): PhraseSuggester;
    field(field: string): PhraseSuggester;
    forceUnigrams(trueFalse: boolean): PhraseSuggester;
    gramSize(s: number): PhraseSuggester;
    highlight(preTag: string, postTag: string): PhraseSuggester;
    laplaceSmoothing(alpha: number): PhraseSuggester;
    linearSmoothing(tl: number, bl: number, ul: number): PhraseSuggester;
    maxErrors(c: number): PhraseSuggester;
    realWordErrorLikelihood(l: number): PhraseSuggester;
    separator(sep: string): PhraseSuggester;
    shardSize(s: number): PhraseSuggester;
    size(s: number): PhraseSuggester;
    stupidBackoffSmoothing(discount: number): PhraseSuggester;
    text(txt: string): PhraseSuggester;
    toJSON(): any;
    tokenLimit(l: number): PhraseSuggester;
  }
  declare export class PrefixFilter mixins Filter {
    constructor(fieldName: string, prefix: string): this;
    _type(): string;
    cache(trueFalse: boolean): PrefixFilter;
    cacheKey(key: string): PrefixFilter;
    field(field: string): PrefixFilter;
    name(name: string): PrefixFilter;
    prefix(value: string): PrefixFilter;
    toJSON(): PrefixFilter;
  }
  declare export class PrefixQuery mixins Query {
    constructor(field: string, value: string): this;
    _type(): string;
    boost(boost: number): PrefixQuery;
    field(f: string): PrefixQuery;
    rewrite(m: string): PrefixQuery;
    toJSON(): any;
    value(p: string): PrefixQuery;
  }
  declare export class QueryFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    cacheFilter(trueFalse: boolean): QueryFacet;
    facetFilter(oFilter: Object): QueryFacet;
    global(trueFalse: boolean): QueryFacet;
    mode(m: string): QueryFacet;
    nested(path: string): QueryFacet;
    query(oQuery: Object): QueryFacet;
    scope(scope: string): QueryFacet;
    toJSON(): any;
  }
  declare export class QueryFilter mixins Filter {
    constructor(qry: Object): this;
    _type(): string;
    cache(trueFalse: boolean): QueryFilter;
    cacheKey(key: string): QueryFilter;
    name(name: string): QueryFilter;
    query(q: Object): QueryFilter;
    toJSON(): QueryFilter;
  }
  declare export class QueryMixin {
    _type(): string;
    boost(boost: number): QueryMixin;
    toJSON(): any;
  }
  declare export class QueryStringQuery mixins Query {
    constructor(qstr: string): this;
    _type(): string;
    allowLeadingWildcard(trueFalse: boolean): QueryStringQuery;
    analyzer(analyzer: string): QueryStringQuery;
    analyzeWildcard(trueFalse: boolean): QueryStringQuery;
    autoGeneratePhraseQueries(trueFalse: boolean): QueryStringQuery;
    boost(boost: number): QueryStringQuery;
    defaultField(fieldName: string): QueryStringQuery;
    defaultOperator(op: string): QueryStringQuery;
    enablePositionIncrements(trueFalse: boolean): QueryStringQuery;
    escape(trueFalse: boolean): QueryStringQuery;
    fields(fieldNames: any[]): QueryStringQuery;
    fuzzyMaxExpansions(max: number): QueryStringQuery;
    fuzzyMinSim(minSim: number): QueryStringQuery;
    fuzzyPrefixLength(fuzzLen: number): QueryStringQuery;
    fuzzyRewrite(m: string): QueryStringQuery;
    lenient(trueFalse: boolean): QueryStringQuery;
    lowercaseExpandedTerms(trueFalse: boolean): QueryStringQuery;
    minimumShouldMatch(minMatch: number): QueryStringQuery;
    phraseSlop(slop: number): QueryStringQuery;
    query(qstr: string): QueryStringQuery;
    quoteAnalyzer(analyzer: string): QueryStringQuery;
    quoteFieldSuffix(s: string): QueryStringQuery;
    rewrite(m: string): QueryStringQuery;
    tieBreaker(tieBreaker: number): QueryStringQuery;
    toJSON(): any;
    useDisMax(trueFalse: string): QueryStringQuery;
  }
  declare export class RandomScoreFunction mixins ScoreFunction {
    constructor(): this;
    _type(): string;
    filter(oFilter: Filter): RandomScoreFunction;
    seed(s: number): RandomScoreFunction;
    toJSON(): any;
  }
  declare export class RangeAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): RangeAggregation;
    aggregation(agg: Aggregation): RangeAggregation;
    field(field: string): RangeAggregation;
    keyed(trueFalse: boolean): RangeAggregation;
    lang(language: string): RangeAggregation;
    params(p: Object): RangeAggregation;
    range(from: number, to?: number, key?: string): RangeAggregation;
    script(scriptCode: string): RangeAggregation;
    scriptValuesSorted(trueFalse: boolean): RangeAggregation;
    toJSON(): any;
  }
  declare export class RangeFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    addRange(from: Number, to: Number): RangeFacet;
    addUnboundedFrom(from: Number): RangeFacet;
    addUnboundedTo(to: Number): RangeFacet;
    cacheFilter(trueFalse: boolean): RangeFacet;
    facetFilter(oFilter: Object): RangeFacet;
    field(fieldName: string): RangeFacet;
    global(trueFalse: boolean): RangeFacet;
    keyField(fieldName: string): RangeFacet;
    keyScript(scriptCode: string): RangeFacet;
    lang(language: string): RangeFacet;
    mode(m: string): RangeFacet;
    nested(path: string): RangeFacet;
    params(p: Object): RangeFacet;
    scope(scope: string): RangeFacet;
    toJSON(): any;
    valueField(fieldName: string): RangeFacet;
    valueScript(scriptCode: string): RangeFacet;
  }
  declare export class RangeFilter mixins Filter {
    constructor(field: string): this;
    _type(): string;
    cache(trueFalse: boolean): RangeFilter;
    cacheKey(key: string): RangeFilter;
    field(f: string): RangeFilter;
    from(f: any): RangeFilter;
    gt(val: any): RangeFilter;
    gte(val: any): RangeFilter;
    includeLower(trueFalse: boolean): RangeFilter;
    includeUpper(trueFalse: boolean): RangeFilter;
    lt(val: any): RangeFilter;
    lte(val: any): RangeFilter;
    name(name: string): RangeFilter;
    to(t: any): RangeFilter;
    toJSON(): RangeFilter;
  }
  declare export class RangeQuery mixins Query {
    constructor(field: string): this;
    _type(): string;
    boost(boost: number): RangeQuery;
    field(f: string): RangeQuery;
    from(f: any): RangeQuery;
    gt(val: any): RangeQuery;
    gte(val: any): RangeQuery;
    includeLower(trueFalse: boolean): RangeQuery;
    includeUpper(trueFalse: boolean): RangeQuery;
    lt(val: any): RangeQuery;
    lte(val: any): RangeQuery;
    to(t: any): RangeQuery;
    toJSON(): any;
  }
  declare export class RegexpFilter mixins Filter {
    constructor(field: string, value: string): this;
    _type(): string;
    cache(trueFalse: boolean): RegexpFilter;
    cacheKey(key: string): RegexpFilter;
    field(f: string): RegexpFilter;
    flags(f: string): RegexpFilter;
    flagsValue(v: string): RegexpFilter;
    name(name: string): RegexpFilter;
    toJSON(): RegexpFilter;
    value(p: string): RegexpFilter;
  }
  declare export class RegexpQuery mixins Query {
    constructor(field: string, value: string): this;
    _type(): string;
    boost(boost: number): RegexpQuery;
    field(f: string): RegexpQuery;
    flags(f: string): RegexpQuery;
    flagsValue(v: string): RegexpQuery;
    rewrite(m: string): RegexpQuery;
    toJSON(): any;
    value(p: string): RegexpQuery;
  }
  declare export class Request {
    constructor(conf: Object): this;
    _type(): string;
    agg(agg: Aggregation): Request;
    aggregation(agg: Aggregation): Request;
    explain(trueFalse: boolean): Request;
    facet(facet: Facet): Request;
    fields(s: string | string[]): Request;
    filter(filter: Filter): Request;
    from(f: number): Request;
    highlight(h: Highlight): Request;
    indexBoost(index: string, boost: number): Request;
    minScore(min: number): Request;
    query(someQuery: Query): Request;
    rescore(r: Rescore): Request;
    scriptField(oScriptField: ScriptField): Request;
    size(s: number): Request;
    sort(fieldName?: string | any[] | Sort, order?: string): Request;
    source(
      includes: string | boolean | string[],
      excludes: string | string[]
    ): Request;
    suggest(s: string | Suggest): Request;
    timeout(t: number): Request;
    toJSON(): any;
    trackScores(trueFalse: boolean): Request;
    version(trueFalse: boolean): Request;
  }
  declare export class Rescore {
    constructor(windowSize: Number): this;
    _type(): string;
    queryWeight(weight: Number): Rescore;
    rescoreQuery(someQuery: Query): Rescore;
    rescoreQueryWeight(weight: Number): Rescore;
    scoreMode(s: string): Rescore;
    toJSON(): any;
    windowSize(size: Number): Rescore;
  }
  declare export class ScoreFunctionMixin mixins ScoreFunction {
    _type(): string;
    filter(oFilter: Filter): ScoreFunctionMixin;
    toJSON(): any;
  }
  declare export class ScriptField {
    constructor(fieldName: string): this;
    _type(): string;
    ignoreFailure(trueFalse: boolean): ScriptField;
    lang(language: string): ScriptField;
    params(oParams: Object): ScriptField;
    script(expression: string): ScriptField;
    toJSON(): any;
  }
  declare export class ScriptFilter mixins Filter {
    constructor(script: string): this;
    _type(): string;
    cache(trueFalse: boolean): ScriptFilter;
    cacheKey(key: string): ScriptFilter;
    lang(lang: string): ScriptFilter;
    name(name: string): ScriptFilter;
    params(p: Object): ScriptFilter;
    script(s: string): ScriptFilter;
    toJSON(): ScriptFilter;
  }
  declare export class ScriptScoreFunction mixins ScoreFunction {
    constructor(): this;
    _type(): string;
    filter(oFilter: Filter): ScriptScoreFunction;
    lang(language: string): ScriptScoreFunction;
    params(p: Object): ScriptScoreFunction;
    script(scriptCode: string): ScriptScoreFunction;
    toJSON(): any;
  }
  declare export class Shape mixins Geo {
    constructor(type: string, coords: any[]): this;
    _type(): string;
    coordinates(c: any[]): Shape;
    radius(r: string): Shape;
    toJSON(): any;
    type(t: string): Shape;
  }
  declare export class SignificantTermsAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): SignificantTermsAggregation;
    aggregation(agg: Aggregation): SignificantTermsAggregation;
    exclude(exclude: string, flags: string): SignificantTermsAggregation;
    executionHint(h: string): SignificantTermsAggregation;
    field(field: string): SignificantTermsAggregation;
    format(f: string): SignificantTermsAggregation;
    include(include: string, flags: string): SignificantTermsAggregation;
    minDocCount(num: number): SignificantTermsAggregation;
    shardSize(shardSize: number): SignificantTermsAggregation;
    size(size: number): SignificantTermsAggregation;
    toJSON(): any;
  }
  declare export class Sort {
    constructor(fieldName: string): this;
    _type(): string;
    asc(): Sort;
    desc(): Sort;
    distanceType(type: string): Sort;
    field(f: string): Sort;
    geoDistance(point: GeoPoint): Sort;
    ignoreUnmapped(trueFalse: boolean): Sort;
    lang(lang: string): Sort;
    missing(m: string): Sort;
    mode(m: string): Sort;
    nestedFilter(oFilter: Object): Sort;
    nestedPath(path: string): Sort;
    normalize(trueFalse: string): Sort;
    order(o: string): Sort;
    params(p: Object): Sort;
    reverse(trueFalse: boolean): Sort;
    script(scriptCode: string): Sort;
    toJSON(): any;
    type(type: string): Sort;
    unit(unit: string): Sort;
  }
  declare export class SpanFirstQuery mixins Query {
    constructor(spanQry: Query, end: number): this;
    _type(): string;
    boost(boost: number): SpanFirstQuery;
    end(position: Number): SpanFirstQuery;
    match(spanQuery: Object): SpanFirstQuery;
    toJSON(): any;
  }
  declare export class SpanMultiTermQuery mixins Query {
    constructor(qry: Query): this;
    _type(): string;
    boost(boost: number): SpanMultiTermQuery;
    match(mtQuery: Object): SpanMultiTermQuery;
    toJSON(): any;
  }
  declare export class SpanNearQuery mixins Query {
    constructor(clauses: Query | Query[], slop: number): this;
    _type(): string;
    boost(boost: number): SpanNearQuery;
    clauses(clauses: Query | Query[]): SpanNearQuery;
    collectPayloads(trueFalse: boolean): SpanNearQuery;
    inOrder(trueFalse: boolean): SpanNearQuery;
    slop(distance: Number): SpanNearQuery;
    toJSON(): any;
  }
  declare export class SpanNotQuery mixins Query {
    constructor(includeQry: Query, excludeQry: Query): this;
    _type(): string;
    boost(boost: number): SpanNotQuery;
    exclude(spanQuery: Object): SpanNotQuery;
    include(spanQuery: Object): SpanNotQuery;
    toJSON(): any;
  }
  declare export class SpanOrQuery mixins Query {
    constructor(clauses: Object): this;
    _type(): string;
    boost(boost: number): SpanOrQuery;
    clauses(clauses: Query | Query[]): SpanOrQuery;
    toJSON(): any;
  }
  declare export class SpanTermQuery mixins Query {
    constructor(field: string, value: string): this;
    _type(): string;
    boost(boost: number): SpanTermQuery;
    field(f: string): SpanTermQuery;
    term(t: string): SpanTermQuery;
    toJSON(): any;
  }
  declare export class StatisticalFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    cacheFilter(trueFalse: boolean): StatisticalFacet;
    facetFilter(oFilter: Object): StatisticalFacet;
    field(fieldName: string): StatisticalFacet;
    fields(aFieldName: any[]): StatisticalFacet;
    global(trueFalse: boolean): StatisticalFacet;
    lang(language: string): StatisticalFacet;
    mode(m: string): StatisticalFacet;
    nested(path: string): StatisticalFacet;
    params(oParams: Object): StatisticalFacet;
    scope(scope: string): StatisticalFacet;
    script(code: string): StatisticalFacet;
    toJSON(): any;
  }
  declare export class StatsAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): StatsAggregation;
    lang(language: string): StatsAggregation;
    params(p: Object): StatsAggregation;
    script(scriptCode: string): StatsAggregation;
    scriptValuesSorted(trueFalse: boolean): StatsAggregation;
    toJSON(): any;
  }
  declare export class SuggestContextMixin {
    analyzer(analyzer: string): SuggestContextMixin;
    field(field: string): SuggestContextMixin;
    shardSize(s: number): SuggestContextMixin;
    size(s: number): SuggestContextMixin;
  }
  declare export class SuggesterMixin {
    _type(): string;
    text(txt: string): SuggesterMixin;
    toJSON(): any;
  }
  declare export class SumAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): SumAggregation;
    lang(language: string): SumAggregation;
    params(p: Object): SumAggregation;
    script(scriptCode: string): SumAggregation;
    scriptValuesSorted(trueFalse: boolean): SumAggregation;
    toJSON(): any;
  }
  declare export class TermFilter mixins Filter {
    constructor(fieldName: string, term: string): this;
    _type(): string;
    cache(trueFalse: boolean): TermFilter;
    cacheKey(key: string): TermFilter;
    field(f: string): TermFilter;
    name(name: string): TermFilter;
    term(): TermFilter;
    toJSON(): TermFilter;
  }
  declare export class TermQuery mixins Query {
    constructor(field: string, term: string): this;
    _type(): string;
    boost(boost: Number): TermQuery;
    field(f: string): TermQuery;
    term(t: string): TermQuery;
    toJSON(): any;
  }
  declare export class TermsAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    agg(agg: Aggregation): TermsAggregation;
    aggregation(agg: Aggregation): TermsAggregation;
    exclude(exclude: string, flags: string): TermsAggregation;
    executionHint(h: string): TermsAggregation;
    field(field: string): TermsAggregation;
    format(f: string): TermsAggregation;
    include(include: string, flags: string): TermsAggregation;
    lang(language: string): TermsAggregation;
    minDocCount(num: number): TermsAggregation;
    order(order: string, direction: string): TermsAggregation;
    params(p: Object): TermsAggregation;
    script(scriptCode: string): TermsAggregation;
    scriptValuesUnique(trueFalse: boolean): TermsAggregation;
    shardSize(shardSize: number): TermsAggregation;
    size(size: number): TermsAggregation;
    toJSON(): any;
    valueType(v: string): TermsAggregation;
  }
  declare export class TermsFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    allTerms(trueFalse: string): TermsFacet;
    cacheFilter(trueFalse: boolean): TermsFacet;
    exclude(exclude: string | string[]): TermsFacet;
    executionHint(h: Object): TermsFacet;
    facetFilter(oFilter: Object): TermsFacet;
    field(fieldName: string): TermsFacet;
    fields(aFieldName: any[]): TermsFacet;
    global(trueFalse: boolean): TermsFacet;
    lang(language: string): TermsFacet;
    mode(m: string): TermsFacet;
    nested(path: string): TermsFacet;
    order(o: string): TermsFacet;
    params(p: Object): TermsFacet;
    regex(exp: string): TermsFacet;
    regexFlags(flags: string): TermsFacet;
    scope(scope: string): TermsFacet;
    script(scriptCode: string): TermsFacet;
    scriptField(script: string): TermsFacet;
    shardSize(shardSize: number): TermsFacet;
    size(facetSize: number): TermsFacet;
    toJSON(): any;
  }
  declare export class TermsFilter mixins Filter {
    constructor(field: string, terms: string | string[]): this;
    _type(): string;
    cache(trueFalse: boolean): TermsFilter;
    cacheKey(key: string): TermsFilter;
    cacheLookup(trueFalse: boolean): TermsFilter;
    execution(e: string): TermsFilter;
    field(f: string): TermsFilter;
    id(id: string): TermsFilter;
    index(idx: string): TermsFilter;
    name(name: string): TermsFilter;
    path(path: string): TermsFilter;
    routing(path: string): TermsFilter;
    terms(t: string | string[]): TermsFilter;
    toJSON(): TermsFilter;
    type(type: string): TermsFilter;
  }
  declare export class TermsQuery mixins Query {
    constructor(field: string, terms: string | string[]): this;
    _type(): string;
    boost(boost: number): TermsQuery;
    disableCoord(trueFalse: string): TermsQuery;
    field(f: string): TermsQuery;
    minimumShouldMatch(min: number): TermsQuery;
    terms(t: string | string[]): TermsQuery;
    toJSON(): any;
  }
  declare export class TermStatsFacet mixins Facet {
    constructor(name: string): this;
    _type(): string;
    allTerms(trueFalse: string): TermStatsFacet;
    cacheFilter(trueFalse: boolean): TermStatsFacet;
    facetFilter(oFilter: Object): TermStatsFacet;
    global(trueFalse: boolean): TermStatsFacet;
    keyField(fieldName: string): TermStatsFacet;
    lang(language: string): TermStatsFacet;
    mode(m: string): TermStatsFacet;
    nested(path: string): TermStatsFacet;
    order(o: string): TermStatsFacet;
    params(oParams: Object): TermStatsFacet;
    scope(scope: string): TermStatsFacet;
    scriptField(script: string): TermStatsFacet;
    size(facetSize: number): TermStatsFacet;
    toJSON(): any;
    valueField(fieldName: string): TermStatsFacet;
    valueScript(code: string): TermStatsFacet;
  }
  declare export class TermSuggester mixins Suggest {
    constructor(name: string): this;
    _type(): string;
    accuracy(a: number): TermSuggester;
    analyzer(analyzer: string): TermSuggester;
    field(field: string): TermSuggester;
    maxEdits(max: number): TermSuggester;
    maxInspections(max: number): TermSuggester;
    maxTermFreq(max: number): TermSuggester;
    minDocFreq(min: number): TermSuggester;
    minWordLen(len: number): TermSuggester;
    shardSize(s: number): TermSuggester;
    size(s: number): TermSuggester;
    sort(s: string): TermSuggester;
    stringDistance(s: string): TermSuggester;
    suggestMode(m: string): TermSuggester;
    text(txt: string): TermSuggester;
    toJSON(): any;
  }
  declare export class TopChildrenQuery mixins Query {
    constructor(qry: Object, type: string): this;
    _type(): string;
    boost(boost: number): TopChildrenQuery;
    factor(f: number): TopChildrenQuery;
    incrementalFactor(f: number): TopChildrenQuery;
    query(q: Object): TopChildrenQuery;
    scope(s: string): TopChildrenQuery;
    score(s: string): TopChildrenQuery;
    scoreMode(s: string): TopChildrenQuery;
    toJSON(): any;
    type(t: string): TopChildrenQuery;
  }
  declare export class TypeFilter mixins Filter {
    constructor(type: string): this;
    _type(): string;
    cache(trueFalse: boolean): TypeFilter;
    cacheKey(key: string): TypeFilter;
    name(name: string): TypeFilter;
    toJSON(): TypeFilter;
    type(type: string): TypeFilter;
  }
  declare export class ValueCountAggregation mixins Aggregation {
    constructor(name: string): this;
    _type(): string;
    field(field: string): ValueCountAggregation;
    lang(language: string): ValueCountAggregation;
    params(p: Object): ValueCountAggregation;
    script(scriptCode: string): ValueCountAggregation;
    scriptValuesUnique(trueFalse: boolean): ValueCountAggregation;
    toJSON(): any;
  }
  declare export class WildcardQuery mixins Query {
    constructor(field: string, value: string): this;
    _type(): string;
    boost(boost: Number): WildcardQuery;
    field(f: string): WildcardQuery;
    rewrite(m: string): WildcardQuery;
    toJSON(): any;
    value(v: string): WildcardQuery;
  }
}
declare module "elastic.js" {
  declare module.exports: typeof elasticjs;
}
