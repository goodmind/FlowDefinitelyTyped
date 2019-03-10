declare module "activex-vbide" {
  declare var npm$namespace$VBIDE: {
    vbext_CodePaneview: typeof VBIDE$vbext_CodePaneview,
    vbext_ComponentType: typeof VBIDE$vbext_ComponentType,
    vbext_ProcKind: typeof VBIDE$vbext_ProcKind,
    vbext_ProjectProtection: typeof VBIDE$vbext_ProjectProtection,
    vbext_ProjectType: typeof VBIDE$vbext_ProjectType,
    vbext_RefKind: typeof VBIDE$vbext_RefKind,
    vbext_VBAMode: typeof VBIDE$vbext_VBAMode,
    vbext_WindowState: typeof VBIDE$vbext_WindowState,
    vbext_WindowType: typeof VBIDE$vbext_WindowType,
    vbextFileTypes: typeof VBIDE$vbextFileTypes,
    AddIn: typeof VBIDE$AddIn,
    Application: typeof VBIDE$Application,
    CodeModule: typeof VBIDE$CodeModule,
    CodePane: typeof VBIDE$CodePane,
    CommandBarEvents: typeof VBIDE$CommandBarEvents,
    Component: typeof VBIDE$Component,
    Events: typeof VBIDE$Events,
    ProjectTemplate: typeof VBIDE$ProjectTemplate,
    Property: typeof VBIDE$Property,
    Reference: typeof VBIDE$Reference,
    ReferencesEvents: typeof VBIDE$ReferencesEvents,
    VBComponent: typeof VBIDE$VBComponent,
    VBE: typeof VBIDE$VBE,
    VBProject: typeof VBIDE$VBProject,
    Window: typeof VBIDE$Window
  };

  declare var VBIDE$vbext_CodePaneview: {|
    +vbext_cv_FullModuleView: 1, // 1
    +vbext_cv_ProcedureView: 0 // 0
  |};

  declare var VBIDE$vbext_ComponentType: {|
    +vbext_ct_ActiveXDesigner: 11, // 11
    +vbext_ct_ClassModule: 2, // 2
    +vbext_ct_Document: 100, // 100
    +vbext_ct_MSForm: 3, // 3
    +vbext_ct_StdModule: 1 // 1
  |};

  declare var VBIDE$vbext_ProcKind: {|
    +vbext_pk_Get: 3, // 3
    +vbext_pk_Let: 1, // 1
    +vbext_pk_Proc: 0, // 0
    +vbext_pk_Set: 2 // 2
  |};

  declare var VBIDE$vbext_ProjectProtection: {|
    +vbext_pp_locked: 1, // 1
    +vbext_pp_none: 0 // 0
  |};

  declare var VBIDE$vbext_ProjectType: {|
    +vbext_pt_HostProject: 100, // 100
    +vbext_pt_StandAlone: 101 // 101
  |};

  declare var VBIDE$vbext_RefKind: {|
    +vbext_rk_Project: 1, // 1
    +vbext_rk_TypeLib: 0 // 0
  |};

  declare var VBIDE$vbext_VBAMode: {|
    +vbext_vm_Break: 1, // 1
    +vbext_vm_Design: 2, // 2
    +vbext_vm_Run: 0 // 0
  |};

  declare var VBIDE$vbext_WindowState: {|
    +vbext_ws_Maximize: 2, // 2
    +vbext_ws_Minimize: 1, // 1
    +vbext_ws_Normal: 0 // 0
  |};

  declare var VBIDE$vbext_WindowType: {|
    +vbext_wt_Browser: 2, // 2
    +vbext_wt_CodeWindow: 0, // 0
    +vbext_wt_Designer: 1, // 1
    +vbext_wt_Find: 8, // 8
    +vbext_wt_FindReplace: 9, // 9
    +vbext_wt_Immediate: 5, // 5
    +vbext_wt_LinkedWindowFrame: 11, // 11
    +vbext_wt_Locals: 4, // 4
    +vbext_wt_MainWindow: 12, // 12
    +vbext_wt_ProjectWindow: 6, // 6
    +vbext_wt_PropertyWindow: 7, // 7
    +vbext_wt_Toolbox: 10, // 10
    +vbext_wt_ToolWindow: 15, // 15
    +vbext_wt_Watch: 3 // 3
  |};

  declare var VBIDE$vbextFileTypes: {|
    +vbextFileTypeBinary: 10, // 10
    +vbextFileTypeClass: 2, // 2
    +vbextFileTypeDesigners: 12, // 12
    +vbextFileTypeDocObject: 9, // 9
    +vbextFileTypeExe: 4, // 4
    +vbextFileTypeForm: 0, // 0
    +vbextFileTypeFrx: 5, // 5
    +vbextFileTypeGroupProject: 11, // 11
    +vbextFileTypeModule: 1, // 1
    +vbextFileTypeProject: 3, // 3
    +vbextFileTypePropertyPage: 8, // 8
    +vbextFileTypeRes: 6, // 6
    +vbextFileTypeUserControl: 7 // 7
  |};

  declare class VBIDE$AddIn {
    constructor(): this;
    Collection: VBIDE$Addins;
    Connect: boolean;
    Description: string;
    Guid: string;
    Object: any;
    ProgId: string;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$Addins {
    +Count: number;
    Item(index: any): VBIDE$AddIn;
    +Parent: any;
    Update(): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$AddIn;
  }

  declare class VBIDE$Application {
    constructor(): this;
    Version: string;
  }

  declare class VBIDE$CodeModule {
    constructor(): this;
    AddFromFile(FileName: string): void;
    AddFromString(String: string): void;
    VBIDE$CodePane: VBIDE$CodePane;
    CountOfDeclarationLines: number;
    CountOfLines: number;
    CreateEventProc(EventName: string, ObjectName: string): number;

    /**
     * @param Count [Count=1]
     */
    DeleteLines(StartLine: number, Count?: number): void;

    /**
     * @param WholeWord [WholeWord=false]
     * @param MatchCase [MatchCase=false]
     * @param PatternSearch [PatternSearch=false]
     */
    Find(
      Target: string,
      StartLine: number,
      StartColumn: number,
      EndLine: number,
      EndColumn: number,
      WholeWord?: boolean,
      MatchCase?: boolean,
      PatternSearch?: boolean
    ): boolean;
    InsertLines(Line: number, String: string): void;
    Lines(StartLine: number, Count: number): string;
    Name: string;
    Parent: VBIDE$VBComponent;
    ProcBodyLine(
      ProcName: string,
      ProcKind: $Values<typeof VBIDE$vbext_ProcKind>
    ): number;
    ProcCountLines(
      ProcName: string,
      ProcKind: $Values<typeof VBIDE$vbext_ProcKind>
    ): number;
    ProcOfLine(
      Line: number,
      ProcKind: $Values<typeof VBIDE$vbext_ProcKind>
    ): string;
    ProcStartLine(
      ProcName: string,
      ProcKind: $Values<typeof VBIDE$vbext_ProcKind>
    ): number;
    ReplaceLine(Line: number, String: string): void;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare class VBIDE$CodePane {
    constructor(): this;
    VBIDE$CodeModule: VBIDE$CodeModule;
    CodePaneView: $Values<typeof VBIDE$vbext_CodePaneview>;
    Collection: VBIDE$CodePanes;
    CountOfVisibleLines: number;
    GetSelection(
      StartLine: number,
      StartColumn: number,
      EndLine: number,
      EndColumn: number
    ): void;
    SetSelection(
      StartLine: number,
      StartColumn: number,
      EndLine: number,
      EndColumn: number
    ): void;
    Show(): void;
    TopLine: number;
    VBIDE$VBE: VBIDE$VBE;
    VBIDE$Window: VBIDE$Window;
  }

  declare interface VBIDE$CodePanes {
    +Count: number;
    Current: VBIDE$CodePane;
    Item(index: any): VBIDE$CodePane;
    +Parent: VBIDE$VBE;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$CodePane;
  }

  declare class VBIDE$CommandBarEvents {
    constructor(): this;
  }

  declare class VBIDE$Component {
    constructor(): this;
    VBIDE$Application: VBIDE$Application;
    IsDirty: boolean;
    Name: string;
    Parent: VBIDE$Components;
  }

  declare interface VBIDE$Components {
    Add(
      ComponentType: $Values<typeof VBIDE$vbext_ComponentType>
    ): VBIDE$Component;
    +Application: VBIDE$Application;
    +Count: number;
    Import(FileName: string): VBIDE$Component;
    Item(index: any): VBIDE$Component;
    +Parent: VBIDE$VBProject;
    Remove(Component: VBIDE$Component): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$Component;
  }

  declare class VBIDE$Events {
    constructor(): this;
    CommandBarEvents(CommandBarControl: any): VBIDE$CommandBarEvents;
    ReferencesEvents(VBProject: VBIDE$VBProject): VBIDE$ReferencesEvents;
  }

  declare interface VBIDE$LinkedWindows {
    Add(Window: VBIDE$Window): void;
    +Count: number;
    Item(index: any): VBIDE$Window;
    +Parent: VBIDE$Window;
    Remove(Window: VBIDE$Window): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$Window;
  }

  declare class VBIDE$ProjectTemplate {
    constructor(): this;
    VBIDE$Application: VBIDE$Application;
    Parent: VBIDE$Application;
  }

  declare interface VBIDE$Properties {
    +Application: VBIDE$Application;
    +Count: number;
    Item(index: any): VBIDE$Property;
    +Parent: any;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$Property;
  }

  declare class VBIDE$Property {
    constructor(): this;
    VBIDE$Application: VBIDE$Application;
    Collection: VBIDE$Properties;
    IndexedValue(Index1: any, Index2?: any, Index3?: any, Index4?: any): any;
    Name: string;
    NumIndices: number;
    Object: any;
    Parent: VBIDE$Properties;
    Value: any;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare class VBIDE$Reference {
    constructor(): this;
    BuiltIn: boolean;
    Collection: VBIDE$References;
    Description: string;
    FullPath: string;
    Guid: string;
    IsBroken: boolean;
    Major: number;
    Minor: number;
    Name: string;
    Type: $Values<typeof VBIDE$vbext_RefKind>;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$References {
    AddFromFile(FileName: string): VBIDE$Reference;
    AddFromGuid(Guid: string, Major: number, Minor: number): VBIDE$Reference;
    +Count: number;
    Item(index: any): VBIDE$Reference;
    +Parent: VBIDE$VBProject;
    Remove(Reference: VBIDE$Reference): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$Reference;
  }

  declare class VBIDE$ReferencesEvents {
    constructor(): this;
  }

  declare class VBIDE$VBComponent {
    constructor(): this;
    Activate(): void;
    VBIDE$CodeModule: VBIDE$CodeModule;
    Collection: VBIDE$VBComponents;
    Designer: any;
    DesignerID: string;
    DesignerWindow(): VBIDE$Window;
    Export(FileName: string): void;
    HasOpenDesigner: boolean;
    Name: string;
    VBIDE$Properties: VBIDE$Properties;
    Saved: boolean;
    Type: $Values<typeof VBIDE$vbext_ComponentType>;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$VBComponents {
    Add(
      ComponentType: $Values<typeof VBIDE$vbext_ComponentType>
    ): VBIDE$VBComponent;
    AddCustom(ProgId: string): VBIDE$VBComponent;

    /**
     * @param index [index=0]
     */
    AddMTDesigner(index?: number): VBIDE$VBComponent;
    +Count: number;
    Import(FileName: string): VBIDE$VBComponent;
    Item(index: any): VBIDE$VBComponent;
    +Parent: VBIDE$VBProject;
    Remove(VBComponent: VBIDE$VBComponent): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$VBComponent;
  }

  declare class VBIDE$VBE {
    constructor(): this;
    ActiveCodePane: VBIDE$CodePane;
    ActiveVBProject: VBIDE$VBProject;
    ActiveWindow: VBIDE$Window;
    VBIDE$Addins: VBIDE$Addins;
    VBIDE$CodePanes: VBIDE$CodePanes;
    CommandBars: Office.CommandBars;
    VBIDE$Events: VBIDE$Events;
    MainWindow: VBIDE$Window;
    SelectedVBComponent: VBIDE$VBComponent;
    VBIDE$VBProjects: VBIDE$VBProjects;
    Version: string;
    VBIDE$Windows: VBIDE$Windows;
  }

  declare class VBIDE$VBProject {
    constructor(): this;
    VBIDE$Application: VBIDE$Application;
    BuildFileName: string;
    Collection: VBIDE$VBProjects;
    Description: string;
    FileName: string;
    HelpContextID: number;
    HelpFile: string;
    MakeCompiledFile(): void;
    Mode: $Values<typeof VBIDE$vbext_VBAMode>;
    Name: string;
    Parent: VBIDE$Application;
    Protection: $Values<typeof VBIDE$vbext_ProjectProtection>;
    VBIDE$References: VBIDE$References;
    SaveAs(FileName: string): void;
    Saved: boolean;
    Type: $Values<typeof VBIDE$vbext_ProjectType>;
    VBIDE$VBComponents: VBIDE$VBComponents;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$VBProjects {
    Add(Type: $Values<typeof VBIDE$vbext_ProjectType>): VBIDE$VBProject;
    +Count: number;
    Item(index: any): VBIDE$VBProject;
    Open(bstrPath: string): VBIDE$VBProject;
    +Parent: VBIDE$VBE;
    Remove(lpc: VBIDE$VBProject): void;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$VBProject;
  }

  declare class VBIDE$Window {
    constructor(): this;
    Caption: string;
    Close(): void;
    Collection: VBIDE$Windows;
    Height: number;
    HWnd: number;
    Left: number;
    LinkedWindowFrame: VBIDE$Window;
    VBIDE$LinkedWindows: VBIDE$LinkedWindows;
    SetFocus(): void;
    Top: number;
    Type: $Values<typeof VBIDE$vbext_WindowType>;
    VBIDE$VBE: VBIDE$VBE;
    Visible: boolean;
    Width: number;
    WindowState: $Values<typeof VBIDE$vbext_WindowState>;
  }

  declare interface VBIDE$Windows {
    +Count: number;
    CreateToolWindow(
      AddInInst: VBIDE$AddIn,
      ProgId: string,
      Caption: string,
      GuidPosition: string,
      DocObj: any
    ): VBIDE$Window;
    Item(index: any): VBIDE$Window;
    +Parent: VBIDE$Application;
    +VBE: VBIDE$VBE;
    (index: any): VBIDE$Window;
  }
  declare interface ActiveXObject {
    on(
      obj: VBIDE$CommandBarEvents,
      event: "Click",
      argNames: ["CommandBarControl", "handled", "CancelDefault"],
      handler: (parameter: {
        +CommandBarControl: any,
        +handled: boolean,
        +CancelDefault: boolean
      }) => void
    ): void;
    on(
      obj: VBIDE$References,
      event: "ItemAdded" | "ItemRemoved",
      argNames: ["Reference"],
      handler: (parameter: {
        +Reference: VBIDE$Reference
      }) => void
    ): void;
    on(
      obj: VBIDE$ReferencesEvents,
      event: "ItemAdded" | "ItemRemoved",
      argNames: ["Reference"],
      handler: (parameter: {
        +Reference: VBIDE$Reference
      }) => void
    ): void;
  }
}
