declare module "gravatar-url" {
  declare module.exports: typeof GravatarUrl;

  declare function GravatarUrl(
    email: string,
    options?: GravatarUrl$GravatarUrl$Options
  ): string;

  declare interface GravatarUrl$Options {
    default?: string;
    rating?: "g" | "pg" | "r" | "x";
    size?: number;
  }
}
