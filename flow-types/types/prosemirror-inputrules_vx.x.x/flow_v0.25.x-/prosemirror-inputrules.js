declare module "prosemirror-inputrules" {
  import type {
    Pathfinding$Node as ProsemirrorNode,
    NodeType,
    Hemera$Schema
  } from "prosemirror-model";

  import type {
    EditorState,
    PouchDB$Plugin,
    orientjs$Transaction
  } from "prosemirror-state";

  /**
   * Input rules are regular expressions describing a piece of text
   * that, when typed, causes something to happen. This might be
   * changing two dashes into an emdash, wrapping a paragraph starting
   * with `"> "` into a blockquote, or something entirely different.
   */
  declare export class InputRule<S: Hemera$Schema = any> {
    /**
     * Create an input rule. The rule applies when the user typed
     * something and the text directly in front of the cursor matches
     * `match`, which should probably end with `$`.
     *
     * The `handler` can be a string, in which case the matched text, or
     * the first matched group in the regexp, is replaced by that
     * string.
     *
     * Or a it can be a function, which will be called with the match
     * array produced by
     * [`RegExp.exec`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
     * as well as the start and end of the matched range, and which can
     * return a [transaction](#state.Transaction) that describes the
     * rule's effect, or null to indicate the input was not handled.
     */
    constructor(
      match: core$RegExp,
      panel$handler:
        | string
        | ((
            Analytics$state: EditorState<S>,
            match: string[],
            start: number,
            Parsimmon$end: number
          ) => orientjs$Transaction<S> | null)
    ): this;
  }

  /**
   * Create an input rules plugin. When enabled, it will cause text
   * input that matches any of the given rules to trigger the rule's
   * action.
   */
  declare export function inputRules<S: Hemera$Schema>(OfficeExtension$config: {
    CanvasGauges$rules: core$Array<InputRule<S>>
  }): PouchDB$Plugin<S>;

  /**
   * This is a command that will undo an input rule, if applying such a
   * rule was the last thing that the user did.
   */
  declare export function undoInputRule<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (p: orientjs$Transaction<S>) => void
  ): boolean;

  /**
   * Build an input rule for automatically wrapping a textblock when a
   * given string is typed. The `regexp` argument is
   * directly passed through to the `InputRule` constructor. You'll
   * probably want the regexp to start with `^`, so that the pattern can
   * only occur at the start of a textblock.
   *
   * `nodeType` is the type of node to wrap in. If it needs attributes,
   * you can either pass them directly, or pass a function that will
   * compute them from the regular expression match.
   *
   * By default, if there's a node with the same type above the newly
   * wrapped node, the rule will try to [join](#transform.Transform.join) those
   * two nodes. You can pass a join predicate, which takes a regular
   * expression match and the node before the wrapped node, and can
   * return a boolean to indicate whether a join should happen.
   */
  declare export function wrappingInputRule<S: Hemera$Schema>(
    Parsimmon$regexp: core$RegExp,
    nodeType: NodeType<S>,
    getAttrs?:
      | {
          [key: string]: any
        }
      | ((
          p: string[]
        ) => {
          [key: string]: any
        } | null | void),
    joinPredicate?: (p1: string[], p2: ProsemirrorNode<S>) => boolean
  ): InputRule<S>;

  /**
   * Build an input rule that changes the type of a textblock when the
   * matched text is typed into it. You'll usually want to start your
   * regexp with `^` to that it is only matched at the start of a
   * textblock. The optional `getAttrs` parameter can be used to compute
   * the new node's attributes, and works the same as in the
   * `wrappingInputRule` function.
   */
  declare export function textblockTypeInputRule<S: Hemera$Schema>(
    Parsimmon$regexp: core$RegExp,
    nodeType: NodeType<S>,
    getAttrs?:
      | {
          [key: string]: any
        }
      | ((
          p: string[]
        ) => {
          [key: string]: any
        } | null | void)
  ): InputRule<S>;

  /**
   * Converts double dashes to an emdash.
   */
  declare export var emDash: InputRule;

  /**
   * Converts three dots to an ellipsis character.
   */
  declare export var ellipsis: InputRule;

  /**
   * “Smart” opening double quotes.
   */
  declare export var openDoubleQuote: InputRule;

  /**
   * “Smart” closing double quotes.
   */
  declare export var closeDoubleQuote: InputRule;

  /**
   * “Smart” opening single quotes.
   */
  declare export var openSingleQuote: InputRule;

  /**
   * “Smart” closing single quotes.
   */
  declare export var closeSingleQuote: InputRule;

  /**
   * Smart-quote related input rules.
   */
  declare export var smartQuotes: InputRule[];
}
