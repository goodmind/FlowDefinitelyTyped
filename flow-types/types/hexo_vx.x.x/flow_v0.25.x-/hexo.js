declare module "global" {
  declare var hexo: Hexo;
}
declare module "hexo" {
  import typeof * as EventEmitter from "events";

  import typeof * as moment from "moment";

  import type { ParsedArgs } from "minimist";

  import typeof * as Logger from "bunyan";

  import typeof * as underscore from "underscore";

  import typeof * as connect from "connect";

  import typeof * as Stream from "stream";

  import typeof * as util from "hexo-util";

  import typeof * as fs from "fs";

  declare interface HexoConfig {
    [key: string]: any;

    /**
     * The title of your website
     */
    +title: string;

    /**
     * The subtitle of your website
     */
    +subtitle: string;

    /**
     * The description of your website
     */
    +description: string;
    +author: string;

    /**
     * The language of your website. Use a 2-lettter ISO-639-1 code. Default is en.
     */
    +language: string;

    /**
     * The timezone of your website. Hexo uses the setting on your computer by default.
     * You can find the list of available timezones [here]{@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones} .
     * Some examples are `America/New_York` , `Japan` , and `UTC` .
     */
    +timezone: string;
    +url: string;

    /**
     * The root directory of your website
     */
    +root: string;

    /**
     * The permalink format of articles
     */
    +permalink: string;

    /**
     * Default values of each segment in permalink
     */
    +permalink_defaults: string | null;

    /**
     * Source folder. Where your content is stored
     */
    +source_dir: string;

    /**
     * Public folder. Where the static site will be generated
     */
    +public_dir: string;

    /**
     * Tag directory
     */
    +tag_dir: string;

    /**
     * Archive directory
     */
    +archive_dir: string;

    /**
     * Category directory
     */
    +category_dir: string;

    /**
     * Include code directory (subdirectory of source_dir)
     */
    +code_dir: string;

    /**
     * i18n directory
     */
    +i18n_dir: string;

    /**
     * Paths that will be copied to public raw, without being rendered. You can use glob expressions for path matching.
     */
    +skip_render: string | string[] | null;

    /**
     * The filename format for new posts
     */
    +new_post_name: string;

    /**
     * Default layout
     */
    +default_layout: string;

    /**
     * Transform titles into title case?
     */
    +titlecase: boolean;

    /**
     * Open external links in a new tab?
     */
    +external_link: boolean;

    /**
     * Transform filenames to 1 lower case; 2 upper case
     */
    +filename_case: number;

    /**
     * Display drafts?
     */
    +render_drafts: boolean;

    /**
     * Enable the Asset Folder?
     */
    +post_asset_folder: boolean;

    /**
     * Make links relative to the root folder?
     */
    +relative_link: boolean;

    /**
     * Display future posts?
     */
    +future: boolean;

    /**
     * Code block settings
     */
    +highlight: {
      +enable: boolean,
      +line_number: boolean,
      +auto_detect: boolean,
      +tab_replace: string | null
    };

    /**
     * Default category
     */
    +default_category: string;

    /**
     * Category slugs
     */
    +category_map: {
      [key: string]: string | number
    };

    /**
     * Tag slugs
     */
    +tag_map: {
      [key: string]: string | number
    };

    /**
     * Date format
     * https://momentjs.com/
     */
    +date_format: string;

    /**
     * Time format
     * https://momentjs.com/
     */
    +time_format: string;

    /**
     * The amount of posts displayed on a single page. 0 disables pagination
     */
    +per_page: number;

    /**
     * Pagination directory
     */
    +pagination_dir: string;

    /**
     * Theme name. false disables theming
     */
    +theme: string | false;

    /**
     * Theme configuration. Include any custom theme settings under this key to override theme defaults.
     */
    +theme_config: {
      [key: string]: string | number
    };

    /**
     * Deployment settings
     */
    +deploy: Hexo$extend$Deployer$Config | Hexo$extend$Deployer$Config | null;

    /**
     * Hexo by default ignores hidden files and folders, but setting this field will make Hexo process them
     */
    +include?: string[];

    /**
     * Hexo process will ignore files list under this field
     */
    +exclude?: string[];
    +ignore: string[];
  }
  declare interface Model<T> {
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    toArray(): T[];

    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    count(): number;

    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    forEach(fn: (v: T, i: number) => void): void;

    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    filter(fn: (v: T, i: number) => boolean): Model<T>;

    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    map<U>(fn: (v: T, i: number) => U): U[];
  }
  declare interface Site {
    posts: Model<Hexo$Locals$Post>;
    pages: Model<Hexo$Locals$Page>;
    categories: Model<Hexo$Locals$Category>;
    tags: Model<Hexo$Locals$Tag>;
    data: {
      [key: string]: any
    };
  }
  declare class Hexo mixins EventEmitter {
    /**
     * Create a Hexo instance.
     * @param base the root directory of the website, `base_dir` .
     * @param args an object containing the initialization options.
     */
    constructor(base?: string, args?: Hexo$InstanceOptions): this;

    /**
     * Load configuration and plugins.
     */
    init(): Promise<void>;

    /**
     * Loading all files in the `source` folder as well as the theme data.
     */
    load(fn?: (err: any, value: any) => void): Promise<any>;

    /**
     * The same things `load` does, but will also start watching for file changes continuously.
     */
    watch(fn?: (err: any, value: any) => void): Promise<any>;
    unwatch(): void;

    /**
     * Any console command can be called explicitly using the call method on the Hexo instance.
     */
    call(
      name: string,
      args?: any,
      fn?: (err: any, value: any) => void
    ): Promise<any>;
    call(name: string, fn?: (err: any, value: any) => void): Promise<any>;

    /**
     * You should call the `exit` method upon successful or unsuccessful completion of a console command.
     * This allows Hexo to exit gracefully and finish up important things such as saving the database.
     */
    exit(err?: any): Promise<void>;

    /**
     * Site settings in `_config.yml`
     */
    config: HexoConfig;
    theme: Hexo$Theme;
    source: Hexo$Box;
    post: Hexo$Post;
    render: Hexo$Render;

    /**
     * Local variables are used for template rendering, which is the `site` variable in templates.
     * https://hexo.io/api/locals
     */
    locals: Hexo$Locals;
    base_dir: string;

    /**
     * Public folder. Where the static site will be generated
     */
    public_dir: string;

    /**
     * Source folder. Where your content is stored
     */
    source_dir: string;
    plugin_dir: string;
    script_dir: string;
    scaffold_dir: string;
    theme_dir: string;
    theme_script_dir: string;
    config_path: string;
    env: {
      +args: ParsedArgs,
      +debug: boolean,
      +safe: boolean,
      +silent: boolean,
      +env: string,
      +version: string,
      +init: boolean
    };

    /**
     * Logger object
     * https://www.npmjs.com/package/bunyan
     */
    log: Logger;
    extend: {
      /**
       * The console forms the bridge between Hexo and its users. It registers and describes the available console commands.
       */
      +console: Hexo$extend$Console,

      /**
       * A deployer helps users quickly deploy their site to a remote server without complicated commands.
       */
      +deployer: Hexo$extend$Deployer,

      /**
       * A filter is used to modify some specified data. Hexo passes data to filters in sequence and the filters then modify the data one after the other.
       */
      +filter: Hexo$extend$Filter,

      /**
       * A generator builds routes based on processed files.
       */
      +generator: Hexo$extend$Generator,

      /**
       * A helper makes it easy to quickly add snippets to your templates. We recommend using helpers instead of templates when you’re dealing with more complicated code.
       */
      +helper: Hexo$extend$Helper,

      /**
       * A migrator helps users migrate from other systems to Hexo.
       */
      +migrator: Hexo$extend$Migrator,

      /**
       * A processor is used to process source files in the source folder.
       */
      +processor: Hexo$extend$Processor,

      /**
       * A renderer is used to render content.
       */
      +renderer: Hexo$extend$Renderer,

      /**
       * A tag allows users to quickly and easily insert snippets into their posts.
       */
      +tag: Hexo$extend$Tag
    };
    route: Hexo$Router;
    scaffold: Hexo$Scaffold;

    /**
     * Emitted before deployment begins.
     */
    on(ev: "deployBefore", fn: () => void): this;

    /**
     * Emitted after deployment finishes.
     */
    on(ev: "deployAfter", fn: () => void): this;

    /**
     * Emitted before Hexo exits.
     */
    on(ev: "exit", fn: (err: any) => void): this;

    /**
     * Emitted before generation begins.
     */
    on(ev: "generateBefore", fn: () => void): this;

    /**
     * Emitted after generation finishes.
     */
    on(ev: "generateAfter", fn: () => void): this;

    /**
     * Emitted after a new post has been created. This event returns the post data:
     */
    on(
      ev: "new",
      fn: (post: {
        path: string,
        content: string
      }) => void
    ): this;

    /**
     * Emitted before processing begins. This event returns a path representing the root directory of the box.
     */
    on(
      ev: "processBefore",
      fn: (type: $PropertyType<Hexo$Box$File, "type">, path: string) => void
    ): this;

    /**
     * Emitted after processing finishes. This event returns a path representing the root directory of the box.
     */
    on(
      ev: "processAfter",
      fn: (type: $PropertyType<Hexo$Box$File, "type">, path: string) => void
    ): this;

    /**
     * Emitted after initialization finishes.
     */
    on(ev: "ready", fn: () => void): this;
  }
  declare var Hexo: typeof npm$namespace$Hexo;

  declare var npm$namespace$Hexo: {
    extend: typeof npm$namespace$Hexo$extend
  };
  declare interface Hexo$InstanceOptions {
    debug?: boolean;
    safe?: boolean;
    silent?: boolean;
    config?: string;
  }

  declare interface Hexo$Locals {
    get(type: "posts"): Model<Hexo$Locals$Post>;
    get(type: "pages"): Model<Hexo$Locals$Page>;
    get(type: "categories"): Model<Hexo$Locals$Category>;
    get(type: "tags"): Model<Hexo$Locals$Tag>;

    /**
     * Get a Variable
     */
    get(type: string): any;

    /**
     * Set a Variable
     */
    set(type: string, fn: () => any): this;

    /**
     * Remove a Variable
     */
    remove(type: string): this;

    /**
     * Get All Variable
     */
    toObject(): any;

    /**
     * Invalidate the cache
     */
    invalidate(): this;
  }

  declare interface Hexo$Locals$Page {
    title: string;
    date: moment.Moment;
    updated?: moment.Moment;
    comments: boolean;
    layout: string;
    content: string;
    excerpt?: string;
    more?: string;
    source: string;
    full_source: string;
    path: string;
    permalink: string;
    prev?: null | Hexo$Locals$Page;
    next?: null | Hexo$Locals$Page;
    raw?: string;
    photos?: string[];
    link?: string;
    [key: string]: any;
  }

  declare type Hexo$Locals$Post = {
    published?: boolean,
    categories?: string[],
    tags: string[]
  } & Hexo$Locals$Page;

  declare interface Hexo$Locals$Tag {
    name: string;
    slug: string;
    path: string;
    permalink: string;
    posts: Model<Hexo$Locals$Post>;
    length: number;
  }

  declare type Hexo$Locals$Category = {
    parent: string
  } & Hexo$Locals$Tag;

  declare interface Hexo$extend$Console {
    register(
      name: string,
      desc: string,
      options: Hexo$extend$Console$Options,
      fn: (args: ParsedArgs) => void
    ): void;
    register(
      name: string,
      options: Hexo$extend$Console$Options,
      fn: (args: ParsedArgs) => void
    ): void;
    register(name: string, desc: string, fn: (args: ParsedArgs) => void): void;
    register(name: string, fn: (args: ParsedArgs) => void): void;
  }

  declare interface Hexo$extend$Console$Options {
    /**
     * The usage of a console command.
     */
    usage?: string;

    /**
     * The description of each argument of a console command.
     */
    arguments?: Array<{
      name: string,
      desc: string
    }>;

    /**
     * The description of each option of a console command.
     */
    options?: Array<{
      name: string,
      desc: string
    }>;

    /**
     * More detailed information about a console command.
     */
    desc?: string;
  }

  declare interface Hexo$extend$Deployer {
    register(
      name: string,
      fn: (args: Hexo$extend$Deployer$Config) => void
    ): void;
  }

  declare interface Hexo$extend$Deployer$Config {
    +type: string | void;
    [key: string]: any;
  }

  declare interface Hexo$extend$Filter {
    register(
      type: string,
      fn: (data: any, ...args: any[]) => any,
      priority?: number
    ): void;

    /**
     * Executed before a post is rendered. Refer to post rendering to learn the execution steps.
     */
    register(
      type: "before_post_render",
      fn: (data: {
        content: string,
        [key: string]: any
      }) => {
        content: string,
        [key: string]: any
      } | void,
      priority?: number
    ): void;

    /**
     * Executed after a post is rendered. Refer to post rendering to learn the execution steps.
     */
    register(
      type: "after_post_render",
      fn: (data: {
        content: string,
        [key: string]: any
      }) => {
        content: string,
        [key: string]: any
      } | void,
      priority?: number
    ): void;

    /**
     * Executed before Hexo is about to exit – this will run right after `hexo.exit` is called.
     */
    register(type: "before_exit", fn: () => void, priority?: number): void;

    /**
     * Executed before generation begins.
     */
    register(
      type: "before_generate",
      fn: (data: any) => any,
      priority?: number
    ): void;

    /**
     * Executed after generation finishes.
     */
    register(type: "after_generate", fn: () => void, priority?: number): void;

    /**
     * Modify [local variables](https://hexo.io/docs/variables) in templates.
     */
    register(
      type: "template_locals",
      fn: (locals: TemplateLocals) => TemplateLocals | void,
      priority?: number
    ): void;

    /**
     * Executed after Hexo is initialized – this will run right after `hexo.init` completes.
     */
    register(type: "after_init", fn: () => void, priority?: number): void;

    /**
     * Executed when creating a post to determine the path of new posts.
     */
    register(
      type: "new_post_path",
      fn: (data: Hexo$Post$Data, replace: boolean | void) => void,
      priority?: number
    ): void;

    /**
     * Used to determine the permalink of posts.
     */
    register(
      type: "post_permalink",
      fn: (permalink: string) => string,
      priority?: number
    ): void;

    /**
     * Executed after rendering finishes. You can see rendering for more info.
     */
    register(
      type: "after_render:html",
      fn: (
        result: string,
        data: {
          path: string,
          text: string,
          [key: string]: any
        }
      ) => string | void,
      priority?: number
    ): void;

    /**
     * Executed after generated files and cache are removed with hexo clean command.
     */
    register(type: "after_clean", fn: () => void, priority?: number): void;

    /**
     * Add middleware to the server. app is a Connect instance.
     */
    register(
      type: "server_middleware",
      fn: (app: connect.Server) => connect.Server | void,
      priority?: number
    ): void;
    unregister(type: string, fn: (...args: any[]) => any): void;
    exec(type: string, data?: any, options?: Hexo$extend$Filter$Options): any;
    execSync(
      type: string,
      data?: any,
      options?: Hexo$extend$Filter$Options
    ): any;
  }

  declare interface Hexo$extend$Filter$Options {
    /**
     * `hexo` object.
     */
    context?: Hexo;

    /**
     * Arguments. This must be an array.
     */
    args?: any[];
  }

  declare interface Hexo$extend$Generator {
    register(
      name: string,
      fn: (
        locals: Site
      ) => Hexo$extend$Generator$Return | Hexo$extend$Generator$Return[]
    ): void;
  }

  declare interface Hexo$extend$Generator$Return {
    /**
     * Path not including the prefixing `/` .
     */
    path: string;

    /**
     * Layout. Specify the layouts for rendering. The value can be a string or an array. If it’s ignored then the route will return data directly.
     */
    layout: string | string[];
    data: any;
  }

  declare interface Hexo$extend$Helper {
    register(name: string, fn: (...args: any[]) => any): void;
  }

  declare interface Hexo$extend$Migrator {
    register(
      name: string,
      fn: (args: ParsedArgs, fn: (err: any) => void) => void
    ): void;
  }

  declare interface Hexo$extend$Processor {
    register(
      pattern: RegExp | string | ((str: string) => any),
      fn: (file: Hexo$Box$File) => void
    ): void;
    register(fn: (file: Hexo$Box$File) => void): void;
  }

  declare interface Hexo$extend$Renderer {
    register(
      srcExt: string,
      outExt: string,
      fn: (data: HexoRendererData, options: any) => string,
      sync: true
    ): void;
    register(
      srcExt: string,
      outExt: string,
      fn: (data: HexoRendererData, options: any) => Promise<string>,
      sync: false
    ): void;
    register(
      srcExt: string,
      outExt: string,
      fn: (data: HexoRendererData, options: any) => Promise<string>
    ): void;
  }

  declare interface Hexo$extend$Tag {
    register(
      name: string,
      fn: (args: string[], content: string | void) => string,
      options?: Hexo$extend$Tag$Options
    ): void;
  }

  declare interface Hexo$extend$Tag$Options {
    ends?: boolean;
    async?: boolean;
  }

  declare interface Hexo$Router {
    /**
     * The `get` method returns a `Stream`.
     */
    get(path: string): Hexo$Router$RouteStream | void;

    /**
     * The `set` method takes a string, a `Buffer` or a function.
     */
    set(
      path: string,
      data: string | Buffer | util.Pattern<boolean> | Hexo$Router$Data
    ): this;

    /**
     * Remove a Path
     */
    remove(path: string): this;

    /**
     * Get the List of Routes
     */
    list(): string[];

    /**
     * The `format` method transforms a string to a valid path.
     */
    format(path: string): string;
  }

  declare interface Hexo$Router$Data {
    data: string | Buffer | Hexo$Router$Callback;
    modified: boolean;
  }

  declare type Hexo$Router$RouteStream = {
    +modified: boolean
  } & Stream.Readable;

  declare type Hexo$Router$Callback =
    | ((err: any, result: string) => void)
    | (() => Promise<string>);

  declare interface Hexo$Scaffold {
    /**
     * Get a Scaffold
     */
    get(name: string, fn?: (err: any, result: string) => void): Promise<string>;

    /**
     * Set a Scaffold
     */
    set(name: string, content: string, fn?: (err: any) => void): Promise<void>;

    /**
     * Remove a Scaffold
     */
    remove(name: string, fn?: (err: any) => void): Promise<void>;
  }

  declare type Hexo$Box = {
    /**
     * Loads all files in the folder.
     */
    process(fn: (err: any) => void): Promise<void>,

    /**
     * Loads all files in the folder and start watching for file changes.
     */
    watch(fn?: (err: any) => void): Promise<void>,

    /**
     * Stop watching.
     */
    unwatch(): void,

    /**
     * A processor is an essential element of `Box` and is used to process files.
     * You can use path matching as described above to restrict what exactly the processor should process.
     * Register a new processor with the `addProcessor` method.
     */
    addProcessor(
      pattern: string | RegExp | util.Pattern<boolean>,
      fn: (file: Hexo$Box$File) => void
    ): void
  } & EventEmitter;

  declare interface Hexo$Box$File {
    /**
     * Full path of the file
     */
    +source: string;

    /**
     * Relative path to the box of the file
     */
    +path: string;

    /**
     * File type. The value can be `create` , `update` , `skip`, `delete` .
     */
    +type: "create" | "update" | "skip" | "delete";

    /**
     * The information from path matching.
     */
    +params: any;

    /**
     * Read a file
     */
    read(
      option?: {
        encoding?: string | null,
        flag?: string
      },
      fn?: (err: any, result: string | Buffer) => void
    ): Promise<string | Buffer>;
    read(
      fn?: (err: any, result: string | Buffer) => void
    ): Promise<string | Buffer>;

    /**
     * Read a file synchronously
     */
    readSync(option?: {
      encoding?: string | null,
      flag?: string
    }): string | Buffer;

    /**
     * Read the status of a file
     */
    stat(fn?: (err: any, result: fs.Stats) => void): Promise<fs.Stats>;

    /**
     * Read the status of a file synchronously
     */
    statSync(): fs.Stats;

    /**
     * Render a file
     */
    render(fn?: (err: any, result: string) => void): Promise<string>;
    render(
      option?: any,
      fn?: (err: any, result: string) => void
    ): Promise<string>;

    /**
     * Render a file synchronously
     */
    renderSync(option?: any): string;
  }

  declare interface Hexo$Render {
    render(
      data: Hexo$Render$Data,
      option?: any,
      fn?: (err: any, result: string) => void
    ): Promise<string>;
    render(
      data: Hexo$Render$Data,
      fn?: (err: any, result: string) => void
    ): Promise<string>;
    renderSync(data: Hexo$Render$Data, option?: any): string;

    /**
     * Check whether a file is renderable synchronously.
     */
    isRenderable(path: string): boolean;

    /**
     * Check whether a file is renderable.
     */
    isRenderableSync(path: string): boolean;

    /**
     * Get the Output Extension
     */
    getOutput(path: string): string;
  }

  declare interface Hexo$Render$Data {
    text?: string;
    engine?: string;
    path?: string;
  }

  declare interface Hexo$Post {
    /**
     * Create a Post
     */
    create(
      data: Hexo$Post$Data,
      replace?: boolean,
      fn?: (err: any) => void
    ): Promise<void>;
    create(data: Hexo$Post$Data, fn?: (err: any) => void): Promise<void>;

    /**
     * Publish a Draft
     */
    publish(
      data: Hexo$Post$Data,
      replace?: boolean,
      fn?: (err: any) => void
    ): Promise<void>;
    publish(data: Hexo$Post$Data, fn?: (err: any) => void): Promise<void>;
    render(
      source: string | null | void,
      data: Hexo$Post$RenderData,
      fn: (err: any) => void
    ): Promise<void>;
  }

  declare interface Hexo$Post$Data {
    title?: string;
    slug?: string;
    layout?: string;
    path?: string;
    date?: moment.MomentInput;
  }

  declare interface Hexo$Post$RenderData {
    engine?: string;
    content?: string;
  }

  declare type Hexo$Theme = {
    config: HexoConfig,

    /**
     * Get a View
     */
    getView(path: string): Hexo$View | void,

    /**
     * Set a View
     */
    setView(path: string, data: any): void,

    /**
     * Remove a View
     */
    removeView(path: string): void
  } & Hexo$Box;

  declare interface Hexo$View {
    +path: string;
    +source: string;

    /**
     * Remove a View
     */
    render(
      options?: any,
      fn?: (err: any, result: string) => void
    ): Promise<string>;
    render(fn: (err: any, result: string) => void): Promise<any>;

    /**
     * Remove a View synchronously.
     */
    renderSync(options?: any): string;
  }
  declare interface TemplateLocals {
    /**
     * Underscore object
     */
    _: underscore.UnderscoreStatic;
    page:
      | Hexo$Locals$Post
      | Hexo$Locals$Page
      | Hexo$Locals$Category
      | Hexo$Locals$Tag
      | IndexPage
      | ArchivePage
      | CategoryPage
      | TagPage;
    path: string;
    url: string;

    /**
     * Site settings in `_config.yml`
     */
    config: HexoConfig;
    theme: HexoConfig;
    env: $PropertyType<Hexo, "env">;
    layout: string;
    view_dir: string;
    site: any;
  }
  declare interface IndexPage {
    per_page?: number;
    total?: number;
    current?: number;
    current_url?: string;
    posts?: { [key: string]: any };
    prev?: number;
    prev_link?: string;
    next?: number;
    next_link?: string;
    path?: string;
  }
  declare type ArchivePage = {
    archive?: boolean,
    year?: number,
    month?: number
  } & IndexPage;

  declare type CategoryPage = {
    category: string
  } & IndexPage;

  declare type TagPage = {
    tag: string
  } & IndexPage;

  declare interface HexoRendererData {
    /**
     * File content.
     */
    +text: string;

    /**
     * File path.
     */
    +path?: string;
  }
  declare export default typeof Hexo;
}
