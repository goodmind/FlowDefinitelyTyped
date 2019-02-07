declare module "aws-lambda" {
  declare export interface APIGatewayEventRequestContext {
    accountId: string;
    apiId: string;
    authorizer?: AuthResponseContext | null;
    httpMethod: string;
    identity: {
      accessKey: string | null,
      accountId: string | null,
      apiKey: string | null,
      apiKeyId: string | null,
      caller: string | null,
      cognitoAuthenticationProvider: string | null,
      cognitoAuthenticationType: string | null,
      cognitoIdentityId: string | null,
      cognitoIdentityPoolId: string | null,
      sourceIp: string,
      user: string | null,
      userAgent: string | null,
      userArn: string | null
    };
    path: string;
    stage: string;
    requestId: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
  }
  declare export interface APIGatewayProxyEvent {
    body: string | null;
    headers: {
      [name: string]: string
    };
    multiValueHeaders: {
      [name: string]: string[]
    };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: {
      [name: string]: string
    } | null;
    queryStringParameters: {
      [name: string]: string
    } | null;
    multiValueQueryStringParameters: {
      [name: string]: string[]
    } | null;
    stageVariables: {
      [name: string]: string
    } | null;
    requestContext: APIGatewayEventRequestContext;
    resource: string;
  }
  declare export type APIGatewayEvent = APIGatewayProxyEvent;
  declare export interface CustomAuthorizerEvent {
    type: string;
    methodArn: string;
    authorizationToken?: string;
    resource?: string;
    path?: string;
    httpMethod?: string;
    headers?: {
      [name: string]: string
    };
    multiValueHeaders?: {
      [name: string]: string[]
    };
    pathParameters?: {
      [name: string]: string
    } | null;
    queryStringParameters?: {
      [name: string]: string
    } | null;
    multiValueQueryStringParameters?: {
      [name: string]: string[]
    } | null;
    stageVariables?: {
      [name: string]: string
    };
    requestContext?: APIGatewayEventRequestContext;
    domainName?: string;
    apiId?: string;
  }
  declare export interface AttributeValue {
    B?: string;
    BS?: string[];
    BOOL?: boolean;
    L?: AttributeValue[];
    M?: {
      [id: string]: AttributeValue
    };
    N?: string;
    NS?: string[];
    NULL?: boolean;
    S?: string;
    SS?: string[];
  }
  declare export interface StreamRecord {
    ApproximateCreationDateTime?: number;
    Keys?: {
      [key: string]: AttributeValue
    };
    NewImage?: {
      [key: string]: AttributeValue
    };
    OldImage?: {
      [key: string]: AttributeValue
    };
    SequenceNumber?: string;
    SizeBytes?: number;
    StreamViewType?:
      | "KEYS_ONLY"
      | "NEW_IMAGE"
      | "OLD_IMAGE"
      | "NEW_AND_OLD_IMAGES";
  }
  declare export interface DynamoDBRecord {
    awsRegion?: string;
    dynamodb?: StreamRecord;
    eventID?: string;
    eventName?: "INSERT" | "MODIFY" | "REMOVE";
    eventSource?: string;
    eventSourceARN?: string;
    eventVersion?: string;
    userIdentity?: any;
  }
  declare export interface DynamoDBStreamEvent {
    Records: DynamoDBRecord[];
  }
  declare export interface SNSMessageAttribute {
    Type: string;
    Value: string;
  }
  declare export interface SNSMessageAttributes {
    [name: string]: SNSMessageAttribute;
  }
  declare export interface SNSMessage {
    SignatureVersion: string;
    Timestamp: string;
    Signature: string;
    SigningCertUrl: string;
    MessageId: string;
    Message: string;
    MessageAttributes: SNSMessageAttributes;
    Type: string;
    UnsubscribeUrl: string;
    TopicArn: string;
    Subject: string;
  }
  declare export interface SNSEventRecord {
    EventVersion: string;
    EventSubscriptionArn: string;
    EventSource: string;
    Sns: SNSMessage;
  }
  declare export interface SNSEvent {
    Records: SNSEventRecord[];
  }

  /**
   * S3Create event
   * https://docs.aws.amazon.com/AmazonS3/latest/dev/notification-content-structure.html
   */
  declare export interface S3EventRecord {
    eventVersion: string;
    eventSource: string;
    awsRegion: string;
    eventTime: string;
    eventName: string;
    userIdentity: {
      principalId: string
    };
    requestParameters: {
      sourceIPAddress: string
    };
    responseElements: {
      "x-amz-request-id": string,
      "x-amz-id-2": string
    };
    s3: {
      s3SchemaVersion: string,
      configurationId: string,
      bucket: {
        name: string,
        ownerIdentity: {
          principalId: string
        },
        arn: string
      },
      object: {
        key: string,
        size: number,
        eTag: string,
        versionId: string,
        sequencer: string
      }
    };
  }
  declare export interface S3Event {
    Records: S3EventRecord[];
  }
  declare export type S3CreateEvent = S3Event;

  /**
   * Cognito User Pool event
   * http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
   */
  declare export interface CognitoUserPoolTriggerEvent {
    version: number;
    triggerSource:
      | "PreSignUp_SignUp"
      | "PostConfirmation_ConfirmSignUp"
      | "PreAuthentication_Authentication"
      | "PostAuthentication_Authentication"
      | "CustomMessage_SignUp"
      | "CustomMessage_AdminCreateUser"
      | "CustomMessage_ResendCode"
      | "CustomMessage_ForgotPassword"
      | "CustomMessage_UpdateUserAttribute"
      | "CustomMessage_VerifyUserAttribute"
      | "CustomMessage_Authentication"
      | "DefineAuthChallenge_Authentication"
      | "CreateAuthChallenge_Authentication"
      | "VerifyAuthChallengeResponse_Authentication"
      | "PreSignUp_AdminCreateUser"
      | "PostConfirmation_ConfirmForgotPassword"
      | "TokenGeneration_HostedAuth"
      | "TokenGeneration_Authentication"
      | "TokenGeneration_NewPasswordChallenge"
      | "TokenGeneration_AuthenticateDevice"
      | "TokenGeneration_RefreshTokens"
      | "UserMigration_Authentication"
      | "UserMigration_ForgotPassword";
    region: string;
    userPoolId: string;
    userName?: string;
    callerContext: {
      awsSdkVersion: string,
      clientId: string
    };
    request: {
      userAttributes: {
        [key: string]: string
      },
      validationData?: {
        [key: string]: string
      },
      codeParameter?: string,
      usernameParameter?: string,
      newDeviceUsed?: boolean,
      session?: Array<{
        challengeName:
          | "CUSTOM_CHALLENGE"
          | "PASSWORD_VERIFIER"
          | "SMS_MFA"
          | "DEVICE_SRP_AUTH"
          | "DEVICE_PASSWORD_VERIFIER"
          | "ADMIN_NO_SRP_AUTH",
        challengeResult: boolean,
        challengeMetadata?: string
      }>,
      challengeName?: string,
      privateChallengeParameters?: {
        [key: string]: string
      },
      challengeAnswer?: string,
      password?: string
    };
    response: {
      autoConfirmUser?: boolean,
      smsMessage?: string,
      emailMessage?: string,
      emailSubject?: string,
      challengeName?: string,
      issueTokens?: boolean,
      failAuthentication?: boolean,
      publicChallengeParameters?: {
        [key: string]: string
      },
      privateChallengeParameters?: {
        [key: string]: string
      },
      challengeMetadata?: string,
      answerCorrect?: boolean,
      userAttributes?: {
        [key: string]: string
      },
      finalUserStatus?: "CONFIRMED" | "RESET_REQUIRED",
      messageAction?: "SUPPRESS",
      desiredDeliveryMediums?: Array<"EMAIL" | "SMS">,
      forceAliasCreation?: boolean
    };
  }
  declare export type CognitoUserPoolEvent = CognitoUserPoolTriggerEvent;

  /**
   * CloudFormation Custom Resource event and response
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref.html
   */
  declare export interface CloudFormationCustomResourceEventCommon {
    ServiceToken: string;
    ResponseURL: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    ResourceType: string;
    ResourceProperties: {
      ServiceToken: string,
      [Key: string]: any
    };
  }
  declare export type CloudFormationCustomResourceCreateEvent = {
    RequestType: "Create"
  } & CloudFormationCustomResourceEventCommon;

  declare export type CloudFormationCustomResourceUpdateEvent = {
    RequestType: "Update",
    PhysicalResourceId: string,
    OldResourceProperties: {
      [Key: string]: any
    }
  } & CloudFormationCustomResourceEventCommon;

  declare export type CloudFormationCustomResourceDeleteEvent = {
    RequestType: "Delete",
    PhysicalResourceId: string
  } & CloudFormationCustomResourceEventCommon;

  declare export type CloudFormationCustomResourceEvent =
    | CloudFormationCustomResourceCreateEvent
    | CloudFormationCustomResourceUpdateEvent
    | CloudFormationCustomResourceDeleteEvent;
  declare export interface CloudFormationCustomResourceResponseCommon {
    PhysicalResourceId: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    Data?: {
      [Key: string]: any
    };
  }
  declare export type CloudFormationCustomResourceSuccessResponse = {
    Status: "SUCCESS",
    Reason?: string
  } & CloudFormationCustomResourceResponseCommon;

  declare export type CloudFormationCustomResourceFailedResponse = {
    Status: "FAILED",
    Reason: string
  } & CloudFormationCustomResourceResponseCommon;

  declare export type CloudFormationCustomResourceResponse =
    | CloudFormationCustomResourceSuccessResponse
    | CloudFormationCustomResourceFailedResponse;

  /**
   * See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-scheduled-event
   */
  declare export interface ScheduledEvent {
    account: string;
    region: string;
    detail: any;
    "detail-type": string;
    source: string;
    time: string;
    id: string;
    resources: string[];
  }

  /**
   * See http://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-cloudwatch-logs
   */
  declare export interface CloudWatchLogsEvent {
    awslogs: CloudWatchLogsEventData;
  }
  declare export interface CloudWatchLogsEventData {
    data: string;
  }
  declare export interface CloudWatchLogsDecodedData {
    owner: string;
    logGroup: string;
    logStream: string;
    subscriptionFilters: string[];
    messageType: string;
    logEvents: CloudWatchLogsLogEvent[];
  }

  /**
   * See http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample
   */
  declare export interface CloudWatchLogsLogEvent {
    id: string;
    timestamp: number;
    message: string;
    extractedFields?: {
      [key: string]: string
    };
  }
  declare export interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: number;
    awsRequestId: string;
    logGroupName: string;
    logStreamName: string;
    identity?: CognitoIdentity;
    clientContext?: ClientContext;
    getRemainingTimeInMillis(): number;
    done(error?: Error, result?: any): void;
    fail(error: Error | string): void;
    succeed(messageOrObject: any): void;
    succeed(message: string, object: any): void;
  }
  declare export interface CognitoIdentity {
    cognitoIdentityId: string;
    cognitoIdentityPoolId: string;
  }
  declare export interface ClientContext {
    client: ClientContextClient;
    custom?: any;
    env: ClientContextEnv;
  }
  declare export interface ClientContextClient {
    installationId: string;
    appTitle: string;
    appVersionName: string;
    appVersionCode: string;
    appPackageName: string;
  }
  declare export interface ClientContextEnv {
    platformVersion: string;
    platform: string;
    make: string;
    model: string;
    locale: string;
  }
  declare export interface APIGatewayProxyResult {
    statusCode: number;
    headers?: {
      [header: string]: boolean | number | string
    };
    multiValueHeaders?: {
      [header: string]: Array<boolean | number | string>
    };
    body: string;
    isBase64Encoded?: boolean;
  }
  declare export type ProxyResult = APIGatewayProxyResult;

  /**
   * API Gateway CustomAuthorizer AuthResponse.
   * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
   */
  declare export interface CustomAuthorizerResult {
    principalId: string;
    policyDocument: PolicyDocument;
    context?: AuthResponseContext;
    usageIdentifierKey?: string;
  }
  declare export type AuthResponse = CustomAuthorizerResult;

  /**
   * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-lambda-authorizer-output.html
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
   */
  declare export interface PolicyDocument {
    Version: string;
    Id?: string;
    Statement: Statement[];
  }

  /**
   * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Condition.
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html
   */
  declare export interface ConditionBlock {
    [condition: string]: Condition | Condition[];
  }
  declare export interface Condition {
    [key: string]: string | string[];
  }

  /**
   * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-policy-language-overview.html
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html
   */
  declare export type Statement = BaseStatement &
    StatementAction &
    (StatementResource | StatementPrincipal);
  declare export interface BaseStatement {
    Effect: string;
    Sid?: string;
    Condition?: ConditionBlock;
  }
  declare export type PrincipalValue =
    | {
        [key: string]: string | string[]
      }
    | string
    | string[];
  declare export interface MaybeStatementPrincipal {
    Principal?: PrincipalValue;
    NotPrincipal?: PrincipalValue;
  }
  declare export interface MaybeStatementResource {
    Resource?: string | string[];
    NotResource?: string | string[];
  }
  declare export type StatementAction =
    | {
        Action: string | string[]
      }
    | {
        NotAction: string | string[]
      };
  declare export type StatementResource = MaybeStatementPrincipal &
    (
      | {
          Resource: string | string[]
        }
      | {
          NotResource: string | string[]
        }
    );
  declare export type StatementPrincipal = MaybeStatementResource &
    (
      | {
          Principal: PrincipalValue
        }
      | {
          NotPrincipal: PrincipalValue
        }
    );

  /**
   * API Gateway CustomAuthorizer AuthResponse.PolicyDocument.Statement.
   * http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html#api-gateway-custom-authorizer-output
   */
  declare export interface AuthResponseContext {
    [name: string]: any;
  }

  /**
   * CodePipeline events
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html
   */
  declare export interface S3ArtifactLocation {
    bucketName: string;
    objectKey: string;
  }
  declare export interface S3ArtifactStore {
    type: "S3";
    s3Location: S3ArtifactLocation;
  }
  declare export type ArtifactLocation = S3ArtifactStore;
  declare export interface Artifact {
    name: string;
    revision: string | null;
    location: ArtifactLocation;
  }
  declare export interface Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
  }
  declare export interface EncryptionKey {
    type: string;
    id: string;
  }
  declare export interface CodePipelineEvent {
    "CodePipeline.job": {
      id: string,
      accountId: string,
      data: {
        actionConfiguration: {
          configuration: {
            FunctionName: string,
            UserParameters: string
          }
        },
        inputArtifacts: Artifact[],
        outputArtifacts: Artifact[],
        artifactCredentials: Credentials,
        encryptionKey?: EncryptionKey & {
          type: "KMS"
        },
        continuationToken?: string
      }
    };
  }

  /**
   * CodePipeline CloudWatch Events
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
   *
   * The above CodePipelineEvent is when a lambda is invoked by a CodePipeline.
   * These events are when you subsribe to CodePipeline events in CloudWatch.
   *
   * Their documentation says that detail.version is a string, but it is actually an integer
   */
  declare export type CodePipelineState =
    | "STARTED"
    | "SUCCEEDED"
    | "RESUMED"
    | "FAILED"
    | "CANCELED"
    | "SUPERSEDED";
  declare export type CodePipelineStageState =
    | "STARTED"
    | "SUCCEEDED"
    | "RESUMED"
    | "FAILED"
    | "CANCELED";
  declare export type CodePipelineActionState =
    | "STARTED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELED";
  declare export interface CodePipelineCloudWatchPipelineEvent {
    version: string;
    id: string;
    "detail-type": "CodePipeline Pipeline Execution State Change";
    source: "aws.codepipeline";
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
      pipeline: string,
      version: number,
      state: CodePipelineState,
      "execution-id": string
    };
  }
  declare export interface CodePipelineCloudWatchStageEvent {
    version: string;
    id: string;
    "detail-type": "CodePipeline Stage Execution State Change";
    source: "aws.codepipeline";
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
      pipeline: string,
      version: number,
      "execution-id": string,
      stage: string,
      state: CodePipelineStageState
    };
  }
  declare export type CodePipelineActionCategory =
    | "Approval"
    | "Build"
    | "Deploy"
    | "Invoke"
    | "Source"
    | "Test";
  declare export interface CodePipelineCloudWatchActionEvent {
    version: string;
    id: string;
    "detail-type": "CodePipeline Action Execution State Change";
    source: "aws.codepipeline";
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
      pipeline: string,
      version: number,
      "execution-id": string,
      stage: string,
      action: string,
      state: CodePipelineActionState,
      type: {
        owner: "AWS" | "Custom" | "ThirdParty",
        category: CodePipelineActionCategory,
        provider: string,
        version: number
      }
    };
  }
  declare export type CodePipelineCloudWatchEvent =
    | CodePipelineCloudWatchPipelineEvent
    | CodePipelineCloudWatchStageEvent
    | CodePipelineCloudWatchActionEvent;

  /**
   * CloudFront events
   * http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html
   * Bear in mind that the "example" event structure in the page above includes
   * both an S3 and a Custom origin, which is not strictly allowed. Only one
   * of these per event may be present.
   */
  declare export interface CloudFrontHeaders {
    [name: string]: Array<{
      key: string,
      value: string
    }>;
  }
  declare export type CloudFrontOrigin =
    | {
        s3: CloudFrontS3Origin,
        custom?: empty
      }
    | {
        custom: CloudFrontCustomOrigin,
        s3?: empty
      };
  declare export interface CloudFrontCustomOrigin {
    customHeaders: CloudFrontHeaders;
    domainName: string;
    keepaliveTimeout: number;
    path: string;
    port: number;
    protocol: "http" | "https";
    readTimeout: number;
    sslProtocols: string[];
  }
  declare export interface CloudFrontS3Origin {
    authMethod: "origin-access-identity" | "none";
    customHeaders: CloudFrontHeaders;
    domainName: string;
    path: string;
    region: string;
  }
  declare export interface CloudFrontResponse {
    status: string;
    statusDescription: string;
    headers: CloudFrontHeaders;
  }
  declare export interface CloudFrontRequest {
    clientIp: string;
    method: string;
    uri: string;
    querystring: string;
    headers: CloudFrontHeaders;
    origin?: CloudFrontOrigin;
  }
  declare export interface CloudFrontEvent {
    config: {
      distributionDomainName: string,
      distributionId: string,
      eventType:
        | "origin-request"
        | "origin-response"
        | "viewer-request"
        | "viewer-response",
      requestId: string
    };
  }
  declare export interface CloudFrontResultResponse {
    status: string;
    statusDescription?: string;
    headers?: CloudFrontHeaders;
    bodyEncoding?: "text" | "base64";
    body?: string;
  }
  declare export interface CloudFrontResponseEvent {
    Records: Array<{
      cf: CloudFrontEvent & {
        request: CloudFrontRequest,
        response: CloudFrontResponse
      }
    }>;
  }
  declare export type CloudFrontRequestResult =
    | void
    | null
    | CloudFrontResultResponse
    | CloudFrontRequest;
  declare export interface CloudFrontRequestEvent {
    Records: Array<{
      cf: CloudFrontEvent & {
        request: CloudFrontRequest
      }
    }>;
  }
  declare export type CloudFrontResponseResult = void | null | CloudFrontResultResponse;
  declare export interface KinesisStreamRecordPayload {
    approximateArrivalTimestamp: number;
    data: string;
    kinesisSchemaVersion: string;
    partitionKey: string;
    sequenceNumber: string;
  }
  declare export interface KinesisStreamRecord {
    awsRegion: string;
    eventID: string;
    eventName: string;
    eventSource: string;
    eventSourceARN: string;
    eventVersion: string;
    invokeIdentityArn: string;
    kinesis: KinesisStreamRecordPayload;
  }
  declare export interface KinesisStreamEvent {
    Records: KinesisStreamRecord[];
  }
  declare export interface FirehoseTransformationEvent {
    invocationId: string;
    deliveryStreamArn: string;
    region: string;
    records: FirehoseTransformationEventRecord[];
  }
  declare export interface FirehoseTransformationEventRecord {
    recordId: string;
    approximateArrivalTimestamp: number;

    /**
     * Base64 encoded
     */
    data: string;
    kinesisRecordMetadata?: FirehoseRecordMetadata;
  }
  declare export interface FirehoseRecordMetadata {
    shardId: string;
    partitionKey: string;
    approximateArrivalTimestamp: string;
    sequenceNumber: string;
    subsequenceNumber: string;
  }
  declare export type FirehoseRecordTransformationStatus =
    | "Ok"
    | "Dropped"
    | "ProcessingFailed";
  declare export interface FirehoseTransformationResultRecord {
    recordId: string;
    result: FirehoseRecordTransformationStatus;

    /**
     * Encode in Base64
     */
    data: string;
  }
  declare export interface FirehoseTransformationResult {
    records: FirehoseTransformationResultRecord[];
  }
  declare export interface SQSRecord {
    messageId: string;
    receiptHandle: string;
    body: string;
    attributes: SQSRecordAttributes;
    messageAttributes: SQSMessageAttributes;
    md5OfBody: string;
    eventSource: string;
    eventSourceARN: string;
    awsRegion: string;
  }
  declare export interface SQSEvent {
    Records: SQSRecord[];
  }
  declare export interface SQSRecordAttributes {
    ApproximateReceiveCount: string;
    SentTimestamp: string;
    SenderId: string;
    ApproximateFirstReceiveTimestamp: string;
  }
  declare export interface SQSMessageAttribute {
    Name: string;
    Type: string;
    Value: string;
  }
  declare export interface SQSMessageAttributes {
    [name: string]: SQSMessageAttribute;
  }
  declare export interface LexEvent {
    currentIntent: {
      name: string,
      slots: {
        [name: string]: string | null
      },
      slotDetails: LexSlotDetails,
      confirmationStatus: "None" | "Confirmed" | "Denied"
    };
    bot: {
      name: string,
      alias: string,
      version: string
    };
    userId: string;
    inputTranscript: string;
    invocationSource: "DialogCodeHook" | "FulfillmentCodeHook";
    outputDialogMode: "Text" | "Voice";
    messageVersion: "1.0";
    sessionAttributes: {
      [key: string]: string
    };
    requestAttributes: {
      [key: string]: string
    } | null;
  }
  declare export interface LexSlotResolution {
    value: string;
  }
  declare export interface LexSlotDetails {
    [name: string]: {
      resolutions: LexSlotResolution[],
      originalValue: string
    };
  }
  declare export interface LexGenericAttachment {
    title: string;
    subTitle: string;
    imageUrl: string;
    attachmentLinkUrl: string;
    buttons: Array<{
      text: string,
      value: string
    }>;
  }
  declare export interface LexDialogActionBase {
    type: "Close" | "ElicitIntent" | "ElicitSlot" | "ConfirmIntent";
    message?: {
      contentType: "PlainText" | "SSML" | "CustomPayload",
      content: string
    };
    responseCard?: {
      version: number,
      contentType: "application/vnd.amazonaws.card.generic",
      genericAttachments: LexGenericAttachment[]
    };
  }
  declare export type LexDialogActionClose = {
    type: "Close",
    fulfillmentState: "Fulfilled" | "Failed"
  } & LexDialogActionBase;

  declare export type LexDialogActionElicitIntent = {
    type: "ElicitIntent"
  } & LexDialogActionBase;

  declare export type LexDialogActionElicitSlot = {
    type: "ElicitSlot",
    intentName: string,
    slots: {
      [name: string]: string | null
    },
    slotToElicit: string
  } & LexDialogActionBase;

  declare export type LexDialogActionConfirmIntent = {
    type: "ConfirmIntent",
    intentName: string,
    slots: {
      [name: string]: string | null
    }
  } & LexDialogActionBase;

  declare export interface LexDialogActionDelegate {
    type: "Delegate";
    slots: {
      [name: string]: string | null
    };
  }
  declare export type LexDialogAction =
    | LexDialogActionClose
    | LexDialogActionElicitIntent
    | LexDialogActionElicitSlot
    | LexDialogActionConfirmIntent
    | LexDialogActionDelegate;
  declare export interface LexResult {
    sessionAttributes?: {
      [key: string]: string
    };
    dialogAction: LexDialogAction;
  }

  /**
   * AWS Lambda handler function.
   * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
   * @param event – event data.
   * @param context – runtime information of the Lambda function that is executing.
   * @param callback – optional callback to return information to the caller, otherwise return value is null.
   * @return In the node8.10 runtime, a promise for the lambda result.
   */
  declare export type Handler<TEvent = any, TResult = any> = (
    event: TEvent,
    context: Context,
    callback: Callback<TResult>
  ) => void | Promise<TResult>;

  /**
 * Optional callback parameter.
 * http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 * @param error – an optional parameter that you can use to provide results of the failed Lambda function execution.
   It can be a string for Lambda Proxy Integrations
   https://docs.aws.amazon.com/apigateway/latest/developerguide/handle-errors-in-lambda-integration.html
 * @param result – an optional parameter that you can use to provide the result of a successful function execution. The result provided must be JSON.stringify compatible.
 */
  declare export type Callback<TResult = any> = (
    error?: Error | null | string,
    result?: TResult
  ) => void;
  declare export type S3Handler = Handler<S3Event, void>;
  declare export type DynamoDBStreamHandler = Handler<
    DynamoDBStreamEvent,
    void
  >;
  declare export type SNSHandler = Handler<SNSEvent, void>;
  declare export type CognitoUserPoolTriggerHandler = Handler<CognitoUserPoolTriggerEvent>;
  declare export type SQSHandler = Handler<SQSEvent, void>;
  declare export type CloudFormationCustomResourceHandler = Handler<
    CloudFormationCustomResourceEvent,
    void
  >;
  declare export type CloudWatchLogsHandler = Handler<
    CloudWatchLogsEvent,
    void
  >;
  declare export type ScheduledHandler = Handler<ScheduledEvent, void>;
  declare export type LexHandler = Handler<LexEvent, LexResult>;
  declare export type LexCallback = Callback<LexResult>;
  declare export type APIGatewayProxyHandler = Handler<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  >;
  declare export type APIGatewayProxyCallback = Callback<APIGatewayProxyResult>;
  declare export type ProxyHandler = APIGatewayProxyHandler;
  declare export type ProxyCallback = APIGatewayProxyCallback;
  declare export type CodePipelineHandler = Handler<CodePipelineEvent, void>;
  declare export type CodePipelineCloudWatchHandler = Handler<
    CodePipelineCloudWatchEvent,
    void
  >;
  declare export type CodePipelineCloudWatchPipelineHandler = Handler<
    CodePipelineCloudWatchPipelineEvent,
    void
  >;
  declare export type CodePipelineCloudWatchStageHandler = Handler<
    CodePipelineCloudWatchStageEvent,
    void
  >;
  declare export type CodePipelineCloudWatchActionHandler = Handler<
    CodePipelineCloudWatchActionEvent,
    void
  >;
  declare export type CloudFrontRequestHandler = Handler<
    CloudFrontRequestEvent,
    CloudFrontRequestResult
  >;
  declare export type CloudFrontRequestCallback = Callback<CloudFrontRequestResult>;
  declare export type CloudFrontResponseHandler = Handler<
    CloudFrontResponseEvent,
    CloudFrontResponseResult
  >;
  declare export type CloudFrontResponseCallback = Callback<CloudFrontResponseResult>;
  declare export type KinesisStreamHandler = Handler<KinesisStreamEvent, void>;
  declare export type FirehoseTransformationCallback = Callback<FirehoseTransformationResult>;
  declare export type FirehoseTransformationHandler = Handler<
    FirehoseTransformationEvent,
    FirehoseTransformationResult
  >;
  declare export type CustomAuthorizerHandler = Handler<
    CustomAuthorizerEvent,
    CustomAuthorizerResult
  >;
  declare export type CustomAuthorizerCallback = Callback<CustomAuthorizerResult>;
}
