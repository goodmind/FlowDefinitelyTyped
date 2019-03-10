declare module "react-form" {
  import typeof * as React from "react";

  declare export type FormValue = any;
  declare export type FormError = string | void;
  declare export interface Nested<T> {
    [key: string]: T | Nested<T>;
  }
  declare export type FormValues = Nested<FormValue>;
  declare export type Touched = Nested<boolean>;
  declare export interface FormErrors {
    [key: string]: FormError;
  }
  declare export type NestedErrors = Nested<FormErrors>;
  declare export type RenderReturn = React$Node | false | null | empty[];
  declare export interface FormState {
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    nestedErrors: NestedErrors;
    dirty?: boolean;
  }
  declare export interface FormProps {
    component?: React.ReactType<{
      formApi: FormApi
    }>;
    render?: (formApi: FormApi) => RenderReturn;
    dontValidateOnMount?: boolean;
    validateOnSubmit?: boolean;
    defaultValues?: FormValues;
    onSubmit?: (
      values: FormValues,
      submissionEvent: React.SyntheticEvent<any>,
      formApi: FormApi
    ) => void;
    preSubmit?: (values: FormValues, formApi: FormApi) => FormValues;
    onSubmitFailure?: (errors: FormErrors, formApi: FormApi) => void;
    formDidUpdate?: (formState: FormState) => void;
    preValidate?: (values: FormValues) => FormValues;
    validateError?: ValidateValuesFunction;
    validateWarning?: ValidateValuesFunction;
    validateSuccess?: (values: FormValues, errors: FormErrors) => FormErrors;
    asyncValidators?: {
      [field: string]: (value: FormValue) => Promise<any>
    };
    dontPreventDefault?: boolean;
    getApi?: (formApi: FormApi) => void;
  }
  declare export interface FormApi {
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    warnings: FormErrors;
    successes: FormErrors;
    submits: number;
    submitted: boolean;
    asyncValidations: number;
    validating: {
      [field: string]: boolean
    };
    validationFailures: number;
    validationFailed: {
      [field: string]: boolean
    };
    submitForm(event: React.SyntheticEvent<any>): void;
    setValue(fieldName: string, value: any): void;
    setAllValues(values: FormValues): void;
    setError(field: string, error: string): void;
    setWarning(field: string, warning: string): void;
    setSuccess(field: string, success: string): void;
    setTouched(field: string, touched: boolean): void;
    setAllTouched(touches: {
      [field: string]: boolean
    }): void;
    addValue(name: string, value: any): void;
    removeValue(name: string, index: number): void;
    swapValues(name: string, index1: number, index2: number): void;
    resetAll(): void;
    getFormState(): FormState;
    setFormState(state: FormState): void;
  }
  declare export type ValidateValuesFunction = (
    values: FormValues
  ) => FormErrors;
  declare export type FormFunctionProps = {} & FormProps & FormState & FormApi;

  declare export interface FormContext {
    formApi: FormApi;
  }
  declare export class Form
    mixins React.Component<
        FormProps & {
          children?: ((props: FormFunctionProps) => RenderReturn) | RenderReturn
        }
      >,
      React.ChildContextProvider<FormContext> {
    static defaultProps: FormProps;
    static childContextTypes: {
      formApi: React.Validator<any>
    };
    getDefaultState(): FormState;
    getChildContext(): FormContext;
    componentWillMount(): void;
    componentWillReceiveProps(
      nextProps: $ReadOnly<$Shape<FormProps>>,
      nextContext: any
    ): void;
    componentWillUmount(): void;
    render(): RenderReturn;
  }
  declare export var NestedForm: React.StatelessComponent<FieldProps>;
  declare export function FormField(
    component: React.ComponentType<any>
  ): React.ComponentClass<any>;

  declare export interface FieldApi {
    getValue(): FormValue;
    getError(): FormError;
    getWarning(): FormError;
    getSuccess(): FormError;
    getTouched(): boolean;
    getFieldName(): string;
    setValue(value: FormValue): void;
    setError(error: FormError): void;
    setWarning(warning: FormError): void;
    setSuccess(success: FormError): void;
    setTouched(touched: boolean): void;
  }
  declare export interface FieldProps {
    field?:
      | string
      | string[]
      | React.ReactText[]
      | Array<string | React.ReactText[]>;
    showErrors?: boolean;
    errorBefore?: boolean;
    isForm?: boolean;
  }
  declare export type SelectOptions = Array<{
    value: FormValue,
    label: string
  }>;
  declare export type SelectProps = {
    options: SelectOptions,
    placeholder?: string
  } & FieldProps &
    React.SelectHTMLAttributes<HTMLSelectElement>;

  declare export var Select: React.StatelessComponent<SelectProps>;
  declare export var Text: React.StatelessComponent<
    FieldProps & React.InputHTMLAttributes<HTMLInputElement>
  >;
  declare export var TextArea: React.StatelessComponent<
    FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >;
  declare export interface RadioGroupContext {
    group: FieldApi;
  }
  declare export class RadioGroup
    mixins React.Component<
        FieldProps & {
          children?: ((props: FieldApi) => RenderReturn) | RenderReturn
        }
      >,
      React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
      group: FieldApi
    };
  }
  declare export var Radio: React.StatelessComponent<
    FieldProps &
      React.InputHTMLAttributes<HTMLInputElement> & {
        group: FieldApi
      }
  >;
  declare export var Checkbox: React.StatelessComponent<
    FieldProps & React.InputHTMLAttributes<HTMLInputElement>
  >;
  declare export type StyledProps = {
    noMessage?: boolean,
    messageBefore?: boolean,
    touchValidation?: boolean
  } & FieldProps;

  declare export var StyledCheckbox: React.StatelessComponent<
    StyledProps &
      React.InputHTMLAttributes<HTMLInputElement> & {
        label: string
      }
  >;
  declare export var StyledTextArea: React.StatelessComponent<
    StyledProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >;
  declare export var StyledSelect: React.StatelessComponent<
    StyledProps & SelectProps & React.InputHTMLAttributes<HTMLSelectElement>
  >;
  declare export var StyledText: React.StatelessComponent<
    StyledProps & React.InputHTMLAttributes<HTMLInputElement>
  >;
  declare export var StyledRadio: React.StatelessComponent<
    StyledProps &
      React.InputHTMLAttributes<HTMLInputElement> & {
        group: FieldApi,
        label: string
      }
  >;
  declare export class StyledRadioGroup
    mixins React.Component<
        StyledProps & {
          children?: ((props: FieldApi) => RenderReturn) | RenderReturn
        }
      >,
      React.ChildContextProvider<RadioGroupContext> {
    getChildContext(): {
      group: FieldApi
    };
  }
}
