declare module "react-wow" {
  import typeof * as React from "react";

  declare export interface ReactWOWProps {
    /**
     * Animation css class.
     * @default animated
     */
    animateClass?: string;

    /**
     * Animation name.
     * @see https://daneden.github.io/animate.css/
     */
    animation:
      | "bounce"
      | "flash"
      | "pulse"
      | "rubberBand"
      | "shake"
      | "swing"
      | "tada"
      | "wobble"
      | "jello"
      | "bounceIn"
      | "bounceInDown"
      | "bounceInLeft"
      | "bounceInRight"
      | "bounceInUp"
      | "bounceOut"
      | "bounceOutDown"
      | "bounceOutLeft"
      | "bounceOutRight"
      | "bounceOutUp"
      | "fadeIn"
      | "fadeInDown"
      | "fadeInDownBig"
      | "fadeInLeft"
      | "fadeInLeftBig"
      | "fadeInRight"
      | "fadeInRightBig"
      | "fadeInUp"
      | "fadeInUpBig"
      | "fadeOut"
      | "fadeOutDown"
      | "fadeOutDownBig"
      | "fadeOutLeft"
      | "fadeOutLeftBig"
      | "fadeOutRight"
      | "fadeOutRightBig"
      | "fadeOutUp"
      | "fadeOutUpBig"
      | "flip"
      | "flipInX"
      | "flipInY"
      | "flipOutX"
      | "flipOutY"
      | "lightSpeedIn"
      | "lightSpeedOut"
      | "rotateIn"
      | "rotateInDownLeft"
      | "rotateInDownRight"
      | "rotateInUpLeft"
      | "rotateInUpRight"
      | "rotateOut"
      | "rotateOutDownLeft"
      | "rotateOutDownRight"
      | "rotateOutUpLeft"
      | "rotateOutUpRight"
      | "slideInUp"
      | "slideInDown"
      | "slideInLeft"
      | "slideInRight"
      | "slideOutUp"
      | "slideOutDown"
      | "slideOutLeft"
      | "slideOutRight"
      | "zoomIn"
      | "zoomInDown"
      | "zoomInLeft"
      | "zoomInRight"
      | "zoomInUp"
      | "zoomOut"
      | "zoomOutDown"
      | "zoomOutLeft"
      | "zoomOutRight"
      | "zoomOutUp"
      | "hinge"
      | "jackInTheBox"
      | "rollIn"
      | "rollOut";

    /**
     * The callback is fired every time an animation is stoped.
     */
    callback?: () => void;

    /**
     * Content you want to apply the animation to.
     */
    children: React$Node;

    /**
     * Animation delay.
     */
    delay?: string;

    /**
     * Disable the animation.
     * @default false
     */
    disabled?: boolean;

    /**
     * Animation duration.
     */
    duration?: string;

    /**
     * Animation iteration count.
     */
    iteration?: string;

    /**
     * Distance to the element when triggering the animation.
     * @default 0
     */
    offset?: number | number[];

    /**
     * If your components inside a overflow container, set this to true.
     * @default false
     */
    overflow?: boolean;

    /**
     * Listen and react to resize event.
     * @default true
     */
    resize?: boolean;

    /**
     * Listen and react to scroll event.
     * @default true
     */
    scroll?: boolean;
  }
  declare export default class ReactWOW mixins React.Component<ReactWOWProps> {}
}
