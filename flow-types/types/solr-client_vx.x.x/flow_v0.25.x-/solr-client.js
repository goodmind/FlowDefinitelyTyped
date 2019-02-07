declare module "solr-client" {
  import type { ClientRequest } from "http";

  declare export function createClient(options?: Options): Client;

  declare export interface Options {
    host?: string;
    port?: number;
    core?: string;
    path?: string;
    agent?: string;
    secure?: string;
    bigint?: string;
    solrVersion?: string;
  }
  declare export interface RangeFilterOption {
    field: string;
    start: string | number | Date;
    end: string | number | Date;
  }
  declare export interface GroupOptions {
    on?: boolean;
    field?: string | string[];
    limit?: number;
    offset?: number;
    sort?: string;
    format?: string;
    main?: boolean;
    ngroups?: boolean;
    truncate?: boolean;
    cache?: number;
  }
  declare export interface FacetOptions {
    on: boolean;
    query?: string;
    field?: string | string[];
    prefix: string;
    sort?: string;
    limit?: number;
    offset?: number;
    mincout?: number;
    missing?: boolean;
    method?: string;
    pivot?: string | string[];
  }
  declare export interface MoreLikeThisOptions {
    on: boolean;
    fl?: string | string[];
    count?: number;
    mintf?: number;
    mindf?: number;
    minwl?: number;
    maxwl?: number;
    maxqt?: number;
    maxntp?: number;
    boost?: boolean;
    qf?: string | { [key: string]: any };
  }
  declare export interface HighlightOptions {
    on: boolean;
    q?: string | string[];
    qparser?: string;
    fl?: string | string[];
    snippets?: number;
    fragsize?: number;
    mergeContiguous?: boolean;
    maxAnalyzedChars?: number;
    maxMultiValuedToExamine?: number;
    maxMultiValuedToMatch?: number;
    alternateField?: string;
    maxAlternateFieldLength?: number;
    formatter?: string;
    simplePre?: string;
    simplePost?: string;
    fragmenter?: string;
    highlightMultiTerm?: boolean;
    requireFieldMatch?: boolean;
    usePhraseHighlighter?: boolean;
    regexSlop?: number;
    regexPattern?: string;
    regexMaxAnalyzedChars?: number;
    preserveMulti?: boolean;
    payloads?: boolean;
  }
  declare export interface AddRemoteResourceOptions {
    path: string;
    format: string;
    contentType: string;
    parameters: { [key: string]: any };
  }
  declare export interface Query {
    set(parameters: string): Query;
    defType(type: string): Query;
    requestHandler(handler: string): Query;
    q(q: string | { [key: string]: any }): Query;
    qop(op: string): Query;
    df(df: string): Query;
    start(start: number): Query;
    rows(rows: number): Query;
    cursorMark(mark: string): Query;
    sort(options: { [key: string]: any }): Query;
    rangeFilter(options: RangeFilterOption[]): Query;
    matchFilter(field: string, value: string | number | Date): Query;
    fl(fields: string | string[]): Query;
    timeout(time: string | number): Query;
    groupBy(field: string): Query;
    group(options: GroupOptions): Query;
    facet(options: FacetOptions): Query;
    mlt(options: MoreLikeThisOptions): Query;
    dismax(): Query;
    edismax(): Query;
    debugQuery(): Query;
    qf(options: { [key: string]: any }): Query;
    mm(minimum: string | number): Query;
    pf(options: { [key: string]: any }): Query;
    ps(slop: number): Query;
    qs(slop: number): Query;
    tie(tiebreaker: number): Query;
    bq(options: { [key: string]: any }): Query;
    bf(functions: string): Query;
    boost(functions: string): Query;
    build(): string;
    hl(options: HighlightOptions): Query;
  }
  declare export interface Client {
    basicAuth(username: string, password: string): Client;
    unauth(): Client;
    add(
      docs: { [key: string]: any }[],
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    realTimeGet(
      ids: string | string[],
      query?: Query,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    addRemoteResource(
      options: AddRemoteResourceOptions,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    commit(
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    prepareCommit(
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    softCommit(
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    delete(
      field: string,
      text: string,
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    deleteByRange(
      field: string,
      start: string | Date,
      stop: string | Date,
      options?: { [key: string]: any },
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    deleteByID(
      id: string | number,
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    deleteByQuery(
      query: string,
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    deleteAll(
      options?: Options,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    optimize(
      options: { [key: string]: any },
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    rollback(
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    update(
      data: { [key: string]: any },
      options?: { [key: string]: any },
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    search(
      query: Query,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    executeCollection(
      collection: Query | { [key: string]: any } | string,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    searchAll(
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    get(
      handler: string,
      query: Query | { [key: string]: any } | string,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    post(
      handler: string,
      query: Query | { [key: string]: any } | string,
      callback?: (err: Error, data: { [key: string]: any }) => void
    ): ClientRequest;
    escapeSpecialChars(s: string): string;
    query(): Query;
  }
}
