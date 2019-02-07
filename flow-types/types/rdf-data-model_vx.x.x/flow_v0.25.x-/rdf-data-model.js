declare module "rdf-data-model" {
  import typeof * as RDF from "rdf-js";

  declare export var defaultGraphInstance: RDF.DefaultGraph;
  declare export function namedNode(value: string): RDF.NamedNode;

  declare export function blankNode(value?: string): RDF.BlankNode;

  declare export function literal(
    value: string,
    languageOrDatatype?: string | RDF.NamedNode
  ): RDF.Literal;

  declare export function variable(value: string): RDF.Variable;

  declare export function defaultGraph(): RDF.DefaultGraph;

  declare export function triple(
    subject: RDF.Term,
    predicate: RDF.Term,
    object: RDF.Term
  ): RDF.Quad;

  declare export function quad(
    subject: RDF.Term,
    predicate: RDF.Term,
    object: RDF.Term,
    graph?: RDF.Term
  ): RDF.Quad;
}
