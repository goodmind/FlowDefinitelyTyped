declare module 'validatorjs' {
        declare interface Validator$TypeCheckingRule {
[attribute: string]: Array<any>
} 

declare interface Validator$Rules {
[attribute: string]: string | Array<string | Validator$TypeCheckingRule> | Validator$Rules
} 

declare interface Validator$ValidationErrors {
[field: string]: Array<string>
} 

declare interface Validator$ErrorMessages {
[key: string]: string | Validator$ErrorMessages
} 

declare interface Validator$AttributeNames {
[attribute: string]: string
} 

declare type Validator$AttributeFormatter = (attribute: any) => any;

declare interface Validator$Errors {
errors: Validator$ValidationErrors,
add(attribute: string, message: string): void,
get(attribute: string): Array<string>,
first(attribute: string): string | false,
all(): Validator$ValidationErrors,
has(attribute: string): boolean
} 

declare type Validator$RegisterCallback = (value: string | number | boolean, args: string, attribute: string) => boolean;

declare type Validator$RegisterAsyncCallback = (
value: string | number | boolean,
args: string,
attribute: string,
passes: (success?: boolean, message?: string) => void) => void;

declare interface Validator$ValidatorStatic {
new <A>(
data: A,
rules: Validator$Rules,
customMessages?: Validator$ErrorMessages): Validator$Validator<A>,
setMessages(lang: string, messages: Validator$ErrorMessages): any,
getMessages(lang: string): Validator$ErrorMessages,
useLang(lang: string): void,
getDefaultLang(): string,
setAttributeFormatter(func: Validator$AttributeFormatter): void,
stopOnError(attributes: boolean | Array<string>): void,
register(name: string, fn: Validator$RegisterCallback, message?: string): void,
registerAsync(name: string, fn: Validator$RegisterAsyncCallback, message: string): void
} 

declare interface Validator$Validator<A> {
lang: string,
input: A,
messages: Validator$ErrorMessages,
errors: Validator$Errors,
errorCount: number,
hasAsync: boolean,
rules: Validator$Rules,
numericRules: Array<string>,
attributeFormatter: Validator$AttributeFormatter,
check(): boolean,
checkAsync(passes?: Function, fails?: Function): void,
setAttributeNames(attributes: Validator$AttributeNames): void,
setAttributeFormatter(func: Validator$AttributeFormatter): void,
getRule(name: string): Function,
stopOnError(passes?: Function): boolean | void,
passes(passes?: Function): boolean | void,
fails(fails?: Function): boolean | void
} 
	declare var Validator$Validator: Validator$Validator.Validator$ValidatorStatic;
	declare module.exports: typeof Validator$Validator

    }
