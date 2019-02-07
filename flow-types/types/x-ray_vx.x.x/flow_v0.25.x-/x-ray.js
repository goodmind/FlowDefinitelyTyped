declare module "x-ray" {
  declare module.exports: typeof XRay;

  declare function XRay(options?: XRay$XRay$Options): XRay$XRay$Instance;

  declare type XRay$Filter = (value: any, ...args: string[]) => any;

  declare interface XRay$Options {
    filters: {
      [key: string]: XRay$Filter
    };
  }

  declare type XRay$Callback = (err: Error, data: any) => void;

  declare type XRay$ScalarSelector =
    | string
    | XRay$InstanceInvocation
    | {
        [key: string]: XRay$Selector
      };

  declare type XRay$SelectorArray = {
    [index: number]: XRay$ScalarSelector | XRay$SelectorArray
  } & Array<XRay$ScalarSelector | XRay$SelectorArray>;

  declare type XRay$Selector = XRay$ScalarSelector | XRay$SelectorArray;

  declare type XRay$Instance = {
    (source: string, selector: XRay$Selector): XRay$InstanceInvocation,
    (
      source: string,
      context: string,
      selector: XRay$Selector
    ): XRay$InstanceInvocation,
    (context: string, selector: XRay$Selector): XRay$InstanceInvocation,
    (selector: XRay$Selector): XRay$InstanceInvocation
  } & XRayCrawler.XRay$Instance;

  declare interface XRay$InstanceInvocation {
    (callback: XRay$Callback): void;
    (source: string, callback: XRay$Callback): void;
    abort(): this;
    paginate(selector: XRay$Selector): this;
    limit(n: number): this;
    stream(): NodeJS.ReadStream;
    then<U>(fn?: (value: any) => U | PromiseLike<U>): Bluebird<U>;
    write(path?: string): (err: NodeJS.ErrnoException) => void;
  }
}
