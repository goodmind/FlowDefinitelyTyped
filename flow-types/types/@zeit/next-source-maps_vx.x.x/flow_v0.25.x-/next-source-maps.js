declare module "@zeit/next-source-maps" {
  import type { ServerConfig } from "next";

  declare function withSourceMaps(nextConfig?: ServerConfig): ServerConfig;

  declare export default typeof withSourceMaps;
}
