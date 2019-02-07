declare module "mailgun-js" {
  declare var Mailgun$Mailgun: Mailgun$Mailgun.Mailgun$MailgunExport;
  declare module.exports: typeof Mailgun$Mailgun;

  declare interface Mailgun$ConstructorParams {
    apiKey: string;
    publicApiKey?: string;
    domain: string;
    mute?: boolean;
    timeout?: number;
    host?: string;
    endpoint?: string;
    protocol?: string;
    port?: number;
    retry?:
      | number
      | {
          times: number,
          interval: number
        };
    proxy?: string;
  }

  declare interface Mailgun$Error {
    statusCode: number;
    message: string;
  }

  declare interface Mailgun$AttachmentParams {
    data: string | Buffer | NodeJS.ReadWriteStream;
    filename?: string;
    knownLength?: number;
    contentType?: string;
  }

  declare interface Mailgun$Attachment {
    data: string | Buffer | NodeJS.ReadWriteStream;
    filename?: string;
    knownLength?: number;
    contentType?: string;
    getType(): string;
  }

  declare type Mailgun$AttachmentData =
    | string
    | Buffer
    | NodeJS.ReadWriteStream
    | Mailgun$Attachment;

  declare interface Mailgun$MailgunExport {
    new(options: Mailgun$ConstructorParams): Mailgun$Mailgun;
    (options: Mailgun$ConstructorParams): Mailgun$Mailgun;
  }

  declare interface messages$SendData {
    from?: string;
    to: string | string[];
    cc?: string;
    bcc?: string;
    subject?: string;
    text?: string;
    html?: string;
    attachment?:
      | Mailgun$AttachmentData
      | $ReadOnlyArray<Mailgun$AttachmentData>;
    inline?: Mailgun$AttachmentData | $ReadOnlyArray<Mailgun$AttachmentData>;
  }

  declare type messages$BatchData = {
    "recipient-variables"?: messages$BatchSendRecipientVars
  } & messages$SendData;

  declare interface messages$BatchSendRecipientVars {
    [email: string]: {
      first: string,
      id: number
    };
  }

  declare interface messages$SendResponse {
    message: string;
    id: string;
  }

  declare interface lists$MemberCreateData {
    subscribed: boolean;
    address: string;
    name: string;
    vars?: { [key: string]: any };
  }

  declare interface lists$MemberUpdateData {
    subscribed: boolean;
    name: string;
    vars?: { [key: string]: any };
  }

  declare interface lists$Members {
    create(
      data: lists$MemberCreateData,
      callback?: (err: Mailgun$Error, data: any) => void
    ): Promise<any>;
    add(
      data: lists$MemberCreateData[],
      callback?: (err: Mailgun$Error, data: any) => void
    ): Promise<any>;
    list(callback?: (err: Mailgun$Error, data: any) => void): Promise<any>;
  }

  declare interface lists$Member {
    update(
      data: lists$MemberUpdateData,
      callback?: (err: Mailgun$Error, data: any) => void
    ): Promise<any>;
  }

  declare interface validation$ParseResponse {
    parsed: string[];
    unparseable: string[];
  }

  declare type validation$ValidationCallback = (
    error: Mailgun$Error,
    body: validation$ValidateResponse
  ) => void;

  declare interface validation$ValidationOptionsPublic {
    api_key?: string;
    mailbox_verification?: boolean | "true" | "false";
  }

  declare interface validation$ValidationOptionsPrivate {
    mailbox_verification?: boolean | "true" | "false";
  }

  declare interface validation$ValidateResponse {
    address: string;
    did_you_mean: string | null;
    is_disposable_address: boolean;
    is_role_address: boolean;
    is_valid: boolean;
    mailbox_verification: "true" | "false" | "unknown" | null;
    parts: {
      display_name: string | null,
      domain: string,
      local_part: string
    };
  }

  declare interface Mailgun$Mailgun {
    messages(): Mailgun$Messages;
    lists(list: string): Mailgun$Lists;
    Mailgun$Attachment: (
      params: Mailgun$AttachmentParams
    ) => Mailgun$Attachment;
    validateWebhook(
      bodyTimestamp: number,
      bodyToken: string,
      bodySignature: string
    ): boolean;
    parse(
      addressList: string[],
      callback?: validation$validation$ValidationCallback
    ): Promise<validation$validation$ParseResponse>;
    validate(
      address: string,
      callback: validation$validation$ValidationCallback
    ): void;
    validate(
      address: string,
      opts: validation$validation$ValidationOptionsPublic,
      callback: validation$validation$ValidationCallback
    ): void;
    validate(
      address: string,
      isPrivate: boolean,
      callback: validation$validation$ValidationCallback
    ): void;
    validate(
      address: string,
      isPrivate: false,
      opts: validation$validation$ValidationOptionsPublic,
      callback: validation$validation$ValidationCallback
    ): void;
    validate(
      address: string,
      isPrivate: true,
      opts: validation$validation$ValidationOptionsPrivate,
      callback: validation$validation$ValidationCallback
    ): void;
    validate(
      address: string,
      opts?: validation$validation$ValidationOptionsPublic
    ): Promise<validation$validation$ValidateResponse>;
    validate(
      address: string,
      isPrivate: false,
      opts?: validation$validation$ValidationOptionsPublic
    ): Promise<validation$validation$ValidateResponse>;
    validate(
      address: string,
      isPrivate: true,
      opts?: validation$validation$ValidationOptionsPrivate
    ): Promise<validation$validation$ValidateResponse>;
  }

  declare interface Mailgun$Lists {
    info(callback?: (error: Mailgun$Error, data: any) => void): Promise<any>;
    members(): lists$lists$Members;
    members(member: string): lists$lists$Member;
  }

  declare interface Mailgun$Messages {
    send(
      data: messages$messages$SendData | messages$messages$BatchData,
      callback?: (
        error: Mailgun$Error,
        body: messages$messages$SendResponse
      ) => void
    ): Promise<messages$messages$SendResponse>;
  }
}
