declare module "pgwmodal" {
  declare interface PgwModalOption {
    content?: string;
    target?: string;
    url?: string;
    title?: string;
    titleBar?: boolean;
    mainClassName?: string;
    backdropClassName?: string;
    maxWidth?: number;
    angular?: boolean;
    modalData?: any;
    ajaxOptions?: any;
    closable?: boolean;
    closeContent?: string;
    closeOnEscape?: boolean;
    closeOnBackgroundClick?: boolean;
    loadingContent?: string;
    errorContent?: string;
    pushContent?: string;
  }
  declare interface PgwModalMethod {
    (option: PgwModalOption): boolean;
    (action: string): any;
    (action: "close"): boolean;
    (action: "reposition"): boolean;
    (action: "getData"): any;
    (action: "isOpen"): boolean;
  }
  declare interface ZeptoStatic {
    pgwModal: PgwModalMethod;
  }
  declare interface JQueryStatic {
    pgwModal: PgwModalMethod;
  }
}
