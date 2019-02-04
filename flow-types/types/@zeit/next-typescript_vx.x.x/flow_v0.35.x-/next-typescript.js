declare module "@zeit/next-typescript" {
    import type { ServerConfig } from "next";

    declare function withTypescript(nextConfig?: ServerConfig): ServerConfig;

    declare module.exports: typeof withTypescript;
}
