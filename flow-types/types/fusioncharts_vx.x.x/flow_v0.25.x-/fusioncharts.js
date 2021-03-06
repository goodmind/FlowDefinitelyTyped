declare module "fusioncharts" {
  declare type FusionCharts$ChartDataFormats =
    | "json"
    | "jsonurl"
    | "csv"
    | "xml"
    | "xmlurl";

  declare type FusionCharts$ImageHAlign = "left" | "right" | "middle";

  declare type FusionCharts$ImageVAlign = "top" | "bottom" | "middle";

  declare interface FusionCharts$EventObject {
    type: string;
    eventId: number;
    sender: FusionCharts$FusionCharts;
    cancelled: boolean;
    stopPropagation(): void;
    prevented: boolean;
    preventDefault(): void;
    detached: boolean;
    detachHandler(): void;
  }

  declare interface FusionCharts$ChartObject {
    type?: string;
    id?: string;
    width?: number | string;
    height?: number | string;
    renderAt?: string;
    dataFormat?: FusionCharts$ChartDataFormats;
    dataSource?: string | {};
    events?: {};
    link?: {};
    showDataLoadingMessage?: boolean;
    showChartLoadingMessage?: boolean;
    baseChartMessageFont?: string;
    baseChartMessageFontSize?: string;
    baseChartMessageColor?: string;
    dataLoadStartMessage?: string;
    dataLoadErrorMessage?: string;
    dataInvalidMessage?: string;
    dataEmptyMessage?: string;
    typeNotSupportedMessage?: string;
    loadMessage?: string;
    renderErrorMessage?: string;
    containerBackgroundColor?: string;
    containerBackgroundOpacity?: number;
    containerClassName?: string;
    baseChartMessageImageHAlign?: FusionCharts$ImageHAlign;
    dataLoadErrorMessageImageVAlign?: FusionCharts$ImageVAlign;
    dataLoadErrorMessageImageAlpha?: number;
    dataLoadErrorMessageImageScale?: number;
    dataLoadStartMessageImageHAlign?: FusionCharts$ImageHAlign;
    dataLoadStartMessageImageVAlign?: FusionCharts$ImageVAlign;
    dataLoadStartMessageImageAlpha?: number;
    dataLoadStartMessageImageScale?: number;
    dataInvalidMessageImageHAlign?: FusionCharts$ImageHAlign;
    dataInvalidMessageImageVAlign?: FusionCharts$ImageVAlign;
    dataInvalidMessageImageAlpha?: number;
    dataInvalidMessageImageScale?: number;
    dataEmptyMessageImageHAlign?: FusionCharts$ImageHAlign;
    dataEmptyMessageImageVAlign?: FusionCharts$ImageVAlign;
    dataEmptyMessageImageAlpha?: number;
    dataEmptyMessageImageScale?: number;
    renderErrorMessageImageHAlign?: FusionCharts$ImageHAlign;
    renderErrorMessageImageVAlign?: FusionCharts$ImageVAlign;
    renderErrorMessageImageAlpha?: number;
    renderErrorMessageImageScale?: number;
    loadMessageImageHAlign?: FusionCharts$ImageHAlign;
    loadMessageImageVAlign?: FusionCharts$ImageVAlign;
    loadMessageImageAlpha?: number;
    loadMessageImageScale?: number;
  }

  declare interface FusionCharts$Debugger {
    outputFormat(format: any): void;
    outputTo(callback: (message: any) => any): void;
    enable(
      state: any,
      outputTo?: (message: any) => any,
      outputFormat?: any
    ): void;
    enableFirebugLite(): any;
  }

  declare interface FusionCharts$FusionCharts {
    clone(overrides?: {}, argsOnly?: boolean): any;
    isActive(): boolean;
    chartType(value?: string, options?: any): string;
    addEventListener(
      type: string | string[],
      listener: (eventObject?: FusionCharts$EventObject, eventArgs?: {}) => void
    ): void;
    removeEventListener(
      type: string | string[],
      listener: (eventObject?: FusionCharts$EventObject, eventArgs?: {}) => void
    ): void;
    configureLink(param: {} | any[], level?: number): void;
    setChartAttribute(
      attributes: FusionCharts$ChartObject | string,
      value?: string
    ): void;
    getChartAttribute(attribute?: string | string[]): FusionCharts$ChartObject;
    getXMLData(): any;
    setXMLData(data: string | {}): void;
    setXMLUrl(url: string): void;
    setChartDataUrl(url: string, format: FusionCharts$ChartDataFormats): void;
    setChartData(
      data: string | {},
      format: FusionCharts$ChartDataFormats
    ): void;
    getChartData(format: FusionCharts$ChartDataFormats): any;
    dataReady(available?: boolean): boolean;
    feedData(stream: string): void;
    getData(): any;
    getDataWithId(): any;
    setData(value: number, label: string): void;
    stopUpdate(): void;
    restartUpdate(): void;
    isUpdateActive(): boolean;
    clearChart(): void;
    getSWFHTML(): any;
    addVariable(): void;
    getXML(): any;
    setDataXML(data: string | {}): void;
    setDataURL(url: string): void;
    hasRendered(): boolean;
    setTransparent(transparency?: boolean): void;
    isPlotItemSliced(index: number): boolean;
    slicePlotItem(index: number, slice: boolean): void;
    centerLabel(labelText: string, options?: {}): void;
    startingAngle(angle?: number, relative?: boolean): void;
    zoomOut(): void;
    zoomTo(startIndex: number, endIndex: number): void;
    resetChart(): void;
    setZoomMode(yes: boolean): void;
    getViewStartIndex(): number;
    getViewEndIndex(): number;
    print(options?: {}): void;
    exportChart(options?: {}): void;
    getSVGString(): string;
    lockResize(state: boolean): boolean;
    showChartMessage(text: string, modal?: boolean, cancelable?: boolean): void;
    getJSONData(): JSON;
    setJSONData(data: string | {}): void;
    setJSONUrl(url: string): void;
    getCSVData(): any;
    getDataAsCSV(): any;
    render(
      containerElement?: string | Element,
      insertMode?: string,
      callback?: () => any
    ): FusionCharts$FusionCharts;
    resizeTo(width: number | string, height: number | string): any;
    dispose(): void;
    configure(options: {}): void;
    ref: {};
  }

  declare interface FusionCharts$FusionChartStatic {
    new(chartObject: FusionCharts$ChartObject | {}): FusionCharts$FusionCharts;
    (chartId: string): FusionCharts$FusionCharts;
    getObjectReference(elementId: string): Element;
    addEventListener(
      type: string | string[],
      listener: (eventObject?: FusionCharts$EventObject, eventArgs?: {}) => void
    ): void;
    removeEventListener(
      type: string | string[],
      listener: (eventObject?: FusionCharts$EventObject, eventArgs?: {}) => void
    ): void;
    ready(
      callback: (fusionChartStatic?: FusionCharts$FusionChartStatic) => any,
      context?: any
    ): FusionCharts$FusionChartStatic;
    transcodeData(
      data: string | {},
      source: FusionCharts$ChartDataFormats,
      target: FusionCharts$ChartDataFormats,
      advanced: boolean
    ): any;
    batchExport(options: {}): void;
    formatNumber(num: number, type?: string, config?: {}): Element;
    setCurrentRenderer(name: string): void;
    getCurrentRenderer(): string;
    render(
      options?: FusionCharts$ChartObject,
      callback?: () => any
    ): FusionCharts$FusionCharts;
    version: string[];
    items: {};
    options: {};
    debugger: FusionCharts$Debugger;
  }
  declare var FusionCharts$FusionCharts: FusionCharts$FusionCharts.FusionCharts$FusionChartStatic;
  declare module.exports: typeof FusionCharts$FusionCharts;
}
