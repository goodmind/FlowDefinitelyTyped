declare module "activex-msforms" {
  declare var npm$namespace$MSForms: {
    fmAction: typeof MSForms$fmAction,
    fmAlignment: typeof MSForms$fmAlignment,
    fmBackStyle: typeof MSForms$fmBackStyle,
    fmBorders: typeof MSForms$fmBorders,
    fmBorderStyle: typeof MSForms$fmBorderStyle,
    fmButtonEffect: typeof MSForms$fmButtonEffect,
    fmButtonStyle: typeof MSForms$fmButtonStyle,
    fmCycle: typeof MSForms$fmCycle,
    fmDisplayStyle: typeof MSForms$fmDisplayStyle,
    fmDragBehavior: typeof MSForms$fmDragBehavior,
    fmDragState: typeof MSForms$fmDragState,
    fmDropButtonStyle: typeof MSForms$fmDropButtonStyle,
    fmDropEffect: typeof MSForms$fmDropEffect,
    fmEnAutoSize: typeof MSForms$fmEnAutoSize,
    fmEnterFieldBehavior: typeof MSForms$fmEnterFieldBehavior,
    fmIMEMode: typeof MSForms$fmIMEMode,
    fmLayoutEffect: typeof MSForms$fmLayoutEffect,
    fmListBoxStyles: typeof MSForms$fmListBoxStyles,
    fmListStyle: typeof MSForms$fmListStyle,
    fmMatchEntry: typeof MSForms$fmMatchEntry,
    fmMode: typeof MSForms$fmMode,
    fmMousePointer: typeof MSForms$fmMousePointer,
    fmMultiSelect: typeof MSForms$fmMultiSelect,
    fmOrientation: typeof MSForms$fmOrientation,
    fmPicPosition: typeof MSForms$fmPicPosition,
    fmPictureAlignment: typeof MSForms$fmPictureAlignment,
    fmPicturePosition: typeof MSForms$fmPicturePosition,
    fmPictureSizeMode: typeof MSForms$fmPictureSizeMode,
    fmRepeatDirection: typeof MSForms$fmRepeatDirection,
    fmScrollAction: typeof MSForms$fmScrollAction,
    fmScrollBars: typeof MSForms$fmScrollBars,
    fmShowDropButtonWhen: typeof MSForms$fmShowDropButtonWhen,
    fmShowListWhen: typeof MSForms$fmShowListWhen,
    fmSnapPoint: typeof MSForms$fmSnapPoint,
    fmSpecialEffect: typeof MSForms$fmSpecialEffect,
    fmStyle: typeof MSForms$fmStyle,
    fmTabOrientation: typeof MSForms$fmTabOrientation,
    fmTabStyle: typeof MSForms$fmTabStyle,
    fmTextAlign: typeof MSForms$fmTextAlign,
    fmTransitionEffect: typeof MSForms$fmTransitionEffect,
    fmVerticalScrollBarSide: typeof MSForms$fmVerticalScrollBarSide,
    fmZOrder: typeof MSForms$fmZOrder,
    CheckBox: typeof MSForms$CheckBox,
    ComboBox: typeof MSForms$ComboBox,
    CommandButton: typeof MSForms$CommandButton,
    Control: typeof MSForms$Control,
    DataObject: typeof MSForms$DataObject,
    Frame: typeof MSForms$Frame,
    HTMLCheckbox: typeof MSForms$HTMLCheckbox,
    HTMLHidden: typeof MSForms$HTMLHidden,
    HTMLImage: typeof MSForms$HTMLImage,
    HTMLOption: typeof MSForms$HTMLOption,
    HTMLPassword: typeof MSForms$HTMLPassword,
    HTMLReset: typeof MSForms$HTMLReset,
    HTMLSelect: typeof MSForms$HTMLSelect,
    HTMLSubmit: typeof MSForms$HTMLSubmit,
    HTMLText: typeof MSForms$HTMLText,
    HTMLTextArea: typeof MSForms$HTMLTextArea,
    Image: typeof MSForms$Image,
    Label: typeof MSForms$Label,
    ListBox: typeof MSForms$ListBox,
    MultiPage: typeof MSForms$MultiPage,
    NewFont: typeof MSForms$NewFont,
    OptionButton: typeof MSForms$OptionButton,
    Page: typeof MSForms$Page,
    ReturnBoolean: typeof MSForms$ReturnBoolean,
    ReturnEffect: typeof MSForms$ReturnEffect,
    ReturnInteger: typeof MSForms$ReturnInteger,
    ReturnSingle: typeof MSForms$ReturnSingle,
    ReturnString: typeof MSForms$ReturnString,
    ScrollBar: typeof MSForms$ScrollBar,
    SpinButton: typeof MSForms$SpinButton,
    Tab: typeof MSForms$Tab,
    TabStrip: typeof MSForms$TabStrip,
    TextBox: typeof MSForms$TextBox,
    ToggleButton: typeof MSForms$ToggleButton,
    UserForm: typeof MSForms$UserForm
  };

  declare var MSForms$fmAction: {|
    +fmActionCopy: 1, // 1
    +fmActionCut: 0, // 0
    +fmActionDragDrop: 3, // 3
    +fmActionPaste: 2 // 2
  |};

  declare var MSForms$fmAlignment: {|
    +fmAlignmentLeft: 0, // 0
    +fmAlignmentRight: 1 // 1
  |};

  declare var MSForms$fmBackStyle: {|
    +fmBackStyleOpaque: 1, // 1
    +fmBackStyleTransparent: 0 // 0
  |};

  declare var MSForms$fmBorders: {|
    +fmBordersBox: 1, // 1
    +fmBordersLeft: 2, // 2
    +fmBordersNone: 0, // 0
    +fmBordersTop: 3 // 3
  |};

  declare var MSForms$fmBorderStyle: {|
    +fmBorderStyleNone: 0, // 0
    +fmBorderStyleSingle: 1 // 1
  |};

  declare var MSForms$fmButtonEffect: {|
    +fmButtonEffectFlat: 0, // 0
    +fmButtonEffectSunken: 2 // 2
  |};

  declare var MSForms$fmButtonStyle: {|
    +fmButtonStylePushButton: 0, // 0
    +fmButtonStyleToggleButton: 1 // 1
  |};

  declare var MSForms$fmCycle: {|
    +fmCycleAllForms: 0, // 0
    +fmCycleCurrentForm: 2 // 2
  |};

  declare var MSForms$fmDisplayStyle: {|
    +fmDisplayStyleCheckBox: 4, // 4
    +fmDisplayStyleCombo: 3, // 3
    +fmDisplayStyleDropList: 7, // 7
    +fmDisplayStyleList: 2, // 2
    +fmDisplayStyleOptionButton: 5, // 5
    +fmDisplayStyleText: 1, // 1
    +fmDisplayStyleToggle: 6 // 6
  |};

  declare var MSForms$fmDragBehavior: {|
    +fmDragBehaviorDisabled: 0, // 0
    +fmDragBehaviorEnabled: 1 // 1
  |};

  declare var MSForms$fmDragState: {|
    +fmDragStateEnter: 0, // 0
    +fmDragStateLeave: 1, // 1
    +fmDragStateOver: 2 // 2
  |};

  declare var MSForms$fmDropButtonStyle: {|
    +fmDropButtonStyleArrow: 1, // 1
    +fmDropButtonStyleEllipsis: 2, // 2
    +fmDropButtonStylePlain: 0, // 0
    +fmDropButtonStyleReduce: 3 // 3
  |};

  declare var MSForms$fmDropEffect: {|
    +fmDropEffectCopy: 1, // 1
    +fmDropEffectCopyOrMove: 3, // 3
    +fmDropEffectMove: 2, // 2
    +fmDropEffectNone: 0 // 0
  |};

  declare var MSForms$fmEnAutoSize: {|
    +_fmEnAutoSizeBoth: 3, // 3
    +_fmEnAutoSizeHorizontal: 1, // 1
    +_fmEnAutoSizeNone: 0, // 0
    +_fmEnAutoSizeVertical: 2 // 2
  |};

  declare var MSForms$fmEnterFieldBehavior: {|
    +fmEnterFieldBehaviorRecallSelection: 1, // 1
    +fmEnterFieldBehaviorSelectAll: 0 // 0
  |};

  declare var MSForms$fmIMEMode: {|
    +fmIMEModeAlpha: 8, // 8
    +fmIMEModeAlphaFull: 7, // 7
    +fmIMEModeDisable: 3, // 3
    +fmIMEModeHangul: 10, // 10
    +fmIMEModeHangulFull: 9, // 9
    +fmIMEModeHanzi: 12, // 12
    +fmIMEModeHanziFull: 11, // 11
    +fmIMEModeHiragana: 4, // 4
    +fmIMEModeKatakana: 5, // 5
    +fmIMEModeKatakanaHalf: 6, // 6
    +fmIMEModeNoControl: 0, // 0
    +fmIMEModeOff: 2, // 2
    +fmIMEModeOn: 1 // 1
  |};

  declare var MSForms$fmLayoutEffect: {|
    +_fmLayoutEffectRespond: 2, // 2
    +fmLayoutEffectInitiate: 1, // 1
    +fmLayoutEffectNone: 0 // 0
  |};

  declare var MSForms$fmListBoxStyles: {|
    +_fmListBoxStylesComboBox: 2, // 2
    +_fmListBoxStylesListBox: 1, // 1
    +_fmListBoxStylesNone: 0 // 0
  |};

  declare var MSForms$fmListStyle: {|
    +fmListStyleOption: 1, // 1
    +fmListStylePlain: 0 // 0
  |};

  declare var MSForms$fmMatchEntry: {|
    +fmMatchEntryComplete: 1, // 1
    +fmMatchEntryFirstLetter: 0, // 0
    +fmMatchEntryNone: 2 // 2
  |};

  declare var MSForms$fmMode: {|
    +fmModeInherit: -2, // -2
    +fmModeOff: 0, // 0
    +fmModeOn: -1 // -1
  |};

  declare var MSForms$fmMousePointer: {|
    +fmMousePointerAppStarting: 13, // 13
    +fmMousePointerArrow: 1, // 1
    +fmMousePointerCross: 2, // 2
    +fmMousePointerCustom: 99, // 99
    +fmMousePointerDefault: 0, // 0
    +fmMousePointerHelp: 14, // 14
    +fmMousePointerHourGlass: 11, // 11
    +fmMousePointerIBeam: 3, // 3
    +fmMousePointerNoDrop: 12, // 12
    +fmMousePointerSizeAll: 15, // 15
    +fmMousePointerSizeNESW: 6, // 6
    +fmMousePointerSizeNS: 7, // 7
    +fmMousePointerSizeNWSE: 8, // 8
    +fmMousePointerSizeWE: 9, // 9
    +fmMousePointerUpArrow: 10 // 10
  |};

  declare var MSForms$fmMultiSelect: {|
    +fmMultiSelectExtended: 2, // 2
    +fmMultiSelectMulti: 1, // 1
    +fmMultiSelectSingle: 0 // 0
  |};

  declare var MSForms$fmOrientation: {|
    +fmOrientationAuto: -1, // -1
    +fmOrientationHorizontal: 1, // 1
    +fmOrientationVertical: 0 // 0
  |};

  declare var MSForms$fmPicPosition: {|
    +fmPicPositionBottomCenter: 7, // 7
    +fmPicPositionBottomLeft: 6, // 6
    +fmPicPositionBottomRight: 8, // 8
    +fmPicPositionCenter: 0, // 0
    +fmPicPositionCenterLeft: 4, // 4
    +fmPicPositionCenterRight: 5, // 5
    +fmPicPositionTopCenter: 2, // 2
    +fmPicPositionTopLeft: 1, // 1
    +fmPicPositionTopRight: 3 // 3
  |};

  declare var MSForms$fmPictureAlignment: {|
    +fmPictureAlignmentBottomLeft: 3, // 3
    +fmPictureAlignmentBottomRight: 4, // 4
    +fmPictureAlignmentCenter: 2, // 2
    +fmPictureAlignmentTopLeft: 0, // 0
    +fmPictureAlignmentTopRight: 1 // 1
  |};

  declare var MSForms$fmPicturePosition: {|
    +fmPicturePositionAboveCenter: 7, // 7
    +fmPicturePositionAboveLeft: 6, // 6
    +fmPicturePositionAboveRight: 8, // 8
    +fmPicturePositionBelowCenter: 10, // 10
    +fmPicturePositionBelowLeft: 9, // 9
    +fmPicturePositionBelowRight: 11, // 11
    +fmPicturePositionCenter: 12, // 12
    +fmPicturePositionLeftBottom: 2, // 2
    +fmPicturePositionLeftCenter: 1, // 1
    +fmPicturePositionLeftTop: 0, // 0
    +fmPicturePositionRightBottom: 5, // 5
    +fmPicturePositionRightCenter: 4, // 4
    +fmPicturePositionRightTop: 3 // 3
  |};

  declare var MSForms$fmPictureSizeMode: {|
    +fmPictureSizeModeClip: 0, // 0
    +fmPictureSizeModeStretch: 1, // 1
    +fmPictureSizeModeZoom: 3 // 3
  |};

  declare var MSForms$fmRepeatDirection: {|
    +_fmRepeatDirectionHorizontal: 0, // 0
    +_fmRepeatDirectionVertical: 1 // 1
  |};

  declare var MSForms$fmScrollAction: {|
    +_fmScrollActionAbsoluteChange: 7, // 7
    +fmScrollActionBegin: 5, // 5
    +fmScrollActionControlRequest: 9, // 9
    +fmScrollActionEnd: 6, // 6
    +fmScrollActionFocusRequest: 10, // 10
    +fmScrollActionLineDown: 2, // 2
    +fmScrollActionLineUp: 1, // 1
    +fmScrollActionNoChange: 0, // 0
    +fmScrollActionPageDown: 4, // 4
    +fmScrollActionPageUp: 3, // 3
    +fmScrollActionPropertyChange: 8 // 8
  |};

  declare var MSForms$fmScrollBars: {|
    +fmScrollBarsBoth: 3, // 3
    +fmScrollBarsHorizontal: 1, // 1
    +fmScrollBarsNone: 0, // 0
    +fmScrollBarsVertical: 2 // 2
  |};

  declare var MSForms$fmShowDropButtonWhen: {|
    +fmShowDropButtonWhenAlways: 2, // 2
    +fmShowDropButtonWhenFocus: 1, // 1
    +fmShowDropButtonWhenNever: 0 // 0
  |};

  declare var MSForms$fmShowListWhen: {|
    +fmShowListWhenAlways: 3, // 3
    +fmShowListWhenButton: 1, // 1
    +fmShowListWhenFocus: 2, // 2
    +fmShowListWhenNever: 0 // 0
  |};

  declare var MSForms$fmSnapPoint: {|
    +fmSnapPointBottomCenter: 7, // 7
    +fmSnapPointBottomLeft: 6, // 6
    +fmSnapPointBottomRight: 8, // 8
    +fmSnapPointCenter: 4, // 4
    +fmSnapPointCenterLeft: 3, // 3
    +fmSnapPointCenterRight: 5, // 5
    +fmSnapPointTopCenter: 1, // 1
    +fmSnapPointTopLeft: 0, // 0
    +fmSnapPointTopRight: 2 // 2
  |};

  declare var MSForms$fmSpecialEffect: {|
    +fmSpecialEffectBump: 6, // 6
    +fmSpecialEffectEtched: 3, // 3
    +fmSpecialEffectFlat: 0, // 0
    +fmSpecialEffectRaised: 1, // 1
    +fmSpecialEffectSunken: 2 // 2
  |};

  declare var MSForms$fmStyle: {|
    +fmStyleDropDownCombo: 0, // 0
    +fmStyleDropDownList: 2 // 2
  |};

  declare var MSForms$fmTabOrientation: {|
    +fmTabOrientationBottom: 1, // 1
    +fmTabOrientationLeft: 2, // 2
    +fmTabOrientationRight: 3, // 3
    +fmTabOrientationTop: 0 // 0
  |};

  declare var MSForms$fmTabStyle: {|
    +fmTabStyleButtons: 1, // 1
    +fmTabStyleNone: 2, // 2
    +fmTabStyleTabs: 0 // 0
  |};

  declare var MSForms$fmTextAlign: {|
    +fmTextAlignCenter: 2, // 2
    +fmTextAlignLeft: 1, // 1
    +fmTextAlignRight: 3 // 3
  |};

  declare var MSForms$fmTransitionEffect: {|
    +fmTransitionEffectCoverDown: 5, // 5
    +fmTransitionEffectCoverLeft: 7, // 7
    +fmTransitionEffectCoverLeftDown: 6, // 6
    +fmTransitionEffectCoverLeftUp: 8, // 8
    +fmTransitionEffectCoverRight: 3, // 3
    +fmTransitionEffectCoverRightDown: 4, // 4
    +fmTransitionEffectCoverRightUp: 2, // 2
    +fmTransitionEffectCoverUp: 1, // 1
    +fmTransitionEffectNone: 0, // 0
    +fmTransitionEffectPushDown: 11, // 11
    +fmTransitionEffectPushLeft: 12, // 12
    +fmTransitionEffectPushRight: 10, // 10
    +fmTransitionEffectPushUp: 9 // 9
  |};

  declare var MSForms$fmVerticalScrollBarSide: {|
    +fmVerticalScrollBarSideLeft: 1, // 1
    +fmVerticalScrollBarSideRight: 0 // 0
  |};

  declare var MSForms$fmZOrder: {|
    +fmZOrderBack: 1, // 1
    +fmZOrderFront: 0 // 0
  |};

  declare class MSForms$CheckBox {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    Accelerator: string;
    Alignment: $Values<typeof MSForms$fmAlignment>;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BordersSuppress: boolean;
    Caption: string;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    GroupName: string;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiSelect: $Values<typeof MSForms$fmMultiSelect>;
    Picture: stdole.StdPicture;
    PicturePosition: $Values<typeof MSForms$fmPicturePosition>;
    SpecialEffect: $Values<typeof MSForms$fmButtonEffect>;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TripleState: boolean;
    Valid: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class MSForms$ComboBox {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    AddItem(pvargItem?: number, pvargIndex?: number): void;
    AutoSize: boolean;
    AutoTab: boolean;
    AutoWordSelect: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BorderColor: number;
    BordersSuppress: boolean;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    BoundColumn: number;
    CanPaste: boolean;
    Clear(): void;
    Column(pvargColumn: number, pvargIndex?: number): any;
    Column(): SafeArray;
    ColumnCount: number;
    ColumnHeads: boolean;
    ColumnWidths: string;
    Copy(): void;
    CurTargetX: number;
    CurTargetY: number;
    CurX: number;
    Cut(): void;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    DragBehavior: $Values<typeof MSForms$fmDragBehavior>;
    DropButtonStyle: $Values<typeof MSForms$fmDropButtonStyle>;
    DropDown(): void;
    Enabled: boolean;
    EnterFieldBehavior: $Values<typeof MSForms$fmEnterFieldBehavior>;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    HideSelection: boolean;
    IMEMode: $Values<typeof MSForms$fmIMEMode>;
    LineCount: number;
    List(pvargIndex: number, pvargColumn?: number): any;
    List(): SafeArray;
    ListCount: number;
    ListCursor: any;
    ListIndex: number;
    ListRows: number;
    ListStyle: $Values<typeof MSForms$fmListStyle>;
    ListWidth: number;
    Locked: boolean;
    MatchEntry: $Values<typeof MSForms$fmMatchEntry>;
    MatchFound: boolean;
    MatchRequired: boolean;
    MaxLength: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Paste(): void;
    RemoveItem(pvargIndex: number): boolean;
    SelectionMargin: boolean;
    SelLength: number;
    SelStart: number;
    SelText: string;
    ShowDropButtonWhen: $Values<typeof MSForms$fmShowDropButtonWhen>;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    Style: $Values<typeof MSForms$fmStyle>;
    Text: string;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TextColumn: number;
    TextLength: number;
    TopIndex: number;
    Valid: boolean;
    Value: any;
  }

  declare class MSForms$CommandButton {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    Accelerator: string;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    Caption: string;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Picture: stdole.StdPicture;
    PicturePosition: $Values<typeof MSForms$fmPicturePosition>;
    TakeFocusOnClick: boolean;
    Value: boolean;
    WordWrap: boolean;
  }

  declare class MSForms$Control {
    constructor(): this;
    _GetHeight(Height: number): void;
    _GethWnd(): number;
    _GetID(): number;
    _GetLeft(Left: number): void;
    _GetOldHeight(OldHeight: number): void;
    _GetOldLeft(OldLeft: number): void;
    _GetOldTop(OldTop: number): void;
    _GetOldWidth(OldWidth: number): void;
    _GetTop(Top: number): void;
    _GetWidth(Width: number): void;
    _Move(Left: number, Top: number, Width: number, Height: number): void;
    _SetHeight(Height: number): void;
    _SetLeft(Left: number): void;
    _SetTop(Top: number): void;
    _SetWidth(Width: number): void;
    _ZOrder(zPosition: $Values<typeof MSForms$fmZOrder>): void;
    BoundValue: any;
    Cancel: boolean;
    ControlSource: string;
    ControlTipText: string;
    Default: boolean;
    Height: number;
    HelpContextID: number;
    InSelection: boolean;
    LayoutEffect: $Values<typeof MSForms$fmLayoutEffect>;
    Left: number;
    Move(Left?: any, Top?: any, Width?: any, Height?: any, Layout?: any): void;
    Name: string;
    Object: any;
    OldHeight: number;
    OldLeft: number;
    OldTop: number;
    OldWidth: number;
    Parent: any;
    RowSource: string;
    RowSourceType: number;
    Select(SelectInGroup: boolean): void;
    SetFocus(): void;
    TabIndex: number;
    TabStop: boolean;
    Tag: string;
    Top: number;
    Visible: boolean;
    Width: number;
    ZOrder(zPosition?: any): void;
  }

  declare interface MSForms$Controls {
    _AddByClass(clsid: number): MSForms$Control;
    _GetItemByID(ID: number): MSForms$Control;
    _GetItemByIndex(lIndex: number): MSForms$Control;
    _GetItemByName(pstr: string): MSForms$Control;
    _Move(cx: number, cy: number): void;
    Add(bstrProgID: string, Name?: any, Visible?: any): MSForms$Control;
    AlignToGrid(): void;
    BringForward(): void;
    BringToFront(): void;
    Clear(): void;
    Copy(): void;
    +Count: number;
    Cut(): void;
    Enum(): any;
    Item(varg: any): any;
    Move(cx: number, cy: number): void;
    Remove(varg: any): void;
    SelectAll(): void;
    SendBackward(): void;
    SendToBack(): void;
    (varg: any): any;
  }

  declare class MSForms$DataObject {
    constructor(): this;
    Clear(): void;
    GetFormat(Format: any): boolean;
    GetFromClipboard(): void;
    GetText(Format?: any): string;
    PutInClipboard(): void;
    SetText(Text: string, Format?: any): void;
    StartDrag(OKEffect?: any): $Values<typeof MSForms$fmDropEffect>;
  }

  declare class MSForms$Frame {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    _GetGridX(GridX: number): void;
    _GetGridY(GridY: number): void;
    _GetInsideHeight(InsideHeight: number): void;
    _GetInsideWidth(InsideWidth: number): void;
    _GetScrollHeight(ScrollHeight: number): void;
    _GetScrollLeft(ScrollLeft: number): void;
    _GetScrollTop(ScrollTop: number): void;
    _GetScrollWidth(ScrollWidth: number): void;
    _SetGridX(GridX: number): void;
    _SetGridY(GridY: number): void;
    _SetScrollHeight(ScrollHeight: number): void;
    _SetScrollLeft(ScrollLeft: number): void;
    _SetScrollTop(ScrollTop: number): void;
    _SetScrollWidth(ScrollWidth: number): void;
    ActiveControl: MSForms$Control;
    BackColor: number;
    BorderColor: number;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    CanPaste: boolean;
    CanRedo: boolean;
    CanUndo: boolean;
    Caption: string;
    MSForms$Controls: MSForms$Controls;
    Copy(): void;
    Cut(): void;
    Cycle: $Values<typeof MSForms$fmCycle>;
    DesignMode: $Values<typeof MSForms$fmMode>;
    Enabled: boolean;
    Font: MSForms$NewFont;
    ForeColor: number;
    GridX: number;
    GridY: number;
    InsideHeight: number;
    InsideWidth: number;
    KeepScrollBarsVisible: $Values<typeof MSForms$fmScrollBars>;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Paste(): void;
    Picture: stdole.StdPicture;
    PictureAlignment: $Values<typeof MSForms$fmPictureAlignment>;
    PictureSizeMode: $Values<typeof MSForms$fmPictureSizeMode>;
    PictureTiling: boolean;
    RedoAction(): void;
    Repaint(): void;
    Scroll(xAction?: any, yAction?: any): void;
    ScrollBars: $Values<typeof MSForms$fmScrollBars>;
    ScrollHeight: number;
    ScrollLeft: number;
    ScrollTop: number;
    ScrollWidth: number;
    Selected: MSForms$Controls;
    SetDefaultTabOrder(): void;
    ShowGridDots: $Values<typeof MSForms$fmMode>;
    ShowToolbox: $Values<typeof MSForms$fmMode>;
    SnapToGrid: $Values<typeof MSForms$fmMode>;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    UndoAction(): void;
    VerticalScrollBarSide: $Values<typeof MSForms$fmVerticalScrollBarSide>;
    Zoom: number;
  }

  declare class MSForms$HTMLCheckbox {
    constructor(): this;
    Checked: boolean;
    HTMLName: string;
    HTMLType: string;
    Value: string;
  }

  declare class MSForms$HTMLHidden {
    constructor(): this;
    HTMLName: string;
    HTMLType: string;
    Value: string;
  }

  declare class MSForms$HTMLImage {
    constructor(): this;
    Action: string;
    Encoding: string;
    HTMLName: string;
    HTMLType: string;
    Method: string;
    Source: string;
  }

  declare class MSForms$HTMLOption {
    constructor(): this;
    Checked: boolean;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    HTMLName: string;
    HTMLType: string;
    Value: string;
  }

  declare class MSForms$HTMLPassword {
    constructor(): this;
    HTMLName: string;
    HTMLType: string;
    MaxLength: number;
    Value: string;
    Width: number;
  }

  declare class MSForms$HTMLReset {
    constructor(): this;
    Caption: string;
    HTMLName: string;
    HTMLType: string;
  }

  declare class MSForms$HTMLSelect {
    constructor(): this;
    DisplayValues: any;
    HTMLName: string;
    MultiSelect: boolean;
    Selected: string;
    Size: number;
    Values: any;
  }

  declare class MSForms$HTMLSubmit {
    constructor(): this;
    Action: string;
    Caption: string;
    Encoding: string;
    HTMLName: string;
    HTMLType: string;
    Method: string;
  }

  declare class MSForms$HTMLText {
    constructor(): this;
    HTMLName: string;
    HTMLType: string;
    MaxLength: number;
    Value: string;
    Width: number;
  }

  declare class MSForms$HTMLTextArea {
    constructor(): this;
    Columns: number;
    HTMLName: string;
    Rows: number;
    Value: string;
    WordWrap: string;
  }

  declare class MSForms$Image {
    constructor(): this;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BorderColor: number;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    Enabled: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Picture: stdole.StdPicture;
    PictureAlignment: $Values<typeof MSForms$fmPictureAlignment>;
    PictureSizeMode: $Values<typeof MSForms$fmPictureSizeMode>;
    PictureTiling: boolean;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
  }

  declare class MSForms$Label {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    _Value: string;
    Accelerator: string;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BorderColor: number;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    Caption: string;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Picture: stdole.StdPicture;
    PicturePosition: $Values<typeof MSForms$fmPicturePosition>;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    WordWrap: boolean;
  }

  declare class MSForms$ListBox {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    AddItem(pvargItem?: any, pvargIndex?: any): void;
    BackColor: number;
    BorderColor: number;
    BordersSuppress: boolean;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    BoundColumn: any;
    Clear(): void;
    Column(pvargColumn: number, pvargIndex?: number): any;
    Column(): SafeArray;
    ColumnCount: number;
    ColumnHeads: boolean;
    ColumnWidths: string;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    IMEMode: $Values<typeof MSForms$fmIMEMode>;
    IntegralHeight: boolean;
    List(pvargIndex: number, pvargColumn?: number): any;
    List(): SafeArray;
    ListCount: number;
    ListCursor: any;
    ListIndex: any;
    ListStyle: $Values<typeof MSForms$fmListStyle>;
    ListWidth: any;
    Locked: boolean;
    MatchEntry: $Values<typeof MSForms$fmMatchEntry>;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiSelect: $Values<typeof MSForms$fmMultiSelect>;
    RemoveItem(pvargIndex: any): void;
    Selected(pvargIndex: any): boolean;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    Text: string;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TextColumn: any;
    TopIndex: any;
    Valid: boolean;
    Value: any;
  }

  declare class MSForms$MultiPage {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    _GetTabFixedHeight(Height: number): void;
    _GetTabFixedWidth(Width: number): void;
    _SetTabFixedHeight(Height: number): void;
    _SetTabFixedWidth(Width: number): void;
    BackColor: number;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    MultiRow: boolean;
    MSForms$Pages: MSForms$Pages;
    SelectedItem: MSForms$Page;
    Style: $Values<typeof MSForms$fmTabStyle>;
    TabFixedHeight: number;
    TabFixedWidth: number;
    TabOrientation: $Values<typeof MSForms$fmTabOrientation>;
    Value: number;
  }

  declare class MSForms$NewFont {
    constructor(): this;
    Bold: boolean;
    Charset: number;
    Italic: boolean;
    Name: string;
    Size: number;
    Strikethrough: boolean;
    Underline: boolean;
    Weight: number;
  }

  declare class MSForms$OptionButton {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    Accelerator: string;
    Alignment: $Values<typeof MSForms$fmAlignment>;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BordersSuppress: boolean;
    Caption: string;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    GroupName: string;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiSelect: $Values<typeof MSForms$fmMultiSelect>;
    Picture: stdole.StdPicture;
    PicturePosition: $Values<typeof MSForms$fmPicturePosition>;
    SpecialEffect: $Values<typeof MSForms$fmButtonEffect>;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TripleState: boolean;
    Valid: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class MSForms$Page {
    constructor(): this;
    _GetGridX(GridX: number): void;
    _GetGridY(GridY: number): void;
    _GetInsideHeight(InsideHeight: number): void;
    _GetInsideWidth(InsideWidth: number): void;
    _GetScrollHeight(ScrollHeight: number): void;
    _GetScrollLeft(ScrollLeft: number): void;
    _GetScrollTop(ScrollTop: number): void;
    _GetScrollWidth(ScrollWidth: number): void;
    _SetGridX(GridX: number): void;
    _SetGridY(GridY: number): void;
    _SetScrollHeight(ScrollHeight: number): void;
    _SetScrollLeft(ScrollLeft: number): void;
    _SetScrollTop(ScrollTop: number): void;
    _SetScrollWidth(ScrollWidth: number): void;
    Accelerator: string;
    ActiveControl: MSForms$Control;
    CanPaste: boolean;
    CanRedo: boolean;
    CanUndo: boolean;
    Caption: string;
    MSForms$Controls: MSForms$Controls;
    ControlTipText: string;
    Copy(): void;
    Cut(): void;
    Cycle: $Values<typeof MSForms$fmCycle>;
    DesignMode: $Values<typeof MSForms$fmMode>;
    Enabled: boolean;
    GridX: number;
    GridY: number;
    Index: number;
    InsideHeight: number;
    InsideWidth: number;
    KeepScrollBarsVisible: $Values<typeof MSForms$fmScrollBars>;
    Name: string;
    Parent: any;
    Paste(): void;
    Picture: stdole.StdPicture;
    PictureAlignment: $Values<typeof MSForms$fmPictureAlignment>;
    PictureSizeMode: $Values<typeof MSForms$fmPictureSizeMode>;
    PictureTiling: boolean;
    RedoAction(): void;
    Repaint(): void;
    Scroll(xAction?: any, yAction?: any): void;
    ScrollBars: $Values<typeof MSForms$fmScrollBars>;
    ScrollHeight: number;
    ScrollLeft: number;
    ScrollTop: number;
    ScrollWidth: number;
    Selected: MSForms$Controls;
    SetDefaultTabOrder(): void;
    ShowGridDots: $Values<typeof MSForms$fmMode>;
    ShowToolbox: $Values<typeof MSForms$fmMode>;
    SnapToGrid: $Values<typeof MSForms$fmMode>;
    Tag: string;
    TransitionEffect: $Values<typeof MSForms$fmTransitionEffect>;
    TransitionPeriod: number;
    UndoAction(): void;
    VerticalScrollBarSide: $Values<typeof MSForms$fmVerticalScrollBarSide>;
    Visible: boolean;
    Zoom: number;
  }

  declare interface MSForms$Pages {
    _AddCtrl(
      clsid: number,
      bstrName: string,
      bstrCaption: string
    ): MSForms$Page;
    _GetItemByIndex(lIndex: number): MSForms$Control;
    _GetItemByName(pstrName: string): MSForms$Control;
    _InsertCtrl(
      clsid: number,
      bstrName: string,
      bstrCaption: string,
      lIndex: number
    ): MSForms$Page;
    Add(bstrName?: any, bstrCaption?: any, lIndex?: any): MSForms$Page;
    Clear(): void;
    +Count: number;
    Enum(): any;
    Item(varg: any): any;
    Remove(varg: any): void;
    (varg: any): any;
  }

  declare class MSForms$ReturnBoolean {
    constructor(): this;
    Value: boolean;
  }

  declare class MSForms$ReturnEffect {
    constructor(): this;
    Value: $Values<typeof MSForms$fmDropEffect>;
  }

  declare class MSForms$ReturnInteger {
    constructor(): this;
    Value: number;
  }

  declare class MSForms$ReturnSingle {
    constructor(): this;
    Value: number;
  }

  declare class MSForms$ReturnString {
    constructor(): this;
    Value: string;
  }

  declare class MSForms$ScrollBar {
    constructor(): this;
    BackColor: number;
    Delay: number;
    Enabled: boolean;
    ForeColor: number;
    LargeChange: number;
    Max: number;
    Min: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Orientation: $Values<typeof MSForms$fmOrientation>;
    ProportionalThumb: boolean;
    SmallChange: number;
    Value: number;
  }

  declare class MSForms$SpinButton {
    constructor(): this;
    BackColor: number;
    Delay: number;
    Enabled: boolean;
    ForeColor: number;
    Max: number;
    Min: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Orientation: $Values<typeof MSForms$fmOrientation>;
    SmallChange: number;
    Value: number;
  }

  declare class MSForms$Tab {
    constructor(): this;
    Accelerator: string;
    Caption: string;
    ControlTipText: string;
    Enabled: boolean;
    Index: number;
    Name: string;
    Tag: string;
    Visible: boolean;
  }

  declare interface MSForms$Tabs {
    _Add(bstrName: string, bstrCaption: string): MSForms$Tab;
    _GetItemByIndex(lIndex: number): MSForms$Tab;
    _GetItemByName(bstr: string): MSForms$Tab;
    _Insert(bstrName: string, bstrCaption: string, lIndex: number): MSForms$Tab;
    Add(bstrName?: any, bstrCaption?: any, lIndex?: any): MSForms$Tab;
    Clear(): void;
    +Count: number;
    Enum(): any;
    Item(varg: any): any;
    Remove(varg: any): void;
    (varg: any): any;
  }

  declare class MSForms$TabStrip {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    _GetClientHeight(ClientHeight: number): void;
    _GetClientLeft(ClientLeft: number): void;
    _GetClientTop(ClientTop: number): void;
    _GetClientWidth(ClientWidth: number): void;
    _GetTabFixedHeight(TabFixedHeight: number): void;
    _GetTabFixedWidth(TabFixedWidth: number): void;
    _SetTabFixedHeight(TabFixedHeight: number): void;
    _SetTabFixedWidth(TabFixedWidth: number): void;
    BackColor: number;
    ClientHeight: number;
    ClientLeft: number;
    ClientTop: number;
    ClientWidth: number;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiRow: boolean;
    SelectedItem: MSForms$Tab;
    Style: $Values<typeof MSForms$fmTabStyle>;
    TabFixedHeight: number;
    TabFixedWidth: number;
    TabOrientation: $Values<typeof MSForms$fmTabOrientation>;
    MSForms$Tabs: MSForms$Tabs;
    Value: number;
  }

  declare class MSForms$TextBox {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    AutoSize: boolean;
    AutoTab: boolean;
    AutoWordSelect: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BorderColor: number;
    BordersSuppress: boolean;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    CanPaste: boolean;
    Copy(): void;
    CurLine: number;
    CurTargetX: number;
    CurTargetY: number;
    CurX: number;
    CurY: number;
    Cut(): void;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    DragBehavior: $Values<typeof MSForms$fmDragBehavior>;
    DropButtonStyle: $Values<typeof MSForms$fmDropButtonStyle>;
    Enabled: boolean;
    EnterFieldBehavior: $Values<typeof MSForms$fmEnterFieldBehavior>;
    EnterKeyBehavior: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    HideSelection: boolean;
    IMEMode: $Values<typeof MSForms$fmIMEMode>;
    IntegralHeight: boolean;
    LineCount: number;
    Locked: boolean;
    MaxLength: number;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiLine: boolean;
    PasswordChar: string;
    Paste(): void;
    ScrollBars: $Values<typeof MSForms$fmScrollBars>;
    SelectionMargin: boolean;
    SelLength: number;
    SelStart: number;
    SelText: string;
    ShowDropButtonWhen: $Values<typeof MSForms$fmShowDropButtonWhen>;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    TabKeyBehavior: boolean;
    Text: string;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TextLength: number;
    Valid: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class MSForms$ToggleButton {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    Accelerator: string;
    Alignment: $Values<typeof MSForms$fmAlignment>;
    AutoSize: boolean;
    BackColor: number;
    BackStyle: $Values<typeof MSForms$fmBackStyle>;
    BordersSuppress: boolean;
    Caption: string;
    DisplayStyle: $Values<typeof MSForms$fmDisplayStyle>;
    Enabled: boolean;
    Font: MSForms$NewFont;
    FontBold: boolean;
    FontItalic: boolean;
    FontName: string;
    FontSize: number;
    FontStrikethru: boolean;
    FontUnderline: boolean;
    FontWeight: number;
    ForeColor: number;
    GroupName: string;
    Locked: boolean;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    MultiSelect: $Values<typeof MSForms$fmMultiSelect>;
    Picture: stdole.StdPicture;
    PicturePosition: $Values<typeof MSForms$fmPicturePosition>;
    SpecialEffect: $Values<typeof MSForms$fmButtonEffect>;
    TextAlign: $Values<typeof MSForms$fmTextAlign>;
    TripleState: boolean;
    Valid: boolean;
    Value: any;
    WordWrap: boolean;
  }

  declare class MSForms$UserForm {
    constructor(): this;
    _Font_Reserved: MSForms$NewFont;
    _GetGridX(GridX: number): void;
    _GetGridY(GridY: number): void;
    _GetInsideHeight(InsideHeight: number): void;
    _GetInsideWidth(InsideWidth: number): void;
    _GetScrollHeight(ScrollHeight: number): void;
    _GetScrollLeft(ScrollLeft: number): void;
    _GetScrollTop(ScrollTop: number): void;
    _GetScrollWidth(ScrollWidth: number): void;
    _SetGridX(GridX: number): void;
    _SetGridY(GridY: number): void;
    _SetScrollHeight(ScrollHeight: number): void;
    _SetScrollLeft(ScrollLeft: number): void;
    _SetScrollTop(ScrollTop: number): void;
    _SetScrollWidth(ScrollWidth: number): void;
    ActiveControl: MSForms$Control;
    BackColor: number;
    BorderColor: number;
    BorderStyle: $Values<typeof MSForms$fmBorderStyle>;
    CanPaste: boolean;
    CanRedo: boolean;
    CanUndo: boolean;
    Caption: string;
    MSForms$Controls: MSForms$Controls;
    Copy(): void;
    Cut(): void;
    Cycle: $Values<typeof MSForms$fmCycle>;
    DesignMode: $Values<typeof MSForms$fmMode>;
    DrawBuffer: number;
    Enabled: boolean;
    Font: MSForms$NewFont;
    ForeColor: number;
    GridX: number;
    GridY: number;
    InsideHeight: number;
    InsideWidth: number;
    KeepScrollBarsVisible: $Values<typeof MSForms$fmScrollBars>;
    MouseIcon: stdole.StdPicture;
    MousePointer: $Values<typeof MSForms$fmMousePointer>;
    Paste(): void;
    Picture: stdole.StdPicture;
    PictureAlignment: $Values<typeof MSForms$fmPictureAlignment>;
    PictureSizeMode: $Values<typeof MSForms$fmPictureSizeMode>;
    PictureTiling: boolean;
    RedoAction(): void;
    Repaint(): void;
    Scroll(xAction?: any, yAction?: any): void;
    ScrollBars: $Values<typeof MSForms$fmScrollBars>;
    ScrollHeight: number;
    ScrollLeft: number;
    ScrollTop: number;
    ScrollWidth: number;
    Selected: MSForms$Controls;
    SetDefaultTabOrder(): void;
    ShowGridDots: $Values<typeof MSForms$fmMode>;
    ShowToolbox: $Values<typeof MSForms$fmMode>;
    SnapToGrid: $Values<typeof MSForms$fmMode>;
    SpecialEffect: $Values<typeof MSForms$fmSpecialEffect>;
    UndoAction(): void;
    VerticalScrollBarSide: $Values<typeof MSForms$fmVerticalScrollBarSide>;
    Zoom: number;
  }

  declare type MSForms$EventHelperTypes$Container_BeforeDragOver_ArgNames = [
    "Cancel",
    "Control",
    "Data",
    "X",
    "Y",
    "State",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$Container_BeforeDropOrPaste_ArgNames = [
    "Cancel",
    "Control",
    "Action",
    "Data",
    "X",
    "Y",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$Container_Scroll_ArgNames = [
    "ActionX",
    "ActionY",
    "RequestDx",
    "RequestDy",
    "ActualDx",
    "ActualDy"
  ];

  declare type MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames = [
    "Cancel",
    "Data",
    "X",
    "Y",
    "DragState",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames = [
    "Cancel",
    "Action",
    "Data",
    "X",
    "Y",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$Error_ArgNames = [
    "Number",
    "Description",
    "SCode",
    "Source",
    "HelpFile",
    "HelpContext",
    "CancelDisplay"
  ];

  declare type MSForms$EventHelperTypes$MultiPage_BeforeDragOver_ArgNames = [
    "Index",
    "Cancel",
    "Control",
    "Data",
    "X",
    "Y",
    "State",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$MultiPage_BeforeDropOrPaste_ArgNames = [
    "Index",
    "Cancel",
    "Control",
    "Action",
    "Data",
    "X",
    "Y",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$MultiPage_Error_ArgNames = [
    "Index",
    "Number",
    "Description",
    "SCode",
    "Source",
    "HelpFile",
    "HelpContext",
    "CancelDisplay"
  ];

  declare type MSForms$EventHelperTypes$MultiPage_Scroll_ArgNames = [
    "Index",
    "ActionX",
    "ActionY",
    "RequestDx",
    "RequestDy",
    "ActualDx",
    "ActualDy"
  ];

  declare type MSForms$EventHelperTypes$TabStrip_BeforeDragOver_ArgNames = [
    "Index",
    "Cancel",
    "Data",
    "X",
    "Y",
    "DragState",
    "Effect",
    "Shift"
  ];

  declare type MSForms$EventHelperTypes$TabStrip_BeforeDropOrPaste_ArgNames = [
    "Index",
    "Cancel",
    "Action",
    "Data",
    "X",
    "Y",
    "Effect",
    "Shift"
  ];

  declare interface MSForms$EventHelperTypes$Container_BeforeDragOver_Parameter {
    +Cancel: MSForms$ReturnBoolean;
    +Control: MSForms$Control;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Shift: number;
    +State: $Values<typeof MSForms$fmDragState>;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$Container_BeforeDropOrPaste_Parameter {
    +Action: $Values<typeof MSForms$fmAction>;
    +Cancel: MSForms$ReturnBoolean;
    +Control: MSForms$Control;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Shift: number;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$Container_Scroll_Parameter {
    +ActionX: $Values<typeof MSForms$fmScrollAction>;
    +ActionY: $Values<typeof MSForms$fmScrollAction>;
    +ActualDx: MSForms$ReturnSingle;
    +ActualDy: MSForms$ReturnSingle;
    +RequestDx: number;
    +RequestDy: number;
  }

  declare interface MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter {
    +Cancel: MSForms$ReturnBoolean;
    +Data: MSForms$DataObject;
    +DragState: $Values<typeof MSForms$fmDragState>;
    +Effect: MSForms$ReturnEffect;
    +Shift: number;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter {
    +Action: $Values<typeof MSForms$fmAction>;
    +Cancel: MSForms$ReturnBoolean;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Shift: number;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$Error_Parameter {
    +CancelDisplay: MSForms$ReturnBoolean;
    +Description: MSForms$ReturnString;
    +HelpContext: number;
    +HelpFile: string;
    +Number: number;
    +SCode: number;
    +Source: string;
  }

  declare interface MSForms$EventHelperTypes$MultiPage_BeforeDragOver_Parameter {
    +Cancel: MSForms$ReturnBoolean;
    +Control: MSForms$Control;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Index: number;
    +Shift: number;
    +State: $Values<typeof MSForms$fmDragState>;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$MultiPage_BeforeDropOrPaste_Parameter {
    +Action: $Values<typeof MSForms$fmAction>;
    +Cancel: MSForms$ReturnBoolean;
    +Control: MSForms$Control;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Index: number;
    +Shift: number;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$MultiPage_Error_Parameter {
    +CancelDisplay: MSForms$ReturnBoolean;
    +Description: MSForms$ReturnString;
    +HelpContext: number;
    +HelpFile: string;
    +Index: number;
    +Number: number;
    +SCode: number;
    +Source: string;
  }

  declare interface MSForms$EventHelperTypes$MultiPage_Scroll_Parameter {
    +ActionX: $Values<typeof MSForms$fmScrollAction>;
    +ActionY: $Values<typeof MSForms$fmScrollAction>;
    +ActualDx: MSForms$ReturnSingle;
    +ActualDy: MSForms$ReturnSingle;
    +Index: number;
    +RequestDx: number;
    +RequestDy: number;
  }

  declare interface MSForms$EventHelperTypes$TabStrip_BeforeDragOver_Parameter {
    +Cancel: MSForms$ReturnBoolean;
    +Data: MSForms$DataObject;
    +DragState: $Values<typeof MSForms$fmDragState>;
    +Effect: MSForms$ReturnEffect;
    +Index: number;
    +Shift: number;
    +X: number;
    +Y: number;
  }

  declare interface MSForms$EventHelperTypes$TabStrip_BeforeDropOrPaste_Parameter {
    +Action: $Values<typeof MSForms$fmAction>;
    +Cancel: MSForms$ReturnBoolean;
    +Data: MSForms$DataObject;
    +Effect: MSForms$ReturnEffect;
    +Index: number;
    +Shift: number;
    +X: number;
    +Y: number;
  }
  declare interface ActiveXObject {
    on(
      obj: MSForms$CheckBox,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$Control,
      event: "BeforeUpdate" | "Exit",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "AddControl" | "RemoveControl",
      argNames: ["Control"],
      handler: (parameter: {
        +Control: MSForms$Control
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Container_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Container_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "Scroll",
      argNames: MSForms$EventHelperTypes$Container_Scroll_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_Scroll_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "Zoom",
      argNames: ["Percent"],
      handler: (parameter: {
        Percent: number
      }) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "AddControl" | "RemoveControl",
      argNames: ["Index", "Control"],
      handler: (parameter: {
        +Index: number,
        +Control: MSForms$Control
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$MultiPage_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$MultiPage_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$MultiPage_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$MultiPage_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "Click" | "Layout",
      argNames: ["Index"],
      handler: (parameter: {
        +Index: number
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "DblClick",
      argNames: ["Index", "Cancel"],
      handler: (parameter: {
        +Index: number,
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "Error",
      argNames: MSForms$EventHelperTypes$MultiPage_Error_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$MultiPage_Error_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Index", "Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Index: number,
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "Scroll",
      argNames: MSForms$EventHelperTypes$MultiPage_Scroll_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$MultiPage_Scroll_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "Zoom",
      argNames: ["Index", "Percent"],
      handler: (parameter: {
        +Index: number,
        Percent: number
      }) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$TabStrip_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$TabStrip_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$TabStrip_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$TabStrip_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "Click",
      argNames: ["Index"],
      handler: (parameter: {
        +Index: number
      }) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "DblClick",
      argNames: ["Index", "Cancel"],
      handler: (parameter: {
        +Index: number,
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Index", "Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Index: number,
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Control_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Control_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "AddControl" | "RemoveControl",
      argNames: ["Control"],
      handler: (parameter: {
        +Control: MSForms$Control
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "BeforeDragOver",
      argNames: MSForms$EventHelperTypes$Container_BeforeDragOver_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_BeforeDragOver_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "BeforeDropOrPaste",
      argNames: MSForms$EventHelperTypes$Container_BeforeDropOrPaste_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_BeforeDropOrPaste_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "DblClick",
      argNames: ["Cancel"],
      handler: (parameter: {
        +Cancel: MSForms$ReturnBoolean
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "Error",
      argNames: MSForms$EventHelperTypes$Error_ArgNames,
      handler: (parameter: MSForms$EventHelperTypes$Error_Parameter) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "KeyDown" | "KeyUp",
      argNames: ["KeyCode", "Shift"],
      handler: (parameter: {
        +KeyCode: MSForms$ReturnInteger,
        +Shift: number
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "KeyPress",
      argNames: ["KeyAscii"],
      handler: (parameter: {
        +KeyAscii: MSForms$ReturnInteger
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "MouseDown" | "MouseMove" | "MouseUp",
      argNames: ["Button", "Shift", "X", "Y"],
      handler: (parameter: {
        +Button: number,
        +Shift: number,
        +X: number,
        +Y: number
      }) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "Scroll",
      argNames: MSForms$EventHelperTypes$Container_Scroll_ArgNames,
      handler: (
        parameter: MSForms$EventHelperTypes$Container_Scroll_Parameter
      ) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "Zoom",
      argNames: ["Percent"],
      handler: (parameter: {
        Percent: number
      }) => void
    ): void;
    on(
      obj: MSForms$CheckBox,
      event: "Change" | "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$ComboBox,
      event: "Change" | "Click" | "DropButtonClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$CommandButton,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$Control,
      event: "AfterUpdate" | "Enter",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$Frame,
      event: "Click" | "Layout",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLCheckbox,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLHidden,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLImage,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLOption,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLPassword,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLReset,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLSelect,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLSubmit,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLText,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$HTMLTextArea,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$Image,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$Label,
      event: "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$ListBox,
      event: "Change" | "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$MultiPage,
      event: "Change",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$OptionButton,
      event: "Change" | "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$ScrollBar,
      event: "Change" | "Scroll",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$SpinButton,
      event: "Change" | "SpinDown" | "SpinUp",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$TabStrip,
      event: "Change",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$TextBox,
      event: "Change" | "DropButtonClick",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$ToggleButton,
      event: "Change" | "Click",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: MSForms$UserForm,
      event: "Click" | "Layout",
      handler: (parameter: {}) => void
    ): void;
    set(
      obj: MSForms$ComboBox | MSForms$ListBox,
      propertyName: "Column" | "List",
      parameterTypes: [number, number] | [number],
      newValue: any
    ): void;
    set(
      obj: MSForms$ComboBox | MSForms$ListBox,
      propertyName: "Column" | "List",
      parameterTypes: number[],
      newValue: SafeArray
    ): void;
    set(
      obj: MSForms$ListBox,
      propertyName: "Selected",
      parameterTypes: [any],
      newValue: boolean
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "Forms.Image": MSForms$Image;
  }
}
