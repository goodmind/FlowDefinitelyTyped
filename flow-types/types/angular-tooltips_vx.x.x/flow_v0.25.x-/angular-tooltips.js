declare module "angular-tooltips" {
  declare var AngularTooltips: "720kb.tooltips";
  declare module.exports: typeof AngularTooltips;

  declare interface AngularTooltips$TooltipsConfProvider {
    configure(options: AngularTooltips$TooltipsConfProviderOptions): void;
  }

  declare interface AngularTooltips$TooltipsConfProviderOptions {
    side?:
      | "left"
      | "right"
      | "top"
      | "bottom"
      | "top left"
      | "top right"
      | "bottom left"
      | "bottom right";
    showTrigger?: string;
    hideTrigger?: string;
    class?: string;
    smart?: boolean;
    closeButton?: boolean;
    size?: "small" | "medium" | "large";
    speed?: "slow" | "medium" | "fast";
    tooltipTemplateUrlCache?: boolean;
    show?: boolean;
  }
}
