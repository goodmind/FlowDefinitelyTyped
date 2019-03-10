declare module "activex-infopath" {
  declare var npm$namespace$InfoPath: {
    CommandIds: typeof InfoPath$CommandIds,
    XdAttachmentType: typeof InfoPath$XdAttachmentType,
    XdCertificateStatus: typeof InfoPath$XdCertificateStatus,
    XdConfirmButtons: typeof InfoPath$XdConfirmButtons,
    XdConfirmChoice: typeof InfoPath$XdConfirmChoice,
    XdDocumentVersionMode: typeof InfoPath$XdDocumentVersionMode,
    XdMachineOnlineState: typeof InfoPath$XdMachineOnlineState,
    XdReadOnlyViewMode: typeof InfoPath$XdReadOnlyViewMode,
    XdSignatureAppearanceType: typeof InfoPath$XdSignatureAppearanceType,
    XdSignatureRelation: typeof InfoPath$XdSignatureRelation,
    XdSignatureStatus: typeof InfoPath$XdSignatureStatus,
    XdTaskPaneType: typeof InfoPath$XdTaskPaneType,
    XdWindowState: typeof InfoPath$XdWindowState,
    XdWindowType: typeof InfoPath$XdWindowType,
    _XDocument: typeof InfoPath$_XDocument,
    ADOAdapterObject: typeof InfoPath$ADOAdapterObject,
    Application: typeof InfoPath$Application,
    ApplicationEvents: typeof InfoPath$ApplicationEvents,
    BDCAdapterObject: typeof InfoPath$BDCAdapterObject,
    Button: typeof InfoPath$Button,
    CertificateObject: typeof InfoPath$CertificateObject,
    DataAdaptersCollection: typeof InfoPath$DataAdaptersCollection,
    DataDOM: typeof InfoPath$DataDOM,
    DataDOMEventObject: typeof InfoPath$DataDOMEventObject,
    DataObjectsCollection: typeof InfoPath$DataObjectsCollection,
    DataSourceObject: typeof InfoPath$DataSourceObject,
    DateObject: typeof InfoPath$DateObject,
    DAVAdapterObject: typeof InfoPath$DAVAdapterObject,
    DocActionEventObject: typeof InfoPath$DocActionEventObject,
    DocContextChangeEventObject: typeof InfoPath$DocContextChangeEventObject,
    DocEventObject: typeof InfoPath$DocEventObject,
    DocReturnEventObject: typeof InfoPath$DocReturnEventObject,
    EmailAdapterObject: typeof InfoPath$EmailAdapterObject,
    ErrorObject: typeof InfoPath$ErrorObject,
    ErrorsCollection: typeof InfoPath$ErrorsCollection,
    ExternalApplication: typeof InfoPath$ExternalApplication,
    HTMLTaskPaneObject: typeof InfoPath$HTMLTaskPaneObject,
    HWSAdapterObject: typeof InfoPath$HWSAdapterObject,
    IInitEventHandler: typeof InfoPath$IInitEventHandler,
    InfoPathEditorObject: typeof InfoPath$InfoPathEditorObject,
    INotifyHostEventHandler: typeof InfoPath$INotifyHostEventHandler,
    InputParameterCollection: typeof InfoPath$InputParameterCollection,
    InputParameterObject: typeof InfoPath$InputParameterObject,
    ISubmitToHostEventHandler: typeof InfoPath$ISubmitToHostEventHandler,
    MailEnvelopeObject: typeof InfoPath$MailEnvelopeObject,
    MathObject: typeof InfoPath$MathObject,
    MergeEventObject: typeof InfoPath$MergeEventObject,
    PermissionObject: typeof InfoPath$PermissionObject,
    SaveEventObject: typeof InfoPath$SaveEventObject,
    ServerInfoObject: typeof InfoPath$ServerInfoObject,
    SharepointListAdapterObject: typeof InfoPath$SharepointListAdapterObject,
    SharePointListAdapterRWObject: typeof InfoPath$SharePointListAdapterRWObject,
    SignatureLineObject: typeof InfoPath$SignatureLineObject,
    SignatureLinesCollection: typeof InfoPath$SignatureLinesCollection,
    SignatureObject: typeof InfoPath$SignatureObject,
    SignaturesCollection: typeof InfoPath$SignaturesCollection,
    SignedDataBlockObject: typeof InfoPath$SignedDataBlockObject,
    SignedDataBlocksCollection: typeof InfoPath$SignedDataBlocksCollection,
    SignEventObject: typeof InfoPath$SignEventObject,
    SolutionObject: typeof InfoPath$SolutionObject,
    SubmitToHostAdapterObject: typeof InfoPath$SubmitToHostAdapterObject,
    TaskPaneObject: typeof InfoPath$TaskPaneObject,
    TaskPanesCollection: typeof InfoPath$TaskPanesCollection,
    UI: typeof InfoPath$UI,
    UIObject: typeof InfoPath$UIObject,
    UserObject: typeof InfoPath$UserObject,
    UserPermissionObject: typeof InfoPath$UserPermissionObject,
    UtilObject: typeof InfoPath$UtilObject,
    VersionUpgradeEventObject: typeof InfoPath$VersionUpgradeEventObject,
    ViewInfoObject: typeof InfoPath$ViewInfoObject,
    ViewInfosCollection: typeof InfoPath$ViewInfosCollection,
    ViewObject: typeof InfoPath$ViewObject,
    WebServiceAdapterObject: typeof InfoPath$WebServiceAdapterObject,
    Window: typeof InfoPath$Window,
    WindowObject: typeof InfoPath$WindowObject,
    WindowsCollection: typeof InfoPath$WindowsCollection,
    XDNetworkState: typeof InfoPath$XDNetworkState,
    XDocument: typeof InfoPath$XDocument,
    XDocuments: typeof InfoPath$XDocuments,
    XDocumentsCollection: typeof InfoPath$XDocumentsCollection,
    XMLFileAdapterObject: typeof InfoPath$XMLFileAdapterObject,
    XMLNodesCollection: typeof InfoPath$XMLNodesCollection
  };

  declare var InfoPath$CommandIds: {|
    +AddWordToDictionary: 131, // 131
    +AlignTextCenter: 33, // 33
    +AlignTextJustify: 35, // 35
    +AlignTextLeft: 32, // 32
    +AlignTextRight: 34, // 34
    +ClearAutoSpace: 85, // 85
    +ClearBulletedList: 59, // 59
    +ClearFontFormatting: 109, // 109
    +ClearNumberedList: 58, // 58
    +Close: 4, // 4
    +Copy: 53, // 53
    +CorrectAllOfMisspelledWord: 134, // 134
    +CorrectMisspelledWord: 133, // 133
    +Cut: 52, // 52
    +DecreaseFontSizeBy2: 117, // 117
    +DecreaseIndent: 60, // 60
    +DeleteMisspelledWord: 135, // 135
    +DeleteSelectedColumns: 68, // 68
    +DeleteSelectedRows: 67, // 67
    +DeleteSelectedTable: 66, // 66
    +DrawTable: 50, // 50
    +EraseTable: 51, // 51
    +FindNextMisspelledWord: 132, // 132
    +FindReplaceFindNext: 119, // 119
    +FormatPainterApplyFormatting: 23, // 23
    +FormatPainterApplyFormattingPersistent: 25, // 25
    +FormatPainterCopyFormatting: 24, // 24
    +FormatPainterCopyFormattingPersistent: 172, // 172
    +GetCurrentMisspelledWord: 139, // 139
    +GetDefaultFontColor: 98, // 98
    +GetDefaultHighlightColor: 97, // 97
    +GetFindReplaceOptionSearchDirection: 94, // 94
    +GetFindReplaceState: 171, // 171
    +GetFindString: 87, // 87
    +GetFontAvailableByIndex: 102, // 102
    +GetFontsAvailableCount: 101, // 101
    +GetFontSizeAvailableByIndex: 104, // 104
    +GetFontSizesAvailableCount: 103, // 103
    +GetHyperlinkAddress: 159, // 159
    +GetHyperlinkDisplayText: 158, // 158
    +GetPictureAlternativeText: 169, // 169
    +GetPictureHeight: 167, // 167
    +GetPictureTextWrapping: 170, // 170
    +GetPictureWidth: 168, // 168
    +GetReplaceWithString: 89, // 89
    +GetSelectedCellBottomPadding: 151, // 151
    +GetSelectedCellLeftPadding: 150, // 150
    +GetSelectedCellRightPadding: 152, // 152
    +GetSelectedCellTopPadding: 149, // 149
    +GetSelectedCellVerticalAlignment: 148, // 148
    +GetSelectedColumnWidth: 142, // 142
    +GetSelectedRowHeight: 140, // 140
    +GetSelectedTextBackgroundColor: 127, // 127
    +GetSelectedTextFont: 124, // 124
    +GetSelectedTextFontColor: 125, // 125
    +GetSelectedTextFontSize: 123, // 123
    +GetSelectedTextHighlightColor: 126, // 126
    +GetSpellingSuggestion: 138, // 138
    +GetSpellingSuggestionsCount: 137, // 137
    +GetSubmitButtonCaption: 9, // 9
    +GetTableDirection: 77, // 77
    +GetTableHorizontalAlignment: 75, // 75
    +GotoFirstErrorOnView: 107, // 107
    +GotoNextErrorOnView: 10, // 10
    +IgnoreAllOfMisspelledWord: 130, // 130
    +IgnoreMisspelledWord: 129, // 129
    +IncreaseFontSizeBy2: 118, // 118
    +IncreaseIndent: 61, // 61
    +InsertBulletedList: 22, // 22
    +InsertBulletedListEmptyCircle: 48, // 48
    +InsertBulletedListSolidCircle: 47, // 47
    +InsertBulletedListSolidSquare: 49, // 49
    +InsertColumnLeft: 64, // 64
    +InsertColumnRight: 65, // 65
    +InsertHorizontalLine: 78, // 78
    +InsertHyperlink: 81, // 81
    +InsertImage: 80, // 80
    +InsertNumberedList: 21, // 21
    +InsertNumberedListAlphaLowercase: 43, // 43
    +InsertNumberedListAlphaUppercase: 44, // 44
    +InsertNumberedListDecimal: 42, // 42
    +InsertNumberedListRomanLowercase: 45, // 45
    +InsertNumberedListRomanUppercase: 46, // 46
    +InsertPictureFromFile: 13, // 13
    +InsertRowAbove: 62, // 62
    +InsertRowBelow: 63, // 63
    +InsertTable: 128, // 128
    +IsFormDirectionLeftToRight: 175, // 175
    +IsFormDirectionRightToLeft: 174, // 174
    +MergeCells: 73, // 73
    +Paste: 54, // 54
    +PasteAsText: 178, // 178
    +PasteKeepSourceFormatting: 176, // 176
    +PasteMatchDestination: 177, // 177
    +Redo: 57, // 57
    +RemoveHyperlink: 160, // 160
    +Replace: 95, // 95
    +ReplaceAll: 96, // 96
    +Save: 5, // 5
    +SaveAs: 6, // 6
    +SelectAll: 55, // 55
    +SelectCell: 72, // 72
    +SelectColumns: 71, // 71
    +SelectHyperlink: 82, // 82
    +SelectNextColumn: 146, // 146
    +SelectNextRow: 144, // 144
    +SelectPreviousColumn: 147, // 147
    +SelectPreviousRow: 145, // 145
    +SelectRows: 70, // 70
    +SelectTable: 69, // 69
    +Set15LineSpacing: 40, // 40
    +SetAutoSpaceBetweenAsianAndLatinText: 83, // 83
    +SetAutoSpaceBetweenAsianTextAndNumbers: 84, // 84
    +SetDoubleLineSpacing: 41, // 41
    +SetFindReplaceOptionMatchCase: 91, // 91
    +SetFindReplaceOptionSearchDirection: 93, // 93
    +SetFindReplaceOptionUseWildcards: 92, // 92
    +SetFindReplaceOptionWholeWordOnly: 90, // 90
    +SetFindString: 86, // 86
    +SetFontFormattingBold: 26, // 26
    +SetFontFormattingHeading1: 110, // 110
    +SetFontFormattingHeading2: 111, // 111
    +SetFontFormattingHeading3: 112, // 112
    +SetFontFormattingHeading4: 113, // 113
    +SetFontFormattingHeading5: 114, // 114
    +SetFontFormattingHeading6: 115, // 115
    +SetFontFormattingItalic: 27, // 27
    +SetFontFormattingNormal: 116, // 116
    +SetFontFormattingStrikethrough: 31, // 31
    +SetFontFormattingSubscript: 30, // 30
    +SetFontFormattingSuperscript: 29, // 29
    +SetFontFormattingUnderline: 28, // 28
    +SetPictureAlternativeText: 166, // 166
    +SetPictureHeight: 164, // 164
    +SetPictureInlineWithText: 161, // 161
    +SetPictureToLeftOfText: 162, // 162
    +SetPictureToRightOfText: 163, // 163
    +SetPictureWidth: 165, // 165
    +SetReplaceWithString: 88, // 88
    +SetSelectedCellAlignmentBottom: 156, // 156
    +SetSelectedCellAlignmentMiddle: 154, // 154
    +SetSelectedCellAlignmentTop: 155, // 155
    +SetSelectedCellPadding: 153, // 153
    +SetSelectedColumnWidth: 143, // 143
    +SetSelectedRowHeight: 141, // 141
    +SetSelectedTextBackgroundColor: 122, // 122
    +SetSelectedTextFont: 106, // 106
    +SetSelectedTextFontColor: 121, // 121
    +SetSelectedTextFontSize: 105, // 105
    +SetSelectedTextHighlightColor: 120, // 120
    +SetSingleLineSpacing: 39, // 39
    +SetSpellingOptionCheckAsYouType: 136, // 136
    +SetTableDirection: 76, // 76
    +SetTableHorizontalAlignment: 74, // 74
    +SetTextDirectionDefault: 36, // 36
    +SetTextDirectionLeftToRight: 37, // 37
    +SetTextDirectionRightToLeft: 38, // 38
    +ShowBordersShadingDialog: 18, // 18
    +ShowCurrentErrorMessage: 11, // 11
    +ShowDigitalSignaturesDialog: 108, // 108
    +ShowEditHyperlinkDialog: 20, // 20
    +ShowExportToExcelDialog: 7, // 7
    +ShowExportToPDFXPSDialog: 173, // 173
    +ShowExportToWebDialog: 2, // 2
    +ShowFormatPictureDialog: 17, // 17
    +ShowImportFormDataDialog: 1, // 1
    +ShowInsertHyperlinkDialog: 19, // 19
    +ShowInsertSymbolDialog: 79, // 79
    +ShowInsertTableDialog: 14, // 14
    +ShowMergeFormDialog: 0, // 0
    +ShowSetLanguageDialog: 12, // 12
    +ShowSetSelectedTextFontColorDialog: 99, // 99
    +ShowSetSelectedTextHighlightColorDialog: 100, // 100
    +ShowSplitCellsDialog: 15, // 15
    +ShowTablePropertiesDialog: 16, // 16
    +SplitCells: 157, // 157
    +Submit: 8, // 8
    +Undo: 56, // 56
    +WorkOffline: 3 // 3
  |};

  declare var InfoPath$XdAttachmentType: {|
    +xdNone: 2, // 2
    +xdXml: 0, // 0
    +xdXmlXsn: 1 // 1
  |};

  declare var InfoPath$XdCertificateStatus: {|
    +xdCertificateStatusError: 0, // 0
    +xdCertificateStatusExpired: 2, // 2
    +xdCertificateStatusNotTrusted: 3, // 3
    +xdCertificateStatusRevoked: 4, // 4
    +xdCertificateStatusValid: 1 // 1
  |};

  declare var InfoPath$XdConfirmButtons: {|
    +xdOKCancel: 1, // 1
    +xdYesNo: 4, // 4
    +xdYesNoCancel: 3 // 3
  |};

  declare var InfoPath$XdConfirmChoice: {|
    +xdCancel: 2, // 2
    +xdNo: 7, // 7
    +xdOK: 1, // 1
    +xdYes: 6 // 6
  |};

  declare var InfoPath$XdDocumentVersionMode: {|
    +xdCanOpenInReadOnlyMode: 8, // 8
    +xdCanTransformSigned: 16, // 16
    +xdDoNotInstallActiveXCabs: 128, // 128
    +xdFailOnVersionMismatch: 0, // 0
    +xdFailOnVersionOlder: 1, // 1
    +xdIgnoreDataAdaptersQueryFailure: 64, // 64
    +xdPromptTransformSigned: 32, // 32
    +xdUseExistingVersion: 2 // 2
  |};

  declare var InfoPath$XdMachineOnlineState: {|
    +xdIEIsInOfflineMode: 2, // 2
    +xdOffline: 0, // 0
    +xdOnline: 1 // 1
  |};

  declare var InfoPath$XdReadOnlyViewMode: {|
    +xdDefault: 0, // 0
    +xdFrozen: 2, // 2
    +xdNonEditable: 1 // 1
  |};

  declare var InfoPath$XdSignatureAppearanceType: {|
    +xdSignatureAppearanceTypeLine: 0, // 0
    +xdSignatureAppearanceTypeStamp: 1 // 1
  |};

  declare var InfoPath$XdSignatureRelation: {|
    +xdSignatureRelationCoSign: 2, // 2
    +xdSignatureRelationCounterSign: 3, // 3
    +xdSignatureRelationSingle: 1 // 1
  |};

  declare var InfoPath$XdSignatureStatus: {|
    +xdSignatureStatusError: 0, // 0
    +xdSignatureStatusInvalid: 2, // 2
    +xdSignatureStatusUnsupported: 3, // 3
    +xdSignatureStatusValid: 1 // 1
  |};

  declare var InfoPath$XdTaskPaneType: {|
    +xdTaskPaneBulletsNumbering: 9, // 9
    +xdTaskPaneClipArt: 5, // 5
    +xdTaskPaneDesignerNew: 2, // 2
    +xdTaskPaneFillOutAForm: 1, // 1
    +xdTaskPaneFind: 6, // 6
    +xdTaskPaneFormatting: 8, // 8
    +xdTaskPaneHelp: 4, // 4
    +xdTaskPaneHTML: 0, // 0
    +xdTaskPaneHWSWorkflow: 12, // 12
    +xdTaskPaneParaFormatting: 11, // 11
    +xdTaskPaneReplace: 7, // 7
    +xdTaskPaneSearchResults: 3, // 3
    +xdTaskPaneSpelling: 10 // 10
  |};

  declare var InfoPath$XdWindowState: {|
    +xdWindowStateMaximize: 1, // 1
    +xdWindowStateMinimize: 3, // 3
    +xdWindowStateNormal: 2 // 2
  |};

  declare var InfoPath$XdWindowType: {|
    +xdDesignerWindow: 1, // 1
    +xdEditorWindow: 0 // 0
  |};

  declare class InfoPath$_XDocument {
    constructor(): this;
    DataObjects: InfoPath$DataObjectsCollection;
    DOM: MSXML2.IXMLDOMDocument;
    Errors: ADODB.Errors;
    Extension: any;
    GetDataVariable(lVariableNumber: number): string;
    GetDOM(bstrName: string): MSXML2.IXMLDOMDocument;
    ImportFile(bstrFileURI: string): void;
    IsDirty: boolean;
    IsDOMReadOnly: boolean;
    IsNew: boolean;
    IsReadOnly: boolean;
    IsSigned: boolean;
    Language: string;
    PrintOut(): void;
    Query(): void;
    QueryAdapter: any;
    Save(): void;
    SaveAs(bstrFileUrl: string): void;
    SetDataVariable(lVariableNumber: number, bstrVariableValue: string): void;
    Solution: InfoPath$SolutionObject;
    Submit(): void;
    InfoPath$UI: InfoPath$UI;
    URI: string;
    View: InfoPath$ViewObject;
    ViewInfos: InfoPath$ViewInfosCollection;
  }

  declare class InfoPath$ADOAdapterObject {
    constructor(): this;
    BuildSQLFromXMLNodes(pXmlNode: MSXML2.IXMLDOMNode): string;
    Command: string;
    Connection: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
    Timeout: number;
  }

  declare class InfoPath$Application {
    constructor(): this;
    ActiveWindow: InfoPath$Window;
    CacheSolution(bstrSolutionURI: string): void;
    FormatString(
      varInput: any,
      bstrCategory: string,
      bstrOptions: string
    ): string;
    IsDestinationReachable(bstrDestination: string): boolean;
    LanguageSettings: any;
    MachineOnlineState: $Values<typeof InfoPath$XdMachineOnlineState>;
    Name: string;
    NewADODBConnection(): ADODB.Connection;
    NewADODBRecordset(): ADODB.Recordset;

    /**
     * @param boolean [bForce=false]
     */
    Quit(bForce?: boolean): void;

    /**
     * @param string [bstrBehavior='overwrite']
     */
    RegisterSolution(bstrSolutionURL: string, bstrBehavior?: string): void;
    UnregisterSolution(bstrSolutionURI: string): void;
    UsableHeight: number;
    UsableWidth: number;
    User: InfoPath$UserObject;
    Version: string;
    Windows: InfoPath$WindowsCollection;
    InfoPath$XDocuments: InfoPath$XDocuments;
  }

  declare class InfoPath$ApplicationEvents {
    constructor(): this;
  }

  declare class InfoPath$BDCAdapterObject {
    constructor(): this;
    EntityName: string;
    EntityNamespace: string;
    LOBSystemInstance: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    SpecificFinder: string;
    Submit(): void;
    SubmitAdapterName: string;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$Button {
    constructor(): this;
  }

  declare class InfoPath$CertificateObject {
    constructor(): this;
    ExpirationDate: string;
    IssuedBy: string;
    IssuedTo: string;
    Status: $Values<typeof InfoPath$XdCertificateStatus>;
  }

  declare class InfoPath$DataAdaptersCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): any;
  }

  declare class InfoPath$DataDOM {
    constructor(): this;
  }

  declare class InfoPath$DataDOMEventObject {
    constructor(): this;
    IsUndoRedo: boolean;
    MatchExpression: string;
    NewValue: any;
    OldValue: any;
    Operation: string;
    Parent: MSXML2.IXMLDOMNode;

    /**
     * @param string [bstrDetailedErrorMessage='']
     * @param number [lErrorCode=0]
     * @param string [bstrType='modeless']
     */
    ReportError(
      varNode: any,
      bstrShortErrorMessage: string,
      fSiteIndependent: boolean,
      bstrDetailedErrorMessage?: string,
      lErrorCode?: number,
      bstrType?: string
    ): InfoPath$ErrorObject;
    ReturnMessage: string;
    ReturnStatus: boolean;
    Site: MSXML2.IXMLDOMNode;
    Source: MSXML2.IXMLDOMNode;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$DataObjectsCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$DataSourceObject;
  }

  declare class InfoPath$DataSourceObject {
    constructor(): this;
    DOM: MSXML2.IXMLDOMDocument;
    Name: string;
    Query(): void;
    QueryAdapter: any;
  }

  declare class InfoPath$DateObject {
    constructor(): this;
    AddDays(pvarDate: any, pvarDays: any): any;
    AddSeconds(pvarTime: any, pvarSeconds: any): any;
    Now(): any;
    Today(): any;
  }

  declare class InfoPath$DAVAdapterObject {
    constructor(): this;
    FileName: string;
    FolderURL: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
    SubmitData(pData: MSXML2.IXMLDOMNode): void;
  }

  declare class InfoPath$DocActionEventObject {
    constructor(): this;
    ReturnStatus: boolean;
    Source: MSXML2.IXMLDOMNode;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$DocContextChangeEventObject {
    constructor(): this;
    Context: MSXML2.IXMLDOMNode;
    IsUndoRedo: boolean;
    Type: string;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$DocEventObject {
    constructor(): this;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$DocReturnEventObject {
    constructor(): this;
    ReturnStatus: boolean;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$EmailAdapterObject {
    constructor(): this;
    AttachmentFileName: string;
    AttachmentType: $Values<typeof InfoPath$XdAttachmentType>;
    BCC: string;
    CC: string;
    Intro: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Subject: string;
    Submit(): void;
    SubmitAllowed: boolean;
    SubmitData(pData: MSXML2.IXMLDOMNode): void;
    To: string;
  }

  declare class InfoPath$ErrorObject {
    constructor(): this;
    ConditionName: any;
    DetailedErrorMessage: string;
    ErrorCode: number;
    Node: MSXML2.IXMLDOMNode;
    ShortErrorMessage: string;
    Type: string;
  }

  declare class InfoPath$ErrorsCollection {
    constructor(): this;

    /**
     * @param string [bstrDetailedErrorMessage='']
     * @param number [lErrorCode=0]
     * @param string [bstrType='modeless']
     */
    Add(
      varNode: any,
      bstrConditionName: string,
      bstrShortErrorMessage: string,
      bstrDetailedErrorMessage?: string,
      lErrorCode?: number,
      bstrType?: string
    ): ADODB.Error;
    Count: number;
    Delete(varNode: any, bstrConditionName: string): void;
    DeleteAll(): void;
    Item(index: number): ADODB.Error;
  }

  declare class InfoPath$ExternalApplication {
    constructor(): this;
    CacheSolution(bstrSolutionURI: string): void;
    Close(bstrDocumentURI: string): void;

    /**
     * @param number [dwBehavior=1]
     */
    New(bstrDocumentURI: string, dwBehavior?: number): void;
    NewFromSolution(bstrSolutionURI: string): void;
    NewFromSolutionWithInputParameters(
      bstrSolutionURI: string,
      bstrInputParameters: string
    ): void;

    /**
     * @param number [dwBehavior=1]
     */
    Open(bstrDocumentURI: string, dwBehavior?: number): void;
    Quit(): void;

    /**
     * @param string [bstrBehavior='overwrite']
     */
    RegisterSolution(bstrSolutionURL: string, bstrBehavior?: string): void;
    UnregisterSolution(bstrSolutionURI: string): void;
  }

  declare class InfoPath$HTMLTaskPaneObject {
    constructor(): this;
    HTMLDocument: MSHTML.IHTMLDocument2;
    HTMLWindow: MSHTML.IHTMLWindow2;
    Navigate(bstrURL: string): void;
    Type: $Values<typeof InfoPath$XdTaskPaneType>;
    Visible: boolean;
  }

  declare class InfoPath$HWSAdapterObject {
    constructor(): this;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$IInitEventHandler {
    constructor(): this;
    InitEventHandler(
      punkSender: any,
      pDocument: InfoPath$_XDocument,
      pROMode: $Values<typeof InfoPath$XdReadOnlyViewMode>
    ): void;
  }

  declare class InfoPath$InfoPathEditorObject {
    constructor(): this;
    CloseDocument(): void;
    DataConnectionBaseUrl: string;
    FlushDocument(): void;
    Host: any;
    HostName: string;
    Load(bstrURL: string): void;
    LoadFromStream(punkStream: any): void;
    NewFromSolution(bstrSolutionURI: string): void;
    NewFromSolutionWithData(
      bstrURLXSN: string,
      punkStream: any,
      dwBehavior: number
    ): void;
    SetInitEventHandler(handler: InfoPath$IInitEventHandler): void;
    SetNotifyHostEventHandler(pHandler: InfoPath$INotifyHostEventHandler): void;
    SetSubmitToHostEventHandler(
      pHandler: InfoPath$ISubmitToHostEventHandler
    ): void;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$INotifyHostEventHandler {
    constructor(): this;
    NotifyHostEventHandler(punkSender: any, bstrNotification: string): void;
  }

  declare class InfoPath$InputParameterCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$InputParameterObject;
  }

  declare class InfoPath$InputParameterObject {
    constructor(): this;
    Name: string;
    Value: string;
  }

  declare class InfoPath$ISubmitToHostEventHandler {
    constructor(): this;
    SubmitToHostEventHandler(
      punkSender: any,
      bstrAdapterName: string,
      pbstrErrorMessage: string
    ): number;
  }

  declare class InfoPath$MailEnvelopeObject {
    constructor(): this;
    BCC: string;
    CC: string;
    Subject: string;
    To: string;
    Visible: boolean;
  }

  declare class InfoPath$MathObject {
    constructor(): this;
    Avg(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
    Eval(pxmllistContext: MSXML2.IXMLDOMNodeList, bstrExpression: string): any;
    Max(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
    Min(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
    Nz(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
  }

  declare class InfoPath$MergeEventObject {
    constructor(): this;
    Count: number;
    DOM: MSXML2.IXMLDOMDocument;
    index: number;
    ReturnStatus: boolean;
    RollBack: boolean;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$PermissionObject {
    constructor(): this;
    Add(
      bstrUserId: string,
      varPermission?: any,
      varExpirationDate?: any
    ): InfoPath$UserPermissionObject;
    ApplyPolicy(bstrFileName: string): void;
    Count: number;
    DocumentAuthor: string;
    Enabled: boolean;
    Item(varIndex: any): InfoPath$UserPermissionObject;
    PermissionFromPolicy: boolean;
    PolicyDescription: string;
    PolicyName: string;
    RemoveAll(): void;
    RequestPermissionURL: string;
    StoreLicenses: boolean;
  }

  declare class InfoPath$SaveEventObject {
    constructor(): this;
    FileName: string;
    IsCancelled: boolean;
    IsSaveAs: boolean;
    PerformSaveOperation(): boolean;
    ReturnStatus: boolean;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$ServerInfoObject {
    constructor(): this;
    SharePointListUrl: string;
    SharePointServerRootUrl: string;
    SharePointSiteCollectionUrl: string;
    SharePointSiteUrl: string;
  }

  declare class InfoPath$SharepointListAdapterObject {
    constructor(): this;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    SiteUrl: string;
    Submit(): void;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$SharePointListAdapterRWObject {
    constructor(): this;
    ContentTypeId: string;
    ListId: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    SiteUrl: string;
    Submit(): void;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$SignatureLineObject {
    constructor(): this;
    Id: string;
    Sign(
      bstrImageURL: string,
      bstrSuggestedSigner: string,
      bstrSuggestedSignerTitle: string,
      bstrSuggestedSignerEmailAddress: string
    ): boolean;
    Signature: InfoPath$SignatureObject;
    SignatureAppearanceType: $Values<typeof InfoPath$XdSignatureAppearanceType>;
    SuggestedSigner: string;
    SuggestedSignerEmailAddress: string;
    SuggestedSignerTitle: string;
  }

  declare class InfoPath$SignatureLinesCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$SignatureLineObject;
  }

  declare class InfoPath$SignatureObject {
    constructor(): this;
    Certificate: InfoPath$CertificateObject;
    Comment: string;
    Sign(): void;
    SignatureBlockXmlNode: MSXML2.IXMLDOMNode;
    Status: $Values<typeof InfoPath$XdSignatureStatus>;
  }

  declare class InfoPath$SignaturesCollection {
    constructor(): this;
    Count: number;
    Create(): InfoPath$SignatureObject;
    Item(varIndex: any): InfoPath$SignatureObject;
  }

  declare class InfoPath$SignedDataBlockObject {
    constructor(): this;
    Caption: string;
    Name: string;
    Sign(): void;
    SignatureContainer: MSXML2.IXMLDOMNode;
    SignatureRelation: $Values<typeof InfoPath$XdSignatureRelation>;
    Signatures: InfoPath$SignaturesCollection;
    XPath: string;
    XPathNamespaceDeclarations: string;
  }

  declare class InfoPath$SignedDataBlocksCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$SignedDataBlockObject;
  }

  declare class InfoPath$SignEventObject {
    constructor(): this;
    ReturnStatus: boolean;
    SignedDataBlock: InfoPath$SignedDataBlockObject;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$SolutionObject {
    constructor(): this;
    DOM: MSXML2.IXMLDOMDocument;
    PackageURL: string;
    URI: string;
    Version: string;
  }

  declare class InfoPath$SubmitToHostAdapterObject {
    constructor(): this;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$TaskPaneObject {
    constructor(): this;
    Type: $Values<typeof InfoPath$XdTaskPaneType>;
    Visible: boolean;
  }

  declare class InfoPath$TaskPanesCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$TaskPaneObject;
  }

  declare class InfoPath$UI {
    constructor(): this;
    Alert(bstrAlertString: string): void;
    ShowMailItem(
      bstrTo: string,
      bstrCC: string,
      bstrBCC: string,
      bstrSubject: string,
      bstrBody: string
    ): void;
    ShowModalDialog(
      bstrName: string,
      varArguments?: any,
      varHeight?: any,
      varWidth?: any,
      varTop?: any,
      varLeft?: any
    ): any;
    ShowSignatureDialog(): void;
  }

  declare class InfoPath$UIObject {
    constructor(): this;
    Alert(bstrAlertString: string): void;
    Confirm(
      bstrPrompt: string,
      lButtons: $Values<typeof InfoPath$XdConfirmButtons>
    ): $Values<typeof InfoPath$XdConfirmChoice>;
    SetSaveAsDialogFileName(bstrFileName: string): void;
    SetSaveAsDialogLocation(bstrLocation: string): void;
    ShowMailItem(
      bstrTo: string,
      bstrCC: string,
      bstrBCC: string,
      bstrSubject: string,
      bstrBody: string
    ): void;
    ShowModalDialog(
      bstrName: string,
      varArguments?: any,
      varHeight?: any,
      varWidth?: any,
      varTop?: any,
      varLeft?: any
    ): any;
    ShowSignatureDialog(): void;
  }

  declare class InfoPath$UserObject {
    constructor(): this;
    IsCurrentUser(bstrUsername: string): boolean;
    IsUserMemberOf(bstrGroupname: string): boolean;
  }

  declare class InfoPath$UserPermissionObject {
    constructor(): this;
    ExpirationDate: any;
    Parent: any;
    Permission: number;
    Remove(): void;
    UserId: string;
  }

  declare class InfoPath$UtilObject {
    constructor(): this;
    Date: VarDate;
    Match(bstrValue: string, bstrPattern: string): boolean;
    Math: InfoPath$MathObject;
  }

  declare class InfoPath$VersionUpgradeEventObject {
    constructor(): this;
    DocumentVersion: string;
    ReturnStatus: boolean;
    SolutionVersion: string;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$ViewInfoObject {
    constructor(): this;
    IsDefault: boolean;
    Name: string;
  }

  declare class InfoPath$ViewInfosCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$ViewInfoObject;
  }

  declare class InfoPath$ViewObject {
    constructor(): this;
    DisableAutoUpdate(): void;
    EnableAutoUpdate(): void;
    ExecuteAction(bstrAction: string, varXmlToEdit?: any): void;
    Export(bstrURL: string, bstrFormat: string): void;
    ForceUpdate(): void;
    GetContextNodes(
      varNode?: any,
      varViewContext?: any
    ): InfoPath$XMLNodesCollection;
    GetSelectedNodes(): InfoPath$XMLNodesCollection;
    Name: string;
    SelectNodes(
      pxnStartNode: MSXML2.IXMLDOMNode,
      varEndNode?: any,
      varViewContext?: any
    ): void;
    SelectText(pxnField: MSXML2.IXMLDOMNode, varViewContext?: any): void;
    SwitchView(bstrName: string): void;
    InfoPath$Window: InfoPath$Window;
  }

  declare class InfoPath$WebServiceAdapterObject {
    constructor(): this;
    ErrorsLocation: MSXML2.IXMLDOMNode;
    GenerateDataSetDiffGram(pNode: MSXML2.IXMLDOMNode): MSXML2.IXMLDOMNode;
    Input: string;
    Name: string;
    Operation: string;
    OutputLocation: MSXML2.IXMLDOMNode;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
    Timeout: number;
    WSDLURL: string;
  }

  declare class InfoPath$Window {
    constructor(): this;
    Activate(): void;
    Active: boolean;

    /**
     * @param boolean [fForce=false]
     */
    Close(fForce?: boolean): void;
    CommandBars: any;
    MailEnvelope: InfoPath$MailEnvelopeObject;
    TaskPanes: InfoPath$TaskPanesCollection;
    Type: $Values<typeof InfoPath$XdWindowType>;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$WindowObject {
    constructor(): this;
    Activate(): void;
    Active: boolean;
    Caption: string;

    /**
     * @param boolean [fForce=false]
     */
    Close(fForce?: boolean): void;
    CommandBars: any;
    Height: number;
    Left: number;
    MailEnvelope: InfoPath$MailEnvelopeObject;
    TaskPanes: InfoPath$TaskPanesCollection;
    Top: number;
    Type: $Values<typeof InfoPath$XdWindowType>;
    Width: number;
    WindowState: $Values<typeof InfoPath$XdWindowState>;
    InfoPath$XDocument: InfoPath$_XDocument;
  }

  declare class InfoPath$WindowsCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): InfoPath$Window;
  }

  declare class InfoPath$XDNetworkState {
    constructor(): this;
    IsDestinationReachable(bstrDestination: string): boolean;
    MachineOnlineState: $Values<typeof InfoPath$XdMachineOnlineState>;
  }

  declare class InfoPath$XDocument {
    constructor(): this;
    CreateDOM(): MSXML2.IXMLDOMDocument;
    DataAdapters: InfoPath$DataAdaptersCollection;
    DataObjects: InfoPath$DataObjectsCollection;
    DOM: MSXML2.IXMLDOMDocument;
    Errors: ADODB.Errors;
    Extension: any;
    GetDataVariable(lVariableNumber: number): string;
    GetDOM(bstrName: string): MSXML2.IXMLDOMDocument;
    GetNamedNodeProperty(
      varMainDOMNode: any,
      bstrPropertyName: string,
      bstrDefaultValue: string
    ): string;
    ImportDOM(pxDoc: MSXML2.IXMLDOMDocument): void;
    ImportFile(bstrFileURI: string): void;
    IsDirty: boolean;
    IsDOMReadOnly: boolean;
    IsNew: boolean;
    IsReadOnly: boolean;
    IsRecovered: boolean;
    IsSigned: boolean;
    Language: string;
    PrintOut(): void;
    Query(): void;
    QueryAdapter: any;
    Role: string;
    Save(): void;
    SaveAs(bstrFileUrl: string): void;
    SetDataVariable(lVariableNumber: number, bstrVariableValue: string): void;
    SetDirty(vfIsDirty: boolean): void;
    SetNamedNodeProperty(
      pxmlMainDOMNode: MSXML2.IXMLDOMNode,
      bstrPropertyName: string,
      bstrValue: string
    ): void;
    SignedDataBlocks: InfoPath$SignedDataBlocksCollection;
    Solution: InfoPath$SolutionObject;
    Submit(): void;
    InfoPath$UI: InfoPath$UI;
    URI: string;
    Util: InfoPath$UtilObject;
    View: InfoPath$ViewObject;
    ViewInfos: InfoPath$ViewInfosCollection;
  }

  declare class InfoPath$XDocuments {
    constructor(): this;
    Close(varIndex: any): void;
    Count: number;
    Item(varIndex: any): InfoPath$_XDocument;

    /**
     * @param number [dwBehavior=1]
     */
    New(varURI: any, dwBehavior?: number): InfoPath$_XDocument;
    NewFromSolution(varURI: any): InfoPath$_XDocument;

    /**
     * @param number [dwBehavior=1]
     */
    Open(varURI: any, dwBehavior?: number): InfoPath$_XDocument;
  }

  declare class InfoPath$XDocumentsCollection {
    constructor(): this;
    Close(varIndex: any): void;
    Count: number;
    Item(varIndex: any): InfoPath$_XDocument;

    /**
     * @param number [dwBehavior=1]
     */
    New(varURI: any, dwBehavior?: number): InfoPath$_XDocument;
    NewFromSolution(varURI: any): InfoPath$_XDocument;

    /**
     * @param number [dwBehavior=1]
     */
    NewFromSolutionWithData(
      varXMLData: any,
      varSolutionURI: any,
      dwBehavior?: number
    ): InfoPath$XDocument;

    /**
     * @param number [dwBehavior=1]
     */
    Open(varURI: any, dwBehavior?: number): InfoPath$_XDocument;
  }

  declare class InfoPath$XMLFileAdapterObject {
    constructor(): this;
    FileURL: string;
    Name: string;
    Query(): void;
    QueryAllowed: boolean;
    Submit(): void;
    SubmitAllowed: boolean;
  }

  declare class InfoPath$XMLNodesCollection {
    constructor(): this;
    Count: number;
    Item(varIndex: any): MSXML2.IXMLDOMNode;
  }

  declare type InfoPath$EventHelperTypes$Button_Invoke_ArgNames = [
    "dispidMember",
    "riid",
    "lcid",
    "wFlags",
    "pdispparams",
    "pvarResult",
    "pexcepinfo",
    "puArgErr"
  ];

  declare type InfoPath$EventHelperTypes$DataDOM_Invoke_ArgNames = [
    "dispidMember",
    "riid",
    "lcid",
    "wFlags",
    "pdispparams",
    "pvarResult",
    "pexcepinfo",
    "puArgErr"
  ];

  declare type InfoPath$EventHelperTypes$XDocument_Invoke_ArgNames = [
    "dispidMember",
    "riid",
    "lcid",
    "wFlags",
    "pdispparams",
    "pvarResult",
    "pexcepinfo",
    "puArgErr"
  ];

  declare interface InfoPath$EventHelperTypes$Button_Invoke_Parameter {
    +dispidMember: number;
    +lcid: number;
    +pdispparams: stdole.DISPPARAMS;
    pexcepinfo: stdole.EXCEPINFO;
    puArgErr: number;
    pvarResult: any;
    +riid: stdole.GUID;
    +wFlags: number;
  }

  declare interface InfoPath$EventHelperTypes$DataDOM_Invoke_Parameter {
    +dispidMember: number;
    +lcid: number;
    +pdispparams: stdole.DISPPARAMS;
    pexcepinfo: stdole.EXCEPINFO;
    puArgErr: number;
    pvarResult: any;
    +riid: stdole.GUID;
    +wFlags: number;
  }

  declare interface InfoPath$EventHelperTypes$XDocument_Invoke_Parameter {
    +dispidMember: number;
    +lcid: number;
    +pdispparams: stdole.DISPPARAMS;
    pexcepinfo: stdole.EXCEPINFO;
    puArgErr: number;
    pvarResult: any;
    +riid: stdole.GUID;
    +wFlags: number;
  }
  declare interface ActiveXObject {
    on(
      obj: InfoPath$ApplicationEvents,
      event: "NewXDocument" | "XDocumentOpen",
      argNames: ["pDocument"],
      handler: (parameter: {
        +pDocument: InfoPath$_XDocument
      }) => void
    ): void;
    on(
      obj: InfoPath$ApplicationEvents,
      event: "WindowActivate" | "WindowDeactivate" | "WindowSize",
      argNames: ["pDocument", "pWindow"],
      handler: (parameter: {
        +pDocument: InfoPath$_XDocument,
        +pWindow: InfoPath$Window
      }) => void
    ): void;
    on(
      obj: InfoPath$ApplicationEvents,
      event:
        | "XDocumentBeforeClose"
        | "XDocumentBeforePrint"
        | "XDocumentBeforeSave",
      argNames: ["pDocument", "pfCancel"],
      handler: (parameter: {
        +pDocument: InfoPath$_XDocument,
        pfCancel: boolean
      }) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "GetIDsOfNames",
      argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
      handler: (parameter: {
        +riid: stdole.GUID,
        +rgszNames: number,
        +cNames: number,
        +lcid: number,
        rgdispid: number
      }) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "GetTypeInfo",
      argNames: ["itinfo", "lcid", "pptinfo"],
      handler: (parameter: {
        +itinfo: number,
        +lcid: number,
        pptinfo: void
      }) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "GetTypeInfoCount",
      argNames: ["pctinfo"],
      handler: (parameter: {
        pctinfo: number
      }) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "Invoke",
      argNames: InfoPath$EventHelperTypes$Button_Invoke_ArgNames,
      handler: (
        parameter: InfoPath$EventHelperTypes$Button_Invoke_Parameter
      ) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "OnClick",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$DocActionEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "QueryInterface",
      argNames: ["riid", "ppvObj"],
      handler: (parameter: {
        +riid: stdole.GUID,
        ppvObj: void
      }) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "GetIDsOfNames",
      argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
      handler: (parameter: {
        +riid: stdole.GUID,
        +rgszNames: number,
        +cNames: number,
        +lcid: number,
        rgdispid: number
      }) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "GetTypeInfo",
      argNames: ["itinfo", "lcid", "pptinfo"],
      handler: (parameter: {
        +itinfo: number,
        +lcid: number,
        pptinfo: void
      }) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "GetTypeInfoCount",
      argNames: ["pctinfo"],
      handler: (parameter: {
        pctinfo: number
      }) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "Invoke",
      argNames: InfoPath$EventHelperTypes$DataDOM_Invoke_ArgNames,
      handler: (
        parameter: InfoPath$EventHelperTypes$DataDOM_Invoke_Parameter
      ) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "OnAfterChange" | "OnBeforeChange" | "OnValidate",
      argNames: ["pDataDOMEvent"],
      handler: (parameter: {
        +pDataDOMEvent: InfoPath$DataDOMEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "QueryInterface",
      argNames: ["riid", "ppvObj"],
      handler: (parameter: {
        +riid: stdole.GUID,
        ppvObj: void
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "GetIDsOfNames",
      argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
      handler: (parameter: {
        +riid: stdole.GUID,
        +rgszNames: number,
        +cNames: number,
        +lcid: number,
        rgdispid: number
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "GetTypeInfo",
      argNames: ["itinfo", "lcid", "pptinfo"],
      handler: (parameter: {
        +itinfo: number,
        +lcid: number,
        pptinfo: void
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "GetTypeInfoCount",
      argNames: ["pctinfo"],
      handler: (parameter: {
        pctinfo: number
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "Invoke",
      argNames: InfoPath$EventHelperTypes$XDocument_Invoke_ArgNames,
      handler: (
        parameter: InfoPath$EventHelperTypes$XDocument_Invoke_Parameter
      ) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnAfterImport" | "OnSwitchView",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$DocEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnContextChange",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$DocContextChangeEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnLoad" | "OnSubmitRequest",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$DocReturnEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnMergeRequest",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$MergeEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnSaveRequest",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$SaveEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnSign",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$SignEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "OnVersionUpgrade",
      argNames: ["pEvent"],
      handler: (parameter: {
        +pEvent: InfoPath$VersionUpgradeEventObject
      }) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "QueryInterface",
      argNames: ["riid", "ppvObj"],
      handler: (parameter: {
        +riid: stdole.GUID,
        ppvObj: void
      }) => void
    ): void;
    on(
      obj: InfoPath$ApplicationEvents,
      event: "Quit" | "XDocumentChange",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: InfoPath$Button,
      event: "AddRef" | "Release",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: InfoPath$DataDOM,
      event: "AddRef" | "Release",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: InfoPath$XDocument,
      event: "AddRef" | "Release",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "InfoPath.Application": InfoPath$Application;
    "InfoPath.Editor": InfoPath$InfoPathEditorObject;
    "InfoPath.ExternalApplication": InfoPath$ExternalApplication;
  }
  declare interface EnumeratorConstructor {
    new(col: InfoPath$DataAdaptersCollection): Enumerator<any>;
    new(
      col: InfoPath$DataObjectsCollection
    ): Enumerator<InfoPath$DataSourceObject>;
    new(col: InfoPath$ErrorsCollection): Enumerator<ADODB.Error>;
    new(
      col: InfoPath$InputParameterCollection
    ): Enumerator<InfoPath$InputParameterObject>;
    new(
      col: InfoPath$PermissionObject
    ): Enumerator<InfoPath$UserPermissionObject>;
    new(
      col: InfoPath$SignatureLinesCollection
    ): Enumerator<InfoPath$SignatureLineObject>;
    new(
      col: InfoPath$SignaturesCollection
    ): Enumerator<InfoPath$SignatureObject>;
    new(
      col: InfoPath$SignedDataBlocksCollection
    ): Enumerator<InfoPath$SignedDataBlockObject>;
    new(col: InfoPath$TaskPanesCollection): Enumerator<InfoPath$TaskPaneObject>;
    new(col: InfoPath$ViewInfosCollection): Enumerator<InfoPath$ViewInfoObject>;
    new(col: InfoPath$WindowsCollection): Enumerator<InfoPath$Window>;
    new(
      col: InfoPath$XDocuments | InfoPath$XDocumentsCollection
    ): Enumerator<InfoPath$_XDocument>;
    new(col: InfoPath$XMLNodesCollection): Enumerator<MSXML2.IXMLDOMNode>;
  }
  declare interface SafeArray<T = any> {
    _brand: SafeArray<T>;
  }
}
