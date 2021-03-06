declare module "nodemailer-smtp-pool" {
  declare export interface smtpPool$AuthOptions {
    user?: string;
    pass?: string;
    xoauth2?: any;
  }

  declare export interface smtpPool$SmtpPoolOptions {
    /**
     * is the port to connect to (defaults to 25 or 465)
     */
    port?: number;

    /**
     * is the hostname or IP address to connect to (defaults to 'localhost')
     */
    host?: string;

    /**
     * defines if the connection should use SSL (if true) or not (if false)
     */
    secure?: boolean;

    /**
     * defines authentication data (see authentication section below)
     */
    auth?: smtpPool$AuthOptions;

    /**
     * turns off STARTTLS support if true
     */
    ignoreTLS?: boolean;

    /**
     * optional hostname of the client, used for identifying to the server
     */
    name?: string;

    /**
     * is the local interface to bind to for network connections
     */
    localAddress?: string;

    /**
     * how many milliseconds to wait for the connection to establish
     */
    connectionTimeout?: number;

    /**
     * how many milliseconds to wait for the greeting after connection is established
     */
    greetingTimeout?: number;

    /**
     * how many milliseconds of inactivity to allow
     */
    socketTimeout?: number;

    /**
     * if true, the connection emits all traffic between client and server as 'log' events
     */
    debug?: boolean;

    /**
     * defines preferred authentication method, eg. 'PLAIN'
     */
    authMethod?: string;

    /**
     * defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true}
     */
    tls?: tls.ConnectionOptions;

    /**
     * (defaults to 5) is the count of maximum simultaneous connections to make against the SMTP server
     */
    maxConnections?: number;

    /**
     * (defaults to 100) limits the message count to be sent using a single connection. After maxMessages messages the connection is dropped and a new one is created for the following messages
     */
    maxMessages?: number;
  }
  declare function smtpPool(
    options: smtpPool$smtpPool$SmtpPoolOptions
  ): nodemailer.Transport;

  declare module.exports: typeof smtpPool;
}
