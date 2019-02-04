declare module 'jquery.qrcode' {
        
/**
 * One of the possible mode types.
 */
declare export  class JQueryQRCode$Mode {
  constructor(...args: empty): mixed;
static +NORMAL: Class<JQueryQRCode$Mode__NORMAL> & JQueryQRCode$Mode__NORMAL & 0;// 0
static +LABEL_STRIP: Class<JQueryQRCode$Mode__LABEL_STRIP> & JQueryQRCode$Mode__LABEL_STRIP & 1;// 1
static +LABEL_BOX: Class<JQueryQRCode$Mode__LABEL_BOX> & JQueryQRCode$Mode__LABEL_BOX & 2;// 2
static +IMAGE_STRIP: Class<JQueryQRCode$Mode__IMAGE_STRIP> & JQueryQRCode$Mode__IMAGE_STRIP & 3;// 3
static +IMAGE_BOX: Class<JQueryQRCode$Mode__IMAGE_BOX> & JQueryQRCode$Mode__IMAGE_BOX & 4;// 4

}

declare class JQueryQRCode$Mode__NORMAL mixins JQueryQRCode$Mode {}
declare class JQueryQRCode$Mode__LABEL_STRIP mixins JQueryQRCode$Mode {}
declare class JQueryQRCode$Mode__LABEL_BOX mixins JQueryQRCode$Mode {}
declare class JQueryQRCode$Mode__IMAGE_STRIP mixins JQueryQRCode$Mode {}
declare class JQueryQRCode$Mode__IMAGE_BOX mixins JQueryQRCode$Mode {}


declare interface JQueryQRCode$Options {

/**
 * Render method: 'canvas', 'image' or 'div'
 * @default 'canvas'
 */
render?: string,

/**
 * Start of version range, somewhere in 1 .. 40
 * @default 1
 */
minVersion?: number,

/**
 * End of version range, somewhere in 1 .. 40
 * @default 40
 */
maxVersion?: number,

/**
 * Error correction level: 'L', 'M', 'Q' or 'H'
 * @default 'L'
 */
ecLevel?: string,

/**
 * Left offset in pixels, if drawn onto existing canvas
 * @default 0
 */
left?: number,

/**
 * Top offset in pixels, if drawn onto existing canvas
 * @default 0
 */
top?: number,

/**
 * Size in pixel
 * @default 200
 */
size?: number,

/**
 * Code color or image element
 * @default '#000'
 */
fill?: string,

/**
 * Background color or image element, null for transparent background
 * @default null
 */
background?: string,

/**
 * The text content of the QR code.
 * @default 'no text'
 */
text?: string,

/**
 * Corner radius relative to module width: 0.0 .. 0.5
 * @default 0
 */
radius?: number,

/**
 * Quiet zone in modules
 * @default 0
 */
quiet?: number,

/**
 * Mode
 * @default Mode.NORMAL
 */
mode?: JQueryQRCode$Mode,

/**
 * @default 0.1
 */
mSize?: number,

/**
 * @default 0.5
 */
mPosX?: number,

/**
 * @default 0.5
 */
mPosY?: number,

/**
 * @default 'no label'
 */
label?: string,

/**
 * @default 'sans'
 */
fontname?: string,

/**
 * @default '#000'
 */
fontcolor?: string,

/**
 * @default null
 */
image?: string
} 
	declare interface JQuery {

/**
 * Create a QR Code inside the selected container.
 * @param options
 */
qrcode(options?: JQueryQRCode$JQueryQRCode$Options): JQuery
} 
    }
