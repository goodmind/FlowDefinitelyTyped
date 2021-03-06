declare module "falcor-json-graph" {
  declare export default typeof FalcorJsonGraph;

  declare var npm$namespace$FalcorJsonGraph: {
    ref: typeof FalcorJsonGraph$ref,
    atom: typeof FalcorJsonGraph$atom,
    error: typeof FalcorJsonGraph$error,
    pathValue: typeof FalcorJsonGraph$pathValue,
    pathInvalidation: typeof FalcorJsonGraph$pathInvalidation
  };

  /**
   * An atom allows you to treat a JSON value as atomic regardless of its type, ensuring that a JSON object or array is always returned in its entirety. The JSON value must be treated as immutable. Atoms can also be used to associate metadata with a JSON value. This metadata can be used to influence the way values are handled.
   */
  declare type FalcorJsonGraph$Atom = {
    $type: "atom",
    value: any
  } & Sentinel;

  declare type FalcorJsonGraph$Error = {
    $type: "error",
    value: any
  } & Sentinel;

  declare interface FalcorJsonGraph$InvalidPath {
    path: FalcorJsonGraph$PathSet;
    invalidate: boolean;
  }

  /**
   * A part of a {@link Path} that can be any JSON value type. All types are coerced to string, except null. This makes the number 1 and the string "1" equivalent.
   */
  declare type FalcorJsonGraph$Key = string | number | boolean;

  /**
   * A part of a {@link PathSet} that can be either a {@link Key}, {@link Range}, or Array of either.
   */
  declare type FalcorJsonGraph$KeySet =
    | FalcorJsonGraph$Key
    | FalcorJsonGraph$Range
    | Array<FalcorJsonGraph$Key | FalcorJsonGraph$Range>;

  /**
   * An ordered list of {@link Key}s that point to a value in a {@link JSONGraph}.
   */
  declare type FalcorJsonGraph$Path = Array<FalcorJsonGraph$Key>;

  /**
   * An ordered list of {@link KeySet}s that point to location(s) in the {@link JSONGraph}. It enables pointing to multiple locations in a more terse format than a set of {@link Path}s and is generally more efficient to evaluate.
   */
  declare type FalcorJsonGraph$PathSet = Array<FalcorJsonGraph$KeySet>;

  /**
   * A wrapper around a path and its value.
   */
  declare interface FalcorJsonGraph$PathValue {
    path: string | FalcorJsonGraph$PathSet;
    value: any;
  }

  /**
   * An envelope that wraps a JSON object.
   */
  declare interface FalcorJsonGraph$JSONEnvelope<T> {
    json: T;
  }

  /**
   * JavaScript Object Notation Graph (JSONGraph) is a notation for expressing graphs in JSON. For more information, see the [JSONGraph Guide]{@link http://netflix.github.io/falcor/documentation/jsongraph.html}.
   */
  declare type FalcorJsonGraph$JSONGraph = any;

  /**
   * An envelope that wraps a {@link JSONGraph} fragment.
   */
  declare interface FalcorJsonGraph$JSONGraphEnvelope {
    jsonGraph: FalcorJsonGraph$JSONGraph;
    paths?: Array<FalcorJsonGraph$PathSet>;
    invalidate?: Array<FalcorJsonGraph$PathSet>;
  }

  /**
   * Describe a range of integers. Must contain either a "to" or "length" property.
   */
  declare interface FalcorJsonGraph$Range {
    from?: number;
    to?: number;
    length?: number;
  }

  declare type FalcorJsonGraph$Reference = {
    $type: "reference",
    value: FalcorJsonGraph$Path
  } & Sentinel;

  declare interface FalcorJsonGraph$Sentinel {
    $expires?: number;
  }

  declare function FalcorJsonGraph$ref(
    path: string | FalcorJsonGraph$PathSet,
    props?: FalcorJsonGraph$Sentinel
  ): FalcorJsonGraph$Reference;

  declare function FalcorJsonGraph$atom(
    value: any,
    props?: FalcorJsonGraph$Sentinel
  ): FalcorJsonGraph$Atom;

  declare function FalcorJsonGraph$error(
    errorValue: any,
    props?: FalcorJsonGraph$Sentinel
  ): FalcorJsonGraph$Error;

  declare function FalcorJsonGraph$pathValue(
    path: string | FalcorJsonGraph$PathSet,
    value: any
  ): FalcorJsonGraph$PathValue;

  declare function FalcorJsonGraph$pathInvalidation(
    path: string | FalcorJsonGraph$PathSet
  ): FalcorJsonGraph$InvalidPath;
}
