declare module "servicenow" {
  declare var email: servicenow$servicenow$GlideEmailOutbound;
  declare var g_processor: servicenow$servicenow$GlideScriptedProcessor;
  declare var g_request: servicenow$servicenow$GlideServletRequest;
  declare var g_response: servicenow$servicenow$GlideServletResponse;
  declare var gs: servicenow$servicenow$GlideSystem;
  declare var GlideRecordSecure: servicenow$servicenow$GlideRecord;
  declare var servicenow$GlideRecord: servicenow$servicenow$GlideRecord;
  declare class sn_ws$RESTMessageV2 {
    constructor(): this;
    constructor(
      name: string,
      methodName: servicenow$servicenow$RestHTTPMethods
    ): this;
    execute(): servicenow$servicenow$RESTResponseV2;
    executeAsync(): servicenow$servicenow$RESTResponseV2;
    getEndpoint(): string;
    getRequestBody(): string;
    getRequestHeader(headerName: string): string;
    getRequestHeaders(): { [key: string]: any };
    saveResponseBodyAsAttachment(
      tableName: string,
      recordSysId: string,
      fileName: string,
      encryptContext?: string
    ): void;
    setAuthenticationProfile(type: string, profileId: string): void;
    setBasicAuth(userName: string, userPass: string): void;
    setEccCorrelator(correlator: string): void;
    setEccParameter(name: string, value: string): void;
    setEndpoint(endpoint: string): void;
    setHttpMethod(method: servicenow$servicenow$RestHTTPMethods): void;
    setHttpTimeout(timeoutMs: number): void;
    setLogLevel(level: "basic" | "elevated" | "all"): void;
    setMIDServer(midServer: string): void;
    setMutualAuth(profileName: string): void;
    setQueryParameter(name: string, value: string): void;
    setRequestBody(body: string): void;
    setRequestBodyFromAttachment(sys_id: string): void;
    setRequestBodyFromStream(stream: { [key: string]: any }): void;
    setRequestHeader(name: string, value: string): void;
    setRequestorProfile(requestorContext: string, requestorId: string): void;
    setStringParameter(name: string, value: string): void;
    setStringParameterNoEscape(name: string, value: string): void;
  }

  declare class sn_ws$SOAPMessageV2 {
    constructor(): this;
    constructor(soapMessage: string, soapFunction: string): this;
    execute(): servicenow$servicenow$SOAPResponseV2;
    executeAsync(): servicenow$servicenow$SOAPResponseV2;
    setHttpMethod(method: string): void;
    setHttpTimeout(timeoutMs: number): void;
    setBasicAuth(userName: string, userPass: string): void;
    setMutualAuth(profileName: string): void;
    setEccCorrelator(correlator: string): void;
    setEccParameter(name: string, value: string): void;
    setEndpoint(endpoint: string): void;
    setMIDServer(midServer: string): void;
    setRequestBody(body: string): void;
    setRequestHeader(name: string, value: string): void;
    setStringParameter(name: string, value: string): void;
    setStringParameterNoEscape(name: string, value: string): void;
    setWSSecurity(
      keystoreId: string,
      keystoreAlias: string,
      keystorePassword: string,
      certificateId: string
    ): void;
    getRequestBody(): string;
    getEndpoint(): string;
    getRequestHeader(headerName: string): string;
    getRequestHeaders(): { [key: string]: any };
  }

  declare var npm$namespace$global: {
    GlideStringUtil: typeof global$GlideStringUtil,
    Class: typeof global$Class
  };
  declare var global$GlideStringUtil: {
    base64Decode(value: string): string,
    base64DecodeAsBytes(value: string): any,
    escapeHTML(value: string): string,
    getStringFromStream(stream: { [key: string]: any }): string
  };

  declare var global$Class: {
    create(): any
  };

  declare class global$Workflow {
    constructor(): this;
    broadcastEvent(contextId: string, eventName: string): void;
    cancel(record: servicenow$servicenow$GlideRecord): void;
    cancelContext(context: servicenow$servicenow$GlideRecord): void;
    deleteWorkflow(current: servicenow$servicenow$GlideRecord): void;
    fireEvent(
      eventRecord: servicenow$servicenow$GlideRecord,
      eventName: string
    ): void;
    fireEventById(eventRecordId: string, eventName: string): void;
    getContexts(
      record: servicenow$servicenow$GlideRecord
    ): servicenow$servicenow$GlideRecord;
    getEstimatedDeliveryTime(workflowId: string): string;
    getEstimatedDeliveryTimeFromWFVersion(
      wfVersion: servicenow$servicenow$GlideRecord
    ): string;
    getReturnValue(workflowID: string, amount: number, result: boolean): {};
    getRunningFlows(
      record: servicenow$servicenow$GlideRecord
    ): servicenow$servicenow$GlideRecord;
    getVersion(workflowId: string): void;
    getVersionFromName(workflowName: string): void;
    getWorkflowFromName(workflowName: string): void;
    hasWorkflow(record: servicenow$servicenow$GlideRecord): boolean;
    restartWorkflow(
      record: servicenow$servicenow$GlideRecord,
      maintainStateFlag: boolean
    ): void;
    runFlows(
      record: servicenow$servicenow$GlideRecord,
      operation: servicenow$servicenow$GlideRecordOperation
    ): void;
    startFlow(
      workflowId: string,
      current: servicenow$servicenow$GlideRecord | null,
      operation: servicenow$servicenow$GlideRecordOperation,
      vars?: { [key: string]: any }
    ): string;
    startFlowFromContextInsert(
      context: servicenow$servicenow$GlideRecord,
      operation: servicenow$servicenow$GlideRecordOperation
    ): void;
    startFlowRetroactive(
      workflowID: string,
      retroactiveMSecs: number,
      current: servicenow$servicenow$GlideRecord,
      operation: servicenow$servicenow$GlideRecordOperation,
      vars?: { [key: string]: any },
      withSchedule?: any
    ): servicenow$servicenow$GlideRecord;
  }
  declare class GlideTime {
    constructor(milliseconds: number): this;
    getByFormat(format: string): string;
    getDisplayValue(): string;
    getDisplayValueinternal(): string;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: string): void;
    subtract(start: GlideTime, end: GlideTime): GlideDuration;
  }
  declare class GlideDateTime {
    constructor(value?: string | GlideDateTime): this;
    add(gd: GlideTime | number): void;
    addDaysLocalTime(amount: number): void;
    addDaysUTC(amount: number): void;
    addMonthsLocalTime(amount: number): void;
    addMonthsUTC(amount: number): void;
    addSeconds(value: number): void;
    addWeeksLocalTime(amount: number): void;
    addWeeksUTC(amount: number): void;
    addYearsLocalTime(amount: number): void;
    addYearsUTC(amount: number): void;
    compareTo(o: { [key: string]: any }): number;
    equals(o: { [key: string]: any }): boolean;
    getDate(): GlideTime;
    getDayOfMonthLocalTime(): number;
    getDayOfMonthUTC(): number;
    getDayOfWeekLocalTime(): number;
    getDayOfWeekUTC(): number;
    getDaysInMonthUTC(): number;
    getDisplayValue(): string;
    getDisplayValueInternal(): string;
    getDSTOffset(): number;
    getErrorMsg(): string;
    getLocalDate(): GlideTime;
    getLocalTime(): GlideTime;
    getMonthLocalTime(): number;
    getMonthUTC(): number;
    getNumericValue(): number;
    getTime(): GlideTime;
    getTZOffset(): number;
    getValue(): string;
    getWeekOfYearLocalTime(): number;
    getWeekOfYearUTC(): number;
    getYearLocalTime(): number;
    getYearUTC(): number;
    hasDate(): boolean;
    isDST(): boolean;
    isValid(): boolean;
    setDayOfMonthLocalTime(day: number): void;
    setDayOfMonthUTC(day: number): void;
    setDisplayValue(value: string, format?: string): void;
    setDisplayValueInternal(value: string): void;
    setGlideDateTime(g: GlideDateTime): void;
    setMonthLocalTime(month: number): void;
    setMonthUTC(month: number): void;
    setNumericValue(milliseconds: number): void;
    setValue(o: string | number | GlideDateTime): void;
    setValueUTC(dt: string, format: string): void;
    setYearLocalTime(year: number): void;
    setYearUTC(year: number): void;
    subtract(start: GlideDateTime, end?: GlideDateTime): GlideDuration;
    subtract(time: GlideTime | number): void;
    toString(): string;
  }
  declare var RP: {
    getParameters(): string[],
    getParameterValue(value: string): string,
    getReferringURL(): string,
    getViewID(): string,
    isDialog(): boolean,
    isHomePage(): boolean,
    isMobile(): boolean,
    isPrint(): boolean
  };
  declare class XMLDocument2 {
    constructor(): this;
    createElement(name: string): servicenow$servicenow$XMLNode;
    createElementWithTextValue(
      name: string,
      value: string
    ): servicenow$servicenow$XMLNode;
    getDocumentElement(): servicenow$servicenow$XMLNode;
    getFirstNode(xpath: string): servicenow$servicenow$XMLNode;
    getNextNode(prev: { [key: string]: any }): servicenow$servicenow$XMLNode;
    getNode(xpath: string): servicenow$servicenow$XMLNode;
    getNodeText(xpath: string): string;
    parseXML(xmlDoc: string): void;
    setCurrentElement(element: servicenow$servicenow$XMLNode): void;
    toString(): string;
  }
  declare class GlideDuration {
    constructor(value?: GlideDuration | number | string): this;
    add(value: GlideDuration): GlideDuration;
    getByFormat(format: string): string;
    getDayPart(): number;
    getDisplayValue(): string;
    getDurationValue(): string;
    getNumericValue(): number;
    getRoundedDayPart(): number;
    getValue(): string;
    setDisplayValue(asDisplayed: string): void;
    setValue(o: { [key: string]: any }): void;
    subtract(value: GlideDuration): GlideDuration;
  }
  declare var GlideFilter: {
    checkRecord(
      gr: servicenow$servicenow$GlideRecord,
      filter: string,
      matchAll?: { [key: string]: any }
    ): boolean
  };
  declare var GlideGuid: {
    generate(): string
  };
  declare class GlideLocale {
    static get(): GlideLocale;
    getGroupingSeparator(): string;
    getDecimalSeparator(): string;
  }
  declare var GlidePluginManager: {
    isActive(pluginId: string): boolean
  };
  declare class GlideSchedule {
    constructor(): this;
    constructor(sysId: string, timeZone: string): this;
    add(startDate: GlideDateTime, offset: GlideDuration): GlideDateTime;
    duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
    getName(): string;
    isInSchedule(time: GlideDateTime): string;
    isValid(): boolean;
    load(sysId: string, timeZone: string, excludeSpanId: string): void;
    setTimeZone(tz: string): void;
    whenNext(time: GlideDateTime, timeZone: string): number;
  }
  declare class GlideEvaluator {
    constructor(): this;
    evaluateScript(
      grObj: servicenow$servicenow$GlideRecord,
      scriptField?: string,
      variables?: { [key: string]: any }
    ): { [key: string]: any };
    getVariable(name: string): {};
    putVariable(name: string, value: {}): void;
  }
  declare var GlideSecureRandomUtil: {
    getSecureRandomInt(): number,
    getSecureRandomIntBound(bound: number): number,
    getSecureRandomLong(): number,
    getSecureRandomString(length: number): string
  };
  declare class GlideSysAttachment {
    constructor(): this;
    copy(
      sourceTable: string,
      sourceSysId: string,
      destinationTable: string,
      destinationSysId: string
    ): void;
    deleteAttachment(sysId: string): void;
    getContent(record: servicenow$servicenow$GlideRecord): any;
    getContentBase64(record: servicenow$servicenow$GlideRecord): string;
    getContentStream(sysId: string): { [key: string]: any };
    write(
      record: servicenow$servicenow$GlideRecord,
      fileName: string,
      contentType: string,
      data: any
    ): string;
    writeBase64(
      record: servicenow$servicenow$GlideRecord,
      fileName: string,
      contentType: string,
      base64Content: string
    ): string;
    writeContentStream(
      record: servicenow$servicenow$GlideRecord,
      fileName: string,
      contentType: string,
      inputStream: { [key: string]: any }
    ): string;
  }
  declare interface servicenow$GlideRecord {
    +sys_created_by: string & servicenow$GlideElement;
    +sys_created_on: GlideDateTime & servicenow$GlideElement;
    +sys_id: string;
    +sys_mod_count: number & servicenow$GlideElement;
    +sys_updated_by: string & servicenow$GlideElement;
    +sys_updated_on: GlideDateTime & servicenow$GlideElement;
    new(type: string): servicenow$GlideRecord;
    addActiveQuery(): servicenow$GlideQueryCondition;
    addEncodedQuery(query: string): void;
    addJoinQuery(
      joinTable: string,
      primaryField?: string,
      joinTableField?: string
    ): servicenow$GlideQueryCondition;
    addNotNullQuery(fieldName: string): servicenow$GlideQueryCondition;
    addNullQuery(fieldName: string): servicenow$GlideQueryCondition;
    addQuery(
      fieldName: string,
      operator: servicenow$QueryOperator,
      value: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
    addQuery(
      fieldName: string,
      value?: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
    canCreate(): boolean;
    canDelete(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void;
    deleteMultiple(): void;
    deleteRecord(): boolean;
    get(name: string, value?: string): boolean;
    getAttribute(fieldName: string): string;
    getClassDisplayValue(): string;
    getDisplayValue(field?: string): string;
    getED(): servicenow$GlideElementDescriptor;
    getElement(columnName: string): servicenow$GlideElement;
    getEncodedQuery(): string;
    getLabel(): string;
    getLastErrorMessage(): string;
    getLink(noStack: boolean): string;
    getRecordClassName(): string;
    getRowCount(): number;
    getTableName(): string;
    getUniqueValue(): string;
    getValue(name: string): string;
    hasNext(): boolean;
    initialize(): void;
    insert(): string;
    isActionAborted(): boolean;
    isNewRecord(): boolean;
    isValid(): boolean;
    isValidField(columnName: string): boolean;
    isValidRecord(): boolean;
    newRecord(): void;
    next(): boolean;
    _next(): boolean;
    operation(): servicenow$GlideRecordOperation;
    orderBy(name: string): void;
    orderByDesc(name: string): void;
    query(field?: string, value?: { [key: string]: any }): void;
    _query(field?: string, value?: { [key: string]: any }): void;
    setAbortAction(b: boolean): void;
    setNewGuidValue(guid: string): void;
    setLimit(limit: number): void;
    setValue(name: string, value: { [key: string]: any }): void;
    setWorkflow(enable: boolean): void;
    update(reason?: string): string;
    updateMultiple(): void;
  }

  declare interface servicenow$GlideEmailOutbound {
    getSubject(): string;
    setSubject(subject: string): void;
    setFrom(address: string): void;
    setReplyTo(address: string): void;
    addAddress(type: string, address: string, displayName: string): void;
    setBody(bodyText: string): void;
  }

  declare interface servicenow$GlideQueryCondition {
    addCondition(
      name: string,
      value: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
    addCondition(
      name: string,
      oper: servicenow$QueryOperator,
      value: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
    addOrCondition(
      name: string,
      oper: servicenow$QueryOperator,
      value: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
    addOrCondition(
      name: string,
      value: { [key: string]: any } | string | number
    ): servicenow$GlideQueryCondition;
  }

  declare interface servicenow$GlideElement {
    canCreate(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    changes(): boolean;
    changesFrom(value: { [key: string]: any }): boolean;
    changesTo(value: { [key: string]: any }): boolean;
    getAttribute(attributeName: string): string;
    getChoices(name?: string): any[];
    getDecryptedValue(): string;
    getDisplayValue(maxCharacters?: number): string;
    getED(): servicenow$GlideElementDescriptor;
    getReferenceTable(): string;
    getRefRecord(): servicenow$GlideRecord;
    nil(): boolean;
    setDisplayValue(value: { [key: string]: any }): void;
    setError(value: string): void;
    setValue(value: { [key: string]: any } | string): void;
    toString(): string;
  }

  declare interface servicenow$GlideElementDescriptor {
    getAttachmentEncryptionType(): string;
    getEncryptionType(): string;
    getInternalType(): string;
    getLabel(): string;
    getLength(): number;
    getName(): string;
    getPlural(): boolean;
    hasAttachmentsEncrypted(): boolean;
    isAutoOrSysID(): boolean;
    isChoiceTable(): boolean;
    isEdgeEncrypted(): boolean;
    isVirtual(): boolean;
  }

  declare interface servicenow$GlideScriptedProcessor {
    redirect(url: string): void;
    writeOutput(contentType: string, s?: string): void;
    writeJSON(o: { [key: string]: any }): void;
  }

  declare interface servicenow$GlideServletRequest {
    getContentType(): string;
    getHeader(name: string): string;
    getParameter(name: string): string;
    writeOutput(mimeType: string, output: string): void;
    toString(): string;
  }

  declare interface servicenow$GlideServletResponse {
    setContentType(type: string): void;
    setHeader(name: string, value: string): void;
    setStatus(value: number): void;
  }

  declare interface servicenow$GlideSession {
    isInteractive(): boolean;
    isLoggedIn(): boolean;
    getClientData(paramName: string): string;
    getClientIP(): string;
    getCurrentApplicationId(): string;
    getLanguage(): string;
    getTimeZoneName(): string;
    getSessionToken(): string;
    getUrlOnStack(): string;
    putClientData(paramName: string, paramValue: string): void;
  }

  declare interface servicenow$GlideSystem {
    addErrorMessage(message: string): void;
    addInfoMessage(message: string): void;
    base64Decode(source: string): string;
    base64Encode(source: string): string;
    beginningOfLastMonth(): string;
    beginningOfLastWeek(): string;
    beginningOfNextWeek(): string;
    beginningOfNextMonth(): string;
    beginningOfNextYear(): string;
    beginningOfThisMonth(): string;
    beginningOfThisQuarter(): string;
    beginningOfThisWeek(): string;
    beginningOfThisYear(): string;
    dateGenerate(date: string): string;
    daysAgo(days: number): string;
    daysAgoEnd(days: number): string;
    daysAgoStart(days: number): string;
    debug(
      message: string,
      parm1?: any,
      parm2?: any,
      parm3?: any,
      parm4?: any,
      parm5?: any
    ): void;
    endOfLastMonth(): string;
    endOfLastWeek(): string;
    endOfLastYear(): string;
    endOfNextMonth(): string;
    endOfNextWeek(): string;
    endOfNextYear(): string;
    endOfThisMonth(): string;
    endOfThisQuarter(): string;
    endOfThisWeek(): string;
    endOfThisYear(): string;
    error(
      message: string,
      parm1?: any,
      parm2?: any,
      parm3?: any,
      parm4?: any,
      parm5?: any
    ): void;
    eventQueue(
      eventName: string,
      gr: servicenow$GlideRecord,
      optionalParam1: string,
      optionalParam2: string,
      eventQueue?: string
    ): void;
    eventQueueScheduled(
      name: string,
      instance: servicenow$GlideRecord,
      parm1: string,
      parm2: string,
      expiration: { [key: string]: any }
    ): void;
    executeNow(job: servicenow$GlideRecord): string;
    generateGUID(): string;
    getCallerScopeName(): string;
    getCssCacheVersionString(): string;
    getCurrentApplicationId(): string;
    getCurrentScopeName(): string;
    getErrorMessages(id: string, args?: string[]): string;
    getMessage(id: string, object?: any): string;
    getProperty(key: string, altobject?: {}): {};
    getSession(): string | servicenow$GlideSession;
    getSessionID(): string;
    getSessionToken(): string;
    getTimeZoneName(): string;
    getUrlOnStack(): string;
    getUser(): servicenow$GlideUser;
    getUserDisplayName(): string;
    getUserID(): string;
    getUserName(): string;
    getUserNameByUserID(id: string): string;
    hasRole(roleName: string): boolean;
    include(include: string): void;
    info(
      message: string,
      parm1?: any,
      parm2?: any,
      parm3?: any,
      parm4?: any,
      parm5?: any
    ): void;
    isDebugging(): boolean;
    isInteractive(): boolean;
    isLoggedIn(): boolean;
    isMobile(): boolean;
    minutesAgoEnd(num: number): string;
    minutesAgoStart(num: number): string;
    monthsAgo(num: number): string;
    monthsAgoEnd(num: number): string;
    monthsAgoStart(num: number): string;
    nil(object: any): boolean;
    quartersAgoEnd(num: number): string;
    quartersAgoStart(num: number): string;
    setRedirect(uri: string): void;
    tableExists(table: string): boolean;
    warn(
      message: string,
      parm1?: any,
      parm2?: any,
      parm3?: any,
      parm4?: any,
      parm5?: any
    ): void;
    xmlToJSON(xml: string): any;
    yearsAgo(years: number): string;
    yesterday(): string;
  }

  declare interface servicenow$GlideUser {
    getCompanyID(): string;
    getDisplayName(): string;
    getID(): string;
    getName(): string;
    getPreference(name: string): string;
    hasRole(role: string): boolean;
    isMemberOf(group: string): boolean;
    savePreference(name: string, value: string): void;
  }

  declare interface servicenow$XMLNode {
    getLastChild(): servicenow$XMLNode;
    getFirstChild(): servicenow$XMLNode;
    getNodeValue(): string;
    getNodeName(): string;
    hasAttribute(name: string): boolean;
    getAttribute(attribute: string): string;
    getChildNodeIterator(): servicenow$XMLNodeIterator;
    getTextContent(): string;
    toString(): string;
  }

  declare interface servicenow$XMLNodeIterator {
    hasNext(): boolean;
    next(): servicenow$XMLNode;
  }

  declare interface servicenow$SOAPResponseV2 {
    waitForResponse(timeoutSecs: number): void;
    getStatusCode(): number;
    getHeader(name: string): string;
    getHeaders(): { [key: string]: any };
    getBody(): string;
    haveError(): boolean;
    getErrorCode(): number;
    getErrorMessage(): string;
  }

  declare interface servicenow$RESTResponseV2 {
    getBody(): string;
    getCookies(): {
      size: () => number,
      get: (index: number) => string
    };
    getErrorCode(): number;
    getErrorMessage(): string;
    getHeader(name: string): string;
    getHeaders(): { [key: string]: any };
    getQueryString(): string;
    getResponseAttachmentSysid(): string;
    getStatusCode(): number;
    haveError(): boolean;
    waitForResponse(timeoutSecs: number): void;
  }

  declare interface servicenow$RESTAPIRequest<T> {
    +body: servicenow$RESTAPIRequestBody<T>;
    +pathParams: {
      [paramName: string]: string
    };
    +queryParams: {
      [paramName: string]: string[]
    };
    +queryString: string;
    +url: string;
    +headers: {
      [paramName: string]: string
    };
    getHeader(header: string): string;
    getSupportedResponseContentTypes(): string[];
  }

  declare interface servicenow$RESTAPIRequestBody<T> {
    +data: T;
    +dataStream: { [key: string]: any };
    +dataString: string;
    hasNext(): boolean;
    nextEntry(): any;
  }

  declare interface servicenow$RESTAPIResponse {
    getStreamWriter(): servicenow$RESTAPIResponseStream;
    setBody(body: any): void;
    setHeaders(headers: any): void;
    setLocation(location: string): void;
    setStatus(status: number): void;
    setHeader(header: string, value: string): void;
    setContentType(contentType: string): void;
    setError(error: any): void;
  }

  declare interface servicenow$RESTAPIResponseStream {
    writeStream(stream: { [key: string]: any }): void;
    writeString(data: string): void;
  }

  declare type servicenow$QueryOperator =
    | "="
    | "!="
    | ">"
    | ">="
    | "<"
    | "<="
    | "IN"
    | "STARTSWITH"
    | "ENDSWITH"
    | "CONTAINS"
    | "DOESNOTCONTAIN"
    | "INSTANCEOF";

  declare type servicenow$RestHTTPMethods =
    | "get"
    | "post"
    | "delete"
    | "patch"
    | "put"
    | "head"
    | "delete"
    | "options";

  declare type servicenow$GlideRecordOperation = "insert" | "update" | "delete";
}
