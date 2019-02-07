declare module "js-search" {
  declare class Search {
    constructor(uidFieldName: string | Array<string>): this;
    indexStrategy: IIndexStrategy;
    sanitizer: ISanitizer;
    searchIndex: ISearchIndex;
    tokenizer: ITokenizer;
    addDocument(document: Object): void;
    addDocuments(documents: Array<Object>): void;
    addIndex(field: string | Array<string>): void;
    search(query: string): Array<Object>;
  }
  declare interface IIndexStrategy {
    expandToken(token: string): Array<string>;
  }
  declare class AllSubstringsIndexStrategy mixins IIndexStrategy {
    expandToken(token: string): Array<string>;
  }
  declare class ExactWordIndexStrategy mixins IIndexStrategy {
    expandToken(token: string): Array<string>;
  }
  declare class PrefixIndexStrategy mixins IIndexStrategy {
    expandToken(token: string): Array<string>;
  }
  declare interface ISanitizer {
    sanitize(text: string): string;
  }
  declare class CaseSensitiveSanitizer mixins ISanitizer {
    sanitize(text: string): string;
  }
  declare class LowerCaseSanitizer mixins ISanitizer {
    sanitize(text: string): string;
  }
  declare interface ISearchIndex {
    indexDocument(token: string, uid: string, document: Object): void;
    search(tokens: Array<string>, corpus: Array<Object>): Array<Object>;
  }
  declare type ITfIdfTokenMap = {
    [token: string]: ITfIdfTokenMetadata
  };
  declare type ITfIdfUidMap = {
    [uid: string]: ITfIdfUidMetadata
  };
  declare type ITfIdfTokenMetadata = {
    $numDocumentOccurrences: number,
    $totalNumOccurrences: number,
    $uidMap: ITfIdfUidMap
  };
  declare type ITfIdfUidMetadata = {
    $document: Object,
    $numTokenOccurrences: number
  };
  declare class TfIdfSearchIndex mixins ISearchIndex {
    constructor(uidFieldName: string | Array<string>): this;
    indexDocument(token: string, uid: string, doc: Object): void;
    search(tokens: Array<string>, corpus: Array<Object>): Array<Object>;
  }
  declare class UnorderedSearchIndex mixins ISearchIndex {
    constructor(): this;
    indexDocument(token: string, uid: string, doc: Object): void;
    search(tokens: Array<string>, corpus: Array<Object>): Array<Object>;
  }
  declare interface ITokenizer {
    tokenize(text: string): Array<string>;
  }
  declare class SimpleTokenizer mixins ITokenizer {
    tokenize(text: string): Array<string>;
  }
  declare type StemmingFunction = (text: string) => string;
  declare class StemmingTokenizer mixins ITokenizer {
    constructor(
      stemmingFunction: StemmingFunction,
      decoratedTokenizer: ITokenizer
    ): this;
    tokenize(text: string): Array<string>;
  }
  declare class StopWordsTokenizer mixins ITokenizer {
    constructor(decoratedTokenizer: ITokenizer): this;
    tokenize(text: string): Array<string>;
  }
  declare var StopWordsMap: any;
  declare class TokenHighlighter {
    constructor(
      opt_indexStrategy: IIndexStrategy,
      opt_sanitizer: ISanitizer,
      opt_wrapperTagName: string
    ): this;
    highlight(text: string, tokens: Array<string>): string;
  }
}
