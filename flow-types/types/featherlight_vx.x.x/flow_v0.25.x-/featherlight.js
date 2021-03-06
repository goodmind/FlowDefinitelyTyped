declare module "featherlight" {
  declare interface Featherlight$Config {
    namespace?: string;
    targetAttr?: string;
    variant?: string;
    resetCss?: boolean;
    background?: string;
    openTrigger?: string;
    closeTrigger?: string;
    filter?: string;
    root?: string;
    openSpeed?: number | string;
    closeSpeed?: number | string;
    closeOnClick?: boolean | string;
    closeOnEsc?: boolean;
    closeIcon?: string;
    loading?: string;
    persist?: boolean | string;
    otherClose?: string;
    beforeOpen?: (event: JQueryEventObject) => any;
    beforeContent?: (event: JQueryEventObject) => any;
    beforeClose?: (event: JQueryEventObject) => any;
    afterOpen?: (event: JQueryEventObject) => any;
    afterContent?: (event: JQueryEventObject) => any;
    afterClose?: (event: JQueryEventObject) => any;
    onKeyUp?: (event: JQueryEventObject) => any;
    onResize?: (event: JQueryEventObject) => any;
    type?: string;
    contentFilters?: any;
    jquery?: JQuery;
    image?: string;
    html?: string;
    ajax?: string;
    text?: string;
  }

  declare interface Featherlight$ContentFilter {
    regex?: RegExp;
    test?: (data: JQuery | string) => boolean;
    process?: (data: JQuery | string) => JQuery | JQueryPromise<JQuery>;
  }

  declare interface Featherlight$ContentFilters {
    [name: string]: Featherlight$ContentFilter;
  }

  declare type Featherlight$Featherlight = {
    target: JQuery | string,
    $instance: JQuery,
    $content: JQuery,
    setup(
      target: JQuery,
      config?: Featherlight$Config
    ): Featherlight$Featherlight,
    setup(
      target: string,
      config?: Featherlight$Config
    ): Featherlight$Featherlight,
    setup(config: Featherlight$Config): Featherlight$Featherlight,
    setup(): Featherlight$Featherlight,
    getContent(): JQuery | JQueryPromise<JQuery>,
    setContent($content: JQuery): Featherlight$Featherlight,
    setContent($content: JQueryPromise<JQuery>): Featherlight$Featherlight,
    open(event?: JQueryEventObject): JQueryPromise<JQuery>,
    close(event?: JQueryEventObject): JQueryPromise<JQuery>
  } & Featherlight$Config;

  declare interface Featherlight$FeatherlightStatic {
    ($content: JQuery, config?: Featherlight$Config): Featherlight$Featherlight;
    ($content: string, config?: Featherlight$Config): Featherlight$Featherlight;
    (config: Featherlight$Config): Featherlight$Featherlight;
    (): Featherlight$Featherlight;
    new(
      $content: JQuery,
      config?: Featherlight$Config
    ): Featherlight$Featherlight;
    new(
      $content: string,
      config?: Featherlight$Config
    ): Featherlight$Featherlight;
    new(config: Featherlight$Config): Featherlight$Featherlight;
    new(): Featherlight$Featherlight;
    attach(
      $source: JQuery,
      $content: JQuery,
      config?: Featherlight$Config
    ): JQuery;
    attach(
      $source: JQuery,
      $content: string,
      config?: Featherlight$Config
    ): JQuery;
    attach($source: JQuery, config: Featherlight$Config): JQuery;
    attach($source: JQuery): JQuery;
    id: number;
    autoBind: boolean | string;
    defaults: Featherlight$Config;
    contentFilters: Featherlight$ContentFilters;
    functionAttributes: string[];
    readElementConfig(element: HTMLElement, namespace: string): any;
    extend(child: any, defaults: any): any;
    current(): Featherlight$Featherlight;
    opened(): Featherlight$Featherlight[];
    close(): JQueryPromise<JQuery>;
  }

  declare interface Featherlight$JQueryExtension {
    ($content: JQuery, config?: Featherlight$Config): JQuery;
    ($content: string, config?: Featherlight$Config): JQuery;
    (config: Featherlight$Config): JQuery;
    (): JQuery;
  }
  declare interface JQueryStatic {
    featherlight: Featherlight$Featherlight.Featherlight$FeatherlightStatic;
  }
  declare interface JQuery {
    featherlight: Featherlight$Featherlight.Featherlight$JQueryExtension;
  }
}
