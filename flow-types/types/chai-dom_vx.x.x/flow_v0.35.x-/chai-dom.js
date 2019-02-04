declare interface Chai$Assertion {
attr(name: string, value?: string): Chai$Assertion,
attribute(name: string, value?: string): Chai$Assertion,
class(className: string): Chai$Assertion,
id(id: string): Chai$Assertion,
html(html: string): Chai$Assertion,
text(text: string | string[]): Chai$Assertion,
value(text: string): Chai$Assertion,
empty: Chai$Assertion,
descendant(element: string | HTMLElement): Chai$Assertion,
descendants(selector: string): Chai$Assertion,
displayed: Chai$Assertion,
trimmed: Chai$Assertion
} 

declare interface Chai$Include {
text(text: string | string[]): Chai$Assertion,
html(text: string | string[]): Chai$Assertion
} 

declare interface Chai$Match {
(selector: string): Chai$Assertion
} declare module 'chai-dom' {
        declare function chaiDom(chai: any, utils: any): void

	
	declare module.exports: typeof chaiDom

    }
