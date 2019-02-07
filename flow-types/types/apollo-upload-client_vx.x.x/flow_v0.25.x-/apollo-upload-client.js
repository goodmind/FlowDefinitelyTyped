declare module "apollo-upload-client" {
  import type { ApolloLink } from "apollo-link";

  import type { HttpOptions } from "apollo-link-http-common";

  declare export { ReactNativeFile } from "extract-files";

  /**
   * `createUploadLink` options match `createHttpLink` options
   * @param linkOptions `HttpOptions`
   */
  declare export function createUploadLink(
    linkOptions?: HttpOptions
  ): ApolloLink;
}
