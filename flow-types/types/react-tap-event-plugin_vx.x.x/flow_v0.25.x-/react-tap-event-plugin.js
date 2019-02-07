declare module "react-tap-event-plugin" {
  declare interface StrategyOverrides {
    shouldRejectClick?: (
      lastTouchEventTimestamp: Date,
      clickEventTimestamp: Date
    ) => boolean;
  }
  declare var injectTapEventPlugin: (
    strategyOverrides?: StrategyOverrides
  ) => void;
  declare module.exports: typeof injectTapEventPlugin;
}
