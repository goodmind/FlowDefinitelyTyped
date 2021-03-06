declare module "natural" {
  declare interface Tokenizer {
    tokenize(text: string): string[];
  }
  declare class WordTokenizer mixins Tokenizer {
    tokenize(text: string): string[];
  }
  declare class AggressiveTokenizer mixins Tokenizer {
    tokenize(text: string): string[];
  }
  declare class TreebankWordTokenizer mixins Tokenizer {
    tokenize(text: string): string[];
  }
  declare interface RegexTokenizerOptions {
    pattern: RegExp;
    discardEmpty?: boolean;
  }
  declare class RegexpTokenizer mixins Tokenizer {
    constructor(options: RegexTokenizerOptions): this;
    tokenize(text: string): string[];
  }
  declare class WordPunctTokenizer mixins Tokenizer {
    tokenize(text: string): string[];
  }
  declare function JaroWinklerDistance(
    s1: string,
    s2: string,
    dt?: number
  ): number;

  declare function LevenshteinDistance(
    source: string,
    target: string,
    options?: any
  ): number;

  declare function DiceCoefficient(str1: string, str2: string): number;

  declare interface Stemmer {
    stem(token: string): string;
  }
  declare var PorterStemmer: {
    stem(token: string): string
  };
  declare var PorterStemmerRu: {
    stem(token: string): string
  };
  declare var PorterStemmerEs: {
    stem(token: string): string
  };
  declare var PorterStemmerFa: {
    stem(token: string): string
  };
  declare var PorterStemmerFr: {
    stem(token: string): string
  };
  declare var PorterStemmerIt: {
    stem(token: string): string
  };
  declare var PorterStemmerNo: {
    stem(token: string): string
  };
  declare var PorterStemmerPt: {
    stem(token: string): string
  };
  declare var LancasterStemmer: {
    stem(token: string): string
  };
  declare interface BayesClassifierCallback {
    (err: any, classifier: any): void;
  }
  declare class BayesClassifier {
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): string[];
    save(filename: string, callback: BayesClassifierCallback): void;
    static load(
      filename: string,
      stemmer: Stemmer,
      callback: BayesClassifierCallback
    ): void;
    static restore(classifier: any, stemmer?: Stemmer): BayesClassifier;
  }
  declare interface LogisticRegressionClassifierCallback {
    (err: any, classifier: any): void;
  }
  declare class LogisticRegressionClassifier {
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): string[];
    save(
      filename: string,
      callback: LogisticRegressionClassifierCallback
    ): void;
    static load(
      filename: string,
      stemmer: Stemmer,
      callback: LogisticRegressionClassifierCallback
    ): void;
    static restore(
      classifier: any,
      stemmer?: Stemmer
    ): LogisticRegressionClassifier;
  }
  declare interface Phonetic {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
  }
  declare var Metaphone: {
    compare(stringA: string, stringB: string): boolean,
    process(token: string, maxLength?: number): string
  };
  declare var SoundEx: {
    compare(stringA: string, stringB: string): boolean,
    process(token: string, maxLength?: number): string
  };
  declare var DoubleMetaphone: {
    compare(stringA: string, stringB: string): boolean,
    process(token: string, maxLength?: number): string[]
  };
  declare class NounInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
  }
  declare var CountInflector: {
    nth(i: number): string
  };
  declare class PresentVerbInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
  }
  declare var NGrams: {
    bigrams(
      sequence: string,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    bigrams(
      sequence: string[],
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    trigrams(
      sequence: string,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    trigrams(
      sequence: string[],
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    ngrams(
      sequence: string,
      n: number,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    ngrams(
      sequence: string[],
      n: number,
      startSymbol?: string,
      endSymbol?: string
    ): string[][]
  };
  declare var NGramsZH: {
    bigrams(
      sequence: string,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    bigrams(
      sequence: string[],
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    trigrams(
      sequence: string,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    trigrams(
      sequence: string[],
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    ngrams(
      sequence: string,
      n: number,
      startSymbol?: string,
      endSymbol?: string
    ): string[][],
    ngrams(
      sequence: string[],
      n: number,
      startSymbol?: string,
      endSymbol?: string
    ): string[][]
  };
  declare interface TfIdfCallback {
    (i: number, measure: number): void;
  }
  declare interface TfIdfTerm {
    term: string;
    tfidf: number;
  }
  declare class TfIdf {
    constructor(deserialized?: any): this;
    addDocument(document: string, key?: string, restoreCache?: boolean): void;
    addDocument(document: string[], key?: string, restoreCache?: boolean): void;
    addFileSync(
      path: string,
      encoding?: string,
      key?: string,
      restoreCache?: boolean
    ): void;
    tfidf(terms: string, d: number): void;
    tfidfs(terms: string, callback: TfIdfCallback): void;
    tfidfs(terms: string[], callback: TfIdfCallback): void;
    listTerms(d: number): TfIdfTerm[];
  }
  declare class Trie {
    constructor(caseSensitive?: boolean): this;
    addString(text: string): boolean;
    addStrings(strings: string[]): void;
    contains(token: string): boolean;
    findPrefix(text: string): string[];
    findMatchesOnPath(text: string): string[];
    keysWithPrefix(text: string): string[];
  }
  declare class EdgeWeightedDigraph {
    add(start: number, end: number, weight: number): void;
    v(): number;
    e(): number;
  }
  declare class ShortestPathTree {
    constructor(diagraph: EdgeWeightedDigraph, startVertex: number): this;
    getDistTo(vertex: number): number;
    hasDistTo(vertex: number): boolean;
    pathTo(vertex: number): number[];
  }
  declare class LongestPathTree {
    constructor(diagraph: EdgeWeightedDigraph, startVertex: number): this;
    getDistTo(vertex: number): number;
    hasDistTo(vertex: number): boolean;
    pathTo(vertex: number): number[];
  }
  declare interface WordNetLookupResults {
    synsetOffset: number;
    pos: string;
    lemma: string;
    synonyms: string[];
    gloss: string;
  }
  declare interface WordNetLookupCallback {
    (results: WordNetLookupResults[]): void;
  }
  declare interface WordNetGetCallback {
    (results: WordNetLookupResults): void;
  }
  declare class WordNet {
    constructor(filename?: string): this;
    lookup(word: string, callback: WordNetLookupCallback): void;
    get(synsetOffset: number, pos: string, callback: WordNetGetCallback): void;
  }
  declare class Spellcheck {
    constructor(wordlist: string[]): this;
    isCorrect(word: string): boolean;
    getCorrections(word: string, maxDistance?: number): string[];
  }
  declare class Predicate {
    constructor(name: string, parameter1: string, parameter2?: string): this;
    name: string;
    parameter1: string;
    parameter2: string;
    function: (
      tagged_sentence: string[][],
      i: number,
      parameter: string
    ) => boolean;
    evaluate(tagged_sentence: string[][], position: number): boolean;
  }
  declare class TransformationRule {
    constructor(
      c1: string,
      c2: string,
      predicate: string,
      parameter1: string,
      parameter2?: string
    ): this;
    literal: string[];
    predicate: Predicate;
    old_category: string;
    new_category: string;
    apply(tagged_sentence: string[][], position: number): void;
  }
  declare class RuleSet {
    constructor(filename: string): this;
    rules: TransformationRule[];
  }
  declare class Lexicon {
    constructor(filename: string, defaultCategory: string): this;
    defaultCategory: string;
    parseLexicon(data: string): void;
    tagWord(word: string): string[];
  }
  declare class BrillPOSTagger {
    constructor(lexicon: Lexicon, ruleSet: RuleSet): this;
    lexicon: Lexicon;
    ruleSet: RuleSet;
    tag(sentence: string[]): string[][];
  }
}
