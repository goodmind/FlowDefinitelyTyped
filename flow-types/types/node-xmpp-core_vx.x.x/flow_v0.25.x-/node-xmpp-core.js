declare module "node-xmpp-core" {
  import type { Element } from "ltx";

  import type { EventEmitter } from "events";

  declare export {
    createElement,
    Element,
    escapeXML,
    escapeXMLText
  } from "ltx";

  declare export class Connection mixins EventEmitter {
    constructor(opts?: any): this;
  }

  declare var npm$namespace$SRV: {
    connect: typeof SRV$connect
  };

  /**
   * returns a lazy iterator which can be restarted via connection.connect()
   */
  declare function SRV$connect(opts?: any): any;

  declare export class Stanza mixins Element {
    from: string;
    to: string;
    id: string;
    type: string;
    constructor(name: string, attrs?: any): this;
  }

  /**
   * JSX compatible API, use this function as pragma
   * https://facebook.github.io/jsx/
   * Returns a Stanza if name is presence, message or iq an ltx Element otherwise.
   * @param name name of the element
   * @param attrs attribute key/value pairs
   */
  declare export function createStanza(name: string, attrs?: any): Element;

  declare export class IQ mixins Stanza {
    constructor(attrs?: any): this;
  }
  declare export class Message mixins Stanza {
    constructor(attrs?: any): this;
  }
  declare export class Presence mixins Stanza {
    constructor(attrs?: any): this;
  }
  declare export class JID {
    local: string;
    domain: string;
    resource: string;
    constructor(local: string, domain?: string, resource?: string): this;
    parseJID(jid: string): void;
    toString(unescape?: any): string;

    /**
     * Convenience method to distinguish users
     */
    bare(): JID;

    /**
     * Comparison function
     */
    equals(other: JID): boolean;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-localpart
     */
    setLocal(local: string, escape?: any): void;
    getLocal(unescape?: any): string;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-domain
     */
    setDomain(value: string): void;
    getDomain(): string;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-resourcepart
     */
    setResource(value: string): void;
    getResource(): string;
  }
}
