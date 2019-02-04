declare module 'antlr4-autosuggest' {
        import typeof * as antlr4 from 'antlr4';

	declare export type CasePreference = "LOWER" | "UPPER" | "BOTH";
	declare export interface AutoSuggester {
autosuggest: (inputText: string) => string[]
} 
	declare export interface Constructor<T> {
new (...args: any[]): T
} 
	declare export function autosuggester(
lexerCtr: Constructor<antlr4.Lexer>,
parserCtr: Constructor<antlr4.Parser>,
casePref?: CasePreference | null): AutoSuggester

    }
