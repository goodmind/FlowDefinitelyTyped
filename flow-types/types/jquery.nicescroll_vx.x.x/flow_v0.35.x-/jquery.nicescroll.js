declare module 'jquery.nicescroll' {
        declare interface JQueryNiceScroll$NiceScrollPage {
maxw: number,
maxh: number,
width: number,
height: number,
w: number,
h: number
} 

declare interface JQueryNiceScroll$NiceScroll {
show(): JQueryNiceScroll$NiceScroll,
hide(): JQueryNiceScroll$NiceScroll,
toggle(): JQueryNiceScroll$NiceScroll,
onResize(e?: Event, page?: JQueryNiceScroll$NiceScrollPage): JQueryNiceScroll$NiceScroll,
resize(e?: Event, page?: JQueryNiceScroll$NiceScrollPage): JQueryNiceScroll$NiceScroll,
remove(): void,
stop(): JQueryNiceScroll$NiceScroll,
doScrollPos(x: number, y: number, spd: number): void,
doScrollLeft(x: number, duration: number): void,
doScrollTop(x: number, duration: number): void
} 

declare interface JQueryNiceScroll$NiceScrollOptions {
zindex?: "auto" | number,
cursoropacitymin?: number,
cursoropacitymax?: number,
cursorcolor?: string,
cursorwidth?: string,
cursorborder?: string,
cursorborderradius?: string,
scrollspeed?: number,
mousescrollstep?: number,
touchbehavior?: boolean,
emulatetouch?: boolean,
hwacceleration?: boolean,
usetransition?: boolean,
boxzoom?: boolean,
dblclickzoom?: boolean,
gesturezoom?: boolean,
grabcursorenabled?: boolean,
autohidemode?: "leave"
| "scroll"
| "cursor"
| "hidden"
| boolean,
background?: string,
iframeautoresize?: boolean,
cursorminheight?: number,
preservenativescrolling?: boolean,
railoffset?: boolean | {
top?: number,
left?: number
},
railhoffset?: boolean | {
top?: number,
left?: number
},
bouncescroll?: boolean,
spacebarenabled?: boolean,
railpadding?: {
top: number,
right: number,
left: number,
bottom: number
},
disableoutline?: boolean,
horizrailenabled?: boolean,
railalign?: "right" | "left" | "top" | "bottom",
railvalign?: "right" | "left" | "top" | "bottom",
enabletranslate3d?: boolean,
enablemousewheel?: boolean,
enablekeyboard?: boolean,
smoothscroll?: boolean,
sensitiverail?: boolean,
enablemouselockapi?: boolean,
cursorfixedheight?: number,
directionlockdeadzone?: number,
hidecursordelay?: number,
nativeparentscrolling?: boolean,
enablescrollonselection?: boolean,
overflowx?: "auto"
| "hidden"
| "inherit"
| "initial"
| "overlay"
| "scroll"
| "unset"
| "visible",
overflowy?: "auto"
| "hidden"
| "inherit"
| "initial"
| "overlay"
| "scroll"
| "unset"
| "visible",
cursordragspeed?: number,
rtlmode?: "auto" | boolean,
cursordragontouch?: boolean,
oneaxismousemode?: "auto" | boolean,
scriptpath?: string,
preventmultitouchscrolling?: boolean,
disablemutationobserver?: boolean,
enableobserver?: boolean,
scrollbarid?: string,
scrollCLass?: string
} 
	declare interface JQuery {
niceScroll(
options?: JQueryNiceScroll$JQueryNiceScroll$NiceScrollOptions): JQueryNiceScroll$JQueryNiceScroll$NiceScroll,
niceScroll(
wrapper: string,
options: JQueryNiceScroll$JQueryNiceScroll$NiceScrollOptions): JQueryNiceScroll$JQueryNiceScroll$NiceScroll,
getNiceScroll(index?: number): JQueryNiceScroll$JQueryNiceScroll$NiceScroll
} 
    }
