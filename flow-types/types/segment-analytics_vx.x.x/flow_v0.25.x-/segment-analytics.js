declare module "segment-analytics" {
  declare interface JQuery {}
  declare interface SegmentAnalytics$SegmentOpts {
    integrations?: any;
    anonymousId?: string;
    context?: { [key: string]: any };
  }

  declare interface SegmentAnalytics$AnalyticsJS {
    load(writeKey: string): void;
    identify(
      userId: string,
      traits?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    identify(userId: string, traits: Object, callback?: () => void): void;
    identify(userId: string, callback?: () => void): void;
    identify(
      traits?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    identify(traits?: Object, callback?: () => void): void;
    identify(callback: () => void): void;
    track(
      event: string,
      properties?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    track(event: string, properties?: Object, callback?: () => void): void;
    track(event: string, callback?: () => void): void;
    page(
      category?: string,
      name?: string,
      properties?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    page(
      name?: string,
      properties?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    page(name?: string, properties?: Object, callback?: () => void): void;
    page(name?: string, callback?: () => void): void;
    page(
      properties?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    page(callback?: () => void): void;
    group(
      groupId: string,
      traits?: Object,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    group(groupId: string, traits?: Object, callback?: () => void): void;
    group(groupId: string, callback?: () => void): void;
    alias(
      userId: string,
      previousId?: string,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    alias(userId: string, previousId?: string, callback?: () => void): void;
    alias(userId: string, callback?: () => void): void;
    alias(
      userId: string,
      options?: SegmentAnalytics$SegmentOpts,
      callback?: () => void
    ): void;
    trackLink(
      elements: JQuery | Element[] | Element,
      event:
        | string
        | {
            (elm: Element): string
          },
      properties?:
        | Object
        | {
            (elm: Element): Object
          }
    ): void;
    trackForm(
      elements: JQuery | Element[] | Element,
      event:
        | string
        | {
            (elm: Element): string
          },
      properties?:
        | Object
        | {
            (elm: Element): Object
          }
    ): void;
    ready(callback: () => void): void;
    reset(): void;
    user(): {
      id(): string,
      logout(): void,
      reset(): void,
      anonymousId(newId?: string): string,
      traits(newTraits?: Object): void
    };
    group(): {
      id(): string,
      traits(newTraits?: Object): void
    };
    debug(state?: boolean): void;
    on(
      event: string,
      callback: {
        (
          event: string,
          properties: Object,
          options: SegmentAnalytics$SegmentOpts
        ): void
      }
    ): void;
    timeout(milliseconds: number): void;
  }
  declare var analytics: SegmentAnalytics$SegmentAnalytics$AnalyticsJS;
}
