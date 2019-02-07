declare module "react-native-background-timer" {
  declare export type IntervalId = number;
  declare export type TimeoutId = number;
  declare class BackgroundTimer {
    constructor(): this;
    start(delay?: number): any;
    stop(): void;
    runBackgroundTimer(callback: () => void, delay: number): void;
    backgroundClockMethod(callback: () => void, delay: number): void;
    stopBackgroundTimer(): void;
    setTimeout(callback: () => void, timeout: number): TimeoutId;
    clearTimeout(timeoutId: TimeoutId): void;
    setInterval(callback: () => void, timeout: number): IntervalId;
    clearInterval(intervalId: IntervalId): void;
  }
  declare var _BackgroundTimer: BackgroundTimer;
  declare export default typeof _BackgroundTimer;
}
