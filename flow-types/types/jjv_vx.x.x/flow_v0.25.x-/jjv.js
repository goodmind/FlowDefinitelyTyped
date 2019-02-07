declare module "jjv" {
  declare function jjv(): jjv$jjv$Env;

  declare interface jjv$Errors {
    validation: {
      [property: string]: {
        required?: boolean,
        type?: string
      }
    };
  }

  declare interface jjv$Options {
    checkRequired?: boolean;
    useDefault?: boolean;
    useCoerce?: boolean;
    removeAdditional?: boolean;
  }

  declare interface jjv$Env {
    defaultOptions: jjv$Options;
    addSchema(name: string, schema: Object): void;
    addType(name: string, parse: (input: any) => any): void;
    addFormat(name: string, parse: (input: any) => any): void;
    addCheck(name: string, check: (input: any, comparator: any) => any): void;
    addTypeCoercion(name: string, coerce: (input: any) => any): void;
    validate(name: string, object: any, options?: jjv$Options): jjv$Errors;
    validate(schema: Object, object: any, options?: jjv$Options): jjv$Errors;
  }
  declare module.exports: typeof jjv;
}
