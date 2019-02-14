declare module "wiiu" {
  declare var npm$namespace$wiiu: {
    gamepad: typeof wiiu$gamepad,
    videoplayer: typeof wiiu$videoplayer,
    imageview: typeof wiiu$imageview,
    TPValidity: typeof wiiu$TPValidity,
    Button: typeof wiiu$Button,
    ImageViewErrorCode: typeof wiiu$ImageViewErrorCode
  };

  declare var wiiu$TPValidity: {|
    +VALID: 0, // 0
    +X_INVALID: 1, // 1
    +Y_INVALID: 2, // 2
    +INVALID: 3 // 3
  |};

  declare var wiiu$Button: {|
    +MINUS: 4, // 4
    +SELECT: MINUS, // MINUS
    +PLUS: 8, // 8
    +START: PLUS, // PLUS
    +R: 16, // 16
    +L: 32, // 32
    +ZR: 64, // 64
    +ZL: 128, // 128
    +DOWN: 256, // 256
    +UP: 512, // 512
    +RIGHT: 1024, // 1024
    +LEFT: 2048, // 2048
    +Y: 4096, // 4096
    +X: 8192, // 8192
    +B: 16384, // 16384
    +A: 32768, // 32768
    +R_STICK: 131072, // 131072
    +L_STICK: 262144, // 262144
    +R_STICK_DOWN: 8388608, // 8388608
    +R_STICK_UP: 16777216, // 16777216
    +R_STICK_RIGHT: 33554432, // 33554432
    +R_STICK_LEFT: 67108864, // 67108864
    +L_STICK_DOWN: 134217728, // 134217728
    +L_STICK_UP: 268435456, // 268435456
    +L_STICK_RIGHT: 536870912, // 536870912
    +L_STICK_LEFT: 1073741824 // 1073741824
  |};

  declare interface wiiu$WiiuGamePad {
    isEnabled: boolean;
    isDataValid: boolean;
    tpTouch: boolean;
    tpValidity: number;
    contentX: number;
    contentY: number;
    lStickX: number;
    lStickY: number;
    rStickX: number;
    rStickY: number;
    hold: number;
    accX: number;
    accY: number;
    accZ: number;
    gyroX: number;
    gyroY: number;
    gyroZ: number;
    angleX: number;
    angleY: number;
    angleZ: number;
    dirXx: number;
    dirXy: number;
    dirYx: number;
    dirXz: number;
    dirYy: number;
    dirYz: number;
    dirZx: number;
    dirZz: number;
    dirZy: number;
    update(): wiiu$WiiuGamePad;
  }

  declare interface wiiu$VideoPlayer {
    viewMode: number;
    end(): boolean;
  }

  declare var wiiu$ImageViewErrorCode: {|
    +UNSUPPORTED_FORMAT: 202, // 202
    +DIMENSIONS_TOO_LARGE: 203, // 203
    +FILE_SIZE_TOO_LARGE: 204, // 204
    +TOO_MANY_PIXELS_PROGRESSIVE_JPEG: 205 // 205
  |};

  declare interface wiiu$ImageView {
    viewMode: number;
    end(): boolean;
    getErrorCode(): number;
  }

  declare var wiiu$gamepad: wiiu$WiiuGamePad;

  declare var wiiu$videoplayer: wiiu$VideoPlayer;

  declare var wiiu$imageview: wiiu$ImageView;
  declare interface HTMLElement {
    addEventListener(
      type: "wiiu_videoplayer_end",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
  }
  declare interface Window {
    wiiu: typeof wiiu;
    addEventListener(
      type: "wiiu_imageview_start",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "wiiu_imageview_end",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "wiiu_imageview_change_viewmode",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "wiiu_imageview_change_content",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "wiiu_imageview_error",
      listener: (ev: CustomEvent) => any,
      useCapture?: boolean
    ): void;
  }
}
