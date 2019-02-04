declare module 'blessed' {
        import type {
          EventEmitter
        } from 'events';

	import typeof * as stream from 'stream';

	import typeof * as child_process from 'child_process';

	declare export interface IBlessedProgramOptions {
input?: Readable,
output?: Writable,
log?: string,
dump?: boolean,
zero?: boolean,
buffer?: boolean,
terminal?: string,
term?: string,
tput?: string,
debug?: boolean,
resizeTimeout?: boolean
} 
	declare export class BlessedProgram mixins EventEmitter {
type: string;
options: IBlessedProgramOptions;
input: Readable;
output: Writable;
zero: boolean;
useBuffer: boolean;
x: number;
y: number;
savedX: number;
savedY: number;
cols: number;
rows: number;
scrollTop: number;
scrollBottom: number;
isOSXTerm: boolean;
isiTerm2: boolean;
isXFCE: boolean;
isTerminator: boolean;
isLXDE: boolean;
isVTE: boolean;
isRxvt: boolean;
isXterm: boolean;
tmux: boolean;
tmuxVersion: number;
constructor(options?: IBlessedProgramOptions): this;
log(): boolean;
debug(): boolean;
setupDump(): void;
setupTput(): void;
setTerminal(terminal: string): void;
has(name: string): boolean;
term(is: string): boolean;
listen(): void;
destroy(): void;
key(key: string | string[], listener: Function): void;
onceKey(key: string | string[], listener: Function): void;
unKey(key: string | string[], listener: Function): void;
removeKey(key: string | string[], listener: Function): void;
bindMouse(): void;
enableGpm(): void;
disableGpm(): void;
bindResponse(): void;
response(name: string, text: string, callback: Function, noBypass?: boolean): boolean;
response(name: string, callback?: Function): boolean;
write(text: string): boolean;
flush(): void;
print(text: string, attr?: boolean): boolean;
echo(text: string, attr?: boolean): boolean;
setx(x: number): boolean;
sety(y: number): boolean;
move(x: number, y: number): boolean;
omove(x: number, y: number): void;
rsetx(x: number): boolean;
rsety(y: number): boolean;
rmove(x: number, y: number): void;
simpleInsert(ch: string, i?: number, attr?: boolean): boolean;
repeat(ch: string, i?: number): string;
copyToClipboard(text: string): boolean;
cursorShape(shape: string, blink?: boolean): boolean;
cursorColor(color: string): boolean;
cursorReset(): boolean;
resetCursor(): boolean;
getTextParams(param: string, callback: Function): boolean;
getCursorColor(callback: Function): boolean;
nul(): boolean;
bell(): boolean;
bel(): boolean;
vtab(): boolean;
form(): boolean;
ff(): boolean;
backspace(): boolean;
kbs(): boolean;
tab(): boolean;
ht(): boolean;
shiftOut(): boolean;
shiftIn(): boolean;
return(): boolean;
cr(): boolean;
feed(): boolean;
newline(): boolean;
nl(): boolean;
index(): boolean;
ind(): boolean;
reverseIndex(): boolean;
reverse(): boolean;
ri(): boolean;
nextLine(): boolean;
reset(): boolean;
tabSet(): boolean;
saveCursor(key: string): boolean;
sc(key: string): boolean;
restoreCursor(key?: string, hide?: boolean): boolean;
rc(key?: string, hide?: boolean): boolean;
lsaveCursor(key?: string): void;
lrestoreCursor(key?: string, hide?: boolean): void;
lineHeight(): boolean;
charset(val?: string, level?: number): boolean;
enter_alt_charset_mode(): boolean;
as(): boolean;
smacs(): boolean;
exit_alt_charset_mode(): boolean;
ae(): boolean;
rmacs(): boolean;
setG(val: number): boolean;
setTitle(title: string): boolean;
resetColors(param?: string): boolean;
dynamicColors(param?: string): boolean;
selData(a: string, b: string): boolean;
cursorUp(param?: number): boolean;
cuu(param?: number): boolean;
up(param?: number): boolean;
cursorDown(param?: number): boolean;
cud(param?: number): boolean;
down(param?: number): boolean;
cursorForward(param?: number): boolean;
cuf(param?: number): boolean;
right(param?: number): boolean;
forward(param?: number): boolean;
cursorBackward(param?: number): boolean;
cub(param?: number): boolean;
left(param?: number): boolean;
back(param?: number): boolean;
cursorPos(row?: number, col?: number): boolean;
cup(row?: number, col?: number): boolean;
pos(row?: number, col?: number): boolean;
eraseInDisplay(param?: string): boolean;
ed(param?: string): boolean;
clear(): boolean;
eraseInLine(param?: string): boolean;
el(param?: string): boolean;
charAttributes(param: string, val?: boolean): boolean;
charAttributes(param: string[], val?: boolean): boolean;
setForeground(color: string, val?: boolean): boolean;
fg(color: string, val?: boolean): boolean;
setBackground(color: string, val?: boolean): boolean;
bg(color: string, val?: boolean): boolean;
deviceStatuses(
param?: string,
callback?: Function,
dec?: boolean,
noBypass?: boolean): boolean;
dsr(
param?: string,
callback?: Function,
dec?: boolean,
noBypass?: boolean): boolean;
getCursor(callback: Function): boolean;
saveReportedCursor(callback: Function): void;
restoreReportedCursor: () => boolean;
insertChars(param?: number): boolean;
ich(param?: number): boolean;
cursorNextLine(param?: number): boolean;
cnl(param?: number): boolean;
cursorPrecedingLine(param?: number): boolean;
cpl(param?: number): boolean;
cursorCharAbsolute(param?: number): boolean;
cha(param?: number): boolean;
insertLines(param?: number): boolean;
il(param?: number): boolean;
deleteLines(param?: number): boolean;
dl(param?: number): boolean;
deleteChars(param?: number): boolean;
dch(param?: number): boolean;
eraseChars(param?: number): boolean;
ech(param?: number): boolean;
charPosAbsolute(param?: number): boolean;
hpa(param?: number): boolean;
HPositionRelative(param?: number): boolean;
sendDeviceAttributes(param?: number, callback?: Function): boolean;
da(param?: number, callback?: Function): boolean;
linePosAbsolute(param?: number): boolean;
vpa(param?: number): boolean;
VPositionRelative(param?: number): boolean;
vpr(param?: number): boolean;
HVPosition(row?: number, col?: number): boolean;
hvp(row?: number, col?: number): boolean;
setMode(...args: string[]): boolean;
sm(...args: string[]): boolean;
decset(...args: string[]): boolean;
showCursor(): boolean;
alternateBuffer(): boolean;
smcup(): boolean;
alternate(): boolean;
resetMode(...args: string[]): boolean;
rm(...args: string[]): boolean;
decrst(...args: string[]): boolean;
hideCursor(): boolean;
civis(): boolean;
vi(): boolean;
cursor_invisible(): boolean;
dectcemh(): boolean;
normalBuffer(): boolean;
rmcup(): boolean;
enableMouse(): void;
disableMouse(): void;
setMouse(opt?: {}, enable?: boolean): void;
setScrollRegion(top: number, bottom: number): boolean;
csr(top: number, bottom: number): boolean;
decstbm(top: number, bottom: number): boolean;
saveCursorA(): boolean;
scA(): boolean;
restoreCursorA(): boolean;
rcA(): boolean;
cursorForwardTab(param?: number): boolean;
cht(param?: number): boolean;
scrollUp(param?: number): boolean;
su(param?: number): boolean;
scrollDown(param?: number): boolean;
sd(param?: number): boolean;
initMouseTracking(...args: string[]): boolean;
resetTitleModes(...args: string[]): boolean;
cursorBackwardTab(param?: number): boolean;
cbt(param?: number): boolean;
repeatPrecedingCharacter(param?: number): boolean;
rep(param?: number): boolean;
tabClear(param?: number): boolean;
tbc(param?: number): boolean;
mediaCopy(...args: string[]): boolean;
mc(...args: string[]): boolean;
mc0(): boolean;
print_screen(): boolean;
ps(): boolean;
mc5(): boolean;
prtr_on(): boolean;
po(): boolean;
mc4(): boolean;
prtr_off(): boolean;
pf(): boolean;
mc5p(): boolean;
prtr_non(): boolean;
p0(): boolean;
setResources(...args: string[]): boolean;
disableModifieres(...args: string[]): boolean;
setPointerMode(...args: string[]): boolean;
softReset(): boolean;
rs2(): boolean;
decstr(): boolean;
requestAnsiMode(param?: number): boolean;
decrqm(param?: number): boolean;
requestPrivateMode(param?: number): boolean;
decrqmp(param?: number): boolean;
setConformanceLevel(...args: string[]): boolean;
decscl(...args: string[]): boolean;
loadLEDs(param?: number): boolean;
decll(param?: number): boolean;
setCursorStyle(param?: string): boolean;
decscursr(param?: string): boolean;
setCharProtectionAttr(param?: number): boolean;
decsca(param?: number): boolean;
restorePrivateValues(...args: string[]): boolean;
setAttrInRectangle(...args: string[]): boolean;
deccara(...args: string[]): boolean;
savePrivateValues(...args: string[]): boolean;
manipulateWindow(...args: any[]): boolean;
getWindowSize(callback?: Function): boolean;
reverseAttrInRectangle(...args: string[]): boolean;
decrara(...args: string[]): boolean;
setTitleModeFeature(...args: string[]): boolean;
setWarningBellVolume(param?: number): boolean;
decswbv(param?: number): boolean;
setMarginBellVolume(param?: number): boolean;
copyRectangle(...args: string[]): boolean;
deccra(...args: string[]): boolean;
enableFilterRectangle(...args: string[]): boolean;
decefr(...args: string[]): boolean;
requestParameters(param?: number): boolean;
decreqtparm(param: number): boolean;
selectChangeExtent(param?: number): boolean;
decsace(param?: number): boolean;
fillRectangle(...args: string[]): boolean;
decfra(...args: string[]): boolean;
enableLocatorReporting(...args: string[]): boolean;
decelr(...args: string[]): boolean;
eraseRectangle(...args: string[]): boolean;
decera(...args: string[]): boolean;
setLocatorEvents(...args: string[]): boolean;
decsle(...args: string[]): boolean;
selectiveEraseRectangle(...args: string[]): boolean;
decsera(...args: string[]): boolean;
requestLocatorPosition(param?: string, callback?: Function): boolean;
reqmp(param?: string, callback?: Function): boolean;
req_mouse_pos(param?: string, callback?: Function): boolean;
decrqlp(param?: string, callback?: Function): boolean;
insertColumns(...args: string[]): boolean;
decic(...args: string[]): boolean;
deleteColumns(...args: string[]): boolean;
decdc(...args: string[]): boolean;
out(param: string, ...args: any[]): boolean;
sigtstp(callback?: Function): boolean;
pause(callback?: Function): Function;
resume: () => void
}
	declare type Types$TTopLeft = string | number | "center";

declare type Types$TPosition = string | number;

declare type Types$TMouseAction = "mousedown" | "mouseup" | "mousemove";

declare interface Types$TStyle {
type?: string,
bg?: string,
fg?: string,
ch?: string,
bold?: boolean,
underline?: boolean,
blink?: boolean,
inverse?: boolean,
invisible?: boolean,
transparent?: boolean,
border?: "line" | "bg" | Types$TBorder,
hover?: boolean,
focus?: boolean,
label?: string,
track?: {
bg?: string,
fg?: string
},
scrollbar?: {
bg?: string,
fg?: string
}
} 

declare interface Types$TBorder {

/**
 * Type of border (line or bg). bg by default.
 */
type?: "line" | "bg",

/**
 * Character to use if bg type, default is space.
 */
ch?: string,

/**
 * Border foreground and background, must be numbers (-1 for default).
 */
bg?: number,
fg?: number,

/**
 * Border attributes.
 */
bold?: string,
underline?: string
} 

declare interface Types$TCursor {

/**
 * Have blessed draw a custom cursor and hide the terminal cursor (experimental).
 */
artificial: boolean,

/**
 * Shape of the cursor. Can be: block, underline, or line.
 */
shape: "block" | "underline" | "line",

/**
 * Whether the cursor blinks.
 */
blink: boolean,

/**
 * Color of the color. Accepts any valid color value (null is default).
 */
color: string
} 

declare type Types$TAlign = "left" | "center" | "right";

declare interface Types$ListbarCommand {
key: string,
callback(): void
} 

declare interface Types$TImage {

/**
 * Pixel width.
 */
width: number,

/**
 * Pixel height.
 */
height: number,

/**
 * Image bitmap.
 */
bmp: any,

/**
 * Image cellmap (bitmap scaled down to cell size).
 */
cellmap: any
} 

declare interface Types$Cursor {

/**
 * Have blessed draw a custom cursor and hide the terminal cursor (experimental).
 */
artificial: boolean,

/**
 * Shape of the cursor. Can be: block, underline, or line.
 */
shape: boolean,

/**
 * Whether the cursor blinks.
 */
blink: boolean,

/**
 * Color of the color. Accepts any valid color value (null is default).
 */
color: string
} 

declare interface Events$IMouseEventArg {
x: number,
y: number,
action: Types$Types$TMouseAction
} 

declare interface Events$IKeyEventArg {
full: string,
name: string,
shift: boolean,
ctrl: boolean,
meta: boolean,
sequence: string
} 

declare interface Widgets$NodeChildProcessExecOptions {
cwd?: string,
stdio?: any,
customFds?: any,
env?: any,
encoding?: string,
timeout?: number,
maxBuffer?: number,
killSignal?: string
} 

declare interface Widgets$IDestroyable {
destroy(): void,
destroy(): void
} 

declare interface Widgets$IOptions {} 

declare interface Widgets$IHasOptions<T: Widgets$IOptions> {
options: T
} 

declare type Widgets$TputsOptions = {
terminal?: string,
extended?: boolean,
debug?: boolean,
termcap?: string,
terminfoFile?: string,
terminfoPrefix?: string,
termcapFile?: string
} & Widgets$IOptions


declare class Widgets$Tput mixins Widgets$IHasOptions<Widgets$TputsOptions> {
constructor(opts: Widgets$TputsOptions): this;

/**
 * Original options object.
 */
options: Widgets$TputsOptions;
debug: boolean;
padding: boolean;
extended: boolean;
printf: boolean;
termcap: string;
terminfoPrefix: string;
terminfoFile: string;
termcapFile: string;
error: Error;
terminal: string;
setup(): void;
term(is: any): boolean;
readTerminfo(term: string): string;
parseTerminfo(
data: any,
file: string): {
header: {
dataSize: number,
headerSize: number,
magicNumber: boolean,
namesSize: number,
boolCount: number,
numCount: number,
strCount: number,
strTableSize: number,
extended: {
dataSize: number,
headerSize: number,
boolCount: number,
numCount: number,
strCount: number,
strTableSize: number,
lastStrTableOffset: number
}
},
name: string,
names: string[],
desc: string,
bools: any,
numbers: any,
strings: any
}
}

declare type Widgets$INodeOptions = {
name?: string,
screen?: Widgets$Screen,
parent?: Widgets$Node,
children?: Widgets$Node[],
focusable?: boolean
} & Widgets$IOptions


declare type Widgets$NodeEventType = "adopt"
| "remove"
| "reparent"
| "attach"
| "detach";

declare class Widgets$Node mixins EventEmitter, Widgets$IHasOptions<Widgets$INodeOptions>, Widgets$IDestroyable {
constructor(options: Widgets$INodeOptions): this;
focusable: boolean;

/**
 * Original options object.
 */
options: Widgets$INodeOptions;

/**
 * An object for any miscellanous user data.
 */
data: {
[index: string]: any
};

/**
 * An object for any miscellanous user data.
 */
_: {
[index: string]: any
};

/**
 * An object for any miscellanous user data.
 */
$: {
[index: string]: any
};

/**
 * Type of the node (e.g. box).
 */
type: string;

/**
 * Render index (document order index) of the last render call.
 */
index: number;

/**
 * Parent screen.
 */
screen: Widgets$Screen;

/**
 * Parent node.
 */
parent: Widgets$Node;

/**
 * Array of node's children.
 */
children: Widgets$Node[];

/**
 * Prepend a node to this node's children.
 */
prepend(node: Widgets$Node): void;

/**
 * Append a node to this node's children.
 */
append(node: Widgets$Node): void;

/**
 * Remove child node from node.
 */
remove(node: Widgets$Node): void;

/**
 * Insert a node to this node's children at index i.
 */
insert(node: Widgets$Node, index: number): void;

/**
 * Insert a node to this node's children before the reference node.
 */
insertBefore(node: Widgets$Node, refNode: Widgets$Node): void;

/**
 * Insert a node from node after the reference node.
 */
insertAfter(node: Widgets$Node, refNode: Widgets$Node): void;

/**
 * Remove node from its parent.
 */
detach(): void;
free(): void;
forDescendants(iter: (node: Widgets$Node) => void, s: any): void;
forAncestors(iter: (node: Widgets$Node) => void, s: any): void;
collectDescendants(s: any): void;
collectAncestors(s: any): void;

/**
 * Emit event for element, and recursively emit same event for all descendants.
 */
emitDescendants(type?: string, ...args: any[]): void;
emitAncestors(): void;
hasDescendant(target: Widgets$Node): void;
hasAncestor(target: Widgets$Node): boolean;
destroy(): void;

/**
 * Get user property with a potential default value.
 */
get<T>(name: string, def: T): T;

/**
 * Set user property to value.
 */
set(name: string, value: any): void;
on(event: string, listener: (...args: any[]) => void): this;
on(event: Widgets$NodeEventType, callback: (arg: Widgets$Node) => void): this
}

declare type Widgets$NodeScreenEventType = "focus"
| "blur"
| "click"
| "element click"
| "element mouseover"
| "element mouseout"
| "element mouseup";

declare type Widgets$NodeMouseEventType = "mouse"
| "mouseout"
| "mouseover"
| "mousedown"
| "mouseup"
| "mousewheel"
| "wheeldown"
| "wheelup"
| "mousemove";

declare type Widgets$NodeGenericEventType = "resize"
| "prerender"
| "render"
| "destroy"
| "move"
| "show"
| "hide"
| "set content"
| "parsed content";

declare class Widgets$NodeWithEvents mixins Widgets$Node {

/**
 * Bind a keypress listener for a specific key.
 */
key(
name: string | string[],
listener: (ch: any, key: Events$Events$IKeyEventArg) => void): void;

/**
 * Bind a keypress listener for a specific key once.
 */
onceKey(
name: string,
listener: (ch: any, key: Events$Events$IKeyEventArg) => void): void;

/**
 * Remove a keypress listener for a specific key.
 */
unkey(
name: string,
listener: (ch: any, key: Events$Events$IKeyEventArg) => void): void;
removeKey(
name: string,
listener: (ch: any, key: Events$Events$IKeyEventArg) => void): void;
on(
event: string,
listener: (ch: any, key: Events$Events$IKeyEventArg) => void): this;

/**
 * Received on mouse events.
 */
on(
event: Widgets$NodeMouseEventType,
callback: (arg: Events$Events$IMouseEventArg) => void): this;

/**
 * Received on key events.
 */
on(
event: "keypress",
callback: (ch: string, key: Events$Events$IKeyEventArg) => void): this;
on(
event: Widgets$NodeScreenEventType,
callback: (arg: Widgets$Screen) => void): this;

/**
 * Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).
 */
on(event: "warning", callback: (text: string) => void): this;
on(event: Widgets$NodeGenericEventType, callback: () => void): this
}

declare type Widgets$IScreenOptions = {

/**
 * The blessed Program to be associated with. Will be automatically instantiated if none is provided.
 */
program?: BlessedProgram,

/**
 * Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with
 * uniform cells to their sides). This is known to cause flickering with elements that are not full-width,
 * however, it is more optimal for terminal rendering.
 */
smartCSR?: boolean,

/**
 * Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR,
 * but may cause flickering depending on what is on each side of the element.
 */
fastCSR?: boolean,

/**
 * Attempt to perform back_color_erase optimizations for terminals that support it. It will also work
 * with terminals that don't support it, but only on lines with the default background color. As it
 * stands with the current implementation, it's uncertain how much terminal performance this adds at
 * the cost of overhead within node.
 */
useBCE?: boolean,

/**
 * Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).
 */
resizeTimeout?: number,

/**
 * The width of tabs within an element's content.
 */
tabSize?: number,

/**
 * Automatically position child elements with border and padding in mind (NOTE: this is a recommended
 * option. It may become default in the future).
 */
autoPadding?: boolean,
cursor?: Types$Types$TCursor,

/**
 * Create a log file. See log method.
 */
log(...msg: any[]): void,

/**
 * Dump all output and input to desired file. Can be used together with log option if set as a boolean.
 */
dump?: string,

/**
 * Debug mode. Enables usage of the debug method. Also creates a debug console which will display when
 * pressing F12. It will display all log and debug messages.
 */
debug?: boolean,

/**
 * Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful
 * for creating a key that will always exit no matter whether the keys are locked.
 */
ignoreLocked?: boolean,

/**
 * Automatically "dock" borders with other elements instead of overlapping, depending on position
 * (experimental). For example: These border-overlapped elements:
 */
dockBorders?: boolean,

/**
 * Normally, dockable borders will not dock if the colors or attributes are different. This option
 * will allow them to dock regardless. It may produce some odd looking multi-colored borders though.
 */
ignoreDockContrast?: boolean,

/**
 * Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode
 * combining characters. This allows you to display text above the basic multilingual plane. This
 * is behind an option because it may affect performance slightly negatively. Without this option
 * enabled, all double-width, surrogate pair, and combining characters will be replaced by '??',
 * '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply
 * removes them from an element's content if iTerm2 is detected).
 */
fullUnicode?: boolean,

/**
 * Send focus events after mouse is enabled.
 */
sendFocus?: boolean,

/**
 * Display warnings (such as the output not being a TTY, similar to ncurses).
 */
warnings?: boolean,

/**
 * Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page.
 * If value is true unicode is forced. If value is false non-unicode is forced (default: null).
 */
forceUnicode?: boolean,

/**
 * Input and output streams. process.stdin/process.stdout by default, however, it could be a
 * net.Socket if you want to make a program that runs over telnet or something of that nature.
 */
input?: stream.Writable,

/**
 * Input and output streams. process.stdin/process.stdout by default, however, it could be a
 * net.Socket if you want to make a program that runs over telnet or something of that nature.
 */
output?: stream.Readable,

/**
 * The blessed Tput object (only available if you passed tput: true to the Program constructor.)
 */
tput?: Widgets$Tput,

/**
 * Top of the focus history stack.
 */
focused?: Widgets$BlessedElement,

/**
 * Width of the screen (same as program.cols).
 */
width?: Types$Types$TPosition,

/**
 * Height of the screen (same as program.rows).
 */
height?: Types$Types$TPosition,

/**
 * Same as screen.width.
 */
cols?: number,

/**
 * Same as screen.height.
 */
rows?: number,

/**
 * Relative top offset, always zero.
 */
top?: Types$Types$TTopLeft,

/**
 * Relative left offset, always zero.
 */
left?: Types$Types$TTopLeft,

/**
 * Relative right offset, always zero.
 */
right?: Types$Types$TPosition,

/**
 * Relative bottom offset, always zero.
 */
bottom?: Types$Types$TPosition,

/**
 * Absolute top offset, always zero.
 */
atop?: Types$Types$TTopLeft,

/**
 * Absolute left offset, always zero.
 */
aleft?: Types$Types$TTopLeft,

/**
 * Absolute right offset, always zero.
 */
aright?: Types$Types$TPosition,

/**
 * Absolute bottom offset, always zero.
 */
abottom?: Types$Types$TPosition,

/**
 * Whether the focused element grabs all keypresses.
 */
grabKeys?: any,

/**
 * Prevent keypresses from being received by any element.
 */
lockKeys?: boolean,

/**
 * The currently hovered element. Only set if mouse events are bound.
 */
hover?: any,

/**
 * Set or get terminal name. Set calls screen.setTerminal() internally.
 */
terminal?: string,

/**
 * Set or get window title.
 */
title?: string
} & Widgets$INodeOptions


declare class Widgets$Screen mixins Widgets$NodeWithEvents, Widgets$IHasOptions<Widgets$IScreenOptions> {
constructor(opts: Widgets$IScreenOptions): this;
cleanSides: any;

/**
 * Original options object.
 */
options: Widgets$IScreenOptions;

/**
 * The blessed Program to be associated with. Will be automatically instantiated if none is provided.
 */
program: BlessedProgram;

/**
 * Attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with
 * uniform cells to their sides). This is known to cause flickering with elements that are not full-width,
 * however, it is more optimal for terminal rendering.
 */
smartCSR: boolean;

/**
 * Do CSR on any element within 20 cols of the screen edge on either side. Faster than smartCSR,
 * but may cause flickering depending on what is on each side of the element.
 */
fastCSR: boolean;

/**
 * Attempt to perform back_color_erase optimizations for terminals that support it. It will also work
 * with terminals that don't support it, but only on lines with the default background color. As it
 * stands with the current implementation, it's uncertain how much terminal performance this adds at
 * the cost of overhead within node.
 */
useBCE: boolean;

/**
 * Amount of time (in ms) to redraw the screen after the terminal is resized (Default: 300).
 */
resizeTimeout: number;

/**
 * The width of tabs within an element's content.
 */
tabSize: number;

/**
 * Automatically position child elements with border and padding in mind (NOTE: this is a recommended
 * option. It may become default in the future).
 */
autoPadding: boolean;
cursor: Types$Types$TCursor;

/**
 * Dump all output and input to desired file. Can be used together with log option if set as a boolean.
 */
dump: string;

/**
 * Array of keys in their full format (e.g. C-c) to ignore when keys are locked or grabbed. Useful
 * for creating a key that will always exit no matter whether the keys are locked.
 */
ignoreLocked: boolean;

/**
 * Automatically "dock" borders with other elements instead of overlapping, depending on position
 * (experimental). For example: These border-overlapped elements:
 */
dockBorders: boolean;

/**
 * Normally, dockable borders will not dock if the colors or attributes are different. This option
 * will allow them to dock regardless. It may produce some odd looking multi-colored borders though.
 */
ignoreDockContrast: boolean;

/**
 * Allow for rendering of East Asian double-width characters, utf-16 surrogate pairs, and unicode
 * combining characters. This allows you to display text above the basic multilingual plane. This
 * is behind an option because it may affect performance slightly negatively. Without this option
 * enabled, all double-width, surrogate pair, and combining characters will be replaced by '??',
 * '?', '' respectively. (NOTE: iTerm2 cannot display combining characters properly. Blessed simply
 * removes them from an element's content if iTerm2 is detected).
 */
fullUnicode: boolean;

/**
 * Send focus events after mouse is enabled.
 */
sendFocus: boolean;

/**
 * Display warnings (such as the output not being a TTY, similar to ncurses).
 */
warnings: boolean;

/**
 * Force blessed to use unicode even if it is not detected via terminfo, env variables, or windows code page.
 * If value is true unicode is forced. If value is false non-unicode is forced (default: null).
 */
forceUnicode: boolean;

/**
 * Input and output streams. process.stdin/process.stdout by default, however, it could be a
 * net.Socket if you want to make a program that runs over telnet or something of that nature.
 */
input: stream.Writable;

/**
 * Input and output streams. process.stdin/process.stdout by default, however, it could be a
 * net.Socket if you want to make a program that runs over telnet or something of that nature.
 */
output: stream.Readable;

/**
 * The blessed Tput object (only available if you passed tput: true to the Program constructor.)
 */
tput: Widgets$Tput;

/**
 * Top of the focus history stack.
 */
focused: Widgets$BlessedElement;

/**
 * Width of the screen (same as program.cols).
 */
width: Types$Types$TPosition;

/**
 * Height of the screen (same as program.rows).
 */
height: Types$Types$TPosition;

/**
 * Same as screen.width.
 */
cols: number;

/**
 * Same as screen.height.
 */
rows: number;

/**
 * Relative top offset, always zero.
 */
top: Types$Types$TTopLeft;

/**
 * Relative left offset, always zero.
 */
left: Types$Types$TTopLeft;

/**
 * Relative right offset, always zero.
 */
right: Types$Types$TPosition;

/**
 * Relative bottom offset, always zero.
 */
bottom: Types$Types$TPosition;

/**
 * Absolute top offset, always zero.
 */
atop: Types$Types$TTopLeft;

/**
 * Absolute left offset, always zero.
 */
aleft: Types$Types$TTopLeft;

/**
 * Absolute right offset, always zero.
 */
aright: Types$Types$TPosition;

/**
 * Absolute bottom offset, always zero.
 */
abottom: Types$Types$TPosition;

/**
 * Whether the focused element grabs all keypresses.
 */
grabKeys: any;

/**
 * Prevent keypresses from being received by any element.
 */
lockKeys: boolean;

/**
 * The currently hovered element. Only set if mouse events are bound.
 */
hover: any;

/**
 * Set or get terminal name. Set calls screen.setTerminal() internally.
 */
terminal: string;

/**
 * Set or get window title.
 */
title: string;

/**
 * Write string to the log file if one was created.
 */
log(...msg: any[]): void;

/**
 * Same as the log method, but only gets called if the debug option was set.
 */
debug(...msg: string[]): void;

/**
 * Allocate a new pending screen buffer and a new output screen buffer.
 */
alloc(): void;

/**
 * Reallocate the screen buffers and clear the screen.
 */
realloc(): void;

/**
 * Draw the screen based on the contents of the screen buffer.
 */
draw(start: number, end: number): void;

/**
 * Render all child elements, writing all data to the screen buffer and drawing the screen.
 */
render(): void;

/**
 * Clear any region on the screen.
 */
clearRegion(x1: number, x2: number, y1: number, y2: number): void;

/**
 * Fill any region with a character of a certain attribute.
 */
fillRegion(attr: string, ch: string, x1: number, x2: number, y1: number, y2: number): void;

/**
 * Focus element by offset of focusable elements.
 */
focusOffset(offset: number): any;

/**
 * Focus previous element in the index.
 */
focusPrevious(): void;

/**
 * Focus next element in the index.
 */
focusNext(): void;

/**
 * Push element on the focus stack (equivalent to screen.focused = el).
 */
focusPush(element: Widgets$BlessedElement): void;

/**
 * Pop element off the focus stack.
 */
focusPop(): Widgets$BlessedElement;

/**
 * Save the focused element.
 */
saveFocus(): Widgets$BlessedElement;

/**
 * Restore the saved focused element.
 */
restoreFocus(): Widgets$BlessedElement;

/**
 * "Rewind" focus to the last visible and attached element.
 */
rewindFocus(): Widgets$BlessedElement;

/**
 * Spawn a process in the foreground, return to blessed app after exit.
 */
spawn(
file: string,
args?: string[],
options?: Widgets$NodeChildProcessExecOptions): child_process.ChildProcess;

/**
 * Spawn a process in the foreground, return to blessed app after exit. Executes callback on error or exit.
 */
exec(
file: string,
args: string[],
options: Widgets$NodeChildProcessExecOptions,
callback: (...args: any[]) => void): child_process.ChildProcess;

/**
 * Read data from text editor.
 */
readEditor(
options: any,
callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
readEditor(callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

/**
 * Set effects based on two events and attributes.
 */
setEffects(
el: Widgets$BlessedElement,
fel: Widgets$BlessedElement,
over: any,
out: any,
effects: any,
temp: any): void;

/**
 * Insert a line into the screen (using csr: this bypasses the output buffer).
 */
insertLine(n: number, y: number, top: number, bottom: number): void;

/**
 * Delete a line from the screen (using csr: this bypasses the output buffer).
 */
deleteLine(n: number, y: number, top: number, bottom: number): void;

/**
 * Insert a line at the bottom of the screen.
 */
insertBottom(top: number, bottom: number): void;

/**
 * Insert a line at the top of the screen.
 */
insertTop(top: number, bottom: number): void;

/**
 * Delete a line at the bottom of the screen.
 */
deleteBottom(top: number, bottom: number): void;

/**
 * Delete a line at the top of the screen.
 */
deleteTop(top: number, bottom: number): void;

/**
 * Enable mouse events for the screen and optionally an element (automatically called when a form of
 * on('mouse') is bound).
 */
enableMouse(el?: Widgets$BlessedElement): void;

/**
 * Enable keypress events for the screen and optionally an element (automatically called when a form of
 * on('keypress') is bound).
 */
enableKeys(el?: Widgets$BlessedElement): void;

/**
 * Enable key and mouse events. Calls bot enableMouse and enableKeys.
 */
enableInput(el?: Widgets$BlessedElement): void;

/**
 * Attempt to copy text to clipboard using iTerm2's proprietary sequence. Returns true if successful.
 */
copyToClipboard(text: string): void;

/**
 * Attempt to change cursor shape. Will not work in all terminals (see artificial cursors for a solution
 * to this). Returns true if successful.
 */
cursorShape(shape: boolean, blink: boolean): any;

/**
 * Attempt to change cursor color. Returns true if successful.
 */
cursorColor(color: string): void;

/**
 * Attempt to reset cursor. Returns true if successful.
 */
cursorReset(): void;

/**
 * Take an SGR screenshot of the screen within the region. Returns a string containing only
 * characters and SGR codes. Can be displayed by simply echoing it in a terminal.
 */
screenshot(xi: number, xl: number, yi: number, yl: number): string;
screenshot(): void;

/**
 * Destroy the screen object and remove it from the global list. Also remove all global events relevant
 * to the screen object. If all screen objects are destroyed, the node process is essentially reset
 * to its initial state.
 */
destroy(): void;

/**
 * Reset the terminal to term. Reloads terminfo.
 */
setTerminal(term: string): void
}

declare interface Widgets$Padding {
left?: number,
right?: number,
top?: number,
bottom?: number
} 

declare class Widgets$PositionCoords  {
xi: number;
xl: number;
yi: number;
yl: number
}

declare interface Widgets$Position {
left: number | string,
right: number | string,
top: number | string,
bottom: number | string
} 

declare interface Widgets$Border {

/**
 * Type of border (line or bg). bg by default.
 */
type?: "line" | "bg",

/**
 * Character to use if bg type, default is space.
 */
ch?: string,

/**
 * Border foreground and background, must be numbers (-1 for default).
 */
bg?: number,
fg?: number,

/**
 * Border attributes.
 */
bold?: string,
underline?: string
} 

declare type Widgets$ElementOptions = {
tags?: boolean,
fg?: string,
bg?: string,
bold?: string,
underline?: string,
style?: any,

/**
 * Border object, see below.
 */
border?: Widgets$Border | "line" | "bg",

/**
 * Element's text content.
 */
content?: string,

/**
 * Element is clickable.
 */
clickable?: boolean,

/**
 * Element is focusable and can receive key input.
 */
input?: boolean,
keyable?: boolean,

/**
 * Element is focused.
 */
focused?: Widgets$BlessedElement,

/**
 * Whether the element is hidden.
 */
hidden?: boolean,

/**
 * A simple text label for the element.
 */
label?: string,

/**
 * A floating text label for the element which appears on mouseover.
 */
hoverText?: string,

/**
 * Text alignment: left, center, or right.
 */
align?: "left" | "center" | "right",

/**
 * Vertical text alignment: top, middle, or bottom.
 */
valign?: "top" | "middle" | "bottom",

/**
 * Shrink/flex/grow to content and child elements. Width/height during render.
 */
shrink?: boolean,

/**
 * Amount of padding on the inside of the element. Can be a number or an object containing
 * the properties: left, right, top, and bottom.
 */
padding?: number | Widgets$Padding,
top?: Types$Types$TTopLeft,
left?: Types$Types$TTopLeft,
right?: Types$Types$TPosition,
bottom?: Types$Types$TPosition,

/**
 * Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink).
 * Percentages can also have offsets (50%+1, 50%-1).
 */
width?: number | string,

/**
 * Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or
 * keyword (center). right and bottom do not accept keywords. Percentages can also have
 * offsets (50%+1, 50%-1).
 */
height?: number | string,

/**
 * Can contain the above options.
 */
position?: Widgets$Position,

/**
 * Whether the element is scrollable or not.
 */
scrollable?: boolean,

/**
 * Background character (default is whitespace ).
 */
ch?: string,

/**
 * Allow the element to be dragged with the mouse.
 */
draggable?: boolean,

/**
 * Draw a translucent offset shadow behind the element.
 */
shadow?: boolean
} & Widgets$INodeOptions


declare interface Widgets$Coords {
xl: number,
xi: number,
yl: number,
yi: number,
base: number,
_contentEnd: {
x: number,
y: number
},
notop: Types$Types$TTopLeft,
noleft: Types$Types$TTopLeft,
noright: Types$Types$TPosition,
nobot: Types$Types$TPosition
} 

declare interface Widgets$LabelOptions {
text: string,
side: Types$Types$TAlign
} 

declare class Widgets$BlessedElement mixins Widgets$NodeWithEvents, Widgets$IHasOptions<Widgets$ElementOptions> {
constructor(opts: Widgets$ElementOptions): this;

/**
 * Original options object.
 */
options: Widgets$ElementOptions;

/**
 * Name of the element. Useful for form submission.
 */
name: string;

/**
 * Border object.
 */
border: Widgets$Border;
style: any;
position: Widgets$Position;
content: string;
hidden: boolean;
visible: boolean;
detached: boolean;

/**
 * Border foreground and background, must be numbers (-1 for default).
 */
bg: number;
fg: number;

/**
 * Border attributes.
 */
bold: string;
underline: string;

/**
 * Calculated width.
 */
width: number | string;

/**
 * Calculated height.
 */
height: number | string;

/**
 * Calculated relative top offset.
 */
top: Types$Types$TTopLeft;

/**
 * Calculated relative left offset.
 */
left: Types$Types$TTopLeft;

/**
 * Calculated relative right offset.
 */
right: Types$Types$TPosition;

/**
 * Calculated relative bottom offset.
 */
bottom: Types$Types$TPosition;

/**
 * Calculated absolute top offset.
 */
atop: Types$Types$TTopLeft;

/**
 * Calculated absolute left offset.
 */
aleft: Types$Types$TTopLeft;

/**
 * Calculated absolute right offset.
 */
aright: Types$Types$TPosition;

/**
 * Calculated absolute bottom offset.
 */
abottom: Types$Types$TPosition;

/**
 * Whether the element is draggable. Set to true to allow dragging.
 */
draggable: boolean;
itop: Types$Types$TTopLeft;
ileft: Types$Types$TTopLeft;
iheight: Types$Types$TPosition;
iwidth: Types$Types$TPosition;

/**
 * Calculated relative top offset.
 */
rtop: Types$Types$TTopLeft;

/**
 * Calculated relative left offset.
 */
rleft: Types$Types$TTopLeft;

/**
 * Calculated relative right offset.
 */
rright: Types$Types$TPosition;

/**
 * Calculated relative bottom offset.
 */
rbottom: Types$Types$TPosition;
lpos: Widgets$PositionCoords;

/**
 * Write content and children to the screen buffer.
 */
render(): Widgets$Coords;

/**
 * Hide element.
 */
hide(): void;

/**
 * Show element.
 */
show(): void;

/**
 * Toggle hidden/shown.
 */
toggle(): void;

/**
 * Focus element.
 */
focus(): void;

/**
 * Same asel.on('screen', ...) except this will automatically keep track of which listeners
 * are bound to the screen object. For use with removeScreenEvent(), free(), and destroy().
 */
onScreenEvent(type: string, handler: (...args: any[]) => void): void;

/**
 * Same asel.removeListener('screen', ...) except this will automatically keep track of which
 * listeners are bound to the screen object. For use with onScreenEvent(), free(), and destroy().
 */
removeScreenEvent(type: string, handler: (...args: any[]) => void): void;

/**
 * Free up the element. Automatically unbind all events that may have been bound to the screen
 * object. This prevents memory leaks. For use with onScreenEvent(), removeScreenEvent(),
 * and destroy().
 */
free(): void;

/**
 * Same as the detach() method, except this will automatically call free() and unbind any screen
 * events to prevent memory leaks. for use with onScreenEvent(), removeScreenEvent(), and free().
 */
destroy(): void;

/**
 * Set the z-index of the element (changes rendering order).
 */
setIndex(z: number): void;

/**
 * Put the element in front of its siblings.
 */
setFront(): void;

/**
 * Put the element in back of its siblings.
 */
setBack(): void;

/**
 * text/options - Set the label text for the top-left corner. Example options: {text:'foo',side:'left'}
 */
setLabel(arg: string | Widgets$LabelOptions): void;

/**
 * Remove the label completely.
 */
removeLabel(): any;

/**
 * text/options - Set a hover text box to follow the cursor. Similar to the "title" DOM attribute
 * in the browser. Example options: {text:'foo'}
 */
setHover(arg: string | Widgets$LabelOptions): void;

/**
 * Remove the hover label completely.
 */
removeHover(): void;

/**
 * Enable mouse events for the element (automatically called when a form of on('mouse') is bound).
 */
enableMouse(): void;

/**
 * Enable keypress events for the element (automatically called when a form of on('keypress') is bound).
 */
enableKeys(): void;

/**
 * Enable key and mouse events. Calls bot enableMouse and enableKeys.
 */
enableInput(): void;

/**
 * Enable dragging of the element.
 */
enableDrag(): void;

/**
 * Disable dragging of the element.
 */
disableDrag(): void;

/**
 * Take an SGR screenshot of the screen within the region. Returns a string containing only
 * characters and SGR codes. Can be displayed by simply echoing it in a terminal.
 */
screenshot(xi: number, xl: number, yi: number, yl: number): string;
screenshot(): void;

/**
 * Set the content. Note: When text is input, it will be stripped of all non-SGR
 * escape codes, tabs will be replaced with 8 spaces, and tags will be replaced
 * with SGR codes (if enabled).
 */
setContent(text: string): void;

/**
 * Return content, slightly different from el.content. Assume the above formatting.
 */
getContent(): string;

/**
 * Similar to setContent, but ignore tags and remove escape codes.
 */
setText(text: string): void;

/**
 * Similar to getContent, but return content with tags and escape codes removed.
 */
getText(): string;

/**
 * Insert a line into the box's content.
 */
insertLine(i: number, lines: string | string[]): void;

/**
 * Delete a line from the box's content.
 */
deleteLine(i: number): void;

/**
 * Get a line from the box's content.
 */
getLine(i: number): string;

/**
 * Get a line from the box's content from the visible top.
 */
getBaseLine(i: number): string;

/**
 * Set a line in the box's content.
 */
setLine(i: number, line: string | string[]): void;

/**
 * Set a line in the box's content from the visible top.
 */
setBaseLine(i: number, line: string | string[]): void;

/**
 * Clear a line from the box's content.
 */
clearLine(i: number): void;

/**
 * Clear a line from the box's content from the visible top.
 */
clearBaseLine(i: number): void;

/**
 * Insert a line at the top of the box.
 */
insertTop(lines: string | string[]): void;

/**
 * Insert a line at the bottom of the box.
 */
insertBottom(lines: string | string[]): void;

/**
 * Delete a line at the top of the box.
 */
deleteTop(): void;

/**
 * Delete a line at the bottom of the box.
 */
deleteBottom(): void;

/**
 * Unshift a line onto the top of the content.
 */
unshiftLine(lines: string | string[]): void;

/**
 * Shift a line off the top of the content.
 */
shiftLine(i: number): void;

/**
 * Push a line onto the bottom of the content.
 */
pushLine(lines: string | string[]): void;

/**
 * Pop a line off the bottom of the content.
 */
popLine(i: number): string;

/**
 * An array containing the content lines.
 */
getLines(): string[];

/**
 * An array containing the lines as they are displayed on the screen.
 */
getScreenLines(): string[];

/**
 * Get a string's displayed width, taking into account double-width, surrogate pairs,
 * combining characters, tags, and SGR escape codes.
 */
strWidth(text: string): string
}

declare type Widgets$ScrollableBoxOptions = {

/**
 * A limit to the childBase. Default is Infinity.
 */
baseLimit?: number,

/**
 * A option which causes the ignoring of childOffset. This in turn causes the
 * childBase to change every time the element is scrolled.
 */
alwaysScroll?: boolean,

/**
 * Object enabling a scrollbar.
 * Style of the scrollbar track if present (takes regular style options).
 */
scrollbar?: {
style?: any,
track?: any,
ch?: string
}
} & Widgets$ElementOptions


declare type Widgets$ScrollableTextOptions = {

/**
 * Whether to enable automatic mouse support for this element.
 * Use pre-defined mouse events (right-click for editor).
 */
mouse?: boolean | (() => void),

/**
 * Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).
 */
keys?: string | string[] | boolean,

/**
 * Use vi keys with the keys option.
 */
vi?: boolean
} & Widgets$ScrollableBoxOptions


declare type Widgets$BoxOptions = {
bindings?: any
} & Widgets$ScrollableTextOptions



/**
 * DEPRECATED - Use Box with the scrollable option instead. A box with scrollable content.
 */
declare class Widgets$ScrollableBoxElement mixins Widgets$BlessedElement {

/**
 * The offset of the top of the scroll content.
 */
childBase: number;

/**
 * The offset of the chosen item/line.
 */
childOffset: number;

/**
 * Scroll the content by a relative offset.
 */
scroll(offset: number, always?: boolean): void;

/**
 * Scroll the content to an absolute index.
 */
scrollTo(index: number): void;

/**
 * Same as scrollTo.
 */
setScroll(index: number): void;

/**
 * Set the current scroll index in percentage (0-100).
 */
setScrollPerc(perc: number): void;

/**
 * Get the current scroll index in lines.
 */
getScroll(): number;

/**
 * Get the actual height of the scrolling area.
 */
getScrollHeight(): number;

/**
 * Get the current scroll index in percentage.
 */
getScrollPerc(): number;

/**
 * Reset the scroll index to its initial state.
 */
resetScroll(): void;
on(event: string, listener: (...args: any[]) => void): this;

/**
 * Received when the element is scrolled.
 */
on(event: "scroll", callback: () => void): this
}


/**
 * DEPRECATED - Use Box with the scrollable and alwaysScroll options instead.
 * A scrollable text box which can display and scroll text, as well as handle
 * pre-existing newlines and escape codes.
 */
declare class Widgets$ScrollableTextElement mixins Widgets$ScrollableBoxElement {}


/**
 * A box element which draws a simple box containing content or other elements.
 */
declare class Widgets$BoxElement mixins Widgets$ScrollableTextElement, Widgets$IHasOptions<Widgets$BoxOptions> {
constructor(opts: Widgets$BoxOptions): this;

/**
 * Original options object.
 */
options: Widgets$BoxOptions
}

declare type Widgets$TextOptions = {

/**
 * Fill the entire line with chosen bg until parent bg ends, even if there
 * is not enough text to fill the entire width.
 */
fill?: boolean,

/**
 * Text alignment: left, center, or right.
 */
align?: Types$Types$TAlign
} & Widgets$ElementOptions



/**
 * An element similar to Box, but geared towards rendering simple text elements.
 */
declare class Widgets$TextElement mixins Widgets$BlessedElement, Widgets$IHasOptions<Widgets$TextOptions> {
constructor(opts: Widgets$TextOptions): this;

/**
 * Original options object.
 */
options: Widgets$TextOptions
}


/**
 * A simple line which can be line or bg styled.
 */
declare type Widgets$LineOptions = {

/**
 * Can be vertical or horizontal.
 */
orientation?: "vertical" | "horizontal",

/**
 * Treated the same as a border object. (attributes can be contained in style).
 */
type?: string,
bg?: string,
fg?: string,
ch?: string
} & Widgets$BoxOptions



/**
 * A simple line which can be line or bg styled.
 */
declare class Widgets$LineElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$LineOptions> {
constructor(opts: Widgets$LineOptions): this;

/**
 * Original options object.
 */
options: Widgets$LineOptions
}

declare type Widgets$BigTextOptions = {

/**
 * bdf->json font file to use (see ttystudio for instructions on compiling BDFs to JSON).
 */
font?: string,

/**
 * bdf->json bold font file to use (see ttystudio for instructions on compiling BDFs to JSON).
 */
fontBold?: string,

/**
 * foreground character. (default: ' ')
 */
fch?: string
} & Widgets$BoxOptions



/**
 * A box which can render content drawn as 8x14 cell characters using the terminus font.
 */
declare class Widgets$BigTextElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$BigTextOptions> {
constructor(opts: Widgets$BigTextOptions): this;

/**
 * Original options object.
 */
options: Widgets$BigTextOptions
}

declare interface Widgets$ListElementStyle {
selected?: any,
item?: any
} 

declare type Widgets$ListOptions<TStyle: Widgets$ListElementStyle> = {

/**
 * Style for a selected item. Style for an unselected item.
 */
style?: Types$TStyle,

/**
 * An array of strings which become the list's items.
 */
items?: string[],

/**
 * A function that is called when vi mode is enabled and the key / is pressed. This function accepts a
 * callback function which should be called with the search string. The search string is then used to
 * jump to an item that is found in items.
 */
search(err: any, value?: string): void,

/**
 * Whether the list is interactive and can have items selected (Default: true).
 */
interactive?: boolean,

/**
 * Whether to automatically override tags and invert fg of item when selected (Default: true).
 */
invertSelected?: boolean
} & Widgets$BoxOptions


declare type Widgets$ListElementEventType = "cancel"
| "action"
| "create item"
| "add item"
| "remove item"
| "insert item"
| "set items";

declare class Widgets$ListElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$ListOptions<Widgets$ListElementStyle>> {
constructor(opts: Widgets$ListOptions<Widgets$ListElementStyle>): this;

/**
 * Original options object.
 */
options: Widgets$ListOptions<Widgets$ListElementStyle>;

/**
 * Add an item based on a string.
 */
add(text: string): void;

/**
 * Add an item based on a string.
 */
addItem(text: string): void;

/**
 * Removes an item from the list. Child can be an element, index, or string.
 */
removeItem(child: Widgets$BlessedElement): Widgets$BlessedElement;

/**
 * Push an item onto the list.
 */
pushItem(child: Widgets$BlessedElement): number;

/**
 * Pop an item off the list.
 */
popItem(): Widgets$BlessedElement;

/**
 * Unshift an item onto the list.
 */
unshiftItem(child: Widgets$BlessedElement): number;

/**
 * Shift an item off the list.
 */
shiftItem(): Widgets$BlessedElement;

/**
 * Inserts an item to the list. Child can be an element, index, or string.
 */
insertItem(i: number, child: Widgets$BlessedElement): void;

/**
 * Returns the item element. Child can be an element, index, or string.
 */
getItem(child: Widgets$BlessedElement): Widgets$BlessedElement;

/**
 * Set item to content.
 */
setItem(child: Widgets$BlessedElement, content: Widgets$BlessedElement | string): void;

/**
 * Remove and insert items to the list.
 */
spliceItem(i: number, n: number, ...items: Widgets$BlessedElement[]): void;

/**
 * Clears all items from the list.
 */
clearItems(): void;

/**
 * Sets the list items to multiple strings.
 */
setItems(items: Widgets$BlessedElement[]): void;

/**
 * Returns the item index from the list. Child can be an element, index, or string.
 */
getItemIndex(child: Widgets$BlessedElement): number;

/**
 * Select an index of an item.
 */
select(index: number): void;

/**
 * Select item based on current offset.
 */
move(offset: number): void;

/**
 * Select item above selected.
 */
up(amount: number): void;

/**
 * Select item below selected.
 */
down(amount: number): void;

/**
 * Show/focus list and pick an item. The callback is executed with the result.
 */
pick(callback: () => void): void;

/**
 * Find an item based on its text content.
 */
fuzzyFind(arg: string | RegExp | (() => void)): void;
on(event: string, listener: (...args: any[]) => void): this;

/**
 * Received when an item is selected.
 */
on(
event: "select",
callback: (item: Widgets$BoxElement, index: number) => void): this;
on(event: Widgets$ListElementEventType, callback: () => void): this;
on(
event: "select item",
callback: (item: Widgets$BlessedElement, index: number) => void): this
}

declare type Widgets$FileManagerOptions = {

/**
 * Current working directory.
 */
cwd?: string
} & Widgets$ListOptions<Widgets$ListElementStyle>


declare class Widgets$FileManagerElement mixins Widgets$ListElement, Widgets$IHasOptions<Widgets$FileManagerOptions> {
constructor(opts: Widgets$FileManagerOptions): this;

/**
 * Original options object.
 */
options: Widgets$FileManagerOptions;

/**
 * Current working directory.
 */
cwd: string;

/**
 * Refresh the file list (perform a readdir on cwd and update the list items).
 */
refresh(cwd: string, callback: () => void): void;
refresh(callback?: () => void): void;

/**
 * Pick a single file and return the path in the callback.
 */
pick(cwd: string, callback: () => void): void;
pick(callback: () => void): void;

/**
 * Reset back to original cwd.
 */
reset(cwd: string, callback: () => void): void;
reset(callback?: () => void): void;
on(event: string, listener: (...args: any[]) => void): this;

/**
 * Received when an item is selected.
 */
on(event: "cd", callback: (file: string, cwd: string) => void): this;

/**
 * Received when an item is selected.
 */
on(event: "file", callback: (file: string) => void): this;
on(event: "error", callback: (err: any, file: string) => void): this;
on(event: "refresh", callback: () => void): this
}

declare type Widgets$StyleListTable = {

/**
 * Header style.
 */
header?: any,

/**
 * Cell style.
 */
cell?: any
} & Widgets$ListElementStyle


declare type Widgets$ListTableOptions = {

/**
 * Array of array of strings representing rows.
 */
rows?: string[],
data?: string[][],

/**
 * Spaces to attempt to pad on the sides of each cell. 2 by default: one space on each side
 * (only useful if the width is shrunken).
 */
pad?: number,

/**
 * Do not draw inner cells.
 */
noCellBorders?: boolean,
style?: Widgets$StyleListTable
} & Widgets$ListOptions<Widgets$StyleListTable>


declare class Widgets$ListTableElement mixins Widgets$ListElement, Widgets$IHasOptions<Widgets$ListTableOptions> {
constructor(opts: Widgets$ListTableOptions): this;

/**
 * Original options object.
 */
options: Widgets$ListTableOptions;

/**
 * Set rows in table. Array of arrays of strings.
 * @example :

table.setData([
[ 'Animals',  'Foods'  ],
[ 'Elephant', 'Apple'  ],
[ 'Bird',     'Orange' ]
]);
 */
setRows(rows: string[][]): void;

/**
 * Set rows in table. Array of arrays of strings.
 * @example :

table.setData([
[ 'Animals',  'Foods'  ],
[ 'Elephant', 'Apple'  ],
[ 'Bird',     'Orange' ]
]);
 */
setData(rows: string[][]): void
}

declare type Widgets$ListbarOptions = {
style?: Widgets$ListElementStyle,

/**
 * Set buttons using an object with keys as titles of buttons, containing of objects
 * containing keys of keys and callback.
 */
commands: Types$Types$ListbarCommand[],
items: Types$Types$ListbarCommand[],

/**
 * Automatically bind list buttons to keys 0-9.
 */
autoCommandKeys: boolean
} & Widgets$BoxOptions


declare class Widgets$ListbarElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$ListbarOptions> {
constructor(opts: Widgets$ListbarOptions): this;

/**
 * Original options object.
 */
options: Widgets$ListbarOptions;

/**
 * Set commands (see commands option above).
 */
setItems(commands: Types$Types$ListbarCommand[]): void;

/**
 * Append an item to the bar.
 */
add(item: Types$Types$ListbarCommand, callback: () => void): void;

/**
 * Append an item to the bar.
 */
addItem(item: Types$Types$ListbarCommand, callback: () => void): void;

/**
 * Append an item to the bar.
 */
appendItem(item: Types$Types$ListbarCommand, callback: () => void): void;

/**
 * Select an item on the bar.
 */
select(offset: number): void;

/**
 * Remove item from the bar.
 */
removeItem(child: Widgets$BlessedElement): void;

/**
 * Move relatively across the bar.
 */
move(offset: number): void;

/**
 * Move left relatively across the bar.
 */
moveLeft(offset: number): void;

/**
 * Move right relatively across the bar.
 */
moveRight(offset: number): void;

/**
 * Select button and execute its callback.
 */
selectTab(index: number): void;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "set items" | "remove item" | "select tab", callback: () => void): this
}

declare type Widgets$FormOptions = {

/**
 * Allow default keys (tab, vi keys, enter).
 */
keys?: any,

/**
 * Allow vi keys.
 */
vi?: boolean
} & Widgets$BoxOptions


declare class Widgets$FormElement<TFormData> mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$FormOptions> {
constructor(opts: Widgets$FormOptions): this;

/**
 * Original options object.
 */
options: Widgets$FormOptions;

/**
 * Last submitted data.
 */
submission: TFormData;

/**
 * Focus next form element.
 */
focusNext(): void;

/**
 * Focus previous form element.
 */
focusPrevious(): void;

/**
 * Submit the form.
 */
submit(): void;

/**
 * Discard the form.
 */
cancel(): void;

/**
 * Clear the form.
 */
reset(): void;
on(event: string, listener: (...args: any[]) => void): this;

/**
 * Form is submitted. Receives a data object.
 */
on(event: "submit", callback: (out: TFormData) => void): this;
on(event: "cancel" | "reset", callback: () => void): this
}

declare type Widgets$InputOptions = {} & Widgets$BoxOptions


declare class Widgets$InputElement mixins Widgets$BoxElement {
constructor(opts: Widgets$InputOptions): this
}


/**
 * A box which allows multiline text input.
 */
declare type Widgets$TextareaOptions = {

/**
 * Call readInput() when the element is focused. Automatically unfocus.
 */
inputOnFocus?: boolean
} & Widgets$InputOptions


declare type Widgets$TextareaElementEventType = "error" | "submit" | "cancel" | "action";

declare class Widgets$TextareaElement mixins Widgets$InputElement, Widgets$IHasOptions<Widgets$TextareaOptions> {
constructor(opts: Widgets$TextareaOptions): this;

/**
 * Original options object.
 */
options: Widgets$TextareaOptions;

/**
 * The input text. read-only.
 */
value: string;

/**
 * Submit the textarea (emits submit).
 */
submit(): void;

/**
 * Cancel the textarea (emits cancel).
 */
cancel(): void;

/**
 * Grab key events and start reading text from the keyboard. Takes a callback which receives
 * the final value.
 */
readInput(callback?: (err: any, value?: string) => void): void;

/**
 * Grab key events and start reading text from the keyboard. Takes a callback which receives
 * the final value.
 */
input(callback: (err: any, value?: string) => void): void;

/**
 * Grab key events and start reading text from the keyboard. Takes a callback which receives
 * the final value.
 */
setInput(callback: (err: any, value?: string) => void): void;

/**
 * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
 * receives the final value.
 */
readEditor(callback: (err: any, value?: string) => void): void;

/**
 * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
 * receives the final value.
 */
editor(callback: (err: any, value?: string) => void): void;

/**
 * Open text editor in $EDITOR, read the output from the resulting file. Takes a callback which
 * receives the final value.
 */
setEditor(callback: (err: any, value?: string) => void): void;

/**
 * The same as this.value, for now.
 */
getValue(): string;

/**
 * Clear input.
 */
clearValue(): void;

/**
 * Set value.
 */
setValue(text: string): void;
on(event: string, listener: (...args: any[]) => void): this;
on(event: Widgets$TextareaElementEventType, callback: (err: any) => void): this
}

declare type Widgets$TextboxOptions = {

/**
 * Completely hide text.
 */
secret?: boolean,

/**
 * Replace text with asterisks (*).
 */
censor?: boolean
} & Widgets$TextareaOptions


declare class Widgets$TextboxElement mixins Widgets$TextareaElement, Widgets$IHasOptions<Widgets$TextboxOptions> {
constructor(opts: Widgets$TextboxOptions): this;

/**
 * Original options object.
 */
options: Widgets$TextboxOptions;

/**
 * Completely hide text.
 */
secret: boolean;

/**
 * Replace text with asterisks (*).
 */
censor: boolean
}

declare type Widgets$ButtonOptions = {} & Widgets$BoxOptions


declare class Widgets$ButtonElement mixins Widgets$InputElement, Widgets$IHasOptions<Widgets$ButtonOptions> {
constructor(opts: Widgets$ButtonOptions): this;

/**
 * Original options object.
 */
options: Widgets$ButtonOptions;

/**
 * Press button. Emits press.
 */
press(): void;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "press", callback: () => void): this
}

declare type Widgets$CheckboxOptions = {

/**
 * whether the element is checked or not.
 */
checked?: boolean,

/**
 * enable mouse support.
 */
mouse?: boolean
} & Widgets$BoxOptions



/**
 * A checkbox which can be used in a form element.
 */
declare class Widgets$CheckboxElement mixins Widgets$InputElement, Widgets$IHasOptions<Widgets$CheckboxOptions> {
constructor(options?: Widgets$CheckboxOptions): this;

/**
 * Original options object.
 */
options: Widgets$CheckboxOptions;

/**
 * the text next to the checkbox (do not use setcontent, use `check.text = ''`).
 */
text: string;

/**
 * whether the element is checked or not.
 */
checked: boolean;

/**
 * same as `checked`.
 */
value: boolean;

/**
 * check the element.
 */
check(): void;

/**
 * uncheck the element.
 */
uncheck(): void;

/**
 * toggle checked state.
 */
toggle(): void
}

declare type Widgets$RadioSetOptions = {} & Widgets$BoxOptions



/**
 * An element wrapping RadioButtons. RadioButtons within this element will be mutually exclusive
 * with each other.
 */
declare class Widgets$RadioSetElement mixins Widgets$BoxElement {
constructor(opts: Widgets$RadioSetOptions): this
}

declare type Widgets$RadioButtonOptions = {} & Widgets$BoxOptions



/**
 * A radio button which can be used in a form element.
 */
declare class Widgets$RadioButtonElement mixins Widgets$CheckboxElement {
constructor(opts: Widgets$RadioButtonOptions): this
}

declare type Widgets$PromptOptions = {} & Widgets$BoxOptions



/**
 * A prompt box containing a text input, okay, and cancel buttons (automatically hidden).
 */
declare class Widgets$PromptElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$PromptOptions> {
constructor(opts: Widgets$PromptOptions): this;
options: Widgets$PromptOptions;

/**
 * Show the prompt and wait for the result of the textbox. Set text and initial value.
 */
input(text: string, value: string, callback: (err: any, value: string) => void): void;
setInput(text: string, value: string, callback: (err: any, value: string) => void): void;
readInput(text: string, value: string, callback: (err: any, value: string) => void): void
}

declare type Widgets$QuestionOptions = {} & Widgets$BoxOptions



/**
 * A question box containing okay and cancel buttons (automatically hidden).
 */
declare class Widgets$QuestionElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$QuestionOptions> {
constructor(opts: Widgets$QuestionOptions): this;
options: Widgets$QuestionOptions;

/**
 * Ask a question. callback will yield the result.
 */
ask(question: string, callback: (err: any, value: string) => void): void
}

declare type Widgets$MessageOptions = {} & Widgets$BoxOptions



/**
 * A box containing a message to be displayed (automatically hidden).
 */
declare class Widgets$MessageElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$MessageOptions> {
constructor(opts: Widgets$MessageOptions): this;
options: Widgets$MessageOptions;

/**
 * Display a message for a time (default is 3 seconds). Set time to 0 for a
 * perpetual message that is dismissed on keypress.
 */
log(text: string, time: number, callback: (err: any) => void): void;
log(text: string, callback: (err: any) => void): void;
display(text: string, time: number, callback: (err: any) => void): void;
display(text: string, callback: (err: any) => void): void;

/**
 * Display an error in the same way.
 */
error(text: string, time: number, callback: () => void): void;
error(text: string, callback: () => void): void
}

declare type Widgets$LoadingOptions = {} & Widgets$BoxOptions



/**
 * A box with a spinning line to denote loading (automatically hidden).
 */
declare class Widgets$LoadingElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$LoadingOptions> {
constructor(opts: Widgets$LoadingOptions): this;
options: Widgets$LoadingOptions;

/**
 * Display the loading box with a message. Will lock keys until stop is called.
 */
load(text: string): void;

/**
 * Hide loading box. Unlock keys.
 */
stop(): void
}

declare type Widgets$ProgressBarOptions = {

/**
 * can be `horizontal` or `vertical`.
 */
orientation: string,

/**
 * the character to fill the bar with (default is space).
 */
pch: string,

/**
 * the amount filled (0 - 100).
 */
filled: number,

/**
 * same as `filled`.
 */
value: number,

/**
 * enable key support.
 */
keys: boolean,

/**
 * enable mouse support.
 */
mouse: boolean
} & Widgets$BoxOptions



/**
 * A progress bar allowing various styles. This can also be used as a form input.
 */
declare class Widgets$ProgressBarElement mixins Widgets$InputElement, Widgets$IHasOptions<Widgets$ProgressBarOptions> {
constructor(options?: Widgets$ProgressBarOptions): this;
options: Widgets$ProgressBarOptions;

/**
 * progress the bar by a fill amount.
 */
progress(amount: number): void;

/**
 * set progress to specific amount.
 */
setProgress(amount: number): void;

/**
 * reset the bar.
 */
reset(): void;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "reset" | "complete", callback: () => void): this
}

declare type Widgets$LogOptions = {

/**
 * amount of scrollback allowed. default: Infinity.
 */
scrollback?: number,

/**
 * scroll to bottom on input even if the user has scrolled up. default: false.
 */
scrollOnInput?: boolean
} & Widgets$ScrollableTextOptions



/**
 * A log permanently scrolled to the bottom.
 */
declare class Widgets$Log mixins Widgets$ScrollableTextElement, Widgets$IHasOptions<Widgets$LogOptions> {
constructor(options?: Widgets$LogOptions): this;
options: Widgets$LogOptions;

/**
 * amount of scrollback allowed. default: Infinity.
 */
scrollback: number;

/**
 * scroll to bottom on input even if the user has scrolled up. default: false.
 */
scrollOnInput: boolean;

/**
 * add a log line.
 */
log(text: string): void;

/**
 * add a log line.
 */
add(text: string): void
}

declare type Widgets$TableOptions = {

/**
 * array of array of strings representing rows (same as `data`).
 */
rows?: string[][],

/**
 * array of array of strings representing rows (same as `rows`).
 */
data?: string[][],

/**
 * spaces to attempt to pad on the sides of each cell. `2` by default: one space on each side (only useful if the width is shrunken).
 */
pad?: number,

/**
 * do not draw inner cells.
 */
noCellBorders?: boolean,

/**
 * fill cell borders with the adjacent background color.
 */
fillCellBorders?: boolean
} & Widgets$BoxOptions



/**
 * A stylized table of text elements.
 */
declare class Widgets$TableElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$TableOptions> {
constructor(opts: Widgets$TableOptions): this;
options: Widgets$TableOptions;

/**
 * set rows in table. array of arrays of strings.
 */
setData(rows: string[][]): void;

/**
 * set rows in table. array of arrays of strings.
 */
setRows(rows: string[][]): void
}

declare type Widgets$TerminalOptions = {

/**
 * handler for input data.
 */
handler(userInput: Buffer): void,

/**
 * name of shell. $SHELL by default.
 */
shell?: string,

/**
 * args for shell.
 */
args?: any,

/**
 * can be line, underline, and block.
 */
cursor?: "line" | "underline" | "block",
terminal?: string,

/**
 * Object for process env.
 */
env?: any
} & Widgets$BoxOptions


declare class Widgets$TerminalElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$TerminalOptions> {
constructor(opts: Widgets$TerminalOptions): this;
options: Widgets$TerminalOptions;

/**
 * reference to the headless term.js terminal.
 */
term: any;

/**
 * reference to the pty.js pseudo terminal.
 */
pty: any;

/**
 * write data to the terminal.
 */
write(data: string): void;

/**
 * nearly identical to `element.screenshot`, however, the specified region includes the terminal's
 * _entire_ scrollback, rather than just what is visible on the screen.
 */
screenshot(xi?: number, xl?: number, yi?: number, yl?: number): string
}

declare type Widgets$ImageOptions = {

/**
 * path to image.
 */
file: string,

/**
 * path to w3mimgdisplay. if a proper w3mimgdisplay path is not given, blessed will search the
 * entire disk for the binary.
 */
type: "ansi" | "overlay" | "w3m"
} & Widgets$BoxOptions



/**
 * Display an image in the terminal (jpeg, png, gif) using w3mimgdisplay. Requires w3m to be installed.
 * X11 required: works in xterm, urxvt, and possibly other terminals.
 */
declare class Widgets$ImageElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$ImageOptions> {
constructor(options?: Widgets$ImageOptions): this;
options: Widgets$ImageOptions
}

declare type Widgets$ANSIImageOptions = {

/**
 * URL or path to PNG/GIF file. Can also be a buffer.
 */
file: string,

/**
 * Scale cellmap down (0-1.0) from its original pixel width/height (Default: 1.0).
 */
scale: number,

/**
 * This differs from other element's width or height in that only one
 * of them is needed: blessed will maintain the aspect ratio of the image
 * as it scales down to the proper number of cells. NOTE: PNG/GIF's are
 * always automatically shrunken to size (based on scale) if a width or
 * height is not given.
 */
width: number | string,
height: number | string,

/**
 * Add various "density" ASCII characters over the rendering to give the
 * image more detail, similar to libcaca/libcucul (the library mplayer uses
 * to display videos in the terminal).
 */
ascii: string,

/**
 * Whether to animate if the image is an APNG/animating GIF. If false, only
 * display the first frame or IDAT (Default: true).
 */
animate: boolean,

/**
 * Set the speed of animation. Slower: 0.0-1.0. Faster: 1-1000. It cannot go
 * faster than 1 frame per millisecond, so 1000 is the fastest. (Default: 1.0)
 */
speed: number,

/**
 * mem or cpu. If optimizing for memory, animation frames will be rendered to
 * bitmaps as the animation plays, using less memory. Optimizing for cpu will
 * precompile all bitmaps beforehand, which may be faster, but might also OOM
 * the process on large images. (Default: mem).
 */
optimization: "mem" | "cpu"
} & Widgets$BoxOptions



/**
 * Convert any .png file (or .gif, see below) to an ANSI image and display it as an element.
 */
declare class Widgets$ANSIImageElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$ANSIImageOptions> {
constructor(options?: Widgets$ANSIImageOptions): this;
options: Widgets$ANSIImageOptions;

/**
 * Image object from the png reader.
 */
img: Types$Types$TImage;

/**
 * set the image in the box to a new path.
 */
setImage(img: string, callback: () => void): void;

/**
 * clear the current image.
 */
clearImage(callback: () => void): void;

/**
 * Play animation if it has been paused or stopped.
 */
play(): void;

/**
 * Pause animation.
 */
pause(): void;

/**
 * Stop animation.
 */
stop(): void
}

declare type Widgets$OverlayImageOptions = {

/**
 * Path to image.
 */
file: string,

/**
 * Render the file as ANSI art instead of using w3m to overlay Internally uses the
 * ANSIImage element. See the ANSIImage element for more information/options. (Default: true).
 */
ansi: boolean,

/**
 * Path to w3mimgdisplay. If a proper w3mimgdisplay path is not given, blessed will
 * search the entire disk for the binary.
 */
w3m: string,

/**
 * Whether to search /usr, /bin, and /lib for w3mimgdisplay (Default: true).
 */
search: string
} & Widgets$BoxOptions



/**
 * Convert any .png file (or .gif, see below) to an ANSI image and display it as an element.
 */
declare class Widgets$OverlayImageElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$OverlayImageOptions> {
constructor(options?: Widgets$OverlayImageOptions): this;
options: Widgets$OverlayImageOptions;

/**
 * set the image in the box to a new path.
 */
setImage(img: string, callback: () => void): void;

/**
 * clear the current image.
 */
clearImage(callback: () => void): void;

/**
 * get the size of an image file in pixels.
 */
imageSize(img: string, callback: () => void): void;

/**
 * get the size of the terminal in pixels.
 */
termSize(callback: () => void): void;

/**
 * get the pixel to cell ratio for the terminal.
 */
getPixelRatio(callback: () => void): void
}

declare type Widgets$VideoOptions = {

/**
 * Video to play.
 */
file: string,

/**
 * Start time in seconds.
 */
start: number
} & Widgets$BoxOptions


declare class Widgets$VideoElement mixins Widgets$BoxElement, Widgets$IHasOptions<Widgets$VideoOptions> {
constructor(options?: Widgets$VideoOptions): this;
options: Widgets$VideoOptions;

/**
 * The terminal element running mplayer or mpv.
 */
tty: any
}

declare type Widgets$LayoutOptions = {

/**
 * A callback which is called right before the children are iterated over to be rendered. Should return an
 * iterator callback which is called on each child element: iterator(el, i).
 */
renderer(): void,

/**
 * Using the default renderer, it provides two layouts: inline, and grid. inline is the default and will render
 * akin to inline-block. grid will create an automatic grid based on element dimensions. The grid cells'
 * width and height are always determined by the largest children in the layout.
 */
layout: "inline" | "inline-block" | "grid"
} & Widgets$ElementOptions


declare class Widgets$LayoutElement mixins Widgets$BlessedElement, Widgets$IHasOptions<Widgets$LayoutOptions> {
constructor(options?: Widgets$LayoutOptions): this;
options: Widgets$LayoutOptions;

/**
 * A callback which is called right before the children are iterated over to be rendered. Should return an
 * iterator callback which is called on each child element: iterator(el, i).
 */
renderer(coords: Widgets$PositionCoords): void;

/**
 * Check to see if a previous child element has been rendered and is visible on screen. This is only useful
 * for checking child elements that have already been attempted to be rendered! see the example below.
 */
isRendered(el: Widgets$BlessedElement): boolean;

/**
 * Get the last rendered and visible child element based on an index. This is useful for basing the position
 * of the current child element on the position of the last child element.
 */
getLast(i: number): Widgets$BlessedElement;

/**
 * Get the last rendered and visible child element coords based on an index. This is useful for basing the position
 * of the current child element on the position of the last child element. See the example below.
 */
getLastCoords(i: number): Widgets$PositionCoords
}

declare class Widgets$Program  {

/**
 * Wrap the given text in terminal formatting codes corresponding to the given attribute
 * name. The `attr` string can be of the form `red fg` or `52 bg` where `52` is a 0-255
 * integer color number.
 */
text(text: string, attr: string): string
}
	declare class widget$Terminal mixins Widgets$Widgets$TerminalElement {}
	declare export function screen(options?: Widgets$Widgets$IScreenOptions): Widgets$Widgets$Screen

	declare export function box(options?: Widgets$Widgets$BoxOptions): Widgets$Widgets$BoxElement

	declare export function text(options?: Widgets$Widgets$TextOptions): Widgets$Widgets$TextElement

	declare export function line(options?: Widgets$Widgets$LineOptions): Widgets$Widgets$LineElement

	declare export function scrollablebox(options?: Widgets$Widgets$BoxOptions): Widgets$Widgets$BoxElement

	declare export function scrollabletext(options?: Widgets$Widgets$BoxOptions): Widgets$Widgets$BoxElement

	declare export function bigtext(options?: Widgets$Widgets$BigTextOptions): Widgets$Widgets$BigTextElement

	declare export function list(
options?: Widgets$Widgets$ListOptions<Widgets$Widgets$ListElementStyle>): Widgets$Widgets$ListElement

	declare export function filemanager(
options?: Widgets$Widgets$FileManagerOptions): Widgets$Widgets$FileManagerElement

	declare export function listtable(options?: Widgets$Widgets$ListTableOptions): Widgets$Widgets$ListTableElement

	declare export function listbar(options?: Widgets$Widgets$ListbarOptions): Widgets$Widgets$ListbarElement

	declare export function form<TFormData>(
options?: Widgets$Widgets$FormOptions): Widgets$Widgets$FormElement<TFormData>

	declare export function input(options?: Widgets$Widgets$InputOptions): Widgets$Widgets$InputElement

	declare export function textarea(options?: Widgets$Widgets$TextareaOptions): Widgets$Widgets$TextareaElement

	declare export function textbox(options?: Widgets$Widgets$TextboxOptions): Widgets$Widgets$TextboxElement

	declare export function button(options?: Widgets$Widgets$ButtonOptions): Widgets$Widgets$ButtonElement

	declare export function checkbox(options?: Widgets$Widgets$CheckboxOptions): Widgets$Widgets$CheckboxElement

	declare export function radioset(options?: Widgets$Widgets$RadioSetOptions): Widgets$Widgets$RadioSetElement

	declare export function radiobutton(
options?: Widgets$Widgets$RadioButtonOptions): Widgets$Widgets$RadioButtonElement

	declare export function table(options?: Widgets$Widgets$TableOptions): Widgets$Widgets$TableElement

	declare export function prompt(options?: Widgets$Widgets$PromptOptions): Widgets$Widgets$PromptElement

	declare export function question(options?: Widgets$Widgets$QuestionOptions): Widgets$Widgets$QuestionElement

	declare export function message(options?: Widgets$Widgets$MessageOptions): Widgets$Widgets$MessageElement

	declare export function loading(options?: Widgets$Widgets$LoadingOptions): Widgets$Widgets$LoadingElement

	declare export function log(options?: Widgets$Widgets$LogOptions): Widgets$Widgets$Log

	declare export function progressbar(
options?: Widgets$Widgets$ProgressBarOptions): Widgets$Widgets$ProgressBarElement

	declare export function program(options?: Widgets$Widgets$IScreenOptions): BlessedProgram

	declare export function terminal(options?: Widgets$Widgets$TerminalOptions): Widgets$Widgets$TerminalElement

	declare export function layout(options?: Widgets$Widgets$LayoutOptions): Widgets$Widgets$LayoutElement

	declare export function escape(item: any): any

	declare export var colors: {
match(hexColor: string): string
};
    }
