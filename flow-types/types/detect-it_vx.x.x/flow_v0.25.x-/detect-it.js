declare module "detect-it" {
  import typeof detectHover from "detect-hover";

  import typeof detectPassiveEvents from "detect-passive-events";

  import typeof detectPointer from "detect-pointer";

  import typeof detectTouchEvents from "detect-touch-events";

  declare interface detectIt {
    deviceType: "hybrid" | "mouseOnly" | "touchOnly";
    hasMouse: boolean;
    hasTouch: boolean;
    maxTouchPoints: number;
    passiveEvents: boolean;
    primaryHover: "hover" | "none";
    primaryPointer: "coarse" | "fine" | "none";
    state: state;
    update(): void;
  }
  declare interface state {
    detectHover: detectHover;
    detectPassiveEvents: detectPassiveEvents;
    detectPointer: detectPointer;
    detectTouchEvents: detectTouchEvents;
  }
  declare var detectIt: detectIt;
  declare export default typeof detectIt;
}
