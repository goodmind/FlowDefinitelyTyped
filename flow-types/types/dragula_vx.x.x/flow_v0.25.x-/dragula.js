declare module "dragula" {
  declare var dragula: dragula$dragula$Dragula;
  declare module.exports: typeof dragula;

  declare interface dragula$DragulaOptions {
    containers?: Element[];
    isContainer?: (el?: Element) => boolean;
    moves?: (
      el?: Element,
      container?: Element,
      handle?: Element,
      sibling?: Element
    ) => boolean;
    accepts?: (
      el?: Element,
      target?: Element,
      source?: Element,
      sibling?: Element
    ) => boolean;
    invalid?: (el?: Element, target?: Element) => boolean;
    direction?: string;
    copy?: ((el: Element, source: Element) => boolean) | boolean;
    revertOnSpill?: boolean;
    removeOnSpill?: boolean;
    delay?: boolean | number;
    mirrorContainer?: Element;
    ignoreInputTextSelection?: boolean;
  }

  declare interface dragula$Drake {
    containers: Element[];
    dragging: boolean;
    start(item: Element): void;
    end(): void;
    cancel(revert: boolean): void;
    cancel(): void;
    remove(): void;
    on(events: string, callback: Function): dragula$Drake;
    destroy(): void;
  }

  declare interface dragula$Dragula {
    (containers: Element[], options: dragula$DragulaOptions): dragula$Drake;
    (containers: Element, options: dragula$DragulaOptions): dragula$Drake;
    (containers: Element[]): dragula$Drake;
    (options: dragula$DragulaOptions): dragula$Drake;
    (): dragula$Drake;
  }
}
