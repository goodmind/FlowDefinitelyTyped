declare module "global" {
  declare interface JQuery<TElement = HTMLElement> {
    /**
     * Initializes the web-icons.
     * @param config Either the configuration for initializing web-icons or a callback for configuring the web-icons.
     */
    webicons(config: Config | ConfigurationHandler): this;
  }
}
declare module "webicon" {
  import type { CssClassConfig } from "./Icon/CssClassConfig";

  import type { CssIconSet } from "./Icon/CssIconSet";

  import type { IconClassGenerator } from "./Icon/IconClassGenerator";

  import type { ImageIcon } from "./Icon/ImageIcon";

  import type { AliasOptions } from "./Icon/Options/AliasOptions";

  import type { CssIconSetOptions } from "./Icon/Options/CssIconSetOptions";

  import type { ImageIconOptions } from "./Icon/Options/ImageIconOptions";

  import type { SvgCumulativeIconSetOptions } from "./Icon/Options/SvgCumulativeIconSetOptions";

  import type { SvgIconOptions } from "./Icon/Options/SvgIconOptions";

  import type { SvgIconSetOptions } from "./Icon/Options/SvgIconSetOptions";

  import type { SvgCumulativeIconSet } from "./Icon/SvgCumulativeIconSet";

  import type { SvgIcon } from "./Icon/SvgIcon";

  import type { SvgIconSet } from "./Icon/SvgIconSet";

  import type { Config } from "./System/Config";

  import type { ConfigurationHandler } from "./System/ConfigurationHandler";

  import type { IconLoadedEventHandler } from "./System/IconLoadedEventHandler";

  import type { IconPreloader } from "./System/IconPreloader";

  import type { Identifiable } from "./System/Identifiable";

  import type { Injector } from "./System/Injector";

  import type { PublicApi } from "./System/PublicApi";

  import type { DynamicUrlDeclaration } from "./Web/DynamicUrlDeclaration";

  import type { StaticUrlDeclaration } from "./Web/StaticUrlDeclaration";

  import type { UrlConfig } from "./Web/UrlConfig";

  declare export {
    CssClassConfig,
    CssIconSet,
    IconClassGenerator,
    ImageIcon,
    AliasOptions,
    CssIconSetOptions,
    ImageIconOptions,
    SvgCumulativeIconSetOptions,
    SvgIconOptions,
    SvgIconSetOptions,
    SvgCumulativeIconSet,
    SvgIcon,
    SvgIconSet,
    Config,
    ConfigurationHandler,
    IconLoadedEventHandler,
    IconPreloader,
    Identifiable,
    Injector,
    PublicApi,
    DynamicUrlDeclaration,
    StaticUrlDeclaration,
    UrlConfig
  };
}
