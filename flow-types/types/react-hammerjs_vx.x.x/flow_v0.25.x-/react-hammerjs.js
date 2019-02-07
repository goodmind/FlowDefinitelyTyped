declare module "react-hammerjs" {
  import typeof * as Hammer from "hammerjs";

  import typeof * as React from "react";

  declare type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
  declare type HammerOptionsWithRecognizers = Omit<
    HammerOptions,
    "recognizers"
  > & {
    recognizers?: {
      [gesture: string]: RecognizerOptions
    }
  };
  declare interface ReactHammer$ReactHammerProps {
    direction?:
      | "DIRECTION_NONE"
      | "DIRECTION_LEFT"
      | "DIRECTION_RIGHT"
      | "DIRECTION_UP"
      | "DIRECTION_DOWN"
      | "DIRECTION_HORIZONTAL"
      | "DIRECTION_VERTICAL"
      | "DIRECTION_ALL";
    options?: HammerOptionsWithRecognizers;
    recognizeWith?: {
      [gesture: string]: Recognizer | string
    };
    vertical?: boolean;
    action?: HammerListener;
    onDoubleTap?: HammerListener;
    onPan?: HammerListener;
    onPanCancel?: HammerListener;
    onPanEnd?: HammerListener;
    onPanStart?: HammerListener;
    onPinch?: HammerListener;
    onPinchCancel?: HammerListener;
    onPinchEnd?: HammerListener;
    onPinchIn?: HammerListener;
    onPinchStart?: HammerListener;
    onPress?: HammerListener;
    onPressUp?: HammerListener;
    onRotate?: HammerListener;
    onRotateCancel?: HammerListener;
    onRotateEnd?: HammerListener;
    onRotateMove?: HammerListener;
    onRotateStart?: HammerListener;
    onSwipe?: HammerListener;
    onTap?: HammerListener;
  }
  declare var ReactHammer: React.ComponentClass<ReactHammer$ReactHammer$ReactHammerProps>;
  declare module.exports: typeof ReactHammer;
}
