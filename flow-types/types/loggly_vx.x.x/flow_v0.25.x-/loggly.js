declare module "loggly" {
  declare export interface LogglyOptions {
    token: string;
    subdomain: string;
    tags?: string[];
    json?: boolean;
    host?: string;
    auth?: {
      username: string,
      password: string
    };
  }
  declare interface SharedSearchOptions {
    from?: string;
    until?: string;
    size?: number;
    rows?: number;
  }
  declare export type SearchOptionsWithQ = {
    q: string
  } & SharedSearchOptions;

  declare export type SearchOptionsWithQuery = {
    query: string
  } & SharedSearchOptions;

  declare export type SearchOptions =
    | SearchOptionsWithQ
    | SearchOptionsWithQuery;
  declare export interface SearchResults {
    events: SearchResultsEvent[];
    total_events: number;
    page: number;
  }
  declare export interface SearchResultsEvent {
    id: string;
    logtypes: string[];
    event: any;
    logmsg: string;
    raw: string;
    timestamp: number;
    tags: string[];
  }
  declare export function createClient(options: LogglyOptions): LogglyInstance;

  declare export var version: number;
  declare export interface LogglyInstance {
    log(
      message: any,
      tags?: string[],
      callback?: (err: any, results: any) => void
    ): this;
    log(message: any, callback?: (err: any, results: any) => void): this;
    search(
      query: string,
      callback?: (err: any, results: SearchResults) => void
    ): Search;
    search(
      options: SearchOptions,
      callback?: (err: any, results: SearchResults) => void
    ): Search;
  }
  declare export interface Search {
    run(callback: (err: any, results: SearchResults) => void): this;
  }
}
