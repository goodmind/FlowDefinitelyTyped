declare module "browserslist-useragent" {
  declare export interface ResolvedUserAgent {
    family: string;
    version: string;
  }
  declare export interface BrowserslistUseragentOptions {
    browsers?: string[];
    env?: string;
    ignorePath?: boolean;
    ignoreMinor?: boolean;
    allowHigherVersions?: boolean;
  }
  declare export function matchesUA(
    uaString: string,
    opts?: BrowserslistUseragentOptions
  ): boolean;

  declare export function resolveUserAgent(uaString: string): ResolvedUserAgent;

  declare export function normalizeQuery(query: string): string;
}
