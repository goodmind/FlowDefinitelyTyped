declare module "pendo-io-browser" {
  declare interface pendo$Identity {
    visitor: pendo$Visitor;
    account?: pendo$Account;
  }

  declare type pendo$Metadata = Record<string, string | number | void>;

  declare type pendo$Visitor = {
    id: string
  } & pendo$Metadata;

  declare type pendo$Account = {
    id?: string
  } & pendo$Metadata;

  declare type pendo$InitOptions = {
    apiKey?: string,
    excludeAllText?: boolean,
    excludeTitle?: boolean,
    disablePersistence?: boolean,
    guides?: {
      delay?: boolean,
      disable?: boolean,
      timeout?: number,
      tooltip?: {
        arrowSize?: number
      }
    },
    events?: pendo$EventCallbacks
  } & pendo$Identity;

  declare interface pendo$EventCallbacks {
    ready?: () => void;
    guidesLoaded?: () => void;
    guidesFailed?: () => void;
  }

  declare interface pendo$Pendo {
    initialize(options: pendo$InitOptions): void;
    identify(visitorId: string, accountId?: string): void;
    identify(identity: pendo$Identity): void;
    isReady(): boolean;
    flushNow(): Promise<any>;
    updateOptions(visitorMetadata: pendo$Metadata): void;
    getVersion(): string;
    getVisitorId(): string;
    getAccountId(): string;
    getCurrentUrl(): string;
    findGuideByName(name: string): pendo$Guide | void;
    findGuideById(id: string): pendo$Guide | void;
    showGuideByName(name: string): void;
    showGuideById(id: string): void;
    toggleLauncher(): void;
    removeLauncher(): void;
    loadGuides(): void;
    startGuides(): void;
    stopGuides(): void;
    enableDebugging(): void;
    disableDebugging(): void;
    isDebuggingEnabled(coerce?: false): "Yes" | "No";
    isDebuggingEnabled(coerce: true): boolean;
    debugging: pendo$Debugging;
    events: pendo$Events;
    track(trackType: string, metadata?: pendo$Metadata): void;
    onGuideAdvanced(step?: pendo$GuideStep): void;
    onGuideAdvanced(steps: {
      steps: number
    }): void;
    onGuidePrevious(step?: pendo$GuideStep): void;
    onGuideDismissed(step?: pendo$GuideStep): void;
    onGuideDismissed(until: {
      until: "reload"
    }): void;
    validateInstall(): void;
    dom(input: any): HTMLElement;
  }

  declare interface pendo$Debugging {
    getEventCache(): any[];
    getAllGuides(): pendo$Guide[];
    getAutoGuides(): {
      auto: pendo$Guide[],
      override: pendo$Guide[]
    };
    getBadgeGuides(): pendo$Guide[];
    getLauncherGuides(): pendo$Guide[];
  }

  declare type pendo$Events = $ObjMapi<
    pendo$EventCallbacks,
    <K>(K) => (callback: $ElementType<pendo$EventCallbacks, K>) => pendo$Events
  >;

  declare interface pendo$Guide {
    createdByUser: pendo$User;
    createdAt: number;
    lastUpdatedByUser: pendo$User;
    lastUpdatedAt: number;
    kind: string;
    rootVersionId: string;
    stableVersionId: string;
    id: string;
    name: string;
    state: "published" | "staged" | "draft" | "disabled";
    launchMethod: "api" | "automatic" | "badge" | "dom" | "launcher";
    isMultiStep: boolean;
    steps: pendo$GuideStep[];
    attributes: {
      type: string,
      device: {
        desktop: boolean,
        mobile: boolean,
        type: "desktop" | "mobile"
      },
      badge: any,
      priority: number,
      launcher: {
        keywords: string[]
      }
    };
    audience: any[];
    audienceUiHint: {
      filters: any[]
    };
    resetAt: number;
    publishedAt: number;
  }

  declare interface pendo$User {
    id: string;
    username: string;
    first: string;
    last: string;
    role: number;
    userType: string;
  }

  declare interface pendo$GuideStep {
    id: string;
    guideId: string;
    type: string;
    elementPathRule: string;
    contentType: string;
    contentUrl?: string;
    contentUrlCss?: string;
    contentUrlJs?: string;
    rank: number;
    advanceMethod: "button" | "programatic" | "element";
    thumbnailUrls?: string;
    attributes: {
      height: number,
      width: number,
      autoHeight: boolean,
      position: string,
      css: string,
      variables: any
    };
    lastUpdatedAt: number;
    resetAt: number;
  }
  declare var pendo: pendo$Pendo;
}
