declare module "datatables.net-buttons" {
  declare interface DataTables$Settings {
    /**
     * Buttons extension options
     */
    buttons?:
      | boolean
      | string[]
      | DataTables$ButtonsSettings
      | DataTables$ButtonSettings[];
  }

  declare interface DataTables$StaticFunctions {
    Buttons: DataTables$ButtonStaticFunctions;
  }

  declare interface DataTables$ButtonStaticFunctions {
    new(
      dt: DataTables$Api,
      settings:
        | boolean
        | string[]
        | DataTables$ButtonsSettings
        | DataTables$ButtonSettings[]
    ): void;
    version: string;
    defaults: DataTables$ButtonsSettings;
  }

  declare interface DataTables$ExtSettings {
    buttons: DataTables$ExtButtonsSettings;
  }

  declare interface DataTables$Api {
    button(groupSelector?: any, buttonSelector?: any): DataTables$ButtonApi;
    buttons: DataTables$ButtonsGlobalApi;
  }

  declare interface DataTables$ButtonsGlobalApi {
    (groupSelector?: any, buttonSelector?: any): DataTables$ButtonsApi;

    /**
     * Resize the Flash movie clips to take account of the current button dimensions.
     */
    resize(): DataTables$Api;

    /**
     * Display / hide an information message to the end user to indicate that something has happened.
     */
    info(title: string, message?: string, time?: number): DataTables$Api;

    /**
     * Get meta information that is common to many different button types.
     */
    exportInfo(
      options?: DataTables$ButtonsApiExportInfoParameter
    ): DataTables$ButtonsApiExportInfoReturn;

    /**
     * Obtain data from a DataTable that is suitable for exporting by saving into a file or copying to clipboard.
     */
    exportData(
      options?: DataTables$ButtonsApiExportDataParameter
    ): DataTables$ButtonsApiExportDataReturn;
  }

  declare interface DataTables$ButtonApi {
    /**
     * Get the action function for the selected button.
     */
    action(): DataTables$FunctionButtonAction;

    /**
     * Set the action function for the selected button.
     */
    action(set: DataTables$FunctionButtonAction): DataTables$Api;

    /**
     * Get the active state for the selected button.
     */
    active(): boolean;

    /**
     * Set the active state for the selected button.
     */
    active(state: boolean): DataTables$Api;

    /**
     * Create a new button, adding it to the selected button instance and inserting immediately into the document.
     */
    add(
      index: number | string,
      config: string | DataTables$FunctionButtom | DataTables$ButtonSettings
    ): DataTables$Api;

    /**
     * Disable the selected buttons.
     */
    disable(): DataTables$Api;

    /**
     * Set the enabled state for the selected button.
     */
    enable(state?: boolean): DataTables$Api;

    /**
     * Get a jQuery object that contains a reference to the node for the selected button.
     */
    node(): JQuery;
    nodes(): JQuery;

    /**
     * Determine if a button is currently in the processing state or not.
     */
    processing(): boolean;

    /**
     * Set the processing state for the selected button.
     */
    processing(set: boolean): DataTables$Api;

    /**
     * Set the processing state for the selected button.
     */
    processing(set: boolean): DataTables$Api;

    /**
     * Remove the selected button from the display. The button is destroyed and can no longer be used once removed.
     */
    remove(): DataTables$Api;

    /**
     * Get / Set the display text for the selected button
     */
    text(title?: string | DataTables$FunctionButtonText): DataTables$Api;

    /**
     * Programmatically trigger the action of the selected button.
     */
    trigger(): DataTables$Api;
  }

  declare type DataTables$ButtonsApi = {
    /**
     * Get a jQuery instance that contains a reference to the button container instance.
     */
    container(): JQuery,
    containers(): JQuery,

    /**
     * Destroy the selected button instances, removing the container and all button elements from the document.
     */
    destroy(): DataTables$Api
  } & DataTables$ButtonApi;

  declare interface DataTables$ButtonsApiExportInfoParameter {
    extension?: string | (() => string);
    filename?: string | (() => string);
    messageBottom?: null | string | (() => string);
    messageTop?: null | string | (() => string);
    title?: null | string | (() => string);
  }

  declare interface DataTables$ButtonsApiExportInfoReturn {
    filename: string;
    messageTop: string;
    messageBottom: string;
    title: string;
  }

  declare interface DataTables$ButtonsApiExportDataParameter {
    rows?: any;
    columns?: any;
    modifier?: any;
    orthogonal?: string;
    stripHtml?: boolean;
    stripNewlines?: boolean;
    decodeEntities?: boolean;
    trim?: boolean;
    format?: any;
  }

  declare interface DataTables$ButtonsApiExportDataReturn {
    header: string[];
    footer: string[];
    body: string[];
  }

  declare interface DataTables$ButtonsSettings {
    name?: string;
    tabIndex?: number;
    buttons: Array<
      string | DataTables$FunctionButtom | DataTables$ButtonSettings
    >;
    dom?: DataTables$ButtonDomSettings;
  }

  declare interface DataTables$ButtonDomSettings {
    button?: DataTables$ButtonDomButtomButton;
    buttonContainer?: DataTables$ButtonDomButtomCommon;
    buttonLiner?: DataTables$ButtonDomButtomCommon;
    collection?: DataTables$ButtonDomButtomCommon;
    container?: DataTables$ButtonDomButtomCommon;
  }

  declare interface DataTables$ButtonDomButtomCommon {
    className?: string;
    tag?: string;
  }

  declare type DataTables$ButtonDomButtomButton = {
    active?: string,
    disabled?: string
  } & DataTables$ButtonDomButtomCommon;

  declare interface DataTables$ButtomSettingsCommon {
    /**
     * Action to take when the button is activated
     */
    action?: DataTables$FunctionButtonAction;

    /**
     * Ensure that any requirements have been satisfied before initialising a button
     */
    available?: DataTables$FunctionButtonAvailable;

    /**
     * Set the class name for the button
     */
    className?: string;

    /**
     * Function that is called when the button is destroyed
     */
    destroy?: DataTables$FunctionButtonInit;

    /**
     * Set a button's initial enabled state
     */
    enabled?: boolean;

    /**
     * Define which button type the button should be based on
     */
    extend?: string;

    /**
     * Initialisation function that can be used to add events specific to this button
     */
    init?: DataTables$FunctionButtonInit;

    /**
     * Define an activation key for a button
     */
    key?: string | DataTables$ButtonKey;

    /**
     * Set a name for each selection
     */
    name?: string;

    /**
     * Unique namespace for every button
     */
    namespace?: string;

    /**
     * The text to show in the button
     */
    text?: string | DataTables$FunctionButtonText;

    /**
     * Button 'title' attribute text
     */
    titleAttr?: string;
  }

  declare interface DataTables$ButtonKey {
    key?: string;
    shiftKey?: boolean;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
  }

  /**
   * A function that will be executed upon creation of the buttons.
   */
  declare type DataTables$FunctionButtom = (
    dt: DataTables$Api
  ) => DataTables$ButtomSettingsCommon;

  declare type DataTables$FunctionButtonText = (
    dt: DataTables$Api,
    node: JQuery,
    config: any
  ) => string;

  declare type DataTables$FunctionButtonAvailable = (
    dt: DataTables$Api,
    config: any
  ) => boolean;

  declare type DataTables$FunctionButtonInit = (
    dt: DataTables$Api,
    node: JQuery,
    config: any
  ) => void;

  declare type DataTables$FunctionButtonAction = (
    e: any,
    dt: DataTables$Api,
    node: JQuery,
    config: DataTables$ButtonSettings
  ) => void;

  declare type DataTables$FunctionButtonCustomize = (
    win: Window | string
  ) => void;

  declare type DataTables$FunctionExtButtonsCollectionText = (a: any) => string;

  declare interface DataTables$ExtButtonsSettings {
    collection: DataTables$ExtButtonsCollectionSettings;
  }

  declare interface DataTables$ExtButtonsCollectionSettings {
    action: DataTables$FunctionButtonAction;
    autoClose: boolean;
    background: boolean;
    backgroundClassName: string;
    className: string;
    collectionLayout: string;
    fade: number;
    text: DataTables$FunctionExtButtonsCollectionText;
  }

  /**
   * Buttons extension options
   */
  declare type DataTables$ButtonSettings = {
    /**
     * CSV / EXCEL: Define what the exported filename should be
     */
    filename?: string,

    /**
     * COPY / CSV: field separator
     */
    fieldSeparator?: string,

    /**
     * COPY / CSV: field boundary
     */
    fieldBoundary?: string,

    /**
     * COPY / CSV: field separator
     */
    newLine?: string,

    /**
     * CSV / EXCEL / PDF: file extension
     */
    extension?: string,

    /**
     * CSV: UTF-8 boom
     */
    bom?: boolean,

    /**
     * CSV: charset
     */
    charset?: string | boolean,

    /**
     * CSV: escape char
     */
    escapeChar?: string,

    /**
     * EXCEL
     */
    customizeData?: DataTables$FunctionButtonCustomizeData,

    /**
     * PDF: portrait / landscape
     */
    orientation?: string,

    /**
     * PDF: A3 / A4 / A5 / LEGAL / LETTER / TABLOID
     */
    pageSize?: string,

    /**
     * COPY / CSV / EXCEL / PDF / PRINT: show header
     */
    exportOptions?: DataTables$ButtonExportOptions | { [key: string]: any },

    /**
     * COPY / CSV / EXCEL / PDF / PRINT: show header
     */
    customize?: DataTables$FunctionButtonCustomize,

    /**
     * COPY / CSV / EXCEL / PDF / PRINT: show header
     */
    header?: boolean,

    /**
     * COPY / CSV / EXCEL / PDF / PRINT: show footer
     */
    footer?: boolean,

    /**
     * COPY / PRINT: title
     */
    title?: string,

    /**
     * COPY / EXCEL / PDF / PRINT: field separator
     */
    messageTop?: string,

    /**
     * COPY / EXCEL / PDF / PRINT: field separator
     */
    messageBottom?: string,

    /**
     * PDF / PRINT: Extra message
     */
    message?: string | DataTables$Api | JQuery | { [key: string]: any },

    /**
     * PRINT: Show print dialoge on click
     */
    autoPrint?: boolean,

    /**
     * COLVIS: Column selector
     */
    columns?: any,

    /**
     * COLVIS:
     */
    columnText?: DataTables$FunctionButtonColvisColumnText
  } & DataTables$ButtomSettingsCommon;

  declare interface DataTables$ButtonExportOptions {
    columns?: string | number | string[] | number[];
  }

  declare type DataTables$FunctionButtonCustomizeData = (content: any) => void;

  declare type DataTables$FunctionButtonColvisColumnText = (
    dt: DataTables$Api,
    i: number,
    title: string
  ) => string;
}
