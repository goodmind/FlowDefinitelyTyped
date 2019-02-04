declare module 'prompt-sync' {
        declare export interface PromptSync$Prompt {
(opts: PromptSync$Option): string,
(ask: string): string,
(ask: string, opts: PromptSync$Option): string,
(ask: string, value: string): string,

/**
 * prompt -- sync function for reading user input from stdin
 * @param {String} ask opening question/statement to prompt for
 * @param {String} value initial value for the prompt
 * @param {Object} opts {
echo: set to a character to be echoed, default is '*'. Use '' for no echo
value: {String} initial value for the prompt
ask: {String} opening question/statement to prompt for, does not override ask param
autocomplete: {StringArray} function({String})
}
 * @returns {string} Returns the string input or (if sigint === false)
null if user terminates with a ^C
 */
(ask: string, value: string, opts: PromptSync$Option): string,
hide(ask: string): string
} 

declare export interface PromptSync$Option {
ask?: string,
echo?: string,
autocomplete?: PromptSync$AutoCompleteFunction,
value?: string
} 

declare export interface PromptSync$Config {
sigint?: boolean,
autocomplete?: PromptSync$AutoCompleteFunction,
history?: PromptSync$History
} 

declare export interface PromptSync$History {
atStart(): boolean,
atPenultimate(): boolean,
pastEnd(): boolean,
atEnd(): boolean,
prev(): string,
next(): string,
reset(): void,
push(str: string): void,
save(): void
} 

declare export interface PromptSync$AutoCompleteFunction {
(input: string): string[]
} 
	
/**
 * create -- sync function for reading user input from stdin
 * @param {Object} config {
sigint: {Boolean} exit on ^C
autocomplete: {StringArray} function({String})
history: {String} a history control object (see `prompt-sync-history`)
}
 * @returns {Function} prompt function
 */
declare function PromptSync(config?: PromptSync$PromptSync$Config): PromptSync$PromptSync$Prompt

	declare module.exports: typeof PromptSync

    }
