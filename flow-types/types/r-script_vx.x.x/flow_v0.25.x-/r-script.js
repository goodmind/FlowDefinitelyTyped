declare module "r-script" {
  declare interface R {
    data(...args: any[]): this;
    call(callback: (err: any, d: any) => void): void;
    call(options: R$R$Options, callback: (err: any, d: any) => void): void;
    callSync(options?: R$R$Options): any;
  }
  declare interface R$Options {
    dataframe?: "rows" | "colums" | "values";
    matrix?: "rowmajor" | "columnmajor";
    Date?: "ISO8601" | "epoch";
    POSIXt?: "string" | "ISO8601" | "epoch" | "mongo";
    factor?: "string" | "integer";
    complex?: "string" | "list";
    raw?: "base64" | "hex" | "mongo";
    null?: "list" | "null";
    na?: "null" | "string";
    auto_unbox?: boolean;
    digits?: number;
    pretty?: boolean;
    force?: boolean;
    [key: string]: any;
  }
  declare function R(scriptPath: string): R;

  declare module.exports: typeof R;
}
