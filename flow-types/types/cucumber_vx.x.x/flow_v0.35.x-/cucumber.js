declare module 'cucumber' {
        declare export  class Status {
  constructor(...args: empty): mixed;
static +AMBIGUOUS: Class<Status__AMBIGUOUS> & Status__AMBIGUOUS & "ambiguous";// "ambiguous"
static +FAILED: Class<Status__FAILED> & Status__FAILED & "failed";// "failed"
static +PASSED: Class<Status__PASSED> & Status__PASSED & "passed";// "passed"
static +PENDING: Class<Status__PENDING> & Status__PENDING & "pending";// "pending"
static +SKIPPED: Class<Status__SKIPPED> & Status__SKIPPED & "skipped";// "skipped"
static +UNDEFINED: Class<Status__UNDEFINED> & Status__UNDEFINED & "undefined";// "undefined"

}

declare class Status__AMBIGUOUS mixins Status {}
declare class Status__FAILED mixins Status {}
declare class Status__PASSED mixins Status {}
declare class Status__PENDING mixins Status {}
declare class Status__SKIPPED mixins Status {}
declare class Status__UNDEFINED mixins Status {}

	declare export interface World {
[key: string]: any
} 
	declare export interface CallbackStepDefinition {
pending(): PromiseLike<any>,
(error?: any, pending?: string): void
} 
	declare export interface TableDefinition {
raw(): string[][],
rows(): string[][],
rowsHash(): {
[firstCol: string]: string
},
hashes(): Array<{
[colName: string]: string
}>
} 
	declare export type StepDefinitionCode = (...stepArgs: any[]) => any;
	declare export interface StepDefinitionOptions {
timeout?: number
} 
	declare export interface StepDefinitions {
Given(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void,
Given(pattern: RegExp | string, code: StepDefinitionCode): void,
When(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void,
When(pattern: RegExp | string, code: StepDefinitionCode): void,
Then(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void,
Then(pattern: RegExp | string, code: StepDefinitionCode): void,
setDefaultTimeout(time: number): void
} 
	declare export function After(code: HookCode): void

	declare export function After(options: HookOptions | string, code: HookCode): void

	declare export function AfterAll(code: GlobalHookCode): void

	declare export function AfterAll(options: HookOptions | string, code: GlobalHookCode): void

	declare export function Before(code: HookCode): void

	declare export function Before(options: HookOptions | string, code: HookCode): void

	declare export function BeforeAll(code: GlobalHookCode): void

	declare export function BeforeAll(options: HookOptions | string, code: GlobalHookCode): void

	declare export function defineParameterType(transform: Transform): void

	declare export function defineStep(pattern: RegExp | string, code: StepDefinitionCode): void

	declare export function defineStep(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void

	declare export function Given(pattern: RegExp | string, code: StepDefinitionCode): void

	declare export function Given(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void

	declare export function setDefaultTimeout(time: number): void

	declare export function setDefinitionFunctionWrapper(fn: () => void, options?: {
[key: string]: any
}): void

	declare export function setWorldConstructor(
world: ((init: {
attach: Function,
parameters: {
[key: string]: any
}
}) => void) | {}): void

	declare export function Then(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void

	declare export function Then(pattern: RegExp | string, code: StepDefinitionCode): void

	declare export function When(
pattern: RegExp | string,
options: StepDefinitionOptions,
code: StepDefinitionCode): void

	declare export function When(pattern: RegExp | string, code: StepDefinitionCode): void

	declare export interface HookScenarioResult {
sourceLocation: SourceLocation,
result: ScenarioResult,
pickle: pickle$pickle$Pickle
} 
	declare export interface SourceLocation {
line: number,
uri: string
} 
	declare export interface ScenarioResult {
duration: number,
status: Status
} 
	declare interface pickle$Pickle {
language: string,
locations: pickle$Location[],
name: string,
steps: pickle$Step[],
tags: pickle$Tag[]
} 

declare interface pickle$Location {
column: number,
line: number
} 

declare interface pickle$Step {
arguments: pickle$Argument[],
locations: pickle$Location[],
text: string
} 

declare interface pickle$Argument {
rows: pickle$Cell[]
} 

declare interface pickle$Cell {
location: pickle$Location,
value: string
} 

declare interface pickle$Tag {
name: string,
location: pickle$Location
} 
	declare export type HookCode = (scenario: HookScenarioResult, callback?: CallbackStepDefinition) => void;
	declare export type GlobalHookCode = (callback?: CallbackStepDefinition) => void;
	declare export interface Transform {
regexp: RegExp,
transformer(...arg: string[]): any,
useForSnippets?: boolean,
preferForRegexpMatch?: boolean,
name?: string,
typeName?: string
} 
	declare export interface HookOptions {
timeout?: number,
tags?: any
} 
	declare export interface Hooks {
Before(code: HookCode): void,
Before(options: HookOptions | string, code: HookCode): void,
BeforeAll(code: GlobalHookCode): void,
BeforeAll(options: HookOptions | string, code: GlobalHookCode): void,
After(code: HookCode): void,
After(options: HookOptions | string, code: HookCode): void,
AfterAll(code: GlobalHookCode): void,
AfterAll(options: HookOptions | string, code: GlobalHookCode): void,
setDefaultTimeout(time: number): void,
setWorldConstructor(
world: ((init: {
attach: Function,
parameters: {
[key: string]: any
}
}) => void) | {}): void,
defineParameterType(transform: Transform): void
} 
	declare export class EventListener  {
hear(event: events$events$Event, callback: () => void): void;
hasHandlerForEvent(event: events$events$Event): boolean;
buildHandlerNameForEvent(event: events$events$Event): string;
getHandlerForEvent(event: events$events$Event): EventHook;
buildHandlerName(shortName: string): string;
setHandlerForEvent(shortName: string, handler: EventListener): void
}
	declare export function Listener(): EventListener

	declare interface events$Event {
name: string,
data: any
} 

declare interface events$EventPayload {} 

declare type events$FeaturesPayload = {
getFeatures(): any[]
} & events$EventPayload


declare type events$FeaturesResultPayload = {
duration: number,
scenarioResults: any[],
success: boolean,
stepsResults: any[],
strict: boolean
} & events$EventPayload


declare type events$FeaturePayload = {
description: string,
keyword: string,
line: number,
name: string,
tags: pickle$Tag[],
uri: string,
scenarios: Scenario[]
} & events$EventPayload


declare type events$ScenarioPayload = {
feature: Feature,
exception: Error,
keyword: string,
lines: number[],
name: string,
tags: pickle$Tag[],
uri: string,
line: number,
description: string,
steps: pickle$Step[]
} & events$EventPayload


declare type events$ScenarioResultPayload = {
duration: any,
failureException: Error,
scenario: Scenario,
status: Status,
stepResults: any[]
} & events$EventPayload


declare type events$StepPayload = {
arguments: any,
line: number,
name: string,
scenario: Scenario,
uri: string,
isBackground: boolean,
keyword: string,
keywordType: string
} & events$EventPayload


declare type events$StepResultPayload = {
ambiguousStepDefinitions: any,
attachments: any[],
duration: any,
failureException: Error,
step: pickle$Step,
stepDefinition: StepDefinition,
status: Status
} & events$EventPayload

	declare export interface StepDefinition {
code: Function,
line: number,
options: {},
pattern: any,
uri: string
} 
	declare export interface Tag {
name: string,
line: number
} 
	declare export interface Step {
arguments: any,
line: number,
name: string,
scenario: Scenario,
uri: string,
isBackground: boolean,
keyword: string,
keywordType: string
} 
	declare export interface Scenario {
feature: Feature,
exception: Error,
keyword: string,
lines: number[],
name: string,
tags: pickle$Tag[],
uri: string,
line: number,
description: string,
steps: pickle$Step[]
} 
	declare export interface Feature {
description: string,
keyword: string,
line: number,
name: string,
tags: pickle$Tag[],
uri: string,
scenarios: Scenario[]
} 
	declare export type EventHook = (event: events$events$Event, callback?: () => void) => void;
	declare export type SupportCodeConsumer = (stepDefinitions: StepDefinitions & Hooks) => void;
	declare export function defineSupportCode(consumer: SupportCodeConsumer): void

	declare export function getSupportCodeFns(): SupportCodeConsumer[]

	declare export function clearSupportCodeFns(): void

	declare export class Formatter  {
constructor(options?: any): this;
log(data: any): void
}
	declare export class SummaryFormatter mixins Formatter {
indent(text: string, numberOfSpaces: number): any
}
	declare export class PrettyFormatter mixins SummaryFormatter {
formatTags(tags: pickle$Tag[]): any;
logIndented(text: string, level: number): void;
logStepResult(stepResult: any): void
}
	declare export class ProgressFormatter mixins SummaryFormatter {}
	declare export class RerunFormatter mixins Formatter {}
	declare export class SnippetsFormatter mixins Formatter {}
	declare export class UsageFormatter mixins Formatter {}
	declare export class UsageJsonFormatter mixins Formatter {}
	declare export class JsonFormatter mixins Formatter {}
    }
