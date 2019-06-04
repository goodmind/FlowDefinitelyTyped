declare module "motion-scroll" {
  declare export function scroll(config: {
    element?: HTMLElement,
    axis?: "x" | "y",
    scrollTo?: number,
    speed?: number,
    easing?: () => void,
    callBack?: () => void,
    delay?: number,
    force?: boolean,
    minScrollTime?: number,
    maxScrollTime?: number
  }): void;
}
