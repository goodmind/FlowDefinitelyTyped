declare module "is-my-json-valid" {
  declare interface ValidationError {
    field: string;
    message: string;
    value: any;
    type: string;
  }
  declare interface ValidateFunction {
    (data: any): boolean;
    errors: ValidationError[];
  }
  declare interface Validator {
    (schema: any, options?: any): ValidateFunction;
    filter(schema: any): any;
  }
  declare var validator: Validator;
  declare module.exports: typeof validator;
}
