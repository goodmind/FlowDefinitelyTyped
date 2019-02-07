declare module "decompress-response" {
  declare module.exports: typeof decompress_response;

  declare function decompress_response(
    response: http.IncomingMessage
  ): http.IncomingMessage;
}
