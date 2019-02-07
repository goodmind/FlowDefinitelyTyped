declare module "valerie" {
  /**
   * Extensions to KO functions to provide validation
   *
   * Version 1.2 - added more static methods to valerie object
   */
  declare interface KnockoutObservable<T> {
    validate(
      validationOptions?: Valerie$Valerie$ValidationOptions
    ): Valerie$Valerie$PropertyValidationState<KnockoutObservable<T>>;
  }
  declare interface KnockoutComputed<T> {
    validate(
      validationOptions?: Valerie$Valerie$ValidationOptions
    ): Valerie$Valerie$PropertyValidationState<KnockoutComputed<T>>;
  }
  declare interface KnockoutObservableArray<T> {
    validate(
      validationOptions?: Valerie$Valerie$ValidationOptions
    ): Valerie$Valerie$PropertyValidationState<KnockoutObservableArray<T>>;
  }
  declare interface KnockoutObservableArrayFunctions<T> {
    /**
 * Creates and sets a model validation state on a Knockout observable array.<br/>
 * <i>[fluent]</i>
 * @name ko.observableArray#validateAsModel
 * @method
 * @fluent
 * @param {valerie.Valerie$ModelValidationState.options} validationOptions the options to use when creating the
validation state
 * @return {valerie.Valerie$ModelValidationState} the validation state belonging to the observable array
 */
    validateAsModel(): Valerie$Valerie$ValidatableModel<
      KnockoutObservableArray<T>
    >;
  }

  /**
   * Valerie BindingHandlers
   */
  declare interface KnockoutBindingHandlers {
    /**
     * Validates entries that can be checked, i.e. check boxes and radio buttons.
     * Functions in the same way as the <b>ko.bindingHandlers.checked</b> binding handler, with the following
     * alterations:
     * <ul>
     *      <li>registers a blur event handler so validation messages for selections can be displayed</li>
     *      <li>registers a click event handler so validation state can be marked as touched</i>
     * </ul>
     * @name ko.bindingHandlers.validatedChecked
     */
    validatedChecked: KnockoutBindingHandler;

    /**
     * Validates options selected in a select list.
     * Functions in the same way as the <b>ko.bindingHandlers.selectedOptions</b> binding handler, with the
     * following alterations:
     * <ul>
     *      <li>registers a blur event handler so validation messages for selections can be displayed</li>
     *      <li>registers a click event handler so validation state can be marked as touched</i>
     * </ul>
     * @name ko.bindingHandlers.validatedSelectedOptions
     */
    validatedSelectedOptions: KnockoutBindingHandler;

    /**
     * Validates entries that can be keyed or selected.
     * Functions in the same way as the <b>ko.bindingHandlers.value</b> binding handler, with the following
     * alterations:
     * <ul>
     *      <li>registers a blur event handler:
     *      <ul>
     *          <li>to display validation messages as entries or selections lose focus</li>
     *          <li>to reformat successfully parsed textual entries</li>
     *      </ul>
     *      </li>
     *      <li>
     *          registers a focus event handler to pause the update of any existing visible validation message
     *      </li>
     *      <li>
     *          registers a key-up event handler which validates the entry as it's being entered; this allows other
     *          entries that are shown conditionally to be available before the user tabs out of this entry
     *      </li>
     * </ul>
     * @name ko.bindingHandlers.validatedValue
     */
    validatedValue: KnockoutBindingHandler;

    /**
     * Disables the element when the chosen property or model has failed or is pending validation, enabled
     * otherwise.
     * @name ko.bindingHandlers.disabledWhenNotValid
     */
    disabledWhenNotValid: KnockoutBindingHandler;

    /**
     * Disables the element when the chosen property or model has been touched and has failed or is pending
     * validation, enabled otherwise.<br/>
     * @name ko.bindingHandlers.disabledWhenTouchedAndNotValid
     */
    disabledWhenTouchedAndNotValid: KnockoutBindingHandler;

    /**
     * Enables the element when the chosen property or model is applicable, disabled otherwise.
     * @name ko.bindingHandlers.enabledWhenApplicable
     */
    enabledWhenApplicable: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be a formatted representation of the specified property.
     * @name ko.bindingHandlers.formattedText
     */
    formattedText: KnockoutBindingHandler;

    /**
     * Sets CSS classes on the element based on the validation state of the chosen property or model.</br>
     * The names of the CSS classes used are held in the <b>ko.bindingHandlers.validationCss.classNames</b> object,
     * by default they are:
     * <ul>
     *      <li><b>failed</b> - if validation failed</li>
     *      <li><b>focused</b> - if the element is in focus</li>
     *      <li><b>passed</b> - if validation passed</li>
     *      <li><b>pending</b> - if validation is pending</li>
     *      <li><b>required</b> - if an entry is required</li>
     *      <li><b>showMessage</b> - if a validation message should be shown</li>
     *      <li><b>touched</b> - set if the model or entry has been "touched"</li>
     *      <li><b>untouched</b> - set if the model or entry has not been "touched"</li>
     * </ul>
     * @name ko.bindingHandlers.validationCss
     */
    validationCss: KnockoutBindingHandler;

    /**
     * Makes the element behave like a validation message for the chosen property or model:
     * <ul>
     *      <li>makes the element visible if the value is invalid</li>
     *      <li>sets the text of the element to be the underlying validation state's message</li>
     * </ul>
     * @name ko.bindingHandlers.validationMessage
     */
    validationMessage: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be the underlying validation state's message.
     * @name ko.bindingHandlers.validationMessageText
     */
    validationMessageText: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be the underlying validation state's name.
     * @name ko.bindingHandlers.validationName
     */
    validationName: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model is applicable, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenApplicable
     */
    visibleWhenApplicable: KnockoutBindingHandler;

    /**
     * Makes the element visible when the entry bound to the chosen property is in focus, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenFocused
     */
    visibleWhenFocused: KnockoutBindingHandler;

    /**
     * Makes the element visible when the chosen property or model has failed validation, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenInvalid
     */
    visibleWhenInvalid: KnockoutBindingHandler;

    /**
     * Makes the element visible when the summary for the chosen model is not empty, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenSummaryNotEmpty
     */
    visibleWhenSummaryNotEmpty: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model has been touched, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenTouched
     */
    visibleWhenTouched: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model is untouched, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenUntouched
     */
    visibleWhenUntouched: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model has passed validation.
     * @name ko.bindingHandlers.visibleWhenValid
     */
    visibleWhenValid: KnockoutBindingHandler;
  }
  declare var valerie: Valerie$Valerie$Static;
  declare interface Valerie$Static {
    /**
     * Maps a source model to a destination model, including only applicable properties
     * @param {Object | Array} sourceModel the source model
     * @return {"NO PRINT IMPLEMENTED: JSDocAllType"} the destination model
     */
    mapApplicableModel(sourceModel: any): any;

    /**
 * Maps a source model to a destination model.
 * @param {Object | Array} sourceModel the source model
 * @param {valerie.includePropertyCallback} includeWrappedFunction a function called before each source model
property is unwrapped, the result of which determines if the property is included in the destination model
 * @param {valerie.includePropertyCallback} includeUnwrappedFunction a function called after each source
model property is unwrapped, the result of which determines if the property is included in the destination model
 * @return {"NO PRINT IMPLEMENTED: JSDocAllType"} the destination model
 */
    mapModel(
      sourceModel: any,
      includeWrappedFunction?: Valerie$IncludePropertyCallback,
      includeUnwrappedFunction?: Valerie$IncludePropertyCallback
    ): any;

    /**
 * Makes the passed-in model validatable. After invocation the model will have a validation state.
 * <br/><b>fluent</b>
 * @param {{[key: string]: any} | function} model the model to make validatable
 * @param {valerie.Valerie$ModelValidationState.options} options the options to use when creating the model's validation
state
 * @return {valerie.Valerie$ModelValidationState} the validation state belonging to the model
 */
    validatableModel(
      model: any,
      options?: Valerie$ValidationOptions
    ): Valerie$ModelValidationState;
    validatableProperty<T>(
      value: T,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    Valerie$ValidationResult: Valerie$ValidationResultStatic;
    converters: Valerie$ConvertersStatic;
    utils: Valerie$UtilsStatic;
    validationState: Valerie$ValidationState;
  }

  declare interface Valerie$ValidationResultStatic {
    passedInstance: Valerie$ValidationResult;
    createFailedResult(message: string): Valerie$ValidationResult;
  }

  declare interface Valerie$ConvertersStatic {
    passThrough: Valerie$Valerie$IConverter;
  }

  declare interface Valerie$UtilsStatic {
    asArray<T>(value: any): any[];
    asFunction<T>(value: T): () => T;
    asFunction<T>(fn: () => T): () => T;
    isArray(value: any): boolean;
    isArrayOrObject(value: any): boolean;
    isFunction(value: any): boolean;
    isMissing(value: any): boolean;
    isObject(value: any): boolean;
    isString(value: any): boolean;
    mergeOptions(
      defaultOptions: Valerie$ValidationOptions,
      options: any
    ): Valerie$ValidationOptions;
  }

  declare interface Valerie$IncludePropertyCallback {
    (value: any, sourceModel: any, index: any): boolean;
  }

  declare interface Valerie$ModelValidationState {
    new: (
      model: any,
      options?: Valerie$ModelValidationStateOptions
    ) => Valerie$ModelValidationState;
    model: any;
    options?: Valerie$ModelValidationStateOptions;

    /**
     * Adds validation states to this validation state.<br/>
     * <i>[fluent]</i>
     * @name valerie.ModelValidationState#addValidationStates
     * @fluent
     * @param {{[key: string]: any} | array<valerie.Valerie$IValidationState>} validationStateOrStates the validation states to add
     * @return {valerie.Valerie$ModelValidationState}
     */
    addValidationStates(
      validationStateOrStates: any
    ): Valerie$ModelValidationState;

    /**
     * Sets the value or function used to determine if the model is applicable.<br/>
     * <i>[fluent]</i>
     * @name valerie.ModelValidationState#applicable
     * @fluent
     * @param {boolean | function} valueOrFunction the value or function to use
     * @return {valerie.Valerie$ModelValidationState}
     */
    applicable(valueOrFunction: any): Valerie$ModelValidationState;

    /**
     * Clears the static summary of validation states that are in a failure state.<br/>
     * <i>[fluent]</i>
     * @name valerie.ModelValidationState#clearSummary
     * @fluent
     * @param {boolean} clearSubModelSummaries whether to clear the static summaries for sub-models
     * @return {valerie.Valerie$ModelValidationState}
     */
    clearSummary(valueOrFunction: any): Valerie$ModelValidationState;

    /**
     * *
     * Gets whether the model has failed validation.
     * @return {boolean}
     */
    failed(): boolean;

    /**
     * *
     * Gets the validation states that belong to the model that are in a failure state.
     * @return {Valerie$Valerie$IValidationState[]}
     */
    failedStates(): Valerie$Valerie$IValidationState[];

    /**
     * *
     * Gets the name of the model.
     * @return {string}
     */
    getName(): string;
    isApplicable(): boolean;
    message(): string;
    passed(): boolean;

    /**
     * *
     * Gets or sets whether the computation that updates the validation result has been paused.
     * @param {boolean} value true if the computation should be paused, false if the computation should not be paused
     * @return {boolean} true if computation is paused, false otherwise
     */
    paused(value: boolean): boolean;
    pending(): boolean;
    pendingStates(): Valerie$IValidationState[];
    refresh(): void;
    result(): Valerie$ValidationResult;
    summary(): Valerie$summaryItem[];

    /**
     * *
     * Gets or sets whether the model has been 'touched' by user action
     */
    touched(value: boolean): boolean;
    validationStates(): Valerie$IValidationState[];

    /**
     * Includes any validation failures for this model in a validation summary.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @return {valerie.Valerie$ModelValidationState}
     */
    includeInSummary(): Valerie$ModelValidationState;

    /**
     * Sets the value or function used to determine the name of the model.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @param {string | function} valueOrFunction the value or function to use
     * @return {valerie.Valerie$ModelValidationState}
     */
    name(valueOrFunction: any): Valerie$ModelValidationState;

    /**
     * Removes validation states.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @param {{[key: string]: any} | array<valerie.Valerie$IValidationState>} validationStateOrStates the validation states to remove
     * @return {valerie.Valerie$ModelValidationState}
     */
    removeValidationStates(
      validationStateOrStates: any
    ): Valerie$ModelValidationState;

    /**
     * Stops validating the given sub-model by adding the validation state that belongs to it.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} validatableSubModel the sub - model to start validating
     * @return {valerie.Valerie$ModelValidationState}
     */
    startValidatingSubModel(
      validatableSubModel: any
    ): Valerie$ModelValidationState;

    /**
     * Stops validating the given sub-model by removing the validation state that belongs to it.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} validatableSubModel the sub-model to stop validating
     * @return {valerie.Valerie$ModelValidationState}
     */
    stopValidatingSubModel(
      validatableSubModel: any
    ): Valerie$ModelValidationState;

    /**
     * Updates the static summary of validation states that are in a failure state.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @param {boolean} updateSubModelSummaries whether to update the static summaries for sub-models
     * @return {valerie.Valerie$ModelValidationState}
     */
    updateSummary(
      updateSubModelSummaries: boolean
    ): Valerie$ModelValidationState;

    /**
     * Adds the validation states for all the descendant properties and sub-models that belong to the model.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @return {valerie.Valerie$ModelValidationState}
     */
    validateAll(): Valerie$ModelValidationState;

    /**
     * Adds the validation states for all the descendant properties that belong to the model.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @return {valerie.Valerie$ModelValidationState}
     */
    validateAllProperties(): Valerie$ModelValidationState;

    /**
     * Adds the validation states for all the child properties that belong to the model.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @return {valerie.Valerie$ModelValidationState}
     */
    validateChildProperties(): Valerie$ModelValidationState;

    /**
     * Adds the validation states for all the child properties and sub-models that belong to the model.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @return {valerie.Valerie$ModelValidationState}
     */
    validateChildPropertiesAndSubModels(): Valerie$ModelValidationState;

    /**
     * Ends a chain of fluent method calls on this model validation state.
     * @return {function} the model the validation state is for
     */
    end(): any;
  }

  declare interface Valerie$ModelValidationStateOptions {
    applicable(): boolean;
    excludeFromSummary: boolean;
    failureMessage: string;
    name(): string;
    paused(): boolean;
  }

  declare interface Valerie$PropertyValidationState<T> {
    observableOrComputed: T;
    options: Valerie$ValidationOptions;

    /**
     * Adds a rule to the chain of rules used to validate the property's value.<br/>
     * <i>[fluent]</i>
     * @fluent
     * @param {valerie.Valerie$IRule} rule the rule to add
     * @return {valerie.Valerie$PropertyValidationState}
     */
    addRule(rule: Valerie$IRule): Valerie$PropertyValidationState<T>;
    applicable(value: boolean): Valerie$PropertyValidationState<T>;
    applicable(fn: () => boolean): Valerie$PropertyValidationState<T>;
    currencyMajor(
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    currencyMajorMinor(
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    date(): Valerie$PropertyValidationState<T>;
    during(
      earliest: Date,
      latest: Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    during(
      earliest: () => Date,
      latest: Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    during(
      earliest: Date,
      latest: () => Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    during(
      earliest: () => Date,
      latest: () => Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    earliest(
      earliest: Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    earliest(
      earliest: () => Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    email(): Valerie$PropertyValidationState<T>;
    entryFormat(format: string): Valerie$PropertyValidationState<T>;
    excludeFromSummary(): Valerie$PropertyValidationState<T>;
    expression(
      regularExpression: RegExp,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    expression(
      regularExpressionString: string,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    float(
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    integer(
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    latest(
      latestValueOrFunction: Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    latest(
      latestValueOrFunction: () => Date,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    lengthBetween(
      shortest: number,
      longest: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    lengthBetween(
      shortest: number,
      longest: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    lengthBetween(
      shortest: () => number,
      longest: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    lengthBetween(
      shortest: () => number,
      longest: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    matches(
      permitted: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    matches(
      permitted: () => any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximum(
      maximum: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximum(
      maximum: () => any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximumLength(
      longest: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximumLength(
      longest: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximumNumberOfItems(
      maximum: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    maximumNumberOfItems(
      maximum: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    minimum(
      minimumValueOrFunction: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    minimumLength(
      shortest: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    minimumLength(
      shortest: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    minimumNumberOfItems(
      minimum: number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    minimumNumberOfItems(
      minimum: () => number,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    name(value: string): Valerie$PropertyValidationState<T>;
    name(value: () => string): Valerie$PropertyValidationState<T>;
    noneOf(
      forbiddenValues: any[],
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    noneOf(
      forbiddenValues: () => any[],
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    not(
      forbiddenValueOrFunction: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    number(): Valerie$PropertyValidationState<T>;
    numberOfItems(
      minimumValueOrFunction: any,
      maximumValueOrFunction: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    oneOf(
      permittedValues: any[],
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    oneOf(
      permittedValues: () => any[],
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    postcode(): Valerie$PropertyValidationState<T>;
    range(
      minimumValueOrFunction: any,
      maximumValueOrFunction: any,
      options?: Valerie$ValidationOptions
    ): Valerie$PropertyValidationState<T>;
    required(valueOrFunction?: any): Valerie$PropertyValidationState<T>;
    rule(testFunction: () => any): Valerie$PropertyValidationState<T>;
    ruleMessage(
      failureMessageFormat: string
    ): Valerie$PropertyValidationState<T>;
    string(): Valerie$PropertyValidationState<T>;
    valueFormat(format: string): Valerie$PropertyValidationState<T>;
    validateChildProperties(): Valerie$PropertyValidationState<T>;
    end(): T;
    failed(): boolean;
    getName(): string;
    isApplicable(): boolean;
    isRequired(): boolean;
    message(): string;
    passed(): boolean;
    pending(): boolean;
    showMessage(): boolean;
    touched(): boolean;
    touched(value: boolean): boolean;
    result(): Valerie$ValidationResult;
  }

  declare interface Valerie$ValidationResult {
    state: any;
    failed: boolean;
    passed: boolean;
    pending: boolean;
    message: string;
    new: (state: any, message?: string) => Valerie$ValidationResult;
  }

  declare interface Valerie$IRule {
    defaultOptions: Valerie$ValidationOptions;
    test(value: any): Valerie$ValidationResult;
  }

  declare interface Valerie$IValidationState {
    failed(): boolean;
    getName(): string;
    isApplicable(): boolean;
    message(): string;
    passed(): boolean;
    pending(): boolean;
    result(): Valerie$ValidationResult;
    touched(value?: boolean): boolean;
  }

  declare interface Valerie$ValidatableModel<T> {
    name: (value: string) => Valerie$PropertyValidationState<T>;
    end: () => T;
  }

  declare interface Valerie$ValidationOptions {
    applicable?: () => any;
    converter?: Valerie$IConverter;
    entryFormat?: string;
    excludeFromSummary?: boolean;
    invalidFailureMessage?: string;
    missingFailureMessage?: string;
    name?: () => any;
    required?: () => any;
    rules?: any;
    valueFormat?: string;
  }

  declare interface Valerie$IConverter {
    format: (value: any, format?: string) => string;
    parse: (value: string) => any;
  }

  declare interface Valerie$NumericHelper {
    addThousandsSeparator(numericString: string): string;
    format(value: number, format: string): string;
    init(
      decimalSeparator: string,
      thousandsSeparator: string,
      currencySign: string,
      currencyMinorUnitPlaces: number
    ): Valerie$NumericHelper;
    isCurrencyMajor(numericString: string): boolean;
    isCurrencyMajorMinor(numericString: string): boolean;
    isFloat(numericString: string): boolean;
    isInteger(numericString: string): boolean;
    parse(numericString: string): number;
    unformat(numericString: string): string;
  }

  declare interface Valerie$ValidationState {
    findIn(
      model: any,
      includeSubModels?: boolean,
      recurse?: boolean,
      validationStates?: Valerie$IValidationState[]
    ): Valerie$IValidationState[];
    getFor(modelOrObservableOrComputed: any): Valerie$IValidationState;
    has(modelOrObservableOrComputed: any): boolean;
    setFor(
      modelOrObservableOrComputed: any,
      state: Valerie$IValidationState
    ): void;
  }

  declare interface Valerie$summaryItem {
    name: string;
    message: string;
  }
}
