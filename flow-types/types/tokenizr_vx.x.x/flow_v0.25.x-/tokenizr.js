declare module "tokenizr" {
  declare class Tokenizr {
    constructor(): this;

    /**
     * Configure a tokenization after-rule callback
     */
    after(action: Action): this;

    /**
     * Execute multiple alternative callbacks
     */
    alternatives(...alternatives: Array<() => any>): any;

    /**
     * Configure a tokenization before-rule callback
     */
    before(action: Action): this;

    /**
     * Open tokenization transaction
     */
    begin(): this;

    /**
     * Close (successfully) tokenization transaction
     */
    commit(): this;

    /**
     * Consume the current token (by expecting it to be a particular symbol)
     */
    consume(type: string, value: any): Token;

    /**
     * Configure debug operation
     */
    debug(enableDebug: boolean): this;

    /**
     * Determine depth of still open tokenization transaction
     */
    depth(): number;

    /**
     * Create an error message for the current position
     */
    error(message?: string): ParsingError;

    /**
     * Configure a tokenization finish callback
     */
    finish(action: (ctx: ActionContext) => void): this;

    /**
     * Provide (new) input string to tokenize
     */
    input(input: string): this;

    /**
     * Peek at the next token or token at particular offset
     */
    peek(offset?: number): Token;

    /**
     * Pop state
     */
    pop(): string;

    /**
     * Push state
     */
    push(state: string): this;

    /**
     * Reset the internal state
     */
    reset(): this;

    /**
     * Close (unsuccessfully) tokenization transaction
     */
    rollback(): this;

    /**
     * Configure a tokenization rule
     */
    rule(pattern: RegExp, action: RuleAction, name?: string): this;
    rule(
      state: string,
      pattern: RegExp,
      action: RuleAction,
      name: string
    ): this;

    /**
     * Skip one or more tokens
     */
    skip(len?: number): this;

    /**
     * Get/set state
     */
    state(): string;

    /**
     * Replaces the current state
     */
    state(state: string): this;

    /**
     * Set a tag
     */
    tag(tag: string): this;

    /**
     * Check whether tag is set
     */
    tagged(tag: string): boolean;

    /**
     * Determine and return next token
     */
    token(): Token | null;

    /**
     * Determine and return all tokens
     */
    tokens(): Token[];

    /**
     * Unset a tag
     */
    untag(tag: string): this;
    static ParsingError: typeof ParsingError;
    static ActionContext: typeof ActionContext;
    static Token: typeof Token;
  }
  declare type Action = (
    ctx: ActionContext,
    found: RegExpExecArray,
    rule: {
      state: string,
      pattern: RegExp,
      action: RuleAction,
      name: string
    }
  ) => void;
  declare type RuleAction = (
    ctx: ActionContext,
    found: RegExpExecArray
  ) => void;
  declare class ActionContext {
    constructor(e: any): this;

    /**
     * Accept current matching as a new token
     */
    accept(type: string, value?: any): this;

    /**
     * Store and retrieve user data attached to context
     */
    data(key: string, value?: any): any;

    /**
     * Mark current matching to be ignored
     */
    ignore(): this;

    /**
     * Retrieve information of current matching
     */
    info(): {
      line: number,
      column: number,
      pos: number,
      len: number
    };

    /**
     * Pop state
     */
    pop(): string;

    /**
     * Push state
     */
    push(state: string): this;

    /**
     * Rark current matching to be rejected
     */
    reject(): this;

    /**
     * Mark current matching to be repeated from scratch
     */
    repeat(): this;

    /**
     * Get/set state
     */
    state(): string;

    /**
     * Replaces the current state
     */
    state(state: string): this;

    /**
     * Immediately stop tokenization
     */
    stop(): this;

    /**
     * Set a tag
     */
    tag(tag: string): this;

    /**
     * Check whether tag is set
     */
    tagged(tag: string): boolean;

    /**
     * Unset a tag
     */
    untag(tag: string): this;
  }
  declare class ParsingError mixins Error {
    constructor(
      message: string,
      pos: number,
      line: number,
      column: number,
      input: string
    ): this;

    /**
     * Render a useful string representation
     */
    toString(): string;
  }
  declare class Token {
    constructor(
      type: string,
      value: any,
      text: string,
      pos?: number,
      line?: number,
      column?: number
    ): this;
    isA(type: string, value?: any): boolean;

    /**
     * Render a useful string representation
     */
    toString(): string;
  }
  declare export default typeof Tokenizr;
}
