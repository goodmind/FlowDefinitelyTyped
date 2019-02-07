declare module "analytics-node" {
  declare module.exports: typeof AnalyticsNode$AnalyticsNode$Analytics;

  declare interface AnalyticsNode$Message {
    type: string;
    context: {
      library: {
        name: string,
        version: string
      },
      [key: string]: any
    };
    _metadata: {
      nodeVersion: string,
      [key: string]: any
    };
    timestamp?: Date;
    messageId?: string;
    anonymousId?: string | number;
    userId?: string | number;
  }

  declare interface AnalyticsNode$Data {
    batch: AnalyticsNode$Message[];
    timestamp: Date;
    sentAt: Date;
  }

  declare interface AnalyticsNode$Integrations {
    [integration_name: string]: AnalyticsNode$IntegrationValue;
  }

  declare type AnalyticsNode$IntegrationValue =
    | boolean
    | {
        [integration_key: string]: any
      };

  declare class AnalyticsNode$Analytics {
    constructor(
      writeKey: string,
      opts?: {
        flushAt?: number,
        flushInterval?: number,
        host?: string,
        enable?: boolean
      }
    ): this;
    identify(
      message: {
        userId?: string | number,
        anonymousId?: string | number,
        traits?: any,
        timestamp?: Date,
        context?: any,
        integrations?: AnalyticsNode$Integrations
      },
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
    track(
      message: {
        userId?: string | number,
        anonymousId?: string | number,
        event: string,
        properties?: any,
        timestamp?: Date,
        context?: any,
        integrations?: AnalyticsNode$Integrations
      },
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
    page(
      message: {
        userId?: string | number,
        anonymousId?: string | number,
        category?: string,
        name?: string,
        properties?: any,
        timestamp?: Date,
        context?: any,
        integrations?: AnalyticsNode$Integrations
      },
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
    alias(
      message: {
        previousId: string | number,
        userId?: string | number,
        anonymousId?: string | number,
        integrations?: AnalyticsNode$Integrations
      },
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
    group(
      message: {
        userId?: string | number,
        anonymousId?: string | number,
        groupId: string | number,
        traits?: any,
        context?: any,
        timestamp?: Date,
        integrations?: AnalyticsNode$Integrations
      },
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
    flush(
      callback?: (err: Error, data: AnalyticsNode$Data) => void
    ): AnalyticsNode$Analytics;
  }
}
