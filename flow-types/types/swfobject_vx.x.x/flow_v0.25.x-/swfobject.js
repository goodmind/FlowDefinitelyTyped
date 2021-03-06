declare module "swfobject" {
  declare var swfobject: swfobject$swfobject$SwfObject;
  declare export interface swfobject$SwfObject {
    ua: {
      w3: boolean,
      pv: number[],
      wk: any,
      ie: boolean,
      win: boolean,
      mac: boolean
    };
    registerObject(
      objectIdStr: string,
      swfVersionStr: string,
      xiSwfUrlStr?: string,
      callbackFn?: (callbackObj: swfobject$ICallbackObj) => void
    ): void;
    getObjectById(objectIdStr: string): HTMLElement;
    embedSWF(
      swfUrlStr: string,
      replaceElemIdStr: string,
      widthStr: string,
      heightStr: string,
      swfVersionStr: string,
      xiSwfUrlStr?: string,
      flashvarsObj?: Object,
      parObj?: Object,
      attObj?: Object,
      callbackFn?: (callbackObj: swfobject$ICallbackObj) => void
    ): void;
    switchOffAutoHideShow(): void;
    getFlashPlayerVersion(): swfobject$IFlashPlayerVersion;
    hasFlashPlayerVersion(rv: string): boolean;
    createSWF(
      attObj: swfobject$ISwfObjectAttribute,
      parObj: swfobject$ISwfObjectParameter,
      replaceElemIdStr: string
    ): HTMLElement;
    showExpressInstall(
      att: swfobject$ISwfObjectAttribute,
      par: swfobject$ISwfObjectParameter,
      replaceElemIdStr: string,
      callbackFn?: (callbackObj: swfobject$ICallbackObj) => void
    ): void;
    removeSWF(objElemIdStr: string): void;
    createCSS(
      selStr: string,
      declStr: string,
      mediaStr?: string,
      newStyleBoolean?: boolean
    ): void;
    addDomLoadEvent(fn: () => void): void;
    addLoadEvent(fn: (event?: Event) => void): void;
    getQueryParamValue(param?: string): string;
  }

  declare export interface swfobject$IFlashPlayerVersion {
    major: number;
    minor: number;
    release: number;
  }

  declare export interface swfobject$ISwfObjectAttribute {
    id?: string;
    width?: string;
    height?: string;
  }

  declare export interface swfobject$ISwfObjectParameter {
    flashvars?: string;
  }

  declare export interface swfobject$ICallbackObj {
    success: boolean;
    id: string;
    ref?: HTMLElement;
  }
}
