declare module "node-mailjet" {
  declare export function connect(
    apiKey: string,
    apiSecret: string,
    options?: ConnectOptions
  ): Email$Client;

  declare export function connect(
    apiToken: string,
    options?: ConnectOptions
  ): SMS$Client;

  declare export interface ConnectOptions {
    +proxyUrl?: string;
    +timeout?: number;
    +url?: string;
    +version?: string;
    +perform_api_call?: boolean;
  }
  declare export interface ConfigOptions {
    +url?: string;
    +version?: string;
    +output?: string;
    +perform_api_call?: boolean;
    +secured?: boolean;
  }
  declare interface Email$Client {
    get(action: string): Email$GetResource;
    put(action: string): Email$PutResource;
    post(action: string, options?: ConfigOptions): Email$PostResource;
  }

  declare interface Email$PostResource {
    id(value: string): Email$PostResource;
    action(action: string): Email$PostResource;
    request(params: Email$SendParams): Promise<Email$PostResponse>;
    request(
      params: { [key: string]: any },
      callback?: (error: Error, res: Email$Response) => void
    ): Promise<Email$Response>;
  }

  declare interface Email$GetResource {
    id(value: string): Email$GetResource;
    action(action: string): Email$GetResource;
    request(
      params?: { [key: string]: any },
      callback?: (error: Error, res: Email$GetResponse) => void
    ): Promise<Email$GetResponse>;
  }

  declare interface Email$PutResource {
    id(value: string): Email$PutResource;
    request(
      params: { [key: string]: any },
      callback?: (error: Error, res: Email$PutResponse) => void
    ): Promise<Email$PutResponse>;
  }

  declare interface Email$Response {
    +body: { [key: string]: any };
  }

  declare interface Email$GetResponse {
    +body: Email$GetResponseData;
  }

  declare interface Email$PostResponse {
    +body: Email$PostResponseData;
  }

  declare interface Email$PutResponse {
    +body: Email$PutResponseData;
  }

  declare interface Email$SendParams {
    Messages: Email$SendParamsMessage[];
    SandboxMode?: boolean;
  }

  declare interface Email$SendParamsRecipient {
    Email: string;
    Name: string;
  }

  declare interface Email$SendParamsMessage {
    From: {
      Email: string,
      Name: string
    };
    To: Email$SendParamsRecipient[];
    Cc?: Email$SendParamsRecipient[];
    Bcc?: Email$SendParamsRecipient[];
    Variables?: { [key: string]: any };
    TemplateID?: number;
    TemplateLanguage?: boolean;
    Subject: string;
    TextPart?: string;
    HTMLPart?: string;
    MonitoringCategory?: string;
    URLTags?: string;
    CustomCampaign?: string;
    DeduplicateCampaign?: boolean;
    EventPayload?: string;
    CustomID?: string;
    Headers?: { [key: string]: any };
    Attachments?: [
      {
        ContentType: string,
        Filename: string,
        Base64Content: string
      }
    ];
    InlinedAttachments?: [
      {
        ContentType: string,
        Filename: string,
        ContentID: string,
        Base64Content: string
      }
    ];
  }

  declare interface Email$PostResponseDataMessage {
    +Status: string;
    +CustomID: string;
    +To: $ReadOnlyArray<Email$PostResponseDataTo>;
    +Cc: $ReadOnlyArray<Email$PostResponseDataTo>;
    +Bcc: $ReadOnlyArray<Email$PostResponseDataTo>;
  }

  declare interface Email$PostResponseDataTo {
    +Email: string;
    +MessageUUID: string;
    +MessageID: number;
    +MessageHref: string;
  }

  declare interface Email$GetResponseData {
    +Count: number;
    +Data: $ReadOnlyArray<{ [key: string]: any }>;
    +Total: number;
  }

  declare interface Email$PostResponseData {
    +Messages: $ReadOnlyArray<Email$PostResponseDataMessage>;
  }

  declare interface Email$PutResponseData {
    +Count: number;
    +Data: $ReadOnlyArray<{ [key: string]: any }>;
    +Total: number;
  }
  declare interface SMS$Client {
    get(action: string): SMS$GetResource;
    post(action: string): SMS$PostResource;
  }

  declare interface SMS$GetResource {
    id(value: string): SMS$GetResource;
    action(action: string): SMS$GetResourceAction;
    request(params?: SMS$GetParams): Promise<SMS$GetResponse>;
  }

  declare interface SMS$PostResource {
    action(action: string): SMS$PostResource;
    request(params: SMS$SendParams): Promise<SMS$SendResponse>;
    request(params?: SMS$ExportParams): Promise<SMS$ExportResponse>;
  }

  declare interface SMS$GetResourceAction {
    id(value: string): SMS$GetResourceActionId;
    request(params?: SMS$GetParams): Promise<SMS$GetResponseAction>;
  }

  declare interface SMS$GetResourceActionId {
    request(): Promise<SMS$ExportResponse>;
  }

  declare interface SMS$GetResponse {
    +body: SMS$GetResponseData;
  }

  declare interface SMS$SendResponse {
    +body: SMS$PostResponseData;
    +url: string;
  }

  declare interface SMS$ExportResponse {
    +body: SMS$ExportResponseData;
  }

  declare interface SMS$GetResponseAction {
    +body: SMS$GetResponseActionData;
  }

  declare interface SMS$GetParams {
    FromTS?: number;
    ToTS?: number;
    To?: string;
    StatusCode?: number[];
    Limit?: number;
    Offset?: number;
  }

  declare interface SMS$SendParams {
    Text: string;
    To: string;
    From: string;
  }

  declare interface SMS$ExportParams {
    FromTS: number;
    ToTS: number;
  }

  declare interface SMS$GetResponseDataData {
    +From: string;
    +To: string;
    +Status: SMS$ResponseStatus;
    +MessageId: string;
    +CreationTS: number;
    +SentTS: number;
    +SMSCount: number;
    +Cost: SMS$ResponseCost;
  }

  declare interface SMS$ResponseStatus {
    +Code: number;
    +Name: string;
    +Description: string;
  }

  declare interface SMS$ResponseCost {
    +Value: number;
    +Currency: string;
  }

  declare interface SMS$GetResponseData {
    +Data: $ReadOnlyArray<SMS$GetResponseDataData>;
  }

  declare interface SMS$PostResponseData {
    +From: string;
    +To: string;
    +Text: string;
    +MessageId: string;
    +SmsCount: number;
    +CreationTS: number;
    +SentTS: number;
    +Cost: SMS$ResponseCost;
    +Status: SMS$ResponseStatus;
  }

  declare interface SMS$ExportResponseData {
    +ID: number;
    +CreationTS?: number;
    +ExpirationTS?: number;
    +Status: SMS$ResponseStatus;
    +URL?: string;
    +FromTs?: number;
    +ToTs?: number;
  }

  declare interface SMS$GetResponseActionData {
    +Count: number;
  }
}
