declare module "form-data" {
  import typeof * as stream from "stream";

  import typeof * as http from "http";

  declare module.exports: typeof FormData;

  declare class FormData mixins stream.Readable {
    append(
      key: string,
      value: any,
      options?: FormData$FormData$AppendOptions | string
    ): void;
    getHeaders(): FormData$FormData$Headers;
    submit(
      params: string | FormData$FormData$SubmitOptions,
      callback?: (error: Error | void, response: http.IncomingMessage) => void
    ): http.ClientRequest;
    getBoundary(): string;
    getLength(callback: (err: Error | void, length: number) => void): void;
    getLengthSync(): number;
    hasKnownLength(): boolean;
  }
  declare interface FormData$Headers {
    [key: string]: any;
  }

  declare interface FormData$AppendOptions {
    header?: string | FormData$Headers;
    knownLength?: number;
    filename?: string;
    filepath?: string;
    contentType?: string;
  }

  declare type FormData$SubmitOptions = {
    protocol?: "https:" | "http:"
  } & http.RequestOptions;
}
