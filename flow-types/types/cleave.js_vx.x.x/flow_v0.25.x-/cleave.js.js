declare module "cleave.js" {
  import type { CleaveOptions } from "./options";

  declare class Cleave {
    constructor(selector: string | HTMLElement, options: CleaveOptions): this;
    getRawValue(): string;
    setRawValue(value: string): void;
    getFormattedValue(): string;
    getISOFormatDate(): string;
    destroy(): void;
    setPhoneRegionCode(regionCode: string): void;
  }
  declare module.exports: typeof Cleave;
}
