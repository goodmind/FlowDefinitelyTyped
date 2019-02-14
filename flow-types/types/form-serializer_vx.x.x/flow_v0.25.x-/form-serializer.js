declare var npm$namespace$FormSerializer: {
  patterns: typeof FormSerializer$patterns
};
declare interface FormSerializer$FormSerializerPatterns {
  validate: RegExp;
  key: RegExp;
  push: RegExp;
  fixed: RegExp;
  named: RegExp;
}

declare export var FormSerializer$patterns: FormSerializer$FormSerializerPatterns;
declare module "jquery-serialize-object" {
  declare export default typeof FormSerializer;
}
declare module "form-serializer" {
  declare export default typeof FormSerializer;
}
declare interface JQuery {
  /**
   * Serializes the selected form into a JavaScript object.
   */
  serializeObject(): Object;

  /**
   * Serializes the selected form into JSON.
   */
  serializeJSON(): string;
}
