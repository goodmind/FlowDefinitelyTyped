declare module 'siesta' {
        
/**
 * @abstract
 */
declare interface Siesta$IHarness {
alsoPreload: any[],
autoCheckGlobals: boolean,
cachePreload: boolean,
defaultTimeout: boolean,
disableColoring: boolean,
expectedGlobals: string[],
isReadyTimeout: number,
keepNLastResults: number,
keepResults: boolean,
listenters: {
[key: string]: (event: Event, ...args: any[]) => void
},
maxThreads: number,
needDone: boolean,
overrideSetTimeout: boolean,
pauseBetweenTests: number,
preload: any[],
runCore: string,
subTestTimeout: number,
testClass: Siesta$Siesta$ITest,
title: string,
transparentEx: boolean,
waitForTimeout: number,
configure(config: any): void,
start(...descriptors: any[]): void
} 


      declare var npm$namespace$Harness: {
        
        Browser: typeof Harness$Browser,
NodeJS: typeof Harness$NodeJS,
      }
declare interface Harness$ITestGroupDescriptor {
group: string,
items: any[]
} 

declare interface Harness$ITestUrlDescriptor {
url: string
} 

declare interface Harness$IPreloadUrlDescriptor {
type: string,
url: string
} 

declare interface Harness$IPreloadContentDescriptor {
type: string,
content: string
} 

declare interface Harness$IPreloadTextDescriptor {
text: string
} 


/**
 * @singleton
 */
declare type Harness$IBrowser = {
autoRun: boolean,
autoScrollElementsIntoView: boolean,
breakOnFail: boolean,
coverageUnit: string,
disableCaching: boolean,
enableCodeCoverage: boolean,
excludeCoverageUnits: RegExp,
hostPageUrl: string,
includeCoverageUnits: RegExp,
maintainViewportSize: boolean,
runCore: string,
separateContext: boolean,
simulateEventsWith: string,
speedRun: boolean,
useStrictMode: boolean,
viewDOM: boolean,
viewportHeight: number,
viewportWidth: number
} & Siesta$IHarness



/**
 * @mixin
 */
declare interface Harness$IBrowserExtJSCore {
coverageUnit: string,
excludeCoverageUnits: RegExp,
installLoaderInstrumentationHook: boolean
} 


/**
 * @singleton
 */
declare type Harness$IBrowserExtJS = {
allowExtVersionChange: boolean,
loaderPath: any,
waitForAppReady: <<UNKNOWN PARAM FORMAT>>,
waitForExtReady: <<UNKNOWN PARAM FORMAT>>
} & Harness$IBrowser & Harness$IBrowserExtJSCore



/**
 * @singleton
 */
declare type Harness$IBrowserSenchaTouch = {
loaderPath: any,
performSetup: boolean,
runCore: string,
transparentEx: boolean
} & Harness$IBrowser & Harness$IBrowserExtJSCore


declare type Harness$IBrowserSingleton = {
Test$ExtJS: Harness$IBrowserExtJS,
Test$SenchaTouch: Harness$IBrowserSenchaTouch
} & Harness$IBrowser



/**
 * @singleton
 */
declare type Harness$IHarnessNodeJS = {} & Siesta$IHarness


declare var Harness$Browser: Harness$IBrowserSingleton;

declare var Harness$NodeJS: Harness$IHarnessNodeJS;


/**
 * @abstract
 */
declare type Siesta$ITest = {
isReadyTimeout: number,
beginAsync(time: number, errback: Function): any,
compareObjects(
obj1: any,
obj2: any,
strict?: boolean,
onlyPrimitives?: boolean,
asObjects?: boolean): boolean,
diag(desc: string): void,
done(delay: number): void,
endAsync(frame: any): void,
endWait(title: string): void,
fail(desc: string, annotation: any): void,
getSubTest(name: string, code: (t: Siesta$ITest) => void, timeout?: number): Siesta$ITest,
is(got: any, expected: any, desc: string): void,
isNot(got: any, expected: any, desc: string): void,
isNotStrict(got: any, expected: any, desc: string): void,
isReady(): any,
isStrict(got: any, expected: any, desc: string): void,
launchSubTest(subTest: Siesta$ITest, callback: Function): void,
notOk(value: any, desc: string): void,
ok(value: any, desc: string): void,
pass(desc: string, annotation: any): void,
subTest(
desc: string,
code: (t: Siesta$ITest) => void,
callback: Function,
timeout?: number): void,
todo(why: string, code: Function): void,
typeOf(object: any): string,
wait(title: string, howLong: number): void
} & Test$Test$IBDD & Test$Test$IDate & Test$Test$IFunction & Test$Test$IMore


declare interface Test$IActionCall {
(next: (...args: any[]) => void, ...previous: any[]): void
} 

declare type Test$IActionConfig = {
action?: Test$IActionCall,
timeout?: number
} & Test$IActionCall & Test$IAction



/**
 * @abstract
 */
declare interface Test$IAction {
desc?: string
} 


/**
 * @mixin
 */
declare interface Role$IHasTarget {
passTargetToNext?: boolean,
target?: any,
el?: any
} 


/**
 * @class
 */
declare type Action$Click = {
options?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Done = {
delay?: number
} & Test$IAction



/**
 * @class
 */
declare type Action$DoubleClick = {
options?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$DoubleTap = {} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Drag = {
by?: any,
dragOnly?: boolean,
source?: any,
target?: any,
to?: any
} & Test$IAction



/**
 * @class
 */
declare type Action$Eval = {
options?: any
} & Test$IAction



/**
 * @class
 */
declare type Action$LongPress = {} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$MouseDown = {
options?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$MouseUp = {
options?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$MoveCursor = {
by?: any,
to?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$MoveCursorTo = {} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$RightClick = {
options?: any
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Swipe = {
direction?: string
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Tap = {
options?: any,
text?: string
} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Type = {} & Test$IAction & Role$Role$IHasTarget



/**
 * @class
 */
declare type Action$Wait = {
args?: any[],
delay?: number,
timeout?: number,
waitFor?: string
} & Test$IAction



/**
 * @mixin
 */
declare interface Test$IBDD {
any(clsConstructor: Function): any,
ddescribe(name: string, code: Function, timeout?: number): void,
describe(name: string, code: Function, timeout?: number): void,
expect(value: any): BDD$BDD$Expectation,
iit(name: string, code: Function, timeout?: number): void,
it(name: string, code: Function, timeout?: number): void,
xdescribe(name: string, code: Function, timeout?: number): void,
xit(name: string, code: Function, timeout?: number): void
} 


/**
 * @class
 */
declare interface BDD$Expectation {
not: BDD$Expectation,
toBe(expectedValue: any): void,
toBeCloseTo(expectedValue: number, precision?: number): void,
toBeDefined(expectedValue: any): void,
toBeFalsy(expectedValue: any): void,
toBeGreaterThan(expectedValue: any): void,
toBeLessThan(expectedValue: any): void,
toBeNaN(expectedValue: any): void,
toBeNull(expectedValue: any): void,
toBeTruthy(expectedValue: any): void,
toBeUndefined(value: any): void,
toContain(element: any): void,
toEqual(expectedValue: any): void,
toMatch(regexp: RegExp): void,
toThrow(): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSAjax {
ajaxRequestAndThen(url: string, callback: Function, scope: any): void,
isAjaxLoading(object?: any, description?: string): void,
waitForAjaxRequest(callback: Function, scope?: any, timeout?: number): void,
waitForAjaxRequest(object: any, callback: Function, scope?: any, timeout?: number): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSComponent {
destroysOk(components: any, description?: string): void,
hasPosition(component: any, x: number, y: number, description?: string): void,
hasSize(component: any, width: number, height: number, description?: string): void,
waitForCQ(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForCQ(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForCQNotFound(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForCQNotVisible(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForCQVisible(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForComponent(
component: string,
rendered: boolean,
callback: Function,
scope?: any,
timeout?: number): void,
waitForComponentNotVisible(component: any, callback: Function, scope?: any, timeout?: number): void,
waitForComponentQuery(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForComponentQuery(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForComponentQueryNotFound(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForComponentQueryNotFound(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForComponentQueryNotVisible(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForComponentQueryNotVisible(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForComponentQueryVisible(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForComponentQueryVisible(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForComponentVisible(component: any, callback: Function, scope?: any, timeout?: number): void,
waitForCompositeQuery(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForCompositeQuery(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForCompositeQueryNotFound(query: string, callback: Function, scope?: any, timeout?: number): void,
waitForCompositeQueryNotFound(
query: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForXType(xtype: string, callback: Function, scope?: any, timeout?: number): void,
waitForXType(
xtype: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSDataView {
getFirstItem(view: any): any,
waitForViewRendered(view: any, callback: Function, scope?: any, timeout?: number): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSElement {
hasRegion(el: any, region: any, description?: string): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSFormField {
fieldHasValue(field: any, value: any, description?: string): void,
isFieldEmpty(field: any, description?: string): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSGrid {
getCell(panel: any, row: number, column: number): HTMLElement,
getFirstCell(panel: any): HTMLElement,
getFirstRow(panel: any): any,
getLastCellInRow(panel: any, row: number): HTMLElement,
getRow(panel: any, index: number): any,
matchGridCellContent(
panel: any,
row: number,
column: number,
string: RegExp,
description?: string): void,
matchGridCellContent(
panel: any,
row: number,
column: number,
string: string,
description?: string): void,
waitForRowsVisible(panel: any, callback: Function, scope?: any, timeout?: number): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSObservable {
firesAtLeastNTimes(observable: any, event: string, n: number, desc: string): void,
firesOnce(observable: any, event: string, desc: string): void,
hasListener(observable: any, eventName: string, description?: string): void,
isFiredWithSignature(observable: any, event: string, checkerFn: Function, desc: string): void,
waitForEvent(
observable: any,
event: string,
callback: Function,
scope?: any,
timeout?: number): void,
wontFire(observable: any, event: string, desc: string): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSStore {
isStoreEmpty(store: any, description?: string): void,
loadStoresAndThen(...args: any[]): void,
waitForStoresToLoad(...args: any[]): void
} 


/**
 * @class
 */
declare type Test$ExtJS = {
assertMaxNumberOfGlobalExtOverrides(maxNumber: number, description?: <<UNKNOWN PARAM FORMAT>>): void,
assertNoGlobalExtOverrides(description?: string): void,
assertNoLayoutTriggered(fn: Function, scope: any, description?: string): void,
getTotalLayoutCounter(): number,
waitForPageLoad(callback: Function, scope?: any): void
} & Harness$Browser & Test$IExtJSAjax & Test$IExtJSComponent & Test$IExtJSDataView & Test$IExtJSElement & Test$IExtJSFormField & Test$IExtJSGrid & Test$IExtJSObservable & Test$IExtJSStore & Test$IExtJSCore



      declare var npm$namespace$Simulate: {
        
        KeyCodes: typeof Simulate$KeyCodes,
      }

/**
 * @mixin
 */
declare interface Simulate$IEvent {
simulateEventsWith: string,
simulateEvent(el: any, type: string, the?: any, suppressLog?: boolean): void
} 


/**
 * @mixin
 */
declare interface Simulate$IKeyboard {
keyPress(el: any, key: string, options: any): void,
type(el: any, text: string, callback?: Function, scope?: any, options?: any): void
} 

declare var Simulate$KeyCodes: {
"\b": number,
"BACKSPACE": number,
"\t": number,
"TAB": number,
"\r": number,
"RETURN": number,
"ENTER": number,
"SHIFT": number,
"CTRL": number,
"ALT": number,
"PAUSE-BREAK": number,
"CAPS": number,
"ESCAPE": number,
"NUM-LOCK": number,
"SCROLL-LOCK": number,
"PRINT": number,
"PAGE-UP": number,
"PAGE-DOWN": number,
"END": number,
"HOME": number,
"LEFT": number,
"UP": number,
"RIGHT": number,
"DOWN": number,
"INSERT": number,
"DELETE": number,
" ": number,
"0": number,
"1": number,
"2": number,
"3": number,
"4": number,
"5": number,
"6": number,
"7": number,
"8": number,
"9": number,
"A": number,
"B": number,
"C": number,
"D": number,
"E": number,
"F": number,
"G": number,
"H": number,
"I": number,
"J": number,
"K": number,
"L": number,
"M": number,
"N": number,
"O": number,
"P": number,
"Q": number,
"R": number,
"S": number,
"T": number,
"U": number,
"V": number,
"W": number,
"X": number,
"Y": number,
"Z": number,
"NUM0": number,
"NUM1": number,
"NUM2": number,
"NUM3": number,
"NUM4": number,
"NUM5": number,
"NUM6": number,
"NUM7": number,
"NUM8": number,
"NUM9": number,
"NUM*": number,
"NUM+": number,
";": number,
"=": number,
",": number,
"-": number,
".": number,
"/": number,
"`": number,
"[": number,
"\\": number,
"]": number,
"'": number,
"F1": number,
"F2": number,
"F3": number,
"F4": number,
"F5": number,
"F6": number,
"F7": number,
"F8": number,
"F9": number,
"F10": number,
"F11": number,
"F12": number
};


/**
 * @mixin
 */
declare interface Simulate$IMouse {
dragDelay: number,
dragPrecision: number,
moveCursorBetweenPoints: boolean,
click(el?: any, callback?: Function, scope?: any, options?: any): void,
click(callback?: Function, scope?: any, options?: any): void,
doubleClick(el?: any, callback?: Function, scope?: any, options?: any): void,
doubleClick(callback?: Function, scope?: any, options?: any): void,
drag(
source: any,
target?: any,
delta?: number[],
callback?: Function,
scope?: any,
options?: any): void,
dragBy(
source: any,
delta: number[],
callback?: Function,
scope?: any,
options?: any,
dragOnly?: boolean): void,
dragTo(
source: any,
target: any,
callback?: Function,
scope?: any,
options?: any,
dragOnly?: boolean): void,
mouseDown(el: any, options: any): void,
mouseOut(el: any, options: any): void,
mouseOver(el: any, options: any): void,
mouseUp(el: any, options: any): void,
moveCursorBy(delta: number[], callback?: Function, scope?: any): void,
moveCursorTo(target?: any, callback?: Function, scope?: any): void,
moveMouseBy(delta: number[], callback?: Function, scope?: any): void,
moveMouseTo(target?: any, callback?: Function, scope?: any): void,
rightClick(el?: any, callback?: Function, scope?: any, options?: any): void,
rightClick(callback?: Function, scope?: any, options?: any): void
} 


/**
 * @class
 */
declare type Test$Browser = {
clearTimeout(timeoutId: number): void,
elementFromPoint(x: number, y: number, shallow?: boolean): HTMLElement,
firesAtLeastNTimes(observable: any, event: string, n: number, desc: string): void,
firesOk(options: any): void,
firesOnce(observable: any, event: string, desc: string): void,
isntFired(observable: any, event: string, desc: string): void,
setTimeout(func: Function, delay: number): number,
waitForEvent(
observable: any,
event: string,
callback: Function,
scope?: any,
timeout?: number): void,
waitForPageLoad(callback: Function, scope?: any): void,
willFireNTimes(observable: any, event: string, n: number, desc: string): void,
wontFire(observable: any, event: string, desc: string): void
} & Siesta$ITest & Simulate$Simulate$IEvent & Simulate$Simulate$IKeyboard & Simulate$Simulate$IMouse & Test$IElement & Test$ITextSelection



/**
 * @mixin
 */
declare interface Test$IDate {
isDateEqual(got: Date, expectedDate: Date, description?: string): void
} 


/**
 * @mixin
 */
declare interface Test$IElement {
chainClick(elements: any[], callback: Function): void,
clickSelector(selector: string, callback: Function, scope?: any): void,
clickSelector(selector: string, root: any, callback: Function, scope?: any): void,
contentLike(el: any, text: string, description?: string): void,
contentNotLike(el: any, text: string, description?: string): void,
elementIsAt(el: any, xy: number[], allowChildren: boolean, description?: string): void,
elementIsInView(el: any): void,
elementIsNotTopElement(el: any, allowChildren: boolean, description?: string): void,
elementIsNotVisible(el: any, description?: string): void,
elementIsTop(el: any, allowChildren: boolean): boolean,
elementIsTopElement(
el: any,
allowChildren: boolean,
description?: string,
strict?: <<UNKNOWN PARAM FORMAT>>): void,
elementIsVisible(el: any, description?: string): void,
findCenter(el: any, local?: boolean): number[],
hasCls(el: any, cls: string, description?: string): void,
hasNotCls(el: any, cls: string, description?: string): void,
hasNotStyle(el: any, property: string, value: string, description?: string): void,
hasStyle(el: any, property: string, value: string, description?: string): void,
isElementVisible(el: any): boolean,
isInView(el: any, description?: string): void,
monkeyTest(
el: any,
nbrInteractions: number,
description?: string,
callback?: Function,
scope?: any): void,
scrollHorizontallyTo(el: any, newLeft: number, delay?: number, callback?: Function): number,
scrollVerticallyTo(el: any, newTop: number, delay?: number, callback?: Function): number,
selectorCountIs(selector: string, count: number, description: string): void,
selectorCountIs(selector: string, root: any, count: number, description: string): void,
selectorExists(selector: string, description?: string): void,
selectorIsAt(
selector: string,
xy: number[],
allowChildren: boolean,
description?: string): void,
selectorNotExists(selector: string, description?: string): void,
waitForContentLike(el: any, text: string, callback: Function, scope?: any, timeout?: number): void,
waitForContentNotLike(el: any, text: string, callback: Function, scope?: any, timeout?: number): void,
waitForElementNotTop(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForElementNotVisible(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForElementTop(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForElementVisible(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForScrollChange(el: any, side: string, callback: Function, scope?: any, timeout?: number): void,
waitForScrollLeftChange(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForScrollTopChange(el: any, callback: Function, scope?: any, timeout?: number): void,
waitForSelector(selector: string, callback: Function, scope?: any, timeout?: number): void,
waitForSelector(
selector: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForSelectorAt(
xy: number[],
selector: string,
callback: Function,
scope?: any,
timeout?: number): void,
waitForSelectorAtCursor(
xy: number[],
selector: string,
callback: Function,
scope?: any,
timeout?: number): void,
waitForSelectorNotFound(selector: string, callback: Function, scope?: any, timeout?: number): void,
waitForSelectorNotFound(
selector: string,
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitForSelectors(selectors: string[], callback: Function, scope?: any, timeout?: number): void,
waitForSelectors(
selectors: string[],
root: any,
callback: Function,
scope?: any,
timeout?: number): void,
waitUntilInView(el: any, callback: Function, scope?: any, timeout?: number): void
} 


/**
 * @mixin
 */
declare interface Test$IExtJSCore {
Ext(): any,
clickCQ<<UNKNOWN PARAM FORMAT>>,
clickComponentQuery<<UNKNOWN PARAM FORMAT>>,
compositeQuery(selector: string, root: any, allowEmpty: boolean): HTMLElement[],
cq<<UNKNOWN PARAM FORMAT>>,
cq1<<UNKNOWN PARAM FORMAT>>,
getExt(): any,
knownBugIn<<UNKNOWN PARAM FORMAT>>,
requireOk(...args: any[]): void
} 


/**
 * @mixin
 */
declare interface Test$IFunction {
isCalled(fn: string, host: any, desc: string): void,
isCalled(fn: Function, host: any, desc: string): void,
isCalledNTimes(fn: string, host: any, n: number, desc: string): void,
isCalledNTimes(fn: Function, host: any, n: number, desc: string): void,
isCalledOnce(fn: string, host: any, desc: string): void,
isCalledOnce(fn: Function, host: any, desc: string): void,
isntCalled(fn: string, host: any, n: number, desc: string): void,
isntCalled(fn: Function, host: any, n: number, desc: string): void,
methodIsCalled(fn: string, className: string, desc: string): void,
methodIsCalled(fn: Function, className: string, desc: string): void,
methodIsCalled(fn: string, className: Function, desc: string): void,
methodIsCalled(fn: Function, className: Function, desc: string): void,
methodIsCalledNTimes(fn: string, className: string, n: number, desc: string): void,
methodIsCalledNTimes(fn: Function, className: string, n: number, desc: string): void,
methodIsCalledNTimes(fn: string, className: Function, n: number, desc: string): void,
methodIsCalledNTimes(fn: Function, className: Function, n: number, desc: string): void,
methodIsntCalled(fn: string, className: string, desc: string): void,
methodIsntCalled(fn: Function, className: string, desc: string): void,
methodIsntCalled(fn: string, className: Function, desc: string): void,
methodIsntCalled(fn: Function, className: Function, desc: string): void
} 


/**
 * @class
 */
declare type Test$jQuery = {
get$(): any
} & Test$Browser


declare interface Test$IWaitForConfig {
method: Function,
callback: Function,
scope?: any,
timeout?: number,
interval?: number
} 

declare interface Test$IWaitForReturn {
force: Function
} 


/**
 * @mixin
 */
declare interface Test$IMore {
waitForTimeout: number,
chain(steps: Test$IAction[]): void,
chain(...step: Test$IAction[]): void,
expectGlobals(...names: any[]): void,
isApprox(value1: number, value2: number, threshHold: number, desc: string): void,
isArray(value: any, desc: string): void,
isBoolean(value: any, desc: string): void,
isDate(value: any, desc: string): void,
isDeeply(obj1: any, obj2: any, desc: string): void,
isDeeplyStrict(obj1: any, obj2: any, desc: string): void,
isFunction(value: any, desc: string): void,
isGreater(value1: any, value2: any, desc: string): void,
isGreaterOrEqual(value1: any, value2: any, desc: string): void,
isLess(value1: any, value2: any, desc: string): void,
isLessOrEqual(value1: any, value2: any, desc: string): void,
isNumber(value: any, desc: string): void,
isObject(value: any, desc: string): void,
isRegExp(value: any, desc: string): void,
isString(value: any, desc: string): void,
isaOk(value: any, className: string, desc: string): void,
isaOk(value: any, className: Function, desc: string): void,
like(string: string, regex: string, desc: string): void,
like(string: string, regex: RegExp, desc: string): void,
livesOk(func: Function, desc: string): void,
throwsOk(func: Function, expected: string, desc: string): void,
throwsOk(func: Function, expected: RegExp, desc: string): void,
unlike(string: string, regex: string, desc: string): void,
unlike(string: string, regex: RegExp, desc: string): void,
verifyGlobals(...names: string[]): void,
waitFor(
wait: number,
callback: Function,
scope?: any,
timeout?: number,
interval?: number): Test$IWaitForReturn,
waitFor(
method: Function,
callback: Function,
scope?: any,
timeout?: number,
interval?: number): Test$IWaitForReturn,
waitFor(config: Test$IWaitForConfig): Test$IWaitForReturn
} 

declare interface Test$IPositionConfig {
x?: number,
y?: number
} 


/**
 * @class
 */
declare type Test$SenchaTouch = {
doubleTap(target: any, callback?: Function, scope?: any, offset?: number[]): void,
longpress(target: any, callback?: Function, scope?: any, offset?: number[]): void,
moveFingerBy(delta: number[], callback?: Function, scope?: any): void,
moveFingerTo(target: any, callback?: Function, scope?: any, offset?: number[]): void,
scrollUntilElementVisible(
scrollable: any,
direction: string,
actionTarget: any,
callback: Function,
scope: any): void,
swipe(target: any, direction: string, callback?: Function, scope?: any): void,
tap(target: any, callback?: Function, scope?: any): void,
waitForScrollerPosition(
scroller: any,
position: Test$IPositionConfig,
callback: Function,
scope?: any,
timeout?: number): void
} & Test$Browser & Test$IExtJSComponent & Test$IExtJSElement & Test$IExtJSFormField & Test$IExtJSObservable & Test$IExtJSStore & Test$IExtJSCore



/**
 * @mixin
 */
declare interface Test$ITextSelection {
getSelectedText(el: any): string,
selectText(el: any, start?: number, end?: number): void
} 
	declare function StartTest(testScript: (t: Siesta$Siesta$ITest) => void): void

	declare var startTest: typeof StartTest;
	declare var describe: typeof StartTest;
    }
