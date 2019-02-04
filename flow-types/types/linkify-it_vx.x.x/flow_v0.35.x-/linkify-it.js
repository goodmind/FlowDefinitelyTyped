declare module 'linkify-it' {
        declare var LinkifyIt$LinkifyIt: {
(schemas?: LinkifyIt$LinkifyIt.LinkifyIt$SchemaRules | LinkifyIt$LinkifyIt.LinkifyIt$Options, options?: LinkifyIt$LinkifyIt.LinkifyIt$Options): LinkifyIt$LinkifyIt.LinkifyIt$LinkifyIt,
new (
schemas?: LinkifyIt$LinkifyIt.LinkifyIt$SchemaRules | LinkifyIt$LinkifyIt.LinkifyIt$Options,
options?: LinkifyIt$LinkifyIt.LinkifyIt$Options): LinkifyIt$LinkifyIt.LinkifyIt$LinkifyIt
};
	declare type LinkifyIt$Validate = (text: string, pos: number, self: LinkifyIt$LinkifyIt) => number;

declare interface LinkifyIt$FullRule {
validate: string | RegExp | LinkifyIt$Validate,
normalize(match: string): string
} 

declare type LinkifyIt$Rule = string | LinkifyIt$FullRule;

declare interface LinkifyIt$SchemaRules {
[schema: string]: LinkifyIt$Rule
} 

declare interface LinkifyIt$Options {
fuzzyLink?: boolean,
fuzzyIP?: boolean,
fuzzyEmail?: boolean
} 

declare interface LinkifyIt$Match {
index: number,
lastIndex: number,
raw: string,
schema: string,
text: string,
url: string
} 

declare interface LinkifyIt$LinkifyIt {
add(schema: string, rule: LinkifyIt$Rule): LinkifyIt$LinkifyIt,
match(text: string): LinkifyIt$Match[] | null,
normalize(raw: string): string,
pretest(text: string): boolean,
set(options: LinkifyIt$Options): LinkifyIt$LinkifyIt,
test(text: string): boolean,
testSchemaAt(text: string, schemaName: string, pos: number): number,
tlds(list: string | string[], keepOld?: boolean): LinkifyIt$LinkifyIt
} 
	declare module.exports: typeof LinkifyIt$LinkifyIt

    }
