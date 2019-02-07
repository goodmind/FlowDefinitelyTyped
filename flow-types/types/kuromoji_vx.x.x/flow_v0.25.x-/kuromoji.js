declare module "kuromoji" {
  declare export interface ConnectionCosts {
    buffer: Int16Array;
    put(forward_id: number, backward_id: number, cost: number): void;
    get(forward_id: number, backward_id: number): number;
    loadConnectionCosts(connection_costs_buffer: Int16Array): void;
  }
  declare export interface DynamicDictionaries {
    trie: doublearray.DoubleArray;
    token_info_dictionary: TokenInfoDictionary;
    connection_costs: ConnectionCosts;
    unknown_dictionary: UnknownDictionary;
    loadTrie(
      base_buffer: Int32Array,
      check_buffer: Int32Array
    ): DynamicDictionaries;
  }
  declare export interface TokenInfoDictionary {
    buildDictionary(
      entries: any[][]
    ): {
      [word_id: number]: string
    };
    put(
      left_id: number,
      right_id: number,
      word_cost: number,
      surface_form: string,
      feature: string
    ): number;
    addMapping(source: number, target: number): void;
    targetMapToBuffer(): Uint8Array;
    loadDictionary(array_buffer: Uint8Array): TokenInfoDictionary;
    loadPosVector(array_buffer: Uint8Array): TokenInfoDictionary;
    loadTargetMap(array_buffer: Uint8Array): TokenInfoDictionary;
    getFeatures(token_info_id_str: string): string;
  }
  declare export type UnknownDictionary = TokenInfoDictionary;
  declare export interface ByteBuffer {
    buffer: Uint8Array;
    position: number;
    size(): number;
    reallocate(): void;
    shrink(): Uint8Array;
    put(b: number): void;
    get(index: number): number;
    putShort(num: number): void;
    getShort(index: number): number;
    putInt(num: number): void;
    getInt(index: number): number;
    readInt(): number;
    putString(str: string): void;
    getString(index: number): string;
  }
  declare export interface DictionaryBuilder {
    tid_entries: string[];
    unk_entries: string[];
    addTokenInfoDictionary(text: string): DictionaryBuilder;
    costMatrix(matrix_text: string): DictionaryBuilder;
    charDef(char_text: string): DictionaryBuilder;
    unkDef(text: string): DictionaryBuilder;
    build(): DynamicDictionaries;
    buildTokenInfoDictionary(): {
      trie: doublearray.DoubleArray,
      token_info_dictionary: TokenInfoDictionary
    };
    buildUnknownDictionary(): UnknownDictionary;
    buildConnectionCosts(): ConnectionCosts;
    buildDoubleArray(): doublearray.DoubleArray;
  }
  declare export interface Formatter<T> {
    formatEntry(
      word_id: number,
      position: number,
      type: string,
      features: string[]
    ): T;
    formatUnknownEntry(
      word_id: number,
      position: number,
      type: string,
      features: string[]
    ): T;
  }
  declare export type IpadicFormatter = Formatter<IpadicFeatures>;
  declare export interface IpadicFeatures {
    word_id: number;
    word_type: string;
    word_position: number;
    surface_form: string;
    pos: string;
    pos_detail_1: string;
    pos_detail_2: string;
    pos_detail_3: string;
    conjugated_type: string;
    conjugated_form: string;
    basic_form: string;
    reading?: string;
    pronunciation?: string;
  }
  declare export interface ViterbiBuilder {
    trie: doublearray.DoubleArray;
    token_info_dictionary: TokenInfoDictionary;
    unknown_dictionary: UnknownDictionary;
    build(sentence_str: string): ViterbiLattice;
  }
  declare export interface ViterbiLattice {
    append(node: ViterbiNode): void;
    appendEos(): void;
  }
  declare export interface ViterbiNode {
    name: string;
    cost: number;
    start_pos: number;
    length: number;
    left_id: number;
    right_id: number;
    prev: ViterbiNode;
    surface_form: string;
    shortest_cost: number;
    type: string;
  }
  declare export interface ViterbiSearcher {
    connection_costs: ConnectionCosts;
    search(lattice: ViterbiLattice): ViterbiNode[];
    forward(lattice: ViterbiLattice): ViterbiLattice;
    backward(lattice: ViterbiLattice): ViterbiNode[];
  }
  declare export interface TokenizerStatic {
    splitByPunctuation(input: string): string[];
  }
  declare export interface Tokenizer<T> {
    token_info_dictionary: TokenInfoDictionary;
    unknown_dictionary: UnknownDictionary;
    viterbi_builder: ViterbiBuilder;
    viterbi_searcher: ViterbiSearcher;
    formatter: Formatter<T>;
    tokenize(text: string): T[];
    getLattice(text: string): ViterbiLattice;
  }
  declare export interface TokenizerBuilder<T> {
    build(callback: (err: Error, tokenizer: Tokenizer<T>) => void): void;
  }
  declare export interface TokenizerBuilderOption {
    dicPath?: string;
  }
  declare export function builder(
    option: TokenizerBuilderOption
  ): TokenizerBuilder<IpadicFeatures>;

  declare export function dictionaryBuilder(): DictionaryBuilder;
}
