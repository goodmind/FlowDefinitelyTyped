declare module "global" {
  declare interface HTMLElement {
    inputmask?: Inputmask$Instance;
  }
  declare interface JQuery {
    /**
     * Return the default (empty) mask value.
     */
    inputmask(method: "getemptymask"): string;

    /**
     * The metadata of the actual mask provided in the mask definitions can be obtained by calling getmetadata. If
     * only a mask is provided the mask definition will be returned by the getmetadata.
     */
    inputmask(method: "getmetadata"): any;

    /**
     * Check whether the returned value is masked or not; currently only works reliably when using `jquery.val` fn
     * to retrieve the value
     */
    inputmask(method: "hasMaskedValue"): boolean;

    /**
     * Verify whether the current value is complete or not.
     */
    inputmask(method: "isComplete"): boolean;

    /**
     * Validate a given value against the mask.
     */
    inputmask(method: "isValid"): boolean;

    /**
     * Get an option on an existing inputmask.
     * @param key Name of option to retrieve.
     */
    inputmask(method: "option", key: string): any;

    /**
     * Set an option on an existing inputmask. The option method is intented for adding extra options like
     * callbacks, etc at a later time to the mask.
     *
     * When extra options are set the mask is automatically reapplied, unless you pas true for the `noremask`
     * argument.
     */
    inputmask(
      method: "option",
      opts: Inputmask$Options,
      noremask?: boolean
    ): Inputmask$Instance;

    /**
     * Remove the inputmask.
     */
    inputmask(method: "remove"): void;

    /**
     * The `setvalue` functionality is to set a value to the inputmask like you would do with `jQuery.val`, BUT it
     * will trigger the internal event used by the inputmask always, whatever the case. This is particular useful
     * when cloning an inputmask with jQuery.clone. Cloning an inputmask is not a fully functional clone. On the
     * first event (`mouseenter`, `focus`, ...) the inputmask can detect if it where cloned and can reactivate the
     * masking. However when setting the value with jQuery.val there is none of the events triggered in that case.
     * The `setvalue` functionality does this for you.
     */
    inputmask(method: "setValue", value: string): void;

    /**
     * Gets the unmasked value.
     */
    inputmask(method: "unmaskedvalue"): string;

    /**
     * Creates a new Inputmask instance.
     * @param maskOrAlias A mask pattern or a reference to a predefined alias.
     * @param opts Mask options.
     */
    inputmask(
      maskOrAlias: string,
      opts?: Inputmask$Options
    ): Inputmask$Instance;

    /**
     * Creates a new Inputmask instance.
     * @param opts Mask options.
     */
    inputmask(opts?: Inputmask$Options): Inputmask$Instance;
  }
}
declare module "inputmask" {
  declare type Inputmask$Range =
    | {
        start: string,
        end: string
      }
    | [string, string];

  declare type Inputmask$PositionCaretOnClick =
    | "none"
    | "lvp"
    | "radixFocus"
    | "select"
    | "ignore";

  declare type Inputmask$InputMode =
    | "verbatim"
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";

  declare type Inputmask$Casing = "upper" | "lower" | "title";

  declare type Inputmask$DefinitionValidator = (
    chrs: string,
    buffer: string[],
    pos: number,
    strict: boolean,
    opts: Inputmask$Options
  ) =>
    | boolean
    | {
        pos: number,
        c: string
      };

  declare interface Inputmask$Options {
    /**
     * Change the mask placeholder. Instead of "_", you can change the unfilled characters mask as you like, simply
     * by adding the placeholder option. For example, placeholder: " " will change the default autofill with empty
     * values.
     * @default "_"
     */
    placeholder?: string;

    /**
     * Definition of the symbols used to indicate an optional part in the mask.
     * @default { start: "[", end: "]" }
     */
    optionalmarker?: Inputmask$Range;

    /**
     * Definition of the symbols used to indicate a quantifier in the mask.
     * @default { start: "{", end: "}" }
     */
    quantifiermarker?: Inputmask$Range;

    /**
     * Definition of the symbols used to indicate a group in the mask.
     * @default { start: "(", end: ")" }
     */
    groupmarker?: Inputmask$Range;

    /**
     * Definition of the symbols used to indicate an alternator part in the mask.
     * @default "|"
     */
    alternatormarker?: string;

    /**
     * Definition of the symbols used to escape a part in the mask.
     * @default "\\"
     */
    escapeChar?: string;

    /**
     * The mask to use.
     */
    mask?: string | string[] | ((opts: Inputmask$Options) => string | string[]);

    /**
     * Use a regular expression as a mask. When using shorthands be aware that you need to double escape or use
     * String.raw with a string literal.
     */
    regex?: string;

    /**
     * Execute a function when the mask is completed.
     */
    oncomplete?: () => void;

    /**
     * Execute a function when the mask is cleared.
     */
    onincomplete?: () => void;

    /**
     * Execute a function when the mask is cleared.
     */
    oncleared?: () => void;

    /**
     * Mask repeat function. Repeat the mask definition x-times.
     * `*` ~ forever, otherwise specify an integer
     * @default 0
     */
    repeat?: number | string;

    /**
     * Toggle to allocate as much possible or the opposite. Non-greedy repeat function. With the non-greedy option
     * set to `false`, you can specify `*` as repeat. This makes an endless repeat.
     * @default false
     */
    greedy?: boolean;

    /**
     * Automatically unmask the value when retrieved.
     *
     * When setting this option to true the plugin also expects the initial value from the server to be unmasked.
     * @default false
     */
    autoUnmask?: boolean;

    /**
     * Remove the mask before submitting the form.
     * @default false
     */
    removeMaskOnSubmit?: boolean;

    /**
     * Remove the empty mask on blur or when not empty removes the optional trailing part.
     * @default true
     */
    clearMaskOnLostFocus?: boolean;

    /**
     * Toggle to insert or overwrite input. This option can be altered by pressing the Insert key.
     * @default true
     */
    insertMode?: boolean;

    /**
     * Clear the incomplete input on blur.
     * @default false
     */
    clearIncomplete?: boolean;

    /**
     * The alias to use.
     * @default null
     */
    alias?: string;

    /**
     * Callback to implement autocomplete on certain keys for example.
     */
    onKeyDown?: (
      event: KeyboardEvent,
      buffer: string[],
      caretPos: number,
      opts: Inputmask$Options
    ) => void;

    /**
     * Executes before masking the initial value to allow preprocessing of the initial value.
     */
    onBeforeMask?: (initialValue: string, opts: Inputmask$Options) => string;

    /**
     * This callback allows for preprocessing the pasted value before actually handling the value for masking.
     * This can be useful for stripping away some characters before processing. You can also disable pasting
     * a value by returning false in the `onBeforePaste` call.
     */
    onBeforePaste?: (pastedValue: string, opts: Inputmask$Options) => string;

    /**
     * Executes before writing to the masked element Use this to do some extra processing of the input. This can
     * be useful when implementing an alias, ex. decimal alias, autofill the digits when leaving the inputfield.
     */
    onBeforeWrite?: (
      event: KeyboardEvent,
      buffer: string[],
      caretPos: number,
      opts: Inputmask$Options
    ) => Inputmask$CommandObject;

    /**
     * Executes after unmasking to allow post-processing of the unmaskedvalue.
     * @returns New unmasked value
     */
    onUnMask?: (maskedValue: string, unmaskedValue: string) => string;

    /**
     * Shows the mask when the input gets focus.
     * @default true
     */
    showMaskOnFocus?: boolean;

    /**
     * Shows the mask when the input is hevered by the mouse cursor.
     * @default true
     */
    showMaskOnHover?: boolean;

    /**
     * Callback function is executed on every keyvalidation with the key & result as parameter.
     */
    onKeyValidation?: (key: number, result: boolean) => void;

    /**
     * A character which can be used to skip an optional part of a mask.
     * @default " "
     */
    skipOptionalPartCharacter?: string;

    /**
     * Numeric input direction. Keeps the caret at the end.
     * @default false
     */
    numericInput?: boolean;

    /**
     * Align the input to the right
     *
     * By setting the rightAlign you can specify to right align an inputmask. This is only applied in combination of
     * the `numericInput` option or the `dir-attribute`.
     * @default true
     */
    rightAlign?: boolean;

    /**
     * Make escape behave like undo. (ctrl-Z) Pressing escape reverts the value to the value before focus.
     * @default true
     */
    undoOnEscape?: boolean;

    /**
     * Define the radixpoint (decimal separator)
     * @default ""
     */
    radixPoint?: string;

    /**
     * Define the groupseparator.
     * @default ""
     */
    groupSeparator?: string;

    /**
     * Use in combination with the alternator syntax Try to keep the mask static while typing. Decisions to alter the
     * mask will be postponed if possible.
     *
     * ex. $(selector).inputmask({ mask: ["+55-99-9999-9999", "+55-99-99999-9999", ], keepStatic: true });
     *
     * typing 1212345123 => should result in +55-12-1234-5123 type extra 4 => switch to +55-12-12345-1234
     *
     * When passing multiple masks (an array of masks) keepStatic is automatically set to true unless explicitly set
     * through the options.
     * @default null
     */
    keepStatic?: boolean | null;

    /**
     * When enabled the caret position is set after the latest valid position on TAB.
     * @default true
     */
    positionCaretOnTab?: boolean;

    /**
     * Allows for tabbing through the different parts of the masked field.
     * @default false
     */
    tabThrough?: boolean;

    /**
     * List with the supported input types
     * @default ["text", "tel", "url", "password", "search"]
     */
    supportsInputType?: string[];

    /**
     * Specify keyCodes which should not be considered in the keypress event, otherwise the `preventDefault` will
     * stop their default behavior especially in FF.
     */
    ignorables?: number[];

    /**
     * With this call-in (hook) you can override the default implementation of the isComplete function.
     */
    isComplete?: (buffer: string[], opts: Inputmask$Options) => boolean;

    /**
     * Hook to postValidate the result from isValid. Useful for validating the entry as a whole.
     */
    postValidation?: (
      buffer: string[],
      pos: number,
      currentResult: Inputmask$CommandObject,
      opts: Inputmask$Options
    ) => boolean | Inputmask$CommandObject;

    /**
     * Hook to preValidate the input. Useful for validating regardless the definition. When return true, the normal
     * validation kicks in, otherwise it is skipped.
     */
    preValidation?: (
      buffer: string[],
      pos: number,
      char: string,
      isSelection: boolean,
      opts: Inputmask$Options
    ) => boolean | Inputmask$CommandObject;

    /**
     * The `staticDefinitionSymbol` option is used to indicate that the static entries in the mask can match a
     * certain definition. Especially useful with alternators so that static element in the mask can match
     * another alternation.
     * @default undefined
     */
    staticDefinitionSymbol?: string;

    /**
     * Just in time masking. With the `jitMasking` option you can enable jit masking. The mask will only be
     * visible for the user entered characters.
     * @default false
     */
    jitMasking?: boolean;

    /**
     * Return nothing from the input `value` property when the user hasn't entered anything. If this is false,
     * the mask might be returned.
     * @default true
     */
    nullable?: boolean;

    /**
     * Disable value property patching
     * @default false
     */
    noValuePatching?: boolean;

    /**
     * Positioning of the caret on click.
     *
     * Options:
     *
     * * `none`
     * * `lvp` - based on the last valid position (default)
     * * `radixFocus` - position caret to radixpoint on initial click
     * * `select` - select the whole input
     * * `ignore` - ignore the click and continue the mask
     * @default "lvp"
     */
    positionCaretOnClick?: Inputmask$PositionCaretOnClick;

    /**
     * Apply casing at the mask-level.
     * @default undefined
     */
    casing?: Inputmask$Casing;

    /**
     * Specify the inputmode - already in place for when browsers start to support them
     * https://html.spec.whatwg.org/#input-modalities:-the-inputmode-attribute
     * @default "verbatim"
     */
    inputmode?: Inputmask$InputMode;

    /**
     * Create a css styleable mask.
     *
     * You need to include the inputmask.css in your page to use this option.
     *
     * See the inputmask.css for more info about the used styling. You can override the
     * Inputmask.prototype.positionColorMask`if you need some custom positioning.
     *          *
     *          * @default false
     *          *
     */
    colorMask?: boolean;

    /**
     * Disables predictive text on mobile devices.
     *
     * What it does:
     *
     * * changes the input type to password => disables predictive text
     * * enables the colorMask option which creates a div, which surrounds the input. So we type in the hidden
     *    password input and render the mask in the a created div.
     *
     * To use the colorMask, you need to include the inputmask.css. You might need to add some css-tweaks to make
     * it all visually correct in your page.
     * @default false
     */
    disablePredictiveText?: boolean;

    /**
     * Specify to use the `data-inputmask` attributes or to ignore them.
     *
     * If you don't use data attributes you can disable the import by specifying `importDataAttributes: false`.
     * @default true
     */
    importDataAttributes?: boolean;

    /**
     * Shift position of the mask entries on entry and deletion. In some cases shift the mask enties isn't desired.
     *
     * Ex. date masks. Shifting month to day makes no sense
     * @default true
     */
    shiftPositions?: boolean;

    /**
     * Minimum value. This needs to be in the same format as the `inputFormat` when used with the datetime alias.
     */
    min?: string;

    /**
     * Maximum value. This needs to be in the same format as the `inputFormat` when used with the datetime alias.
     */
    max?: string;

    /**
     * Number of fractionalDigits.
     *
     * Possible values:
     *
     * * A number describing the number of fractional digits.
     * * `*`
     * * Quantifier syntax like `2,4`. When the quantifier syntax is used, the `digitsOptional` option is ignored
     * @default "*"
     */
    digits?: string;

    /**
     * Specify wheter the digits are optional.
     * @default true
     */
    digitsOptional?: boolean;

    /**
     * Enforces the decimal part when leaving the input field.
     * @default false
     */
    enforceDigitsOnBlur?: boolean;

    /**
     * Define the grouping of the integer part.
     * @default 3
     */
    groupSize?: number;

    /**
     * Enable grouping of the integer part.
     * @default false
     */
    autoGroup?: boolean;

    /**
     * Allow to enter -.
     * @default true
     */
    allowMinus?: boolean;

    /**
     * Define your negationSymbol.
     * @default { front: "-", back: "" }
     */
    negationSymbol?: {
      front: string,
      back: string
    };

    /**
     * Number of integerDigits
     * @default "+"
     */
    integerDigits?: string;

    /**
     * Specify wheter the integerdigits are optional.
     * @default true
     */
    integerOptional?: boolean;

    /**
     * Define a prefix.
     * @default ""
     */
    prefix?: string;

    /**
     * Define a suffix.
     * @default ""
     */
    suffix?: string;

    /**
     * Do not allow assumption of decimals input without entering the radixpoint.
     * @default true
     */
    decimalProtect?: boolean;

    /**
     * Define the step the ctrl-up & ctrl-down must take.
     * @default 1
     */
    step?: number;

    /**
     * Make unmasking returning a number instead of a string.
     *
     * Be warned that using the unmaskAsNumber option together with jQuery.serialize will fail as serialize expects a string. (See issue #1288)
     * @default false
     */
    unmaskAsNumber?: boolean;

    /**
     * Indicates whether the value passed for initialization is text or a number
     * @default "text"
     */
    inputType?: "text" | "number";

    /**
     * Format used to input a date. This option is only effective for the datetime alias.
     *
     * Supported symbols
     *
     * * `d` - Day of the month as digits; no leading zero for single-digit days.
     * * `dd` - Day of the month as digits; leading zero for single-digit days.
     * * `ddd` - Day of the week as a three-letter abbreviation.
     * * `dddd` - Day of the week as its full name.
     * * `m` - Month as digits; no leading zero for single-digit months.
     * * `mm` - Month as digits; leading zero for single-digit months.
     * * `mmm` - Month as a three-letter abbreviation.
     * * `mmmm` - Month as its full name.
     * * `yy` - Year as last two digits; leading zero for years less than 10.
     * * `yyyy` - Year as 4 digits.
     * * `h` - Hours; no leading zero for single-digit hours (12-hour clock).
     * * `hh` - Hours; leading zero for single-digit hours (12-hour clock).
     * * `hhh` - Hours; no limit
     * * `H` - Hours; no leading zero for single-digit hours (24-hour clock).
     * * `HH` - Hours; leading zero for single-digit hours (24-hour clock).
     * * `HHH` - Hours; no limit
     * * `M` - Minutes; no leading zero for single-digit minutes. Uppercase M unlike CF timeFormat's m to avoid
     *          conflict with months.
     * * `MM` - Minutes; leading zero for single-digit minutes. Uppercase MM unlike CF timeFormat's mm to avoid
     *           conflict with months.
     * * `s` - Seconds; no leading zero for single-digit seconds.
     * * `ss` - Seconds; leading zero for single-digit seconds.
     * * `l` - Milliseconds. 3 digits.
     * * `L` - Milliseconds. 2 digits.
     * * `t` - Lowercase, single-character time marker string: a or p.
     * * `tt` - Two-character time marker string: am or pm.
     * * `T` - Single-character time marker string: A or P.
     * * `TT` - Two-character time marker string: AM or PM.
     * * `Z` - US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the Opera browser, the
     *          GMT/UTC offset is returned, e.g. GMT-0500
     * * `o` - GMT/UTC timezone offset, e.g. -0500 or +0230.
     * * `S` - The date's ordinal suffix (st, nd, rd, or th). Works well with d.
     * @default "isoDateTime"
     */
    inputFormat?: string;

    /**
     * Format of the unmasked value. This is only effective when used with the datetime alias.
     */
    outputFormat?: string;
  }

  declare interface Inputmask$Instance {
    /**
     * Return the default (empty) mask value.
     */
    getemptymask(): string;

    /**
     * The metadata of the actual mask provided in the mask definitions can be obtained by calling getmetadata. If
     * only a mask is provided the mask definition will be returned by the getmetadata.
     */
    getmetadata(): any;

    /**
     * Check whether the returned value is masked or not; currently only works reliably when using `jquery.val` fn
     * to retrieve the value
     */
    hasMaskedValue(): boolean;

    /**
     * Verify whether the current value is complete or not.
     */
    isComplete(): boolean;

    /**
     * Validate a given value against the mask.
     */
    isValid(): boolean;

    /**
     * Create a mask for the input.
     * @param el Element selector, a single element or an array of elements.
     */
    mask(
      selectorOrElement: string | HTMLElement | ArrayLike<HTMLElement>
    ): Inputmask$Instance;

    /**
     * Get an option on an existing inputmask.
     * @param key Name of option to retrieve.
     */
    option(key: string): any;

    /**
     * Set an option on an existing inputmask. The option method is intented for adding extra options like
     * callbacks, etc at a later time to the mask.
     *
     * When extra options are set the mask is automatically reapplied, unless you pas true for the `noremask`
     * argument.
     */
    option(opts: Inputmask$Options, noremask?: boolean): Inputmask$Instance;

    /**
     * Remove the inputmask.
     */
    remove(): void;

    /**
     * The `setvalue` functionality is to set a value to the inputmask like you would do with `jQuery.val`, BUT it
     * will trigger the internal event used by the inputmask always, whatever the case. This is particular useful
     * when cloning an inputmask with jQuery.clone. Cloning an inputmask is not a fully functional clone. On the
     * first event (`mouseenter`, `focus`, ...) the inputmask can detect if it where cloned and can reactivate the
     * masking. However when setting the value with jQuery.val there is none of the events triggered in that case.
     * The `setvalue` functionality does this for you.
     */
    setValue(value: string): void;

    /**
     * Gets the unmasked value.
     */
    unmaskedvalue(): string;
  }

  declare interface Inputmask$Definition {
    validator: string | Inputmask$DefinitionValidator;
    casing?: Inputmask$Casing;
    cardinality?: number;
    placeholder?: string;
    definitionSymbol?: string;
  }

  declare interface Inputmask$InsertPosition {
    /**
     * Position to insert.
     */
    pos: number;

    /**
     * Character to insert.
     */
    c: string;
  }

  declare interface Inputmask$CommandObject {
    /**
     * Position to insert.
     */
    pos?: number;

    /**
     * Character to insert.
     */
    c?: string;

    /**
     * Position of the caret.
     */
    caret?: number;

    /**
     * Position(s) to remove.
     */
    remove?: number | number[];

    /**
     * Position(s) to add.
     */
    insert?: Inputmask$InsertPosition | Inputmask$InsertPosition[];

    /**
     * * `true` => refresh validPositions from the complete buffer .
     * * `{ start: , end: }` => refresh from start to end.
     */
    refreshFromBuffer?:
      | true
      | {
          start: number,
          end: number
        };
  }

  declare interface Inputmask$Static {
    /**
     * Creates a new Inputmask instance.
     * @param maskOrAlias A mask pattern or a reference to a predefined alias.
     * @param opts Mask options.
     */
    (maskOrAlias: string, opts?: Inputmask$Options): Inputmask$Instance;

    /**
     * Creates a new Inputmask instance.
     * @param opts Mask options.
     */
    (opts?: Inputmask$Options): Inputmask$Instance;

    /**
     * Creates a new Inputmask instance.
     * @param maskOrAlias A mask pattern or a reference to a predefined alias.
     * @param opts Mask options.
     */
    new(maskOrAlias: string, opts?: Inputmask$Options): Inputmask$Instance;

    /**
     * Creates a new Inputmask instance.
     * @param opts Mask options.
     */
    new(opts?: Inputmask$Options): Inputmask$Instance;

    /**
     * Extends the default inputmask options.
     */
    extendDefaults(opts: Inputmask$Options): void;

    /**
     * Add new definitions to this inputmask.
     */
    extendDefinitions(definitions: {
      [key: string]: Inputmask$Definition
    }): void;

    /**
     * Extends the set of available mask aliases.
     */
    extendAliases(aliases: {
      [key: string]: Inputmask$Options
    }): void;

    /**
     * Instead of masking an input element it is also possible to use the inputmask for formatting given values.
     * Think of formatting values to show in jqGrid or on other elements then inputs.
     * @param value Value to format.
     * @param opts Mask options.
     */
    format(value: string, opts: Inputmask$Options): string;

    /**
     * Validate a given value against the mask.
     * @param value Value to validate.
     * @param opts Mask options.
     */
    isValid(value: string, opts: Inputmask$Options): boolean;

    /**
     * Remove the inputmask.
     */
    remove(
      selectorOrElement: string | HTMLElement | ArrayLike<HTMLElement>
    ): void;

    /**
     * The setvalue functionality is to set a value to the inputmask like you would do with jQuery.val, BUT it will
     * trigger the internal event used by the inputmask always, whatever the case. This is particular usefull when
     * cloning an inputmask with jQuery.clone. Cloning an inputmask is not a fully functional clone. On the first
     * event (mouseenter, focus, ...) the inputmask can detect if it where cloned and can reactivate the masking.
     * However when setting the value with jQuery.val there is none of the events triggered in that case. The
     * setvalue functionality does this for you.
     */
    setValue(
      selectorOrElement: string | HTMLElement | ArrayLike<HTMLElement>,
      value: string
    ): void;

    /**
     * Unmask a given value against the mask.
     * @param value Value to be unmasked.
     * @param opts Mask options.
     */
    unmask(value: string, opts: Inputmask$Options): string;
  }
  declare var Inputmask: Inputmask$Static;
  declare export default typeof Inputmask;
}
