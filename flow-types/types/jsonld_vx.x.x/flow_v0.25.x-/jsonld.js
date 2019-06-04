declare module "jsonld" {
  import type {
    Context,
    JsonLd,
    Document,
    Url,
    JsonLdProcessor,
    RemoteDocument
  } from "./jsonld-spec";

  declare type MimeNQuad = "application/n-quads";
  declare type RdfDataSet = { [key: string]: any };
  declare type RdfOrString = RdfDataSet | string;
  declare type Callback<T> = (err: Error, res: T) => void;
  declare type DocCallback = Callback<JsonLd>;
  declare interface Options$DocLoader {
    documentLoader?: (
      url: Url,
      callback: (err: Error, remoteDoc: RemoteDocument) => void
    ) => Promise<RemoteDocument>;
  }

  declare type Options$Common = {
    base?: string,
    expandContext?: Context
  } & Options$DocLoader;

  declare interface Options$ExpMap {
    expansionMap?: (info: any) => any;
  }

  declare type Options$Compact = {
    compactArrays?: boolean,
    appropriate?: boolean,
    compactToRelative?: boolean,
    graph?: boolean,
    skipExpansion?: boolean,
    expansion?: boolean,
    framing?: boolean,
    compactionMap?: (info: any) => void
  } & Options$Common &
    Options$ExpMap;

  declare type Options$Expand = {
    keepFreeFloatingNodes?: boolean
  } & Options$Common &
    Options$ExpMap;

  declare type Options$Flatten = Options$Common;

  declare interface Options$Frame {
    embed?: "@last" | "@always" | "@never" | "@link";
    explicit?: boolean;
    requireAll?: boolean;
    omitDefault?: boolean;
  }

  declare type Options$Normalize = {
    algorithm?: "URDNA2015" | URGNA2012,
    skipExpansion?: boolean,
    expansion?: boolean,
    inputFormat?: MimeNQuad,
    format?: MimeNQuad,
    useNative?: boolean
  } & Options$Common;

  declare interface Options$FromRdf {
    format?: MimeNQuad;
    rdfParser?: any;
    useRdfType?: boolean;
    useNativeTypes?: boolean;
  }

  declare type Options$ToRdf = {
    skipExpansion?: boolean,
    format?: MimeNQuad,
    produceGeneralizedRdf?: boolean
  } & Options$Common;

  declare export function compact(
    input: Document,
    ctx: Context,
    options: Options$Compact,
    callback: DocCallback
  ): void;

  declare export function compact(
    input: Document,
    ctx: Context,
    callback: DocCallback
  ): void;

  declare export function compact(
    input: Document,
    ctx: Context,
    options?: Options$Compact
  ): Promise<JsonLd>;

  declare export function expand(
    input: Document,
    options: Options$Expand,
    callback: DocCallback
  ): void;

  declare export function expand(input: Document, callback: DocCallback): void;

  declare export function expand(
    input: Document,
    options?: Options$Expand
  ): Promise<JsonLd>;

  declare export function flatten(
    input: Document,
    ctx: Context | null,
    options: Options$Flatten,
    callback: DocCallback
  ): void;

  declare export function flatten(
    input: Document,
    ctx: Context | null,
    callback: DocCallback
  ): void;

  declare export function flatten(
    input: Document,
    ctx: Context | null,
    options?: Options$Flatten
  ): Promise<JsonLd>;

  declare export function frame(
    input: Document,
    frame: Document,
    options: Options$Frame,
    callback: DocCallback
  ): void;

  declare export function frame(
    input: Document,
    frame: Document,
    callback: DocCallback
  ): void;

  declare export function frame(
    input: Document,
    frame: Document,
    options?: Options$Frame
  ): Promise<JsonLd>;

  declare export function normalize(
    input: Document,
    options: Options$Normalize,
    callback: DocCallback
  ): void;

  declare export function normalize(
    input: Document,
    callback: DocCallback
  ): void;

  declare export function normalize(
    input: Document,
    options?: Options$Normalize
  ): Promise<JsonLd>;

  declare export function fromRDF(
    dataset: RdfOrString,
    options: Options$FromRdf,
    callback: DocCallback
  ): void;

  declare export function fromRDF(
    dataset: RdfOrString,
    callback: DocCallback
  ): void;

  declare export function fromRDF(
    dataset: RdfOrString,
    options?: Options$FromRdf
  ): Promise<JsonLd>;

  declare export function toRDF(
    input: Document,
    callback: Callback<RdfOrString>
  ): void;

  declare export function toRDF(
    input: Document,
    options: Options$ToRdf,
    callback: Callback<RdfOrString>
  ): void;

  declare export function toRDF(
    input: Document,
    options?: Options$ToRdf
  ): Promise<RdfOrString>;

  declare export var JsonLdProcessor: JsonLdProcessor;
  declare export {};
}
