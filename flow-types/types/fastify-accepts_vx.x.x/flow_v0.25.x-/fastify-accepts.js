declare interface fastifyAccepts$FastifyAcceptsOptions {
  decorateReplyToo?: boolean;
}
declare module "fastify" {
  declare interface FastifyRequest<HttpRequest> {
    accepts(): Accepts;
    charset: $ElementType<Accepts, "charset">;
    charsets: $ElementType<Accepts, "charsets">;
    encoding: $ElementType<Accepts, "encoding">;
    encodings: $ElementType<Accepts, "charsets">;
    language: $ElementType<Accepts, "language">;
    languages: $ElementType<Accepts, "languages">;
    type: $ElementType<Accepts, "type">;
    types: $ElementType<Accepts, "types">;
  }
  declare interface FastifyReply<HttpResponse> {
    requestAccepts(): Accepts;
    requestCharset: $ElementType<Accepts, "charset">;
    requestCharsets: $ElementType<Accepts, "charsets">;
    requestEncoding: $ElementType<Accepts, "encoding">;
    requestEncodings: $ElementType<Accepts, "charsets">;
    requestLanguage: $ElementType<Accepts, "language">;
    requestLanguages: $ElementType<Accepts, "languages">;
    requestType: $ElementType<Accepts, "type">;
    requestTypes: $ElementType<Accepts, "types">;
  }
}
declare module "fastify-accepts" {
  import type { Accepts } from "accepts";

  declare function fastifyAccepts(): void;

  declare module.exports: typeof fastifyAccepts;
}
