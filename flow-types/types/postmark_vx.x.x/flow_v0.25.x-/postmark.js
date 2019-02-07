declare module "postmark" {
  declare var npm$namespace$Postmark: {
    defaults: typeof Postmark$defaults
  };
  declare var Postmark$defaults: Postmark$Options;

  declare interface Postmark$PostmarkError {
    status: number;
    message: string;
    code: number;
  }

  declare interface Postmark$PostmarkMessageHeader {
    Name: string;
    Value: string;
  }

  declare interface Postmark$PostmarkAttachment {
    Content: string;
    Name: string;
    ContentType: string;
  }

  declare interface Postmark$Filter {
    count?: number;
    offset?: number;
  }

  declare interface Postmark$PostmarkMessageWithTemplate {
    To: string;
    From: string;
    Cc?: string;
    Bcc?: string;
    ReplyTo?: string;
    TemplateId?: string;
    TemplateModel?: any;
    Tag?: string;
    Subject?: string;
    TrackOpens?: boolean;
    TrackLinks?: string;
    Headers?: Postmark$PostmarkMessageHeader[];
  }

  declare interface Postmark$PostmarkMessage {
    To: string;
    From: string;
    Cc?: string;
    Bcc?: string;
    ReplyTo?: string;
    Tag?: string;
    Subject?: string;
    HTMLBody?: string;
    TextBody?: string;
    TrackOpens?: boolean;
    TrackLinks?: string;
    Headers?: Postmark$PostmarkMessageHeader[];
    Attachments?: Postmark$PostmarkAttachment[];
  }

  declare interface Postmark$Sender {
    Color: string;
    RawEmailEnabled: boolean;
    SmtpApiActivated: boolean;
    DeliveryHookUrl: string;
    InboundHookUrl: string;
    BounceHookUrl: boolean;
    IncludeBounceContentInHook: boolean;
    OpenHookUrl: boolean;
    PostFirstOpenOnly: boolean;
    TrackOpens: boolean;
    TrackLinks: string;
    InboundDomain: string;
    InboundSpamThreshold: number;
  }

  declare interface Postmark$TemplateValidator<T: { [key: string]: any }> {
    Subject: string;
    HtmlBody: string;
    TextBody: string;
    TestRenderModel?: T;
    InlineCssForHtmlTestRender?: boolean;
    Subject: string;
    HtmlBody: string;
    TextBody: string;
    TestRenderModel?: T;
    InlineCssForHtmlTestRender?: boolean;
  }

  declare type Postmark$PostmarkCallback<T: { [key: string]: any } = any> =
    | ((e: Postmark$PostmarkError, ret: T) => void)
    | void;

  declare interface Postmark$SimpleOptions {
    ssl: boolean;
    requestHost: string;
  }

  declare type Postmark$Options = {
    requestFactory(
      options: Postmark$SimpleOptions
    ): (
      path?: string,
      type?: string,
      content?: Postmark$PostmarkMessage,
      callback?: Postmark$PostmarkCallback
    ) => any
  } & Postmark$SimpleOptions;

  declare class Postmark$Client {
    constructor(serverKey: string, options?: $Shape<Postmark$Options>): this;
    send(message: Postmark$PostmarkMessage): Promise<Postmark$SendStatus>;
    send(
      message: Postmark$PostmarkMessage,
      callback: Postmark$PostmarkCallback<Postmark$SendStatus>
    ): void;
    sendEmailWithTemplate(
      message: Postmark$PostmarkMessageWithTemplate
    ): Promise<Postmark$SendStatus>;
    sendEmailWithTemplate(
      message: Postmark$PostmarkMessageWithTemplate,
      callback: Postmark$PostmarkCallback<Postmark$SendStatus>
    ): void;
    batch(message: Postmark$PostmarkMessage[]): Promise<Postmark$SendStatus[]>;
    batch(
      message: Postmark$PostmarkMessage[],
      callback: Postmark$PostmarkCallback<Postmark$SendStatus[]>
    ): void;
    sendEmail(message: Postmark$PostmarkMessage): Promise<Postmark$SendStatus>;
    sendEmail(
      message: Postmark$PostmarkMessage,
      callback: Postmark$PostmarkCallback<Postmark$SendStatus>
    ): void;
    sendEmailBatch(
      message: Postmark$PostmarkMessage[]
    ): Promise<Postmark$SendStatus[]>;
    sendEmailBatch(
      message: Postmark$PostmarkMessage[],
      callback: Postmark$PostmarkCallback<Postmark$SendStatus[]>
    ): void;
    getDeliveryStatistics(): Promise<Postmark$DeliveryStats>;
    getDeliveryStatistics(
      callback: Postmark$PostmarkCallback<Postmark$DeliveryStats>
    ): void;
    getBounces(filter: Postmark$BounceFilter): Promise<Postmark$BouncesResult>;
    getBounces(
      filter: Postmark$BounceFilter,
      callback?: Postmark$PostmarkCallback<Postmark$BouncesResult>
    ): void;
    getBounce(id: number): Promise<Postmark$Bounce>;
    getBounce(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$Bounce>
    ): void;
    getBounceDump(id: number): Promise<Postmark$BounceDump>;
    getBounceDump(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$BounceDump>
    ): void;
    activateBounce(id: number): Promise<Postmark$ActivatedBounceResult>;
    activateBounce(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$ActivatedBounceResult>
    ): void;
    getBounceTags(): Promise<string[]>;
    getBounceTags(callback?: Postmark$PostmarkCallback<string[]>): void;
    getServer(): Promise<Postmark$Server>;
    getServer(callback?: Postmark$PostmarkCallback<Postmark$Server>): void;
    editServer(server: $Shape<Postmark$Server>): Promise<Postmark$Server>;
    editServer(
      server: $Shape<Postmark$Server>,
      callback?: Postmark$PostmarkCallback<Postmark$Server>
    ): void;
    getOutboundMessages(
      filter: Postmark$OutboundMessageFilter
    ): Promise<Postmark$OutboundMessagesResult>;
    getOutboundMessages(
      filter: Postmark$OutboundMessageFilter,
      callback?: Postmark$PostmarkCallback<Postmark$OutboundMessagesResult>
    ): void;
    getOutboundMessageDetails(id: number): Promise<Postmark$OutboundMessage>;
    getOutboundMessageDetails(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$OutboundMessage>
    ): void;
    getMessageOpens(
      filter: Postmark$OpenMessageFilter
    ): Promise<Postmark$MessageOpensResult>;
    getMessageOpens(
      filter: Postmark$OpenMessageFilter,
      callback?: Postmark$PostmarkCallback<Postmark$MessageOpensResult>
    ): void;
    getMessageOpensForSingleMessage(
      id: number,
      filter: Postmark$Filter
    ): Promise<Postmark$MessageOpensResult>;
    getMessageOpensForSingleMessage(
      id: number,
      filter: Postmark$Filter,
      callback?: Postmark$PostmarkCallback<Postmark$MessageOpensResult>
    ): void;
    getInboundMessages(
      filter: Postmark$InboundMessageFilter
    ): Promise<Postmark$InboundMessagesResult>;
    getInboundMessages(
      filter: Postmark$InboundMessageFilter,
      callback?: Postmark$PostmarkCallback<Postmark$InboundMessagesResult>
    ): void;
    getInboundMessageDetails(id: number): Promise<Postmark$InboundMessage>;
    getInboundMessageDetails(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$InboundMessage>
    ): void;
    bypassBlockedInboundMessage(id: number): Promise<Postmark$GenericResult>;
    bypassBlockedInboundMessage(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    getOuboundOverview(
      filter: Postmark$BaseFilter
    ): Promise<Postmark$OutboundOverview>;
    getOuboundOverview(
      filter: Postmark$BaseFilter,
      callback?: Postmark$PostmarkCallback<Postmark$OutboundOverview>
    ): void;
    retryInboundHookForMessage(id: number): Promise<Postmark$GenericResult>;
    retryInboundHookForMessage(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    getTemplate(id: number): Promise<Postmark$Template>;
    getTemplate(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$Template>
    ): void;
    createTemplate(
      template: $Shape<Postmark$Template>
    ): Promise<Postmark$TemplateBase>;
    createTemplate(
      template: $Shape<Postmark$Template>,
      callback?: Postmark$PostmarkCallback<Postmark$TemplateBase>
    ): void;
    editTemplate(
      template: $Shape<Postmark$Template>
    ): Promise<Postmark$TemplateBase>;
    editTemplate(
      template: $Shape<Postmark$Template>,
      callback?: Postmark$PostmarkCallback<Postmark$TemplateBase>
    ): void;
    getTemplates(filter: Postmark$Filter): Promise<Postmark$TemplatesResult>;
    getTemplates(
      filter: Postmark$Filter,
      callback?: Postmark$PostmarkCallback<Postmark$TemplatesResult>
    ): void;
    deleteTemplate(id: number): Promise<Postmark$GenericResult>;
    deleteTemplate(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    validateTemplate<T: { [key: string]: any }>(
      templateObject: Postmark$TemplateValidator<T>
    ): Promise<Postmark$TemplateValidationResult<T>>;
    validateTemplate<T: { [key: string]: any }>(
      templateObject: Postmark$TemplateValidator<T>,
      callback?: Postmark$PostmarkCallback<Postmark$TemplateValidationResult<T>>
    ): void;
  }

  declare type Postmark$CreateSignature = {
    FromEmail: string
  } & Postmark$UpdateSignature;

  declare interface Postmark$CreateServer {
    Name: string;
    Color?: string;
    RawEmailEnabled?: boolean;
    SmtpApiActivated?: boolean;
    DeliveryHookUrl?: string;
    InboundHookUrl?: string;
    BounceHookUrl?: string;
    IncludeBounceContentInHook?: boolean;
    OpenHookUrl?: string;
    PostFirstOpenOnly?: boolean;
    TrackOpens?: boolean;
    TrackLinks?: string;
    InboundDomain?: string;
    InboundSpamThreshold?: number;
  }

  declare interface Postmark$CreateDomain {
    Name: string;
    ReturnPathDomain?: string;
  }

  declare class Postmark$AdminClient {
    constructor(apiKey: string, options: $Shape<Postmark$Options>): this;
    listSenderSignatures(
      query: Postmark$Filter
    ): Promise<Postmark$SenderSignaturesResults>;
    listSenderSignatures(
      query: Postmark$Filter,
      callback?: Postmark$PostmarkCallback<Postmark$SenderSignaturesResults>
    ): void;
    createSenderSignature(
      options: Postmark$CreateSignature
    ): Promise<Postmark$SenderSignature>;
    createSenderSignature(
      options: Postmark$CreateSignature,
      callback?: Postmark$PostmarkCallback<Postmark$SenderSignature>
    ): void;
    editSenderSignature(
      id: number,
      options: Postmark$UpdateSignature
    ): Promise<Postmark$SenderSignature>;
    editSenderSignature(
      id: number,
      options: Postmark$UpdateSignature,
      callback?: Postmark$PostmarkCallback<Postmark$SenderSignature>
    ): void;
    deleteSenderSignature(id: number): Promise<Postmark$GenericResult>;
    deleteSenderSignature(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    resendSenderSignatureConfirmation(
      id: number
    ): Promise<Postmark$GenericResult>;
    resendSenderSignatureConfirmation(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    verifySenderSignatureSPF(id: number): Promise<Postmark$SenderSignature>;
    verifySenderSignatureSPF(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$SenderSignature>
    ): void;
    requestNewDKIMForSenderSignature(
      id: number
    ): Promise<Postmark$GenericResult>;
    requestNewDKIMForSenderSignature(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    getServer(id: number): Promise<Postmark$Server>;
    getServer(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$Server>
    ): void;
    createServer(options: Postmark$CreateServer): Promise<Postmark$Server>;
    createServer(
      options: Postmark$CreateServer,
      callback?: Postmark$PostmarkCallback<Postmark$Server>
    ): void;
    editServer(
      id: number,
      options: $Shape<Postmark$CreateServer>
    ): Promise<Postmark$Server>;
    editServer(
      id: number,
      options: $Shape<Postmark$CreateServer>,
      callback?: Postmark$PostmarkCallback<Postmark$Server>
    ): void;
    deleteServer(id: number): Promise<Postmark$GenericResult>;
    deleteServer(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    listServers(query: Postmark$ServerFilter): Promise<Postmark$ServersResult>;
    listServers(
      query: Postmark$ServerFilter,
      callback?: Postmark$PostmarkCallback<Postmark$ServersResult>
    ): void;
    listDomains(query: Postmark$Filter): Promise<Postmark$DomainsResult>;
    listDomains(
      query: Postmark$Filter,
      callback?: Postmark$PostmarkCallback<Postmark$DomainsResult>
    ): void;
    getDomain(id: number): Promise<Postmark$Domain>;
    getDomain(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$Domain>
    ): void;
    createDomain(options: Postmark$CreateDomain): Promise<Postmark$Domain>;
    createDomain(
      options: Postmark$CreateDomain,
      callback?: Postmark$PostmarkCallback<Postmark$Domain>
    ): void;
    editDomain(
      id: number,
      options: $Shape<Postmark$CreateDomain>
    ): Promise<Postmark$Domain>;
    editDomain(
      id: number,
      options: $Shape<Postmark$CreateDomain>,
      callback?: Postmark$PostmarkCallback<Postmark$Domain>
    ): void;
    deleteDomain(id: number): Promise<Postmark$GenericResult>;
    deleteDomain(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$GenericResult>
    ): void;
    verifyDomainSPF(id: number): Promise<Postmark$SenderSignature>;
    verifyDomainSPF(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$SenderSignature>
    ): void;
    rotateDKIMForDomain(id: number): Promise<Postmark$RotateDKIMResult>;
    rotateDKIMForDomain(
      id: number,
      callback?: Postmark$PostmarkCallback<Postmark$RotateDKIMResult>
    ): void;
  }

  declare interface Postmark$ClientClass {
    new(serverKey: string, options: $Shape<Postmark$Options>): Postmark$Client;
  }

  declare interface Postmark$AdminClientClass {
    new(
      apiKey: string,
      options: $Shape<Postmark$Options>
    ): Postmark$AdminClient;
  }

  declare interface Postmark$Postmark {
    (apiKey: string, options: $Shape<Postmark$Options>): Postmark$Client;
    Postmark$defaults: Postmark$Options;
    Postmark$Client: Postmark$ClientClass;
    Postmark$AdminClient: Postmark$AdminClientClass;
  }

  declare type Postmark$Server = {
    ID: number,
    ApiTokens: string[],
    ServerLink: string,
    Name: string
  } & Postmark$Sender;

  declare interface Postmark$SendStatus {
    To: string;
    SubmittedAt: string;
    MessageID: string;
    ErrorCode: number;
    Message: string;
  }

  declare interface Postmark$ValidationError {
    Message: string;
    Line: number;
    CharacterPosition: number;
  }

  declare interface Postmark$ValidationSet {
    ContentIsValid: boolean;
    ValidationErrors: Postmark$ValidationError[];
    RenderedContent: string;
  }

  declare interface Postmark$TemplateBase {
    Name: string;
    TemplateId: number;
    Active: boolean;
  }

  declare type Postmark$Template = {
    Subject: string,
    HtmlBody: string,
    TextBody: string,
    AssociatedServerId: number
  } & Postmark$TemplateBase;

  declare type Postmark$BaseFilter = {
    tag?: string,
    todate?: string,
    fromdate?: string
  } & Postmark$Filter;

  declare type Postmark$BounceFilter = {
    type?: string,
    inactive?: boolean,
    emailFilter?: string,
    messageID?: string
  } & Postmark$BaseFilter;

  declare type Postmark$OutboundMessageFilter = {
    recipient?: string,
    fromemail?: string,
    status?: string
  } & Postmark$BaseFilter;

  declare type Postmark$InboundMessageFilter = {
    mailboxhash?: string,
    subject?: string
  } & Postmark$OutboundMessageFilter;

  declare type Postmark$OpenMessageFilter = {
    client_name?: string,
    client_company?: string,
    client_family?: string,
    os_name?: string,
    os_family?: string,
    os_company?: string,
    platform?: string,
    region?: string,
    city?: string
  } & Postmark$BaseFilter;

  declare type Postmark$ServerFilter = {
    name?: string
  } & Postmark$Filter;

  declare interface Postmark$Bounce {
    ID: number;
    Type: string;
    TypeCode: number;
    Name: string;
    Tag: string;
    MessageID: string;
    ServerID: number;
    Description: string;
    Details: string;
    Email: string;
    From: string;
    Subject: string;
    BouncedAt: string;
    DumpAvailable: boolean;
    Inactive: boolean;
    CanActivate: boolean;
    Content: string;
  }

  declare interface Postmark$BounceDump {
    Body: string;
  }

  declare interface Postmark$VendorTrackingInfo {
    Name: string;
    Company: string;
    Family: string;
  }

  declare interface Postmark$GeoTrackingInfo {
    CountryISOCode: string;
    Country: string;
    RegionISOCode: string;
    Region: string;
    City: string;
    Zip: string;
    Coords: string;
    IP: string;
  }

  declare interface Postmark$BounceStats {
    Name: string;
    Count: number;
    Type: string | void;
  }

  declare interface Postmark$DeliveryStats {
    InactiveMails: number;
    Bounces: Postmark$BounceStats[];
  }

  declare interface Postmark$MessageOpens {
    FirstOpen: boolean;
    Postmark$Client: Postmark$VendorTrackingInfo;
    OS: Postmark$VendorTrackingInfo;
    Platform: string;
    UserAgent: string;
    ReadSeconds: number;
    Geo: Postmark$GeoTrackingInfo;
    MessageID: string;
    ReceivedAt: string;
    Tag: string;
    Recipient: string;
  }

  declare interface Postmark$ExpandedEmail {
    Email: string;
    Name: string;
  }

  declare interface Postmark$MessageEvents {
    Recipient: string;
    Type: string;
    ReceivedAt: string;
    Details: Postmark$MessageEventDetails;
  }

  declare interface Postmark$MessageEventDetails {
    Summary?: string;
    BounceID?: string;
    Link?: string;
    ClickLocation?: string;
    DeliveryMessage?: string;
    DestinationServer?: string;
    DestinationIP?: string;
  }

  declare interface Postmark$MessageBase {
    Tag: string;
    MessageID: string;
    From: string;
    Cc: string;
    Subject: string;
    Status: string;
    Attachments: Postmark$PostmarkAttachment[];
  }

  declare type Postmark$OutboundMessageBase = {
    To: Postmark$ExpandedEmail[],
    Recipients: string[],
    ReceivedAt: string,
    TrackOpens: boolean,
    TrackLinks: string
  } & Postmark$MessageBase;

  declare type Postmark$OutboundMessage = {
    TextBody: string,
    HtmlBody: string,
    Body: string,
    Postmark$MessageEvents: Postmark$MessageEvents[]
  } & Postmark$OutboundMessageBase;

  declare type Postmark$InboundMessageBase = {
    FromName: string,
    FromFull: Postmark$ExpandedEmail,
    To: string,
    ToFull: Postmark$ExpandedEmail[],
    CcFull: Postmark$ExpandedEmail[],
    ReplyTo: string,
    OriginalRecipient: string,
    Date: string,
    MailboxHash: string
  } & Postmark$MessageBase;

  declare type Postmark$InboundMessage = {
    TextBody: string,
    HtmlBody: string,
    Headers: Postmark$PostmarkMessageHeader[],
    BlockedReason?: string,
    Postmark$MessageEvents: Postmark$MessageEvents[]
  } & Postmark$InboundMessageBase;

  declare interface Postmark$GenericResult {
    Message: string;
    ErrorCode?: number;
  }

  declare interface Postmark$PaginatedResult {
    TotalCount: number;
  }

  declare type Postmark$ActivatedBounceResult = {
    Postmark$Bounce: Postmark$Bounce
  } & Postmark$GenericResult;

  declare type Postmark$BouncesResult = {
    Bounces: Postmark$Bounce[]
  } & Postmark$PaginatedResult;

  declare type Postmark$TemplatesResult = {
    Templates: Postmark$TemplateBase[]
  } & Postmark$PaginatedResult;

  declare type Postmark$MessageOpensResult = {
    Opens: Postmark$MessageOpens[]
  } & Postmark$PaginatedResult;

  declare type Postmark$OutboundMessagesResult = {
    Messages: Postmark$OutboundMessageBase[]
  } & Postmark$PaginatedResult;

  declare type Postmark$InboundMessagesResult = {
    InboundMessages: Postmark$InboundMessageBase[]
  } & Postmark$PaginatedResult;

  declare interface Postmark$TemplateValidationResult<
    T: { [key: string]: any } = any
  > {
    AllContentIsValid: boolean;
    HtmlBody: Postmark$ValidationSet;
    TextBody: Postmark$ValidationSet;
    Subject: Postmark$ValidationSet;
    SuggestedTemplateModel: T;
  }

  declare type Postmark$SenderSignaturesResults = {
    SenderSignatures: Postmark$SenderSignatureBase[]
  } & Postmark$PaginatedResult;

  declare type Postmark$ServersResult = {
    Servers: Postmark$Server[]
  } & Postmark$PaginatedResult;

  declare type Postmark$DomainsResult = {
    Domains: Postmark$DomainBase[]
  } & Postmark$PaginatedResult;

  declare interface Postmark$SenderSignatureBase {
    Postmark$Domain: string;
    EmailAddress: string;
    Name: string;
    ReplyToEmailAddress: string;
    Confirmed: boolean;
    ID: number;
  }

  declare interface Postmark$SPFRecord {
    SPFHost: string;
    SPFTextValue: string;
    SPFVerified: boolean;
  }

  declare interface Postmark$DKIMKey {
    WeakDKIM: boolean;
    DKIMHost: string;
    DKIMVerified: boolean;
    DKIMTextValue: string;
    DKIMPendingHost: string;
    DKIMPendingTextValue: string;
    DKIMRevokedHost: string;
    DKIMRevokedTextValue: string;
    SafeToRemoveRevokedKeyFromDNS: boolean;
    DKIMUpdateStatus: string;
  }

  declare type Postmark$VerificationDetails = {
    ReturnPathDomain: string,
    ReturnPathDomainCNAMEValue: string
  } & Postmark$SPFRecord &
    Postmark$DKIMKey;

  declare type Postmark$SenderSignature = {
    ReturnPathDomainVerified: boolean
  } & Postmark$SenderSignatureBase &
    Postmark$VerificationDetails;

  declare interface Postmark$UpdateSignature {
    Name: string;
    ReplyToEmail?: string;
    ReturnPathDomain?: string;
  }

  declare interface Postmark$DomainBase {
    ID: number;
    Name: string;
    SPFVerified: boolean;
    DKIMVerified: boolean;
    WeakDKIM: boolean;
    ReturnPathDomainVerified: boolean;
  }

  declare type Postmark$Domain = {} & Postmark$DomainBase &
    Postmark$VerificationDetails;

  declare type Postmark$RotateDKIMResult = {
    Name: string,
    ID: string
  } & Postmark$DKIMKey;

  declare interface Postmark$OutboundOverview {
    Sent: number;
    Bounced: number;
    SMTPApiErrors: number;
    BounceRate: number;
    SpamComplaints: number;
    SpamComplaintsRate: number;
    Opens: number;
    UniqueOpens: number;
    Tracked: number;
    WithLinkTracking: number;
    WithOpenTracking: number;
    TotalTrackedLinksSent: number;
    UniqueLinksClicked: number;
    TotalClicks: number;
    WithClientRecorded: number;
    WithPlatformRecorded: number;
    WithReadTimeRecorded: number;
  }
  declare function Postmark(
    apiKey: string,
    options: $Shape<Postmark$Postmark.Postmark$Options>
  ): Postmark$Postmark.Postmark$Client;

  declare module.exports: typeof Postmark$Postmark;
}
