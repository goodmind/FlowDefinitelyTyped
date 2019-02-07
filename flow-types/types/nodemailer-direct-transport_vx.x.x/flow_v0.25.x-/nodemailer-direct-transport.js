declare module "nodemailer-direct-transport" {
  import typeof * as nodemailer from "nodemailer";

  declare export interface directTransport$AuthOptions {
    user?: string;
    pass?: string;
    xoauth2?: any;
  }

  declare export interface directTransport$DirectOptions {
    /**
     * optional hostname of the client, used for identifying to the server
     */
    name?: string;

    /**
     * if true, the connection emits all traffic between client and server as 'log' events
     */
    debug?: boolean;
  }
  declare function directTransport(
    options: directTransport$directTransport$DirectOptions
  ): nodemailer.Transport;

  declare module.exports: typeof directTransport;
}
