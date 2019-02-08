declare module "winston" {
  declare interface Transports {
    Mail: winstonMail.Mail;
  }
}
declare module "winston-mail" {
  import typeof * as winston from "winston";

  declare export class Mail
    mixins winston.Transport, winston.TransportInstance {
    constructor(options: MailTransportOptions): this;
    name: string;
    to: string;
    from: string;
    level: string;
    unique: boolean;
    silent: boolean;
    filter: (obj: {
      level: string,
      message: string,
      meta: any
    }) => boolean;
    subject: string;
    html: boolean;
    log(level: any, msg: any, meta: any, callback: any): any;
  }
  declare export interface MailTransportOptions {
    name?: string;
    to: string;
    from?: string;
    level?: string;
    silent?: boolean;
    handleExceptions?: boolean;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    subject?: string;
    ssl?:
      | boolean
      | {
          key: string,
          ca: string,
          cert: string
        };
    tls?:
      | boolean
      | {
          ciphers: string
        };
    unique?: boolean;
    filter?: (obj: {
      level: string,
      message: string,
      meta: any
    }) => boolean;
    html?: boolean;
    timeout?: number;
    authentication?: string[];
    formatter?: (obj: {
      level: string,
      message: string,
      meta: any
    }) => string;
  }
}
