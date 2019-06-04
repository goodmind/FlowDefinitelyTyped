declare module "easydate" {
  declare export default typeof easydate;

  declare interface DateConfig {
    setDate?: string;
    timeZone?: "utc" | "local";
    adjust?: boolean;
  }
  declare function easydate(
    pattern: string,
    config?: DateConfig | string
  ): string;
}
