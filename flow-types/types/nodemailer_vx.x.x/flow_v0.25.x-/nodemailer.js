declare module "nodemailer" {
  declare export type SendMailOptions = Mail.Options;
  declare export type SentMessageInfo = any;
  declare export type Transporter = Mail;
  declare export interface Transport {
    mailer?: Mail;
    name: string;
    version: string;
    send(
      mail: MailMessage,
      callback: (err: Error | null, info: SentMessageInfo) => void
    ): void;
    verify?: (callback: (err: Error | null, success: true) => void) => void;
    verify?: () => Promise<true>;
    close?: () => void;
  }
  declare export interface TransportOptions {
    component?: string;
  }
  declare export interface TestAccount {
    user: string;
    pass: string;
    smtp: {
      host: string,
      port: number,
      secure: boolean
    };
    imap: {
      host: string,
      port: number,
      secure: boolean
    };
    pop3: {
      host: string,
      port: number,
      secure: boolean
    };
    web: string;
  }
  declare export function createTransport(
    transport?: SMTPTransport | SMTPTransport.Options | string,
    defaults?: SMTPTransport.Options
  ): Mail;

  declare export function createTransport(
    transport: SMTPPool | SMTPPool.Options,
    defaults?: SMTPPool.Options
  ): Mail;

  declare export function createTransport(
    transport: SendmailTransport | SendmailTransport.Options,
    defaults?: SendmailTransport.Options
  ): Mail;

  declare export function createTransport(
    transport: StreamTransport | StreamTransport.Options,
    defaults?: StreamTransport.Options
  ): Mail;

  declare export function createTransport(
    transport: JSONTransport | JSONTransport.Options,
    defaults?: JSONTransport.Options
  ): Mail;

  declare export function createTransport(
    transport: SESTransport | SESTransport.Options,
    defaults?: SESTransport.Options
  ): Mail;

  declare export function createTransport(
    transport: Transport | TransportOptions,
    defaults?: TransportOptions
  ): Mail;

  declare export function createTestAccount(
    apiUrl: string,
    callback: (err: Error | null, testAccount: TestAccount) => void
  ): void;

  declare export function createTestAccount(
    callback: (err: Error | null, testAccount: TestAccount) => void
  ): void;

  declare export function createTestAccount(
    apiUrl?: string
  ): Promise<TestAccount>;

  declare export function getTestMessageUrl(
    info: SESTransport.SentMessageInfo | SMTPTransport.SentMessageInfo
  ): string | false;
}
