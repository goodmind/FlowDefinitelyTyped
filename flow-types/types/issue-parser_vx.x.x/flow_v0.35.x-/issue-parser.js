declare module 'issue-parser' {
        declare function issueParser(
authOptions?: issueParser$issueParser$Options,
extension?: issueParser$issueParser$Overrides): issueParser$issueParser$Parser

	declare type issueParser$Parser = (text: string) => issueParser$Result;

declare interface issueParser$Overrides {
actions?: {
[type: string]: $ReadOnlyArray<string>
},
delimiters?: string | $ReadOnlyArray<string>,
mentionsPrefixes?: string | $ReadOnlyArray<string>,
issuePrefixes?: string | $ReadOnlyArray<string>,
hosts?: string | $ReadOnlyArray<string>,
issueURLSegments?: string | $ReadOnlyArray<string>,
overrides?: string | $ReadOnlyArray<string>
} 

declare type issueParser$Options = "github"
| "gitlab"
| "bitbucket"
| "waffle"
| issueParser$Overrides;

declare interface issueParser$Reference {
raw: string,
slug: string | void,
prefix: string | void,
issue: string
} 

declare interface issueParser$Mention {
raw: string,
prefix: string,
user: string
} 

declare interface issueParser$Action {
raw: string,
action: string,
slug: string | void,
prefix: string | void,
issue: string
} 

declare interface issueParser$Actions {
[action: string]: $ReadOnlyArray<issueParser$Action>
} 

declare interface issueParser$Result {
refs: $ReadOnlyArray<issueParser$Reference>,
mentions: $ReadOnlyArray<issueParser$Mention>,
actions: issueParser$Actions,
allRefs: Array<issueParser$Reference | issueParser$Action>
} 
	declare module.exports: typeof issueParser

    }
