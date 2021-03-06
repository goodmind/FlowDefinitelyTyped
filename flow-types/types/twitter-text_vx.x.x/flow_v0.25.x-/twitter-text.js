declare module "twitter-text" {
  declare export interface HashtagWithIndices {
    hashtag: string;
    indices: [number, number];
  }
  declare export interface UrlWithIndices {
    url: string;
    indices: [number, number];
  }
  declare export interface MentionWithIndices {
    screenName: string;
    indices: [number, number];
  }
  declare export interface MentionOrListWithIndices {
    screenName: string;
    listSlug: string;
    indices: [number, number];
  }
  declare export interface CashtagWithIndices {
    cashtag: string;
    indices: [number, number];
  }
  declare export type EntityWithIndices =
    | HashtagWithIndices
    | UrlWithIndices
    | MentionWithIndices
    | MentionOrListWithIndices
    | CashtagWithIndices;
  declare interface Indices {
    indices: [number, number];
  }
  declare interface Attributes {
    [name: string]: string | null;
  }
  declare export function htmlEscape(text: string): string;

  declare export function splitTags(text: string): string[];

  declare export function extractHashtags(text: string): string[];

  declare export function extractHashtagsWithIndices(
    text: string
  ): HashtagWithIndices[];

  declare export function extractUrls(text: string): string[];

  declare export function extractUrlsWithIndices(
    text: string,
    options?: {
      extractUrlsWithoutProtocol: boolean
    }
  ): UrlWithIndices[];

  declare export function extractMentions(text: string): string[];

  declare export function extractMentionsWithIndices(
    text: string
  ): MentionWithIndices[];

  declare export function extractMentionsOrListsWithIndices(
    text: string
  ): MentionOrListWithIndices[];

  declare export function extractReplies(text: string): string[];

  declare export function extractCashtags(text: string): string[];

  declare export function extractCashtagsWithIndices(
    text: string
  ): CashtagWithIndices[];

  declare export function extractEntitiesWithIndices(
    text: string
  ): EntityWithIndices[];

  declare export function modifyIndicesFromUnicodeToUTF16<I>(i: I): I;

  declare export function modifyIndicesFromUTF16ToUnicode<I>(i: I): I;

  declare export interface UrlEntity {
    url: string;
    display_url: string;
    expanded_url: string;
    indices: [number, number];
  }
  declare export interface AutoLinkOptions {
    hashtagClass?: string;
    hashtagUrlBase?: string;
    cashtagClass?: string;
    cashtagUrlBase?: string;
    listClass?: string;
    usernameClass?: string;
    usernameUrlBase?: string;
    listUrlBase?: string;
    invisibleTagAttrs?: string;
    htmlEscapeNonEntities?: boolean;
    targetBlank?: boolean;
    suppressNoFollow?: boolean;
    urlEntities?: UrlEntity[];
    usernameIncludeSymbol?: boolean;
    linkAttributeBlock?: (
      entity: EntityWithIndices,
      attributes: Attributes
    ) => void;
    linkTextBlock?: (entity: EntityWithIndices, text: string) => void;
    symbolTag?: string;
    textWithSymbolTag?: string;
    htmlAttrs?: Attributes;
  }
  declare export function autoLink(
    text: string,
    options?: AutoLinkOptions
  ): string;

  declare export function autoLinkUsernamesOrLists(
    text: string,
    options?: AutoLinkOptions
  ): string;

  declare export function autoLinkHashtags(
    text: string,
    options?: AutoLinkOptions
  ): string;

  declare export function autoLinkCashtags(
    text: string,
    options?: AutoLinkOptions
  ): string;

  declare export function autoLinkUrlsCustom(
    text: string,
    options?: AutoLinkOptions
  ): string;

  declare export function autoLinkEntities(
    text: string,
    entities: EntityWithIndices[],
    options?: AutoLinkOptions
  ): string;

  declare interface TweetLengthOptions {
    short_url_length: number;
    short_url_length_https: number;
  }
  declare export function getTweetLength(
    text: string,
    options?: TweetLengthOptions
  ): number;

  declare export function isValidUsername(username: string): boolean;

  declare export function isValidList(usernameList: string): boolean;

  declare export function isValidHashtag(hashtag: string): boolean;

  declare export function isValidUrl(
    url: string,
    unicodeDomains: boolean,
    requireProtocol: boolean
  ): boolean;

  declare export function hasInvalidCharacters(text: string): boolean;

  declare export function isInvalidTweet(text: string): string;

  declare export function getUnicodeTextLength(text: string): number;

  declare export function convertUnicodeIndices(
    text: string,
    entities: EntityWithIndices[],
    indicesInUTF16?: boolean
  ): void;

  declare export function hitHighlight(
    text: string,
    hits?: number[][],
    options?: {
      tag: string
    }
  ): string;

  declare export interface ParseTweetOptions {
    version?: number;
    maxWeightedTweetLength?: number;
    scale?: number;
    defaultWeight?: number;
    transformedURLLength?: number;
    ranges?: Array<{
      start: number,
      end: number,
      weight: number
    }>;
  }
  declare export interface ParsedTweet {
    weightedLength: number;
    permillage: number;
    valid: boolean;
    displayRangeEnd: number;
    displayRangeStart: number;
    validRangeEnd: number;
    validRangeStart: number;
  }
  declare export function parseTweet(
    text: string,
    options?: ParseTweetOptions
  ): ParsedTweet;
}
