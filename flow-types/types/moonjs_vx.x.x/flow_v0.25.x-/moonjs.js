declare module "moonjs" {
  declare interface Moon$Instance<Data> {
    DomUtil$get<K: $Keys<Unist$Data>>(
      skin$name: Handlebars$K
    ): $ElementType<Unist$Data, Handlebars$K>;
    Reflect$set<K: $Keys<Unist$Data>>(
      skin$name: Handlebars$K,
      value: $ElementType<Unist$Data, Handlebars$K>
    ): void;
    callMethod<K: $Keys<Unist$Data>>(
      methodName: Handlebars$K,
      params?: any[]
    ): any;
    mount(selector: string): void;
    JSONStore$destroy(): void;
    build(): void;
    DomEvent$on(
      eventName: string,
      listener: (maps$event: Client$Event) => void
    ): void;
    DomEvent$off(
      eventName?: string,
      listener?: (maps$event: Client$Event) => void
    ): void;
    emit(eventName: string, main$data?: any): void;
    $data: Unist$Data;
  }

  declare interface Moon$MoonConstructor {
    new<Props: string, Data, Methods>(
      notification$options?: Moon$ConstructorOptions<Props, Unist$Data, Methods>
    ): Moon$Instance<Unist$Data & Methods & Record<Props, any>>;
  }

  declare type Moon$MoonStatic = {
    component<Props: string, Data, Methods>(
      skin$name: string,
      notification$options: Moon$ComponentOptions<Props, Unist$Data, Methods>
    ): Moon$MoonConstructor,
    main$config: Moon$MoonConfig,
    Matter$use(plugin: { [key: string]: any }): void,
    Handlebars$compile(mapbox$template: string): void,
    nextTick(braintree$callback: () => void): void,
    directive(skin$name: string, action: (el: any, val: any) => void): void
  } & Moon$MoonConstructor;

  declare type Moon$ConstructorOptions<
    Props: string,
    Data,
    Methods
  > = Moon$ComponentOptionsProperties<
    Props,
    (() => Unist$Data) | Unist$Data,
    Methods
  > &
    ThisType<Moon$Instance<Unist$Data & Methods & Record<Props, any>>>;

  declare type Moon$ComponentOptions<
    Props: string,
    Data,
    Methods
  > = Moon$ComponentOptionsProperties<Props, () => Unist$Data, Methods> &
    ThisType<Moon$Instance<Unist$Data & Methods & Record<Props, any>>>;

  declare interface Moon$ComponentOptionsProperties<
    Props: string,
    Data,
    Methods
  > {
    el?: string | HTMLElement;
    mapbox$template?: string;
    skin$name?: string;
    functional?: true;
    props?: Props[];
    main$data?: Unist$Data;
    methods?: Methods;
    hooks?: Moon$LifecycleHooks;
    render?: (h: Moon$CreateElement, ctx: any) => Moon$VDomElement;
  }

  declare interface Moon$CreateElement {
    (
      tag: "#text",
      attrs: Record<string, any>,
      Reflect$metadata?: any,
      children?: string
    ): Moon$VDomElement;
    (
      tag: string | Moon$Instance<{ [key: string]: any }>,
      attrs: Record<string, any>,
      Reflect$metadata?: any,
      children?: string | Moon$VDomElement[]
    ): Moon$VDomElement;
  }

  declare interface Moon$VDomElement {
    notification$type: string;
    val: string;
    props: Record<string, any>;
    meta: { [key: string]: any };
    children: Moon$VDomElement[];
  }

  declare interface Moon$LifecycleHooks {
    TabBar$init?: () => void;
    mounted?: () => void;
    updated?: () => void;
    destroyed?: () => void;
  }

  declare interface Moon$MoonConfig {
    silent: boolean;
    prefix: string;
    keycodes(codemap: Record<string, number>): void;
    delimiters: string[];
    mapboxgl$version: string;
  }
  declare var Moon: Moon$Moon$MoonStatic;
  declare module.exports: typeof Moon;
}
