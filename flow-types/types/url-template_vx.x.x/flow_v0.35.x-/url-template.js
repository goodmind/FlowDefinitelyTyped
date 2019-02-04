declare module 'url-template' {
        declare var urlTemplate: UrlTemplate$UrlTemplate$TemplateParser;
	declare module.exports: typeof urlTemplate

	declare interface UrlTemplate$TemplateParser {
parse(template: string): UrlTemplate$Template
} 

declare interface UrlTemplate$Template {
expand(parameters: any): string
} 
    }
