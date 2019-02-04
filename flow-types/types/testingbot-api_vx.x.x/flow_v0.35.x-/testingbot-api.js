declare module 'testingbot-api' {
        declare type TestingBot$BrowserType = "webdriver" | "rc";

declare type TestingBot$TestSuccess = true | false | 0 | 1;

declare interface TestingBot$TestingBotOptions {
api_key?: string,
api_secret?: string
} 

declare interface TestingBot$UserInfo {
first_name?: string,
last_name?: string,
email?: string
} 

declare interface TestingBot$TestData {
"test[success]"?: TestingBot$TestSuccess,
"test[status_message]"?: string,
"test[name]"?: string,
"test[extra]"?: string,
build?: string,
groups?: string
} 

declare interface TestingBot$TestLabData {
"test[url]"?: string,
"test[name]"?: string,
"test[cron]"?: string,
"test[enabled]"?: boolean
} 

declare interface TestingBot$TestingBot {
getTestDetails(testID: string, callback?: (error: any, responseBody: any) => any): void,
getBrowsers(
callback?: (error: any, responseBody: any) => any,
type?: TestingBot$BrowserType): void,
getLabTestDetails(testID: string, callback?: (error: any, responseBody: any) => any): void,
getTunnel(callback?: (error: any, responseBody: any) => any): void,
getUserInfo(callback?: (error: any, responseBody: any) => any): void,
getTests(
callback?: (error: any, responseBody: any) => any,
offset?: number,
limit?: number): void,
getLabTests(
callback?: (error: any, responseBody: any) => any,
offset?: number,
limit?: number): void,
updateUserInfo(
data: TestingBot$UserInfo,
callback?: (error: any, responseBody: any) => any): void,
updateTest(
data: TestingBot$TestData,
testID: string,
callback?: (error: any, responseBody: any) => any): void,
updateLabTest(
data: TestingBot$TestLabData,
testID: string,
callback?: (error: any, responseBody: any) => any): void,
deleteTest(testID: string, callback?: (error: any, responseBody: any) => any): void,
deleteLabTest(testID: string, callback?: (error: any, responseBody: any) => any): void
} 
	declare var TestingBot$TestingBot: {
new (
options?: TestingBot$TestingBot.TestingBot$TestingBotOptions): TestingBot$TestingBot.TestingBot$TestingBot
};
	declare module.exports: typeof TestingBot$TestingBot

    }
