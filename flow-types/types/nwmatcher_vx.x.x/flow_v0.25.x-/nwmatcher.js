declare module "global" {
  declare var npm$namespace$NW: {
    Dom: typeof NW$Dom
  };
  declare var NW$Dom: nwmatcher$Matcher;
}
declare module "nwmatcher" {
  declare function nwmatcher(global: {
    document: Document
  }): nwmatcher$Matcher;

  declare interface nwmatcher$Matcher {
    first: (selector: string, context?: Element) => Element | null;
    match: (element: Element, selector: string, context?: Element) => boolean;
    select: (
      selector: string,
      context?: Element,
      callback?: (element: Element) => void
    ) => Element[];
    byId: (id: string, from?: Element) => Element | null;
    byTag: (tag: string, from?: Element) => Element[];
    byClass: (className: string, from?: Element) => Element[];
    byName: (name: string, from?: Element) => Element[];
    getAttribute: (element: Element, attribute: string) => string | void;
    hasAttribute: (element: Element, attribute: string) => boolean;
  }
  declare export default typeof nwmatcher;
}
