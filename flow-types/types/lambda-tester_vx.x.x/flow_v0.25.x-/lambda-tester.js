declare module "lambda-tester" {
  import type {
    Context,
    ClientContext,
    CognitoIdentity,
    Handler
  } from "aws-lambda";

  declare type lambdaTester$Verifier = (result: any) => void;

  declare class lambdaTester$LambdaTester {
    event(event: any): this;
    context(context: Context): this;
    clientContext(clientContext: ClientContext): this;
    identity(cognitoIdentityId: string, cognitoIdentityPoolId: string): this;
    timeout(seconds: number): this;
    xray(): this;
    expectSucceed(verifier: lambdaTester$Verifier): Promise<any>;
    expectFail(verifier: lambdaTester$Verifier): Promise<any>;
    expectError(verifier: lambdaTester$Verifier): Promise<any>;
    expectResult(verifier: lambdaTester$Verifier): Promise<any>;
    expectReject(verifier: lambdaTester$Verifier): Promise<any>;
    expectResolve(verifier: lambdaTester$Verifier): Promise<any>;
  }
  declare function lambdaTester(
    handler: Handler
  ): lambdaTester$lambdaTester$LambdaTester;

  declare module.exports: typeof lambdaTester;
}
