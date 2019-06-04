declare module "global" {
  declare class Airtable {
    base(appId: string): Airtable$Base;
  }
  declare interface Airtable$FieldSet {
    [key: string]: void | string | $ReadOnlyArray<global$Airtable$Attachment>;
  }

  declare interface Airtable$Base {
    (tableName: string): global$Airtable$Table<{}>;
  }

  declare interface Airtable$Table<TFields: global$Airtable$FieldSet> {
    select(opt?: global$Airtable$SelectOptions): global$Airtable$Query<TFields>;
  }

  declare interface Airtable$SelectOptions {
    view?: string;
  }

  declare interface Airtable$Query<TFields: { [key: string]: any }> {
    all(): Promise<global$Airtable$Response<TFields>>;
    firstPage(): Promise<global$Airtable$Response<TFields>>;
  }

  declare type Airtable$Response<TFields> = $ReadOnlyArray<
    global$Airtable$Row<TFields>
  >;

  declare interface Airtable$Row<TFields> {
    id: string;
    fields: TFields;
  }

  declare interface Airtable$Attachment {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails?: {
      small: global$Airtable$Thumbnail,
      large: global$Airtable$Thumbnail,
      full: global$Airtable$Thumbnail
    };
  }

  declare interface Airtable$Thumbnail {
    url: string;
    width: number;
    height: number;
  }
}
declare module "airtable" {
  declare export default typeof Airtable;
}
