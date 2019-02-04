declare module 'prismic-dom' {
        declare interface RichText {
asHtml(richText: any, linkResolver?: (doc: any) => string): string,
asText(richText: any, joinString?: string): string
} 
	declare interface Link {
url(link: any, linkResolver?: (doc: any) => string): string
} 
	declare export var RichText: RichText;
	declare export var Link: Link;
	declare var _default: {
RichText: RichText,
Link: Link
};
	declare export default typeof _default

    }
