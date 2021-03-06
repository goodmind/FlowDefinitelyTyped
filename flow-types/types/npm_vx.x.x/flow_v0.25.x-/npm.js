declare module "npm" {
  declare var npm: NPM$Static;
  declare export default typeof npm;

  declare export type NPM$Static = {
    config: NPM$Config,
    commands: NPM$Commands,
    rollbacks: any[],
    spinner: NPM$Spinner,
    fullList: string[],
    abbrevs: NPM$Dictionary<string>,
    prefix: string,
    bin: string,
    globalBin: string,
    dir: string,
    globalDir: string,
    root: string,
    cache: string,
    tmp: string,
    load(cli: NPM$ConfigOptions): void,
    load(callback: NPM$SimpleCallback<NPM$Config>): void,
    load(
      cli: NPM$ConfigOptions,
      callback: NPM$SimpleCallback<NPM$Config>
    ): void,
    deref(command: string): string
  } & NodeJS.EventEmitter;

  declare export interface NPM$Commands {
    install: NPM$CommandFunction;
    uninstall: NPM$CommandFunction;
    cache: NPM$CommandFunction;
    config: NPM$CommandFunction;
    set: NPM$CommandFunction;
    get: NPM$CommandFunction;
    update: NPM$CommandFunction;
    outdated: NPM$CommandFunction;
    prune: NPM$CommandFunction;
    submodule: NPM$CommandFunction;
    pack: NPM$CommandFunction;
    dedupe: NPM$CommandFunction;
    rebuild: NPM$CommandFunction;
    link: NPM$CommandFunction;
    publish: NPM$CommandFunction;
    star: NPM$CommandFunction;
    stars: NPM$CommandFunction;
    tag: NPM$CommandFunction;
    adduser: NPM$CommandFunction;
    unpublish: NPM$CommandFunction;
    owner: NPM$CommandFunction;
    deprecate: NPM$CommandFunction;
    shrinkwrap: NPM$CommandFunction;
    help: NPM$CommandFunction;
    "help-search": NPM$CommandFunction;
    ls: NPM$CommandFunction;
    search: NPM$CommandFunction;
    view: NPM$CommandFunction;
    init: NPM$CommandFunction;
    version: NPM$CommandFunction;
    edit: NPM$CommandFunction;
    explore: NPM$CommandFunction;
    docs: NPM$CommandFunction;
    repo: NPM$CommandFunction;
    bugs: NPM$CommandFunction;
    faq: NPM$CommandFunction;
    root: NPM$CommandFunction;
    prefix: NPM$CommandFunction;
    bin: NPM$CommandFunction;
    whoami: NPM$CommandFunction;
    test: NPM$CommandFunction;
    stop: NPM$CommandFunction;
    start: NPM$CommandFunction;
    restart: NPM$CommandFunction;
    "run-script": NPM$CommandFunction;
    completion: NPM$CommandFunction;
    rm: NPM$CommandFunction;
    r: NPM$CommandFunction;
    un: NPM$CommandFunction;
    unlink: NPM$CommandFunction;
    remove: NPM$CommandFunction;
    rb: NPM$CommandFunction;
    list: NPM$CommandFunction;
    la: NPM$CommandFunction;
    ll: NPM$CommandFunction;
    i: NPM$CommandFunction;
    isntall: NPM$CommandFunction;
    up: NPM$CommandFunction;
    c: NPM$CommandFunction;
    info: NPM$CommandFunction;
    show: NPM$CommandFunction;
    find: NPM$CommandFunction;
    s: NPM$CommandFunction;
    se: NPM$CommandFunction;
    author: NPM$CommandFunction;
    home: NPM$CommandFunction;
    issues: NPM$CommandFunction;
    unstar: NPM$CommandFunction;
    apihelp: NPM$CommandFunction;
    long: NPM$CommandFunction;
    "add-user": NPM$CommandFunction;
    tst: NPM$CommandFunction;
    t: NPM$CommandFunction;
    "find-dupes": NPM$CommandFunction;
    ddp: NPM$CommandFunction;
    v: NPM$CommandFunction;
    build: NPM$CommandFunction;
    unbuild: NPM$CommandFunction;
    xmas: NPM$CommandFunction;
    substack: NPM$CommandFunction;
    visnup: NPM$CommandFunction;
  }

  declare export interface NPM$CommandFunction {
    (args: string[], callback: NPM$CommandCallback): void;
  }

  declare export interface NPM$CommandCallback {
    (
      err?: Error,
      result?: any,
      result2?: any,
      result3?: any,
      result4?: any
    ): void;
  }

  declare export interface NPM$Spinner {
    int: string;
    started: boolean;
    start(): void;
    stop(): void;
  }

  declare export interface NPM$ConfigStatic {
    new(base: NPM$Config): NPM$Config;
    (base: NPM$Config): NPM$Config;
  }

  declare export interface NPM$Config {
    loaded: boolean;
    sources: NPM$Dictionary<NPM$ConfigSource>;
    rootConf: NPM$Config;
    usingBuiltin: boolean;
    root?: NPM$Config;
    Conf: NPM$ConfigStatic;
    defs: NPM$ConfigDefs;
    get(setting: string): string;
    set(setting: string, value: string): void;
    loadPrefix(cb: NPM$ErrorCallback): void;
    loadCAFile(caFilePath: string, cb: NPM$ErrorCallback): void;
    loadUid(cb: NPM$SimpleCallback<string>): void;
    setUser(cb: NPM$ErrorCallback): void;
    findPrefix(prefix: string, cb: NPM$SimpleCallback<string>): void;
    getCredentialsByURI(uri: string): NPM$Credentials;
    setCredentialsByURI(uri: string, cred: NPM$Credentials): void;
    loadExtras(cb: NPM$ErrorCallback): void;
    save(where: string, cb: NPM$ErrorCallback): NPM$Config;
    addFile(file: string, name: string): NPM$Config;
    parse(content: string, file: string): any;
    add(data: Object, marker: Object): any;
    addEnv(env: NPM$Dictionary<string>): any;
  }

  declare export interface NPM$ConfigDefs {
    defaults: NPM$ConfigOptions;
    types: NPM$ConfigTypes;
  }

  declare export interface NPM$ConfigOptions {
    "always-auth"?: boolean;
    "bin-links"?: boolean;
    browser?: string;
    ca?: any;
    cafile?: string;
    cache?: string;
    "cache-lock-stale"?: number;
    "cache-lock-retries"?: number;
    "cache-lock-wait"?: number;
    "cache-max"?: number;
    "cache-min"?: number;
    cert?: string;
    color?: any;
    depth?: number;
    description?: boolean;
    dev?: boolean;
    editor?: string;
    "engine-strict"?: boolean;
    force?: boolean;
    "fetch-retries"?: number;
    "fetch-retry-factor"?: number;
    "fetch-retry-mintimeout"?: number;
    "fetch-retry-maxtimeout"?: number;
    git?: string;
    "git-tag-version"?: boolean;
    global?: boolean;
    globalconfig?: string;
    group?: any;
    heading?: string;
    "ignore-scripts"?: boolean;
    "init-module"?: string;
    "init.author.name"?: string;
    "init.author.email"?: string;
    "init.author.url"?: string;
    "init.version"?: string;
    "init.license"?: string;
    json?: boolean;
    key?: string;
    link?: boolean;
    "local-address"?: string;
    loglevel?: string;
    logstream?: NodeJS$ReadWriteStream;
    long?: boolean;
    message?: string;
    "node-version"?: string;
    npat?: boolean;
    "onload-script"?: boolean;
    optional?: boolean;
    parseable?: boolean;
    prefix?: string;
    production?: boolean;
    "proprietary-attribs"?: boolean;
    proxy?: any;
    "https-proxy"?: string;
    "user-agent"?: string;
    "rebuild-bundle"?: boolean;
    registry?: string;
    rollback?: boolean;
    save?: boolean;
    "save-bundle"?: boolean;
    "save-dev"?: boolean;
    "save-exact"?: boolean;
    "save-optional"?: boolean;
    "save-prefix"?: string;
    scope?: string;
    searchopts?: string;
    searchexclude?: string;
    searchsort?: string;
    shell?: string;
    shrinkwrap?: boolean;
    "sign-git-tag"?: boolean;
    spin?: any;
    "strict-ssl"?: boolean;
    tag?: string;
    tmp?: string;
    unicode?: boolean;
    "unsafe-perm"?: boolean;
    usage?: boolean;
    user?: any;
    userconfig?: string;
    umask?: number;
    version?: boolean;
    versions?: boolean;
    viewer?: string;
    _exit?: boolean;
  }

  declare export interface NPM$ConfigTypes {
    "always-auth": typeof Boolean;
    "bin-links": typeof Boolean;
    browser: any[];
    ca: any[];
    cafile: typeof String;
    cache: typeof String;
    "cache-lock-stale": typeof Number;
    "cache-lock-retries": typeof Number;
    "cache-lock-wait": typeof Number;
    "cache-max": typeof Number;
    "cache-min": typeof Number;
    cert: typeof String;
    color: any[];
    depth: typeof Number;
    description: typeof Boolean;
    dev: typeof Boolean;
    editor: typeof String;
    "engine-strict": typeof Boolean;
    force: typeof Boolean;
    "fetch-retries": typeof Number;
    "fetch-retry-factor": typeof Number;
    "fetch-retry-mintimeout": typeof Number;
    "fetch-retry-maxtimeout": typeof Number;
    git: typeof String;
    "git-tag-version": typeof Boolean;
    global: typeof Boolean;
    globalconfig: typeof String;
    group: any[];
    heading: typeof String;
    "ignore-scripts": typeof Boolean;
    "init-module": typeof String;
    "init.author.name": typeof String;
    "init.author.email": typeof String;
    "init.author.url": typeof String;
    "init.version": typeof String;
    "init.license": typeof String;
    json: typeof Boolean;
    key: any[];
    link: typeof Boolean;
    "local-address": typeof String;
    loglevel: any[];
    logstream: any;
    long: typeof Boolean;
    message: typeof String;
    "node-version": any[];
    npat: typeof Boolean;
    "onload-script": any[];
    optional: typeof Boolean;
    parseable: typeof Boolean;
    prefix: typeof String;
    production: typeof Boolean;
    "proprietary-attribs": typeof Boolean;
    proxy: any[];
    "https-proxy": any[];
    "user-agent": typeof String;
    "rebuild-bundle": Boolean;
    registry: any[];
    rollback: typeof Boolean;
    save: typeof Boolean;
    "save-bundle": typeof Boolean;
    "save-dev": typeof Boolean;
    "save-exact": typeof Boolean;
    "save-optional": typeof Boolean;
    "save-prefix": typeof String;
    scope: typeof String;
    searchopts: typeof String;
    searchexclude: any[];
    searchsort: any[];
    shell: typeof String;
    shrinkwrap: typeof Boolean;
    "sign-git-tag": typeof Boolean;
    spin: any[];
    "strict-ssl": typeof Boolean;
    tag: typeof String;
    tmp: typeof String;
    unicode: typeof Boolean;
    "unsafe-perm": typeof Boolean;
    usage: typeof Boolean;
    user: any;
    userconfig: typeof String;
    umask: typeof Number;
    version: typeof Boolean;
    versions: typeof Boolean;
    viewer: typeof String;
    _exit: typeof Boolean;
  }

  declare export interface NPM$ConfigShorthands {
    s: any[];
    d: any[];
    dd: any[];
    ddd: any[];
    noreg: any[];
    N: any[];
    reg: any[];
    "no-reg": any[];
    silent: any[];
    verbose: any[];
    quiet: any[];
    q: any[];
    h: any[];
    H: any[];
    "?": any[];
    help: any[];
    v: any[];
    f: any[];
    gangster: any[];
    gangsta: any[];
    desc: any[];
    "no-desc": any[];
    local: any[];
    l: any[];
    m: any[];
    p: any[];
    porcelain: any[];
    g: any[];
    S: any[];
    D: any[];
    E: any[];
    O: any[];
    y: any[];
    n: any[];
    B: any[];
    C: any[];
  }

  declare export interface NPM$ConfigSource {
    path: string;
    type: string;
  }

  declare export interface NPM$Credentials {
    scope: string;
    token?: string;
    password?: string;
    username?: string;
    email?: string;
    auth?: string;
  }

  declare export interface NPM$Dictionary<T> {
    [key: string]: T;
  }

  declare export interface NPM$ErrorCallback {
    (err?: Error): void;
  }

  declare export interface NPM$SimpleCallback<T> {
    (err?: Error, result?: T): void;
  }
}
