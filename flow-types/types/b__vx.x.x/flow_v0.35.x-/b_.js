declare module "b_" {
    declare interface Options {
        tailSpace?: string;
        elementSeparator?: string;
        modSeparator?: string;
        modValueSeparator?: string;
        classSeparator?: string;
        isFullModifier?: boolean;
        isFullBoolValue?: boolean;
    }
    declare interface Mods {
        [name: string]: any;
    }
    declare interface Formatter {
        (block: string, mods?: Mods): string;
        (block: string, elem: string, mods?: Mods): string;
        with(block: string): BlockFormatter;
        with(block: string, elem: string): ElemFormatter;
        lock(block: string): BlockFormatter;
        lock(block: string, elem: string): ElemFormatter;
        B(options: Options): Formatter;
    }
    declare interface BlockFormatter {
        (mods?: Mods): string;
        (elem: string, mods?: Mods): string;
    }
    declare type ElemFormatter = (mods?: Mods) => string;
    declare var formatter: Formatter;
    declare module.exports: typeof formatter;
}
