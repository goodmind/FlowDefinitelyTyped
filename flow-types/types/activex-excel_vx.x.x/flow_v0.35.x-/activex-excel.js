declare module 'activex-excel' {
        declare type Excel$AddSheetResult<T> = "There was Conditional Type, use $Call utility type";

declare type Excel$InternationalResult<T> = "There was Conditional Type, use $Call utility type";

declare type Excel$LineStyle = Excel$XlLineStyle
| Excel$Constants.xlGray25
| Excel$Constants.xlGray50
| Excel$Constants.xlGray75
| Excel$Constants.xlAutomatic;

declare type Excel$HorizontalAlignments = Excel$Constants.xlCenter
| Excel$Constants.xlDistributed
| Excel$Constants.xlJustify
| Excel$Constants.xlLeft
| Excel$Constants.xlRight;

declare type Excel$VerticalAlignments = Excel$Constants.xlBottom
| Excel$Constants.xlCenter
| Excel$Constants.xlDistributed
| Excel$Constants.xlJustify
| Excel$Constants.xlTop;

declare type Excel$PivotTableWizardSourceData<TSourceType> = "There was Conditional Type, use $Call utility type";

declare type Excel$PivotTableWizardAutoPage<TSourceType> = "There was Conditional Type, use $Call utility type";

declare type Excel$PrintToFileName<T> = "There was Conditional Type, use $Call utility type";

declare type Excel$Sheet = Excel$Worksheet | Excel$Chart | Excel$DialogSheet;

declare type Excel$SheetView = Excel$WorksheetView | Excel$DialogSheetView;

declare  class Excel$Constants {
  constructor(...args: empty): mixed;
static +xl3DBar: Class<Excel$Constants__xl3DBar> & Excel$Constants__xl3DBar & -4099;// -4099
static +xl3DEffects1: Class<Excel$Constants__xl3DEffects1> & Excel$Constants__xl3DEffects1 & 13;// 13
static +xl3DEffects2: Class<Excel$Constants__xl3DEffects2> & Excel$Constants__xl3DEffects2 & 14;// 14
static +xl3DSurface: Class<Excel$Constants__xl3DSurface> & Excel$Constants__xl3DSurface & -4103;// -4103
static +xlAbove: Class<Excel$Constants__xlAbove> & Excel$Constants__xlAbove & 0;// 0
static +xlAccounting1: Class<Excel$Constants__xlAccounting1> & Excel$Constants__xlAccounting1 & 4;// 4
static +xlAccounting2: Class<Excel$Constants__xlAccounting2> & Excel$Constants__xlAccounting2 & 5;// 5
static +xlAccounting3: Class<Excel$Constants__xlAccounting3> & Excel$Constants__xlAccounting3 & 6;// 6
static +xlAccounting4: Class<Excel$Constants__xlAccounting4> & Excel$Constants__xlAccounting4 & 17;// 17
static +xlAdd: Class<Excel$Constants__xlAdd> & Excel$Constants__xlAdd & 2;// 2
static +xlAll: Class<Excel$Constants__xlAll> & Excel$Constants__xlAll & -4104;// -4104
static +xlAllExceptBorders: Class<Excel$Constants__xlAllExceptBorders> & Excel$Constants__xlAllExceptBorders & 7;// 7
static +xlAutomatic: Class<Excel$Constants__xlAutomatic> & Excel$Constants__xlAutomatic & -4105;// -4105
static +xlBar: Class<Excel$Constants__xlBar> & Excel$Constants__xlBar & 2;// 2
static +xlBelow: Class<Excel$Constants__xlBelow> & Excel$Constants__xlBelow & 1;// 1
static +xlBidi: Class<Excel$Constants__xlBidi> & Excel$Constants__xlBidi & -5000;// -5000
static +xlBidiCalendar: Class<Excel$Constants__xlBidiCalendar> & Excel$Constants__xlBidiCalendar & 3;// 3
static +xlBoth: Class<Excel$Constants__xlBoth> & Excel$Constants__xlBoth & 1;// 1
static +xlBottom: Class<Excel$Constants__xlBottom> & Excel$Constants__xlBottom & -4107;// -4107
static +xlCascade: Class<Excel$Constants__xlCascade> & Excel$Constants__xlCascade & 7;// 7
static +xlCenter: Class<Excel$Constants__xlCenter> & Excel$Constants__xlCenter & -4108;// -4108
static +xlCenterAcrossSelection: Class<Excel$Constants__xlCenterAcrossSelection> & Excel$Constants__xlCenterAcrossSelection & 7;// 7
static +xlChart4: Class<Excel$Constants__xlChart4> & Excel$Constants__xlChart4 & 2;// 2
static +xlChartSeries: Class<Excel$Constants__xlChartSeries> & Excel$Constants__xlChartSeries & 17;// 17
static +xlChartShort: Class<Excel$Constants__xlChartShort> & Excel$Constants__xlChartShort & 6;// 6
static +xlChartTitles: Class<Excel$Constants__xlChartTitles> & Excel$Constants__xlChartTitles & 18;// 18
static +xlChecker: Class<Excel$Constants__xlChecker> & Excel$Constants__xlChecker & 9;// 9
static +xlCircle: Class<Excel$Constants__xlCircle> & Excel$Constants__xlCircle & 8;// 8
static +xlClassic1: Class<Excel$Constants__xlClassic1> & Excel$Constants__xlClassic1 & 1;// 1
static +xlClassic2: Class<Excel$Constants__xlClassic2> & Excel$Constants__xlClassic2 & 2;// 2
static +xlClassic3: Class<Excel$Constants__xlClassic3> & Excel$Constants__xlClassic3 & 3;// 3
static +xlClosed: Class<Excel$Constants__xlClosed> & Excel$Constants__xlClosed & 3;// 3
static +xlColor1: Class<Excel$Constants__xlColor1> & Excel$Constants__xlColor1 & 7;// 7
static +xlColor2: Class<Excel$Constants__xlColor2> & Excel$Constants__xlColor2 & 8;// 8
static +xlColor3: Class<Excel$Constants__xlColor3> & Excel$Constants__xlColor3 & 9;// 9
static +xlColumn: Class<Excel$Constants__xlColumn> & Excel$Constants__xlColumn & 3;// 3
static +xlCombination: Class<Excel$Constants__xlCombination> & Excel$Constants__xlCombination & -4111;// -4111
static +xlComplete: Class<Excel$Constants__xlComplete> & Excel$Constants__xlComplete & 4;// 4
static +xlConstants: Class<Excel$Constants__xlConstants> & Excel$Constants__xlConstants & 2;// 2
static +xlContents: Class<Excel$Constants__xlContents> & Excel$Constants__xlContents & 2;// 2
static +xlContext: Class<Excel$Constants__xlContext> & Excel$Constants__xlContext & -5002;// -5002
static +xlCorner: Class<Excel$Constants__xlCorner> & Excel$Constants__xlCorner & 2;// 2
static +xlCrissCross: Class<Excel$Constants__xlCrissCross> & Excel$Constants__xlCrissCross & 16;// 16
static +xlCross: Class<Excel$Constants__xlCross> & Excel$Constants__xlCross & 4;// 4
static +xlCustom: Class<Excel$Constants__xlCustom> & Excel$Constants__xlCustom & -4114;// -4114
static +xlDebugCodePane: Class<Excel$Constants__xlDebugCodePane> & Excel$Constants__xlDebugCodePane & 13;// 13
static +xlDefaultAutoFormat: Class<Excel$Constants__xlDefaultAutoFormat> & Excel$Constants__xlDefaultAutoFormat & -1;// -1
static +xlDesktop: Class<Excel$Constants__xlDesktop> & Excel$Constants__xlDesktop & 9;// 9
static +xlDiamond: Class<Excel$Constants__xlDiamond> & Excel$Constants__xlDiamond & 2;// 2
static +xlDirect: Class<Excel$Constants__xlDirect> & Excel$Constants__xlDirect & 1;// 1
static +xlDistributed: Class<Excel$Constants__xlDistributed> & Excel$Constants__xlDistributed & -4117;// -4117
static +xlDivide: Class<Excel$Constants__xlDivide> & Excel$Constants__xlDivide & 5;// 5
static +xlDoubleAccounting: Class<Excel$Constants__xlDoubleAccounting> & Excel$Constants__xlDoubleAccounting & 5;// 5
static +xlDoubleClosed: Class<Excel$Constants__xlDoubleClosed> & Excel$Constants__xlDoubleClosed & 5;// 5
static +xlDoubleOpen: Class<Excel$Constants__xlDoubleOpen> & Excel$Constants__xlDoubleOpen & 4;// 4
static +xlDoubleQuote: Class<Excel$Constants__xlDoubleQuote> & Excel$Constants__xlDoubleQuote & 1;// 1
static +xlDrawingObject: Class<Excel$Constants__xlDrawingObject> & Excel$Constants__xlDrawingObject & 14;// 14
static +xlEntireChart: Class<Excel$Constants__xlEntireChart> & Excel$Constants__xlEntireChart & 20;// 20
static +xlExcelMenus: Class<Excel$Constants__xlExcelMenus> & Excel$Constants__xlExcelMenus & 1;// 1
static +xlExtended: Class<Excel$Constants__xlExtended> & Excel$Constants__xlExtended & 3;// 3
static +xlFill: Class<Excel$Constants__xlFill> & Excel$Constants__xlFill & 5;// 5
static +xlFirst: Class<Excel$Constants__xlFirst> & Excel$Constants__xlFirst & 0;// 0
static +xlFixedValue: Class<Excel$Constants__xlFixedValue> & Excel$Constants__xlFixedValue & 1;// 1
static +xlFloating: Class<Excel$Constants__xlFloating> & Excel$Constants__xlFloating & 5;// 5
static +xlFormats: Class<Excel$Constants__xlFormats> & Excel$Constants__xlFormats & -4122;// -4122
static +xlFormula: Class<Excel$Constants__xlFormula> & Excel$Constants__xlFormula & 5;// 5
static +xlFullScript: Class<Excel$Constants__xlFullScript> & Excel$Constants__xlFullScript & 1;// 1
static +xlGeneral: Class<Excel$Constants__xlGeneral> & Excel$Constants__xlGeneral & 1;// 1
static +xlGray16: Class<Excel$Constants__xlGray16> & Excel$Constants__xlGray16 & 17;// 17
static +xlGray25: Class<Excel$Constants__xlGray25> & Excel$Constants__xlGray25 & -4124;// -4124
static +xlGray50: Class<Excel$Constants__xlGray50> & Excel$Constants__xlGray50 & -4125;// -4125
static +xlGray75: Class<Excel$Constants__xlGray75> & Excel$Constants__xlGray75 & -4126;// -4126
static +xlGray8: Class<Excel$Constants__xlGray8> & Excel$Constants__xlGray8 & 18;// 18
static +xlGregorian: Class<Excel$Constants__xlGregorian> & Excel$Constants__xlGregorian & 2;// 2
static +xlGrid: Class<Excel$Constants__xlGrid> & Excel$Constants__xlGrid & 15;// 15
static +xlGridline: Class<Excel$Constants__xlGridline> & Excel$Constants__xlGridline & 22;// 22
static +xlHigh: Class<Excel$Constants__xlHigh> & Excel$Constants__xlHigh & -4127;// -4127
static +xlHindiNumerals: Class<Excel$Constants__xlHindiNumerals> & Excel$Constants__xlHindiNumerals & 3;// 3
static +xlIcons: Class<Excel$Constants__xlIcons> & Excel$Constants__xlIcons & 1;// 1
static +xlImmediatePane: Class<Excel$Constants__xlImmediatePane> & Excel$Constants__xlImmediatePane & 12;// 12
static +xlInside: Class<Excel$Constants__xlInside> & Excel$Constants__xlInside & 2;// 2
static +xlInteger: Class<Excel$Constants__xlInteger> & Excel$Constants__xlInteger & 2;// 2
static +xlJustify: Class<Excel$Constants__xlJustify> & Excel$Constants__xlJustify & -4130;// -4130
static +xlLast: Class<Excel$Constants__xlLast> & Excel$Constants__xlLast & 1;// 1
static +xlLastCell: Class<Excel$Constants__xlLastCell> & Excel$Constants__xlLastCell & 11;// 11
static +xlLatin: Class<Excel$Constants__xlLatin> & Excel$Constants__xlLatin & -5001;// -5001
static +xlLeft: Class<Excel$Constants__xlLeft> & Excel$Constants__xlLeft & -4131;// -4131
static +xlLeftToRight: Class<Excel$Constants__xlLeftToRight> & Excel$Constants__xlLeftToRight & 2;// 2
static +xlLightDown: Class<Excel$Constants__xlLightDown> & Excel$Constants__xlLightDown & 13;// 13
static +xlLightHorizontal: Class<Excel$Constants__xlLightHorizontal> & Excel$Constants__xlLightHorizontal & 11;// 11
static +xlLightUp: Class<Excel$Constants__xlLightUp> & Excel$Constants__xlLightUp & 14;// 14
static +xlLightVertical: Class<Excel$Constants__xlLightVertical> & Excel$Constants__xlLightVertical & 12;// 12
static +xlList1: Class<Excel$Constants__xlList1> & Excel$Constants__xlList1 & 10;// 10
static +xlList2: Class<Excel$Constants__xlList2> & Excel$Constants__xlList2 & 11;// 11
static +xlList3: Class<Excel$Constants__xlList3> & Excel$Constants__xlList3 & 12;// 12
static +xlLocalFormat1: Class<Excel$Constants__xlLocalFormat1> & Excel$Constants__xlLocalFormat1 & 15;// 15
static +xlLocalFormat2: Class<Excel$Constants__xlLocalFormat2> & Excel$Constants__xlLocalFormat2 & 16;// 16
static +xlLogicalCursor: Class<Excel$Constants__xlLogicalCursor> & Excel$Constants__xlLogicalCursor & 1;// 1
static +xlLong: Class<Excel$Constants__xlLong> & Excel$Constants__xlLong & 3;// 3
static +xlLotusHelp: Class<Excel$Constants__xlLotusHelp> & Excel$Constants__xlLotusHelp & 2;// 2
static +xlLow: Class<Excel$Constants__xlLow> & Excel$Constants__xlLow & -4134;// -4134
static +xlLTR: Class<Excel$Constants__xlLTR> & Excel$Constants__xlLTR & -5003;// -5003
static +xlMacrosheetCell: Class<Excel$Constants__xlMacrosheetCell> & Excel$Constants__xlMacrosheetCell & 7;// 7
static +xlManual: Class<Excel$Constants__xlManual> & Excel$Constants__xlManual & -4135;// -4135
static +xlMaximum: Class<Excel$Constants__xlMaximum> & Excel$Constants__xlMaximum & 2;// 2
static +xlMinimum: Class<Excel$Constants__xlMinimum> & Excel$Constants__xlMinimum & 4;// 4
static +xlMinusValues: Class<Excel$Constants__xlMinusValues> & Excel$Constants__xlMinusValues & 3;// 3
static +xlMixed: Class<Excel$Constants__xlMixed> & Excel$Constants__xlMixed & 2;// 2
static +xlMixedAuthorizedScript: Class<Excel$Constants__xlMixedAuthorizedScript> & Excel$Constants__xlMixedAuthorizedScript & 4;// 4
static +xlMixedScript: Class<Excel$Constants__xlMixedScript> & Excel$Constants__xlMixedScript & 3;// 3
static +xlModule: Class<Excel$Constants__xlModule> & Excel$Constants__xlModule & -4141;// -4141
static +xlMultiply: Class<Excel$Constants__xlMultiply> & Excel$Constants__xlMultiply & 4;// 4
static +xlNarrow: Class<Excel$Constants__xlNarrow> & Excel$Constants__xlNarrow & 1;// 1
static +xlNextToAxis: Class<Excel$Constants__xlNextToAxis> & Excel$Constants__xlNextToAxis & 4;// 4
static +xlNoDocuments: Class<Excel$Constants__xlNoDocuments> & Excel$Constants__xlNoDocuments & 3;// 3
static +xlNone: Class<Excel$Constants__xlNone> & Excel$Constants__xlNone & -4142;// -4142
static +xlNotes: Class<Excel$Constants__xlNotes> & Excel$Constants__xlNotes & -4144;// -4144
static +xlOff: Class<Excel$Constants__xlOff> & Excel$Constants__xlOff & -4146;// -4146
static +xlOn: Class<Excel$Constants__xlOn> & Excel$Constants__xlOn & 1;// 1
static +xlOpaque: Class<Excel$Constants__xlOpaque> & Excel$Constants__xlOpaque & 3;// 3
static +xlOpen: Class<Excel$Constants__xlOpen> & Excel$Constants__xlOpen & 2;// 2
static +xlOutside: Class<Excel$Constants__xlOutside> & Excel$Constants__xlOutside & 3;// 3
static +xlPartial: Class<Excel$Constants__xlPartial> & Excel$Constants__xlPartial & 3;// 3
static +xlPartialScript: Class<Excel$Constants__xlPartialScript> & Excel$Constants__xlPartialScript & 2;// 2
static +xlPercent: Class<Excel$Constants__xlPercent> & Excel$Constants__xlPercent & 2;// 2
static +xlPlus: Class<Excel$Constants__xlPlus> & Excel$Constants__xlPlus & 9;// 9
static +xlPlusValues: Class<Excel$Constants__xlPlusValues> & Excel$Constants__xlPlusValues & 2;// 2
static +xlReference: Class<Excel$Constants__xlReference> & Excel$Constants__xlReference & 4;// 4
static +xlRight: Class<Excel$Constants__xlRight> & Excel$Constants__xlRight & -4152;// -4152
static +xlRTL: Class<Excel$Constants__xlRTL> & Excel$Constants__xlRTL & -5004;// -5004
static +xlScale: Class<Excel$Constants__xlScale> & Excel$Constants__xlScale & 3;// 3
static +xlSemiautomatic: Class<Excel$Constants__xlSemiautomatic> & Excel$Constants__xlSemiautomatic & 2;// 2
static +xlSemiGray75: Class<Excel$Constants__xlSemiGray75> & Excel$Constants__xlSemiGray75 & 10;// 10
static +xlShort: Class<Excel$Constants__xlShort> & Excel$Constants__xlShort & 1;// 1
static +xlShowLabel: Class<Excel$Constants__xlShowLabel> & Excel$Constants__xlShowLabel & 4;// 4
static +xlShowLabelAndPercent: Class<Excel$Constants__xlShowLabelAndPercent> & Excel$Constants__xlShowLabelAndPercent & 5;// 5
static +xlShowPercent: Class<Excel$Constants__xlShowPercent> & Excel$Constants__xlShowPercent & 3;// 3
static +xlShowValue: Class<Excel$Constants__xlShowValue> & Excel$Constants__xlShowValue & 2;// 2
static +xlSimple: Class<Excel$Constants__xlSimple> & Excel$Constants__xlSimple & -4154;// -4154
static +xlSingle: Class<Excel$Constants__xlSingle> & Excel$Constants__xlSingle & 2;// 2
static +xlSingleAccounting: Class<Excel$Constants__xlSingleAccounting> & Excel$Constants__xlSingleAccounting & 4;// 4
static +xlSingleQuote: Class<Excel$Constants__xlSingleQuote> & Excel$Constants__xlSingleQuote & 2;// 2
static +xlSolid: Class<Excel$Constants__xlSolid> & Excel$Constants__xlSolid & 1;// 1
static +xlSquare: Class<Excel$Constants__xlSquare> & Excel$Constants__xlSquare & 1;// 1
static +xlStar: Class<Excel$Constants__xlStar> & Excel$Constants__xlStar & 5;// 5
static +xlStError: Class<Excel$Constants__xlStError> & Excel$Constants__xlStError & 4;// 4
static +xlStrict: Class<Excel$Constants__xlStrict> & Excel$Constants__xlStrict & 2;// 2
static +xlSubtract: Class<Excel$Constants__xlSubtract> & Excel$Constants__xlSubtract & 3;// 3
static +xlSystem: Class<Excel$Constants__xlSystem> & Excel$Constants__xlSystem & 1;// 1
static +xlTextBox: Class<Excel$Constants__xlTextBox> & Excel$Constants__xlTextBox & 16;// 16
static +xlTiled: Class<Excel$Constants__xlTiled> & Excel$Constants__xlTiled & 1;// 1
static +xlTitleBar: Class<Excel$Constants__xlTitleBar> & Excel$Constants__xlTitleBar & 8;// 8
static +xlToolbar: Class<Excel$Constants__xlToolbar> & Excel$Constants__xlToolbar & 1;// 1
static +xlToolbarButton: Class<Excel$Constants__xlToolbarButton> & Excel$Constants__xlToolbarButton & 2;// 2
static +xlTop: Class<Excel$Constants__xlTop> & Excel$Constants__xlTop & -4160;// -4160
static +xlTopToBottom: Class<Excel$Constants__xlTopToBottom> & Excel$Constants__xlTopToBottom & 1;// 1
static +xlTransparent: Class<Excel$Constants__xlTransparent> & Excel$Constants__xlTransparent & 2;// 2
static +xlTriangle: Class<Excel$Constants__xlTriangle> & Excel$Constants__xlTriangle & 3;// 3
static +xlVeryHidden: Class<Excel$Constants__xlVeryHidden> & Excel$Constants__xlVeryHidden & 2;// 2
static +xlVisible: Class<Excel$Constants__xlVisible> & Excel$Constants__xlVisible & 12;// 12
static +xlVisualCursor: Class<Excel$Constants__xlVisualCursor> & Excel$Constants__xlVisualCursor & 2;// 2
static +xlWatchPane: Class<Excel$Constants__xlWatchPane> & Excel$Constants__xlWatchPane & 11;// 11
static +xlWide: Class<Excel$Constants__xlWide> & Excel$Constants__xlWide & 3;// 3
static +xlWorkbookTab: Class<Excel$Constants__xlWorkbookTab> & Excel$Constants__xlWorkbookTab & 6;// 6
static +xlWorksheet4: Class<Excel$Constants__xlWorksheet4> & Excel$Constants__xlWorksheet4 & 1;// 1
static +xlWorksheetCell: Class<Excel$Constants__xlWorksheetCell> & Excel$Constants__xlWorksheetCell & 3;// 3
static +xlWorksheetShort: Class<Excel$Constants__xlWorksheetShort> & Excel$Constants__xlWorksheetShort & 5;// 5

}

declare class Excel$Constants__xl3DBar mixins Excel$Constants {}
declare class Excel$Constants__xl3DEffects1 mixins Excel$Constants {}
declare class Excel$Constants__xl3DEffects2 mixins Excel$Constants {}
declare class Excel$Constants__xl3DSurface mixins Excel$Constants {}
declare class Excel$Constants__xlAbove mixins Excel$Constants {}
declare class Excel$Constants__xlAccounting1 mixins Excel$Constants {}
declare class Excel$Constants__xlAccounting2 mixins Excel$Constants {}
declare class Excel$Constants__xlAccounting3 mixins Excel$Constants {}
declare class Excel$Constants__xlAccounting4 mixins Excel$Constants {}
declare class Excel$Constants__xlAdd mixins Excel$Constants {}
declare class Excel$Constants__xlAll mixins Excel$Constants {}
declare class Excel$Constants__xlAllExceptBorders mixins Excel$Constants {}
declare class Excel$Constants__xlAutomatic mixins Excel$Constants {}
declare class Excel$Constants__xlBar mixins Excel$Constants {}
declare class Excel$Constants__xlBelow mixins Excel$Constants {}
declare class Excel$Constants__xlBidi mixins Excel$Constants {}
declare class Excel$Constants__xlBidiCalendar mixins Excel$Constants {}
declare class Excel$Constants__xlBoth mixins Excel$Constants {}
declare class Excel$Constants__xlBottom mixins Excel$Constants {}
declare class Excel$Constants__xlCascade mixins Excel$Constants {}
declare class Excel$Constants__xlCenter mixins Excel$Constants {}
declare class Excel$Constants__xlCenterAcrossSelection mixins Excel$Constants {}
declare class Excel$Constants__xlChart4 mixins Excel$Constants {}
declare class Excel$Constants__xlChartSeries mixins Excel$Constants {}
declare class Excel$Constants__xlChartShort mixins Excel$Constants {}
declare class Excel$Constants__xlChartTitles mixins Excel$Constants {}
declare class Excel$Constants__xlChecker mixins Excel$Constants {}
declare class Excel$Constants__xlCircle mixins Excel$Constants {}
declare class Excel$Constants__xlClassic1 mixins Excel$Constants {}
declare class Excel$Constants__xlClassic2 mixins Excel$Constants {}
declare class Excel$Constants__xlClassic3 mixins Excel$Constants {}
declare class Excel$Constants__xlClosed mixins Excel$Constants {}
declare class Excel$Constants__xlColor1 mixins Excel$Constants {}
declare class Excel$Constants__xlColor2 mixins Excel$Constants {}
declare class Excel$Constants__xlColor3 mixins Excel$Constants {}
declare class Excel$Constants__xlColumn mixins Excel$Constants {}
declare class Excel$Constants__xlCombination mixins Excel$Constants {}
declare class Excel$Constants__xlComplete mixins Excel$Constants {}
declare class Excel$Constants__xlConstants mixins Excel$Constants {}
declare class Excel$Constants__xlContents mixins Excel$Constants {}
declare class Excel$Constants__xlContext mixins Excel$Constants {}
declare class Excel$Constants__xlCorner mixins Excel$Constants {}
declare class Excel$Constants__xlCrissCross mixins Excel$Constants {}
declare class Excel$Constants__xlCross mixins Excel$Constants {}
declare class Excel$Constants__xlCustom mixins Excel$Constants {}
declare class Excel$Constants__xlDebugCodePane mixins Excel$Constants {}
declare class Excel$Constants__xlDefaultAutoFormat mixins Excel$Constants {}
declare class Excel$Constants__xlDesktop mixins Excel$Constants {}
declare class Excel$Constants__xlDiamond mixins Excel$Constants {}
declare class Excel$Constants__xlDirect mixins Excel$Constants {}
declare class Excel$Constants__xlDistributed mixins Excel$Constants {}
declare class Excel$Constants__xlDivide mixins Excel$Constants {}
declare class Excel$Constants__xlDoubleAccounting mixins Excel$Constants {}
declare class Excel$Constants__xlDoubleClosed mixins Excel$Constants {}
declare class Excel$Constants__xlDoubleOpen mixins Excel$Constants {}
declare class Excel$Constants__xlDoubleQuote mixins Excel$Constants {}
declare class Excel$Constants__xlDrawingObject mixins Excel$Constants {}
declare class Excel$Constants__xlEntireChart mixins Excel$Constants {}
declare class Excel$Constants__xlExcelMenus mixins Excel$Constants {}
declare class Excel$Constants__xlExtended mixins Excel$Constants {}
declare class Excel$Constants__xlFill mixins Excel$Constants {}
declare class Excel$Constants__xlFirst mixins Excel$Constants {}
declare class Excel$Constants__xlFixedValue mixins Excel$Constants {}
declare class Excel$Constants__xlFloating mixins Excel$Constants {}
declare class Excel$Constants__xlFormats mixins Excel$Constants {}
declare class Excel$Constants__xlFormula mixins Excel$Constants {}
declare class Excel$Constants__xlFullScript mixins Excel$Constants {}
declare class Excel$Constants__xlGeneral mixins Excel$Constants {}
declare class Excel$Constants__xlGray16 mixins Excel$Constants {}
declare class Excel$Constants__xlGray25 mixins Excel$Constants {}
declare class Excel$Constants__xlGray50 mixins Excel$Constants {}
declare class Excel$Constants__xlGray75 mixins Excel$Constants {}
declare class Excel$Constants__xlGray8 mixins Excel$Constants {}
declare class Excel$Constants__xlGregorian mixins Excel$Constants {}
declare class Excel$Constants__xlGrid mixins Excel$Constants {}
declare class Excel$Constants__xlGridline mixins Excel$Constants {}
declare class Excel$Constants__xlHigh mixins Excel$Constants {}
declare class Excel$Constants__xlHindiNumerals mixins Excel$Constants {}
declare class Excel$Constants__xlIcons mixins Excel$Constants {}
declare class Excel$Constants__xlImmediatePane mixins Excel$Constants {}
declare class Excel$Constants__xlInside mixins Excel$Constants {}
declare class Excel$Constants__xlInteger mixins Excel$Constants {}
declare class Excel$Constants__xlJustify mixins Excel$Constants {}
declare class Excel$Constants__xlLast mixins Excel$Constants {}
declare class Excel$Constants__xlLastCell mixins Excel$Constants {}
declare class Excel$Constants__xlLatin mixins Excel$Constants {}
declare class Excel$Constants__xlLeft mixins Excel$Constants {}
declare class Excel$Constants__xlLeftToRight mixins Excel$Constants {}
declare class Excel$Constants__xlLightDown mixins Excel$Constants {}
declare class Excel$Constants__xlLightHorizontal mixins Excel$Constants {}
declare class Excel$Constants__xlLightUp mixins Excel$Constants {}
declare class Excel$Constants__xlLightVertical mixins Excel$Constants {}
declare class Excel$Constants__xlList1 mixins Excel$Constants {}
declare class Excel$Constants__xlList2 mixins Excel$Constants {}
declare class Excel$Constants__xlList3 mixins Excel$Constants {}
declare class Excel$Constants__xlLocalFormat1 mixins Excel$Constants {}
declare class Excel$Constants__xlLocalFormat2 mixins Excel$Constants {}
declare class Excel$Constants__xlLogicalCursor mixins Excel$Constants {}
declare class Excel$Constants__xlLong mixins Excel$Constants {}
declare class Excel$Constants__xlLotusHelp mixins Excel$Constants {}
declare class Excel$Constants__xlLow mixins Excel$Constants {}
declare class Excel$Constants__xlLTR mixins Excel$Constants {}
declare class Excel$Constants__xlMacrosheetCell mixins Excel$Constants {}
declare class Excel$Constants__xlManual mixins Excel$Constants {}
declare class Excel$Constants__xlMaximum mixins Excel$Constants {}
declare class Excel$Constants__xlMinimum mixins Excel$Constants {}
declare class Excel$Constants__xlMinusValues mixins Excel$Constants {}
declare class Excel$Constants__xlMixed mixins Excel$Constants {}
declare class Excel$Constants__xlMixedAuthorizedScript mixins Excel$Constants {}
declare class Excel$Constants__xlMixedScript mixins Excel$Constants {}
declare class Excel$Constants__xlModule mixins Excel$Constants {}
declare class Excel$Constants__xlMultiply mixins Excel$Constants {}
declare class Excel$Constants__xlNarrow mixins Excel$Constants {}
declare class Excel$Constants__xlNextToAxis mixins Excel$Constants {}
declare class Excel$Constants__xlNoDocuments mixins Excel$Constants {}
declare class Excel$Constants__xlNone mixins Excel$Constants {}
declare class Excel$Constants__xlNotes mixins Excel$Constants {}
declare class Excel$Constants__xlOff mixins Excel$Constants {}
declare class Excel$Constants__xlOn mixins Excel$Constants {}
declare class Excel$Constants__xlOpaque mixins Excel$Constants {}
declare class Excel$Constants__xlOpen mixins Excel$Constants {}
declare class Excel$Constants__xlOutside mixins Excel$Constants {}
declare class Excel$Constants__xlPartial mixins Excel$Constants {}
declare class Excel$Constants__xlPartialScript mixins Excel$Constants {}
declare class Excel$Constants__xlPercent mixins Excel$Constants {}
declare class Excel$Constants__xlPlus mixins Excel$Constants {}
declare class Excel$Constants__xlPlusValues mixins Excel$Constants {}
declare class Excel$Constants__xlReference mixins Excel$Constants {}
declare class Excel$Constants__xlRight mixins Excel$Constants {}
declare class Excel$Constants__xlRTL mixins Excel$Constants {}
declare class Excel$Constants__xlScale mixins Excel$Constants {}
declare class Excel$Constants__xlSemiautomatic mixins Excel$Constants {}
declare class Excel$Constants__xlSemiGray75 mixins Excel$Constants {}
declare class Excel$Constants__xlShort mixins Excel$Constants {}
declare class Excel$Constants__xlShowLabel mixins Excel$Constants {}
declare class Excel$Constants__xlShowLabelAndPercent mixins Excel$Constants {}
declare class Excel$Constants__xlShowPercent mixins Excel$Constants {}
declare class Excel$Constants__xlShowValue mixins Excel$Constants {}
declare class Excel$Constants__xlSimple mixins Excel$Constants {}
declare class Excel$Constants__xlSingle mixins Excel$Constants {}
declare class Excel$Constants__xlSingleAccounting mixins Excel$Constants {}
declare class Excel$Constants__xlSingleQuote mixins Excel$Constants {}
declare class Excel$Constants__xlSolid mixins Excel$Constants {}
declare class Excel$Constants__xlSquare mixins Excel$Constants {}
declare class Excel$Constants__xlStar mixins Excel$Constants {}
declare class Excel$Constants__xlStError mixins Excel$Constants {}
declare class Excel$Constants__xlStrict mixins Excel$Constants {}
declare class Excel$Constants__xlSubtract mixins Excel$Constants {}
declare class Excel$Constants__xlSystem mixins Excel$Constants {}
declare class Excel$Constants__xlTextBox mixins Excel$Constants {}
declare class Excel$Constants__xlTiled mixins Excel$Constants {}
declare class Excel$Constants__xlTitleBar mixins Excel$Constants {}
declare class Excel$Constants__xlToolbar mixins Excel$Constants {}
declare class Excel$Constants__xlToolbarButton mixins Excel$Constants {}
declare class Excel$Constants__xlTop mixins Excel$Constants {}
declare class Excel$Constants__xlTopToBottom mixins Excel$Constants {}
declare class Excel$Constants__xlTransparent mixins Excel$Constants {}
declare class Excel$Constants__xlTriangle mixins Excel$Constants {}
declare class Excel$Constants__xlVeryHidden mixins Excel$Constants {}
declare class Excel$Constants__xlVisible mixins Excel$Constants {}
declare class Excel$Constants__xlVisualCursor mixins Excel$Constants {}
declare class Excel$Constants__xlWatchPane mixins Excel$Constants {}
declare class Excel$Constants__xlWide mixins Excel$Constants {}
declare class Excel$Constants__xlWorkbookTab mixins Excel$Constants {}
declare class Excel$Constants__xlWorksheet4 mixins Excel$Constants {}
declare class Excel$Constants__xlWorksheetCell mixins Excel$Constants {}
declare class Excel$Constants__xlWorksheetShort mixins Excel$Constants {}


declare  class Excel$FunctionCategory {
  constructor(...args: empty): mixed;
static +Commands: Class<Excel$FunctionCategory__Commands> & Excel$FunctionCategory__Commands & 10;// 10
static +Customizing: Class<Excel$FunctionCategory__Customizing> & Excel$FunctionCategory__Customizing & 11;// 11
static +Database: Class<Excel$FunctionCategory__Database> & Excel$FunctionCategory__Database & 6;// 6
static +DateAndTime: Class<Excel$FunctionCategory__DateAndTime> & Excel$FunctionCategory__DateAndTime & 2;// 2
static +DDEAndExternal: Class<Excel$FunctionCategory__DDEAndExternal> & Excel$FunctionCategory__DDEAndExternal & 13;// 13
static +Financial: Class<Excel$FunctionCategory__Financial> & Excel$FunctionCategory__Financial & 1;// 1
static +Information: Class<Excel$FunctionCategory__Information> & Excel$FunctionCategory__Information & 9;// 9
static +Logical: Class<Excel$FunctionCategory__Logical> & Excel$FunctionCategory__Logical & 8;// 8
static +LookupAndReference: Class<Excel$FunctionCategory__LookupAndReference> & Excel$FunctionCategory__LookupAndReference & 5;// 5
static +MacroControl: Class<Excel$FunctionCategory__MacroControl> & Excel$FunctionCategory__MacroControl & 12;// 12
static +MathAndTrig: Class<Excel$FunctionCategory__MathAndTrig> & Excel$FunctionCategory__MathAndTrig & 3;// 3
static +Statistical: Class<Excel$FunctionCategory__Statistical> & Excel$FunctionCategory__Statistical & 4;// 4
static +Text: Class<Excel$FunctionCategory__Text> & Excel$FunctionCategory__Text & 7;// 7
static +UserDefined: Class<Excel$FunctionCategory__UserDefined> & Excel$FunctionCategory__UserDefined & 14;// 14

}

declare class Excel$FunctionCategory__Commands mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Customizing mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Database mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__DateAndTime mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__DDEAndExternal mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Financial mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Information mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Logical mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__LookupAndReference mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__MacroControl mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__MathAndTrig mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Statistical mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__Text mixins Excel$FunctionCategory {}
declare class Excel$FunctionCategory__UserDefined mixins Excel$FunctionCategory {}


declare  class Excel$InputBoxReturnType {
  constructor(...args: empty): mixed;
static +Formula: Class<Excel$InputBoxReturnType__Formula> & Excel$InputBoxReturnType__Formula & 0;// 0
static +Number: Class<Excel$InputBoxReturnType__Number> & Excel$InputBoxReturnType__Number & 1;// 1
static +String: Class<Excel$InputBoxReturnType__String> & Excel$InputBoxReturnType__String & 2;// 2
static +Boolean: Class<Excel$InputBoxReturnType__Boolean> & Excel$InputBoxReturnType__Boolean & 4;// 4
static +Range: Class<Excel$InputBoxReturnType__Range> & Excel$InputBoxReturnType__Range & 8;// 8
static +ErrorValue: Class<Excel$InputBoxReturnType__ErrorValue> & Excel$InputBoxReturnType__ErrorValue & 16;// 16
static +SafeArray: Class<Excel$InputBoxReturnType__SafeArray> & Excel$InputBoxReturnType__SafeArray & 64;// 64

}

declare class Excel$InputBoxReturnType__Formula mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__Number mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__String mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__Boolean mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__Range mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__ErrorValue mixins Excel$InputBoxReturnType {}
declare class Excel$InputBoxReturnType__SafeArray mixins Excel$InputBoxReturnType {}


declare  class Excel$PivotFieldSubtotal {
  constructor(...args: empty): mixed;
static +Automatic: Class<Excel$PivotFieldSubtotal__Automatic> & Excel$PivotFieldSubtotal__Automatic & 1;// 1
static +Average: Class<Excel$PivotFieldSubtotal__Average> & Excel$PivotFieldSubtotal__Average & 4;// 4
static +Count: Class<Excel$PivotFieldSubtotal__Count> & Excel$PivotFieldSubtotal__Count & 3;// 3
static +CountNums: Class<Excel$PivotFieldSubtotal__CountNums> & Excel$PivotFieldSubtotal__CountNums & 8;// 8
static +Max: Class<Excel$PivotFieldSubtotal__Max> & Excel$PivotFieldSubtotal__Max & 5;// 5
static +Min: Class<Excel$PivotFieldSubtotal__Min> & Excel$PivotFieldSubtotal__Min & 6;// 6
static +Product: Class<Excel$PivotFieldSubtotal__Product> & Excel$PivotFieldSubtotal__Product & 7;// 7
static +StdDev: Class<Excel$PivotFieldSubtotal__StdDev> & Excel$PivotFieldSubtotal__StdDev & 9;// 9
static +StdDevp: Class<Excel$PivotFieldSubtotal__StdDevp> & Excel$PivotFieldSubtotal__StdDevp & 10;// 10
static +Sum: Class<Excel$PivotFieldSubtotal__Sum> & Excel$PivotFieldSubtotal__Sum & 2;// 2
static +Var: Class<Excel$PivotFieldSubtotal__Var> & Excel$PivotFieldSubtotal__Var & 11;// 11
static +Varp: Class<Excel$PivotFieldSubtotal__Varp> & Excel$PivotFieldSubtotal__Varp & 12;// 12

}

declare class Excel$PivotFieldSubtotal__Automatic mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Average mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Count mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__CountNums mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Max mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Min mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Product mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__StdDev mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__StdDevp mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Sum mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Var mixins Excel$PivotFieldSubtotal {}
declare class Excel$PivotFieldSubtotal__Varp mixins Excel$PivotFieldSubtotal {}


declare  class Excel$XlAboveBelow {
  constructor(...args: empty): mixed;
static +xlAboveAverage: Class<Excel$XlAboveBelow__xlAboveAverage> & Excel$XlAboveBelow__xlAboveAverage & 0;// 0
static +xlAboveStdDev: Class<Excel$XlAboveBelow__xlAboveStdDev> & Excel$XlAboveBelow__xlAboveStdDev & 4;// 4
static +xlBelowAverage: Class<Excel$XlAboveBelow__xlBelowAverage> & Excel$XlAboveBelow__xlBelowAverage & 1;// 1
static +xlBelowStdDev: Class<Excel$XlAboveBelow__xlBelowStdDev> & Excel$XlAboveBelow__xlBelowStdDev & 5;// 5
static +xlEqualAboveAverage: Class<Excel$XlAboveBelow__xlEqualAboveAverage> & Excel$XlAboveBelow__xlEqualAboveAverage & 2;// 2
static +xlEqualBelowAverage: Class<Excel$XlAboveBelow__xlEqualBelowAverage> & Excel$XlAboveBelow__xlEqualBelowAverage & 3;// 3

}

declare class Excel$XlAboveBelow__xlAboveAverage mixins Excel$XlAboveBelow {}
declare class Excel$XlAboveBelow__xlAboveStdDev mixins Excel$XlAboveBelow {}
declare class Excel$XlAboveBelow__xlBelowAverage mixins Excel$XlAboveBelow {}
declare class Excel$XlAboveBelow__xlBelowStdDev mixins Excel$XlAboveBelow {}
declare class Excel$XlAboveBelow__xlEqualAboveAverage mixins Excel$XlAboveBelow {}
declare class Excel$XlAboveBelow__xlEqualBelowAverage mixins Excel$XlAboveBelow {}


declare  class Excel$XlActionType {
  constructor(...args: empty): mixed;
static +xlActionTypeDrillthrough: Class<Excel$XlActionType__xlActionTypeDrillthrough> & Excel$XlActionType__xlActionTypeDrillthrough & 256;// 256
static +xlActionTypeReport: Class<Excel$XlActionType__xlActionTypeReport> & Excel$XlActionType__xlActionTypeReport & 128;// 128
static +xlActionTypeRowset: Class<Excel$XlActionType__xlActionTypeRowset> & Excel$XlActionType__xlActionTypeRowset & 16;// 16
static +xlActionTypeUrl: Class<Excel$XlActionType__xlActionTypeUrl> & Excel$XlActionType__xlActionTypeUrl & 1;// 1

}

declare class Excel$XlActionType__xlActionTypeDrillthrough mixins Excel$XlActionType {}
declare class Excel$XlActionType__xlActionTypeReport mixins Excel$XlActionType {}
declare class Excel$XlActionType__xlActionTypeRowset mixins Excel$XlActionType {}
declare class Excel$XlActionType__xlActionTypeUrl mixins Excel$XlActionType {}


declare  class Excel$XlAllocation {
  constructor(...args: empty): mixed;
static +xlAutomaticAllocation: Class<Excel$XlAllocation__xlAutomaticAllocation> & Excel$XlAllocation__xlAutomaticAllocation & 2;// 2
static +xlManualAllocation: Class<Excel$XlAllocation__xlManualAllocation> & Excel$XlAllocation__xlManualAllocation & 1;// 1

}

declare class Excel$XlAllocation__xlAutomaticAllocation mixins Excel$XlAllocation {}
declare class Excel$XlAllocation__xlManualAllocation mixins Excel$XlAllocation {}


declare  class Excel$XlAllocationMethod {
  constructor(...args: empty): mixed;
static +xlEqualAllocation: Class<Excel$XlAllocationMethod__xlEqualAllocation> & Excel$XlAllocationMethod__xlEqualAllocation & 1;// 1
static +xlWeightedAllocation: Class<Excel$XlAllocationMethod__xlWeightedAllocation> & Excel$XlAllocationMethod__xlWeightedAllocation & 2;// 2

}

declare class Excel$XlAllocationMethod__xlEqualAllocation mixins Excel$XlAllocationMethod {}
declare class Excel$XlAllocationMethod__xlWeightedAllocation mixins Excel$XlAllocationMethod {}


declare  class Excel$XlAllocationValue {
  constructor(...args: empty): mixed;
static +xlAllocateIncrement: Class<Excel$XlAllocationValue__xlAllocateIncrement> & Excel$XlAllocationValue__xlAllocateIncrement & 2;// 2
static +xlAllocateValue: Class<Excel$XlAllocationValue__xlAllocateValue> & Excel$XlAllocationValue__xlAllocateValue & 1;// 1

}

declare class Excel$XlAllocationValue__xlAllocateIncrement mixins Excel$XlAllocationValue {}
declare class Excel$XlAllocationValue__xlAllocateValue mixins Excel$XlAllocationValue {}


declare  class Excel$XlApplicationInternationalStrings {
  constructor(...args: empty): mixed;
static +xlAlternateArraySeparator: Class<Excel$XlApplicationInternationalStrings__xlAlternateArraySeparator> & Excel$XlApplicationInternationalStrings__xlAlternateArraySeparator & 16;// 16
static +xlColumnSeparator: Class<Excel$XlApplicationInternationalStrings__xlColumnSeparator> & Excel$XlApplicationInternationalStrings__xlColumnSeparator & 14;// 14
static +xlCurrencyCode: Class<Excel$XlApplicationInternationalStrings__xlCurrencyCode> & Excel$XlApplicationInternationalStrings__xlCurrencyCode & 25;// 25
static +xlDecimalSeparator: Class<Excel$XlApplicationInternationalStrings__xlDecimalSeparator> & Excel$XlApplicationInternationalStrings__xlDecimalSeparator & 3;// 3
static +xlGeneralFormatName: Class<Excel$XlApplicationInternationalStrings__xlGeneralFormatName> & Excel$XlApplicationInternationalStrings__xlGeneralFormatName & 26;// 26
static +xlLeftBrace: Class<Excel$XlApplicationInternationalStrings__xlLeftBrace> & Excel$XlApplicationInternationalStrings__xlLeftBrace & 12;// 12
static +xlLeftBracket: Class<Excel$XlApplicationInternationalStrings__xlLeftBracket> & Excel$XlApplicationInternationalStrings__xlLeftBracket & 10;// 10
static +xlListSeparator: Class<Excel$XlApplicationInternationalStrings__xlListSeparator> & Excel$XlApplicationInternationalStrings__xlListSeparator & 5;// 5
static +xlLowerCaseColumnLetter: Class<Excel$XlApplicationInternationalStrings__xlLowerCaseColumnLetter> & Excel$XlApplicationInternationalStrings__xlLowerCaseColumnLetter & 9;// 9
static +xlLowerCaseRowLetter: Class<Excel$XlApplicationInternationalStrings__xlLowerCaseRowLetter> & Excel$XlApplicationInternationalStrings__xlLowerCaseRowLetter & 8;// 8
static +xlRightBrace: Class<Excel$XlApplicationInternationalStrings__xlRightBrace> & Excel$XlApplicationInternationalStrings__xlRightBrace & 13;// 13
static +xlRightBracket: Class<Excel$XlApplicationInternationalStrings__xlRightBracket> & Excel$XlApplicationInternationalStrings__xlRightBracket & 11;// 11
static +xlUpperCaseColumnLetter: Class<Excel$XlApplicationInternationalStrings__xlUpperCaseColumnLetter> & Excel$XlApplicationInternationalStrings__xlUpperCaseColumnLetter & 7;// 7
static +xlUpperCaseRowLetter: Class<Excel$XlApplicationInternationalStrings__xlUpperCaseRowLetter> & Excel$XlApplicationInternationalStrings__xlUpperCaseRowLetter & 6;// 6
static +xlDateSeparator: Class<Excel$XlApplicationInternationalStrings__xlDateSeparator> & Excel$XlApplicationInternationalStrings__xlDateSeparator & 17;// 17
static +xlDayCode: Class<Excel$XlApplicationInternationalStrings__xlDayCode> & Excel$XlApplicationInternationalStrings__xlDayCode & 21;// 21
static +xlHourCode: Class<Excel$XlApplicationInternationalStrings__xlHourCode> & Excel$XlApplicationInternationalStrings__xlHourCode & 22;// 22
static +xlMinuteCode: Class<Excel$XlApplicationInternationalStrings__xlMinuteCode> & Excel$XlApplicationInternationalStrings__xlMinuteCode & 23;// 23
static +xlMonthCode: Class<Excel$XlApplicationInternationalStrings__xlMonthCode> & Excel$XlApplicationInternationalStrings__xlMonthCode & 20;// 20
static +xlRowSeparator: Class<Excel$XlApplicationInternationalStrings__xlRowSeparator> & Excel$XlApplicationInternationalStrings__xlRowSeparator & 15;// 15
static +xlSecondCode: Class<Excel$XlApplicationInternationalStrings__xlSecondCode> & Excel$XlApplicationInternationalStrings__xlSecondCode & 24;// 24
static +xlThousandsSeparator: Class<Excel$XlApplicationInternationalStrings__xlThousandsSeparator> & Excel$XlApplicationInternationalStrings__xlThousandsSeparator & 4;// 4
static +xlTimeSeparator: Class<Excel$XlApplicationInternationalStrings__xlTimeSeparator> & Excel$XlApplicationInternationalStrings__xlTimeSeparator & 18;// 18
static +xlYearCode: Class<Excel$XlApplicationInternationalStrings__xlYearCode> & Excel$XlApplicationInternationalStrings__xlYearCode & 19;// 19

}

declare class Excel$XlApplicationInternationalStrings__xlAlternateArraySeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlColumnSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlCurrencyCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlDecimalSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlGeneralFormatName mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlLeftBrace mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlLeftBracket mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlListSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlLowerCaseColumnLetter mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlLowerCaseRowLetter mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlRightBrace mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlRightBracket mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlUpperCaseColumnLetter mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlUpperCaseRowLetter mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlDateSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlDayCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlHourCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlMinuteCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlMonthCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlRowSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlSecondCode mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlThousandsSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlTimeSeparator mixins Excel$XlApplicationInternationalStrings {}
declare class Excel$XlApplicationInternationalStrings__xlYearCode mixins Excel$XlApplicationInternationalStrings {}


declare  class Excel$XlApplicationInternationalNumbers {
  constructor(...args: empty): mixed;
static +xlCountryCode: Class<Excel$XlApplicationInternationalNumbers__xlCountryCode> & Excel$XlApplicationInternationalNumbers__xlCountryCode & 1;// 1
static +xlCountrySetting: Class<Excel$XlApplicationInternationalNumbers__xlCountrySetting> & Excel$XlApplicationInternationalNumbers__xlCountrySetting & 2;// 2
static +xlCurrencyDigits: Class<Excel$XlApplicationInternationalNumbers__xlCurrencyDigits> & Excel$XlApplicationInternationalNumbers__xlCurrencyDigits & 27;// 27
static +xlCurrencyNegative: Class<Excel$XlApplicationInternationalNumbers__xlCurrencyNegative> & Excel$XlApplicationInternationalNumbers__xlCurrencyNegative & 28;// 28
static +xlNoncurrencyDigits: Class<Excel$XlApplicationInternationalNumbers__xlNoncurrencyDigits> & Excel$XlApplicationInternationalNumbers__xlNoncurrencyDigits & 29;// 29
static +xlDateOrder: Class<Excel$XlApplicationInternationalNumbers__xlDateOrder> & Excel$XlApplicationInternationalNumbers__xlDateOrder & 32;// 32
static +xlMonthNameChars: Class<Excel$XlApplicationInternationalNumbers__xlMonthNameChars> & Excel$XlApplicationInternationalNumbers__xlMonthNameChars & 30;// 30
static +xlWeekdayNameChars: Class<Excel$XlApplicationInternationalNumbers__xlWeekdayNameChars> & Excel$XlApplicationInternationalNumbers__xlWeekdayNameChars & 31;// 31

}

declare class Excel$XlApplicationInternationalNumbers__xlCountryCode mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlCountrySetting mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlCurrencyDigits mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlCurrencyNegative mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlNoncurrencyDigits mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlDateOrder mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlMonthNameChars mixins Excel$XlApplicationInternationalNumbers {}
declare class Excel$XlApplicationInternationalNumbers__xlWeekdayNameChars mixins Excel$XlApplicationInternationalNumbers {}


declare  class Excel$XlApplicationInternationalBooleans {
  constructor(...args: empty): mixed;
static +xl24HourClock: Class<Excel$XlApplicationInternationalBooleans__xl24HourClock> & Excel$XlApplicationInternationalBooleans__xl24HourClock & 33;// 33
static +xl4DigitYears: Class<Excel$XlApplicationInternationalBooleans__xl4DigitYears> & Excel$XlApplicationInternationalBooleans__xl4DigitYears & 43;// 43
static +xlCurrencyBefore: Class<Excel$XlApplicationInternationalBooleans__xlCurrencyBefore> & Excel$XlApplicationInternationalBooleans__xlCurrencyBefore & 37;// 37
static +xlCurrencyLeadingZeros: Class<Excel$XlApplicationInternationalBooleans__xlCurrencyLeadingZeros> & Excel$XlApplicationInternationalBooleans__xlCurrencyLeadingZeros & 40;// 40
static +xlCurrencyMinusSign: Class<Excel$XlApplicationInternationalBooleans__xlCurrencyMinusSign> & Excel$XlApplicationInternationalBooleans__xlCurrencyMinusSign & 38;// 38
static +xlCurrencySpaceBefore: Class<Excel$XlApplicationInternationalBooleans__xlCurrencySpaceBefore> & Excel$XlApplicationInternationalBooleans__xlCurrencySpaceBefore & 36;// 36
static +xlCurrencyTrailingZeros: Class<Excel$XlApplicationInternationalBooleans__xlCurrencyTrailingZeros> & Excel$XlApplicationInternationalBooleans__xlCurrencyTrailingZeros & 39;// 39
static +xlDayLeadingZero: Class<Excel$XlApplicationInternationalBooleans__xlDayLeadingZero> & Excel$XlApplicationInternationalBooleans__xlDayLeadingZero & 42;// 42
static +xlMDY: Class<Excel$XlApplicationInternationalBooleans__xlMDY> & Excel$XlApplicationInternationalBooleans__xlMDY & 44;// 44
static +xlMetric: Class<Excel$XlApplicationInternationalBooleans__xlMetric> & Excel$XlApplicationInternationalBooleans__xlMetric & 35;// 35
static +xlMonthLeadingZero: Class<Excel$XlApplicationInternationalBooleans__xlMonthLeadingZero> & Excel$XlApplicationInternationalBooleans__xlMonthLeadingZero & 41;// 41
static +xlNonEnglishFunctions: Class<Excel$XlApplicationInternationalBooleans__xlNonEnglishFunctions> & Excel$XlApplicationInternationalBooleans__xlNonEnglishFunctions & 34;// 34
static +xlTimeLeadingZero: Class<Excel$XlApplicationInternationalBooleans__xlTimeLeadingZero> & Excel$XlApplicationInternationalBooleans__xlTimeLeadingZero & 45;// 45

}

declare class Excel$XlApplicationInternationalBooleans__xl24HourClock mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xl4DigitYears mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlCurrencyBefore mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlCurrencyLeadingZeros mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlCurrencyMinusSign mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlCurrencySpaceBefore mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlCurrencyTrailingZeros mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlDayLeadingZero mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlMDY mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlMetric mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlMonthLeadingZero mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlNonEnglishFunctions mixins Excel$XlApplicationInternationalBooleans {}
declare class Excel$XlApplicationInternationalBooleans__xlTimeLeadingZero mixins Excel$XlApplicationInternationalBooleans {}


declare type Excel$XlApplicationInternational = Excel$XlApplicationInternationalStrings | Excel$XlApplicationInternationalNumbers | Excel$XlApplicationInternationalBooleans;

declare  class Excel$XlApplyNamesOrder {
  constructor(...args: empty): mixed;
static +xlColumnThenRow: Class<Excel$XlApplyNamesOrder__xlColumnThenRow> & Excel$XlApplyNamesOrder__xlColumnThenRow & 2;// 2
static +xlRowThenColumn: Class<Excel$XlApplyNamesOrder__xlRowThenColumn> & Excel$XlApplyNamesOrder__xlRowThenColumn & 1;// 1

}

declare class Excel$XlApplyNamesOrder__xlColumnThenRow mixins Excel$XlApplyNamesOrder {}
declare class Excel$XlApplyNamesOrder__xlRowThenColumn mixins Excel$XlApplyNamesOrder {}


declare  class Excel$XlArabicModes {
  constructor(...args: empty): mixed;
static +xlArabicBothStrict: Class<Excel$XlArabicModes__xlArabicBothStrict> & Excel$XlArabicModes__xlArabicBothStrict & 3;// 3
static +xlArabicNone: Class<Excel$XlArabicModes__xlArabicNone> & Excel$XlArabicModes__xlArabicNone & 0;// 0
static +xlArabicStrictAlefHamza: Class<Excel$XlArabicModes__xlArabicStrictAlefHamza> & Excel$XlArabicModes__xlArabicStrictAlefHamza & 1;// 1
static +xlArabicStrictFinalYaa: Class<Excel$XlArabicModes__xlArabicStrictFinalYaa> & Excel$XlArabicModes__xlArabicStrictFinalYaa & 2;// 2

}

declare class Excel$XlArabicModes__xlArabicBothStrict mixins Excel$XlArabicModes {}
declare class Excel$XlArabicModes__xlArabicNone mixins Excel$XlArabicModes {}
declare class Excel$XlArabicModes__xlArabicStrictAlefHamza mixins Excel$XlArabicModes {}
declare class Excel$XlArabicModes__xlArabicStrictFinalYaa mixins Excel$XlArabicModes {}


declare  class Excel$XlArrangeStyle {
  constructor(...args: empty): mixed;
static +xlArrangeStyleCascade: Class<Excel$XlArrangeStyle__xlArrangeStyleCascade> & Excel$XlArrangeStyle__xlArrangeStyleCascade & 7;// 7
static +xlArrangeStyleHorizontal: Class<Excel$XlArrangeStyle__xlArrangeStyleHorizontal> & Excel$XlArrangeStyle__xlArrangeStyleHorizontal & -4128;// -4128
static +xlArrangeStyleTiled: Class<Excel$XlArrangeStyle__xlArrangeStyleTiled> & Excel$XlArrangeStyle__xlArrangeStyleTiled & 1;// 1
static +xlArrangeStyleVertical: Class<Excel$XlArrangeStyle__xlArrangeStyleVertical> & Excel$XlArrangeStyle__xlArrangeStyleVertical & -4166;// -4166

}

declare class Excel$XlArrangeStyle__xlArrangeStyleCascade mixins Excel$XlArrangeStyle {}
declare class Excel$XlArrangeStyle__xlArrangeStyleHorizontal mixins Excel$XlArrangeStyle {}
declare class Excel$XlArrangeStyle__xlArrangeStyleTiled mixins Excel$XlArrangeStyle {}
declare class Excel$XlArrangeStyle__xlArrangeStyleVertical mixins Excel$XlArrangeStyle {}


declare  class Excel$XlArrowHeadLength {
  constructor(...args: empty): mixed;
static +xlArrowHeadLengthLong: Class<Excel$XlArrowHeadLength__xlArrowHeadLengthLong> & Excel$XlArrowHeadLength__xlArrowHeadLengthLong & 3;// 3
static +xlArrowHeadLengthMedium: Class<Excel$XlArrowHeadLength__xlArrowHeadLengthMedium> & Excel$XlArrowHeadLength__xlArrowHeadLengthMedium & -4138;// -4138
static +xlArrowHeadLengthShort: Class<Excel$XlArrowHeadLength__xlArrowHeadLengthShort> & Excel$XlArrowHeadLength__xlArrowHeadLengthShort & 1;// 1

}

declare class Excel$XlArrowHeadLength__xlArrowHeadLengthLong mixins Excel$XlArrowHeadLength {}
declare class Excel$XlArrowHeadLength__xlArrowHeadLengthMedium mixins Excel$XlArrowHeadLength {}
declare class Excel$XlArrowHeadLength__xlArrowHeadLengthShort mixins Excel$XlArrowHeadLength {}


declare  class Excel$XlArrowHeadStyle {
  constructor(...args: empty): mixed;
static +xlArrowHeadStyleClosed: Class<Excel$XlArrowHeadStyle__xlArrowHeadStyleClosed> & Excel$XlArrowHeadStyle__xlArrowHeadStyleClosed & 3;// 3
static +xlArrowHeadStyleDoubleClosed: Class<Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleClosed> & Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleClosed & 5;// 5
static +xlArrowHeadStyleDoubleOpen: Class<Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleOpen> & Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleOpen & 4;// 4
static +xlArrowHeadStyleNone: Class<Excel$XlArrowHeadStyle__xlArrowHeadStyleNone> & Excel$XlArrowHeadStyle__xlArrowHeadStyleNone & -4142;// -4142
static +xlArrowHeadStyleOpen: Class<Excel$XlArrowHeadStyle__xlArrowHeadStyleOpen> & Excel$XlArrowHeadStyle__xlArrowHeadStyleOpen & 2;// 2

}

declare class Excel$XlArrowHeadStyle__xlArrowHeadStyleClosed mixins Excel$XlArrowHeadStyle {}
declare class Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleClosed mixins Excel$XlArrowHeadStyle {}
declare class Excel$XlArrowHeadStyle__xlArrowHeadStyleDoubleOpen mixins Excel$XlArrowHeadStyle {}
declare class Excel$XlArrowHeadStyle__xlArrowHeadStyleNone mixins Excel$XlArrowHeadStyle {}
declare class Excel$XlArrowHeadStyle__xlArrowHeadStyleOpen mixins Excel$XlArrowHeadStyle {}


declare  class Excel$XlArrowHeadWidth {
  constructor(...args: empty): mixed;
static +xlArrowHeadWidthMedium: Class<Excel$XlArrowHeadWidth__xlArrowHeadWidthMedium> & Excel$XlArrowHeadWidth__xlArrowHeadWidthMedium & -4138;// -4138
static +xlArrowHeadWidthNarrow: Class<Excel$XlArrowHeadWidth__xlArrowHeadWidthNarrow> & Excel$XlArrowHeadWidth__xlArrowHeadWidthNarrow & 1;// 1
static +xlArrowHeadWidthWide: Class<Excel$XlArrowHeadWidth__xlArrowHeadWidthWide> & Excel$XlArrowHeadWidth__xlArrowHeadWidthWide & 3;// 3

}

declare class Excel$XlArrowHeadWidth__xlArrowHeadWidthMedium mixins Excel$XlArrowHeadWidth {}
declare class Excel$XlArrowHeadWidth__xlArrowHeadWidthNarrow mixins Excel$XlArrowHeadWidth {}
declare class Excel$XlArrowHeadWidth__xlArrowHeadWidthWide mixins Excel$XlArrowHeadWidth {}


declare  class Excel$XlAutoFillType {
  constructor(...args: empty): mixed;
static +xlFillCopy: Class<Excel$XlAutoFillType__xlFillCopy> & Excel$XlAutoFillType__xlFillCopy & 1;// 1
static +xlFillDays: Class<Excel$XlAutoFillType__xlFillDays> & Excel$XlAutoFillType__xlFillDays & 5;// 5
static +xlFillDefault: Class<Excel$XlAutoFillType__xlFillDefault> & Excel$XlAutoFillType__xlFillDefault & 0;// 0
static +xlFillFormats: Class<Excel$XlAutoFillType__xlFillFormats> & Excel$XlAutoFillType__xlFillFormats & 3;// 3
static +xlFillMonths: Class<Excel$XlAutoFillType__xlFillMonths> & Excel$XlAutoFillType__xlFillMonths & 7;// 7
static +xlFillSeries: Class<Excel$XlAutoFillType__xlFillSeries> & Excel$XlAutoFillType__xlFillSeries & 2;// 2
static +xlFillValues: Class<Excel$XlAutoFillType__xlFillValues> & Excel$XlAutoFillType__xlFillValues & 4;// 4
static +xlFillWeekdays: Class<Excel$XlAutoFillType__xlFillWeekdays> & Excel$XlAutoFillType__xlFillWeekdays & 6;// 6
static +xlFillYears: Class<Excel$XlAutoFillType__xlFillYears> & Excel$XlAutoFillType__xlFillYears & 8;// 8
static +xlGrowthTrend: Class<Excel$XlAutoFillType__xlGrowthTrend> & Excel$XlAutoFillType__xlGrowthTrend & 10;// 10
static +xlLinearTrend: Class<Excel$XlAutoFillType__xlLinearTrend> & Excel$XlAutoFillType__xlLinearTrend & 9;// 9

}

declare class Excel$XlAutoFillType__xlFillCopy mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillDays mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillDefault mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillFormats mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillMonths mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillSeries mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillValues mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillWeekdays mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlFillYears mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlGrowthTrend mixins Excel$XlAutoFillType {}
declare class Excel$XlAutoFillType__xlLinearTrend mixins Excel$XlAutoFillType {}


declare  class Excel$XlAutoFilterOperator {
  constructor(...args: empty): mixed;
static +xlAnd: Class<Excel$XlAutoFilterOperator__xlAnd> & Excel$XlAutoFilterOperator__xlAnd & 1;// 1
static +xlBottom10Items: Class<Excel$XlAutoFilterOperator__xlBottom10Items> & Excel$XlAutoFilterOperator__xlBottom10Items & 4;// 4
static +xlBottom10Percent: Class<Excel$XlAutoFilterOperator__xlBottom10Percent> & Excel$XlAutoFilterOperator__xlBottom10Percent & 6;// 6
static +xlFilterAutomaticFontColor: Class<Excel$XlAutoFilterOperator__xlFilterAutomaticFontColor> & Excel$XlAutoFilterOperator__xlFilterAutomaticFontColor & 13;// 13
static +xlFilterCellColor: Class<Excel$XlAutoFilterOperator__xlFilterCellColor> & Excel$XlAutoFilterOperator__xlFilterCellColor & 8;// 8
static +xlFilterDynamic: Class<Excel$XlAutoFilterOperator__xlFilterDynamic> & Excel$XlAutoFilterOperator__xlFilterDynamic & 11;// 11
static +xlFilterFontColor: Class<Excel$XlAutoFilterOperator__xlFilterFontColor> & Excel$XlAutoFilterOperator__xlFilterFontColor & 9;// 9
static +xlFilterIcon: Class<Excel$XlAutoFilterOperator__xlFilterIcon> & Excel$XlAutoFilterOperator__xlFilterIcon & 10;// 10
static +xlFilterNoFill: Class<Excel$XlAutoFilterOperator__xlFilterNoFill> & Excel$XlAutoFilterOperator__xlFilterNoFill & 12;// 12
static +xlFilterNoIcon: Class<Excel$XlAutoFilterOperator__xlFilterNoIcon> & Excel$XlAutoFilterOperator__xlFilterNoIcon & 14;// 14
static +xlFilterValues: Class<Excel$XlAutoFilterOperator__xlFilterValues> & Excel$XlAutoFilterOperator__xlFilterValues & 7;// 7
static +xlOr: Class<Excel$XlAutoFilterOperator__xlOr> & Excel$XlAutoFilterOperator__xlOr & 2;// 2
static +xlTop10Items: Class<Excel$XlAutoFilterOperator__xlTop10Items> & Excel$XlAutoFilterOperator__xlTop10Items & 3;// 3
static +xlTop10Percent: Class<Excel$XlAutoFilterOperator__xlTop10Percent> & Excel$XlAutoFilterOperator__xlTop10Percent & 5;// 5

}

declare class Excel$XlAutoFilterOperator__xlAnd mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlBottom10Items mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlBottom10Percent mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterAutomaticFontColor mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterCellColor mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterDynamic mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterFontColor mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterIcon mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterNoFill mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterNoIcon mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlFilterValues mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlOr mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlTop10Items mixins Excel$XlAutoFilterOperator {}
declare class Excel$XlAutoFilterOperator__xlTop10Percent mixins Excel$XlAutoFilterOperator {}


declare  class Excel$XlAxisCrosses {
  constructor(...args: empty): mixed;
static +xlAxisCrossesAutomatic: Class<Excel$XlAxisCrosses__xlAxisCrossesAutomatic> & Excel$XlAxisCrosses__xlAxisCrossesAutomatic & -4105;// -4105
static +xlAxisCrossesCustom: Class<Excel$XlAxisCrosses__xlAxisCrossesCustom> & Excel$XlAxisCrosses__xlAxisCrossesCustom & -4114;// -4114
static +xlAxisCrossesMaximum: Class<Excel$XlAxisCrosses__xlAxisCrossesMaximum> & Excel$XlAxisCrosses__xlAxisCrossesMaximum & 2;// 2
static +xlAxisCrossesMinimum: Class<Excel$XlAxisCrosses__xlAxisCrossesMinimum> & Excel$XlAxisCrosses__xlAxisCrossesMinimum & 4;// 4

}

declare class Excel$XlAxisCrosses__xlAxisCrossesAutomatic mixins Excel$XlAxisCrosses {}
declare class Excel$XlAxisCrosses__xlAxisCrossesCustom mixins Excel$XlAxisCrosses {}
declare class Excel$XlAxisCrosses__xlAxisCrossesMaximum mixins Excel$XlAxisCrosses {}
declare class Excel$XlAxisCrosses__xlAxisCrossesMinimum mixins Excel$XlAxisCrosses {}


declare  class Excel$XlAxisGroup {
  constructor(...args: empty): mixed;
static +xlPrimary: Class<Excel$XlAxisGroup__xlPrimary> & Excel$XlAxisGroup__xlPrimary & 1;// 1
static +xlSecondary: Class<Excel$XlAxisGroup__xlSecondary> & Excel$XlAxisGroup__xlSecondary & 2;// 2

}

declare class Excel$XlAxisGroup__xlPrimary mixins Excel$XlAxisGroup {}
declare class Excel$XlAxisGroup__xlSecondary mixins Excel$XlAxisGroup {}


declare  class Excel$XlAxisType {
  constructor(...args: empty): mixed;
static +xlCategory: Class<Excel$XlAxisType__xlCategory> & Excel$XlAxisType__xlCategory & 1;// 1
static +xlSeriesAxis: Class<Excel$XlAxisType__xlSeriesAxis> & Excel$XlAxisType__xlSeriesAxis & 3;// 3
static +xlValue: Class<Excel$XlAxisType__xlValue> & Excel$XlAxisType__xlValue & 2;// 2

}

declare class Excel$XlAxisType__xlCategory mixins Excel$XlAxisType {}
declare class Excel$XlAxisType__xlSeriesAxis mixins Excel$XlAxisType {}
declare class Excel$XlAxisType__xlValue mixins Excel$XlAxisType {}


declare  class Excel$XlBackground {
  constructor(...args: empty): mixed;
static +xlBackgroundAutomatic: Class<Excel$XlBackground__xlBackgroundAutomatic> & Excel$XlBackground__xlBackgroundAutomatic & -4105;// -4105
static +xlBackgroundOpaque: Class<Excel$XlBackground__xlBackgroundOpaque> & Excel$XlBackground__xlBackgroundOpaque & 3;// 3
static +xlBackgroundTransparent: Class<Excel$XlBackground__xlBackgroundTransparent> & Excel$XlBackground__xlBackgroundTransparent & 2;// 2

}

declare class Excel$XlBackground__xlBackgroundAutomatic mixins Excel$XlBackground {}
declare class Excel$XlBackground__xlBackgroundOpaque mixins Excel$XlBackground {}
declare class Excel$XlBackground__xlBackgroundTransparent mixins Excel$XlBackground {}


declare  class Excel$XlBarShape {
  constructor(...args: empty): mixed;
static +xlBox: Class<Excel$XlBarShape__xlBox> & Excel$XlBarShape__xlBox & 0;// 0
static +xlConeToMax: Class<Excel$XlBarShape__xlConeToMax> & Excel$XlBarShape__xlConeToMax & 5;// 5
static +xlConeToPoint: Class<Excel$XlBarShape__xlConeToPoint> & Excel$XlBarShape__xlConeToPoint & 4;// 4
static +xlCylinder: Class<Excel$XlBarShape__xlCylinder> & Excel$XlBarShape__xlCylinder & 3;// 3
static +xlPyramidToMax: Class<Excel$XlBarShape__xlPyramidToMax> & Excel$XlBarShape__xlPyramidToMax & 2;// 2
static +xlPyramidToPoint: Class<Excel$XlBarShape__xlPyramidToPoint> & Excel$XlBarShape__xlPyramidToPoint & 1;// 1

}

declare class Excel$XlBarShape__xlBox mixins Excel$XlBarShape {}
declare class Excel$XlBarShape__xlConeToMax mixins Excel$XlBarShape {}
declare class Excel$XlBarShape__xlConeToPoint mixins Excel$XlBarShape {}
declare class Excel$XlBarShape__xlCylinder mixins Excel$XlBarShape {}
declare class Excel$XlBarShape__xlPyramidToMax mixins Excel$XlBarShape {}
declare class Excel$XlBarShape__xlPyramidToPoint mixins Excel$XlBarShape {}


declare  class Excel$XlBordersIndex {
  constructor(...args: empty): mixed;
static +xlDiagonalDown: Class<Excel$XlBordersIndex__xlDiagonalDown> & Excel$XlBordersIndex__xlDiagonalDown & 5;// 5
static +xlDiagonalUp: Class<Excel$XlBordersIndex__xlDiagonalUp> & Excel$XlBordersIndex__xlDiagonalUp & 6;// 6
static +xlEdgeBottom: Class<Excel$XlBordersIndex__xlEdgeBottom> & Excel$XlBordersIndex__xlEdgeBottom & 9;// 9
static +xlEdgeLeft: Class<Excel$XlBordersIndex__xlEdgeLeft> & Excel$XlBordersIndex__xlEdgeLeft & 7;// 7
static +xlEdgeRight: Class<Excel$XlBordersIndex__xlEdgeRight> & Excel$XlBordersIndex__xlEdgeRight & 10;// 10
static +xlEdgeTop: Class<Excel$XlBordersIndex__xlEdgeTop> & Excel$XlBordersIndex__xlEdgeTop & 8;// 8
static +xlInsideHorizontal: Class<Excel$XlBordersIndex__xlInsideHorizontal> & Excel$XlBordersIndex__xlInsideHorizontal & 12;// 12
static +xlInsideVertical: Class<Excel$XlBordersIndex__xlInsideVertical> & Excel$XlBordersIndex__xlInsideVertical & 11;// 11

}

declare class Excel$XlBordersIndex__xlDiagonalDown mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlDiagonalUp mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlEdgeBottom mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlEdgeLeft mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlEdgeRight mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlEdgeTop mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlInsideHorizontal mixins Excel$XlBordersIndex {}
declare class Excel$XlBordersIndex__xlInsideVertical mixins Excel$XlBordersIndex {}


declare  class Excel$XlBorderWeight {
  constructor(...args: empty): mixed;
static +xlHairline: Class<Excel$XlBorderWeight__xlHairline> & Excel$XlBorderWeight__xlHairline & 1;// 1
static +xlMedium: Class<Excel$XlBorderWeight__xlMedium> & Excel$XlBorderWeight__xlMedium & -4138;// -4138
static +xlThick: Class<Excel$XlBorderWeight__xlThick> & Excel$XlBorderWeight__xlThick & 4;// 4
static +xlThin: Class<Excel$XlBorderWeight__xlThin> & Excel$XlBorderWeight__xlThin & 2;// 2

}

declare class Excel$XlBorderWeight__xlHairline mixins Excel$XlBorderWeight {}
declare class Excel$XlBorderWeight__xlMedium mixins Excel$XlBorderWeight {}
declare class Excel$XlBorderWeight__xlThick mixins Excel$XlBorderWeight {}
declare class Excel$XlBorderWeight__xlThin mixins Excel$XlBorderWeight {}


declare  class Excel$XlBuiltInDialog {
  constructor(...args: empty): mixed;
static +_xlDialogChartSourceData: Class<Excel$XlBuiltInDialog___xlDialogChartSourceData> & Excel$XlBuiltInDialog___xlDialogChartSourceData & 541;// 541
static +_xlDialogPhonetic: Class<Excel$XlBuiltInDialog___xlDialogPhonetic> & Excel$XlBuiltInDialog___xlDialogPhonetic & 538;// 538
static +xlDialogActivate: Class<Excel$XlBuiltInDialog__xlDialogActivate> & Excel$XlBuiltInDialog__xlDialogActivate & 103;// 103
static +xlDialogActiveCellFont: Class<Excel$XlBuiltInDialog__xlDialogActiveCellFont> & Excel$XlBuiltInDialog__xlDialogActiveCellFont & 476;// 476
static +xlDialogAddChartAutoformat: Class<Excel$XlBuiltInDialog__xlDialogAddChartAutoformat> & Excel$XlBuiltInDialog__xlDialogAddChartAutoformat & 390;// 390
static +xlDialogAddinManager: Class<Excel$XlBuiltInDialog__xlDialogAddinManager> & Excel$XlBuiltInDialog__xlDialogAddinManager & 321;// 321
static +xlDialogAlignment: Class<Excel$XlBuiltInDialog__xlDialogAlignment> & Excel$XlBuiltInDialog__xlDialogAlignment & 43;// 43
static +xlDialogApplyNames: Class<Excel$XlBuiltInDialog__xlDialogApplyNames> & Excel$XlBuiltInDialog__xlDialogApplyNames & 133;// 133
static +xlDialogApplyStyle: Class<Excel$XlBuiltInDialog__xlDialogApplyStyle> & Excel$XlBuiltInDialog__xlDialogApplyStyle & 212;// 212
static +xlDialogAppMove: Class<Excel$XlBuiltInDialog__xlDialogAppMove> & Excel$XlBuiltInDialog__xlDialogAppMove & 170;// 170
static +xlDialogAppSize: Class<Excel$XlBuiltInDialog__xlDialogAppSize> & Excel$XlBuiltInDialog__xlDialogAppSize & 171;// 171
static +xlDialogArrangeAll: Class<Excel$XlBuiltInDialog__xlDialogArrangeAll> & Excel$XlBuiltInDialog__xlDialogArrangeAll & 12;// 12
static +xlDialogAssignToObject: Class<Excel$XlBuiltInDialog__xlDialogAssignToObject> & Excel$XlBuiltInDialog__xlDialogAssignToObject & 213;// 213
static +xlDialogAssignToTool: Class<Excel$XlBuiltInDialog__xlDialogAssignToTool> & Excel$XlBuiltInDialog__xlDialogAssignToTool & 293;// 293
static +xlDialogAttachText: Class<Excel$XlBuiltInDialog__xlDialogAttachText> & Excel$XlBuiltInDialog__xlDialogAttachText & 80;// 80
static +xlDialogAttachToolbars: Class<Excel$XlBuiltInDialog__xlDialogAttachToolbars> & Excel$XlBuiltInDialog__xlDialogAttachToolbars & 323;// 323
static +xlDialogAutoCorrect: Class<Excel$XlBuiltInDialog__xlDialogAutoCorrect> & Excel$XlBuiltInDialog__xlDialogAutoCorrect & 485;// 485
static +xlDialogAxes: Class<Excel$XlBuiltInDialog__xlDialogAxes> & Excel$XlBuiltInDialog__xlDialogAxes & 78;// 78
static +xlDialogBorder: Class<Excel$XlBuiltInDialog__xlDialogBorder> & Excel$XlBuiltInDialog__xlDialogBorder & 45;// 45
static +xlDialogCalculation: Class<Excel$XlBuiltInDialog__xlDialogCalculation> & Excel$XlBuiltInDialog__xlDialogCalculation & 32;// 32
static +xlDialogCellProtection: Class<Excel$XlBuiltInDialog__xlDialogCellProtection> & Excel$XlBuiltInDialog__xlDialogCellProtection & 46;// 46
static +xlDialogChangeLink: Class<Excel$XlBuiltInDialog__xlDialogChangeLink> & Excel$XlBuiltInDialog__xlDialogChangeLink & 166;// 166
static +xlDialogChartAddData: Class<Excel$XlBuiltInDialog__xlDialogChartAddData> & Excel$XlBuiltInDialog__xlDialogChartAddData & 392;// 392
static +xlDialogChartLocation: Class<Excel$XlBuiltInDialog__xlDialogChartLocation> & Excel$XlBuiltInDialog__xlDialogChartLocation & 527;// 527
static +xlDialogChartOptionsDataLabelMultiple: Class<Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabelMultiple> & Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabelMultiple & 724;// 724
static +xlDialogChartOptionsDataLabels: Class<Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabels> & Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabels & 505;// 505
static +xlDialogChartOptionsDataTable: Class<Excel$XlBuiltInDialog__xlDialogChartOptionsDataTable> & Excel$XlBuiltInDialog__xlDialogChartOptionsDataTable & 506;// 506
static +xlDialogChartSourceData: Class<Excel$XlBuiltInDialog__xlDialogChartSourceData> & Excel$XlBuiltInDialog__xlDialogChartSourceData & 540;// 540
static +xlDialogChartTrend: Class<Excel$XlBuiltInDialog__xlDialogChartTrend> & Excel$XlBuiltInDialog__xlDialogChartTrend & 350;// 350
static +xlDialogChartType: Class<Excel$XlBuiltInDialog__xlDialogChartType> & Excel$XlBuiltInDialog__xlDialogChartType & 526;// 526
static +xlDialogChartWizard: Class<Excel$XlBuiltInDialog__xlDialogChartWizard> & Excel$XlBuiltInDialog__xlDialogChartWizard & 288;// 288
static +xlDialogCheckboxProperties: Class<Excel$XlBuiltInDialog__xlDialogCheckboxProperties> & Excel$XlBuiltInDialog__xlDialogCheckboxProperties & 435;// 435
static +xlDialogClear: Class<Excel$XlBuiltInDialog__xlDialogClear> & Excel$XlBuiltInDialog__xlDialogClear & 52;// 52
static +xlDialogColorPalette: Class<Excel$XlBuiltInDialog__xlDialogColorPalette> & Excel$XlBuiltInDialog__xlDialogColorPalette & 161;// 161
static +xlDialogColumnWidth: Class<Excel$XlBuiltInDialog__xlDialogColumnWidth> & Excel$XlBuiltInDialog__xlDialogColumnWidth & 47;// 47
static +xlDialogCombination: Class<Excel$XlBuiltInDialog__xlDialogCombination> & Excel$XlBuiltInDialog__xlDialogCombination & 73;// 73
static +xlDialogConditionalFormatting: Class<Excel$XlBuiltInDialog__xlDialogConditionalFormatting> & Excel$XlBuiltInDialog__xlDialogConditionalFormatting & 583;// 583
static +xlDialogConsolidate: Class<Excel$XlBuiltInDialog__xlDialogConsolidate> & Excel$XlBuiltInDialog__xlDialogConsolidate & 191;// 191
static +xlDialogCopyChart: Class<Excel$XlBuiltInDialog__xlDialogCopyChart> & Excel$XlBuiltInDialog__xlDialogCopyChart & 147;// 147
static +xlDialogCopyPicture: Class<Excel$XlBuiltInDialog__xlDialogCopyPicture> & Excel$XlBuiltInDialog__xlDialogCopyPicture & 108;// 108
static +xlDialogCreateList: Class<Excel$XlBuiltInDialog__xlDialogCreateList> & Excel$XlBuiltInDialog__xlDialogCreateList & 796;// 796
static +xlDialogCreateNames: Class<Excel$XlBuiltInDialog__xlDialogCreateNames> & Excel$XlBuiltInDialog__xlDialogCreateNames & 62;// 62
static +xlDialogCreatePublisher: Class<Excel$XlBuiltInDialog__xlDialogCreatePublisher> & Excel$XlBuiltInDialog__xlDialogCreatePublisher & 217;// 217
static +xlDialogCustomizeToolbar: Class<Excel$XlBuiltInDialog__xlDialogCustomizeToolbar> & Excel$XlBuiltInDialog__xlDialogCustomizeToolbar & 276;// 276
static +xlDialogCustomViews: Class<Excel$XlBuiltInDialog__xlDialogCustomViews> & Excel$XlBuiltInDialog__xlDialogCustomViews & 493;// 493
static +xlDialogDataDelete: Class<Excel$XlBuiltInDialog__xlDialogDataDelete> & Excel$XlBuiltInDialog__xlDialogDataDelete & 36;// 36
static +xlDialogDataLabel: Class<Excel$XlBuiltInDialog__xlDialogDataLabel> & Excel$XlBuiltInDialog__xlDialogDataLabel & 379;// 379
static +xlDialogDataLabelMultiple: Class<Excel$XlBuiltInDialog__xlDialogDataLabelMultiple> & Excel$XlBuiltInDialog__xlDialogDataLabelMultiple & 723;// 723
static +xlDialogDataSeries: Class<Excel$XlBuiltInDialog__xlDialogDataSeries> & Excel$XlBuiltInDialog__xlDialogDataSeries & 40;// 40
static +xlDialogDataValidation: Class<Excel$XlBuiltInDialog__xlDialogDataValidation> & Excel$XlBuiltInDialog__xlDialogDataValidation & 525;// 525
static +xlDialogDefineName: Class<Excel$XlBuiltInDialog__xlDialogDefineName> & Excel$XlBuiltInDialog__xlDialogDefineName & 61;// 61
static +xlDialogDefineStyle: Class<Excel$XlBuiltInDialog__xlDialogDefineStyle> & Excel$XlBuiltInDialog__xlDialogDefineStyle & 229;// 229
static +xlDialogDeleteFormat: Class<Excel$XlBuiltInDialog__xlDialogDeleteFormat> & Excel$XlBuiltInDialog__xlDialogDeleteFormat & 111;// 111
static +xlDialogDeleteName: Class<Excel$XlBuiltInDialog__xlDialogDeleteName> & Excel$XlBuiltInDialog__xlDialogDeleteName & 110;// 110
static +xlDialogDemote: Class<Excel$XlBuiltInDialog__xlDialogDemote> & Excel$XlBuiltInDialog__xlDialogDemote & 203;// 203
static +xlDialogDisplay: Class<Excel$XlBuiltInDialog__xlDialogDisplay> & Excel$XlBuiltInDialog__xlDialogDisplay & 27;// 27
static +xlDialogDocumentInspector: Class<Excel$XlBuiltInDialog__xlDialogDocumentInspector> & Excel$XlBuiltInDialog__xlDialogDocumentInspector & 862;// 862
static +xlDialogEditboxProperties: Class<Excel$XlBuiltInDialog__xlDialogEditboxProperties> & Excel$XlBuiltInDialog__xlDialogEditboxProperties & 438;// 438
static +xlDialogEditColor: Class<Excel$XlBuiltInDialog__xlDialogEditColor> & Excel$XlBuiltInDialog__xlDialogEditColor & 223;// 223
static +xlDialogEditDelete: Class<Excel$XlBuiltInDialog__xlDialogEditDelete> & Excel$XlBuiltInDialog__xlDialogEditDelete & 54;// 54
static +xlDialogEditionOptions: Class<Excel$XlBuiltInDialog__xlDialogEditionOptions> & Excel$XlBuiltInDialog__xlDialogEditionOptions & 251;// 251
static +xlDialogEditSeries: Class<Excel$XlBuiltInDialog__xlDialogEditSeries> & Excel$XlBuiltInDialog__xlDialogEditSeries & 228;// 228
static +xlDialogErrorbarX: Class<Excel$XlBuiltInDialog__xlDialogErrorbarX> & Excel$XlBuiltInDialog__xlDialogErrorbarX & 463;// 463
static +xlDialogErrorbarY: Class<Excel$XlBuiltInDialog__xlDialogErrorbarY> & Excel$XlBuiltInDialog__xlDialogErrorbarY & 464;// 464
static +xlDialogErrorChecking: Class<Excel$XlBuiltInDialog__xlDialogErrorChecking> & Excel$XlBuiltInDialog__xlDialogErrorChecking & 732;// 732
static +xlDialogEvaluateFormula: Class<Excel$XlBuiltInDialog__xlDialogEvaluateFormula> & Excel$XlBuiltInDialog__xlDialogEvaluateFormula & 709;// 709
static +xlDialogExternalDataProperties: Class<Excel$XlBuiltInDialog__xlDialogExternalDataProperties> & Excel$XlBuiltInDialog__xlDialogExternalDataProperties & 530;// 530
static +xlDialogExtract: Class<Excel$XlBuiltInDialog__xlDialogExtract> & Excel$XlBuiltInDialog__xlDialogExtract & 35;// 35
static +xlDialogFileDelete: Class<Excel$XlBuiltInDialog__xlDialogFileDelete> & Excel$XlBuiltInDialog__xlDialogFileDelete & 6;// 6
static +xlDialogFileSharing: Class<Excel$XlBuiltInDialog__xlDialogFileSharing> & Excel$XlBuiltInDialog__xlDialogFileSharing & 481;// 481
static +xlDialogFillGroup: Class<Excel$XlBuiltInDialog__xlDialogFillGroup> & Excel$XlBuiltInDialog__xlDialogFillGroup & 200;// 200
static +xlDialogFillWorkgroup: Class<Excel$XlBuiltInDialog__xlDialogFillWorkgroup> & Excel$XlBuiltInDialog__xlDialogFillWorkgroup & 301;// 301
static +xlDialogFilter: Class<Excel$XlBuiltInDialog__xlDialogFilter> & Excel$XlBuiltInDialog__xlDialogFilter & 447;// 447
static +xlDialogFilterAdvanced: Class<Excel$XlBuiltInDialog__xlDialogFilterAdvanced> & Excel$XlBuiltInDialog__xlDialogFilterAdvanced & 370;// 370
static +xlDialogFindFile: Class<Excel$XlBuiltInDialog__xlDialogFindFile> & Excel$XlBuiltInDialog__xlDialogFindFile & 475;// 475
static +xlDialogFont: Class<Excel$XlBuiltInDialog__xlDialogFont> & Excel$XlBuiltInDialog__xlDialogFont & 26;// 26
static +xlDialogFontProperties: Class<Excel$XlBuiltInDialog__xlDialogFontProperties> & Excel$XlBuiltInDialog__xlDialogFontProperties & 381;// 381
static +xlDialogFormatAuto: Class<Excel$XlBuiltInDialog__xlDialogFormatAuto> & Excel$XlBuiltInDialog__xlDialogFormatAuto & 269;// 269
static +xlDialogFormatChart: Class<Excel$XlBuiltInDialog__xlDialogFormatChart> & Excel$XlBuiltInDialog__xlDialogFormatChart & 465;// 465
static +xlDialogFormatCharttype: Class<Excel$XlBuiltInDialog__xlDialogFormatCharttype> & Excel$XlBuiltInDialog__xlDialogFormatCharttype & 423;// 423
static +xlDialogFormatFont: Class<Excel$XlBuiltInDialog__xlDialogFormatFont> & Excel$XlBuiltInDialog__xlDialogFormatFont & 150;// 150
static +xlDialogFormatLegend: Class<Excel$XlBuiltInDialog__xlDialogFormatLegend> & Excel$XlBuiltInDialog__xlDialogFormatLegend & 88;// 88
static +xlDialogFormatMain: Class<Excel$XlBuiltInDialog__xlDialogFormatMain> & Excel$XlBuiltInDialog__xlDialogFormatMain & 225;// 225
static +xlDialogFormatMove: Class<Excel$XlBuiltInDialog__xlDialogFormatMove> & Excel$XlBuiltInDialog__xlDialogFormatMove & 128;// 128
static +xlDialogFormatNumber: Class<Excel$XlBuiltInDialog__xlDialogFormatNumber> & Excel$XlBuiltInDialog__xlDialogFormatNumber & 42;// 42
static +xlDialogFormatOverlay: Class<Excel$XlBuiltInDialog__xlDialogFormatOverlay> & Excel$XlBuiltInDialog__xlDialogFormatOverlay & 226;// 226
static +xlDialogFormatSize: Class<Excel$XlBuiltInDialog__xlDialogFormatSize> & Excel$XlBuiltInDialog__xlDialogFormatSize & 129;// 129
static +xlDialogFormatText: Class<Excel$XlBuiltInDialog__xlDialogFormatText> & Excel$XlBuiltInDialog__xlDialogFormatText & 89;// 89
static +xlDialogFormulaFind: Class<Excel$XlBuiltInDialog__xlDialogFormulaFind> & Excel$XlBuiltInDialog__xlDialogFormulaFind & 64;// 64
static +xlDialogFormulaGoto: Class<Excel$XlBuiltInDialog__xlDialogFormulaGoto> & Excel$XlBuiltInDialog__xlDialogFormulaGoto & 63;// 63
static +xlDialogFormulaReplace: Class<Excel$XlBuiltInDialog__xlDialogFormulaReplace> & Excel$XlBuiltInDialog__xlDialogFormulaReplace & 130;// 130
static +xlDialogFunctionWizard: Class<Excel$XlBuiltInDialog__xlDialogFunctionWizard> & Excel$XlBuiltInDialog__xlDialogFunctionWizard & 450;// 450
static +xlDialogGallery3dArea: Class<Excel$XlBuiltInDialog__xlDialogGallery3dArea> & Excel$XlBuiltInDialog__xlDialogGallery3dArea & 193;// 193
static +xlDialogGallery3dBar: Class<Excel$XlBuiltInDialog__xlDialogGallery3dBar> & Excel$XlBuiltInDialog__xlDialogGallery3dBar & 272;// 272
static +xlDialogGallery3dColumn: Class<Excel$XlBuiltInDialog__xlDialogGallery3dColumn> & Excel$XlBuiltInDialog__xlDialogGallery3dColumn & 194;// 194
static +xlDialogGallery3dLine: Class<Excel$XlBuiltInDialog__xlDialogGallery3dLine> & Excel$XlBuiltInDialog__xlDialogGallery3dLine & 195;// 195
static +xlDialogGallery3dPie: Class<Excel$XlBuiltInDialog__xlDialogGallery3dPie> & Excel$XlBuiltInDialog__xlDialogGallery3dPie & 196;// 196
static +xlDialogGallery3dSurface: Class<Excel$XlBuiltInDialog__xlDialogGallery3dSurface> & Excel$XlBuiltInDialog__xlDialogGallery3dSurface & 273;// 273
static +xlDialogGalleryArea: Class<Excel$XlBuiltInDialog__xlDialogGalleryArea> & Excel$XlBuiltInDialog__xlDialogGalleryArea & 67;// 67
static +xlDialogGalleryBar: Class<Excel$XlBuiltInDialog__xlDialogGalleryBar> & Excel$XlBuiltInDialog__xlDialogGalleryBar & 68;// 68
static +xlDialogGalleryColumn: Class<Excel$XlBuiltInDialog__xlDialogGalleryColumn> & Excel$XlBuiltInDialog__xlDialogGalleryColumn & 69;// 69
static +xlDialogGalleryCustom: Class<Excel$XlBuiltInDialog__xlDialogGalleryCustom> & Excel$XlBuiltInDialog__xlDialogGalleryCustom & 388;// 388
static +xlDialogGalleryDoughnut: Class<Excel$XlBuiltInDialog__xlDialogGalleryDoughnut> & Excel$XlBuiltInDialog__xlDialogGalleryDoughnut & 344;// 344
static +xlDialogGalleryLine: Class<Excel$XlBuiltInDialog__xlDialogGalleryLine> & Excel$XlBuiltInDialog__xlDialogGalleryLine & 70;// 70
static +xlDialogGalleryPie: Class<Excel$XlBuiltInDialog__xlDialogGalleryPie> & Excel$XlBuiltInDialog__xlDialogGalleryPie & 71;// 71
static +xlDialogGalleryRadar: Class<Excel$XlBuiltInDialog__xlDialogGalleryRadar> & Excel$XlBuiltInDialog__xlDialogGalleryRadar & 249;// 249
static +xlDialogGalleryScatter: Class<Excel$XlBuiltInDialog__xlDialogGalleryScatter> & Excel$XlBuiltInDialog__xlDialogGalleryScatter & 72;// 72
static +xlDialogGoalSeek: Class<Excel$XlBuiltInDialog__xlDialogGoalSeek> & Excel$XlBuiltInDialog__xlDialogGoalSeek & 198;// 198
static +xlDialogGridlines: Class<Excel$XlBuiltInDialog__xlDialogGridlines> & Excel$XlBuiltInDialog__xlDialogGridlines & 76;// 76
static +xlDialogImportTextFile: Class<Excel$XlBuiltInDialog__xlDialogImportTextFile> & Excel$XlBuiltInDialog__xlDialogImportTextFile & 666;// 666
static +xlDialogInsert: Class<Excel$XlBuiltInDialog__xlDialogInsert> & Excel$XlBuiltInDialog__xlDialogInsert & 55;// 55
static +xlDialogInsertHyperlink: Class<Excel$XlBuiltInDialog__xlDialogInsertHyperlink> & Excel$XlBuiltInDialog__xlDialogInsertHyperlink & 596;// 596
static +xlDialogInsertNameLabel: Class<Excel$XlBuiltInDialog__xlDialogInsertNameLabel> & Excel$XlBuiltInDialog__xlDialogInsertNameLabel & 496;// 496
static +xlDialogInsertObject: Class<Excel$XlBuiltInDialog__xlDialogInsertObject> & Excel$XlBuiltInDialog__xlDialogInsertObject & 259;// 259
static +xlDialogInsertPicture: Class<Excel$XlBuiltInDialog__xlDialogInsertPicture> & Excel$XlBuiltInDialog__xlDialogInsertPicture & 342;// 342
static +xlDialogInsertTitle: Class<Excel$XlBuiltInDialog__xlDialogInsertTitle> & Excel$XlBuiltInDialog__xlDialogInsertTitle & 380;// 380
static +xlDialogLabelProperties: Class<Excel$XlBuiltInDialog__xlDialogLabelProperties> & Excel$XlBuiltInDialog__xlDialogLabelProperties & 436;// 436
static +xlDialogListboxProperties: Class<Excel$XlBuiltInDialog__xlDialogListboxProperties> & Excel$XlBuiltInDialog__xlDialogListboxProperties & 437;// 437
static +xlDialogMacroOptions: Class<Excel$XlBuiltInDialog__xlDialogMacroOptions> & Excel$XlBuiltInDialog__xlDialogMacroOptions & 382;// 382
static +xlDialogMailEditMailer: Class<Excel$XlBuiltInDialog__xlDialogMailEditMailer> & Excel$XlBuiltInDialog__xlDialogMailEditMailer & 470;// 470
static +xlDialogMailLogon: Class<Excel$XlBuiltInDialog__xlDialogMailLogon> & Excel$XlBuiltInDialog__xlDialogMailLogon & 339;// 339
static +xlDialogMailNextLetter: Class<Excel$XlBuiltInDialog__xlDialogMailNextLetter> & Excel$XlBuiltInDialog__xlDialogMailNextLetter & 378;// 378
static +xlDialogMainChart: Class<Excel$XlBuiltInDialog__xlDialogMainChart> & Excel$XlBuiltInDialog__xlDialogMainChart & 85;// 85
static +xlDialogMainChartType: Class<Excel$XlBuiltInDialog__xlDialogMainChartType> & Excel$XlBuiltInDialog__xlDialogMainChartType & 185;// 185
static +xlDialogMenuEditor: Class<Excel$XlBuiltInDialog__xlDialogMenuEditor> & Excel$XlBuiltInDialog__xlDialogMenuEditor & 322;// 322
static +xlDialogMove: Class<Excel$XlBuiltInDialog__xlDialogMove> & Excel$XlBuiltInDialog__xlDialogMove & 262;// 262
static +xlDialogMyPermission: Class<Excel$XlBuiltInDialog__xlDialogMyPermission> & Excel$XlBuiltInDialog__xlDialogMyPermission & 834;// 834
static +xlDialogNameManager: Class<Excel$XlBuiltInDialog__xlDialogNameManager> & Excel$XlBuiltInDialog__xlDialogNameManager & 977;// 977
static +xlDialogNew: Class<Excel$XlBuiltInDialog__xlDialogNew> & Excel$XlBuiltInDialog__xlDialogNew & 119;// 119
static +xlDialogNewName: Class<Excel$XlBuiltInDialog__xlDialogNewName> & Excel$XlBuiltInDialog__xlDialogNewName & 978;// 978
static +xlDialogNewWebQuery: Class<Excel$XlBuiltInDialog__xlDialogNewWebQuery> & Excel$XlBuiltInDialog__xlDialogNewWebQuery & 667;// 667
static +xlDialogNote: Class<Excel$XlBuiltInDialog__xlDialogNote> & Excel$XlBuiltInDialog__xlDialogNote & 154;// 154
static +xlDialogObjectProperties: Class<Excel$XlBuiltInDialog__xlDialogObjectProperties> & Excel$XlBuiltInDialog__xlDialogObjectProperties & 207;// 207
static +xlDialogObjectProtection: Class<Excel$XlBuiltInDialog__xlDialogObjectProtection> & Excel$XlBuiltInDialog__xlDialogObjectProtection & 214;// 214
static +xlDialogOpen: Class<Excel$XlBuiltInDialog__xlDialogOpen> & Excel$XlBuiltInDialog__xlDialogOpen & 1;// 1
static +xlDialogOpenLinks: Class<Excel$XlBuiltInDialog__xlDialogOpenLinks> & Excel$XlBuiltInDialog__xlDialogOpenLinks & 2;// 2
static +xlDialogOpenMail: Class<Excel$XlBuiltInDialog__xlDialogOpenMail> & Excel$XlBuiltInDialog__xlDialogOpenMail & 188;// 188
static +xlDialogOpenText: Class<Excel$XlBuiltInDialog__xlDialogOpenText> & Excel$XlBuiltInDialog__xlDialogOpenText & 441;// 441
static +xlDialogOptionsCalculation: Class<Excel$XlBuiltInDialog__xlDialogOptionsCalculation> & Excel$XlBuiltInDialog__xlDialogOptionsCalculation & 318;// 318
static +xlDialogOptionsChart: Class<Excel$XlBuiltInDialog__xlDialogOptionsChart> & Excel$XlBuiltInDialog__xlDialogOptionsChart & 325;// 325
static +xlDialogOptionsEdit: Class<Excel$XlBuiltInDialog__xlDialogOptionsEdit> & Excel$XlBuiltInDialog__xlDialogOptionsEdit & 319;// 319
static +xlDialogOptionsGeneral: Class<Excel$XlBuiltInDialog__xlDialogOptionsGeneral> & Excel$XlBuiltInDialog__xlDialogOptionsGeneral & 356;// 356
static +xlDialogOptionsListsAdd: Class<Excel$XlBuiltInDialog__xlDialogOptionsListsAdd> & Excel$XlBuiltInDialog__xlDialogOptionsListsAdd & 458;// 458
static +xlDialogOptionsME: Class<Excel$XlBuiltInDialog__xlDialogOptionsME> & Excel$XlBuiltInDialog__xlDialogOptionsME & 647;// 647
static +xlDialogOptionsTransition: Class<Excel$XlBuiltInDialog__xlDialogOptionsTransition> & Excel$XlBuiltInDialog__xlDialogOptionsTransition & 355;// 355
static +xlDialogOptionsView: Class<Excel$XlBuiltInDialog__xlDialogOptionsView> & Excel$XlBuiltInDialog__xlDialogOptionsView & 320;// 320
static +xlDialogOutline: Class<Excel$XlBuiltInDialog__xlDialogOutline> & Excel$XlBuiltInDialog__xlDialogOutline & 142;// 142
static +xlDialogOverlay: Class<Excel$XlBuiltInDialog__xlDialogOverlay> & Excel$XlBuiltInDialog__xlDialogOverlay & 86;// 86
static +xlDialogOverlayChartType: Class<Excel$XlBuiltInDialog__xlDialogOverlayChartType> & Excel$XlBuiltInDialog__xlDialogOverlayChartType & 186;// 186
static +xlDialogPageSetup: Class<Excel$XlBuiltInDialog__xlDialogPageSetup> & Excel$XlBuiltInDialog__xlDialogPageSetup & 7;// 7
static +xlDialogParse: Class<Excel$XlBuiltInDialog__xlDialogParse> & Excel$XlBuiltInDialog__xlDialogParse & 91;// 91
static +xlDialogPasteNames: Class<Excel$XlBuiltInDialog__xlDialogPasteNames> & Excel$XlBuiltInDialog__xlDialogPasteNames & 58;// 58
static +xlDialogPasteSpecial: Class<Excel$XlBuiltInDialog__xlDialogPasteSpecial> & Excel$XlBuiltInDialog__xlDialogPasteSpecial & 53;// 53
static +xlDialogPatterns: Class<Excel$XlBuiltInDialog__xlDialogPatterns> & Excel$XlBuiltInDialog__xlDialogPatterns & 84;// 84
static +xlDialogPermission: Class<Excel$XlBuiltInDialog__xlDialogPermission> & Excel$XlBuiltInDialog__xlDialogPermission & 832;// 832
static +xlDialogPhonetic: Class<Excel$XlBuiltInDialog__xlDialogPhonetic> & Excel$XlBuiltInDialog__xlDialogPhonetic & 656;// 656
static +xlDialogPivotCalculatedField: Class<Excel$XlBuiltInDialog__xlDialogPivotCalculatedField> & Excel$XlBuiltInDialog__xlDialogPivotCalculatedField & 570;// 570
static +xlDialogPivotCalculatedItem: Class<Excel$XlBuiltInDialog__xlDialogPivotCalculatedItem> & Excel$XlBuiltInDialog__xlDialogPivotCalculatedItem & 572;// 572
static +xlDialogPivotClientServerSet: Class<Excel$XlBuiltInDialog__xlDialogPivotClientServerSet> & Excel$XlBuiltInDialog__xlDialogPivotClientServerSet & 689;// 689
static +xlDialogPivotFieldGroup: Class<Excel$XlBuiltInDialog__xlDialogPivotFieldGroup> & Excel$XlBuiltInDialog__xlDialogPivotFieldGroup & 433;// 433
static +xlDialogPivotFieldProperties: Class<Excel$XlBuiltInDialog__xlDialogPivotFieldProperties> & Excel$XlBuiltInDialog__xlDialogPivotFieldProperties & 313;// 313
static +xlDialogPivotFieldUngroup: Class<Excel$XlBuiltInDialog__xlDialogPivotFieldUngroup> & Excel$XlBuiltInDialog__xlDialogPivotFieldUngroup & 434;// 434
static +xlDialogPivotShowPages: Class<Excel$XlBuiltInDialog__xlDialogPivotShowPages> & Excel$XlBuiltInDialog__xlDialogPivotShowPages & 421;// 421
static +xlDialogPivotSolveOrder: Class<Excel$XlBuiltInDialog__xlDialogPivotSolveOrder> & Excel$XlBuiltInDialog__xlDialogPivotSolveOrder & 568;// 568
static +xlDialogPivotTableOptions: Class<Excel$XlBuiltInDialog__xlDialogPivotTableOptions> & Excel$XlBuiltInDialog__xlDialogPivotTableOptions & 567;// 567
static +xlDialogPivotTableSlicerConnections: Class<Excel$XlBuiltInDialog__xlDialogPivotTableSlicerConnections> & Excel$XlBuiltInDialog__xlDialogPivotTableSlicerConnections & 1183;// 1183
static +xlDialogPivotTableWhatIfAnalysisSettings: Class<Excel$XlBuiltInDialog__xlDialogPivotTableWhatIfAnalysisSettings> & Excel$XlBuiltInDialog__xlDialogPivotTableWhatIfAnalysisSettings & 1153;// 1153
static +xlDialogPivotTableWizard: Class<Excel$XlBuiltInDialog__xlDialogPivotTableWizard> & Excel$XlBuiltInDialog__xlDialogPivotTableWizard & 312;// 312
static +xlDialogPlacement: Class<Excel$XlBuiltInDialog__xlDialogPlacement> & Excel$XlBuiltInDialog__xlDialogPlacement & 300;// 300
static +xlDialogPrint: Class<Excel$XlBuiltInDialog__xlDialogPrint> & Excel$XlBuiltInDialog__xlDialogPrint & 8;// 8
static +xlDialogPrinterSetup: Class<Excel$XlBuiltInDialog__xlDialogPrinterSetup> & Excel$XlBuiltInDialog__xlDialogPrinterSetup & 9;// 9
static +xlDialogPrintPreview: Class<Excel$XlBuiltInDialog__xlDialogPrintPreview> & Excel$XlBuiltInDialog__xlDialogPrintPreview & 222;// 222
static +xlDialogPromote: Class<Excel$XlBuiltInDialog__xlDialogPromote> & Excel$XlBuiltInDialog__xlDialogPromote & 202;// 202
static +xlDialogProperties: Class<Excel$XlBuiltInDialog__xlDialogProperties> & Excel$XlBuiltInDialog__xlDialogProperties & 474;// 474
static +xlDialogPropertyFields: Class<Excel$XlBuiltInDialog__xlDialogPropertyFields> & Excel$XlBuiltInDialog__xlDialogPropertyFields & 754;// 754
static +xlDialogProtectDocument: Class<Excel$XlBuiltInDialog__xlDialogProtectDocument> & Excel$XlBuiltInDialog__xlDialogProtectDocument & 28;// 28
static +xlDialogProtectSharing: Class<Excel$XlBuiltInDialog__xlDialogProtectSharing> & Excel$XlBuiltInDialog__xlDialogProtectSharing & 620;// 620
static +xlDialogPublishAsWebPage: Class<Excel$XlBuiltInDialog__xlDialogPublishAsWebPage> & Excel$XlBuiltInDialog__xlDialogPublishAsWebPage & 653;// 653
static +xlDialogPushbuttonProperties: Class<Excel$XlBuiltInDialog__xlDialogPushbuttonProperties> & Excel$XlBuiltInDialog__xlDialogPushbuttonProperties & 445;// 445
static +xlDialogReplaceFont: Class<Excel$XlBuiltInDialog__xlDialogReplaceFont> & Excel$XlBuiltInDialog__xlDialogReplaceFont & 134;// 134
static +xlDialogRoutingSlip: Class<Excel$XlBuiltInDialog__xlDialogRoutingSlip> & Excel$XlBuiltInDialog__xlDialogRoutingSlip & 336;// 336
static +xlDialogRowHeight: Class<Excel$XlBuiltInDialog__xlDialogRowHeight> & Excel$XlBuiltInDialog__xlDialogRowHeight & 127;// 127
static +xlDialogRun: Class<Excel$XlBuiltInDialog__xlDialogRun> & Excel$XlBuiltInDialog__xlDialogRun & 17;// 17
static +xlDialogSaveAs: Class<Excel$XlBuiltInDialog__xlDialogSaveAs> & Excel$XlBuiltInDialog__xlDialogSaveAs & 5;// 5
static +xlDialogSaveCopyAs: Class<Excel$XlBuiltInDialog__xlDialogSaveCopyAs> & Excel$XlBuiltInDialog__xlDialogSaveCopyAs & 456;// 456
static +xlDialogSaveNewObject: Class<Excel$XlBuiltInDialog__xlDialogSaveNewObject> & Excel$XlBuiltInDialog__xlDialogSaveNewObject & 208;// 208
static +xlDialogSaveWorkbook: Class<Excel$XlBuiltInDialog__xlDialogSaveWorkbook> & Excel$XlBuiltInDialog__xlDialogSaveWorkbook & 145;// 145
static +xlDialogSaveWorkspace: Class<Excel$XlBuiltInDialog__xlDialogSaveWorkspace> & Excel$XlBuiltInDialog__xlDialogSaveWorkspace & 285;// 285
static +xlDialogScale: Class<Excel$XlBuiltInDialog__xlDialogScale> & Excel$XlBuiltInDialog__xlDialogScale & 87;// 87
static +xlDialogScenarioAdd: Class<Excel$XlBuiltInDialog__xlDialogScenarioAdd> & Excel$XlBuiltInDialog__xlDialogScenarioAdd & 307;// 307
static +xlDialogScenarioCells: Class<Excel$XlBuiltInDialog__xlDialogScenarioCells> & Excel$XlBuiltInDialog__xlDialogScenarioCells & 305;// 305
static +xlDialogScenarioEdit: Class<Excel$XlBuiltInDialog__xlDialogScenarioEdit> & Excel$XlBuiltInDialog__xlDialogScenarioEdit & 308;// 308
static +xlDialogScenarioMerge: Class<Excel$XlBuiltInDialog__xlDialogScenarioMerge> & Excel$XlBuiltInDialog__xlDialogScenarioMerge & 473;// 473
static +xlDialogScenarioSummary: Class<Excel$XlBuiltInDialog__xlDialogScenarioSummary> & Excel$XlBuiltInDialog__xlDialogScenarioSummary & 311;// 311
static +xlDialogScrollbarProperties: Class<Excel$XlBuiltInDialog__xlDialogScrollbarProperties> & Excel$XlBuiltInDialog__xlDialogScrollbarProperties & 420;// 420
static +xlDialogSearch: Class<Excel$XlBuiltInDialog__xlDialogSearch> & Excel$XlBuiltInDialog__xlDialogSearch & 731;// 731
static +xlDialogSelectSpecial: Class<Excel$XlBuiltInDialog__xlDialogSelectSpecial> & Excel$XlBuiltInDialog__xlDialogSelectSpecial & 132;// 132
static +xlDialogSendMail: Class<Excel$XlBuiltInDialog__xlDialogSendMail> & Excel$XlBuiltInDialog__xlDialogSendMail & 189;// 189
static +xlDialogSeriesAxes: Class<Excel$XlBuiltInDialog__xlDialogSeriesAxes> & Excel$XlBuiltInDialog__xlDialogSeriesAxes & 460;// 460
static +xlDialogSeriesOptions: Class<Excel$XlBuiltInDialog__xlDialogSeriesOptions> & Excel$XlBuiltInDialog__xlDialogSeriesOptions & 557;// 557
static +xlDialogSeriesOrder: Class<Excel$XlBuiltInDialog__xlDialogSeriesOrder> & Excel$XlBuiltInDialog__xlDialogSeriesOrder & 466;// 466
static +xlDialogSeriesShape: Class<Excel$XlBuiltInDialog__xlDialogSeriesShape> & Excel$XlBuiltInDialog__xlDialogSeriesShape & 504;// 504
static +xlDialogSeriesX: Class<Excel$XlBuiltInDialog__xlDialogSeriesX> & Excel$XlBuiltInDialog__xlDialogSeriesX & 461;// 461
static +xlDialogSeriesY: Class<Excel$XlBuiltInDialog__xlDialogSeriesY> & Excel$XlBuiltInDialog__xlDialogSeriesY & 462;// 462
static +xlDialogSetBackgroundPicture: Class<Excel$XlBuiltInDialog__xlDialogSetBackgroundPicture> & Excel$XlBuiltInDialog__xlDialogSetBackgroundPicture & 509;// 509
static +xlDialogSetManager: Class<Excel$XlBuiltInDialog__xlDialogSetManager> & Excel$XlBuiltInDialog__xlDialogSetManager & 1109;// 1109
static +xlDialogSetMDXEditor: Class<Excel$XlBuiltInDialog__xlDialogSetMDXEditor> & Excel$XlBuiltInDialog__xlDialogSetMDXEditor & 1208;// 1208
static +xlDialogSetPrintTitles: Class<Excel$XlBuiltInDialog__xlDialogSetPrintTitles> & Excel$XlBuiltInDialog__xlDialogSetPrintTitles & 23;// 23
static +xlDialogSetTupleEditorOnColumns: Class<Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnColumns> & Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnColumns & 1108;// 1108
static +xlDialogSetTupleEditorOnRows: Class<Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnRows> & Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnRows & 1107;// 1107
static +xlDialogSetUpdateStatus: Class<Excel$XlBuiltInDialog__xlDialogSetUpdateStatus> & Excel$XlBuiltInDialog__xlDialogSetUpdateStatus & 159;// 159
static +xlDialogShowDetail: Class<Excel$XlBuiltInDialog__xlDialogShowDetail> & Excel$XlBuiltInDialog__xlDialogShowDetail & 204;// 204
static +xlDialogShowToolbar: Class<Excel$XlBuiltInDialog__xlDialogShowToolbar> & Excel$XlBuiltInDialog__xlDialogShowToolbar & 220;// 220
static +xlDialogSize: Class<Excel$XlBuiltInDialog__xlDialogSize> & Excel$XlBuiltInDialog__xlDialogSize & 261;// 261
static +xlDialogSlicerCreation: Class<Excel$XlBuiltInDialog__xlDialogSlicerCreation> & Excel$XlBuiltInDialog__xlDialogSlicerCreation & 1182;// 1182
static +xlDialogSlicerPivotTableConnections: Class<Excel$XlBuiltInDialog__xlDialogSlicerPivotTableConnections> & Excel$XlBuiltInDialog__xlDialogSlicerPivotTableConnections & 1184;// 1184
static +xlDialogSlicerSettings: Class<Excel$XlBuiltInDialog__xlDialogSlicerSettings> & Excel$XlBuiltInDialog__xlDialogSlicerSettings & 1179;// 1179
static +xlDialogSort: Class<Excel$XlBuiltInDialog__xlDialogSort> & Excel$XlBuiltInDialog__xlDialogSort & 39;// 39
static +xlDialogSortSpecial: Class<Excel$XlBuiltInDialog__xlDialogSortSpecial> & Excel$XlBuiltInDialog__xlDialogSortSpecial & 192;// 192
static +xlDialogSparklineInsertColumn: Class<Excel$XlBuiltInDialog__xlDialogSparklineInsertColumn> & Excel$XlBuiltInDialog__xlDialogSparklineInsertColumn & 1134;// 1134
static +xlDialogSparklineInsertLine: Class<Excel$XlBuiltInDialog__xlDialogSparklineInsertLine> & Excel$XlBuiltInDialog__xlDialogSparklineInsertLine & 1133;// 1133
static +xlDialogSparklineInsertWinLoss: Class<Excel$XlBuiltInDialog__xlDialogSparklineInsertWinLoss> & Excel$XlBuiltInDialog__xlDialogSparklineInsertWinLoss & 1135;// 1135
static +xlDialogSplit: Class<Excel$XlBuiltInDialog__xlDialogSplit> & Excel$XlBuiltInDialog__xlDialogSplit & 137;// 137
static +xlDialogStandardFont: Class<Excel$XlBuiltInDialog__xlDialogStandardFont> & Excel$XlBuiltInDialog__xlDialogStandardFont & 190;// 190
static +xlDialogStandardWidth: Class<Excel$XlBuiltInDialog__xlDialogStandardWidth> & Excel$XlBuiltInDialog__xlDialogStandardWidth & 472;// 472
static +xlDialogStyle: Class<Excel$XlBuiltInDialog__xlDialogStyle> & Excel$XlBuiltInDialog__xlDialogStyle & 44;// 44
static +xlDialogSubscribeTo: Class<Excel$XlBuiltInDialog__xlDialogSubscribeTo> & Excel$XlBuiltInDialog__xlDialogSubscribeTo & 218;// 218
static +xlDialogSubtotalCreate: Class<Excel$XlBuiltInDialog__xlDialogSubtotalCreate> & Excel$XlBuiltInDialog__xlDialogSubtotalCreate & 398;// 398
static +xlDialogSummaryInfo: Class<Excel$XlBuiltInDialog__xlDialogSummaryInfo> & Excel$XlBuiltInDialog__xlDialogSummaryInfo & 474;// 474
static +xlDialogTable: Class<Excel$XlBuiltInDialog__xlDialogTable> & Excel$XlBuiltInDialog__xlDialogTable & 41;// 41
static +xlDialogTabOrder: Class<Excel$XlBuiltInDialog__xlDialogTabOrder> & Excel$XlBuiltInDialog__xlDialogTabOrder & 394;// 394
static +xlDialogTextToColumns: Class<Excel$XlBuiltInDialog__xlDialogTextToColumns> & Excel$XlBuiltInDialog__xlDialogTextToColumns & 422;// 422
static +xlDialogUnhide: Class<Excel$XlBuiltInDialog__xlDialogUnhide> & Excel$XlBuiltInDialog__xlDialogUnhide & 94;// 94
static +xlDialogUpdateLink: Class<Excel$XlBuiltInDialog__xlDialogUpdateLink> & Excel$XlBuiltInDialog__xlDialogUpdateLink & 201;// 201
static +xlDialogVbaInsertFile: Class<Excel$XlBuiltInDialog__xlDialogVbaInsertFile> & Excel$XlBuiltInDialog__xlDialogVbaInsertFile & 328;// 328
static +xlDialogVbaMakeAddin: Class<Excel$XlBuiltInDialog__xlDialogVbaMakeAddin> & Excel$XlBuiltInDialog__xlDialogVbaMakeAddin & 478;// 478
static +xlDialogVbaProcedureDefinition: Class<Excel$XlBuiltInDialog__xlDialogVbaProcedureDefinition> & Excel$XlBuiltInDialog__xlDialogVbaProcedureDefinition & 330;// 330
static +xlDialogView3d: Class<Excel$XlBuiltInDialog__xlDialogView3d> & Excel$XlBuiltInDialog__xlDialogView3d & 197;// 197
static +xlDialogWebOptionsBrowsers: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsBrowsers> & Excel$XlBuiltInDialog__xlDialogWebOptionsBrowsers & 773;// 773
static +xlDialogWebOptionsEncoding: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsEncoding> & Excel$XlBuiltInDialog__xlDialogWebOptionsEncoding & 686;// 686
static +xlDialogWebOptionsFiles: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsFiles> & Excel$XlBuiltInDialog__xlDialogWebOptionsFiles & 684;// 684
static +xlDialogWebOptionsFonts: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsFonts> & Excel$XlBuiltInDialog__xlDialogWebOptionsFonts & 687;// 687
static +xlDialogWebOptionsGeneral: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsGeneral> & Excel$XlBuiltInDialog__xlDialogWebOptionsGeneral & 683;// 683
static +xlDialogWebOptionsPictures: Class<Excel$XlBuiltInDialog__xlDialogWebOptionsPictures> & Excel$XlBuiltInDialog__xlDialogWebOptionsPictures & 685;// 685
static +xlDialogWindowMove: Class<Excel$XlBuiltInDialog__xlDialogWindowMove> & Excel$XlBuiltInDialog__xlDialogWindowMove & 14;// 14
static +xlDialogWindowSize: Class<Excel$XlBuiltInDialog__xlDialogWindowSize> & Excel$XlBuiltInDialog__xlDialogWindowSize & 13;// 13
static +xlDialogWorkbookAdd: Class<Excel$XlBuiltInDialog__xlDialogWorkbookAdd> & Excel$XlBuiltInDialog__xlDialogWorkbookAdd & 281;// 281
static +xlDialogWorkbookCopy: Class<Excel$XlBuiltInDialog__xlDialogWorkbookCopy> & Excel$XlBuiltInDialog__xlDialogWorkbookCopy & 283;// 283
static +xlDialogWorkbookInsert: Class<Excel$XlBuiltInDialog__xlDialogWorkbookInsert> & Excel$XlBuiltInDialog__xlDialogWorkbookInsert & 354;// 354
static +xlDialogWorkbookMove: Class<Excel$XlBuiltInDialog__xlDialogWorkbookMove> & Excel$XlBuiltInDialog__xlDialogWorkbookMove & 282;// 282
static +xlDialogWorkbookName: Class<Excel$XlBuiltInDialog__xlDialogWorkbookName> & Excel$XlBuiltInDialog__xlDialogWorkbookName & 386;// 386
static +xlDialogWorkbookNew: Class<Excel$XlBuiltInDialog__xlDialogWorkbookNew> & Excel$XlBuiltInDialog__xlDialogWorkbookNew & 302;// 302
static +xlDialogWorkbookOptions: Class<Excel$XlBuiltInDialog__xlDialogWorkbookOptions> & Excel$XlBuiltInDialog__xlDialogWorkbookOptions & 284;// 284
static +xlDialogWorkbookProtect: Class<Excel$XlBuiltInDialog__xlDialogWorkbookProtect> & Excel$XlBuiltInDialog__xlDialogWorkbookProtect & 417;// 417
static +xlDialogWorkbookTabSplit: Class<Excel$XlBuiltInDialog__xlDialogWorkbookTabSplit> & Excel$XlBuiltInDialog__xlDialogWorkbookTabSplit & 415;// 415
static +xlDialogWorkbookUnhide: Class<Excel$XlBuiltInDialog__xlDialogWorkbookUnhide> & Excel$XlBuiltInDialog__xlDialogWorkbookUnhide & 384;// 384
static +xlDialogWorkgroup: Class<Excel$XlBuiltInDialog__xlDialogWorkgroup> & Excel$XlBuiltInDialog__xlDialogWorkgroup & 199;// 199
static +xlDialogWorkspace: Class<Excel$XlBuiltInDialog__xlDialogWorkspace> & Excel$XlBuiltInDialog__xlDialogWorkspace & 95;// 95
static +xlDialogZoom: Class<Excel$XlBuiltInDialog__xlDialogZoom> & Excel$XlBuiltInDialog__xlDialogZoom & 256;// 256

}

declare class Excel$XlBuiltInDialog___xlDialogChartSourceData mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog___xlDialogPhonetic mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogActivate mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogActiveCellFont mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAddChartAutoformat mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAddinManager mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAlignment mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogApplyNames mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogApplyStyle mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAppMove mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAppSize mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogArrangeAll mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAssignToObject mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAssignToTool mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAttachText mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAttachToolbars mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAutoCorrect mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogAxes mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogBorder mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCalculation mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCellProtection mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChangeLink mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartAddData mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartLocation mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabelMultiple mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartOptionsDataLabels mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartOptionsDataTable mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartSourceData mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartTrend mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartType mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogChartWizard mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCheckboxProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogClear mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogColorPalette mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogColumnWidth mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCombination mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogConditionalFormatting mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogConsolidate mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCopyChart mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCopyPicture mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCreateList mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCreateNames mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCreatePublisher mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCustomizeToolbar mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogCustomViews mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDataDelete mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDataLabel mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDataLabelMultiple mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDataSeries mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDataValidation mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDefineName mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDefineStyle mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDeleteFormat mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDeleteName mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDemote mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDisplay mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogDocumentInspector mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEditboxProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEditColor mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEditDelete mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEditionOptions mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEditSeries mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogErrorbarX mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogErrorbarY mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogErrorChecking mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogEvaluateFormula mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogExternalDataProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogExtract mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFileDelete mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFileSharing mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFillGroup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFillWorkgroup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFilter mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFilterAdvanced mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFindFile mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFont mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFontProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatAuto mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatChart mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatCharttype mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatFont mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatLegend mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatMain mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatMove mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatNumber mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatOverlay mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatSize mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormatText mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormulaFind mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormulaGoto mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFormulaReplace mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogFunctionWizard mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dArea mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dBar mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dColumn mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dLine mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dPie mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGallery3dSurface mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryArea mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryBar mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryColumn mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryCustom mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryDoughnut mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryLine mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryPie mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryRadar mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGalleryScatter mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGoalSeek mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogGridlines mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogImportTextFile mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsert mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsertHyperlink mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsertNameLabel mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsertObject mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsertPicture mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogInsertTitle mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogLabelProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogListboxProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMacroOptions mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMailEditMailer mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMailLogon mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMailNextLetter mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMainChart mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMainChartType mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMenuEditor mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMove mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogMyPermission mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogNameManager mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogNew mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogNewName mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogNewWebQuery mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogNote mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogObjectProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogObjectProtection mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOpen mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOpenLinks mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOpenMail mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOpenText mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsCalculation mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsChart mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsEdit mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsGeneral mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsListsAdd mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsME mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsTransition mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOptionsView mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOutline mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOverlay mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogOverlayChartType mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPageSetup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogParse mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPasteNames mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPasteSpecial mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPatterns mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPermission mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPhonetic mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotCalculatedField mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotCalculatedItem mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotClientServerSet mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotFieldGroup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotFieldProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotFieldUngroup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotShowPages mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotSolveOrder mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotTableOptions mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotTableSlicerConnections mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotTableWhatIfAnalysisSettings mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPivotTableWizard mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPlacement mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPrint mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPrinterSetup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPrintPreview mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPromote mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPropertyFields mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogProtectDocument mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogProtectSharing mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPublishAsWebPage mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogPushbuttonProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogReplaceFont mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogRoutingSlip mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogRowHeight mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogRun mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSaveAs mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSaveCopyAs mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSaveNewObject mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSaveWorkbook mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSaveWorkspace mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScale mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScenarioAdd mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScenarioCells mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScenarioEdit mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScenarioMerge mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScenarioSummary mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogScrollbarProperties mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSearch mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSelectSpecial mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSendMail mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesAxes mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesOptions mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesOrder mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesShape mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesX mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSeriesY mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetBackgroundPicture mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetManager mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetMDXEditor mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetPrintTitles mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnColumns mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetTupleEditorOnRows mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSetUpdateStatus mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogShowDetail mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogShowToolbar mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSize mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSlicerCreation mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSlicerPivotTableConnections mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSlicerSettings mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSort mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSortSpecial mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSparklineInsertColumn mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSparklineInsertLine mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSparklineInsertWinLoss mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSplit mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogStandardFont mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogStandardWidth mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogStyle mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSubscribeTo mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSubtotalCreate mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogSummaryInfo mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogTable mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogTabOrder mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogTextToColumns mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogUnhide mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogUpdateLink mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogVbaInsertFile mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogVbaMakeAddin mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogVbaProcedureDefinition mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogView3d mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsBrowsers mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsEncoding mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsFiles mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsFonts mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsGeneral mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWebOptionsPictures mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWindowMove mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWindowSize mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookAdd mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookCopy mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookInsert mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookMove mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookName mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookNew mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookOptions mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookProtect mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookTabSplit mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkbookUnhide mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkgroup mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogWorkspace mixins Excel$XlBuiltInDialog {}
declare class Excel$XlBuiltInDialog__xlDialogZoom mixins Excel$XlBuiltInDialog {}


declare  class Excel$XlCalcFor {
  constructor(...args: empty): mixed;
static +xlAllValues: Class<Excel$XlCalcFor__xlAllValues> & Excel$XlCalcFor__xlAllValues & 0;// 0
static +xlColGroups: Class<Excel$XlCalcFor__xlColGroups> & Excel$XlCalcFor__xlColGroups & 2;// 2
static +xlRowGroups: Class<Excel$XlCalcFor__xlRowGroups> & Excel$XlCalcFor__xlRowGroups & 1;// 1

}

declare class Excel$XlCalcFor__xlAllValues mixins Excel$XlCalcFor {}
declare class Excel$XlCalcFor__xlColGroups mixins Excel$XlCalcFor {}
declare class Excel$XlCalcFor__xlRowGroups mixins Excel$XlCalcFor {}


declare  class Excel$XlCalculatedMemberType {
  constructor(...args: empty): mixed;
static +xlCalculatedMember: Class<Excel$XlCalculatedMemberType__xlCalculatedMember> & Excel$XlCalculatedMemberType__xlCalculatedMember & 0;// 0
static +xlCalculatedSet: Class<Excel$XlCalculatedMemberType__xlCalculatedSet> & Excel$XlCalculatedMemberType__xlCalculatedSet & 1;// 1

}

declare class Excel$XlCalculatedMemberType__xlCalculatedMember mixins Excel$XlCalculatedMemberType {}
declare class Excel$XlCalculatedMemberType__xlCalculatedSet mixins Excel$XlCalculatedMemberType {}


declare  class Excel$XlCalculation {
  constructor(...args: empty): mixed;
static +xlCalculationAutomatic: Class<Excel$XlCalculation__xlCalculationAutomatic> & Excel$XlCalculation__xlCalculationAutomatic & -4105;// -4105
static +xlCalculationManual: Class<Excel$XlCalculation__xlCalculationManual> & Excel$XlCalculation__xlCalculationManual & -4135;// -4135
static +xlCalculationSemiautomatic: Class<Excel$XlCalculation__xlCalculationSemiautomatic> & Excel$XlCalculation__xlCalculationSemiautomatic & 2;// 2

}

declare class Excel$XlCalculation__xlCalculationAutomatic mixins Excel$XlCalculation {}
declare class Excel$XlCalculation__xlCalculationManual mixins Excel$XlCalculation {}
declare class Excel$XlCalculation__xlCalculationSemiautomatic mixins Excel$XlCalculation {}


declare  class Excel$XlCalculationInterruptKey {
  constructor(...args: empty): mixed;
static +xlAnyKey: Class<Excel$XlCalculationInterruptKey__xlAnyKey> & Excel$XlCalculationInterruptKey__xlAnyKey & 2;// 2
static +xlEscKey: Class<Excel$XlCalculationInterruptKey__xlEscKey> & Excel$XlCalculationInterruptKey__xlEscKey & 1;// 1
static +xlNoKey: Class<Excel$XlCalculationInterruptKey__xlNoKey> & Excel$XlCalculationInterruptKey__xlNoKey & 0;// 0

}

declare class Excel$XlCalculationInterruptKey__xlAnyKey mixins Excel$XlCalculationInterruptKey {}
declare class Excel$XlCalculationInterruptKey__xlEscKey mixins Excel$XlCalculationInterruptKey {}
declare class Excel$XlCalculationInterruptKey__xlNoKey mixins Excel$XlCalculationInterruptKey {}


declare  class Excel$XlCalculationState {
  constructor(...args: empty): mixed;
static +xlCalculating: Class<Excel$XlCalculationState__xlCalculating> & Excel$XlCalculationState__xlCalculating & 1;// 1
static +xlDone: Class<Excel$XlCalculationState__xlDone> & Excel$XlCalculationState__xlDone & 0;// 0
static +xlPending: Class<Excel$XlCalculationState__xlPending> & Excel$XlCalculationState__xlPending & 2;// 2

}

declare class Excel$XlCalculationState__xlCalculating mixins Excel$XlCalculationState {}
declare class Excel$XlCalculationState__xlDone mixins Excel$XlCalculationState {}
declare class Excel$XlCalculationState__xlPending mixins Excel$XlCalculationState {}


declare  class Excel$XlCategoryType {
  constructor(...args: empty): mixed;
static +xlAutomaticScale: Class<Excel$XlCategoryType__xlAutomaticScale> & Excel$XlCategoryType__xlAutomaticScale & -4105;// -4105
static +xlCategoryScale: Class<Excel$XlCategoryType__xlCategoryScale> & Excel$XlCategoryType__xlCategoryScale & 2;// 2
static +xlTimeScale: Class<Excel$XlCategoryType__xlTimeScale> & Excel$XlCategoryType__xlTimeScale & 3;// 3

}

declare class Excel$XlCategoryType__xlAutomaticScale mixins Excel$XlCategoryType {}
declare class Excel$XlCategoryType__xlCategoryScale mixins Excel$XlCategoryType {}
declare class Excel$XlCategoryType__xlTimeScale mixins Excel$XlCategoryType {}


declare  class Excel$XlCellChangedState {
  constructor(...args: empty): mixed;
static +xlCellChangeApplied: Class<Excel$XlCellChangedState__xlCellChangeApplied> & Excel$XlCellChangedState__xlCellChangeApplied & 3;// 3
static +xlCellChanged: Class<Excel$XlCellChangedState__xlCellChanged> & Excel$XlCellChangedState__xlCellChanged & 2;// 2
static +xlCellNotChanged: Class<Excel$XlCellChangedState__xlCellNotChanged> & Excel$XlCellChangedState__xlCellNotChanged & 1;// 1

}

declare class Excel$XlCellChangedState__xlCellChangeApplied mixins Excel$XlCellChangedState {}
declare class Excel$XlCellChangedState__xlCellChanged mixins Excel$XlCellChangedState {}
declare class Excel$XlCellChangedState__xlCellNotChanged mixins Excel$XlCellChangedState {}


declare  class Excel$XlCellInsertionMode {
  constructor(...args: empty): mixed;
static +xlInsertDeleteCells: Class<Excel$XlCellInsertionMode__xlInsertDeleteCells> & Excel$XlCellInsertionMode__xlInsertDeleteCells & 1;// 1
static +xlInsertEntireRows: Class<Excel$XlCellInsertionMode__xlInsertEntireRows> & Excel$XlCellInsertionMode__xlInsertEntireRows & 2;// 2
static +xlOverwriteCells: Class<Excel$XlCellInsertionMode__xlOverwriteCells> & Excel$XlCellInsertionMode__xlOverwriteCells & 0;// 0

}

declare class Excel$XlCellInsertionMode__xlInsertDeleteCells mixins Excel$XlCellInsertionMode {}
declare class Excel$XlCellInsertionMode__xlInsertEntireRows mixins Excel$XlCellInsertionMode {}
declare class Excel$XlCellInsertionMode__xlOverwriteCells mixins Excel$XlCellInsertionMode {}


declare  class Excel$XlCellType {
  constructor(...args: empty): mixed;
static +xlCellTypeAllFormatConditions: Class<Excel$XlCellType__xlCellTypeAllFormatConditions> & Excel$XlCellType__xlCellTypeAllFormatConditions & -4172;// -4172
static +xlCellTypeAllValidation: Class<Excel$XlCellType__xlCellTypeAllValidation> & Excel$XlCellType__xlCellTypeAllValidation & -4174;// -4174
static +xlCellTypeBlanks: Class<Excel$XlCellType__xlCellTypeBlanks> & Excel$XlCellType__xlCellTypeBlanks & 4;// 4
static +xlCellTypeComments: Class<Excel$XlCellType__xlCellTypeComments> & Excel$XlCellType__xlCellTypeComments & -4144;// -4144
static +xlCellTypeConstants: Class<Excel$XlCellType__xlCellTypeConstants> & Excel$XlCellType__xlCellTypeConstants & 2;// 2
static +xlCellTypeFormulas: Class<Excel$XlCellType__xlCellTypeFormulas> & Excel$XlCellType__xlCellTypeFormulas & -4123;// -4123
static +xlCellTypeLastCell: Class<Excel$XlCellType__xlCellTypeLastCell> & Excel$XlCellType__xlCellTypeLastCell & 11;// 11
static +xlCellTypeSameFormatConditions: Class<Excel$XlCellType__xlCellTypeSameFormatConditions> & Excel$XlCellType__xlCellTypeSameFormatConditions & -4173;// -4173
static +xlCellTypeSameValidation: Class<Excel$XlCellType__xlCellTypeSameValidation> & Excel$XlCellType__xlCellTypeSameValidation & -4175;// -4175
static +xlCellTypeVisible: Class<Excel$XlCellType__xlCellTypeVisible> & Excel$XlCellType__xlCellTypeVisible & 12;// 12

}

declare class Excel$XlCellType__xlCellTypeAllFormatConditions mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeAllValidation mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeBlanks mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeComments mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeConstants mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeFormulas mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeLastCell mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeSameFormatConditions mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeSameValidation mixins Excel$XlCellType {}
declare class Excel$XlCellType__xlCellTypeVisible mixins Excel$XlCellType {}


declare  class Excel$XlChartElementPosition {
  constructor(...args: empty): mixed;
static +xlChartElementPositionAutomatic: Class<Excel$XlChartElementPosition__xlChartElementPositionAutomatic> & Excel$XlChartElementPosition__xlChartElementPositionAutomatic & -4105;// -4105
static +xlChartElementPositionCustom: Class<Excel$XlChartElementPosition__xlChartElementPositionCustom> & Excel$XlChartElementPosition__xlChartElementPositionCustom & -4114;// -4114

}

declare class Excel$XlChartElementPosition__xlChartElementPositionAutomatic mixins Excel$XlChartElementPosition {}
declare class Excel$XlChartElementPosition__xlChartElementPositionCustom mixins Excel$XlChartElementPosition {}


declare  class Excel$XlChartGallery {
  constructor(...args: empty): mixed;
static +xlAnyGallery: Class<Excel$XlChartGallery__xlAnyGallery> & Excel$XlChartGallery__xlAnyGallery & 23;// 23
static +xlBuiltIn: Class<Excel$XlChartGallery__xlBuiltIn> & Excel$XlChartGallery__xlBuiltIn & 21;// 21
static +xlUserDefined: Class<Excel$XlChartGallery__xlUserDefined> & Excel$XlChartGallery__xlUserDefined & 22;// 22

}

declare class Excel$XlChartGallery__xlAnyGallery mixins Excel$XlChartGallery {}
declare class Excel$XlChartGallery__xlBuiltIn mixins Excel$XlChartGallery {}
declare class Excel$XlChartGallery__xlUserDefined mixins Excel$XlChartGallery {}


declare  class Excel$XlChartItem {
  constructor(...args: empty): mixed;
static +xlAxis: Class<Excel$XlChartItem__xlAxis> & Excel$XlChartItem__xlAxis & 21;// 21
static +xlAxisTitle: Class<Excel$XlChartItem__xlAxisTitle> & Excel$XlChartItem__xlAxisTitle & 17;// 17
static +xlChartArea: Class<Excel$XlChartItem__xlChartArea> & Excel$XlChartItem__xlChartArea & 2;// 2
static +xlChartTitle: Class<Excel$XlChartItem__xlChartTitle> & Excel$XlChartItem__xlChartTitle & 4;// 4
static +xlCorners: Class<Excel$XlChartItem__xlCorners> & Excel$XlChartItem__xlCorners & 6;// 6
static +xlDataLabel: Class<Excel$XlChartItem__xlDataLabel> & Excel$XlChartItem__xlDataLabel & 0;// 0
static +xlDataTable: Class<Excel$XlChartItem__xlDataTable> & Excel$XlChartItem__xlDataTable & 7;// 7
static +xlDisplayUnitLabel: Class<Excel$XlChartItem__xlDisplayUnitLabel> & Excel$XlChartItem__xlDisplayUnitLabel & 30;// 30
static +xlDownBars: Class<Excel$XlChartItem__xlDownBars> & Excel$XlChartItem__xlDownBars & 20;// 20
static +xlDropLines: Class<Excel$XlChartItem__xlDropLines> & Excel$XlChartItem__xlDropLines & 26;// 26
static +xlErrorBars: Class<Excel$XlChartItem__xlErrorBars> & Excel$XlChartItem__xlErrorBars & 9;// 9
static +xlFloor: Class<Excel$XlChartItem__xlFloor> & Excel$XlChartItem__xlFloor & 23;// 23
static +xlHiLoLines: Class<Excel$XlChartItem__xlHiLoLines> & Excel$XlChartItem__xlHiLoLines & 25;// 25
static +xlLeaderLines: Class<Excel$XlChartItem__xlLeaderLines> & Excel$XlChartItem__xlLeaderLines & 29;// 29
static +xlLegend: Class<Excel$XlChartItem__xlLegend> & Excel$XlChartItem__xlLegend & 24;// 24
static +xlLegendEntry: Class<Excel$XlChartItem__xlLegendEntry> & Excel$XlChartItem__xlLegendEntry & 12;// 12
static +xlLegendKey: Class<Excel$XlChartItem__xlLegendKey> & Excel$XlChartItem__xlLegendKey & 13;// 13
static +xlMajorGridlines: Class<Excel$XlChartItem__xlMajorGridlines> & Excel$XlChartItem__xlMajorGridlines & 15;// 15
static +xlMinorGridlines: Class<Excel$XlChartItem__xlMinorGridlines> & Excel$XlChartItem__xlMinorGridlines & 16;// 16
static +xlNothing: Class<Excel$XlChartItem__xlNothing> & Excel$XlChartItem__xlNothing & 28;// 28
static +xlPivotChartDropZone: Class<Excel$XlChartItem__xlPivotChartDropZone> & Excel$XlChartItem__xlPivotChartDropZone & 32;// 32
static +xlPivotChartFieldButton: Class<Excel$XlChartItem__xlPivotChartFieldButton> & Excel$XlChartItem__xlPivotChartFieldButton & 31;// 31
static +xlPlotArea: Class<Excel$XlChartItem__xlPlotArea> & Excel$XlChartItem__xlPlotArea & 19;// 19
static +xlRadarAxisLabels: Class<Excel$XlChartItem__xlRadarAxisLabels> & Excel$XlChartItem__xlRadarAxisLabels & 27;// 27
static +xlSeries: Class<Excel$XlChartItem__xlSeries> & Excel$XlChartItem__xlSeries & 3;// 3
static +xlSeriesLines: Class<Excel$XlChartItem__xlSeriesLines> & Excel$XlChartItem__xlSeriesLines & 22;// 22
static +xlShape: Class<Excel$XlChartItem__xlShape> & Excel$XlChartItem__xlShape & 14;// 14
static +xlTrendline: Class<Excel$XlChartItem__xlTrendline> & Excel$XlChartItem__xlTrendline & 8;// 8
static +xlUpBars: Class<Excel$XlChartItem__xlUpBars> & Excel$XlChartItem__xlUpBars & 18;// 18
static +xlWalls: Class<Excel$XlChartItem__xlWalls> & Excel$XlChartItem__xlWalls & 5;// 5
static +xlXErrorBars: Class<Excel$XlChartItem__xlXErrorBars> & Excel$XlChartItem__xlXErrorBars & 10;// 10
static +xlYErrorBars: Class<Excel$XlChartItem__xlYErrorBars> & Excel$XlChartItem__xlYErrorBars & 11;// 11

}

declare class Excel$XlChartItem__xlAxis mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlAxisTitle mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlChartArea mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlChartTitle mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlCorners mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlDataLabel mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlDataTable mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlDisplayUnitLabel mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlDownBars mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlDropLines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlErrorBars mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlFloor mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlHiLoLines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlLeaderLines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlLegend mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlLegendEntry mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlLegendKey mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlMajorGridlines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlMinorGridlines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlNothing mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlPivotChartDropZone mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlPivotChartFieldButton mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlPlotArea mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlRadarAxisLabels mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlSeries mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlSeriesLines mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlShape mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlTrendline mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlUpBars mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlWalls mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlXErrorBars mixins Excel$XlChartItem {}
declare class Excel$XlChartItem__xlYErrorBars mixins Excel$XlChartItem {}


declare  class Excel$XlChartLocation {
  constructor(...args: empty): mixed;
static +xlLocationAsNewSheet: Class<Excel$XlChartLocation__xlLocationAsNewSheet> & Excel$XlChartLocation__xlLocationAsNewSheet & 1;// 1
static +xlLocationAsObject: Class<Excel$XlChartLocation__xlLocationAsObject> & Excel$XlChartLocation__xlLocationAsObject & 2;// 2
static +xlLocationAutomatic: Class<Excel$XlChartLocation__xlLocationAutomatic> & Excel$XlChartLocation__xlLocationAutomatic & 3;// 3

}

declare class Excel$XlChartLocation__xlLocationAsNewSheet mixins Excel$XlChartLocation {}
declare class Excel$XlChartLocation__xlLocationAsObject mixins Excel$XlChartLocation {}
declare class Excel$XlChartLocation__xlLocationAutomatic mixins Excel$XlChartLocation {}


declare  class Excel$XlChartPicturePlacement {
  constructor(...args: empty): mixed;
static +xlAllFaces: Class<Excel$XlChartPicturePlacement__xlAllFaces> & Excel$XlChartPicturePlacement__xlAllFaces & 7;// 7
static +xlEnd: Class<Excel$XlChartPicturePlacement__xlEnd> & Excel$XlChartPicturePlacement__xlEnd & 2;// 2
static +xlEndSides: Class<Excel$XlChartPicturePlacement__xlEndSides> & Excel$XlChartPicturePlacement__xlEndSides & 3;// 3
static +xlFront: Class<Excel$XlChartPicturePlacement__xlFront> & Excel$XlChartPicturePlacement__xlFront & 4;// 4
static +xlFrontEnd: Class<Excel$XlChartPicturePlacement__xlFrontEnd> & Excel$XlChartPicturePlacement__xlFrontEnd & 6;// 6
static +xlFrontSides: Class<Excel$XlChartPicturePlacement__xlFrontSides> & Excel$XlChartPicturePlacement__xlFrontSides & 5;// 5
static +xlSides: Class<Excel$XlChartPicturePlacement__xlSides> & Excel$XlChartPicturePlacement__xlSides & 1;// 1

}

declare class Excel$XlChartPicturePlacement__xlAllFaces mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlEnd mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlEndSides mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlFront mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlFrontEnd mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlFrontSides mixins Excel$XlChartPicturePlacement {}
declare class Excel$XlChartPicturePlacement__xlSides mixins Excel$XlChartPicturePlacement {}


declare  class Excel$XlChartPictureType {
  constructor(...args: empty): mixed;
static +xlStack: Class<Excel$XlChartPictureType__xlStack> & Excel$XlChartPictureType__xlStack & 2;// 2
static +xlStackScale: Class<Excel$XlChartPictureType__xlStackScale> & Excel$XlChartPictureType__xlStackScale & 3;// 3
static +xlStretch: Class<Excel$XlChartPictureType__xlStretch> & Excel$XlChartPictureType__xlStretch & 1;// 1

}

declare class Excel$XlChartPictureType__xlStack mixins Excel$XlChartPictureType {}
declare class Excel$XlChartPictureType__xlStackScale mixins Excel$XlChartPictureType {}
declare class Excel$XlChartPictureType__xlStretch mixins Excel$XlChartPictureType {}


declare  class Excel$XlChartSplitType {
  constructor(...args: empty): mixed;
static +xlSplitByCustomSplit: Class<Excel$XlChartSplitType__xlSplitByCustomSplit> & Excel$XlChartSplitType__xlSplitByCustomSplit & 4;// 4
static +xlSplitByPercentValue: Class<Excel$XlChartSplitType__xlSplitByPercentValue> & Excel$XlChartSplitType__xlSplitByPercentValue & 3;// 3
static +xlSplitByPosition: Class<Excel$XlChartSplitType__xlSplitByPosition> & Excel$XlChartSplitType__xlSplitByPosition & 1;// 1
static +xlSplitByValue: Class<Excel$XlChartSplitType__xlSplitByValue> & Excel$XlChartSplitType__xlSplitByValue & 2;// 2

}

declare class Excel$XlChartSplitType__xlSplitByCustomSplit mixins Excel$XlChartSplitType {}
declare class Excel$XlChartSplitType__xlSplitByPercentValue mixins Excel$XlChartSplitType {}
declare class Excel$XlChartSplitType__xlSplitByPosition mixins Excel$XlChartSplitType {}
declare class Excel$XlChartSplitType__xlSplitByValue mixins Excel$XlChartSplitType {}


declare  class Excel$XlChartType {
  constructor(...args: empty): mixed;
static +xl3DArea: Class<Excel$XlChartType__xl3DArea> & Excel$XlChartType__xl3DArea & -4098;// -4098
static +xl3DAreaStacked: Class<Excel$XlChartType__xl3DAreaStacked> & Excel$XlChartType__xl3DAreaStacked & 78;// 78
static +xl3DAreaStacked100: Class<Excel$XlChartType__xl3DAreaStacked100> & Excel$XlChartType__xl3DAreaStacked100 & 79;// 79
static +xl3DBarClustered: Class<Excel$XlChartType__xl3DBarClustered> & Excel$XlChartType__xl3DBarClustered & 60;// 60
static +xl3DBarStacked: Class<Excel$XlChartType__xl3DBarStacked> & Excel$XlChartType__xl3DBarStacked & 61;// 61
static +xl3DBarStacked100: Class<Excel$XlChartType__xl3DBarStacked100> & Excel$XlChartType__xl3DBarStacked100 & 62;// 62
static +xl3DColumn: Class<Excel$XlChartType__xl3DColumn> & Excel$XlChartType__xl3DColumn & -4100;// -4100
static +xl3DColumnClustered: Class<Excel$XlChartType__xl3DColumnClustered> & Excel$XlChartType__xl3DColumnClustered & 54;// 54
static +xl3DColumnStacked: Class<Excel$XlChartType__xl3DColumnStacked> & Excel$XlChartType__xl3DColumnStacked & 55;// 55
static +xl3DColumnStacked100: Class<Excel$XlChartType__xl3DColumnStacked100> & Excel$XlChartType__xl3DColumnStacked100 & 56;// 56
static +xl3DLine: Class<Excel$XlChartType__xl3DLine> & Excel$XlChartType__xl3DLine & -4101;// -4101
static +xl3DPie: Class<Excel$XlChartType__xl3DPie> & Excel$XlChartType__xl3DPie & -4102;// -4102
static +xl3DPieExploded: Class<Excel$XlChartType__xl3DPieExploded> & Excel$XlChartType__xl3DPieExploded & 70;// 70
static +xlArea: Class<Excel$XlChartType__xlArea> & Excel$XlChartType__xlArea & 1;// 1
static +xlAreaStacked: Class<Excel$XlChartType__xlAreaStacked> & Excel$XlChartType__xlAreaStacked & 76;// 76
static +xlAreaStacked100: Class<Excel$XlChartType__xlAreaStacked100> & Excel$XlChartType__xlAreaStacked100 & 77;// 77
static +xlBarClustered: Class<Excel$XlChartType__xlBarClustered> & Excel$XlChartType__xlBarClustered & 57;// 57
static +xlBarOfPie: Class<Excel$XlChartType__xlBarOfPie> & Excel$XlChartType__xlBarOfPie & 71;// 71
static +xlBarStacked: Class<Excel$XlChartType__xlBarStacked> & Excel$XlChartType__xlBarStacked & 58;// 58
static +xlBarStacked100: Class<Excel$XlChartType__xlBarStacked100> & Excel$XlChartType__xlBarStacked100 & 59;// 59
static +xlBubble: Class<Excel$XlChartType__xlBubble> & Excel$XlChartType__xlBubble & 15;// 15
static +xlBubble3DEffect: Class<Excel$XlChartType__xlBubble3DEffect> & Excel$XlChartType__xlBubble3DEffect & 87;// 87
static +xlColumnClustered: Class<Excel$XlChartType__xlColumnClustered> & Excel$XlChartType__xlColumnClustered & 51;// 51
static +xlColumnStacked: Class<Excel$XlChartType__xlColumnStacked> & Excel$XlChartType__xlColumnStacked & 52;// 52
static +xlColumnStacked100: Class<Excel$XlChartType__xlColumnStacked100> & Excel$XlChartType__xlColumnStacked100 & 53;// 53
static +xlConeBarClustered: Class<Excel$XlChartType__xlConeBarClustered> & Excel$XlChartType__xlConeBarClustered & 102;// 102
static +xlConeBarStacked: Class<Excel$XlChartType__xlConeBarStacked> & Excel$XlChartType__xlConeBarStacked & 103;// 103
static +xlConeBarStacked100: Class<Excel$XlChartType__xlConeBarStacked100> & Excel$XlChartType__xlConeBarStacked100 & 104;// 104
static +xlConeCol: Class<Excel$XlChartType__xlConeCol> & Excel$XlChartType__xlConeCol & 105;// 105
static +xlConeColClustered: Class<Excel$XlChartType__xlConeColClustered> & Excel$XlChartType__xlConeColClustered & 99;// 99
static +xlConeColStacked: Class<Excel$XlChartType__xlConeColStacked> & Excel$XlChartType__xlConeColStacked & 100;// 100
static +xlConeColStacked100: Class<Excel$XlChartType__xlConeColStacked100> & Excel$XlChartType__xlConeColStacked100 & 101;// 101
static +xlCylinderBarClustered: Class<Excel$XlChartType__xlCylinderBarClustered> & Excel$XlChartType__xlCylinderBarClustered & 95;// 95
static +xlCylinderBarStacked: Class<Excel$XlChartType__xlCylinderBarStacked> & Excel$XlChartType__xlCylinderBarStacked & 96;// 96
static +xlCylinderBarStacked100: Class<Excel$XlChartType__xlCylinderBarStacked100> & Excel$XlChartType__xlCylinderBarStacked100 & 97;// 97
static +xlCylinderCol: Class<Excel$XlChartType__xlCylinderCol> & Excel$XlChartType__xlCylinderCol & 98;// 98
static +xlCylinderColClustered: Class<Excel$XlChartType__xlCylinderColClustered> & Excel$XlChartType__xlCylinderColClustered & 92;// 92
static +xlCylinderColStacked: Class<Excel$XlChartType__xlCylinderColStacked> & Excel$XlChartType__xlCylinderColStacked & 93;// 93
static +xlCylinderColStacked100: Class<Excel$XlChartType__xlCylinderColStacked100> & Excel$XlChartType__xlCylinderColStacked100 & 94;// 94
static +xlDoughnut: Class<Excel$XlChartType__xlDoughnut> & Excel$XlChartType__xlDoughnut & -4120;// -4120
static +xlDoughnutExploded: Class<Excel$XlChartType__xlDoughnutExploded> & Excel$XlChartType__xlDoughnutExploded & 80;// 80
static +xlLine: Class<Excel$XlChartType__xlLine> & Excel$XlChartType__xlLine & 4;// 4
static +xlLineMarkers: Class<Excel$XlChartType__xlLineMarkers> & Excel$XlChartType__xlLineMarkers & 65;// 65
static +xlLineMarkersStacked: Class<Excel$XlChartType__xlLineMarkersStacked> & Excel$XlChartType__xlLineMarkersStacked & 66;// 66
static +xlLineMarkersStacked100: Class<Excel$XlChartType__xlLineMarkersStacked100> & Excel$XlChartType__xlLineMarkersStacked100 & 67;// 67
static +xlLineStacked: Class<Excel$XlChartType__xlLineStacked> & Excel$XlChartType__xlLineStacked & 63;// 63
static +xlLineStacked100: Class<Excel$XlChartType__xlLineStacked100> & Excel$XlChartType__xlLineStacked100 & 64;// 64
static +xlPie: Class<Excel$XlChartType__xlPie> & Excel$XlChartType__xlPie & 5;// 5
static +xlPieExploded: Class<Excel$XlChartType__xlPieExploded> & Excel$XlChartType__xlPieExploded & 69;// 69
static +xlPieOfPie: Class<Excel$XlChartType__xlPieOfPie> & Excel$XlChartType__xlPieOfPie & 68;// 68
static +xlPyramidBarClustered: Class<Excel$XlChartType__xlPyramidBarClustered> & Excel$XlChartType__xlPyramidBarClustered & 109;// 109
static +xlPyramidBarStacked: Class<Excel$XlChartType__xlPyramidBarStacked> & Excel$XlChartType__xlPyramidBarStacked & 110;// 110
static +xlPyramidBarStacked100: Class<Excel$XlChartType__xlPyramidBarStacked100> & Excel$XlChartType__xlPyramidBarStacked100 & 111;// 111
static +xlPyramidCol: Class<Excel$XlChartType__xlPyramidCol> & Excel$XlChartType__xlPyramidCol & 112;// 112
static +xlPyramidColClustered: Class<Excel$XlChartType__xlPyramidColClustered> & Excel$XlChartType__xlPyramidColClustered & 106;// 106
static +xlPyramidColStacked: Class<Excel$XlChartType__xlPyramidColStacked> & Excel$XlChartType__xlPyramidColStacked & 107;// 107
static +xlPyramidColStacked100: Class<Excel$XlChartType__xlPyramidColStacked100> & Excel$XlChartType__xlPyramidColStacked100 & 108;// 108
static +xlRadar: Class<Excel$XlChartType__xlRadar> & Excel$XlChartType__xlRadar & -4151;// -4151
static +xlRadarFilled: Class<Excel$XlChartType__xlRadarFilled> & Excel$XlChartType__xlRadarFilled & 82;// 82
static +xlRadarMarkers: Class<Excel$XlChartType__xlRadarMarkers> & Excel$XlChartType__xlRadarMarkers & 81;// 81
static +xlStockHLC: Class<Excel$XlChartType__xlStockHLC> & Excel$XlChartType__xlStockHLC & 88;// 88
static +xlStockOHLC: Class<Excel$XlChartType__xlStockOHLC> & Excel$XlChartType__xlStockOHLC & 89;// 89
static +xlStockVHLC: Class<Excel$XlChartType__xlStockVHLC> & Excel$XlChartType__xlStockVHLC & 90;// 90
static +xlStockVOHLC: Class<Excel$XlChartType__xlStockVOHLC> & Excel$XlChartType__xlStockVOHLC & 91;// 91
static +xlSurface: Class<Excel$XlChartType__xlSurface> & Excel$XlChartType__xlSurface & 83;// 83
static +xlSurfaceTopView: Class<Excel$XlChartType__xlSurfaceTopView> & Excel$XlChartType__xlSurfaceTopView & 85;// 85
static +xlSurfaceTopViewWireframe: Class<Excel$XlChartType__xlSurfaceTopViewWireframe> & Excel$XlChartType__xlSurfaceTopViewWireframe & 86;// 86
static +xlSurfaceWireframe: Class<Excel$XlChartType__xlSurfaceWireframe> & Excel$XlChartType__xlSurfaceWireframe & 84;// 84
static +xlXYScatter: Class<Excel$XlChartType__xlXYScatter> & Excel$XlChartType__xlXYScatter & -4169;// -4169
static +xlXYScatterLines: Class<Excel$XlChartType__xlXYScatterLines> & Excel$XlChartType__xlXYScatterLines & 74;// 74
static +xlXYScatterLinesNoMarkers: Class<Excel$XlChartType__xlXYScatterLinesNoMarkers> & Excel$XlChartType__xlXYScatterLinesNoMarkers & 75;// 75
static +xlXYScatterSmooth: Class<Excel$XlChartType__xlXYScatterSmooth> & Excel$XlChartType__xlXYScatterSmooth & 72;// 72
static +xlXYScatterSmoothNoMarkers: Class<Excel$XlChartType__xlXYScatterSmoothNoMarkers> & Excel$XlChartType__xlXYScatterSmoothNoMarkers & 73;// 73

}

declare class Excel$XlChartType__xl3DArea mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DAreaStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DAreaStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DBarClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DBarStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DBarStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DColumn mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DColumnClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DColumnStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DColumnStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DLine mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DPie mixins Excel$XlChartType {}
declare class Excel$XlChartType__xl3DPieExploded mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlArea mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlAreaStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlAreaStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBarClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBarOfPie mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBarStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBarStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBubble mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlBubble3DEffect mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlColumnClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlColumnStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlColumnStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeBarClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeBarStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeBarStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeCol mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeColClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeColStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlConeColStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderBarClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderBarStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderBarStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderCol mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderColClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderColStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlCylinderColStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlDoughnut mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlDoughnutExploded mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLine mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLineMarkers mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLineMarkersStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLineMarkersStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLineStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlLineStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPie mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPieExploded mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPieOfPie mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidBarClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidBarStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidBarStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidCol mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidColClustered mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidColStacked mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlPyramidColStacked100 mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlRadar mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlRadarFilled mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlRadarMarkers mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlStockHLC mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlStockOHLC mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlStockVHLC mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlStockVOHLC mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlSurface mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlSurfaceTopView mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlSurfaceTopViewWireframe mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlSurfaceWireframe mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlXYScatter mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlXYScatterLines mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlXYScatterLinesNoMarkers mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlXYScatterSmooth mixins Excel$XlChartType {}
declare class Excel$XlChartType__xlXYScatterSmoothNoMarkers mixins Excel$XlChartType {}


declare  class Excel$XlCheckInVersionType {
  constructor(...args: empty): mixed;
static +xlCheckInMajorVersion: Class<Excel$XlCheckInVersionType__xlCheckInMajorVersion> & Excel$XlCheckInVersionType__xlCheckInMajorVersion & 1;// 1
static +xlCheckInMinorVersion: Class<Excel$XlCheckInVersionType__xlCheckInMinorVersion> & Excel$XlCheckInVersionType__xlCheckInMinorVersion & 0;// 0
static +xlCheckInOverwriteVersion: Class<Excel$XlCheckInVersionType__xlCheckInOverwriteVersion> & Excel$XlCheckInVersionType__xlCheckInOverwriteVersion & 2;// 2

}

declare class Excel$XlCheckInVersionType__xlCheckInMajorVersion mixins Excel$XlCheckInVersionType {}
declare class Excel$XlCheckInVersionType__xlCheckInMinorVersion mixins Excel$XlCheckInVersionType {}
declare class Excel$XlCheckInVersionType__xlCheckInOverwriteVersion mixins Excel$XlCheckInVersionType {}


declare  class Excel$XlClipboardFormat {
  constructor(...args: empty): mixed;
static +xlClipboardFormatBIFF: Class<Excel$XlClipboardFormat__xlClipboardFormatBIFF> & Excel$XlClipboardFormat__xlClipboardFormatBIFF & 8;// 8
static +xlClipboardFormatBIFF12: Class<Excel$XlClipboardFormat__xlClipboardFormatBIFF12> & Excel$XlClipboardFormat__xlClipboardFormatBIFF12 & 63;// 63
static +xlClipboardFormatBIFF2: Class<Excel$XlClipboardFormat__xlClipboardFormatBIFF2> & Excel$XlClipboardFormat__xlClipboardFormatBIFF2 & 18;// 18
static +xlClipboardFormatBIFF3: Class<Excel$XlClipboardFormat__xlClipboardFormatBIFF3> & Excel$XlClipboardFormat__xlClipboardFormatBIFF3 & 20;// 20
static +xlClipboardFormatBIFF4: Class<Excel$XlClipboardFormat__xlClipboardFormatBIFF4> & Excel$XlClipboardFormat__xlClipboardFormatBIFF4 & 30;// 30
static +xlClipboardFormatBinary: Class<Excel$XlClipboardFormat__xlClipboardFormatBinary> & Excel$XlClipboardFormat__xlClipboardFormatBinary & 15;// 15
static +xlClipboardFormatBitmap: Class<Excel$XlClipboardFormat__xlClipboardFormatBitmap> & Excel$XlClipboardFormat__xlClipboardFormatBitmap & 9;// 9
static +xlClipboardFormatCGM: Class<Excel$XlClipboardFormat__xlClipboardFormatCGM> & Excel$XlClipboardFormat__xlClipboardFormatCGM & 13;// 13
static +xlClipboardFormatCSV: Class<Excel$XlClipboardFormat__xlClipboardFormatCSV> & Excel$XlClipboardFormat__xlClipboardFormatCSV & 5;// 5
static +xlClipboardFormatDIF: Class<Excel$XlClipboardFormat__xlClipboardFormatDIF> & Excel$XlClipboardFormat__xlClipboardFormatDIF & 4;// 4
static +xlClipboardFormatDspText: Class<Excel$XlClipboardFormat__xlClipboardFormatDspText> & Excel$XlClipboardFormat__xlClipboardFormatDspText & 12;// 12
static +xlClipboardFormatEmbeddedObject: Class<Excel$XlClipboardFormat__xlClipboardFormatEmbeddedObject> & Excel$XlClipboardFormat__xlClipboardFormatEmbeddedObject & 21;// 21
static +xlClipboardFormatEmbedSource: Class<Excel$XlClipboardFormat__xlClipboardFormatEmbedSource> & Excel$XlClipboardFormat__xlClipboardFormatEmbedSource & 22;// 22
static +xlClipboardFormatLink: Class<Excel$XlClipboardFormat__xlClipboardFormatLink> & Excel$XlClipboardFormat__xlClipboardFormatLink & 11;// 11
static +xlClipboardFormatLinkSource: Class<Excel$XlClipboardFormat__xlClipboardFormatLinkSource> & Excel$XlClipboardFormat__xlClipboardFormatLinkSource & 23;// 23
static +xlClipboardFormatLinkSourceDesc: Class<Excel$XlClipboardFormat__xlClipboardFormatLinkSourceDesc> & Excel$XlClipboardFormat__xlClipboardFormatLinkSourceDesc & 32;// 32
static +xlClipboardFormatMovie: Class<Excel$XlClipboardFormat__xlClipboardFormatMovie> & Excel$XlClipboardFormat__xlClipboardFormatMovie & 24;// 24
static +xlClipboardFormatNative: Class<Excel$XlClipboardFormat__xlClipboardFormatNative> & Excel$XlClipboardFormat__xlClipboardFormatNative & 14;// 14
static +xlClipboardFormatObjectDesc: Class<Excel$XlClipboardFormat__xlClipboardFormatObjectDesc> & Excel$XlClipboardFormat__xlClipboardFormatObjectDesc & 31;// 31
static +xlClipboardFormatObjectLink: Class<Excel$XlClipboardFormat__xlClipboardFormatObjectLink> & Excel$XlClipboardFormat__xlClipboardFormatObjectLink & 19;// 19
static +xlClipboardFormatOwnerLink: Class<Excel$XlClipboardFormat__xlClipboardFormatOwnerLink> & Excel$XlClipboardFormat__xlClipboardFormatOwnerLink & 17;// 17
static +xlClipboardFormatPICT: Class<Excel$XlClipboardFormat__xlClipboardFormatPICT> & Excel$XlClipboardFormat__xlClipboardFormatPICT & 2;// 2
static +xlClipboardFormatPrintPICT: Class<Excel$XlClipboardFormat__xlClipboardFormatPrintPICT> & Excel$XlClipboardFormat__xlClipboardFormatPrintPICT & 3;// 3
static +xlClipboardFormatRTF: Class<Excel$XlClipboardFormat__xlClipboardFormatRTF> & Excel$XlClipboardFormat__xlClipboardFormatRTF & 7;// 7
static +xlClipboardFormatScreenPICT: Class<Excel$XlClipboardFormat__xlClipboardFormatScreenPICT> & Excel$XlClipboardFormat__xlClipboardFormatScreenPICT & 29;// 29
static +xlClipboardFormatStandardFont: Class<Excel$XlClipboardFormat__xlClipboardFormatStandardFont> & Excel$XlClipboardFormat__xlClipboardFormatStandardFont & 28;// 28
static +xlClipboardFormatStandardScale: Class<Excel$XlClipboardFormat__xlClipboardFormatStandardScale> & Excel$XlClipboardFormat__xlClipboardFormatStandardScale & 27;// 27
static +xlClipboardFormatSYLK: Class<Excel$XlClipboardFormat__xlClipboardFormatSYLK> & Excel$XlClipboardFormat__xlClipboardFormatSYLK & 6;// 6
static +xlClipboardFormatTable: Class<Excel$XlClipboardFormat__xlClipboardFormatTable> & Excel$XlClipboardFormat__xlClipboardFormatTable & 16;// 16
static +xlClipboardFormatText: Class<Excel$XlClipboardFormat__xlClipboardFormatText> & Excel$XlClipboardFormat__xlClipboardFormatText & 0;// 0
static +xlClipboardFormatToolFace: Class<Excel$XlClipboardFormat__xlClipboardFormatToolFace> & Excel$XlClipboardFormat__xlClipboardFormatToolFace & 25;// 25
static +xlClipboardFormatToolFacePICT: Class<Excel$XlClipboardFormat__xlClipboardFormatToolFacePICT> & Excel$XlClipboardFormat__xlClipboardFormatToolFacePICT & 26;// 26
static +xlClipboardFormatVALU: Class<Excel$XlClipboardFormat__xlClipboardFormatVALU> & Excel$XlClipboardFormat__xlClipboardFormatVALU & 1;// 1
static +xlClipboardFormatWK1: Class<Excel$XlClipboardFormat__xlClipboardFormatWK1> & Excel$XlClipboardFormat__xlClipboardFormatWK1 & 10;// 10

}

declare class Excel$XlClipboardFormat__xlClipboardFormatBIFF mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBIFF12 mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBIFF2 mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBIFF3 mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBIFF4 mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBinary mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatBitmap mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatCGM mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatCSV mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatDIF mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatDspText mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatEmbeddedObject mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatEmbedSource mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatLink mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatLinkSource mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatLinkSourceDesc mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatMovie mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatNative mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatObjectDesc mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatObjectLink mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatOwnerLink mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatPICT mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatPrintPICT mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatRTF mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatScreenPICT mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatStandardFont mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatStandardScale mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatSYLK mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatTable mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatText mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatToolFace mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatToolFacePICT mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatVALU mixins Excel$XlClipboardFormat {}
declare class Excel$XlClipboardFormat__xlClipboardFormatWK1 mixins Excel$XlClipboardFormat {}


declare  class Excel$XlCmdType {
  constructor(...args: empty): mixed;
static +xlCmdCube: Class<Excel$XlCmdType__xlCmdCube> & Excel$XlCmdType__xlCmdCube & 1;// 1
static +xlCmdDefault: Class<Excel$XlCmdType__xlCmdDefault> & Excel$XlCmdType__xlCmdDefault & 4;// 4
static +xlCmdList: Class<Excel$XlCmdType__xlCmdList> & Excel$XlCmdType__xlCmdList & 5;// 5
static +xlCmdSql: Class<Excel$XlCmdType__xlCmdSql> & Excel$XlCmdType__xlCmdSql & 2;// 2
static +xlCmdTable: Class<Excel$XlCmdType__xlCmdTable> & Excel$XlCmdType__xlCmdTable & 3;// 3

}

declare class Excel$XlCmdType__xlCmdCube mixins Excel$XlCmdType {}
declare class Excel$XlCmdType__xlCmdDefault mixins Excel$XlCmdType {}
declare class Excel$XlCmdType__xlCmdList mixins Excel$XlCmdType {}
declare class Excel$XlCmdType__xlCmdSql mixins Excel$XlCmdType {}
declare class Excel$XlCmdType__xlCmdTable mixins Excel$XlCmdType {}


declare  class Excel$XlColorIndex {
  constructor(...args: empty): mixed;
static +xlColorIndexAutomatic: Class<Excel$XlColorIndex__xlColorIndexAutomatic> & Excel$XlColorIndex__xlColorIndexAutomatic & -4105;// -4105
static +xlColorIndexNone: Class<Excel$XlColorIndex__xlColorIndexNone> & Excel$XlColorIndex__xlColorIndexNone & -4142;// -4142

}

declare class Excel$XlColorIndex__xlColorIndexAutomatic mixins Excel$XlColorIndex {}
declare class Excel$XlColorIndex__xlColorIndexNone mixins Excel$XlColorIndex {}


declare  class Excel$XlColumnDataType {
  constructor(...args: empty): mixed;
static +xlDMYFormat: Class<Excel$XlColumnDataType__xlDMYFormat> & Excel$XlColumnDataType__xlDMYFormat & 4;// 4
static +xlDYMFormat: Class<Excel$XlColumnDataType__xlDYMFormat> & Excel$XlColumnDataType__xlDYMFormat & 7;// 7
static +xlEMDFormat: Class<Excel$XlColumnDataType__xlEMDFormat> & Excel$XlColumnDataType__xlEMDFormat & 10;// 10
static +xlGeneralFormat: Class<Excel$XlColumnDataType__xlGeneralFormat> & Excel$XlColumnDataType__xlGeneralFormat & 1;// 1
static +xlMDYFormat: Class<Excel$XlColumnDataType__xlMDYFormat> & Excel$XlColumnDataType__xlMDYFormat & 3;// 3
static +xlMYDFormat: Class<Excel$XlColumnDataType__xlMYDFormat> & Excel$XlColumnDataType__xlMYDFormat & 6;// 6
static +xlSkipColumn: Class<Excel$XlColumnDataType__xlSkipColumn> & Excel$XlColumnDataType__xlSkipColumn & 9;// 9
static +xlTextFormat: Class<Excel$XlColumnDataType__xlTextFormat> & Excel$XlColumnDataType__xlTextFormat & 2;// 2
static +xlYDMFormat: Class<Excel$XlColumnDataType__xlYDMFormat> & Excel$XlColumnDataType__xlYDMFormat & 8;// 8
static +xlYMDFormat: Class<Excel$XlColumnDataType__xlYMDFormat> & Excel$XlColumnDataType__xlYMDFormat & 5;// 5

}

declare class Excel$XlColumnDataType__xlDMYFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlDYMFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlEMDFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlGeneralFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlMDYFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlMYDFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlSkipColumn mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlTextFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlYDMFormat mixins Excel$XlColumnDataType {}
declare class Excel$XlColumnDataType__xlYMDFormat mixins Excel$XlColumnDataType {}


declare  class Excel$XlCommandUnderlines {
  constructor(...args: empty): mixed;
static +xlCommandUnderlinesAutomatic: Class<Excel$XlCommandUnderlines__xlCommandUnderlinesAutomatic> & Excel$XlCommandUnderlines__xlCommandUnderlinesAutomatic & -4105;// -4105
static +xlCommandUnderlinesOff: Class<Excel$XlCommandUnderlines__xlCommandUnderlinesOff> & Excel$XlCommandUnderlines__xlCommandUnderlinesOff & -4146;// -4146
static +xlCommandUnderlinesOn: Class<Excel$XlCommandUnderlines__xlCommandUnderlinesOn> & Excel$XlCommandUnderlines__xlCommandUnderlinesOn & 1;// 1

}

declare class Excel$XlCommandUnderlines__xlCommandUnderlinesAutomatic mixins Excel$XlCommandUnderlines {}
declare class Excel$XlCommandUnderlines__xlCommandUnderlinesOff mixins Excel$XlCommandUnderlines {}
declare class Excel$XlCommandUnderlines__xlCommandUnderlinesOn mixins Excel$XlCommandUnderlines {}


declare  class Excel$XlCommentDisplayMode {
  constructor(...args: empty): mixed;
static +xlCommentAndIndicator: Class<Excel$XlCommentDisplayMode__xlCommentAndIndicator> & Excel$XlCommentDisplayMode__xlCommentAndIndicator & 1;// 1
static +xlCommentIndicatorOnly: Class<Excel$XlCommentDisplayMode__xlCommentIndicatorOnly> & Excel$XlCommentDisplayMode__xlCommentIndicatorOnly & -1;// -1
static +xlNoIndicator: Class<Excel$XlCommentDisplayMode__xlNoIndicator> & Excel$XlCommentDisplayMode__xlNoIndicator & 0;// 0

}

declare class Excel$XlCommentDisplayMode__xlCommentAndIndicator mixins Excel$XlCommentDisplayMode {}
declare class Excel$XlCommentDisplayMode__xlCommentIndicatorOnly mixins Excel$XlCommentDisplayMode {}
declare class Excel$XlCommentDisplayMode__xlNoIndicator mixins Excel$XlCommentDisplayMode {}


declare  class Excel$XlConditionValueTypes {
  constructor(...args: empty): mixed;
static +xlConditionValueAutomaticMax: Class<Excel$XlConditionValueTypes__xlConditionValueAutomaticMax> & Excel$XlConditionValueTypes__xlConditionValueAutomaticMax & 7;// 7
static +xlConditionValueAutomaticMin: Class<Excel$XlConditionValueTypes__xlConditionValueAutomaticMin> & Excel$XlConditionValueTypes__xlConditionValueAutomaticMin & 6;// 6
static +xlConditionValueFormula: Class<Excel$XlConditionValueTypes__xlConditionValueFormula> & Excel$XlConditionValueTypes__xlConditionValueFormula & 4;// 4
static +xlConditionValueHighestValue: Class<Excel$XlConditionValueTypes__xlConditionValueHighestValue> & Excel$XlConditionValueTypes__xlConditionValueHighestValue & 2;// 2
static +xlConditionValueLowestValue: Class<Excel$XlConditionValueTypes__xlConditionValueLowestValue> & Excel$XlConditionValueTypes__xlConditionValueLowestValue & 1;// 1
static +xlConditionValueNone: Class<Excel$XlConditionValueTypes__xlConditionValueNone> & Excel$XlConditionValueTypes__xlConditionValueNone & -1;// -1
static +xlConditionValueNumber: Class<Excel$XlConditionValueTypes__xlConditionValueNumber> & Excel$XlConditionValueTypes__xlConditionValueNumber & 0;// 0
static +xlConditionValuePercent: Class<Excel$XlConditionValueTypes__xlConditionValuePercent> & Excel$XlConditionValueTypes__xlConditionValuePercent & 3;// 3
static +xlConditionValuePercentile: Class<Excel$XlConditionValueTypes__xlConditionValuePercentile> & Excel$XlConditionValueTypes__xlConditionValuePercentile & 5;// 5

}

declare class Excel$XlConditionValueTypes__xlConditionValueAutomaticMax mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueAutomaticMin mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueFormula mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueHighestValue mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueLowestValue mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueNone mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValueNumber mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValuePercent mixins Excel$XlConditionValueTypes {}
declare class Excel$XlConditionValueTypes__xlConditionValuePercentile mixins Excel$XlConditionValueTypes {}


declare  class Excel$XlConnectionType {
  constructor(...args: empty): mixed;
static +xlConnectionTypeODBC: Class<Excel$XlConnectionType__xlConnectionTypeODBC> & Excel$XlConnectionType__xlConnectionTypeODBC & 2;// 2
static +xlConnectionTypeOLEDB: Class<Excel$XlConnectionType__xlConnectionTypeOLEDB> & Excel$XlConnectionType__xlConnectionTypeOLEDB & 1;// 1
static +xlConnectionTypeTEXT: Class<Excel$XlConnectionType__xlConnectionTypeTEXT> & Excel$XlConnectionType__xlConnectionTypeTEXT & 4;// 4
static +xlConnectionTypeWEB: Class<Excel$XlConnectionType__xlConnectionTypeWEB> & Excel$XlConnectionType__xlConnectionTypeWEB & 5;// 5
static +xlConnectionTypeXMLMAP: Class<Excel$XlConnectionType__xlConnectionTypeXMLMAP> & Excel$XlConnectionType__xlConnectionTypeXMLMAP & 3;// 3

}

declare class Excel$XlConnectionType__xlConnectionTypeODBC mixins Excel$XlConnectionType {}
declare class Excel$XlConnectionType__xlConnectionTypeOLEDB mixins Excel$XlConnectionType {}
declare class Excel$XlConnectionType__xlConnectionTypeTEXT mixins Excel$XlConnectionType {}
declare class Excel$XlConnectionType__xlConnectionTypeWEB mixins Excel$XlConnectionType {}
declare class Excel$XlConnectionType__xlConnectionTypeXMLMAP mixins Excel$XlConnectionType {}


declare  class Excel$XlConsolidationFunction {
  constructor(...args: empty): mixed;
static +xlAverage: Class<Excel$XlConsolidationFunction__xlAverage> & Excel$XlConsolidationFunction__xlAverage & -4106;// -4106
static +xlCount: Class<Excel$XlConsolidationFunction__xlCount> & Excel$XlConsolidationFunction__xlCount & -4112;// -4112
static +xlCountNums: Class<Excel$XlConsolidationFunction__xlCountNums> & Excel$XlConsolidationFunction__xlCountNums & -4113;// -4113
static +xlMax: Class<Excel$XlConsolidationFunction__xlMax> & Excel$XlConsolidationFunction__xlMax & -4136;// -4136
static +xlMin: Class<Excel$XlConsolidationFunction__xlMin> & Excel$XlConsolidationFunction__xlMin & -4139;// -4139
static +xlProduct: Class<Excel$XlConsolidationFunction__xlProduct> & Excel$XlConsolidationFunction__xlProduct & -4149;// -4149
static +xlStDev: Class<Excel$XlConsolidationFunction__xlStDev> & Excel$XlConsolidationFunction__xlStDev & -4155;// -4155
static +xlStDevP: Class<Excel$XlConsolidationFunction__xlStDevP> & Excel$XlConsolidationFunction__xlStDevP & -4156;// -4156
static +xlSum: Class<Excel$XlConsolidationFunction__xlSum> & Excel$XlConsolidationFunction__xlSum & -4157;// -4157
static +xlUnknown: Class<Excel$XlConsolidationFunction__xlUnknown> & Excel$XlConsolidationFunction__xlUnknown & 1000;// 1000
static +xlVar: Class<Excel$XlConsolidationFunction__xlVar> & Excel$XlConsolidationFunction__xlVar & -4164;// -4164
static +xlVarP: Class<Excel$XlConsolidationFunction__xlVarP> & Excel$XlConsolidationFunction__xlVarP & -4165;// -4165

}

declare class Excel$XlConsolidationFunction__xlAverage mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlCount mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlCountNums mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlMax mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlMin mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlProduct mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlStDev mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlStDevP mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlSum mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlUnknown mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlVar mixins Excel$XlConsolidationFunction {}
declare class Excel$XlConsolidationFunction__xlVarP mixins Excel$XlConsolidationFunction {}


declare  class Excel$XlContainsOperator {
  constructor(...args: empty): mixed;
static +xlBeginsWith: Class<Excel$XlContainsOperator__xlBeginsWith> & Excel$XlContainsOperator__xlBeginsWith & 2;// 2
static +xlContains: Class<Excel$XlContainsOperator__xlContains> & Excel$XlContainsOperator__xlContains & 0;// 0
static +xlDoesNotContain: Class<Excel$XlContainsOperator__xlDoesNotContain> & Excel$XlContainsOperator__xlDoesNotContain & 1;// 1
static +xlEndsWith: Class<Excel$XlContainsOperator__xlEndsWith> & Excel$XlContainsOperator__xlEndsWith & 3;// 3

}

declare class Excel$XlContainsOperator__xlBeginsWith mixins Excel$XlContainsOperator {}
declare class Excel$XlContainsOperator__xlContains mixins Excel$XlContainsOperator {}
declare class Excel$XlContainsOperator__xlDoesNotContain mixins Excel$XlContainsOperator {}
declare class Excel$XlContainsOperator__xlEndsWith mixins Excel$XlContainsOperator {}


declare  class Excel$XlCopyPictureFormat {
  constructor(...args: empty): mixed;
static +xlBitmap: Class<Excel$XlCopyPictureFormat__xlBitmap> & Excel$XlCopyPictureFormat__xlBitmap & 2;// 2
static +xlPicture: Class<Excel$XlCopyPictureFormat__xlPicture> & Excel$XlCopyPictureFormat__xlPicture & -4147;// -4147

}

declare class Excel$XlCopyPictureFormat__xlBitmap mixins Excel$XlCopyPictureFormat {}
declare class Excel$XlCopyPictureFormat__xlPicture mixins Excel$XlCopyPictureFormat {}


declare  class Excel$XlCorruptLoad {
  constructor(...args: empty): mixed;
static +xlExtractData: Class<Excel$XlCorruptLoad__xlExtractData> & Excel$XlCorruptLoad__xlExtractData & 2;// 2
static +xlNormalLoad: Class<Excel$XlCorruptLoad__xlNormalLoad> & Excel$XlCorruptLoad__xlNormalLoad & 0;// 0
static +xlRepairFile: Class<Excel$XlCorruptLoad__xlRepairFile> & Excel$XlCorruptLoad__xlRepairFile & 1;// 1

}

declare class Excel$XlCorruptLoad__xlExtractData mixins Excel$XlCorruptLoad {}
declare class Excel$XlCorruptLoad__xlNormalLoad mixins Excel$XlCorruptLoad {}
declare class Excel$XlCorruptLoad__xlRepairFile mixins Excel$XlCorruptLoad {}


declare  class Excel$XlCreator {
  constructor(...args: empty): mixed;
static +xlCreatorCode: Class<Excel$XlCreator__xlCreatorCode> & Excel$XlCreator__xlCreatorCode & 1480803660;// 1480803660

}

declare class Excel$XlCreator__xlCreatorCode mixins Excel$XlCreator {}


declare  class Excel$XlCredentialsMethod {
  constructor(...args: empty): mixed;
static +xlCredentialsMethodIntegrated: Class<Excel$XlCredentialsMethod__xlCredentialsMethodIntegrated> & Excel$XlCredentialsMethod__xlCredentialsMethodIntegrated & 0;// 0
static +xlCredentialsMethodNone: Class<Excel$XlCredentialsMethod__xlCredentialsMethodNone> & Excel$XlCredentialsMethod__xlCredentialsMethodNone & 1;// 1
static +xlCredentialsMethodStored: Class<Excel$XlCredentialsMethod__xlCredentialsMethodStored> & Excel$XlCredentialsMethod__xlCredentialsMethodStored & 2;// 2

}

declare class Excel$XlCredentialsMethod__xlCredentialsMethodIntegrated mixins Excel$XlCredentialsMethod {}
declare class Excel$XlCredentialsMethod__xlCredentialsMethodNone mixins Excel$XlCredentialsMethod {}
declare class Excel$XlCredentialsMethod__xlCredentialsMethodStored mixins Excel$XlCredentialsMethod {}


declare  class Excel$XlCubeFieldSubType {
  constructor(...args: empty): mixed;
static +xlCubeAttribute: Class<Excel$XlCubeFieldSubType__xlCubeAttribute> & Excel$XlCubeFieldSubType__xlCubeAttribute & 4;// 4
static +xlCubeCalculatedMeasure: Class<Excel$XlCubeFieldSubType__xlCubeCalculatedMeasure> & Excel$XlCubeFieldSubType__xlCubeCalculatedMeasure & 5;// 5
static +xlCubeHierarchy: Class<Excel$XlCubeFieldSubType__xlCubeHierarchy> & Excel$XlCubeFieldSubType__xlCubeHierarchy & 1;// 1
static +xlCubeKPIGoal: Class<Excel$XlCubeFieldSubType__xlCubeKPIGoal> & Excel$XlCubeFieldSubType__xlCubeKPIGoal & 7;// 7
static +xlCubeKPIStatus: Class<Excel$XlCubeFieldSubType__xlCubeKPIStatus> & Excel$XlCubeFieldSubType__xlCubeKPIStatus & 8;// 8
static +xlCubeKPITrend: Class<Excel$XlCubeFieldSubType__xlCubeKPITrend> & Excel$XlCubeFieldSubType__xlCubeKPITrend & 9;// 9
static +xlCubeKPIValue: Class<Excel$XlCubeFieldSubType__xlCubeKPIValue> & Excel$XlCubeFieldSubType__xlCubeKPIValue & 6;// 6
static +xlCubeKPIWeight: Class<Excel$XlCubeFieldSubType__xlCubeKPIWeight> & Excel$XlCubeFieldSubType__xlCubeKPIWeight & 10;// 10
static +xlCubeMeasure: Class<Excel$XlCubeFieldSubType__xlCubeMeasure> & Excel$XlCubeFieldSubType__xlCubeMeasure & 2;// 2
static +xlCubeSet: Class<Excel$XlCubeFieldSubType__xlCubeSet> & Excel$XlCubeFieldSubType__xlCubeSet & 3;// 3

}

declare class Excel$XlCubeFieldSubType__xlCubeAttribute mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeCalculatedMeasure mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeHierarchy mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeKPIGoal mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeKPIStatus mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeKPITrend mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeKPIValue mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeKPIWeight mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeMeasure mixins Excel$XlCubeFieldSubType {}
declare class Excel$XlCubeFieldSubType__xlCubeSet mixins Excel$XlCubeFieldSubType {}


declare  class Excel$XlCubeFieldType {
  constructor(...args: empty): mixed;
static +xlHierarchy: Class<Excel$XlCubeFieldType__xlHierarchy> & Excel$XlCubeFieldType__xlHierarchy & 1;// 1
static +xlMeasure: Class<Excel$XlCubeFieldType__xlMeasure> & Excel$XlCubeFieldType__xlMeasure & 2;// 2
static +xlSet: Class<Excel$XlCubeFieldType__xlSet> & Excel$XlCubeFieldType__xlSet & 3;// 3

}

declare class Excel$XlCubeFieldType__xlHierarchy mixins Excel$XlCubeFieldType {}
declare class Excel$XlCubeFieldType__xlMeasure mixins Excel$XlCubeFieldType {}
declare class Excel$XlCubeFieldType__xlSet mixins Excel$XlCubeFieldType {}


declare  class Excel$XlCutCopyMode {
  constructor(...args: empty): mixed;
static +xlCopy: Class<Excel$XlCutCopyMode__xlCopy> & Excel$XlCutCopyMode__xlCopy & 1;// 1
static +xlCut: Class<Excel$XlCutCopyMode__xlCut> & Excel$XlCutCopyMode__xlCut & 2;// 2

}

declare class Excel$XlCutCopyMode__xlCopy mixins Excel$XlCutCopyMode {}
declare class Excel$XlCutCopyMode__xlCut mixins Excel$XlCutCopyMode {}


declare  class Excel$XlCVError {
  constructor(...args: empty): mixed;
static +xlErrDiv0: Class<Excel$XlCVError__xlErrDiv0> & Excel$XlCVError__xlErrDiv0 & 2007;// 2007
static +xlErrNA: Class<Excel$XlCVError__xlErrNA> & Excel$XlCVError__xlErrNA & 2042;// 2042
static +xlErrName: Class<Excel$XlCVError__xlErrName> & Excel$XlCVError__xlErrName & 2029;// 2029
static +xlErrNull: Class<Excel$XlCVError__xlErrNull> & Excel$XlCVError__xlErrNull & 2000;// 2000
static +xlErrNum: Class<Excel$XlCVError__xlErrNum> & Excel$XlCVError__xlErrNum & 2036;// 2036
static +xlErrRef: Class<Excel$XlCVError__xlErrRef> & Excel$XlCVError__xlErrRef & 2023;// 2023
static +xlErrValue: Class<Excel$XlCVError__xlErrValue> & Excel$XlCVError__xlErrValue & 2015;// 2015

}

declare class Excel$XlCVError__xlErrDiv0 mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrNA mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrName mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrNull mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrNum mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrRef mixins Excel$XlCVError {}
declare class Excel$XlCVError__xlErrValue mixins Excel$XlCVError {}


declare  class Excel$XlDataBarAxisPosition {
  constructor(...args: empty): mixed;
static +xlDataBarAxisAutomatic: Class<Excel$XlDataBarAxisPosition__xlDataBarAxisAutomatic> & Excel$XlDataBarAxisPosition__xlDataBarAxisAutomatic & 0;// 0
static +xlDataBarAxisMidpoint: Class<Excel$XlDataBarAxisPosition__xlDataBarAxisMidpoint> & Excel$XlDataBarAxisPosition__xlDataBarAxisMidpoint & 1;// 1
static +xlDataBarAxisNone: Class<Excel$XlDataBarAxisPosition__xlDataBarAxisNone> & Excel$XlDataBarAxisPosition__xlDataBarAxisNone & 2;// 2

}

declare class Excel$XlDataBarAxisPosition__xlDataBarAxisAutomatic mixins Excel$XlDataBarAxisPosition {}
declare class Excel$XlDataBarAxisPosition__xlDataBarAxisMidpoint mixins Excel$XlDataBarAxisPosition {}
declare class Excel$XlDataBarAxisPosition__xlDataBarAxisNone mixins Excel$XlDataBarAxisPosition {}


declare  class Excel$XlDataBarBorderType {
  constructor(...args: empty): mixed;
static +xlDataBarBorderNone: Class<Excel$XlDataBarBorderType__xlDataBarBorderNone> & Excel$XlDataBarBorderType__xlDataBarBorderNone & 0;// 0
static +xlDataBarBorderSolid: Class<Excel$XlDataBarBorderType__xlDataBarBorderSolid> & Excel$XlDataBarBorderType__xlDataBarBorderSolid & 1;// 1

}

declare class Excel$XlDataBarBorderType__xlDataBarBorderNone mixins Excel$XlDataBarBorderType {}
declare class Excel$XlDataBarBorderType__xlDataBarBorderSolid mixins Excel$XlDataBarBorderType {}


declare  class Excel$XlDataBarFillType {
  constructor(...args: empty): mixed;
static +xlDataBarFillGradient: Class<Excel$XlDataBarFillType__xlDataBarFillGradient> & Excel$XlDataBarFillType__xlDataBarFillGradient & 1;// 1
static +xlDataBarFillSolid: Class<Excel$XlDataBarFillType__xlDataBarFillSolid> & Excel$XlDataBarFillType__xlDataBarFillSolid & 0;// 0

}

declare class Excel$XlDataBarFillType__xlDataBarFillGradient mixins Excel$XlDataBarFillType {}
declare class Excel$XlDataBarFillType__xlDataBarFillSolid mixins Excel$XlDataBarFillType {}


declare  class Excel$XlDataBarNegativeColorType {
  constructor(...args: empty): mixed;
static +xlDataBarColor: Class<Excel$XlDataBarNegativeColorType__xlDataBarColor> & Excel$XlDataBarNegativeColorType__xlDataBarColor & 0;// 0
static +xlDataBarSameAsPositive: Class<Excel$XlDataBarNegativeColorType__xlDataBarSameAsPositive> & Excel$XlDataBarNegativeColorType__xlDataBarSameAsPositive & 1;// 1

}

declare class Excel$XlDataBarNegativeColorType__xlDataBarColor mixins Excel$XlDataBarNegativeColorType {}
declare class Excel$XlDataBarNegativeColorType__xlDataBarSameAsPositive mixins Excel$XlDataBarNegativeColorType {}


declare  class Excel$XlDataLabelPosition {
  constructor(...args: empty): mixed;
static +xlLabelPositionAbove: Class<Excel$XlDataLabelPosition__xlLabelPositionAbove> & Excel$XlDataLabelPosition__xlLabelPositionAbove & 0;// 0
static +xlLabelPositionBelow: Class<Excel$XlDataLabelPosition__xlLabelPositionBelow> & Excel$XlDataLabelPosition__xlLabelPositionBelow & 1;// 1
static +xlLabelPositionBestFit: Class<Excel$XlDataLabelPosition__xlLabelPositionBestFit> & Excel$XlDataLabelPosition__xlLabelPositionBestFit & 5;// 5
static +xlLabelPositionCenter: Class<Excel$XlDataLabelPosition__xlLabelPositionCenter> & Excel$XlDataLabelPosition__xlLabelPositionCenter & -4108;// -4108
static +xlLabelPositionCustom: Class<Excel$XlDataLabelPosition__xlLabelPositionCustom> & Excel$XlDataLabelPosition__xlLabelPositionCustom & 7;// 7
static +xlLabelPositionInsideBase: Class<Excel$XlDataLabelPosition__xlLabelPositionInsideBase> & Excel$XlDataLabelPosition__xlLabelPositionInsideBase & 4;// 4
static +xlLabelPositionInsideEnd: Class<Excel$XlDataLabelPosition__xlLabelPositionInsideEnd> & Excel$XlDataLabelPosition__xlLabelPositionInsideEnd & 3;// 3
static +xlLabelPositionLeft: Class<Excel$XlDataLabelPosition__xlLabelPositionLeft> & Excel$XlDataLabelPosition__xlLabelPositionLeft & -4131;// -4131
static +xlLabelPositionMixed: Class<Excel$XlDataLabelPosition__xlLabelPositionMixed> & Excel$XlDataLabelPosition__xlLabelPositionMixed & 6;// 6
static +xlLabelPositionOutsideEnd: Class<Excel$XlDataLabelPosition__xlLabelPositionOutsideEnd> & Excel$XlDataLabelPosition__xlLabelPositionOutsideEnd & 2;// 2
static +xlLabelPositionRight: Class<Excel$XlDataLabelPosition__xlLabelPositionRight> & Excel$XlDataLabelPosition__xlLabelPositionRight & -4152;// -4152

}

declare class Excel$XlDataLabelPosition__xlLabelPositionAbove mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionBelow mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionBestFit mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionCenter mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionCustom mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionInsideBase mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionInsideEnd mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionLeft mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionMixed mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionOutsideEnd mixins Excel$XlDataLabelPosition {}
declare class Excel$XlDataLabelPosition__xlLabelPositionRight mixins Excel$XlDataLabelPosition {}


declare  class Excel$XlDataLabelSeparator {
  constructor(...args: empty): mixed;
static +xlDataLabelSeparatorDefault: Class<Excel$XlDataLabelSeparator__xlDataLabelSeparatorDefault> & Excel$XlDataLabelSeparator__xlDataLabelSeparatorDefault & 1;// 1

}

declare class Excel$XlDataLabelSeparator__xlDataLabelSeparatorDefault mixins Excel$XlDataLabelSeparator {}


declare  class Excel$XlDataLabelsType {
  constructor(...args: empty): mixed;
static +xlDataLabelsShowBubbleSizes: Class<Excel$XlDataLabelsType__xlDataLabelsShowBubbleSizes> & Excel$XlDataLabelsType__xlDataLabelsShowBubbleSizes & 6;// 6
static +xlDataLabelsShowLabel: Class<Excel$XlDataLabelsType__xlDataLabelsShowLabel> & Excel$XlDataLabelsType__xlDataLabelsShowLabel & 4;// 4
static +xlDataLabelsShowLabelAndPercent: Class<Excel$XlDataLabelsType__xlDataLabelsShowLabelAndPercent> & Excel$XlDataLabelsType__xlDataLabelsShowLabelAndPercent & 5;// 5
static +xlDataLabelsShowNone: Class<Excel$XlDataLabelsType__xlDataLabelsShowNone> & Excel$XlDataLabelsType__xlDataLabelsShowNone & -4142;// -4142
static +xlDataLabelsShowPercent: Class<Excel$XlDataLabelsType__xlDataLabelsShowPercent> & Excel$XlDataLabelsType__xlDataLabelsShowPercent & 3;// 3
static +xlDataLabelsShowValue: Class<Excel$XlDataLabelsType__xlDataLabelsShowValue> & Excel$XlDataLabelsType__xlDataLabelsShowValue & 2;// 2

}

declare class Excel$XlDataLabelsType__xlDataLabelsShowBubbleSizes mixins Excel$XlDataLabelsType {}
declare class Excel$XlDataLabelsType__xlDataLabelsShowLabel mixins Excel$XlDataLabelsType {}
declare class Excel$XlDataLabelsType__xlDataLabelsShowLabelAndPercent mixins Excel$XlDataLabelsType {}
declare class Excel$XlDataLabelsType__xlDataLabelsShowNone mixins Excel$XlDataLabelsType {}
declare class Excel$XlDataLabelsType__xlDataLabelsShowPercent mixins Excel$XlDataLabelsType {}
declare class Excel$XlDataLabelsType__xlDataLabelsShowValue mixins Excel$XlDataLabelsType {}


declare  class Excel$XlDataSeriesDate {
  constructor(...args: empty): mixed;
static +xlDay: Class<Excel$XlDataSeriesDate__xlDay> & Excel$XlDataSeriesDate__xlDay & 1;// 1
static +xlMonth: Class<Excel$XlDataSeriesDate__xlMonth> & Excel$XlDataSeriesDate__xlMonth & 3;// 3
static +xlWeekday: Class<Excel$XlDataSeriesDate__xlWeekday> & Excel$XlDataSeriesDate__xlWeekday & 2;// 2
static +xlYear: Class<Excel$XlDataSeriesDate__xlYear> & Excel$XlDataSeriesDate__xlYear & 4;// 4

}

declare class Excel$XlDataSeriesDate__xlDay mixins Excel$XlDataSeriesDate {}
declare class Excel$XlDataSeriesDate__xlMonth mixins Excel$XlDataSeriesDate {}
declare class Excel$XlDataSeriesDate__xlWeekday mixins Excel$XlDataSeriesDate {}
declare class Excel$XlDataSeriesDate__xlYear mixins Excel$XlDataSeriesDate {}


declare  class Excel$XlDataSeriesType {
  constructor(...args: empty): mixed;
static +xlAutoFill: Class<Excel$XlDataSeriesType__xlAutoFill> & Excel$XlDataSeriesType__xlAutoFill & 4;// 4
static +xlChronological: Class<Excel$XlDataSeriesType__xlChronological> & Excel$XlDataSeriesType__xlChronological & 3;// 3
static +xlDataSeriesLinear: Class<Excel$XlDataSeriesType__xlDataSeriesLinear> & Excel$XlDataSeriesType__xlDataSeriesLinear & -4132;// -4132
static +xlGrowth: Class<Excel$XlDataSeriesType__xlGrowth> & Excel$XlDataSeriesType__xlGrowth & 2;// 2

}

declare class Excel$XlDataSeriesType__xlAutoFill mixins Excel$XlDataSeriesType {}
declare class Excel$XlDataSeriesType__xlChronological mixins Excel$XlDataSeriesType {}
declare class Excel$XlDataSeriesType__xlDataSeriesLinear mixins Excel$XlDataSeriesType {}
declare class Excel$XlDataSeriesType__xlGrowth mixins Excel$XlDataSeriesType {}


declare  class Excel$XlDeleteShiftDirection {
  constructor(...args: empty): mixed;
static +xlShiftToLeft: Class<Excel$XlDeleteShiftDirection__xlShiftToLeft> & Excel$XlDeleteShiftDirection__xlShiftToLeft & -4159;// -4159
static +xlShiftUp: Class<Excel$XlDeleteShiftDirection__xlShiftUp> & Excel$XlDeleteShiftDirection__xlShiftUp & -4162;// -4162

}

declare class Excel$XlDeleteShiftDirection__xlShiftToLeft mixins Excel$XlDeleteShiftDirection {}
declare class Excel$XlDeleteShiftDirection__xlShiftUp mixins Excel$XlDeleteShiftDirection {}


declare  class Excel$XlDirection {
  constructor(...args: empty): mixed;
static +xlDown: Class<Excel$XlDirection__xlDown> & Excel$XlDirection__xlDown & -4121;// -4121
static +xlToLeft: Class<Excel$XlDirection__xlToLeft> & Excel$XlDirection__xlToLeft & -4159;// -4159
static +xlToRight: Class<Excel$XlDirection__xlToRight> & Excel$XlDirection__xlToRight & -4161;// -4161
static +xlUp: Class<Excel$XlDirection__xlUp> & Excel$XlDirection__xlUp & -4162;// -4162

}

declare class Excel$XlDirection__xlDown mixins Excel$XlDirection {}
declare class Excel$XlDirection__xlToLeft mixins Excel$XlDirection {}
declare class Excel$XlDirection__xlToRight mixins Excel$XlDirection {}
declare class Excel$XlDirection__xlUp mixins Excel$XlDirection {}


declare  class Excel$XlDisplayBlanksAs {
  constructor(...args: empty): mixed;
static +xlInterpolated: Class<Excel$XlDisplayBlanksAs__xlInterpolated> & Excel$XlDisplayBlanksAs__xlInterpolated & 3;// 3
static +xlNotPlotted: Class<Excel$XlDisplayBlanksAs__xlNotPlotted> & Excel$XlDisplayBlanksAs__xlNotPlotted & 1;// 1
static +xlZero: Class<Excel$XlDisplayBlanksAs__xlZero> & Excel$XlDisplayBlanksAs__xlZero & 2;// 2

}

declare class Excel$XlDisplayBlanksAs__xlInterpolated mixins Excel$XlDisplayBlanksAs {}
declare class Excel$XlDisplayBlanksAs__xlNotPlotted mixins Excel$XlDisplayBlanksAs {}
declare class Excel$XlDisplayBlanksAs__xlZero mixins Excel$XlDisplayBlanksAs {}


declare  class Excel$XlDisplayDrawingObjects {
  constructor(...args: empty): mixed;
static +xlDisplayShapes: Class<Excel$XlDisplayDrawingObjects__xlDisplayShapes> & Excel$XlDisplayDrawingObjects__xlDisplayShapes & -4104;// -4104
static +xlHide: Class<Excel$XlDisplayDrawingObjects__xlHide> & Excel$XlDisplayDrawingObjects__xlHide & 3;// 3
static +xlPlaceholders: Class<Excel$XlDisplayDrawingObjects__xlPlaceholders> & Excel$XlDisplayDrawingObjects__xlPlaceholders & 2;// 2

}

declare class Excel$XlDisplayDrawingObjects__xlDisplayShapes mixins Excel$XlDisplayDrawingObjects {}
declare class Excel$XlDisplayDrawingObjects__xlHide mixins Excel$XlDisplayDrawingObjects {}
declare class Excel$XlDisplayDrawingObjects__xlPlaceholders mixins Excel$XlDisplayDrawingObjects {}


declare  class Excel$XlDisplayUnit {
  constructor(...args: empty): mixed;
static +xlHundredMillions: Class<Excel$XlDisplayUnit__xlHundredMillions> & Excel$XlDisplayUnit__xlHundredMillions & -8;// -8
static +xlHundreds: Class<Excel$XlDisplayUnit__xlHundreds> & Excel$XlDisplayUnit__xlHundreds & -2;// -2
static +xlHundredThousands: Class<Excel$XlDisplayUnit__xlHundredThousands> & Excel$XlDisplayUnit__xlHundredThousands & -5;// -5
static +xlMillionMillions: Class<Excel$XlDisplayUnit__xlMillionMillions> & Excel$XlDisplayUnit__xlMillionMillions & -10;// -10
static +xlMillions: Class<Excel$XlDisplayUnit__xlMillions> & Excel$XlDisplayUnit__xlMillions & -6;// -6
static +xlTenMillions: Class<Excel$XlDisplayUnit__xlTenMillions> & Excel$XlDisplayUnit__xlTenMillions & -7;// -7
static +xlTenThousands: Class<Excel$XlDisplayUnit__xlTenThousands> & Excel$XlDisplayUnit__xlTenThousands & -4;// -4
static +xlThousandMillions: Class<Excel$XlDisplayUnit__xlThousandMillions> & Excel$XlDisplayUnit__xlThousandMillions & -9;// -9
static +xlThousands: Class<Excel$XlDisplayUnit__xlThousands> & Excel$XlDisplayUnit__xlThousands & -3;// -3

}

declare class Excel$XlDisplayUnit__xlHundredMillions mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlHundreds mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlHundredThousands mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlMillionMillions mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlMillions mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlTenMillions mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlTenThousands mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlThousandMillions mixins Excel$XlDisplayUnit {}
declare class Excel$XlDisplayUnit__xlThousands mixins Excel$XlDisplayUnit {}


declare  class Excel$XlDupeUnique {
  constructor(...args: empty): mixed;
static +xlDuplicate: Class<Excel$XlDupeUnique__xlDuplicate> & Excel$XlDupeUnique__xlDuplicate & 1;// 1
static +xlUnique: Class<Excel$XlDupeUnique__xlUnique> & Excel$XlDupeUnique__xlUnique & 0;// 0

}

declare class Excel$XlDupeUnique__xlDuplicate mixins Excel$XlDupeUnique {}
declare class Excel$XlDupeUnique__xlUnique mixins Excel$XlDupeUnique {}


declare  class Excel$XlDVAlertStyle {
  constructor(...args: empty): mixed;
static +xlValidAlertInformation: Class<Excel$XlDVAlertStyle__xlValidAlertInformation> & Excel$XlDVAlertStyle__xlValidAlertInformation & 3;// 3
static +xlValidAlertStop: Class<Excel$XlDVAlertStyle__xlValidAlertStop> & Excel$XlDVAlertStyle__xlValidAlertStop & 1;// 1
static +xlValidAlertWarning: Class<Excel$XlDVAlertStyle__xlValidAlertWarning> & Excel$XlDVAlertStyle__xlValidAlertWarning & 2;// 2

}

declare class Excel$XlDVAlertStyle__xlValidAlertInformation mixins Excel$XlDVAlertStyle {}
declare class Excel$XlDVAlertStyle__xlValidAlertStop mixins Excel$XlDVAlertStyle {}
declare class Excel$XlDVAlertStyle__xlValidAlertWarning mixins Excel$XlDVAlertStyle {}


declare  class Excel$XlDVType {
  constructor(...args: empty): mixed;
static +xlValidateCustom: Class<Excel$XlDVType__xlValidateCustom> & Excel$XlDVType__xlValidateCustom & 7;// 7
static +xlValidateDate: Class<Excel$XlDVType__xlValidateDate> & Excel$XlDVType__xlValidateDate & 4;// 4
static +xlValidateDecimal: Class<Excel$XlDVType__xlValidateDecimal> & Excel$XlDVType__xlValidateDecimal & 2;// 2
static +xlValidateInputOnly: Class<Excel$XlDVType__xlValidateInputOnly> & Excel$XlDVType__xlValidateInputOnly & 0;// 0
static +xlValidateList: Class<Excel$XlDVType__xlValidateList> & Excel$XlDVType__xlValidateList & 3;// 3
static +xlValidateTextLength: Class<Excel$XlDVType__xlValidateTextLength> & Excel$XlDVType__xlValidateTextLength & 6;// 6
static +xlValidateTime: Class<Excel$XlDVType__xlValidateTime> & Excel$XlDVType__xlValidateTime & 5;// 5
static +xlValidateWholeNumber: Class<Excel$XlDVType__xlValidateWholeNumber> & Excel$XlDVType__xlValidateWholeNumber & 1;// 1

}

declare class Excel$XlDVType__xlValidateCustom mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateDate mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateDecimal mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateInputOnly mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateList mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateTextLength mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateTime mixins Excel$XlDVType {}
declare class Excel$XlDVType__xlValidateWholeNumber mixins Excel$XlDVType {}


declare  class Excel$XlDynamicFilterCriteria {
  constructor(...args: empty): mixed;
static +xlFilterAboveAverage: Class<Excel$XlDynamicFilterCriteria__xlFilterAboveAverage> & Excel$XlDynamicFilterCriteria__xlFilterAboveAverage & 33;// 33
static +xlFilterAllDatesInPeriodApril: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodApril> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodApril & 24;// 24
static +xlFilterAllDatesInPeriodAugust: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodAugust> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodAugust & 28;// 28
static +xlFilterAllDatesInPeriodDecember: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodDecember> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodDecember & 32;// 32
static +xlFilterAllDatesInPeriodFebruray: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodFebruray> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodFebruray & 22;// 22
static +xlFilterAllDatesInPeriodJanuary: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJanuary> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJanuary & 21;// 21
static +xlFilterAllDatesInPeriodJuly: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJuly> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJuly & 27;// 27
static +xlFilterAllDatesInPeriodJune: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJune> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJune & 26;// 26
static +xlFilterAllDatesInPeriodMarch: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMarch> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMarch & 23;// 23
static +xlFilterAllDatesInPeriodMay: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMay> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMay & 25;// 25
static +xlFilterAllDatesInPeriodNovember: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodNovember> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodNovember & 31;// 31
static +xlFilterAllDatesInPeriodOctober: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodOctober> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodOctober & 30;// 30
static +xlFilterAllDatesInPeriodQuarter1: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter1> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter1 & 17;// 17
static +xlFilterAllDatesInPeriodQuarter2: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter2> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter2 & 18;// 18
static +xlFilterAllDatesInPeriodQuarter3: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter3> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter3 & 19;// 19
static +xlFilterAllDatesInPeriodQuarter4: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter4> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter4 & 20;// 20
static +xlFilterAllDatesInPeriodSeptember: Class<Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodSeptember> & Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodSeptember & 29;// 29
static +xlFilterBelowAverage: Class<Excel$XlDynamicFilterCriteria__xlFilterBelowAverage> & Excel$XlDynamicFilterCriteria__xlFilterBelowAverage & 34;// 34
static +xlFilterLastMonth: Class<Excel$XlDynamicFilterCriteria__xlFilterLastMonth> & Excel$XlDynamicFilterCriteria__xlFilterLastMonth & 8;// 8
static +xlFilterLastQuarter: Class<Excel$XlDynamicFilterCriteria__xlFilterLastQuarter> & Excel$XlDynamicFilterCriteria__xlFilterLastQuarter & 11;// 11
static +xlFilterLastWeek: Class<Excel$XlDynamicFilterCriteria__xlFilterLastWeek> & Excel$XlDynamicFilterCriteria__xlFilterLastWeek & 5;// 5
static +xlFilterLastYear: Class<Excel$XlDynamicFilterCriteria__xlFilterLastYear> & Excel$XlDynamicFilterCriteria__xlFilterLastYear & 14;// 14
static +xlFilterNextMonth: Class<Excel$XlDynamicFilterCriteria__xlFilterNextMonth> & Excel$XlDynamicFilterCriteria__xlFilterNextMonth & 9;// 9
static +xlFilterNextQuarter: Class<Excel$XlDynamicFilterCriteria__xlFilterNextQuarter> & Excel$XlDynamicFilterCriteria__xlFilterNextQuarter & 12;// 12
static +xlFilterNextWeek: Class<Excel$XlDynamicFilterCriteria__xlFilterNextWeek> & Excel$XlDynamicFilterCriteria__xlFilterNextWeek & 6;// 6
static +xlFilterNextYear: Class<Excel$XlDynamicFilterCriteria__xlFilterNextYear> & Excel$XlDynamicFilterCriteria__xlFilterNextYear & 15;// 15
static +xlFilterThisMonth: Class<Excel$XlDynamicFilterCriteria__xlFilterThisMonth> & Excel$XlDynamicFilterCriteria__xlFilterThisMonth & 7;// 7
static +xlFilterThisQuarter: Class<Excel$XlDynamicFilterCriteria__xlFilterThisQuarter> & Excel$XlDynamicFilterCriteria__xlFilterThisQuarter & 10;// 10
static +xlFilterThisWeek: Class<Excel$XlDynamicFilterCriteria__xlFilterThisWeek> & Excel$XlDynamicFilterCriteria__xlFilterThisWeek & 4;// 4
static +xlFilterThisYear: Class<Excel$XlDynamicFilterCriteria__xlFilterThisYear> & Excel$XlDynamicFilterCriteria__xlFilterThisYear & 13;// 13
static +xlFilterToday: Class<Excel$XlDynamicFilterCriteria__xlFilterToday> & Excel$XlDynamicFilterCriteria__xlFilterToday & 1;// 1
static +xlFilterTomorrow: Class<Excel$XlDynamicFilterCriteria__xlFilterTomorrow> & Excel$XlDynamicFilterCriteria__xlFilterTomorrow & 3;// 3
static +xlFilterYearToDate: Class<Excel$XlDynamicFilterCriteria__xlFilterYearToDate> & Excel$XlDynamicFilterCriteria__xlFilterYearToDate & 16;// 16
static +xlFilterYesterday: Class<Excel$XlDynamicFilterCriteria__xlFilterYesterday> & Excel$XlDynamicFilterCriteria__xlFilterYesterday & 2;// 2

}

declare class Excel$XlDynamicFilterCriteria__xlFilterAboveAverage mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodApril mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodAugust mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodDecember mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodFebruray mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJanuary mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJuly mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodJune mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMarch mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodMay mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodNovember mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodOctober mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter1 mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter2 mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter3 mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodQuarter4 mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterAllDatesInPeriodSeptember mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterBelowAverage mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterLastMonth mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterLastQuarter mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterLastWeek mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterLastYear mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterNextMonth mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterNextQuarter mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterNextWeek mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterNextYear mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterThisMonth mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterThisQuarter mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterThisWeek mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterThisYear mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterToday mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterTomorrow mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterYearToDate mixins Excel$XlDynamicFilterCriteria {}
declare class Excel$XlDynamicFilterCriteria__xlFilterYesterday mixins Excel$XlDynamicFilterCriteria {}


declare  class Excel$XlEditionFormat {
  constructor(...args: empty): mixed;
static +xlBIFF: Class<Excel$XlEditionFormat__xlBIFF> & Excel$XlEditionFormat__xlBIFF & 2;// 2
static +xlPICT: Class<Excel$XlEditionFormat__xlPICT> & Excel$XlEditionFormat__xlPICT & 1;// 1
static +xlRTF: Class<Excel$XlEditionFormat__xlRTF> & Excel$XlEditionFormat__xlRTF & 4;// 4
static +xlVALU: Class<Excel$XlEditionFormat__xlVALU> & Excel$XlEditionFormat__xlVALU & 8;// 8

}

declare class Excel$XlEditionFormat__xlBIFF mixins Excel$XlEditionFormat {}
declare class Excel$XlEditionFormat__xlPICT mixins Excel$XlEditionFormat {}
declare class Excel$XlEditionFormat__xlRTF mixins Excel$XlEditionFormat {}
declare class Excel$XlEditionFormat__xlVALU mixins Excel$XlEditionFormat {}


declare  class Excel$XlEditionOptionsOption {
  constructor(...args: empty): mixed;
static +xlAutomaticUpdate: Class<Excel$XlEditionOptionsOption__xlAutomaticUpdate> & Excel$XlEditionOptionsOption__xlAutomaticUpdate & 4;// 4
static +xlCancel: Class<Excel$XlEditionOptionsOption__xlCancel> & Excel$XlEditionOptionsOption__xlCancel & 1;// 1
static +xlChangeAttributes: Class<Excel$XlEditionOptionsOption__xlChangeAttributes> & Excel$XlEditionOptionsOption__xlChangeAttributes & 6;// 6
static +xlManualUpdate: Class<Excel$XlEditionOptionsOption__xlManualUpdate> & Excel$XlEditionOptionsOption__xlManualUpdate & 5;// 5
static +xlOpenSource: Class<Excel$XlEditionOptionsOption__xlOpenSource> & Excel$XlEditionOptionsOption__xlOpenSource & 3;// 3
static +xlSelect: Class<Excel$XlEditionOptionsOption__xlSelect> & Excel$XlEditionOptionsOption__xlSelect & 3;// 3
static +xlSendPublisher: Class<Excel$XlEditionOptionsOption__xlSendPublisher> & Excel$XlEditionOptionsOption__xlSendPublisher & 2;// 2
static +xlUpdateSubscriber: Class<Excel$XlEditionOptionsOption__xlUpdateSubscriber> & Excel$XlEditionOptionsOption__xlUpdateSubscriber & 2;// 2

}

declare class Excel$XlEditionOptionsOption__xlAutomaticUpdate mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlCancel mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlChangeAttributes mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlManualUpdate mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlOpenSource mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlSelect mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlSendPublisher mixins Excel$XlEditionOptionsOption {}
declare class Excel$XlEditionOptionsOption__xlUpdateSubscriber mixins Excel$XlEditionOptionsOption {}


declare  class Excel$XlEditionType {
  constructor(...args: empty): mixed;
static +xlPublisher: Class<Excel$XlEditionType__xlPublisher> & Excel$XlEditionType__xlPublisher & 1;// 1
static +xlSubscriber: Class<Excel$XlEditionType__xlSubscriber> & Excel$XlEditionType__xlSubscriber & 2;// 2

}

declare class Excel$XlEditionType__xlPublisher mixins Excel$XlEditionType {}
declare class Excel$XlEditionType__xlSubscriber mixins Excel$XlEditionType {}


declare  class Excel$XlEnableCancelKey {
  constructor(...args: empty): mixed;
static +xlDisabled: Class<Excel$XlEnableCancelKey__xlDisabled> & Excel$XlEnableCancelKey__xlDisabled & 0;// 0
static +xlErrorHandler: Class<Excel$XlEnableCancelKey__xlErrorHandler> & Excel$XlEnableCancelKey__xlErrorHandler & 2;// 2
static +xlInterrupt: Class<Excel$XlEnableCancelKey__xlInterrupt> & Excel$XlEnableCancelKey__xlInterrupt & 1;// 1

}

declare class Excel$XlEnableCancelKey__xlDisabled mixins Excel$XlEnableCancelKey {}
declare class Excel$XlEnableCancelKey__xlErrorHandler mixins Excel$XlEnableCancelKey {}
declare class Excel$XlEnableCancelKey__xlInterrupt mixins Excel$XlEnableCancelKey {}


declare  class Excel$XlEnableSelection {
  constructor(...args: empty): mixed;
static +xlNoRestrictions: Class<Excel$XlEnableSelection__xlNoRestrictions> & Excel$XlEnableSelection__xlNoRestrictions & 0;// 0
static +xlNoSelection: Class<Excel$XlEnableSelection__xlNoSelection> & Excel$XlEnableSelection__xlNoSelection & -4142;// -4142
static +xlUnlockedCells: Class<Excel$XlEnableSelection__xlUnlockedCells> & Excel$XlEnableSelection__xlUnlockedCells & 1;// 1

}

declare class Excel$XlEnableSelection__xlNoRestrictions mixins Excel$XlEnableSelection {}
declare class Excel$XlEnableSelection__xlNoSelection mixins Excel$XlEnableSelection {}
declare class Excel$XlEnableSelection__xlUnlockedCells mixins Excel$XlEnableSelection {}


declare  class Excel$XlEndStyleCap {
  constructor(...args: empty): mixed;
static +xlCap: Class<Excel$XlEndStyleCap__xlCap> & Excel$XlEndStyleCap__xlCap & 1;// 1
static +xlNoCap: Class<Excel$XlEndStyleCap__xlNoCap> & Excel$XlEndStyleCap__xlNoCap & 2;// 2

}

declare class Excel$XlEndStyleCap__xlCap mixins Excel$XlEndStyleCap {}
declare class Excel$XlEndStyleCap__xlNoCap mixins Excel$XlEndStyleCap {}


declare  class Excel$XlErrorBarDirection {
  constructor(...args: empty): mixed;
static +xlX: Class<Excel$XlErrorBarDirection__xlX> & Excel$XlErrorBarDirection__xlX & -4168;// -4168
static +xlY: Class<Excel$XlErrorBarDirection__xlY> & Excel$XlErrorBarDirection__xlY & 1;// 1

}

declare class Excel$XlErrorBarDirection__xlX mixins Excel$XlErrorBarDirection {}
declare class Excel$XlErrorBarDirection__xlY mixins Excel$XlErrorBarDirection {}


declare  class Excel$XlErrorBarInclude {
  constructor(...args: empty): mixed;
static +xlErrorBarIncludeBoth: Class<Excel$XlErrorBarInclude__xlErrorBarIncludeBoth> & Excel$XlErrorBarInclude__xlErrorBarIncludeBoth & 1;// 1
static +xlErrorBarIncludeMinusValues: Class<Excel$XlErrorBarInclude__xlErrorBarIncludeMinusValues> & Excel$XlErrorBarInclude__xlErrorBarIncludeMinusValues & 3;// 3
static +xlErrorBarIncludeNone: Class<Excel$XlErrorBarInclude__xlErrorBarIncludeNone> & Excel$XlErrorBarInclude__xlErrorBarIncludeNone & -4142;// -4142
static +xlErrorBarIncludePlusValues: Class<Excel$XlErrorBarInclude__xlErrorBarIncludePlusValues> & Excel$XlErrorBarInclude__xlErrorBarIncludePlusValues & 2;// 2

}

declare class Excel$XlErrorBarInclude__xlErrorBarIncludeBoth mixins Excel$XlErrorBarInclude {}
declare class Excel$XlErrorBarInclude__xlErrorBarIncludeMinusValues mixins Excel$XlErrorBarInclude {}
declare class Excel$XlErrorBarInclude__xlErrorBarIncludeNone mixins Excel$XlErrorBarInclude {}
declare class Excel$XlErrorBarInclude__xlErrorBarIncludePlusValues mixins Excel$XlErrorBarInclude {}


declare  class Excel$XlErrorBarType {
  constructor(...args: empty): mixed;
static +xlErrorBarTypeCustom: Class<Excel$XlErrorBarType__xlErrorBarTypeCustom> & Excel$XlErrorBarType__xlErrorBarTypeCustom & -4114;// -4114
static +xlErrorBarTypeFixedValue: Class<Excel$XlErrorBarType__xlErrorBarTypeFixedValue> & Excel$XlErrorBarType__xlErrorBarTypeFixedValue & 1;// 1
static +xlErrorBarTypePercent: Class<Excel$XlErrorBarType__xlErrorBarTypePercent> & Excel$XlErrorBarType__xlErrorBarTypePercent & 2;// 2
static +xlErrorBarTypeStDev: Class<Excel$XlErrorBarType__xlErrorBarTypeStDev> & Excel$XlErrorBarType__xlErrorBarTypeStDev & -4155;// -4155
static +xlErrorBarTypeStError: Class<Excel$XlErrorBarType__xlErrorBarTypeStError> & Excel$XlErrorBarType__xlErrorBarTypeStError & 4;// 4

}

declare class Excel$XlErrorBarType__xlErrorBarTypeCustom mixins Excel$XlErrorBarType {}
declare class Excel$XlErrorBarType__xlErrorBarTypeFixedValue mixins Excel$XlErrorBarType {}
declare class Excel$XlErrorBarType__xlErrorBarTypePercent mixins Excel$XlErrorBarType {}
declare class Excel$XlErrorBarType__xlErrorBarTypeStDev mixins Excel$XlErrorBarType {}
declare class Excel$XlErrorBarType__xlErrorBarTypeStError mixins Excel$XlErrorBarType {}


declare  class Excel$XlErrorChecks {
  constructor(...args: empty): mixed;
static +xlEmptyCellReferences: Class<Excel$XlErrorChecks__xlEmptyCellReferences> & Excel$XlErrorChecks__xlEmptyCellReferences & 7;// 7
static +xlEvaluateToError: Class<Excel$XlErrorChecks__xlEvaluateToError> & Excel$XlErrorChecks__xlEvaluateToError & 1;// 1
static +xlInconsistentFormula: Class<Excel$XlErrorChecks__xlInconsistentFormula> & Excel$XlErrorChecks__xlInconsistentFormula & 4;// 4
static +xlInconsistentListFormula: Class<Excel$XlErrorChecks__xlInconsistentListFormula> & Excel$XlErrorChecks__xlInconsistentListFormula & 9;// 9
static +xlListDataValidation: Class<Excel$XlErrorChecks__xlListDataValidation> & Excel$XlErrorChecks__xlListDataValidation & 8;// 8
static +xlNumberAsText: Class<Excel$XlErrorChecks__xlNumberAsText> & Excel$XlErrorChecks__xlNumberAsText & 3;// 3
static +xlOmittedCells: Class<Excel$XlErrorChecks__xlOmittedCells> & Excel$XlErrorChecks__xlOmittedCells & 5;// 5
static +xlTextDate: Class<Excel$XlErrorChecks__xlTextDate> & Excel$XlErrorChecks__xlTextDate & 2;// 2
static +xlUnlockedFormulaCells: Class<Excel$XlErrorChecks__xlUnlockedFormulaCells> & Excel$XlErrorChecks__xlUnlockedFormulaCells & 6;// 6

}

declare class Excel$XlErrorChecks__xlEmptyCellReferences mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlEvaluateToError mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlInconsistentFormula mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlInconsistentListFormula mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlListDataValidation mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlNumberAsText mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlOmittedCells mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlTextDate mixins Excel$XlErrorChecks {}
declare class Excel$XlErrorChecks__xlUnlockedFormulaCells mixins Excel$XlErrorChecks {}


declare  class Excel$XlFileAccess {
  constructor(...args: empty): mixed;
static +xlReadOnly: Class<Excel$XlFileAccess__xlReadOnly> & Excel$XlFileAccess__xlReadOnly & 3;// 3
static +xlReadWrite: Class<Excel$XlFileAccess__xlReadWrite> & Excel$XlFileAccess__xlReadWrite & 2;// 2

}

declare class Excel$XlFileAccess__xlReadOnly mixins Excel$XlFileAccess {}
declare class Excel$XlFileAccess__xlReadWrite mixins Excel$XlFileAccess {}


declare  class Excel$XlFileFormat {
  constructor(...args: empty): mixed;
static +xlAddIn: Class<Excel$XlFileFormat__xlAddIn> & Excel$XlFileFormat__xlAddIn & 18;// 18
static +xlAddIn8: Class<Excel$XlFileFormat__xlAddIn8> & Excel$XlFileFormat__xlAddIn8 & 18;// 18
static +xlCSV: Class<Excel$XlFileFormat__xlCSV> & Excel$XlFileFormat__xlCSV & 6;// 6
static +xlCSVMac: Class<Excel$XlFileFormat__xlCSVMac> & Excel$XlFileFormat__xlCSVMac & 22;// 22
static +xlCSVMSDOS: Class<Excel$XlFileFormat__xlCSVMSDOS> & Excel$XlFileFormat__xlCSVMSDOS & 24;// 24
static +xlCSVWindows: Class<Excel$XlFileFormat__xlCSVWindows> & Excel$XlFileFormat__xlCSVWindows & 23;// 23
static +xlCurrentPlatformText: Class<Excel$XlFileFormat__xlCurrentPlatformText> & Excel$XlFileFormat__xlCurrentPlatformText & -4158;// -4158
static +xlDBF2: Class<Excel$XlFileFormat__xlDBF2> & Excel$XlFileFormat__xlDBF2 & 7;// 7
static +xlDBF3: Class<Excel$XlFileFormat__xlDBF3> & Excel$XlFileFormat__xlDBF3 & 8;// 8
static +xlDBF4: Class<Excel$XlFileFormat__xlDBF4> & Excel$XlFileFormat__xlDBF4 & 11;// 11
static +xlDIF: Class<Excel$XlFileFormat__xlDIF> & Excel$XlFileFormat__xlDIF & 9;// 9
static +xlExcel12: Class<Excel$XlFileFormat__xlExcel12> & Excel$XlFileFormat__xlExcel12 & 50;// 50
static +xlExcel2: Class<Excel$XlFileFormat__xlExcel2> & Excel$XlFileFormat__xlExcel2 & 16;// 16
static +xlExcel2FarEast: Class<Excel$XlFileFormat__xlExcel2FarEast> & Excel$XlFileFormat__xlExcel2FarEast & 27;// 27
static +xlExcel3: Class<Excel$XlFileFormat__xlExcel3> & Excel$XlFileFormat__xlExcel3 & 29;// 29
static +xlExcel4: Class<Excel$XlFileFormat__xlExcel4> & Excel$XlFileFormat__xlExcel4 & 33;// 33
static +xlExcel4Workbook: Class<Excel$XlFileFormat__xlExcel4Workbook> & Excel$XlFileFormat__xlExcel4Workbook & 35;// 35
static +xlExcel5: Class<Excel$XlFileFormat__xlExcel5> & Excel$XlFileFormat__xlExcel5 & 39;// 39
static +xlExcel7: Class<Excel$XlFileFormat__xlExcel7> & Excel$XlFileFormat__xlExcel7 & 39;// 39
static +xlExcel8: Class<Excel$XlFileFormat__xlExcel8> & Excel$XlFileFormat__xlExcel8 & 56;// 56
static +xlExcel9795: Class<Excel$XlFileFormat__xlExcel9795> & Excel$XlFileFormat__xlExcel9795 & 43;// 43
static +xlHtml: Class<Excel$XlFileFormat__xlHtml> & Excel$XlFileFormat__xlHtml & 44;// 44
static +xlIntlAddIn: Class<Excel$XlFileFormat__xlIntlAddIn> & Excel$XlFileFormat__xlIntlAddIn & 26;// 26
static +xlIntlMacro: Class<Excel$XlFileFormat__xlIntlMacro> & Excel$XlFileFormat__xlIntlMacro & 25;// 25
static +xlOpenDocumentSpreadsheet: Class<Excel$XlFileFormat__xlOpenDocumentSpreadsheet> & Excel$XlFileFormat__xlOpenDocumentSpreadsheet & 60;// 60
static +xlOpenXMLAddIn: Class<Excel$XlFileFormat__xlOpenXMLAddIn> & Excel$XlFileFormat__xlOpenXMLAddIn & 55;// 55
static +xlOpenXMLTemplate: Class<Excel$XlFileFormat__xlOpenXMLTemplate> & Excel$XlFileFormat__xlOpenXMLTemplate & 54;// 54
static +xlOpenXMLTemplateMacroEnabled: Class<Excel$XlFileFormat__xlOpenXMLTemplateMacroEnabled> & Excel$XlFileFormat__xlOpenXMLTemplateMacroEnabled & 53;// 53
static +xlOpenXMLWorkbook: Class<Excel$XlFileFormat__xlOpenXMLWorkbook> & Excel$XlFileFormat__xlOpenXMLWorkbook & 51;// 51
static +xlOpenXMLWorkbookMacroEnabled: Class<Excel$XlFileFormat__xlOpenXMLWorkbookMacroEnabled> & Excel$XlFileFormat__xlOpenXMLWorkbookMacroEnabled & 52;// 52
static +xlSYLK: Class<Excel$XlFileFormat__xlSYLK> & Excel$XlFileFormat__xlSYLK & 2;// 2
static +xlTemplate: Class<Excel$XlFileFormat__xlTemplate> & Excel$XlFileFormat__xlTemplate & 17;// 17
static +xlTemplate8: Class<Excel$XlFileFormat__xlTemplate8> & Excel$XlFileFormat__xlTemplate8 & 17;// 17
static +xlTextMac: Class<Excel$XlFileFormat__xlTextMac> & Excel$XlFileFormat__xlTextMac & 19;// 19
static +xlTextMSDOS: Class<Excel$XlFileFormat__xlTextMSDOS> & Excel$XlFileFormat__xlTextMSDOS & 21;// 21
static +xlTextPrinter: Class<Excel$XlFileFormat__xlTextPrinter> & Excel$XlFileFormat__xlTextPrinter & 36;// 36
static +xlTextWindows: Class<Excel$XlFileFormat__xlTextWindows> & Excel$XlFileFormat__xlTextWindows & 20;// 20
static +xlUnicodeText: Class<Excel$XlFileFormat__xlUnicodeText> & Excel$XlFileFormat__xlUnicodeText & 42;// 42
static +xlWebArchive: Class<Excel$XlFileFormat__xlWebArchive> & Excel$XlFileFormat__xlWebArchive & 45;// 45
static +xlWJ2WD1: Class<Excel$XlFileFormat__xlWJ2WD1> & Excel$XlFileFormat__xlWJ2WD1 & 14;// 14
static +xlWJ3: Class<Excel$XlFileFormat__xlWJ3> & Excel$XlFileFormat__xlWJ3 & 40;// 40
static +xlWJ3FJ3: Class<Excel$XlFileFormat__xlWJ3FJ3> & Excel$XlFileFormat__xlWJ3FJ3 & 41;// 41
static +xlWK1: Class<Excel$XlFileFormat__xlWK1> & Excel$XlFileFormat__xlWK1 & 5;// 5
static +xlWK1ALL: Class<Excel$XlFileFormat__xlWK1ALL> & Excel$XlFileFormat__xlWK1ALL & 31;// 31
static +xlWK1FMT: Class<Excel$XlFileFormat__xlWK1FMT> & Excel$XlFileFormat__xlWK1FMT & 30;// 30
static +xlWK3: Class<Excel$XlFileFormat__xlWK3> & Excel$XlFileFormat__xlWK3 & 15;// 15
static +xlWK3FM3: Class<Excel$XlFileFormat__xlWK3FM3> & Excel$XlFileFormat__xlWK3FM3 & 32;// 32
static +xlWK4: Class<Excel$XlFileFormat__xlWK4> & Excel$XlFileFormat__xlWK4 & 38;// 38
static +xlWKS: Class<Excel$XlFileFormat__xlWKS> & Excel$XlFileFormat__xlWKS & 4;// 4
static +xlWorkbookDefault: Class<Excel$XlFileFormat__xlWorkbookDefault> & Excel$XlFileFormat__xlWorkbookDefault & 51;// 51
static +xlWorkbookNormal: Class<Excel$XlFileFormat__xlWorkbookNormal> & Excel$XlFileFormat__xlWorkbookNormal & -4143;// -4143
static +xlWorks2FarEast: Class<Excel$XlFileFormat__xlWorks2FarEast> & Excel$XlFileFormat__xlWorks2FarEast & 28;// 28
static +xlWQ1: Class<Excel$XlFileFormat__xlWQ1> & Excel$XlFileFormat__xlWQ1 & 34;// 34
static +xlXMLSpreadsheet: Class<Excel$XlFileFormat__xlXMLSpreadsheet> & Excel$XlFileFormat__xlXMLSpreadsheet & 46;// 46

}

declare class Excel$XlFileFormat__xlAddIn mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlAddIn8 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlCSV mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlCSVMac mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlCSVMSDOS mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlCSVWindows mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlCurrentPlatformText mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlDBF2 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlDBF3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlDBF4 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlDIF mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel12 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel2 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel2FarEast mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel4 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel4Workbook mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel5 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel7 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel8 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlExcel9795 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlHtml mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlIntlAddIn mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlIntlMacro mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenDocumentSpreadsheet mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenXMLAddIn mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenXMLTemplate mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenXMLTemplateMacroEnabled mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenXMLWorkbook mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlOpenXMLWorkbookMacroEnabled mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlSYLK mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTemplate mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTemplate8 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTextMac mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTextMSDOS mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTextPrinter mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlTextWindows mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlUnicodeText mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWebArchive mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWJ2WD1 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWJ3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWJ3FJ3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK1 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK1ALL mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK1FMT mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK3FM3 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWK4 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWKS mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWorkbookDefault mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWorkbookNormal mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWorks2FarEast mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlWQ1 mixins Excel$XlFileFormat {}
declare class Excel$XlFileFormat__xlXMLSpreadsheet mixins Excel$XlFileFormat {}


declare  class Excel$XlFileValidationPivotMode {
  constructor(...args: empty): mixed;
static +xlFileValidationPivotDefault: Class<Excel$XlFileValidationPivotMode__xlFileValidationPivotDefault> & Excel$XlFileValidationPivotMode__xlFileValidationPivotDefault & 0;// 0
static +xlFileValidationPivotRun: Class<Excel$XlFileValidationPivotMode__xlFileValidationPivotRun> & Excel$XlFileValidationPivotMode__xlFileValidationPivotRun & 1;// 1
static +xlFileValidationPivotSkip: Class<Excel$XlFileValidationPivotMode__xlFileValidationPivotSkip> & Excel$XlFileValidationPivotMode__xlFileValidationPivotSkip & 2;// 2

}

declare class Excel$XlFileValidationPivotMode__xlFileValidationPivotDefault mixins Excel$XlFileValidationPivotMode {}
declare class Excel$XlFileValidationPivotMode__xlFileValidationPivotRun mixins Excel$XlFileValidationPivotMode {}
declare class Excel$XlFileValidationPivotMode__xlFileValidationPivotSkip mixins Excel$XlFileValidationPivotMode {}


declare  class Excel$XlFillWith {
  constructor(...args: empty): mixed;
static +xlFillWithAll: Class<Excel$XlFillWith__xlFillWithAll> & Excel$XlFillWith__xlFillWithAll & -4104;// -4104
static +xlFillWithContents: Class<Excel$XlFillWith__xlFillWithContents> & Excel$XlFillWith__xlFillWithContents & 2;// 2
static +xlFillWithFormats: Class<Excel$XlFillWith__xlFillWithFormats> & Excel$XlFillWith__xlFillWithFormats & -4122;// -4122

}

declare class Excel$XlFillWith__xlFillWithAll mixins Excel$XlFillWith {}
declare class Excel$XlFillWith__xlFillWithContents mixins Excel$XlFillWith {}
declare class Excel$XlFillWith__xlFillWithFormats mixins Excel$XlFillWith {}


declare  class Excel$XlFilterAction {
  constructor(...args: empty): mixed;
static +xlFilterCopy: Class<Excel$XlFilterAction__xlFilterCopy> & Excel$XlFilterAction__xlFilterCopy & 2;// 2
static +xlFilterInPlace: Class<Excel$XlFilterAction__xlFilterInPlace> & Excel$XlFilterAction__xlFilterInPlace & 1;// 1

}

declare class Excel$XlFilterAction__xlFilterCopy mixins Excel$XlFilterAction {}
declare class Excel$XlFilterAction__xlFilterInPlace mixins Excel$XlFilterAction {}


declare  class Excel$XlFilterAllDatesInPeriod {
  constructor(...args: empty): mixed;
static +xlFilterAllDatesInPeriodDay: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodDay> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodDay & 2;// 2
static +xlFilterAllDatesInPeriodHour: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodHour> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodHour & 3;// 3
static +xlFilterAllDatesInPeriodMinute: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMinute> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMinute & 4;// 4
static +xlFilterAllDatesInPeriodMonth: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMonth> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMonth & 1;// 1
static +xlFilterAllDatesInPeriodSecond: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodSecond> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodSecond & 5;// 5
static +xlFilterAllDatesInPeriodYear: Class<Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodYear> & Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodYear & 0;// 0

}

declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodDay mixins Excel$XlFilterAllDatesInPeriod {}
declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodHour mixins Excel$XlFilterAllDatesInPeriod {}
declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMinute mixins Excel$XlFilterAllDatesInPeriod {}
declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodMonth mixins Excel$XlFilterAllDatesInPeriod {}
declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodSecond mixins Excel$XlFilterAllDatesInPeriod {}
declare class Excel$XlFilterAllDatesInPeriod__xlFilterAllDatesInPeriodYear mixins Excel$XlFilterAllDatesInPeriod {}


declare  class Excel$XlFindLookIn {
  constructor(...args: empty): mixed;
static +xlComments: Class<Excel$XlFindLookIn__xlComments> & Excel$XlFindLookIn__xlComments & -4144;// -4144
static +xlFormulas: Class<Excel$XlFindLookIn__xlFormulas> & Excel$XlFindLookIn__xlFormulas & -4123;// -4123
static +xlValues: Class<Excel$XlFindLookIn__xlValues> & Excel$XlFindLookIn__xlValues & -4163;// -4163

}

declare class Excel$XlFindLookIn__xlComments mixins Excel$XlFindLookIn {}
declare class Excel$XlFindLookIn__xlFormulas mixins Excel$XlFindLookIn {}
declare class Excel$XlFindLookIn__xlValues mixins Excel$XlFindLookIn {}


declare  class Excel$XlFixedFormatQuality {
  constructor(...args: empty): mixed;
static +xlQualityMinimum: Class<Excel$XlFixedFormatQuality__xlQualityMinimum> & Excel$XlFixedFormatQuality__xlQualityMinimum & 1;// 1
static +xlQualityStandard: Class<Excel$XlFixedFormatQuality__xlQualityStandard> & Excel$XlFixedFormatQuality__xlQualityStandard & 0;// 0

}

declare class Excel$XlFixedFormatQuality__xlQualityMinimum mixins Excel$XlFixedFormatQuality {}
declare class Excel$XlFixedFormatQuality__xlQualityStandard mixins Excel$XlFixedFormatQuality {}


declare  class Excel$XlFixedFormatType {
  constructor(...args: empty): mixed;
static +xlTypePDF: Class<Excel$XlFixedFormatType__xlTypePDF> & Excel$XlFixedFormatType__xlTypePDF & 0;// 0
static +xlTypeXPS: Class<Excel$XlFixedFormatType__xlTypeXPS> & Excel$XlFixedFormatType__xlTypeXPS & 1;// 1

}

declare class Excel$XlFixedFormatType__xlTypePDF mixins Excel$XlFixedFormatType {}
declare class Excel$XlFixedFormatType__xlTypeXPS mixins Excel$XlFixedFormatType {}


declare  class Excel$XlFormatConditionOperator {
  constructor(...args: empty): mixed;
static +xlBetween: Class<Excel$XlFormatConditionOperator__xlBetween> & Excel$XlFormatConditionOperator__xlBetween & 1;// 1
static +xlEqual: Class<Excel$XlFormatConditionOperator__xlEqual> & Excel$XlFormatConditionOperator__xlEqual & 3;// 3
static +xlGreater: Class<Excel$XlFormatConditionOperator__xlGreater> & Excel$XlFormatConditionOperator__xlGreater & 5;// 5
static +xlGreaterEqual: Class<Excel$XlFormatConditionOperator__xlGreaterEqual> & Excel$XlFormatConditionOperator__xlGreaterEqual & 7;// 7
static +xlLess: Class<Excel$XlFormatConditionOperator__xlLess> & Excel$XlFormatConditionOperator__xlLess & 6;// 6
static +xlLessEqual: Class<Excel$XlFormatConditionOperator__xlLessEqual> & Excel$XlFormatConditionOperator__xlLessEqual & 8;// 8
static +xlNotBetween: Class<Excel$XlFormatConditionOperator__xlNotBetween> & Excel$XlFormatConditionOperator__xlNotBetween & 2;// 2
static +xlNotEqual: Class<Excel$XlFormatConditionOperator__xlNotEqual> & Excel$XlFormatConditionOperator__xlNotEqual & 4;// 4

}

declare class Excel$XlFormatConditionOperator__xlBetween mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlEqual mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlGreater mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlGreaterEqual mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlLess mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlLessEqual mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlNotBetween mixins Excel$XlFormatConditionOperator {}
declare class Excel$XlFormatConditionOperator__xlNotEqual mixins Excel$XlFormatConditionOperator {}


declare  class Excel$XlFormatConditionType {
  constructor(...args: empty): mixed;
static +xlAboveAverageCondition: Class<Excel$XlFormatConditionType__xlAboveAverageCondition> & Excel$XlFormatConditionType__xlAboveAverageCondition & 12;// 12
static +xlBlanksCondition: Class<Excel$XlFormatConditionType__xlBlanksCondition> & Excel$XlFormatConditionType__xlBlanksCondition & 10;// 10
static +xlCellValue: Class<Excel$XlFormatConditionType__xlCellValue> & Excel$XlFormatConditionType__xlCellValue & 1;// 1
static +xlColorScale: Class<Excel$XlFormatConditionType__xlColorScale> & Excel$XlFormatConditionType__xlColorScale & 3;// 3
static +xlDatabar: Class<Excel$XlFormatConditionType__xlDatabar> & Excel$XlFormatConditionType__xlDatabar & 4;// 4
static +xlErrorsCondition: Class<Excel$XlFormatConditionType__xlErrorsCondition> & Excel$XlFormatConditionType__xlErrorsCondition & 16;// 16
static +xlExpression: Class<Excel$XlFormatConditionType__xlExpression> & Excel$XlFormatConditionType__xlExpression & 2;// 2
static +xlIconSets: Class<Excel$XlFormatConditionType__xlIconSets> & Excel$XlFormatConditionType__xlIconSets & 6;// 6
static +xlNoBlanksCondition: Class<Excel$XlFormatConditionType__xlNoBlanksCondition> & Excel$XlFormatConditionType__xlNoBlanksCondition & 13;// 13
static +xlNoErrorsCondition: Class<Excel$XlFormatConditionType__xlNoErrorsCondition> & Excel$XlFormatConditionType__xlNoErrorsCondition & 17;// 17
static +xlTextString: Class<Excel$XlFormatConditionType__xlTextString> & Excel$XlFormatConditionType__xlTextString & 9;// 9
static +xlTimePeriod: Class<Excel$XlFormatConditionType__xlTimePeriod> & Excel$XlFormatConditionType__xlTimePeriod & 11;// 11
static +xlTop10: Class<Excel$XlFormatConditionType__xlTop10> & Excel$XlFormatConditionType__xlTop10 & 5;// 5
static +xlUniqueValues: Class<Excel$XlFormatConditionType__xlUniqueValues> & Excel$XlFormatConditionType__xlUniqueValues & 8;// 8

}

declare class Excel$XlFormatConditionType__xlAboveAverageCondition mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlBlanksCondition mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlCellValue mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlColorScale mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlDatabar mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlErrorsCondition mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlExpression mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlIconSets mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlNoBlanksCondition mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlNoErrorsCondition mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlTextString mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlTimePeriod mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlTop10 mixins Excel$XlFormatConditionType {}
declare class Excel$XlFormatConditionType__xlUniqueValues mixins Excel$XlFormatConditionType {}


declare  class Excel$XlFormatFilterTypes {
  constructor(...args: empty): mixed;
static +xlFilterBottom: Class<Excel$XlFormatFilterTypes__xlFilterBottom> & Excel$XlFormatFilterTypes__xlFilterBottom & 0;// 0
static +xlFilterBottomPercent: Class<Excel$XlFormatFilterTypes__xlFilterBottomPercent> & Excel$XlFormatFilterTypes__xlFilterBottomPercent & 2;// 2
static +xlFilterTop: Class<Excel$XlFormatFilterTypes__xlFilterTop> & Excel$XlFormatFilterTypes__xlFilterTop & 1;// 1
static +xlFilterTopPercent: Class<Excel$XlFormatFilterTypes__xlFilterTopPercent> & Excel$XlFormatFilterTypes__xlFilterTopPercent & 3;// 3

}

declare class Excel$XlFormatFilterTypes__xlFilterBottom mixins Excel$XlFormatFilterTypes {}
declare class Excel$XlFormatFilterTypes__xlFilterBottomPercent mixins Excel$XlFormatFilterTypes {}
declare class Excel$XlFormatFilterTypes__xlFilterTop mixins Excel$XlFormatFilterTypes {}
declare class Excel$XlFormatFilterTypes__xlFilterTopPercent mixins Excel$XlFormatFilterTypes {}


declare  class Excel$XlFormControl {
  constructor(...args: empty): mixed;
static +xlButtonControl: Class<Excel$XlFormControl__xlButtonControl> & Excel$XlFormControl__xlButtonControl & 0;// 0
static +xlCheckBox: Class<Excel$XlFormControl__xlCheckBox> & Excel$XlFormControl__xlCheckBox & 1;// 1
static +xlDropDown: Class<Excel$XlFormControl__xlDropDown> & Excel$XlFormControl__xlDropDown & 2;// 2
static +xlEditBox: Class<Excel$XlFormControl__xlEditBox> & Excel$XlFormControl__xlEditBox & 3;// 3
static +xlGroupBox: Class<Excel$XlFormControl__xlGroupBox> & Excel$XlFormControl__xlGroupBox & 4;// 4
static +xlLabel: Class<Excel$XlFormControl__xlLabel> & Excel$XlFormControl__xlLabel & 5;// 5
static +xlListBox: Class<Excel$XlFormControl__xlListBox> & Excel$XlFormControl__xlListBox & 6;// 6
static +xlOptionButton: Class<Excel$XlFormControl__xlOptionButton> & Excel$XlFormControl__xlOptionButton & 7;// 7
static +xlScrollBar: Class<Excel$XlFormControl__xlScrollBar> & Excel$XlFormControl__xlScrollBar & 8;// 8
static +xlSpinner: Class<Excel$XlFormControl__xlSpinner> & Excel$XlFormControl__xlSpinner & 9;// 9

}

declare class Excel$XlFormControl__xlButtonControl mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlCheckBox mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlDropDown mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlEditBox mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlGroupBox mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlLabel mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlListBox mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlOptionButton mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlScrollBar mixins Excel$XlFormControl {}
declare class Excel$XlFormControl__xlSpinner mixins Excel$XlFormControl {}


declare  class Excel$XlFormulaLabel {
  constructor(...args: empty): mixed;
static +xlColumnLabels: Class<Excel$XlFormulaLabel__xlColumnLabels> & Excel$XlFormulaLabel__xlColumnLabels & 2;// 2
static +xlMixedLabels: Class<Excel$XlFormulaLabel__xlMixedLabels> & Excel$XlFormulaLabel__xlMixedLabels & 3;// 3
static +xlNoLabels: Class<Excel$XlFormulaLabel__xlNoLabels> & Excel$XlFormulaLabel__xlNoLabels & -4142;// -4142
static +xlRowLabels: Class<Excel$XlFormulaLabel__xlRowLabels> & Excel$XlFormulaLabel__xlRowLabels & 1;// 1

}

declare class Excel$XlFormulaLabel__xlColumnLabels mixins Excel$XlFormulaLabel {}
declare class Excel$XlFormulaLabel__xlMixedLabels mixins Excel$XlFormulaLabel {}
declare class Excel$XlFormulaLabel__xlNoLabels mixins Excel$XlFormulaLabel {}
declare class Excel$XlFormulaLabel__xlRowLabels mixins Excel$XlFormulaLabel {}


declare  class Excel$XlGenerateTableRefs {
  constructor(...args: empty): mixed;
static +xlGenerateTableRefA1: Class<Excel$XlGenerateTableRefs__xlGenerateTableRefA1> & Excel$XlGenerateTableRefs__xlGenerateTableRefA1 & 0;// 0
static +xlGenerateTableRefStruct: Class<Excel$XlGenerateTableRefs__xlGenerateTableRefStruct> & Excel$XlGenerateTableRefs__xlGenerateTableRefStruct & 1;// 1

}

declare class Excel$XlGenerateTableRefs__xlGenerateTableRefA1 mixins Excel$XlGenerateTableRefs {}
declare class Excel$XlGenerateTableRefs__xlGenerateTableRefStruct mixins Excel$XlGenerateTableRefs {}


declare  class Excel$XlGradientFillType {
  constructor(...args: empty): mixed;
static +xlGradientFillLinear: Class<Excel$XlGradientFillType__xlGradientFillLinear> & Excel$XlGradientFillType__xlGradientFillLinear & 0;// 0
static +xlGradientFillPath: Class<Excel$XlGradientFillType__xlGradientFillPath> & Excel$XlGradientFillType__xlGradientFillPath & 1;// 1

}

declare class Excel$XlGradientFillType__xlGradientFillLinear mixins Excel$XlGradientFillType {}
declare class Excel$XlGradientFillType__xlGradientFillPath mixins Excel$XlGradientFillType {}


declare  class Excel$XlHAlign {
  constructor(...args: empty): mixed;
static +xlHAlignCenter: Class<Excel$XlHAlign__xlHAlignCenter> & Excel$XlHAlign__xlHAlignCenter & -4108;// -4108
static +xlHAlignCenterAcrossSelection: Class<Excel$XlHAlign__xlHAlignCenterAcrossSelection> & Excel$XlHAlign__xlHAlignCenterAcrossSelection & 7;// 7
static +xlHAlignDistributed: Class<Excel$XlHAlign__xlHAlignDistributed> & Excel$XlHAlign__xlHAlignDistributed & -4117;// -4117
static +xlHAlignFill: Class<Excel$XlHAlign__xlHAlignFill> & Excel$XlHAlign__xlHAlignFill & 5;// 5
static +xlHAlignGeneral: Class<Excel$XlHAlign__xlHAlignGeneral> & Excel$XlHAlign__xlHAlignGeneral & 1;// 1
static +xlHAlignJustify: Class<Excel$XlHAlign__xlHAlignJustify> & Excel$XlHAlign__xlHAlignJustify & -4130;// -4130
static +xlHAlignLeft: Class<Excel$XlHAlign__xlHAlignLeft> & Excel$XlHAlign__xlHAlignLeft & -4131;// -4131
static +xlHAlignRight: Class<Excel$XlHAlign__xlHAlignRight> & Excel$XlHAlign__xlHAlignRight & -4152;// -4152

}

declare class Excel$XlHAlign__xlHAlignCenter mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignCenterAcrossSelection mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignDistributed mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignFill mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignGeneral mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignJustify mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignLeft mixins Excel$XlHAlign {}
declare class Excel$XlHAlign__xlHAlignRight mixins Excel$XlHAlign {}


declare  class Excel$XlHebrewModes {
  constructor(...args: empty): mixed;
static +xlHebrewFullScript: Class<Excel$XlHebrewModes__xlHebrewFullScript> & Excel$XlHebrewModes__xlHebrewFullScript & 0;// 0
static +xlHebrewMixedAuthorizedScript: Class<Excel$XlHebrewModes__xlHebrewMixedAuthorizedScript> & Excel$XlHebrewModes__xlHebrewMixedAuthorizedScript & 3;// 3
static +xlHebrewMixedScript: Class<Excel$XlHebrewModes__xlHebrewMixedScript> & Excel$XlHebrewModes__xlHebrewMixedScript & 2;// 2
static +xlHebrewPartialScript: Class<Excel$XlHebrewModes__xlHebrewPartialScript> & Excel$XlHebrewModes__xlHebrewPartialScript & 1;// 1

}

declare class Excel$XlHebrewModes__xlHebrewFullScript mixins Excel$XlHebrewModes {}
declare class Excel$XlHebrewModes__xlHebrewMixedAuthorizedScript mixins Excel$XlHebrewModes {}
declare class Excel$XlHebrewModes__xlHebrewMixedScript mixins Excel$XlHebrewModes {}
declare class Excel$XlHebrewModes__xlHebrewPartialScript mixins Excel$XlHebrewModes {}


declare  class Excel$XlHighlightChangesTime {
  constructor(...args: empty): mixed;
static +xlAllChanges: Class<Excel$XlHighlightChangesTime__xlAllChanges> & Excel$XlHighlightChangesTime__xlAllChanges & 2;// 2
static +xlNotYetReviewed: Class<Excel$XlHighlightChangesTime__xlNotYetReviewed> & Excel$XlHighlightChangesTime__xlNotYetReviewed & 3;// 3
static +xlSinceMyLastSave: Class<Excel$XlHighlightChangesTime__xlSinceMyLastSave> & Excel$XlHighlightChangesTime__xlSinceMyLastSave & 1;// 1

}

declare class Excel$XlHighlightChangesTime__xlAllChanges mixins Excel$XlHighlightChangesTime {}
declare class Excel$XlHighlightChangesTime__xlNotYetReviewed mixins Excel$XlHighlightChangesTime {}
declare class Excel$XlHighlightChangesTime__xlSinceMyLastSave mixins Excel$XlHighlightChangesTime {}


declare  class Excel$XlHtmlType {
  constructor(...args: empty): mixed;
static +xlHtmlCalc: Class<Excel$XlHtmlType__xlHtmlCalc> & Excel$XlHtmlType__xlHtmlCalc & 1;// 1
static +xlHtmlChart: Class<Excel$XlHtmlType__xlHtmlChart> & Excel$XlHtmlType__xlHtmlChart & 3;// 3
static +xlHtmlList: Class<Excel$XlHtmlType__xlHtmlList> & Excel$XlHtmlType__xlHtmlList & 2;// 2
static +xlHtmlStatic: Class<Excel$XlHtmlType__xlHtmlStatic> & Excel$XlHtmlType__xlHtmlStatic & 0;// 0

}

declare class Excel$XlHtmlType__xlHtmlCalc mixins Excel$XlHtmlType {}
declare class Excel$XlHtmlType__xlHtmlChart mixins Excel$XlHtmlType {}
declare class Excel$XlHtmlType__xlHtmlList mixins Excel$XlHtmlType {}
declare class Excel$XlHtmlType__xlHtmlStatic mixins Excel$XlHtmlType {}


declare  class Excel$XlIcon {
  constructor(...args: empty): mixed;
static +xlIcon0Bars: Class<Excel$XlIcon__xlIcon0Bars> & Excel$XlIcon__xlIcon0Bars & 37;// 37
static +xlIcon0FilledBoxes: Class<Excel$XlIcon__xlIcon0FilledBoxes> & Excel$XlIcon__xlIcon0FilledBoxes & 52;// 52
static +xlIcon1Bar: Class<Excel$XlIcon__xlIcon1Bar> & Excel$XlIcon__xlIcon1Bar & 38;// 38
static +xlIcon1FilledBox: Class<Excel$XlIcon__xlIcon1FilledBox> & Excel$XlIcon__xlIcon1FilledBox & 51;// 51
static +xlIcon2Bars: Class<Excel$XlIcon__xlIcon2Bars> & Excel$XlIcon__xlIcon2Bars & 39;// 39
static +xlIcon2FilledBoxes: Class<Excel$XlIcon__xlIcon2FilledBoxes> & Excel$XlIcon__xlIcon2FilledBoxes & 50;// 50
static +xlIcon3Bars: Class<Excel$XlIcon__xlIcon3Bars> & Excel$XlIcon__xlIcon3Bars & 40;// 40
static +xlIcon3FilledBoxes: Class<Excel$XlIcon__xlIcon3FilledBoxes> & Excel$XlIcon__xlIcon3FilledBoxes & 49;// 49
static +xlIcon4Bars: Class<Excel$XlIcon__xlIcon4Bars> & Excel$XlIcon__xlIcon4Bars & 41;// 41
static +xlIcon4FilledBoxes: Class<Excel$XlIcon__xlIcon4FilledBoxes> & Excel$XlIcon__xlIcon4FilledBoxes & 48;// 48
static +xlIconBlackCircle: Class<Excel$XlIcon__xlIconBlackCircle> & Excel$XlIcon__xlIconBlackCircle & 32;// 32
static +xlIconBlackCircleWithBorder: Class<Excel$XlIcon__xlIconBlackCircleWithBorder> & Excel$XlIcon__xlIconBlackCircleWithBorder & 13;// 13
static +xlIconCircleWithOneWhiteQuarter: Class<Excel$XlIcon__xlIconCircleWithOneWhiteQuarter> & Excel$XlIcon__xlIconCircleWithOneWhiteQuarter & 33;// 33
static +xlIconCircleWithThreeWhiteQuarters: Class<Excel$XlIcon__xlIconCircleWithThreeWhiteQuarters> & Excel$XlIcon__xlIconCircleWithThreeWhiteQuarters & 35;// 35
static +xlIconCircleWithTwoWhiteQuarters: Class<Excel$XlIcon__xlIconCircleWithTwoWhiteQuarters> & Excel$XlIcon__xlIconCircleWithTwoWhiteQuarters & 34;// 34
static +xlIconGoldStar: Class<Excel$XlIcon__xlIconGoldStar> & Excel$XlIcon__xlIconGoldStar & 42;// 42
static +xlIconGrayCircle: Class<Excel$XlIcon__xlIconGrayCircle> & Excel$XlIcon__xlIconGrayCircle & 31;// 31
static +xlIconGrayDownArrow: Class<Excel$XlIcon__xlIconGrayDownArrow> & Excel$XlIcon__xlIconGrayDownArrow & 6;// 6
static +xlIconGrayDownInclineArrow: Class<Excel$XlIcon__xlIconGrayDownInclineArrow> & Excel$XlIcon__xlIconGrayDownInclineArrow & 28;// 28
static +xlIconGraySideArrow: Class<Excel$XlIcon__xlIconGraySideArrow> & Excel$XlIcon__xlIconGraySideArrow & 5;// 5
static +xlIconGrayUpArrow: Class<Excel$XlIcon__xlIconGrayUpArrow> & Excel$XlIcon__xlIconGrayUpArrow & 4;// 4
static +xlIconGrayUpInclineArrow: Class<Excel$XlIcon__xlIconGrayUpInclineArrow> & Excel$XlIcon__xlIconGrayUpInclineArrow & 27;// 27
static +xlIconGreenCheck: Class<Excel$XlIcon__xlIconGreenCheck> & Excel$XlIcon__xlIconGreenCheck & 22;// 22
static +xlIconGreenCheckSymbol: Class<Excel$XlIcon__xlIconGreenCheckSymbol> & Excel$XlIcon__xlIconGreenCheckSymbol & 19;// 19
static +xlIconGreenCircle: Class<Excel$XlIcon__xlIconGreenCircle> & Excel$XlIcon__xlIconGreenCircle & 10;// 10
static +xlIconGreenFlag: Class<Excel$XlIcon__xlIconGreenFlag> & Excel$XlIcon__xlIconGreenFlag & 7;// 7
static +xlIconGreenTrafficLight: Class<Excel$XlIcon__xlIconGreenTrafficLight> & Excel$XlIcon__xlIconGreenTrafficLight & 14;// 14
static +xlIconGreenUpArrow: Class<Excel$XlIcon__xlIconGreenUpArrow> & Excel$XlIcon__xlIconGreenUpArrow & 1;// 1
static +xlIconGreenUpTriangle: Class<Excel$XlIcon__xlIconGreenUpTriangle> & Excel$XlIcon__xlIconGreenUpTriangle & 45;// 45
static +xlIconHalfGoldStar: Class<Excel$XlIcon__xlIconHalfGoldStar> & Excel$XlIcon__xlIconHalfGoldStar & 43;// 43
static +xlIconNoCellIcon: Class<Excel$XlIcon__xlIconNoCellIcon> & Excel$XlIcon__xlIconNoCellIcon & -1;// -1
static +xlIconPinkCircle: Class<Excel$XlIcon__xlIconPinkCircle> & Excel$XlIcon__xlIconPinkCircle & 30;// 30
static +xlIconRedCircle: Class<Excel$XlIcon__xlIconRedCircle> & Excel$XlIcon__xlIconRedCircle & 29;// 29
static +xlIconRedCircleWithBorder: Class<Excel$XlIcon__xlIconRedCircleWithBorder> & Excel$XlIcon__xlIconRedCircleWithBorder & 12;// 12
static +xlIconRedCross: Class<Excel$XlIcon__xlIconRedCross> & Excel$XlIcon__xlIconRedCross & 24;// 24
static +xlIconRedCrossSymbol: Class<Excel$XlIcon__xlIconRedCrossSymbol> & Excel$XlIcon__xlIconRedCrossSymbol & 21;// 21
static +xlIconRedDiamond: Class<Excel$XlIcon__xlIconRedDiamond> & Excel$XlIcon__xlIconRedDiamond & 18;// 18
static +xlIconRedDownArrow: Class<Excel$XlIcon__xlIconRedDownArrow> & Excel$XlIcon__xlIconRedDownArrow & 3;// 3
static +xlIconRedDownTriangle: Class<Excel$XlIcon__xlIconRedDownTriangle> & Excel$XlIcon__xlIconRedDownTriangle & 47;// 47
static +xlIconRedFlag: Class<Excel$XlIcon__xlIconRedFlag> & Excel$XlIcon__xlIconRedFlag & 9;// 9
static +xlIconRedTrafficLight: Class<Excel$XlIcon__xlIconRedTrafficLight> & Excel$XlIcon__xlIconRedTrafficLight & 16;// 16
static +xlIconSilverStar: Class<Excel$XlIcon__xlIconSilverStar> & Excel$XlIcon__xlIconSilverStar & 44;// 44
static +xlIconWhiteCircleAllWhiteQuarters: Class<Excel$XlIcon__xlIconWhiteCircleAllWhiteQuarters> & Excel$XlIcon__xlIconWhiteCircleAllWhiteQuarters & 36;// 36
static +xlIconYellowCircle: Class<Excel$XlIcon__xlIconYellowCircle> & Excel$XlIcon__xlIconYellowCircle & 11;// 11
static +xlIconYellowDash: Class<Excel$XlIcon__xlIconYellowDash> & Excel$XlIcon__xlIconYellowDash & 46;// 46
static +xlIconYellowDownInclineArrow: Class<Excel$XlIcon__xlIconYellowDownInclineArrow> & Excel$XlIcon__xlIconYellowDownInclineArrow & 26;// 26
static +xlIconYellowExclamation: Class<Excel$XlIcon__xlIconYellowExclamation> & Excel$XlIcon__xlIconYellowExclamation & 23;// 23
static +xlIconYellowExclamationSymbol: Class<Excel$XlIcon__xlIconYellowExclamationSymbol> & Excel$XlIcon__xlIconYellowExclamationSymbol & 20;// 20
static +xlIconYellowFlag: Class<Excel$XlIcon__xlIconYellowFlag> & Excel$XlIcon__xlIconYellowFlag & 8;// 8
static +xlIconYellowSideArrow: Class<Excel$XlIcon__xlIconYellowSideArrow> & Excel$XlIcon__xlIconYellowSideArrow & 2;// 2
static +xlIconYellowTrafficLight: Class<Excel$XlIcon__xlIconYellowTrafficLight> & Excel$XlIcon__xlIconYellowTrafficLight & 15;// 15
static +xlIconYellowTriangle: Class<Excel$XlIcon__xlIconYellowTriangle> & Excel$XlIcon__xlIconYellowTriangle & 17;// 17
static +xlIconYellowUpInclineArrow: Class<Excel$XlIcon__xlIconYellowUpInclineArrow> & Excel$XlIcon__xlIconYellowUpInclineArrow & 25;// 25

}

declare class Excel$XlIcon__xlIcon0Bars mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon0FilledBoxes mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon1Bar mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon1FilledBox mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon2Bars mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon2FilledBoxes mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon3Bars mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon3FilledBoxes mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon4Bars mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIcon4FilledBoxes mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconBlackCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconBlackCircleWithBorder mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconCircleWithOneWhiteQuarter mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconCircleWithThreeWhiteQuarters mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconCircleWithTwoWhiteQuarters mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGoldStar mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGrayCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGrayDownArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGrayDownInclineArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGraySideArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGrayUpArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGrayUpInclineArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenCheck mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenCheckSymbol mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenFlag mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenTrafficLight mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenUpArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconGreenUpTriangle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconHalfGoldStar mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconNoCellIcon mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconPinkCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedCircleWithBorder mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedCross mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedCrossSymbol mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedDiamond mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedDownArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedDownTriangle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedFlag mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconRedTrafficLight mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconSilverStar mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconWhiteCircleAllWhiteQuarters mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowCircle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowDash mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowDownInclineArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowExclamation mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowExclamationSymbol mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowFlag mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowSideArrow mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowTrafficLight mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowTriangle mixins Excel$XlIcon {}
declare class Excel$XlIcon__xlIconYellowUpInclineArrow mixins Excel$XlIcon {}


declare  class Excel$XlIconSet {
  constructor(...args: empty): mixed;
static +xl3Arrows: Class<Excel$XlIconSet__xl3Arrows> & Excel$XlIconSet__xl3Arrows & 1;// 1
static +xl3ArrowsGray: Class<Excel$XlIconSet__xl3ArrowsGray> & Excel$XlIconSet__xl3ArrowsGray & 2;// 2
static +xl3Flags: Class<Excel$XlIconSet__xl3Flags> & Excel$XlIconSet__xl3Flags & 3;// 3
static +xl3Signs: Class<Excel$XlIconSet__xl3Signs> & Excel$XlIconSet__xl3Signs & 6;// 6
static +xl3Stars: Class<Excel$XlIconSet__xl3Stars> & Excel$XlIconSet__xl3Stars & 18;// 18
static +xl3Symbols: Class<Excel$XlIconSet__xl3Symbols> & Excel$XlIconSet__xl3Symbols & 7;// 7
static +xl3Symbols2: Class<Excel$XlIconSet__xl3Symbols2> & Excel$XlIconSet__xl3Symbols2 & 8;// 8
static +xl3TrafficLights1: Class<Excel$XlIconSet__xl3TrafficLights1> & Excel$XlIconSet__xl3TrafficLights1 & 4;// 4
static +xl3TrafficLights2: Class<Excel$XlIconSet__xl3TrafficLights2> & Excel$XlIconSet__xl3TrafficLights2 & 5;// 5
static +xl3Triangles: Class<Excel$XlIconSet__xl3Triangles> & Excel$XlIconSet__xl3Triangles & 19;// 19
static +xl4Arrows: Class<Excel$XlIconSet__xl4Arrows> & Excel$XlIconSet__xl4Arrows & 9;// 9
static +xl4ArrowsGray: Class<Excel$XlIconSet__xl4ArrowsGray> & Excel$XlIconSet__xl4ArrowsGray & 10;// 10
static +xl4CRV: Class<Excel$XlIconSet__xl4CRV> & Excel$XlIconSet__xl4CRV & 12;// 12
static +xl4RedToBlack: Class<Excel$XlIconSet__xl4RedToBlack> & Excel$XlIconSet__xl4RedToBlack & 11;// 11
static +xl4TrafficLights: Class<Excel$XlIconSet__xl4TrafficLights> & Excel$XlIconSet__xl4TrafficLights & 13;// 13
static +xl5Arrows: Class<Excel$XlIconSet__xl5Arrows> & Excel$XlIconSet__xl5Arrows & 14;// 14
static +xl5ArrowsGray: Class<Excel$XlIconSet__xl5ArrowsGray> & Excel$XlIconSet__xl5ArrowsGray & 15;// 15
static +xl5Boxes: Class<Excel$XlIconSet__xl5Boxes> & Excel$XlIconSet__xl5Boxes & 20;// 20
static +xl5CRV: Class<Excel$XlIconSet__xl5CRV> & Excel$XlIconSet__xl5CRV & 16;// 16
static +xl5Quarters: Class<Excel$XlIconSet__xl5Quarters> & Excel$XlIconSet__xl5Quarters & 17;// 17
static +xlCustomSet: Class<Excel$XlIconSet__xlCustomSet> & Excel$XlIconSet__xlCustomSet & -1;// -1

}

declare class Excel$XlIconSet__xl3Arrows mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3ArrowsGray mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Flags mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Signs mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Stars mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Symbols mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Symbols2 mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3TrafficLights1 mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3TrafficLights2 mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl3Triangles mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl4Arrows mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl4ArrowsGray mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl4CRV mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl4RedToBlack mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl4TrafficLights mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl5Arrows mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl5ArrowsGray mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl5Boxes mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl5CRV mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xl5Quarters mixins Excel$XlIconSet {}
declare class Excel$XlIconSet__xlCustomSet mixins Excel$XlIconSet {}


declare  class Excel$XlIMEMode {
  constructor(...args: empty): mixed;
static +xlIMEModeAlpha: Class<Excel$XlIMEMode__xlIMEModeAlpha> & Excel$XlIMEMode__xlIMEModeAlpha & 8;// 8
static +xlIMEModeAlphaFull: Class<Excel$XlIMEMode__xlIMEModeAlphaFull> & Excel$XlIMEMode__xlIMEModeAlphaFull & 7;// 7
static +xlIMEModeDisable: Class<Excel$XlIMEMode__xlIMEModeDisable> & Excel$XlIMEMode__xlIMEModeDisable & 3;// 3
static +xlIMEModeHangul: Class<Excel$XlIMEMode__xlIMEModeHangul> & Excel$XlIMEMode__xlIMEModeHangul & 10;// 10
static +xlIMEModeHangulFull: Class<Excel$XlIMEMode__xlIMEModeHangulFull> & Excel$XlIMEMode__xlIMEModeHangulFull & 9;// 9
static +xlIMEModeHiragana: Class<Excel$XlIMEMode__xlIMEModeHiragana> & Excel$XlIMEMode__xlIMEModeHiragana & 4;// 4
static +xlIMEModeKatakana: Class<Excel$XlIMEMode__xlIMEModeKatakana> & Excel$XlIMEMode__xlIMEModeKatakana & 5;// 5
static +xlIMEModeKatakanaHalf: Class<Excel$XlIMEMode__xlIMEModeKatakanaHalf> & Excel$XlIMEMode__xlIMEModeKatakanaHalf & 6;// 6
static +xlIMEModeNoControl: Class<Excel$XlIMEMode__xlIMEModeNoControl> & Excel$XlIMEMode__xlIMEModeNoControl & 0;// 0
static +xlIMEModeOff: Class<Excel$XlIMEMode__xlIMEModeOff> & Excel$XlIMEMode__xlIMEModeOff & 2;// 2
static +xlIMEModeOn: Class<Excel$XlIMEMode__xlIMEModeOn> & Excel$XlIMEMode__xlIMEModeOn & 1;// 1

}

declare class Excel$XlIMEMode__xlIMEModeAlpha mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeAlphaFull mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeDisable mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeHangul mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeHangulFull mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeHiragana mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeKatakana mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeKatakanaHalf mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeNoControl mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeOff mixins Excel$XlIMEMode {}
declare class Excel$XlIMEMode__xlIMEModeOn mixins Excel$XlIMEMode {}


declare  class Excel$XlImportDataAs {
  constructor(...args: empty): mixed;
static +xlPivotTableReport: Class<Excel$XlImportDataAs__xlPivotTableReport> & Excel$XlImportDataAs__xlPivotTableReport & 1;// 1
static +xlQueryTable: Class<Excel$XlImportDataAs__xlQueryTable> & Excel$XlImportDataAs__xlQueryTable & 0;// 0
static +xlTable: Class<Excel$XlImportDataAs__xlTable> & Excel$XlImportDataAs__xlTable & 2;// 2

}

declare class Excel$XlImportDataAs__xlPivotTableReport mixins Excel$XlImportDataAs {}
declare class Excel$XlImportDataAs__xlQueryTable mixins Excel$XlImportDataAs {}
declare class Excel$XlImportDataAs__xlTable mixins Excel$XlImportDataAs {}


declare  class Excel$XlInsertFormatOrigin {
  constructor(...args: empty): mixed;
static +xlFormatFromLeftOrAbove: Class<Excel$XlInsertFormatOrigin__xlFormatFromLeftOrAbove> & Excel$XlInsertFormatOrigin__xlFormatFromLeftOrAbove & 0;// 0
static +xlFormatFromRightOrBelow: Class<Excel$XlInsertFormatOrigin__xlFormatFromRightOrBelow> & Excel$XlInsertFormatOrigin__xlFormatFromRightOrBelow & 1;// 1

}

declare class Excel$XlInsertFormatOrigin__xlFormatFromLeftOrAbove mixins Excel$XlInsertFormatOrigin {}
declare class Excel$XlInsertFormatOrigin__xlFormatFromRightOrBelow mixins Excel$XlInsertFormatOrigin {}


declare  class Excel$XlInsertShiftDirection {
  constructor(...args: empty): mixed;
static +xlShiftDown: Class<Excel$XlInsertShiftDirection__xlShiftDown> & Excel$XlInsertShiftDirection__xlShiftDown & -4121;// -4121
static +xlShiftToRight: Class<Excel$XlInsertShiftDirection__xlShiftToRight> & Excel$XlInsertShiftDirection__xlShiftToRight & -4161;// -4161

}

declare class Excel$XlInsertShiftDirection__xlShiftDown mixins Excel$XlInsertShiftDirection {}
declare class Excel$XlInsertShiftDirection__xlShiftToRight mixins Excel$XlInsertShiftDirection {}


declare  class Excel$XlLayoutFormType {
  constructor(...args: empty): mixed;
static +xlOutline: Class<Excel$XlLayoutFormType__xlOutline> & Excel$XlLayoutFormType__xlOutline & 1;// 1
static +xlTabular: Class<Excel$XlLayoutFormType__xlTabular> & Excel$XlLayoutFormType__xlTabular & 0;// 0

}

declare class Excel$XlLayoutFormType__xlOutline mixins Excel$XlLayoutFormType {}
declare class Excel$XlLayoutFormType__xlTabular mixins Excel$XlLayoutFormType {}


declare  class Excel$XlLayoutRowType {
  constructor(...args: empty): mixed;
static +xlCompactRow: Class<Excel$XlLayoutRowType__xlCompactRow> & Excel$XlLayoutRowType__xlCompactRow & 0;// 0
static +xlOutlineRow: Class<Excel$XlLayoutRowType__xlOutlineRow> & Excel$XlLayoutRowType__xlOutlineRow & 2;// 2
static +xlTabularRow: Class<Excel$XlLayoutRowType__xlTabularRow> & Excel$XlLayoutRowType__xlTabularRow & 1;// 1

}

declare class Excel$XlLayoutRowType__xlCompactRow mixins Excel$XlLayoutRowType {}
declare class Excel$XlLayoutRowType__xlOutlineRow mixins Excel$XlLayoutRowType {}
declare class Excel$XlLayoutRowType__xlTabularRow mixins Excel$XlLayoutRowType {}


declare  class Excel$XlLegendPosition {
  constructor(...args: empty): mixed;
static +xlLegendPositionBottom: Class<Excel$XlLegendPosition__xlLegendPositionBottom> & Excel$XlLegendPosition__xlLegendPositionBottom & -4107;// -4107
static +xlLegendPositionCorner: Class<Excel$XlLegendPosition__xlLegendPositionCorner> & Excel$XlLegendPosition__xlLegendPositionCorner & 2;// 2
static +xlLegendPositionCustom: Class<Excel$XlLegendPosition__xlLegendPositionCustom> & Excel$XlLegendPosition__xlLegendPositionCustom & -4161;// -4161
static +xlLegendPositionLeft: Class<Excel$XlLegendPosition__xlLegendPositionLeft> & Excel$XlLegendPosition__xlLegendPositionLeft & -4131;// -4131
static +xlLegendPositionRight: Class<Excel$XlLegendPosition__xlLegendPositionRight> & Excel$XlLegendPosition__xlLegendPositionRight & -4152;// -4152
static +xlLegendPositionTop: Class<Excel$XlLegendPosition__xlLegendPositionTop> & Excel$XlLegendPosition__xlLegendPositionTop & -4160;// -4160

}

declare class Excel$XlLegendPosition__xlLegendPositionBottom mixins Excel$XlLegendPosition {}
declare class Excel$XlLegendPosition__xlLegendPositionCorner mixins Excel$XlLegendPosition {}
declare class Excel$XlLegendPosition__xlLegendPositionCustom mixins Excel$XlLegendPosition {}
declare class Excel$XlLegendPosition__xlLegendPositionLeft mixins Excel$XlLegendPosition {}
declare class Excel$XlLegendPosition__xlLegendPositionRight mixins Excel$XlLegendPosition {}
declare class Excel$XlLegendPosition__xlLegendPositionTop mixins Excel$XlLegendPosition {}


declare  class Excel$XlLineStyle {
  constructor(...args: empty): mixed;
static +xlContinuous: Class<Excel$XlLineStyle__xlContinuous> & Excel$XlLineStyle__xlContinuous & 1;// 1
static +xlDash: Class<Excel$XlLineStyle__xlDash> & Excel$XlLineStyle__xlDash & -4115;// -4115
static +xlDashDot: Class<Excel$XlLineStyle__xlDashDot> & Excel$XlLineStyle__xlDashDot & 4;// 4
static +xlDashDotDot: Class<Excel$XlLineStyle__xlDashDotDot> & Excel$XlLineStyle__xlDashDotDot & 5;// 5
static +xlDot: Class<Excel$XlLineStyle__xlDot> & Excel$XlLineStyle__xlDot & -4118;// -4118
static +xlDouble: Class<Excel$XlLineStyle__xlDouble> & Excel$XlLineStyle__xlDouble & -4119;// -4119
static +xlLineStyleNone: Class<Excel$XlLineStyle__xlLineStyleNone> & Excel$XlLineStyle__xlLineStyleNone & -4142;// -4142
static +xlSlantDashDot: Class<Excel$XlLineStyle__xlSlantDashDot> & Excel$XlLineStyle__xlSlantDashDot & 13;// 13

}

declare class Excel$XlLineStyle__xlContinuous mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlDash mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlDashDot mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlDashDotDot mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlDot mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlDouble mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlLineStyleNone mixins Excel$XlLineStyle {}
declare class Excel$XlLineStyle__xlSlantDashDot mixins Excel$XlLineStyle {}


declare  class Excel$XlLink {
  constructor(...args: empty): mixed;
static +xlExcelLinks: Class<Excel$XlLink__xlExcelLinks> & Excel$XlLink__xlExcelLinks & 1;// 1
static +xlOLELinks: Class<Excel$XlLink__xlOLELinks> & Excel$XlLink__xlOLELinks & 2;// 2
static +xlPublishers: Class<Excel$XlLink__xlPublishers> & Excel$XlLink__xlPublishers & 5;// 5
static +xlSubscribers: Class<Excel$XlLink__xlSubscribers> & Excel$XlLink__xlSubscribers & 6;// 6

}

declare class Excel$XlLink__xlExcelLinks mixins Excel$XlLink {}
declare class Excel$XlLink__xlOLELinks mixins Excel$XlLink {}
declare class Excel$XlLink__xlPublishers mixins Excel$XlLink {}
declare class Excel$XlLink__xlSubscribers mixins Excel$XlLink {}


declare  class Excel$XlLinkInfo {
  constructor(...args: empty): mixed;
static +xlEditionDate: Class<Excel$XlLinkInfo__xlEditionDate> & Excel$XlLinkInfo__xlEditionDate & 2;// 2
static +xlLinkInfoStatus: Class<Excel$XlLinkInfo__xlLinkInfoStatus> & Excel$XlLinkInfo__xlLinkInfoStatus & 3;// 3
static +xlUpdateState: Class<Excel$XlLinkInfo__xlUpdateState> & Excel$XlLinkInfo__xlUpdateState & 1;// 1

}

declare class Excel$XlLinkInfo__xlEditionDate mixins Excel$XlLinkInfo {}
declare class Excel$XlLinkInfo__xlLinkInfoStatus mixins Excel$XlLinkInfo {}
declare class Excel$XlLinkInfo__xlUpdateState mixins Excel$XlLinkInfo {}


declare  class Excel$XlLinkInfoType {
  constructor(...args: empty): mixed;
static +xlLinkInfoOLELinks: Class<Excel$XlLinkInfoType__xlLinkInfoOLELinks> & Excel$XlLinkInfoType__xlLinkInfoOLELinks & 2;// 2
static +xlLinkInfoPublishers: Class<Excel$XlLinkInfoType__xlLinkInfoPublishers> & Excel$XlLinkInfoType__xlLinkInfoPublishers & 5;// 5
static +xlLinkInfoSubscribers: Class<Excel$XlLinkInfoType__xlLinkInfoSubscribers> & Excel$XlLinkInfoType__xlLinkInfoSubscribers & 6;// 6

}

declare class Excel$XlLinkInfoType__xlLinkInfoOLELinks mixins Excel$XlLinkInfoType {}
declare class Excel$XlLinkInfoType__xlLinkInfoPublishers mixins Excel$XlLinkInfoType {}
declare class Excel$XlLinkInfoType__xlLinkInfoSubscribers mixins Excel$XlLinkInfoType {}


declare  class Excel$XlLinkStatus {
  constructor(...args: empty): mixed;
static +xlLinkStatusCopiedValues: Class<Excel$XlLinkStatus__xlLinkStatusCopiedValues> & Excel$XlLinkStatus__xlLinkStatusCopiedValues & 10;// 10
static +xlLinkStatusIndeterminate: Class<Excel$XlLinkStatus__xlLinkStatusIndeterminate> & Excel$XlLinkStatus__xlLinkStatusIndeterminate & 5;// 5
static +xlLinkStatusInvalidName: Class<Excel$XlLinkStatus__xlLinkStatusInvalidName> & Excel$XlLinkStatus__xlLinkStatusInvalidName & 7;// 7
static +xlLinkStatusMissingFile: Class<Excel$XlLinkStatus__xlLinkStatusMissingFile> & Excel$XlLinkStatus__xlLinkStatusMissingFile & 1;// 1
static +xlLinkStatusMissingSheet: Class<Excel$XlLinkStatus__xlLinkStatusMissingSheet> & Excel$XlLinkStatus__xlLinkStatusMissingSheet & 2;// 2
static +xlLinkStatusNotStarted: Class<Excel$XlLinkStatus__xlLinkStatusNotStarted> & Excel$XlLinkStatus__xlLinkStatusNotStarted & 6;// 6
static +xlLinkStatusOK: Class<Excel$XlLinkStatus__xlLinkStatusOK> & Excel$XlLinkStatus__xlLinkStatusOK & 0;// 0
static +xlLinkStatusOld: Class<Excel$XlLinkStatus__xlLinkStatusOld> & Excel$XlLinkStatus__xlLinkStatusOld & 3;// 3
static +xlLinkStatusSourceNotCalculated: Class<Excel$XlLinkStatus__xlLinkStatusSourceNotCalculated> & Excel$XlLinkStatus__xlLinkStatusSourceNotCalculated & 4;// 4
static +xlLinkStatusSourceNotOpen: Class<Excel$XlLinkStatus__xlLinkStatusSourceNotOpen> & Excel$XlLinkStatus__xlLinkStatusSourceNotOpen & 8;// 8
static +xlLinkStatusSourceOpen: Class<Excel$XlLinkStatus__xlLinkStatusSourceOpen> & Excel$XlLinkStatus__xlLinkStatusSourceOpen & 9;// 9

}

declare class Excel$XlLinkStatus__xlLinkStatusCopiedValues mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusIndeterminate mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusInvalidName mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusMissingFile mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusMissingSheet mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusNotStarted mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusOK mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusOld mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusSourceNotCalculated mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusSourceNotOpen mixins Excel$XlLinkStatus {}
declare class Excel$XlLinkStatus__xlLinkStatusSourceOpen mixins Excel$XlLinkStatus {}


declare  class Excel$XlLinkType {
  constructor(...args: empty): mixed;
static +xlLinkTypeExcelLinks: Class<Excel$XlLinkType__xlLinkTypeExcelLinks> & Excel$XlLinkType__xlLinkTypeExcelLinks & 1;// 1
static +xlLinkTypeOLELinks: Class<Excel$XlLinkType__xlLinkTypeOLELinks> & Excel$XlLinkType__xlLinkTypeOLELinks & 2;// 2

}

declare class Excel$XlLinkType__xlLinkTypeExcelLinks mixins Excel$XlLinkType {}
declare class Excel$XlLinkType__xlLinkTypeOLELinks mixins Excel$XlLinkType {}


declare  class Excel$XlListConflict {
  constructor(...args: empty): mixed;
static +xlListConflictDialog: Class<Excel$XlListConflict__xlListConflictDialog> & Excel$XlListConflict__xlListConflictDialog & 0;// 0
static +xlListConflictDiscardAllConflicts: Class<Excel$XlListConflict__xlListConflictDiscardAllConflicts> & Excel$XlListConflict__xlListConflictDiscardAllConflicts & 2;// 2
static +xlListConflictError: Class<Excel$XlListConflict__xlListConflictError> & Excel$XlListConflict__xlListConflictError & 3;// 3
static +xlListConflictRetryAllConflicts: Class<Excel$XlListConflict__xlListConflictRetryAllConflicts> & Excel$XlListConflict__xlListConflictRetryAllConflicts & 1;// 1

}

declare class Excel$XlListConflict__xlListConflictDialog mixins Excel$XlListConflict {}
declare class Excel$XlListConflict__xlListConflictDiscardAllConflicts mixins Excel$XlListConflict {}
declare class Excel$XlListConflict__xlListConflictError mixins Excel$XlListConflict {}
declare class Excel$XlListConflict__xlListConflictRetryAllConflicts mixins Excel$XlListConflict {}


declare  class Excel$XlListDataType {
  constructor(...args: empty): mixed;
static +xlListDataTypeCheckbox: Class<Excel$XlListDataType__xlListDataTypeCheckbox> & Excel$XlListDataType__xlListDataTypeCheckbox & 9;// 9
static +xlListDataTypeChoice: Class<Excel$XlListDataType__xlListDataTypeChoice> & Excel$XlListDataType__xlListDataTypeChoice & 6;// 6
static +xlListDataTypeChoiceMulti: Class<Excel$XlListDataType__xlListDataTypeChoiceMulti> & Excel$XlListDataType__xlListDataTypeChoiceMulti & 7;// 7
static +xlListDataTypeCounter: Class<Excel$XlListDataType__xlListDataTypeCounter> & Excel$XlListDataType__xlListDataTypeCounter & 11;// 11
static +xlListDataTypeCurrency: Class<Excel$XlListDataType__xlListDataTypeCurrency> & Excel$XlListDataType__xlListDataTypeCurrency & 4;// 4
static +xlListDataTypeDateTime: Class<Excel$XlListDataType__xlListDataTypeDateTime> & Excel$XlListDataType__xlListDataTypeDateTime & 5;// 5
static +xlListDataTypeHyperLink: Class<Excel$XlListDataType__xlListDataTypeHyperLink> & Excel$XlListDataType__xlListDataTypeHyperLink & 10;// 10
static +xlListDataTypeListLookup: Class<Excel$XlListDataType__xlListDataTypeListLookup> & Excel$XlListDataType__xlListDataTypeListLookup & 8;// 8
static +xlListDataTypeMultiLineRichText: Class<Excel$XlListDataType__xlListDataTypeMultiLineRichText> & Excel$XlListDataType__xlListDataTypeMultiLineRichText & 12;// 12
static +xlListDataTypeMultiLineText: Class<Excel$XlListDataType__xlListDataTypeMultiLineText> & Excel$XlListDataType__xlListDataTypeMultiLineText & 2;// 2
static +xlListDataTypeNone: Class<Excel$XlListDataType__xlListDataTypeNone> & Excel$XlListDataType__xlListDataTypeNone & 0;// 0
static +xlListDataTypeNumber: Class<Excel$XlListDataType__xlListDataTypeNumber> & Excel$XlListDataType__xlListDataTypeNumber & 3;// 3
static +xlListDataTypeText: Class<Excel$XlListDataType__xlListDataTypeText> & Excel$XlListDataType__xlListDataTypeText & 1;// 1

}

declare class Excel$XlListDataType__xlListDataTypeCheckbox mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeChoice mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeChoiceMulti mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeCounter mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeCurrency mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeDateTime mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeHyperLink mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeListLookup mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeMultiLineRichText mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeMultiLineText mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeNone mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeNumber mixins Excel$XlListDataType {}
declare class Excel$XlListDataType__xlListDataTypeText mixins Excel$XlListDataType {}


declare  class Excel$XlListObjectSourceType {
  constructor(...args: empty): mixed;
static +xlSrcExternal: Class<Excel$XlListObjectSourceType__xlSrcExternal> & Excel$XlListObjectSourceType__xlSrcExternal & 0;// 0
static +xlSrcQuery: Class<Excel$XlListObjectSourceType__xlSrcQuery> & Excel$XlListObjectSourceType__xlSrcQuery & 3;// 3
static +xlSrcRange: Class<Excel$XlListObjectSourceType__xlSrcRange> & Excel$XlListObjectSourceType__xlSrcRange & 1;// 1
static +xlSrcXml: Class<Excel$XlListObjectSourceType__xlSrcXml> & Excel$XlListObjectSourceType__xlSrcXml & 2;// 2

}

declare class Excel$XlListObjectSourceType__xlSrcExternal mixins Excel$XlListObjectSourceType {}
declare class Excel$XlListObjectSourceType__xlSrcQuery mixins Excel$XlListObjectSourceType {}
declare class Excel$XlListObjectSourceType__xlSrcRange mixins Excel$XlListObjectSourceType {}
declare class Excel$XlListObjectSourceType__xlSrcXml mixins Excel$XlListObjectSourceType {}


declare  class Excel$XlLocationInTable {
  constructor(...args: empty): mixed;
static +xlColumnHeader: Class<Excel$XlLocationInTable__xlColumnHeader> & Excel$XlLocationInTable__xlColumnHeader & -4110;// -4110
static +xlColumnItem: Class<Excel$XlLocationInTable__xlColumnItem> & Excel$XlLocationInTable__xlColumnItem & 5;// 5
static +xlDataHeader: Class<Excel$XlLocationInTable__xlDataHeader> & Excel$XlLocationInTable__xlDataHeader & 3;// 3
static +xlDataItem: Class<Excel$XlLocationInTable__xlDataItem> & Excel$XlLocationInTable__xlDataItem & 7;// 7
static +xlPageHeader: Class<Excel$XlLocationInTable__xlPageHeader> & Excel$XlLocationInTable__xlPageHeader & 2;// 2
static +xlPageItem: Class<Excel$XlLocationInTable__xlPageItem> & Excel$XlLocationInTable__xlPageItem & 6;// 6
static +xlRowHeader: Class<Excel$XlLocationInTable__xlRowHeader> & Excel$XlLocationInTable__xlRowHeader & -4153;// -4153
static +xlRowItem: Class<Excel$XlLocationInTable__xlRowItem> & Excel$XlLocationInTable__xlRowItem & 4;// 4
static +xlTableBody: Class<Excel$XlLocationInTable__xlTableBody> & Excel$XlLocationInTable__xlTableBody & 8;// 8

}

declare class Excel$XlLocationInTable__xlColumnHeader mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlColumnItem mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlDataHeader mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlDataItem mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlPageHeader mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlPageItem mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlRowHeader mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlRowItem mixins Excel$XlLocationInTable {}
declare class Excel$XlLocationInTable__xlTableBody mixins Excel$XlLocationInTable {}


declare  class Excel$XlLookAt {
  constructor(...args: empty): mixed;
static +xlPart: Class<Excel$XlLookAt__xlPart> & Excel$XlLookAt__xlPart & 2;// 2
static +xlWhole: Class<Excel$XlLookAt__xlWhole> & Excel$XlLookAt__xlWhole & 1;// 1

}

declare class Excel$XlLookAt__xlPart mixins Excel$XlLookAt {}
declare class Excel$XlLookAt__xlWhole mixins Excel$XlLookAt {}


declare  class Excel$XlLookFor {
  constructor(...args: empty): mixed;
static +xlLookForBlanks: Class<Excel$XlLookFor__xlLookForBlanks> & Excel$XlLookFor__xlLookForBlanks & 0;// 0
static +xlLookForErrors: Class<Excel$XlLookFor__xlLookForErrors> & Excel$XlLookFor__xlLookForErrors & 1;// 1
static +xlLookForFormulas: Class<Excel$XlLookFor__xlLookForFormulas> & Excel$XlLookFor__xlLookForFormulas & 2;// 2

}

declare class Excel$XlLookFor__xlLookForBlanks mixins Excel$XlLookFor {}
declare class Excel$XlLookFor__xlLookForErrors mixins Excel$XlLookFor {}
declare class Excel$XlLookFor__xlLookForFormulas mixins Excel$XlLookFor {}


declare  class Excel$XlMailSystem {
  constructor(...args: empty): mixed;
static +xlMAPI: Class<Excel$XlMailSystem__xlMAPI> & Excel$XlMailSystem__xlMAPI & 1;// 1
static +xlNoMailSystem: Class<Excel$XlMailSystem__xlNoMailSystem> & Excel$XlMailSystem__xlNoMailSystem & 0;// 0
static +xlPowerTalk: Class<Excel$XlMailSystem__xlPowerTalk> & Excel$XlMailSystem__xlPowerTalk & 2;// 2

}

declare class Excel$XlMailSystem__xlMAPI mixins Excel$XlMailSystem {}
declare class Excel$XlMailSystem__xlNoMailSystem mixins Excel$XlMailSystem {}
declare class Excel$XlMailSystem__xlPowerTalk mixins Excel$XlMailSystem {}


declare  class Excel$XlMarkerStyle {
  constructor(...args: empty): mixed;
static +xlMarkerStyleAutomatic: Class<Excel$XlMarkerStyle__xlMarkerStyleAutomatic> & Excel$XlMarkerStyle__xlMarkerStyleAutomatic & -4105;// -4105
static +xlMarkerStyleCircle: Class<Excel$XlMarkerStyle__xlMarkerStyleCircle> & Excel$XlMarkerStyle__xlMarkerStyleCircle & 8;// 8
static +xlMarkerStyleDash: Class<Excel$XlMarkerStyle__xlMarkerStyleDash> & Excel$XlMarkerStyle__xlMarkerStyleDash & -4115;// -4115
static +xlMarkerStyleDiamond: Class<Excel$XlMarkerStyle__xlMarkerStyleDiamond> & Excel$XlMarkerStyle__xlMarkerStyleDiamond & 2;// 2
static +xlMarkerStyleDot: Class<Excel$XlMarkerStyle__xlMarkerStyleDot> & Excel$XlMarkerStyle__xlMarkerStyleDot & -4118;// -4118
static +xlMarkerStyleNone: Class<Excel$XlMarkerStyle__xlMarkerStyleNone> & Excel$XlMarkerStyle__xlMarkerStyleNone & -4142;// -4142
static +xlMarkerStylePicture: Class<Excel$XlMarkerStyle__xlMarkerStylePicture> & Excel$XlMarkerStyle__xlMarkerStylePicture & -4147;// -4147
static +xlMarkerStylePlus: Class<Excel$XlMarkerStyle__xlMarkerStylePlus> & Excel$XlMarkerStyle__xlMarkerStylePlus & 9;// 9
static +xlMarkerStyleSquare: Class<Excel$XlMarkerStyle__xlMarkerStyleSquare> & Excel$XlMarkerStyle__xlMarkerStyleSquare & 1;// 1
static +xlMarkerStyleStar: Class<Excel$XlMarkerStyle__xlMarkerStyleStar> & Excel$XlMarkerStyle__xlMarkerStyleStar & 5;// 5
static +xlMarkerStyleTriangle: Class<Excel$XlMarkerStyle__xlMarkerStyleTriangle> & Excel$XlMarkerStyle__xlMarkerStyleTriangle & 3;// 3
static +xlMarkerStyleX: Class<Excel$XlMarkerStyle__xlMarkerStyleX> & Excel$XlMarkerStyle__xlMarkerStyleX & -4168;// -4168

}

declare class Excel$XlMarkerStyle__xlMarkerStyleAutomatic mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleCircle mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleDash mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleDiamond mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleDot mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleNone mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStylePicture mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStylePlus mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleSquare mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleStar mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleTriangle mixins Excel$XlMarkerStyle {}
declare class Excel$XlMarkerStyle__xlMarkerStyleX mixins Excel$XlMarkerStyle {}


declare  class Excel$XlMeasurementUnits {
  constructor(...args: empty): mixed;
static +xlCentimeters: Class<Excel$XlMeasurementUnits__xlCentimeters> & Excel$XlMeasurementUnits__xlCentimeters & 1;// 1
static +xlInches: Class<Excel$XlMeasurementUnits__xlInches> & Excel$XlMeasurementUnits__xlInches & 0;// 0
static +xlMillimeters: Class<Excel$XlMeasurementUnits__xlMillimeters> & Excel$XlMeasurementUnits__xlMillimeters & 2;// 2

}

declare class Excel$XlMeasurementUnits__xlCentimeters mixins Excel$XlMeasurementUnits {}
declare class Excel$XlMeasurementUnits__xlInches mixins Excel$XlMeasurementUnits {}
declare class Excel$XlMeasurementUnits__xlMillimeters mixins Excel$XlMeasurementUnits {}


declare  class Excel$XlMouseButton {
  constructor(...args: empty): mixed;
static +xlNoButton: Class<Excel$XlMouseButton__xlNoButton> & Excel$XlMouseButton__xlNoButton & 0;// 0
static +xlPrimaryButton: Class<Excel$XlMouseButton__xlPrimaryButton> & Excel$XlMouseButton__xlPrimaryButton & 1;// 1
static +xlSecondaryButton: Class<Excel$XlMouseButton__xlSecondaryButton> & Excel$XlMouseButton__xlSecondaryButton & 2;// 2

}

declare class Excel$XlMouseButton__xlNoButton mixins Excel$XlMouseButton {}
declare class Excel$XlMouseButton__xlPrimaryButton mixins Excel$XlMouseButton {}
declare class Excel$XlMouseButton__xlSecondaryButton mixins Excel$XlMouseButton {}


declare  class Excel$XlMousePointer {
  constructor(...args: empty): mixed;
static +xlDefault: Class<Excel$XlMousePointer__xlDefault> & Excel$XlMousePointer__xlDefault & -4143;// -4143
static +xlIBeam: Class<Excel$XlMousePointer__xlIBeam> & Excel$XlMousePointer__xlIBeam & 3;// 3
static +xlNorthwestArrow: Class<Excel$XlMousePointer__xlNorthwestArrow> & Excel$XlMousePointer__xlNorthwestArrow & 1;// 1
static +xlWait: Class<Excel$XlMousePointer__xlWait> & Excel$XlMousePointer__xlWait & 2;// 2

}

declare class Excel$XlMousePointer__xlDefault mixins Excel$XlMousePointer {}
declare class Excel$XlMousePointer__xlIBeam mixins Excel$XlMousePointer {}
declare class Excel$XlMousePointer__xlNorthwestArrow mixins Excel$XlMousePointer {}
declare class Excel$XlMousePointer__xlWait mixins Excel$XlMousePointer {}


declare  class Excel$XlMSApplication {
  constructor(...args: empty): mixed;
static +xlMicrosoftAccess: Class<Excel$XlMSApplication__xlMicrosoftAccess> & Excel$XlMSApplication__xlMicrosoftAccess & 4;// 4
static +xlMicrosoftFoxPro: Class<Excel$XlMSApplication__xlMicrosoftFoxPro> & Excel$XlMSApplication__xlMicrosoftFoxPro & 5;// 5
static +xlMicrosoftMail: Class<Excel$XlMSApplication__xlMicrosoftMail> & Excel$XlMSApplication__xlMicrosoftMail & 3;// 3
static +xlMicrosoftPowerPoint: Class<Excel$XlMSApplication__xlMicrosoftPowerPoint> & Excel$XlMSApplication__xlMicrosoftPowerPoint & 2;// 2
static +xlMicrosoftProject: Class<Excel$XlMSApplication__xlMicrosoftProject> & Excel$XlMSApplication__xlMicrosoftProject & 6;// 6
static +xlMicrosoftSchedulePlus: Class<Excel$XlMSApplication__xlMicrosoftSchedulePlus> & Excel$XlMSApplication__xlMicrosoftSchedulePlus & 7;// 7
static +xlMicrosoftWord: Class<Excel$XlMSApplication__xlMicrosoftWord> & Excel$XlMSApplication__xlMicrosoftWord & 1;// 1

}

declare class Excel$XlMSApplication__xlMicrosoftAccess mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftFoxPro mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftMail mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftPowerPoint mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftProject mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftSchedulePlus mixins Excel$XlMSApplication {}
declare class Excel$XlMSApplication__xlMicrosoftWord mixins Excel$XlMSApplication {}


declare  class Excel$XlOartHorizontalOverflow {
  constructor(...args: empty): mixed;
static +xlOartHorizontalOverflowClip: Class<Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowClip> & Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowClip & 1;// 1
static +xlOartHorizontalOverflowOverflow: Class<Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowOverflow> & Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowOverflow & 0;// 0

}

declare class Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowClip mixins Excel$XlOartHorizontalOverflow {}
declare class Excel$XlOartHorizontalOverflow__xlOartHorizontalOverflowOverflow mixins Excel$XlOartHorizontalOverflow {}


declare  class Excel$XlOartVerticalOverflow {
  constructor(...args: empty): mixed;
static +xlOartVerticalOverflowClip: Class<Excel$XlOartVerticalOverflow__xlOartVerticalOverflowClip> & Excel$XlOartVerticalOverflow__xlOartVerticalOverflowClip & 1;// 1
static +xlOartVerticalOverflowEllipsis: Class<Excel$XlOartVerticalOverflow__xlOartVerticalOverflowEllipsis> & Excel$XlOartVerticalOverflow__xlOartVerticalOverflowEllipsis & 2;// 2
static +xlOartVerticalOverflowOverflow: Class<Excel$XlOartVerticalOverflow__xlOartVerticalOverflowOverflow> & Excel$XlOartVerticalOverflow__xlOartVerticalOverflowOverflow & 0;// 0

}

declare class Excel$XlOartVerticalOverflow__xlOartVerticalOverflowClip mixins Excel$XlOartVerticalOverflow {}
declare class Excel$XlOartVerticalOverflow__xlOartVerticalOverflowEllipsis mixins Excel$XlOartVerticalOverflow {}
declare class Excel$XlOartVerticalOverflow__xlOartVerticalOverflowOverflow mixins Excel$XlOartVerticalOverflow {}


declare  class Excel$XlObjectSize {
  constructor(...args: empty): mixed;
static +xlFitToPage: Class<Excel$XlObjectSize__xlFitToPage> & Excel$XlObjectSize__xlFitToPage & 2;// 2
static +xlFullPage: Class<Excel$XlObjectSize__xlFullPage> & Excel$XlObjectSize__xlFullPage & 3;// 3
static +xlScreenSize: Class<Excel$XlObjectSize__xlScreenSize> & Excel$XlObjectSize__xlScreenSize & 1;// 1

}

declare class Excel$XlObjectSize__xlFitToPage mixins Excel$XlObjectSize {}
declare class Excel$XlObjectSize__xlFullPage mixins Excel$XlObjectSize {}
declare class Excel$XlObjectSize__xlScreenSize mixins Excel$XlObjectSize {}


declare  class Excel$XlOLEType {
  constructor(...args: empty): mixed;
static +xlOLEControl: Class<Excel$XlOLEType__xlOLEControl> & Excel$XlOLEType__xlOLEControl & 2;// 2
static +xlOLEEmbed: Class<Excel$XlOLEType__xlOLEEmbed> & Excel$XlOLEType__xlOLEEmbed & 1;// 1
static +xlOLELink: Class<Excel$XlOLEType__xlOLELink> & Excel$XlOLEType__xlOLELink & 0;// 0

}

declare class Excel$XlOLEType__xlOLEControl mixins Excel$XlOLEType {}
declare class Excel$XlOLEType__xlOLEEmbed mixins Excel$XlOLEType {}
declare class Excel$XlOLEType__xlOLELink mixins Excel$XlOLEType {}


declare  class Excel$XlOLEVerb {
  constructor(...args: empty): mixed;
static +xlVerbOpen: Class<Excel$XlOLEVerb__xlVerbOpen> & Excel$XlOLEVerb__xlVerbOpen & 2;// 2
static +xlVerbPrimary: Class<Excel$XlOLEVerb__xlVerbPrimary> & Excel$XlOLEVerb__xlVerbPrimary & 1;// 1

}

declare class Excel$XlOLEVerb__xlVerbOpen mixins Excel$XlOLEVerb {}
declare class Excel$XlOLEVerb__xlVerbPrimary mixins Excel$XlOLEVerb {}


declare  class Excel$XlOrder {
  constructor(...args: empty): mixed;
static +xlDownThenOver: Class<Excel$XlOrder__xlDownThenOver> & Excel$XlOrder__xlDownThenOver & 1;// 1
static +xlOverThenDown: Class<Excel$XlOrder__xlOverThenDown> & Excel$XlOrder__xlOverThenDown & 2;// 2

}

declare class Excel$XlOrder__xlDownThenOver mixins Excel$XlOrder {}
declare class Excel$XlOrder__xlOverThenDown mixins Excel$XlOrder {}


declare  class Excel$XlOrientation {
  constructor(...args: empty): mixed;
static +xlDownward: Class<Excel$XlOrientation__xlDownward> & Excel$XlOrientation__xlDownward & -4170;// -4170
static +xlHorizontal: Class<Excel$XlOrientation__xlHorizontal> & Excel$XlOrientation__xlHorizontal & -4128;// -4128
static +xlUpward: Class<Excel$XlOrientation__xlUpward> & Excel$XlOrientation__xlUpward & -4171;// -4171
static +xlVertical: Class<Excel$XlOrientation__xlVertical> & Excel$XlOrientation__xlVertical & -4166;// -4166

}

declare class Excel$XlOrientation__xlDownward mixins Excel$XlOrientation {}
declare class Excel$XlOrientation__xlHorizontal mixins Excel$XlOrientation {}
declare class Excel$XlOrientation__xlUpward mixins Excel$XlOrientation {}
declare class Excel$XlOrientation__xlVertical mixins Excel$XlOrientation {}


declare  class Excel$XlPageBreak {
  constructor(...args: empty): mixed;
static +xlPageBreakAutomatic: Class<Excel$XlPageBreak__xlPageBreakAutomatic> & Excel$XlPageBreak__xlPageBreakAutomatic & -4105;// -4105
static +xlPageBreakManual: Class<Excel$XlPageBreak__xlPageBreakManual> & Excel$XlPageBreak__xlPageBreakManual & -4135;// -4135
static +xlPageBreakNone: Class<Excel$XlPageBreak__xlPageBreakNone> & Excel$XlPageBreak__xlPageBreakNone & -4142;// -4142

}

declare class Excel$XlPageBreak__xlPageBreakAutomatic mixins Excel$XlPageBreak {}
declare class Excel$XlPageBreak__xlPageBreakManual mixins Excel$XlPageBreak {}
declare class Excel$XlPageBreak__xlPageBreakNone mixins Excel$XlPageBreak {}


declare  class Excel$XlPageBreakExtent {
  constructor(...args: empty): mixed;
static +xlPageBreakFull: Class<Excel$XlPageBreakExtent__xlPageBreakFull> & Excel$XlPageBreakExtent__xlPageBreakFull & 1;// 1
static +xlPageBreakPartial: Class<Excel$XlPageBreakExtent__xlPageBreakPartial> & Excel$XlPageBreakExtent__xlPageBreakPartial & 2;// 2

}

declare class Excel$XlPageBreakExtent__xlPageBreakFull mixins Excel$XlPageBreakExtent {}
declare class Excel$XlPageBreakExtent__xlPageBreakPartial mixins Excel$XlPageBreakExtent {}


declare  class Excel$XlPageOrientation {
  constructor(...args: empty): mixed;
static +xlLandscape: Class<Excel$XlPageOrientation__xlLandscape> & Excel$XlPageOrientation__xlLandscape & 2;// 2
static +xlPortrait: Class<Excel$XlPageOrientation__xlPortrait> & Excel$XlPageOrientation__xlPortrait & 1;// 1

}

declare class Excel$XlPageOrientation__xlLandscape mixins Excel$XlPageOrientation {}
declare class Excel$XlPageOrientation__xlPortrait mixins Excel$XlPageOrientation {}


declare  class Excel$XlPaperSize {
  constructor(...args: empty): mixed;
static +xlPaper10x14: Class<Excel$XlPaperSize__xlPaper10x14> & Excel$XlPaperSize__xlPaper10x14 & 16;// 16
static +xlPaper11x17: Class<Excel$XlPaperSize__xlPaper11x17> & Excel$XlPaperSize__xlPaper11x17 & 17;// 17
static +xlPaperA3: Class<Excel$XlPaperSize__xlPaperA3> & Excel$XlPaperSize__xlPaperA3 & 8;// 8
static +xlPaperA4: Class<Excel$XlPaperSize__xlPaperA4> & Excel$XlPaperSize__xlPaperA4 & 9;// 9
static +xlPaperA4Small: Class<Excel$XlPaperSize__xlPaperA4Small> & Excel$XlPaperSize__xlPaperA4Small & 10;// 10
static +xlPaperA5: Class<Excel$XlPaperSize__xlPaperA5> & Excel$XlPaperSize__xlPaperA5 & 11;// 11
static +xlPaperB4: Class<Excel$XlPaperSize__xlPaperB4> & Excel$XlPaperSize__xlPaperB4 & 12;// 12
static +xlPaperB5: Class<Excel$XlPaperSize__xlPaperB5> & Excel$XlPaperSize__xlPaperB5 & 13;// 13
static +xlPaperCsheet: Class<Excel$XlPaperSize__xlPaperCsheet> & Excel$XlPaperSize__xlPaperCsheet & 24;// 24
static +xlPaperDsheet: Class<Excel$XlPaperSize__xlPaperDsheet> & Excel$XlPaperSize__xlPaperDsheet & 25;// 25
static +xlPaperEnvelope10: Class<Excel$XlPaperSize__xlPaperEnvelope10> & Excel$XlPaperSize__xlPaperEnvelope10 & 20;// 20
static +xlPaperEnvelope11: Class<Excel$XlPaperSize__xlPaperEnvelope11> & Excel$XlPaperSize__xlPaperEnvelope11 & 21;// 21
static +xlPaperEnvelope12: Class<Excel$XlPaperSize__xlPaperEnvelope12> & Excel$XlPaperSize__xlPaperEnvelope12 & 22;// 22
static +xlPaperEnvelope14: Class<Excel$XlPaperSize__xlPaperEnvelope14> & Excel$XlPaperSize__xlPaperEnvelope14 & 23;// 23
static +xlPaperEnvelope9: Class<Excel$XlPaperSize__xlPaperEnvelope9> & Excel$XlPaperSize__xlPaperEnvelope9 & 19;// 19
static +xlPaperEnvelopeB4: Class<Excel$XlPaperSize__xlPaperEnvelopeB4> & Excel$XlPaperSize__xlPaperEnvelopeB4 & 33;// 33
static +xlPaperEnvelopeB5: Class<Excel$XlPaperSize__xlPaperEnvelopeB5> & Excel$XlPaperSize__xlPaperEnvelopeB5 & 34;// 34
static +xlPaperEnvelopeB6: Class<Excel$XlPaperSize__xlPaperEnvelopeB6> & Excel$XlPaperSize__xlPaperEnvelopeB6 & 35;// 35
static +xlPaperEnvelopeC3: Class<Excel$XlPaperSize__xlPaperEnvelopeC3> & Excel$XlPaperSize__xlPaperEnvelopeC3 & 29;// 29
static +xlPaperEnvelopeC4: Class<Excel$XlPaperSize__xlPaperEnvelopeC4> & Excel$XlPaperSize__xlPaperEnvelopeC4 & 30;// 30
static +xlPaperEnvelopeC5: Class<Excel$XlPaperSize__xlPaperEnvelopeC5> & Excel$XlPaperSize__xlPaperEnvelopeC5 & 28;// 28
static +xlPaperEnvelopeC6: Class<Excel$XlPaperSize__xlPaperEnvelopeC6> & Excel$XlPaperSize__xlPaperEnvelopeC6 & 31;// 31
static +xlPaperEnvelopeC65: Class<Excel$XlPaperSize__xlPaperEnvelopeC65> & Excel$XlPaperSize__xlPaperEnvelopeC65 & 32;// 32
static +xlPaperEnvelopeDL: Class<Excel$XlPaperSize__xlPaperEnvelopeDL> & Excel$XlPaperSize__xlPaperEnvelopeDL & 27;// 27
static +xlPaperEnvelopeItaly: Class<Excel$XlPaperSize__xlPaperEnvelopeItaly> & Excel$XlPaperSize__xlPaperEnvelopeItaly & 36;// 36
static +xlPaperEnvelopeMonarch: Class<Excel$XlPaperSize__xlPaperEnvelopeMonarch> & Excel$XlPaperSize__xlPaperEnvelopeMonarch & 37;// 37
static +xlPaperEnvelopePersonal: Class<Excel$XlPaperSize__xlPaperEnvelopePersonal> & Excel$XlPaperSize__xlPaperEnvelopePersonal & 38;// 38
static +xlPaperEsheet: Class<Excel$XlPaperSize__xlPaperEsheet> & Excel$XlPaperSize__xlPaperEsheet & 26;// 26
static +xlPaperExecutive: Class<Excel$XlPaperSize__xlPaperExecutive> & Excel$XlPaperSize__xlPaperExecutive & 7;// 7
static +xlPaperFanfoldLegalGerman: Class<Excel$XlPaperSize__xlPaperFanfoldLegalGerman> & Excel$XlPaperSize__xlPaperFanfoldLegalGerman & 41;// 41
static +xlPaperFanfoldStdGerman: Class<Excel$XlPaperSize__xlPaperFanfoldStdGerman> & Excel$XlPaperSize__xlPaperFanfoldStdGerman & 40;// 40
static +xlPaperFanfoldUS: Class<Excel$XlPaperSize__xlPaperFanfoldUS> & Excel$XlPaperSize__xlPaperFanfoldUS & 39;// 39
static +xlPaperFolio: Class<Excel$XlPaperSize__xlPaperFolio> & Excel$XlPaperSize__xlPaperFolio & 14;// 14
static +xlPaperLedger: Class<Excel$XlPaperSize__xlPaperLedger> & Excel$XlPaperSize__xlPaperLedger & 4;// 4
static +xlPaperLegal: Class<Excel$XlPaperSize__xlPaperLegal> & Excel$XlPaperSize__xlPaperLegal & 5;// 5
static +xlPaperLetter: Class<Excel$XlPaperSize__xlPaperLetter> & Excel$XlPaperSize__xlPaperLetter & 1;// 1
static +xlPaperLetterSmall: Class<Excel$XlPaperSize__xlPaperLetterSmall> & Excel$XlPaperSize__xlPaperLetterSmall & 2;// 2
static +xlPaperNote: Class<Excel$XlPaperSize__xlPaperNote> & Excel$XlPaperSize__xlPaperNote & 18;// 18
static +xlPaperQuarto: Class<Excel$XlPaperSize__xlPaperQuarto> & Excel$XlPaperSize__xlPaperQuarto & 15;// 15
static +xlPaperStatement: Class<Excel$XlPaperSize__xlPaperStatement> & Excel$XlPaperSize__xlPaperStatement & 6;// 6
static +xlPaperTabloid: Class<Excel$XlPaperSize__xlPaperTabloid> & Excel$XlPaperSize__xlPaperTabloid & 3;// 3
static +xlPaperUser: Class<Excel$XlPaperSize__xlPaperUser> & Excel$XlPaperSize__xlPaperUser & 256;// 256

}

declare class Excel$XlPaperSize__xlPaper10x14 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaper11x17 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperA3 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperA4 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperA4Small mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperA5 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperB4 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperB5 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperCsheet mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperDsheet mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelope10 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelope11 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelope12 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelope14 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelope9 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeB4 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeB5 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeB6 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeC3 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeC4 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeC5 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeC6 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeC65 mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeDL mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeItaly mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopeMonarch mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEnvelopePersonal mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperEsheet mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperExecutive mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperFanfoldLegalGerman mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperFanfoldStdGerman mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperFanfoldUS mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperFolio mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperLedger mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperLegal mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperLetter mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperLetterSmall mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperNote mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperQuarto mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperStatement mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperTabloid mixins Excel$XlPaperSize {}
declare class Excel$XlPaperSize__xlPaperUser mixins Excel$XlPaperSize {}


declare  class Excel$XlParameterDataType {
  constructor(...args: empty): mixed;
static +xlParamTypeBigInt: Class<Excel$XlParameterDataType__xlParamTypeBigInt> & Excel$XlParameterDataType__xlParamTypeBigInt & -5;// -5
static +xlParamTypeBinary: Class<Excel$XlParameterDataType__xlParamTypeBinary> & Excel$XlParameterDataType__xlParamTypeBinary & -2;// -2
static +xlParamTypeBit: Class<Excel$XlParameterDataType__xlParamTypeBit> & Excel$XlParameterDataType__xlParamTypeBit & -7;// -7
static +xlParamTypeChar: Class<Excel$XlParameterDataType__xlParamTypeChar> & Excel$XlParameterDataType__xlParamTypeChar & 1;// 1
static +xlParamTypeDate: Class<Excel$XlParameterDataType__xlParamTypeDate> & Excel$XlParameterDataType__xlParamTypeDate & 9;// 9
static +xlParamTypeDecimal: Class<Excel$XlParameterDataType__xlParamTypeDecimal> & Excel$XlParameterDataType__xlParamTypeDecimal & 3;// 3
static +xlParamTypeDouble: Class<Excel$XlParameterDataType__xlParamTypeDouble> & Excel$XlParameterDataType__xlParamTypeDouble & 8;// 8
static +xlParamTypeFloat: Class<Excel$XlParameterDataType__xlParamTypeFloat> & Excel$XlParameterDataType__xlParamTypeFloat & 6;// 6
static +xlParamTypeInteger: Class<Excel$XlParameterDataType__xlParamTypeInteger> & Excel$XlParameterDataType__xlParamTypeInteger & 4;// 4
static +xlParamTypeLongVarBinary: Class<Excel$XlParameterDataType__xlParamTypeLongVarBinary> & Excel$XlParameterDataType__xlParamTypeLongVarBinary & -4;// -4
static +xlParamTypeLongVarChar: Class<Excel$XlParameterDataType__xlParamTypeLongVarChar> & Excel$XlParameterDataType__xlParamTypeLongVarChar & -1;// -1
static +xlParamTypeNumeric: Class<Excel$XlParameterDataType__xlParamTypeNumeric> & Excel$XlParameterDataType__xlParamTypeNumeric & 2;// 2
static +xlParamTypeReal: Class<Excel$XlParameterDataType__xlParamTypeReal> & Excel$XlParameterDataType__xlParamTypeReal & 7;// 7
static +xlParamTypeSmallInt: Class<Excel$XlParameterDataType__xlParamTypeSmallInt> & Excel$XlParameterDataType__xlParamTypeSmallInt & 5;// 5
static +xlParamTypeTime: Class<Excel$XlParameterDataType__xlParamTypeTime> & Excel$XlParameterDataType__xlParamTypeTime & 10;// 10
static +xlParamTypeTimestamp: Class<Excel$XlParameterDataType__xlParamTypeTimestamp> & Excel$XlParameterDataType__xlParamTypeTimestamp & 11;// 11
static +xlParamTypeTinyInt: Class<Excel$XlParameterDataType__xlParamTypeTinyInt> & Excel$XlParameterDataType__xlParamTypeTinyInt & -6;// -6
static +xlParamTypeUnknown: Class<Excel$XlParameterDataType__xlParamTypeUnknown> & Excel$XlParameterDataType__xlParamTypeUnknown & 0;// 0
static +xlParamTypeVarBinary: Class<Excel$XlParameterDataType__xlParamTypeVarBinary> & Excel$XlParameterDataType__xlParamTypeVarBinary & -3;// -3
static +xlParamTypeVarChar: Class<Excel$XlParameterDataType__xlParamTypeVarChar> & Excel$XlParameterDataType__xlParamTypeVarChar & 12;// 12
static +xlParamTypeWChar: Class<Excel$XlParameterDataType__xlParamTypeWChar> & Excel$XlParameterDataType__xlParamTypeWChar & -8;// -8

}

declare class Excel$XlParameterDataType__xlParamTypeBigInt mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeBinary mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeBit mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeChar mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeDate mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeDecimal mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeDouble mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeFloat mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeInteger mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeLongVarBinary mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeLongVarChar mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeNumeric mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeReal mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeSmallInt mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeTime mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeTimestamp mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeTinyInt mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeUnknown mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeVarBinary mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeVarChar mixins Excel$XlParameterDataType {}
declare class Excel$XlParameterDataType__xlParamTypeWChar mixins Excel$XlParameterDataType {}


declare  class Excel$XlParameterType {
  constructor(...args: empty): mixed;
static +xlConstant: Class<Excel$XlParameterType__xlConstant> & Excel$XlParameterType__xlConstant & 1;// 1
static +xlPrompt: Class<Excel$XlParameterType__xlPrompt> & Excel$XlParameterType__xlPrompt & 0;// 0
static +xlRange: Class<Excel$XlParameterType__xlRange> & Excel$XlParameterType__xlRange & 2;// 2

}

declare class Excel$XlParameterType__xlConstant mixins Excel$XlParameterType {}
declare class Excel$XlParameterType__xlPrompt mixins Excel$XlParameterType {}
declare class Excel$XlParameterType__xlRange mixins Excel$XlParameterType {}


declare  class Excel$XlPasteSpecialOperation {
  constructor(...args: empty): mixed;
static +xlPasteSpecialOperationAdd: Class<Excel$XlPasteSpecialOperation__xlPasteSpecialOperationAdd> & Excel$XlPasteSpecialOperation__xlPasteSpecialOperationAdd & 2;// 2
static +xlPasteSpecialOperationDivide: Class<Excel$XlPasteSpecialOperation__xlPasteSpecialOperationDivide> & Excel$XlPasteSpecialOperation__xlPasteSpecialOperationDivide & 5;// 5
static +xlPasteSpecialOperationMultiply: Class<Excel$XlPasteSpecialOperation__xlPasteSpecialOperationMultiply> & Excel$XlPasteSpecialOperation__xlPasteSpecialOperationMultiply & 4;// 4
static +xlPasteSpecialOperationNone: Class<Excel$XlPasteSpecialOperation__xlPasteSpecialOperationNone> & Excel$XlPasteSpecialOperation__xlPasteSpecialOperationNone & -4142;// -4142
static +xlPasteSpecialOperationSubtract: Class<Excel$XlPasteSpecialOperation__xlPasteSpecialOperationSubtract> & Excel$XlPasteSpecialOperation__xlPasteSpecialOperationSubtract & 3;// 3

}

declare class Excel$XlPasteSpecialOperation__xlPasteSpecialOperationAdd mixins Excel$XlPasteSpecialOperation {}
declare class Excel$XlPasteSpecialOperation__xlPasteSpecialOperationDivide mixins Excel$XlPasteSpecialOperation {}
declare class Excel$XlPasteSpecialOperation__xlPasteSpecialOperationMultiply mixins Excel$XlPasteSpecialOperation {}
declare class Excel$XlPasteSpecialOperation__xlPasteSpecialOperationNone mixins Excel$XlPasteSpecialOperation {}
declare class Excel$XlPasteSpecialOperation__xlPasteSpecialOperationSubtract mixins Excel$XlPasteSpecialOperation {}


declare  class Excel$XlPasteType {
  constructor(...args: empty): mixed;
static +xlPasteAll: Class<Excel$XlPasteType__xlPasteAll> & Excel$XlPasteType__xlPasteAll & -4104;// -4104
static +xlPasteAllExceptBorders: Class<Excel$XlPasteType__xlPasteAllExceptBorders> & Excel$XlPasteType__xlPasteAllExceptBorders & 7;// 7
static +xlPasteAllMergingConditionalFormats: Class<Excel$XlPasteType__xlPasteAllMergingConditionalFormats> & Excel$XlPasteType__xlPasteAllMergingConditionalFormats & 14;// 14
static +xlPasteAllUsingSourceTheme: Class<Excel$XlPasteType__xlPasteAllUsingSourceTheme> & Excel$XlPasteType__xlPasteAllUsingSourceTheme & 13;// 13
static +xlPasteColumnWidths: Class<Excel$XlPasteType__xlPasteColumnWidths> & Excel$XlPasteType__xlPasteColumnWidths & 8;// 8
static +xlPasteComments: Class<Excel$XlPasteType__xlPasteComments> & Excel$XlPasteType__xlPasteComments & -4144;// -4144
static +xlPasteFormats: Class<Excel$XlPasteType__xlPasteFormats> & Excel$XlPasteType__xlPasteFormats & -4122;// -4122
static +xlPasteFormulas: Class<Excel$XlPasteType__xlPasteFormulas> & Excel$XlPasteType__xlPasteFormulas & -4123;// -4123
static +xlPasteFormulasAndNumberFormats: Class<Excel$XlPasteType__xlPasteFormulasAndNumberFormats> & Excel$XlPasteType__xlPasteFormulasAndNumberFormats & 11;// 11
static +xlPasteValidation: Class<Excel$XlPasteType__xlPasteValidation> & Excel$XlPasteType__xlPasteValidation & 6;// 6
static +xlPasteValues: Class<Excel$XlPasteType__xlPasteValues> & Excel$XlPasteType__xlPasteValues & -4163;// -4163
static +xlPasteValuesAndNumberFormats: Class<Excel$XlPasteType__xlPasteValuesAndNumberFormats> & Excel$XlPasteType__xlPasteValuesAndNumberFormats & 12;// 12

}

declare class Excel$XlPasteType__xlPasteAll mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteAllExceptBorders mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteAllMergingConditionalFormats mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteAllUsingSourceTheme mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteColumnWidths mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteComments mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteFormats mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteFormulas mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteFormulasAndNumberFormats mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteValidation mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteValues mixins Excel$XlPasteType {}
declare class Excel$XlPasteType__xlPasteValuesAndNumberFormats mixins Excel$XlPasteType {}


declare  class Excel$XlPattern {
  constructor(...args: empty): mixed;
static +xlPatternAutomatic: Class<Excel$XlPattern__xlPatternAutomatic> & Excel$XlPattern__xlPatternAutomatic & -4105;// -4105
static +xlPatternChecker: Class<Excel$XlPattern__xlPatternChecker> & Excel$XlPattern__xlPatternChecker & 9;// 9
static +xlPatternCrissCross: Class<Excel$XlPattern__xlPatternCrissCross> & Excel$XlPattern__xlPatternCrissCross & 16;// 16
static +xlPatternDown: Class<Excel$XlPattern__xlPatternDown> & Excel$XlPattern__xlPatternDown & -4121;// -4121
static +xlPatternGray16: Class<Excel$XlPattern__xlPatternGray16> & Excel$XlPattern__xlPatternGray16 & 17;// 17
static +xlPatternGray25: Class<Excel$XlPattern__xlPatternGray25> & Excel$XlPattern__xlPatternGray25 & -4124;// -4124
static +xlPatternGray50: Class<Excel$XlPattern__xlPatternGray50> & Excel$XlPattern__xlPatternGray50 & -4125;// -4125
static +xlPatternGray75: Class<Excel$XlPattern__xlPatternGray75> & Excel$XlPattern__xlPatternGray75 & -4126;// -4126
static +xlPatternGray8: Class<Excel$XlPattern__xlPatternGray8> & Excel$XlPattern__xlPatternGray8 & 18;// 18
static +xlPatternGrid: Class<Excel$XlPattern__xlPatternGrid> & Excel$XlPattern__xlPatternGrid & 15;// 15
static +xlPatternHorizontal: Class<Excel$XlPattern__xlPatternHorizontal> & Excel$XlPattern__xlPatternHorizontal & -4128;// -4128
static +xlPatternLightDown: Class<Excel$XlPattern__xlPatternLightDown> & Excel$XlPattern__xlPatternLightDown & 13;// 13
static +xlPatternLightHorizontal: Class<Excel$XlPattern__xlPatternLightHorizontal> & Excel$XlPattern__xlPatternLightHorizontal & 11;// 11
static +xlPatternLightUp: Class<Excel$XlPattern__xlPatternLightUp> & Excel$XlPattern__xlPatternLightUp & 14;// 14
static +xlPatternLightVertical: Class<Excel$XlPattern__xlPatternLightVertical> & Excel$XlPattern__xlPatternLightVertical & 12;// 12
static +xlPatternLinearGradient: Class<Excel$XlPattern__xlPatternLinearGradient> & Excel$XlPattern__xlPatternLinearGradient & 4000;// 4000
static +xlPatternNone: Class<Excel$XlPattern__xlPatternNone> & Excel$XlPattern__xlPatternNone & -4142;// -4142
static +xlPatternRectangularGradient: Class<Excel$XlPattern__xlPatternRectangularGradient> & Excel$XlPattern__xlPatternRectangularGradient & 4001;// 4001
static +xlPatternSemiGray75: Class<Excel$XlPattern__xlPatternSemiGray75> & Excel$XlPattern__xlPatternSemiGray75 & 10;// 10
static +xlPatternSolid: Class<Excel$XlPattern__xlPatternSolid> & Excel$XlPattern__xlPatternSolid & 1;// 1
static +xlPatternUp: Class<Excel$XlPattern__xlPatternUp> & Excel$XlPattern__xlPatternUp & -4162;// -4162
static +xlPatternVertical: Class<Excel$XlPattern__xlPatternVertical> & Excel$XlPattern__xlPatternVertical & -4166;// -4166

}

declare class Excel$XlPattern__xlPatternAutomatic mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternChecker mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternCrissCross mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternDown mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGray16 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGray25 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGray50 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGray75 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGray8 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternGrid mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternHorizontal mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternLightDown mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternLightHorizontal mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternLightUp mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternLightVertical mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternLinearGradient mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternNone mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternRectangularGradient mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternSemiGray75 mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternSolid mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternUp mixins Excel$XlPattern {}
declare class Excel$XlPattern__xlPatternVertical mixins Excel$XlPattern {}


declare  class Excel$XlPhoneticAlignment {
  constructor(...args: empty): mixed;
static +xlPhoneticAlignCenter: Class<Excel$XlPhoneticAlignment__xlPhoneticAlignCenter> & Excel$XlPhoneticAlignment__xlPhoneticAlignCenter & 2;// 2
static +xlPhoneticAlignDistributed: Class<Excel$XlPhoneticAlignment__xlPhoneticAlignDistributed> & Excel$XlPhoneticAlignment__xlPhoneticAlignDistributed & 3;// 3
static +xlPhoneticAlignLeft: Class<Excel$XlPhoneticAlignment__xlPhoneticAlignLeft> & Excel$XlPhoneticAlignment__xlPhoneticAlignLeft & 1;// 1
static +xlPhoneticAlignNoControl: Class<Excel$XlPhoneticAlignment__xlPhoneticAlignNoControl> & Excel$XlPhoneticAlignment__xlPhoneticAlignNoControl & 0;// 0

}

declare class Excel$XlPhoneticAlignment__xlPhoneticAlignCenter mixins Excel$XlPhoneticAlignment {}
declare class Excel$XlPhoneticAlignment__xlPhoneticAlignDistributed mixins Excel$XlPhoneticAlignment {}
declare class Excel$XlPhoneticAlignment__xlPhoneticAlignLeft mixins Excel$XlPhoneticAlignment {}
declare class Excel$XlPhoneticAlignment__xlPhoneticAlignNoControl mixins Excel$XlPhoneticAlignment {}


declare  class Excel$XlPhoneticCharacterType {
  constructor(...args: empty): mixed;
static +xlHiragana: Class<Excel$XlPhoneticCharacterType__xlHiragana> & Excel$XlPhoneticCharacterType__xlHiragana & 2;// 2
static +xlKatakana: Class<Excel$XlPhoneticCharacterType__xlKatakana> & Excel$XlPhoneticCharacterType__xlKatakana & 1;// 1
static +xlKatakanaHalf: Class<Excel$XlPhoneticCharacterType__xlKatakanaHalf> & Excel$XlPhoneticCharacterType__xlKatakanaHalf & 0;// 0
static +xlNoConversion: Class<Excel$XlPhoneticCharacterType__xlNoConversion> & Excel$XlPhoneticCharacterType__xlNoConversion & 3;// 3

}

declare class Excel$XlPhoneticCharacterType__xlHiragana mixins Excel$XlPhoneticCharacterType {}
declare class Excel$XlPhoneticCharacterType__xlKatakana mixins Excel$XlPhoneticCharacterType {}
declare class Excel$XlPhoneticCharacterType__xlKatakanaHalf mixins Excel$XlPhoneticCharacterType {}
declare class Excel$XlPhoneticCharacterType__xlNoConversion mixins Excel$XlPhoneticCharacterType {}


declare  class Excel$XlPictureAppearance {
  constructor(...args: empty): mixed;
static +xlPrinter: Class<Excel$XlPictureAppearance__xlPrinter> & Excel$XlPictureAppearance__xlPrinter & 2;// 2
static +xlScreen: Class<Excel$XlPictureAppearance__xlScreen> & Excel$XlPictureAppearance__xlScreen & 1;// 1

}

declare class Excel$XlPictureAppearance__xlPrinter mixins Excel$XlPictureAppearance {}
declare class Excel$XlPictureAppearance__xlScreen mixins Excel$XlPictureAppearance {}


declare  class Excel$XlPictureConvertorType {
  constructor(...args: empty): mixed;
static +xlBMP: Class<Excel$XlPictureConvertorType__xlBMP> & Excel$XlPictureConvertorType__xlBMP & 1;// 1
static +xlCGM: Class<Excel$XlPictureConvertorType__xlCGM> & Excel$XlPictureConvertorType__xlCGM & 7;// 7
static +xlDRW: Class<Excel$XlPictureConvertorType__xlDRW> & Excel$XlPictureConvertorType__xlDRW & 4;// 4
static +xlDXF: Class<Excel$XlPictureConvertorType__xlDXF> & Excel$XlPictureConvertorType__xlDXF & 5;// 5
static +xlEPS: Class<Excel$XlPictureConvertorType__xlEPS> & Excel$XlPictureConvertorType__xlEPS & 8;// 8
static +xlHGL: Class<Excel$XlPictureConvertorType__xlHGL> & Excel$XlPictureConvertorType__xlHGL & 6;// 6
static +xlPCT: Class<Excel$XlPictureConvertorType__xlPCT> & Excel$XlPictureConvertorType__xlPCT & 13;// 13
static +xlPCX: Class<Excel$XlPictureConvertorType__xlPCX> & Excel$XlPictureConvertorType__xlPCX & 10;// 10
static +xlPIC: Class<Excel$XlPictureConvertorType__xlPIC> & Excel$XlPictureConvertorType__xlPIC & 11;// 11
static +xlPLT: Class<Excel$XlPictureConvertorType__xlPLT> & Excel$XlPictureConvertorType__xlPLT & 12;// 12
static +xlTIF: Class<Excel$XlPictureConvertorType__xlTIF> & Excel$XlPictureConvertorType__xlTIF & 9;// 9
static +xlWMF: Class<Excel$XlPictureConvertorType__xlWMF> & Excel$XlPictureConvertorType__xlWMF & 2;// 2
static +xlWPG: Class<Excel$XlPictureConvertorType__xlWPG> & Excel$XlPictureConvertorType__xlWPG & 3;// 3

}

declare class Excel$XlPictureConvertorType__xlBMP mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlCGM mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlDRW mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlDXF mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlEPS mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlHGL mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlPCT mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlPCX mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlPIC mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlPLT mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlTIF mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlWMF mixins Excel$XlPictureConvertorType {}
declare class Excel$XlPictureConvertorType__xlWPG mixins Excel$XlPictureConvertorType {}


declare  class Excel$XlPieSliceIndex {
  constructor(...args: empty): mixed;
static +xlCenterPoint: Class<Excel$XlPieSliceIndex__xlCenterPoint> & Excel$XlPieSliceIndex__xlCenterPoint & 5;// 5
static +xlInnerCenterPoint: Class<Excel$XlPieSliceIndex__xlInnerCenterPoint> & Excel$XlPieSliceIndex__xlInnerCenterPoint & 8;// 8
static +xlInnerClockwisePoint: Class<Excel$XlPieSliceIndex__xlInnerClockwisePoint> & Excel$XlPieSliceIndex__xlInnerClockwisePoint & 7;// 7
static +xlInnerCounterClockwisePoint: Class<Excel$XlPieSliceIndex__xlInnerCounterClockwisePoint> & Excel$XlPieSliceIndex__xlInnerCounterClockwisePoint & 9;// 9
static +xlMidClockwiseRadiusPoint: Class<Excel$XlPieSliceIndex__xlMidClockwiseRadiusPoint> & Excel$XlPieSliceIndex__xlMidClockwiseRadiusPoint & 4;// 4
static +xlMidCounterClockwiseRadiusPoint: Class<Excel$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint> & Excel$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint & 6;// 6
static +xlOuterCenterPoint: Class<Excel$XlPieSliceIndex__xlOuterCenterPoint> & Excel$XlPieSliceIndex__xlOuterCenterPoint & 2;// 2
static +xlOuterClockwisePoint: Class<Excel$XlPieSliceIndex__xlOuterClockwisePoint> & Excel$XlPieSliceIndex__xlOuterClockwisePoint & 3;// 3
static +xlOuterCounterClockwisePoint: Class<Excel$XlPieSliceIndex__xlOuterCounterClockwisePoint> & Excel$XlPieSliceIndex__xlOuterCounterClockwisePoint & 1;// 1

}

declare class Excel$XlPieSliceIndex__xlCenterPoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlInnerCenterPoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlInnerClockwisePoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlInnerCounterClockwisePoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlMidClockwiseRadiusPoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlMidCounterClockwiseRadiusPoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlOuterCenterPoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlOuterClockwisePoint mixins Excel$XlPieSliceIndex {}
declare class Excel$XlPieSliceIndex__xlOuterCounterClockwisePoint mixins Excel$XlPieSliceIndex {}


declare  class Excel$XlPieSliceLocation {
  constructor(...args: empty): mixed;
static +xlHorizontalCoordinate: Class<Excel$XlPieSliceLocation__xlHorizontalCoordinate> & Excel$XlPieSliceLocation__xlHorizontalCoordinate & 1;// 1
static +xlVerticalCoordinate: Class<Excel$XlPieSliceLocation__xlVerticalCoordinate> & Excel$XlPieSliceLocation__xlVerticalCoordinate & 2;// 2

}

declare class Excel$XlPieSliceLocation__xlHorizontalCoordinate mixins Excel$XlPieSliceLocation {}
declare class Excel$XlPieSliceLocation__xlVerticalCoordinate mixins Excel$XlPieSliceLocation {}


declare  class Excel$XlPivotCellType {
  constructor(...args: empty): mixed;
static +xlPivotCellBlankCell: Class<Excel$XlPivotCellType__xlPivotCellBlankCell> & Excel$XlPivotCellType__xlPivotCellBlankCell & 9;// 9
static +xlPivotCellCustomSubtotal: Class<Excel$XlPivotCellType__xlPivotCellCustomSubtotal> & Excel$XlPivotCellType__xlPivotCellCustomSubtotal & 7;// 7
static +xlPivotCellDataField: Class<Excel$XlPivotCellType__xlPivotCellDataField> & Excel$XlPivotCellType__xlPivotCellDataField & 4;// 4
static +xlPivotCellDataPivotField: Class<Excel$XlPivotCellType__xlPivotCellDataPivotField> & Excel$XlPivotCellType__xlPivotCellDataPivotField & 8;// 8
static +xlPivotCellGrandTotal: Class<Excel$XlPivotCellType__xlPivotCellGrandTotal> & Excel$XlPivotCellType__xlPivotCellGrandTotal & 3;// 3
static +xlPivotCellPageFieldItem: Class<Excel$XlPivotCellType__xlPivotCellPageFieldItem> & Excel$XlPivotCellType__xlPivotCellPageFieldItem & 6;// 6
static +xlPivotCellPivotField: Class<Excel$XlPivotCellType__xlPivotCellPivotField> & Excel$XlPivotCellType__xlPivotCellPivotField & 5;// 5
static +xlPivotCellPivotItem: Class<Excel$XlPivotCellType__xlPivotCellPivotItem> & Excel$XlPivotCellType__xlPivotCellPivotItem & 1;// 1
static +xlPivotCellSubtotal: Class<Excel$XlPivotCellType__xlPivotCellSubtotal> & Excel$XlPivotCellType__xlPivotCellSubtotal & 2;// 2
static +xlPivotCellValue: Class<Excel$XlPivotCellType__xlPivotCellValue> & Excel$XlPivotCellType__xlPivotCellValue & 0;// 0

}

declare class Excel$XlPivotCellType__xlPivotCellBlankCell mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellCustomSubtotal mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellDataField mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellDataPivotField mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellGrandTotal mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellPageFieldItem mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellPivotField mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellPivotItem mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellSubtotal mixins Excel$XlPivotCellType {}
declare class Excel$XlPivotCellType__xlPivotCellValue mixins Excel$XlPivotCellType {}


declare  class Excel$XlPivotConditionScope {
  constructor(...args: empty): mixed;
static +xlDataFieldScope: Class<Excel$XlPivotConditionScope__xlDataFieldScope> & Excel$XlPivotConditionScope__xlDataFieldScope & 2;// 2
static +xlFieldsScope: Class<Excel$XlPivotConditionScope__xlFieldsScope> & Excel$XlPivotConditionScope__xlFieldsScope & 1;// 1
static +xlSelectionScope: Class<Excel$XlPivotConditionScope__xlSelectionScope> & Excel$XlPivotConditionScope__xlSelectionScope & 0;// 0

}

declare class Excel$XlPivotConditionScope__xlDataFieldScope mixins Excel$XlPivotConditionScope {}
declare class Excel$XlPivotConditionScope__xlFieldsScope mixins Excel$XlPivotConditionScope {}
declare class Excel$XlPivotConditionScope__xlSelectionScope mixins Excel$XlPivotConditionScope {}


declare  class Excel$XlPivotFieldCalculation {
  constructor(...args: empty): mixed;
static +xlDifferenceFrom: Class<Excel$XlPivotFieldCalculation__xlDifferenceFrom> & Excel$XlPivotFieldCalculation__xlDifferenceFrom & 2;// 2
static +xlIndex: Class<Excel$XlPivotFieldCalculation__xlIndex> & Excel$XlPivotFieldCalculation__xlIndex & 9;// 9
static +xlNoAdditionalCalculation: Class<Excel$XlPivotFieldCalculation__xlNoAdditionalCalculation> & Excel$XlPivotFieldCalculation__xlNoAdditionalCalculation & -4143;// -4143
static +xlPercentDifferenceFrom: Class<Excel$XlPivotFieldCalculation__xlPercentDifferenceFrom> & Excel$XlPivotFieldCalculation__xlPercentDifferenceFrom & 4;// 4
static +xlPercentOf: Class<Excel$XlPivotFieldCalculation__xlPercentOf> & Excel$XlPivotFieldCalculation__xlPercentOf & 3;// 3
static +xlPercentOfColumn: Class<Excel$XlPivotFieldCalculation__xlPercentOfColumn> & Excel$XlPivotFieldCalculation__xlPercentOfColumn & 7;// 7
static +xlPercentOfParent: Class<Excel$XlPivotFieldCalculation__xlPercentOfParent> & Excel$XlPivotFieldCalculation__xlPercentOfParent & 12;// 12
static +xlPercentOfParentColumn: Class<Excel$XlPivotFieldCalculation__xlPercentOfParentColumn> & Excel$XlPivotFieldCalculation__xlPercentOfParentColumn & 11;// 11
static +xlPercentOfParentRow: Class<Excel$XlPivotFieldCalculation__xlPercentOfParentRow> & Excel$XlPivotFieldCalculation__xlPercentOfParentRow & 10;// 10
static +xlPercentOfRow: Class<Excel$XlPivotFieldCalculation__xlPercentOfRow> & Excel$XlPivotFieldCalculation__xlPercentOfRow & 6;// 6
static +xlPercentOfTotal: Class<Excel$XlPivotFieldCalculation__xlPercentOfTotal> & Excel$XlPivotFieldCalculation__xlPercentOfTotal & 8;// 8
static +xlPercentRunningTotal: Class<Excel$XlPivotFieldCalculation__xlPercentRunningTotal> & Excel$XlPivotFieldCalculation__xlPercentRunningTotal & 13;// 13
static +xlRankAscending: Class<Excel$XlPivotFieldCalculation__xlRankAscending> & Excel$XlPivotFieldCalculation__xlRankAscending & 14;// 14
static +xlRankDecending: Class<Excel$XlPivotFieldCalculation__xlRankDecending> & Excel$XlPivotFieldCalculation__xlRankDecending & 15;// 15
static +xlRunningTotal: Class<Excel$XlPivotFieldCalculation__xlRunningTotal> & Excel$XlPivotFieldCalculation__xlRunningTotal & 5;// 5

}

declare class Excel$XlPivotFieldCalculation__xlDifferenceFrom mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlIndex mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlNoAdditionalCalculation mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentDifferenceFrom mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOf mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfColumn mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfParent mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfParentColumn mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfParentRow mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfRow mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentOfTotal mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlPercentRunningTotal mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlRankAscending mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlRankDecending mixins Excel$XlPivotFieldCalculation {}
declare class Excel$XlPivotFieldCalculation__xlRunningTotal mixins Excel$XlPivotFieldCalculation {}


declare  class Excel$XlPivotFieldDataType {
  constructor(...args: empty): mixed;
static +xlDate: Class<Excel$XlPivotFieldDataType__xlDate> & Excel$XlPivotFieldDataType__xlDate & 2;// 2
static +xlNumber: Class<Excel$XlPivotFieldDataType__xlNumber> & Excel$XlPivotFieldDataType__xlNumber & -4145;// -4145
static +xlText: Class<Excel$XlPivotFieldDataType__xlText> & Excel$XlPivotFieldDataType__xlText & -4158;// -4158

}

declare class Excel$XlPivotFieldDataType__xlDate mixins Excel$XlPivotFieldDataType {}
declare class Excel$XlPivotFieldDataType__xlNumber mixins Excel$XlPivotFieldDataType {}
declare class Excel$XlPivotFieldDataType__xlText mixins Excel$XlPivotFieldDataType {}


declare  class Excel$XlPivotFieldOrientation {
  constructor(...args: empty): mixed;
static +xlColumnField: Class<Excel$XlPivotFieldOrientation__xlColumnField> & Excel$XlPivotFieldOrientation__xlColumnField & 2;// 2
static +xlDataField: Class<Excel$XlPivotFieldOrientation__xlDataField> & Excel$XlPivotFieldOrientation__xlDataField & 4;// 4
static +xlHidden: Class<Excel$XlPivotFieldOrientation__xlHidden> & Excel$XlPivotFieldOrientation__xlHidden & 0;// 0
static +xlPageField: Class<Excel$XlPivotFieldOrientation__xlPageField> & Excel$XlPivotFieldOrientation__xlPageField & 3;// 3
static +xlRowField: Class<Excel$XlPivotFieldOrientation__xlRowField> & Excel$XlPivotFieldOrientation__xlRowField & 1;// 1

}

declare class Excel$XlPivotFieldOrientation__xlColumnField mixins Excel$XlPivotFieldOrientation {}
declare class Excel$XlPivotFieldOrientation__xlDataField mixins Excel$XlPivotFieldOrientation {}
declare class Excel$XlPivotFieldOrientation__xlHidden mixins Excel$XlPivotFieldOrientation {}
declare class Excel$XlPivotFieldOrientation__xlPageField mixins Excel$XlPivotFieldOrientation {}
declare class Excel$XlPivotFieldOrientation__xlRowField mixins Excel$XlPivotFieldOrientation {}


declare  class Excel$XlPivotFieldRepeatLabels {
  constructor(...args: empty): mixed;
static +xlDoNotRepeatLabels: Class<Excel$XlPivotFieldRepeatLabels__xlDoNotRepeatLabels> & Excel$XlPivotFieldRepeatLabels__xlDoNotRepeatLabels & 1;// 1
static +xlRepeatLabels: Class<Excel$XlPivotFieldRepeatLabels__xlRepeatLabels> & Excel$XlPivotFieldRepeatLabels__xlRepeatLabels & 2;// 2

}

declare class Excel$XlPivotFieldRepeatLabels__xlDoNotRepeatLabels mixins Excel$XlPivotFieldRepeatLabels {}
declare class Excel$XlPivotFieldRepeatLabels__xlRepeatLabels mixins Excel$XlPivotFieldRepeatLabels {}


declare  class Excel$XlPivotFilterType {
  constructor(...args: empty): mixed;
static +xlAfter: Class<Excel$XlPivotFilterType__xlAfter> & Excel$XlPivotFilterType__xlAfter & 33;// 33
static +xlAfterOrEqualTo: Class<Excel$XlPivotFilterType__xlAfterOrEqualTo> & Excel$XlPivotFilterType__xlAfterOrEqualTo & 34;// 34
static +xlAllDatesInPeriodApril: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodApril> & Excel$XlPivotFilterType__xlAllDatesInPeriodApril & 60;// 60
static +xlAllDatesInPeriodAugust: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodAugust> & Excel$XlPivotFilterType__xlAllDatesInPeriodAugust & 64;// 64
static +xlAllDatesInPeriodDecember: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodDecember> & Excel$XlPivotFilterType__xlAllDatesInPeriodDecember & 68;// 68
static +xlAllDatesInPeriodFebruary: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodFebruary> & Excel$XlPivotFilterType__xlAllDatesInPeriodFebruary & 58;// 58
static +xlAllDatesInPeriodJanuary: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodJanuary> & Excel$XlPivotFilterType__xlAllDatesInPeriodJanuary & 57;// 57
static +xlAllDatesInPeriodJuly: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodJuly> & Excel$XlPivotFilterType__xlAllDatesInPeriodJuly & 63;// 63
static +xlAllDatesInPeriodJune: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodJune> & Excel$XlPivotFilterType__xlAllDatesInPeriodJune & 62;// 62
static +xlAllDatesInPeriodMarch: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodMarch> & Excel$XlPivotFilterType__xlAllDatesInPeriodMarch & 59;// 59
static +xlAllDatesInPeriodMay: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodMay> & Excel$XlPivotFilterType__xlAllDatesInPeriodMay & 61;// 61
static +xlAllDatesInPeriodNovember: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodNovember> & Excel$XlPivotFilterType__xlAllDatesInPeriodNovember & 67;// 67
static +xlAllDatesInPeriodOctober: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodOctober> & Excel$XlPivotFilterType__xlAllDatesInPeriodOctober & 66;// 66
static +xlAllDatesInPeriodQuarter1: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter1> & Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter1 & 53;// 53
static +xlAllDatesInPeriodQuarter2: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter2> & Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter2 & 54;// 54
static +xlAllDatesInPeriodQuarter3: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter3> & Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter3 & 55;// 55
static +xlAllDatesInPeriodQuarter4: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter4> & Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter4 & 56;// 56
static +xlAllDatesInPeriodSeptember: Class<Excel$XlPivotFilterType__xlAllDatesInPeriodSeptember> & Excel$XlPivotFilterType__xlAllDatesInPeriodSeptember & 65;// 65
static +xlBefore: Class<Excel$XlPivotFilterType__xlBefore> & Excel$XlPivotFilterType__xlBefore & 31;// 31
static +xlBeforeOrEqualTo: Class<Excel$XlPivotFilterType__xlBeforeOrEqualTo> & Excel$XlPivotFilterType__xlBeforeOrEqualTo & 32;// 32
static +xlBottomCount: Class<Excel$XlPivotFilterType__xlBottomCount> & Excel$XlPivotFilterType__xlBottomCount & 2;// 2
static +xlBottomPercent: Class<Excel$XlPivotFilterType__xlBottomPercent> & Excel$XlPivotFilterType__xlBottomPercent & 4;// 4
static +xlBottomSum: Class<Excel$XlPivotFilterType__xlBottomSum> & Excel$XlPivotFilterType__xlBottomSum & 6;// 6
static +xlCaptionBeginsWith: Class<Excel$XlPivotFilterType__xlCaptionBeginsWith> & Excel$XlPivotFilterType__xlCaptionBeginsWith & 17;// 17
static +xlCaptionContains: Class<Excel$XlPivotFilterType__xlCaptionContains> & Excel$XlPivotFilterType__xlCaptionContains & 21;// 21
static +xlCaptionDoesNotBeginWith: Class<Excel$XlPivotFilterType__xlCaptionDoesNotBeginWith> & Excel$XlPivotFilterType__xlCaptionDoesNotBeginWith & 18;// 18
static +xlCaptionDoesNotContain: Class<Excel$XlPivotFilterType__xlCaptionDoesNotContain> & Excel$XlPivotFilterType__xlCaptionDoesNotContain & 22;// 22
static +xlCaptionDoesNotEndWith: Class<Excel$XlPivotFilterType__xlCaptionDoesNotEndWith> & Excel$XlPivotFilterType__xlCaptionDoesNotEndWith & 20;// 20
static +xlCaptionDoesNotEqual: Class<Excel$XlPivotFilterType__xlCaptionDoesNotEqual> & Excel$XlPivotFilterType__xlCaptionDoesNotEqual & 16;// 16
static +xlCaptionEndsWith: Class<Excel$XlPivotFilterType__xlCaptionEndsWith> & Excel$XlPivotFilterType__xlCaptionEndsWith & 19;// 19
static +xlCaptionEquals: Class<Excel$XlPivotFilterType__xlCaptionEquals> & Excel$XlPivotFilterType__xlCaptionEquals & 15;// 15
static +xlCaptionIsBetween: Class<Excel$XlPivotFilterType__xlCaptionIsBetween> & Excel$XlPivotFilterType__xlCaptionIsBetween & 27;// 27
static +xlCaptionIsGreaterThan: Class<Excel$XlPivotFilterType__xlCaptionIsGreaterThan> & Excel$XlPivotFilterType__xlCaptionIsGreaterThan & 23;// 23
static +xlCaptionIsGreaterThanOrEqualTo: Class<Excel$XlPivotFilterType__xlCaptionIsGreaterThanOrEqualTo> & Excel$XlPivotFilterType__xlCaptionIsGreaterThanOrEqualTo & 24;// 24
static +xlCaptionIsLessThan: Class<Excel$XlPivotFilterType__xlCaptionIsLessThan> & Excel$XlPivotFilterType__xlCaptionIsLessThan & 25;// 25
static +xlCaptionIsLessThanOrEqualTo: Class<Excel$XlPivotFilterType__xlCaptionIsLessThanOrEqualTo> & Excel$XlPivotFilterType__xlCaptionIsLessThanOrEqualTo & 26;// 26
static +xlCaptionIsNotBetween: Class<Excel$XlPivotFilterType__xlCaptionIsNotBetween> & Excel$XlPivotFilterType__xlCaptionIsNotBetween & 28;// 28
static +xlDateBetween: Class<Excel$XlPivotFilterType__xlDateBetween> & Excel$XlPivotFilterType__xlDateBetween & 35;// 35
static +xlDateLastMonth: Class<Excel$XlPivotFilterType__xlDateLastMonth> & Excel$XlPivotFilterType__xlDateLastMonth & 45;// 45
static +xlDateLastQuarter: Class<Excel$XlPivotFilterType__xlDateLastQuarter> & Excel$XlPivotFilterType__xlDateLastQuarter & 48;// 48
static +xlDateLastWeek: Class<Excel$XlPivotFilterType__xlDateLastWeek> & Excel$XlPivotFilterType__xlDateLastWeek & 42;// 42
static +xlDateLastYear: Class<Excel$XlPivotFilterType__xlDateLastYear> & Excel$XlPivotFilterType__xlDateLastYear & 51;// 51
static +xlDateNextMonth: Class<Excel$XlPivotFilterType__xlDateNextMonth> & Excel$XlPivotFilterType__xlDateNextMonth & 43;// 43
static +xlDateNextQuarter: Class<Excel$XlPivotFilterType__xlDateNextQuarter> & Excel$XlPivotFilterType__xlDateNextQuarter & 46;// 46
static +xlDateNextWeek: Class<Excel$XlPivotFilterType__xlDateNextWeek> & Excel$XlPivotFilterType__xlDateNextWeek & 40;// 40
static +xlDateNextYear: Class<Excel$XlPivotFilterType__xlDateNextYear> & Excel$XlPivotFilterType__xlDateNextYear & 49;// 49
static +xlDateNotBetween: Class<Excel$XlPivotFilterType__xlDateNotBetween> & Excel$XlPivotFilterType__xlDateNotBetween & 36;// 36
static +xlDateThisMonth: Class<Excel$XlPivotFilterType__xlDateThisMonth> & Excel$XlPivotFilterType__xlDateThisMonth & 44;// 44
static +xlDateThisQuarter: Class<Excel$XlPivotFilterType__xlDateThisQuarter> & Excel$XlPivotFilterType__xlDateThisQuarter & 47;// 47
static +xlDateThisWeek: Class<Excel$XlPivotFilterType__xlDateThisWeek> & Excel$XlPivotFilterType__xlDateThisWeek & 41;// 41
static +xlDateThisYear: Class<Excel$XlPivotFilterType__xlDateThisYear> & Excel$XlPivotFilterType__xlDateThisYear & 50;// 50
static +xlDateToday: Class<Excel$XlPivotFilterType__xlDateToday> & Excel$XlPivotFilterType__xlDateToday & 38;// 38
static +xlDateTomorrow: Class<Excel$XlPivotFilterType__xlDateTomorrow> & Excel$XlPivotFilterType__xlDateTomorrow & 37;// 37
static +xlDateYesterday: Class<Excel$XlPivotFilterType__xlDateYesterday> & Excel$XlPivotFilterType__xlDateYesterday & 39;// 39
static +xlNotSpecificDate: Class<Excel$XlPivotFilterType__xlNotSpecificDate> & Excel$XlPivotFilterType__xlNotSpecificDate & 30;// 30
static +xlSpecificDate: Class<Excel$XlPivotFilterType__xlSpecificDate> & Excel$XlPivotFilterType__xlSpecificDate & 29;// 29
static +xlTopCount: Class<Excel$XlPivotFilterType__xlTopCount> & Excel$XlPivotFilterType__xlTopCount & 1;// 1
static +xlTopPercent: Class<Excel$XlPivotFilterType__xlTopPercent> & Excel$XlPivotFilterType__xlTopPercent & 3;// 3
static +xlTopSum: Class<Excel$XlPivotFilterType__xlTopSum> & Excel$XlPivotFilterType__xlTopSum & 5;// 5
static +xlValueDoesNotEqual: Class<Excel$XlPivotFilterType__xlValueDoesNotEqual> & Excel$XlPivotFilterType__xlValueDoesNotEqual & 8;// 8
static +xlValueEquals: Class<Excel$XlPivotFilterType__xlValueEquals> & Excel$XlPivotFilterType__xlValueEquals & 7;// 7
static +xlValueIsBetween: Class<Excel$XlPivotFilterType__xlValueIsBetween> & Excel$XlPivotFilterType__xlValueIsBetween & 13;// 13
static +xlValueIsGreaterThan: Class<Excel$XlPivotFilterType__xlValueIsGreaterThan> & Excel$XlPivotFilterType__xlValueIsGreaterThan & 9;// 9
static +xlValueIsGreaterThanOrEqualTo: Class<Excel$XlPivotFilterType__xlValueIsGreaterThanOrEqualTo> & Excel$XlPivotFilterType__xlValueIsGreaterThanOrEqualTo & 10;// 10
static +xlValueIsLessThan: Class<Excel$XlPivotFilterType__xlValueIsLessThan> & Excel$XlPivotFilterType__xlValueIsLessThan & 11;// 11
static +xlValueIsLessThanOrEqualTo: Class<Excel$XlPivotFilterType__xlValueIsLessThanOrEqualTo> & Excel$XlPivotFilterType__xlValueIsLessThanOrEqualTo & 12;// 12
static +xlValueIsNotBetween: Class<Excel$XlPivotFilterType__xlValueIsNotBetween> & Excel$XlPivotFilterType__xlValueIsNotBetween & 14;// 14
static +xlYearToDate: Class<Excel$XlPivotFilterType__xlYearToDate> & Excel$XlPivotFilterType__xlYearToDate & 52;// 52

}

declare class Excel$XlPivotFilterType__xlAfter mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAfterOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodApril mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodAugust mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodDecember mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodFebruary mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodJanuary mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodJuly mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodJune mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodMarch mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodMay mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodNovember mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodOctober mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter1 mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter2 mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter3 mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodQuarter4 mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlAllDatesInPeriodSeptember mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlBefore mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlBeforeOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlBottomCount mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlBottomPercent mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlBottomSum mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionBeginsWith mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionContains mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionDoesNotBeginWith mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionDoesNotContain mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionDoesNotEndWith mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionDoesNotEqual mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionEndsWith mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionEquals mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsGreaterThan mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsGreaterThanOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsLessThan mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsLessThanOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlCaptionIsNotBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateLastMonth mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateLastQuarter mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateLastWeek mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateLastYear mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateNextMonth mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateNextQuarter mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateNextWeek mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateNextYear mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateNotBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateThisMonth mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateThisQuarter mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateThisWeek mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateThisYear mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateToday mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateTomorrow mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlDateYesterday mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlNotSpecificDate mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlSpecificDate mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlTopCount mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlTopPercent mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlTopSum mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueDoesNotEqual mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueEquals mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsGreaterThan mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsGreaterThanOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsLessThan mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsLessThanOrEqualTo mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlValueIsNotBetween mixins Excel$XlPivotFilterType {}
declare class Excel$XlPivotFilterType__xlYearToDate mixins Excel$XlPivotFilterType {}


declare  class Excel$XlPivotFormatType {
  constructor(...args: empty): mixed;
static +xlPTClassic: Class<Excel$XlPivotFormatType__xlPTClassic> & Excel$XlPivotFormatType__xlPTClassic & 20;// 20
static +xlPTNone: Class<Excel$XlPivotFormatType__xlPTNone> & Excel$XlPivotFormatType__xlPTNone & 21;// 21
static +xlReport1: Class<Excel$XlPivotFormatType__xlReport1> & Excel$XlPivotFormatType__xlReport1 & 0;// 0
static +xlReport10: Class<Excel$XlPivotFormatType__xlReport10> & Excel$XlPivotFormatType__xlReport10 & 9;// 9
static +xlReport2: Class<Excel$XlPivotFormatType__xlReport2> & Excel$XlPivotFormatType__xlReport2 & 1;// 1
static +xlReport3: Class<Excel$XlPivotFormatType__xlReport3> & Excel$XlPivotFormatType__xlReport3 & 2;// 2
static +xlReport4: Class<Excel$XlPivotFormatType__xlReport4> & Excel$XlPivotFormatType__xlReport4 & 3;// 3
static +xlReport5: Class<Excel$XlPivotFormatType__xlReport5> & Excel$XlPivotFormatType__xlReport5 & 4;// 4
static +xlReport6: Class<Excel$XlPivotFormatType__xlReport6> & Excel$XlPivotFormatType__xlReport6 & 5;// 5
static +xlReport7: Class<Excel$XlPivotFormatType__xlReport7> & Excel$XlPivotFormatType__xlReport7 & 6;// 6
static +xlReport8: Class<Excel$XlPivotFormatType__xlReport8> & Excel$XlPivotFormatType__xlReport8 & 7;// 7
static +xlReport9: Class<Excel$XlPivotFormatType__xlReport9> & Excel$XlPivotFormatType__xlReport9 & 8;// 8
static +xlTable1: Class<Excel$XlPivotFormatType__xlTable1> & Excel$XlPivotFormatType__xlTable1 & 10;// 10
static +xlTable10: Class<Excel$XlPivotFormatType__xlTable10> & Excel$XlPivotFormatType__xlTable10 & 19;// 19
static +xlTable2: Class<Excel$XlPivotFormatType__xlTable2> & Excel$XlPivotFormatType__xlTable2 & 11;// 11
static +xlTable3: Class<Excel$XlPivotFormatType__xlTable3> & Excel$XlPivotFormatType__xlTable3 & 12;// 12
static +xlTable4: Class<Excel$XlPivotFormatType__xlTable4> & Excel$XlPivotFormatType__xlTable4 & 13;// 13
static +xlTable5: Class<Excel$XlPivotFormatType__xlTable5> & Excel$XlPivotFormatType__xlTable5 & 14;// 14
static +xlTable6: Class<Excel$XlPivotFormatType__xlTable6> & Excel$XlPivotFormatType__xlTable6 & 15;// 15
static +xlTable7: Class<Excel$XlPivotFormatType__xlTable7> & Excel$XlPivotFormatType__xlTable7 & 16;// 16
static +xlTable8: Class<Excel$XlPivotFormatType__xlTable8> & Excel$XlPivotFormatType__xlTable8 & 17;// 17
static +xlTable9: Class<Excel$XlPivotFormatType__xlTable9> & Excel$XlPivotFormatType__xlTable9 & 18;// 18

}

declare class Excel$XlPivotFormatType__xlPTClassic mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlPTNone mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport1 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport10 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport2 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport3 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport4 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport5 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport6 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport7 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport8 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlReport9 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable1 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable10 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable2 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable3 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable4 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable5 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable6 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable7 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable8 mixins Excel$XlPivotFormatType {}
declare class Excel$XlPivotFormatType__xlTable9 mixins Excel$XlPivotFormatType {}


declare  class Excel$XlPivotLineType {
  constructor(...args: empty): mixed;
static +xlPivotLineBlank: Class<Excel$XlPivotLineType__xlPivotLineBlank> & Excel$XlPivotLineType__xlPivotLineBlank & 3;// 3
static +xlPivotLineGrandTotal: Class<Excel$XlPivotLineType__xlPivotLineGrandTotal> & Excel$XlPivotLineType__xlPivotLineGrandTotal & 2;// 2
static +xlPivotLineRegular: Class<Excel$XlPivotLineType__xlPivotLineRegular> & Excel$XlPivotLineType__xlPivotLineRegular & 0;// 0
static +xlPivotLineSubtotal: Class<Excel$XlPivotLineType__xlPivotLineSubtotal> & Excel$XlPivotLineType__xlPivotLineSubtotal & 1;// 1

}

declare class Excel$XlPivotLineType__xlPivotLineBlank mixins Excel$XlPivotLineType {}
declare class Excel$XlPivotLineType__xlPivotLineGrandTotal mixins Excel$XlPivotLineType {}
declare class Excel$XlPivotLineType__xlPivotLineRegular mixins Excel$XlPivotLineType {}
declare class Excel$XlPivotLineType__xlPivotLineSubtotal mixins Excel$XlPivotLineType {}


declare  class Excel$XlPivotTableMissingItems {
  constructor(...args: empty): mixed;
static +xlMissingItemsDefault: Class<Excel$XlPivotTableMissingItems__xlMissingItemsDefault> & Excel$XlPivotTableMissingItems__xlMissingItemsDefault & -1;// -1
static +xlMissingItemsMax: Class<Excel$XlPivotTableMissingItems__xlMissingItemsMax> & Excel$XlPivotTableMissingItems__xlMissingItemsMax & 32500;// 32500
static +xlMissingItemsMax2: Class<Excel$XlPivotTableMissingItems__xlMissingItemsMax2> & Excel$XlPivotTableMissingItems__xlMissingItemsMax2 & 1048576;// 1048576
static +xlMissingItemsNone: Class<Excel$XlPivotTableMissingItems__xlMissingItemsNone> & Excel$XlPivotTableMissingItems__xlMissingItemsNone & 0;// 0

}

declare class Excel$XlPivotTableMissingItems__xlMissingItemsDefault mixins Excel$XlPivotTableMissingItems {}
declare class Excel$XlPivotTableMissingItems__xlMissingItemsMax mixins Excel$XlPivotTableMissingItems {}
declare class Excel$XlPivotTableMissingItems__xlMissingItemsMax2 mixins Excel$XlPivotTableMissingItems {}
declare class Excel$XlPivotTableMissingItems__xlMissingItemsNone mixins Excel$XlPivotTableMissingItems {}


declare  class Excel$XlPivotTableSourceType {
  constructor(...args: empty): mixed;
static +xlConsolidation: Class<Excel$XlPivotTableSourceType__xlConsolidation> & Excel$XlPivotTableSourceType__xlConsolidation & 3;// 3
static +xlDatabase: Class<Excel$XlPivotTableSourceType__xlDatabase> & Excel$XlPivotTableSourceType__xlDatabase & 1;// 1
static +xlExternal: Class<Excel$XlPivotTableSourceType__xlExternal> & Excel$XlPivotTableSourceType__xlExternal & 2;// 2
static +xlPivotTable: Class<Excel$XlPivotTableSourceType__xlPivotTable> & Excel$XlPivotTableSourceType__xlPivotTable & -4148;// -4148
static +xlScenario: Class<Excel$XlPivotTableSourceType__xlScenario> & Excel$XlPivotTableSourceType__xlScenario & 4;// 4

}

declare class Excel$XlPivotTableSourceType__xlConsolidation mixins Excel$XlPivotTableSourceType {}
declare class Excel$XlPivotTableSourceType__xlDatabase mixins Excel$XlPivotTableSourceType {}
declare class Excel$XlPivotTableSourceType__xlExternal mixins Excel$XlPivotTableSourceType {}
declare class Excel$XlPivotTableSourceType__xlPivotTable mixins Excel$XlPivotTableSourceType {}
declare class Excel$XlPivotTableSourceType__xlScenario mixins Excel$XlPivotTableSourceType {}


declare  class Excel$XlPivotTableVersionList {
  constructor(...args: empty): mixed;
static +xlPivotTableVersion10: Class<Excel$XlPivotTableVersionList__xlPivotTableVersion10> & Excel$XlPivotTableVersionList__xlPivotTableVersion10 & 1;// 1
static +xlPivotTableVersion11: Class<Excel$XlPivotTableVersionList__xlPivotTableVersion11> & Excel$XlPivotTableVersionList__xlPivotTableVersion11 & 2;// 2
static +xlPivotTableVersion12: Class<Excel$XlPivotTableVersionList__xlPivotTableVersion12> & Excel$XlPivotTableVersionList__xlPivotTableVersion12 & 3;// 3
static +xlPivotTableVersion14: Class<Excel$XlPivotTableVersionList__xlPivotTableVersion14> & Excel$XlPivotTableVersionList__xlPivotTableVersion14 & 4;// 4
static +xlPivotTableVersion2000: Class<Excel$XlPivotTableVersionList__xlPivotTableVersion2000> & Excel$XlPivotTableVersionList__xlPivotTableVersion2000 & 0;// 0
static +xlPivotTableVersionCurrent: Class<Excel$XlPivotTableVersionList__xlPivotTableVersionCurrent> & Excel$XlPivotTableVersionList__xlPivotTableVersionCurrent & -1;// -1

}

declare class Excel$XlPivotTableVersionList__xlPivotTableVersion10 mixins Excel$XlPivotTableVersionList {}
declare class Excel$XlPivotTableVersionList__xlPivotTableVersion11 mixins Excel$XlPivotTableVersionList {}
declare class Excel$XlPivotTableVersionList__xlPivotTableVersion12 mixins Excel$XlPivotTableVersionList {}
declare class Excel$XlPivotTableVersionList__xlPivotTableVersion14 mixins Excel$XlPivotTableVersionList {}
declare class Excel$XlPivotTableVersionList__xlPivotTableVersion2000 mixins Excel$XlPivotTableVersionList {}
declare class Excel$XlPivotTableVersionList__xlPivotTableVersionCurrent mixins Excel$XlPivotTableVersionList {}


declare  class Excel$XlPlacement {
  constructor(...args: empty): mixed;
static +xlFreeFloating: Class<Excel$XlPlacement__xlFreeFloating> & Excel$XlPlacement__xlFreeFloating & 3;// 3
static +xlMove: Class<Excel$XlPlacement__xlMove> & Excel$XlPlacement__xlMove & 2;// 2
static +xlMoveAndSize: Class<Excel$XlPlacement__xlMoveAndSize> & Excel$XlPlacement__xlMoveAndSize & 1;// 1

}

declare class Excel$XlPlacement__xlFreeFloating mixins Excel$XlPlacement {}
declare class Excel$XlPlacement__xlMove mixins Excel$XlPlacement {}
declare class Excel$XlPlacement__xlMoveAndSize mixins Excel$XlPlacement {}


declare  class Excel$XlPlatform {
  constructor(...args: empty): mixed;
static +xlMacintosh: Class<Excel$XlPlatform__xlMacintosh> & Excel$XlPlatform__xlMacintosh & 1;// 1
static +xlMSDOS: Class<Excel$XlPlatform__xlMSDOS> & Excel$XlPlatform__xlMSDOS & 3;// 3
static +xlWindows: Class<Excel$XlPlatform__xlWindows> & Excel$XlPlatform__xlWindows & 2;// 2

}

declare class Excel$XlPlatform__xlMacintosh mixins Excel$XlPlatform {}
declare class Excel$XlPlatform__xlMSDOS mixins Excel$XlPlatform {}
declare class Excel$XlPlatform__xlWindows mixins Excel$XlPlatform {}


declare  class Excel$XlPortugueseReform {
  constructor(...args: empty): mixed;
static +xlPortugueseBoth: Class<Excel$XlPortugueseReform__xlPortugueseBoth> & Excel$XlPortugueseReform__xlPortugueseBoth & 3;// 3
static +xlPortuguesePostReform: Class<Excel$XlPortugueseReform__xlPortuguesePostReform> & Excel$XlPortugueseReform__xlPortuguesePostReform & 2;// 2
static +xlPortuguesePreReform: Class<Excel$XlPortugueseReform__xlPortuguesePreReform> & Excel$XlPortugueseReform__xlPortuguesePreReform & 1;// 1

}

declare class Excel$XlPortugueseReform__xlPortugueseBoth mixins Excel$XlPortugueseReform {}
declare class Excel$XlPortugueseReform__xlPortuguesePostReform mixins Excel$XlPortugueseReform {}
declare class Excel$XlPortugueseReform__xlPortuguesePreReform mixins Excel$XlPortugueseReform {}


declare  class Excel$XlPrintErrors {
  constructor(...args: empty): mixed;
static +xlPrintErrorsBlank: Class<Excel$XlPrintErrors__xlPrintErrorsBlank> & Excel$XlPrintErrors__xlPrintErrorsBlank & 1;// 1
static +xlPrintErrorsDash: Class<Excel$XlPrintErrors__xlPrintErrorsDash> & Excel$XlPrintErrors__xlPrintErrorsDash & 2;// 2
static +xlPrintErrorsDisplayed: Class<Excel$XlPrintErrors__xlPrintErrorsDisplayed> & Excel$XlPrintErrors__xlPrintErrorsDisplayed & 0;// 0
static +xlPrintErrorsNA: Class<Excel$XlPrintErrors__xlPrintErrorsNA> & Excel$XlPrintErrors__xlPrintErrorsNA & 3;// 3

}

declare class Excel$XlPrintErrors__xlPrintErrorsBlank mixins Excel$XlPrintErrors {}
declare class Excel$XlPrintErrors__xlPrintErrorsDash mixins Excel$XlPrintErrors {}
declare class Excel$XlPrintErrors__xlPrintErrorsDisplayed mixins Excel$XlPrintErrors {}
declare class Excel$XlPrintErrors__xlPrintErrorsNA mixins Excel$XlPrintErrors {}


declare  class Excel$XlPrintLocation {
  constructor(...args: empty): mixed;
static +xlPrintInPlace: Class<Excel$XlPrintLocation__xlPrintInPlace> & Excel$XlPrintLocation__xlPrintInPlace & 16;// 16
static +xlPrintNoComments: Class<Excel$XlPrintLocation__xlPrintNoComments> & Excel$XlPrintLocation__xlPrintNoComments & -4142;// -4142
static +xlPrintSheetEnd: Class<Excel$XlPrintLocation__xlPrintSheetEnd> & Excel$XlPrintLocation__xlPrintSheetEnd & 1;// 1

}

declare class Excel$XlPrintLocation__xlPrintInPlace mixins Excel$XlPrintLocation {}
declare class Excel$XlPrintLocation__xlPrintNoComments mixins Excel$XlPrintLocation {}
declare class Excel$XlPrintLocation__xlPrintSheetEnd mixins Excel$XlPrintLocation {}


declare  class Excel$XlPriority {
  constructor(...args: empty): mixed;
static +xlPriorityHigh: Class<Excel$XlPriority__xlPriorityHigh> & Excel$XlPriority__xlPriorityHigh & -4127;// -4127
static +xlPriorityLow: Class<Excel$XlPriority__xlPriorityLow> & Excel$XlPriority__xlPriorityLow & -4134;// -4134
static +xlPriorityNormal: Class<Excel$XlPriority__xlPriorityNormal> & Excel$XlPriority__xlPriorityNormal & -4143;// -4143

}

declare class Excel$XlPriority__xlPriorityHigh mixins Excel$XlPriority {}
declare class Excel$XlPriority__xlPriorityLow mixins Excel$XlPriority {}
declare class Excel$XlPriority__xlPriorityNormal mixins Excel$XlPriority {}


declare  class Excel$XlPropertyDisplayedIn {
  constructor(...args: empty): mixed;
static +xlDisplayPropertyInPivotTable: Class<Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTable> & Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTable & 1;// 1
static +xlDisplayPropertyInPivotTableAndTooltip: Class<Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTableAndTooltip> & Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTableAndTooltip & 3;// 3
static +xlDisplayPropertyInTooltip: Class<Excel$XlPropertyDisplayedIn__xlDisplayPropertyInTooltip> & Excel$XlPropertyDisplayedIn__xlDisplayPropertyInTooltip & 2;// 2

}

declare class Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTable mixins Excel$XlPropertyDisplayedIn {}
declare class Excel$XlPropertyDisplayedIn__xlDisplayPropertyInPivotTableAndTooltip mixins Excel$XlPropertyDisplayedIn {}
declare class Excel$XlPropertyDisplayedIn__xlDisplayPropertyInTooltip mixins Excel$XlPropertyDisplayedIn {}


declare  class Excel$XlProtectedViewCloseReason {
  constructor(...args: empty): mixed;
static +xlProtectedViewCloseEdit: Class<Excel$XlProtectedViewCloseReason__xlProtectedViewCloseEdit> & Excel$XlProtectedViewCloseReason__xlProtectedViewCloseEdit & 1;// 1
static +xlProtectedViewCloseForced: Class<Excel$XlProtectedViewCloseReason__xlProtectedViewCloseForced> & Excel$XlProtectedViewCloseReason__xlProtectedViewCloseForced & 2;// 2
static +xlProtectedViewCloseNormal: Class<Excel$XlProtectedViewCloseReason__xlProtectedViewCloseNormal> & Excel$XlProtectedViewCloseReason__xlProtectedViewCloseNormal & 0;// 0

}

declare class Excel$XlProtectedViewCloseReason__xlProtectedViewCloseEdit mixins Excel$XlProtectedViewCloseReason {}
declare class Excel$XlProtectedViewCloseReason__xlProtectedViewCloseForced mixins Excel$XlProtectedViewCloseReason {}
declare class Excel$XlProtectedViewCloseReason__xlProtectedViewCloseNormal mixins Excel$XlProtectedViewCloseReason {}


declare  class Excel$XlProtectedViewWindowState {
  constructor(...args: empty): mixed;
static +xlProtectedViewWindowMaximized: Class<Excel$XlProtectedViewWindowState__xlProtectedViewWindowMaximized> & Excel$XlProtectedViewWindowState__xlProtectedViewWindowMaximized & 2;// 2
static +xlProtectedViewWindowMinimized: Class<Excel$XlProtectedViewWindowState__xlProtectedViewWindowMinimized> & Excel$XlProtectedViewWindowState__xlProtectedViewWindowMinimized & 1;// 1
static +xlProtectedViewWindowNormal: Class<Excel$XlProtectedViewWindowState__xlProtectedViewWindowNormal> & Excel$XlProtectedViewWindowState__xlProtectedViewWindowNormal & 0;// 0

}

declare class Excel$XlProtectedViewWindowState__xlProtectedViewWindowMaximized mixins Excel$XlProtectedViewWindowState {}
declare class Excel$XlProtectedViewWindowState__xlProtectedViewWindowMinimized mixins Excel$XlProtectedViewWindowState {}
declare class Excel$XlProtectedViewWindowState__xlProtectedViewWindowNormal mixins Excel$XlProtectedViewWindowState {}


declare  class Excel$XlPTSelectionMode {
  constructor(...args: empty): mixed;
static +xlBlanks: Class<Excel$XlPTSelectionMode__xlBlanks> & Excel$XlPTSelectionMode__xlBlanks & 4;// 4
static +xlButton: Class<Excel$XlPTSelectionMode__xlButton> & Excel$XlPTSelectionMode__xlButton & 15;// 15
static +xlDataAndLabel: Class<Excel$XlPTSelectionMode__xlDataAndLabel> & Excel$XlPTSelectionMode__xlDataAndLabel & 0;// 0
static +xlDataOnly: Class<Excel$XlPTSelectionMode__xlDataOnly> & Excel$XlPTSelectionMode__xlDataOnly & 2;// 2
static +xlFirstRow: Class<Excel$XlPTSelectionMode__xlFirstRow> & Excel$XlPTSelectionMode__xlFirstRow & 256;// 256
static +xlLabelOnly: Class<Excel$XlPTSelectionMode__xlLabelOnly> & Excel$XlPTSelectionMode__xlLabelOnly & 1;// 1
static +xlOrigin: Class<Excel$XlPTSelectionMode__xlOrigin> & Excel$XlPTSelectionMode__xlOrigin & 3;// 3

}

declare class Excel$XlPTSelectionMode__xlBlanks mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlButton mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlDataAndLabel mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlDataOnly mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlFirstRow mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlLabelOnly mixins Excel$XlPTSelectionMode {}
declare class Excel$XlPTSelectionMode__xlOrigin mixins Excel$XlPTSelectionMode {}


declare  class Excel$XlQueryType {
  constructor(...args: empty): mixed;
static +xlADORecordset: Class<Excel$XlQueryType__xlADORecordset> & Excel$XlQueryType__xlADORecordset & 7;// 7
static +xlDAORecordset: Class<Excel$XlQueryType__xlDAORecordset> & Excel$XlQueryType__xlDAORecordset & 2;// 2
static +xlODBCQuery: Class<Excel$XlQueryType__xlODBCQuery> & Excel$XlQueryType__xlODBCQuery & 1;// 1
static +xlOLEDBQuery: Class<Excel$XlQueryType__xlOLEDBQuery> & Excel$XlQueryType__xlOLEDBQuery & 5;// 5
static +xlTextImport: Class<Excel$XlQueryType__xlTextImport> & Excel$XlQueryType__xlTextImport & 6;// 6
static +xlWebQuery: Class<Excel$XlQueryType__xlWebQuery> & Excel$XlQueryType__xlWebQuery & 4;// 4

}

declare class Excel$XlQueryType__xlADORecordset mixins Excel$XlQueryType {}
declare class Excel$XlQueryType__xlDAORecordset mixins Excel$XlQueryType {}
declare class Excel$XlQueryType__xlODBCQuery mixins Excel$XlQueryType {}
declare class Excel$XlQueryType__xlOLEDBQuery mixins Excel$XlQueryType {}
declare class Excel$XlQueryType__xlTextImport mixins Excel$XlQueryType {}
declare class Excel$XlQueryType__xlWebQuery mixins Excel$XlQueryType {}


declare  class Excel$XlRangeAutoFormat {
  constructor(...args: empty): mixed;
static +xlRangeAutoFormat3DEffects1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects1> & Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects1 & 13;// 13
static +xlRangeAutoFormat3DEffects2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects2> & Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects2 & 14;// 14
static +xlRangeAutoFormatAccounting1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting1 & 4;// 4
static +xlRangeAutoFormatAccounting2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting2 & 5;// 5
static +xlRangeAutoFormatAccounting3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting3 & 6;// 6
static +xlRangeAutoFormatAccounting4: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting4> & Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting4 & 17;// 17
static +xlRangeAutoFormatClassic1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic1 & 1;// 1
static +xlRangeAutoFormatClassic2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic2 & 2;// 2
static +xlRangeAutoFormatClassic3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic3 & 3;// 3
static +xlRangeAutoFormatClassicPivotTable: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatClassicPivotTable> & Excel$XlRangeAutoFormat__xlRangeAutoFormatClassicPivotTable & 31;// 31
static +xlRangeAutoFormatColor1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatColor1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatColor1 & 7;// 7
static +xlRangeAutoFormatColor2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatColor2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatColor2 & 8;// 8
static +xlRangeAutoFormatColor3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatColor3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatColor3 & 9;// 9
static +xlRangeAutoFormatList1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatList1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatList1 & 10;// 10
static +xlRangeAutoFormatList2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatList2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatList2 & 11;// 11
static +xlRangeAutoFormatList3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatList3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatList3 & 12;// 12
static +xlRangeAutoFormatLocalFormat1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat1 & 15;// 15
static +xlRangeAutoFormatLocalFormat2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat2 & 16;// 16
static +xlRangeAutoFormatLocalFormat3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat3 & 19;// 19
static +xlRangeAutoFormatLocalFormat4: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat4> & Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat4 & 20;// 20
static +xlRangeAutoFormatNone: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatNone> & Excel$XlRangeAutoFormat__xlRangeAutoFormatNone & -4142;// -4142
static +xlRangeAutoFormatPTNone: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatPTNone> & Excel$XlRangeAutoFormat__xlRangeAutoFormatPTNone & 42;// 42
static +xlRangeAutoFormatReport1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport1 & 21;// 21
static +xlRangeAutoFormatReport10: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport10> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport10 & 30;// 30
static +xlRangeAutoFormatReport2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport2 & 22;// 22
static +xlRangeAutoFormatReport3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport3 & 23;// 23
static +xlRangeAutoFormatReport4: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport4> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport4 & 24;// 24
static +xlRangeAutoFormatReport5: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport5> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport5 & 25;// 25
static +xlRangeAutoFormatReport6: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport6> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport6 & 26;// 26
static +xlRangeAutoFormatReport7: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport7> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport7 & 27;// 27
static +xlRangeAutoFormatReport8: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport8> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport8 & 28;// 28
static +xlRangeAutoFormatReport9: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatReport9> & Excel$XlRangeAutoFormat__xlRangeAutoFormatReport9 & 29;// 29
static +xlRangeAutoFormatSimple: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatSimple> & Excel$XlRangeAutoFormat__xlRangeAutoFormatSimple & -4154;// -4154
static +xlRangeAutoFormatTable1: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable1> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable1 & 32;// 32
static +xlRangeAutoFormatTable10: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable10> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable10 & 41;// 41
static +xlRangeAutoFormatTable2: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable2> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable2 & 33;// 33
static +xlRangeAutoFormatTable3: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable3> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable3 & 34;// 34
static +xlRangeAutoFormatTable4: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable4> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable4 & 35;// 35
static +xlRangeAutoFormatTable5: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable5> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable5 & 36;// 36
static +xlRangeAutoFormatTable6: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable6> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable6 & 37;// 37
static +xlRangeAutoFormatTable7: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable7> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable7 & 38;// 38
static +xlRangeAutoFormatTable8: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable8> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable8 & 39;// 39
static +xlRangeAutoFormatTable9: Class<Excel$XlRangeAutoFormat__xlRangeAutoFormatTable9> & Excel$XlRangeAutoFormat__xlRangeAutoFormatTable9 & 40;// 40

}

declare class Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormat3DEffects2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatAccounting4 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatClassic3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatClassicPivotTable mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatColor1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatColor2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatColor3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatList1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatList2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatList3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatLocalFormat4 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatNone mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatPTNone mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport10 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport4 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport5 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport6 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport7 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport8 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatReport9 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatSimple mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable1 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable10 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable2 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable3 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable4 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable5 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable6 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable7 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable8 mixins Excel$XlRangeAutoFormat {}
declare class Excel$XlRangeAutoFormat__xlRangeAutoFormatTable9 mixins Excel$XlRangeAutoFormat {}


declare  class Excel$XlRangeValueDataType {
  constructor(...args: empty): mixed;
static +xlRangeValueDefault: Class<Excel$XlRangeValueDataType__xlRangeValueDefault> & Excel$XlRangeValueDataType__xlRangeValueDefault & 10;// 10
static +xlRangeValueMSPersistXML: Class<Excel$XlRangeValueDataType__xlRangeValueMSPersistXML> & Excel$XlRangeValueDataType__xlRangeValueMSPersistXML & 12;// 12
static +xlRangeValueXMLSpreadsheet: Class<Excel$XlRangeValueDataType__xlRangeValueXMLSpreadsheet> & Excel$XlRangeValueDataType__xlRangeValueXMLSpreadsheet & 11;// 11

}

declare class Excel$XlRangeValueDataType__xlRangeValueDefault mixins Excel$XlRangeValueDataType {}
declare class Excel$XlRangeValueDataType__xlRangeValueMSPersistXML mixins Excel$XlRangeValueDataType {}
declare class Excel$XlRangeValueDataType__xlRangeValueXMLSpreadsheet mixins Excel$XlRangeValueDataType {}


declare  class Excel$XlReferenceStyle {
  constructor(...args: empty): mixed;
static +xlA1: Class<Excel$XlReferenceStyle__xlA1> & Excel$XlReferenceStyle__xlA1 & 1;// 1
static +xlR1C1: Class<Excel$XlReferenceStyle__xlR1C1> & Excel$XlReferenceStyle__xlR1C1 & -4150;// -4150

}

declare class Excel$XlReferenceStyle__xlA1 mixins Excel$XlReferenceStyle {}
declare class Excel$XlReferenceStyle__xlR1C1 mixins Excel$XlReferenceStyle {}


declare  class Excel$XlReferenceType {
  constructor(...args: empty): mixed;
static +xlAbsolute: Class<Excel$XlReferenceType__xlAbsolute> & Excel$XlReferenceType__xlAbsolute & 1;// 1
static +xlAbsRowRelColumn: Class<Excel$XlReferenceType__xlAbsRowRelColumn> & Excel$XlReferenceType__xlAbsRowRelColumn & 2;// 2
static +xlRelative: Class<Excel$XlReferenceType__xlRelative> & Excel$XlReferenceType__xlRelative & 4;// 4
static +xlRelRowAbsColumn: Class<Excel$XlReferenceType__xlRelRowAbsColumn> & Excel$XlReferenceType__xlRelRowAbsColumn & 3;// 3

}

declare class Excel$XlReferenceType__xlAbsolute mixins Excel$XlReferenceType {}
declare class Excel$XlReferenceType__xlAbsRowRelColumn mixins Excel$XlReferenceType {}
declare class Excel$XlReferenceType__xlRelative mixins Excel$XlReferenceType {}
declare class Excel$XlReferenceType__xlRelRowAbsColumn mixins Excel$XlReferenceType {}


declare  class Excel$XlRemoveDocInfoType {
  constructor(...args: empty): mixed;
static +xlRDIAll: Class<Excel$XlRemoveDocInfoType__xlRDIAll> & Excel$XlRemoveDocInfoType__xlRDIAll & 99;// 99
static +xlRDIComments: Class<Excel$XlRemoveDocInfoType__xlRDIComments> & Excel$XlRemoveDocInfoType__xlRDIComments & 1;// 1
static +xlRDIContentType: Class<Excel$XlRemoveDocInfoType__xlRDIContentType> & Excel$XlRemoveDocInfoType__xlRDIContentType & 16;// 16
static +xlRDIDefinedNameComments: Class<Excel$XlRemoveDocInfoType__xlRDIDefinedNameComments> & Excel$XlRemoveDocInfoType__xlRDIDefinedNameComments & 18;// 18
static +xlRDIDocumentManagementPolicy: Class<Excel$XlRemoveDocInfoType__xlRDIDocumentManagementPolicy> & Excel$XlRemoveDocInfoType__xlRDIDocumentManagementPolicy & 15;// 15
static +xlRDIDocumentProperties: Class<Excel$XlRemoveDocInfoType__xlRDIDocumentProperties> & Excel$XlRemoveDocInfoType__xlRDIDocumentProperties & 8;// 8
static +xlRDIDocumentServerProperties: Class<Excel$XlRemoveDocInfoType__xlRDIDocumentServerProperties> & Excel$XlRemoveDocInfoType__xlRDIDocumentServerProperties & 14;// 14
static +xlRDIDocumentWorkspace: Class<Excel$XlRemoveDocInfoType__xlRDIDocumentWorkspace> & Excel$XlRemoveDocInfoType__xlRDIDocumentWorkspace & 10;// 10
static +xlRDIEmailHeader: Class<Excel$XlRemoveDocInfoType__xlRDIEmailHeader> & Excel$XlRemoveDocInfoType__xlRDIEmailHeader & 5;// 5
static +xlRDIInactiveDataConnections: Class<Excel$XlRemoveDocInfoType__xlRDIInactiveDataConnections> & Excel$XlRemoveDocInfoType__xlRDIInactiveDataConnections & 19;// 19
static +xlRDIInkAnnotations: Class<Excel$XlRemoveDocInfoType__xlRDIInkAnnotations> & Excel$XlRemoveDocInfoType__xlRDIInkAnnotations & 11;// 11
static +xlRDIPrinterPath: Class<Excel$XlRemoveDocInfoType__xlRDIPrinterPath> & Excel$XlRemoveDocInfoType__xlRDIPrinterPath & 20;// 20
static +xlRDIPublishInfo: Class<Excel$XlRemoveDocInfoType__xlRDIPublishInfo> & Excel$XlRemoveDocInfoType__xlRDIPublishInfo & 13;// 13
static +xlRDIRemovePersonalInformation: Class<Excel$XlRemoveDocInfoType__xlRDIRemovePersonalInformation> & Excel$XlRemoveDocInfoType__xlRDIRemovePersonalInformation & 4;// 4
static +xlRDIRoutingSlip: Class<Excel$XlRemoveDocInfoType__xlRDIRoutingSlip> & Excel$XlRemoveDocInfoType__xlRDIRoutingSlip & 6;// 6
static +xlRDIScenarioComments: Class<Excel$XlRemoveDocInfoType__xlRDIScenarioComments> & Excel$XlRemoveDocInfoType__xlRDIScenarioComments & 12;// 12
static +xlRDISendForReview: Class<Excel$XlRemoveDocInfoType__xlRDISendForReview> & Excel$XlRemoveDocInfoType__xlRDISendForReview & 7;// 7

}

declare class Excel$XlRemoveDocInfoType__xlRDIAll mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIComments mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIContentType mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIDefinedNameComments mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIDocumentManagementPolicy mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIDocumentProperties mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIDocumentServerProperties mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIDocumentWorkspace mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIEmailHeader mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIInactiveDataConnections mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIInkAnnotations mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIPrinterPath mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIPublishInfo mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIRemovePersonalInformation mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIRoutingSlip mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDIScenarioComments mixins Excel$XlRemoveDocInfoType {}
declare class Excel$XlRemoveDocInfoType__xlRDISendForReview mixins Excel$XlRemoveDocInfoType {}


declare  class Excel$XlRgbColor {
  constructor(...args: empty): mixed;
static +rgbAliceBlue: Class<Excel$XlRgbColor__rgbAliceBlue> & Excel$XlRgbColor__rgbAliceBlue & 16775408;// 16775408
static +rgbAntiqueWhite: Class<Excel$XlRgbColor__rgbAntiqueWhite> & Excel$XlRgbColor__rgbAntiqueWhite & 14150650;// 14150650
static +rgbAqua: Class<Excel$XlRgbColor__rgbAqua> & Excel$XlRgbColor__rgbAqua & 16776960;// 16776960
static +rgbAquamarine: Class<Excel$XlRgbColor__rgbAquamarine> & Excel$XlRgbColor__rgbAquamarine & 13959039;// 13959039
static +rgbAzure: Class<Excel$XlRgbColor__rgbAzure> & Excel$XlRgbColor__rgbAzure & 16777200;// 16777200
static +rgbBeige: Class<Excel$XlRgbColor__rgbBeige> & Excel$XlRgbColor__rgbBeige & 14480885;// 14480885
static +rgbBisque: Class<Excel$XlRgbColor__rgbBisque> & Excel$XlRgbColor__rgbBisque & 12903679;// 12903679
static +rgbBlack: Class<Excel$XlRgbColor__rgbBlack> & Excel$XlRgbColor__rgbBlack & 0;// 0
static +rgbBlanchedAlmond: Class<Excel$XlRgbColor__rgbBlanchedAlmond> & Excel$XlRgbColor__rgbBlanchedAlmond & 13495295;// 13495295
static +rgbBlue: Class<Excel$XlRgbColor__rgbBlue> & Excel$XlRgbColor__rgbBlue & 16711680;// 16711680
static +rgbBlueViolet: Class<Excel$XlRgbColor__rgbBlueViolet> & Excel$XlRgbColor__rgbBlueViolet & 14822282;// 14822282
static +rgbBrown: Class<Excel$XlRgbColor__rgbBrown> & Excel$XlRgbColor__rgbBrown & 2763429;// 2763429
static +rgbBurlyWood: Class<Excel$XlRgbColor__rgbBurlyWood> & Excel$XlRgbColor__rgbBurlyWood & 8894686;// 8894686
static +rgbCadetBlue: Class<Excel$XlRgbColor__rgbCadetBlue> & Excel$XlRgbColor__rgbCadetBlue & 10526303;// 10526303
static +rgbChartreuse: Class<Excel$XlRgbColor__rgbChartreuse> & Excel$XlRgbColor__rgbChartreuse & 65407;// 65407
static +rgbCoral: Class<Excel$XlRgbColor__rgbCoral> & Excel$XlRgbColor__rgbCoral & 5275647;// 5275647
static +rgbCornflowerBlue: Class<Excel$XlRgbColor__rgbCornflowerBlue> & Excel$XlRgbColor__rgbCornflowerBlue & 15570276;// 15570276
static +rgbCornsilk: Class<Excel$XlRgbColor__rgbCornsilk> & Excel$XlRgbColor__rgbCornsilk & 14481663;// 14481663
static +rgbCrimson: Class<Excel$XlRgbColor__rgbCrimson> & Excel$XlRgbColor__rgbCrimson & 3937500;// 3937500
static +rgbDarkBlue: Class<Excel$XlRgbColor__rgbDarkBlue> & Excel$XlRgbColor__rgbDarkBlue & 9109504;// 9109504
static +rgbDarkCyan: Class<Excel$XlRgbColor__rgbDarkCyan> & Excel$XlRgbColor__rgbDarkCyan & 9145088;// 9145088
static +rgbDarkGoldenrod: Class<Excel$XlRgbColor__rgbDarkGoldenrod> & Excel$XlRgbColor__rgbDarkGoldenrod & 755384;// 755384
static +rgbDarkGray: Class<Excel$XlRgbColor__rgbDarkGray> & Excel$XlRgbColor__rgbDarkGray & 11119017;// 11119017
static +rgbDarkGreen: Class<Excel$XlRgbColor__rgbDarkGreen> & Excel$XlRgbColor__rgbDarkGreen & 25600;// 25600
static +rgbDarkGrey: Class<Excel$XlRgbColor__rgbDarkGrey> & Excel$XlRgbColor__rgbDarkGrey & 11119017;// 11119017
static +rgbDarkKhaki: Class<Excel$XlRgbColor__rgbDarkKhaki> & Excel$XlRgbColor__rgbDarkKhaki & 7059389;// 7059389
static +rgbDarkMagenta: Class<Excel$XlRgbColor__rgbDarkMagenta> & Excel$XlRgbColor__rgbDarkMagenta & 9109643;// 9109643
static +rgbDarkOliveGreen: Class<Excel$XlRgbColor__rgbDarkOliveGreen> & Excel$XlRgbColor__rgbDarkOliveGreen & 3107669;// 3107669
static +rgbDarkOrange: Class<Excel$XlRgbColor__rgbDarkOrange> & Excel$XlRgbColor__rgbDarkOrange & 36095;// 36095
static +rgbDarkOrchid: Class<Excel$XlRgbColor__rgbDarkOrchid> & Excel$XlRgbColor__rgbDarkOrchid & 13382297;// 13382297
static +rgbDarkRed: Class<Excel$XlRgbColor__rgbDarkRed> & Excel$XlRgbColor__rgbDarkRed & 139;// 139
static +rgbDarkSalmon: Class<Excel$XlRgbColor__rgbDarkSalmon> & Excel$XlRgbColor__rgbDarkSalmon & 8034025;// 8034025
static +rgbDarkSeaGreen: Class<Excel$XlRgbColor__rgbDarkSeaGreen> & Excel$XlRgbColor__rgbDarkSeaGreen & 9419919;// 9419919
static +rgbDarkSlateBlue: Class<Excel$XlRgbColor__rgbDarkSlateBlue> & Excel$XlRgbColor__rgbDarkSlateBlue & 9125192;// 9125192
static +rgbDarkSlateGray: Class<Excel$XlRgbColor__rgbDarkSlateGray> & Excel$XlRgbColor__rgbDarkSlateGray & 5197615;// 5197615
static +rgbDarkSlateGrey: Class<Excel$XlRgbColor__rgbDarkSlateGrey> & Excel$XlRgbColor__rgbDarkSlateGrey & 5197615;// 5197615
static +rgbDarkTurquoise: Class<Excel$XlRgbColor__rgbDarkTurquoise> & Excel$XlRgbColor__rgbDarkTurquoise & 13749760;// 13749760
static +rgbDarkViolet: Class<Excel$XlRgbColor__rgbDarkViolet> & Excel$XlRgbColor__rgbDarkViolet & 13828244;// 13828244
static +rgbDeepPink: Class<Excel$XlRgbColor__rgbDeepPink> & Excel$XlRgbColor__rgbDeepPink & 9639167;// 9639167
static +rgbDeepSkyBlue: Class<Excel$XlRgbColor__rgbDeepSkyBlue> & Excel$XlRgbColor__rgbDeepSkyBlue & 16760576;// 16760576
static +rgbDimGray: Class<Excel$XlRgbColor__rgbDimGray> & Excel$XlRgbColor__rgbDimGray & 6908265;// 6908265
static +rgbDimGrey: Class<Excel$XlRgbColor__rgbDimGrey> & Excel$XlRgbColor__rgbDimGrey & 6908265;// 6908265
static +rgbDodgerBlue: Class<Excel$XlRgbColor__rgbDodgerBlue> & Excel$XlRgbColor__rgbDodgerBlue & 16748574;// 16748574
static +rgbFireBrick: Class<Excel$XlRgbColor__rgbFireBrick> & Excel$XlRgbColor__rgbFireBrick & 2237106;// 2237106
static +rgbFloralWhite: Class<Excel$XlRgbColor__rgbFloralWhite> & Excel$XlRgbColor__rgbFloralWhite & 15792895;// 15792895
static +rgbForestGreen: Class<Excel$XlRgbColor__rgbForestGreen> & Excel$XlRgbColor__rgbForestGreen & 2263842;// 2263842
static +rgbFuchsia: Class<Excel$XlRgbColor__rgbFuchsia> & Excel$XlRgbColor__rgbFuchsia & 16711935;// 16711935
static +rgbGainsboro: Class<Excel$XlRgbColor__rgbGainsboro> & Excel$XlRgbColor__rgbGainsboro & 14474460;// 14474460
static +rgbGhostWhite: Class<Excel$XlRgbColor__rgbGhostWhite> & Excel$XlRgbColor__rgbGhostWhite & 16775416;// 16775416
static +rgbGold: Class<Excel$XlRgbColor__rgbGold> & Excel$XlRgbColor__rgbGold & 55295;// 55295
static +rgbGoldenrod: Class<Excel$XlRgbColor__rgbGoldenrod> & Excel$XlRgbColor__rgbGoldenrod & 2139610;// 2139610
static +rgbGray: Class<Excel$XlRgbColor__rgbGray> & Excel$XlRgbColor__rgbGray & 8421504;// 8421504
static +rgbGreen: Class<Excel$XlRgbColor__rgbGreen> & Excel$XlRgbColor__rgbGreen & 32768;// 32768
static +rgbGreenYellow: Class<Excel$XlRgbColor__rgbGreenYellow> & Excel$XlRgbColor__rgbGreenYellow & 3145645;// 3145645
static +rgbGrey: Class<Excel$XlRgbColor__rgbGrey> & Excel$XlRgbColor__rgbGrey & 8421504;// 8421504
static +rgbHoneydew: Class<Excel$XlRgbColor__rgbHoneydew> & Excel$XlRgbColor__rgbHoneydew & 15794160;// 15794160
static +rgbHotPink: Class<Excel$XlRgbColor__rgbHotPink> & Excel$XlRgbColor__rgbHotPink & 11823615;// 11823615
static +rgbIndianRed: Class<Excel$XlRgbColor__rgbIndianRed> & Excel$XlRgbColor__rgbIndianRed & 6053069;// 6053069
static +rgbIndigo: Class<Excel$XlRgbColor__rgbIndigo> & Excel$XlRgbColor__rgbIndigo & 8519755;// 8519755
static +rgbIvory: Class<Excel$XlRgbColor__rgbIvory> & Excel$XlRgbColor__rgbIvory & 15794175;// 15794175
static +rgbKhaki: Class<Excel$XlRgbColor__rgbKhaki> & Excel$XlRgbColor__rgbKhaki & 9234160;// 9234160
static +rgbLavender: Class<Excel$XlRgbColor__rgbLavender> & Excel$XlRgbColor__rgbLavender & 16443110;// 16443110
static +rgbLavenderBlush: Class<Excel$XlRgbColor__rgbLavenderBlush> & Excel$XlRgbColor__rgbLavenderBlush & 16118015;// 16118015
static +rgbLawnGreen: Class<Excel$XlRgbColor__rgbLawnGreen> & Excel$XlRgbColor__rgbLawnGreen & 64636;// 64636
static +rgbLemonChiffon: Class<Excel$XlRgbColor__rgbLemonChiffon> & Excel$XlRgbColor__rgbLemonChiffon & 13499135;// 13499135
static +rgbLightBlue: Class<Excel$XlRgbColor__rgbLightBlue> & Excel$XlRgbColor__rgbLightBlue & 15128749;// 15128749
static +rgbLightCoral: Class<Excel$XlRgbColor__rgbLightCoral> & Excel$XlRgbColor__rgbLightCoral & 8421616;// 8421616
static +rgbLightCyan: Class<Excel$XlRgbColor__rgbLightCyan> & Excel$XlRgbColor__rgbLightCyan & 9145088;// 9145088
static +rgbLightGoldenrodYellow: Class<Excel$XlRgbColor__rgbLightGoldenrodYellow> & Excel$XlRgbColor__rgbLightGoldenrodYellow & 13826810;// 13826810
static +rgbLightGray: Class<Excel$XlRgbColor__rgbLightGray> & Excel$XlRgbColor__rgbLightGray & 13882323;// 13882323
static +rgbLightGreen: Class<Excel$XlRgbColor__rgbLightGreen> & Excel$XlRgbColor__rgbLightGreen & 9498256;// 9498256
static +rgbLightGrey: Class<Excel$XlRgbColor__rgbLightGrey> & Excel$XlRgbColor__rgbLightGrey & 13882323;// 13882323
static +rgbLightPink: Class<Excel$XlRgbColor__rgbLightPink> & Excel$XlRgbColor__rgbLightPink & 12695295;// 12695295
static +rgbLightSalmon: Class<Excel$XlRgbColor__rgbLightSalmon> & Excel$XlRgbColor__rgbLightSalmon & 8036607;// 8036607
static +rgbLightSeaGreen: Class<Excel$XlRgbColor__rgbLightSeaGreen> & Excel$XlRgbColor__rgbLightSeaGreen & 11186720;// 11186720
static +rgbLightSkyBlue: Class<Excel$XlRgbColor__rgbLightSkyBlue> & Excel$XlRgbColor__rgbLightSkyBlue & 16436871;// 16436871
static +rgbLightSlateGray: Class<Excel$XlRgbColor__rgbLightSlateGray> & Excel$XlRgbColor__rgbLightSlateGray & 10061943;// 10061943
static +rgbLightSlateGrey: Class<Excel$XlRgbColor__rgbLightSlateGrey> & Excel$XlRgbColor__rgbLightSlateGrey & 10061943;// 10061943
static +rgbLightSteelBlue: Class<Excel$XlRgbColor__rgbLightSteelBlue> & Excel$XlRgbColor__rgbLightSteelBlue & 14599344;// 14599344
static +rgbLightYellow: Class<Excel$XlRgbColor__rgbLightYellow> & Excel$XlRgbColor__rgbLightYellow & 14745599;// 14745599
static +rgbLime: Class<Excel$XlRgbColor__rgbLime> & Excel$XlRgbColor__rgbLime & 65280;// 65280
static +rgbLimeGreen: Class<Excel$XlRgbColor__rgbLimeGreen> & Excel$XlRgbColor__rgbLimeGreen & 3329330;// 3329330
static +rgbLinen: Class<Excel$XlRgbColor__rgbLinen> & Excel$XlRgbColor__rgbLinen & 15134970;// 15134970
static +rgbMaroon: Class<Excel$XlRgbColor__rgbMaroon> & Excel$XlRgbColor__rgbMaroon & 128;// 128
static +rgbMediumAquamarine: Class<Excel$XlRgbColor__rgbMediumAquamarine> & Excel$XlRgbColor__rgbMediumAquamarine & 11206502;// 11206502
static +rgbMediumBlue: Class<Excel$XlRgbColor__rgbMediumBlue> & Excel$XlRgbColor__rgbMediumBlue & 13434880;// 13434880
static +rgbMediumOrchid: Class<Excel$XlRgbColor__rgbMediumOrchid> & Excel$XlRgbColor__rgbMediumOrchid & 13850042;// 13850042
static +rgbMediumPurple: Class<Excel$XlRgbColor__rgbMediumPurple> & Excel$XlRgbColor__rgbMediumPurple & 14381203;// 14381203
static +rgbMediumSeaGreen: Class<Excel$XlRgbColor__rgbMediumSeaGreen> & Excel$XlRgbColor__rgbMediumSeaGreen & 7451452;// 7451452
static +rgbMediumSlateBlue: Class<Excel$XlRgbColor__rgbMediumSlateBlue> & Excel$XlRgbColor__rgbMediumSlateBlue & 15624315;// 15624315
static +rgbMediumSpringGreen: Class<Excel$XlRgbColor__rgbMediumSpringGreen> & Excel$XlRgbColor__rgbMediumSpringGreen & 10156544;// 10156544
static +rgbMediumTurquoise: Class<Excel$XlRgbColor__rgbMediumTurquoise> & Excel$XlRgbColor__rgbMediumTurquoise & 13422920;// 13422920
static +rgbMediumVioletRed: Class<Excel$XlRgbColor__rgbMediumVioletRed> & Excel$XlRgbColor__rgbMediumVioletRed & 8721863;// 8721863
static +rgbMidnightBlue: Class<Excel$XlRgbColor__rgbMidnightBlue> & Excel$XlRgbColor__rgbMidnightBlue & 7346457;// 7346457
static +rgbMintCream: Class<Excel$XlRgbColor__rgbMintCream> & Excel$XlRgbColor__rgbMintCream & 16449525;// 16449525
static +rgbMistyRose: Class<Excel$XlRgbColor__rgbMistyRose> & Excel$XlRgbColor__rgbMistyRose & 14804223;// 14804223
static +rgbMoccasin: Class<Excel$XlRgbColor__rgbMoccasin> & Excel$XlRgbColor__rgbMoccasin & 11920639;// 11920639
static +rgbNavajoWhite: Class<Excel$XlRgbColor__rgbNavajoWhite> & Excel$XlRgbColor__rgbNavajoWhite & 11394815;// 11394815
static +rgbNavy: Class<Excel$XlRgbColor__rgbNavy> & Excel$XlRgbColor__rgbNavy & 8388608;// 8388608
static +rgbNavyBlue: Class<Excel$XlRgbColor__rgbNavyBlue> & Excel$XlRgbColor__rgbNavyBlue & 8388608;// 8388608
static +rgbOldLace: Class<Excel$XlRgbColor__rgbOldLace> & Excel$XlRgbColor__rgbOldLace & 15136253;// 15136253
static +rgbOlive: Class<Excel$XlRgbColor__rgbOlive> & Excel$XlRgbColor__rgbOlive & 32896;// 32896
static +rgbOliveDrab: Class<Excel$XlRgbColor__rgbOliveDrab> & Excel$XlRgbColor__rgbOliveDrab & 2330219;// 2330219
static +rgbOrange: Class<Excel$XlRgbColor__rgbOrange> & Excel$XlRgbColor__rgbOrange & 42495;// 42495
static +rgbOrangeRed: Class<Excel$XlRgbColor__rgbOrangeRed> & Excel$XlRgbColor__rgbOrangeRed & 17919;// 17919
static +rgbOrchid: Class<Excel$XlRgbColor__rgbOrchid> & Excel$XlRgbColor__rgbOrchid & 14053594;// 14053594
static +rgbPaleGoldenrod: Class<Excel$XlRgbColor__rgbPaleGoldenrod> & Excel$XlRgbColor__rgbPaleGoldenrod & 7071982;// 7071982
static +rgbPaleGreen: Class<Excel$XlRgbColor__rgbPaleGreen> & Excel$XlRgbColor__rgbPaleGreen & 10025880;// 10025880
static +rgbPaleTurquoise: Class<Excel$XlRgbColor__rgbPaleTurquoise> & Excel$XlRgbColor__rgbPaleTurquoise & 15658671;// 15658671
static +rgbPaleVioletRed: Class<Excel$XlRgbColor__rgbPaleVioletRed> & Excel$XlRgbColor__rgbPaleVioletRed & 9662683;// 9662683
static +rgbPapayaWhip: Class<Excel$XlRgbColor__rgbPapayaWhip> & Excel$XlRgbColor__rgbPapayaWhip & 14020607;// 14020607
static +rgbPeachPuff: Class<Excel$XlRgbColor__rgbPeachPuff> & Excel$XlRgbColor__rgbPeachPuff & 12180223;// 12180223
static +rgbPeru: Class<Excel$XlRgbColor__rgbPeru> & Excel$XlRgbColor__rgbPeru & 4163021;// 4163021
static +rgbPink: Class<Excel$XlRgbColor__rgbPink> & Excel$XlRgbColor__rgbPink & 13353215;// 13353215
static +rgbPlum: Class<Excel$XlRgbColor__rgbPlum> & Excel$XlRgbColor__rgbPlum & 14524637;// 14524637
static +rgbPowderBlue: Class<Excel$XlRgbColor__rgbPowderBlue> & Excel$XlRgbColor__rgbPowderBlue & 15130800;// 15130800
static +rgbPurple: Class<Excel$XlRgbColor__rgbPurple> & Excel$XlRgbColor__rgbPurple & 8388736;// 8388736
static +rgbRed: Class<Excel$XlRgbColor__rgbRed> & Excel$XlRgbColor__rgbRed & 255;// 255
static +rgbRosyBrown: Class<Excel$XlRgbColor__rgbRosyBrown> & Excel$XlRgbColor__rgbRosyBrown & 9408444;// 9408444
static +rgbRoyalBlue: Class<Excel$XlRgbColor__rgbRoyalBlue> & Excel$XlRgbColor__rgbRoyalBlue & 14772545;// 14772545
static +rgbSalmon: Class<Excel$XlRgbColor__rgbSalmon> & Excel$XlRgbColor__rgbSalmon & 7504122;// 7504122
static +rgbSandyBrown: Class<Excel$XlRgbColor__rgbSandyBrown> & Excel$XlRgbColor__rgbSandyBrown & 6333684;// 6333684
static +rgbSeaGreen: Class<Excel$XlRgbColor__rgbSeaGreen> & Excel$XlRgbColor__rgbSeaGreen & 5737262;// 5737262
static +rgbSeashell: Class<Excel$XlRgbColor__rgbSeashell> & Excel$XlRgbColor__rgbSeashell & 15660543;// 15660543
static +rgbSienna: Class<Excel$XlRgbColor__rgbSienna> & Excel$XlRgbColor__rgbSienna & 2970272;// 2970272
static +rgbSilver: Class<Excel$XlRgbColor__rgbSilver> & Excel$XlRgbColor__rgbSilver & 12632256;// 12632256
static +rgbSkyBlue: Class<Excel$XlRgbColor__rgbSkyBlue> & Excel$XlRgbColor__rgbSkyBlue & 15453831;// 15453831
static +rgbSlateBlue: Class<Excel$XlRgbColor__rgbSlateBlue> & Excel$XlRgbColor__rgbSlateBlue & 13458026;// 13458026
static +rgbSlateGray: Class<Excel$XlRgbColor__rgbSlateGray> & Excel$XlRgbColor__rgbSlateGray & 9470064;// 9470064
static +rgbSlateGrey: Class<Excel$XlRgbColor__rgbSlateGrey> & Excel$XlRgbColor__rgbSlateGrey & 9470064;// 9470064
static +rgbSnow: Class<Excel$XlRgbColor__rgbSnow> & Excel$XlRgbColor__rgbSnow & 16448255;// 16448255
static +rgbSpringGreen: Class<Excel$XlRgbColor__rgbSpringGreen> & Excel$XlRgbColor__rgbSpringGreen & 8388352;// 8388352
static +rgbSteelBlue: Class<Excel$XlRgbColor__rgbSteelBlue> & Excel$XlRgbColor__rgbSteelBlue & 11829830;// 11829830
static +rgbTan: Class<Excel$XlRgbColor__rgbTan> & Excel$XlRgbColor__rgbTan & 9221330;// 9221330
static +rgbTeal: Class<Excel$XlRgbColor__rgbTeal> & Excel$XlRgbColor__rgbTeal & 8421376;// 8421376
static +rgbThistle: Class<Excel$XlRgbColor__rgbThistle> & Excel$XlRgbColor__rgbThistle & 14204888;// 14204888
static +rgbTomato: Class<Excel$XlRgbColor__rgbTomato> & Excel$XlRgbColor__rgbTomato & 4678655;// 4678655
static +rgbTurquoise: Class<Excel$XlRgbColor__rgbTurquoise> & Excel$XlRgbColor__rgbTurquoise & 13688896;// 13688896
static +rgbViolet: Class<Excel$XlRgbColor__rgbViolet> & Excel$XlRgbColor__rgbViolet & 15631086;// 15631086
static +rgbWheat: Class<Excel$XlRgbColor__rgbWheat> & Excel$XlRgbColor__rgbWheat & 11788021;// 11788021
static +rgbWhite: Class<Excel$XlRgbColor__rgbWhite> & Excel$XlRgbColor__rgbWhite & 16777215;// 16777215
static +rgbWhiteSmoke: Class<Excel$XlRgbColor__rgbWhiteSmoke> & Excel$XlRgbColor__rgbWhiteSmoke & 16119285;// 16119285
static +rgbYellow: Class<Excel$XlRgbColor__rgbYellow> & Excel$XlRgbColor__rgbYellow & 65535;// 65535
static +rgbYellowGreen: Class<Excel$XlRgbColor__rgbYellowGreen> & Excel$XlRgbColor__rgbYellowGreen & 3329434;// 3329434

}

declare class Excel$XlRgbColor__rgbAliceBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbAntiqueWhite mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbAqua mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbAquamarine mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbAzure mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBeige mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBisque mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBlack mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBlanchedAlmond mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBlueViolet mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBrown mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbBurlyWood mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbCadetBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbChartreuse mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbCoral mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbCornflowerBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbCornsilk mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbCrimson mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkCyan mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkGoldenrod mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkKhaki mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkMagenta mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkOliveGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkOrange mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkOrchid mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkSalmon mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkSeaGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkSlateBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkSlateGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkSlateGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkTurquoise mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDarkViolet mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDeepPink mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDeepSkyBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDimGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDimGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbDodgerBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbFireBrick mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbFloralWhite mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbForestGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbFuchsia mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGainsboro mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGhostWhite mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGold mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGoldenrod mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGreenYellow mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbHoneydew mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbHotPink mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbIndianRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbIndigo mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbIvory mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbKhaki mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLavender mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLavenderBlush mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLawnGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLemonChiffon mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightCoral mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightCyan mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightGoldenrodYellow mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightPink mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSalmon mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSeaGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSkyBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSlateGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSlateGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightSteelBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLightYellow mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLime mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLimeGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbLinen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMaroon mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumAquamarine mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumOrchid mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumPurple mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumSeaGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumSlateBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumSpringGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumTurquoise mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMediumVioletRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMidnightBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMintCream mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMistyRose mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbMoccasin mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbNavajoWhite mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbNavy mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbNavyBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOldLace mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOlive mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOliveDrab mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOrange mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOrangeRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbOrchid mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPaleGoldenrod mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPaleGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPaleTurquoise mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPaleVioletRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPapayaWhip mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPeachPuff mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPeru mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPink mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPlum mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPowderBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbPurple mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbRed mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbRosyBrown mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbRoyalBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSalmon mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSandyBrown mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSeaGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSeashell mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSienna mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSilver mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSkyBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSlateBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSlateGray mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSlateGrey mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSnow mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSpringGreen mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbSteelBlue mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbTan mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbTeal mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbThistle mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbTomato mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbTurquoise mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbViolet mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbWheat mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbWhite mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbWhiteSmoke mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbYellow mixins Excel$XlRgbColor {}
declare class Excel$XlRgbColor__rgbYellowGreen mixins Excel$XlRgbColor {}


declare  class Excel$XlRobustConnect {
  constructor(...args: empty): mixed;
static +xlAlways: Class<Excel$XlRobustConnect__xlAlways> & Excel$XlRobustConnect__xlAlways & 1;// 1
static +xlAsRequired: Class<Excel$XlRobustConnect__xlAsRequired> & Excel$XlRobustConnect__xlAsRequired & 0;// 0
static +xlNever: Class<Excel$XlRobustConnect__xlNever> & Excel$XlRobustConnect__xlNever & 2;// 2

}

declare class Excel$XlRobustConnect__xlAlways mixins Excel$XlRobustConnect {}
declare class Excel$XlRobustConnect__xlAsRequired mixins Excel$XlRobustConnect {}
declare class Excel$XlRobustConnect__xlNever mixins Excel$XlRobustConnect {}


declare  class Excel$XlRoutingSlipDelivery {
  constructor(...args: empty): mixed;
static +xlAllAtOnce: Class<Excel$XlRoutingSlipDelivery__xlAllAtOnce> & Excel$XlRoutingSlipDelivery__xlAllAtOnce & 2;// 2
static +xlOneAfterAnother: Class<Excel$XlRoutingSlipDelivery__xlOneAfterAnother> & Excel$XlRoutingSlipDelivery__xlOneAfterAnother & 1;// 1

}

declare class Excel$XlRoutingSlipDelivery__xlAllAtOnce mixins Excel$XlRoutingSlipDelivery {}
declare class Excel$XlRoutingSlipDelivery__xlOneAfterAnother mixins Excel$XlRoutingSlipDelivery {}


declare  class Excel$XlRoutingSlipStatus {
  constructor(...args: empty): mixed;
static +xlNotYetRouted: Class<Excel$XlRoutingSlipStatus__xlNotYetRouted> & Excel$XlRoutingSlipStatus__xlNotYetRouted & 0;// 0
static +xlRoutingComplete: Class<Excel$XlRoutingSlipStatus__xlRoutingComplete> & Excel$XlRoutingSlipStatus__xlRoutingComplete & 2;// 2
static +xlRoutingInProgress: Class<Excel$XlRoutingSlipStatus__xlRoutingInProgress> & Excel$XlRoutingSlipStatus__xlRoutingInProgress & 1;// 1

}

declare class Excel$XlRoutingSlipStatus__xlNotYetRouted mixins Excel$XlRoutingSlipStatus {}
declare class Excel$XlRoutingSlipStatus__xlRoutingComplete mixins Excel$XlRoutingSlipStatus {}
declare class Excel$XlRoutingSlipStatus__xlRoutingInProgress mixins Excel$XlRoutingSlipStatus {}


declare  class Excel$XlRowCol {
  constructor(...args: empty): mixed;
static +xlColumns: Class<Excel$XlRowCol__xlColumns> & Excel$XlRowCol__xlColumns & 2;// 2
static +xlRows: Class<Excel$XlRowCol__xlRows> & Excel$XlRowCol__xlRows & 1;// 1

}

declare class Excel$XlRowCol__xlColumns mixins Excel$XlRowCol {}
declare class Excel$XlRowCol__xlRows mixins Excel$XlRowCol {}


declare  class Excel$XlRunAutoMacro {
  constructor(...args: empty): mixed;
static +xlAutoActivate: Class<Excel$XlRunAutoMacro__xlAutoActivate> & Excel$XlRunAutoMacro__xlAutoActivate & 3;// 3
static +xlAutoClose: Class<Excel$XlRunAutoMacro__xlAutoClose> & Excel$XlRunAutoMacro__xlAutoClose & 2;// 2
static +xlAutoDeactivate: Class<Excel$XlRunAutoMacro__xlAutoDeactivate> & Excel$XlRunAutoMacro__xlAutoDeactivate & 4;// 4
static +xlAutoOpen: Class<Excel$XlRunAutoMacro__xlAutoOpen> & Excel$XlRunAutoMacro__xlAutoOpen & 1;// 1

}

declare class Excel$XlRunAutoMacro__xlAutoActivate mixins Excel$XlRunAutoMacro {}
declare class Excel$XlRunAutoMacro__xlAutoClose mixins Excel$XlRunAutoMacro {}
declare class Excel$XlRunAutoMacro__xlAutoDeactivate mixins Excel$XlRunAutoMacro {}
declare class Excel$XlRunAutoMacro__xlAutoOpen mixins Excel$XlRunAutoMacro {}


declare  class Excel$XlSaveAction {
  constructor(...args: empty): mixed;
static +xlDoNotSaveChanges: Class<Excel$XlSaveAction__xlDoNotSaveChanges> & Excel$XlSaveAction__xlDoNotSaveChanges & 2;// 2
static +xlSaveChanges: Class<Excel$XlSaveAction__xlSaveChanges> & Excel$XlSaveAction__xlSaveChanges & 1;// 1

}

declare class Excel$XlSaveAction__xlDoNotSaveChanges mixins Excel$XlSaveAction {}
declare class Excel$XlSaveAction__xlSaveChanges mixins Excel$XlSaveAction {}


declare  class Excel$XlSaveAsAccessMode {
  constructor(...args: empty): mixed;
static +xlExclusive: Class<Excel$XlSaveAsAccessMode__xlExclusive> & Excel$XlSaveAsAccessMode__xlExclusive & 3;// 3
static +xlNoChange: Class<Excel$XlSaveAsAccessMode__xlNoChange> & Excel$XlSaveAsAccessMode__xlNoChange & 1;// 1
static +xlShared: Class<Excel$XlSaveAsAccessMode__xlShared> & Excel$XlSaveAsAccessMode__xlShared & 2;// 2

}

declare class Excel$XlSaveAsAccessMode__xlExclusive mixins Excel$XlSaveAsAccessMode {}
declare class Excel$XlSaveAsAccessMode__xlNoChange mixins Excel$XlSaveAsAccessMode {}
declare class Excel$XlSaveAsAccessMode__xlShared mixins Excel$XlSaveAsAccessMode {}


declare  class Excel$XlSaveConflictResolution {
  constructor(...args: empty): mixed;
static +xlLocalSessionChanges: Class<Excel$XlSaveConflictResolution__xlLocalSessionChanges> & Excel$XlSaveConflictResolution__xlLocalSessionChanges & 2;// 2
static +xlOtherSessionChanges: Class<Excel$XlSaveConflictResolution__xlOtherSessionChanges> & Excel$XlSaveConflictResolution__xlOtherSessionChanges & 3;// 3
static +xlUserResolution: Class<Excel$XlSaveConflictResolution__xlUserResolution> & Excel$XlSaveConflictResolution__xlUserResolution & 1;// 1

}

declare class Excel$XlSaveConflictResolution__xlLocalSessionChanges mixins Excel$XlSaveConflictResolution {}
declare class Excel$XlSaveConflictResolution__xlOtherSessionChanges mixins Excel$XlSaveConflictResolution {}
declare class Excel$XlSaveConflictResolution__xlUserResolution mixins Excel$XlSaveConflictResolution {}


declare  class Excel$XlScaleType {
  constructor(...args: empty): mixed;
static +xlScaleLinear: Class<Excel$XlScaleType__xlScaleLinear> & Excel$XlScaleType__xlScaleLinear & -4132;// -4132
static +xlScaleLogarithmic: Class<Excel$XlScaleType__xlScaleLogarithmic> & Excel$XlScaleType__xlScaleLogarithmic & -4133;// -4133

}

declare class Excel$XlScaleType__xlScaleLinear mixins Excel$XlScaleType {}
declare class Excel$XlScaleType__xlScaleLogarithmic mixins Excel$XlScaleType {}


declare  class Excel$XlSearchDirection {
  constructor(...args: empty): mixed;
static +xlNext: Class<Excel$XlSearchDirection__xlNext> & Excel$XlSearchDirection__xlNext & 1;// 1
static +xlPrevious: Class<Excel$XlSearchDirection__xlPrevious> & Excel$XlSearchDirection__xlPrevious & 2;// 2

}

declare class Excel$XlSearchDirection__xlNext mixins Excel$XlSearchDirection {}
declare class Excel$XlSearchDirection__xlPrevious mixins Excel$XlSearchDirection {}


declare  class Excel$XlSearchOrder {
  constructor(...args: empty): mixed;
static +xlByColumns: Class<Excel$XlSearchOrder__xlByColumns> & Excel$XlSearchOrder__xlByColumns & 2;// 2
static +xlByRows: Class<Excel$XlSearchOrder__xlByRows> & Excel$XlSearchOrder__xlByRows & 1;// 1

}

declare class Excel$XlSearchOrder__xlByColumns mixins Excel$XlSearchOrder {}
declare class Excel$XlSearchOrder__xlByRows mixins Excel$XlSearchOrder {}


declare  class Excel$XlSearchWithin {
  constructor(...args: empty): mixed;
static +xlWithinSheet: Class<Excel$XlSearchWithin__xlWithinSheet> & Excel$XlSearchWithin__xlWithinSheet & 1;// 1
static +xlWithinWorkbook: Class<Excel$XlSearchWithin__xlWithinWorkbook> & Excel$XlSearchWithin__xlWithinWorkbook & 2;// 2

}

declare class Excel$XlSearchWithin__xlWithinSheet mixins Excel$XlSearchWithin {}
declare class Excel$XlSearchWithin__xlWithinWorkbook mixins Excel$XlSearchWithin {}


declare  class Excel$XlSheetType {
  constructor(...args: empty): mixed;
static +xlChart: Class<Excel$XlSheetType__xlChart> & Excel$XlSheetType__xlChart & -4109;// -4109
static +xlDialogSheet: Class<Excel$XlSheetType__xlDialogSheet> & Excel$XlSheetType__xlDialogSheet & -4116;// -4116
static +xlExcel4IntlMacroSheet: Class<Excel$XlSheetType__xlExcel4IntlMacroSheet> & Excel$XlSheetType__xlExcel4IntlMacroSheet & 4;// 4
static +xlExcel4MacroSheet: Class<Excel$XlSheetType__xlExcel4MacroSheet> & Excel$XlSheetType__xlExcel4MacroSheet & 3;// 3
static +xlWorksheet: Class<Excel$XlSheetType__xlWorksheet> & Excel$XlSheetType__xlWorksheet & -4167;// -4167

}

declare class Excel$XlSheetType__xlChart mixins Excel$XlSheetType {}
declare class Excel$XlSheetType__xlDialogSheet mixins Excel$XlSheetType {}
declare class Excel$XlSheetType__xlExcel4IntlMacroSheet mixins Excel$XlSheetType {}
declare class Excel$XlSheetType__xlExcel4MacroSheet mixins Excel$XlSheetType {}
declare class Excel$XlSheetType__xlWorksheet mixins Excel$XlSheetType {}


declare  class Excel$XlSheetVisibility {
  constructor(...args: empty): mixed;
static +xlSheetHidden: Class<Excel$XlSheetVisibility__xlSheetHidden> & Excel$XlSheetVisibility__xlSheetHidden & 0;// 0
static +xlSheetVeryHidden: Class<Excel$XlSheetVisibility__xlSheetVeryHidden> & Excel$XlSheetVisibility__xlSheetVeryHidden & 2;// 2
static +xlSheetVisible: Class<Excel$XlSheetVisibility__xlSheetVisible> & Excel$XlSheetVisibility__xlSheetVisible & -1;// -1

}

declare class Excel$XlSheetVisibility__xlSheetHidden mixins Excel$XlSheetVisibility {}
declare class Excel$XlSheetVisibility__xlSheetVeryHidden mixins Excel$XlSheetVisibility {}
declare class Excel$XlSheetVisibility__xlSheetVisible mixins Excel$XlSheetVisibility {}


declare  class Excel$XlSizeRepresents {
  constructor(...args: empty): mixed;
static +xlSizeIsArea: Class<Excel$XlSizeRepresents__xlSizeIsArea> & Excel$XlSizeRepresents__xlSizeIsArea & 1;// 1
static +xlSizeIsWidth: Class<Excel$XlSizeRepresents__xlSizeIsWidth> & Excel$XlSizeRepresents__xlSizeIsWidth & 2;// 2

}

declare class Excel$XlSizeRepresents__xlSizeIsArea mixins Excel$XlSizeRepresents {}
declare class Excel$XlSizeRepresents__xlSizeIsWidth mixins Excel$XlSizeRepresents {}


declare  class Excel$XlSlicerCrossFilterType {
  constructor(...args: empty): mixed;
static +xlSlicerCrossFilterShowItemsWithDataAtTop: Class<Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithDataAtTop> & Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithDataAtTop & 2;// 2
static +xlSlicerCrossFilterShowItemsWithNoData: Class<Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithNoData> & Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithNoData & 3;// 3
static +xlSlicerNoCrossFilter: Class<Excel$XlSlicerCrossFilterType__xlSlicerNoCrossFilter> & Excel$XlSlicerCrossFilterType__xlSlicerNoCrossFilter & 1;// 1

}

declare class Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithDataAtTop mixins Excel$XlSlicerCrossFilterType {}
declare class Excel$XlSlicerCrossFilterType__xlSlicerCrossFilterShowItemsWithNoData mixins Excel$XlSlicerCrossFilterType {}
declare class Excel$XlSlicerCrossFilterType__xlSlicerNoCrossFilter mixins Excel$XlSlicerCrossFilterType {}


declare  class Excel$XlSlicerSort {
  constructor(...args: empty): mixed;
static +xlSlicerSortAscending: Class<Excel$XlSlicerSort__xlSlicerSortAscending> & Excel$XlSlicerSort__xlSlicerSortAscending & 2;// 2
static +xlSlicerSortDataSourceOrder: Class<Excel$XlSlicerSort__xlSlicerSortDataSourceOrder> & Excel$XlSlicerSort__xlSlicerSortDataSourceOrder & 1;// 1
static +xlSlicerSortDescending: Class<Excel$XlSlicerSort__xlSlicerSortDescending> & Excel$XlSlicerSort__xlSlicerSortDescending & 3;// 3

}

declare class Excel$XlSlicerSort__xlSlicerSortAscending mixins Excel$XlSlicerSort {}
declare class Excel$XlSlicerSort__xlSlicerSortDataSourceOrder mixins Excel$XlSlicerSort {}
declare class Excel$XlSlicerSort__xlSlicerSortDescending mixins Excel$XlSlicerSort {}


declare  class Excel$XlSmartTagControlType {
  constructor(...args: empty): mixed;
static +xlSmartTagControlActiveX: Class<Excel$XlSmartTagControlType__xlSmartTagControlActiveX> & Excel$XlSmartTagControlType__xlSmartTagControlActiveX & 13;// 13
static +xlSmartTagControlButton: Class<Excel$XlSmartTagControlType__xlSmartTagControlButton> & Excel$XlSmartTagControlType__xlSmartTagControlButton & 6;// 6
static +xlSmartTagControlCheckbox: Class<Excel$XlSmartTagControlType__xlSmartTagControlCheckbox> & Excel$XlSmartTagControlType__xlSmartTagControlCheckbox & 9;// 9
static +xlSmartTagControlCombo: Class<Excel$XlSmartTagControlType__xlSmartTagControlCombo> & Excel$XlSmartTagControlType__xlSmartTagControlCombo & 12;// 12
static +xlSmartTagControlHelp: Class<Excel$XlSmartTagControlType__xlSmartTagControlHelp> & Excel$XlSmartTagControlType__xlSmartTagControlHelp & 3;// 3
static +xlSmartTagControlHelpURL: Class<Excel$XlSmartTagControlType__xlSmartTagControlHelpURL> & Excel$XlSmartTagControlType__xlSmartTagControlHelpURL & 4;// 4
static +xlSmartTagControlImage: Class<Excel$XlSmartTagControlType__xlSmartTagControlImage> & Excel$XlSmartTagControlType__xlSmartTagControlImage & 8;// 8
static +xlSmartTagControlLabel: Class<Excel$XlSmartTagControlType__xlSmartTagControlLabel> & Excel$XlSmartTagControlType__xlSmartTagControlLabel & 7;// 7
static +xlSmartTagControlLink: Class<Excel$XlSmartTagControlType__xlSmartTagControlLink> & Excel$XlSmartTagControlType__xlSmartTagControlLink & 2;// 2
static +xlSmartTagControlListbox: Class<Excel$XlSmartTagControlType__xlSmartTagControlListbox> & Excel$XlSmartTagControlType__xlSmartTagControlListbox & 11;// 11
static +xlSmartTagControlRadioGroup: Class<Excel$XlSmartTagControlType__xlSmartTagControlRadioGroup> & Excel$XlSmartTagControlType__xlSmartTagControlRadioGroup & 14;// 14
static +xlSmartTagControlSeparator: Class<Excel$XlSmartTagControlType__xlSmartTagControlSeparator> & Excel$XlSmartTagControlType__xlSmartTagControlSeparator & 5;// 5
static +xlSmartTagControlSmartTag: Class<Excel$XlSmartTagControlType__xlSmartTagControlSmartTag> & Excel$XlSmartTagControlType__xlSmartTagControlSmartTag & 1;// 1
static +xlSmartTagControlTextbox: Class<Excel$XlSmartTagControlType__xlSmartTagControlTextbox> & Excel$XlSmartTagControlType__xlSmartTagControlTextbox & 10;// 10

}

declare class Excel$XlSmartTagControlType__xlSmartTagControlActiveX mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlButton mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlCheckbox mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlCombo mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlHelp mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlHelpURL mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlImage mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlLabel mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlLink mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlListbox mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlRadioGroup mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlSeparator mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlSmartTag mixins Excel$XlSmartTagControlType {}
declare class Excel$XlSmartTagControlType__xlSmartTagControlTextbox mixins Excel$XlSmartTagControlType {}


declare  class Excel$XlSmartTagDisplayMode {
  constructor(...args: empty): mixed;
static +xlButtonOnly: Class<Excel$XlSmartTagDisplayMode__xlButtonOnly> & Excel$XlSmartTagDisplayMode__xlButtonOnly & 2;// 2
static +xlDisplayNone: Class<Excel$XlSmartTagDisplayMode__xlDisplayNone> & Excel$XlSmartTagDisplayMode__xlDisplayNone & 1;// 1
static +xlIndicatorAndButton: Class<Excel$XlSmartTagDisplayMode__xlIndicatorAndButton> & Excel$XlSmartTagDisplayMode__xlIndicatorAndButton & 0;// 0

}

declare class Excel$XlSmartTagDisplayMode__xlButtonOnly mixins Excel$XlSmartTagDisplayMode {}
declare class Excel$XlSmartTagDisplayMode__xlDisplayNone mixins Excel$XlSmartTagDisplayMode {}
declare class Excel$XlSmartTagDisplayMode__xlIndicatorAndButton mixins Excel$XlSmartTagDisplayMode {}


declare  class Excel$XlSortDataOption {
  constructor(...args: empty): mixed;
static +xlSortNormal: Class<Excel$XlSortDataOption__xlSortNormal> & Excel$XlSortDataOption__xlSortNormal & 0;// 0
static +xlSortTextAsNumbers: Class<Excel$XlSortDataOption__xlSortTextAsNumbers> & Excel$XlSortDataOption__xlSortTextAsNumbers & 1;// 1

}

declare class Excel$XlSortDataOption__xlSortNormal mixins Excel$XlSortDataOption {}
declare class Excel$XlSortDataOption__xlSortTextAsNumbers mixins Excel$XlSortDataOption {}


declare  class Excel$XlSortMethod {
  constructor(...args: empty): mixed;
static +xlPinYin: Class<Excel$XlSortMethod__xlPinYin> & Excel$XlSortMethod__xlPinYin & 1;// 1
static +xlStroke: Class<Excel$XlSortMethod__xlStroke> & Excel$XlSortMethod__xlStroke & 2;// 2

}

declare class Excel$XlSortMethod__xlPinYin mixins Excel$XlSortMethod {}
declare class Excel$XlSortMethod__xlStroke mixins Excel$XlSortMethod {}


declare  class Excel$XlSortMethodOld {
  constructor(...args: empty): mixed;
static +xlCodePage: Class<Excel$XlSortMethodOld__xlCodePage> & Excel$XlSortMethodOld__xlCodePage & 2;// 2
static +xlSyllabary: Class<Excel$XlSortMethodOld__xlSyllabary> & Excel$XlSortMethodOld__xlSyllabary & 1;// 1

}

declare class Excel$XlSortMethodOld__xlCodePage mixins Excel$XlSortMethodOld {}
declare class Excel$XlSortMethodOld__xlSyllabary mixins Excel$XlSortMethodOld {}


declare  class Excel$XlSortOn {
  constructor(...args: empty): mixed;
static +xlSortOnCellColor: Class<Excel$XlSortOn__xlSortOnCellColor> & Excel$XlSortOn__xlSortOnCellColor & 1;// 1
static +xlSortOnFontColor: Class<Excel$XlSortOn__xlSortOnFontColor> & Excel$XlSortOn__xlSortOnFontColor & 2;// 2
static +xlSortOnIcon: Class<Excel$XlSortOn__xlSortOnIcon> & Excel$XlSortOn__xlSortOnIcon & 3;// 3
static +xlSortOnValues: Class<Excel$XlSortOn__xlSortOnValues> & Excel$XlSortOn__xlSortOnValues & 0;// 0

}

declare class Excel$XlSortOn__xlSortOnCellColor mixins Excel$XlSortOn {}
declare class Excel$XlSortOn__xlSortOnFontColor mixins Excel$XlSortOn {}
declare class Excel$XlSortOn__xlSortOnIcon mixins Excel$XlSortOn {}
declare class Excel$XlSortOn__xlSortOnValues mixins Excel$XlSortOn {}


declare  class Excel$XlSortOrder {
  constructor(...args: empty): mixed;
static +xlAscending: Class<Excel$XlSortOrder__xlAscending> & Excel$XlSortOrder__xlAscending & 1;// 1
static +xlDescending: Class<Excel$XlSortOrder__xlDescending> & Excel$XlSortOrder__xlDescending & 2;// 2

}

declare class Excel$XlSortOrder__xlAscending mixins Excel$XlSortOrder {}
declare class Excel$XlSortOrder__xlDescending mixins Excel$XlSortOrder {}


declare  class Excel$XlSortOrientation {
  constructor(...args: empty): mixed;
static +xlSortColumns: Class<Excel$XlSortOrientation__xlSortColumns> & Excel$XlSortOrientation__xlSortColumns & 1;// 1
static +xlSortRows: Class<Excel$XlSortOrientation__xlSortRows> & Excel$XlSortOrientation__xlSortRows & 2;// 2

}

declare class Excel$XlSortOrientation__xlSortColumns mixins Excel$XlSortOrientation {}
declare class Excel$XlSortOrientation__xlSortRows mixins Excel$XlSortOrientation {}


declare  class Excel$XlSortType {
  constructor(...args: empty): mixed;
static +xlSortLabels: Class<Excel$XlSortType__xlSortLabels> & Excel$XlSortType__xlSortLabels & 2;// 2
static +xlSortValues: Class<Excel$XlSortType__xlSortValues> & Excel$XlSortType__xlSortValues & 1;// 1

}

declare class Excel$XlSortType__xlSortLabels mixins Excel$XlSortType {}
declare class Excel$XlSortType__xlSortValues mixins Excel$XlSortType {}


declare  class Excel$XlSourceType {
  constructor(...args: empty): mixed;
static +xlSourceAutoFilter: Class<Excel$XlSourceType__xlSourceAutoFilter> & Excel$XlSourceType__xlSourceAutoFilter & 3;// 3
static +xlSourceChart: Class<Excel$XlSourceType__xlSourceChart> & Excel$XlSourceType__xlSourceChart & 5;// 5
static +xlSourcePivotTable: Class<Excel$XlSourceType__xlSourcePivotTable> & Excel$XlSourceType__xlSourcePivotTable & 6;// 6
static +xlSourcePrintArea: Class<Excel$XlSourceType__xlSourcePrintArea> & Excel$XlSourceType__xlSourcePrintArea & 2;// 2
static +xlSourceQuery: Class<Excel$XlSourceType__xlSourceQuery> & Excel$XlSourceType__xlSourceQuery & 7;// 7
static +xlSourceRange: Class<Excel$XlSourceType__xlSourceRange> & Excel$XlSourceType__xlSourceRange & 4;// 4
static +xlSourceSheet: Class<Excel$XlSourceType__xlSourceSheet> & Excel$XlSourceType__xlSourceSheet & 1;// 1
static +xlSourceWorkbook: Class<Excel$XlSourceType__xlSourceWorkbook> & Excel$XlSourceType__xlSourceWorkbook & 0;// 0

}

declare class Excel$XlSourceType__xlSourceAutoFilter mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourceChart mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourcePivotTable mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourcePrintArea mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourceQuery mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourceRange mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourceSheet mixins Excel$XlSourceType {}
declare class Excel$XlSourceType__xlSourceWorkbook mixins Excel$XlSourceType {}


declare  class Excel$XlSpanishModes {
  constructor(...args: empty): mixed;
static +xlSpanishTuteoAndVoseo: Class<Excel$XlSpanishModes__xlSpanishTuteoAndVoseo> & Excel$XlSpanishModes__xlSpanishTuteoAndVoseo & 1;// 1
static +xlSpanishTuteoOnly: Class<Excel$XlSpanishModes__xlSpanishTuteoOnly> & Excel$XlSpanishModes__xlSpanishTuteoOnly & 0;// 0
static +xlSpanishVoseoOnly: Class<Excel$XlSpanishModes__xlSpanishVoseoOnly> & Excel$XlSpanishModes__xlSpanishVoseoOnly & 2;// 2

}

declare class Excel$XlSpanishModes__xlSpanishTuteoAndVoseo mixins Excel$XlSpanishModes {}
declare class Excel$XlSpanishModes__xlSpanishTuteoOnly mixins Excel$XlSpanishModes {}
declare class Excel$XlSpanishModes__xlSpanishVoseoOnly mixins Excel$XlSpanishModes {}


declare  class Excel$XlSparklineRowCol {
  constructor(...args: empty): mixed;
static +xlSparklineColumnsSquare: Class<Excel$XlSparklineRowCol__xlSparklineColumnsSquare> & Excel$XlSparklineRowCol__xlSparklineColumnsSquare & 2;// 2
static +xlSparklineNonSquare: Class<Excel$XlSparklineRowCol__xlSparklineNonSquare> & Excel$XlSparklineRowCol__xlSparklineNonSquare & 0;// 0
static +xlSparklineRowsSquare: Class<Excel$XlSparklineRowCol__xlSparklineRowsSquare> & Excel$XlSparklineRowCol__xlSparklineRowsSquare & 1;// 1

}

declare class Excel$XlSparklineRowCol__xlSparklineColumnsSquare mixins Excel$XlSparklineRowCol {}
declare class Excel$XlSparklineRowCol__xlSparklineNonSquare mixins Excel$XlSparklineRowCol {}
declare class Excel$XlSparklineRowCol__xlSparklineRowsSquare mixins Excel$XlSparklineRowCol {}


declare  class Excel$XlSparkScale {
  constructor(...args: empty): mixed;
static +xlSparkScaleCustom: Class<Excel$XlSparkScale__xlSparkScaleCustom> & Excel$XlSparkScale__xlSparkScaleCustom & 3;// 3
static +xlSparkScaleGroup: Class<Excel$XlSparkScale__xlSparkScaleGroup> & Excel$XlSparkScale__xlSparkScaleGroup & 1;// 1
static +xlSparkScaleSingle: Class<Excel$XlSparkScale__xlSparkScaleSingle> & Excel$XlSparkScale__xlSparkScaleSingle & 2;// 2

}

declare class Excel$XlSparkScale__xlSparkScaleCustom mixins Excel$XlSparkScale {}
declare class Excel$XlSparkScale__xlSparkScaleGroup mixins Excel$XlSparkScale {}
declare class Excel$XlSparkScale__xlSparkScaleSingle mixins Excel$XlSparkScale {}


declare  class Excel$XlSparkType {
  constructor(...args: empty): mixed;
static +xlSparkColumn: Class<Excel$XlSparkType__xlSparkColumn> & Excel$XlSparkType__xlSparkColumn & 2;// 2
static +xlSparkColumnStacked100: Class<Excel$XlSparkType__xlSparkColumnStacked100> & Excel$XlSparkType__xlSparkColumnStacked100 & 3;// 3
static +xlSparkLine: Class<Excel$XlSparkType__xlSparkLine> & Excel$XlSparkType__xlSparkLine & 1;// 1

}

declare class Excel$XlSparkType__xlSparkColumn mixins Excel$XlSparkType {}
declare class Excel$XlSparkType__xlSparkColumnStacked100 mixins Excel$XlSparkType {}
declare class Excel$XlSparkType__xlSparkLine mixins Excel$XlSparkType {}


declare  class Excel$XlSpeakDirection {
  constructor(...args: empty): mixed;
static +xlSpeakByColumns: Class<Excel$XlSpeakDirection__xlSpeakByColumns> & Excel$XlSpeakDirection__xlSpeakByColumns & 1;// 1
static +xlSpeakByRows: Class<Excel$XlSpeakDirection__xlSpeakByRows> & Excel$XlSpeakDirection__xlSpeakByRows & 0;// 0

}

declare class Excel$XlSpeakDirection__xlSpeakByColumns mixins Excel$XlSpeakDirection {}
declare class Excel$XlSpeakDirection__xlSpeakByRows mixins Excel$XlSpeakDirection {}


declare  class Excel$XlSpecialCellsValue {
  constructor(...args: empty): mixed;
static +xlErrors: Class<Excel$XlSpecialCellsValue__xlErrors> & Excel$XlSpecialCellsValue__xlErrors & 16;// 16
static +xlLogical: Class<Excel$XlSpecialCellsValue__xlLogical> & Excel$XlSpecialCellsValue__xlLogical & 4;// 4
static +xlNumbers: Class<Excel$XlSpecialCellsValue__xlNumbers> & Excel$XlSpecialCellsValue__xlNumbers & 1;// 1
static +xlTextValues: Class<Excel$XlSpecialCellsValue__xlTextValues> & Excel$XlSpecialCellsValue__xlTextValues & 2;// 2

}

declare class Excel$XlSpecialCellsValue__xlErrors mixins Excel$XlSpecialCellsValue {}
declare class Excel$XlSpecialCellsValue__xlLogical mixins Excel$XlSpecialCellsValue {}
declare class Excel$XlSpecialCellsValue__xlNumbers mixins Excel$XlSpecialCellsValue {}
declare class Excel$XlSpecialCellsValue__xlTextValues mixins Excel$XlSpecialCellsValue {}


declare  class Excel$XlStdColorScale {
  constructor(...args: empty): mixed;
static +xlColorScaleBlackWhite: Class<Excel$XlStdColorScale__xlColorScaleBlackWhite> & Excel$XlStdColorScale__xlColorScaleBlackWhite & 3;// 3
static +xlColorScaleGYR: Class<Excel$XlStdColorScale__xlColorScaleGYR> & Excel$XlStdColorScale__xlColorScaleGYR & 2;// 2
static +xlColorScaleRYG: Class<Excel$XlStdColorScale__xlColorScaleRYG> & Excel$XlStdColorScale__xlColorScaleRYG & 1;// 1
static +xlColorScaleWhiteBlack: Class<Excel$XlStdColorScale__xlColorScaleWhiteBlack> & Excel$XlStdColorScale__xlColorScaleWhiteBlack & 4;// 4

}

declare class Excel$XlStdColorScale__xlColorScaleBlackWhite mixins Excel$XlStdColorScale {}
declare class Excel$XlStdColorScale__xlColorScaleGYR mixins Excel$XlStdColorScale {}
declare class Excel$XlStdColorScale__xlColorScaleRYG mixins Excel$XlStdColorScale {}
declare class Excel$XlStdColorScale__xlColorScaleWhiteBlack mixins Excel$XlStdColorScale {}


declare  class Excel$XlSubscribeToFormat {
  constructor(...args: empty): mixed;
static +xlSubscribeToPicture: Class<Excel$XlSubscribeToFormat__xlSubscribeToPicture> & Excel$XlSubscribeToFormat__xlSubscribeToPicture & -4147;// -4147
static +xlSubscribeToText: Class<Excel$XlSubscribeToFormat__xlSubscribeToText> & Excel$XlSubscribeToFormat__xlSubscribeToText & -4158;// -4158

}

declare class Excel$XlSubscribeToFormat__xlSubscribeToPicture mixins Excel$XlSubscribeToFormat {}
declare class Excel$XlSubscribeToFormat__xlSubscribeToText mixins Excel$XlSubscribeToFormat {}


declare  class Excel$XlSubtototalLocationType {
  constructor(...args: empty): mixed;
static +xlAtBottom: Class<Excel$XlSubtototalLocationType__xlAtBottom> & Excel$XlSubtototalLocationType__xlAtBottom & 2;// 2
static +xlAtTop: Class<Excel$XlSubtototalLocationType__xlAtTop> & Excel$XlSubtototalLocationType__xlAtTop & 1;// 1

}

declare class Excel$XlSubtototalLocationType__xlAtBottom mixins Excel$XlSubtototalLocationType {}
declare class Excel$XlSubtototalLocationType__xlAtTop mixins Excel$XlSubtototalLocationType {}


declare  class Excel$XlSummaryColumn {
  constructor(...args: empty): mixed;
static +xlSummaryOnLeft: Class<Excel$XlSummaryColumn__xlSummaryOnLeft> & Excel$XlSummaryColumn__xlSummaryOnLeft & -4131;// -4131
static +xlSummaryOnRight: Class<Excel$XlSummaryColumn__xlSummaryOnRight> & Excel$XlSummaryColumn__xlSummaryOnRight & -4152;// -4152

}

declare class Excel$XlSummaryColumn__xlSummaryOnLeft mixins Excel$XlSummaryColumn {}
declare class Excel$XlSummaryColumn__xlSummaryOnRight mixins Excel$XlSummaryColumn {}


declare  class Excel$XlSummaryReportType {
  constructor(...args: empty): mixed;
static +xlStandardSummary: Class<Excel$XlSummaryReportType__xlStandardSummary> & Excel$XlSummaryReportType__xlStandardSummary & 1;// 1
static +xlSummaryPivotTable: Class<Excel$XlSummaryReportType__xlSummaryPivotTable> & Excel$XlSummaryReportType__xlSummaryPivotTable & -4148;// -4148

}

declare class Excel$XlSummaryReportType__xlStandardSummary mixins Excel$XlSummaryReportType {}
declare class Excel$XlSummaryReportType__xlSummaryPivotTable mixins Excel$XlSummaryReportType {}


declare  class Excel$XlSummaryRow {
  constructor(...args: empty): mixed;
static +xlSummaryAbove: Class<Excel$XlSummaryRow__xlSummaryAbove> & Excel$XlSummaryRow__xlSummaryAbove & 0;// 0
static +xlSummaryBelow: Class<Excel$XlSummaryRow__xlSummaryBelow> & Excel$XlSummaryRow__xlSummaryBelow & 1;// 1

}

declare class Excel$XlSummaryRow__xlSummaryAbove mixins Excel$XlSummaryRow {}
declare class Excel$XlSummaryRow__xlSummaryBelow mixins Excel$XlSummaryRow {}


declare  class Excel$XlTableStyleElementType {
  constructor(...args: empty): mixed;
static +xlBlankRow: Class<Excel$XlTableStyleElementType__xlBlankRow> & Excel$XlTableStyleElementType__xlBlankRow & 19;// 19
static +xlColumnStripe1: Class<Excel$XlTableStyleElementType__xlColumnStripe1> & Excel$XlTableStyleElementType__xlColumnStripe1 & 7;// 7
static +xlColumnStripe2: Class<Excel$XlTableStyleElementType__xlColumnStripe2> & Excel$XlTableStyleElementType__xlColumnStripe2 & 8;// 8
static +xlColumnSubheading1: Class<Excel$XlTableStyleElementType__xlColumnSubheading1> & Excel$XlTableStyleElementType__xlColumnSubheading1 & 20;// 20
static +xlColumnSubheading2: Class<Excel$XlTableStyleElementType__xlColumnSubheading2> & Excel$XlTableStyleElementType__xlColumnSubheading2 & 21;// 21
static +xlColumnSubheading3: Class<Excel$XlTableStyleElementType__xlColumnSubheading3> & Excel$XlTableStyleElementType__xlColumnSubheading3 & 22;// 22
static +xlFirstColumn: Class<Excel$XlTableStyleElementType__xlFirstColumn> & Excel$XlTableStyleElementType__xlFirstColumn & 3;// 3
static +xlFirstHeaderCell: Class<Excel$XlTableStyleElementType__xlFirstHeaderCell> & Excel$XlTableStyleElementType__xlFirstHeaderCell & 9;// 9
static +xlFirstTotalCell: Class<Excel$XlTableStyleElementType__xlFirstTotalCell> & Excel$XlTableStyleElementType__xlFirstTotalCell & 11;// 11
static +xlGrandTotalColumn: Class<Excel$XlTableStyleElementType__xlGrandTotalColumn> & Excel$XlTableStyleElementType__xlGrandTotalColumn & 4;// 4
static +xlGrandTotalRow: Class<Excel$XlTableStyleElementType__xlGrandTotalRow> & Excel$XlTableStyleElementType__xlGrandTotalRow & 2;// 2
static +xlHeaderRow: Class<Excel$XlTableStyleElementType__xlHeaderRow> & Excel$XlTableStyleElementType__xlHeaderRow & 1;// 1
static +xlLastColumn: Class<Excel$XlTableStyleElementType__xlLastColumn> & Excel$XlTableStyleElementType__xlLastColumn & 4;// 4
static +xlLastHeaderCell: Class<Excel$XlTableStyleElementType__xlLastHeaderCell> & Excel$XlTableStyleElementType__xlLastHeaderCell & 10;// 10
static +xlLastTotalCell: Class<Excel$XlTableStyleElementType__xlLastTotalCell> & Excel$XlTableStyleElementType__xlLastTotalCell & 12;// 12
static +xlPageFieldLabels: Class<Excel$XlTableStyleElementType__xlPageFieldLabels> & Excel$XlTableStyleElementType__xlPageFieldLabels & 26;// 26
static +xlPageFieldValues: Class<Excel$XlTableStyleElementType__xlPageFieldValues> & Excel$XlTableStyleElementType__xlPageFieldValues & 27;// 27
static +xlRowStripe1: Class<Excel$XlTableStyleElementType__xlRowStripe1> & Excel$XlTableStyleElementType__xlRowStripe1 & 5;// 5
static +xlRowStripe2: Class<Excel$XlTableStyleElementType__xlRowStripe2> & Excel$XlTableStyleElementType__xlRowStripe2 & 6;// 6
static +xlRowSubheading1: Class<Excel$XlTableStyleElementType__xlRowSubheading1> & Excel$XlTableStyleElementType__xlRowSubheading1 & 23;// 23
static +xlRowSubheading2: Class<Excel$XlTableStyleElementType__xlRowSubheading2> & Excel$XlTableStyleElementType__xlRowSubheading2 & 24;// 24
static +xlRowSubheading3: Class<Excel$XlTableStyleElementType__xlRowSubheading3> & Excel$XlTableStyleElementType__xlRowSubheading3 & 25;// 25
static +xlSlicerHoveredSelectedItemWithData: Class<Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithData> & Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithData & 33;// 33
static +xlSlicerHoveredSelectedItemWithNoData: Class<Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithNoData> & Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithNoData & 35;// 35
static +xlSlicerHoveredUnselectedItemWithData: Class<Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithData> & Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithData & 32;// 32
static +xlSlicerHoveredUnselectedItemWithNoData: Class<Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithNoData> & Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithNoData & 34;// 34
static +xlSlicerSelectedItemWithData: Class<Excel$XlTableStyleElementType__xlSlicerSelectedItemWithData> & Excel$XlTableStyleElementType__xlSlicerSelectedItemWithData & 30;// 30
static +xlSlicerSelectedItemWithNoData: Class<Excel$XlTableStyleElementType__xlSlicerSelectedItemWithNoData> & Excel$XlTableStyleElementType__xlSlicerSelectedItemWithNoData & 31;// 31
static +xlSlicerUnselectedItemWithData: Class<Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithData> & Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithData & 28;// 28
static +xlSlicerUnselectedItemWithNoData: Class<Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithNoData> & Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithNoData & 29;// 29
static +xlSubtotalColumn1: Class<Excel$XlTableStyleElementType__xlSubtotalColumn1> & Excel$XlTableStyleElementType__xlSubtotalColumn1 & 13;// 13
static +xlSubtotalColumn2: Class<Excel$XlTableStyleElementType__xlSubtotalColumn2> & Excel$XlTableStyleElementType__xlSubtotalColumn2 & 14;// 14
static +xlSubtotalColumn3: Class<Excel$XlTableStyleElementType__xlSubtotalColumn3> & Excel$XlTableStyleElementType__xlSubtotalColumn3 & 15;// 15
static +xlSubtotalRow1: Class<Excel$XlTableStyleElementType__xlSubtotalRow1> & Excel$XlTableStyleElementType__xlSubtotalRow1 & 16;// 16
static +xlSubtotalRow2: Class<Excel$XlTableStyleElementType__xlSubtotalRow2> & Excel$XlTableStyleElementType__xlSubtotalRow2 & 17;// 17
static +xlSubtotalRow3: Class<Excel$XlTableStyleElementType__xlSubtotalRow3> & Excel$XlTableStyleElementType__xlSubtotalRow3 & 18;// 18
static +xlTotalRow: Class<Excel$XlTableStyleElementType__xlTotalRow> & Excel$XlTableStyleElementType__xlTotalRow & 2;// 2
static +xlWholeTable: Class<Excel$XlTableStyleElementType__xlWholeTable> & Excel$XlTableStyleElementType__xlWholeTable & 0;// 0

}

declare class Excel$XlTableStyleElementType__xlBlankRow mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlColumnStripe1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlColumnStripe2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlColumnSubheading1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlColumnSubheading2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlColumnSubheading3 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlFirstColumn mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlFirstHeaderCell mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlFirstTotalCell mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlGrandTotalColumn mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlGrandTotalRow mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlHeaderRow mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlLastColumn mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlLastHeaderCell mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlLastTotalCell mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlPageFieldLabels mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlPageFieldValues mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlRowStripe1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlRowStripe2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlRowSubheading1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlRowSubheading2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlRowSubheading3 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerHoveredSelectedItemWithNoData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerHoveredUnselectedItemWithNoData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerSelectedItemWithData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerSelectedItemWithNoData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSlicerUnselectedItemWithNoData mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalColumn1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalColumn2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalColumn3 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalRow1 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalRow2 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlSubtotalRow3 mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlTotalRow mixins Excel$XlTableStyleElementType {}
declare class Excel$XlTableStyleElementType__xlWholeTable mixins Excel$XlTableStyleElementType {}


declare  class Excel$XlTabPosition {
  constructor(...args: empty): mixed;
static +xlTabPositionFirst: Class<Excel$XlTabPosition__xlTabPositionFirst> & Excel$XlTabPosition__xlTabPositionFirst & 0;// 0
static +xlTabPositionLast: Class<Excel$XlTabPosition__xlTabPositionLast> & Excel$XlTabPosition__xlTabPositionLast & 1;// 1

}

declare class Excel$XlTabPosition__xlTabPositionFirst mixins Excel$XlTabPosition {}
declare class Excel$XlTabPosition__xlTabPositionLast mixins Excel$XlTabPosition {}


declare  class Excel$XlTextParsingType {
  constructor(...args: empty): mixed;
static +xlDelimited: Class<Excel$XlTextParsingType__xlDelimited> & Excel$XlTextParsingType__xlDelimited & 1;// 1
static +xlFixedWidth: Class<Excel$XlTextParsingType__xlFixedWidth> & Excel$XlTextParsingType__xlFixedWidth & 2;// 2

}

declare class Excel$XlTextParsingType__xlDelimited mixins Excel$XlTextParsingType {}
declare class Excel$XlTextParsingType__xlFixedWidth mixins Excel$XlTextParsingType {}


declare  class Excel$XlTextQualifier {
  constructor(...args: empty): mixed;
static +xlTextQualifierDoubleQuote: Class<Excel$XlTextQualifier__xlTextQualifierDoubleQuote> & Excel$XlTextQualifier__xlTextQualifierDoubleQuote & 1;// 1
static +xlTextQualifierNone: Class<Excel$XlTextQualifier__xlTextQualifierNone> & Excel$XlTextQualifier__xlTextQualifierNone & -4142;// -4142
static +xlTextQualifierSingleQuote: Class<Excel$XlTextQualifier__xlTextQualifierSingleQuote> & Excel$XlTextQualifier__xlTextQualifierSingleQuote & 2;// 2

}

declare class Excel$XlTextQualifier__xlTextQualifierDoubleQuote mixins Excel$XlTextQualifier {}
declare class Excel$XlTextQualifier__xlTextQualifierNone mixins Excel$XlTextQualifier {}
declare class Excel$XlTextQualifier__xlTextQualifierSingleQuote mixins Excel$XlTextQualifier {}


declare  class Excel$XlTextVisualLayoutType {
  constructor(...args: empty): mixed;
static +xlTextVisualLTR: Class<Excel$XlTextVisualLayoutType__xlTextVisualLTR> & Excel$XlTextVisualLayoutType__xlTextVisualLTR & 1;// 1
static +xlTextVisualRTL: Class<Excel$XlTextVisualLayoutType__xlTextVisualRTL> & Excel$XlTextVisualLayoutType__xlTextVisualRTL & 2;// 2

}

declare class Excel$XlTextVisualLayoutType__xlTextVisualLTR mixins Excel$XlTextVisualLayoutType {}
declare class Excel$XlTextVisualLayoutType__xlTextVisualRTL mixins Excel$XlTextVisualLayoutType {}


declare  class Excel$XlThemeColor {
  constructor(...args: empty): mixed;
static +xlThemeColorAccent1: Class<Excel$XlThemeColor__xlThemeColorAccent1> & Excel$XlThemeColor__xlThemeColorAccent1 & 5;// 5
static +xlThemeColorAccent2: Class<Excel$XlThemeColor__xlThemeColorAccent2> & Excel$XlThemeColor__xlThemeColorAccent2 & 6;// 6
static +xlThemeColorAccent3: Class<Excel$XlThemeColor__xlThemeColorAccent3> & Excel$XlThemeColor__xlThemeColorAccent3 & 7;// 7
static +xlThemeColorAccent4: Class<Excel$XlThemeColor__xlThemeColorAccent4> & Excel$XlThemeColor__xlThemeColorAccent4 & 8;// 8
static +xlThemeColorAccent5: Class<Excel$XlThemeColor__xlThemeColorAccent5> & Excel$XlThemeColor__xlThemeColorAccent5 & 9;// 9
static +xlThemeColorAccent6: Class<Excel$XlThemeColor__xlThemeColorAccent6> & Excel$XlThemeColor__xlThemeColorAccent6 & 10;// 10
static +xlThemeColorDark1: Class<Excel$XlThemeColor__xlThemeColorDark1> & Excel$XlThemeColor__xlThemeColorDark1 & 1;// 1
static +xlThemeColorDark2: Class<Excel$XlThemeColor__xlThemeColorDark2> & Excel$XlThemeColor__xlThemeColorDark2 & 3;// 3
static +xlThemeColorFollowedHyperlink: Class<Excel$XlThemeColor__xlThemeColorFollowedHyperlink> & Excel$XlThemeColor__xlThemeColorFollowedHyperlink & 12;// 12
static +xlThemeColorHyperlink: Class<Excel$XlThemeColor__xlThemeColorHyperlink> & Excel$XlThemeColor__xlThemeColorHyperlink & 11;// 11
static +xlThemeColorLight1: Class<Excel$XlThemeColor__xlThemeColorLight1> & Excel$XlThemeColor__xlThemeColorLight1 & 2;// 2
static +xlThemeColorLight2: Class<Excel$XlThemeColor__xlThemeColorLight2> & Excel$XlThemeColor__xlThemeColorLight2 & 4;// 4

}

declare class Excel$XlThemeColor__xlThemeColorAccent1 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorAccent2 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorAccent3 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorAccent4 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorAccent5 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorAccent6 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorDark1 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorDark2 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorFollowedHyperlink mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorHyperlink mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorLight1 mixins Excel$XlThemeColor {}
declare class Excel$XlThemeColor__xlThemeColorLight2 mixins Excel$XlThemeColor {}


declare  class Excel$XlThemeFont {
  constructor(...args: empty): mixed;
static +xlThemeFontMajor: Class<Excel$XlThemeFont__xlThemeFontMajor> & Excel$XlThemeFont__xlThemeFontMajor & 1;// 1
static +xlThemeFontMinor: Class<Excel$XlThemeFont__xlThemeFontMinor> & Excel$XlThemeFont__xlThemeFontMinor & 2;// 2
static +xlThemeFontNone: Class<Excel$XlThemeFont__xlThemeFontNone> & Excel$XlThemeFont__xlThemeFontNone & 0;// 0

}

declare class Excel$XlThemeFont__xlThemeFontMajor mixins Excel$XlThemeFont {}
declare class Excel$XlThemeFont__xlThemeFontMinor mixins Excel$XlThemeFont {}
declare class Excel$XlThemeFont__xlThemeFontNone mixins Excel$XlThemeFont {}


declare  class Excel$XlThreadMode {
  constructor(...args: empty): mixed;
static +xlThreadModeAutomatic: Class<Excel$XlThreadMode__xlThreadModeAutomatic> & Excel$XlThreadMode__xlThreadModeAutomatic & 0;// 0
static +xlThreadModeManual: Class<Excel$XlThreadMode__xlThreadModeManual> & Excel$XlThreadMode__xlThreadModeManual & 1;// 1

}

declare class Excel$XlThreadMode__xlThreadModeAutomatic mixins Excel$XlThreadMode {}
declare class Excel$XlThreadMode__xlThreadModeManual mixins Excel$XlThreadMode {}


declare  class Excel$XlTickLabelOrientation {
  constructor(...args: empty): mixed;
static +xlTickLabelOrientationAutomatic: Class<Excel$XlTickLabelOrientation__xlTickLabelOrientationAutomatic> & Excel$XlTickLabelOrientation__xlTickLabelOrientationAutomatic & -4105;// -4105
static +xlTickLabelOrientationDownward: Class<Excel$XlTickLabelOrientation__xlTickLabelOrientationDownward> & Excel$XlTickLabelOrientation__xlTickLabelOrientationDownward & -4170;// -4170
static +xlTickLabelOrientationHorizontal: Class<Excel$XlTickLabelOrientation__xlTickLabelOrientationHorizontal> & Excel$XlTickLabelOrientation__xlTickLabelOrientationHorizontal & -4128;// -4128
static +xlTickLabelOrientationUpward: Class<Excel$XlTickLabelOrientation__xlTickLabelOrientationUpward> & Excel$XlTickLabelOrientation__xlTickLabelOrientationUpward & -4171;// -4171
static +xlTickLabelOrientationVertical: Class<Excel$XlTickLabelOrientation__xlTickLabelOrientationVertical> & Excel$XlTickLabelOrientation__xlTickLabelOrientationVertical & -4166;// -4166

}

declare class Excel$XlTickLabelOrientation__xlTickLabelOrientationAutomatic mixins Excel$XlTickLabelOrientation {}
declare class Excel$XlTickLabelOrientation__xlTickLabelOrientationDownward mixins Excel$XlTickLabelOrientation {}
declare class Excel$XlTickLabelOrientation__xlTickLabelOrientationHorizontal mixins Excel$XlTickLabelOrientation {}
declare class Excel$XlTickLabelOrientation__xlTickLabelOrientationUpward mixins Excel$XlTickLabelOrientation {}
declare class Excel$XlTickLabelOrientation__xlTickLabelOrientationVertical mixins Excel$XlTickLabelOrientation {}


declare  class Excel$XlTickLabelPosition {
  constructor(...args: empty): mixed;
static +xlTickLabelPositionHigh: Class<Excel$XlTickLabelPosition__xlTickLabelPositionHigh> & Excel$XlTickLabelPosition__xlTickLabelPositionHigh & -4127;// -4127
static +xlTickLabelPositionLow: Class<Excel$XlTickLabelPosition__xlTickLabelPositionLow> & Excel$XlTickLabelPosition__xlTickLabelPositionLow & -4134;// -4134
static +xlTickLabelPositionNextToAxis: Class<Excel$XlTickLabelPosition__xlTickLabelPositionNextToAxis> & Excel$XlTickLabelPosition__xlTickLabelPositionNextToAxis & 4;// 4
static +xlTickLabelPositionNone: Class<Excel$XlTickLabelPosition__xlTickLabelPositionNone> & Excel$XlTickLabelPosition__xlTickLabelPositionNone & -4142;// -4142

}

declare class Excel$XlTickLabelPosition__xlTickLabelPositionHigh mixins Excel$XlTickLabelPosition {}
declare class Excel$XlTickLabelPosition__xlTickLabelPositionLow mixins Excel$XlTickLabelPosition {}
declare class Excel$XlTickLabelPosition__xlTickLabelPositionNextToAxis mixins Excel$XlTickLabelPosition {}
declare class Excel$XlTickLabelPosition__xlTickLabelPositionNone mixins Excel$XlTickLabelPosition {}


declare  class Excel$XlTickMark {
  constructor(...args: empty): mixed;
static +xlTickMarkCross: Class<Excel$XlTickMark__xlTickMarkCross> & Excel$XlTickMark__xlTickMarkCross & 4;// 4
static +xlTickMarkInside: Class<Excel$XlTickMark__xlTickMarkInside> & Excel$XlTickMark__xlTickMarkInside & 2;// 2
static +xlTickMarkNone: Class<Excel$XlTickMark__xlTickMarkNone> & Excel$XlTickMark__xlTickMarkNone & -4142;// -4142
static +xlTickMarkOutside: Class<Excel$XlTickMark__xlTickMarkOutside> & Excel$XlTickMark__xlTickMarkOutside & 3;// 3

}

declare class Excel$XlTickMark__xlTickMarkCross mixins Excel$XlTickMark {}
declare class Excel$XlTickMark__xlTickMarkInside mixins Excel$XlTickMark {}
declare class Excel$XlTickMark__xlTickMarkNone mixins Excel$XlTickMark {}
declare class Excel$XlTickMark__xlTickMarkOutside mixins Excel$XlTickMark {}


declare  class Excel$XlTimePeriods {
  constructor(...args: empty): mixed;
static +xlLast7Days: Class<Excel$XlTimePeriods__xlLast7Days> & Excel$XlTimePeriods__xlLast7Days & 2;// 2
static +xlLastMonth: Class<Excel$XlTimePeriods__xlLastMonth> & Excel$XlTimePeriods__xlLastMonth & 5;// 5
static +xlLastWeek: Class<Excel$XlTimePeriods__xlLastWeek> & Excel$XlTimePeriods__xlLastWeek & 4;// 4
static +xlNextMonth: Class<Excel$XlTimePeriods__xlNextMonth> & Excel$XlTimePeriods__xlNextMonth & 8;// 8
static +xlNextWeek: Class<Excel$XlTimePeriods__xlNextWeek> & Excel$XlTimePeriods__xlNextWeek & 7;// 7
static +xlThisMonth: Class<Excel$XlTimePeriods__xlThisMonth> & Excel$XlTimePeriods__xlThisMonth & 9;// 9
static +xlThisWeek: Class<Excel$XlTimePeriods__xlThisWeek> & Excel$XlTimePeriods__xlThisWeek & 3;// 3
static +xlToday: Class<Excel$XlTimePeriods__xlToday> & Excel$XlTimePeriods__xlToday & 0;// 0
static +xlTomorrow: Class<Excel$XlTimePeriods__xlTomorrow> & Excel$XlTimePeriods__xlTomorrow & 6;// 6
static +xlYesterday: Class<Excel$XlTimePeriods__xlYesterday> & Excel$XlTimePeriods__xlYesterday & 1;// 1

}

declare class Excel$XlTimePeriods__xlLast7Days mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlLastMonth mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlLastWeek mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlNextMonth mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlNextWeek mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlThisMonth mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlThisWeek mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlToday mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlTomorrow mixins Excel$XlTimePeriods {}
declare class Excel$XlTimePeriods__xlYesterday mixins Excel$XlTimePeriods {}


declare  class Excel$XlTimeUnit {
  constructor(...args: empty): mixed;
static +xlDays: Class<Excel$XlTimeUnit__xlDays> & Excel$XlTimeUnit__xlDays & 0;// 0
static +xlMonths: Class<Excel$XlTimeUnit__xlMonths> & Excel$XlTimeUnit__xlMonths & 1;// 1
static +xlYears: Class<Excel$XlTimeUnit__xlYears> & Excel$XlTimeUnit__xlYears & 2;// 2

}

declare class Excel$XlTimeUnit__xlDays mixins Excel$XlTimeUnit {}
declare class Excel$XlTimeUnit__xlMonths mixins Excel$XlTimeUnit {}
declare class Excel$XlTimeUnit__xlYears mixins Excel$XlTimeUnit {}


declare  class Excel$XlToolbarProtection {
  constructor(...args: empty): mixed;
static +xlNoButtonChanges: Class<Excel$XlToolbarProtection__xlNoButtonChanges> & Excel$XlToolbarProtection__xlNoButtonChanges & 1;// 1
static +xlNoChanges: Class<Excel$XlToolbarProtection__xlNoChanges> & Excel$XlToolbarProtection__xlNoChanges & 4;// 4
static +xlNoDockingChanges: Class<Excel$XlToolbarProtection__xlNoDockingChanges> & Excel$XlToolbarProtection__xlNoDockingChanges & 3;// 3
static +xlNoShapeChanges: Class<Excel$XlToolbarProtection__xlNoShapeChanges> & Excel$XlToolbarProtection__xlNoShapeChanges & 2;// 2
static +xlToolbarProtectionNone: Class<Excel$XlToolbarProtection__xlToolbarProtectionNone> & Excel$XlToolbarProtection__xlToolbarProtectionNone & -4143;// -4143

}

declare class Excel$XlToolbarProtection__xlNoButtonChanges mixins Excel$XlToolbarProtection {}
declare class Excel$XlToolbarProtection__xlNoChanges mixins Excel$XlToolbarProtection {}
declare class Excel$XlToolbarProtection__xlNoDockingChanges mixins Excel$XlToolbarProtection {}
declare class Excel$XlToolbarProtection__xlNoShapeChanges mixins Excel$XlToolbarProtection {}
declare class Excel$XlToolbarProtection__xlToolbarProtectionNone mixins Excel$XlToolbarProtection {}


declare  class Excel$XlTopBottom {
  constructor(...args: empty): mixed;
static +xlTop10Bottom: Class<Excel$XlTopBottom__xlTop10Bottom> & Excel$XlTopBottom__xlTop10Bottom & 0;// 0
static +xlTop10Top: Class<Excel$XlTopBottom__xlTop10Top> & Excel$XlTopBottom__xlTop10Top & 1;// 1

}

declare class Excel$XlTopBottom__xlTop10Bottom mixins Excel$XlTopBottom {}
declare class Excel$XlTopBottom__xlTop10Top mixins Excel$XlTopBottom {}


declare  class Excel$XlTotalsCalculation {
  constructor(...args: empty): mixed;
static +xlTotalsCalculationAverage: Class<Excel$XlTotalsCalculation__xlTotalsCalculationAverage> & Excel$XlTotalsCalculation__xlTotalsCalculationAverage & 2;// 2
static +xlTotalsCalculationCount: Class<Excel$XlTotalsCalculation__xlTotalsCalculationCount> & Excel$XlTotalsCalculation__xlTotalsCalculationCount & 3;// 3
static +xlTotalsCalculationCountNums: Class<Excel$XlTotalsCalculation__xlTotalsCalculationCountNums> & Excel$XlTotalsCalculation__xlTotalsCalculationCountNums & 4;// 4
static +xlTotalsCalculationCustom: Class<Excel$XlTotalsCalculation__xlTotalsCalculationCustom> & Excel$XlTotalsCalculation__xlTotalsCalculationCustom & 9;// 9
static +xlTotalsCalculationMax: Class<Excel$XlTotalsCalculation__xlTotalsCalculationMax> & Excel$XlTotalsCalculation__xlTotalsCalculationMax & 6;// 6
static +xlTotalsCalculationMin: Class<Excel$XlTotalsCalculation__xlTotalsCalculationMin> & Excel$XlTotalsCalculation__xlTotalsCalculationMin & 5;// 5
static +xlTotalsCalculationNone: Class<Excel$XlTotalsCalculation__xlTotalsCalculationNone> & Excel$XlTotalsCalculation__xlTotalsCalculationNone & 0;// 0
static +xlTotalsCalculationStdDev: Class<Excel$XlTotalsCalculation__xlTotalsCalculationStdDev> & Excel$XlTotalsCalculation__xlTotalsCalculationStdDev & 7;// 7
static +xlTotalsCalculationSum: Class<Excel$XlTotalsCalculation__xlTotalsCalculationSum> & Excel$XlTotalsCalculation__xlTotalsCalculationSum & 1;// 1
static +xlTotalsCalculationVar: Class<Excel$XlTotalsCalculation__xlTotalsCalculationVar> & Excel$XlTotalsCalculation__xlTotalsCalculationVar & 8;// 8

}

declare class Excel$XlTotalsCalculation__xlTotalsCalculationAverage mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationCount mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationCountNums mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationCustom mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationMax mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationMin mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationNone mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationStdDev mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationSum mixins Excel$XlTotalsCalculation {}
declare class Excel$XlTotalsCalculation__xlTotalsCalculationVar mixins Excel$XlTotalsCalculation {}


declare  class Excel$XlTrendlineType {
  constructor(...args: empty): mixed;
static +xlExponential: Class<Excel$XlTrendlineType__xlExponential> & Excel$XlTrendlineType__xlExponential & 5;// 5
static +xlLinear: Class<Excel$XlTrendlineType__xlLinear> & Excel$XlTrendlineType__xlLinear & -4132;// -4132
static +xlLogarithmic: Class<Excel$XlTrendlineType__xlLogarithmic> & Excel$XlTrendlineType__xlLogarithmic & -4133;// -4133
static +xlMovingAvg: Class<Excel$XlTrendlineType__xlMovingAvg> & Excel$XlTrendlineType__xlMovingAvg & 6;// 6
static +xlPolynomial: Class<Excel$XlTrendlineType__xlPolynomial> & Excel$XlTrendlineType__xlPolynomial & 3;// 3
static +xlPower: Class<Excel$XlTrendlineType__xlPower> & Excel$XlTrendlineType__xlPower & 4;// 4

}

declare class Excel$XlTrendlineType__xlExponential mixins Excel$XlTrendlineType {}
declare class Excel$XlTrendlineType__xlLinear mixins Excel$XlTrendlineType {}
declare class Excel$XlTrendlineType__xlLogarithmic mixins Excel$XlTrendlineType {}
declare class Excel$XlTrendlineType__xlMovingAvg mixins Excel$XlTrendlineType {}
declare class Excel$XlTrendlineType__xlPolynomial mixins Excel$XlTrendlineType {}
declare class Excel$XlTrendlineType__xlPower mixins Excel$XlTrendlineType {}


declare  class Excel$XlUnderlineStyle {
  constructor(...args: empty): mixed;
static +xlUnderlineStyleDouble: Class<Excel$XlUnderlineStyle__xlUnderlineStyleDouble> & Excel$XlUnderlineStyle__xlUnderlineStyleDouble & -4119;// -4119
static +xlUnderlineStyleDoubleAccounting: Class<Excel$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting> & Excel$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting & 5;// 5
static +xlUnderlineStyleNone: Class<Excel$XlUnderlineStyle__xlUnderlineStyleNone> & Excel$XlUnderlineStyle__xlUnderlineStyleNone & -4142;// -4142
static +xlUnderlineStyleSingle: Class<Excel$XlUnderlineStyle__xlUnderlineStyleSingle> & Excel$XlUnderlineStyle__xlUnderlineStyleSingle & 2;// 2
static +xlUnderlineStyleSingleAccounting: Class<Excel$XlUnderlineStyle__xlUnderlineStyleSingleAccounting> & Excel$XlUnderlineStyle__xlUnderlineStyleSingleAccounting & 4;// 4

}

declare class Excel$XlUnderlineStyle__xlUnderlineStyleDouble mixins Excel$XlUnderlineStyle {}
declare class Excel$XlUnderlineStyle__xlUnderlineStyleDoubleAccounting mixins Excel$XlUnderlineStyle {}
declare class Excel$XlUnderlineStyle__xlUnderlineStyleNone mixins Excel$XlUnderlineStyle {}
declare class Excel$XlUnderlineStyle__xlUnderlineStyleSingle mixins Excel$XlUnderlineStyle {}
declare class Excel$XlUnderlineStyle__xlUnderlineStyleSingleAccounting mixins Excel$XlUnderlineStyle {}


declare  class Excel$XlUpdateLinks {
  constructor(...args: empty): mixed;
static +xlUpdateLinksAlways: Class<Excel$XlUpdateLinks__xlUpdateLinksAlways> & Excel$XlUpdateLinks__xlUpdateLinksAlways & 3;// 3
static +xlUpdateLinksNever: Class<Excel$XlUpdateLinks__xlUpdateLinksNever> & Excel$XlUpdateLinks__xlUpdateLinksNever & 2;// 2
static +xlUpdateLinksUserSetting: Class<Excel$XlUpdateLinks__xlUpdateLinksUserSetting> & Excel$XlUpdateLinks__xlUpdateLinksUserSetting & 1;// 1

}

declare class Excel$XlUpdateLinks__xlUpdateLinksAlways mixins Excel$XlUpdateLinks {}
declare class Excel$XlUpdateLinks__xlUpdateLinksNever mixins Excel$XlUpdateLinks {}
declare class Excel$XlUpdateLinks__xlUpdateLinksUserSetting mixins Excel$XlUpdateLinks {}


declare  class Excel$XlVAlign {
  constructor(...args: empty): mixed;
static +xlVAlignBottom: Class<Excel$XlVAlign__xlVAlignBottom> & Excel$XlVAlign__xlVAlignBottom & -4107;// -4107
static +xlVAlignCenter: Class<Excel$XlVAlign__xlVAlignCenter> & Excel$XlVAlign__xlVAlignCenter & -4108;// -4108
static +xlVAlignDistributed: Class<Excel$XlVAlign__xlVAlignDistributed> & Excel$XlVAlign__xlVAlignDistributed & -4117;// -4117
static +xlVAlignJustify: Class<Excel$XlVAlign__xlVAlignJustify> & Excel$XlVAlign__xlVAlignJustify & -4130;// -4130
static +xlVAlignTop: Class<Excel$XlVAlign__xlVAlignTop> & Excel$XlVAlign__xlVAlignTop & -4160;// -4160

}

declare class Excel$XlVAlign__xlVAlignBottom mixins Excel$XlVAlign {}
declare class Excel$XlVAlign__xlVAlignCenter mixins Excel$XlVAlign {}
declare class Excel$XlVAlign__xlVAlignDistributed mixins Excel$XlVAlign {}
declare class Excel$XlVAlign__xlVAlignJustify mixins Excel$XlVAlign {}
declare class Excel$XlVAlign__xlVAlignTop mixins Excel$XlVAlign {}


declare  class Excel$XlWBATemplate {
  constructor(...args: empty): mixed;
static +xlWBATChart: Class<Excel$XlWBATemplate__xlWBATChart> & Excel$XlWBATemplate__xlWBATChart & -4109;// -4109
static +xlWBATExcel4IntlMacroSheet: Class<Excel$XlWBATemplate__xlWBATExcel4IntlMacroSheet> & Excel$XlWBATemplate__xlWBATExcel4IntlMacroSheet & 4;// 4
static +xlWBATExcel4MacroSheet: Class<Excel$XlWBATemplate__xlWBATExcel4MacroSheet> & Excel$XlWBATemplate__xlWBATExcel4MacroSheet & 3;// 3
static +xlWBATWorksheet: Class<Excel$XlWBATemplate__xlWBATWorksheet> & Excel$XlWBATemplate__xlWBATWorksheet & -4167;// -4167

}

declare class Excel$XlWBATemplate__xlWBATChart mixins Excel$XlWBATemplate {}
declare class Excel$XlWBATemplate__xlWBATExcel4IntlMacroSheet mixins Excel$XlWBATemplate {}
declare class Excel$XlWBATemplate__xlWBATExcel4MacroSheet mixins Excel$XlWBATemplate {}
declare class Excel$XlWBATemplate__xlWBATWorksheet mixins Excel$XlWBATemplate {}


declare  class Excel$XlWebFormatting {
  constructor(...args: empty): mixed;
static +xlWebFormattingAll: Class<Excel$XlWebFormatting__xlWebFormattingAll> & Excel$XlWebFormatting__xlWebFormattingAll & 1;// 1
static +xlWebFormattingNone: Class<Excel$XlWebFormatting__xlWebFormattingNone> & Excel$XlWebFormatting__xlWebFormattingNone & 3;// 3
static +xlWebFormattingRTF: Class<Excel$XlWebFormatting__xlWebFormattingRTF> & Excel$XlWebFormatting__xlWebFormattingRTF & 2;// 2

}

declare class Excel$XlWebFormatting__xlWebFormattingAll mixins Excel$XlWebFormatting {}
declare class Excel$XlWebFormatting__xlWebFormattingNone mixins Excel$XlWebFormatting {}
declare class Excel$XlWebFormatting__xlWebFormattingRTF mixins Excel$XlWebFormatting {}


declare  class Excel$XlWebSelectionType {
  constructor(...args: empty): mixed;
static +xlAllTables: Class<Excel$XlWebSelectionType__xlAllTables> & Excel$XlWebSelectionType__xlAllTables & 2;// 2
static +xlEntirePage: Class<Excel$XlWebSelectionType__xlEntirePage> & Excel$XlWebSelectionType__xlEntirePage & 1;// 1
static +xlSpecifiedTables: Class<Excel$XlWebSelectionType__xlSpecifiedTables> & Excel$XlWebSelectionType__xlSpecifiedTables & 3;// 3

}

declare class Excel$XlWebSelectionType__xlAllTables mixins Excel$XlWebSelectionType {}
declare class Excel$XlWebSelectionType__xlEntirePage mixins Excel$XlWebSelectionType {}
declare class Excel$XlWebSelectionType__xlSpecifiedTables mixins Excel$XlWebSelectionType {}


declare  class Excel$XlWindowState {
  constructor(...args: empty): mixed;
static +xlMaximized: Class<Excel$XlWindowState__xlMaximized> & Excel$XlWindowState__xlMaximized & -4137;// -4137
static +xlMinimized: Class<Excel$XlWindowState__xlMinimized> & Excel$XlWindowState__xlMinimized & -4140;// -4140
static +xlNormal: Class<Excel$XlWindowState__xlNormal> & Excel$XlWindowState__xlNormal & -4143;// -4143

}

declare class Excel$XlWindowState__xlMaximized mixins Excel$XlWindowState {}
declare class Excel$XlWindowState__xlMinimized mixins Excel$XlWindowState {}
declare class Excel$XlWindowState__xlNormal mixins Excel$XlWindowState {}


declare  class Excel$XlWindowType {
  constructor(...args: empty): mixed;
static +xlChartAsWindow: Class<Excel$XlWindowType__xlChartAsWindow> & Excel$XlWindowType__xlChartAsWindow & 5;// 5
static +xlChartInPlace: Class<Excel$XlWindowType__xlChartInPlace> & Excel$XlWindowType__xlChartInPlace & 4;// 4
static +xlClipboard: Class<Excel$XlWindowType__xlClipboard> & Excel$XlWindowType__xlClipboard & 3;// 3
static +xlInfo: Class<Excel$XlWindowType__xlInfo> & Excel$XlWindowType__xlInfo & -4129;// -4129
static +xlWorkbook: Class<Excel$XlWindowType__xlWorkbook> & Excel$XlWindowType__xlWorkbook & 1;// 1

}

declare class Excel$XlWindowType__xlChartAsWindow mixins Excel$XlWindowType {}
declare class Excel$XlWindowType__xlChartInPlace mixins Excel$XlWindowType {}
declare class Excel$XlWindowType__xlClipboard mixins Excel$XlWindowType {}
declare class Excel$XlWindowType__xlInfo mixins Excel$XlWindowType {}
declare class Excel$XlWindowType__xlWorkbook mixins Excel$XlWindowType {}


declare  class Excel$XlWindowView {
  constructor(...args: empty): mixed;
static +xlNormalView: Class<Excel$XlWindowView__xlNormalView> & Excel$XlWindowView__xlNormalView & 1;// 1
static +xlPageBreakPreview: Class<Excel$XlWindowView__xlPageBreakPreview> & Excel$XlWindowView__xlPageBreakPreview & 2;// 2
static +xlPageLayoutView: Class<Excel$XlWindowView__xlPageLayoutView> & Excel$XlWindowView__xlPageLayoutView & 3;// 3

}

declare class Excel$XlWindowView__xlNormalView mixins Excel$XlWindowView {}
declare class Excel$XlWindowView__xlPageBreakPreview mixins Excel$XlWindowView {}
declare class Excel$XlWindowView__xlPageLayoutView mixins Excel$XlWindowView {}


declare  class Excel$XlXLMMacroType {
  constructor(...args: empty): mixed;
static +xlCommand: Class<Excel$XlXLMMacroType__xlCommand> & Excel$XlXLMMacroType__xlCommand & 2;// 2
static +xlFunction: Class<Excel$XlXLMMacroType__xlFunction> & Excel$XlXLMMacroType__xlFunction & 1;// 1
static +xlNotXLM: Class<Excel$XlXLMMacroType__xlNotXLM> & Excel$XlXLMMacroType__xlNotXLM & 3;// 3

}

declare class Excel$XlXLMMacroType__xlCommand mixins Excel$XlXLMMacroType {}
declare class Excel$XlXLMMacroType__xlFunction mixins Excel$XlXLMMacroType {}
declare class Excel$XlXLMMacroType__xlNotXLM mixins Excel$XlXLMMacroType {}


declare  class Excel$XlXmlExportResult {
  constructor(...args: empty): mixed;
static +xlXmlExportSuccess: Class<Excel$XlXmlExportResult__xlXmlExportSuccess> & Excel$XlXmlExportResult__xlXmlExportSuccess & 0;// 0
static +xlXmlExportValidationFailed: Class<Excel$XlXmlExportResult__xlXmlExportValidationFailed> & Excel$XlXmlExportResult__xlXmlExportValidationFailed & 1;// 1

}

declare class Excel$XlXmlExportResult__xlXmlExportSuccess mixins Excel$XlXmlExportResult {}
declare class Excel$XlXmlExportResult__xlXmlExportValidationFailed mixins Excel$XlXmlExportResult {}


declare  class Excel$XlXmlImportResult {
  constructor(...args: empty): mixed;
static +xlXmlImportElementsTruncated: Class<Excel$XlXmlImportResult__xlXmlImportElementsTruncated> & Excel$XlXmlImportResult__xlXmlImportElementsTruncated & 1;// 1
static +xlXmlImportSuccess: Class<Excel$XlXmlImportResult__xlXmlImportSuccess> & Excel$XlXmlImportResult__xlXmlImportSuccess & 0;// 0
static +xlXmlImportValidationFailed: Class<Excel$XlXmlImportResult__xlXmlImportValidationFailed> & Excel$XlXmlImportResult__xlXmlImportValidationFailed & 2;// 2

}

declare class Excel$XlXmlImportResult__xlXmlImportElementsTruncated mixins Excel$XlXmlImportResult {}
declare class Excel$XlXmlImportResult__xlXmlImportSuccess mixins Excel$XlXmlImportResult {}
declare class Excel$XlXmlImportResult__xlXmlImportValidationFailed mixins Excel$XlXmlImportResult {}


declare  class Excel$XlXmlLoadOption {
  constructor(...args: empty): mixed;
static +xlXmlLoadImportToList: Class<Excel$XlXmlLoadOption__xlXmlLoadImportToList> & Excel$XlXmlLoadOption__xlXmlLoadImportToList & 2;// 2
static +xlXmlLoadMapXml: Class<Excel$XlXmlLoadOption__xlXmlLoadMapXml> & Excel$XlXmlLoadOption__xlXmlLoadMapXml & 3;// 3
static +xlXmlLoadOpenXml: Class<Excel$XlXmlLoadOption__xlXmlLoadOpenXml> & Excel$XlXmlLoadOption__xlXmlLoadOpenXml & 1;// 1
static +xlXmlLoadPromptUser: Class<Excel$XlXmlLoadOption__xlXmlLoadPromptUser> & Excel$XlXmlLoadOption__xlXmlLoadPromptUser & 0;// 0

}

declare class Excel$XlXmlLoadOption__xlXmlLoadImportToList mixins Excel$XlXmlLoadOption {}
declare class Excel$XlXmlLoadOption__xlXmlLoadMapXml mixins Excel$XlXmlLoadOption {}
declare class Excel$XlXmlLoadOption__xlXmlLoadOpenXml mixins Excel$XlXmlLoadOption {}
declare class Excel$XlXmlLoadOption__xlXmlLoadPromptUser mixins Excel$XlXmlLoadOption {}


declare  class Excel$XlYesNoGuess {
  constructor(...args: empty): mixed;
static +xlGuess: Class<Excel$XlYesNoGuess__xlGuess> & Excel$XlYesNoGuess__xlGuess & 0;// 0
static +xlNo: Class<Excel$XlYesNoGuess__xlNo> & Excel$XlYesNoGuess__xlNo & 2;// 2
static +xlYes: Class<Excel$XlYesNoGuess__xlYes> & Excel$XlYesNoGuess__xlYes & 1;// 1

}

declare class Excel$XlYesNoGuess__xlGuess mixins Excel$XlYesNoGuess {}
declare class Excel$XlYesNoGuess__xlNo mixins Excel$XlYesNoGuess {}
declare class Excel$XlYesNoGuess__xlYes mixins Excel$XlYesNoGuess {}


declare class Excel$AboveAverage  {
constructor(): this;
AboveBelow: Excel$XlAboveBelow;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Excel$Borders: Excel$Borders;
CalcFor: Excel$XlCalcFor;
Creator: Excel$XlCreator;
Delete(): void;
Excel$Font: Excel$Font;
Excel$Interior: Excel$Interior;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
NumberFormat: string;
NumStdDev: number;
Parent: any;
Priority: number;
PTCondition: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
StopIfTrue: boolean;
Type: number
}

declare class Excel$Action  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Content: string;
Coordinate: string;
Creator: Excel$XlCreator;
Execute(): void;
Excel$Name: string;
Parent: any;
Type: Excel$XlActionType
}

declare interface Excel$Actions {
_Default(Index: number | string): Excel$Action,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Action,
+Parent: any,
(Index: number | string): Excel$Action
} 

declare class Excel$AddIn  {
constructor(): this;
Excel$Application: Excel$Application;
Author: string;
CLSID: string;
Excel$Comments: string;
Creator: Excel$XlCreator;
FullName: string;
Installed: boolean;
IsOpen: boolean;
Keywords: string;
Excel$Name: string;
Parent: any;
Path: string;
progID: string;
Subject: string;
Title: string
}

declare interface Excel$AddIns {
_Default(Index: number | string): Excel$AddIn,
Add(Filename: string, CopyFile?: boolean): Excel$AddIn,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$AddIn,
+Parent: any,
(Index: number | string): Excel$AddIn
} 

declare type Excel$AddIns2 = Excel$AddIns;

declare interface Excel$Adjustments {
+Excel$Application: any,
+Count: number,
+Creator: number,
Item(Index: number): number,
+Parent: any,
(Index: number): number
} 

declare class Excel$AllowEditRange  {
constructor(): this;
ChangePassword(Password: string): void;
Delete(): void;
Excel$Range: Excel$Range;
Title: string;
Unprotect(Password?: string): void;
Users: Excel$UserAccessList
}

declare interface Excel$AllowEditRanges {
_Default(Index: number | string): Excel$AllowEditRange,
Add(
Title: string,
Excel$Range: Excel$Range,
Password?: string): Excel$AllowEditRange,
+Count: number,
Item(Index: number | string): Excel$AllowEditRange,
(Index: number | string): Excel$AllowEditRange
} 

declare class Excel$Application  {
constructor(): this;
_Default: string;
_Evaluate(Excel$Name: any): any;
_FindFile(): void;
_MacroOptions(
Macro?: any,
Description?: any,
HasMenu?: any,
MenuText?: any,
HasShortcutKey?: any,
ShortcutKey?: any,
Category?: any,
StatusBar?: any,
HelpContextID?: any,
HelpFile?: any): void;
_Run2(
Macro?: any,
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
_Wait(Time: any): void;
_WSFunction(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
ActivateMicrosoftApp(Index: Excel$XlMSApplication): void;
ActiveCell: Excel$Range;
ActiveChart: Excel$Chart;
ActiveDialog: Excel$DialogSheet;
ActiveEncryptionSession: number;
ActiveMenuBar: Excel$MenuBar;
ActivePrinter: string;
ActiveProtectedViewWindow: Excel$ProtectedViewWindow;
ActiveSheet: Excel$Sheet;
ActiveWindow: Excel$Window;
ActiveWorkbook: Excel$Workbook;
AddChartAutoFormat(Excel$Chart: any, Excel$Name: string, Description?: any): void;
AddCustomList(ListArray: SafeArray<string> | Excel$Range, ByRow?: boolean): void;
Excel$AddIns: Excel$AddIns;
Excel$AddIns2: Excel$AddIns2;
AlertBeforeOverwriting: boolean;
AltStartupPath: string;
AlwaysUseClearType: boolean;
AnswerWizard: Office.AnswerWizard;
Excel$Application: Excel$Application;
ArbitraryXMLSupportAvailable: boolean;
AskToUpdateLinks: boolean;
Assistance: Office.IAssistance;
Assistant: Office.Assistant;
Excel$AutoCorrect: Excel$AutoCorrect;
AutoFormatAsYouTypeReplaceHyperlinks: boolean;
AutomationSecurity: Office.MsoAutomationSecurity;
AutoPercentEntry: boolean;
Excel$AutoRecover: Excel$AutoRecover;
Build: number;
Calculate(): void;
CalculateBeforeSave: boolean;
CalculateFull(): void;
CalculateFullRebuild(): void;
CalculateUntilAsyncQueriesDone(): void;
Calculation: Excel$XlCalculation;
CalculationInterruptKey: Excel$XlCalculationInterruptKey;
CalculationState: Excel$XlCalculationState;
CalculationVersion: number;
Caller(Index?: number): Excel$Range | string | Excel$Error;
CanPlaySounds: boolean;
CanRecordSounds: boolean;
Caption: string;
CellDragAndDrop: boolean;
Cells: Excel$Range;
CentimetersToPoints(Centimeters: number): number;
Charts: Excel$Sheets<Excel$Chart>;
CheckAbort(KeepAbort?: boolean): void;
CheckSpelling(Word: string, CustomDictionary?: string, IgnoreUppercase?: boolean): boolean;
ClipboardFormats: SafeArray<Excel$XlClipboardFormat> & ((Index: number) => Excel$XlClipboardFormat);
ClusterConnector: string;
ColorButtons: boolean;
Columns: Excel$Range;
COMAddIns: Office.COMAddIns;
CommandBars: Office.CommandBars;
CommandUnderlines: Excel$XlCommandUnderlines;
ConstrainNumeric: boolean;
ControlCharacters: boolean;
ConvertFormula(
Formula: string,
FromReferenceStyle: Excel$XlReferenceStyle,
ToReferenceStyle?: Excel$XlReferenceStyle,
ToAbsolute?: Excel$XlReferenceType,
RelativeTo?: Excel$Range): string;
CopyObjectsWithCells: boolean;
Creator: Excel$XlCreator;
Cursor: Excel$XlMousePointer;
CursorMovement: number;
CustomListCount: number;
CutCopyMode: Excel$XlCutCopyMode;
DataEntryMode: number;
DDEAppReturnCode: number;
DDEExecute(Channel: number, String: string): void;
DDEInitiate(App: string, Topic: string): number;
DDEPoke(Channel: number, Item: any, Data: any): void;
DDERequest(Channel: number, Item: string): any;
DDETerminate(Channel: number): void;
DecimalSeparator: string;
DefaultFilePath: string;
DefaultSaveFormat: Excel$XlFileFormat;
DefaultSheetDirection: number;
Excel$DefaultWebOptions: Excel$DefaultWebOptions;
DeferAsyncQueries: boolean;
DeleteChartAutoFormat(Excel$Name: string): void;
DeleteCustomList(ListNum: number): void;
Excel$Dialogs: Excel$Dialogs;
DialogSheets: Excel$Sheets<Excel$DialogSheet>;
DisplayAlerts: boolean;
DisplayClipboardWindow: boolean;
DisplayCommentIndicator: Excel$XlCommentDisplayMode;
DisplayDocumentActionTaskPane: boolean;
DisplayDocumentInformationPanel: boolean;
DisplayExcel4Menus: boolean;
DisplayFormulaAutoComplete: boolean;
DisplayFormulaBar: boolean;
DisplayFullScreen: boolean;
DisplayFunctionToolTips: boolean;
DisplayInfoWindow: boolean;
DisplayInsertOptions: boolean;
DisplayNoteIndicator: boolean;
DisplayPasteOptions: boolean;
DisplayRecentFiles: boolean;
DisplayScrollBars: boolean;
DisplayStatusBar: boolean;
DisplayXMLSourcePane(Excel$XmlMap?: Excel$XmlMap): void;
DoubleClick(): void;
Dummy1(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
Dummy10(arg?: any): boolean;
Dummy101: any;
Dummy11(): void;
Dummy12(p1: Excel$PivotTable, p2: Excel$PivotTable): void;
Dummy13(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
Dummy14(): void;
Dummy2(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any): any;
Dummy20(grfCompareFunctions: number): any;
Dummy22: boolean;
Dummy23: boolean;
Dummy3(): any;
Dummy4(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any): any;
Dummy5(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any): any;
Dummy6(): any;
Dummy7(): any;
Dummy8(Arg1?: any): any;
Dummy9(): any;
EditDirectlyInCell: boolean;
EnableAnimations: boolean;
EnableAutoComplete: boolean;
EnableCancelKey: Excel$XlEnableCancelKey;
EnableEvents: boolean;
EnableLargeOperationAlert: boolean;
EnableLivePreview: boolean;
EnableSound: boolean;
EnableTipWizard: boolean;
Excel$ErrorCheckingOptions: Excel$ErrorCheckingOptions;
Evaluate(Excel$Name: string): any;
Excel4IntlMacroSheets: Excel$Sheets;
Excel4MacroSheets: Excel$Sheets;
ExecuteExcel4Macro(String: string): any;
ExtendList: boolean;
FeatureInstall: Office.MsoFeatureInstall;
FileConverters(Index1?: string, Index2?: string): SafeArray;
FileDialog(fileDialogType: Office.MsoFileDialogType): Office.FileDialog;
Excel$FileExportConverters: Excel$FileExportConverters;
FileFind: Office.IFind;
FileSearch: Office.FileSearch;
FileValidation: Office.MsoFileValidationMode;
FileValidationPivot: Excel$XlFileValidationPivotMode;
FindFile(): boolean;
FindFormat: Excel$CellFormat;
FixedDecimal: boolean;
FixedDecimalPlaces: number;
FormulaBarHeight: number;
GenerateGetPivotData: boolean;
GenerateTableRefs: Excel$XlGenerateTableRefs;
GetCustomListContents(ListNum: number): SafeArray<string>;
GetCustomListNum(ListArray: SafeArray<string>): number;

/**
 * @param ButtonText Macintosh only
 */
GetOpenFilename(
FileFilter?: string,
FilterIndex?: number,
Title?: string,
ButtonText?: null,
MultiSelect?: false): string;

/**
 * @param ButtonText Macintosh only
 */
GetOpenFilename(
FileFilter: string | null,
FilterIndex: number | null,
Title: string | null,
ButtonText: null,
MultiSelect: true): SafeArray<string>;
GetPhonetic(Text?: string): string;

/**
 * @param ButtonText Macintosh only
 */
GetSaveAsFilename(
InitialFilename?: string,
FileFilter?: string,
FilterIndex?: number,
Title?: string,
ButtonText?: void): string;
Goto(Reference?: Excel$Range | string, Scroll?: boolean): void;
Height: number;
Help(HelpFile?: string, HelpContextID?: number): void;
HighQualityModeForGraphics: boolean;
Hinstance: number;
HinstancePtr: number;
Hwnd: number;
IgnoreRemoteRequests: boolean;
InchesToPoints(Inches: number): number;
InputBox(
Prompt: string,
Title?: string,
Default?: string,
Left?: number,
Top?: number,
HelpFile?: string,
HelpContextID?: number,
Type?: Excel$InputBoxReturnType): string
| number
| boolean
| Excel$Range
| Excel$Error
| SafeArray<string>
| SafeArray<number>
| SafeArray<boolean>;
Interactive: boolean;
International: SafeArray & (<T>(Index: T) => Excel$InternationalResult<T>);
Intersect(
Arg1: Excel$Range,
Arg2: Excel$Range,
Arg3?: Excel$Range,
Arg4?: Excel$Range,
Arg5?: Excel$Range,
Arg6?: Excel$Range,
Arg7?: Excel$Range,
Arg8?: Excel$Range,
Arg9?: Excel$Range,
Arg10?: Excel$Range,
Arg11?: Excel$Range,
Arg12?: Excel$Range,
Arg13?: Excel$Range,
Arg14?: Excel$Range,
Arg15?: Excel$Range,
Arg16?: Excel$Range,
Arg17?: Excel$Range,
Arg18?: Excel$Range,
Arg19?: Excel$Range,
Arg20?: Excel$Range,
Arg21?: Excel$Range,
Arg22?: Excel$Range,
Arg23?: Excel$Range,
Arg24?: Excel$Range,
Arg25?: Excel$Range,
Arg26?: Excel$Range,
Arg27?: Excel$Range,
Arg28?: Excel$Range,
Arg29?: Excel$Range,
Arg30?: Excel$Range): Excel$Range;
IsSandboxed: boolean;
Iteration: boolean;
LanguageSettings: Office.LanguageSettings;
LargeButtons: boolean;
LargeOperationCellThousandCount: number;
Left: number;
LibraryPath: string;
MacroOptions(
Macro?: string,
Description?: string,
HasMenu?: void,
MenuText?: void,
HasShortcutKey?: boolean,
ShortcutKey?: string,
Category?: Excel$FunctionCategory | string,
StatusBar?: string,
HelpContextID?: number,
HelpFile?: string,
ArgumentDescriptions?: SafeArray<string>): void;
MailLogoff(): void;
MailLogon(Excel$Name?: string, Password?: string, DownloadNewMail?: boolean): void;
MailSession: string | null;
MailSystem: Excel$XlMailSystem;
MapPaperSize: boolean;
MathCoprocessorAvailable: boolean;
MaxChange: number;
MaxIterations: number;
MeasurementUnit: number;
MemoryFree: number;
MemoryTotal: number;
MemoryUsed: number;
Excel$MenuBars: Excel$MenuBars;
Excel$Modules: Excel$Modules;
MouseAvailable: boolean;
MoveAfterReturn: boolean;
MoveAfterReturnDirection: Excel$XlDirection;
Excel$MultiThreadedCalculation: Excel$MultiThreadedCalculation;
Excel$Name: string;
Excel$Names: Excel$Names;
NetworkTemplatesPath: string;
NewWorkbook: Office.NewFile;
NextLetter(): Excel$Workbook;
Excel$ODBCErrors: Excel$ODBCErrors;
ODBCTimeout: number;
Excel$OLEDBErrors: Excel$OLEDBErrors;
OnCalculate: string;
OnData: string;
OnDoubleClick: string;
OnEntry: string;
OnKey(Key: string, Procedure?: string): void;
OnRepeat(Text: string, Procedure: string): void;
OnSheetActivate: string;
OnSheetDeactivate: string;
OnTime(
EarliestTime: any,
Procedure: string,
LatestTime?: any,
Schedule?: boolean): void;
OnUndo(Text: string, Procedure: string): void;
OnWindow: string;
OperatingSystem: string;
OrganizationName: string;
Parent: Excel$Application;
Path: string;
PathSeparator: string;
PivotTableSelection: boolean;
PreviousSelections(Index: 1 | 2 | 3 | 4): Excel$Range | null;
PrintCommunication: boolean;
ProductCode: string;
PromptForSummaryInfo: boolean;
Excel$ProtectedViewWindows: Excel$ProtectedViewWindows;
Quit(): void;
Quitting: boolean;
Range(Cell1: string | Excel$Range, Cell2?: string | Excel$Range): Excel$Range;
Ready: boolean;
Excel$RecentFiles: Excel$RecentFiles;
RecordMacro(BasicCode: string): void;

/**
 * This overload prevents recording
 */
RecordMacro(BasicCode: "", XlmCode: ""): void;
RecordRelative: boolean;
ReferenceStyle: Excel$XlReferenceStyle;
RegisteredFunctions(Index1: string | void, Index2?: string): SafeArray | null;
RegisterXLL(Filename: string): boolean;
Repeat(): void;
ReplaceFormat: Excel$CellFormat;
ResetTipWizard(): void;
RollZoom: boolean;
Rows: Excel$Range;
Excel$RTD: Excel$RTD;
Run(
Macro?: string | Excel$Range | number,
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
Save(Filename?: any): void;
SaveISO8601Dates: boolean;

/**
 * @deprecated
 */
SaveWorkspace(Filename?: any): void;
ScreenUpdating: boolean;
Selection: any;
SendKeys(Keys: string, Wait?: boolean): void;
SetDefaultChart(FormatName?: any, Gallery?: any): void;
SharePointVersion(bstrUrl: string): number;
Excel$Sheets: Excel$Sheets;
SheetsInNewWorkbook: number;
ShortcutMenus(Index: number): Excel$Menu;
ShowChartTipNames: boolean;
ShowChartTipValues: boolean;
ShowDevTools: boolean;
ShowMenuFloaties: boolean;
ShowSelectionFloaties: boolean;
ShowStartupDialog: boolean;
ShowToolTips: boolean;
ShowWindowsInTaskbar: boolean;
SmartArtColors: Office.SmartArtColors;
SmartArtLayouts: Office.SmartArtLayouts;
SmartArtQuickStyles: Office.SmartArtQuickStyles;
Excel$SmartTagRecognizers: Excel$SmartTagRecognizers;
Excel$Speech: Excel$Speech;
Excel$SpellingOptions: Excel$SpellingOptions;
StandardFont: string;
StandardFontSize: number;
StartupPath: string;

/**
 * Get or set the text of the status bar
 * 
 * Returns `false` if Microsoft Excel has control of the status bar.
 * 
 * To restore the default status bar text, set the property to False ; this works even if the status bar is hidden.
 */
StatusBar: string | false;
Support(Object: any, ID: number, arg?: any): any;
TemplatesPath: string;
ThisCell: Excel$Range;
ThisWorkbook: Excel$Workbook;
ThousandsSeparator: string;
Excel$Toolbars: Excel$Toolbars;
Top: number;
TransitionMenuKey: string;
TransitionMenuKeyAction: number;
TransitionNavigKeys: boolean;
UILanguage: number;
Undo(): void;
Union(
Arg1: Excel$Range,
Arg2: Excel$Range,
Arg3?: Excel$Range,
Arg4?: Excel$Range,
Arg5?: Excel$Range,
Arg6?: Excel$Range,
Arg7?: Excel$Range,
Arg8?: Excel$Range,
Arg9?: Excel$Range,
Arg10?: Excel$Range,
Arg11?: Excel$Range,
Arg12?: Excel$Range,
Arg13?: Excel$Range,
Arg14?: Excel$Range,
Arg15?: Excel$Range,
Arg16?: Excel$Range,
Arg17?: Excel$Range,
Arg18?: Excel$Range,
Arg19?: Excel$Range,
Arg20?: Excel$Range,
Arg21?: Excel$Range,
Arg22?: Excel$Range,
Arg23?: Excel$Range,
Arg24?: Excel$Range,
Arg25?: Excel$Range,
Arg26?: Excel$Range,
Arg27?: Excel$Range,
Arg28?: Excel$Range,
Arg29?: Excel$Range,
Arg30?: Excel$Range): Excel$Range;
UsableHeight: number;
UsableWidth: number;
UseClusterConnector: boolean;
Excel$UsedObjects: Excel$UsedObjects;
UserControl: boolean;
UserLibraryPath: string;
UserName: string;
UseSystemSeparators: boolean;
Value: string;
VBE: VBIDE.VBE;
Version: string;
Visible: boolean;

/**
 * @param Volatile [Volatile=true]
 */
Volatile(Volatile?: boolean): void;
Wait(Time: any): boolean;
WarnOnFunctionNameConflict: boolean;
Excel$Watches: Excel$Watches;
Width: number;
Excel$Windows: Excel$Windows;
WindowsForPens: boolean;
WindowState: Excel$XlWindowState;
Excel$Workbooks: Excel$Workbooks;
Excel$WorksheetFunction: Excel$WorksheetFunction;
Worksheets: Excel$Sheets<Excel$Worksheet>
}

declare interface Excel$Areas {
_Default(Index: number): Excel$Range,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Range,
+Parent: any,
(Index: number): Excel$Range
} 

declare class Excel$AutoCorrect  {
constructor(): this;

/**
 * @returns The string to be replaced
 */
AddReplacement(What: string, Replacement: string): string;
Excel$Application: Excel$Application;
AutoExpandListRange: boolean;
AutoFillFormulasInLists: boolean;
CapitalizeNamesOfDays: boolean;
CorrectCapsLock: boolean;
CorrectSentenceCap: boolean;
Creator: Excel$XlCreator;

/**
 * @returns The string to be replaced
 */
DeleteReplacement(What: string): string;
DisplayAutoCorrectOptions: boolean;
Parent: any;
ReplacementList(Index: number): SafeArray<string>;
ReplaceText: boolean;
TwoInitialCapitals: boolean
}

declare class Excel$AutoFilter  {
constructor(): this;
Excel$Application: Excel$Application;
ApplyFilter(): void;
Creator: Excel$XlCreator;
FilterMode: boolean;
Excel$Filters: Excel$Filters;
Parent: any;
Excel$Range: Excel$Range;
ShowAllData(): void;
Excel$Sort: Excel$Sort
}

declare class Excel$AutoRecover  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Enabled: boolean;
Parent: any;
Path: string;
Time: number
}

declare interface Excel$Axes {

/**
 * @param AxisGroup [AxisGroup=1]
 */
_Default(Type: Excel$XlAxisType, AxisGroup?: Excel$XlAxisGroup): Excel$Axis,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,

/**
 * @param AxisGroup [AxisGroup=1]
 */
Item(Type: Excel$XlAxisType, AxisGroup?: Excel$XlAxisGroup): Excel$Axis,
+Parent: any,

/**
 * @param AxisGroup [AxisGroup=1]
 */
(Type: Excel$XlAxisType, AxisGroup?: Excel$XlAxisGroup): Excel$Axis
} 

declare class Excel$Axis  {
constructor(): this;
Excel$Application: Excel$Application;
AxisBetweenCategories: boolean;
AxisGroup: Excel$XlAxisGroup;
Excel$AxisTitle: Excel$AxisTitle;
BaseUnit: Excel$XlTimeUnit;
BaseUnitIsAuto: boolean;
Excel$Border: Excel$Border;
CategoryNames: SafeArray<string> | Excel$Range;
CategoryType: Excel$XlCategoryType;
Creator: Excel$XlCreator;
Crosses: Excel$XlAxisCrosses;
CrossesAt: number;
Delete(): any;
DisplayUnit: Excel$XlDisplayUnit;
DisplayUnitCustom: number;
Excel$DisplayUnitLabel: Excel$DisplayUnitLabel;
Format: Excel$ChartFormat;
HasDisplayUnitLabel: boolean;
HasMajorGridlines: boolean;
HasMinorGridlines: boolean;
HasTitle: boolean;
Height: number;
Left: number;
LogBase: number;
MajorGridlines: Excel$Gridlines;
MajorTickMark: Excel$XlTickMark;
MajorUnit: number;
MajorUnitIsAuto: boolean;
MajorUnitScale: Excel$XlTimeUnit;
MaximumScale: number;
MaximumScaleIsAuto: boolean;
MinimumScale: number;
MinimumScaleIsAuto: boolean;
MinorGridlines: Excel$Gridlines;
MinorTickMark: Excel$XlTickMark;
MinorUnit: number;
MinorUnitIsAuto: boolean;
MinorUnitScale: Excel$XlTimeUnit;
Parent: any;
ReversePlotOrder: boolean;
ScaleType: Excel$XlScaleType;
Select(): any;
TickLabelPosition: Excel$XlTickLabelPosition;
Excel$TickLabels: Excel$TickLabels;
TickLabelSpacing: number;
TickLabelSpacingIsAuto: boolean;
TickMarkSpacing: number;
Top: number;
Type: Excel$XlAxisType;
Width: number
}

declare class Excel$AxisTitle  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Caption: string;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Height: number;
HorizontalAlignment: Excel$HorizontalAlignments;
IncludeInLayout: boolean;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
Orientation: number | Excel$XlOrientation;
Parent: any;
Position: Excel$XlChartElementPosition;
ReadingOrder: number;
Select(): any;
Shadow: boolean;
Text: string;
Top: number;
VerticalAlignment: Excel$VerticalAlignments;
Width: number
}

declare class Excel$Border  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$XlRgbColor | number;
ColorIndex: number | Excel$XlColorIndex;
Creator: Excel$XlCreator;
Excel$LineStyle: Excel$LineStyle;
Parent: any;
ThemeColor: Excel$XlThemeColor;
TintAndShade: number;
Weight: Excel$XlBorderWeight
}

declare interface Excel$Borders {
_Default(Index: Excel$XlBordersIndex): Excel$Border,
+Excel$Application: Excel$Application,
Color: Excel$XlRgbColor | number,
ColorIndex: number | Excel$XlColorIndex | null,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: Excel$XlBordersIndex): Excel$Border,
Excel$LineStyle: Excel$LineStyle,
+Parent: any,
ThemeColor: Excel$XlThemeColor,
TintAndShade: number,
Value: Excel$LineStyle,
Weight: Excel$XlBorderWeight,
(Index: Excel$XlBordersIndex): Excel$Border
} 

declare interface Excel$CalculatedFields {
_Add(Excel$Name: string, Formula: string): Excel$PivotField,
_Default(Field: any): Excel$PivotField,

/**
 * @param UseStandardFormula [UseStandardFormula=false]
 */
Add(
Excel$Name: string,
Formula: string,
UseStandardFormula?: boolean): Excel$PivotField,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$PivotField,
+Parent: any,
(Field: number | string): Excel$PivotField
} 

declare interface Excel$CalculatedItems {
_Add(Excel$Name: string, Formula: string): Excel$PivotItem,
_Default(Field: number | string): Excel$PivotItem,

/**
 * @param UseStandardFormula [UseStandardFormula=false]
 */
Add(
Excel$Name: string,
Formula: string,
UseStandardFormula?: boolean): Excel$PivotItem,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$PivotItem,
+Parent: any,
(Field: number | string): Excel$PivotItem
} 

declare class Excel$CalculatedMember  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
DisplayFolder: string;
Dynamic: boolean;
FlattenHierarchies: boolean;
Formula: string;
HierarchizeDistinct: boolean;
IsValid: boolean;
Excel$Name: string;
Parent: any;
SolveOrder: number;
SourceName: string;
Type: Excel$XlCalculatedMemberType
}

declare interface Excel$CalculatedMembers {
_Add(
Excel$Name: string,
Formula: string,
SolveOrder?: any,
Type?: any): Excel$CalculatedMember,
_Default(Index: any): Excel$CalculatedMember,
Add(
Excel$Name: string,
Formula: string,
SolveOrder?: number,
Type?: Excel$XlCalculatedMemberType,
Dynamic?: boolean,
DisplayFolder?: string,
HierarchizeDistinct?: boolean): Excel$CalculatedMember,

/**
 * @version 2013
 */
AddCalculatedMember(
Excel$Name: string,
Formula: string,
SolveOrder?: number,
Type?: Excel$XlCalculatedMemberType,
DisplayFolder?: string,
MeasureGroup?: any,
ParentMember?: any,
NumberFormat?: any): Excel$CalculatedMember,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$CalculatedMember,
+Parent: any,
(Index: number | string): Excel$CalculatedMember
} 

declare class Excel$CalloutFormat  {
constructor(): this;
Accent: Office.MsoTriState;
Angle: Office.MsoCalloutAngleType;
Excel$Application: any;
AutoAttach: Office.MsoTriState;
AutoLength: Office.MsoTriState;
AutomaticLength(): void;
Excel$Border: Office.MsoTriState;
Creator: number;
CustomDrop(Drop: number): void;
CustomLength(Length: number): void;
Drop: number;
DropType: Office.MsoCalloutDropType;
Gap: number;
Length: number;
Parent: any;
PresetDrop(DropType: Office.MsoCalloutDropType): void;
Type: Office.MsoCalloutType
}

declare class Excel$CellFormat  {
constructor(): this;
AddIndent: boolean;
Excel$Application: Excel$Application;
Excel$Borders: Excel$Borders;
Clear(): void;
Creator: Excel$XlCreator;
Excel$Font: Excel$Font;
FormulaHidden: boolean | null;
HorizontalAlignment: Excel$HorizontalAlignments;
IndentLevel: 0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15;
Excel$Interior: Excel$Interior;
Locked: boolean | null;
MergeCells: boolean;
NumberFormat: string | null;
NumberFormatLocal: string | null;
Orientation: number | Excel$XlOrientation;
Parent: any;
ShrinkToFit: boolean | null;
VerticalAlignment: Excel$VerticalAlignments;
WrapText: boolean | null
}

declare class Excel$Characters  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Count: number;
Creator: Excel$XlCreator;
Delete(): null;
Excel$Font: Excel$Font;
Insert(String: string | null): string;
Parent: any;
PhoneticCharacters: string;
Text: string
}

declare class Excel$Chart  {
constructor(): this;
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;

/**
 * @param Type [Type=2]
 */
_ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: any,
AutoText?: any,
HasLeaderLines?: any): void;
_CodeName: string;
_Evaluate(Excel$Name: any): any;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void;
_Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any): void;
_SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any): void;
Activate(): void;
Excel$Application: Excel$Application;
ApplyChartTemplate(Filename: string): void;
ApplyCustomType(ChartType: Excel$XlChartType, TypeName?: any): void;

/**
 * @param Type [Type=2]
 */
ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: boolean,
AutoText?: boolean,
HasLeaderLines?: boolean,
ShowSeriesName?: boolean,
ShowCategoryName?: boolean,
ShowValue?: boolean,
ShowPercentage?: boolean,
ShowBubbleSize?: boolean,
Separator?: string): void;
ApplyLayout(
Layout: 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10,
ChartType?: Excel$XlChartType): void;
Arcs(Index?: any): any;
Area3DGroup: Excel$ChartGroup;
AreaGroups(Index?: any): any;
AutoFormat(Gallery: number, Format?: any): void;
AutoScaling: boolean;

/**
 * @param AxisGroup [AxisGroup=1]
 */
Axes(
Type?: Excel$XlAxisType,
AxisGroup?: Excel$XlAxisGroup): Excel$Axes | Excel$Axis;
BackWall: Excel$Walls;
Bar3DGroup: Excel$ChartGroup;
BarGroups(Index?: any): any;
BarShape: Excel$XlBarShape;
Buttons(Index?: any): any;
Excel$ChartArea: Excel$ChartArea;
ChartObjects(Index?: SafeArray<string | number>): Excel$ChartObjects;
ChartObjects(Index: string | number): Excel$ChartObject;
ChartStyle: 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15
| 16
| 17
| 18
| 19
| 20
| 21
| 22
| 23
| 24
| 25
| 26
| 27
| 28
| 29
| 30
| 31
| 32
| 33
| 34
| 35
| 36
| 37
| 38
| 39
| 40
| 41
| 42
| 43
| 44
| 45
| 46
| 47
| 48;
Excel$ChartTitle: Excel$ChartTitle;
ChartType: Excel$XlChartType;
ChartWizard(
Source?: Excel$Range,
Gallery?: Excel$XlChartType,
Format?: 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10,
PlotBy?: Excel$XlRowCol,
CategoryLabels?: number,
SeriesLabels?: number,
HasLegend?: boolean,
Title?: string,
CategoryTitle?: string,
ValueTitle?: string,
ExtraTitle?: string): void;
CheckBoxes(Index?: any): any;
CheckSpelling(
CustomDictionary?: string,
IgnoreUppercase?: boolean,
AlwaysSuggest?: boolean,
SpellLang?: Office.MsoLanguageID): void;
ClearToMatchStyle(): void;
CodeName: string;
Column3DGroup: Excel$ChartGroup;
ColumnGroups(Index?: any): any;
Copy(Before?: Excel$Sheet): void;
Copy(Before: void, After: Excel$Sheet): void;
CopyChartBuild(): void;

/**
 * @param Appearance [Appearance=1]
 * @param Format [Format=-4147]
 * @param Size [Size=2]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat,
Size?: Excel$XlPictureAppearance): void;
Excel$Corners: Excel$Corners;

/**
 * @param Appearance [Appearance=1]
 * @param Size [Size=1]
 */
CreatePublisher(
Edition: any,
Appearance?: Excel$XlPictureAppearance,
Size?: Excel$XlPictureAppearance,
ContainsPICT?: any,
ContainsBIFF?: any,
ContainsRTF?: any,
ContainsVALU?: any): void;
Creator: Excel$XlCreator;
Excel$DataTable: Excel$DataTable;
Delete(): void;
DepthPercent: number;
Deselect(): void;
DisplayBlanksAs: Excel$XlDisplayBlanksAs;
DoughnutGroups(Index?: any): any;
DrawingObjects(Index?: any): any;
Drawings(Index?: any): any;
DropDowns(Index?: any): any;
Dummy24: boolean;
Dummy25: boolean;
Elevation: number;
Evaluate(Excel$Name: string): any;
Export(Filename: string, FilterName?: string, Interactive?: boolean): boolean;
ExportAsFixedFormat(
Type: Excel$XlFixedFormatType,
Filename?: string,
Quality?: Excel$XlFixedFormatQuality,
IncludeDocProperties?: boolean,
IgnorePrintAreas?: boolean,
From?: number,
To?: number,
OpenAfterPublish?: boolean,
FixedFormatExtClassPtr?: any): void;
Excel$Floor: Excel$Floor;
GapDepth: number;
GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
GroupBoxes(Index?: any): any;
GroupObjects(Index?: any): any;
HasAxis(Index1?: Excel$XlAxisType, Index2?: Excel$XlAxisGroup): boolean;
HasDataTable: boolean;
HasLegend: boolean;
HasPivotFields: boolean;
HasTitle: boolean;
HeightPercent: number;
Excel$Hyperlinks: Excel$Hyperlinks;
Index: number;
Labels(Index?: any): any;
Excel$Legend: Excel$Legend;
Line3DGroup: Excel$ChartGroup;
LineGroups(Index?: any): any;
Lines(Index?: any): any;
ListBoxes(Index?: any): any;
Location(
Where: Excel$XlChartLocation.xlLocationAsObject,
Excel$Name: string): Excel$Chart;
Location(Where: Excel$XlChartLocation, Excel$Name?: string): Excel$Chart;
MailEnvelope: Office.MsoEnvelope;
Move(Before?: Excel$Sheet, After?: Excel$Sheet): void;
Excel$Name: string;
Next: Excel$Sheet;
OLEObjects(Index: number | string): Excel$OLEObject;
OLEObjects(): Excel$OLEObjects;
OnDoubleClick: string;
OnSheetActivate: string;
OnSheetDeactivate: string;
OptionButtons(Index?: any): any;
Ovals(Index?: any): any;
Excel$PageSetup: Excel$PageSetup;
Parent: any;
Paste(
Type?: Excel$XlPasteType.xlPasteAll | Excel$XlPasteType.xlPasteFormats | Excel$XlPasteType.xlPasteFormulas): void;
Perspective: number;
Pictures(Index?: any): any;
Pie3DGroup: Excel$ChartGroup;
PieGroups(Index?: any): any;
Excel$PivotLayout: Excel$PivotLayout;
Excel$PlotArea: Excel$PlotArea;
PlotBy: Excel$XlRowCol;
PlotVisibleOnly: boolean;
Previous: Excel$Sheet;
PrintedCommentPages: number;
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>): any;
PrintPreview(EnableChanges?: boolean): void;

/**
 * @param Scenarios Passing `true` for this argument is only valid on worksheets
 */
Protect(
Password?: string,
DrawingObjects?: boolean,
Contents?: boolean,
Excel$Scenarios?: false,
UserInterfaceOnly?: boolean): void;
ProtectContents: boolean;
ProtectData: boolean;
ProtectDrawingObjects: boolean;
ProtectFormatting: boolean;
ProtectGoalSeek: boolean;
ProtectionMode: boolean;
ProtectSelection: boolean;
RadarGroups(Index?: any): any;
Rectangles(Index?: any): any;
Refresh(): void;

/**
 * `true` if the chart axes are at right angles, independent of chart rotation or elevation. Applies only to 3-D line, column, and bar charts.
 */
RightAngleAxes: boolean;
Rotation: number;
SaveAs(
Filename: string,
FileFormat?: Excel$XlFileFormat,
Password?: string,
WriteResPassword?: string,
ReadOnlyRecommended?: boolean,
CreateBackup?: boolean,
AddToMru?: boolean,
TextCodepage?: any,
TextVisualLayout?: any,
Local?: any): void;
SaveChartTemplate(Filename: string): void;
Scripts: Office.Scripts;
ScrollBars(Index?: any): any;
Select(Replace?: boolean): void;
SeriesCollection(Index?: number | string): Excel$SeriesCollection | Excel$Series;
SetBackgroundPicture(Filename: string): void;
SetDefaultChart(Excel$Name: any): void;
SetElement(Element: Office.MsoChartElementType): void;
SetSourceData(Source: Excel$Range, PlotBy?: Excel$XlRowCol): void;
Excel$Shapes: Excel$Shapes;
ShowAllFieldButtons: boolean;
ShowAxisFieldButtons: boolean;
ShowDataLabelsOverMaximum: boolean;
ShowLegendFieldButtons: boolean;
ShowReportFilterFieldButtons: boolean;
ShowValueFieldButtons: boolean;
ShowWindow: boolean;
SideWall: Excel$Walls;
SizeWithWindow: boolean;
Spinners(Index?: any): any;
SubType: number;
SurfaceGroup: Excel$ChartGroup;
Excel$Tab: Excel$Tab;
TextBoxes(Index?: any): any;
Type: number;
Unprotect(Password?: string): void;
Visible: Excel$XlSheetVisibility;
Excel$Walls: Excel$Walls;
WallsAndGridlines2D: boolean;
XYGroups(Index?: any): any
}

declare class Excel$ChartArea  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Clear(): any;
ClearContents(): any;
ClearFormats(): any;
Copy(): any;
Creator: Excel$XlCreator;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Height: number;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
Parent: any;
RoundedCorners: boolean;
Select(): any;
Shadow: boolean;
Top: number;
Width: number
}

declare class Excel$ChartColorFormat  {
constructor(): this;
_Default: number;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Parent: any;
RGB: number;
SchemeColor: number;
Type: number
}

declare class Excel$ChartFillFormat  {
constructor(): this;
Excel$Application: Excel$Application;
BackColor: Excel$ChartColorFormat;
Creator: Excel$XlCreator;
ForeColor: Excel$ChartColorFormat;
GradientColorType: Office.MsoGradientColorType;
GradientDegree: number;
GradientStyle: Office.MsoGradientStyle;
GradientVariant: number;
OneColorGradient(Excel$Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
Parent: any;
Pattern: Office.MsoPatternType;
Patterned(Pattern: Office.MsoPatternType): void;
PresetGradient(
Excel$Style: Office.MsoGradientStyle,
Variant: number,
PresetGradientType: Office.MsoPresetGradientType): void;
PresetGradientType: Office.MsoPresetGradientType;
PresetTexture: Office.MsoPresetTexture;
PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
Solid(): void;
TextureName: string;
TextureType: Office.MsoTextureType;
TwoColorGradient(Excel$Style: Office.MsoGradientStyle, Variant: number): void;
Type: Office.MsoFillType;
UserPicture(
PictureFile?: any,
Excel$PictureFormat?: any,
PictureStackUnit?: any,
PicturePlacement?: any): void;
UserTextured(TextureFile: string): void;
Visible: Office.MsoTriState
}

declare class Excel$ChartFormat  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Fill: Excel$FillFormat;
Glow: Office.GlowFormat;
Line: Excel$LineFormat;
Parent: any;
Excel$PictureFormat: Excel$PictureFormat;
Shadow: Excel$ShadowFormat;
SoftEdge: Office.SoftEdgeFormat;
Excel$TextFrame2: Excel$TextFrame2;
ThreeD: Excel$ThreeDFormat
}

declare class Excel$ChartGroup  {
constructor(): this;
Excel$Application: Excel$Application;
AxisGroup: Excel$XlAxisGroup;
BubbleScale: number;
Creator: Excel$XlCreator;
DoughnutHoleSize: number;
Excel$DownBars: Excel$DownBars;
Excel$DropLines: Excel$DropLines;
FirstSliceAngle: number;
GapWidth: number;
Has3DShading: boolean;
HasDropLines: boolean;
HasHiLoLines: boolean;
HasRadarAxisLabels: boolean;
HasSeriesLines: boolean;
HasUpDownBars: boolean;
Excel$HiLoLines: Excel$HiLoLines;
Index: number;
Overlap: number;
Parent: any;
RadarAxisLabels: Excel$TickLabels;
SecondPlotSize: number;
SeriesCollection(Index?: number | string): Excel$SeriesCollection | Excel$Series;
Excel$SeriesLines: Excel$SeriesLines;
ShowNegativeBubbles: boolean;
SizeRepresents: Excel$XlSizeRepresents;
SplitType: Excel$XlChartSplitType;
SplitValue: number;
SubType: number;
Type: number;
Excel$UpBars: Excel$UpBars;
VaryByCategories: boolean
}

declare interface Excel$ChartGroups {
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$ChartGroup,
+Parent: any,
(Index: number): Excel$ChartGroup
} 

declare class Excel$ChartObject  {
constructor(): this;
_Copy(): any;
Activate(): any;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
BottomRightCell: Excel$Range;
BringToFront(): any;
Excel$Chart: Excel$Chart;
Copy(): any;

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any;
Creator: Excel$XlCreator;
Cut(): any;
Delete(): any;
Duplicate(): any;
Enabled: boolean;
Height: number;
Index: number;
Excel$Interior: Excel$Interior;
Left: number;
Locked: boolean;
Excel$Name: string;
OnAction: string;
Parent: any;
Placement: Excel$XlPlacement;
PrintObject: boolean;
ProtectChartObject: boolean;
RoundedCorners: boolean;
Select(Replace?: boolean): any;
SendToBack(): any;
Shadow: boolean;
Excel$ShapeRange: Excel$ShapeRange;
Top: number;
TopLeftCell: Excel$Range;
Visible: boolean;
Width: number;
ZOrder: number
}

declare interface Excel$ChartObjects {
_Copy(): any,
_Default(Index: any): any,
Add(Left: number, Top: number, Width: number, Height: number): Excel$ChartObject,
+Excel$Application: Excel$Application,
+Excel$Border: Excel$Border,
BringToFront(): any,
Copy(): any,

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any,
+Count: number,
+Creator: Excel$XlCreator,
Cut(): any,
Delete(): any,
Duplicate(): any,
Enabled: boolean,
Group(): Excel$GroupObject,
Height: number,
+Excel$Interior: Excel$Interior,
Item(Index: number | string): Excel$ChartObject,
Left: number,
Locked: boolean,
OnAction: string,
+Parent: any,
Placement: Excel$XlPlacement,
PrintObject: boolean,
ProtectChartObject: boolean,
RoundedCorners: boolean,
Select(Replace?: boolean): any,
SendToBack(): any,
Shadow: boolean,
+Excel$ShapeRange: Excel$ShapeRange,
Top: number,
Visible: boolean,
Width: number,
(Index: number | string): any
} 

declare class Excel$ChartTitle  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Caption: string;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Height: number;
HorizontalAlignment: Excel$HorizontalAlignments;
IncludeInLayout: boolean;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
Orientation: any;
Parent: any;
Position: Excel$XlChartElementPosition;
ReadingOrder: number;
Select(): any;
Shadow: boolean;
Text: string;
Top: number;
VerticalAlignment: Excel$VerticalAlignments;
Width: number
}

declare class Excel$ColorFormat  {
constructor(): this;
Excel$Application: any;
Brightness: number;
Creator: number;
ObjectThemeColor: Office.MsoThemeColorIndex;
Parent: any;
RGB: Office.MsoRGBType;
SchemeColor: number;
TintAndShade: number;
Type: Office.MsoColorType
}

declare class Excel$ColorScale  {
constructor(): this;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Excel$ColorScaleCriteria: Excel$ColorScaleCriteria;
Creator: Excel$XlCreator;
Delete(): void;
Formula: string;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
Parent: any;
Priority: number;
PTCondition: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
StopIfTrue: boolean;
Type: number
}

declare interface Excel$ColorScaleCriteria {
_Default(Index: any): Excel$ColorScaleCriterion,
+Count: number,
Item(Index: number): Excel$ColorScaleCriterion,
(Index: number): Excel$ColorScaleCriterion
} 

declare class Excel$ColorScaleCriterion  {
constructor(): this;
Excel$FormatColor: Excel$FormatColor;
Index: number;
Type: Excel$XlConditionValueTypes;
Value: any
}

declare class Excel$Comment  {
constructor(): this;
Excel$Application: Excel$Application;
Author: string;
Creator: Excel$XlCreator;
Delete(): void;
Next(): Excel$Comment;
Parent: any;
Previous(): Excel$Comment;
Excel$Shape: Excel$Shape;
Text(Text?: string, Start?: number, Overwrite?: boolean): string;
Visible: boolean
}

declare interface Excel$Comments {
_Default(Index: number): Excel$Comment,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Comment,
+Parent: any,
(Index: number): Excel$Comment
} 

declare class Excel$ConditionValue  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Modify(
newtype: Excel$XlConditionValueTypes.xlConditionValueLowestValue | Excel$XlConditionValueTypes.xlConditionValueHighestValue): void;
Modify(
newtype: Excel$XlConditionValueTypes.xlConditionValueNumber | Excel$XlConditionValueTypes.xlConditionValuePercent | Excel$XlConditionValueTypes.xlConditionValuePercentile,
newvalue: number): void;
Modify(
newtype: Excel$XlConditionValueTypes.xlConditionValueFormula,
newvalue: string): void;
Modify(newtype: Excel$XlConditionValueTypes, newvalue?: any): void;
Parent: any;
Type: Excel$XlConditionValueTypes;
Value: number | string
}

declare interface Excel$Connections {
_Default(Index: any): Excel$WorkbookConnection,
Add(
Excel$Name: string,
Description: string,
ConnectionString: string,
CommandText: string,
lCmdtype?: any): Excel$WorkbookConnection,
AddFromFile(Filename: string): Excel$WorkbookConnection,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$WorkbookConnection,
+Parent: any,
(Index: number): Excel$WorkbookConnection
} 

declare class Excel$ConnectorFormat  {
constructor(): this;
Excel$Application: Excel$Application;
BeginConnect(ConnectedShape: Excel$Shape, ConnectionSite: number): void;
BeginConnected: Office.MsoTriState;
BeginConnectedShape: Excel$Shape;
BeginConnectionSite: number;
BeginDisconnect(): void;
Creator: Excel$XlCreator;
EndConnect(ConnectedShape: Excel$Shape, ConnectionSite: number): void;
EndConnected: Office.MsoTriState;
EndConnectedShape: Excel$Shape;
EndConnectionSite: number;
EndDisconnect(): void;
Parent: any;
Type: Office.MsoConnectorType
}

declare class Excel$ControlFormat  {
constructor(): this;
_Default: number;
AddItem(Text: string, Index?: number): void;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DropDownLines: number;
Enabled: boolean;
LargeChange: number;
LinkedCell: string;
List(Index: number): string;
List(): SafeArray<string>;
ListCount: number;
ListFillRange: string;
ListIndex: number;
LockedText: boolean;
Max: number;
Min: number;
MultiSelect: number;
Parent: any;
PrintObject: boolean;
RemoveAllItems(): void;
RemoveItem(Index: number, Count?: number): void;
SmallChange: number;
Value: number
}

declare class Excel$Corners  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$CubeField  {
constructor(): this;
_AddMemberPropertyField(Property: string, PropertyOrder?: any): void;
_Caption: string;
AddMemberPropertyField(
Property: string,
PropertyOrder?: number,
PropertyDisplayedIn?: Excel$XlPropertyDisplayedIn): void;
AllItemsVisible: boolean;
Excel$Application: Excel$Application;
Caption: string;
ClearManualFilter(): void;
CreatePivotFields(): void;
Creator: Excel$XlCreator;
CubeFieldSubType: Excel$XlCubeFieldSubType;
CubeFieldType: Excel$XlCubeFieldType;
CurrentPageName: string;
Delete(): void;
DragToColumn: boolean;
DragToData: boolean;
DragToHide: boolean;
DragToPage: boolean;
DragToRow: boolean;
EnableMultiplePageItems: boolean;
FlattenHierarchies: boolean;
HasMemberProperties: boolean;
HiddenLevels: number;
HierarchizeDistinct: boolean;
IncludeNewItemsInFilter: boolean;
IsDate: boolean;
LayoutForm: Excel$XlLayoutFormType;
LayoutSubtotalLocation: Excel$XlSubtototalLocationType;
Excel$Name: string;
Orientation: Excel$XlPivotFieldOrientation;
Parent: any;
Excel$PivotFields: Excel$PivotFields;
Position: number;
ShowInFieldList: boolean;
Excel$TreeviewControl: Excel$TreeviewControl;
Value: string
}

declare interface Excel$CubeFields {
_Default(Index: any): Excel$CubeField,
AddSet(Excel$Name: string, Caption: string): Excel$CubeField,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$CubeField,
+Parent: any,
(Index: number | string): Excel$CubeField
} 

declare interface Excel$CustomProperties {
_Default(Index: any): Excel$CustomProperty,
Add(Excel$Name: string, Value: any): Excel$CustomProperty,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$CustomProperty,
+Parent: any,
(Index: number | string): Excel$CustomProperty
} 

declare class Excel$CustomProperty  {
constructor(): this;
_Default: any;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Excel$Name: string;
Parent: any;
Value: any
}

declare class Excel$CustomView  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Excel$Name: string;
Parent: any;
PrintSettings: boolean;
RowColSettings: boolean;
Show(): void
}

declare interface Excel$CustomViews {
_Default(ViewName: any): Excel$CustomView,
Add(
ViewName: string,
PrintSettings?: boolean,
RowColSettings?: boolean): Excel$CustomView,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(ViewName: number | string): Excel$CustomView,
+Parent: any,
(ViewName: number | string): Excel$CustomView
} 

declare class Excel$Databar  {
constructor(): this;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
AxisColor: Excel$FormatColor;
AxisPosition: Excel$XlDataBarAxisPosition;
BarBorder: Excel$DataBarBorder;
BarColor: Excel$FormatColor;
BarFillType: Excel$XlDataBarFillType;
Creator: Excel$XlCreator;
Delete(): void;
Direction: number;
Formula: string;
MaxPoint: Excel$ConditionValue;
MinPoint: Excel$ConditionValue;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
Excel$NegativeBarFormat: Excel$NegativeBarFormat;
Parent: any;
PercentMax: number;
PercentMin: number;
Priority: number;
PTCondition: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
ShowValue: boolean;
StopIfTrue: boolean;
Type: number
}

declare class Excel$DataBarBorder  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$FormatColor;
Creator: Excel$XlCreator;
Parent: any;
Type: Excel$XlDataBarBorderType
}

declare class Excel$DataLabel  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
AutoText: boolean;
Excel$Border: Excel$Border;
Caption: string;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Height: number;
HorizontalAlignment: Excel$HorizontalAlignments;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
NumberFormat: string;
NumberFormatLinked: boolean;
NumberFormatLocal: string;
Orientation: Excel$XlOrientation;
Parent: any;
Position: Excel$XlDataLabelPosition;
ReadingOrder: number;
Select(): any;
Separator: string | Excel$XlDataLabelSeparator;
Shadow: boolean;
ShowBubbleSize: boolean;
ShowCategoryName: boolean;
ShowLegendKey: boolean;
ShowPercentage: boolean;
ShowSeriesName: boolean;
ShowValue: boolean;
Text: string;
Top: number;
Type: any;
VerticalAlignment: Excel$VerticalAlignments;
Width: number
}

declare interface Excel$DataLabels {
_Default(Index: any): Excel$DataLabel,
+Excel$Application: Excel$Application,
AutoScaleFont: any,
AutoText: boolean,
+Excel$Border: Excel$Border,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): any,
+Fill: Excel$ChartFillFormat,
+Excel$Font: Excel$Font,
+Format: Excel$ChartFormat,
HorizontalAlignment: Excel$HorizontalAlignments,
+Excel$Interior: Excel$Interior,
Item(Index: number): Excel$DataLabel,
+Excel$Name: string,
NumberFormat: string,
NumberFormatLinked: boolean,
NumberFormatLocal: string,
Orientation: Excel$XlOrientation,
+Parent: any,
Position: Excel$XlDataLabelPosition,
ReadingOrder: number,
Select(): any,
Separator: string | Excel$XlDataLabelSeparator,
Shadow: boolean,
ShowBubbleSize: boolean,
ShowCategoryName: boolean,
ShowLegendKey: boolean,
ShowPercentage: boolean,
ShowSeriesName: boolean,
ShowValue: boolean,
Type: any,
VerticalAlignment: Excel$VerticalAlignments,
(Index: number): Excel$DataLabel
} 

declare class Excel$DataTable  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): void;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
HasBorderHorizontal: boolean;
HasBorderOutline: boolean;
HasBorderVertical: boolean;
Parent: any;
Select(): void;
ShowLegendKey: boolean
}

declare class Excel$DefaultWebOptions  {
constructor(): this;
AllowPNG: boolean;
AlwaysSaveInDefaultEncoding: boolean;
Excel$Application: Excel$Application;
CheckIfOfficeIsHTMLEditor: boolean;
Creator: Excel$XlCreator;
DownloadComponents: boolean;
Encoding: Office.MsoEncoding;
FolderSuffix: string;
Fonts: Office.WebPageFonts;
LoadPictures: boolean;
LocationOfComponents: string;
OrganizeInFolder: boolean;
Parent: any;
PixelsPerInch: number;
RelyOnCSS: boolean;
RelyOnVML: boolean;
SaveHiddenData: boolean;
SaveNewWebPagesAsWebArchives: boolean;
ScreenSize: Office.MsoScreenSize;
TargetBrowser: Office.MsoTargetBrowser;
UpdateLinksOnSave: boolean;
UseLongFileNames: boolean
}

declare class Excel$Diagram  {
constructor(): this;
Excel$Application: Excel$Application;
AutoFormat: Office.MsoTriState;
AutoLayout: Office.MsoTriState;
Convert(Type: Office.MsoDiagramType): void;
Creator: Excel$XlCreator;
FitText(): void;
Nodes: Excel$DiagramNodes;
Parent: any;
Reverse: Office.MsoTriState;
Type: Office.MsoDiagramType
}

declare class Excel$DiagramNode  {
constructor(): this;

/**
 * @param pos [pos=2]
 * @param nodeType [nodeType=1]
 */
AddNode(
pos?: Office.MsoRelativeNodePosition,
nodeType?: Office.MsoDiagramNodeType): Excel$DiagramNode;
Excel$Application: any;
Children: Excel$DiagramNodeChildren;

/**
 * @param pos [pos=2]
 */
CloneNode(
copyChildren: boolean,
pTargetNode: Excel$DiagramNode,
pos?: Office.MsoRelativeNodePosition): Excel$DiagramNode;
Creator: number;
Delete(): void;
Excel$Diagram: Office.IMsoDiagram;
Layout: Office.MsoOrgChartLayoutType;
MoveNode(pTargetNode: Excel$DiagramNode, pos: Office.MsoRelativeNodePosition): void;
NextNode(): Excel$DiagramNode;
Parent: any;
PrevNode(): Excel$DiagramNode;
ReplaceNode(pTargetNode: Excel$DiagramNode): void;
Root: Excel$DiagramNode;
Excel$Shape: Excel$Shape;

/**
 * @param swapChildren [swapChildren=true]
 */
SwapNode(pTargetNode: Excel$DiagramNode, swapChildren?: boolean): void;
TextShape: Excel$Shape;
TransferChildren(pReceivingNode: Excel$DiagramNode): void
}

declare interface Excel$DiagramNodeChildren {

/**
 * @param Index [Index=-1]
 * @param nodeType [nodeType=1]
 */
AddNode(Index?: any, nodeType?: Office.MsoDiagramNodeType): Excel$DiagramNode,
+Excel$Application: any,
+Count: number,
+Creator: number,
+FirstChild: Excel$DiagramNode,
Item(Index: any): Excel$DiagramNode,
+LastChild: Excel$DiagramNode,
+Parent: any,
SelectAll(): void,
(Index: any): Excel$DiagramNode
} 

declare interface Excel$DiagramNodes {
+Excel$Application: any,
+Count: number,
+Creator: number,
Item(Index: any): Excel$DiagramNode,
+Parent: any,
SelectAll(): void,
(Index: any): Excel$DiagramNode
} 

declare class Excel$Dialog  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Parent: any;
Show(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): boolean
}

declare class Excel$DialogFrame  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Characters(Start?: any, Length?: any): Excel$Characters;
CheckSpelling(
CustomDictionary?: any,
IgnoreUppercase?: any,
AlwaysSuggest?: any,
SpellLang?: any): any;

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any;
Creator: Excel$XlCreator;
Height: number;
Left: number;
Locked: boolean;
LockedText: boolean;
Excel$Name: string;
OnAction: string;
Parent: any;
Select(Replace?: any): any;
Excel$ShapeRange: Excel$ShapeRange;
Text: string;
Top: number;
Width: number
}

declare interface Excel$Dialogs {
_Default(Index: Excel$XlBuiltInDialog): Excel$Dialog,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: Excel$XlBuiltInDialog): Excel$Dialog,
+Parent: any,
(Index: Excel$XlBuiltInDialog): Excel$Dialog
} 

declare class Excel$DialogSheet  {
constructor(): this;
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
_CheckSpelling(
CustomDictionary?: any,
IgnoreUppercase?: any,
AlwaysSuggest?: any,
SpellLang?: any,
IgnoreFinalYaa?: any,
SpellScript?: any): void;
_CodeName: string;
_DisplayRightToLeft: number;
_Evaluate(Excel$Name: any): any;
_PasteSpecial(
Format?: any,
Link?: any,
DisplayAsIcon?: any,
IconFileName?: any,
IconIndex?: any,
IconLabel?: any): void;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void;
_Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any): void;
_SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any): void;
Activate(): void;
Excel$Application: Excel$Application;
Arcs(Index?: any): any;
Excel$AutoFilter: Excel$AutoFilter;
Buttons(Index?: any): any;
ChartObjects(Index?: any): any;
CheckBoxes(Index?: any): any;
CheckSpelling(
CustomDictionary?: any,
IgnoreUppercase?: any,
AlwaysSuggest?: any,
SpellLang?: any): void;
CircleInvalid(): void;
ClearCircles(): void;
CodeName: string;
Excel$Comments: Excel$Comments;
Copy(Before?: Excel$Sheet): void;
Copy(Before: void, After: Excel$Sheet): void;
Creator: Excel$XlCreator;
Excel$CustomProperties: Excel$CustomProperties;
DefaultButton: any;
Delete(): void;
Excel$DialogFrame: Excel$DialogFrame;
DisplayAutomaticPageBreaks: boolean;
DisplayPageBreaks: boolean;
DisplayRightToLeft: boolean;
DrawingObjects(Index?: any): any;
Drawings(Index?: any): any;
DropDowns(Index?: any): any;
EditBoxes(Index?: any): any;
EnableAutoFilter: boolean;
EnableCalculation: boolean;
EnableFormatConditionsCalculation: boolean;
EnableOutlining: boolean;
EnablePivotTable: boolean;
EnableSelection: Excel$XlEnableSelection;
Evaluate(Excel$Name: any): any;
ExportAsFixedFormat(
Type: Excel$XlFixedFormatType,
Filename?: any,
Quality?: any,
IncludeDocProperties?: any,
IgnorePrintAreas?: any,
From?: any,
To?: any,
OpenAfterPublish?: any,
FixedFormatExtClassPtr?: any): void;
Focus: any;
GroupBoxes(Index?: any): any;
GroupObjects(Index?: any): any;
Hide(Cancel?: any): boolean;
Excel$HPageBreaks: Excel$HPageBreaks;
Excel$Hyperlinks: Excel$Hyperlinks;
Index: number;
Labels(Index?: any): any;
Lines(Index?: any): any;
ListBoxes(Index?: any): any;
MailEnvelope: Office.MsoEnvelope;
Move(Before?: Excel$Sheet, After?: Excel$Sheet): void;
Excel$Name: string;
Excel$Names: Excel$Names;
Next: any;
OLEObjects(Index?: any): any;
OnDoubleClick: string;
OnSheetActivate: string;
OnSheetDeactivate: string;
OptionButtons(Index?: any): any;
Ovals(Index?: any): any;
Excel$PageSetup: Excel$PageSetup;
Parent: any;
Paste(Destination?: any, Link?: any): void;
PasteSpecial(
Format?: any,
Link?: any,
DisplayAsIcon?: any,
IconFileName?: any,
IconIndex?: any,
IconLabel?: any,
NoHTMLFormatting?: any): void;
Pictures(Index?: any): any;
Previous: any;
PrintedCommentPages: number;
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>): any;
PrintPreview(EnableChanges?: any): void;
Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any,
AllowFormattingCells?: any,
AllowFormattingColumns?: any,
AllowFormattingRows?: any,
AllowInsertingColumns?: any,
AllowInsertingRows?: any,
AllowInsertingHyperlinks?: any,
AllowDeletingColumns?: any,
AllowDeletingRows?: any,
AllowSorting?: any,
AllowFiltering?: any,
AllowUsingPivotTables?: any): void;
ProtectContents: boolean;
ProtectDrawingObjects: boolean;
Excel$Protection: Excel$Protection;
ProtectionMode: boolean;
ProtectScenarios: boolean;
Excel$QueryTables: Excel$QueryTables;
Rectangles(Index?: any): any;
ResetAllPageBreaks(): void;
SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any,
Local?: any): void;
Scripts: Office.Scripts;
ScrollArea: string;
ScrollBars(Index?: any): any;
Select(Replace?: any): void;
Excel$Shapes: Excel$Shapes;
Show(): boolean;
Excel$SmartTags: Excel$SmartTags;
Excel$Sort: Excel$Sort;
Spinners(Index?: any): any;
Excel$Tab: Excel$Tab;
TextBoxes(Index?: any): any;
Unprotect(Password?: any): void;
Visible: Excel$XlSheetVisibility;
Excel$VPageBreaks: Excel$VPageBreaks
}

declare class Excel$DialogSheetView  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Parent: any;
Excel$Sheet: Excel$DialogSheet
}

declare class Excel$DisplayFormat  {
constructor(): this;
AddIndent: boolean | null;
Excel$Application: Excel$Application;
Excel$Borders: Excel$Borders;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
Excel$Font: Excel$Font;
FormulaHidden: boolean | null;
HorizontalAlignment: any;
IndentLevel: any;
Excel$Interior: Excel$Interior;
Locked: boolean | null;
MergeCells: boolean;
NumberFormat: string | null;
NumberFormatLocal: string | null;
Orientation: any;
Parent: any;
ReadingOrder: number;
ShrinkToFit: boolean;
Excel$Style: Excel$Style;
VerticalAlignment: any;
WrapText: boolean
}

declare class Excel$DisplayUnitLabel  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Caption: string;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Height: number;
HorizontalAlignment: Excel$HorizontalAlignments;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
Orientation: Excel$XlOrientation;
Parent: any;
Position: Excel$XlChartElementPosition;
ReadingOrder: number;
Select(): any;
Shadow: boolean;
Text: string;
Top: number;
VerticalAlignment: Excel$VerticalAlignments;
Width: number
}

declare class Excel$DownBars  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Excel$Interior: Excel$Interior;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$DropLines  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Format: Excel$ChartFormat;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$Error  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Ignore: boolean;
Parent: any;
Value: boolean
}

declare class Excel$ErrorBars  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Delete(): any;
EndStyle: Excel$XlEndStyleCap;
Format: Excel$ChartFormat;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$ErrorCheckingOptions  {
constructor(): this;
Excel$Application: Excel$Application;
BackgroundChecking: boolean;
Creator: Excel$XlCreator;
EmptyCellReferences: boolean;
EvaluateToError: boolean;
InconsistentFormula: boolean;
InconsistentTableFormula: boolean;
IndicatorColorIndex: Excel$XlColorIndex;
ListDataValidation: boolean;
NumberAsText: boolean;
OmittedCells: boolean;
Parent: any;
TextDate: boolean;
UnlockedFormulaCells: boolean
}

declare interface Excel$Errors {
_Default(Index: any): Excel$Error,
+Excel$Application: Excel$Application,
+Creator: Excel$XlCreator,
Item(Index: number | Excel$XlErrorChecks): Excel$Error,
+Parent: any,
(Index: number | Excel$XlErrorChecks): Excel$Error
} 

declare class Excel$FileExportConverter  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Description: string;
Extensions: string;
FileFormat: number;
Parent: any
}

declare interface Excel$FileExportConverters {
_Default(Index: any): Excel$FileExportConverter,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$FileExportConverter,
+Parent: any,
(Index: number): Excel$FileExportConverter
} 

declare class Excel$FillFormat  {
constructor(): this;
Excel$Application: any;
BackColor: Excel$ColorFormat;
Background(): void;
Creator: number;
ForeColor: Excel$ColorFormat;
GradientAngle: number;
GradientColorType: Office.MsoGradientColorType;
GradientDegree: number;
GradientStops: Office.GradientStops;
GradientStyle: Office.MsoGradientStyle;
GradientVariant: number;
OneColorGradient(Excel$Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
Parent: any;
Pattern: Office.MsoPatternType;
Patterned(Pattern: Office.MsoPatternType): void;
PictureEffects: Office.PictureEffects;
PresetGradient(
Excel$Style: Office.MsoGradientStyle,
Variant: number,
PresetGradientType: Office.MsoPresetGradientType): void;
PresetGradientType: Office.MsoPresetGradientType;
PresetTexture: Office.MsoPresetTexture;
PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
RotateWithObject: Office.MsoTriState;
Solid(): void;
TextureAlignment: Office.MsoTextureAlignment;
TextureHorizontalScale: number;
TextureName: string;
TextureOffsetX: number;
TextureOffsetY: number;
TextureTile: Office.MsoTriState;
TextureType: Office.MsoTextureType;
TextureVerticalScale: number;
Transparency: number;
TwoColorGradient(Excel$Style: Office.MsoGradientStyle, Variant: number): void;
Type: Office.MsoFillType;
UserPicture(PictureFile: string): void;
UserTextured(TextureFile: string): void;
Visible: Office.MsoTriState
}

declare class Excel$Filter  {
constructor(): this;
_Operator: Excel$XlAutoFilterOperator;
Excel$Application: Excel$Application;
Count: number;
Creator: Excel$XlCreator;
Criteria1: any;
Criteria2: any;
On: boolean;
Operator: Excel$XlAutoFilterOperator;
Parent: any
}

declare interface Excel$Filters {
_Default(Index: number): Excel$Filter,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Filter,
+Parent: any,
(Index: number): Excel$Filter
} 

declare class Excel$Floor  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Excel$Interior: Excel$Interior;
Excel$Name: string;
Parent: any;
Paste(): void;
PictureType: Excel$XlChartPictureType;
Select(): any;
Thickness: number
}

declare class Excel$Font  {
constructor(): this;
Excel$Application: Excel$Application;
Background: Excel$XlBackground;
Bold: boolean;
Color: Excel$XlRgbColor | number;
ColorIndex: number | Excel$XlColorIndex;
Creator: Excel$XlCreator;
FontStyle: "Regular" | "Italic" | "Bold" | "Bold Italic";
Italic: boolean;
Excel$Name: string;
OutlineFont: any;
Parent: any;
Shadow: any;
Size: number;
Strikethrough: boolean;
Subscript: boolean;
Superscript: boolean;
ThemeColor: Excel$XlThemeColor;
ThemeFont: Excel$XlThemeFont;
TintAndShade: number;
Underline: Excel$XlUnderlineStyle
}

declare class Excel$FormatColor  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$XlRgbColor | number;
ColorIndex: Excel$XlColorIndex;
Creator: Excel$XlCreator;
Parent: any;
ThemeColor: Excel$XlThemeColor;
TintAndShade: number
}

declare class Excel$FormatCondition  {
constructor(): this;
_Modify(
Type: Excel$XlFormatConditionType,
Operator?: any,
Formula1?: any,
Formula2?: any): void;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Excel$Borders: Excel$Borders;
Creator: Excel$XlCreator;
DateOperator: Excel$XlTimePeriods;
Delete(): void;
Excel$Font: Excel$Font;
Formula1: string;
Formula2: string;
Excel$Interior: Excel$Interior;
Modify(
Type: Excel$XlFormatConditionType.xlExpression,
Operator: void,
Formula1: string): void;
Modify(
Type: Excel$XlFormatConditionType,
Operator: Excel$XlFormatConditionOperator.xlBetween | Excel$XlFormatConditionOperator.xlNotBetween,
Formula1: string,
Formula2: string): void;
Modify(
Type: Excel$XlFormatConditionType,
Operator?: Excel$XlFormatConditionOperator,
Formula1?: string,
Formula2?: string,
String?: any,
Operator2?: any): void;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
NumberFormat: string;
Operator: number;
Parent: any;
Priority: number;
PTCondition: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
StopIfTrue: boolean;
Text: string;
TextOperator: Excel$XlContainsOperator;
Type: number
}

declare interface Excel$FormatConditions {
_Default(Index: any): any,
Add(
Type: Excel$XlFormatConditionType.xlExpression,
Operator: void,
Formula1: string): Excel$FormatCondition,
Add(
Type: Excel$XlFormatConditionType,
Operator: Excel$XlFormatConditionOperator.xlBetween | Excel$XlFormatConditionOperator.xlNotBetween,
Formula1: string,
Formula2: string): Excel$FormatCondition,
Add(
Type: Excel$XlFormatConditionType,
Operator?: Excel$XlFormatConditionOperator,
Formula1?: string,
Formula2?: string,
String?: any,
TextOperator?: any,
DateOperator?: any,
ScopeType?: any): Excel$FormatCondition,
AddAboveAverage(): Excel$AboveAverage,
AddColorScale(ColorScaleType: number): Excel$ColorScale,
AddDatabar(): Excel$Databar,
AddIconSetCondition(): Excel$IconSetCondition,
AddTop10(): Excel$Top10,
AddUniqueValues(): Excel$UniqueValues,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
Item(Index: number | string): Excel$FormatCondition,
+Parent: any,
(Index: number | string): Excel$FormatCondition
} 

declare class Excel$FreeformBuilder  {
constructor(): this;
AddNodes(
SegmentType: Office.MsoSegmentType.msoSegmentCurve,
EditingType: Office.MsoEditingType.msoEditingCorner,
X1: number,
Y1: number,
X2: number,
Y2: number,
X3: number,
Y3: number): void;
AddNodes(
SegmentType: Office.MsoSegmentType,
EditingType: Office.MsoEditingType.msoEditingAuto,
X1: number,
Y1: number): void;
Excel$Application: Excel$Application;
ConvertToShape(): Excel$Shape;
Creator: Excel$XlCreator;
Parent: any
}

declare class Excel$Graphic  {
constructor(): this;
Excel$Application: Excel$Application;
Brightness: number;
ColorType: Office.MsoPictureColorType;
Contrast: number;
Creator: Excel$XlCreator;
CropBottom: number;
CropLeft: number;
CropRight: number;
CropTop: number;
Filename: string;
Height: number;
LockAspectRatio: Office.MsoTriState;
Parent: any;
Width: number
}

declare class Excel$Gridlines  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Format: Excel$ChartFormat;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$GroupObject  {
constructor(): this;
_Default: number;
AddIndent: boolean;
Excel$Application: Excel$Application;
ArrowHeadLength: any;
ArrowHeadStyle: any;
ArrowHeadWidth: any;
AutoSize: boolean;
Excel$Border: Excel$Border;
BottomRightCell: Excel$Range;
BringToFront(): any;
CheckSpelling(
CustomDictionary?: any,
IgnoreUppercase?: any,
AlwaysSuggest?: any,
SpellLang?: any): any;
Copy(): any;

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any;
Creator: Excel$XlCreator;
Cut(): any;
Delete(): any;
Duplicate(): any;
Enabled: boolean;
Excel$Font: Excel$Font;
Height: number;
HorizontalAlignment: any;
Index: number;
Excel$Interior: Excel$Interior;
Left: number;
Locked: boolean;
Excel$Name: string;
OnAction: string;
Orientation: any;
Parent: any;
Placement: any;
PrintObject: boolean;
ReadingOrder: number;
RoundedCorners: boolean;
Select(Replace?: any): any;
SendToBack(): any;
Shadow: boolean;
Excel$ShapeRange: Excel$ShapeRange;
Top: number;
TopLeftCell: Excel$Range;
Ungroup(): any;
VerticalAlignment: any;
Visible: boolean;
Width: number;
ZOrder: number
}

declare interface Excel$GroupShapes {
_Default(Index: any): Excel$Shape,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Shape,
+Parent: any,
Range(Index: number | string | SafeArray<number | string>): Excel$ShapeRange,
(Index: number | string): Excel$Shape
} 

declare class Excel$HeaderFooter  {
constructor(): this;
Picture: Excel$Graphic;
Text: string
}

declare class Excel$HiLoLines  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Format: Excel$ChartFormat;
Excel$Name: string;
Parent: any;
Select(): any
}

declare class Excel$HPageBreak  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
DragOff(Direction: Excel$XlDirection, RegionIndex: number): void;
Extent: Excel$XlPageBreakExtent;
Location: Excel$Range;
Parent: Excel$Worksheet;
Type: Excel$XlPageBreak
}

declare interface Excel$HPageBreaks {
_Default(Index: number): Excel$HPageBreak,
Add(Before: Excel$Range): Excel$HPageBreak,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$HPageBreak,
+Parent: any,
(Index: number): Excel$HPageBreak
} 

declare class Excel$Hyperlink  {
constructor(): this;
Address: string;
AddToFavorites(): void;
Excel$Application: Excel$Application;
CreateNewDocument(Filename: string, EditNow: boolean, Overwrite: boolean): void;
Creator: Excel$XlCreator;
Delete(): void;
EmailSubject: string;
Follow(
NewWindow?: boolean,
AddHistory?: void,
ExtraInfo?: string | Office.ByteArray,
Method?: Office.MsoExtraInfoMethod,
HeaderInfo?: string): void;
Excel$Name: string;
Parent: any;
Excel$Range: Excel$Range;
ScreenTip: string;
Excel$Shape: Excel$Shape;
SubAddress: string;
TextToDisplay: string;
Type: number
}

declare interface Excel$Hyperlinks {
_Default(Index: any): Excel$Hyperlink,
Add(
Anchor: Excel$Range | Excel$Shape,
Address: string,
SubAddress?: string,
ScreenTip?: string,
TextToDisplay?: string): Excel$Hyperlink,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
Item(Index: number | string): Excel$Hyperlink,
+Parent: any,
(Index: number | string): Excel$Hyperlink
} 

declare class Excel$Icon  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Index: number;
Parent: Excel$IconSet
}

declare interface Excel$IconSet {
_Default(Index: any): Excel$Icon,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
+ID: Excel$XlIconSet,
Item(Index: number): Excel$Icon,
+Parent: any,
(Index: number): Excel$Icon
} 

declare class Excel$IconSetCondition  {
constructor(): this;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Creator: Excel$XlCreator;
Delete(): void;
Formula: string;
Excel$IconCriteria: Excel$IconCriteria;
Excel$IconSet: Excel$IconSets;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
Parent: any;
PercentileValues: boolean;
Priority: number;
PTCondition: boolean;
ReverseOrder: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
ShowIconOnly: boolean;
StopIfTrue: boolean;
Type: number
}

declare interface Excel$IconCriteria {
_Default(Index: any): Excel$IconCriterion,
+Count: number,
Item(Index: number): Excel$IconCriterion,
(Index: number): Excel$IconCriterion
} 

declare class Excel$IconCriterion  {
constructor(): this;
Excel$Icon: Excel$XlIcon;
Index: number;
Operator: number;
Type: Excel$XlConditionValueTypes;
Value: number | string
}

declare interface Excel$IconSets {
_Default(Index: any): any,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$IconSet,
+Parent: any,
(Index: number): Excel$IconSet
} 

declare class Excel$Interior  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$XlRgbColor | number;
ColorIndex: number | Excel$XlColorIndex;
Creator: Excel$XlCreator;
Gradient: any;
InvertIfNegative: boolean;
Parent: any;
Pattern: Excel$XlPattern;
PatternColor: Excel$XlRgbColor | number;
PatternColorIndex: number | Excel$XlColorIndex;
PatternThemeColor: Excel$XlThemeColor;
PatternTintAndShade: number;
ThemeColor: Excel$XlThemeColor;
TintAndShade: number
}

declare class Excel$LeaderLines  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): void;
Format: Excel$ChartFormat;
Parent: any;
Select(): void
}

declare class Excel$Legend  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Excel$Border: Excel$Border;
Clear(): any;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Height: number;
IncludeInLayout: boolean;
Excel$Interior: Excel$Interior;
Left: number;
Excel$LegendEntries: Excel$LegendEntries & ((Index: number) => Excel$LegendEntry);
Excel$Name: string;
Parent: any;
Position: Excel$XlLegendPosition;
Select(): any;
Shadow: boolean;
Top: number;
Width: number
}

declare interface Excel$LegendEntries {
_Default(Index: any): Excel$LegendEntry,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$LegendEntry,
+Parent: any,
(Index: number): Excel$LegendEntry
} 

declare class Excel$LegendEntry  {
constructor(): this;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Creator: Excel$XlCreator;
Delete(): any;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
Height: number;
Index: number;
Left: number;
Excel$LegendKey: Excel$LegendKey;
Parent: any;
Select(): any;
Top: number;
Width: number
}

declare class Excel$LegendKey  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Height: number;
Excel$Interior: Excel$Interior;
InvertIfNegative: boolean;
Left: number;
MarkerBackgroundColor: number;
MarkerBackgroundColorIndex: Excel$XlColorIndex;
MarkerForegroundColor: number;
MarkerForegroundColorIndex: Excel$XlColorIndex;
MarkerSize: number;
MarkerStyle: Excel$XlMarkerStyle;
Parent: any;
PictureType: number;
PictureUnit: number;
PictureUnit2: number;
Select(): any;
Shadow: boolean;
Smooth: boolean;
Top: number;
Width: number
}

declare class Excel$LineFormat  {
constructor(): this;
Excel$Application: any;
BackColor: Excel$ColorFormat;
BeginArrowheadLength: Office.MsoArrowheadLength;
BeginArrowheadStyle: Office.MsoArrowheadStyle;
BeginArrowheadWidth: Office.MsoArrowheadWidth;
Creator: number;
DashStyle: Office.MsoLineDashStyle;
EndArrowheadLength: Office.MsoArrowheadLength;
EndArrowheadStyle: Office.MsoArrowheadStyle;
EndArrowheadWidth: Office.MsoArrowheadWidth;
ForeColor: Excel$ColorFormat;
InsetPen: Office.MsoTriState;
Parent: any;
Pattern: Office.MsoPatternType;
Excel$Style: Office.MsoLineStyle;
Transparency: number;
Visible: Office.MsoTriState;
Weight: number
}

declare class Excel$LinkFormat  {
constructor(): this;
Excel$Application: Excel$Application;
AutoUpdate: boolean;
Creator: Excel$XlCreator;
Locked: boolean;
Parent: any;
Update(): void
}

declare class Excel$ListColumn  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DataBodyRange: Excel$Range;
Delete(): void;
Index: number;
Excel$ListDataFormat: Excel$ListDataFormat;
Excel$Name: string;
Parent: any;
Excel$Range: Excel$Range;
SharePointFormula: string;
Total: Excel$Range;
TotalsCalculation: Excel$XlTotalsCalculation;
Excel$XPath: Excel$XPath
}

declare interface Excel$ListColumns {
_Default(Index: any): Excel$ListColumn,
Add(Position?: number): Excel$ListColumn,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$ListColumn,
+Parent: any,
(Index: number | string): Excel$ListColumn
} 

declare class Excel$ListDataFormat  {
constructor(): this;
_Default: Excel$XlListDataType;
AllowFillIn: boolean;
Excel$Application: Excel$Application;
Choices: SafeArray<string>;
Creator: Excel$XlCreator;
DecimalPlaces: number;
DefaultValue: any;
IsPercent: boolean;
lcid: number;
MaxCharacters: number;
MaxNumber: number | null;
MinNumber: number | null;
Parent: any;
ReadOnly: boolean;
Required: boolean;
Type: Excel$XlListDataType
}

declare class Excel$ListObject  {
constructor(): this;
_Default: string;
Active: boolean;
AlternativeText: string;
Excel$Application: Excel$Application;
Excel$AutoFilter: Excel$AutoFilter;
Excel$Comment: string;
Creator: Excel$XlCreator;
DataBodyRange: Excel$Range;
Delete(): void;
DisplayName: string;
DisplayRightToLeft: boolean;
ExportToVisio(): void;
HeaderRowRange: Excel$Range;
InsertRowRange: Excel$Range;
Excel$ListColumns: Excel$ListColumns;
Excel$ListRows: Excel$ListRows;
Excel$Name: string;
Parent: any;
Publish(Target: SafeArray<string>, LinkSource: boolean): string;
Excel$QueryTable: Excel$QueryTable;
Excel$Range: Excel$Range;
Refresh(): void;
Resize(Excel$Range: Excel$Range): void;
SharePointURL: string;
ShowAutoFilter: boolean;
ShowHeaders: boolean;
ShowTableStyleColumnStripes: boolean;
ShowTableStyleFirstColumn: boolean;
ShowTableStyleLastColumn: boolean;
ShowTableStyleRowStripes: boolean;
ShowTotals: boolean;
Excel$Sort: Excel$Sort;
SourceType: Excel$XlListObjectSourceType;
Summary: string;
Excel$TableStyle: any;
TotalsRowRange: Excel$Range;
Unlink(): void;
Unlist(): void;

/**
 * @param iConflictType [iConflictType=0]
 */
UpdateChanges(iConflictType?: Excel$XlListConflict): void;
Excel$XmlMap: Excel$XmlMap
}

declare interface Excel$ListObjects {

/**
 * @param SourceType [SourceType=1]
 * @param XlListObjectHasHeaders [XlListObjectHasHeaders=0]
 */
_Add(
SourceType?: Excel$XlListObjectSourceType,
Source?: any,
LinkSource?: any,
XlListObjectHasHeaders?: Excel$XlYesNoGuess,
Destination?: any): Excel$ListObject,
_Default(Index: any): Excel$ListObject,
Add(
SourceType: Excel$XlListObjectSourceType.xlSrcRange,
Source?: Excel$Range,
LinkSource?: void,
XlListObjectHasHeaders?: Excel$XlYesNoGuess,
Destination?: void,
TableStyleName?: string): Excel$ListObject,
Add(
SourceType: Excel$XlListObjectSourceType.xlSrcExternal,
Source: SafeArray<string>,
LinkSource: boolean,
XlListObjectHasHeaders: Excel$XlYesNoGuess,
Destination: Excel$Range,
TableStyleName?: string): Excel$ListObject,

/**
 * @param SourceType [SourceType=1]
 * @param XlListObjectHasHeaders [XlListObjectHasHeaders=0]
 */
Add(
SourceType?: Excel$XlListObjectSourceType,
Source?: any,
LinkSource?: boolean,
XlListObjectHasHeaders?: Excel$XlYesNoGuess,
Destination?: Excel$Range,
TableStyleName?: string): Excel$ListObject,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$ListObject,
+Parent: any,
(Index: number | string): Excel$ListObject
} 

declare class Excel$ListRow  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Index: number;
InvalidData: boolean;
Parent: any;
Excel$Range: Excel$Range
}

declare interface Excel$ListRows {
_Add(Position?: any): Excel$ListRow,
_Default(Index: any): Excel$ListRow,
Add(Position?: number, AlwaysInsert?: boolean): Excel$ListRow,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$ListRow,
+Parent: any,
(Index: number | string): Excel$ListRow
} 


/**
 * Macintosh only
 */
declare class Excel$Mailer  {
constructor(): this;
Excel$Application: Excel$Application;
BCCRecipients: any;
CCRecipients: any;
Creator: Excel$XlCreator;
Enclosures: any;
Parent: any;
Received: boolean;
SendDateTime: VarDate;
Sender: string;
Subject: string;
ToRecipients: any;
WhichAddress: any
}

declare class Excel$Menu  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Creator: Excel$XlCreator;
Delete(): void;
Enabled: boolean;
Index: number;
Excel$MenuItems: Excel$MenuItems;
Parent: any
}

declare class Excel$MenuBar  {
constructor(): this;
Activate(): void;
Excel$Application: Excel$Application;
BuiltIn: boolean;
Caption: string;
Creator: Excel$XlCreator;
Delete(): void;
Index: number;
Excel$Menus: Excel$Menus;
Parent: any;
Reset(): void
}

declare interface Excel$MenuBars {
_Default(Index: any): Excel$MenuBar,
Add(Excel$Name?: any): Excel$MenuBar,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$MenuBar,
+Parent: any,
(Index: any): Excel$MenuBar
} 

declare class Excel$MenuItem  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Checked: boolean;
Creator: Excel$XlCreator;
Delete(): void;
Enabled: boolean;
HelpContextID: number;
HelpFile: string;
Index: number;
OnAction: string;
Parent: any;
StatusBar: string
}

declare interface Excel$MenuItems {
_Default(Index: any): any,
Add(
Caption: string,
OnAction?: any,
ShortcutKey?: any,
Before?: any,
Restore?: any,
StatusBar?: any,
HelpFile?: any,
HelpContextID?: any): Excel$MenuItem,
AddMenu(Caption: string, Before?: any, Restore?: any): Excel$Menu,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): any,
+Parent: any,
(Index: any): any
} 

declare interface Excel$Menus {
_Default(Index: any): Excel$Menu,
Add(Caption: string, Before?: any, Restore?: any): Excel$Menu,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$Menu,
+Parent: any,
(Index: any): Excel$Menu
} 

declare class Excel$Module  {
constructor(): this;
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
_CodeName: string;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
_Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any): void;
_SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any): void;
Activate(): void;
Excel$Application: Excel$Application;
CodeName: string;
Copy(Before?: any, After?: any): void;
Creator: Excel$XlCreator;
Delete(): void;
Index: number;
InsertFile(Filename: any, Merge?: any): any;
Move(Before?: any, After?: any): void;
Excel$Name: string;
Next: any;
OnDoubleClick: string;
OnSheetActivate: string;
OnSheetDeactivate: string;
Excel$PageSetup: Excel$PageSetup;
Parent: any;
Previous: any;
PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any): void;
ProtectContents: boolean;
ProtectionMode: boolean;
SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any): void;
Select(Replace?: any): void;
Excel$Shapes: Excel$Shapes;
Unprotect(Password?: any): void;
Visible: Excel$XlSheetVisibility
}

declare interface Excel$Modules {
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void,
_Default(Index: any): any,
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void,
Add(Before?: any, After?: any, Count?: any): Excel$Module,
+Excel$Application: Excel$Application,
Copy(Before?: any, After?: any): void,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
+Excel$HPageBreaks: Excel$HPageBreaks,
Item(Index: any): any,
Move(Before?: any, After?: any): void,
+Parent: any,
PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any,
IgnorePrintAreas?: any): void,
Select(Replace?: any): void,
Visible: any,
+Excel$VPageBreaks: Excel$VPageBreaks,
(Index: any): any
} 

declare class Excel$MultiThreadedCalculation  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Enabled: boolean;
Parent: any;
ThreadCount: number;
ThreadMode: Excel$XlThreadMode
}

declare class Excel$Name  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Category: string;
CategoryLocal: string;
Excel$Comment: string;
Creator: Excel$XlCreator;
Delete(): void;
Index: number;
MacroType: Excel$XlXLMMacroType;
Excel$Name: string;
NameLocal: string;
Parent: any;
RefersTo: string;
RefersToLocal: string;
RefersToR1C1: string;
RefersToR1C1Local: string;
RefersToRange: Excel$Range;
ShortcutKey: string;
ValidWorkbookParameter: boolean;
Value: string;
Visible: boolean;
WorkbookParameter: boolean
}

declare interface Excel$Names {
_Default(Index?: any, IndexLocal?: any, RefersTo?: any): Excel$Name,
Add(
Excel$Name?: string,
RefersTo?: string,
Visible?: boolean,
MacroType?: 1 | 2 | 3,
ShortcutKey?: string,
Category?: Excel$FunctionCategory | string,
NameLocal?: string,
RefersToLocal?: string,
CategoryLocal?: string,
RefersToR1C1?: string,
RefersToR1C1Local?: string): Excel$Name,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Name,
Item(Index: void, IndexLocal: string): Excel$Name,
Item(Index: void, IndexLocal: void, RefersTo: string): Excel$Name,
+Parent: any,
(Index: number | string): Excel$Name,
(Index: void, IndexLocal: string): Excel$Name,
(Index: void, IndexLocal: void, RefersTo: string): Excel$Name
} 

declare class Excel$NegativeBarFormat  {
constructor(): this;
Excel$Application: Excel$Application;
BorderColor: Excel$FormatColor;
BorderColorType: Excel$XlDataBarNegativeColorType;
Color: Excel$FormatColor;
ColorType: Excel$XlDataBarNegativeColorType;
Creator: Excel$XlCreator;
Parent: any
}

declare class Excel$ODBCConnection  {
constructor(): this;
AlwaysUseConnectionFile: boolean;
Excel$Application: Excel$Application;
BackgroundQuery: boolean;
CancelRefresh(): void;
CommandText: string;
CommandType: Excel$XlCmdType;
Connection: string;
Creator: Excel$XlCreator;
EnableRefresh: boolean;
Parent: any;
Refresh(): void;
RefreshDate: VarDate;
Refreshing: boolean;
RefreshOnFileOpen: boolean;
RefreshPeriod: number;
RobustConnect: Excel$XlRobustConnect;
SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
SavePassword: boolean;
ServerCredentialsMethod: Excel$XlCredentialsMethod;
ServerSSOApplicationID: string;
SourceConnectionFile: string;
SourceData: string | SafeArray<string> | Excel$PivotTable;
SourceDataFile: string
}

declare class Excel$ODBCError  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
ErrorString: string;
Parent: any;
SqlState: string
}

declare interface Excel$ODBCErrors {
_Default(Index: number): Excel$ODBCError,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$ODBCError,
+Parent: any,
(Index: number): Excel$ODBCError
} 

declare class Excel$OLEDBConnection  {
constructor(): this;
ADOConnection: ADODB.Connection;
AlwaysUseConnectionFile: boolean;
Excel$Application: Excel$Application;
BackgroundQuery: boolean;
Excel$CalculatedMembers: Excel$CalculatedMembers;
CancelRefresh(): void;
CommandText: string;
CommandType: Excel$XlCmdType;
Connection: string;
Creator: Excel$XlCreator;
EnableRefresh: boolean;
IsConnected: boolean;
LocalConnection: string;
LocaleID: number;
MaintainConnection: boolean;
MakeConnection(): void;
MaxDrillthroughRecords: number;
OLAP: boolean;
Parent: any;
Reconnect(): void;
Refresh(): void;
RefreshDate: VarDate;
Refreshing: boolean;
RefreshOnFileOpen: boolean;
RefreshPeriod: number;
RetrieveInOfficeUILang: boolean;
RobustConnect: Excel$XlRobustConnect;
SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
SavePassword: boolean;
ServerCredentialsMethod: Excel$XlCredentialsMethod;
ServerFillColor: boolean;
ServerFontStyle: boolean;
ServerNumberFormat: boolean;
ServerSSOApplicationID: string;
ServerTextColor: boolean;
SourceConnectionFile: string;
SourceDataFile: string;
UseLocalConnection: boolean
}

declare class Excel$OLEDBError  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
ErrorString: string;
Native: number;
Number: number;
Parent: any;
SqlState: string;
Stage: number
}

declare interface Excel$OLEDBErrors {
_Default(Index: number): Excel$OLEDBError,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$OLEDBError,
+Parent: any,
(Index: number): Excel$OLEDBError
} 

declare class Excel$OLEFormat  {
constructor(): this;
Activate(): void;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Object: any;
Parent: any;
progID: string;
Verb(Verb?: Excel$XlOLEVerb): void
}

declare class Excel$OLEObject  {
constructor(): this;
Activate(): any;
AltHTML: string;
Excel$Application: Excel$Application;
AutoLoad: boolean;
AutoUpdate: boolean;
Excel$Border: Excel$Border;
BottomRightCell: Excel$Range;
BringToFront(): any;
Copy(): any;

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any;
Creator: Excel$XlCreator;
Cut(): any;
Delete(): any;
Duplicate(): any;
Enabled: boolean;
Height: number;
Index: number;
Excel$Interior: Excel$Interior;
Left: number;
LinkedCell: string;
ListFillRange: string;
Locked: boolean;
Excel$Name: string;
Object: any;
OLEType: Excel$XlOLEType.xlOLELink | Excel$XlOLEType.xlOLEEmbed;
OnAction: string;
Parent: any;
Placement: Excel$XlPlacement;
PrintObject: boolean;
progID: string;
Select(Replace?: boolean): any;
SendToBack(): any;
Shadow: boolean;
Excel$ShapeRange: Excel$ShapeRange;
SourceName: string;
Top: number;
TopLeftCell: Excel$Range;
Update(): any;

/**
 * @param Verb [Verb=1]
 */
Verb(Verb?: Excel$XlOLEVerb): any;
Visible: boolean;
Width: number;
ZOrder: number
}

declare class Excel$OLEObjects  {
constructor(): this;
Add(
ClassType: string,
Filename: void,
Link: void,
DisplayAsIcon: true,
IconFileName?: string,
IconIndex?: number,
IconLabel?: string,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$OLEObject;
Add(
ClassType: string,
Filename?: void,
Link?: void,
DisplayAsIcon?: false,
IconFileName?: void,
IconIndex?: void,
IconLabel?: void,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$OLEObject;
Add(
ClassType: void,
Filename: string,
Link: boolean,
DisplayAsIcon: true,
IconFileName?: string,
IconIndex?: number,
IconLabel?: string,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$OLEObject;
Add(
ClassType: void,
Filename: string,
Link?: boolean,
DisplayAsIcon?: false,
IconFileName?: void,
IconIndex?: void,
IconLabel?: void,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$OLEObject;
Excel$Application: Excel$Application;
AutoLoad: boolean;
Excel$Border: Excel$Border;
BringToFront(): any;
Copy(): any;

/**
 * @param Appearance [Appearance=2]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any;
Count: number;
Creator: Excel$XlCreator;
Cut(): any;
Delete(): any;
Duplicate(): any;
Enabled: boolean;
Group(): Excel$GroupObject;
Height: number;
Excel$Interior: Excel$Interior;
Item(Index: number | string): any;
Left: number;
Locked: boolean;
OnAction: string;
Parent: any;
Placement: any;
PrintObject: boolean;
Select(Replace?: boolean): any;
SendToBack(): any;
Shadow: boolean;
Excel$ShapeRange: Excel$ShapeRange;
SourceName: string;
Top: number;
Visible: boolean;
Width: number;
ZOrder: number
}

declare class Excel$Outline  {
constructor(): this;
Excel$Application: Excel$Application;
AutomaticStyles: boolean;
Creator: Excel$XlCreator;
Parent: any;
ShowLevels(RowLevels?: number, ColumnLevels?: number): any;
SummaryColumn: Excel$XlSummaryColumn;
SummaryRow: Excel$XlSummaryRow
}

declare class Excel$Page  {
constructor(): this;
CenterFooter: Excel$HeaderFooter;
CenterHeader: Excel$HeaderFooter;
LeftFooter: Excel$HeaderFooter;
LeftHeader: Excel$HeaderFooter;
RightFooter: Excel$HeaderFooter;
RightHeader: Excel$HeaderFooter
}

declare interface Excel$Pages {
_Default(Index: any): Excel$Page,
+Count: number,
Item(Index: number): Excel$Page,
(Index: number): Excel$Page
} 

declare class Excel$PageSetup  {
constructor(): this;
AlignMarginsHeaderFooter: boolean;
Excel$Application: Excel$Application;
BlackAndWhite: boolean;
BottomMargin: number;
CenterFooter: string;
CenterFooterPicture: Excel$Graphic;
CenterHeader: string;
CenterHeaderPicture: Excel$Graphic;
CenterHorizontally: boolean;
CenterVertically: boolean;
ChartSize: Excel$XlObjectSize;
Creator: Excel$XlCreator;
DifferentFirstPageHeaderFooter: boolean;
Draft: boolean;
EvenPage: Excel$Page;
FirstPage: Excel$Page;
FirstPageNumber: number;
FitToPagesTall: number | false;
FitToPagesWide: number | false;
FooterMargin: number;
HeaderMargin: number;
LeftFooter: string;
LeftFooterPicture: Excel$Graphic;
LeftHeader: string;
LeftHeaderPicture: Excel$Graphic;
LeftMargin: number;
OddAndEvenPagesHeaderFooter: boolean;
Order: Excel$XlOrder;
Orientation: Excel$XlPageOrientation;
Excel$Pages: Excel$Pages;
PaperSize: Excel$XlPaperSize;
Parent: any;
PrintArea: string;
PrintComments: Excel$XlPrintLocation;
PrintErrors: Excel$XlPrintErrors;
PrintGridlines: boolean;
PrintHeadings: boolean;
PrintNotes: boolean;
PrintQuality: SafeArray<number> & ((Index: 1 | 2) => number);
PrintTitleColumns: string;
PrintTitleRows: string;
RightFooter: string;
RightFooterPicture: Excel$Graphic;
RightHeader: string;
RightHeaderPicture: Excel$Graphic;
RightMargin: number;
ScaleWithDocHeaderFooter: boolean;
TopMargin: number;

/**
 * Represents a percentage between 10 and 400
 */
Zoom: number
}

declare class Excel$Pane  {
constructor(): this;
Activate(): boolean;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Index: number;
LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
Parent: any;
PointsToScreenPixelsX(Excel$Points: number): number;
PointsToScreenPixelsY(Excel$Points: number): number;
ScrollColumn: number;
ScrollIntoView(
Left: number,
Top: number,
Width: number,
Height: number,
Start?: boolean): void;
ScrollRow: number;
SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
VisibleRange: Excel$Range
}

declare interface Excel$Panes {
_Default(Index: number): Excel$Pane,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Pane,
+Parent: any,
(Index: number): Excel$Pane
} 

declare class Excel$Parameter  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DataType: Excel$XlParameterDataType;
Excel$Name: string;
Parent: any;
PromptString: string;
RefreshOnChange: boolean;
SetParam(Type: Excel$XlParameterType, Value: any): void;
SourceRange: Excel$Range;
Type: Excel$XlParameterType;
Value: any
}

declare interface Excel$Parameters {
_Default(Index: any): Excel$Parameter,
Add(Excel$Name: string, iDataType?: Excel$XlParameterDataType): Excel$Parameter,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
Item(Index: number | string): Excel$Parameter,
+Parent: any,
(Index: number | string): Excel$Parameter
} 

declare class Excel$Phonetic  {
constructor(): this;
Alignment: number;
Excel$Application: Excel$Application;
CharacterType: number;
Creator: Excel$XlCreator;
Excel$Font: Excel$Font;
Parent: any;
Text: string;
Visible: boolean
}

declare interface Excel$Phonetics {
_Default(Index: number): any,
Add(Start: number, Length: number, Text: string): void,
Alignment: number,
+Excel$Application: Excel$Application,
CharacterType: number,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
+Excel$Font: Excel$Font,
Item(Index: number): Excel$Phonetic,
+Length: number,
+Parent: any,
+Start: number,
Text: string,
Visible: boolean,
(Index: number): Excel$Phonetic
} 

declare class Excel$PictureFormat  {
constructor(): this;
Excel$Application: any;
Brightness: number;
ColorType: Office.MsoPictureColorType;
Contrast: number;
Creator: number;
Crop: Office.Crop;
CropBottom: number;
CropLeft: number;
CropRight: number;
CropTop: number;
IncrementBrightness(Increment: number): void;
IncrementContrast(Increment: number): void;
Parent: any;
TransparencyColor: Office.MsoRGBType;
TransparentBackground: Office.MsoTriState
}

declare class Excel$PivotAxis  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Parent: any;
Excel$PivotLines: Excel$PivotLines
}

declare class Excel$PivotCache  {
constructor(): this;
ADOConnection: ADODB.Connection;
Excel$Application: Excel$Application;
BackgroundQuery: boolean;
CommandText: string;
CommandType: Excel$XlCmdType;
Connection: string;
CreatePivotTable(
TableDestination: Excel$Range,
TableName?: string,
ReadData?: boolean,
DefaultVersion?: any): Excel$PivotTable;
Creator: Excel$XlCreator;
EnableRefresh: boolean;
Index: number;
IsConnected: boolean;
LocalConnection: string;
MaintainConnection: boolean;
MakeConnection(): void;
MemoryUsed: number;
MissingItemsLimit: Excel$XlPivotTableMissingItems;
OLAP: boolean;
OptimizeCache: boolean;
Parent: any;
QueryType: Excel$XlQueryType;
RecordCount: number;
Recordset: ADODB.Recordset;
Refresh(): void;
RefreshDate: VarDate;
RefreshName: string;
RefreshOnFileOpen: boolean;
RefreshPeriod: number;
ResetTimer(): void;
RobustConnect: Excel$XlRobustConnect;
SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
SavePassword: boolean;
SourceConnectionFile: string;
SourceData: string | SafeArray<string> | Excel$PivotTable;
SourceDataFile: string;
SourceType: Excel$XlPivotTableSourceType;
Sql: any;
UpgradeOnRefresh: boolean;
UseLocalConnection: boolean;
Version: Excel$XlPivotTableVersionList;
Excel$WorkbookConnection: Excel$WorkbookConnection
}

declare interface Excel$PivotCaches {
_Default(Index: any): Excel$PivotCache,
Add(SourceType: Excel$XlPivotTableSourceType, SourceData?: any): Excel$PivotCache,
+Excel$Application: Excel$Application,
+Count: number,
Create(
SourceType: Excel$XlPivotTableSourceType.xlDatabase | Excel$XlPivotTableSourceType.xlConsolidation,
SourceData: string,
Version?: Excel$XlPivotTableVersionList): Excel$PivotCache,
Create(
SourceType: Excel$XlPivotTableSourceType.xlExternal,
SourceData: Excel$WorkbookConnection,
Version?: Excel$XlPivotTableVersionList): Excel$PivotCache,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$PivotCache,
+Parent: any,
(Index: number): Excel$PivotCache
} 

declare class Excel$PivotCell  {
constructor(): this;
AllocateChange(): void;
Excel$Application: Excel$Application;
CellChanged: Excel$XlCellChangedState;
ColumnItems: Excel$PivotItemList;
Creator: Excel$XlCreator;
CustomSubtotalFunction: Excel$XlConsolidationFunction;
DataField: Excel$PivotField;
DataSourceValue: any;
DiscardChange(): void;
Dummy18: string;
MDX: string;
Parent: any;
PivotCellType: Excel$XlPivotCellType;
PivotColumnLine: Excel$PivotLine;
Excel$PivotField: Excel$PivotField;
Excel$PivotItem: Excel$PivotItem;
PivotRowLine: Excel$PivotLine;
Excel$PivotTable: Excel$PivotTable;
Excel$Range: Excel$Range;
RowItems: Excel$PivotItemList
}

declare class Excel$PivotField  {
constructor(): this;
_AutoSort(Order: number, Field: string): void;
_Default: string;
AddPageItem(Item: string, ClearList?: boolean): void;
AllItemsVisible: boolean;
Excel$Application: Excel$Application;
AutoShow(Type: number, Excel$Range: number, Count: number, Field: string): void;
AutoShowCount: number;
AutoShowField: string;
AutoShowRange: number;
AutoShowType: number;
AutoSort(
Order: number,
Field: string,
Excel$PivotLine?: any,
CustomSubtotal?: any): void;
AutoSortCustomSubtotal: number;
AutoSortField: string;
AutoSortOrder: number;
AutoSortPivotLine: Excel$PivotLine;
BaseField: any;
BaseItem: any;
CalculatedItems(): Excel$CalculatedItems;
Calculation: Excel$XlPivotFieldCalculation;
Caption: string;
ChildField: Excel$PivotField;
ChildItems: Excel$PivotItemsResult;
ClearAllFilters(): void;
ClearLabelFilters(): void;
ClearManualFilter(): void;
ClearValueFilters(): void;
Creator: Excel$XlCreator;
Excel$CubeField: Excel$CubeField;
CurrentPage: Excel$PivotItem;
CurrentPageList: SafeArray<string>;
CurrentPageName: string;
DatabaseSort: boolean;
DataRange: Excel$Range;
DataType: Excel$XlPivotFieldDataType;
Delete(): void;
DisplayAsCaption: boolean;
DisplayAsTooltip: boolean;
DisplayInReport: boolean;
DragToColumn: boolean;
DragToData: boolean;
DragToHide: boolean;
DragToPage: boolean;
DragToRow: boolean;
DrilledDown: boolean;
DrillTo(Field: string): void;
EnableItemSelection: boolean;
EnableMultiplePageItems: boolean;
Formula: string;
Function: Excel$XlConsolidationFunction;
GroupLevel: number;
Hidden: boolean;
HiddenItems: Excel$PivotItemsResult;
HiddenItemsList: SafeArray<string>;
IncludeNewItemsInFilter: boolean;
IsCalculated: boolean;
IsMemberProperty: boolean;
LabelRange: Excel$Range;
LayoutBlankLine: boolean;
LayoutCompactRow: boolean;
LayoutForm: Excel$XlLayoutFormType;
LayoutPageBreak: boolean;
LayoutSubtotalLocation: Excel$XlSubtototalLocationType;
MemberPropertyCaption: string;
MemoryUsed: number;
Excel$Name: string;
NumberFormat: string;
Orientation: Excel$XlPivotFieldOrientation;
Parent: any;
ParentField: Excel$PivotField;
ParentItems: Excel$PivotItemsResult;
Excel$PivotFilters: Excel$PivotFilters;
Excel$PivotItems: Excel$PivotItemsResult;
Position: any;
PropertyOrder: number;
PropertyParentField: Excel$PivotField;
RepeatLabels: boolean;
ServerBased: boolean;
ShowAllItems: boolean;
ShowDetail: boolean;
ShowingInAxis: boolean;
SourceCaption: string;
SourceName: string;
StandardFormula: string;
SubtotalName: string;
Subtotals: SafeArray<boolean> & ((Index: Excel$PivotFieldSubtotal) => boolean);
TotalLevels: number;
UseMemberPropertyAsCaption: boolean;
Value: string;
VisibleItems: Excel$PivotItemsResult;
VisibleItemsList: SafeArray<string>
}

declare class Excel$PivotFields  {
constructor(): this;
Excel$Application: Excel$Application;
Count: number;
Creator: Excel$XlCreator;
Item(Index: number | string): Excel$PivotField;
Parent: Excel$PivotTable
}

declare type Excel$PivotFieldsResult = Excel$PivotFields & ((Index: number | string) => Excel$PivotField) & ((Indexes: SafeArray<number | string>) => Excel$PivotFields);

declare class Excel$PivotFilter  {
constructor(): this;
Active: boolean;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DataCubeField: Excel$CubeField;
DataField: Excel$PivotField;
Delete(): void;
Description: string;
FilterType: Excel$XlPivotFilterType;
IsMemberPropertyFilter: boolean;
MemberPropertyField: Excel$PivotField;
Excel$Name: string;
Order: number;
Parent: any;
Excel$PivotField: Excel$PivotField;
Value1: any;
Value2: any
}

declare interface Excel$PivotFilters {
_Default(Index: any): Excel$PivotFilter,
Add(
Type: Excel$XlPivotFilterType,
DataField?: any,
Value1?: any,
Value2?: any,
Order?: any,
Excel$Name?: any,
Description?: any,
MemberPropertyField?: any): Excel$PivotFilter,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$PivotFilter,
+Parent: any,
(Index: number): Excel$PivotFilter
} 

declare class Excel$PivotFormula  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Formula: string;
Index: number;
Parent: any;
StandardFormula: string;
Value: string
}

declare interface Excel$PivotFormulas {
_Add(Formula: string): Excel$PivotFormula,
_Default(Index: any): Excel$PivotFormula,
Add(Formula: string, UseStandardFormula?: any): Excel$PivotFormula,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$PivotFormula,
+Parent: any,
(Index: number | string): Excel$PivotFormula
} 

declare class Excel$PivotItem  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Caption: string;
ChildItems: Excel$PivotItemsResult;
Creator: Excel$XlCreator;
DataRange: Excel$Range;
Delete(): void;
DrilledDown: boolean;
DrillTo(Field: string): void;
Formula: string;
IsCalculated: boolean;
LabelRange: Excel$Range;
Excel$Name: string;
Parent: Excel$PivotField;
ParentItem: Excel$PivotItem;
ParentShowDetail: boolean;
Position: number;
RecordCount: number;
ShowDetail: boolean;
SourceName: any;
SourceNameStandard: string;
StandardFormula: string;
Value: string;
Visible: boolean
}

declare interface Excel$PivotItemList {
_Default(Field: any): Excel$PivotItem,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$PivotItem,
+Parent: any,
(Field: number | string): Excel$PivotItem
} 

declare class Excel$PivotItems  {
constructor(): this;
Add(Excel$Name: string): void;
Excel$Application: Excel$Application;
Count: number;
Creator: Excel$XlCreator;
Item(Index: number | string): any;
Parent: Excel$PivotField
}

declare type Excel$PivotItemsResult = Excel$PivotItems & ((Index: number | string) => Excel$PivotItem) & ((Indexes: SafeArray<number | string>) => Excel$PivotItems);

declare class Excel$PivotLayout  {
constructor(): this;
AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AppendField?: any): void;
Excel$Application: Excel$Application;
ColumnFields(Index?: any): any;
Creator: Excel$XlCreator;
Excel$CubeFields: Excel$CubeFields;
DataFields(Index?: any): any;
HiddenFields(Index?: any): any;
InnerDetail: string;
PageFields(Index?: any): any;
Parent: any;
Excel$PivotCache: Excel$PivotCache;
PivotFields(Index?: any): any;
Excel$PivotTable: Excel$PivotTable;
RowFields(Index?: any): any;
VisibleFields(Index?: any): any
}

declare class Excel$PivotLine  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
LineType: Excel$XlPivotLineType;
Parent: any;
Excel$PivotLineCells: Excel$PivotLineCells;
Position: number
}

declare interface Excel$PivotLineCells {
_Default(Index: any): Excel$PivotCell,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$PivotCell,
+Parent: any,
(Index: number): Excel$PivotCell
} 

declare interface Excel$PivotLines {
_Default(Index: any): Excel$PivotLine,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$PivotLine,
+Parent: any,
(Index: number): Excel$PivotLine
} 

declare class Excel$PivotTable  {
constructor(): this;
_Default: string;

/**
 * @param Mode [Mode=0]
 */
_PivotSelect(Excel$Name: string, Mode?: Excel$XlPTSelectionMode): void;
ActiveFilters: Excel$PivotFilters;
AddDataField(Field: any, Caption?: any, Function?: any): Excel$PivotField;
AddFields(
RowFields?: string | SafeArray<string>,
ColumnFields?: string | SafeArray<string>,
PageFields?: string | SafeArray<string>,
AddToTable?: boolean): any;
AllocateChanges(): void;
Allocation: Excel$XlAllocation;
AllocationMethod: Excel$XlAllocationMethod;
AllocationValue: Excel$XlAllocationValue;
AllocationWeightExpression: string;
AllowMultipleFilters: boolean;
AlternativeText: string;
Excel$Application: Excel$Application;
CacheIndex: number;
CalculatedFields(): Excel$CalculatedFields;
Excel$CalculatedMembers: Excel$CalculatedMembers;
CalculatedMembersInFilters: boolean;
ChangeConnection(conn: Excel$WorkbookConnection): void;
ChangeList: Excel$PivotTableChangeList;
ChangePivotCache(Excel$PivotCache: string): void;
ClearAllFilters(): void;
ClearTable(): void;
ColumnFields: Excel$PivotFieldsResult;
ColumnGrand: boolean;
ColumnRange: Excel$Range;
CommitChanges(): void;
CompactLayoutColumnHeader: string;
CompactLayoutRowHeader: string;
CompactRowIndent: number;
ConvertToFormulas(ConvertFilters: boolean): void;
CreateCubeFile(
File: string,
Measures?: SafeArray<string>,
Levels?: SafeArray<string>,
Members?: SafeArray<SafeArray<string>>,
Properties?: boolean): string;
Creator: Excel$XlCreator;
Excel$CubeFields: Excel$CubeFields;
DataBodyRange: Excel$Range;
DataFields: Excel$PivotFieldsResult;
DataLabelRange: Excel$Range;
DataPivotField: Excel$PivotField;
DiscardChanges(): void;
DisplayContextTooltips: boolean;
DisplayEmptyColumn: boolean;
DisplayEmptyRow: boolean;
DisplayErrorString: boolean;
DisplayFieldCaptions: boolean;
DisplayImmediateItems: boolean;
DisplayMemberPropertyTooltips: boolean;
DisplayNullString: boolean;
Dummy15(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
EnableDataValueEditing: boolean;
EnableDrilldown: boolean;
EnableFieldDialog: boolean;
EnableFieldList: boolean;
EnableWizard: boolean;
EnableWriteback: boolean;
ErrorString: string;
FieldListSortAscending: boolean;
Format(Format: Excel$XlPivotFormatType): void;
GetData(Excel$Name: string): number;
GetPivotData(
DataField?: string,
Field1?: string,
Item1?: string,
Field2?: string,
Item2?: string,
Field3?: string,
Item3?: string,
Field4?: string,
Item4?: string,
Field5?: string,
Item5?: string,
Field6?: string,
Item6?: string,
Field7?: string,
Item7?: string,
Field8?: string,
Item8?: string,
Field9?: string,
Item9?: string,
Field10?: string,
Item10?: string,
Field11?: string,
Item11?: string,
Field12?: string,
Item12?: string,
Field13?: string,
Item13?: string,
Field14?: string,
Item14?: string): Excel$Range;
GrandTotalName: string;
HasAutoFormat: boolean;
HiddenFields: Excel$PivotFieldsResult;
InGridDropZones: boolean;
InnerDetail: string;
LayoutRowDefault: Excel$XlLayoutRowType;
ListFormulas(): void;
Location: string;
ManualUpdate: boolean;
MDX: string;
MergeLabels: boolean;
Excel$Name: string;
NullString: string;
PageFieldOrder: number;
PageFields: Excel$PivotFieldsResult;
PageFieldStyle: string;
PageFieldWrapCount: number;
PageRange: Excel$Range;
PageRangeCells: Excel$Range;
Parent: any;
PivotCache(): Excel$PivotCache;
PivotColumnAxis: Excel$PivotAxis;
Excel$PivotFields: Excel$PivotFieldsResult;
Excel$PivotFormulas: Excel$PivotFormulas;
PivotRowAxis: Excel$PivotAxis;

/**
 * @param Mode [Mode=0]
 */
PivotSelect(
Excel$Name: string,
Mode?: Excel$XlPTSelectionMode,
UseStandardName?: boolean): void;
PivotSelection: string;
PivotSelectionStandard: string;
PivotTableWizard(): void;
PivotTableWizard<TSourceType>(
SourceType: TSourceType,
SourceData: Excel$PivotTableWizardSourceData<TSourceType>,
TableDestination?: Excel$Range,
TableName?: string,
RowGrand?: boolean,
ColumnGrand?: boolean,
SaveData?: boolean,
HasAutoFormat?: boolean,
AutoPage?: Excel$PivotTableWizardAutoPage<TSourceType>,
Reserved?: void,
BackgroundQuery?: boolean,
OptimizeCache?: boolean,
PageFieldOrder?: Excel$XlOrder,
PageFieldWrapCount?: number,
ReadData?: boolean,
Connection?: string): void;
PreserveFormatting: boolean;
PrintDrillIndicators: boolean;
PrintTitles: boolean;
RefreshDataSourceValues(): void;
RefreshDate: VarDate;
RefreshName: string;
RefreshTable(): boolean;
RepeatAllLabels(Repeat: Excel$XlPivotFieldRepeatLabels): void;
RepeatItemsOnEachPrintedPage: boolean;
RowAxisLayout(RowLayout: Excel$XlLayoutRowType): void;
RowFields: Excel$PivotFieldsResult;
RowGrand: boolean;
RowRange: Excel$Range;
SaveData: boolean;
SelectionMode: Excel$XlPTSelectionMode;
ShowCellBackgroundFromOLAP: boolean;
ShowDrillIndicators: boolean;
ShowPageMultipleItemLabel: boolean;
ShowPages(PageField?: string): any;
ShowTableStyleColumnHeaders: boolean;
ShowTableStyleColumnStripes: boolean;
ShowTableStyleLastColumn: boolean;
ShowTableStyleRowHeaders: boolean;
ShowTableStyleRowStripes: boolean;
ShowValuesRow: boolean;
Excel$Slicers: Excel$Slicers;
SmallGrid: boolean;
SortUsingCustomLists: boolean;
SourceData: any;
SubtotalHiddenPageItems: boolean;
SubtotalLocation(Location: Excel$XlSubtototalLocationType): void;
Summary: string;
TableRange1: Excel$Range;
TableRange2: Excel$Range;
Excel$TableStyle: string;
TableStyle2: any;
Tag: string;
TotalsAnnotation: boolean;
Update(): void;
VacatedStyle: string;
Value: string;
Version: Excel$XlPivotTableVersionList;
ViewCalculatedMembers: boolean;
VisibleFields: Excel$PivotFieldsResult;
VisualTotals: boolean;
VisualTotalsForSets: boolean
}

declare interface Excel$PivotTableChangeList {
_Default(Index: any): Excel$ValueChange,
Add(
Tuple: string,
Value: number,
AllocationValue?: any,
AllocationMethod?: any,
AllocationWeightExpression?: any): Excel$ValueChange,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$ValueChange,
+Parent: any,
(Index: number | string): Excel$ValueChange
} 

declare class Excel$PlotArea  {
constructor(): this;
_InsideHeight: number;
_InsideLeft: number;
_InsideTop: number;
_InsideWidth: number;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Height: number;
InsideHeight: number;
InsideLeft: number;
InsideTop: number;
InsideWidth: number;
Excel$Interior: Excel$Interior;
Left: number;
Excel$Name: string;
Parent: any;
Position: Excel$XlChartElementPosition;
Select(): any;
Top: number;
Width: number
}

declare class Excel$Point  {
constructor(): this;

/**
 * @param Type [Type=2]
 */
_ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: any,
AutoText?: any,
HasLeaderLines?: any): any;
Excel$Application: Excel$Application;

/**
 * @param Type [Type=2]
 */
ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: boolean,
AutoText?: boolean,
HasLeaderLines?: boolean,
ShowSeriesName?: boolean,
ShowCategoryName?: boolean,
ShowValue?: boolean,
ShowPercentage?: boolean,
ShowBubbleSize?: boolean,
Separator?: string): any;
ApplyPictToEnd: boolean;
ApplyPictToFront: boolean;
ApplyPictToSides: boolean;
Excel$Border: Excel$Border;
ClearFormats(): any;
Copy(): any;
Creator: Excel$XlCreator;
Excel$DataLabel: Excel$DataLabel;
Delete(): any;
Explosion: number;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Has3DEffect: boolean;
HasDataLabel: boolean;
Height: number;
Excel$Interior: Excel$Interior;
InvertIfNegative: boolean;
Left: number;
MarkerBackgroundColor: number;
MarkerBackgroundColorIndex: Excel$XlColorIndex;
MarkerForegroundColor: number;
MarkerForegroundColorIndex: Excel$XlColorIndex;
MarkerSize: number;
MarkerStyle: Excel$XlMarkerStyle;
Excel$Name: string;
Parent: any;
Paste(): any;
PictureType: Excel$XlChartPictureType;
PictureUnit: number;
PictureUnit2: number;

/**
 * @param Index [Index=2]
 */
PieSliceLocation(loc: Excel$XlPieSliceLocation, Index?: Excel$XlPieSliceIndex): number;
SecondaryPlot: boolean;
Select(): any;
Shadow: boolean;
Top: number;
Width: number
}

declare interface Excel$Points {
_Default(Index: number): Excel$Point,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Point,
+Parent: any,
(Index: number): Excel$Point
} 

declare class Excel$ProtectedViewWindow  {
constructor(): this;
_Default: string;
Activate(): void;
Caption: string;
Close(): boolean;
Edit(WriteResPassword?: string, UpdateLinks?: 0 | 1): Excel$Workbook;
EnableResize: boolean;
Height: number;
Left: number;
SourceName: string;
SourcePath: string;
Top: number;
Visible: boolean;
Width: number;
WindowState: Excel$XlProtectedViewWindowState;
Excel$Workbook: Excel$Workbook
}

declare interface Excel$ProtectedViewWindows {
_Default(Index: any): Excel$ProtectedViewWindow,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$ProtectedViewWindow,
Open(
Filename: string,
Password?: string,
AddToMru?: boolean,
RepairMode?: boolean): Excel$ProtectedViewWindow,
+Parent: any,
(Index: number | string): Excel$ProtectedViewWindow
} 

declare class Excel$Protection  {
constructor(): this;
AllowDeletingColumns: boolean;
AllowDeletingRows: boolean;
Excel$AllowEditRanges: Excel$AllowEditRanges;
AllowFiltering: boolean;
AllowFormattingCells: boolean;
AllowFormattingColumns: boolean;
AllowFormattingRows: boolean;
AllowInsertingColumns: boolean;
AllowInsertingHyperlinks: boolean;
AllowInsertingRows: boolean;
AllowSorting: boolean;
AllowUsingPivotTables: boolean
}

declare class Excel$PublishObject  {
constructor(): this;
Excel$Application: Excel$Application;
AutoRepublish: boolean;
Creator: Excel$XlCreator;
Delete(): void;
DivID: string;
Filename: string;
HtmlType: Excel$XlHtmlType;
Parent: any;
Publish(Create?: boolean): void;
Excel$Sheet: string;
Source: string;
SourceType: Excel$XlSourceType;
Title: string
}

declare interface Excel$PublishObjects {
_Default(Index: any): Excel$PublishObject,
Add(
SourceType: Excel$XlSourceType,
Filename: string,
Excel$Sheet?: string,
Source?: Excel$XlSourceType.xlSourceAutoFilter
| Excel$XlSourceType.xlSourceChart
| Excel$XlSourceType.xlSourcePivotTable
| Excel$XlSourceType.xlSourcePrintArea
| Excel$XlSourceType.xlSourceQuery
| Excel$XlSourceType.xlSourceRange,
HtmlType?: Excel$XlHtmlType,
DivID?: string,
Title?: string): Excel$PublishObject,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
Item(Index: number | string): Excel$PublishObject,
+Parent: any,
Publish(): void,
(Index: number | string): Excel$PublishObject
} 

declare class Excel$QueryTable  {
constructor(): this;
AdjustColumnWidth: boolean;
Excel$Application: Excel$Application;
BackgroundQuery: boolean;
CancelRefresh(): void;
CommandText: string;
CommandType: Excel$XlCmdType;
Connection: string;
Creator: Excel$XlCreator;
Delete(): void;
Destination: Excel$Range;
EditWebPage: string;
EnableEditing: boolean;
EnableRefresh: boolean;
FetchedRowOverflow: boolean;
FieldNames: boolean;
FillAdjacentFormulas: boolean;
HasAutoFormat: boolean;
Excel$ListObject: Excel$ListObject;
MaintainConnection: boolean;
Excel$Name: string;
Excel$Parameters: Excel$Parameters;
Parent: any;
PostText: string;
PreserveColumnInfo: boolean;
PreserveFormatting: boolean;
QueryType: Excel$XlQueryType;
Recordset: DAO.Recordset | ADODB.Recordset;
Refresh(BackgroundQuery?: boolean): boolean;
Refreshing: boolean;
RefreshOnFileOpen: boolean;
RefreshPeriod: number;
RefreshStyle: Excel$XlCellInsertionMode;
ResetTimer(): void;
ResultRange: Excel$Range;
RobustConnect: Excel$XlRobustConnect;
RowNumbers: boolean;
SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
SaveData: boolean;
SavePassword: boolean;
Excel$Sort: Excel$Sort;
SourceConnectionFile: string;
SourceDataFile: string;
Sql: any;
TablesOnlyFromHTML: boolean;
TextFileColumnDataTypes: SafeArray<Excel$XlColumnDataType>;
TextFileCommaDelimiter: boolean;
TextFileConsecutiveDelimiter: boolean;
TextFileDecimalSeparator: string;
TextFileFixedColumnWidths: SafeArray<number>;
TextFileOtherDelimiter: string;
TextFileParseType: Excel$XlTextParsingType;
TextFilePlatform: number;
TextFilePromptOnRefresh: boolean;
TextFileSemicolonDelimiter: boolean;
TextFileSpaceDelimiter: boolean;
TextFileStartRow: number;
TextFileTabDelimiter: boolean;
TextFileTextQualifier: Excel$XlTextQualifier;
TextFileThousandsSeparator: string;
TextFileTrailingMinusNumbers: boolean;
TextFileVisualLayout: Excel$XlTextVisualLayoutType;
WebConsecutiveDelimitersAsOne: boolean;
WebDisableDateRecognition: boolean;
WebDisableRedirections: boolean;
WebFormatting: Excel$XlWebFormatting;
WebPreFormattedTextToColumns: boolean;
WebSelectionType: Excel$XlWebSelectionType;
WebSingleBlockTextImport: boolean;
WebTables: string;
Excel$WorkbookConnection: Excel$WorkbookConnection
}

declare interface Excel$QueryTables {
_Default(Index: any): Excel$QueryTable,
Add(
Connection: Excel$QueryTable | DAO.Recordset | ADODB.Recordset,
Destination: Excel$Range): Excel$QueryTable,
Add(Connection: string, Destination: Excel$Range, Sql?: string): Excel$QueryTable,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$QueryTable,
+Parent: any,
(Index: number | string): Excel$QueryTable
} 

declare interface Excel$Range {
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): any,

/**
 * @param Weight [Weight=2]
 * @param ColorIndex [ColorIndex=-4105]
 */
_BorderAround(
Excel$LineStyle: any,
Weight?: Excel$XlBorderWeight,
ColorIndex?: Excel$XlColorIndex,
Color?: any): any,
_Default(RowIndex?: any, ColumnIndex?: any): any,

/**
 * @param Paste [Paste=-4104]
 * @param Operation [Operation=-4142]
 */
_PasteSpecial(
Paste?: Excel$XlPasteType,
Operation?: Excel$XlPasteSpecialOperation,
SkipBlanks?: any,
Transpose?: any): any,
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): any,
Activate(): any,
AddComment(Text?: string): Excel$Comment,
AddIndent: boolean,

/**
 * @param ReferenceStyle [ReferenceStyle=1]
 */
Address(
RowAbsolute?: boolean,
ColumnAbsolute?: boolean,
ReferenceStyle?: Excel$XlReferenceStyle,
External?: boolean,
RelativeTo?: Excel$Range): string,

/**
 * @param ReferenceStyle [ReferenceStyle=1]
 */
AddressLocal(
RowAbsolute?: boolean,
ColumnAbsolute?: boolean,
ReferenceStyle?: Excel$XlReferenceStyle,
External?: boolean,
RelativeTo?: Excel$Range): string,
AdvancedFilter(
Excel$Action: Excel$XlFilterAction.xlFilterCopy,
CriteriaRange?: Excel$Range,
CopyToRange?: Excel$Range,
Unique?: boolean): any,
AdvancedFilter(
Excel$Action: Excel$XlFilterAction,
CriteriaRange?: Excel$Range,
CopyToRange?: void,
Unique?: boolean): any,
AllocateChanges(): void,
+AllowEdit: boolean,
+Excel$Application: Excel$Application,

/**
 * @param Order [Order=1]
 */
ApplyNames(
Excel$Names?: SafeArray<string>,
IgnoreRelativeAbsolute?: boolean,
UseRowColumnNames?: boolean,
OmitColumn?: boolean,
OmitRow?: boolean,
Order?: Excel$XlApplyNamesOrder,
AppendLast?: boolean): any,
ApplyOutlineStyles(): any,
+Excel$Areas: Excel$Areas,
AutoComplete(String: string): string,

/**
 * @param Type [Type=0]
 */
AutoFill(Destination: Excel$Range, Type?: Excel$XlAutoFillType): any,

/**
 * @param Operator [Operator=1]
 */
AutoFilter(
Field: number,
Criteria1: string,
Operator?: Excel$XlAutoFilterOperator,
Criteria2?: string,
VisibleDropDown?: boolean): any,
AutoFit(): any,

/**
 * @param Format [Format=1]
 */
AutoFormat(
Format?: Excel$XlRangeAutoFormat,
Number?: any,
Excel$Font?: any,
Alignment?: any,
Excel$Border?: any,
Pattern?: any,
Width?: any): any,
AutoOutline(): any,

/**
 * @param Weight [Weight=2]
 * @param ColorIndex [ColorIndex=-4105]
 */
BorderAround(
Excel$LineStyle?: Excel$XlLineStyle,
Weight?: Excel$XlBorderWeight,
ColorIndex?: Excel$XlColorIndex,
Color?: number,
ThemeColor?: number | Excel$XlThemeColor): any,
+Excel$Borders: Excel$Borders,
Calculate(): any,
CalculateRowMajorOrder(): any,
+Cells: Excel$Range,
Characters(Start?: number, Length?: number): Excel$Characters,
CheckSpelling(
CustomDictionary?: string,
IgnoreUppercase?: boolean,
AlwaysSuggest?: boolean,
SpellLang?: Office.MsoLanguageID): any,
Clear(): any,
ClearComments(): void,
ClearContents(): any,
ClearFormats(): any,
ClearHyperlinks(): void,
ClearNotes(): any,
ClearOutline(): any,
+Column: number,
ColumnDifferences(Comparison: Excel$Range): Excel$Range,
+Columns: Excel$Range,
ColumnWidth: number | null,
+Excel$Comment: Excel$Comment,
Consolidate(
Sources?: SafeArray<string>,
Function?: Excel$XlConsolidationFunction,
TopRow?: boolean,
LeftColumn?: boolean,
CreateLinks?: boolean): any,
Copy(Destination?: Excel$Range): any,
CopyFromRecordset(
Data: DAO.Recordset | ADODB.Recordset,
MaxRows?: number,
MaxColumns?: number): number,

/**
 * @param Appearance [Appearance=1]
 * @param Format [Format=-4147]
 */
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): any,
+Count: number,
+CountLarge: number,
CreateNames(Top?: boolean, Left?: boolean, Bottom?: boolean, Right?: boolean): any,

/**
 * @param Appearance [Appearance=1]
 */
CreatePublisher(
Edition: any,
Appearance?: Excel$XlPictureAppearance,
ContainsPICT?: any,
ContainsBIFF?: any,
ContainsRTF?: any,
ContainsVALU?: any): any,
+Creator: Excel$XlCreator,
+CurrentArray: Excel$Range,
+CurrentRegion: Excel$Range,
Cut(Destination?: Excel$Range): any,

/**
 * @param Type [Type=-4132]
 * @param Date [Date=1]
 * @param Step [Step=1]
 */
DataSeries(
Rowcol: Excel$XlRowCol,
Type?: Excel$XlDataSeriesType,
Date?: Excel$XlDataSeriesDate,
Step?: number,
Stop?: number,
Trend?: boolean): any,
Delete(Shift?: Excel$XlDeleteShiftDirection): any,
+Dependents: Excel$Range,
DialogBox(): number | false,
+DirectDependents: Excel$Range,
+DirectPrecedents: Excel$Range,
Dirty(): void,
DiscardChanges(): void,
+Excel$DisplayFormat: Excel$DisplayFormat,

/**
 * @param Appearance [Appearance=1]
 * @param ChartSize [ChartSize=1]
 */
EditionOptions(
Type: Excel$XlEditionType,
Option: Excel$XlEditionOptionsOption,
Excel$Name: any,
Reference: any,
Appearance?: Excel$XlPictureAppearance,
ChartSize?: Excel$XlPictureAppearance,
Format?: any): any,
End(Direction: Excel$XlDirection): Excel$Range,
+EntireColumn: Excel$Range,
+EntireRow: Excel$Range,
+Excel$Errors: Excel$Errors,
ExportAsFixedFormat(
Type: Excel$XlFixedFormatType,
Filename?: string,
Quality?: Excel$XlFixedFormatQuality,
IncludeDocProperties?: boolean,
IgnorePrintAreas?: boolean,
From?: number,
To?: number,
OpenAfterPublish?: boolean,
FixedFormatExtClassPtr?: any): void,
FillDown(): any,
FillLeft(): any,
FillRight(): any,
FillUp(): any,

/**
 * @param SearchDirection [SearchDirection=1]
 */
Find(
What: any,
After?: any,
LookIn?: Excel$XlFindLookIn,
LookAt?: Excel$XlLookAt,
SearchOrder?: Excel$XlSearchOrder,
SearchDirection?: Excel$XlSearchDirection,
MatchCase?: boolean,
MatchByte?: boolean,
SearchFormat?: any): Excel$Range,
FindNext(After?: any): Excel$Range,
FindPrevious(After?: any): Excel$Range,
+Excel$Font: Excel$Font,
+Excel$FormatConditions: Excel$FormatConditions,
Formula: string | SafeArray<string>,
FormulaArray: string | SafeArray<string> | null,
FormulaHidden: boolean | null,
FormulaLabel: Excel$XlFormulaLabel,
FormulaLocal: string | SafeArray<string>,
FormulaR1C1: string | SafeArray<string>,
FormulaR1C1Local: string | SafeArray<string>,
FunctionWizard(): any,
GoalSeek(Goal: any, ChangingCell: Excel$Range): boolean,
Group(Start?: any, End?: any, By?: number, Periods?: SafeArray<boolean>): any,
+HasArray: boolean,
+HasFormula: boolean | null,
Height: number,
Hidden: boolean,
HorizontalAlignment: Excel$HorizontalAlignments,
+Excel$Hyperlinks: Excel$Hyperlinks,
ID: string,
IndentLevel: 0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15,
Insert(Shift?: Excel$XlInsertShiftDirection, CopyOrigin?: any): any,
InsertIndent(InsertAmount: number): void,
+Excel$Interior: Excel$Interior,
Item(RowIndex: number, ColumnIndex?: number): Excel$Range,
Item(Address: string): Excel$Range,
Justify(): any,
+Left: number,
+ListHeaderRows: number,
ListNames(): any,
+Excel$ListObject: Excel$ListObject,
+LocationInTable: Excel$XlLocationInTable,
Locked: boolean | null,
+MDX: string,
Merge(Across?: boolean): void,
+MergeArea: Excel$Range,
MergeCells: boolean,
Excel$Name: string | Excel$Name,
NavigateArrow(TowardPrecedent?: boolean, ArrowNumber?: number, LinkNumber?: number): any,
+Next: Excel$Range,
NoteText(Text?: string, Start?: number, Length?: number): string,
NumberFormat: string | null,
NumberFormatLocal: string | null,
Offset(RowOffset?: number, ColumnOffset?: number): Excel$Range,
Orientation: number | Excel$XlOrientation,
OutlineLevel: number,
PageBreak: number,
+Parent: any,
Parse(ParseLine?: string, Destination?: Excel$Range): any,

/**
 * @param Paste [Paste=-4104]
 * @param Operation [Operation=-4142]
 */
PasteSpecial(
Paste?: Excel$XlPasteType,
Operation?: Excel$XlPasteSpecialOperation,
SkipBlanks?: boolean,
Transpose?: boolean): any,
+Excel$Phonetic: Excel$Phonetic,
+Excel$Phonetics: Excel$Phonetics,
+Excel$PivotCell: Excel$PivotCell,
+Excel$PivotField: Excel$PivotField,
+Excel$PivotItem: Excel$PivotItem,
+Excel$PivotTable: Excel$PivotTable,
+Precedents: Excel$Range,
+PrefixCharacter: "'"
| "\""
| "^"
| "\\"
| "",
+Previous: Excel$Range,
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>): any,
PrintPreview(EnableChanges?: boolean): any,
+Excel$QueryTable: Excel$QueryTable,
Range(Cell1: string | Excel$Range, Cell2?: string | Excel$Range): Excel$Range,
ReadingOrder: number,

/**
 * @param Header [Header=2]
 */
RemoveDuplicates(Columns: SafeArray<number>, Header?: Excel$XlYesNoGuess): void,
RemoveSubtotal(): any,
Replace(
What: string,
Replacement: string,
LookAt?: Excel$XlLookAt,
SearchOrder?: Excel$XlSearchOrder,
MatchCase?: boolean,
MatchByte?: boolean,
SearchFormat?: boolean,
ReplaceFormat?: boolean): boolean,
Resize(RowSize?: number, ColumnSize?: number): Excel$Range,
+Row: number,
RowDifferences(Comparison: Excel$Range): Excel$Range,
RowHeight: number | null,
+Rows: Excel$Range,
Run(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any,
Select(): any,
+ServerActions: Excel$Actions,
SetPhonetic(): void,
Show(): any,
ShowDependents(Remove?: boolean): any,
ShowDetail: any,
ShowErrors(): any,
ShowPrecedents(Remove?: boolean): any,
ShrinkToFit: boolean | null,
+Excel$SmartTags: Excel$SmartTags,

/**
 * @param Order1 [Order1=1]
 * @param Order2 [Order2=1]
 * @param Order3 [Order3=1]
 * @param Header [Header=2]
 * @param Orientation [Orientation=2]
 * @param SortMethod [SortMethod=1]
 * @param DataOption1 [DataOption1=0]
 * @param DataOption2 [DataOption2=0]
 * @param DataOption3 [DataOption3=0]
 */
Sort(
Key1: string | Excel$Range,
Order1?: Excel$XlSortOrder,
Key2?: any,
Type?: any,
Order2?: Excel$XlSortOrder,
Key3?: any,
Order3?: Excel$XlSortOrder,
Header?: Excel$XlYesNoGuess,
OrderCustom?: number,
MatchCase?: boolean,
Orientation?: Excel$XlSortOrientation,
SortMethod?: Excel$XlSortMethod,
DataOption1?: Excel$XlSortDataOption,
DataOption2?: Excel$XlSortDataOption,
DataOption3?: Excel$XlSortDataOption): any,

/**
 * @param SortMethod [SortMethod=1]
 * @param Order1 [Order1=1]
 * @param Order2 [Order2=1]
 * @param Order3 [Order3=1]
 * @param Header [Header=2]
 * @param Orientation [Orientation=2]
 * @param DataOption1 [DataOption1=0]
 * @param DataOption2 [DataOption2=0]
 * @param DataOption3 [DataOption3=0]
 */
SortSpecial(
SortMethod?: Excel$XlSortMethod,
Key1?: string | Excel$Range,
Order1?: Excel$XlSortOrder,
Type?: any,
Key2?: string | Excel$Range,
Order2?: Excel$XlSortOrder,
Key3?: string | Excel$Range,
Order3?: Excel$XlSortOrder,
Header?: Excel$XlYesNoGuess,
OrderCustom?: number,
MatchCase?: boolean,
Orientation?: Excel$XlSortOrientation,
DataOption1?: Excel$XlSortDataOption,
DataOption2?: Excel$XlSortDataOption,
DataOption3?: Excel$XlSortDataOption): any,
+Excel$SoundNote: Excel$SoundNote,
+Excel$SparklineGroups: Excel$SparklineGroups,
Speak(SpeakDirection?: Excel$XlSpeakDirection, SpeakFormulas?: boolean): void,
SpecialCells(
Type: Excel$XlCellType.xlCellTypeConstants | Excel$XlCellType.xlCellTypeFormulas,
Value?: Excel$XlSpecialCellsValue): Excel$Range,
SpecialCells(Type: Excel$XlCellType): Excel$Range,
Excel$Style: Excel$Style,

/**
 * @param Format [Format=-4158]
 */
SubscribeTo(Edition: string, Format?: Excel$XlSubscribeToFormat): any,

/**
 * @param SummaryBelowData [SummaryBelowData=1]
 */
Subtotal(
GroupBy: number,
Function: Excel$XlConsolidationFunction,
TotalList: SafeArray<number>,
Replace: boolean,
PageBreaks: boolean,
SummaryBelowData?: Excel$XlSummaryRow): any,
+Summary: boolean,
Table(RowInput?: Excel$Range, ColumnInput?: Excel$Range): any,
+Text: string,

/**
 * @param DataType [DataType=1]
 * @param TextQualifier [TextQualifier=1]
 */
TextToColumns(
Destination: Excel$Range,
DataType?: Excel$XlTextParsingType,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: boolean,
Excel$Tab?: boolean,
Semicolon?: boolean,
Comma?: boolean,
Space?: boolean,
Other?: boolean,
OtherChar?: string,
FieldInfo?: SafeArray,
DecimalSeparator?: string,
ThousandsSeparator?: string,
TrailingMinusNumbers?: any): any,
+Top: number,
Ungroup(): any,
UnMerge(): void,
UseStandardHeight: boolean | null,
UseStandardWidth: boolean | null,
+Excel$Validation: Excel$Validation,
Value: Exclude<any, Function> & ((RangeValueDataType?: Excel$XlRangeValueDataType) => any),
Value2: any,
VerticalAlignment: Excel$VerticalAlignments,
+Width: number,
+Excel$Worksheet: Excel$Worksheet,
WrapText: boolean | null,
+Excel$XPath: Excel$XPath,
(RowIndex: number, ColumnIndex?: number): Excel$Range,
(Address: string): Excel$Range
} 

declare interface Excel$Ranges {
_Default(Index: any): Excel$Range,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$Range,
+Parent: any,
(Index: any): Excel$Range
} 

declare class Excel$RecentFile  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Index: number;
Excel$Name: string;
Open(): Excel$Workbook;
Parent: any;
Path: string
}

declare interface Excel$RecentFiles {
_Default(Index: number): Excel$RecentFile,
Add(Excel$Name: string): Excel$RecentFile,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$RecentFile,
Maximum: number,
+Parent: any,
(Index: number): Excel$RecentFile
} 

declare class Excel$Research  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
IsResearchService(ServiceID: string): boolean;
Parent: any;
Query(
ServiceID: string,
QueryString?: string,
QueryLanguage?: any,
UseSelection?: boolean,
LaunchQuery?: boolean): any;
SetLanguagePair(LanguageFrom: number, LanguageTo: number): any
}

declare class Excel$RoutingSlip  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delivery: Excel$XlRoutingSlipDelivery;
Message: any;
Parent: any;
Recipients(Index?: any): any;
Reset(): any;
ReturnWhenDone: boolean;
Status: Excel$XlRoutingSlipStatus;
Subject: any;
TrackStatus: boolean
}

declare class Excel$RTD  {
constructor(): this;
RefreshData(): void;
RestartServers(): void;
ThrottleInterval: number
}

declare class Excel$Scenario  {
constructor(): this;
Excel$Application: Excel$Application;
ChangeScenario(ChangingCells: Excel$Range, Values?: SafeArray): any;
ChangingCells: Excel$Range;
Excel$Comment: string;
Creator: Excel$XlCreator;
Delete(): any;
Hidden: boolean;
Index: number;
Locked: boolean;
Excel$Name: string;
Parent: any;
Show(): any;
Values(): SafeArray;
Values(Index: number): any
}

declare interface Excel$Scenarios {
Add(
Excel$Name: string,
ChangingCells: Excel$Range,
Values?: SafeArray,
Excel$Comment?: string,
Locked?: boolean,
Hidden?: boolean): Excel$Scenario,
+Excel$Application: Excel$Application,
+Count: number,

/**
 * @param ReportType [ReportType=1]
 */
CreateSummary(ReportType?: Excel$XlSummaryReportType, ResultCells?: Excel$Range): any,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Scenario,
Merge(Source: string | Excel$Worksheet): any,
+Parent: any,
(Index: number | string): Excel$Scenario
} 

declare class Excel$Series  {
constructor(): this;

/**
 * @param Type [Type=2]
 */
_ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: any,
AutoText?: any,
HasLeaderLines?: any): any;
Excel$Application: Excel$Application;
ApplyCustomType(ChartType: Excel$XlChartType): void;

/**
 * @param Type [Type=2]
 */
ApplyDataLabels(
Type?: Excel$XlDataLabelsType,
Excel$LegendKey?: boolean,
AutoText?: boolean,
HasLeaderLines?: boolean,
ShowSeriesName?: boolean,
ShowCategoryName?: boolean,
ShowValue?: boolean,
ShowPercentage?: boolean,
ShowBubbleSize?: boolean,
Separator?: string): any;
ApplyPictToEnd: boolean;
ApplyPictToFront: boolean;
ApplyPictToSides: boolean;
AxisGroup: Excel$XlAxisGroup;
BarShape: Excel$XlBarShape;
Excel$Border: Excel$Border;
BubbleSizes: string;
ChartType: Excel$XlChartType;
ClearFormats(): any;
Copy(): any;
Creator: Excel$XlCreator;
Excel$DataLabels: Excel$DataLabels & ((Index: number) => Excel$DataLabel);
Delete(): any;
ErrorBar(
Direction: Excel$XlErrorBarDirection,
Include: Excel$XlErrorBarInclude,
Type: Excel$XlErrorBarType,
Amount?: any,
MinusValues?: any): any;
Excel$ErrorBars: Excel$ErrorBars;
Explosion: number;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Formula: string;
FormulaLocal: string;
FormulaR1C1: string;
FormulaR1C1Local: string;
Has3DEffect: boolean;
HasDataLabels: boolean;
HasErrorBars: boolean;
HasLeaderLines: boolean;
Excel$Interior: Excel$Interior;
InvertColor: number;
InvertColorIndex: number;
InvertIfNegative: boolean;
Excel$LeaderLines: Excel$LeaderLines;
MarkerBackgroundColor: number;
MarkerBackgroundColorIndex: Excel$XlColorIndex;
MarkerForegroundColor: number;
MarkerForegroundColorIndex: Excel$XlColorIndex;
MarkerSize: number;
MarkerStyle: Excel$XlMarkerStyle;
Excel$Name: string;
Parent: any;
Paste(): any;
PictureType: Excel$XlChartPictureType;
PictureUnit: number;
PictureUnit2: number;
PlotColorIndex: number;
PlotOrder: number;
Excel$Points: Excel$Points & ((Index: number) => Excel$Point);
Select(): any;
Shadow: boolean;
Smooth: boolean;
Excel$Trendlines: Excel$Trendlines & ((Index: number | string) => Excel$Trendline);
Type: number;
Values: Excel$Range | SafeArray<number>;
XValues: Excel$Range | SafeArray<number>
}

declare interface Excel$SeriesCollection {
_Default(Index: any): Excel$Series,

/**
 * @param Rowcol [Rowcol=-4105]
 */
Add(
Source: Excel$Range,
Rowcol?: Excel$XlRowCol,
SeriesLabels?: boolean,
CategoryLabels?: boolean,
Replace?: boolean): Excel$Series,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Extend(Source: Excel$Range, Rowcol?: Excel$XlRowCol, CategoryLabels?: boolean): any,
Item(Index: number | string): Excel$Series,
NewSeries(): Excel$Series,
+Parent: any,

/**
 * @param Rowcol [Rowcol=-4105]
 */
Paste(
Rowcol?: Excel$XlRowCol,
SeriesLabels?: boolean,
CategoryLabels?: boolean,
Replace?: boolean,
NewSeries?: boolean): any,
(Index: number | string): Excel$Series
} 

declare class Excel$SeriesLines  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Format: Excel$ChartFormat;
Excel$Name: string;
Parent: any;
Select(): any
}

declare interface Excel$ServerViewableItems {
_Default(Index: any): any,
Add(Obj: any): any,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(Index: number): void,
DeleteAll(): void,
Item(Index: number): any,
+Parent: any,
(Index: number): any
} 

declare class Excel$ShadowFormat  {
constructor(): this;
Excel$Application: any;
Blur: number;
Creator: number;
ForeColor: Excel$ColorFormat;
IncrementOffsetX(Increment: number): void;
IncrementOffsetY(Increment: number): void;
Obscured: Office.MsoTriState;
OffsetX: number;
OffsetY: number;
Parent: any;
RotateWithShape: Office.MsoTriState;
Size: number;
Excel$Style: Office.MsoShadowStyle;
Transparency: number;
Type: Office.MsoShadowType;
Visible: Office.MsoTriState
}

declare class Excel$Shape  {
constructor(): this;
Excel$Adjustments: Excel$Adjustments;
AlternativeText: string;
Excel$Application: Excel$Application;
Apply(): void;
AutoShapeType: Office.MsoAutoShapeType;
BackgroundStyle: Office.MsoBackgroundStyleIndex;
BlackWhiteMode: Office.MsoBlackWhiteMode;
BottomRightCell: Excel$Range;
Callout: Excel$CalloutFormat;
CanvasCropBottom(Increment: number): void;
CanvasCropLeft(Increment: number): void;
CanvasCropRight(Increment: number): void;
CanvasCropTop(Increment: number): void;
CanvasItems: Office.CanvasShapes;
Excel$Chart: Excel$Chart;
Child: Office.MsoTriState;
ConnectionSiteCount: number;
Connector: Office.MsoTriState;
Excel$ConnectorFormat: Excel$ConnectorFormat;
Excel$ControlFormat: Excel$ControlFormat;
Copy(): void;
CopyPicture(
Appearance?: Excel$XlPictureAppearance,
Format?: Excel$XlCopyPictureFormat): void;
Creator: Excel$XlCreator;
Cut(): void;
Delete(): void;
Excel$Diagram: Excel$Diagram;
Excel$DiagramNode: Excel$DiagramNode;
DrawingObject: any;
Duplicate(): Excel$Shape;
Fill: Excel$FillFormat;
Flip(FlipCmd: Office.MsoFlipCmd): void;
FormControlType: Excel$XlFormControl;
Glow: Office.GlowFormat;
GroupItems: Excel$GroupShapes;
HasChart: Office.MsoTriState;
HasDiagram: Office.MsoTriState;
HasDiagramNode: Office.MsoTriState;
HasSmartArt: Office.MsoTriState;
Height: number;
HorizontalFlip: Office.MsoTriState;
Excel$Hyperlink: Excel$Hyperlink;
ID: number;
IncrementLeft(Increment: number): void;
IncrementRotation(Increment: number): void;
IncrementTop(Increment: number): void;
Left: number;
Line: Excel$LineFormat;
Excel$LinkFormat: Excel$LinkFormat;
LockAspectRatio: Office.MsoTriState;
Locked: boolean;
Excel$Name: string;
Nodes: Excel$ShapeNodes;
Excel$OLEFormat: Excel$OLEFormat;
OnAction: string;
Parent: any;
ParentGroup: Excel$Shape;
PickUp(): void;
Excel$PictureFormat: Excel$PictureFormat;
Placement: Excel$XlPlacement;
Reflection: Office.ReflectionFormat;
RerouteConnections(): void;
Rotation: number;
ScaleHeight(
Factor: number,
RelativeToOriginalSize: Office.MsoTriState,
Scale?: Office.MsoScaleFrom): void;
ScaleWidth(
Factor: number,
RelativeToOriginalSize: Office.MsoTriState,
Scale?: Office.MsoScaleFrom): void;
Script: Office.Script;
Select(Replace?: boolean): void;
SetShapesDefaultProperties(): void;
Shadow: Excel$ShadowFormat;
ShapeStyle: Office.MsoShapeStyleIndex;
SmartArt: Office.SmartArt;
SoftEdge: Office.SoftEdgeFormat;
TextEffect: Excel$TextEffectFormat;
Excel$TextFrame: Excel$TextFrame;
Excel$TextFrame2: Excel$TextFrame2;
ThreeD: Excel$ThreeDFormat;
Title: string;
Top: number;
TopLeftCell: Excel$Range;
Type: Office.MsoShapeType;
Ungroup(): Excel$ShapeRange;
VerticalFlip: Office.MsoTriState;
Vertices: SafeArray<number>;
Visible: Office.MsoTriState;
Width: number;
ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
ZOrderPosition: number
}

declare class Excel$ShapeNode  {
constructor(): this;
Excel$Application: any;
Creator: number;
EditingType: Office.MsoEditingType;
Parent: any;
Excel$Points: SafeArray<number>;
SegmentType: Office.MsoSegmentType
}

declare interface Excel$ShapeNodes {
+Excel$Application: any,
+Count: number,
+Creator: number,
Delete(Index: number): void,

/**
 * @param X2 [X2=0]
 * @param Y2 [Y2=0]
 * @param X3 [X3=0]
 * @param Y3 [Y3=0]
 */
Insert(
Index: number,
SegmentType: Office.MsoSegmentType,
EditingType: Office.MsoEditingType,
X1: number,
Y1: number,
X2?: number,
Y2?: number,
X3?: number,
Y3?: number): void,
Item(Index: number | string): Excel$ShapeNode,
+Parent: any,
SetEditingType(Index: number, EditingType: Office.MsoEditingType): void,
SetPosition(Index: number, X1: number, Y1: number): void,
SetSegmentType(Index: number, SegmentType: Office.MsoSegmentType): void,
(Index: number | string): Excel$ShapeNode
} 

declare interface Excel$ShapeRange {
_Default(Index: any): Excel$Shape,
+Excel$Adjustments: Excel$Adjustments,
Align(AlignCmd: Office.MsoAlignCmd, RelativeTo: Office.MsoTriState): void,
AlternativeText: string,
+Excel$Application: Excel$Application,
Apply(): void,
AutoShapeType: Office.MsoAutoShapeType,
BackgroundStyle: Office.MsoBackgroundStyleIndex,
BlackWhiteMode: Office.MsoBlackWhiteMode,
+Callout: Excel$CalloutFormat,
CanvasCropBottom(Increment: number): void,
CanvasCropLeft(Increment: number): void,
CanvasCropRight(Increment: number): void,
CanvasCropTop(Increment: number): void,
+CanvasItems: Office.CanvasShapes,
+Excel$Chart: Excel$Chart,
+Child: Office.MsoTriState,
+ConnectionSiteCount: number,
+Connector: Office.MsoTriState,
+Excel$ConnectorFormat: Excel$ConnectorFormat,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
+Excel$Diagram: Excel$Diagram,
+Excel$DiagramNode: Excel$DiagramNode,
Distribute(DistributeCmd: Office.MsoDistributeCmd, RelativeTo: Office.MsoTriState): void,
Duplicate(): Excel$ShapeRange,
+Fill: Excel$FillFormat,
Flip(FlipCmd: Office.MsoFlipCmd): void,
+Glow: Office.GlowFormat,
Group(): Excel$Shape,
+GroupItems: Excel$GroupShapes,
+HasChart: Office.MsoTriState,
+HasDiagram: Office.MsoTriState,
+HasDiagramNode: Office.MsoTriState,
Height: number,
+HorizontalFlip: Office.MsoTriState,
+ID: number,
IncrementLeft(Increment: number): void,
IncrementRotation(Increment: number): void,
IncrementTop(Increment: number): void,
Item(Index: number | string): Excel$Shape,
Left: number,
+Line: Excel$LineFormat,
LockAspectRatio: Office.MsoTriState,
Excel$Name: string,
+Nodes: Excel$ShapeNodes,
+Parent: any,
+ParentGroup: Excel$Shape,
PickUp(): void,
+Excel$PictureFormat: Excel$PictureFormat,
+Reflection: Office.ReflectionFormat,
Regroup(): Excel$Shape,
RerouteConnections(): void,
Rotation: number,
ScaleHeight(
Factor: number,
RelativeToOriginalSize: Office.MsoTriState,
Scale?: Office.MsoScaleFrom): void,
ScaleWidth(
Factor: number,
RelativeToOriginalSize: Office.MsoTriState,
Scale?: Office.MsoScaleFrom): void,
Select(Replace?: boolean): void,
SetShapesDefaultProperties(): void,
+Shadow: Excel$ShadowFormat,
ShapeStyle: Office.MsoShapeStyleIndex,
+SoftEdge: Office.SoftEdgeFormat,
+TextEffect: Excel$TextEffectFormat,
+Excel$TextFrame: Excel$TextFrame,
+Excel$TextFrame2: Excel$TextFrame2,
+ThreeD: Excel$ThreeDFormat,
Title: string,
Top: number,
+Type: Office.MsoShapeType,
Ungroup(): Excel$ShapeRange,
+VerticalFlip: Office.MsoTriState,
+Vertices: SafeArray<number>,
Visible: Office.MsoTriState,
Width: number,
ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void,
+ZOrderPosition: number,
(Index: number | string): Excel$Shape
} 

declare interface Excel$Shapes {
_Default(Index: any): Excel$Shape,
AddCallout(
Type: Office.MsoCalloutType,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddCanvas(Left: number, Top: number, Width: number, Height: number): Excel$Shape,
AddChart(
Excel$XlChartType?: Excel$XlChartType,
Left?: number,
Top?: number,
Width?: number,
Height?: number,
NewLayout?: boolean): Excel$Shape,
AddConnector(
Type: Office.MsoConnectorType,
BeginX: number,
BeginY: number,
EndX: number,
EndY: number): Excel$Shape,
AddCurve(SafeArrayOfPoints: SafeArray<number>): Excel$Shape,
AddDiagram(
Type: Office.MsoDiagramType,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddFormControl(
Type: Excel$XlFormControl,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddLabel(
Orientation: Office.MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Excel$Shape,
AddOLEObject(
ClassType: string,
Filename?: void,
Link?: false,
DisplayAsIcon?: boolean,
IconFileName?: string,
IconIndex?: number,
IconLabel?: string,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$Shape,
AddOLEObject(
ClassType: void,
Filename: string,
Link?: boolean,
DisplayAsIcon?: boolean,
IconFileName?: string,
IconIndex?: number,
IconLabel?: string,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$Shape,
AddPicture(
Filename: string,
LinkToFile: Office.MsoTriState,
SaveWithDocument: Office.MsoTriState,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddPolyline(SafeArrayOfPoints: SafeArray<number>): Excel$Shape,
AddShape(
Type: Office.MsoAutoShapeType,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddSmartArt(
Layout: Office.SmartArtLayout,
Left?: number,
Top?: number,
Width?: number,
Height?: number): Excel$Shape,
AddTextbox(
Orientation: Office.MsoTextOrientation,
Left: number,
Top: number,
Width: number,
Height: number): Excel$Shape,
AddTextEffect(
PresetTextEffect: Office.MsoPresetTextEffect,
Text: string,
FontName: string,
FontSize: number,
FontBold: Office.MsoTriState,
FontItalic: Office.MsoTriState,
Left: number,
Top: number): Excel$Shape,
+Excel$Application: Excel$Application,
BuildFreeform(
EditingType: Office.MsoEditingType,
X1: number,
Y1: number): Excel$FreeformBuilder,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Shape,
+Parent: any,
Range(Index: number | string | SafeArray<number | string>): Excel$ShapeRange,
SelectAll(): void,
(Index: number | string): Excel$Shape
} 

declare interface Excel$Sheets<TSheet> {
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void,
_Default(Index: any): any,
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void,
Add<T>(
Before?: Excel$Sheet,
After?: Excel$Sheet,
Count?: number,
Type?: T): Excel$AddSheetResult<T>,
+Excel$Application: Excel$Application,
Copy(Before?: Excel$Sheet): void,
Copy(Before: void, After: Excel$Sheet): void,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,

/**
 * @param Type [Type=-4104]
 */
FillAcrossSheets(Excel$Range: Excel$Range, Type?: Excel$XlFillWith): void,
+Excel$HPageBreaks: Excel$HPageBreaks,
Item(Index: string | number): TSheet,
Item(Indexes: SafeArray<string | number>): Excel$Sheets<TSheet>,
Move(Before?: Excel$Sheet | number): void,
Move(Before: void, After: Excel$Sheet | number): void,
+Parent: any,
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>,
IgnorePrintAreas?: boolean): void,
PrintPreview(EnableChanges?: boolean): void,
Select(Replace?: boolean): void,
Visible: any,
+Excel$VPageBreaks: Excel$VPageBreaks,
(Index: string | number): TSheet,
(Indexes: SafeArray<string | number>): Excel$Sheets<TSheet>
} 

declare interface Excel$SheetViews {
_Default(Index: any): any,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$SheetView,
+Parent: any,
(Index: any): Excel$SheetView
} 

declare class Excel$Slicer  {
constructor(): this;
ActiveItem: Excel$SlicerItem;
Excel$Application: Excel$Application;
Caption: string;
ColumnWidth: number;
Copy(): void;
Creator: Excel$XlCreator;
Cut(): void;
Delete(): void;
DisableMoveResizeUI: boolean;
DisplayHeader: boolean;
Height: number;
Left: number;
Locked: boolean;
Excel$Name: string;
NumberOfColumns: number;
Parent: any;
RowHeight: number;
Excel$Shape: Excel$Shape;
Excel$SlicerCache: Excel$SlicerCache;
Excel$SlicerCacheLevel: Excel$SlicerCacheLevel;
Excel$Style: any;
Top: number;
Width: number
}

declare class Excel$SlicerCache  {
constructor(): this;
Excel$Application: Excel$Application;
ClearManualFilter(): void;
Creator: Excel$XlCreator;
CrossFilterType: Excel$XlSlicerCrossFilterType;
Delete(): void;
Index: number;
Excel$Name: string;
OLAP: boolean;
Parent: any;
PivotTables: Excel$SlicerPivotTables;
ShowAllItems: boolean;
Excel$SlicerCacheLevels: Excel$SlicerCacheLevels;
Excel$SlicerItems: Excel$SlicerItems;
Excel$Slicers: Excel$Slicers;
SortItems: Excel$XlSlicerSort;
SortUsingCustomLists: boolean;
SourceName: string;
SourceType: Excel$XlPivotTableSourceType;
VisibleSlicerItems: Excel$SlicerItems;
VisibleSlicerItemsList: any;
Excel$WorkbookConnection: Excel$WorkbookConnection
}

declare class Excel$SlicerCacheLevel  {
constructor(): this;
Excel$Application: Excel$Application;
Count: number;
Creator: Excel$XlCreator;
CrossFilterType: Excel$XlSlicerCrossFilterType;
Excel$Name: string;
Ordinal: number;
Parent: any;
Excel$SlicerItems: Excel$SlicerItems;
SortItems: Excel$XlSlicerSort;
VisibleSlicerItemsList: any
}

declare interface Excel$SlicerCacheLevels {
_Default(Level?: any): Excel$SlicerCacheLevel,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Level?: number | string): Excel$SlicerCacheLevel,
+Parent: any,
(Level?: number | string): Excel$SlicerCacheLevel
} 

declare interface Excel$SlicerCaches {
_Default(Index: any): Excel$SlicerCache,
Add(
Source: Excel$WorkbookConnection | Excel$PivotTable | string,
SourceField: any,
Excel$Name?: any): Excel$SlicerCache,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$SlicerCache,
+Parent: any,
(Index: number | string): Excel$SlicerCache
} 

declare class Excel$SlicerItem  {
constructor(): this;
Excel$Application: Excel$Application;
Caption: string;
Creator: Excel$XlCreator;
HasData: boolean;
Excel$Name: string;
Parent: Excel$SlicerCache;
Selected: boolean;
SourceName: any;
SourceNameStandard: string;
Value: string
}

declare interface Excel$SlicerItems {
_Default(Index: any): Excel$SlicerItem,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$SlicerItem,
+Parent: any,
(Index: number | string): Excel$SlicerItem
} 

declare interface Excel$SlicerPivotTables {
_Default(Index: any): Excel$PivotTable,
AddPivotTable(Excel$PivotTable: Excel$PivotTable): void,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$PivotTable,
+Parent: any,
RemovePivotTable(Excel$PivotTable: Excel$PivotTable | number | string): void,
(Index: number | string): Excel$PivotTable
} 

declare interface Excel$Slicers {
_Default(Index: any): Excel$Slicer,
Add(
SlicerDestination: string | Excel$Worksheet,
Level?: any,
Excel$Name?: string,
Caption?: string,
Top?: number,
Left?: number,
Width?: number,
Height?: number): Excel$Slicer,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Slicer,
+Parent: any,
(Index: number | string): Excel$Slicer
} 

declare class Excel$SmartTag  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
DownloadURL: string;
Excel$Name: string;
Parent: any;
Properties: Excel$CustomProperties;
Excel$Range: Excel$Range;
Excel$SmartTagActions: Excel$SmartTagActions;
XML: string
}

declare class Excel$SmartTagAction  {
constructor(): this;
_Default: string;
ActiveXControl: any;
Excel$Application: Excel$Application;
CheckboxState: boolean;
Creator: Excel$XlCreator;
Execute(): void;
ExpandHelp: boolean;
ListSelection: number;
Excel$Name: string;
Parent: any;
PresentInPane: boolean;
RadioGroupSelection: number;
TextboxText: string;
Type: Excel$XlSmartTagControlType
}

declare interface Excel$SmartTagActions {
_Default(Index: any): Excel$SmartTagAction,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$SmartTagAction,
+Parent: any,
(Index: any): Excel$SmartTagAction
} 

declare class Excel$SmartTagOptions  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DisplaySmartTags: Excel$XlSmartTagDisplayMode;
EmbedSmartTags: boolean;
Parent: any
}

declare class Excel$SmartTagRecognizer  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Enabled: boolean;
FullName: string;
Parent: any;
progID: string
}

declare interface Excel$SmartTagRecognizers {
_Default(Index: any): Excel$SmartTagRecognizer,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$SmartTagRecognizer,
+Parent: any,
Recognize: boolean,
(Index: any): Excel$SmartTagRecognizer
} 

declare interface Excel$SmartTags {
_Default(Index: any): Excel$SmartTag,
Add(SmartTagType: string): Excel$SmartTag,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
+Parent: any,
(Index: any): Excel$SmartTag
} 

declare class Excel$Sort  {
constructor(): this;
Excel$Application: Excel$Application;
Apply(): void;
Creator: Excel$XlCreator;
Header: Excel$XlYesNoGuess;
MatchCase: boolean;
Orientation: Excel$XlSortOrientation;
Parent: any;
Rng: Excel$Range;
SetRange(Rng: Excel$Range): void;
Excel$SortFields: Excel$SortFields;
SortMethod: Excel$XlSortMethod
}

declare class Excel$SortField  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
CustomOrder: any;
DataOption: Excel$XlSortDataOption;
Delete(): void;
Key: Excel$Range;
ModifyKey(Key: Excel$Range): void;
Order: Excel$XlSortOrder;
Parent: any;
Priority: number;
SetIcon(Excel$Icon: Excel$Icon): void;
SortOn: Excel$XlSortOn;
SortOnValue: any
}

declare interface Excel$SortFields {
_Default(Index: any): Excel$SortField,
Add(
Key: Excel$Range,
SortOn?: any,
Order?: any,
CustomOrder?: any,
DataOption?: any): Excel$SortField,
+Excel$Application: Excel$Application,
Clear(): void,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$SortField,
+Parent: any,
(Index: any): Excel$SortField
} 

declare class Excel$SoundNote  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): any;
Import(Filename: string): any;
Parent: any;
Play(): any;
Record(): any
}

declare class Excel$SparkAxes  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Horizontal: Excel$SparkHorizontalAxis;
Parent: any;
Vertical: Excel$SparkVerticalAxis
}

declare class Excel$SparkColor  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$FormatColor;
Creator: Excel$XlCreator;
Parent: any;
Visible: boolean
}

declare class Excel$SparkHorizontalAxis  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Axis: Excel$SparkColor;
Creator: Excel$XlCreator;
IsDateAxis: boolean;
Parent: any;
RightToLeftPlotOrder: boolean
}

declare class Excel$Sparkline  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Location: Excel$Range;
ModifyLocation(Excel$Range: Excel$Range): void;
ModifySourceData(Formula: string): void;
Parent: any;
SourceData: string
}

declare class Excel$SparklineGroup  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Axes: Excel$SparkAxes;
Count: number;
Creator: Excel$XlCreator;
DateRange: string;
Delete(): void;
DisplayBlanksAs: Excel$XlDisplayBlanksAs;
DisplayHidden: boolean;
Item(Index: any): Excel$Sparkline;
LineWeight: any;
Location: Excel$Range;
Modify(Location: Excel$Range, SourceData: string): void;
ModifyDateRange(DateRange: string): void;
ModifyLocation(Location: Excel$Range): void;
ModifySourceData(SourceData: string): void;
Parent: any;
PlotBy: Excel$XlSparklineRowCol;
Excel$Points: Excel$SparkPoints;
SeriesColor: Excel$FormatColor;
SourceData: string;
Type: Excel$XlSparkType
}

declare interface Excel$SparklineGroups {
_Default(Index: any): Excel$SparklineGroup,
Add(Type: Excel$XlSparkType, SourceData: string): Excel$SparklineGroup,
+Excel$Application: Excel$Application,
Clear(): void,
ClearGroups(): void,
+Count: number,
+Creator: Excel$XlCreator,
Group(Location: Excel$Range): void,
Item(Index: number): Excel$SparklineGroup,
+Parent: any,
Ungroup(): void,
(Index: number): Excel$SparklineGroup
} 

declare class Excel$SparkPoints  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Firstpoint: Excel$SparkColor;
Highpoint: Excel$SparkColor;
Lastpoint: Excel$SparkColor;
Lowpoint: Excel$SparkColor;
Markers: Excel$SparkColor;
Negative: Excel$SparkColor;
Parent: any
}

declare class Excel$SparkVerticalAxis  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
CustomMaxScaleValue: any;
CustomMinScaleValue: any;
MaxScaleType: Excel$XlSparkScale;
MinScaleType: Excel$XlSparkScale;
Parent: any
}

declare class Excel$Speech  {
constructor(): this;
Direction: Excel$XlSpeakDirection;
Speak(Text: string, SpeakAsync?: boolean, SpeakXML?: boolean, Purge?: boolean): void;
SpeakCellOnEnter: boolean
}

declare class Excel$SpellingOptions  {
constructor(): this;
ArabicModes: Excel$XlArabicModes;
ArabicStrictAlefHamza: boolean;
ArabicStrictFinalYaa: boolean;
ArabicStrictTaaMarboota: boolean;
BrazilReform: Excel$XlPortugueseReform;
DictLang: number;
GermanPostReform: boolean;
HebrewModes: Excel$XlHebrewModes;
IgnoreCaps: boolean;
IgnoreFileNames: boolean;
IgnoreMixedDigits: boolean;
KoreanCombineAux: boolean;
KoreanProcessCompound: boolean;
KoreanUseAutoChangeList: boolean;
PortugalReform: Excel$XlPortugueseReform;
RussianStrictE: boolean;
SpanishModes: Excel$XlSpanishModes;
SuggestMainOnly: boolean;
UserDict: string
}

declare class Excel$Style  {
constructor(): this;
_Default: string;
AddIndent: boolean;
Excel$Application: Excel$Application;
Excel$Borders: Excel$Borders;
BuiltIn: boolean;
Creator: Excel$XlCreator;
Delete(): any;
Excel$Font: Excel$Font;
FormulaHidden: boolean;
HorizontalAlignment: Excel$XlHAlign;
IncludeAlignment: boolean;
IncludeBorder: boolean;
IncludeFont: boolean;
IncludeNumber: boolean;
IncludePatterns: boolean;
IncludeProtection: boolean;
IndentLevel: number;
Excel$Interior: Excel$Interior;
Locked: boolean;
MergeCells: boolean;
Excel$Name: string;
NameLocal: string;
NumberFormat: string;
NumberFormatLocal: string;
Orientation: Excel$XlOrientation;
Parent: any;
ReadingOrder: number;
ShrinkToFit: boolean;
Value: string;
VerticalAlignment: Excel$XlVAlign;
WrapText: boolean
}

declare interface Excel$Styles {
_Default(Index: any): Excel$Style,
Add(Excel$Name: string, BasedOn?: any): Excel$Style,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Style,
Merge(Excel$Workbook: Excel$Workbook): any,
+Parent: any,
(Index: any): Excel$Style
} 

declare class Excel$Tab  {
constructor(): this;
Excel$Application: Excel$Application;
Color: Excel$XlRgbColor | number;
ColorIndex: Excel$XlColorIndex;
Creator: Excel$XlCreator;
Parent: any;
ThemeColor: Excel$XlThemeColor;
TintAndShade: number
}

declare class Excel$TableStyle  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
BuiltIn: boolean;
Creator: Excel$XlCreator;
Delete(): void;
Duplicate(NewTableStyleName?: string): Excel$TableStyle;
Excel$Name: string;
NameLocal: string;
Parent: any;
ShowAsAvailablePivotTableStyle: boolean;
ShowAsAvailableSlicerStyle: boolean;
ShowAsAvailableTableStyle: boolean;
Excel$TableStyleElements: Excel$TableStyleElements
}

declare class Excel$TableStyleElement  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Borders: Excel$Borders;
Clear(): void;
Creator: Excel$XlCreator;
Excel$Font: Excel$Font;
HasFormat: boolean;
Excel$Interior: Excel$Interior;
Parent: any;
StripeSize: number
}

declare interface Excel$TableStyleElements {
_Default(Index: Excel$XlTableStyleElementType): Excel$TableStyleElement,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: Excel$XlTableStyleElementType): Excel$TableStyleElement,
+Parent: any,
(Index: Excel$XlTableStyleElementType): Excel$TableStyleElement
} 

declare interface Excel$TableStyles {
_Default(Index: any): Excel$TableStyle,
Add(TableStyleName: string): Excel$TableStyle,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$TableStyle,
+Parent: any,
(Index: number | string): Excel$TableStyle
} 

declare class Excel$TextEffectFormat  {
constructor(): this;
Alignment: Office.MsoTextEffectAlignment;
Excel$Application: any;
Creator: number;
FontBold: Office.MsoTriState;
FontItalic: Office.MsoTriState;
FontName: string;
FontSize: number;
KernedPairs: Office.MsoTriState;
NormalizedHeight: Office.MsoTriState;
Parent: any;
PresetShape: Office.MsoPresetTextEffectShape;
PresetTextEffect: Office.MsoPresetTextEffect;
RotatedChars: Office.MsoTriState;
Text: string;
ToggleVerticalText(): void;
Tracking: number
}

declare class Excel$TextFrame  {
constructor(): this;
Excel$Application: Excel$Application;
AutoMargins: boolean;
AutoSize: boolean;
Characters(Start?: number, Length?: number): Excel$Characters;
Creator: Excel$XlCreator;
HorizontalAlignment: Excel$XlHAlign;
HorizontalOverflow: Excel$XlOartHorizontalOverflow;
MarginBottom: number;
MarginLeft: number;
MarginRight: number;
MarginTop: number;
Orientation: Office.MsoTextOrientation;
Parent: any;
ReadingOrder: number;
VerticalAlignment: Excel$XlVAlign;
VerticalOverflow: Excel$XlOartVerticalOverflow
}

declare class Excel$TextFrame2  {
constructor(): this;
Excel$Application: any;
AutoSize: Office.MsoAutoSize;
Column: Office.TextColumn2;
Creator: number;
DeleteText(): void;
HasText: Office.MsoTriState;
HorizontalAnchor: Office.MsoHorizontalAnchor;
MarginBottom: number;
MarginLeft: number;
MarginRight: number;
MarginTop: number;
NoTextRotation: Office.MsoTriState;
Orientation: Office.MsoTextOrientation;
Parent: any;
PathFormat: Office.MsoPathFormat;
Ruler: Office.Ruler2;
TextRange: Office.TextRange2;
ThreeD: Excel$ThreeDFormat;
VerticalAnchor: Office.MsoVerticalAnchor;
WarpFormat: Office.MsoWarpFormat;
WordArtformat: Office.MsoPresetTextEffect;
WordWrap: Office.MsoTriState
}

declare class Excel$ThreeDFormat  {
constructor(): this;
Excel$Application: any;
BevelBottomDepth: number;
BevelBottomInset: number;
BevelBottomType: Office.MsoBevelType;
BevelTopDepth: number;
BevelTopInset: number;
BevelTopType: Office.MsoBevelType;
ContourColor: Excel$ColorFormat;
ContourWidth: number;
Creator: number;
Depth: number;
ExtrusionColor: Excel$ColorFormat;
ExtrusionColorType: Office.MsoExtrusionColorType;
FieldOfView: number;
IncrementRotationHorizontal(Increment: number): void;
IncrementRotationVertical(Increment: number): void;
IncrementRotationX(Increment: number): void;
IncrementRotationY(Increment: number): void;
IncrementRotationZ(Increment: number): void;
LightAngle: number;
Parent: any;
Perspective: Office.MsoTriState;
PresetCamera: Office.MsoPresetCamera;
PresetExtrusionDirection: Office.MsoPresetExtrusionDirection;
PresetLighting: Office.MsoLightRigType;
PresetLightingDirection: Office.MsoPresetLightingDirection;
PresetLightingSoftness: Office.MsoPresetLightingSoftness;
PresetMaterial: Office.MsoPresetMaterial;
PresetThreeDFormat: Office.MsoPresetThreeDFormat;
ProjectText: Office.MsoTriState;
ResetRotation(): void;
RotationX: number;
RotationY: number;
RotationZ: number;
SetExtrusionDirection(PresetExtrusionDirection: Office.MsoPresetExtrusionDirection): void;
SetPresetCamera(PresetCamera: Office.MsoPresetCamera): void;
SetThreeDFormat(PresetThreeDFormat: Office.MsoPresetThreeDFormat): void;
Visible: Office.MsoTriState;
Z: number
}

declare class Excel$TickLabels  {
constructor(): this;
Alignment: number;
Excel$Application: Excel$Application;
AutoScaleFont: any;
Creator: Excel$XlCreator;
Delete(): any;
Depth: number;
Excel$Font: Excel$Font;
Format: Excel$ChartFormat;
MultiLevel: boolean;
Excel$Name: string;
NumberFormat: string;
NumberFormatLinked: boolean;
NumberFormatLocal: string;
Offset: number;
Orientation: Excel$XlTickLabelOrientation;
Parent: any;
ReadingOrder: number;
Select(): any
}

declare class Excel$Toolbar  {
constructor(): this;
Excel$Application: Excel$Application;
BuiltIn: boolean;
Creator: Excel$XlCreator;
Delete(): void;
Height: number;
Left: number;
Excel$Name: string;
Parent: any;
Position: number;
Excel$Protection: Excel$XlToolbarProtection;
Reset(): void;
Excel$ToolbarButtons: Excel$ToolbarButtons;
Top: number;
Visible: boolean;
Width: number
}

declare class Excel$ToolbarButton  {
constructor(): this;
Excel$Application: Excel$Application;
BuiltIn: boolean;
BuiltInFace: boolean;
Copy(Excel$Toolbar: Excel$Toolbar, Before: number): void;
CopyFace(): void;
Creator: Excel$XlCreator;
Delete(): void;
Edit(): void;
Enabled: boolean;
HelpContextID: number;
HelpFile: string;
ID: number;
IsGap: boolean;
Move(Excel$Toolbar: Excel$Toolbar, Before: number): void;
Excel$Name: string;
OnAction: string;
Parent: any;
PasteFace(): void;
Pushed: boolean;
Reset(): void;
StatusBar: string;
Width: number
}

declare interface Excel$ToolbarButtons {
_Default(Index: number): Excel$ToolbarButton,
Add(
Button?: any,
Before?: any,
OnAction?: any,
Pushed?: any,
Enabled?: any,
StatusBar?: any,
HelpFile?: any,
HelpContextID?: any): Excel$ToolbarButton,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$ToolbarButton,
+Parent: any,
(Index: number): Excel$ToolbarButton
} 

declare interface Excel$Toolbars {
_Default(Index: any): Excel$Toolbar,
Add(Excel$Name?: any): Excel$Toolbar,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: any): Excel$Toolbar,
+Parent: any,
(Index: any): Excel$Toolbar
} 

declare class Excel$Top10  {
constructor(): this;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Excel$Borders: Excel$Borders;
CalcFor: Excel$XlCalcFor;
Creator: Excel$XlCreator;
Delete(): void;
Excel$Font: Excel$Font;
Excel$Interior: Excel$Interior;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
NumberFormat: string;
Parent: any;
Percent: boolean;
Priority: number;
PTCondition: boolean;
Rank: number;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
StopIfTrue: boolean;
TopBottom: Excel$XlTopBottom;
Type: number
}

declare class Excel$TreeviewControl  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Drilled: any;
Hidden: SafeArray<SafeArray<string>>;
Parent: any
}

declare class Excel$Trendline  {
constructor(): this;
Excel$Application: Excel$Application;
Backward: number;
Backward2: number;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Excel$DataLabel: Excel$DataLabel;
Delete(): any;
DisplayEquation: boolean;
DisplayRSquared: boolean;
Format: Excel$ChartFormat;
Forward: number;
Forward2: number;
Index: number;
Intercept: number;
InterceptIsAuto: boolean;
Excel$Name: string;
NameIsAuto: boolean;
Order: number;
Parent: any;
Period: number;
Select(): any;
Type: Excel$XlTrendlineType
}

declare interface Excel$Trendlines {
_Default(Index?: any): Excel$Trendline,

/**
 * @param Type [Type=-4132]
 */
Add(
Type?: Excel$XlTrendlineType,
Order?: number,
Period?: number,
Forward?: number,
Backward?: number,
Intercept?: any,
DisplayEquation?: boolean,
DisplayRSquared?: boolean,
Excel$Name?: string): Excel$Trendline,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$Trendline,
+Parent: any,
(Index: number): Excel$Trendline
} 

declare class Excel$UniqueValues  {
constructor(): this;
Excel$Application: Excel$Application;
AppliesTo: Excel$Range;
Excel$Borders: Excel$Borders;
Creator: Excel$XlCreator;
Delete(): void;
DupeUnique: Excel$XlDupeUnique;
Excel$Font: Excel$Font;
Excel$Interior: Excel$Interior;
ModifyAppliesToRange(Excel$Range: Excel$Range): void;
NumberFormat: string;
Parent: any;
Priority: number;
PTCondition: boolean;
ScopeType: Excel$XlPivotConditionScope;
SetFirstPriority(): void;
SetLastPriority(): void;
StopIfTrue: boolean;
Type: Excel$XlFormatConditionType.xlUniqueValues
}

declare class Excel$UpBars  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
Creator: Excel$XlCreator;
Delete(): any;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Excel$Interior: Excel$Interior;
Excel$Name: string;
Parent: any;
Select(): any
}

declare interface Excel$UsedObjects {
_Default(Index: any): any,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): any,
+Parent: any,
(Index: number | string): any
} 

declare class Excel$UserAccess  {
constructor(): this;
AllowEdit: boolean;
Delete(): void;
Excel$Name: string
}

declare interface Excel$UserAccessList {
_Default(Index: any): Excel$UserAccess,
Add(Excel$Name: string, AllowEdit: boolean): Excel$UserAccess,
+Count: number,
DeleteAll(): void,
Item(Index: number | string): Excel$UserAccess,
(Index: number | string): Excel$UserAccess
} 

declare class Excel$Validation  {
constructor(): this;
Add(Type: Excel$XlDVType.xlValidateInputOnly): void;
Add(
Type: Excel$XlDVType.xlValidateWholeNumber
| Excel$XlDVType.xlValidateDate
| Excel$XlDVType.xlValidateDecimal
| Excel$XlDVType.xlValidateTextLength
| Excel$XlDVType.xlValidateTime,
AlertStyle?: Excel$XlDVAlertStyle,
Operator?: Excel$XlFormatConditionOperator.xlBetween | Excel$XlFormatConditionOperator.xlNotBetween,
Formula1?: string,
Formula2?: string): void;
Add(
Type?: Excel$XlDVType,
AlertStyle?: Excel$XlDVAlertStyle,
Operator?: Excel$XlFormatConditionOperator,
Formula1?: string): void;
AlertStyle: number;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
ErrorMessage: string;
ErrorTitle: string;
Formula1: string;
Formula2: string;
IgnoreBlank: boolean;
IMEMode: number;
InCellDropdown: boolean;
InputMessage: string;
InputTitle: string;
Modify(Type: Excel$XlDVType.xlValidateInputOnly): void;
Modify(
Type: Excel$XlDVType.xlValidateWholeNumber
| Excel$XlDVType.xlValidateDate
| Excel$XlDVType.xlValidateDecimal
| Excel$XlDVType.xlValidateTextLength
| Excel$XlDVType.xlValidateTime,
AlertStyle?: Excel$XlDVAlertStyle,
Operator?: Excel$XlFormatConditionOperator.xlBetween | Excel$XlFormatConditionOperator.xlNotBetween,
Formula1?: string,
Formula2?: string): void;
Modify(
Type?: Excel$XlDVType,
AlertStyle?: Excel$XlDVAlertStyle,
Operator?: Excel$XlFormatConditionOperator,
Formula1?: string): void;
Operator: number;
Parent: any;
ShowError: boolean;
ShowInput: boolean;
Type: number;
Value: boolean
}

declare class Excel$ValueChange  {
constructor(): this;
AllocationMethod: Excel$XlAllocationMethod;
AllocationValue: Excel$XlAllocationValue;
AllocationWeightExpression: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Order: number;
Parent: any;
Excel$PivotCell: Excel$PivotCell;
Tuple: string;
Value: number;
VisibleInPivotTable: boolean
}

declare class Excel$VPageBreak  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
DragOff(Direction: Excel$XlDirection, RegionIndex: number): void;
Extent: Excel$XlPageBreakExtent;
Location: Excel$Range;
Parent: Excel$Worksheet;
Type: Excel$XlPageBreak
}

declare interface Excel$VPageBreaks {
_Default(Index: number): Excel$VPageBreak,
Add(Before: Excel$Range): Excel$VPageBreak,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number): Excel$VPageBreak,
+Parent: any,
(Index: number): Excel$VPageBreak
} 

declare class Excel$Walls  {
constructor(): this;
Excel$Application: Excel$Application;
Excel$Border: Excel$Border;
ClearFormats(): any;
Creator: Excel$XlCreator;
Fill: Excel$ChartFillFormat;
Format: Excel$ChartFormat;
Excel$Interior: Excel$Interior;
Excel$Name: string;
Parent: any;
Paste(): void;
PictureType: Excel$XlChartPictureType;
PictureUnit: number;
Select(): any;
Thickness: number
}

declare class Excel$Watch  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Parent: any;
Source: any
}

declare interface Excel$Watches {
_Default(Index: any): Excel$Watch,
Add(Source: any): Excel$Watch,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Delete(): void,
Item(Index: number | string): Excel$Watch,
+Parent: any,
(Index: number | string): Excel$Watch
} 

declare class Excel$WebOptions  {
constructor(): this;
AllowPNG: boolean;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DownloadComponents: boolean;
Encoding: Office.MsoEncoding;
FolderSuffix: string;
LocationOfComponents: string;
OrganizeInFolder: boolean;
Parent: any;
PixelsPerInch: number;
RelyOnCSS: boolean;
RelyOnVML: boolean;
ScreenSize: Office.MsoScreenSize;
TargetBrowser: Office.MsoTargetBrowser;
UseDefaultFolderSuffix(): void;
UseLongFileNames: boolean
}

declare class Excel$Window  {
constructor(): this;
_DisplayRightToLeft: boolean;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): any;
Activate(): any;
ActivateNext(): any;
ActivatePrevious(): any;
ActiveCell: Excel$Range;
ActiveChart: Excel$Chart;
ActivePane: Excel$Pane;
ActiveSheet: Excel$Sheet | null;
ActiveSheetView: Excel$SheetView | null;
Excel$Application: Excel$Application;
AutoFilterDateGrouping: boolean;
Caption: string;
Close(SaveChanges?: boolean, Filename?: string, RouteWorkbook?: boolean): boolean;
Creator: Excel$XlCreator;
DisplayFormulas: boolean;
DisplayGridlines: boolean;
DisplayHeadings: boolean;
DisplayHorizontalScrollBar: boolean;
DisplayOutline: boolean;
DisplayRightToLeft: boolean;
DisplayRuler: boolean;
DisplayVerticalScrollBar: boolean;
DisplayWhitespace: boolean;
DisplayWorkbookTabs: boolean;
DisplayZeros: boolean;
EnableResize: boolean;
FreezePanes: boolean;
GridlineColor: number;
GridlineColorIndex: Excel$XlColorIndex;
Height: number;
Index: number;
LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
Left: number;
NewWindow(): Excel$Window;
OnWindow: string;
Excel$Panes: Excel$Panes;
Parent: any;
PointsToScreenPixelsX(Excel$Points: number): number;
PointsToScreenPixelsY(Excel$Points: number): number;
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>): any;
PrintPreview(EnableChanges?: boolean): any;
RangeFromPoint(x: number, y: number): Excel$Shape | Excel$Range | null;
RangeSelection: Excel$Range;
ScrollColumn: number;
ScrollIntoView(
Left: number,
Top: number,
Width: number,
Height: number,
Start?: boolean): void;
ScrollRow: number;
ScrollWorkbookTabs(
Excel$Sheets: 0,
Position: Excel$Constants.xlFirst | Excel$Constants.xlLast): any;
ScrollWorkbookTabs(Excel$Sheets: number): any;
SelectedSheets: Excel$Sheets;
Selection: any;
Excel$SheetViews: Excel$SheetViews;
SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
Split: boolean;
SplitColumn: number;
SplitHorizontal: number;
SplitRow: number;
SplitVertical: number;
TabRatio: number;
Top: number;
Type: Excel$XlWindowType;
UsableHeight: number;
UsableWidth: number;
View: Excel$XlWindowView;
Visible: boolean;
VisibleRange: Excel$Range;
Width: number;
WindowNumber: number;
WindowState: Excel$XlWindowState;
Zoom: number | true
}

declare interface Excel$Windows {
_Default(Index: any): Excel$Window,
+Excel$Application: Excel$Application,
Arrange(
ArrangeStyle: Excel$XlArrangeStyle,
ActiveWorkbook: true,
SyncHorizontal?: boolean,
SyncVertical?: boolean): any,

/**
 * @param ArrangeStyle [ArrangeStyle=1]
 */
Arrange(
ArrangeStyle?: Excel$XlArrangeStyle,
ActiveWorkbook?: boolean,
SyncHorizontal?: boolean,
SyncVertical?: boolean): any,
BreakSideBySide(): boolean,
CompareSideBySideWith(WindowName: string): boolean,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Window,
+Parent: any,
ResetPositionsSideBySide(): void,
SyncScrollingSideBySide: boolean,
(Index: number | string): Excel$Window
} 

declare class Excel$Workbook  {
constructor(): this;
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
_CodeName: string;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void;
_Protect(Password?: any, Structure?: any, Excel$Windows?: any): void;
_ProtectSharing(
Filename?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
SharingPassword?: any): void;
_ReadOnlyRecommended: boolean;

/**
 * @param AccessMode [AccessMode=1]
 */
_SaveAs(
Filename: string,
FileFormat?: Excel$XlFileFormat,
Password?: string,
WriteResPassword?: string,
ReadOnlyRecommended?: boolean,
CreateBackup?: boolean,
AccessMode?: Excel$XlSaveAsAccessMode,
ConflictResolution?: Excel$XlSaveConflictResolution,
AddToMru?: boolean,
TextCodepage?: any,
TextVisualLayout?: any): void;
AcceptAllChanges(When?: any, Who?: any, Where?: any): void;
AcceptLabelsInFormulas: boolean;
AccuracyVersion: number;
Activate(): void;
ActiveChart: Excel$Chart;
ActiveSheet: Excel$Sheet;
ActiveSlicer: Excel$Slicer;
AddToFavorites(): void;
Excel$Application: Excel$Application;
ApplyTheme(Filename: string): void;
Author: string;
AutoUpdateFrequency: number;
AutoUpdateSaveChanges: boolean;
BreakLink(Excel$Name: string, Type: Excel$XlLinkType): void;
BuiltinDocumentProperties: Office.DocumentProperties<Excel$Application>;
CalculationVersion: number;
CanCheckIn(): boolean;
ChangeFileAccess(
Mode: Excel$XlFileAccess.xlReadWrite,
WritePassword?: string,
Notify?: boolean): void;
ChangeFileAccess(Mode: Excel$XlFileAccess): void;
ChangeHistoryDuration: number;

/**
 * @param Type [Type=1]
 */
ChangeLink(Excel$Name: string, NewName: string, Type?: Excel$XlLinkType): void;
Charts: Excel$Sheets<Excel$Chart>;
CheckCompatibility: boolean;
CheckIn(SaveChanges: true, Excel$Comments?: string, MakePublic?: boolean): void;
CheckIn(SaveChanges?: any): void;
CheckInWithVersion(
SaveChanges?: boolean,
Excel$Comments?: any,
MakePublic?: any,
VersionType?: any): void;
Close(SaveChanges: true, Filename?: string, RouteWorkbook?: boolean): void;
Close(SaveChanges?: boolean, Filename?: void, RouteWorkbook?: boolean): void;
CodeName: string;
Colors: SafeArray<number> & ((Index: number) => number);
CommandBars: Office.CommandBars;
Excel$Comments: string;
ConflictResolution: Excel$XlSaveConflictResolution;
Excel$Connections: Excel$Connections;
ConnectionsDisabled: boolean;
Container: any;
ContentTypeProperties: Office.MetaProperties;
CreateBackup: boolean;
Creator: Excel$XlCreator;
CustomDocumentProperties: Office.DocumentProperties<Excel$Application>;
Excel$CustomViews: Excel$CustomViews;
CustomXMLParts: Office.CustomXMLParts;
Date1904: boolean;
DefaultPivotTableStyle: any;
DefaultSlicerStyle: any;
DefaultTableStyle: any;
DeleteNumberFormat(NumberFormat: string): void;
DialogSheets: Excel$Sheets<Excel$DialogSheet>;
DisplayDrawingObjects: Excel$XlDisplayDrawingObjects;
DisplayInkComments: boolean;
DocumentInspectors: Office.DocumentInspectors;
DocumentLibraryVersions: Office.DocumentLibraryVersions;
DoNotPromptForConvert: boolean;
Dummy16(): void;
Dummy17(calcid: number): void;
Dummy26(): void;
Dummy27(): void;
EnableAutoRecover: boolean;
EnableConnections(): void;
EncryptionProvider: string;
EndReview(): void;
EnvelopeVisible: boolean;
Excel4IntlMacroSheets: Excel$Sheets;
Excel4MacroSheets: Excel$Sheets;
Excel8CompatibilityMode: boolean;
ExclusiveAccess(): boolean;
ExportAsFixedFormat(
Type: Excel$XlFixedFormatType,
Filename?: string,
Quality?: Excel$XlFixedFormatQuality,
IncludeDocProperties?: boolean,
IgnorePrintAreas?: boolean,
From?: number,
To?: number,
OpenAfterPublish?: boolean,
FixedFormatExtClassPtr?: any): void;
FileFormat: Excel$XlFileFormat;
Final: boolean;
FollowHyperlink(
Address: string,
SubAddress?: string,
NewWindow?: boolean,
AddHistory?: void,
ExtraInfo?: string | Office.ByteArray,
Method?: Office.MsoExtraInfoMethod,
HeaderInfo?: string): void;
ForceFullCalculation: boolean;
ForwardMailer(): void;
FullName: string;
FullNameURLEncoded: string;
GetWorkflowTasks(): Office.WorkflowTasks;
GetWorkflowTemplates(): Office.WorkflowTemplates;
HasMailer: boolean;
HasPassword: boolean;
HasRoutingSlip: boolean;
HasVBProject: boolean;
HighlightChangesOnScreen: boolean;
HighlightChangesOptions(
When?: Excel$XlHighlightChangesTime,
Who?: "Everyone" | "Everyone but me" | string,
Where?: string): void;
HTMLProject: Office.HTMLProject;
Excel$IconSets: Excel$IconSets;
InactiveListBorderVisible: boolean;
IsAddin: boolean;
IsInplace: boolean;
KeepChangeHistory: boolean;
Keywords: string;
LinkInfo(
Excel$Name: string,
LinkInfo: Excel$XlLinkInfo,
Type?: Excel$XlLinkInfoType,
EditionRef?: string): any;
LinkSources(Type?: Excel$XlLink): SafeArray<string>;
ListChangesOnNewSheet: boolean;
LockServerFile(): void;
Excel$Mailer: Excel$Mailer;
MergeWorkbook(Filename: string): void;
Excel$Modules: Excel$Sheets;
MultiUserEditing: boolean;
Excel$Name: string;
Excel$Names: Excel$Names;
NewWindow(): Excel$Window;
OnSave: string;
OnSheetActivate: string;
OnSheetDeactivate: string;
OpenLinks(Excel$Name: string, ReadOnly?: boolean, Type?: Excel$XlLink): void;
Parent: any;
Password: string;
PasswordEncryptionAlgorithm: string;
PasswordEncryptionFileProperties: boolean;
PasswordEncryptionKeyLength: number;
PasswordEncryptionProvider: string;
Path: string;
Permission: Office.Permission;
PersonalViewListSettings: boolean;
PersonalViewPrintSettings: boolean;
PivotCaches(): Excel$PivotCaches;
PivotTableWizard(): void;
PivotTableWizard<TSourceType>(
SourceType: TSourceType,
SourceData: Excel$PivotTableWizardSourceData<TSourceType>,
TableDestination?: Excel$Range,
TableName?: string,
RowGrand?: boolean,
ColumnGrand?: boolean,
SaveData?: boolean,
HasAutoFormat?: boolean,
AutoPage?: Excel$PivotTableWizardAutoPage<TSourceType>,
Reserved?: void,
BackgroundQuery?: boolean,
OptimizeCache?: boolean,
PageFieldOrder?: Excel$XlOrder,
PageFieldWrapCount?: number,
ReadData?: boolean,
Connection?: string): void;
Post(): void;
PrecisionAsDisplayed: boolean;
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>,
IgnorePrintAreas?: boolean): void;
PrintPreview(EnableChanges?: boolean): void;
Protect(Password?: string, Structure?: boolean, Excel$Windows?: boolean): void;
ProtectSharing(
Filename?: string,
Password?: string,
WriteResPassword?: string,
ReadOnlyRecommended?: boolean,
CreateBackup?: boolean,
SharingPassword?: string,
FileFormat?: any): void;
ProtectStructure: boolean;
ProtectWindows: boolean;
Excel$PublishObjects: Excel$PublishObjects;
PurgeChangeHistoryNow(Days: number, SharingPassword?: string): void;
ReadOnly: boolean;
ReadOnlyRecommended: boolean;
RecheckSmartTags(): void;
RefreshAll(): void;
RejectAllChanges(When?: any, Who?: any, Where?: any): void;
ReloadAs(Encoding: Office.MsoEncoding): void;
RemoveDocumentInformation(RemoveDocInfoType: Excel$XlRemoveDocInfoType): void;
RemovePersonalInformation: boolean;
RemoveUser(Index: number): void;
Reply(): void;
ReplyAll(): void;
ReplyWithChanges(ShowMessage?: boolean): void;
Excel$Research: Excel$Research;
ResetColors(): void;
RevisionNumber: number;
Route(): void;
Routed: boolean;
Excel$RoutingSlip: Excel$RoutingSlip;
RunAutoMacros(Which: Excel$XlRunAutoMacro): void;
Save(): void;

/**
 * @param AccessMode [AccessMode=1]
 */
SaveAs(
Filename: string,
FileFormat?: Excel$XlFileFormat,
Password?: string,
WriteResPassword?: string,
ReadOnlyRecommended?: boolean,
CreateBackup?: boolean,
AccessMode?: Excel$XlSaveAsAccessMode,
ConflictResolution?: Excel$XlSaveConflictResolution,
AddToMru?: boolean,
TextCodepage?: any,
TextVisualLayout?: any): void;
SaveAsXMLData(Filename: string, Map: Excel$XmlMap): void;
SaveCopyAs(Filename: string): void;
Saved: boolean;
SaveLinkValues: boolean;
sblt(s: string): void;
SendFaxOverInternet(Recipients?: string, Subject?: string, ShowMessage?: boolean): void;
SendForReview(
Recipients?: string,
Subject?: string,
ShowMessage?: boolean,
IncludeAttachment?: boolean): void;
SendMail(
Recipients: string | SafeArray<string>,
Subject?: string,
ReturnReceipt?: boolean): void;

/**
 * Macintosh only
 * @param Priority [Priority=-4143]
 */
SendMailer(FileFormat: any, Priority?: Excel$XlPriority): void;
ServerPolicy: Office.ServerPolicy;
Excel$ServerViewableItems: Excel$ServerViewableItems;
SetLinkOnData(Excel$Name: string, Procedure?: string): void;
SetPasswordEncryptionOptions(
PasswordEncryptionProvider?: string,
PasswordEncryptionAlgorithm?: string,
PasswordEncryptionKeyLength?: number,
PasswordEncryptionFileProperties?: boolean): void;
SharedWorkspace: Office.SharedWorkspace;
Excel$Sheets: Excel$Sheets;
ShowConflictHistory: boolean;
ShowPivotChartActiveFields: boolean;
ShowPivotTableFieldList: boolean;
Signatures: Office.SignatureSet;
Excel$SlicerCaches: Excel$SlicerCaches;
SmartDocument: Office.SmartDocument;
Excel$SmartTagOptions: Excel$SmartTagOptions;
Excel$Styles: Excel$Styles;
Subject: string;
Sync: Office.Sync;
Excel$TableStyles: Excel$TableStyles;
TemplateRemoveExtData: boolean;
Theme: Office.OfficeTheme;
Title: string;
ToggleFormsDesign(): void;
Unprotect(Password?: string): void;
UnprotectSharing(SharingPassword?: string): void;
UpdateFromFile(): void;
UpdateLink(Excel$Name?: string, Type?: Excel$XlLinkType): void;
UpdateLinks: Excel$XlUpdateLinks;
UpdateRemoteReferences: boolean;
UserControl: boolean;
UserStatus: SafeArray;
VBASigned: boolean;
VBProject: VBIDE.VBProject;
Excel$WebOptions: Excel$WebOptions;
WebPagePreview(): void;
Excel$Windows: Excel$Windows;
Worksheets: Excel$Sheets<Excel$Worksheet>;
WritePassword: string;
WriteReserved: boolean;
WriteReservedBy: string;
XmlImport(
Url: string,
ImportMap: Excel$XmlMap,
Overwrite?: boolean,
Destination?: any): Excel$XlXmlImportResult;
XmlImportXml(
Data: string,
ImportMap: Excel$XmlMap,
Overwrite?: boolean,
Destination?: any): Excel$XlXmlImportResult;
Excel$XmlMaps: Excel$XmlMaps;
Excel$XmlNamespaces: Excel$XmlNamespaces
}

declare class Excel$WorkbookConnection  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Delete(): void;
Description: string;
Excel$Name: string;
Excel$ODBCConnection: Excel$ODBCConnection;
Excel$OLEDBConnection: Excel$OLEDBConnection;
Parent: any;
Excel$Ranges: Excel$Ranges;
Refresh(): void;
Type: Excel$XlConnectionType
}

declare interface Excel$Workbooks {

/**
 * @param TextQualifier [TextQualifier=1]
 */
__OpenText(
Filename: string,
Origin: any,
StartRow: any,
DataType: any,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: any,
Excel$Tab?: any,
Semicolon?: any,
Comma?: any,
Space?: any,
Other?: any,
OtherChar?: any,
FieldInfo?: any,
TextVisualLayout?: any): void,
_Default(Index: any): Excel$Workbook,
_Open(
Filename: string,
UpdateLinks?: any,
ReadOnly?: any,
Format?: any,
Password?: any,
WriteResPassword?: any,
IgnoreReadOnlyRecommended?: any,
Origin?: any,
Delimiter?: any,
Editable?: any,
Notify?: any,
Converter?: any,
AddToMru?: any): Excel$Workbook,

/**
 * @param TextQualifier [TextQualifier=1]
 */
_OpenText(
Filename: string,
Origin: any,
StartRow: any,
DataType: any,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: any,
Excel$Tab?: any,
Semicolon?: any,
Comma?: any,
Space?: any,
Other?: any,
OtherChar?: any,
FieldInfo?: any,
TextVisualLayout?: any,
DecimalSeparator?: any,
ThousandsSeparator?: any): void,
_OpenXML(Filename: string, Stylesheets?: any): Excel$Workbook,
Add(Template?: string | Excel$XlWBATemplate): Excel$Workbook,
+Excel$Application: Excel$Application,
CanCheckOut(Filename: string): boolean,
CheckOut(Filename: string): void,
Close(): void,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$Workbook,
Open(
Filename: string,
UpdateLinks?: 0 | 3,
ReadOnly?: boolean,
Format?: 1
| 2
| 3
| 4
| 5,
Password?: string,
WriteResPassword?: string,
IgnoreReadOnlyRecommended?: boolean,
Origin?: Excel$XlPlatform,
Delimiter?: void,
Editable?: boolean,
Notify?: boolean,
Converter?: number,
AddToMru?: boolean,
Local?: boolean,
CorruptLoad?: Excel$XlCorruptLoad): Excel$Workbook,
Open(
Filename: string,
UpdateLinks?: 0 | 3,
ReadOnly?: boolean,
Format?: 6,
Password?: string,
WriteResPassword?: string,
IgnoreReadOnlyRecommended?: boolean,
Origin?: Excel$XlPlatform,
Delimiter?: string,
Editable?: boolean,
Notify?: boolean,
Converter?: number,
AddToMru?: boolean,
Local?: boolean,
CorruptLoad?: Excel$XlCorruptLoad): Excel$Workbook,
OpenDatabase(
Filename: string,
CommandText?: string,
CommandType?: Excel$XlCmdType,
BackgroundQuery?: boolean,
ImportDataAs?: Excel$XlImportDataAs): Excel$Workbook,

/**
 * @param TextQualifier [TextQualifier=1]
 */
OpenText(
Filename: string,
Origin: Excel$XlPlatform,
StartRow: number,
DataType: Excel$XlTextParsingType.xlDelimited,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: boolean,
Excel$Tab?: boolean,
Semicolon?: boolean,
Comma?: boolean,
Space?: boolean,
Other?: true,
OtherChar?: string,
FieldInfo?: SafeArray,
TextVisualLayout?: any,
DecimalSeparator?: string,
ThousandsSeparator?: string,
TrailingMinusNumbers?: boolean,
Local?: boolean): void,

/**
 * @param TextQualifier [TextQualifier=1]
 */
OpenText(
Filename: string,
Origin: Excel$XlPlatform,
StartRow: number,
DataType: Excel$XlTextParsingType.xlDelimited,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: boolean,
Excel$Tab?: boolean,
Semicolon?: boolean,
Comma?: boolean,
Space?: boolean,
Other?: boolean,
OtherChar?: void,
FieldInfo?: SafeArray,
TextVisualLayout?: any,
DecimalSeparator?: string,
ThousandsSeparator?: string,
TrailingMinusNumbers?: boolean,
Local?: boolean): void,

/**
 * @param TextQualifier [TextQualifier=1]
 */
OpenText(
Filename: string,
Origin: Excel$XlPlatform,
StartRow: number,
DataType: Excel$XlTextParsingType,
TextQualifier?: Excel$XlTextQualifier,
ConsecutiveDelimiter?: void,
Excel$Tab?: void,
Semicolon?: void,
Comma?: void,
Space?: void,
Other?: void,
OtherChar?: void,
FieldInfo?: SafeArray,
TextVisualLayout?: any,
DecimalSeparator?: string,
ThousandsSeparator?: string,
TrailingMinusNumbers?: boolean,
Local?: boolean): void,
OpenXML(
Filename: string,
Stylesheets?: string | SafeArray<string>,
LoadOption?: Excel$XlXmlLoadOption): Excel$Workbook,
+Parent: any,
(Index: number | string): Excel$Workbook
} 

declare class Excel$Worksheet  {
constructor(): this;
__PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any): void;
_CheckSpelling(
CustomDictionary?: any,
IgnoreUppercase?: any,
AlwaysSuggest?: any,
SpellLang?: any,
IgnoreFinalYaa?: any,
SpellScript?: any): void;
_CodeName: string;
_DisplayRightToLeft: number;
_Evaluate(Excel$Name: any): any;
_PasteSpecial(
Format?: any,
Link?: any,
DisplayAsIcon?: any,
IconFileName?: any,
IconIndex?: any,
IconLabel?: any): void;
_PrintOut(
From?: any,
To?: any,
Copies?: any,
Preview?: any,
ActivePrinter?: any,
PrintToFile?: any,
Collate?: any,
PrToFileName?: any): void;
_Protect(
Password?: any,
DrawingObjects?: any,
Contents?: any,
Excel$Scenarios?: any,
UserInterfaceOnly?: any): void;
_SaveAs(
Filename: string,
FileFormat?: any,
Password?: any,
WriteResPassword?: any,
ReadOnlyRecommended?: any,
CreateBackup?: any,
AddToMru?: any,
TextCodepage?: any,
TextVisualLayout?: any): void;
Activate(): void;
Excel$Application: Excel$Application;
Arcs(Index?: any): any;
Excel$AutoFilter: Excel$AutoFilter;
AutoFilterMode: boolean;
Buttons(Index?: any): any;
Calculate(): void;
Cells: Excel$Range;
ChartObjects(Index?: SafeArray<string | number>): Excel$ChartObjects;
ChartObjects(Index: string | number): Excel$ChartObject;
CheckBoxes(Index?: any): any;
CheckSpelling(
CustomDictionary?: string,
IgnoreUppercase?: boolean,
AlwaysSuggest?: boolean,
SpellLang?: Office.MsoLanguageID): void;
CircleInvalid(): void;
CircularReference: Excel$Range;
ClearArrows(): void;
ClearCircles(): void;
CodeName: string;
Columns: Excel$Range;
Excel$Comments: Excel$Comments;
ConsolidationFunction: Excel$XlConsolidationFunction;
ConsolidationOptions: SafeArray<boolean>;
ConsolidationSources: SafeArray<string> | void;
Copy(Before?: Excel$Sheet): void;
Copy(Before: void, After: Excel$Sheet): void;
Creator: Excel$XlCreator;
Excel$CustomProperties: Excel$CustomProperties;
Delete(): void;
DisplayAutomaticPageBreaks: boolean;
DisplayPageBreaks: boolean;
DisplayRightToLeft: boolean;
DrawingObjects(Index?: any): any;
Drawings(Index?: any): any;
DropDowns(Index?: any): any;
EnableAutoFilter: boolean;
EnableCalculation: boolean;
EnableFormatConditionsCalculation: boolean;
EnableOutlining: boolean;
EnablePivotTable: boolean;
EnableSelection: Excel$XlEnableSelection;
Evaluate(Excel$Name: string): any;
ExportAsFixedFormat(
Type: Excel$XlFixedFormatType,
Filename?: string,
Quality?: Excel$XlFixedFormatQuality,
IncludeDocProperties?: boolean,
IgnorePrintAreas?: boolean,
From?: number,
To?: number,
OpenAfterPublish?: boolean,
FixedFormatExtClassPtr?: any): void;
FilterMode: boolean;
GroupBoxes(Index?: any): any;
GroupObjects(Index?: any): any;
Excel$HPageBreaks: Excel$HPageBreaks;
Excel$Hyperlinks: Excel$Hyperlinks;
Index: number;
Labels(Index?: any): any;
Lines(Index?: any): any;
ListBoxes(Index?: any): any;
Excel$ListObjects: Excel$ListObjects;
MailEnvelope: Office.MsoEnvelope;
Move(Before?: Excel$Sheet, After?: Excel$Sheet): void;
Excel$Name: string;
Excel$Names: Excel$Names;
Next: Excel$Worksheet;
OLEObjects(Index: number | string): Excel$OLEObject;
OLEObjects(): Excel$OLEObjects;
OnCalculate: string;
OnData: string;
OnDoubleClick: string;
OnEntry: string;
OnSheetActivate: string;
OnSheetDeactivate: string;
OptionButtons(Index?: any): any;
Excel$Outline: Excel$Outline;
Ovals(Index?: any): any;
Excel$PageSetup: Excel$PageSetup;
Parent: any;
Paste(Destination?: Excel$Range, Link?: boolean): void;
PasteSpecial(
Format: string | void,
Link: boolean | void,
DisplayAsIcon: true,
IconFileName?: string,
IconIndex?: number,
IconLabel?: string,
NoHTMLFormatting?: boolean): void;
PasteSpecial(
Format?: string,
Link?: boolean,
DisplayAsIcon?: boolean,
IconFileName?: void,
IconIndex?: void,
IconLabel?: void,
NoHTMLFormatting?: boolean): void;
Pictures(Index?: any): any;
PivotTables(Index?: any): any;
PivotTableWizard(): void;
PivotTableWizard<TSourceType>(
SourceType: TSourceType,
SourceData: Excel$PivotTableWizardSourceData<TSourceType>,
TableDestination?: Excel$Range,
TableName?: string,
RowGrand?: boolean,
ColumnGrand?: boolean,
SaveData?: boolean,
HasAutoFormat?: boolean,
AutoPage?: Excel$PivotTableWizardAutoPage<TSourceType>,
Reserved?: void,
BackgroundQuery?: boolean,
OptimizeCache?: boolean,
PageFieldOrder?: Excel$XlOrder,
PageFieldWrapCount?: number,
ReadData?: boolean,
Connection?: string): void;
Previous: Excel$Worksheet;
PrintedCommentPages: number;
PrintOut<T: boolean | void>(
From?: number,
To?: number,
Copies?: number,
Preview?: boolean,
ActivePrinter?: string,
PrintToFile?: T,
Collate?: boolean,
PrToFileName?: Excel$PrintToFileName<T>,
IgnorePrintAreas?: boolean): void;
PrintPreview(EnableChanges?: boolean): void;
Protect(
Password?: string,
DrawingObjects?: boolean,
Contents?: boolean,
Excel$Scenarios?: boolean,
UserInterfaceOnly?: boolean,
AllowFormattingCells?: boolean,
AllowFormattingColumns?: boolean,
AllowFormattingRows?: boolean,
AllowInsertingColumns?: boolean,
AllowInsertingRows?: boolean,
AllowInsertingHyperlinks?: boolean,
AllowDeletingColumns?: boolean,
AllowDeletingRows?: boolean,
AllowSorting?: boolean,
AllowFiltering?: boolean,
AllowUsingPivotTables?: boolean): void;
ProtectContents: boolean;
ProtectDrawingObjects: boolean;
Excel$Protection: Excel$Protection;
ProtectionMode: boolean;
ProtectScenarios: boolean;
Excel$QueryTables: Excel$QueryTables;
Range(Cell1: string | Excel$Range, Cell2?: string | Excel$Range): Excel$Range;
Rectangles(Index?: any): any;
ResetAllPageBreaks(): void;
Rows: Excel$Range;
SaveAs(
Filename: string,
FileFormat?: Excel$XlFileFormat,
Password?: string,
WriteResPassword?: string,
ReadOnlyRecommended?: boolean,
CreateBackup?: boolean,
AddToMru?: boolean,
TextCodepage?: any,
TextVisualLayout?: any,
Local?: boolean): void;
Scenarios(Index: number | string): Excel$Scenario;
Scenarios(Index?: SafeArray<number | string>): Excel$Scenarios;
Scripts: Office.Scripts;
ScrollArea: string;
ScrollBars(Index?: any): any;
Select(Replace?: boolean): void;
SetBackgroundPicture(Filename: string): void;
Excel$Shapes: Excel$Shapes;
ShowAllData(): void;
ShowDataForm(): void;
Excel$SmartTags: Excel$SmartTags;
Excel$Sort: Excel$Sort;
Spinners(Index?: any): any;
StandardHeight: number;
StandardWidth: number;
Excel$Tab: Excel$Tab;
TextBoxes(Index?: any): any;
TransitionExpEval: boolean;
TransitionFormEntry: boolean;
Type: Excel$XlSheetType;
Unprotect(Password?: string): void;
UsedRange: Excel$Range;
Visible: Excel$XlSheetVisibility;
Excel$VPageBreaks: Excel$VPageBreaks;
XmlDataQuery(
Excel$XPath: string,
SelectionNamespaces?: string,
Map?: Excel$XmlMap): Excel$Range | null;
XmlMapQuery(
Excel$XPath: string,
SelectionNamespaces?: string,
Map?: Excel$XmlMap): Excel$Range
}

declare class Excel$WorksheetFunction  {
constructor(): this;
_WSFunction(
Arg1?: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
AccrInt(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7?: any): number;
AccrIntM(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
Acos(Arg1: number): number;
Acosh(Arg1: number): number;
Aggregate(
Arg1: number,
Arg2: number,
Arg3: Excel$Range,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
AmorDegrc(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7?: any): number;
AmorLinc(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7?: any): number;
And(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): boolean;
Excel$Application: Excel$Application;
Asc(Arg1: string): string;
Asin(Arg1: number): number;
Asinh(Arg1: number): number;
Atan2(Arg1: number, Arg2: number): number;
Atanh(Arg1: number): number;
AveDev(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Average(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
AverageIf(Arg1: Excel$Range, Arg2: any, Arg3?: any): number;
AverageIfs(
Arg1: Excel$Range,
Arg2: Excel$Range,
Arg3: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any): number;
BahtText(Arg1: number): string;
BesselI(Arg1: any, Arg2: any): number;
BesselJ(Arg1: any, Arg2: any): number;
BesselK(Arg1: any, Arg2: any): number;
BesselY(Arg1: any, Arg2: any): number;
Beta_Dist(
Arg1: number,
Arg2: number,
Arg3: number,
Arg4: boolean,
Arg5?: any,
Arg6?: any): number;
Beta_Inv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
BetaDist(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
BetaInv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
Bin2Dec(Arg1: any): string;
Bin2Hex(Arg1: any, Arg2?: any): string;
Bin2Oct(Arg1: any, Arg2?: any): string;
Binom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
Binom_Inv(Arg1: number, Arg2: number, Arg3: number): number;
BinomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
Ceiling(Arg1: number, Arg2: number): number;
Ceiling_Precise(Arg1: number, Arg2?: any): number;
ChiDist(Arg1: number, Arg2: number): number;
ChiInv(Arg1: number, Arg2: number): number;
ChiSq_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
ChiSq_Dist_RT(Arg1: number, Arg2: number): number;
ChiSq_Inv(Arg1: number, Arg2: number): number;
ChiSq_Inv_RT(Arg1: number, Arg2: number): number;
ChiSq_Test(Arg1: any, Arg2: any): number;
ChiTest(Arg1: any, Arg2: any): number;
Choose(
Arg1: any,
Arg2: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
Clean(Arg1: string): string;
Combin(Arg1: number, Arg2: number): number;
Complex(Arg1: any, Arg2: any, Arg3?: any): string;
Confidence(Arg1: number, Arg2: number, Arg3: number): number;
Confidence_Norm(Arg1: number, Arg2: number, Arg3: number): number;
Confidence_T(Arg1: number, Arg2: number, Arg3: number): number;
Convert(Arg1: any, Arg2: any, Arg3: any): number;
Correl(Arg1: any, Arg2: any): number;
Cosh(Arg1: number): number;
Count(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
CountA(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
CountBlank(Arg1: Excel$Range): number;
CountIf(Arg1: Excel$Range, Arg2: string | number): number;
CountIfs(
Arg1: Excel$Range,
Arg2: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
CoupDayBs(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
CoupDays(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
CoupDaysNc(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
CoupNcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
CoupNum(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
CoupPcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
Covar(Arg1: any, Arg2: any): number;
Covariance_P(Arg1: any, Arg2: any): number;
Covariance_S(Arg1: any, Arg2: any): number;
Creator: Excel$XlCreator;
CritBinom(Arg1: number, Arg2: number, Arg3: number): number;
CumIPmt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
CumPrinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
DAverage(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
Days360(Arg1: any, Arg2: any, Arg3?: any): number;
Db(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
Dbcs(Arg1: string): string;
DCount(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DCountA(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
Ddb(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
Dec2Bin(Arg1: any, Arg2?: any): string;
Dec2Hex(Arg1: any, Arg2?: any): string;
Dec2Oct(Arg1: any, Arg2?: any): string;
Degrees(Arg1: number): number;
Delta(Arg1: any, Arg2?: any): number;
DevSq(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
DGet(Arg1: Excel$Range, Arg2: any, Arg3: any): any;
Disc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
DMax(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DMin(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
Dollar(Arg1: number, Arg2?: any): string;
DollarDe(Arg1: any, Arg2: any): number;
DollarFr(Arg1: any, Arg2: any): number;
DProduct(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DStDev(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DStDevP(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DSum(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
Dummy19(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
Dummy21(Arg1: number, Arg2: number): number;
Duration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
DVar(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
DVarP(Arg1: Excel$Range, Arg2: any, Arg3: any): number;
EDate(Arg1: any, Arg2: any): number;
Effect(Arg1: any, Arg2: any): number;
EoMonth(Arg1: any, Arg2: any): number;
Erf(Arg1: any, Arg2?: any): number;
Erf_Precise(Arg1: any): number;
ErfC(Arg1: any): number;
ErfC_Precise(Arg1: any): number;
Even(Arg1: number): number;
Expon_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
ExponDist(Arg1: number, Arg2: number, Arg3: boolean): number;
F_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
F_Dist_RT(Arg1: number, Arg2: number, Arg3: number): number;
F_Inv(Arg1: number, Arg2: number, Arg3: number): number;
F_Inv_RT(Arg1: number, Arg2: number, Arg3: number): number;
F_Test(Arg1: any, Arg2: any): number;
Fact(Arg1: number): number;
FactDouble(Arg1: any): number;
FDist(Arg1: number, Arg2: number, Arg3: number): number;
Find(Arg1: string, Arg2: string, Arg3?: any): number;
FindB(Arg1: string, Arg2: string, Arg3?: any): number;
FInv(Arg1: number, Arg2: number, Arg3: number): number;
Fisher(Arg1: number): number;
FisherInv(Arg1: number): number;
Fixed(Arg1: number, Arg2?: any, Arg3?: any): string;
Floor(Arg1: number, Arg2: number): number;
Floor_Precise(Arg1: number, Arg2?: any): number;
Forecast(Arg1: number, Arg2: any, Arg3: any): number;
Frequency(Arg1: any, Arg2: any): any;
FTest(Arg1: any, Arg2: any): number;
Fv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
FVSchedule(Arg1: any, Arg2: any): number;
Gamma_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
Gamma_Inv(Arg1: number, Arg2: number, Arg3: number): number;
GammaDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
GammaInv(Arg1: number, Arg2: number, Arg3: number): number;
GammaLn(Arg1: number): number;
GammaLn_Precise(Arg1: number): number;
Gcd(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
GeoMean(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
GeStep(Arg1: any, Arg2?: any): number;
Growth(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
HarMean(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Hex2Bin(Arg1: any, Arg2?: any): string;
Hex2Dec(Arg1: any): string;
Hex2Oct(Arg1: any, Arg2?: any): string;
HLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
HypGeom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5: boolean): number;
HypGeomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
IfError(Arg1: any, Arg2: any): any;
ImAbs(Arg1: any): string;
Imaginary(Arg1: any): number;
ImArgument(Arg1: any): string;
ImConjugate(Arg1: any): string;
ImCos(Arg1: any): string;
ImDiv(Arg1: any, Arg2: any): string;
ImExp(Arg1: any): string;
ImLn(Arg1: any): string;
ImLog10(Arg1: any): string;
ImLog2(Arg1: any): string;
ImPower(Arg1: any, Arg2: any): string;
ImProduct(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): string;
ImReal(Arg1: any): number;
ImSin(Arg1: any): string;
ImSqrt(Arg1: any): string;
ImSub(Arg1: any, Arg2: any): string;
ImSum(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): string;
Index(Arg1: any, Arg2: number, Arg3?: any, Arg4?: any): any;
Intercept(Arg1: any, Arg2: any): number;
IntRate(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
Ipmt(
Arg1: number,
Arg2: number,
Arg3: number,
Arg4: number,
Arg5?: any,
Arg6?: any): number;
Irr(Arg1: any, Arg2?: any): number;
IsErr(Arg1: any): boolean;
IsError(Arg1: any): boolean;
IsEven(Arg1: any): boolean;
IsLogical(Arg1: any): boolean;
IsNA(Arg1: any): boolean;
IsNonText(Arg1: any): boolean;
IsNumber(Arg1: any): boolean;
ISO_Ceiling(Arg1: number, Arg2?: any): number;
IsOdd(Arg1: any): boolean;
Ispmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
IsText(Arg1: any): boolean;
IsThaiDigit(Arg1: string): boolean;
Kurt(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Large(Arg1: any, Arg2: number): number;
Lcm(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
LinEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
Ln(Arg1: number): number;
Log(Arg1: number, Arg2?: any): number;
Log10(Arg1: number): number;
LogEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
LogInv(Arg1: number, Arg2: number, Arg3: number): number;
LogNorm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
LogNorm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
LogNormDist(Arg1: number, Arg2: number, Arg3: number): number;
Lookup(Arg1: any, Arg2: any, Arg3?: any): any;
Match(Arg1: any, Arg2: any, Arg3?: any): number;
Max(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
MDeterm(Arg1: any): number;
MDuration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
Median(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Min(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
MInverse(Arg1: any): any;
MIrr(Arg1: any, Arg2: number, Arg3: number): number;
MMult(Arg1: any, Arg2: any): any;
Mode(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Mode_Mult(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): any;
Mode_Sngl(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
MRound(Arg1: any, Arg2: any): number;
MultiNomial(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
NegBinom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
NegBinomDist(Arg1: number, Arg2: number, Arg3: number): number;
NetworkDays(Arg1: any, Arg2: any, Arg3?: any): number;
NetworkDays_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
Nominal(Arg1: any, Arg2: any): number;
Norm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
Norm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
Norm_S_Dist(Arg1: number, Arg2: boolean): number;
Norm_S_Inv(Arg1: number): number;
NormDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
NormInv(Arg1: number, Arg2: number, Arg3: number): number;
NormSDist(Arg1: number): number;
NormSInv(Arg1: number): number;
NPer(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
Npv(
Arg1: number,
Arg2: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Oct2Bin(Arg1: any, Arg2?: any): string;
Oct2Dec(Arg1: any): string;
Oct2Hex(Arg1: any, Arg2?: any): string;
Odd(Arg1: number): number;
OddFPrice(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7: any,
Arg8: any,
Arg9?: any): number;
OddFYield(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7: any,
Arg8: any,
Arg9?: any): number;
OddLPrice(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7: any,
Arg8?: any): number;
OddLYield(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7: any,
Arg8?: any): number;
Or(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): boolean;
Parent: any;
Pearson(Arg1: any, Arg2: any): number;
Percentile(Arg1: any, Arg2: number): number;
Percentile_Exc(Arg1: any, Arg2: number): number;
Percentile_Inc(Arg1: any, Arg2: number): number;
PercentRank(Arg1: any, Arg2: number, Arg3?: any): number;
PercentRank_Exc(Arg1: any, Arg2: number, Arg3?: any): number;
PercentRank_Inc(Arg1: any, Arg2: number, Arg3?: any): number;
Permut(Arg1: number, Arg2: number): number;
Phonetic(Arg1: Excel$Range): string;
Pi(): number;
Pmt(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
Poisson(Arg1: number, Arg2: number, Arg3: boolean): number;
Poisson_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
Power(Arg1: number, Arg2: number): number;
Ppmt(
Arg1: number,
Arg2: number,
Arg3: number,
Arg4: number,
Arg5?: any,
Arg6?: any): number;
Price(
Arg1: any,
Arg2: any,
Arg3: any,
Arg4: any,
Arg5: any,
Arg6: any,
Arg7?: any): number;
PriceDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
PriceMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
Prob(Arg1: any, Arg2: any, Arg3: number, Arg4?: any): number;
Product(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Proper(Arg1: string): string;
Pv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
Quartile(Arg1: any, Arg2: number): number;
Quartile_Exc(Arg1: any, Arg2: number): number;
Quartile_Inc(Arg1: any, Arg2: number): number;
Quotient(Arg1: any, Arg2: any): number;
Radians(Arg1: number): number;
RandBetween(Arg1: any, Arg2: any): number;
Rank(Arg1: number, Arg2: Excel$Range, Arg3?: any): number;
Rank_Avg(Arg1: number, Arg2: Excel$Range, Arg3?: any): number;
Rank_Eq(Arg1: number, Arg2: Excel$Range, Arg3?: any): number;
Rate(
Arg1: number,
Arg2: number,
Arg3: number,
Arg4?: any,
Arg5?: any,
Arg6?: any): number;
Received(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
Replace(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
ReplaceB(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
Rept(Arg1: string, Arg2: number): string;
Roman(Arg1: number, Arg2?: any): string;
Round(Arg1: number, Arg2: number): number;
RoundBahtDown(Arg1: number): number;
RoundBahtUp(Arg1: number): number;
RoundDown(Arg1: number, Arg2: number): number;
RoundUp(Arg1: number, Arg2: number): number;
RSq(Arg1: any, Arg2: any): number;
RTD(
progID: any,
server: any,
topic1: any,
topic2?: any,
topic3?: any,
topic4?: any,
topic5?: any,
topic6?: any,
topic7?: any,
topic8?: any,
topic9?: any,
topic10?: any,
topic11?: any,
topic12?: any,
topic13?: any,
topic14?: any,
topic15?: any,
topic16?: any,
topic17?: any,
topic18?: any,
topic19?: any,
topic20?: any,
topic21?: any,
topic22?: any,
topic23?: any,
topic24?: any,
topic25?: any,
topic26?: any,
topic27?: any,
topic28?: any): any;
Search(Arg1: string, Arg2: string, Arg3?: any): number;
SearchB(Arg1: string, Arg2: string, Arg3?: any): number;
SeriesSum(Arg1: any, Arg2: any, Arg3: any, Arg4: any): number;
Sinh(Arg1: number): number;
Skew(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Sln(Arg1: number, Arg2: number, Arg3: number): number;
Slope(Arg1: any, Arg2: any): number;
Small(Arg1: any, Arg2: number): number;
SqrtPi(Arg1: any): number;
Standardize(Arg1: number, Arg2: number, Arg3: number): number;
StDev(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
StDev_P(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
StDev_S(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
StDevP(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
StEyx(Arg1: any, Arg2: any): number;
Substitute(Arg1: string, Arg2: string, Arg3: string, Arg4?: any): string;
Subtotal(
Arg1: number,
Arg2: Excel$Range,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Sum(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
SumIf(Arg1: Excel$Range, Arg2: any, Arg3?: any): number;
SumIfs(
Arg1: Excel$Range,
Arg2: Excel$Range,
Arg3: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any): number;
SumProduct(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
SumSq(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
SumX2MY2(Arg1: any, Arg2: any): number;
SumX2PY2(Arg1: any, Arg2: any): number;
SumXMY2(Arg1: any, Arg2: any): number;
Syd(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
T_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
T_Dist_2T(Arg1: number, Arg2: number): number;
T_Dist_RT(Arg1: number, Arg2: number): number;
T_Inv(Arg1: number, Arg2: number): number;
T_Inv_2T(Arg1: number, Arg2: number): number;
T_Test(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
Tanh(Arg1: number): number;
TBillEq(Arg1: any, Arg2: any, Arg3?: any): number;
TBillPrice(Arg1: any, Arg2: any, Arg3?: any): number;
TBillYield(Arg1: any, Arg2: any, Arg3?: any): number;
TDist(Arg1: number, Arg2: number, Arg3: number): number;
Text(Arg1: any, Arg2: string): string;
ThaiDayOfWeek(Arg1: number): string;
ThaiDigit(Arg1: string): string;
ThaiMonthOfYear(Arg1: number): string;
ThaiNumSound(Arg1: number): string;
ThaiNumString(Arg1: number): string;
ThaiStringLength(Arg1: string): number;
ThaiYear(Arg1: number): number;
TInv(Arg1: number, Arg2: number): number;
Transpose(Arg1: any): any;
Trend(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
Trim(Arg1: string): string;
TrimMean(Arg1: any, Arg2: number): number;
TTest(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
USDollar(Arg1: number, Arg2: number): string;
Var(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Var_P(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Var_S(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
VarP(
Arg1: any,
Arg2?: any,
Arg3?: any,
Arg4?: any,
Arg5?: any,
Arg6?: any,
Arg7?: any,
Arg8?: any,
Arg9?: any,
Arg10?: any,
Arg11?: any,
Arg12?: any,
Arg13?: any,
Arg14?: any,
Arg15?: any,
Arg16?: any,
Arg17?: any,
Arg18?: any,
Arg19?: any,
Arg20?: any,
Arg21?: any,
Arg22?: any,
Arg23?: any,
Arg24?: any,
Arg25?: any,
Arg26?: any,
Arg27?: any,
Arg28?: any,
Arg29?: any,
Arg30?: any): number;
Vdb(
Arg1: number,
Arg2: number,
Arg3: number,
Arg4: number,
Arg5: number,
Arg6?: any,
Arg7?: any): number;
VLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
Weekday(Arg1: any, Arg2?: any): number;
WeekNum(Arg1: any, Arg2?: any): number;
Weibull(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
Weibull_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
WorkDay(Arg1: any, Arg2: any, Arg3?: any): number;
WorkDay_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
Xirr(Arg1: any, Arg2: any, Arg3?: any): number;
Xnpv(Arg1: any, Arg2: any): number;
YearFrac(Arg1: any, Arg2: any, Arg3?: any): number;
YieldDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
YieldMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
Z_Test(Arg1: any, Arg2: number, Arg3?: any): number;
ZTest(Arg1: any, Arg2: number, Arg3?: any): number
}

declare class Excel$WorksheetView  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DisplayFormulas: boolean;
DisplayGridlines: boolean;
DisplayHeadings: boolean;
DisplayOutline: boolean;
DisplayZeros: boolean;
Parent: any;
Excel$Sheet: Excel$Worksheet
}

declare class Excel$XmlDataBinding  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
ClearSettings(): void;
Creator: Excel$XlCreator;
LoadSettings(Url: string): void;
Parent: any;
Refresh(): Excel$XlXmlImportResult;
SourceUrl: string
}

declare class Excel$XmlMap  {
constructor(): this;
_Default: string;
AdjustColumnWidth: boolean;
AppendOnImport: boolean;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
DataBinding: Excel$XmlDataBinding;
Delete(): void;
Export(Url: string, Overwrite?: boolean): Excel$XlXmlExportResult;
ExportXml(Data: string): Excel$XlXmlExportResult;
Import(Url: string, Overwrite?: boolean): Excel$XlXmlImportResult;
ImportXml(XmlData: string, Overwrite?: boolean): Excel$XlXmlImportResult;
IsExportable: boolean;
Excel$Name: string;
Parent: any;
PreserveColumnFilter: boolean;
PreserveNumberFormatting: boolean;
RootElementName: string;
RootElementNamespace: Excel$XmlNamespace;
SaveDataSourceDefinition: boolean;
Schemas: Excel$XmlSchemas;
ShowImportExportValidationErrors: boolean;
Excel$WorkbookConnection: Excel$WorkbookConnection
}

declare interface Excel$XmlMaps {
_Default(Index: any): Excel$XmlMap,
Add(Schema: string, RootElementName?: string): Excel$XmlMap,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$XmlMap,
+Parent: any,
(Index: number | string): Excel$XmlMap
} 

declare class Excel$XmlNamespace  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Parent: any;
Prefix: string;
Uri: string
}

declare interface Excel$XmlNamespaces {
_Default(Index: any): Excel$XmlNamespace,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
InstallManifest(Path: string, InstallForAllUsers?: boolean): void,
Item(Index: number | string): Excel$XmlNamespace,
+Parent: any,
+Value: string,
(Index: number | string): Excel$XmlNamespace
} 

declare class Excel$XmlSchema  {
constructor(): this;
Excel$Application: Excel$Application;
Creator: Excel$XlCreator;
Excel$Name: string;
Namespace: Excel$XmlNamespace;
Parent: any;
XML: string
}

declare interface Excel$XmlSchemas {
_Default(Index: any): Excel$XmlSchema,
+Excel$Application: Excel$Application,
+Count: number,
+Creator: Excel$XlCreator,
Item(Index: number | string): Excel$XmlSchema,
+Parent: any,
(Index: number | string): Excel$XmlSchema
} 

declare class Excel$XPath  {
constructor(): this;
_Default: string;
Excel$Application: Excel$Application;
Clear(): void;
Creator: Excel$XlCreator;
Map: Excel$XmlMap;
Parent: any;
Repeating: boolean;
SetValue(
Map: Excel$XmlMap,
Excel$XPath: string,
SelectionNamespace?: any,
Repeating?: boolean): void;
Value: string
}

declare type EventHelperTypes$Application_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$Chart_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$OLEObject_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$QueryTable_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$Workbook_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare type EventHelperTypes$Worksheet_Invoke_ArgNames = ["dispidMember", "riid", "lcid", "wFlags", "pdispparams", "pvarResult", "pexcepinfo", "puArgErr"];

declare interface EventHelperTypes$Application_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$Chart_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$OLEObject_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$QueryTable_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$Workbook_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 

declare interface EventHelperTypes$Worksheet_Invoke_Parameter {
+dispidMember: number,
+lcid: number,
+pdispparams: stdole.DISPPARAMS,
pexcepinfo: stdole.EXCEPINFO,
puArgErr: number,
pvarResult: any,
+riid: stdole.GUID,
+wFlags: number
} 
	declare interface EnumeratorConstructor {
new <T>(sheets: Excel$Excel$Sheets<T>): Enumerator<T>
} 
	declare interface ActiveXObject {
on(
obj: Excel$Excel$Application,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$Application_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$Application_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$Application,
event: "NewWorkbook"
| "WorkbookActivate"
| "WorkbookAddinInstall"
| "WorkbookAddinUninstall"
| "WorkbookDeactivate"
| "WorkbookOpen",
argNames: ["Wb"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "ProtectedViewWindowActivate" | "ProtectedViewWindowDeactivate" | "ProtectedViewWindowOpen" | "ProtectedViewWindowResize",
argNames: ["Pvw"],
handler: (parameter: {
+Pvw: Excel$Excel$ProtectedViewWindow
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "ProtectedViewWindowBeforeClose",
argNames: ["Pvw", "Reason", "Cancel"],
handler: (
parameter: {
+Pvw: Excel$Excel$ProtectedViewWindow,
+Reason: Excel$Excel$XlProtectedViewCloseReason,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "ProtectedViewWindowBeforeEdit",
argNames: ["Pvw", "Cancel"],
handler: (parameter: {
+Pvw: Excel$Excel$ProtectedViewWindow,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetActivate" | "SheetCalculate" | "SheetDeactivate",
argNames: ["Sh"],
handler: (parameter: {
+Sh: Excel$Excel$Chart | Excel$Excel$Worksheet
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetBeforeDoubleClick" | "SheetBeforeRightClick",
argNames: ["Sh", "Target", "Cancel"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Range,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetChange" | "SheetSelectionChange",
argNames: ["Sh", "Target"],
handler: (parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetFollowHyperlink",
argNames: ["Sh", "Target"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Hyperlink
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetPivotTableAfterValueChange",
argNames: ["Sh", "TargetPivotTable", "TargetRange"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+TargetPivotTable: Excel$Excel$PivotTable,
+TargetRange: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetPivotTableBeforeAllocateChanges" | "SheetPivotTableBeforeCommitChanges",
argNames: ["Sh", "TargetPivotTable", "ValueChangeStart", "ValueChangeEnd", "Cancel"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetPivotTableBeforeDiscardChanges",
argNames: ["Sh", "TargetPivotTable", "ValueChangeStart", "ValueChangeEnd"],
handler: (
parameter: {
+Sh: any,
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "SheetPivotTableUpdate",
argNames: ["Sh", "Target"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$PivotTable
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WindowActivate" | "WindowDeactivate" | "WindowResize",
argNames: ["Wb", "Wn"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook,
+Wn: Excel$Excel$Window
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookAfterSave",
argNames: ["Wb", "Success"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook,
+Success: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookAfterXmlExport",
argNames: ["Wb", "Map", "Url", "Result"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Map: Excel$Excel$XmlMap,
+Url: string,
+Result: Excel$Excel$XlXmlExportResult
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookAfterXmlImport",
argNames: ["Wb", "Map", "IsRefresh", "Result"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Map: Excel$Excel$XmlMap,
+IsRefresh: boolean,
+Result: Excel$Excel$XlXmlImportResult
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookBeforeClose" | "WorkbookBeforePrint",
argNames: ["Wb", "Cancel"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookBeforeSave",
argNames: ["Wb", "SaveAsUI", "Cancel"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+SaveAsUI: boolean,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookBeforeXmlExport",
argNames: ["Wb", "Map", "Url", "Cancel"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Map: Excel$Excel$XmlMap,
+Url: string,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookBeforeXmlImport",
argNames: ["Wb", "Map", "Url", "IsRefresh", "Cancel"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Map: Excel$Excel$XmlMap,
+Url: string,
+IsRefresh: boolean,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookNewChart",
argNames: ["Wb", "Ch"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook,
+Ch: Excel$Excel$Chart
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookNewSheet",
argNames: ["Wb", "Sh"],
handler: (parameter: {
+Wb: Excel$Excel$Workbook,
+Sh: Excel$Excel$Worksheet
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookPivotTableCloseConnection" | "WorkbookPivotTableOpenConnection",
argNames: ["Wb", "Target"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Target: Excel$Excel$PivotTable
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookRowsetComplete",
argNames: ["Wb", "Description", "Sheet", "Success"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+Description: string,
+Excel$Sheet: string,
+Success: boolean
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "WorkbookSync",
argNames: ["Wb", "SyncEventType"],
handler: (
parameter: {
+Wb: Excel$Excel$Workbook,
+SyncEventType: Office.MsoSyncEventType
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "BeforeDoubleClick",
argNames: ["ElementID", "Arg1", "Arg2", "Cancel"],
handler: (
parameter: {
+ElementID: number,
+Arg1: number,
+Arg2: number,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "BeforeRightClick",
argNames: ["Cancel"],
handler: (parameter: {
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$Chart_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$Chart_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$Chart,
event: "MouseDown" | "MouseMove" | "MouseUp",
argNames: ["Button", "Shift", "x", "y"],
handler: (parameter: {
+Button: number,
+Shift: number,
+x: number,
+y: number
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "Select",
argNames: ["ElementID", "Arg1", "Arg2"],
handler: (parameter: {
+ElementID: number,
+Arg1: number,
+Arg2: number
}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "SeriesChange",
argNames: ["SeriesIndex", "PointIndex"],
handler: (parameter: {
+SeriesIndex: number,
+PointIndex: number
}) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$OLEObject_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$OLEObject_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "AfterRefresh",
argNames: ["Success"],
handler: (parameter: {
+Success: boolean
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "BeforeRefresh",
argNames: ["Cancel"],
handler: (parameter: {
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$QueryTable_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$QueryTable_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "AfterSave",
argNames: ["Success"],
handler: (parameter: {
+Success: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "AfterXmlExport",
argNames: ["Map", "Url", "Result"],
handler: (
parameter: {
+Map: Excel$Excel$XmlMap,
+Url: string,
+Result: Excel$Excel$XlXmlExportResult
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "AfterXmlImport",
argNames: ["Map", "IsRefresh", "Result"],
handler: (
parameter: {
+Map: Excel$Excel$XmlMap,
+IsRefresh: boolean,
+Result: Excel$Excel$XlXmlImportResult
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "BeforeClose" | "BeforePrint",
argNames: ["Cancel"],
handler: (parameter: {
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "BeforeSave",
argNames: ["SaveAsUI", "Cancel"],
handler: (parameter: {
+SaveAsUI: boolean,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "BeforeXmlExport",
argNames: ["Map", "Url", "Cancel"],
handler: (parameter: {
+Map: Excel$Excel$XmlMap,
+Url: string,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "BeforeXmlImport",
argNames: ["Map", "Url", "IsRefresh", "Cancel"],
handler: (
parameter: {
+Map: Excel$Excel$XmlMap,
+Url: string,
+IsRefresh: boolean,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$Workbook_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$Workbook_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "NewChart",
argNames: ["Ch"],
handler: (parameter: {
+Ch: Excel$Excel$Chart
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "NewSheet" | "SheetActivate" | "SheetCalculate" | "SheetDeactivate",
argNames: ["Sh"],
handler: (parameter: {
+Sh: Excel$Excel$Chart | Excel$Excel$Worksheet
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "PivotTableCloseConnection" | "PivotTableOpenConnection",
argNames: ["Target"],
handler: (parameter: {
+Target: Excel$Excel$PivotTable
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "RowsetComplete",
argNames: ["Description", "Sheet", "Success"],
handler: (
parameter: {
+Description: string,
+Excel$Sheet: string,
+Success: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetBeforeDoubleClick" | "SheetBeforeRightClick",
argNames: ["Sh", "Target", "Cancel"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Range,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetChange" | "SheetSelectionChange",
argNames: ["Sh", "Target"],
handler: (parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetFollowHyperlink",
argNames: ["Sh", "Target"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$Hyperlink
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetPivotTableAfterValueChange",
argNames: ["Sh", "TargetPivotTable", "TargetRange"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+TargetPivotTable: Excel$Excel$PivotTable,
+TargetRange: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetPivotTableBeforeAllocateChanges" | "SheetPivotTableBeforeCommitChanges",
argNames: ["Sh", "TargetPivotTable", "ValueChangeStart", "ValueChangeEnd", "Cancel"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetPivotTableBeforeDiscardChanges",
argNames: ["Sh", "TargetPivotTable", "ValueChangeStart", "ValueChangeEnd"],
handler: (
parameter: {
+Sh: any,
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "SheetPivotTableChangeSync" | "SheetPivotTableUpdate",
argNames: ["Sh", "Target"],
handler: (
parameter: {
+Sh: Excel$Excel$Worksheet,
+Target: Excel$Excel$PivotTable
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "Sync",
argNames: ["SyncEventType"],
handler: (parameter: {
+SyncEventType: Office.MsoSyncEventType
}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "WindowActivate" | "WindowDeactivate" | "WindowResize",
argNames: ["Wn"],
handler: (parameter: {
+Wn: Excel$Excel$Window
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "BeforeDoubleClick" | "BeforeRightClick",
argNames: ["Target", "Cancel"],
handler: (parameter: {
+Target: Excel$Excel$Range,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "Change" | "SelectionChange",
argNames: ["Target"],
handler: (parameter: {
+Target: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "FollowHyperlink",
argNames: ["Target"],
handler: (parameter: {
+Target: Excel$Excel$Hyperlink
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "GetIDsOfNames",
argNames: ["riid", "rgszNames", "cNames", "lcid", "rgdispid"],
handler: (
parameter: {
+riid: stdole.GUID,
+rgszNames: number,
+cNames: number,
+lcid: number,
rgdispid: number
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "GetTypeInfo",
argNames: ["itinfo", "lcid", "pptinfo"],
handler: (parameter: {
+itinfo: number,
+lcid: number,
pptinfo: void
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "GetTypeInfoCount",
argNames: ["pctinfo"],
handler: (parameter: {
pctinfo: number
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "Invoke",
argNames: Excel$EventHelperTypes.EventHelperTypes$Worksheet_Invoke_ArgNames,
handler: (
parameter: Excel$EventHelperTypes.EventHelperTypes$Worksheet_Invoke_Parameter) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "PivotTableAfterValueChange",
argNames: ["TargetPivotTable", "TargetRange"],
handler: (
parameter: {
+TargetPivotTable: Excel$Excel$PivotTable,
+TargetRange: Excel$Excel$Range
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "PivotTableBeforeAllocateChanges" | "PivotTableBeforeCommitChanges",
argNames: ["TargetPivotTable", "ValueChangeStart", "ValueChangeEnd", "Cancel"],
handler: (
parameter: {
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number,
Cancel: boolean
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "PivotTableBeforeDiscardChanges",
argNames: ["TargetPivotTable", "ValueChangeStart", "ValueChangeEnd"],
handler: (
parameter: {
+TargetPivotTable: Excel$Excel$PivotTable,
+ValueChangeStart: number,
+ValueChangeEnd: number
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "PivotTableChangeSync" | "PivotTableUpdate",
argNames: ["Target"],
handler: (parameter: {
+Target: Excel$Excel$PivotTable
}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "QueryInterface",
argNames: ["riid", "ppvObj"],
handler: (parameter: {
+riid: stdole.GUID,
ppvObj: void
}) => void): void,
on(
obj: Excel$Excel$Application,
event: "AddRef" | "AfterCalculate" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Excel$Excel$Chart,
event: "Activate"
| "AddRef"
| "Calculate"
| "Deactivate"
| "DragOver"
| "DragPlot"
| "Release"
| "Resize",
handler: (parameter: {}) => void): void,
on(
obj: Excel$Excel$OLEObject,
event: "AddRef" | "GotFocus" | "LostFocus" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Excel$Excel$QueryTable,
event: "AddRef" | "Release",
handler: (parameter: {}) => void): void,
on(
obj: Excel$Excel$Workbook,
event: "Activate"
| "AddinInstall"
| "AddinUninstall"
| "AddRef"
| "Deactivate"
| "Open"
| "Release",
handler: (parameter: {}) => void): void,
on(
obj: Excel$Excel$Worksheet,
event: "Activate"
| "AddRef"
| "Calculate"
| "Deactivate"
| "Release",
handler: (parameter: {}) => void): void,
set(
obj: Excel$Excel$Chart,
propertyName: "HasAxis",
parameterTypes: [Excel$Excel$XlAxisType | void, Excel$Excel$XlAxisGroup | void],
newValue: boolean): void,
set(
obj: Excel$Excel$ControlFormat,
propertyName: "List",
parameterTypes: [number],
newValue: string): void,
set(
obj: Excel$Excel$ControlFormat,
propertyName: "List",
parameterTypes: empty[],
newValue: SafeArray<string>): void,
set(
obj: Excel$Excel$PageSetup,
propertyName: "PrintQuality",
parameterTypes: [number],
newValue: number): void,
set(
obj: Excel$Excel$Workbook,
propertyName: "Colors",
parameterTypes: [number],
newValue: number): void,
set(
obj: Excel$Excel$Range,
propertyName: "Value",
parameterTypes: [Excel$Excel$XlRangeValueDataType],
newValue: any): void,
set(
obj: Excel$Excel$PivotField,
propertyName: "Subtotals",
parameterTypes: [Excel$Excel$PivotFieldSubtotal],
newValue: boolean): void
} 
	declare interface ActiveXObjectNameMap {
"Excel.Application": Excel$Excel$Application,
"Excel.Chart": Excel$Excel$Chart,
"Excel.Sheet": Excel$Excel$Worksheet
} 
    }
