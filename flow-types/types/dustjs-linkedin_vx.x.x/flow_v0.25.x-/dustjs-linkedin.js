declare module "dustjs-linkedin" {
  /**
   * A template compiled into a js function.
   */
  declare export interface Template {
    (chk: Chunk, ctx: Context): Chunk;
  }
  declare export interface Chunk {
    /**
     * Writes data to this chunk's buffer.
     */
    write(data: string): Chunk;

    /**
     * Writes data to this chunk's buffer and marks it as flushable. This method must be called on any chunks created via chunk.map. Do not call this method on a handler's main chunk -- dust.render and dust.stream take care of this for you.
     */
    end(data: string): Chunk;

    /**
     * Creates a new chunk and passes it to callback. Use map to wrap asynchronous functions and to partition the template for streaming.
     */
    map(callback: (chunk: Chunk) => any): Chunk;

    /**
     * Convenience method to apply filters to a stream.
     */
    tap(callback: (value: any) => any): Chunk;

    /**
     * Removes the head tap function from the list.
     */
    untap(): Chunk;

    /**
     * Renders a template block, such as a default block or an else block.
     */
    render(body: any, context: Context): Chunk;

    /**
     * Sets an error on this chunk and immediately flushes the output.
     */
    setError(err: any): Chunk;
  }
  declare export interface Context {
    /**
     * Retrieves the value at key from the context stack.
     */
    get(key: string): any;

    /**
     * Pushes an arbitrary value onto the context stack and returns a new context instance. Specify index and/or length to enable enumeration helpers.
     */
    push(head: any, idx?: number, len?: number): Context;

    /**
     * Returns a new context instance consisting only of the value at head, plus any previously defined global object.
     */
    rebase(head: any): Context;

    /**
     * Returns the head of the context stack.
     */
    current(): any;
  }
  declare export interface Stream {
    flush(): void;
    emit(evt: string, data: any): void;
    on(evt: string, callback: (data?: any) => any): this;
    pipe(stream: Stream): Stream;
  }

  /**
   * register a template into the cache.
   * @param name the unique template name.
   * @param tmpl the template function.
   */
  declare export function register(name: string, tmpl: Template): void;

  /**
   * compile a template body into a string of JavaScript source code
   * @param source the template string
   * @param name the name used to register the compiled template into the internal cache. See render().
   * @strip strip whitespaces from the output. Defaults to false.
   */
  declare export function compile(
    source: string,
    name: string,
    strip?: boolean
  ): string;

  /**
   * Compiles source directly into a JavaScript function that takes a context and an optional callback (see dust.renderSource). Registers the template under [name] if this argument is supplied.
   * @param source the template string
   * @param name the template name (optional).
   */
  declare export function compileFn(source: string, name?: string): Template;

  /**
   * Evaluates a compiled source string.
   */
  declare export function loadSource(compiled: string): Template;

  /**
   * Renders the named template and calls callback on completion.context may be a plain object or an instance of dust.Context.
   * @param name the template name.
   * @param context a plain object or an instance of dust.Context.
   */
  declare export function render(
    name: string,
    context: any,
    callback: (err: any, out: string) => any
  ): void;

  declare export function render(
    name: string,
    context: Context,
    callback: (err: any, out: string) => any
  ): void;

  /**
   * Compiles and renders source, invoking callback on completion. If no callback is supplied this function returns a Stream object. Use this function when precompilation is not required.
   * @param source the template string.
   * @param context a plain object or an instance of dust.Context.
   * @param callback (optional). If supplied the callback will be called passing the result string. If omitted, renderSource() will return a dust.Stream object.
   */
  declare export function renderSource(source: string, context: any): Stream;

  declare export function renderSource(
    source: string,
    context: Context
  ): Stream;

  declare export function renderSource(
    source: string,
    context: any,
    callback: (err: any, out: string) => any
  ): void;

  declare export function renderSource(
    source: string,
    context: Context,
    callback: (err: any, out: string) => any
  ): void;

  /**
   * Streams the named template. context may be a plain object or an instance of dust.Context. Returns an instance of dust.Stream.
   * @param name the template name.
   * @param context a plain object or an instance of dust.Context.
   */
  declare export function stream(name: string, context: any): Stream;

  declare export function stream(name: string, context: Context): Stream;

  /**
   * Manufactures a dust.Context instance with its global object set to object.
   * @param global a plain object or an instance of dust.Context.
   */
  declare export function makeBase(global: any): Context;

  declare export function makeBase(global: Context): Context;

  declare export function escapeHtml(html: string): string;

  declare export function escapeJs(js: string): string;

  declare var helpers: {
    [key: string]: (chk: Chunk, ctx: Context, bodies?: any, params?: any) => any
  };
  declare var filters: {
    [key: string]: (value: string) => string
  };
}
