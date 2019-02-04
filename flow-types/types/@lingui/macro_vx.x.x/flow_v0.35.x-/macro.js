declare module "@lingui/macro" {
    import type { ComponentClass } from "react";

    import type { FormatPropsWithoutI18n } from "./createFormat";

    import type { SelectProps, PluralProps } from "./select";

    declare export function t(
        strings: TemplateStringsArray,
        ...values: any[]
    ): string;

    declare export function t(
        id: string
    ): (strings: TemplateStringsArray, ...values: any[]) => string;

    declare export function select(config: SelectProps): string;

    declare export function select(id: string, config: SelectProps): string;

    declare export function plural(config: PluralProps): string;

    declare export function plural(id: string, config: PluralProps): string;

    declare export function selectOrdinal(config: PluralProps): string;

    declare export function selectOrdinal(
        id: string,
        config: PluralProps
    ): string;

    declare export function date(
        value: Date,
        format?: Intl.DateTimeFormatOptions
    ): string;

    declare export function number(
        value: number,
        format?: Intl.NumberFormatOptions
    ): string;

    declare export { Trans } from "./Trans";

    declare export { Plural, Select, SelectOrdinal } from "./ReactSelect";

    declare export var DateFormat: ComponentClass<
        FormatPropsWithoutI18n<Date, Intl.DateTimeFormatOptions>
    >;
    declare export var NumberFormat: ComponentClass<
        FormatPropsWithoutI18n<number, Intl.NumberFormatOptions>
    >;
}
