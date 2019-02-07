declare module "cfn-response" {
  import type { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

  declare export type ResponseStatus = "SUCCESS" | "FAILED";
  declare export var SUCCESS: ResponseStatus;
  declare export var FAILED: ResponseStatus;
  declare export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: ResponseStatus,
    responseData?: { [key: string]: any },
    physicalResourceId?: string
  ): void;
}
