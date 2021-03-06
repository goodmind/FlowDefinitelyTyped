declare interface busboy$Options {
  headers: any;
}

declare interface busboy$BusboyConfig {
  headers?: any;
  highWaterMark?: number;
  fileHwm?: number;
  defCharset?: string;
  preservePath?: boolean;
  limits?: {
    fieldNameSize?: number,
    fieldSize?: number,
    fields?: number,
    fileSize?: number,
    files?: number,
    parts?: number,
    headerPairs?: number
  };
}

declare type busboy$Busboy = {
  on(
    event: "field",
    listener: (
      fieldname: string,
      val: any,
      fieldnameTruncated: boolean,
      valTruncated: boolean,
      encoding: string,
      mimetype: string
    ) => void
  ): this,
  on(
    event: "file",
    listener: (
      fieldname: string,
      file: NodeJS.ReadableStream,
      filename: string,
      encoding: string,
      mimetype: string
    ) => void
  ): this,
  on(event: "finish", callback: () => void): this,
  on(event: "partsLimit", callback: () => void): this,
  on(event: "filesLimit", callback: () => void): this,
  on(event: "fieldsLimit", callback: () => void): this,
  on(event: string, listener: Function): this
} & NodeJS.WritableStream;

declare interface busboy$BusboyConstructor {
  new(options: busboy$BusboyConfig): busboy$Busboy;
}
declare module "busboy" {
  declare var temp: busboy$busboy$BusboyConstructor;
  declare module.exports: typeof temp;
}
