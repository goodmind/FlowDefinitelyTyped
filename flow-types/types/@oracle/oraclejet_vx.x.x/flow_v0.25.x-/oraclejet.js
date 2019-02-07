declare module "@oracle/oraclejet" {
  import type { Model, Collection } from "./ojmodel";

  declare var npm$namespace$oj: {
    ajax: typeof oj$ajax,
    sync: typeof oj$sync,
    revision: typeof oj$revision,
    version: typeof oj$version
  };
  declare var oj$revision: string;

  declare var oj$version: string;

  declare function oj$ajax(settings?: { [key: string]: any }): {
    [key: string]: any
  };

  declare function oj$sync(
    method: string,
    model: Model | Collection,
    options?: { [key: string]: any }
  ): { [key: string]: any };

  declare export type baseComponent<
    SP: baseComponentSettableProperties = baseComponentSettableProperties
  > = {
    translations: { [key: string]: any } | null,
    onTranslationsChanged:
      | ((
          event: JetElementCustomEvent<
            $ElementType<baseComponent<SP>, "translations">
          >
        ) => any)
      | null,
    addEventListener<T: $Keys<baseComponentEventMap<SP>>>(
      type: T,
      listener: (ev: $ElementType<baseComponentEventMap<SP>, T>) => any,
      useCapture?: boolean
    ): void,
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      useCapture?: boolean
    ): void,
    getProperty<T: $Keys<baseComponentSettableProperties>>(
      property: T
    ): $ElementType<baseComponent<SP>, T>,
    getProperty(property: string): any,
    setProperty<T: $Keys<baseComponentSettableProperties>>(
      property: T,
      value: $ElementType<baseComponentSettableProperties, T>
    ): void,
    setProperty<T: string>(
      property: T,
      value: JetSetPropertyType<T, baseComponentSettableProperties>
    ): void,
    setProperties(properties: baseComponentSettablePropertiesLenient): void,
    refresh(): void
  } & JetElement<SP>;

  declare export type baseComponentEventMap<
    SP: baseComponentSettableProperties = baseComponentSettableProperties
  > = {
    translationsChanged: JetElementCustomEvent<
      $ElementType<baseComponent<SP>, "translations">
    >
  } & HTMLElementEventMap;

  declare export type baseComponentSettableProperties = {
    translations: { [key: string]: any } | null
  } & JetSettableProperties;

  declare export type baseComponentSettablePropertiesLenient = {
    [key: string]: any
  } & $Shape<baseComponentSettableProperties>;

  declare export interface GenericSetter<SP> {
    set<K: $Keys<SP>>(
      propertyName: K,
      propertyValue: $ElementType<SP, K>
    ): void;
    unset(propertyName: $Keys<SP>): void;
  }
  declare export type JetElement<SP> = {
    set<K: $Keys<SP>>(
      propertyName: K,
      propertyValue: $ElementType<SP, K>
    ): void,
    unset(propertyName: $Keys<SP>): void
  } & HTMLElement &
    GenericSetter<SP>;

  declare export type JetElementCustomEvent<V> = {} & CustomEvent<{
    value: V,
    previousValue: V,
    updatedFrom: "external" | "internal",
    subproperty: {
      path: string,
      value: any,
      previousValue: any,
      [key: string]: any
    },
    [key: string]: any
  }>;

  declare export interface JetSettableProperties {}
  declare export type JetSetPropertyType<K, U: JetSettableProperties> =
    "There was Conditional Type, use $Call utility type";
}
