declare module "vexdb" {
  import type { EventEmitter } from "events";

  declare export type Endpoint =
    | "events"
    | "teams"
    | "matches"
    | "rankings"
    | "season_rankings"
    | "awards"
    | "skills";

  /**
   * Parameter Objects
   */
  declare export type StringRequest =
    | string
    | string[]
    | RegExp
    | StringRequestValidatorFunction;
  declare export type StringRequestValidatorFunction = (
    itemValue: string,
    item: ResponseObject
  ) => Promise<boolean> | boolean;
  declare export type NumberRequest =
    | number
    | number[]
    | NumberRequestValidatorFunction;
  declare export type NumberRequestValidatorFunction = (
    itemValue: number,
    item: ResponseObject
  ) => Promise<boolean> | boolean;

  /**
   * Request Objects
   */
  declare export type RequestObject =
    | TeamsRequestObject
    | EventsRequestObject
    | MatchesRequestObject
    | RankingsRequestObject
    | SeasonRankingsRequestObject
    | AwardsRequestObject
    | SkillsRequestObject;
  declare export interface TeamsRequestObject {
    team?: StringRequest;
    number?: StringRequest;
    team_name?: StringRequest;
    robot_name?: StringRequest;
    program?: StringRequest;
    organisation?: StringRequest;
    city?: StringRequest;
    region?: StringRequest;
    country?: StringRequest;
    grade?: StringRequest;
    is_registered?: NumberRequest;
    sku?: StringRequest;
    limit_number?: number;
    limit_start?: number;
  }
  declare export interface EventsRequestObject {
    sku?: StringRequest;
    program?: StringRequest;
    date?: StringRequest;
    season?: StringRequest;
    city?: StringRequest;
    region?: StringRequest;
    country?: StringRequest;
    status?: StringRequest;
    limit_number?: number;
    limit_start?: number;
    key?: StringRequest;
    name?: StringRequest;
    loc_venue?: StringRequest;
    loc_address1?: StringRequest;
    loc_address2?: StringRequest;
    loc_city?: StringRequest;
    loc_region?: StringRequest;
    loc_postcode?: StringRequest;
    loc_country?: StringRequest;
    start?: StringRequest;
    end?: StringRequest;
  }
  declare export interface MatchesRequestObject {
    sku?: StringRequest;
    division?: StringRequest;
    team?: StringRequest;
    round?: NumberRequest;
    instance?: NumberRequest;
    matchnum?: NumberRequest;
    scheduled?: NumberRequest;
    field?: StringRequest;
    scored?: NumberRequest;
    season?: StringRequest;
    limit_number?: number;
    limit_start?: number;
    red1?: StringRequest;
    red2?: StringRequest;
    red3?: StringRequest;
    redsit?: StringRequest;
    blue1?: StringRequest;
    blue2?: StringRequest;
    blue3?: StringRequest;
    bluesit?: StringRequest;
    redscore?: NumberRequest;
    bluescore?: NumberRequest;
  }
  declare export interface RankingsRequestObject {
    sku?: StringRequest;
    division?: StringRequest;
    team?: StringRequest;
    rank?: StringRequest;
    season?: StringRequest;
    limit_number?: number;
    limit_start?: number;
    wins?: NumberRequest;
    losses?: NumberRequest;
    ties?: NumberRequest;
    wp?: NumberRequest;
    ap?: NumberRequest;
    sp?: NumberRequest;
    trsp?: NumberRequest;
    max_score?: NumberRequest;
    opr?: NumberRequest;
    dpr?: NumberRequest;
    ccwm?: NumberRequest;
  }
  declare export interface SeasonRankingsRequestObject {
    program?: StringRequest;
    season?: StringRequest;
    team?: StringRequest;
    vrating_rank?: NumberRequest;
    limit_number?: number;
    limit_start?: number;
    vrating?: NumberRequest;
  }
  declare export interface AwardsRequestObject {
    sku?: StringRequest;
    name?: StringRequest;
    team?: StringRequest;
    season?: StringRequest;
    limit_number?: number;
    limit_start?: number;
    order?: NumberRequest;
  }
  declare export interface SkillsRequestObject {
    sku?: StringRequest;
    program?: StringRequest;
    type?: NumberRequest;
    team?: StringRequest;
    season?: StringRequest;
    rank?: NumberRequest;
    season_rank?: NumberRequest;
    limit_number?: number;
    limit_start?: number;
    attempts?: NumberRequest;
    score?: NumberRequest;
  }

  /**
   * Response Objects
   */
  declare export type ResponseObject =
    | TeamsResponseObject
    | EventsResponseObject
    | MatchesResponseObject
    | RankingsResponseObject
    | SeasonRankingsResponseObject
    | AwardsResponseObject
    | SkillsResponseObject;
  declare export interface TeamsResponseObject {
    number: string;
    program: string;
    team_name: string;
    robot_name: string;
    organisation: string;
    city: string;
    region: string;
    country: string;
    grade: string;
    is_registered: 0 | 1;
  }
  declare export interface EventsResponseObject {
    sku: string;
    key: string;
    program: string;
    name: string;
    loc_venue: string;
    loc_address1: string;
    loc_address2: string;
    loc_city: string;
    loc_region: string;
    loc_postcode: string;
    loc_country: string;
    season: string;
    start: string;
    end: string;
    divisions: string[];
  }
  declare export interface MatchesResponseObject {
    sku: string;
    division: string;
    round: 1 | 2 | 3 | 4 | 5 | 6 | 16;
    instance: number;
    matchnum: number;
    field: string;
    red1: string;
    red2: string;
    red3: string;
    redsit: string;
    blue1: string;
    blue2: string;
    blue3: string;
    bluesit: string;
    redscore: number;
    bluescore: number;
    scored: 0 | 1;
    scheduled: string;
  }
  declare export interface RankingsResponseObject {
    sku: string;
    division: string;
    rank: number;
    team: string;
    wins: number;
    losses: number;
    ties: number;
    wp: number;
    ap: number;
    sp: number;
    trsp: number;
    max_score: number;
    opr: number;
    dpr: number;
    ccwm: number;
  }
  declare export interface SeasonRankingsResponseObject {
    team: string;
    season: string;
    program: string;
    vrating_rank: number;
    vrating: number;
  }
  declare export interface AwardsResponseObject {
    sku: string;
    name: string;
    team: string;
    qualifies: string[];
    order: number;
  }
  declare export interface SkillsResponseObject {
    sku: string;
    type: number;
    rank: number;
    team: string;
    program: string;
    attempts: number;
    score: number;
  }

  /**
   * GET
   */
  declare export function get(
    endpoint: "teams",
    params: TeamsRequestObject
  ): Promise<TeamsResponseObject[]>;

  declare export function get(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<EventsResponseObject[]>;

  declare export function get(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<MatchesResponseObject[]>;

  declare export function get(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<RankingsResponseObject[]>;

  declare export function get(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<SeasonRankingsResponseObject[]>;

  declare export function get(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<AwardsResponseObject[]>;

  declare export function get(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<SkillsResponseObject[]>;

  /**
   * SIZE
   */
  declare export function size(
    endpoint: "teams",
    params: TeamsRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<number>;

  declare export function size(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<number>;

  /**
   * LIVE
   */
  declare export type LiveEventEmitter<Q, R> = {
    close(): void,
    params(updateParameters: Q): Q,
    current(): R[],
    on(event: "item", callback: (item: R) => void): this,
    on(event: "fetch", callback: (newItems: R[]) => void): this,
    on(event: "prefetch", callback: (results: R[]) => void): this
  } & EventEmitter;

  declare export type LiveRequestObject<T> = T & {
    prefetch?: boolean
  };
  declare export function live(
    endpoint: "teams",
    params: LiveRequestObject<TeamsRequestObject>
  ): LiveEventEmitter<TeamsRequestObject, TeamsResponseObject>;

  declare export function live(
    endpoint: "events",
    params: LiveRequestObject<EventsRequestObject>
  ): LiveEventEmitter<EventsRequestObject, EventsResponseObject>;

  declare export function live(
    endpoint: "matches",
    params: LiveRequestObject<MatchesRequestObject>
  ): LiveEventEmitter<MatchesRequestObject, MatchesResponseObject>;

  declare export function live(
    endpoint: "rankings",
    params: LiveRequestObject<RankingsRequestObject>
  ): LiveEventEmitter<RankingsRequestObject, RankingsResponseObject>;

  declare export function live(
    endpoint: "season_rankings",
    params: LiveRequestObject<SeasonRankingsRequestObject>
  ): LiveEventEmitter<
    SeasonRankingsRequestObject,
    SeasonRankingsResponseObject
  >;

  declare export function live(
    endpoint: "awards",
    params: LiveRequestObject<AwardsRequestObject>
  ): LiveEventEmitter<AwardsRequestObject, AwardsResponseObject>;

  declare export function live(
    endpoint: "skills",
    params: LiveRequestObject<SkillsRequestObject>
  ): LiveEventEmitter<SkillsRequestObject, SkillsResponseObject>;

  declare export function live(
    endpoint: Endpoint,
    params: LiveRequestObject<RequestObject>
  ): LiveEventEmitter<RequestObject, ResponseObject>;

  /**
   * CACHE
   */
  declare export interface CacheEntry<T> {
    expiry: number;
    value: {
      status: 0 | 1,
      size: number,
      result: T[]
    };
  }
  declare export function cache(
    endpoint: "teams",
    params: TeamsRequestObject,
    value: TeamsResponseObject[]
  ): Promise<CacheEntry<TeamsResponseObject>>;

  declare export function cache(
    endpoint: "events",
    params: EventsRequestObject,
    value: EventsResponseObject[]
  ): Promise<CacheEntry<EventsResponseObject>>;

  declare export function cache(
    endpoint: "matches",
    params: MatchesRequestObject,
    value: MatchesResponseObject[]
  ): Promise<CacheEntry<MatchesResponseObject>>;

  declare export function cache(
    endpoint: "rankings",
    params: RankingsRequestObject,
    value: RankingsResponseObject[]
  ): Promise<CacheEntry<RankingsResponseObject>>;

  declare export function cache(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject,
    value: SeasonRankingsResponseObject[]
  ): Promise<CacheEntry<SeasonRankingsResponseObject>>;

  declare export function cache(
    endpoint: "awards",
    params: AwardsRequestObject,
    value: AwardsResponseObject[]
  ): Promise<CacheEntry<AwardsResponseObject>>;

  declare export function cache(
    endpoint: "skills",
    params: SkillsRequestObject,
    value: SkillsResponseObject[]
  ): Promise<CacheEntry<SkillsResponseObject>>;

  declare export function cache(
    endpoint: Endpoint,
    params: RequestObject,
    value: ResponseObject[]
  ): Promise<CacheEntry<ResponseObject>>;

  declare var npm$namespace$cache: {
    clear: typeof cache$clear,
    has: typeof cache$has,
    resolve: typeof cache$resolve,
    sanitize: typeof cache$sanitize,
    serialize: typeof cache$serialize,
    setTTL: typeof cache$setTTL,
    ttl: typeof cache$ttl
  };
  declare var cache$ttl: number;

  declare function cache$clear(): void;

  declare function cache$has(
    endpoint: "teams",
    params: TeamsRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<boolean>;

  declare function cache$has(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<boolean>;

  declare function cache$resolve(
    endpoint: "teams",
    params: TeamsRequestObject
  ): Promise<CacheEntry<TeamsResponseObject>>;

  declare function cache$resolve(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<CacheEntry<EventsResponseObject>>;

  declare function cache$resolve(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<CacheEntry<MatchesResponseObject>>;

  declare function cache$resolve(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<CacheEntry<RankingsResponseObject>>;

  declare function cache$resolve(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<CacheEntry<SeasonRankingsResponseObject>>;

  declare function cache$resolve(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<CacheEntry<AwardsResponseObject>>;

  declare function cache$resolve(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<CacheEntry<SkillsResponseObject>>;

  declare function cache$sanitize(
    endpoint: Endpoint,
    params: { [key: string]: any }
  ): { [key: string]: any };

  declare function cache$serialize(
    url: any,
    params: { [key: string]: any }
  ): { [key: string]: any };

  declare function cache$setTTL(cache$ttl: number): { [key: string]: any };

  declare var npm$namespace$constant: {
    header: typeof constant$header,
    isBrowser: typeof constant$isBrowser,
    param: typeof constant$param,
    endpoints: typeof constant$endpoints,
    settings: typeof constant$settings,
    uniques: typeof constant$uniques,
    validParams: typeof constant$validParams
  };
  declare var constant$endpoints: string[];

  declare var constant$settings: {
    baseURL: string,
    cache: {
      cache$ttl: number
    },
    headers: {},
    live: {
      pollTime: number
    },
    params: {}
  };

  declare var constant$uniques: {
    events: string,
    teams: string
  };

  declare var constant$validParams: {
    awards: string[],
    events: string[],
    matches: string[],
    rankings: string[],
    season_rankings: string[],
    skills: string[],
    teams: string[]
  };

  declare function constant$header(headers: { [key: string]: any }): void;

  declare function constant$isBrowser(): boolean;

  declare function constant$param(params: RequestObject): void;
}
