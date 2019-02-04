declare module 'activex-stdole' {
        declare type stdole$IFontDisp = stdole$StdFont;

declare type stdole$IPictureDisp = stdole$StdPicture;

declare type stdole$OLE_COLOR = number;

declare type stdole$OLE_XPOS_CONTAINER = number;

declare type stdole$OLE_XPOS_PIXELS = number;

declare type stdole$OLE_YPOS_CONTAINER = number;

declare type stdole$OLE_YPOS_PIXELS = number;

declare  class stdole$LoadPictureConstants {
  constructor(...args: empty): mixed;
static +Color: Class<stdole$LoadPictureConstants__Color> & stdole$LoadPictureConstants__Color & 4;// 4
static +Default: Class<stdole$LoadPictureConstants__Default> & stdole$LoadPictureConstants__Default & 0;// 0
static +Monochrome: Class<stdole$LoadPictureConstants__Monochrome> & stdole$LoadPictureConstants__Monochrome & 1;// 1
static +VgaColor: Class<stdole$LoadPictureConstants__VgaColor> & stdole$LoadPictureConstants__VgaColor & 2;// 2

}

declare class stdole$LoadPictureConstants__Color mixins stdole$LoadPictureConstants {}
declare class stdole$LoadPictureConstants__Default mixins stdole$LoadPictureConstants {}
declare class stdole$LoadPictureConstants__Monochrome mixins stdole$LoadPictureConstants {}
declare class stdole$LoadPictureConstants__VgaColor mixins stdole$LoadPictureConstants {}


declare  class stdole$OLE_TRISTATE {
  constructor(...args: empty): mixed;
static +Checked: Class<stdole$OLE_TRISTATE__Checked> & stdole$OLE_TRISTATE__Checked & 1;// 1
static +Gray: Class<stdole$OLE_TRISTATE__Gray> & stdole$OLE_TRISTATE__Gray & 2;// 2
static +Unchecked: Class<stdole$OLE_TRISTATE__Unchecked> & stdole$OLE_TRISTATE__Unchecked & 0;// 0

}

declare class stdole$OLE_TRISTATE__Checked mixins stdole$OLE_TRISTATE {}
declare class stdole$OLE_TRISTATE__Gray mixins stdole$OLE_TRISTATE {}
declare class stdole$OLE_TRISTATE__Unchecked mixins stdole$OLE_TRISTATE {}


declare interface stdole$DISPPARAMS {
+cArgs: number,
+cNamedArgs: number,
+rgdispidNamedArgs: number,
+rgvarg: any
} 

declare interface stdole$EXCEPINFO {
+bstrDescription: string,
+bstrHelpFile: string,
+bstrSource: string,
+dwHelpContext: number,
+pfnDeferredFillIn: void,
+pvReserved: void,
+scode: any,
+wCode: number,
+wReserved: number
} 

declare interface stdole$GUID {
+Data1: number,
+Data2: number,
+Data3: number,
+Data4: SafeArray<number>
} 

declare class stdole$StdFont  {
constructor(): this;
Bold: boolean;
Charset: number;
Italic: boolean;
Name: string;
Size: number;
Strikethrough: boolean;
Underline: boolean;
Weight: number
}

declare class stdole$StdPicture  {
constructor(): this;
Handle: number;
Height: number;
hPal: number;
Render(
hdc: number,
x: number,
y: number,
cx: number,
cy: number,
xSrc: number,
ySrc: number,
cxSrc: number,
cySrc: number,
prcWBounds: void): void;
Type: number;
Width: number
}
	declare interface ActiveXObject {
on(
obj: stdole$stdole$StdFont,
event: "FontChanged",
argNames: ["PropertyName"],
handler: (parameter: {
+PropertyName: string
}) => void): void
} 
	declare interface ActiveXObjectNameMap {
stdole$StdFont: stdole$stdole$StdFont,
stdole$StdPicture: stdole$stdole$StdPicture
} 
    }
