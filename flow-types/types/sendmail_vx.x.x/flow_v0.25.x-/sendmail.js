declare module "sendmail" {
  declare interface sendMailFactory$Options {
    logger?: {
      debug?: () => void,
      info?: () => void,
      warn?: () => void,
      error?: () => void
    };
    silent?: boolean;

    /**
     * Default: False
     */
    dkim?:
      | boolean
      | {
          privateKey: string,
          keySelector: string
        };

    /**
     * Default: False
     */
    devPort?: number | boolean;

    /**
     * Default: localhost
     */
    devHost?: string;

    /**
     * Default: 25
     */
    smtpPort?: number;

    /**
     * Default: -1 - extra smtp host after resolveMX
     */
    smtpHost?: string | number;
  }

  declare interface sendMailFactory$MailInput {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    returnTo?: string;
    subject: string;
    type?: string;
    charset?: string;
    encoding?: string;
    id?: string;
    headers?: { [key: string]: any };
    content?: string;
    html?: string;
    attachments?: Array<{
      type: string,
      filename: string,
      content: any
    }>;
  }
  declare type CallbackFn = (err: Error, domain: string) => void;
  declare type SendMailFn = (
    mail: sendMailFactory$MailInput,
    callback: CallbackFn
  ) => void;
  declare function sendMailFactory(
    options: sendMailFactory$Options
  ): SendMailFn;

  declare export default typeof sendMailFactory;
}
