declare module "sql-template" {
  declare module.exports: typeof SQL;

  declare function SQL(
    parts: TemplateStringsArray,
    ...values: any[]
  ): SQL$SQL$Fragment;

  declare var npm$namespace$SQL: {
    insert: typeof SQL$insert,
    insert_bulk: typeof SQL$insert_bulk,
    update: typeof SQL$update,
    select: typeof SQL$select,
    search_blob: typeof SQL$search_blob,
    transformers: typeof SQL$transformers
  };
  declare interface SQL$Fragment {
    raw: string;
    text: string;
    values?: any[];
  }

  declare type SQL$ChainFn = (values: any[], part: string) => string;

  declare type SQL$Transformer = (
    values: any[],
    str: string,
    chain: SQL$ChainFn
  ) => void;

  declare function SQL$insert(
    table: string,
    values: { [key: string]: any }
  ): SQL$Fragment;

  declare function SQL$insert_bulk(
    table: string,
    keys: string[],
    values: any[][]
  ): SQL$Fragment;

  declare function SQL$update(
    table: string,
    values: { [key: string]: any },
    where?: any
  ): SQL$Fragment;

  declare function SQL$select(
    table: string,
    where?: any,
    cols?: string,
    extra?: string
  ): SQL$Fragment;

  declare function SQL$search_blob(
    search_field: string,
    qs: string,
    main_field?: string,
    LIKE?: string
  ): SQL$Fragment | false;

  declare var SQL$transformers: {
    [key: string]: SQL$Transformer
  };
}
