declare type fastifyMultipart$MultipartHandler = (
  field: string,
  file: any,
  filename: string,
  encoding: string,
  mimetype: string
) => void;

declare interface fastifyMultipart$FastifyMultipartOptions {
  limits?: {
    /**
     * Max field name size in bytes
     */
    fieldNameSize?: number,

    /**
     * Max field value size in bytes
     */
    fieldSize?: number,

    /**
     * Max number of non-file fields
     */
    fields?: number,

    /**
     * For multipart forms, the max file size
     */
    fileSize?: number,

    /**
     * Max number of file fields
     */
    files?: number,

    /**
     * Max number of header key=>value pairs
     */
    headerPairs?: number
  };
}
declare module "fastify" {
  declare interface FastifyRequest<HttpRequest> {
    isMultipart: () => boolean;
    multipart: (
      handler: fastifyMultipart$fastifyMultipart$MultipartHandler,
      next: (err: Error) => void
    ) => busboy.Busboy;
  }
}
declare module "fastify-multipart" {
  import type { IncomingMessage, ServerResponse } from "http";

  declare function fastifyMultipart(): void;

  declare module.exports: typeof fastifyMultipart;
}
