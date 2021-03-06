declare module "elasticsearch" {
  declare interface ConfigOptions {
    awsConfig?: AWS.Config;
  }
}
declare module "http-aws-es" {
  import typeof * as e from "elasticsearch";

  import typeof * as AWS from "aws-sdk";

  declare var HttpAmazonESConnector: any;
  declare module.exports: typeof HttpAmazonESConnector;
}
