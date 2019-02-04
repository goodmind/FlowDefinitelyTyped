declare module 'wiiu' {
        
      declare var npm$namespace$wiiu: {
        
        gamepad: typeof wiiu$gamepad,
videoplayer: typeof wiiu$videoplayer,
imageview: typeof wiiu$imageview,
      }
declare  class wiiu$TPValidity {
  constructor(...args: empty): mixed;
static +VALID: Class<wiiu$TPValidity__VALID> & wiiu$TPValidity__VALID & 0;// 0
static +X_INVALID: Class<wiiu$TPValidity__X_INVALID> & wiiu$TPValidity__X_INVALID & 1;// 1
static +Y_INVALID: Class<wiiu$TPValidity__Y_INVALID> & wiiu$TPValidity__Y_INVALID & 2;// 2
static +INVALID: Class<wiiu$TPValidity__INVALID> & wiiu$TPValidity__INVALID & 3;// 3

}

declare class wiiu$TPValidity__VALID mixins wiiu$TPValidity {}
declare class wiiu$TPValidity__X_INVALID mixins wiiu$TPValidity {}
declare class wiiu$TPValidity__Y_INVALID mixins wiiu$TPValidity {}
declare class wiiu$TPValidity__INVALID mixins wiiu$TPValidity {}


declare  class wiiu$Button {
  constructor(...args: empty): mixed;
static +MINUS: Class<wiiu$Button__MINUS> & wiiu$Button__MINUS & 4;// 4
static +SELECT: Class<wiiu$Button__SELECT> & wiiu$Button__SELECT & MINUS;// MINUS
static +PLUS: Class<wiiu$Button__PLUS> & wiiu$Button__PLUS & 8;// 8
static +START: Class<wiiu$Button__START> & wiiu$Button__START & PLUS;// PLUS
static +R: Class<wiiu$Button__R> & wiiu$Button__R & 16;// 16
static +L: Class<wiiu$Button__L> & wiiu$Button__L & 32;// 32
static +ZR: Class<wiiu$Button__ZR> & wiiu$Button__ZR & 64;// 64
static +ZL: Class<wiiu$Button__ZL> & wiiu$Button__ZL & 128;// 128
static +DOWN: Class<wiiu$Button__DOWN> & wiiu$Button__DOWN & 256;// 256
static +UP: Class<wiiu$Button__UP> & wiiu$Button__UP & 512;// 512
static +RIGHT: Class<wiiu$Button__RIGHT> & wiiu$Button__RIGHT & 1024;// 1024
static +LEFT: Class<wiiu$Button__LEFT> & wiiu$Button__LEFT & 2048;// 2048
static +Y: Class<wiiu$Button__Y> & wiiu$Button__Y & 4096;// 4096
static +X: Class<wiiu$Button__X> & wiiu$Button__X & 8192;// 8192
static +B: Class<wiiu$Button__B> & wiiu$Button__B & 16384;// 16384
static +A: Class<wiiu$Button__A> & wiiu$Button__A & 32768;// 32768
static +R_STICK: Class<wiiu$Button__R_STICK> & wiiu$Button__R_STICK & 131072;// 131072
static +L_STICK: Class<wiiu$Button__L_STICK> & wiiu$Button__L_STICK & 262144;// 262144
static +R_STICK_DOWN: Class<wiiu$Button__R_STICK_DOWN> & wiiu$Button__R_STICK_DOWN & 8388608;// 8388608
static +R_STICK_UP: Class<wiiu$Button__R_STICK_UP> & wiiu$Button__R_STICK_UP & 16777216;// 16777216
static +R_STICK_RIGHT: Class<wiiu$Button__R_STICK_RIGHT> & wiiu$Button__R_STICK_RIGHT & 33554432;// 33554432
static +R_STICK_LEFT: Class<wiiu$Button__R_STICK_LEFT> & wiiu$Button__R_STICK_LEFT & 67108864;// 67108864
static +L_STICK_DOWN: Class<wiiu$Button__L_STICK_DOWN> & wiiu$Button__L_STICK_DOWN & 134217728;// 134217728
static +L_STICK_UP: Class<wiiu$Button__L_STICK_UP> & wiiu$Button__L_STICK_UP & 268435456;// 268435456
static +L_STICK_RIGHT: Class<wiiu$Button__L_STICK_RIGHT> & wiiu$Button__L_STICK_RIGHT & 536870912;// 536870912
static +L_STICK_LEFT: Class<wiiu$Button__L_STICK_LEFT> & wiiu$Button__L_STICK_LEFT & 1073741824;// 1073741824

}

declare class wiiu$Button__MINUS mixins wiiu$Button {}
declare class wiiu$Button__SELECT mixins wiiu$Button {}
declare class wiiu$Button__PLUS mixins wiiu$Button {}
declare class wiiu$Button__START mixins wiiu$Button {}
declare class wiiu$Button__R mixins wiiu$Button {}
declare class wiiu$Button__L mixins wiiu$Button {}
declare class wiiu$Button__ZR mixins wiiu$Button {}
declare class wiiu$Button__ZL mixins wiiu$Button {}
declare class wiiu$Button__DOWN mixins wiiu$Button {}
declare class wiiu$Button__UP mixins wiiu$Button {}
declare class wiiu$Button__RIGHT mixins wiiu$Button {}
declare class wiiu$Button__LEFT mixins wiiu$Button {}
declare class wiiu$Button__Y mixins wiiu$Button {}
declare class wiiu$Button__X mixins wiiu$Button {}
declare class wiiu$Button__B mixins wiiu$Button {}
declare class wiiu$Button__A mixins wiiu$Button {}
declare class wiiu$Button__R_STICK mixins wiiu$Button {}
declare class wiiu$Button__L_STICK mixins wiiu$Button {}
declare class wiiu$Button__R_STICK_DOWN mixins wiiu$Button {}
declare class wiiu$Button__R_STICK_UP mixins wiiu$Button {}
declare class wiiu$Button__R_STICK_RIGHT mixins wiiu$Button {}
declare class wiiu$Button__R_STICK_LEFT mixins wiiu$Button {}
declare class wiiu$Button__L_STICK_DOWN mixins wiiu$Button {}
declare class wiiu$Button__L_STICK_UP mixins wiiu$Button {}
declare class wiiu$Button__L_STICK_RIGHT mixins wiiu$Button {}
declare class wiiu$Button__L_STICK_LEFT mixins wiiu$Button {}


declare interface wiiu$WiiuGamePad {
isEnabled: boolean,
isDataValid: boolean,
tpTouch: boolean,
tpValidity: number,
contentX: number,
contentY: number,
lStickX: number,
lStickY: number,
rStickX: number,
rStickY: number,
hold: number,
accX: number,
accY: number,
accZ: number,
gyroX: number,
gyroY: number,
gyroZ: number,
angleX: number,
angleY: number,
angleZ: number,
dirXx: number,
dirXy: number,
dirYx: number,
dirXz: number,
dirYy: number,
dirYz: number,
dirZx: number,
dirZz: number,
dirZy: number,
update(): wiiu$WiiuGamePad
} 

declare interface wiiu$VideoPlayer {
viewMode: number,
end(): boolean
} 

declare  class wiiu$ImageViewErrorCode {
  constructor(...args: empty): mixed;
static +UNSUPPORTED_FORMAT: Class<wiiu$ImageViewErrorCode__UNSUPPORTED_FORMAT> & wiiu$ImageViewErrorCode__UNSUPPORTED_FORMAT & 202;// 202
static +DIMENSIONS_TOO_LARGE: Class<wiiu$ImageViewErrorCode__DIMENSIONS_TOO_LARGE> & wiiu$ImageViewErrorCode__DIMENSIONS_TOO_LARGE & 203;// 203
static +FILE_SIZE_TOO_LARGE: Class<wiiu$ImageViewErrorCode__FILE_SIZE_TOO_LARGE> & wiiu$ImageViewErrorCode__FILE_SIZE_TOO_LARGE & 204;// 204
static +TOO_MANY_PIXELS_PROGRESSIVE_JPEG: Class<wiiu$ImageViewErrorCode__TOO_MANY_PIXELS_PROGRESSIVE_JPEG> & wiiu$ImageViewErrorCode__TOO_MANY_PIXELS_PROGRESSIVE_JPEG & 205;// 205

}

declare class wiiu$ImageViewErrorCode__UNSUPPORTED_FORMAT mixins wiiu$ImageViewErrorCode {}
declare class wiiu$ImageViewErrorCode__DIMENSIONS_TOO_LARGE mixins wiiu$ImageViewErrorCode {}
declare class wiiu$ImageViewErrorCode__FILE_SIZE_TOO_LARGE mixins wiiu$ImageViewErrorCode {}
declare class wiiu$ImageViewErrorCode__TOO_MANY_PIXELS_PROGRESSIVE_JPEG mixins wiiu$ImageViewErrorCode {}


declare interface wiiu$ImageView {
viewMode: number,
end(): boolean,
getErrorCode(): number
} 

declare var wiiu$gamepad: wiiu$WiiuGamePad;

declare var wiiu$videoplayer: wiiu$VideoPlayer;

declare var wiiu$imageview: wiiu$ImageView;
	declare interface HTMLElement {
addEventListener(
type: "wiiu_videoplayer_end",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void
} 
	declare interface Window {
wiiu: typeof wiiu,
addEventListener(
type: "wiiu_imageview_start",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void,
addEventListener(
type: "wiiu_imageview_end",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void,
addEventListener(
type: "wiiu_imageview_change_viewmode",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void,
addEventListener(
type: "wiiu_imageview_change_content",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void,
addEventListener(
type: "wiiu_imageview_error",
listener: (ev: CustomEvent) => any,
useCapture?: boolean): void
} 
    }
