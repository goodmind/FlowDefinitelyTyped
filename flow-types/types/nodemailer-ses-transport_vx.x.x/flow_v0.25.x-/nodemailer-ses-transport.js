declare module "nodemailer-ses-transport" {
  import typeof * as AWS from "aws-sdk";

  import typeof * as nodemailer from "nodemailer";

  declare interface sesTransport$SesOptions {
    SES: AWS.SES;
    component?: string;
    maxConnections?: number;
    sendingRate?: number;
  }
  declare function sesTransport(
    options: sesTransport$sesTransport$SesOptions
  ): nodemailer.Transport;

  declare module.exports: typeof sesTransport;
}
