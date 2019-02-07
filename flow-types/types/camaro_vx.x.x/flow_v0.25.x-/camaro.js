declare module "camaro" {
  /**
   * Transform the input xml to json using the input template object.
   * @param input The input xml string
   * @param template The output template
   */
  declare function transform(
    input: string,
    template: { [key: string]: any }
  ): { [key: string]: any };

  declare module.exports: typeof transform;
}
