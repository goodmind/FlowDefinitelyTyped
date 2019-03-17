declare module "@xmpp/jid" {
  declare export default typeof jid;

  declare function jid(address: string): jid$JID;

  declare function jid(
    local: string | void,
    domain: string,
    resource?: string
  ): jid$JID;

  declare var jid: typeof npm$namespace$jid;

  declare var npm$namespace$jid: {
    jid: typeof jid$jid,
    createJID: typeof jid$createJID,
    equal: typeof jid$equal,
    detectEscape: typeof jid$detectEscape,
    escapeLocal: typeof jid$escapeLocal,
    unescapeLocal: typeof jid$unescapeLocal,
    parse: typeof jid$parse,

    JID: typeof jid$JID
  };
  declare function jid$jid(address: string): jid$JID;

  declare function jid$jid(
    local: string | void,
    domain: string,
    resource?: string
  ): jid$JID;

  declare function jid$createJID(
    local: string | void,
    domain: string,
    resource?: string
  ): jid$JID;

  declare function jid$equal(a: jid$JID, b: jid$JID): boolean;

  declare function jid$detectEscape(local?: string): boolean;

  declare function jid$escapeLocal(local: string): string;

  declare function jid$unescapeLocal(local: string): string;

  declare function jid$parse(s: string): jid$JID;

  declare class jid$JID {
    local: string;
    domain: string;
    resource: string;
    constructor(local: string | void, domain: string, resource?: string): this;
    toString(unescape?: boolean): string;

    /**
     * Convenience method to distinguish users
     */
    bare(): jid$JID;

    /**
     * Comparison function
     */
    equals(other: jid$JID): boolean;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-localpart
     */
    setLocal(local: string, escape?: boolean): void;
    getLocal(unescape?: boolean): string;

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
