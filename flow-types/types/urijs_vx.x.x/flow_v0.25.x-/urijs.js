declare interface uri$URI {
  absoluteTo(path: string): uri$URI;
  absoluteTo(path: uri$URI): uri$URI;
  addFragment(fragment: string): uri$URI;
  addQuery(qry: string): uri$URI;
  addQuery(qry: string, value: any): uri$URI;
  addQuery(qry: Object): uri$URI;
  addSearch(qry: string): uri$URI;
  addSearch(key: string, value: any): uri$URI;
  addSearch(qry: Object): uri$URI;
  authority(): string;
  authority(authority: string): uri$URI;
  clone(): uri$URI;
  directory(): string;
  directory(dir: boolean): string;
  directory(dir: string): uri$URI;
  domain(): string;
  domain(domain: boolean): string;
  domain(domain: string): uri$URI;
  duplicateQueryParameters(val: boolean): uri$URI;
  equals(): boolean;
  equals(url: string | uri$URI): boolean;
  filename(): string;
  filename(file: boolean): string;
  filename(file: string): uri$URI;
  fragment(): string;
  fragment(fragment: string): uri$URI;
  fragmentPrefix(prefix: string): uri$URI;
  hash(): string;
  hash(hash: string): uri$URI;
  host(): string;
  host(host: string): uri$URI;
  hostname(): string;
  hostname(hostname: string): uri$URI;
  href(): string;
  href(url: string): void;
  is(qry: string): boolean;
  iso8859(): uri$URI;
  normalize(): uri$URI;
  normalizeFragment(): uri$URI;
  normalizeHash(): uri$URI;
  normalizeHostname(): uri$URI;
  normalizePath(): uri$URI;
  normalizePathname(): uri$URI;
  normalizePort(): uri$URI;
  normalizeProtocol(): uri$URI;
  normalizeQuery(): uri$URI;
  normalizeSearch(): uri$URI;
  origin(): string;
  origin(uri: string | uri$URI): uri$URI;
  password(): string;
  password(pw: string): uri$URI;
  path(): string;
  path(path: boolean): string;
  path(path: string): uri$URI;
  pathname(): string;
  pathname(path: boolean): string;
  pathname(path: string): uri$URI;
  port(): string;
  port(port: string): uri$URI;
  protocol(): string;
  protocol(protocol: string): uri$URI;
  query(): string;
  query(qry: string): uri$URI;
  query(qry: boolean): Object;
  query(qry: Object): uri$URI;
  readable(): string;
  relativeTo(path: string): uri$URI;
  removeQuery(qry: string): uri$URI;
  removeQuery(qry: Object): uri$URI;
  removeQuery(name: string, value: string): uri$URI;
  removeSearch(qry: string): uri$URI;
  removeSearch(qry: Object): uri$URI;
  removeSearch(name: string, value: string): uri$URI;
  resource(): string;
  resource(resource: string): uri$URI;
  scheme(): string;
  scheme(protocol: string): uri$URI;
  search(): string;
  search(qry: string): uri$URI;
  search(qry: boolean): any;
  search(qry: Object): uri$URI;
  segment(): string[];
  segment(segments: string[]): uri$URI;
  segment(position: number): string | void;
  segment(position: number, level: string): uri$URI;
  segment(segment: string): uri$URI;
  segmentCoded(): string[];
  segmentCoded(segments: string[]): uri$URI;
  segmentCoded(position: number): string;
  segmentCoded(position: number, level: string): uri$URI;
  segmentCoded(segment: string): uri$URI;
  setQuery(key: string, value: string): uri$URI;
  setQuery(qry: Object): uri$URI;
  setSearch(key: string, value: string): uri$URI;
  setSearch(qry: Object): uri$URI;
  hasQuery(
    name: string | any,
    value?:
      | string
      | number
      | boolean
      | Function
      | Array<string>
      | Array<number>
      | Array<boolean>
      | RegExp,
    withinArray?: boolean
  ): boolean;
  hasSearch(
    name: string | any,
    value?:
      | string
      | number
      | boolean
      | Function
      | Array<string>
      | Array<number>
      | Array<boolean>
      | RegExp,
    withinArray?: boolean
  ): boolean;
  subdomain(): string;
  subdomain(subdomain: string): uri$URI;
  suffix(): string;
  suffix(suffix: boolean): string;
  suffix(suffix: string): uri$URI;
  tld(): string;
  tld(tld: boolean): string;
  tld(tld: string): uri$URI;
  unicode(): uri$URI;
  userinfo(): string;
  userinfo(userinfo: string): uri$URI;
  username(): string;
  username(uname: string): uri$URI;
  valueOf(): string;
}

declare interface uri$URIOptions {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  path?: string;
  query?: string;
  fragment?: string;
}

declare interface uri$URIStatic {
  (): uri$URI;
  (value: string | uri$URIOptions | HTMLElement): uri$URI;
  new(): uri$URI;
  new(value: string | uri$URIOptions | HTMLElement): uri$URI;
  addQuery(data: Object, prop: string, value: string): Object;
  addQuery(data: Object, qryObj: Object): Object;
  build(parts: {
    protocol: string,
    username: string,
    password: string,
    hostname: string,
    port: string,
    path: string,
    query: string,
    fragment: string
  }): string;
  buildAuthority(parts: {
    username?: string,
    password?: string,
    hostname?: string,
    port?: string
  }): string;
  buildHost(parts: {
    hostname?: string,
    port?: string
  }): string;
  buildQuery(qry: Object): string;
  buildQuery(qry: Object, duplicates: boolean): string;
  buildUserinfo(parts: {
    username?: string,
    password?: string
  }): string;
  commonPath(path1: string, path2: string): string;
  decode(str: string): string;
  decodeQuery(qry: string): string;
  encode(str: string): string;
  encodeQuery(qry: string): string;
  encodeReserved(str: string): string;
  expand(template: string, vals: Object): uri$URI;
  iso8859(): void;
  joinPaths(...paths: (string | uri$URI)[]): uri$URI;
  parse(
    url: string
  ): {
    protocol: string,
    username: string,
    password: string,
    hostname: string,
    port: string,
    path: string,
    query: string,
    fragment: string
  };
  parseAuthority(
    url: string,
    parts: {
      username?: string,
      password?: string,
      hostname?: string,
      port?: string
    }
  ): string;
  parseHost(
    url: string,
    parts: {
      hostname?: string,
      port?: string
    }
  ): string;
  parseQuery(url: string): Object;
  parseUserinfo(
    url: string,
    parts: {
      username?: string,
      password?: string
    }
  ): string;
  removeQuery(data: Object, prop: string, value: string): Object;
  removeQuery(data: Object, props: string[]): Object;
  removeQuery(data: Object, props: Object): Object;
  unicode(): void;
  withinString(source: string, func: (url: string) => string): string;
}

declare type uri$URITemplateValue =
  | string
  | $ReadOnlyArray<string>
  | {
      [key: string]: string
    }
  | void
  | null;

declare type uri$URITemplateCallback = (
  keyName: string
) => uri$URITemplateValue;

declare type uri$URITemplateInput =
  | {
      [key: string]: uri$URITemplateValue | uri$URITemplateCallback
    }
  | uri$URITemplateCallback;

declare type uri$URITemplateLiteral = string;

declare interface uri$URITemplateVariable {
  name: string;
  explode: boolean;
  maxLength?: number;
}

declare interface uri$URITemplateExpression {
  expression: string;
  operator: string;
  variables: $ReadOnlyArray<uri$URITemplateVariable>;
}

declare type uri$URITemplatePart =
  | uri$URITemplateLiteral
  | uri$URITemplateExpression;

declare interface uri$URITemplate {
  expand(data: uri$URITemplateInput, opts?: Object): uri$URI;
  parse(): this;

  /**
 * @description The parsed parts of the URI Template. Only present after calling
`parse()` first.
 */
  parts?: $ReadOnlyArray<uri$URITemplatePart>;
}

declare interface uri$URITemplateStatic {
  (template: string): uri$URITemplate;
  new(template: string): uri$URITemplate;
}
declare interface JQuery {
  uri(): uri$uri$URI;
}
declare var uri$URI: uri$uri$URIStatic;
declare var uri$URITemplate: uri$uri$URITemplateStatic;
declare module "URI" {
  declare module.exports: typeof uri$URI;
}
declare module "urijs" {
  declare module.exports: typeof uri$URI;
}
declare module "urijs/src/URITemplate" {
  declare module.exports: typeof uri$URITemplate;
}
