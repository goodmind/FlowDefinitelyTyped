declare module "email-templates" {
  declare interface EmailConfig {
    /**
     * The message <Nodemailer.com/message/>
     */
    message: any;

    /**
     * The nodemailer Transport created via nodemailer.createTransport
     */
    transport?: any;

    /**
     * The email template directory and engine information
     */
    views?: any;

    /**
     * Do you really want to send, false for test or development
     */
    EmailTemplate$send?: boolean;

    /**
     * Preview the email
     */
    preview?: boolean;

    /**
     * Set to object to configure and Enable <https://github.com/ladjs/il8n>
     */
    i18n?: any;

    /**
     * Pass a custom render function if necessary
     */
    EmailTemplate$render?: {
      view: string,
      locals: any
    };

    /**
     * force text-only rendering of template (disregards template folder)
     */
    textOnly?: boolean;

    /**
     * <Https://github.com/werk85/node-html-to-text>
     */
    htmlToText?: any;

    /**
     * You can pass an option to prefix subject lines with a string
     * env === 'production' ? false : `[${env.toUpperCase()}] `; // <--- HERE
     */
    subjectPrefix?: any;

    /**
     * <https://github.com/Automattic/juice>
     */
    juice?: boolean;

    /**
     * <https://github.com/Automattic/juice>
     */
    EmailTemplate$juiceResources?: any;
  }
  declare interface EmailOptions {
    /**
     * The template name
     */
    template: string;

    /**
     * Nodemailer Message <Nodemailer.com/message/>
     */
    message: any;

    /**
     * The Template Variables
     */
    locals: any;
  }
  declare class EmailTemplate {
    constructor(config: EmailConfig): this;

    /**
     * shorthand use of `juiceResources` with the config
     * mainly for custom renders like from a database).
     */
    juiceResources(html: string): Promise<string>;

    /**
     * @param view The Html pug to render
     * @param locals The template Variables
     */
    render(view: string, locals: any): Promise<string>;

    /**
     * Send the Email
     */
    send(options: EmailOptions): any;
  }

  declare var npm$namespace$EmailTemplate: {
    juiceResources: typeof EmailTemplate$juiceResources,
    render: typeof EmailTemplate$render,
    send: typeof EmailTemplate$send
  };

  /**
   * shorthand use of `juiceResources` with the config
   * mainly for custom renders like from a database).
   */
  declare function EmailTemplate$juiceResources(html: string): Promise<string>;

  /**
   * @param view The Html pug to render
   * @param locals The template Variables
   */
  declare function EmailTemplate$render(
    view: string,
    locals: any
  ): Promise<string>;

  /**
   * Send the Email
   */
  declare function EmailTemplate$send(options: EmailOptions): any;

  declare module.exports: typeof EmailTemplate;
}
