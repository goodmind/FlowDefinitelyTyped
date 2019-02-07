declare module "node-xmpp-client" {
  declare export class Client {
    static Stanza: Stanza;
    constructor(options: XmppOptions): this;
    connect(): void;
    disconnect(): void;
    on(event: string, c: (e: any, d: any) => any): void;
    send(stanza: any): void;
  }
  declare export type Stanza = {
    new(name: string, attr: any): Stanza,
    from: string,
    to: string,
    id: string,
    type: string
  } & Element;

  declare export interface Element {
    is(name: string, xmlns: string): boolean;
    getName(): string;
    getNS(): string;
    findNS(prefix: string): string;
    getXmlns(): string;
    setAttrs(attrs: any): void;
    getAttrs(): any;
    up(): Element;
    c(name: string, attrs?: any): Element;
    cnode(child: Element): Element;
    t(text: string): Element;
    remove(el: Element, xmnls: string): Element;
    attr(attr: any, val: any): any;
    toString(): string;
    toJSON(): any;
  }
  declare export interface XmppOptions {
    jid: string;
    password: string;
    host?: string;
    port?: number;
    reconnect?: boolean;
    autostart?: boolean;
    register?: boolean;
    legacySSL?: boolean;
    credentials?: any;
    actAs?: string;
    disallowTLS?: boolean;
    preferred?: string;
    bosh?: Bosh;
  }
  declare export interface Bosh {
    url?: string;
    prebind?: (error: any, data: any) => void;
  }
}
