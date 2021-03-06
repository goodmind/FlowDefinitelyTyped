declare module "jquery.soap" {
  declare interface JQuerySOAP$SOAPEnvelope {
    attributes: Object;
    bodies: Array<JQuerySOAP$SOAPObject>;
    headers: Array<JQuerySOAP$SOAPObject>;
    prefix: string;
    soapConfig: any;
    typeOf: string;
    addAttribute(name: String, value: string): void;
    addAttribute(name: String, value: number): void;
    addBody(soapObject: JQuerySOAP$SOAPObject): void;
    addHeader(soapObject: JQuerySOAP$SOAPObject): void;
    addNamespace(name: String, uri: string): void;
    toString(): string;
    send(options: JQuerySOAP$Options): void;
  }

  declare interface JQuerySOAP$SOAPResponse {
    toJSON(): any;
    toString(): String;
    toXML(): XMLDocument;
  }

  declare interface JQuerySOAP$SOAPObject {
    attributes: Object;
    children: Array<JQuerySOAP$SOAPObject>;
    name: string;
    ns: Object;
    _parent: JQuerySOAP$SOAPObject;
    value: any;
    typeOf: string;
    addNamespace(name: String, url: string): void;
    addParameter(name: String, value: string): void;
    addParameter(name: String, value: number): void;
    appendChild(soapObject: JQuerySOAP$SOAPObject): JQuerySOAP$SOAPObject;
    attr(name: string, value: string): Object;
    attr(name: string, value: number): Object;
    end(): JQuerySOAP$SOAPObject;
    find(name: string): JQuerySOAP$SOAPObject;
    hasChildren(): boolean;
    newChild(name: string): JQuerySOAP$SOAPObject;
    parent(): JQuerySOAP$SOAPObject;
    toString(): string;
    val(value: string): JQuerySOAP$SOAPObject;
    val(value: number): JQuerySOAP$SOAPObject;
  }

  declare interface JQuerySOAP$Options {
    appendMethodToURL?: boolean;
    async?: boolean;
    beforeSend?: (JQuerySOAP$SOAPEnvelope: JQuerySOAP$SOAPEnvelope) => void;
    context?: any;
    data?: Object;
    envAttributes?: any;
    elementName?: string;
    enableLogging?: boolean;
    error?: (JQuerySOAP$SOAPResponse: JQuerySOAP$SOAPResponse) => void;
    HTTPHeaders?: Object;
    method?: string;
    namespaceQualifier?: string;
    namespaceURL?: string;
    noPrefix?: boolean;
    request?: (JQuerySOAP$SOAPEnvelope: JQuerySOAP$SOAPEnvelope) => void;
    soap12?: boolean;
    SOAPAction?: string;
    SOAPHeader?: Object;
    statusCode?: Object;
    success?: (JQuerySOAP$SOAPResponse: JQuerySOAP$SOAPResponse) => void;
    timeout?: number;
    url?: string;
    wss?: Object;
  }

  declare interface JQuerySOAP$SOAP {
    (options?: JQuerySOAP$Options): JQueryXHR;
  }
  declare interface JQueryStatic {
    soap: JQuerySOAP$JQuerySOAP$SOAP;
  }
}
