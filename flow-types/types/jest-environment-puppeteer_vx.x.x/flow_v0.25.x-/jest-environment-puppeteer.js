declare module "global" {
  declare var browser: Browser;
  declare var page: Page;
}
declare module "jest-environment-puppeteer" {
  import type { Browser, Page } from "puppeteer";

  declare export {};
}
