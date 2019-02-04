declare module 'swag' {
        declare interface SwagStatic {
registerHelpers(handlebars: typeof Handlebars): void
} 
	declare var Swag: SwagStatic;
	declare module.exports: typeof Swag

    }
