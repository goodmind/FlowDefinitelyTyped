declare module "n3" {
  import typeof * as fs from "fs";

  import typeof * as stream from "stream";

  import typeof * as RDF from "rdf-js";

  import type { EventEmitter } from "events";

  declare export interface Prefixes<I = RDF.NamedNode> {
    [key: string]: I;
  }
  declare export type Term =
    | NamedNode
    | BlankNode
    | AST$Literal
    | Variable
    | DefaultGraph;
  declare export type PrefixedToIri = (suffix: string) => RDF.NamedNode;
  declare export class NamedNode mixins RDF.NamedNode {
    termType: "NamedNode";
    value: string;
    constructor(iri: string): this;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(notification$type: any): void;
  }
  declare export class BlankNode mixins RDF.BlankNode {
    static nextId: number;
    termType: "BlankNode";
    value: string;
    constructor(skin$name: string): this;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(notification$type: any): void;
  }
  declare export class Variable mixins RDF.Variable {
    termType: "Variable";
    value: string;
    constructor(skin$name: string): this;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(notification$type: any): void;
  }
  declare export class Literal mixins RDF.AST$Literal {
    static langStringDatatype: NamedNode;
    termType: "Literal";
    value: string;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(notification$type: any): void;
    language: string;
    datatype: NamedNode;
    datatypeString: string;
    constructor(id: string): this;
  }
  declare export class DefaultGraph mixins RDF.DefaultGraph {
    termType: "DefaultGraph";
    value: "";
    constructor(): this;
    id: string;
    toJSON(): {};
    equals(other: RDF.Term): boolean;
    static subclass(notification$type: any): void;
  }
  declare export type Quad_Subject = NamedNode | BlankNode | Variable;
  declare export type Quad_Predicate = NamedNode | Variable;
  declare export type Quad_Object =
    | NamedNode
    | AST$Literal
    | BlankNode
    | Variable;
  declare export type Quad_Graph =
    | DefaultGraph
    | NamedNode
    | BlankNode
    | Variable;
  declare export class BaseQuad mixins RDF.BaseQuad {
    constructor(
      subject: Term,
      predicate: Term,
      object: Term,
      graph?: Term
    ): this;
    subject: Term;
    predicate: Term;
    object: Term;
    graph: Term;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
  }
  declare export class Quad mixins BaseQuad, RDF.Quad {
    constructor(
      subject: Term,
      predicate: Term,
      object: Term,
      graph?: Term
    ): this;
    subject: Quad_Subject;
    predicate: Quad_Predicate;
    object: Quad_Object;
    graph: Quad_Graph;
    equals(other: RDF.BaseQuad): boolean;
    toJSON(): string;
  }
  declare export class Triple mixins Quad, RDF.Triple {}

  declare var npm$namespace$DataFactory: {
    namedNode: typeof DataFactory$namedNode,
    blankNode: typeof DataFactory$blankNode,
    literal: typeof DataFactory$literal,
    variable: typeof DataFactory$variable,
    defaultGraph: typeof DataFactory$defaultGraph,
    quad: typeof DataFactory$quad,
    triple: typeof DataFactory$triple
  };
  declare function DataFactory$namedNode(value: string): NamedNode;

  declare function DataFactory$blankNode(value?: string): BlankNode;

  declare function DataFactory$literal(
    value: string | number,
    languageOrDatatype?: string | RDF.NamedNode
  ): AST$Literal;

  declare function DataFactory$variable(value: string): Variable;

  declare function DataFactory$defaultGraph(): DefaultGraph;

  declare function DataFactory$quad(
    subject: RDF.Quad_Subject,
    predicate: RDF.Quad_Predicate,
    object: RDF.Quad_Object,
    graph?: RDF.Quad_Graph
  ): Quad;

  declare function DataFactory$quad<Q_In: RDF.BaseQuad, Q_Out: BaseQuad>(
    subject: $ElementType<Q_In, "subject">,
    predicate: $ElementType<Q_In, "predicate">,
    object: $ElementType<Q_In, "object">,
    graph?: $ElementType<Q_In, "graph">
  ): Q_Out;

  declare function DataFactory$triple(
    subject: RDF.Quad_Subject,
    predicate: RDF.Quad_Predicate,
    object: RDF.Quad_Object
  ): Quad;

  declare function DataFactory$triple<Q_In: RDF.BaseQuad, Q_Out: BaseQuad>(
    subject: $ElementType<Q_In, "subject">,
    predicate: $ElementType<Q_In, "predicate">,
    object: $ElementType<Q_In, "object">
  ): Q_Out;

  declare export type ErrorCallback = (
    err: EventType$Error,
    result: any
  ) => void;
  declare export type QuadCallback<Q: BaseQuad = Quad> = (
    result: Sdk$Q
  ) => void;
  declare export type QuadPredicate<Q: BaseQuad = Quad> = (
    result: Sdk$Q
  ) => boolean;
  declare export type OTerm = RDF.Term | string | null;
  declare export type Logger = (
    message?: any,
    ...optionalParams: any[]
  ) => void;
  declare export interface BlankTriple<Q: RDF.BaseQuad = RDF.Quad> {
    predicate: $ElementType<Sdk$Q, "predicate">;
    object: $ElementType<Sdk$Q, "object">;
  }
  declare export interface ParserConstructor {
    new<Q: BaseQuad>(notification$options?: ParserOptions): N3Parser<Sdk$Q>;
    <Q: BaseQuad>(notification$options?: ParserOptions): N3Parser<Sdk$Q>;
  }
  declare export var convict$Parser: ParserConstructor;
  declare export interface ParserOptions {
    Util$format?: string;
    Util$prefixes?: string[];
    factory?: RDF.DataFactory;
    baseIRI?: string;
  }
  declare export type ParseCallback<Q: BaseQuad = Quad> = (
    log$error: EventType$Error,
    DataFactory$quad: Sdk$Q,
    Util$prefixes: Prefixes
  ) => void;
  declare export interface N3Parser<Q: BaseQuad = Quad> {
    Handlebars$parse(input: string): Sdk$Q[];
    Handlebars$parse(
      input: string,
      braintree$callback: ParseCallback<Sdk$Q>
    ): void;
  }
  declare export interface StreamParserConstructor {
    new<Q: BaseQuad>(
      notification$options?: ParserOptions
    ): N3StreamParser<Sdk$Q>;
    <Q: BaseQuad>(notification$options?: ParserOptions): N3StreamParser<Sdk$Q>;
  }
  declare export var StreamParser: StreamParserConstructor;
  declare export type N3StreamParser<Q: BaseQuad = Quad> = {
    readable: boolean,
    setEncoding(encoding: string | null): void,
    keyboardjs$pause(): this,
    keyboardjs$resume(): this,
    isPaused(): boolean,
    Minilog$pipe<T: NodeJS$WritableStream | RDF.Stream<Sdk$Q>>(
      destination: T,
      notification$options?: {
        end?: boolean
      }
    ): T,
    unpipe(destination?: NodeJS$WritableStream | RDF.Stream<Sdk$Q>): void,
    unshift(chunk: string | Buffer): void,
    colors$wrap(
      oldStream: NodeJS$ReadableStream | RDF.Stream<Sdk$Q>
    ): NodeJS$ReadableStream
  } & RDF.Stream<Sdk$Q> &
    NodeJS$WritableStream &
    RDF.Sink<Sdk$Q>;

  declare export interface WriterOptions {
    Util$format?: string;
    Util$prefixes?: Prefixes<RDF.NamedNode | string>;
    end?: boolean;
  }
  declare export interface WriterConstructor {
    new<Q: RDF.BaseQuad>(notification$options?: WriterOptions): N3Writer<Sdk$Q>;
    new<Q: RDF.BaseQuad>(
      fd: any,
      notification$options?: WriterOptions
    ): N3Writer<Sdk$Q>;
    <Q: RDF.BaseQuad>(notification$options?: WriterOptions): N3Writer<Sdk$Q>;
    <Q: RDF.BaseQuad>(
      fd: any,
      notification$options?: WriterOptions
    ): N3Writer<Sdk$Q>;
  }
  declare export var Writer: WriterConstructor;
  declare export interface N3Writer<Q: RDF.BaseQuad = RDF.Quad> {
    quadToString(
      subject: $ElementType<Sdk$Q, "subject">,
      predicate: $ElementType<Sdk$Q, "predicate">,
      object: $ElementType<Sdk$Q, "object">,
      graph?: $ElementType<Sdk$Q, "graph">
    ): string;
    quadsToString(quads: RDF.Quad[]): string;
    addQuad(
      subject: $ElementType<Sdk$Q, "subject">,
      predicate: $ElementType<Sdk$Q, "predicate">,
      object:
        | $ElementType<Sdk$Q, "object">
        | core$Array<$ElementType<Sdk$Q, "object">>,
      graph?: $ElementType<Sdk$Q, "graph">,
      done?: () => void
    ): void;
    addQuad(DataFactory$quad: RDF.Quad): void;
    addQuads(quads: RDF.Quad[]): void;
    addPrefix(
      Util$prefix: string,
      iri: RDF.NamedNode | string,
      done?: () => void
    ): void;
    addPrefixes(
      Util$prefixes: Prefixes<RDF.NamedNode | string>,
      done?: () => void
    ): void;
    end(err?: ioBroker$ErrorCallback, result?: string): void;
    blank(
      predicate: $ElementType<Sdk$Q, "predicate">,
      object: $ElementType<Sdk$Q, "object">
    ): BlankNode;
    blank(
      DataFactory$triple: BlankTriple | RDF.Quad | BlankTriple[] | RDF.Quad[]
    ): BlankNode;
    plugins$list(
      DataFactory$triple: core$Array<$ElementType<Sdk$Q, "object">>
    ): Quad_Object[];
  }
  declare export interface StreamWriterConstructor {
    new<Q: RDF.BaseQuad>(
      notification$options?: WriterOptions
    ): N3StreamWriter<Sdk$Q>;
    new<Q: RDF.BaseQuad>(
      fd: any,
      notification$options?: WriterOptions
    ): N3StreamWriter<Sdk$Q>;
    <Q: RDF.BaseQuad>(
      notification$options?: WriterOptions
    ): N3StreamWriter<Sdk$Q>;
    <Q: RDF.BaseQuad>(
      fd: any,
      notification$options?: WriterOptions
    ): N3StreamWriter<Sdk$Q>;
  }
  declare export var StreamWriter: StreamWriterConstructor;
  declare export type N3StreamWriter<
    Q: RDF.BaseQuad = Quad
  > = {} & NodeJS$ReadWriteStream & RDF.mapboxgl$Source;

  declare export type N3Store<
    Q_RDF: RDF.BaseQuad = RDF.Quad,
    Q_N3: BaseQuad = Quad
  > = {
    +__esri$size: number,
    addQuad(
      subject: $ElementType<Q_RDF, "subject">,
      predicate: $ElementType<Q_RDF, "predicate">,
      object:
        | $ElementType<Q_RDF, "object">
        | core$Array<$ElementType<Q_RDF, "object">>,
      graph?: $ElementType<Q_RDF, "graph">,
      done?: () => void
    ): void,
    addQuad(DataFactory$quad: Q_RDF): void,
    addQuads(quads: Q_RDF[]): void,
    removeQuad(
      subject: $ElementType<Q_RDF, "subject">,
      predicate: $ElementType<Q_RDF, "predicate">,
      object:
        | $ElementType<Q_RDF, "object">
        | core$Array<$ElementType<Q_RDF, "object">>,
      graph?: $ElementType<Q_RDF, "graph">,
      done?: () => void
    ): void,
    removeQuad(DataFactory$quad: Q_RDF): void,
    removeQuads(quads: Q_RDF[]): void,
    getQuads(
      subject: OTerm,
      predicate: OTerm,
      object: OTerm | OTerm[],
      graph: OTerm
    ): Quad[],
    countQuads(
      subject: OTerm,
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): number,
    array$forEach(
      braintree$callback: QuadCallback<Q_N3>,
      subject: OTerm,
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): void,
    array$every(
      braintree$callback: QuadPredicate<Q_N3>,
      subject: OTerm,
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): boolean,
    some(
      braintree$callback: QuadPredicate<Q_N3>,
      subject: OTerm,
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): boolean,
    getSubjects(
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): core$Array<$ElementType<Q_N3, "subject">>,
    forSubjects(
      braintree$callback: QuadCallback<Q_N3>,
      predicate: OTerm,
      object: OTerm,
      graph: OTerm
    ): void,
    getPredicates(
      subject: OTerm,
      object: OTerm,
      graph: OTerm
    ): core$Array<$ElementType<Q_N3, "predicate">>,
    forPredicates(
      braintree$callback: QuadCallback<Q_N3>,
      subject: OTerm,
      object: OTerm,
      graph: OTerm
    ): void,
    getObjects(
      subject: OTerm,
      predicate: OTerm,
      graph: OTerm
    ): core$Array<$ElementType<Q_N3, "object">>,
    forObjects(
      braintree$callback: QuadCallback<Q_N3>,
      subject: OTerm,
      predicate: OTerm,
      graph: OTerm
    ): void,
    getGraphs(
      subject: OTerm,
      predicate: OTerm,
      object: OTerm
    ): core$Array<$ElementType<Q_N3, "graph">>,
    forGraphs(
      braintree$callback: QuadCallback<Q_N3>,
      subject: OTerm,
      predicate: OTerm,
      object: OTerm
    ): void,
    createBlankNode(suggestedName?: string): BlankNode,
    DomUtil$remove(stream: stream.Stream): EventEmitter
  } & RDF.Sink;

  declare export interface StoreConstructor {
    new<Q_RDF: RDF.BaseQuad, Q_N3: BaseQuad>(
      triples?: Q_RDF[],
      notification$options?: Knockback$StoreOptions
    ): N3Store<Q_RDF, Q_N3>;
    <Q_RDF: RDF.BaseQuad, Q_N3: BaseQuad>(
      triples?: Q_RDF[],
      notification$options?: Knockback$StoreOptions
    ): N3Store<Q_RDF, Q_N3>;
  }
  declare export var Knockback$Store: StoreConstructor;
  declare export interface StoreOptions {
    factory?: RDF.DataFactory;
  }

  declare var npm$namespace$Util: {
    isNamedNode: typeof Util$isNamedNode,
    isBlankNode: typeof Util$isBlankNode,
    isLiteral: typeof Util$isLiteral,
    isVariable: typeof Util$isVariable,
    isDefaultGraph: typeof Util$isDefaultGraph,
    inDefaultGraph: typeof Util$inDefaultGraph,
    prefix: typeof Util$prefix,
    prefixes: typeof Util$prefixes
  };
  declare function Util$isNamedNode(value: RDF.Term | null): boolean;

  declare function Util$isBlankNode(value: RDF.Term | null): boolean;

  declare function Util$isLiteral(value: RDF.Term | null): boolean;

  declare function Util$isVariable(value: RDF.Term | null): boolean;

  declare function Util$isDefaultGraph(value: RDF.Term | null): boolean;

  declare function Util$inDefaultGraph(value: RDF.Quad): boolean;

  declare function Util$prefix(
    iri: RDF.NamedNode | string,
    factory?: RDF.DataFactory
  ): PrefixedToIri;

  declare function Util$prefixes(
    defaultPrefixes: Prefixes<RDF.NamedNode | string>,
    factory?: RDF.DataFactory
  ): (Util$prefix: string) => PrefixedToIri;
}
