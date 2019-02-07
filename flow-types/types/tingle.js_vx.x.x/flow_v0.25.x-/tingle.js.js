declare module "tingle.js" {
  declare export interface Options {
    onOpen?: () => void;
    onClose?: () => void;
    beforeOpen?: () => void;
    beforeClose?: () => boolean | void;
    stickyFooter?: boolean;
    footer?: boolean;
    cssClass?: string[];
    closeLabel?: string;
    closeMethods?: string[];
  }
  declare export class modal {
    constructor(options?: Options): this;
    setContent(content: string | Element): void;
    getContent(): HTMLDivElement;
    destroy(): void;
    open(): void;
    isOpen(): boolean;
    close(): void;
    setFooterContent(content: string): void;
    getFooterContent(): HTMLDivElement | void;
    setStickyFooter(sticky: boolean): void;
    addFooterBtn(
      label: string,
      cssClass: string | void,
      listener: $ElementType<HTMLElement, "onclick">
    ): HTMLButtonElement;
    isOverflow(): boolean;
    checkOverflow(): void;
  }
}
