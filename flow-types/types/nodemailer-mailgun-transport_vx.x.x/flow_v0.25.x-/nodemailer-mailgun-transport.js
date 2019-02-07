declare module "nodemailer-mailgun-transport" {
  import typeof * as nodemailer from "nodemailer";

  declare interface mailgunTransport$AuthOptions {
    api_key: string;
    domain?: string;
  }

  declare interface mailgunTransport$Options {
    auth: mailgunTransport$AuthOptions;
  }

  declare type mailgunTransport$MailOptions = Mail.mailgunTransport$Options;

  declare type mailgunTransport$Information = { [key: string]: any };

  declare class mailgunTransport$MailgunTransport mixins nodemailer.Transport {
    name: string;
    version: string;
    send(
      mail: MailMessage,
      callback: (err: Error | null, info?: mailgunTransport$Information) => void
    ): void;
  }
  declare function mailgunTransport(
    options: mailgunTransport$mailgunTransport$Options
  ): mailgunTransport$mailgunTransport$MailgunTransport;

  declare module.exports: typeof mailgunTransport;
}
