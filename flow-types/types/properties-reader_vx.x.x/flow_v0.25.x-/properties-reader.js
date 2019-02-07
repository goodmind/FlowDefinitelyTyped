declare module "properties-reader" {
  declare type PropertiesReader$Value = string | number | boolean;

  declare interface PropertiesReader$Reader {
    get(propertyName: string): PropertiesReader$Value | null;
    getRaw(propertyName: string): string | null;
    path(): {};
    append(path: string): PropertiesReader$Reader;
    read(properties: string): PropertiesReader$Reader;
    set(
      propertyName: string,
      value: PropertiesReader$Value
    ): PropertiesReader$Reader;
    length: number;
    each(
      iterator: (key: string, value: PropertiesReader$Value) => void
    ): PropertiesReader$Reader;
    each<T>(
      iterator: (key: string, value: PropertiesReader$Value) => void,
      scope: T
    ): PropertiesReader$Reader;
    getAllProperties(): {
      [key: string]: PropertiesReader$Value
    };
    clone(): PropertiesReader$Reader;
  }
  declare function PropertiesReader(
    path: string
  ): PropertiesReader$PropertiesReader$Reader;

  declare module.exports: typeof PropertiesReader;
}
