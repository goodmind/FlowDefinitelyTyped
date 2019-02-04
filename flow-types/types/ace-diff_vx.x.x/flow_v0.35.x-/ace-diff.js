declare module 'ace-diff' {
        declare module.exports: typeof AceDiff

	declare class AceDiff  {
constructor(opts: AceDiff$AceDiff$AceDiffConstructorOpts): this;
getEditors(): {
left: any,
right: any
};
setOptions(options: AceDiff$AceDiff$AceDiffOpts): void;
getNumDiffs(): number;
diff(): void;
destroy(): void
}
	declare interface AceDiff$AceDiffLROpts {
content?: string | null,
mode?: string,
theme?: string,
editable?: boolean,
copyLinkEnabled?: boolean
} 

declare type AceDiff$AceDiffConstructorOpts = {
element: string | HTMLElement,
left: AceDiff$AceDiffLROpts,
right: AceDiff$AceDiffLROpts
} & AceDiff$AceDiffOpts


declare interface AceDiff$AceDiffOpts {
mode?: string,
theme?: string,
diffGranularity?: "specific" | "broad",
showDiffs?: boolean,
showConnectors?: boolean,
maxDiffs?: number,
left?: AceDiff$AceDiffLROpts,
right?: AceDiff$AceDiffLROpts,
classes?: {
diff: string,
connector: string,
newCodeConnectorLinkContent: string,
deletedCodeConnectorLinkContent: string
}
} 
    }
