declare module 'strophe' {
        
      declare var npm$namespace$Strophe: {
        addNamespace: typeof Strophe$addNamespace,
forEachChild: typeof Strophe$forEachChild,
isTagEqual: typeof Strophe$isTagEqual,
xmlGenerator: typeof Strophe$xmlGenerator,
xmlElement: typeof Strophe$xmlElement,
xmlescape: typeof Strophe$xmlescape,
xmlunescape: typeof Strophe$xmlunescape,
xmlTextNode: typeof Strophe$xmlTextNode,
xmlHtmlNode: typeof Strophe$xmlHtmlNode,
getText: typeof Strophe$getText,
copyElement: typeof Strophe$copyElement,
createHtml: typeof Strophe$createHtml,
escapeNode: typeof Strophe$escapeNode,
unescapeNode: typeof Strophe$unescapeNode,
getNodeFromJid: typeof Strophe$getNodeFromJid,
getDomainFromJid: typeof Strophe$getDomainFromJid,
getResourceFromJid: typeof Strophe$getResourceFromJid,
getBareJidFromJid: typeof Strophe$getBareJidFromJid,
log: typeof Strophe$log,
debug: typeof Strophe$debug,
info: typeof Strophe$info,
warn: typeof Strophe$warn,
error: typeof Strophe$error,
fatal: typeof Strophe$fatal,
serialize: typeof Strophe$serialize,
addConnectionPlugin: typeof Strophe$addConnectionPlugin,
        VERSION: typeof Strophe$VERSION,
NS: typeof Strophe$NS,
SASLAnonymous: typeof Strophe$SASLAnonymous,
SASLPlain: typeof Strophe$SASLPlain,
SASLSHA1: typeof Strophe$SASLSHA1,
SASLMD5: typeof Strophe$SASLMD5,
      }

/**
 * Constant: VERSION
 * The version of the Strophe library. Unreleased builds will have
 * a version of head-HASH where HASH is a partial revision.
 */
declare var Strophe$VERSION: string;


/**
 * Constants: XMPP Namespace Constants
 * Common namespace constants from the XMPP RFCs and XEPs.
 * 
 * NS.HTTPBIND - HTTP BIND namespace from XEP 124.
 * NS.BOSH - BOSH namespace from XEP 206.
 * NS.CLIENT - Main XMPP client namespace.
 * NS.AUTH - Legacy authentication namespace.
 * NS.ROSTER - Roster operations namespace.
 * NS.PROFILE - Profile namespace.
 * NS.DISCO_INFO - Service discovery info namespace from XEP 30.
 * NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
 * NS.MUC - Multi-User Chat namespace from XEP 45.
 * NS.SASL - XMPP SASL namespace from RFC 3920.
 * NS.STREAM - XMPP Streams namespace from RFC 3920.
 * NS.BIND - XMPP Binding namespace from RFC 3920.
 * NS.SESSION - XMPP Session namespace from RFC 3920.
 * NS.XHTML_IM - XHTML-IM namespace from XEP 71.
 * NS.XHTML - XHTML body namespace from XEP 71.
 */
declare var Strophe$NS: {
HTTPBIND: string,
BOSH: string,
CLIENT: string,
AUTH: string,
ROSTER: string,
PROFILE: string,
DISCO_INFO: string,
DISCO_ITEMS: string,
MUC: string,
SASL: string,
STREAM: string,
FRAMING: string,
BIND: string,
SESSION: string,
Strophe$VERSION: string,
STANZAS: string,
XHTML_IM: string,
XHTML: string
};


/**
 * Constants: Connection Status Constants
 * Connection status constants for use by the connection handler
 * callback.
 * 
 * Status.ERROR - An error has occurred
 * Status.CONNECTING - The connection is currently being made
 * Status.CONNFAIL - The connection attempt failed
 * Status.AUTHENTICATING - The connection is authenticating
 * Status.AUTHFAIL - The authentication attempt failed
 * Status.CONNECTED - The connection has succeeded
 * Status.DISCONNECTED - The connection has been terminated
 * Status.DISCONNECTING - The connection is currently being terminated
 * Status.ATTACHED - The connection has been attached
 */
declare  class Strophe$Status {
  constructor(...args: empty): mixed;
static +ERROR: Class<Strophe$Status__ERROR> & Strophe$Status__ERROR & 0;// 0
static +CONNECTING: Class<Strophe$Status__CONNECTING> & Strophe$Status__CONNECTING & 1;// 1
static +CONNFAIL: Class<Strophe$Status__CONNFAIL> & Strophe$Status__CONNFAIL & 2;// 2
static +AUTHENTICATING: Class<Strophe$Status__AUTHENTICATING> & Strophe$Status__AUTHENTICATING & 3;// 3
static +AUTHFAIL: Class<Strophe$Status__AUTHFAIL> & Strophe$Status__AUTHFAIL & 4;// 4
static +CONNECTED: Class<Strophe$Status__CONNECTED> & Strophe$Status__CONNECTED & 5;// 5
static +DISCONNECTED: Class<Strophe$Status__DISCONNECTED> & Strophe$Status__DISCONNECTED & 6;// 6
static +DISCONNECTING: Class<Strophe$Status__DISCONNECTING> & Strophe$Status__DISCONNECTING & 7;// 7
static +ATTACHED: Class<Strophe$Status__ATTACHED> & Strophe$Status__ATTACHED & 8;// 8
static +REDIRECT: Class<Strophe$Status__REDIRECT> & Strophe$Status__REDIRECT & 9;// 9
static +CONNTIMEOUT: Class<Strophe$Status__CONNTIMEOUT> & Strophe$Status__CONNTIMEOUT & 10;// 10

}

declare class Strophe$Status__ERROR mixins Strophe$Status {}
declare class Strophe$Status__CONNECTING mixins Strophe$Status {}
declare class Strophe$Status__CONNFAIL mixins Strophe$Status {}
declare class Strophe$Status__AUTHENTICATING mixins Strophe$Status {}
declare class Strophe$Status__AUTHFAIL mixins Strophe$Status {}
declare class Strophe$Status__CONNECTED mixins Strophe$Status {}
declare class Strophe$Status__DISCONNECTED mixins Strophe$Status {}
declare class Strophe$Status__DISCONNECTING mixins Strophe$Status {}
declare class Strophe$Status__ATTACHED mixins Strophe$Status {}
declare class Strophe$Status__REDIRECT mixins Strophe$Status {}
declare class Strophe$Status__CONNTIMEOUT mixins Strophe$Status {}



/**
 * Constants: Log Level Constants
 * Logging level indicators.
 * 
 * LogLevel.DEBUG - Debug output
 * LogLevel.INFO - Informational output
 * LogLevel.WARN - Warnings
 * LogLevel.ERROR - Errors
 * LogLevel.FATAL - Fatal errors
 */
declare  class Strophe$LogLevel {
  constructor(...args: empty): mixed;
static +DEBUG: Class<Strophe$LogLevel__DEBUG> & Strophe$LogLevel__DEBUG & 0;// 0
static +INFO: Class<Strophe$LogLevel__INFO> & Strophe$LogLevel__INFO & 1;// 1
static +WARN: Class<Strophe$LogLevel__WARN> & Strophe$LogLevel__WARN & 2;// 2
static +ERROR: Class<Strophe$LogLevel__ERROR> & Strophe$LogLevel__ERROR & 3;// 3
static +FATAL: Class<Strophe$LogLevel__FATAL> & Strophe$LogLevel__FATAL & 4;// 4

}

declare class Strophe$LogLevel__DEBUG mixins Strophe$LogLevel {}
declare class Strophe$LogLevel__INFO mixins Strophe$LogLevel {}
declare class Strophe$LogLevel__WARN mixins Strophe$LogLevel {}
declare class Strophe$LogLevel__ERROR mixins Strophe$LogLevel {}
declare class Strophe$LogLevel__FATAL mixins Strophe$LogLevel {}



/**
 * Function: addNamespace
 * This function is used to extend the current namespaces in
 * Strophe.NS.  It takes a key and a value with the key being the
 * name of the new namespace, with its actual value.
 * For example:
 * Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
 * 
 * Parameters:
 *   (String) name - The name under which the namespace will be
 *     referenced under Strophe.NS
 *   (String) value - The actual namespace.
 */
declare function Strophe$addNamespace(name: string, value: string): void



/**
 * Function: forEachChild
 * Map a function over some or all child elements of a given element.
 * 
 * This is a small convenience function for mapping a function over
 * some or all of the children of an element.  If elemName is null, all
 * children will be passed to the function, otherwise only children
 * whose tag names match elemName will be passed.
 * 
 * Parameters:
 *   (XMLElement) elem - The element to operate on.
 *   (String) elemName - The child element tag name filter.
 *   (Function) func - The function to apply to each child.  This
 *     function should take a single argument, a DOM element.
 */
declare function Strophe$forEachChild(elem: Element, elemName: string, func: (child: Element) => any): void



/**
 * Function: isTagEqual
 * Compare an element's tag name with a string.
 * 
 * This function is case sensitive.
 * 
 * Parameters:
 *   (XMLElement) el - A DOM element.
 *   (String) name - The element name.
 * 
 * Returns:
 *   true if the element's tag name matches _el_, and false
 *   otherwise.
 */
declare function Strophe$isTagEqual(el: Element, name: string): boolean



/**
 * Function: xmlGenerator
 * Get the DOM document to generate elements.
 * 
 * Returns:
 *   The currently used DOM document.
 */
declare function Strophe$xmlGenerator(): Document



/**
 * Function: xmlElement
 * Create an XML DOM element.
 * 
 * This function creates an XML DOM element correctly across all
 * implementations. Note that these are not HTML DOM elements, which
 * aren't appropriate for XMPP stanzas.
 * 
 * Parameters:
 *   (String) name - The name for the element.
 *   (Array|Object) attrs - An optional array or object containing
 *     key/value pairs to use as element attributes. The object should
 *     be in the format {'key': 'value'} or {key: 'value'}. The array
 *     should have the format [['key1', 'value1'], ['key2', 'value2']].
 *   (String) text - The text child data for the element.
 * 
 * Returns:
 *   A new XML DOM element.
 */
declare function Strophe$xmlElement(name: string, attrs?: any, text?: string): Element


declare function Strophe$xmlElement(name: string, text?: string, attrs?: any): Element


declare function Strophe$xmlescape(text: string): string


declare function Strophe$xmlunescape(text: string): string



/**
 * Function: xmlTextNode
 * Creates an XML DOM text node.
 * 
 * Provides a cross implementation version of document.createTextNode.
 * 
 * Parameters:
 *   (String) text - The content of the text node.
 * 
 * Returns:
 *   A new XML DOM text node.
 */
declare function Strophe$xmlTextNode(text: string): Text



/**
 * Function: xmlHtmlNode
 * Creates an XML DOM html node.
 * 
 * Parameters:
 *   (String) html - The content of the html node.
 * 
 * Returns:
 *   A new XML DOM text node.
 */
declare function Strophe$xmlHtmlNode(html: string): Document



/**
 * Function: getText
 *   Get the concatenation of all text children of an element.
 * 
 *   Parameters:
 *   (XMLElement) elem - A DOM element.
 * 
 *   Returns:
 *   A String with the concatenated text of all text element children.
 */
declare function Strophe$getText(elem: Element): string



/**
 * Function: copyElement
 * Copy an XML DOM element.
 * 
 * This function copies a DOM element and all its descendants and returns
 * the new copy.
 * 
 * Parameters:
 *   (XMLElement) elem - A DOM element.
 * 
 * Returns:
 *   A new, copied DOM element tree.
 */
declare function Strophe$copyElement(elem: Element): Element



/**
 * Function: createHtml
 * Copy an HTML DOM element into an XML DOM.
 * 
 * This function copies a DOM element and all its descendants and returns
 * the new copy.
 * 
 * Parameters:
 *   (Element) elem - A DOM element.
 * 
 * Returns:
 *   A new, copied DOM element tree.
 */
declare function Strophe$createHtml(elem: Element): Element



/**
 * Function: escapeNode
 * Escape the node part (also called local part) of a JID.
 * 
 * Parameters:
 *   (String) node - A node (or local part).
 * 
 * Returns:
 *   An escaped node (or local part).
 */
declare function Strophe$escapeNode(node: string): string



/**
 * Function: unescapeNode
 * Unescape a node part (also called local part) of a JID.
 * 
 * Parameters:
 *   (String) node - A node (or local part).
 * 
 * Returns:
 *   An unescaped node (or local part).
 */
declare function Strophe$unescapeNode(node: string): string



/**
 * Function: getNodeFromJid
 * Get the node portion of a JID String.
 * 
 * Parameters:
 *   (String) jid - A JID.
 * 
 * Returns:
 *   A String containing the node.
 */
declare function Strophe$getNodeFromJid(jid: string): string



/**
 * Function: getDomainFromJid
 * Get the domain portion of a JID String.
 * 
 * Parameters:
 *   (String) jid - A JID.
 * 
 * Returns:
 *   A String containing the domain.
 */
declare function Strophe$getDomainFromJid(jid: string): string



/**
 * Function: getResourceFromJid
 * Get the resource portion of a JID String.
 * 
 * Parameters:
 *   (String) jid - A JID.
 * 
 * Returns:
 *   A String containing the resource.
 */
declare function Strophe$getResourceFromJid(jid: string): string



/**
 * Function: getBareJidFromJid
 * Get the bare JID from a JID String.
 * 
 * Parameters:
 *   (String) jid - A JID.
 * 
 * Returns:
 *   A String containing the bare JID.
 */
declare function Strophe$getBareJidFromJid(jid: string): string



/**
 * Function: log
 * User overrideable logging function.
 * 
 * This function is called whenever the Strophe library calls any
 * of the logging functions.  The default implementation of this
 * function does nothing.  If client code wishes to handle the logging
 * messages, it should override this with
 * > Strophe.log = function (level, msg) {
 * >   (user code here)
 * > };
 * 
 * Please note that data sent and received over the wire is logged
 * via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
 * 
 * The different levels and their meanings are
 * 
 *   DEBUG - Messages useful for debugging purposes.
 *   INFO - Informational messages.  This is mostly information like
 *     'disconnect was called' or 'SASL auth succeeded'.
 *   WARN - Warnings about potential problems.  This is mostly used
 *     to report transient connection errors like request timeouts.
 *   ERROR - Some error occurred.
 *   FATAL - A non-recoverable fatal error occurred.
 * 
 * Parameters:
 *   (Integer) level - The log level of the log message.  This will
 *     be one of the values in Strophe.LogLevel.
 *   (String) msg - The log message.
 */
declare function Strophe$log(level: Strophe$LogLevel, msg: string): void



/**
 * Functions: debug, info, warn, error
 * Log a message at the appropriate Strophe.LogLevel
 * 
 * Parameters:
 *   (String) msg - The log message.
 */
declare function Strophe$debug(msg: string): void


declare function Strophe$info(msg: string): void


declare function Strophe$warn(msg: string): void


declare function Strophe$error(msg: string): void


declare function Strophe$fatal(msg: string): void



/**
 * Function: serialize
 * Render a DOM element and all descendants to a String.
 * 
 * Parameters:
 *   (XMLElement) elem - A DOM element.
 * 
 * Returns:
 *   The serialized element tree as a String.
 */
declare function Strophe$serialize(elem: Element | Strophe$Builder): string



/**
 * Function: addConnectionPlugin
 * Extends the Strophe.Connection object with the given plugin.
 * 
 * Parameters:
 *   (String) name - The name of the extension.
 *   (Object) ptype - The plugin's prototype.
 */
declare function Strophe$addConnectionPlugin(name: string, ptype: any): void



/**
 * Class: Strophe.Builder
 * XML DOM builder.
 * 
 * This object provides an interface similar to JQuery but for building
 * DOM element easily and rapidly.  All the functions except for toString()
 * and tree() return the object, so calls can be chained.  Here's an
 * example using the $iq() builder helper.
 * > $iq({to: 'you', from: 'me', type: 'get', id: '1'})
 * >     .c('query', {xmlns: 'strophe:example'})
 * >     .c('example')
 * >     .toString()
 * The above generates this XML fragment
 * > <iq to='you' from='me' type='get' id='1'>
 * >   <query xmlns='strophe:example'>
 * >     <example/>
 * >   </query>
 * > </iq>
 * The corresponding DOM manipulations to get a similar fragment would be
 * a lot more tedious and probably involve several helper variables.
 * 
 * Since adding children makes new operations operate on the child, up()
 * is provided to traverse up the tree.  To add two children, do
 * > builder.c('child1', ...).up().c('child2', ...)
 * The next operation on the Builder will be relative to the second child.
 */
declare class Strophe$Builder  {

/**
 * Constructor: Strophe.Builder
 * Create a Strophe.Builder object.
 * 
 * The attributes should be passed in object notation.  For example
 * > var b = new Builder('message', {to: 'you', from: 'me'});
 * or
 * > var b = new Builder('messsage', {'xml:lang': 'en'});
 * 
 * Parameters:
 *   (String) name - The name of the root element.
 *   (Object) attrs - The attributes for the root element in object notation.
 * 
 * Returns:
 *   A new Strophe.Builder.
 */
constructor(name: string, attrs?: any): this;

/**
 * Function: tree
 * Return the DOM tree.
 * 
 * This function returns the current DOM tree as an element object.  This
 * is suitable for passing to functions like Strophe.Connection.send().
 * 
 * Returns:
 * The DOM tree as a element object.
 */
tree(): Element;

/**
 * Function: toString
 * Serialize the DOM tree to a String.
 * 
 * This function returns a string serialization of the current DOM
 * tree.  It is often used internally to pass data to a
 * Strophe.Request object.
 * 
 * Returns:
 *   The serialized DOM tree in a String.
 */
toString(): string;

/**
 * Function: up
 * Make the current parent element the new current element.
 * 
 * This function is often used after c() to traverse back up the tree.
 * For example, to add two children to the same element
 * > builder.c('child1', {}).up().c('child2', {});
 * 
 * Returns:
 *   The Stophe.Builder object.
 */
up(): Strophe$Builder;

/**
 * Function: attrs
 * Add or modify attributes of the current element.
 * 
 * The attributes should be passed in object notation.  This function
 * does not move the current element pointer.
 * 
 * Parameters:
 *   (Object) moreattrs - The attributes to add/modify in object notation.
 * 
 * Returns:
 *   The Strophe.Builder object.
 */
attrs(moreattrs: any): Strophe$Builder;

/**
 * Function: c
 * Add a child to the current element and make it the new current
 * element.
 * 
 * This function moves the current element pointer to the child,
 * unless text is provided.  If you need to add another child, it
 * is necessary to use up() to go back to the parent in the tree.
 * 
 * Parameters:
 *   (String) name - The name of the child.
 *   (Object) attrs - The attributes of the child in object notation.
 *   (String) text - The text to add to the child.
 * 
 * Returns:
 *   The Strophe.Builder object.
 */
c(name: string, attrs?: any, text?: string): Strophe$Builder;

/**
 * Function: cnode
 * Add a child to the current element and make it the new current
 * element.
 * 
 * This function is the same as c() except that instead of using a
 * name and an attributes object to create the child it uses an
 * existing DOM element object.
 * 
 * Parameters:
 *   (XMLElement) elem - A DOM element.
 * 
 * Returns:
 *   The Strophe.Builder object.
 */
cnode(elem: Node): Strophe$Builder;

/**
 * Function: t
 * Add a child text element.
 * 
 * This *does not* make the child the new current element since there
 * are no children of text elements.
 * 
 * Parameters:
 *   (String) text - The text data to append to the current element.
 * 
 * Returns:
 *   The Strophe.Builder object.
 */
t(text: string): Strophe$Builder;

/**
 * Function: h
 * Replace current element contents with the HTML passed in.
 * 
 * This *does not* make the child the new current element
 * 
 * Parameters:
 *   (String) html - The html to insert as contents of current element.
 * 
 * Returns:
 *   The Strophe.Builder object.
 */
h(html: string): Strophe$Builder
}

declare interface Strophe$ConnectionOptions {
keepalive?: boolean,
protocol?: string,
sync?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 


/**
 * Class: Strophe.Connection
 * XMPP Connection manager.
 * 
 * This class is the main part of Strophe.  It manages a BOSH connection
 * to an XMPP server and dispatches events to the user callbacks as
 * data arrives.  It supports SASL PLAIN, SASL DIGEST-MD5, SASL SCRAM-SHA1
 * and legacy authentication.
 * 
 * After creating a Strophe.Connection object, the user will typically
 * call connect() with a user supplied callback to handle connection level
 * events like authentication failure, disconnection, or connection
 * complete.
 * 
 * The user will also have several event handlers defined by using
 * addHandler() and addTimedHandler().  These will allow the user code to
 * respond to interesting stanzas or do something periodically with the
 * connection.  These handlers will be active once authentication is
 * finished.
 * 
 * To send data to the connection, use send().
 */
declare class Strophe$Connection  {
jid: string;
authzid: string;
pass: string;
authcid: string;
domain: string;
servtype: string;
maxRetries: number;

/**
 * Constructor: Strophe.Connection
 * Create and initialize a Strophe.Connection object.
 * 
 * The transport-protocol for this connection will be chosen automatically
 * based on the given service parameter. URLs starting with "ws://" or
 * "wss://" will use WebSockets, URLs starting with "http://", "https://"
 * or without a protocol will use BOSH.
 * 
 * To make Strophe connect to the current host you can leave out the protocol
 * and host part and just pass the path, e.g.
 * 
 * > var conn = new Strophe.Connection("/http-bind/");
 * 
 * WebSocket options:
 * 
 * If you want to connect to the current host with a WebSocket connection you
 * can tell Strophe to use WebSockets through a "protocol" attribute in the
 * optional options parameter. Valid values are "ws" for WebSocket and "wss"
 * for Secure WebSocket.
 * So to connect to "wss://CURRENT_HOSTNAME/xmpp-websocket" you would call
 * 
 * > var conn = new Strophe.Connection("/xmpp-websocket/", {protocol: "wss"});
 * 
 * Note that relative URLs _NOT_ starting with a "/" will also include the path
 * of the current site.
 * 
 * Also because downgrading security is not permitted by browsers, when using
 * relative URLs both BOSH and WebSocket connections will use their secure
 * variants if the current connection to the site is also secure (https).
 * 
 * BOSH options:
 * 
 * by adding "sync" to the options, you can control if requests will
 * be made synchronously or not. The default behaviour is asynchronous.
 * If you want to make requests synchronous, make "sync" evaluate to true:
 * > var conn = new Strophe.Connection("/http-bind/", {sync: true});
 * You can also toggle this on an already established connection:
 * > conn.options.sync = true;
 * 
 * 
 * Parameters:
 *   (String) service - The BOSH or WebSocket service URL.
 *   (Object) options - A hash of configuration options
 * 
 * Returns:
 *   A new Strophe.Connection object.
 */
constructor(service: string, options?: Strophe$ConnectionOptions): this;

/**
 * Function: reset
 * Reset the connection.
 * 
 * This function should be called after a connection is disconnected
 * before that connection is reused.
 */
reset(): void;

/**
 * Function: pause
 * Pause the request manager.
 * 
 * This will prevent Strophe from sending any more requests to the
 * server.  This is very useful for temporarily pausing
 * BOSH-Connections while a lot of send() calls are happening quickly.
 * This causes Strophe to send the data in a single request, saving
 * many request trips.
 */
pause(): void;

/**
 * Function: resume
 * Resume the request manager.
 * 
 * This resumes after pause() has been called.
 */
resume(): void;

/**
 * Function: getUniqueId
 * Generate a unique ID for use in <iq/> elements.
 * 
 * All <iq/> stanzas are required to have unique id attributes.  This
 * function makes creating these easy.  Each connection instance has
 * a counter which starts from zero, and the value of this counter
 * plus a colon followed by the suffix becomes the unique id. If no
 * suffix is supplied, the counter is used as the unique id.
 * 
 * Suffixes are used to make debugging easier when reading the stream
 * data, and their use is recommended.  The counter resets to 0 for
 * every new connection for the same reason.  For connections to the
 * same server that authenticate the same way, all the ids should be
 * the same, which makes it easy to see changes.  This is useful for
 * automated testing as well.
 * 
 * Parameters:
 *   (String) suffix - A optional suffix to append to the id.
 * 
 * Returns:
 *   A unique string to be used for the id attribute.
 */
getUniqueId(suffix?: string | number): string;

/**
 * Function: connect
 * Starts the connection process.
 * 
 * As the connection process proceeds, the user supplied callback will
 * be triggered multiple times with status updates.  The callback
 * should take two arguments - the status code and the error condition.
 * 
 * The status code will be one of the values in the Strophe.Status
 * constants.  The error condition will be one of the conditions
 * defined in RFC 3920 or the condition 'strophe-parsererror'.
 * 
 * The Parameters _wait_, _hold_ and _route_ are optional and only relevant
 * for BOSH connections. Please see XEP 124 for a more detailed explanation
 * of the optional parameters.
 * 
 * Parameters:
 *   (String) jid - The user's JID.  This may be a bare JID,
 *     or a full JID.  If a node is not supplied, SASL ANONYMOUS
 *     authentication will be attempted.
 *   (String) pass - The user's password.
 *   (Function) callback - The connect callback function.
 *   (Integer) wait - The optional HTTPBIND wait value.  This is the
 *     time the server will wait before returning an empty result for
 *     a request.  The default setting of 60 seconds is recommended.
 *   (Integer) hold - The optional HTTPBIND hold value.  This is the
 *     number of connections the server will hold at one time.  This
 *     should almost always be set to 1 (the default).
 *   (String) route - The optional route value.
 */
connect(
jid?: string,
pass?: string,
callback?: (status: Strophe$Status, condition: string) => any,
wait?: number,
hold?: number,
route?: string): void;

/**
 * Function: restore
 * Attempt to restore a cached BOSH session.
 * 
 * This function is only useful in conjunction with providing the
 * “keepalive”:true option when instantiating a new Strophe.Connection.
 * When “keepalive” is set to true, Strophe will cache the BOSH tokens
 * RID (Request ID) and SID (Session ID) and then when this function is called,
 * it will attempt to restore the session from those cached tokens.
 * This function must therefore be called instead of connect or attach.
 * For an example on how to use it, please see examples/restore.js
 * 
 * Parameters:
 *     (String) jid - The user’s JID.  This may be a bare JID or a full JID.
 *     (Function) callback - The connect callback function.
 *     (Integer) wait - The optional HTTPBIND wait value.
 *       This is the time the server will wait before returning an empty result for a request.
 *       The default setting of 60 seconds is recommended.
 *     (Integer) hold - The optional HTTPBIND hold value.
 *       This is the number of connections the server will hold at one time.
 *       This should almost always be set to 1 (the default).
 *     (Integer) wind - The optional HTTBIND window value.
 *       This is the allowed range of request ids that are valid.
 *       The default is 5.
 */
restore(
jid?: string,
callback?: (status: Strophe$Status, condition: string) => any,
wait?: number,
hold?: number,
route?: string): void;

/**
 * Function: attach
 * Attach to an already created and authenticated BOSH session.
 * 
 * This function is provided to allow Strophe to attach to BOSH
 * sessions which have been created externally, perhaps by a Web
 * application.  This is often used to support auto-login type features
 * without putting user credentials into the page.
 * 
 * Parameters:
 *   (String) jid - The full JID that is bound by the session.
 *   (String) sid - The SID of the BOSH session.
 *   (String) rid - The current RID of the BOSH session.  This RID
 *     will be used by the next request.
 *   (Function) callback The connect callback function.
 *   (Integer) wait - The optional HTTPBIND wait value.  This is the
 *     time the server will wait before returning an empty result for
 *     a request.  The default setting of 60 seconds is recommended.
 *     Other settings will require tweaks to the Strophe.TIMEOUT value.
 *   (Integer) hold - The optional HTTPBIND hold value.  This is the
 *     number of connections the server will hold at one time.  This
 *     should almost always be set to 1 (the default).
 *   (Integer) wind - The optional HTTBIND window value.  This is the
 *     allowed range of request ids that are valid.  The default is 5.
 */
attach(
jid: string,
sid: string,
rid: string,
callback?: (status: Strophe$Status, condition: string) => any,
wait?: number,
hold?: number,
wind?: number): void;

/**
 * Function: xmlInput
 * User overrideable function that receives XML data coming into the
 * connection.
 * 
 * The default function does nothing.  User code can override this with
 * > Strophe.Connection.xmlInput = function (elem) {
 * >   (user code)
 * > };
 * 
 * Due to limitations of current Browsers' XML-Parsers the opening and closing
 * <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
 * 
 * BOSH-Connections will have all stanzas wrapped in a <body> tag. See
 * <Strophe.Bosh.strip> if you want to strip this tag.
 * 
 * Parameters:
 *   (XMLElement) elem - The XML data received by the connection.
 */
xmlInput(elem: Element): void;

/**
 * Function: xmlOutput
 * User overrideable function that receives XML data sent to the
 * connection.
 * 
 * The default function does nothing.  User code can override this with
 * > Strophe.Connection.xmlOutput = function (elem) {
 * >   (user code)
 * > };
 * 
 * Due to limitations of current Browsers' XML-Parsers the opening and closing
 * <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
 * 
 * BOSH-Connections will have all stanzas wrapped in a <body> tag. See
 * <Strophe.Bosh.strip> if you want to strip this tag.
 * 
 * Parameters:
 *   (XMLElement) elem - The XMLdata sent by the connection.
 */
xmlOutput(elem: Element): void;

/**
 * Function: rawInput
 * User overrideable function that receives raw data coming into the
 * connection.
 * 
 * The default function does nothing.  User code can override this with
 * > Strophe.Connection.rawInput = function (data) {
 * >   (user code)
 * > };
 * 
 * Parameters:
 *   (String) data - The data received by the connection.
 */
rawInput(data: string): void;

/**
 * Function: rawOutput
 * User overrideable function that receives raw data sent to the
 * connection.
 * 
 * The default function does nothing.  User code can override this with
 * > Strophe.Connection.rawOutput = function (data) {
 * >   (user code)
 * > };
 * 
 * Parameters:
 *   (String) data - The data sent by the connection.
 */
rawOutput(data: string): void;

/**
 * Function: send
 * Send a stanza.
 * 
 * This function is called to push data onto the send queue to
 * go out over the wire.  Whenever a request is sent to the BOSH
 * server, all pending data is sent and the queue is flushed.
 * 
 * Parameters:
 *   (XMLElement |
 *    [XMLElement] |
 *    Strophe.Builder) elem - The stanza to send.
 */
send(elem: Element | Element[] | Strophe$Builder): void;

/**
 * Function: flush
 * Immediately send any pending outgoing data.
 * 
 * Normally send() queues outgoing data until the next idle period
 * (100ms), which optimizes network use in the common cases when
 * several send()s are called in succession. flush() can be used to
 * immediately send all pending data.
 */
flush(): void;

/**
 * Function: sendIQ
 * Helper function to send IQ stanzas.
 * 
 * Parameters:
 *   (XMLElement) elem - The stanza to send.
 *   (Function) callback - The callback function for a successful request.
 *   (Function) errback - The callback function for a failed or timed
 *     out request.  On timeout, the stanza will be null.
 *   (Integer) timeout - The time specified in milliseconds for a
 *     timeout to occur.
 * 
 * Returns:
 *   The id used to send the IQ.
 */
sendIQ(
elem: Element | Strophe$Builder,
callback?: (stanza: Element) => any,
errback?: (stanza: Element) => any,
timeout?: number): string;

/**
 * Function: addTimedHandler
 * Add a timed handler to the connection.
 * 
 * This function adds a timed handler.  The provided handler will
 * be called every period milliseconds until it returns false,
 * the connection is terminated, or the handler is removed.  Handlers
 * that wish to continue being invoked should return true.
 * 
 * Because of method binding it is necessary to save the result of
 * this function if you wish to remove a handler with
 * deleteTimedHandler().
 * 
 * Note that user handlers are not active until authentication is
 * successful.
 * 
 * Parameters:
 *   (Integer) period - The period of the handler.
 *   (Function) handler - The callback function.
 * 
 * Returns:
 *   A reference to the handler that can be used to remove it.
 */
addTimedHandler(period: number, handler: () => boolean): any;

/**
 * Function: deleteTimedHandler
 * Delete a timed handler for a connection.
 * 
 * This function removes a timed handler from the connection.  The
 * handRef parameter is *not* the function passed to addTimedHandler(),
 * but is the reference returned from addTimedHandler().
 * 
 * Parameters:
 *   (Strophe.TimedHandler) handRef - The handler reference.
 */
deleteTimedHandler(handRef: any): void;

/**
 * Function: addHandler
 * Add a stanza handler for the connection.
 * 
 * This function adds a stanza handler to the connection.  The
 * handler callback will be called for any stanza that matches
 * the parameters.  Note that if multiple parameters are supplied,
 * they must all match for the handler to be invoked.
 * 
 * The handler will receive the stanza that triggered it as its argument.
 * *The handler should return true if it is to be invoked again;
 * returning false will remove the handler after it returns.*
 * 
 * As a convenience, the ns parameters applies to the top level element
 * and also any of its immediate children.  This is primarily to make
 * matching /iq/query elements easy.
 * 
 * The options argument contains handler matching flags that affect how
 * matches are determined. Currently the only flag is matchBare (a
 * boolean). When matchBare is true, the from parameter and the from
 * attribute on the stanza will be matched as bare JIDs instead of
 * full JIDs. To use this, pass {matchBare: true} as the value of
 * options. The default value for matchBare is false.
 * 
 * The return value should be saved if you wish to remove the handler
 * with deleteHandler().
 * 
 * Parameters:
 *   (Function) handler - The user callback.
 *   (String) ns - The namespace to match.
 *   (String) name - The stanza name to match.
 *   (String) type - The stanza type attribute to match.
 *   (String) id - The stanza id attribute to match.
 *   (String) from - The stanza from attribute to match.
 *   (String) options - The handler options
 * 
 * Returns:
 *   A reference to the handler that can be used to remove it.
 */
addHandler(
handler: (stanza: Element) => boolean,
ns: string,
name: string,
type?: string,
id?: string,
from?: string,
options?: {
matchBare: boolean
}): any;

/**
 * Function: deleteHandler
 * Delete a stanza handler for a connection.
 * 
 * This function removes a stanza handler from the connection.  The
 * handRef parameter is *not* the function passed to addHandler(),
 * but is the reference returned from addHandler().
 * 
 * Parameters:
 *   (Strophe.Handler) handRef - The handler reference.
 */
deleteHandler(handRef: any): void;

/**
 * Function: disconnect
 * Start the graceful disconnection process.
 * 
 * This function starts the disconnection process.  This process starts
 * by sending unavailable presence and sending BOSH body of type
 * terminate.  A timeout handler makes sure that disconnection happens
 * even if the BOSH server does not respond.
 * If the Connection object isn't connected, at least tries to abort all pending requests
 * so the connection object won't generate successful requests (which were already opened).
 * 
 * The user supplied connection callback will be notified of the
 * progress as this process happens.
 * 
 * Parameters:
 *   (String) reason - The reason the disconnect is occuring.
 */
disconnect(reason: string): void
}


/**
 * Interface: Strophe.SASLMechanism
 * 
 * encapsulates SASL authentication mechanisms.
 * 
 * User code may override the priority for each mechanism or disable it completely.
 * See <priority> for information about changing priority and <test> for informatian on
 * how to disable a mechanism.
 * 
 * By default, all mechanisms are enabled and the priorities are
 * 
 * SCRAM-SHA1 - 40
 * DIGEST-MD5 - 30
 * Plain - 20
 */
declare interface Strophe$SASLMechanism {

/**
 * Function: test
 * Checks if mechanism able to run.
 * To disable a mechanism, make this return false;
 * 
 * To disable plain authentication run
 * > Strophe.SASLPlain.test = function() {
 * >   return false;
 * > }
 * 
 * See <SASL mechanisms> for a list of available mechanisms.
 * 
 * Parameters:
 *    (Strophe.Connection) connection - Target Connection.
 * 
 * Returns:
 *    (Boolean) If mechanism was able to run.
 */
test(connection: Strophe$Connection): boolean,

/**
 * Variable: priority
 * Determines which <SASLMechanism> is chosen for authentication (Higher is better).
 * Users may override this to prioritize mechanisms differently.
 * 
 * In the default configuration the priorities are
 * 
 * SCRAM-SHA1 - 40
 * DIGEST-MD5 - 30
 * Plain - 20
 * 
 * Example: (This will cause Strophe to choose the mechanism that the server sent first)
 * 
 * > Strophe.SASLMD5.priority = Strophe.SASLSHA1.priority;
 * 
 * See <SASL mechanisms> for a list of available mechanisms.
 */
priority: number,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 


/**
 * Constants: SASL mechanisms
 * Available authentication mechanisms
 * 
 * Strophe.SASLAnonymous - SASL Anonymous authentication.
 * Strophe.SASLPlain - SASL Plain authentication.
 * Strophe.SASLMD5 - SASL Digest-MD5 authentication
 * Strophe.SASLSHA1 - SASL SCRAM-SHA1 authentication
 */
declare var Strophe$SASLAnonymous: Strophe$SASLMechanism;

declare var Strophe$SASLPlain: Strophe$SASLMechanism;

declare var Strophe$SASLSHA1: Strophe$SASLMechanism;

declare var Strophe$SASLMD5: Strophe$SASLMechanism;
	
/**
 * Function: $build
 * Create a Strophe.Builder.
 * This is an alias for 'new Strophe.Builder(name, attrs)'.
 * 
 * Parameters:
 *   (String) name - The root element name.
 *   (Object) attrs - The attributes for the root element in object notation.
 * 
 * Returns:
 *   A new Strophe.Builder object.
 */
declare export function $build(name: string, attrs?: any): Strophe$Strophe$Builder

	
/**
 * Function: $msg
 * Create a Strophe.Builder with a <message/> element as the root.
 * 
 * Parmaeters:
 *   (Object) attrs - The <message/> element attributes in object notation.
 * 
 * Returns:
 *   A new Strophe.Builder object.
 */
declare export function $msg(attrs?: any): Strophe$Strophe$Builder

	
/**
 * Function: $iq
 * Create a Strophe.Builder with an <iq/> element as the root.
 * 
 * Parameters:
 *   (Object) attrs - The <iq/> element attributes in object notation.
 * 
 * Returns:
 *   A new Strophe.Builder object.
 */
declare export function $iq(attrs?: any): Strophe$Strophe$Builder

	
/**
 * Function: $pres
 * Create a Strophe.Builder with a <presence/> element as the root.
 * 
 * Parameters:
 *   (Object) attrs - The <presence/> element attributes in object notation.
 * 
 * Returns:
 *   A new Strophe.Builder object.
 */
declare export function $pres(attrs?: any): Strophe$Strophe$Builder

	import type {
          _Strophe,_$build,_$msg,_$iq,_$pres
        } from 'strophe';

	declare module 'global' {
        declare var Strophe: typeof _Strophe;
	declare type Strophe$Status = _Strophe.Strophe$Status;

declare type Strophe$LogLevel = _Strophe.Strophe$LogLevel;

declare type Strophe$Builder = _Strophe.Strophe$Builder;

declare interface Strophe$ConnectionOptions {
keepalive?: boolean,
protocol?: string,
sync?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type Strophe$Connection = {} & _Strophe.Strophe$Connection



/**
 * Interface: Strophe.SASLMechanism
 * 
 * encapsulates SASL authentication mechanisms.
 * 
 * User code may override the priority for each mechanism or disable it completely.
 * See <priority> for information about changing priority and <test> for informatian on
 * how to disable a mechanism.
 * 
 * By default, all mechanisms are enabled and the priorities are
 * 
 * SCRAM-SHA1 - 40
 * DIGEST-MD5 - 30
 * Plain - 20
 */
declare interface Strophe$SASLMechanism {

/**
 * Function: test
 * Checks if mechanism able to run.
 * To disable a mechanism, make this return false;
 * 
 * To disable plain authentication run
 * > Strophe.SASLPlain.test = function() {
 * >   return false;
 * > }
 * 
 * See <SASL mechanisms> for a list of available mechanisms.
 * 
 * Parameters:
 *    (Strophe.Connection) connection - Target Connection.
 * 
 * Returns:
 *    (Boolean) If mechanism was able to run.
 */
test(connection: Strophe$Connection): boolean,

/**
 * Variable: priority
 * Determines which <SASLMechanism> is chosen for authentication (Higher is better).
 * Users may override this to prioritize mechanisms differently.
 * 
 * In the default configuration the priorities are
 * 
 * SCRAM-SHA1 - 40
 * DIGEST-MD5 - 30
 * Plain - 20
 * 
 * Example: (This will cause Strophe to choose the mechanism that the server sent first)
 * 
 * > Strophe.SASLMD5.priority = Strophe.SASLSHA1.priority;
 * 
 * See <SASL mechanisms> for a list of available mechanisms.
 */
priority: number,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 
	declare var $build: typeof _$build;
	declare var $msg: typeof _$msg;
	declare var $iq: typeof _$iq;
	declare var $pres: typeof _$pres;
    }

	declare module 'Strophe' {
        declare module.exports: typeof Strophe

    }

	declare module '$build' {
        declare module.exports: typeof $build

    }

	declare module '$msg' {
        declare module.exports: typeof $msg

    }

	declare module '$iq' {
        declare module.exports: typeof $iq

    }

	declare module '$pres' {
        declare module.exports: typeof $pres

    }

    }
