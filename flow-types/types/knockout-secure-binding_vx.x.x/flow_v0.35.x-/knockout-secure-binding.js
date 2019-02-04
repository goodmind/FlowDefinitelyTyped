declare interface KnockoutSecureBindingOptions {
attribute?: string,
globals?: any,
bindings?: KnockoutBindingHandlers,
noVirtualElements?: boolean
} declare type KnockoutSecureBindingProvider = {
new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider
} & KnockoutBindingProvider
declare interface KnockoutStatic {
secureBindingsProvider: {
new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider
}
} declare module 'knockout-secure-binding' {
        declare var klass: {
new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider
};
	declare module.exports: typeof klass

    }
