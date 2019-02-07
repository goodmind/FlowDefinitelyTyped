declare module "cordova-universal-links-plugin" {
  declare var npm$namespace$universalLinks: {
    subscribe: typeof universalLinks$subscribe,
    unsubscribe: typeof universalLinks$unsubscribe
  };
  declare function universalLinks$subscribe(
    eventName: string | null,
    callback: (data: universalLinks$EventData) => void
  ): void;

  declare function universalLinks$unsubscribe(eventName: string | null): void;

  declare interface universalLinks$EventData {
    url: string;
    scheme: string;
    host: string;
    path: string;
    params: {
      [key: string]: string
    };
    hash: string;
  }
}
