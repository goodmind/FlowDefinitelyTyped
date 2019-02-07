declare module "@lingui/react" {
  import type { ComponentClass } from "react";

  import type { FormatPropsWithoutI18n } from "./createFormat";

  declare export { default as withI18n, withI18nProps } from "./withI18n";

  declare export { default as I18n } from "./I18n";

  declare export { default as I18nProvider } from "./I18nProvider";

  declare export { default as Trans } from "./Trans";

  declare export { Plural, Select, SelectOrdinal } from "./Select";

  declare export var DateFormat: ComponentClass<
    FormatPropsWithoutI18n<Date, Intl.DateTimeFormatOptions>
  >;
  declare export var NumberFormat: ComponentClass<
    FormatPropsWithoutI18n<number, Intl.NumberFormatOptions>
  >;
  declare export function i18nMark(id: string): string;
}
