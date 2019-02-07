declare module "html-webpack-template" {
  import type { HtmlWebpackTemplate$Options as HtmlWebpackPluginOptions } from "html-webpack-plugin";

  declare module.exports: typeof HtmlWebpackTemplate;

  declare var HtmlWebpackTemplate: string;
  declare interface HtmlWebpackTemplate$GoogleAnalyticsOptions {
    /**
     * Log a pageview event after the analytics code loads.
     */
    pageViewOnLoad?: boolean;
    trackingId: string;
  }

  declare interface HtmlWebpackTemplate$Attributes {
    [name: string]: any;
  }

  declare type HtmlWebpackTemplate$Resource =
    | string
    | HtmlWebpackTemplate$Attributes;

  /**
   * string: value is assigned to the href attribute and the rel attribute is set to "stylesheet"
   * object: properties and values are used as the attribute names and values, respectively.
   */
  declare type HtmlWebpackTemplate$Link = HtmlWebpackTemplate$Resource;

  /**
   * string: value is assigned to the src attribute and the type attribute is set to "text/javascript".
   * object: properties and values are used as the attribute names and values, respectively.
   */
  declare type HtmlWebpackTemplate$Script = HtmlWebpackTemplate$Resource;

  declare type HtmlWebpackTemplate$Options = {
    /**
     * The <div> element id on which you plan to mount a JavaScript app.
     */
    appMountId?: string,

    /**
     * An array of application element ids.
     */
    appMountIds?: string[],

    /**
     * Adjust the URL for relative URLs in the document (MDN).
     * https://developer.mozilla.org/en/docs/Web/HTML/Element/base
     */
    baseHref?: string,

    /**
     * Insert the webpack-dev-server hot reload script at this host:port/path; e.g., http://localhost:3000.
     */
    devServer?: string,

    /**
     * Track usage of your site via Google Analytics.
     */
    googleAnalytics?: HtmlWebpackTemplate$GoogleAnalyticsOptions,

    /**
     * Set to false. Controls asset addition to the template. This template takes care of that.
     */
    inject: false,

    /**
     * For use with inline-manifest-webpack-plugin.
     * https://github.com/szrenwei/inline-manifest-webpack-plugin
     */
    inlineManifestWebpackName?: string,

    /**
     * Array of <link> elements.
     */
    links?: HtmlWebpackTemplate$Link[],

    /**
     * Array of objects containing key value pairs to be included as meta tags.
     */
    meta?: HtmlWebpackTemplate$Attributes[],

    /**
     * Sets appropriate meta tag for page scaling.
     */
    mobile?: boolean,

    /**
     * Array of external script imports to include on page.
     */
    scripts?: HtmlWebpackTemplate$Script[],

    /**
     * Specify this module's index.ejs file.
     */
    template: string,

    /**
     * Object that defines data you need to bootstrap a JavaScript app.
     */
    window?: {}
  } & HtmlWebpackPluginOptions;

  /**
   * @deprecated use GoogleAnalyticsOptions
   */
  declare type HtmlWebpackTemplate$GoogleAnalyticsConfig = HtmlWebpackTemplate$GoogleAnalyticsOptions;

  /**
   * @deprecated use Options
   */
  declare type HtmlWebpackTemplate$Config = HtmlWebpackTemplate$Options;
}
