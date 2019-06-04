declare module "kythe" {
  /**
   * A VName (Vector Name) for a node in the Kythe schema consists of:
   *   - `signature`: a unique, opaque signature for a node
   *   - `corpus`: a collection of related files the node is defined in
   *   - `root`: a label denoting a distinct subset of the corpus
   *   - `path`: the relative path of the file containing the node
   *   - `language`: programming language the node belongs to
   */
  declare export interface VName {
    signature: string;
    corpus: string;
    root: string;
    path: string;
    language: string;
  }

  /**
   * An Entry in the Kythe schema is either a Fact or an Edge that describes at least one node.
   */
  declare export interface Entry {
    source: VName;
    label: string;
  }

  /**
   * A Fact is an Entry that also has a fact `value`.
   */
  declare export type Fact = {
    value: string
  } & Entry;

  /**
   * An Edge is an Entry that also has a `target` and an edge `kind`.
   */
  declare export type Edge = {
    target: VName,
    kind: string
  } & Entry;
}
