declare module "dotenv-flow" {
  declare export interface DotenvParseOptions {
    /**
     * You may turn on logging to help debug why certain keys or values are not being set as you expect.
     */
    debug?: boolean;
  }
  declare export interface DotenvParseOutput {
    [name: string]: string;
  }

  /**
   * Parses a string or buffer in the .env file format into an object.
   * @param src - contents to be parsed
   * @param options - additional options
   * @returns an object with keys and values based on `src`
   */
  declare export function parse(
    src: string | Buffer,
    options?: DotenvParseOptions
  ): DotenvParseOutput;

  declare export interface DotenvConfigOptions {
    /**
     * You may specify a custom path if your file containing environment variables is located elsewhere.
     */
    cwd?: string;

    /**
     * You may specify the encoding of your file containing environment variables.
     */
    encoding?: string;

    /**
     * In some cases the original "dotenv" library can be used by one of the dependent npm modules. Use to fix this.
     */
    purge_dotenv?: boolean;
  }
  declare export interface DotenvConfigOutput {
    error?: Error;
    parsed?: DotenvParseOutput;
  }

  /**
   * Loads `.env` file contents into {@link https://nodejs.org/api/process.html#process_process_env | `process.env`}.
   * Example: 'KEY=value' becomes { parsed: { KEY: 'value' } }
   * @param options - controls behavior
   * @returns an object with a `parsed` key if successful or `error` key if an error occurred
   */
  declare export function config(
    options?: DotenvConfigOptions
  ): DotenvConfigOutput;

  declare export var load: typeof config;
}
