declare module "aws-lambda-mock-context" {
  declare function context(options?: Options): Context;

  declare module.exports: typeof context;

  declare interface Context {
    Promise: Promise<any>;
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: string;
    awsRequestId: string;
    invokeid: string;
    logGroupName: string;
    logStreamName: string;
    getRemainingTimeInMillis: number;
    succeed(result: any): Promise<any>;
    fail(err: any): Promise<any>;
    done(err: any, result: any): Promise<any>;
  }
  declare interface Options {
    region?: string;
    account?: string;
    functionName?: string;
    functionVersion?: string;
    memoryLimitInMB?: string;
    alias?: string;
  }
}
