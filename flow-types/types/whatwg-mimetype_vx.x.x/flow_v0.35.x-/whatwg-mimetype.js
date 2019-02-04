declare module 'whatwg-mimetype' {
        declare module.exports: typeof MIMEType

	declare class MIMEType  {
type: string;
subtype: string;
essence: string;
parameters: Map<string, string>;
static parse(s: string): MIMEType | null;
constructor(s: string): this;
isHTML(): boolean;
isXML(): boolean;
isJavaScript(opts?: {
allowParameters?: boolean
}): boolean
}
    }
