declare module "react-material-ui-form-validator" {
  import typeof * as React from "react";

  import type { TextFieldProps } from "material-ui";

  declare export interface ValidatorFormProps {
    className?: string;
    onSubmit: (event: React.FormEventHandler<>) => void;
    instantValidate?: boolean;
    onError?: (errors: any[]) => void;
    debounceTime?: number;
  }
  declare export class ValidatorForm
    mixins React.Component<ValidatorFormProps> {
    static addValidationRule(
      name: string,
      callback: (value: any) => boolean
    ): void;
    isFormValid(dryRun: boolean): boolean;
    resetValidations(): void;
  }
  declare export interface ValidatorComponentProps {
    errorMessages?: any[] | string;
    validators?: any[];
    name: string;
    value: any;
    validatorListener?: (isValid: boolean) => void;
    withRequiredValidator?: boolean;
  }
  declare export class ValidatorComponent
    mixins React.Component<ValidatorComponentProps & TextFieldProps> {}
  declare export class TextValidator mixins ValidatorComponent {}
}
