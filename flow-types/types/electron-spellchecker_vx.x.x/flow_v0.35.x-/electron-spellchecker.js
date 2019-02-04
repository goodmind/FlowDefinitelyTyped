declare module 'electron-spellchecker' {
        declare export type ContextMenuFormatter = (options: {
word: string
}) => string;
	declare export class SpellCheckHandler  {
currentSpellchecker: this;
attachToInput(): void;
autoUnloadDictionariesOnBlur(): void;
provideHintText(inputText: string): void;
switchLanguage(language: string): void;
getCorrectionsForMisspelling(misspelledWord: string): Promise<string[]>;
addToDictionary(text: string): void;
unsubscribe(): void
}
	declare export class ContextMenuBuilder  {
constructor(spellCheckHandler?: SpellCheckHandler, target?: Electron.BrowserWindow | Electron.WebviewTag | null, debugMode?: boolean, processMenu?: (menu: Electron.Menu) => Electron.Menu): this;
setAlternateStringFormatter(formatter: {
[key: string]: ContextMenuFormatter
}): void;
showPopupMenu: (info: Electron.ContextMenuParams) => void
}
	declare export class ContextMenuListener  {
constructor(handler: (info: Electron.ContextMenuParams) => void, target?: Electron.BrowserWindow | Electron.WebviewTag | null): this;
unsubscribe(): void
}
    }
