declare module "bunyan-config" {
  import typeof * as bunyan from "bunyan";

  declare interface StreamConfiguration {
    name: string;
    params?: {
      host: string,
      port: number
    };
  }
  declare interface Stream {
    type?: string;
    level?: bunyan.LogLevel;
    path?: string;
    stream?: string | StreamConfiguration;
    closeOnExit?: boolean;
    period?: string;
    count?: number;
  }

  /**
   * Configuration.
   * @interface
   */
  declare interface Configuration {
    name: string;
    streams?: Stream[];
    level?: string | number;
    stream?: NodeJS.WritableStream;
    serializers?: {};
    src?: boolean;
  }

  /**
   * Constructor.
   * @param {Configuration} jsonConfig A JSON configuration.
   * @return {LoggerOptions} A logger options.
   */
  declare function bunyanConfig(
    jsonConfig?: Configuration
  ): bunyan.LoggerOptions;

  declare module.exports: typeof bunyanConfig;
}
