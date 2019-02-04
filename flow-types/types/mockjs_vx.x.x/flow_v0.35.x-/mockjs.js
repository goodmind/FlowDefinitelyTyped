declare module 'mockjs' {
        
      declare var npm$namespace$mockjs: {
        
        mock: typeof mockjs$mock,
setup: typeof mockjs$setup,
Random: typeof mockjs$Random,
valid: typeof mockjs$valid,
toJSONSchema: typeof mockjs$toJSONSchema,
version: typeof mockjs$version,
      }
declare type mockjs$N = number;

declare type mockjs$S = string;

declare type mockjs$B = boolean;

declare interface mockjs$Mockjs {
mock: mockjs$MockjsMock,
setup: mockjs$MockjsSetup,
Random: mockjs$MockjsRandom,
valid: mockjs$MockjsValid,
toJSONSchema: mockjs$MockjsToJSONSchema,
version: number
} 

declare interface mockjs$MockjsMock {
(rurl: mockjs$S | RegExp, rtype: mockjs$S, template: any): mockjs$Mockjs,
(rurl: mockjs$S | RegExp, template: any): mockjs$Mockjs,
(template: any): any
} 

declare interface mockjs$MockjsSetupSettings {
timeout?: number | mockjs$S
} 

declare type mockjs$MockjsSetup = (settings: mockjs$MockjsSetupSettings) => void;

declare interface mockjs$MockjsRandomBasic {
boolean(min: mockjs$N, max: mockjs$N, current: mockjs$B): mockjs$B,
boolean(): mockjs$B,
natural(min?: mockjs$N, max?: mockjs$N): mockjs$N,
integer(min?: mockjs$N, max?: mockjs$N): mockjs$N,
float(min?: mockjs$N, max?: mockjs$N, dmin?: mockjs$N, dmax?: mockjs$N): mockjs$N,
character(pool: "lower" | "upper" | "number" | "symbol"): mockjs$S,
character(pool?: mockjs$S): mockjs$S,
string(pool?: mockjs$S | mockjs$N, min?: mockjs$N, max?: mockjs$N): mockjs$S,
range(start?: mockjs$N, stop?: mockjs$N, step?: mockjs$N): mockjs$N
} 

declare type mockjs$RandomDateUtilString = "year"
| "month"
| "week"
| "day"
| "hour"
| "minute"
| "second"
| "week";

declare interface mockjs$MockjsRandomDate {
date(format?: mockjs$S): mockjs$S,
time(format?: mockjs$S): mockjs$S,
datetime(format?: mockjs$S): mockjs$S,
now(util: mockjs$RandomDateUtilString, format?: mockjs$S): mockjs$S,
mow(format?: mockjs$S): mockjs$S
} 

declare type mockjs$RandomImageFormatString = "png" | "gif" | "jpg";

declare interface mockjs$MockjsRandomImage {
image(
size?: mockjs$S,
background?: mockjs$S,
foreground?: mockjs$S,
format?: mockjs$RandomImageFormatString | mockjs$S,
text?: mockjs$S): mockjs$S,
dataImage(size?: mockjs$S, text?: mockjs$S): mockjs$S
} 

declare interface mockjs$MockjsRandomColor {
color(): mockjs$S,
hex(): mockjs$S,
rgb(): mockjs$S,
rgba(): mockjs$S,
hsl(): mockjs$S
} 

declare interface mockjs$MockjsRandomText {
paragraph(min?: mockjs$N, max?: mockjs$N): mockjs$S,
cparagraph(min?: mockjs$N, max?: mockjs$N): mockjs$S,
sentence(min?: mockjs$N, max?: mockjs$N): mockjs$S,
csentence(min?: mockjs$N, max?: mockjs$N): mockjs$S,
word(min?: mockjs$N, max?: mockjs$N): mockjs$S,
cword(pool?: mockjs$S | mockjs$N, min?: mockjs$N, max?: mockjs$N): mockjs$S,
title(min?: mockjs$N, max?: mockjs$N): mockjs$S,
ctitle(min?: mockjs$N, max?: mockjs$N): mockjs$S
} 

declare interface mockjs$MockjsRandomName {
first(): mockjs$S,
last(): mockjs$S,
name(middle?: mockjs$B): mockjs$S,
cfirst(): mockjs$S,
clast(): mockjs$S,
cname(): mockjs$S
} 

declare type mockjs$RandomWebProtocal = "http"
| "ftp"
| "gopher"
| "mailto"
| "mid"
| "cid"
| "news"
| "nntp"
| "prospero"
| "telnet"
| "rlogin"
| "tn3270"
| "wais";

declare interface mockjs$MockjsRandomWeb {
url(protocol?: mockjs$S, host?: mockjs$S): mockjs$S,
protocal(): mockjs$RandomWebProtocal,
domain(): mockjs$S,
dtl(): mockjs$S,
email(domain?: mockjs$S): mockjs$S,
ip(): mockjs$S
} 

declare interface mockjs$MockjsRandomAddress {
region(): mockjs$S,
province(): mockjs$S,
city(prefix?: mockjs$B): mockjs$S,
county(prefix?: mockjs$B): mockjs$S,
zip(prefix?: mockjs$B): mockjs$S
} 

declare interface mockjs$MockjsRandomHelper {
capitalize(word: mockjs$S): mockjs$S,
upper(str: mockjs$S): mockjs$S,
lower(str: mockjs$S): mockjs$S,
pick(arr: any[]): any,
shuffle(arr: any[]): any[]
} 

declare interface mockjs$MockjsRandomMiscellaneous {
guid(): mockjs$S,
id(): mockjs$S,
increment(step?: mockjs$N): mockjs$N
} 

declare type mockjs$MockjsRandom = {} & mockjs$MockjsRandomBasic & mockjs$MockjsRandomDate & mockjs$MockjsRandomImage & mockjs$MockjsRandomColor & mockjs$MockjsRandomAddress & mockjs$MockjsRandomHelper & mockjs$MockjsRandomMiscellaneous & mockjs$MockjsRandomName & mockjs$MockjsRandomText & mockjs$MockjsRandomWeb


declare interface mockjs$MockjsValidRsItem {
action: mockjs$S,
actual: mockjs$S,
expected: mockjs$S,
message: mockjs$S,
path: mockjs$S[],
type: mockjs$S
} 

declare type mockjs$MockjsValid = (template: any, data: any) => mockjs$MockjsValidRsItem[];

declare interface mockjs$MockjsToJSONSchemaRs {
name: mockjs$S | void,
template: any,
type: mockjs$S,
rule: {[key: string]: any},
path: mockjs$S[],
properties?: mockjs$MockjsToJSONSchemaRs[],
items?: mockjs$MockjsToJSONSchemaRs[]
} 

declare type mockjs$MockjsToJSONSchema = (template: any) => mockjs$MockjsToJSONSchemaRs;

declare var mockjs$mock: mockjs$MockjsMock;

declare var mockjs$setup: mockjs$MockjsSetup;

declare var mockjs$Random: mockjs$MockjsRandom;

declare var mockjs$valid: mockjs$MockjsValid;

declare var mockjs$toJSONSchema: mockjs$MockjsToJSONSchema;

declare var mockjs$version: number;
	declare module.exports: typeof mockjs

    }
