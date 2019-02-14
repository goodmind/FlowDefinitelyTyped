declare module "twilio" {
  import typeof * as Express from "express";

  import typeof * as Http from "http";

  import typeof * as Q from "q";

  declare interface twilio {
    (
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): twilio$RestClient;
  }
  declare function twilio(
    sid?: string,
    tkn?: string,
    options?: twilio$ClientOptions
  ): twilio$RestClient;

  declare var npm$namespace$twilio: {
    webhook: typeof twilio$webhook,
    validateRequest: typeof twilio$validateRequest,
    validateExpressRequest: typeof twilio$validateExpressRequest,

    IpMessagingGrant: typeof twilio$IpMessagingGrant,
    ConversationsGrant: typeof twilio$ConversationsGrant,
    AccessToken: typeof twilio$AccessToken,
    Capability: typeof twilio$Capability,
    Client: typeof twilio$Client,
    IpMessagingClient: typeof twilio$IpMessagingClient,
    LookupsClient: typeof twilio$LookupsClient,
    MonitorClient: typeof twilio$MonitorClient,
    PricingClient: typeof twilio$PricingClient,
    RestClient: typeof twilio$RestClient,
    TaskRouterCapability: typeof twilio$TaskRouterCapability,
    TaskRouterClient: typeof twilio$TaskRouterClient,
    TaskRouterTaskQueueCapability: typeof twilio$TaskRouterTaskQueueCapability,
    TaskRouterWorkerCapability: typeof twilio$TaskRouterWorkerCapability,
    TaskRouterWorkspaceCapability: typeof twilio$TaskRouterWorkspaceCapability,
    TrunkingClient: typeof twilio$TrunkingClient,
    Node: typeof twilio$Node,
    TwimlResponse: typeof twilio$TwimlResponse,
    WorkflowRuleTarget: typeof twilio$WorkflowRuleTarget,
    WorkflowRule: typeof twilio$WorkflowRule,
    TaskRoutingConfiguration: typeof twilio$TaskRoutingConfiguration,
    WorkflowConfiguration: typeof twilio$WorkflowConfiguration
  };
  declare export interface twilio$GrantPayload {}

  declare export interface twilio$Grant {
    toPayload(): twilio$GrantPayload;
  }

  declare export interface twilio$RequestCallback {
    (err: any, data: any, response: Http.IncomingMessage): void;
  }

  declare export interface twilio$RestMethod {
    (callback: twilio$RequestCallback): Q.Promise<any>;
    (args: any, callback?: twilio$RequestCallback): Q.Promise<any>;
  }

  declare export interface twilio$BaseMappedResource<T> {
    (resourceSid: string): T;
  }

  declare export interface twilio$Resource {
    get: twilio$RestMethod;
  }

  declare export type twilio$DeletableResource = {
    delete: twilio$RestMethod
  } & Resource;

  declare export type twilio$ListableResource = {
    list: twilio$RestMethod
  } & Resource;

  declare export type twilio$MappedResource<T> = {} & Resource &
    BaseMappedResource<T>;

  declare export type twilio$PostableResource = {
    post: twilio$RestMethod
  } & Resource;

  declare export type twilio$InstanceResource = {
    update: twilio$RestMethod
  } & PostableResource &
    DeletableResource;

  declare export type twilio$CreatableMappedResource<T> = {
    create: twilio$RestMethod
  } & MappedResource<T> &
    PostableResource;

  declare export type twilio$ListMappedResource<
    T
  > = {} & CreatableMappedResource<T> & ListableResource;

  declare export interface twilio$IpMessagingGrantOptions {
    serviceSid: string;
    endpointId: string;
    deploymentRoleSid: string;
    pushCredentialSid: string;
  }

  declare export type twilio$IpMessagingGrantPayload = {
    service_sid: string,
    endpoint_id: string,
    deployment_role_sid: string,
    push_credential_sid: string
  } & GrantPayload;

  declare export class twilio$IpMessagingGrant mixins Grant {
    serviceSid: string;
    endpointId: string;
    deploymentRoleSid: string;
    pushCredentialSid: string;
    key: string;
    constructor(options?: twilio$IpMessagingGrantOptions): this;
    toPayload(): twilio$IpMessagingGrantPayload;
  }

  declare export interface twilio$ConversationsGrantOptions {
    configurationProfileSid: string;
  }

  declare export type twilio$ConversationsGrantPayload = {
    configuration_profile_sid: string
  } & GrantPayload;

  declare export class twilio$ConversationsGrant mixins Grant {
    configurationProfileSid: string;
    constructor(options?: twilio$ConversationsGrantOptions): this;
    toPayload(): twilio$ConversationsGrantPayload;
  }

  declare export interface twilio$AccessTokenOptions {
    ttl: number;
    identity: string;
    nbf: number;
  }

  declare export class twilio$AccessToken {
    accountSid: string;
    keySid: string;
    secret: string;
    ttl: number;
    identity: string;
    nbf: number;
    grants: Array<twilio$Grant>;
    static twilio$IpMessagingGrant: twilio$IpMessagingGrant;
    static ConversationGrant: twilio$ConversationsGrant;
    static DEFAULT_ALGORITHM: string;
    static ALGORITHMS: Array<string>;
    constructor(
      accountSid: string,
      keySid: string,
      secret: string,
      opts?: twilio$AccessTokenOptions
    ): this;
    addGrant(grant: twilio$Grant): void;
    toJwt(algorithm: string): any;
  }

  declare export class twilio$Capability {
    accountSid: string;
    authToken: string;
    capabilities: Array<string>;
    clientName: string;
    outgoingScopeParams: any;
    scopeParams: any;
    constructor(sid?: string, tkn?: string): this;
    allowClientIncoming(clientName: string): twilio$Capability;
    allowClientOutgoing(appSid: string, params?: any): twilio$Capability;
    allowEventStream(filters?: any): twilio$Capability;
    generate(timeout?: number): string;
  }

  declare export interface twilio$ClientOptions {
    host?: string;
    apiVersion?: string;
    timeout?: number;
  }

  declare export interface twilio$ClientRequestOptions {
    url: string;
    method?: string;
    form?: any;
  }

  declare export class twilio$Client {
    accountSid: string;
    authToken: string;
    host: string;
    apiVersion: string;
    timeout: number;
    constructor(
      sid?: string,
      tkn?: string,
      host?: string,
      api_version?: string,
      timeout?: number
    ): this;
    getBaseUrl(): string;
    request(
      options: twilio$ClientRequestOptions,
      callback?: twilio$RequestCallback
    ): Q.Promise<any>;
  }

  declare export class twilio$IpMessagingClient mixins Client {
    services: twilio$ServiceResource;
    credentials: twilio$CredentialResource;
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export class twilio$LookupsClient mixins Client {
    phoneNumbers: twilio$PhoneNumberResource;
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export class twilio$MonitorClient mixins Client {
    events: twilio$EventResource;
    alerts: twilio$AlertResource;
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export class twilio$PricingClient mixins Client {
    voice: twilio$PricingVoiceResource;
    phoneNumbers: twilio$PricingPhoneNumberResource;
    messaging: twilio$PricingMessagingResource;
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export class twilio$RestClient mixins Client {
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
    accounts: twilio$AccountResource;
    availablePhoneNumbers: twilio$AvailablePhoneNumberResource;
    outgoingCallerIds: twilio$OutgoingCallerIdResource;
    incomingPhoneNumbers: twilio$IncomingPhoneNumberResource;
    messages: twilio$MessageResource;
    sms: twilio$SMSIntermediary;
    applications: twilio$ApplicationResource;
    connectApps: twilio$ConnectAppResource;
    authorizedConnectApps: twilio$AuthorizedConnectAppResource;
    calls: twilio$CallResource;
    conferences: twilio$ConferenceResource;
    queues: twilio$QueueResource;
    recordings: twilio$RecordingResource;
    tokens: twilio$TokenResource;
    transcriptions: twilio$TranscriptionResource;
    notifications: twilio$NotificationResource;
    usage: twilio$UsageIntermediary;
    sip: twilio$SIPIntermediary;
    addresses: twilio$AddressResource;
    keys: twilio$KeyResource;
    put: twilio$RestMethod;
    post: twilio$RestMethod;
    get: twilio$RestMethod;
    update: twilio$RestMethod;
    list: twilio$RestMethod;
    sendSms: twilio$RestMethod;
    sendMms: twilio$RestMethod;
    sendMessage: twilio$RestMethod;
    listSms: twilio$RestMethod;
    listMessages: twilio$RestMethod;
    getSms(
      messageSid: string,
      callback?: twilio$RequestCallback
    ): Q.Promise<any>;
    getMessage(
      messageSid: string,
      callback?: twilio$RequestCallback
    ): Q.Promise<any>;
    makeCall: twilio$RestMethod;
    listCalls: twilio$RestMethod;
    getCall(callSid: string, callback?: twilio$RequestCallback): Q.Promise<any>;
    request(
      options: twilio$ClientRequestOptions,
      callback?: twilio$RequestCallback
    ): Q.Promise<any>;
  }

  declare export interface twilio$Policy {
    url: string;
    method: string;
    query_filter?: any;
    post_filter?: any;
    allow: boolean;
  }

  declare export class twilio$TaskRouterCapability {
    accountSid: string;
    authToken: string;
    policies: Array<twilio$Policy>;
    workspaceSid: string;
    channelId: string;
    constructor(
      accountSid: string,
      authToken: string,
      workspaceSid: string,
      channelId: string
    ): this;
    _setupResource(): void;
    allowFetchSubresources(): void;
    allowUpdates(): void;
    allowUpdatesSubresources(): void;
    allowDelete(): void;
    allowDeleteSubresources(): void;
    allowWorkerActivityUpdates(): void;
    allowWorkerFetchAttributes(): void;
    allowTaskReservationUpdates(): void;
    addPolicy(
      url: string,
      method: string,
      allowed?: boolean,
      queryFilter?: any,
      postFilter?: any
    ): void;
    allow(
      url: string,
      method: string,
      queryFilter?: any,
      postFilter?: any
    ): void;
    deny(
      url: string,
      method: string,
      queryFilter?: any,
      postFilter?: any
    ): void;
    generate(ttl: number): string;
  }

  declare export class twilio$TaskRouterClient mixins Client {
    workspaces: twilio$WorkspaceResource;
    workspace: twilio$WorkspaceResource;
    constructor(
      sid?: string,
      tkn?: string,
      workspaceSid?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export class twilio$TaskRouterTaskQueueCapability
    mixins TaskRouterCapability {
    constructor(
      accountSid: string,
      authToken: string,
      workspaceSid: string,
      taskQueueSid: string
    ): this;
    _setupResource(): void;
  }

  declare export class twilio$TaskRouterWorkerCapability
    mixins TaskRouterCapability {
    reservationsUrl: string;
    activityUrl: string;
    workerReservationsUrl: string;
    constructor(
      accountSid: string,
      authToken: string,
      workspaceSid: string,
      workerSid: string
    ): this;
    _setupResource(): void;
    allowActivityUpdates(): void;
    allowReservationUpdates(): void;
  }

  declare export class twilio$TaskRouterWorkspaceCapability
    mixins TaskRouterCapability {
    constructor(
      accountSid: string,
      authToken: string,
      workspaceSid: string
    ): this;
    _setupResource(): void;
  }

  declare export class twilio$TrunkingClient mixins Client {
    trunks: twilio$TrunkResource;
    constructor(
      sid?: string,
      tkn?: string,
      options?: twilio$ClientOptions
    ): this;
  }

  declare export interface twilio$NodeOptions {
    name: string;
    attributes?: any;
    text?: string;
    topLevel?: boolean;
    legalNodes: Array<string>;
  }

  declare export interface twilio$TwimlMethod {
    (): twilio$Node;
    (arg1: twilio$TwimlCallback | string, arg2?: any): twilio$Node;
    (arg1: any, arg2?: twilio$TwimlCallback | string): twilio$Node;
  }

  declare export interface twilio$TwimlCallback {
    (node: twilio$Node): void;
  }

  declare export class twilio$Node mixins NodeOptions {
    name: string;
    attributes: any;
    text: any;
    topLevel: boolean;
    legalNodes: Array<string>;
    constructor(config?: twilio$NodeOptions): this;
    gather: twilio$TwimlMethod;
    say: twilio$TwimlMethod;
    play: twilio$TwimlMethod;
    pause: twilio$TwimlMethod;
    dial: twilio$TwimlMethod;
    number: twilio$TwimlMethod;
    client: twilio$TwimlMethod;
    conference: twilio$TwimlMethod;
    queue: twilio$TwimlMethod;
    sip: twilio$TwimlMethod;
    message: twilio$TwimlMethod;
    media: twilio$TwimlMethod;
    body: twilio$TwimlMethod;
    enqueue: twilio$TwimlMethod;
    task: twilio$TwimlMethod;
    record: twilio$TwimlMethod;
    sms: twilio$TwimlMethod;
    hangup: twilio$TwimlMethod;
    redirect: twilio$TwimlMethod;
    reject: twilio$TwimlMethod;
    leave: twilio$TwimlMethod;
    toString(): string;
  }

  declare export class twilio$TwimlResponse mixins Node {}

  declare export interface twilio$WebhookOptions {
    validate?: boolean;
    includeHelpers?: boolean;
    host?: string;
    protocol?: string;
  }

  declare export interface twilio$WebhookExpressOptions {
    url?: string;
    host?: string;
    protocol?: string;
  }

  declare export interface twilio$MiddlewareFunction {
    (
      request: Http.IncomingMessage,
      response: Http.ServerResponse,
      next: Express.NextFunction
    ): void;
  }

  declare export function twilio$webhook(
    authToken: string,
    options?: twilio$WebhookOptions
  ): twilio$MiddlewareFunction;

  declare export function twilio$webhook(
    options?: twilio$WebhookOptions
  ): twilio$MiddlewareFunction;

  declare export function twilio$validateRequest(
    authToken: string,
    twilioHeader: string,
    url: string,
    params?: any
  ): boolean;

  declare export function twilio$validateExpressRequest(
    request: Express.Request,
    authToken: string,
    options?: twilio$WebhookExpressOptions
  ): boolean;

  declare export type twilio$OutgoingCallerIdInstance = {
    put: twilio$RestMethod
  } & InstanceResource;

  declare export type twilio$OutgoingCallerIdResource = {} & CreatableMappedResource<twilio$OutgoingCallerIdInstance>;

  declare export type twilio$SMSMessageInstance = {} & Resource;

  declare export type twilio$SMSMessageResource = {} & CreatableMappedResource<twilio$SMSMessageInstance>;

  declare export type twilio$SMSShortCodeInstance = {
    update: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$SMSShortCodeResource = {} & MappedResource<twilio$SMSShortCodeInstance>;

  declare export interface twilio$SMSIntermediary {
    messages: twilio$SMSMessageResource;
    shortCodes: twilio$SMSShortCodeResource;
  }

  declare export type twilio$ApplicationInstance = {} & InstanceResource;

  declare export type twilio$ApplicationResource = {} & CreatableMappedResource<twilio$ApplicationInstance>;

  declare export type twilio$ConnectAppInstance = {
    update: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$ConnectAppResource = {} & MappedResource<twilio$ConnectAppInstance>;

  declare export type twilio$AuthorizedConnectAppInstance = {} & Resource;

  declare export type twilio$AuthorizedConnectAppResource = {} & MappedResource<twilio$AuthorizedConnectAppInstance>;

  declare export interface twilio$TokenInstance {}

  declare export type twilio$TokenResource = {
    post: twilio$RestMethod,
    create: twilio$RestMethod
  } & BaseMappedResource<twilio$TokenInstance>;

  declare export type twilio$TranscriptionInstance = {} & DeletableResource;

  declare export type twilio$TranscriptionResource = {} & MappedResource<twilio$TranscriptionInstance>;

  declare export type twilio$NotificationInstance = {} & DeletableResource;

  declare export type twilio$NotificationResource = {} & MappedResource<twilio$NotificationInstance>;

  declare export type twilio$UsageTriggerInstance = {} & InstanceResource;

  declare export type twilio$UsageTriggerResource = {} & CreatableMappedResource<twilio$UsageTriggerInstance>;

  declare export interface twilio$UsageIntermediary {
    records: twilio$UsageRecordResource;
    triggers: twilio$UsageTriggerResource;
  }

  declare export interface twilio$SIPIntermediary {
    domains: twilio$DomainResource;
    ipAccessControlLists: twilio$IPAccessControlListResource;
    credentialLists: twilio$CredentialListResource;
  }

  declare export type twilio$KeyInstance = {} & InstanceResource;

  declare export type twilio$KeyResource = {} & CreatableMappedResource<twilio$KeyInstance>;

  declare export type twilio$AccountInstance = {
    update: twilio$RestMethod,
    put: twilio$RestMethod,
    availablePhoneNumbers: twilio$AvailablePhoneNumberResource,
    outgoingCallerIds: twilio$OutgoingCallerIdResource,
    incomingPhoneNumbers: twilio$IncomingPhoneNumberResource,
    messages: twilio$MessageResource,
    sms: twilio$SMSIntermediary,
    applications: twilio$ApplicationResource,
    connectApps: twilio$ConnectAppResource,
    authorizedConnectApps: twilio$AuthorizedConnectAppResource,
    calls: twilio$CallResource,
    conferences: twilio$ConferenceResource,
    queues: twilio$QueueResource,
    recordings: twilio$RecordingResource,
    tokens: twilio$TokenResource,
    transcriptions: twilio$TranscriptionResource,
    notifications: twilio$NotificationResource,
    usage: twilio$UsageIntermediary,
    sip: twilio$SIPIntermediary,
    addresses: twilio$AddressResource,
    keys: twilio$KeyResource
  } & PostableResource;

  declare export type twilio$AccountResource = {} & AccountInstance &
    ListMappedResource<twilio$AccountInstance>;

  declare export type twilio$DependentPhoneNumberResource = {} & ListableResource;

  declare export type twilio$AddressInstance = {
    dependentPhoneNumbers: twilio$DependentPhoneNumberResource
  } & PostableResource &
    DeletableResource;

  declare export type twilio$AddressResource = {} & ListMappedResource<twilio$AddressInstance>;

  declare export type twilio$AvailablePhoneNumberResourceGroup = {
    search: twilio$RestMethod
  } & ListableResource;

  declare export interface twilio$AvailablePhoneNumberInstance {
    local: twilio$AvailablePhoneNumberResourceGroup;
    tollFree: twilio$AvailablePhoneNumberResourceGroup;
    mobile: twilio$AvailablePhoneNumberResourceGroup;
  }

  declare export type twilio$AvailablePhoneNumberResource = {} & BaseMappedResource<twilio$AvailablePhoneNumberInstance>;

  declare export type twilio$CallRecordingResource = {} & ListableResource;

  declare export type twilio$CallNotificationResource = {} & ListableResource;

  declare export type twilio$CallFeedbackResource = {
    create: twilio$RestMethod
  } & PostableResource &
    DeletableResource;

  declare export type twilio$CallInstance = {
    recordings: twilio$CallRecordingResource,
    notifications: twilio$CallNotificationResource,
    feedback: twilio$CallFeedbackResource
  } & InstanceResource;

  declare export type twilio$CallFeedbackSummaryInstance = {} & DeletableResource;

  declare export type twilio$CallFeedbackSummaryResource = {
    post: twilio$RestMethod,
    create: twilio$RestMethod
  } & BaseMappedResource<twilio$CallFeedbackSummaryInstance>;

  declare export type twilio$CallResource = {
    feedbackSummary: twilio$CallFeedbackSummaryResource
  } & CreatableMappedResource<twilio$CallInstance> &
    ListableResource;

  declare export type twilio$ConferenceParticipantInstance = {
    kick: twilio$RestMethod
  } & InstanceResource;

  declare export type twilio$ConferenceParticipantResource = {} & MappedResource<twilio$ConferenceParticipantInstance> &
    ListableResource;

  declare export type twilio$ConferenceInstance = {
    participants: twilio$ConferenceParticipantResource
  } & Resource;

  declare export type twilio$ConferenceResource = {} & MappedResource<twilio$ConferenceInstance> &
    ListableResource;

  declare export type twilio$IncomingPhoneNumberResourceGroup = {
    create: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$IncomingPhoneNumberInstance = {
    put: twilio$RestMethod
  } & InstanceResource;

  declare export type twilio$IncomingPhoneNumberResource = {
    local: twilio$IncomingPhoneNumberResourceGroup,
    tollFree: twilio$IncomingPhoneNumberResourceGroup,
    mobile: twilio$IncomingPhoneNumberResourceGroup
  } & CreatableMappedResource<twilio$IncomingPhoneNumberInstance>;

  declare export type twilio$MessageMediaInstance = {} & DeletableResource;

  declare export type twilio$MessageMediaResource = {} & MappedResource<twilio$MessageMediaInstance> &
    ListableResource;

  declare export type twilio$MessageInstance = {
    media: twilio$MessageMediaResource
  } & PostableResource &
    DeletableResource;

  declare export type twilio$MessageResource = {} & ListMappedResource<twilio$MessageInstance>;

  declare export type twilio$QueueMemberInstance = {
    update: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$QueueMemberResource = {
    front: twilio$QueueMemberInstance
  } & MappedResource<twilio$QueueMemberInstance>;

  declare export type twilio$QueueInstance = {
    members: twilio$QueueMemberResource
  } & InstanceResource;

  declare export type twilio$QueueResource = {} & CreatableMappedResource<twilio$QueueInstance>;

  declare export type twilio$RecordingTranscriptionResource = {} & ListableResource;

  declare export type twilio$RecordingInstance = {
    transcriptions: twilio$RecordingTranscriptionResource
  } & ListableResource &
    DeletableResource;

  declare export type twilio$RecordingResource = {} & MappedResource<twilio$RecordingInstance> &
    ListableResource;

  declare export type twilio$UsageRecordInstance = {} & Resource;

  declare export type twilio$UsageRecordRange = {} & ListableResource;

  declare export type twilio$UsageRecordResource = {
    daily: twilio$UsageRecordRange,
    monthly: twilio$UsageRecordRange,
    yearly: twilio$UsageRecordRange,
    allTime: twilio$UsageRecordRange,
    today: twilio$UsageRecordRange,
    yesterday: twilio$UsageRecordRange,
    thisMonth: twilio$UsageRecordRange,
    lastMonth: twilio$UsageRecordRange
  } & MappedResource<twilio$UsageRecordInstance>;

  declare export type twilio$CredentialInstance = {} & InstanceResource;

  declare export type twilio$CredentialResource = {} & ListMappedResource<twilio$CredentialInstance>;

  declare export type twilio$ServiceUserInstance = {} & InstanceResource;

  declare export type twilio$ServiceUserResource = {} & ListMappedResource<twilio$ServiceUserInstance>;

  declare export type twilio$ServiceRoleInstance = {} & Resource;

  declare export type twilio$ServiceRoleResource = {} & MappedResource<twilio$ServiceRoleInstance> &
    ListableResource;

  declare export type twilio$ServiceChannelMessageInstance = {} & InstanceResource;

  declare export type twilio$ServiceChannelMessageResource = {} & ListMappedResource<twilio$ServiceChannelMessageInstance>;

  declare export type twilio$ServiceChannelMemberInstance = {} & InstanceResource;

  declare export type twilio$ServiceChannelMemberResource = {} & ListMappedResource<twilio$ServiceChannelMemberInstance>;

  declare export type twilio$ServiceChannelInstance = {
    messages: twilio$ServiceChannelMessageResource,
    members: twilio$ServiceChannelMemberResource
  } & InstanceResource;

  declare export type twilio$ServiceChannelResource = {} & ListMappedResource<twilio$ServiceChannelInstance>;

  declare export type twilio$ServiceInstance = {
    users: twilio$ServiceUserResource,
    roles: twilio$ServiceRoleResource,
    channels: twilio$ServiceChannelResource
  } & InstanceResource;

  declare export type twilio$ServiceResource = {} & ListMappedResource<twilio$ServiceInstance>;

  declare export type twilio$PhoneNumberInstance = {} & Resource;

  declare export type twilio$PhoneNumberResource = {} & BaseMappedResource<twilio$PhoneNumberInstance>;

  declare export type twilio$AlertInstance = {} & Resource;

  declare export type twilio$AlertResource = {} & MappedResource<twilio$AlertInstance> &
    ListableResource;

  declare export type twilio$EventInstance = {} & Resource;

  declare export type twilio$EventResource = {} & MappedResource<twilio$EventInstance> &
    ListableResource;

  declare export type twilio$CountryInstance = {} & Resource;

  declare export type twilio$CountryResource = {} & MappedResource<twilio$CountryInstance> &
    ListableResource;

  declare export interface twilio$PricingMessagingResource {
    countries: twilio$CountryResource;
  }

  declare export interface twilio$PricingPhoneNumberResource {
    countries: twilio$CountryResource;
  }

  declare export type twilio$NumberInstance = {} & Resource;

  declare export type twilio$NumberResource = {} & MappedResource<twilio$NumberInstance> &
    ListableResource;

  declare export interface twilio$PricingVoiceResource {
    countries: twilio$CountryResource;
    numbers: twilio$NumberResource;
  }

  declare export type twilio$CredentialListInstance = {
    credentials: twilio$CredentialResource
  } & InstanceResource;

  declare export type twilio$CredentialListResource = {} & ListMappedResource<twilio$CredentialListInstance>;

  declare export type twilio$IPAccessControlListMappingInstance = {} & DeletableResource;

  declare export type twilio$IPAccessControlListMappingResource = {} & ListMappedResource<twilio$IPAccessControlListMappingInstance>;

  declare export type twilio$CredentialListMappingInstance = {} & DeletableResource;

  declare export type twilio$CredentialListMappingResource = {} & ListMappedResource<twilio$CredentialListMappingInstance>;

  declare export type twilio$DomainInstance = {
    ipAccessControlListMappings: twilio$IPAccessControlListMappingResource,
    credentialListMappings: twilio$CredentialListMappingResource
  } & InstanceResource;

  declare export type twilio$DomainResource = {} & ListMappedResource<twilio$DomainInstance>;

  declare export type twilio$IPAddressInstance = {} & InstanceResource;

  declare export type twilio$IPAddressResource = {} & ListMappedResource<twilio$IPAddressInstance>;

  declare export type twilio$IPAccessControlListInstance = {
    ipAddresses: twilio$IPAddressResource
  } & InstanceResource;

  declare export type twilio$IPAccessControlListResource = {} & ListMappedResource<twilio$IPAccessControlListInstance>;

  declare export interface twilio$WorkflowRuleTargetOptions {
    queue: string;
    expression?: string;
    priority?: number;
    timeout?: number;
  }

  declare export class twilio$WorkflowRuleTarget {
    queue: string;
    expression: string;
    priority: number;
    timeout: number;
    constructor(options?: twilio$WorkflowRuleTargetOptions): this;
  }

  declare export interface twilio$WorkflowRuleOptions {
    expression: string;
    targets: Array<twilio$WorkflowRuleTargetOptions>;
    friendly_name?: string;
    friendlyName?: string;
    filter_friendly_name?: string;
  }

  declare export class twilio$WorkflowRule {
    friendly_name: string;
    expression: string;
    targets: Array<twilio$WorkflowRuleTarget>;
    friendlyName: string;
    constructor(options?: twilio$WorkflowRuleOptions): this;
  }

  declare export interface twilio$TaskRoutingConfigurationOptions {
    filters: Array<twilio$WorkflowRuleOptions>;
    default_filter?: twilio$WorkflowRuleOptions;
    defaultFilter?: twilio$WorkflowRuleOptions;
  }

  declare export class twilio$TaskRoutingConfiguration {
    filters: Array<twilio$WorkflowRule>;
    default_filter: twilio$WorkflowRuleOptions;
    defaultFilter: twilio$WorkflowRuleOptions;
    constructor(options?: twilio$TaskRoutingConfigurationOptions): this;
  }

  declare export interface twilio$WorkflowConfigurationOptions {
    task_routing?: twilio$TaskRoutingConfigurationOptions;
    taskRouting?: twilio$TaskRoutingConfigurationOptions;
  }

  declare export class twilio$WorkflowConfiguration {
    task_routing: twilio$TaskRoutingConfiguration;
    taskRouting: twilio$TaskRoutingConfiguration;
    constructor(options?: twilio$WorkflowConfigurationOptions): this;
    static fromJSON(json: string): twilio$WorkflowConfiguration;
    toJSON(): string;
  }

  declare export type twilio$WorkspaceActivityInstance = {} & InstanceResource;

  declare export type twilio$WorkspaceActivityResource = {} & ListMappedResource<twilio$WorkspaceActivityInstance>;

  declare export type twilio$WorkspaceEventInstance = {} & Resource;

  declare export type twilio$WorkspaceEventResource = {} & MappedResource<twilio$WorkspaceEventInstance> &
    ListableResource;

  declare export type twilio$WorkspaceTaskReservationInstance = {
    update: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$WorkspaceTaskReservationResource = {} & MappedResource<twilio$WorkspaceTaskReservationInstance> &
    ListableResource;

  declare export type twilio$WorkspaceTaskInstance = {
    reservations: twilio$WorkspaceTaskReservationResource
  } & InstanceResource;

  declare export type twilio$WorkspaceTaskResource = {} & ListMappedResource<twilio$WorkspaceTaskInstance>;

  declare export type twilio$WorkspaceInstanceStatisticResource = {} & Resource;

  declare export type twilio$WorkspaceStatisticResource = {} & ListableResource;

  declare export type twilio$WorkspaceTaskQueueInstance = {
    statistics: twilio$WorkspaceInstanceStatisticResource
  } & InstanceResource;

  declare export type twilio$WorkspaceTaskQueueResource = {
    statistics: twilio$WorkspaceStatisticResource
  } & ListMappedResource<twilio$WorkspaceTaskQueueInstance>;

  declare export type twilio$WorkspaceWorkerReservationInstance = {
    update: twilio$RestMethod
  } & PostableResource;

  declare export type twilio$WorkspaceWorkerReservationResource = {} & MappedResource<twilio$WorkspaceWorkerReservationInstance> &
    ListableResource;

  declare export type twilio$WorkspaceWorkerInstance = {
    statistics: twilio$WorkspaceInstanceStatisticResource,
    reservations: twilio$WorkspaceWorkerReservationResource
  } & InstanceResource;

  declare export type twilio$WorkspaceWorkerResource = {
    statistics: twilio$WorkspaceStatisticResource
  } & ListMappedResource<twilio$WorkspaceWorkerInstance>;

  declare export type twilio$WorkspaceWorkflowInstance = {
    statistics: twilio$WorkspaceInstanceStatisticResource
  } & InstanceResource;

  declare export type twilio$WorkspaceWorkflowResource = {
    statistics: twilio$WorkspaceStatisticResource
  } & ListMappedResource<twilio$WorkspaceWorkflowInstance>;

  declare export type twilio$WorkspaceInstance = {
    activities: twilio$WorkspaceActivityResource,
    events: twilio$WorkspaceEventResource,
    tasks: twilio$WorkspaceTaskResource,
    taskQueues: twilio$WorkspaceTaskQueueResource,
    workers: twilio$WorkspaceWorkerResource,
    workflows: twilio$WorkspaceWorkflowResource,
    statistics: twilio$WorkspaceInstanceStatisticResource
  } & InstanceResource;

  declare export type twilio$WorkspaceResource = {} & CreatableMappedResource<twilio$WorkspaceInstance>;

  declare export type twilio$OriginationURLInstance = {} & InstanceResource;

  declare export type twilio$OriginationURLResource = {} & ListMappedResource<twilio$OriginationURLInstance>;

  declare export type twilio$TrunkInstance = {
    ipAccessControlLists: twilio$IPAccessControlListResource,
    credentialLists: twilio$CredentialListResource,
    phoneNumbers: twilio$PhoneNumberResource,
    originationUrls: twilio$OriginationURLResource
  } & InstanceResource;

  declare export type twilio$TrunkResource = {} & ListMappedResource<twilio$TrunkInstance>;

  declare export default typeof twilio;
}
