declare module 'create-html-element' {
        declare module.exports: typeof createHtmlElement

	declare function createHtmlElement(
options?: createHtmlElement$createHtmlElement$OptionsWithoutTagName): HTMLDivElement

	declare function createHtmlElement<K: $Keys<HTMLElementTagNameMap>>(
options: createHtmlElement$createHtmlElement$Options<K>): $ElementType<HTMLElementTagNameMap, K>

	declare function createHtmlElement(options: createHtmlElement$createHtmlElement$Options<string>): HTMLElement

	declare type createHtmlElement$Without<T, U> = $ObjMapi<{[k: Exclude<$Keys<T>, $Keys<U>>]: any}, <P>(P) => empty>;

declare type createHtmlElement$XOR<T, U> = "There was Conditional Type, use $Call utility type";

declare interface createHtmlElement$AttributesOptions {
attributes?: {
[key: string]: string | boolean | number | string[]
}
} 

declare interface createHtmlElement$HtmlOptions {
html?: string
} 

declare interface createHtmlElement$TextOptions {
text?: string
} 

declare type createHtmlElement$OptionsWithoutTagName = createHtmlElement$AttributesOptions & createHtmlElement$XOR<createHtmlElement$HtmlOptions, createHtmlElement$TextOptions>;

declare type createHtmlElement$OptionsWithTagName<K> = {
name: K
} & createHtmlElement$AttributesOptions


declare type createHtmlElement$Options<K> = createHtmlElement$OptionsWithTagName<K> & createHtmlElement$XOR<createHtmlElement$HtmlOptions, createHtmlElement$TextOptions>;
    }
