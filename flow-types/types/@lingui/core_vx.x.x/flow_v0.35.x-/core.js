declare module "@lingui/core" {
    declare export {
        i18n,
        setupI18n,
        Catalog,
        Catalogs,
        MessageOptions,
        LanguageData,
        I18n
    } from "./i18n";

    declare export { date, number } from "./formats";

    declare export function i18nMark(id: string): string;
}
