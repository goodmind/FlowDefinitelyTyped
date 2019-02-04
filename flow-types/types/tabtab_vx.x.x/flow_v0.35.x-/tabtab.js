declare module 'tabtab' {
        
/**
 * Install option
 * @param name is a name of the cli command
 * @param completer Somethings, you want to complete another program that's where the `completer` option might come handy.
 */
declare export type InstallOption = {
name: string,
completer: string
};
	
/**
 * Uninstall option
 * @param name is a name of the cli command
 */
declare export type UninstallOption = {
name: string
};
	
/**
 * This type represent object (Json object)
 */
declare export type Json = {
[key: string]: string
};
	
/**
 * Tabtab environment data that return from {@link parseEnv} method
 * @param complete A Boolean indicating whether we act in "plumbing mode" or not
 * @param words The Number of words in the completed line
 * @param point A Number indicating cursor position
 * @param line The String input line
 * @param partial The String part of line preceding cursor position
 * @param last The last String word of the line
 * @param lastPartial The last word String of partial
 * @param prev The String word preceding last
 */
declare export type TabtabEnv = {

/**
 * A Boolean indicating whether we act in "plumbing mode" or not
 */
complete: boolean,

/**
 * The Number of words in the completed line
 */
words: number,

/**
 * A Number indicating cursor position
 */
point: number,

/**
 * The String input line
 */
line: string,

/**
 * The String part of line preceding cursor position
 */
partial: string,

/**
 * The last String word of the line
 */
last: string,

/**
 * The last word String of partial
 */
lastPartial: string,

/**
 * The String word preceding last
 */
prev: string
};
	
/**
 * this is a item to show when completion enable,
 * @param name usually is a subcommand name or option name
 * @param description this is a optional description of the completion
 */
declare export type CompleteItem = {
name: string,
description?: string
};
	declare export type CompleteItemOrString = string | CompleteItem;
	
/**
 * Install and enable completion on user system.
 * @param option install option
 */
declare export function install(option: InstallOption): Promise<void>

	
/**
 * Uninstall and remove all completion on user system
 * @param option uninstall option
 */
declare export function uninstall(option: UninstallOption): Promise<void>

	
/**
 * Public: Main utility to extract information from command line arguments and
 * Environment variables, namely COMP args in "plumbing" mode.
 * @param env environment (usually will be process.env)
 * @returns env is a object of completion environment
 * @example const env = tabtab.parseEnv(process.env);
 */
declare export function parseEnv(env: Json): TabtabEnv

	
/**
 * Helper to normalize String and Objects when logging out.
 */
declare export function completionItem(item: CompleteItemOrString): CompleteItem

	
/**
 * Main logging utility to pass completion items.
 * This is simply an helper to log to stdout with each item separated by a new
 * line.
 * 
 * Bash needs in addition to filter out the args for the completion to work
 * (zsh, fish don't need this).
 * @param args Strings or Objects with name and description property.
 */
declare export function log(args: string[] | CompleteItem[] | CompleteItemOrString[]): void

    }
