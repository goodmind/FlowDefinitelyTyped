declare module "phin" {
  import type { ClientRequestArgs, IncomingMessage } from "http";

  import type { URL } from "url";

  import type { Response as CentraResponse } from "centra";

  declare type Options = Phin$Options;
  declare type BufferResponse = Phin$BufferResponse;
  declare type StreamResponse = Phin$StreamResponse;
  declare type JsonResponse = Phin$JsonResponse;
  declare type DefaultOpts = Phin$DefaultOpts;
  declare type BatchResponse = Phin$JsonResponse | Phin$BufferResponse;
  declare type AnyResponse = BatchResponse | Phin$StreamResponse;
  declare interface PhinFactory {
    (
      optsOrUrl:
        | (Phin$Options & {
            parse?: "none",
            stream?: false
          })
        | string
    ): Promise<Phin$BufferResponse>;
    (
      optsOrUrl: Phin$Options & {
        parse: "json",
        stream?: false
      }
    ): Promise<Phin$JsonResponse>;
    (
      optsOrUrl: Phin$Options & {
        stream: true
      }
    ): Promise<Phin$StreamResponse>;
    (optsOrUrl: Phin$Options): Promise<AnyResponse>;
    promisified(
      optsOrUrl:
        | (Phin$Options & {
            parse?: "none",
            stream?: false
          })
        | string
    ): Promise<Phin$BufferResponse>;
    promisified(
      optsOrUrl: Phin$Options & {
        parse: "json",
        stream?: false
      }
    ): Promise<Phin$JsonResponse>;
    promisified(
      optsOrUrl: Phin$Options & {
        stream: true
      }
    ): Promise<Phin$StreamResponse>;
    promisified(optsOrUrl: Phin$Options): Promise<AnyResponse>;
    unpromisified(
      optsOrUrl:
        | (Phin$Options & {
            parse?: "none",
            stream?: false
          })
        | string,
      cb: (err: mixed, resp: Phin$BufferResponse) => mixed
    ): void;
    unpromisified(
      optsOrUrl: Phin$Options & {
        parse: "json",
        stream?: false
      },
      cb: (err: mixed, resp: Phin$JsonResponse) => mixed
    ): void;
    unpromisified(
      optsOrUrl: Phin$Options & {
        stream: true
      },
      cb: (err: mixed, resp: Phin$StreamResponse) => mixed
    ): void;
    unpromisified(
      optsOrUrl: Phin$Options,
      cb: (err: mixed, resp: AnyResponse) => mixed
    ): void;
    defaults(
      defaultOpts: Phin$DefaultOpts & {
        parse: "json",
        stream?: false
      }
    ): {
      (
        optsOrUrl: Phin$Options & {
          stream: true
        }
      ): Promise<Phin$StreamResponse>,
      (
        optsOrUrl: Phin$Options & {
          parse: "none",
          stream?: false
        }
      ): Promise<Phin$BufferResponse>,
      (
        optsOrUrl:
          | (Phin$Options & {
              parse?: "json",
              stream?: false
            })
          | string
      ): Promise<Phin$JsonResponse>,
      (optsOrUrl: Phin$Options): Promise<AnyResponse>
    };
    defaults(
      defaultOpts: Phin$DefaultOpts & {
        parse?: "none",
        stream?: false
      }
    ): {
      (
        optsOrUrl: Phin$Options & {
          stream: true
        }
      ): Promise<Phin$StreamResponse>,
      (
        optsOrUrl: Phin$Options & {
          parse: "json",
          stream?: false
        }
      ): Promise<Phin$JsonResponse>,
      (
        optsOrUrl:
          | (Phin$Options & {
              parse?: "none",
              stream?: false
            })
          | string
      ): Promise<Phin$BufferResponse>,
      (optsOrUrl: Phin$Options): Promise<AnyResponse>
    };
    defaults(
      defaultOpts: Phin$DefaultOpts & {
        parse: "json",
        stream: true
      }
    ): {
      (
        optsOrUrl: Phin$Options & {
          parse: "none",
          stream: false
        }
      ): Promise<Phin$BufferResponse>,
      (
        optsOrUrl: Phin$Options & {
          parse?: "json",
          stream: false
        }
      ): Promise<Phin$JsonResponse>,
      (
        optsOrUrl:
          | (Phin$Options & {
              stream?: true
            })
          | string
      ): Promise<Phin$StreamResponse>,
      (optsOrUrl: Phin$Options | string): Promise<AnyResponse>
    };
    defaults(
      defaultOpts: Phin$DefaultOpts & {
        parse?: "none",
        stream: true
      }
    ): {
      (
        opts: Phin$Options & {
          parse: "json",
          stream: false
        }
      ): Promise<Phin$JsonResponse>,
      (
        opts: Phin$Options & {
          parse?: "none",
          stream: false
        }
      ): Promise<Phin$BufferResponse>,
      (
        opts:
          | (Phin$Options & {
              stream?: true
            })
          | string
      ): Promise<Phin$StreamResponse>,
      (opts: Phin$Options): Promise<AnyResponse>
    };
    defaults(
      defaultOpts: Phin$DefaultOpts
    ): {
      (
        optsOrUrl: Phin$Options & {
          stream: true
        }
      ): Promise<Phin$StreamResponse>,
      (
        optsOrUrl: Phin$Options & {
          parse: "json",
          stream: false
        }
      ): Promise<Phin$JsonResponse>,
      (
        optsOrUrl: Phin$Options & {
          parse: "none",
          stream: false
        }
      ): Promise<Phin$BufferResponse>,
      (optsOrUrl: Phin$Options | string): Promise<AnyResponse>
    };
  }
  declare var Phin: PhinFactory;
  declare interface Phin$DefaultOpts {
    url?: string;
    method?: string;
    data?: any;
    form?: {
      [k: string]: string
    };
    headers?: {
      [k: string]: string
    };
    core?: ClientRequestArgs;
    parse?: "none" | "json";
    followRedirects?: boolean;
    compression?: boolean;
    timeout?: number | null;
    hostname?: string;
    port?: number;
    path?: string;
    stream?: boolean;
  }

  declare type Phin$Options = {
    url: string
  } & Phin$DefaultOpts;

  declare type Phin$BatchOptions = {
    stream: false
  } & Phin$Options;

  declare type Phin$StreamOptions = {
    stream: true
  } & Phin$Options;

  declare type Phin$StreamResponse = {
    stream: Phin$StreamResponse
  } & IncomingMessage;

  declare type Phin$BufferResponse = {
    body: Buffer
  } & IncomingMessage;

  declare type Phin$JsonResponse = {
    body: any
  } & IncomingMessage;

  declare export default typeof Phin;
}
