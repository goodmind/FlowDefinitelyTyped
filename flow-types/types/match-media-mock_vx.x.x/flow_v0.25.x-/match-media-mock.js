declare module "match-media-mock" {
  /**
   * Mock configuration options
   */
  declare interface ConfigOptions {
    /**
     * Screen type
     */
    type?: string;

    /**
     * Screen height
     */
    height?: number;

    /**
     * Screen width
     */
    width?: number;
  }
  declare interface MatchMediaMock {
    /**
     * Set configuration
     */
    setConfig(config: ConfigOptions): void;

    /**
     * Execute query based on provided configuration
     */
    (query: string): MediaQueryList;
  }
  declare export function create(): MatchMediaMock;
}
