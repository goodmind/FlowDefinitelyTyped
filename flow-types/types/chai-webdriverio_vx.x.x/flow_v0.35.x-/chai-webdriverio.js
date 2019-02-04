declare interface Chai$Assertion {
count: (count: number) => void,
focus: () => void,
text: (expected: string | number | RegExp) => void,
there: () => void,
value: (expected: string | number | RegExp) => void,
visible: () => void,
immediately: Chai$Assertion
} declare module 'chai-webdriverio' {
        declare function chaiWebdriverIO(
client: WebdriverIO.Client<void>,
options?: any): (chai: any, utils: any) => void

	declare module.exports: typeof chaiWebdriverIO

    }
