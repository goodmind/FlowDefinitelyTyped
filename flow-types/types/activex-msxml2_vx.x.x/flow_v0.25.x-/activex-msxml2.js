declare module "activex-msxml2" {
  declare var npm$namespace$MSXML2: {
    _SCHEMACONTENTTYPE: typeof MSXML2$_SCHEMACONTENTTYPE,
    _SCHEMADERIVATIONMETHOD: typeof MSXML2$_SCHEMADERIVATIONMETHOD,
    _SCHEMAPROCESSCONTENTS: typeof MSXML2$_SCHEMAPROCESSCONTENTS,
    _SCHEMATYPEVARIETY: typeof MSXML2$_SCHEMATYPEVARIETY,
    _SCHEMAUSE: typeof MSXML2$_SCHEMAUSE,
    _SCHEMAWHITESPACE: typeof MSXML2$_SCHEMAWHITESPACE,
    _SERVERXMLHTTP_OPTION: typeof MSXML2$_SERVERXMLHTTP_OPTION,
    _SOMITEMTYPE: typeof MSXML2$_SOMITEMTYPE,
    _SXH_PROXY_SETTING: typeof MSXML2$_SXH_PROXY_SETTING,
    _SXH_SERVER_CERT_OPTION: typeof MSXML2$_SXH_SERVER_CERT_OPTION,
    _XHR_PROPERTY: typeof MSXML2$_XHR_PROPERTY,
    DOMNodeType: typeof MSXML2$DOMNodeType,
    SCHEMACONTENTTYPE: typeof MSXML2$SCHEMACONTENTTYPE,
    SCHEMADERIVATIONMETHOD: typeof MSXML2$SCHEMADERIVATIONMETHOD,
    SCHEMAPROCESSCONTENTS: typeof MSXML2$SCHEMAPROCESSCONTENTS,
    SCHEMATYPEVARIETY: typeof MSXML2$SCHEMATYPEVARIETY,
    SCHEMAUSE: typeof MSXML2$SCHEMAUSE,
    SCHEMAWHITESPACE: typeof MSXML2$SCHEMAWHITESPACE,
    SERVERXMLHTTP_OPTION: typeof MSXML2$SERVERXMLHTTP_OPTION,
    SOMITEMTYPE: typeof MSXML2$SOMITEMTYPE,
    SXH_PROXY_SETTING: typeof MSXML2$SXH_PROXY_SETTING,
    SXH_SERVER_CERT_OPTION: typeof MSXML2$SXH_SERVER_CERT_OPTION,
    tagDOMNodeType: typeof MSXML2$tagDOMNodeType,
    XHR_PROPERTY: typeof MSXML2$XHR_PROPERTY,
    DOMDocument60: typeof MSXML2$DOMDocument60,
    FreeThreadedDOMDocument60: typeof MSXML2$FreeThreadedDOMDocument60,
    FreeThreadedXMLHTTP60: typeof MSXML2$FreeThreadedXMLHTTP60,
    ISchema: typeof MSXML2$ISchema,
    ISchemaItem: typeof MSXML2$ISchemaItem,
    ISequentialStream: typeof MSXML2$ISequentialStream,
    IVBSAXAttributes: typeof MSXML2$IVBSAXAttributes,
    IVBSAXContentHandler: typeof MSXML2$IVBSAXContentHandler,
    IVBSAXDTDHandler: typeof MSXML2$IVBSAXDTDHandler,
    IVBSAXEntityResolver: typeof MSXML2$IVBSAXEntityResolver,
    IVBSAXErrorHandler: typeof MSXML2$IVBSAXErrorHandler,
    IVBSAXLocator: typeof MSXML2$IVBSAXLocator,
    IXMLDOMAttribute: typeof MSXML2$IXMLDOMAttribute,
    IXMLDOMCDATASection: typeof MSXML2$IXMLDOMCDATASection,
    IXMLDOMComment: typeof MSXML2$IXMLDOMComment,
    IXMLDOMDocument: typeof MSXML2$IXMLDOMDocument,
    IXMLDOMDocumentFragment: typeof MSXML2$IXMLDOMDocumentFragment,
    IXMLDOMDocumentType: typeof MSXML2$IXMLDOMDocumentType,
    IXMLDOMElement: typeof MSXML2$IXMLDOMElement,
    IXMLDOMEntityReference: typeof MSXML2$IXMLDOMEntityReference,
    IXMLDOMImplementation: typeof MSXML2$IXMLDOMImplementation,
    IXMLDOMNode: typeof MSXML2$IXMLDOMNode,
    IXMLDOMParseError: typeof MSXML2$IXMLDOMParseError,
    IXMLDOMProcessingInstruction: typeof MSXML2$IXMLDOMProcessingInstruction,
    IXMLDOMText: typeof MSXML2$IXMLDOMText,
    IXMLHTTPRequest2Callback: typeof MSXML2$IXMLHTTPRequest2Callback,
    IXSLProcessor: typeof MSXML2$IXSLProcessor,
    MXHTMLWriter60: typeof MSXML2$MXHTMLWriter60,
    MXNamespaceManager60: typeof MSXML2$MXNamespaceManager60,
    MXXMLWriter60: typeof MSXML2$MXXMLWriter60,
    SAXAttributes60: typeof MSXML2$SAXAttributes60,
    SAXXMLReader60: typeof MSXML2$SAXXMLReader60,
    ServerXMLHTTP60: typeof MSXML2$ServerXMLHTTP60,
    XMLHTTP60: typeof MSXML2$XMLHTTP60,
    XSLTemplate60: typeof MSXML2$XSLTemplate60
  };

  /**
   * Schema Object Model Content Types
   */

  declare var MSXML2$_SCHEMACONTENTTYPE: {|
    +SCHEMACONTENTTYPE_ELEMENTONLY: 2, // 2
    +SCHEMACONTENTTYPE_EMPTY: 0, // 0
    +SCHEMACONTENTTYPE_MIXED: 3, // 3
    +SCHEMACONTENTTYPE_TEXTONLY: 1 // 1
  |};

  /**
   * Schema Object Model Filters
   */

  declare var MSXML2$_SCHEMADERIVATIONMETHOD: {|
    +SCHEMADERIVATIONMETHOD_ALL: 255, // 255
    +SCHEMADERIVATIONMETHOD_EMPTY: 0, // 0
    +SCHEMADERIVATIONMETHOD_EXTENSION: 2, // 2
    +SCHEMADERIVATIONMETHOD_LIST: 8, // 8
    +SCHEMADERIVATIONMETHOD_NONE: 256, // 256
    +SCHEMADERIVATIONMETHOD_RESTRICTION: 4, // 4
    +SCHEMADERIVATIONMETHOD_SUBSTITUTION: 1, // 1
    +SCHEMADERIVATIONMETHOD_UNION: 16 // 16
  |};

  /**
   * Schema Object Model Process Contents
   */

  declare var MSXML2$_SCHEMAPROCESSCONTENTS: {|
    +SCHEMAPROCESSCONTENTS_LAX: 2, // 2
    +SCHEMAPROCESSCONTENTS_NONE: 0, // 0
    +SCHEMAPROCESSCONTENTS_SKIP: 1, // 1
    +SCHEMAPROCESSCONTENTS_STRICT: 3 // 3
  |};

  /**
   * Schema Object Model Type variety values
   */

  declare var MSXML2$_SCHEMATYPEVARIETY: {|
    +SCHEMATYPEVARIETY_ATOMIC: 0, // 0
    +SCHEMATYPEVARIETY_LIST: 1, // 1
    +SCHEMATYPEVARIETY_NONE: -1, // -1
    +SCHEMATYPEVARIETY_UNION: 2 // 2
  |};

  /**
   * Schema Object Model Attribute Uses
   */

  declare var MSXML2$_SCHEMAUSE: {|
    +SCHEMAUSE_OPTIONAL: 0, // 0
    +SCHEMAUSE_PROHIBITED: 1, // 1
    +SCHEMAUSE_REQUIRED: 2 // 2
  |};

  /**
   * Schema Object Model Whitespace facet values
   */

  declare var MSXML2$_SCHEMAWHITESPACE: {|
    +SCHEMAWHITESPACE_COLLAPSE: 2, // 2
    +SCHEMAWHITESPACE_NONE: -1, // -1
    +SCHEMAWHITESPACE_PRESERVE: 0, // 0
    +SCHEMAWHITESPACE_REPLACE: 1 // 1
  |};

  declare var MSXML2$_SERVERXMLHTTP_OPTION: {|
    +SXH_OPTION_ESCAPE_PERCENT_IN_URL: 1, // 1
    +SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS: 2, // 2
    +SXH_OPTION_SELECT_CLIENT_SSL_CERT: 3, // 3
    +SXH_OPTION_URL: -1, // -1
    +SXH_OPTION_URL_CODEPAGE: 0 // 0
  |};

  /**
   * Schema Object Model Item Types
   */

  declare var MSXML2$_SOMITEMTYPE: {|
    +SOMITEM_ALL: 16641, // 16641
    +SOMITEM_ANNOTATION: 4100, // 4100
    +SOMITEM_ANY: 16385, // 16385
    +SOMITEM_ANYATTRIBUTE: 16386, // 16386
    +SOMITEM_ANYTYPE: 8192, // 8192
    +SOMITEM_ATTRIBUTE: 4097, // 4097
    +SOMITEM_ATTRIBUTEGROUP: 4098, // 4098
    +SOMITEM_CHOICE: 16642, // 16642
    +SOMITEM_COMPLEXTYPE: 9216, // 9216
    +SOMITEM_DATATYPE: 8448, // 8448
    +SOMITEM_DATATYPE_ANYSIMPLETYPE: 8703, // 8703
    +SOMITEM_DATATYPE_ANYTYPE: 8449, // 8449
    +SOMITEM_DATATYPE_ANYURI: 8450, // 8450
    +SOMITEM_DATATYPE_BASE64BINARY: 8451, // 8451
    +SOMITEM_DATATYPE_BOOLEAN: 8452, // 8452
    +SOMITEM_DATATYPE_BYTE: 8453, // 8453
    +SOMITEM_DATATYPE_DATE: 8454, // 8454
    +SOMITEM_DATATYPE_DATETIME: 8455, // 8455
    +SOMITEM_DATATYPE_DAY: 8456, // 8456
    +SOMITEM_DATATYPE_DECIMAL: 8457, // 8457
    +SOMITEM_DATATYPE_DOUBLE: 8458, // 8458
    +SOMITEM_DATATYPE_DURATION: 8459, // 8459
    +SOMITEM_DATATYPE_ENTITIES: 8460, // 8460
    +SOMITEM_DATATYPE_ENTITY: 8461, // 8461
    +SOMITEM_DATATYPE_FLOAT: 8462, // 8462
    +SOMITEM_DATATYPE_HEXBINARY: 8463, // 8463
    +SOMITEM_DATATYPE_ID: 8464, // 8464
    +SOMITEM_DATATYPE_IDREF: 8465, // 8465
    +SOMITEM_DATATYPE_IDREFS: 8466, // 8466
    +SOMITEM_DATATYPE_INT: 8467, // 8467
    +SOMITEM_DATATYPE_INTEGER: 8468, // 8468
    +SOMITEM_DATATYPE_LANGUAGE: 8469, // 8469
    +SOMITEM_DATATYPE_LONG: 8470, // 8470
    +SOMITEM_DATATYPE_MONTH: 8471, // 8471
    +SOMITEM_DATATYPE_MONTHDAY: 8472, // 8472
    +SOMITEM_DATATYPE_NAME: 8473, // 8473
    +SOMITEM_DATATYPE_NCNAME: 8474, // 8474
    +SOMITEM_DATATYPE_NEGATIVEINTEGER: 8475, // 8475
    +SOMITEM_DATATYPE_NMTOKEN: 8476, // 8476
    +SOMITEM_DATATYPE_NMTOKENS: 8477, // 8477
    +SOMITEM_DATATYPE_NONNEGATIVEINTEGER: 8478, // 8478
    +SOMITEM_DATATYPE_NONPOSITIVEINTEGER: 8479, // 8479
    +SOMITEM_DATATYPE_NORMALIZEDSTRING: 8480, // 8480
    +SOMITEM_DATATYPE_NOTATION: 8481, // 8481
    +SOMITEM_DATATYPE_POSITIVEINTEGER: 8482, // 8482
    +SOMITEM_DATATYPE_QNAME: 8483, // 8483
    +SOMITEM_DATATYPE_SHORT: 8484, // 8484
    +SOMITEM_DATATYPE_STRING: 8485, // 8485
    +SOMITEM_DATATYPE_TIME: 8486, // 8486
    +SOMITEM_DATATYPE_TOKEN: 8487, // 8487
    +SOMITEM_DATATYPE_UNSIGNEDBYTE: 8488, // 8488
    +SOMITEM_DATATYPE_UNSIGNEDINT: 8489, // 8489
    +SOMITEM_DATATYPE_UNSIGNEDLONG: 8490, // 8490
    +SOMITEM_DATATYPE_UNSIGNEDSHORT: 8491, // 8491
    +SOMITEM_DATATYPE_YEAR: 8492, // 8492
    +SOMITEM_DATATYPE_YEARMONTH: 8493, // 8493
    +SOMITEM_ELEMENT: 16387, // 16387
    +SOMITEM_EMPTYPARTICLE: 16644, // 16644
    +SOMITEM_GROUP: 16640, // 16640
    +SOMITEM_IDENTITYCONSTRAINT: 4352, // 4352
    +SOMITEM_KEY: 4353, // 4353
    +SOMITEM_KEYREF: 4354, // 4354
    +SOMITEM_NOTATION: 4099, // 4099
    +SOMITEM_NULL: 2048, // 2048
    +SOMITEM_NULL_ANY: 18433, // 18433
    +SOMITEM_NULL_ANYATTRIBUTE: 18434, // 18434
    +SOMITEM_NULL_ELEMENT: 18435, // 18435
    +SOMITEM_NULL_TYPE: 10240, // 10240
    +SOMITEM_PARTICLE: 16384, // 16384
    +SOMITEM_SCHEMA: 4096, // 4096
    +SOMITEM_SEQUENCE: 16643, // 16643
    +SOMITEM_SIMPLETYPE: 8704, // 8704
    +SOMITEM_UNIQUE: 4355 // 4355
  |};

  declare var MSXML2$_SXH_PROXY_SETTING: {|
    +SXH_PROXY_SET_DEFAULT: 0, // 0
    +SXH_PROXY_SET_DIRECT: 1, // 1
    +SXH_PROXY_SET_PRECONFIG: 0, // 0
    +SXH_PROXY_SET_PROXY: 2 // 2
  |};

  declare var MSXML2$_SXH_SERVER_CERT_OPTION: {|
    +SXH_SERVER_CERT_IGNORE_ALL_SERVER_ERRORS: 13056, // 13056
    +SXH_SERVER_CERT_IGNORE_CERT_CN_INVALID: 4096, // 4096
    +SXH_SERVER_CERT_IGNORE_CERT_DATE_INVALID: 8192, // 8192
    +SXH_SERVER_CERT_IGNORE_UNKNOWN_CA: 256, // 256
    +SXH_SERVER_CERT_IGNORE_WRONG_USAGE: 512 // 512
  |};

  /**
   * Options for XHR properties
   */

  declare var MSXML2$_XHR_PROPERTY: {|
    +XHR_PROP_EXTENDED_ERROR: 6, // 6
    +XHR_PROP_IGNORE_CERT_ERRORS: 8, // 8
    +XHR_PROP_MAX_CONNECTIONS: 11, // 11
    +XHR_PROP_NO_AUTH: 1, // 1
    +XHR_PROP_NO_CACHE: 5, // 5
    +XHR_PROP_NO_CRED_PROMPT: 0, // 0
    +XHR_PROP_NO_DEFAULT_HEADERS: 3, // 3
    +XHR_PROP_ONDATA_THRESHOLD: 9, // 9
    +XHR_PROP_QUERY_STRING_UTF8: 7, // 7
    +XHR_PROP_REPORT_REDIRECT_STATUS: 4, // 4
    +XHR_PROP_SET_ENTERPRISEID: 10, // 10
    +XHR_PROP_TIMEOUT: 2 // 2
  |};

  /**
   * Constants that define a node's type
   */

  declare var MSXML2$DOMNodeType: {|
    +NODE_ATTRIBUTE: 2, // 2
    +NODE_CDATA_SECTION: 4, // 4
    +NODE_COMMENT: 8, // 8
    +NODE_DOCUMENT: 9, // 9
    +NODE_DOCUMENT_FRAGMENT: 11, // 11
    +NODE_DOCUMENT_TYPE: 10, // 10
    +NODE_ELEMENT: 1, // 1
    +NODE_ENTITY: 6, // 6
    +NODE_ENTITY_REFERENCE: 5, // 5
    +NODE_INVALID: 0, // 0
    +NODE_NOTATION: 12, // 12
    +NODE_PROCESSING_INSTRUCTION: 7, // 7
    +NODE_TEXT: 3 // 3
  |};

  /**
   * Schema Object Model Content Types
   */

  declare var MSXML2$SCHEMACONTENTTYPE: {|
    +SCHEMACONTENTTYPE_ELEMENTONLY: 2, // 2
    +SCHEMACONTENTTYPE_EMPTY: 0, // 0
    +SCHEMACONTENTTYPE_MIXED: 3, // 3
    +SCHEMACONTENTTYPE_TEXTONLY: 1 // 1
  |};

  /**
   * Schema Object Model Filters
   */

  declare var MSXML2$SCHEMADERIVATIONMETHOD: {|
    +SCHEMADERIVATIONMETHOD_ALL: 255, // 255
    +SCHEMADERIVATIONMETHOD_EMPTY: 0, // 0
    +SCHEMADERIVATIONMETHOD_EXTENSION: 2, // 2
    +SCHEMADERIVATIONMETHOD_LIST: 8, // 8
    +SCHEMADERIVATIONMETHOD_NONE: 256, // 256
    +SCHEMADERIVATIONMETHOD_RESTRICTION: 4, // 4
    +SCHEMADERIVATIONMETHOD_SUBSTITUTION: 1, // 1
    +SCHEMADERIVATIONMETHOD_UNION: 16 // 16
  |};

  /**
   * Schema Object Model Process Contents
   */

  declare var MSXML2$SCHEMAPROCESSCONTENTS: {|
    +SCHEMAPROCESSCONTENTS_LAX: 2, // 2
    +SCHEMAPROCESSCONTENTS_NONE: 0, // 0
    +SCHEMAPROCESSCONTENTS_SKIP: 1, // 1
    +SCHEMAPROCESSCONTENTS_STRICT: 3 // 3
  |};

  /**
   * Schema Object Model Type variety values
   */

  declare var MSXML2$SCHEMATYPEVARIETY: {|
    +SCHEMATYPEVARIETY_ATOMIC: 0, // 0
    +SCHEMATYPEVARIETY_LIST: 1, // 1
    +SCHEMATYPEVARIETY_NONE: -1, // -1
    +SCHEMATYPEVARIETY_UNION: 2 // 2
  |};

  /**
   * Schema Object Model Attribute Uses
   */

  declare var MSXML2$SCHEMAUSE: {|
    +SCHEMAUSE_OPTIONAL: 0, // 0
    +SCHEMAUSE_PROHIBITED: 1, // 1
    +SCHEMAUSE_REQUIRED: 2 // 2
  |};

  /**
   * Schema Object Model Whitespace facet values
   */

  declare var MSXML2$SCHEMAWHITESPACE: {|
    +SCHEMAWHITESPACE_COLLAPSE: 2, // 2
    +SCHEMAWHITESPACE_NONE: -1, // -1
    +SCHEMAWHITESPACE_PRESERVE: 0, // 0
    +SCHEMAWHITESPACE_REPLACE: 1 // 1
  |};

  /**
   * Options for ServerXMLHTTPRequest Option property
   */

  declare var MSXML2$SERVERXMLHTTP_OPTION: {|
    +SXH_OPTION_ESCAPE_PERCENT_IN_URL: 1, // 1
    +SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS: 2, // 2
    +SXH_OPTION_SELECT_CLIENT_SSL_CERT: 3, // 3
    +SXH_OPTION_URL: -1, // -1
    +SXH_OPTION_URL_CODEPAGE: 0 // 0
  |};

  /**
   * Schema Object Model Item Types
   */

  declare var MSXML2$SOMITEMTYPE: {|
    +SOMITEM_ALL: 16641, // 16641
    +SOMITEM_ANNOTATION: 4100, // 4100
    +SOMITEM_ANY: 16385, // 16385
    +SOMITEM_ANYATTRIBUTE: 16386, // 16386
    +SOMITEM_ANYTYPE: 8192, // 8192
    +SOMITEM_ATTRIBUTE: 4097, // 4097
    +SOMITEM_ATTRIBUTEGROUP: 4098, // 4098
    +SOMITEM_CHOICE: 16642, // 16642
    +SOMITEM_COMPLEXTYPE: 9216, // 9216
    +SOMITEM_DATATYPE: 8448, // 8448
    +SOMITEM_DATATYPE_ANYSIMPLETYPE: 8703, // 8703
    +SOMITEM_DATATYPE_ANYTYPE: 8449, // 8449
    +SOMITEM_DATATYPE_ANYURI: 8450, // 8450
    +SOMITEM_DATATYPE_BASE64BINARY: 8451, // 8451
    +SOMITEM_DATATYPE_BOOLEAN: 8452, // 8452
    +SOMITEM_DATATYPE_BYTE: 8453, // 8453
    +SOMITEM_DATATYPE_DATE: 8454, // 8454
    +SOMITEM_DATATYPE_DATETIME: 8455, // 8455
    +SOMITEM_DATATYPE_DAY: 8456, // 8456
    +SOMITEM_DATATYPE_DECIMAL: 8457, // 8457
    +SOMITEM_DATATYPE_DOUBLE: 8458, // 8458
    +SOMITEM_DATATYPE_DURATION: 8459, // 8459
    +SOMITEM_DATATYPE_ENTITIES: 8460, // 8460
    +SOMITEM_DATATYPE_ENTITY: 8461, // 8461
    +SOMITEM_DATATYPE_FLOAT: 8462, // 8462
    +SOMITEM_DATATYPE_HEXBINARY: 8463, // 8463
    +SOMITEM_DATATYPE_ID: 8464, // 8464
    +SOMITEM_DATATYPE_IDREF: 8465, // 8465
    +SOMITEM_DATATYPE_IDREFS: 8466, // 8466
    +SOMITEM_DATATYPE_INT: 8467, // 8467
    +SOMITEM_DATATYPE_INTEGER: 8468, // 8468
    +SOMITEM_DATATYPE_LANGUAGE: 8469, // 8469
    +SOMITEM_DATATYPE_LONG: 8470, // 8470
    +SOMITEM_DATATYPE_MONTH: 8471, // 8471
    +SOMITEM_DATATYPE_MONTHDAY: 8472, // 8472
    +SOMITEM_DATATYPE_NAME: 8473, // 8473
    +SOMITEM_DATATYPE_NCNAME: 8474, // 8474
    +SOMITEM_DATATYPE_NEGATIVEINTEGER: 8475, // 8475
    +SOMITEM_DATATYPE_NMTOKEN: 8476, // 8476
    +SOMITEM_DATATYPE_NMTOKENS: 8477, // 8477
    +SOMITEM_DATATYPE_NONNEGATIVEINTEGER: 8478, // 8478
    +SOMITEM_DATATYPE_NONPOSITIVEINTEGER: 8479, // 8479
    +SOMITEM_DATATYPE_NORMALIZEDSTRING: 8480, // 8480
    +SOMITEM_DATATYPE_NOTATION: 8481, // 8481
    +SOMITEM_DATATYPE_POSITIVEINTEGER: 8482, // 8482
    +SOMITEM_DATATYPE_QNAME: 8483, // 8483
    +SOMITEM_DATATYPE_SHORT: 8484, // 8484
    +SOMITEM_DATATYPE_STRING: 8485, // 8485
    +SOMITEM_DATATYPE_TIME: 8486, // 8486
    +SOMITEM_DATATYPE_TOKEN: 8487, // 8487
    +SOMITEM_DATATYPE_UNSIGNEDBYTE: 8488, // 8488
    +SOMITEM_DATATYPE_UNSIGNEDINT: 8489, // 8489
    +SOMITEM_DATATYPE_UNSIGNEDLONG: 8490, // 8490
    +SOMITEM_DATATYPE_UNSIGNEDSHORT: 8491, // 8491
    +SOMITEM_DATATYPE_YEAR: 8492, // 8492
    +SOMITEM_DATATYPE_YEARMONTH: 8493, // 8493
    +SOMITEM_ELEMENT: 16387, // 16387
    +SOMITEM_EMPTYPARTICLE: 16644, // 16644
    +SOMITEM_GROUP: 16640, // 16640
    +SOMITEM_IDENTITYCONSTRAINT: 4352, // 4352
    +SOMITEM_KEY: 4353, // 4353
    +SOMITEM_KEYREF: 4354, // 4354
    +SOMITEM_NOTATION: 4099, // 4099
    +SOMITEM_NULL: 2048, // 2048
    +SOMITEM_NULL_ANY: 18433, // 18433
    +SOMITEM_NULL_ANYATTRIBUTE: 18434, // 18434
    +SOMITEM_NULL_ELEMENT: 18435, // 18435
    +SOMITEM_NULL_TYPE: 10240, // 10240
    +SOMITEM_PARTICLE: 16384, // 16384
    +SOMITEM_SCHEMA: 4096, // 4096
    +SOMITEM_SEQUENCE: 16643, // 16643
    +SOMITEM_SIMPLETYPE: 8704, // 8704
    +SOMITEM_UNIQUE: 4355 // 4355
  |};

  /**
   * Settings for setProxy
   */

  declare var MSXML2$SXH_PROXY_SETTING: {|
    +SXH_PROXY_SET_DEFAULT: 0, // 0
    +SXH_PROXY_SET_DIRECT: 1, // 1
    +SXH_PROXY_SET_PRECONFIG: 0, // 0
    +SXH_PROXY_SET_PROXY: 2 // 2
  |};

  /**
   * Flags for SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS option
   */

  declare var MSXML2$SXH_SERVER_CERT_OPTION: {|
    +SXH_SERVER_CERT_IGNORE_ALL_SERVER_ERRORS: 13056, // 13056
    +SXH_SERVER_CERT_IGNORE_CERT_CN_INVALID: 4096, // 4096
    +SXH_SERVER_CERT_IGNORE_CERT_DATE_INVALID: 8192, // 8192
    +SXH_SERVER_CERT_IGNORE_UNKNOWN_CA: 256, // 256
    +SXH_SERVER_CERT_IGNORE_WRONG_USAGE: 512 // 512
  |};

  /**
   * Constants that define a node's type
   */

  declare var MSXML2$tagDOMNodeType: {|
    +NODE_ATTRIBUTE: 2, // 2
    +NODE_CDATA_SECTION: 4, // 4
    +NODE_COMMENT: 8, // 8
    +NODE_DOCUMENT: 9, // 9
    +NODE_DOCUMENT_FRAGMENT: 11, // 11
    +NODE_DOCUMENT_TYPE: 10, // 10
    +NODE_ELEMENT: 1, // 1
    +NODE_ENTITY: 6, // 6
    +NODE_ENTITY_REFERENCE: 5, // 5
    +NODE_INVALID: 0, // 0
    +NODE_NOTATION: 12, // 12
    +NODE_PROCESSING_INSTRUCTION: 7, // 7
    +NODE_TEXT: 3 // 3
  |};

  /**
   * Options for XHR properties
   */

  declare var MSXML2$XHR_PROPERTY: {|
    +XHR_PROP_EXTENDED_ERROR: 6, // 6
    +XHR_PROP_IGNORE_CERT_ERRORS: 8, // 8
    +XHR_PROP_MAX_CONNECTIONS: 11, // 11
    +XHR_PROP_NO_AUTH: 1, // 1
    +XHR_PROP_NO_CACHE: 5, // 5
    +XHR_PROP_NO_CRED_PROMPT: 0, // 0
    +XHR_PROP_NO_DEFAULT_HEADERS: 3, // 3
    +XHR_PROP_ONDATA_THRESHOLD: 9, // 9
    +XHR_PROP_QUERY_STRING_UTF8: 7, // 7
    +XHR_PROP_REPORT_REDIRECT_STATUS: 4, // 4
    +XHR_PROP_SET_ENTERPRISEID: 10, // 10
    +XHR_PROP_TIMEOUT: 2 // 2
  |};

  declare interface MSXML2$_FILETIME {
    +dwHighDateTime: number;
    +dwLowDateTime: number;
  }

  /**
   * W3C-DOM XML Document 6.0 (Apartment)
   */
  declare class MSXML2$DOMDocument60 {
    constructor(): this;

    /**
     * abort an asynchronous download
     */
    abort(): void;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * flag for asynchronous download
     */
    async: boolean;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * create an attribute node
     */
    createAttribute(name: string): MSXML2$IXMLDOMAttribute;

    /**
     * create a CDATA section node
     */
    createCDATASection(data: string): MSXML2$IXMLDOMCDATASection;

    /**
     * create a comment node
     */
    createComment(data: string): MSXML2$IXMLDOMComment;

    /**
     * create a DocumentFragment node
     */
    createDocumentFragment(): MSXML2$IXMLDOMDocumentFragment;

    /**
     * create an Element node
     */
    createElement(tagName: string): MSXML2$IXMLDOMElement;

    /**
     * create an entity reference node
     */
    createEntityReference(name: string): MSXML2$IXMLDOMEntityReference;

    /**
     * create a node of the specified node type and name
     */
    createNode(
      type:
        | typeof MSXML2$DOMNodeType.NODE_ATTRIBUTE
        | typeof MSXML2$DOMNodeType.NODE_CDATA_SECTION
        | typeof MSXML2$DOMNodeType.NODE_COMMENT
        | typeof MSXML2$DOMNodeType.NODE_DOCUMENT_FRAGMENT
        | typeof MSXML2$DOMNodeType.NODE_TEXT
        | typeof MSXML2$DOMNodeType.NODE_ELEMENT
        | typeof MSXML2$DOMNodeType.NODE_ENTITY_REFERENCE
        | typeof MSXML2$DOMNodeType.NODE_PROCESSING_INSTRUCTION,
      name: string,
      namespaceURI: string
    ): MSXML2$IXMLDOMNode;

    /**
     * create a processing instruction node
     */
    createProcessingInstruction(
      target: string,
      data: string
    ): MSXML2$IXMLDOMProcessingInstruction;

    /**
     * create a text node
     */
    createTextNode(data: string): MSXML2$IXMLDOMText;

    /**
     * the data type of the node
     */
    dataType: string | null;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * node corresponding to the DOCTYPE
     */
    doctype: MSXML2$IXMLDOMDocumentType;

    /**
     * the root of the tree
     */
    documentElement: MSXML2$IXMLDOMElement;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;

    /**
     * build a list of elements by name
     */
    getElementsByTagName(tagName: string): MSXML2$IXMLDOMNodeList;

    /**
     * get the value of the named property
     */
    getProperty(name: string): any;
    hasChildNodes(): boolean;

    /**
     * info on this DOM implementation
     */
    implementation: MSXML2$IXMLDOMImplementation;

    /**
     * clone node such that clones ownerDocument is this document
     */
    importNode(node: MSXML2$IXMLDOMNode, deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * load document from the specified XML source
     */
    load(xmlSource: any): boolean;

    /**
     * load the document from a string
     */
    loadXML(bstrXML: string): boolean;

    /**
     * A collection of all namespaces for this document
     */
    namespaces: MSXML2$IXMLDOMSchemaCollection;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * retrieve node from it's ID
     */
    nodeFromID(idString: string): MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: string | null;

    /**
     * register an ondataavailable event handler
     */
    ondataavailable: any;

    /**
     * register a readystatechange event handler
     */
    onreadystatechange: any;

    /**
     * register an ontransformnode event handler
     */
    ontransformnode: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * get the last parser error
     */
    parseError: MSXML2$IXMLDOMParseError;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * indicates whether the parser preserves whitespace
     */
    preserveWhiteSpace: boolean;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * get the state of the XML document
     */
    readyState: number;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * indicates whether the parser resolves references to external DTD/Entities/Schema
     */
    resolveExternals: boolean;

    /**
     * save the document to a specified destination
     */
    save(destination: any): void;

    /**
     * The associated schema cache
     */
    schemas: any;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * set the value of the named property
     */
    setProperty(name: string, value: any): void;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * get the URL for the loaded XML document
     */
    url: string;

    /**
     * perform runtime validation on the currently loaded XML document
     */
    validate(): MSXML2$IXMLDOMParseError;

    /**
     * perform runtime validation on the currently loaded XML document node
     */
    validateNode(node: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMParseError;

    /**
     * indicates whether the parser performs validation
     */
    validateOnParse: boolean;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  /**
   * W3C-DOM XML Document 6.0 (Free threaded)
   */
  declare class MSXML2$FreeThreadedDOMDocument60 {
    constructor(): this;

    /**
     * abort an asynchronous download
     */
    abort(): void;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * flag for asynchronous download
     */
    async: boolean;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * create an attribute node
     */
    createAttribute(name: string): MSXML2$IXMLDOMAttribute;

    /**
     * create a CDATA section node
     */
    createCDATASection(data: string): MSXML2$IXMLDOMCDATASection;

    /**
     * create a comment node
     */
    createComment(data: string): MSXML2$IXMLDOMComment;

    /**
     * create a DocumentFragment node
     */
    createDocumentFragment(): MSXML2$IXMLDOMDocumentFragment;

    /**
     * create an Element node
     */
    createElement(tagName: string): MSXML2$IXMLDOMElement;

    /**
     * create an entity reference node
     */
    createEntityReference(name: string): MSXML2$IXMLDOMEntityReference;

    /**
     * create a node of the specified node type and name
     */
    createNode(
      type: any,
      name: string,
      namespaceURI: string
    ): MSXML2$IXMLDOMNode;

    /**
     * create a processing instruction node
     */
    createProcessingInstruction(
      target: string,
      data: string
    ): MSXML2$IXMLDOMProcessingInstruction;

    /**
     * create a text node
     */
    createTextNode(data: string): MSXML2$IXMLDOMText;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * node corresponding to the DOCTYPE
     */
    doctype: MSXML2$IXMLDOMDocumentType;

    /**
     * the root of the tree
     */
    documentElement: MSXML2$IXMLDOMElement;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;

    /**
     * build a list of elements by name
     */
    getElementsByTagName(tagName: string): MSXML2$IXMLDOMNodeList;

    /**
     * get the value of the named property
     */
    getProperty(name: string): any;
    hasChildNodes(): boolean;

    /**
     * info on this DOM implementation
     */
    implementation: MSXML2$IXMLDOMImplementation;

    /**
     * clone node such that clones ownerDocument is this document
     */
    importNode(node: MSXML2$IXMLDOMNode, deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * load document from the specified XML source
     */
    load(xmlSource: any): boolean;

    /**
     * load the document from a string
     */
    loadXML(bstrXML: string): boolean;

    /**
     * A collection of all namespaces for this document
     */
    namespaces: MSXML2$IXMLDOMSchemaCollection;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * retrieve node from it's ID
     */
    nodeFromID(idString: string): MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * register an ondataavailable event handler
     */
    ondataavailable: any;

    /**
     * register a readystatechange event handler
     */
    onreadystatechange: any;

    /**
     * register an ontransformnode event handler
     */
    ontransformnode: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * get the last parser error
     */
    parseError: MSXML2$IXMLDOMParseError;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * indicates whether the parser preserves whitespace
     */
    preserveWhiteSpace: boolean;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * get the state of the XML document
     */
    readyState: number;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * indicates whether the parser resolves references to external DTD/Entities/Schema
     */
    resolveExternals: boolean;

    /**
     * save the document to a specified destination
     */
    save(destination: any): void;

    /**
     * The associated schema cache
     */
    schemas: any;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * set the value of the named property
     */
    setProperty(name: string, value: any): void;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * get the URL for the loaded XML document
     */
    url: string;

    /**
     * perform runtime validation on the currently loaded XML document
     */
    validate(): MSXML2$IXMLDOMParseError;

    /**
     * perform runtime validation on the currently loaded XML document node
     */
    validateNode(node: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMParseError;

    /**
     * indicates whether the parser performs validation
     */
    validateOnParse: boolean;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  /**
   * Free Threaded XML HTTP Request class 6.0
   */
  declare class MSXML2$FreeThreadedXMLHTTP60 {
    constructor(): this;
    abort(): void;
    getAllResponseHeaders(ppwszHeaders: string): void;
    GetCookie(
      pwszUrl: string,
      pwszName: string,
      dwFlags: number,
      pcCookies: number,
      ppCookies: MSXML2$tagXHR_COOKIE
    ): void;
    getResponseHeader(pwszHeader: string, ppwszValue: string): void;
    open(
      pwszMethod: string,
      pwszUrl: string,
      pStatusCallback: MSXML2$IXMLHTTPRequest2Callback,
      pwszUserName: string,
      pwszPassword: string,
      pwszProxyUserName: string,
      pwszProxyPassword: string
    ): void;
    send(pBody: MSXML2$ISequentialStream, cbBody: number): void;
    SetCookie(pCookie: MSXML2$tagXHR_COOKIE, pdwCookieState: number): void;
    SetCustomResponseStream(pSequentialStream: MSXML2$ISequentialStream): void;
    setProperty(
      eProperty: $Values<typeof MSXML2$XHR_PROPERTY>,
      ullValue: number
    ): void;
    setRequestHeader(pwszHeader: string, pwszValue: string): void;
  }

  /**
   * IMXNamespacePrefixes interface
   */
  declare interface MSXML2$IMXNamespacePrefixes {
    item(index: number): string;
    +length: number;
    (index: number): string;
  }

  /**
   * XML Schema
   */
  declare class MSXML2$ISchema {
    constructor(): this;
    attributeGroups: MSXML2$ISchemaItemCollection;
    attributes: MSXML2$ISchemaItemCollection;
    elements: MSXML2$ISchemaItemCollection;
    id: string;
    itemType: $Values<typeof MSXML2$SOMITEMTYPE>;
    modelGroups: MSXML2$ISchemaItemCollection;
    name: string;
    namespaceURI: string;
    notations: MSXML2$ISchemaItemCollection;
    schema: MSXML2$ISchema;
    schemaLocations: MSXML2$ISchemaStringCollection;
    targetNamespace: string;
    types: MSXML2$ISchemaItemCollection;
    unhandledAttributes: MSXML2$IVBSAXAttributes;
    version: string;
    writeAnnotation(annotationSink: any): boolean;
  }

  /**
   * XML Schema Item
   */
  declare class MSXML2$ISchemaItem {
    constructor(): this;
    id: string;
    itemType: $Values<typeof MSXML2$SOMITEMTYPE>;
    name: string;
    namespaceURI: string;
    schema: MSXML2$ISchema;
    unhandledAttributes: MSXML2$IVBSAXAttributes;
    writeAnnotation(annotationSink: any): boolean;
  }

  /**
   * XML Schema Item Collection
   */
  declare interface MSXML2$ISchemaItemCollection {
    item(index: number): MSXML2$ISchemaItem;
    itemByName(name: string): MSXML2$ISchemaItem;
    itemByQName(name: string, namespaceURI: string): MSXML2$ISchemaItem;
    +length: number;
    (index: number): MSXML2$ISchemaItem;
  }

  /**
   * XML Schema String Collection
   */
  declare interface MSXML2$ISchemaStringCollection {
    item(index: number): string;
    +length: number;
    (index: number): string;
  }

  declare class MSXML2$ISequentialStream {
    constructor(): this;
    RemoteRead(pv: number, cb: number, pcbRead: number): void;
    RemoteWrite(pv: number, cb: number, pcbWritten: number): void;
  }

  /**
   * IVBSAXAttributes interface
   */
  declare class MSXML2$IVBSAXAttributes {
    constructor(): this;

    /**
     * Look up the index of an attribute by Namespace name.
     */
    getIndexFromName(strURI: string, strLocalName: string): number;

    /**
     * Look up the index of an attribute by XML 1.0 qualified name.
     */
    getIndexFromQName(strQName: string): number;

    /**
     * Look up an attribute's local name by index.
     */
    getLocalName(nIndex: number): string;

    /**
     * Look up an attribute's XML 1.0 qualified name by index.
     */
    getQName(nIndex: number): string;

    /**
     * Look up an attribute's type by index.
     */
    getType(nIndex: number): string;

    /**
     * Look up an attribute's type by Namespace name.
     */
    getTypeFromName(strURI: string, strLocalName: string): string;

    /**
     * Look up an attribute's type by XML 1.0 qualified name.
     */
    getTypeFromQName(strQName: string): string;

    /**
     * Look up an attribute's Namespace URI by index.
     */
    getURI(nIndex: number): string;

    /**
     * Look up an attribute's value by index.
     */
    getValue(nIndex: number): string;

    /**
     * Look up an attribute's value by Namespace name.
     */
    getValueFromName(strURI: string, strLocalName: string): string;

    /**
     * Look up an attribute's value by XML 1.0 qualified name.
     */
    getValueFromQName(strQName: string): string;

    /**
     * Get the number of attributes in the list.
     */
    length: number;
  }

  /**
   * IVBSAXContentHandler interface
   */
  declare class MSXML2$IVBSAXContentHandler {
    constructor(): this;

    /**
     * Receive notification of character data.
     */
    characters(strChars: string): void;

    /**
     * Receive an object for locating the origin of SAX document events.
     */
    documentLocator: MSXML2$IVBSAXLocator;

    /**
     * Receive notification of the end of a document.
     */
    endDocument(): void;

    /**
     * Receive notification of the end of an element.
     */
    endElement(
      strNamespaceURI: string,
      strLocalName: string,
      strQName: string
    ): void;

    /**
     * End the scope of a prefix-URI mapping.
     */
    endPrefixMapping(strPrefix: string): void;

    /**
     * Receive notification of ignorable whitespace in element content.
     */
    ignorableWhitespace(strChars: string): void;

    /**
     * Receive notification of a processing instruction.
     */
    processingInstruction(strTarget: string, strData: string): void;

    /**
     * Receive notification of a skipped entity.
     */
    skippedEntity(strName: string): void;

    /**
     * Receive notification of the beginning of a document.
     */
    startDocument(): void;

    /**
     * Receive notification of the beginning of an element.
     */
    startElement(
      strNamespaceURI: string,
      strLocalName: string,
      strQName: string,
      oAttributes: MSXML2$IVBSAXAttributes
    ): void;

    /**
     * Begin the scope of a prefix-URI Namespace mapping.
     */
    startPrefixMapping(strPrefix: string, strURI: string): void;
  }

  /**
   * IVBSAXDTDHandler interface
   */
  declare class MSXML2$IVBSAXDTDHandler {
    constructor(): this;

    /**
     * Receive notification of a notation declaration event.
     */
    notationDecl(
      strName: string,
      strPublicId: string,
      strSystemId: string
    ): void;

    /**
     * Receive notification of an unparsed entity declaration event.
     */
    unparsedEntityDecl(
      strName: string,
      strPublicId: string,
      strSystemId: string,
      strNotationName: string
    ): void;
  }

  /**
   * IVBSAXEntityResolver interface
   */
  declare class MSXML2$IVBSAXEntityResolver {
    constructor(): this;

    /**
     * Allow the application to resolve external entities.
     */
    resolveEntity(strPublicId: string, strSystemId: string): any;
  }

  /**
   * IVBSAXErrorHandler interface
   */
  declare class MSXML2$IVBSAXErrorHandler {
    constructor(): this;

    /**
     * Receive notification of a recoverable error.
     */
    error(
      oLocator: MSXML2$IVBSAXLocator,
      strErrorMessage: string,
      nErrorCode: number
    ): void;

    /**
     * Receive notification of a non-recoverable error.
     */
    fatalError(
      oLocator: MSXML2$IVBSAXLocator,
      strErrorMessage: string,
      nErrorCode: number
    ): void;

    /**
     * Receive notification of an ignorable warning.
     */
    ignorableWarning(
      oLocator: MSXML2$IVBSAXLocator,
      strErrorMessage: string,
      nErrorCode: number
    ): void;
  }

  /**
   * IVBSAXLocator interface
   */
  declare class MSXML2$IVBSAXLocator {
    constructor(): this;

    /**
     * Get the column number where the current document event ends.
     */
    columnNumber: number;

    /**
     * Get the line number where the current document event ends.
     */
    lineNumber: number;

    /**
     * Get the public identifier for the current document event.
     */
    publicId: string;

    /**
     * Get the system identifier for the current document event.
     */
    systemId: string;
  }

  declare class MSXML2$IXMLDOMAttribute {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * get name of the attribute
     */
    name: string;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * string value of the attribute
     */
    value: any;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMCDATASection {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * append string to value
     */
    appendData(data: string): void;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * value of the node
     */
    data: string;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * delete string within the value
     */
    deleteData(offset: number, count: number): void;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * insert string into value
     */
    insertData(offset: number, data: string): void;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * number of characters in value
     */
    length: number;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * replace string within the value
     */
    replaceData(offset: number, count: number, data: string): void;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * split the text node into two text nodes at the position specified
     */
    splitText(offset: number): MSXML2$IXMLDOMText;

    /**
     * retrieve substring of value
     */
    substringData(offset: number, count: number): string;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMComment {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * append string to value
     */
    appendData(data: string): void;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * value of the node
     */
    data: string;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * delete string within the value
     */
    deleteData(offset: number, count: number): void;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * insert string into value
     */
    insertData(offset: number, data: string): void;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * number of characters in value
     */
    length: number;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * replace string within the value
     */
    replaceData(offset: number, count: number, data: string): void;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * retrieve substring of value
     */
    substringData(offset: number, count: number): string;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMDocument {
    constructor(): this;

    /**
     * abort an asynchronous download
     */
    abort(): void;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * flag for asynchronous download
     */
    async: boolean;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * create an attribute node
     */
    createAttribute(name: string): MSXML2$IXMLDOMAttribute;

    /**
     * create a CDATA section node
     */
    createCDATASection(data: string): MSXML2$IXMLDOMCDATASection;

    /**
     * create a comment node
     */
    createComment(data: string): MSXML2$IXMLDOMComment;

    /**
     * create a DocumentFragment node
     */
    createDocumentFragment(): MSXML2$IXMLDOMDocumentFragment;

    /**
     * create an Element node
     */
    createElement(tagName: string): MSXML2$IXMLDOMElement;

    /**
     * create an entity reference node
     */
    createEntityReference(name: string): MSXML2$IXMLDOMEntityReference;

    /**
     * create a node of the specified node type and name
     */
    createNode(
      type: any,
      name: string,
      namespaceURI: string
    ): MSXML2$IXMLDOMNode;

    /**
     * create a processing instruction node
     */
    createProcessingInstruction(
      target: string,
      data: string
    ): MSXML2$IXMLDOMProcessingInstruction;

    /**
     * create a text node
     */
    createTextNode(data: string): MSXML2$IXMLDOMText;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * node corresponding to the DOCTYPE
     */
    doctype: MSXML2$IXMLDOMDocumentType;

    /**
     * the root of the tree
     */
    documentElement: MSXML2$IXMLDOMElement;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;

    /**
     * build a list of elements by name
     */
    getElementsByTagName(tagName: string): MSXML2$IXMLDOMNodeList;
    hasChildNodes(): boolean;

    /**
     * info on this DOM implementation
     */
    implementation: MSXML2$IXMLDOMImplementation;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * load document from the specified XML source
     */
    load(xmlSource: any): boolean;

    /**
     * load the document from a string
     */
    loadXML(bstrXML: string): boolean;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * retrieve node from it's ID
     */
    nodeFromID(idString: string): MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * register an ondataavailable event handler
     */
    ondataavailable: any;

    /**
     * register a readystatechange event handler
     */
    onreadystatechange: any;

    /**
     * register an ontransformnode event handler
     */
    ontransformnode: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * get the last parser error
     */
    parseError: MSXML2$IXMLDOMParseError;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * indicates whether the parser preserves whitespace
     */
    preserveWhiteSpace: boolean;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * get the state of the XML document
     */
    readyState: number;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * indicates whether the parser resolves references to external DTD/Entities/Schema
     */
    resolveExternals: boolean;

    /**
     * save the document to a specified destination
     */
    save(destination: any): void;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * get the URL for the loaded XML document
     */
    url: string;

    /**
     * indicates whether the parser performs validation
     */
    validateOnParse: boolean;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMDocumentFragment {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMDocumentType {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * a list of entities in the document
     */
    entities: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * name of the document type (root of the tree)
     */
    name: string;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * a list of notations in the document
     */
    notations: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMElement {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;

    /**
     * look up the string value of an attribute by name
     */
    getAttribute(name: string): any;

    /**
     * look up the attribute node by name
     */
    getAttributeNode(name: string): MSXML2$IXMLDOMAttribute;

    /**
     * build a list of elements by name
     */
    getElementsByTagName(tagName: string): MSXML2$IXMLDOMNodeList;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * collapse all adjacent text nodes in sub-tree
     */
    normalize(): void;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove an attribute by name
     */
    removeAttribute(name: string): void;

    /**
     * remove the specified attribute
     */
    removeAttributeNode(
      DOMAttribute: MSXML2$IXMLDOMAttribute
    ): MSXML2$IXMLDOMAttribute;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * set the string value of an attribute by name
     */
    setAttribute(name: string, value: any): void;

    /**
     * set the specified attribute on the element
     */
    setAttributeNode(
      DOMAttribute: MSXML2$IXMLDOMAttribute
    ): MSXML2$IXMLDOMAttribute;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * get the tagName of the element
     */
    tagName: string;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMEntityReference {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare class MSXML2$IXMLDOMImplementation {
    constructor(): this;
    hasFeature(feature: string, version: string): boolean;
  }

  declare interface MSXML2$IXMLDOMNamedNodeMap {
    /**
     * lookup item by name
     */
    getNamedItem(name: string): MSXML2$IXMLDOMNode;

    /**
     * lookup the item by name and namespace
     */
    getQualifiedItem(
      baseName: string,
      namespaceURI: string
    ): MSXML2$IXMLDOMNode;

    /**
     * collection of nodes
     */
    item(index: number): MSXML2$IXMLDOMNode;

    /**
     * number of nodes in the collection
     */
    +length: number;

    /**
     * get next node from iterator
     */
    nextNode(): MSXML2$IXMLDOMNode;

    /**
     * remove item by name
     */
    removeNamedItem(name: string): MSXML2$IXMLDOMNode;

    /**
     * remove the item by name and namespace
     */
    removeQualifiedItem(
      baseName: string,
      namespaceURI: string
    ): MSXML2$IXMLDOMNode;

    /**
     * reset the position of iterator
     */
    reset(): void;

    /**
     * set item by name
     */
    setNamedItem(newItem: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * collection of nodes
     */
    (index: number): MSXML2$IXMLDOMNode;
  }

  /**
   * Core DOM node interface
   */
  declare class MSXML2$IXMLDOMNode {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  declare interface MSXML2$IXMLDOMNodeList {
    /**
     * collection of nodes
     */
    item(index: number): MSXML2$IXMLDOMNode;

    /**
     * number of nodes in the collection
     */
    +length: number;

    /**
     * get next node from iterator
     */
    nextNode(): MSXML2$IXMLDOMNode;

    /**
     * reset the position of iterator
     */
    reset(): void;

    /**
     * collection of nodes
     */
    (index: number): MSXML2$IXMLDOMNode;
  }

  /**
   * structure for reporting parser errors
   */
  declare class MSXML2$IXMLDOMParseError {
    constructor(): this;

    /**
     * the error code
     */
    errorCode: number;

    /**
     * the absolute file position in the XML document containing the error
     */
    filepos: number;

    /**
     * the line number in the XML document where the error occurred
     */
    line: number;

    /**
     * the character position in the line containing the error
     */
    linepos: number;

    /**
     * the cause of the error
     */
    reason: string;

    /**
     * the data where the error occurred
     */
    srcText: string;

    /**
     * the URL of the XML document containing the error
     */
    url: string;
  }

  declare class MSXML2$IXMLDOMProcessingInstruction {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * the data
     */
    data: string;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * the target
     */
    target: string;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  /**
   * XML Schemas Collection
   */
  declare interface MSXML2$IXMLDOMSchemaCollection {
    /**
     * add a new schema
     */
    add(namespaceURI: string, var_1: any): void;

    /**
     * copy & merge other collection into this one
     */
    addCollection(otherCollection: MSXML2$IXMLDOMSchemaCollection): void;

    /**
     * lookup schema by namespaceURI
     */
    get(namespaceURI: string): MSXML2$IXMLDOMNode;

    /**
     * number of schemas in collection
     */
    +length: number;

    /**
     * Get namespaceURI for schema by index
     */
    namespaceURI(index: number): string;

    /**
     * remove schema by namespaceURI
     */
    remove(namespaceURI: string): void;

    /**
     * Get namespaceURI for schema by index
     */
    (index: number): string;
  }

  declare class MSXML2$IXMLDOMText {
    constructor(): this;

    /**
     * append a child node
     */
    appendChild(newChild: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * append string to value
     */
    appendData(data: string): void;

    /**
     * the collection of the node's attributes
     */
    attributes: MSXML2$IXMLDOMNamedNodeMap;

    /**
     * the base name of the node (nodename with the prefix stripped off)
     */
    baseName: string;

    /**
     * the collection of the node's children
     */
    childNodes: MSXML2$IXMLDOMNodeList;
    cloneNode(deep: boolean): MSXML2$IXMLDOMNode;

    /**
     * value of the node
     */
    data: string;

    /**
     * the data type of the node
     */
    dataType: any;

    /**
     * pointer to the definition of the node in the DTD or schema
     */
    definition: MSXML2$IXMLDOMNode;

    /**
     * delete string within the value
     */
    deleteData(offset: number, count: number): void;

    /**
     * first child of the node
     */
    firstChild: MSXML2$IXMLDOMNode;
    hasChildNodes(): boolean;

    /**
     * insert a child node
     */
    insertBefore(
      newChild: MSXML2$IXMLDOMNode,
      refChild: any
    ): MSXML2$IXMLDOMNode;

    /**
     * insert string into value
     */
    insertData(offset: number, data: string): void;

    /**
     * last child of the node
     */
    lastChild: MSXML2$IXMLDOMNode;

    /**
     * number of characters in value
     */
    length: number;

    /**
     * the URI for the namespace applying to the node
     */
    namespaceURI: string;

    /**
     * right sibling of the node
     */
    nextSibling: MSXML2$IXMLDOMNode;

    /**
     * name of the node
     */
    nodeName: string;

    /**
     * the node's type
     */
    nodeType: $Values<typeof MSXML2$DOMNodeType>;

    /**
     * get the strongly typed value of the node
     */
    nodeTypedValue: any;

    /**
     * the type of node in string form
     */
    nodeTypeString: string;

    /**
     * value stored in the node
     */
    nodeValue: any;

    /**
     * document that contains the node
     */
    ownerDocument: MSXML2$IXMLDOMDocument;

    /**
     * parent of the node
     */
    parentNode: MSXML2$IXMLDOMNode;

    /**
     * has sub-tree been completely parsed
     */
    parsed: boolean;

    /**
     * the prefix for the namespace applying to the node
     */
    prefix: string;

    /**
     * left sibling of the node
     */
    previousSibling: MSXML2$IXMLDOMNode;

    /**
     * remove a child node
     */
    removeChild(childNode: MSXML2$IXMLDOMNode): MSXML2$IXMLDOMNode;

    /**
     * replace a child node
     */
    replaceChild(
      newChild: MSXML2$IXMLDOMNode,
      oldChild: MSXML2$IXMLDOMNode
    ): MSXML2$IXMLDOMNode;

    /**
     * replace string within the value
     */
    replaceData(offset: number, count: number, data: string): void;

    /**
     * execute query on the subtree
     */
    selectNodes(queryString: string): MSXML2$IXMLDOMNodeList;

    /**
     * execute query on the subtree
     */
    selectSingleNode(queryString: string): MSXML2$IXMLDOMNode;

    /**
     * indicates whether node is a default value
     */
    specified: boolean;

    /**
     * split the text node into two text nodes at the position specified
     */
    splitText(offset: number): MSXML2$IXMLDOMText;

    /**
     * retrieve substring of value
     */
    substringData(offset: number, count: number): string;

    /**
     * text content of the node and subtree
     */
    text: string;

    /**
     * apply the stylesheet to the subtree
     */
    transformNode(stylesheet: MSXML2$IXMLDOMNode): string;

    /**
     * apply the stylesheet to the subtree, returning the result through a document or a stream
     */
    transformNodeToObject(
      stylesheet: MSXML2$IXMLDOMNode,
      outputObject: any
    ): void;

    /**
     * return the XML source for the node and each of its descendants
     */
    xml: string;
  }

  /**
   * IXMLHTTPRequest2Callback Interface
   */
  declare class MSXML2$IXMLHTTPRequest2Callback {
    constructor(): this;
    ondataavailable(
      pXHR: MSXML2$FreeThreadedXMLHTTP60,
      pResponseStream: MSXML2$ISequentialStream
    ): void;
    OnError(pXHR: MSXML2$FreeThreadedXMLHTTP60, hrError: void): void;
    OnHeadersAvailable(
      pXHR: MSXML2$FreeThreadedXMLHTTP60,
      dwStatus: number,
      pwszStatus: string
    ): void;
    OnRedirect(
      pXHR: MSXML2$FreeThreadedXMLHTTP60,
      pwszRedirectUrl: string
    ): void;
    OnResponseReceived(
      pXHR: MSXML2$FreeThreadedXMLHTTP60,
      pResponseStream: MSXML2$ISequentialStream
    ): void;
  }

  /**
   * IXSLProcessor Interface
   */
  declare class MSXML2$IXSLProcessor {
    constructor(): this;

    /**
     * pass object to stylesheet
     */
    addObject(obj: any, namespaceURI: string): void;

    /**
     * set <xsl:param> values
     * @param namespaceURI [namespaceURI='0']
     */
    addParameter(baseName: string, parameter: any, namespaceURI?: string): void;

    /**
     * XML input tree to transform
     */
    input: any;

    /**
     * custom stream object for transform output
     */
    output: any;

    /**
     * template object used to create this processor object
     */
    ownerTemplate: MSXML2$XSLTemplate60;

    /**
     * current state of the processor
     */
    readyState: number;

    /**
     * reset state of processor and abort current transform
     */
    reset(): void;

    /**
     * set XSL mode and it's namespace
     * @param namespaceURI [namespaceURI='0']
     */
    setStartMode(mode: string, namespaceURI?: string): void;

    /**
     * starting XSL mode
     */
    startMode: string;

    /**
     * namespace of starting XSL mode
     */
    startModeURI: string;

    /**
     * current stylesheet being used
     */
    stylesheet: MSXML2$IXMLDOMNode;

    /**
     * start/resume the XSL transformation process
     */
    transform(): boolean;
  }

  /**
   * Microsoft HTML Writer 6.0
   */
  declare class MSXML2$MXHTMLWriter60 {
    constructor(): this;

    /**
     * Determine whether or not to write the byte order mark
     */
    byteOrderMark: boolean;

    /**
     * When enabled, the writer no longer escapes out its input when writing it out.
     */
    disableOutputEscaping: boolean;

    /**
     * Set or get the output encoding.
     */
    encoding: string;

    /**
     * Flushes all writer buffers forcing the writer to write to the underlying output object
     */
    flush(): void;

    /**
     * Enable or disable auto indent mode.
     */
    indent: boolean;

    /**
     * Determine whether or not to omit the XML declaration.
     */
    omitXMLDeclaration: boolean;

    /**
     * Set or get the output.
     */
    output: any;

    /**
     * Set or get the standalone document declaration.
     */
    standalone: boolean;

    /**
     * Set or get the xml version info.
     */
    version: string;
  }

  /**
   * MX Namespace Manager 6.0
   */
  declare class MSXML2$MXNamespaceManager60 {
    constructor(): this;
    allowOverride: boolean;
    declarePrefix(prefix: string, namespaceURI: string): void;
    getDeclaredPrefixes(): MSXML2$IMXNamespacePrefixes;
    getPrefixes(namespaceURI: string): MSXML2$IMXNamespacePrefixes;
    getURI(prefix: string): any;
    getURIFromNode(strPrefix: string, contextNode: MSXML2$IXMLDOMNode): any;
    popContext(): void;
    pushContext(): void;

    /**
     * @param fDeep [fDeep=true]
     */
    pushNodeContext(contextNode: MSXML2$IXMLDOMNode, fDeep?: boolean): void;
    reset(): void;
  }

  /**
   * Microsoft XML Writer 6.0
   */
  declare class MSXML2$MXXMLWriter60 {
    constructor(): this;

    /**
     * Determine whether or not to write the byte order mark
     */
    byteOrderMark: boolean;

    /**
     * When enabled, the writer no longer escapes out its input when writing it out.
     */
    disableOutputEscaping: boolean;

    /**
     * Set or get the output encoding.
     */
    encoding: string;

    /**
     * Flushes all writer buffers forcing the writer to write to the underlying output object
     */
    flush(): void;

    /**
     * Enable or disable auto indent mode.
     */
    indent: boolean;

    /**
     * Determine whether or not to omit the XML declaration.
     */
    omitXMLDeclaration: boolean;

    /**
     * Set or get the output.
     */
    output: any;

    /**
     * Set or get the standalone document declaration.
     */
    standalone: boolean;

    /**
     * Set or get the xml version info.
     */
    version: string;
  }

  /**
   * SAX Attributes 6.0
   */
  declare class MSXML2$SAXAttributes60 {
    constructor(): this;

    /**
     * Add an attribute to the end of the list.
     */
    addAttribute(
      strURI: string,
      strLocalName: string,
      strQName: string,
      strType: string,
      strValue: string
    ): void;

    /**
     * Add an attribute, whose value is equal to the indexed attribute in the input attributes object, to the end of the list.
     */
    addAttributeFromIndex(varAtts: any, nIndex: number): void;

    /**
     * Clear the attribute list for reuse.
     */
    clear(): void;

    /**
     * Remove an attribute from the list.
     */
    removeAttribute(nIndex: number): void;

    /**
     * Set an attribute in the list.
     */
    setAttribute(
      nIndex: number,
      strURI: string,
      strLocalName: string,
      strQName: string,
      strType: string,
      strValue: string
    ): void;

    /**
     * Copy an entire Attributes object.
     */
    setAttributes(varAtts: any): void;

    /**
     * Set the local name of a specific attribute.
     */
    setLocalName(nIndex: number, strLocalName: string): void;

    /**
     * Set the qualified name of a specific attribute.
     */
    setQName(nIndex: number, strQName: string): void;

    /**
     * Set the type of a specific attribute.
     */
    setType(nIndex: number, strType: string): void;

    /**
     * Set the Namespace URI of a specific attribute.
     */
    setURI(nIndex: number, strURI: string): void;

    /**
     * Set the value of a specific attribute.
     */
    setValue(nIndex: number, strValue: string): void;
  }

  /**
   * SAX XML Reader 6.0
   */
  declare class MSXML2$SAXXMLReader60 {
    constructor(): this;

    /**
     * Set or get the base URL for the document.
     */
    baseURL: string;

    /**
     * Allow an application to register a content event handler or look up the current content event handler.
     */
    contentHandler: MSXML2$IVBSAXContentHandler;

    /**
     * Allow an application to register a DTD event handler or look up the current DTD event handler.
     */
    dtdHandler: MSXML2$IVBSAXDTDHandler;

    /**
     * Allow an application to register an entity resolver or look up the current entity resolver.
     */
    entityResolver: MSXML2$IVBSAXEntityResolver;

    /**
     * Allow an application to register an error event handler or look up the current error event handler.
     */
    errorHandler: MSXML2$IVBSAXErrorHandler;

    /**
     * Look up the value of a feature.
     */
    getFeature(strName: string): boolean;

    /**
     * Look up the value of a property.
     */
    getProperty(strName: string): any;

    /**
     * Parse an XML document.
     */
    parse(varInput?: any): void;

    /**
     * Parse an XML document from a system identifier (URI).
     */
    parseURL(strURL: string): void;

    /**
     * Set the state of a feature.
     */
    putFeature(strName: string, fValue: boolean): void;

    /**
     * Set the value of a property.
     */
    putProperty(strName: string, varValue: any): void;

    /**
     * Set or get the secure base URL for the document.
     */
    secureBaseURL: string;
  }

  /**
   * Server XML HTTP Request 6.0
   */
  declare class MSXML2$ServerXMLHTTP60 {
    constructor(): this;

    /**
     * Abort HTTP request
     */
    abort(): void;

    /**
     * Get all HTTP response headers
     */
    getAllResponseHeaders(): string;

    /**
     * Get an option value
     */
    getOption(option: $Values<typeof MSXML2$SERVERXMLHTTP_OPTION>): any;

    /**
     * Get HTTP response header
     */
    getResponseHeader(bstrHeader: string): string;

    /**
     * Register a complete event handler
     */
    onreadystatechange: any;

    /**
     * Open HTTP connection
     */
    open(
      bstrMethod: string,
      bstrUrl: string,
      varAsync?: any,
      bstrUser?: any,
      bstrPassword?: any
    ): void;

    /**
     * Get ready state
     */
    readyState: number;

    /**
     * Get response body
     */
    responseBody: any;

    /**
     * Get response body
     */
    responseStream: any;

    /**
     * Get response body
     */
    responseText: string;

    /**
     * Get response body
     */
    responseXML: any;

    /**
     * Send HTTP request
     */
    send(varBody?: any): void;

    /**
     * Set an option value
     */
    setOption(
      option: $Values<typeof MSXML2$SERVERXMLHTTP_OPTION>,
      value: any
    ): void;

    /**
     * Specify proxy configuration
     */
    setProxy(
      proxySetting: $Values<typeof MSXML2$SXH_PROXY_SETTING>,
      varProxyServer?: any,
      varBypassList?: any
    ): void;

    /**
     * Specify proxy authentication credentials
     */
    setProxyCredentials(bstrUserName: string, bstrPassword: string): void;

    /**
     * Add HTTP request header
     */
    setRequestHeader(bstrHeader: string, bstrValue: string): void;

    /**
     * Specify timeout settings (in milliseconds)
     */
    setTimeouts(
      resolveTimeout: number,
      connectTimeout: number,
      sendTimeout: number,
      receiveTimeout: number
    ): void;

    /**
     * Get HTTP status code
     */
    status: number;

    /**
     * Get HTTP status text
     */
    statusText: string;

    /**
     * Wait for asynchronous send to complete, with optional timeout (in seconds)
     */
    waitForResponse(timeoutInSeconds?: any): boolean;
  }

  declare interface MSXML2$tagXHR_COOKIE {
    +dwFlags: number;
    +ftExpires: MSXML2$_FILETIME;
    +pwszName: string;
    +pwszP3PPolicy: string;
    +pwszUrl: string;
    +pwszValue: string;
  }

  /**
   * XML HTTP Request class 6.0
   */
  declare class MSXML2$XMLHTTP60 {
    constructor(): this;

    /**
     * Abort HTTP request
     */
    abort(): void;

    /**
     * Get all HTTP response headers
     */
    getAllResponseHeaders(): string;

    /**
     * Get HTTP response header
     */
    getResponseHeader(bstrHeader: string): string;

    /**
     * Register a complete event handler
     */
    onreadystatechange: any;

    /**
     * Open HTTP connection
     */
    open(
      bstrMethod: string,
      bstrUrl: string,
      varAsync?: any,
      bstrUser?: any,
      bstrPassword?: any
    ): void;

    /**
     * Get ready state
     */
    readyState: number;

    /**
     * Get response body
     */
    responseBody: any;

    /**
     * Get response body
     */
    responseStream: any;

    /**
     * Get response body
     */
    responseText: string;

    /**
     * Get response body
     */
    responseXML: any;

    /**
     * Send HTTP request
     */
    send(varBody?: any): void;

    /**
     * Add HTTP request header
     */
    setRequestHeader(bstrHeader: string, bstrValue: string): void;

    /**
     * Get HTTP status code
     */
    status: number;

    /**
     * Get HTTP status text
     */
    statusText: string;
  }

  /**
   * XML Schema Cache 6.0
   */
  declare interface MSXML2$XMLSchemaCache60 {
    /**
     * add a new schema
     */
    add(namespaceURI: string, var_1: any): void;

    /**
     * copy & merge other collection into this one
     */
    addCollection(otherCollection: MSXML2$IXMLDOMSchemaCollection): void;

    /**
     * lookup schema by namespaceURI
     */
    get(namespaceURI: string): MSXML2$IXMLDOMNode;
    getDeclaration(node: MSXML2$IXMLDOMNode): MSXML2$ISchemaItem;
    getSchema(namespaceURI: string): MSXML2$ISchema;

    /**
     * number of schemas in collection
     */
    +length: number;

    /**
     * Get namespaceURI for schema by index
     */
    namespaceURI(index: number): string;

    /**
     * remove schema by namespaceURI
     */
    remove(namespaceURI: string): void;
    validate(): void;
    validateOnLoad: boolean;

    /**
     * Get namespaceURI for schema by index
     */
    (index: number): string;
  }

  /**
   * XSL Stylesheet Cache 6.0
   */
  declare class MSXML2$XSLTemplate60 {
    constructor(): this;

    /**
     * create a new processor object
     */
    createProcessor(): MSXML2$IXSLProcessor;

    /**
     * stylesheet to use with processors
     */
    stylesheet: MSXML2$IXMLDOMNode;
  }
  declare interface ActiveXObject {
    on(
      obj: MSXML2$DOMDocument60,
      event: "ondataavailable" | "onreadystatechange",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSXML2$FreeThreadedDOMDocument60,
      event: "ondataavailable" | "onreadystatechange",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "Msxml2.DOMDocument": MSXML2$DOMDocument60;
    "Msxml2.DOMDocument.6.0": MSXML2$DOMDocument60;
    "Msxml2.FreeThreadedDOMDocument": MSXML2$FreeThreadedDOMDocument60;
    "Msxml2.MXHTMLWriter": MSXML2$MXHTMLWriter60;
    "Msxml2.MXNamespaceManager": MSXML2$MXNamespaceManager60;
    "Msxml2.MXXMLWriter": MSXML2$MXXMLWriter60;
    "Msxml2.SAXAttributes": MSXML2$SAXAttributes60;
    "Msxml2.SAXXMLReader": MSXML2$SAXXMLReader60;
    "Msxml2.ServerXMLHTTP": MSXML2$ServerXMLHTTP60;
    "Msxml2.XMLHTTP": MSXML2$XMLHTTP60;
    "Msxml2.XMLSchemaCache": MSXML2$XMLSchemaCache60;
    "Msxml2.XSLTemplate": MSXML2$XSLTemplate60;
  }
}
