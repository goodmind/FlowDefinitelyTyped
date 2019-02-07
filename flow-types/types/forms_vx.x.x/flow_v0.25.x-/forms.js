declare module "forms" {
  declare export interface FieldObjectChoice {
    [key: string]: string | FieldObjectChoice;
  }
  declare export type FieldArrayChoice = {} & Array<
    [string, string | FieldArrayChoice]
  >;

  declare export interface FieldParameters {
    /**
     * Optional label text which overrides the default.
     */
    widgets$label?: string;

    /**
     * Boolean describing whether the field is mandatory.
     */
    validators$required?: boolean | ValidatorFunction;

    /**
     * An array of functions which validate the field data.
     */
    validators?: ValidatorFunction[];

    /**
     * A widget object to use when rendering the field.
     */
    widget?: Widget;

    /**
     * An optional id to override the default.
     */
    id?: string;

    /**
     * A list of options, used for multiple choice fields.
     */
    choices?: FieldObjectChoice | FieldArrayChoice;

    /**
     * A list of CSS classes for label and field wrapper.
     */
    cssClasses?: {
      field?: string[],
      widgets$label?: string[]
    };

    /**
     * If true, errors won't be rendered automatically.
     */
    hideError?: boolean;

    /**
     * If true, the label text will be displayed after the field, rather than before.
     */
    labelAfterField?: boolean;

    /**
     * If true, the error message will be displayed after the field, rather than before.
     */
    errorAfterField?: boolean;

    /**
     * For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset.
     */
    fieldsetClasses?: string[];

    /**
     * For widgets with a fieldset (multipleRadio and multipleCheckbox), set classes for the fieldset's legend.
     */
    legendClasses?: string[];
  }
  declare export type FieldIterator = (
    name: string,
    field: FieldBound
  ) => string;
  declare export type Field = {
    /**
     * A widget object to use when rendering the field.
     */
    widget: Widget,

    /**
     * Coerces the raw data from the request into the correct format for the field, returning the result, e.g. '123' becomes 123 for the number field.
     */
    parse: (rawData: any) => any,

    /**
     * Returns a new bound field object. Calls parse on the data and stores in the bound field's data attribute, stores the raw value in the value attribute.
     */
    bind: (rawData: any) => FieldBound,

    /**
     * Returns a string containing a HTML element containing the fields error message, or an empty string if there is no error associated with the field.
     */
    errorHTML: () => string,

    /**
     * Returns a string containing the label text from field.label, or defaults to using the field name with underscores replaced with spaces and the first letter capitalised.
     */
    labelText: (name?: string) => string,

    /**
     * Returns a string containing a label element with the correct 'for' attribute containing the text from field.labelText(name).
     */
    labelHTML: (name: string, id?: string | boolean) => string,

    /**
     * Returns an array of default CSS classes considering the field's attributes, e.g. ['field', 'required', 'error'] for a required field with an error message.
     */
    classes: () => string[],

    /**
     * Calls the iterator with the name and field object as arguments. Defaults to using forms.render.div as the iterator,
     * which returns a HTML representation of the field label, error message and widget wrapped in a div.
     */
    toHTML: (name?: string, iterator?: FieldIterator) => string
  } & FieldParameters;

  declare export type FieldBound = {
    /**
     * The raw value from the request data.
     */
    value: any,

    /**
     * The request data coerced to the correct format for this field.
     */
    data: any,

    /**
     * An error message if the field fails validation.
     */
    error: string,

    /**
     * Checks if the field is required and whether it is empty. Then runs the validator functions in order until one fails or they all pass.
     * If a validator fails, the resulting message is stored in the field's error attribute.
     */
    validate: (
      form: Form,
      callback: (err: string, field: Field) => void
    ) => void
  } & Field;

  declare export type Widget = {
    formatValue: (value: any) => any,

    /**
     * Returns a string containing a HTML representation of the widget for the given field.
     */
    toHTML: (name: string, field?: Field) => string
  } & WidgetParameters;

  declare export interface WidgetParameters {
    /**
     * Custom classes to add to the rendered widget.
     */
    classes?: string[];

    /**
     * Custom classes to add to the choices label when applicable (multipleRadio and multipleCheckbox)
     */
    labelClasses?: string[];

    /**
     * A string representing the widget type, e.g. 'text' or 'checkbox'
     */
    type?: string;
  }

  /**
   * A function that accepts a bound form, bound field and a callback as arguments.
   * It should apply a test to the field to assert its validity.
   * Once processing has completed it must call the callback with no arguments if the field is valid or with an error message if the field is invalid.
   */
  declare export type ValidatorFunction = (
    form: FormBound,
    field: FieldBound,
    callback: (err?: string) => void
  ) => void;
  declare export interface FormFields {
    [key: string]: Field | FormFields;
  }
  declare export type FormHandleCallback = (form: Form) => void;
  declare export interface Form {
    /**
     * Field objects this form was created with
     */
    fields: FormFields;

    /**
     * Inspects a request or object literal and binds any data to the correct fields.
     */
    handle: (
      req: {
        method: string,
        validators$url: string,
        body: string
      },
      callbacks: {
        success?: FormHandleCallback,
        error?: FormHandleCallback,
        empty?: FormHandleCallback,
        other?: FormHandleCallback
      }
    ) => void;

    /**
     * Binds data to correct fields, returning a new bound form object.
     */
    bind: (data: any) => FormBound;

    /**
     * Runs toHTML on each field returning the result.
     * If an iterator is specified, it is called for each field with the field name and object as it's arguments,
     * the iterator's results are concatenated to create the HTML output, allowing for highly customised markup.
     */
    toHTML: (iterator?: FieldIterator) => string;
  }
  declare export type FormBound = {
    /**
     * Object containing all the parsed data keyed by field name.
     */
    data: any,

    /**
     * Calls validate on each field in the bound form and returns the resulting form object to the callback.
     */
    validate: (callback: (err: string, form: FormBound) => void) => void,

    /**
     * Checks all fields for an error attribute. Returns false if any exist, otherwise returns true.
     */
    isValid: () => boolean
  } & Form;

  /**
   * Converts a form definition (an object literal containing field objects) into a form object.
   */
  declare export function create(
    fields: FormFields,
    options?: {
      /**
       * If false, the first validation error will halt form validation, otherwise all fields will be validated.
       */
      validatePastFirstError?: boolean
    }
  ): Form;

  declare var npm$namespace$fields: {
    array: typeof fields$array,
    boolean: typeof fields$boolean,
    date: typeof fields$date,
    email: typeof fields$email,
    number: typeof fields$number,
    password: typeof fields$password,
    string: typeof fields$string,
    tel: typeof fields$tel,
    url: typeof fields$url
  };
  declare function fields$array(params?: FieldParameters): Field;

  declare function fields$boolean(params?: FieldParameters): Field;

  declare function fields$date(params?: FieldParameters): Field;

  declare function fields$email(params?: FieldParameters): Field;

  declare function fields$number(params?: FieldParameters): Field;

  declare function fields$password(params?: FieldParameters): Field;

  declare function fields$string(params?: FieldParameters): Field;

  declare function fields$tel(params?: FieldParameters): Field;

  declare function fields$url(params?: FieldParameters): Field;

  declare var npm$namespace$validators: {
    alphanumeric: typeof validators$alphanumeric,
    color: typeof validators$color,
    date: typeof validators$date,
    digits: typeof validators$digits,
    integer: typeof validators$integer,
    email: typeof validators$email,
    matchField: typeof validators$matchField,
    matchValue: typeof validators$matchValue,
    max: typeof validators$max,
    maxlength: typeof validators$maxlength,
    min: typeof validators$min,
    minlength: typeof validators$minlength,
    range: typeof validators$range,
    rangelength: typeof validators$rangelength,
    regexp: typeof validators$regexp,
    required: typeof validators$required,
    requiresFieldIfEmpty: typeof validators$requiresFieldIfEmpty,
    url: typeof validators$url
  };
  declare function validators$alphanumeric(
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$color(errorMessage?: string): ValidatorFunction;

  declare function validators$date(errorMessage?: string): ValidatorFunction;

  declare function validators$digits(errorMessage?: string): ValidatorFunction;

  declare function validators$integer(errorMessage?: string): ValidatorFunction;

  declare function validators$email(errorMessage?: string): ValidatorFunction;

  declare function validators$matchField(
    matchedField: string,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$matchValue(
    valueGetter: () => any,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$max(
    value: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$maxlength(
    value: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$min(
    value: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$minlength(
    value: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$range(
    validators$min: number,
    validators$max: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$rangelength(
    validators$min: number,
    validators$max: number,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$regexp(
    validators$regexp: RegExp,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$required(
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$requiresFieldIfEmpty(
    alternateField: string,
    errorMessage?: string
  ): ValidatorFunction;

  declare function validators$url(errorMessage?: string): ValidatorFunction;

  declare var npm$namespace$widgets: {
    checkbox: typeof widgets$checkbox,
    color: typeof widgets$color,
    date: typeof widgets$date,
    email: typeof widgets$email,
    hidden: typeof widgets$hidden,
    number: typeof widgets$number,
    label: typeof widgets$label,
    multipleCheckbox: typeof widgets$multipleCheckbox,
    multipleRadio: typeof widgets$multipleRadio,
    multipleSelect: typeof widgets$multipleSelect,
    password: typeof widgets$password,
    select: typeof widgets$select,
    tel: typeof widgets$tel,
    text: typeof widgets$text,
    textarea: typeof widgets$textarea
  };
  declare function widgets$checkbox(params?: WidgetParameters): Widget;

  declare function widgets$color(params?: WidgetParameters): Widget;

  declare function widgets$date(params?: WidgetParameters): Widget;

  declare function widgets$email(params?: WidgetParameters): Widget;

  declare function widgets$hidden(params?: WidgetParameters): Widget;

  declare function widgets$number(params?: WidgetParameters): Widget;

  declare function widgets$label(params?: WidgetParameters): Widget;

  declare function widgets$multipleCheckbox(params?: WidgetParameters): Widget;

  declare function widgets$multipleRadio(params?: WidgetParameters): Widget;

  declare function widgets$multipleSelect(params?: WidgetParameters): Widget;

  declare function widgets$password(params?: WidgetParameters): Widget;

  declare function widgets$select(params?: WidgetParameters): Widget;

  declare function widgets$tel(params?: WidgetParameters): Widget;

  declare function widgets$text(params?: WidgetParameters): Widget;

  declare function widgets$textarea(
    params?: WidgetParameters & {
      rows?: number,
      cols?: number
    }
  ): Widget;

  /**
   * A function which accepts a name and field as arguments and returns a string containing a HTML representation of the field.
   */
  declare export type RenderFunction = (name: string, field: Field) => string;

  declare var npm$namespace$render: {
    div: typeof render$div,
    p: typeof render$p,
    li: typeof render$li,
    table: typeof render$table
  };
  declare var render$div: RenderFunction;

  declare var render$p: RenderFunction;

  declare var render$li: RenderFunction;

  declare var render$table: RenderFunction;
}
