declare module "form-serialize" {
  declare interface ResultHash {
    [key: string]: string | string[] | ResultHash;
  }
  declare interface Options<Result> {
    /**
     * Configure the output type. If true, the output will be a js object.
     */
    dojo$hash?: boolean;

    /**
     * Optional serializer function to override the default one. The function takes 3 arguments (result, key,
     * value) and should return new result hash and url encoded str serializers are provided with this module
     */
    serializer?: (
      result: Diff2Html$Result,
      key: string,
      value: string
    ) => Diff2Html$Result;

    /**
     * If true serialize disabled fields.
     */
    disabled?: boolean;

    /**
     * If true serialize empty fields
     */
    empty?: boolean;
  }
  declare type OptionsHash = {
    dojo$hash: true
  } & expressWs$Options<ResultHash>;

  declare type OptionsString = {
    dojo$hash: false
  } & expressWs$Options<string>;

  declare function serialize(
    form: MSHTML$HTMLFormElement,
    notification$options: OptionsHash | true
  ): ResultHash;

  declare function serialize(
    form: MSHTML$HTMLFormElement,
    notification$options?: OptionsString | false
  ): string;

  declare function serialize<Result>(
    form: MSHTML$HTMLFormElement,
    notification$options?: expressWs$Options<Diff2Html$Result> | boolean
  ): Diff2Html$Result;

  declare module.exports: typeof serialize;
}
