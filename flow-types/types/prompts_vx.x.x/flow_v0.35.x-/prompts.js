declare module 'prompts' {
        declare module.exports: typeof prompts

	declare function prompts<T: string>(
questions: prompts$prompts$PromptObject<T> | Array<prompts$prompts$PromptObject<T>>,
options?: prompts$prompts$Options): Promise<prompts$prompts$Answers<T>>

	
      declare var npm$namespace$prompts: {
        inject: typeof prompts$inject,
        prompt: typeof prompts$prompt,
      }
declare var prompts$prompt: any;

declare function prompts$inject(obj: any): void



      declare var npm$namespace$inject: {
        
        prototype: typeof inject$prototype,
      }
declare var inject$prototype: {};


      declare var npm$namespace$prompts: {
        autocomplete: typeof prompts$autocomplete,
confirm: typeof prompts$confirm,
invisible: typeof prompts$invisible,
list: typeof prompts$list,
multiselect: typeof prompts$multiselect,
number: typeof prompts$number,
password: typeof prompts$password,
select: typeof prompts$select,
text: typeof prompts$text,
toggle: typeof prompts$toggle,
        
      }
declare function prompts$autocomplete(args: prompts$PromptObject): any


declare function prompts$confirm(args: prompts$PromptObject): void


declare function prompts$invisible(args: prompts$PromptObject): any


declare function prompts$list(args: prompts$PromptObject): any


declare function prompts$multiselect(args: prompts$PromptObject): any


declare function prompts$number(args: prompts$PromptObject): void


declare function prompts$password(args: prompts$PromptObject): any


declare function prompts$select(args: prompts$PromptObject): void


declare function prompts$text(args: prompts$PromptObject): void


declare function prompts$toggle(args: prompts$PromptObject): void


declare interface prompts$Choice {
title: string,
value: string,
disable?: boolean
} 

declare interface prompts$Options {
onSubmit?: (prompts$prompt: prompts$PromptObject, answer: any, answers: any[]) => void,
onCancel?: (prompts$prompt: prompts$PromptObject, answers: any) => void
} 

declare interface prompts$PromptObject<T: string> {
type: prompts$ValueOrFunc<prompts$PromptType> | prompts$Falsy,
name: prompts$ValueOrFunc<T>,
message?: prompts$ValueOrFunc<string>,
initial?: string | number | boolean,
style?: string,
format?: prompts$PrevCaller<T, void>,
validate?: prompts$PrevCaller<T, void>,
onState?: prompts$PrevCaller<T, void>,
min?: number,
max?: number,
float?: boolean,
round?: number,
increment?: number,
seperator?: string,
active?: string,
inactive?: string,
choices?: prompts$Choice[],
hint?: string,
suggest?: ((prev: any, values: any, prompts$prompt: prompts$PromptObject) => void),
limit?: number
} 

declare type prompts$Answers<T: string> = $ObjMapi<{[k: T]: any}, <id>(id) => any>;

declare type prompts$PrevCaller<T: string, R> = (
prev: any,
values: prompts$Answers<T>,
prompts$prompt: prompts$PromptObject) => R;

declare type prompts$Falsy = false | null | void;

declare type prompts$PromptType = "text"
| "password"
| "invisible"
| "number"
| "confirm"
| "list"
| "toggle"
| "select"
| "multiselect"
| "autocomplete";

declare type prompts$ValueOrFunc<T: string> = T | prompts$PrevCaller<T>;
    }
