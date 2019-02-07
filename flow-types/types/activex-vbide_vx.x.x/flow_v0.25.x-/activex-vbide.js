declare module "activex-vbide" {
  declare class VBIDE$vbext_CodePaneview {
    constructor(...args: empty): mixed;
    static +vbext_cv_FullModuleView: Class<VBIDE$vbext_CodePaneview__vbext_cv_FullModuleView> &
      VBIDE$vbext_CodePaneview__vbext_cv_FullModuleView &
      1; // 1
    static +vbext_cv_ProcedureView: Class<VBIDE$vbext_CodePaneview__vbext_cv_ProcedureView> &
      VBIDE$vbext_CodePaneview__vbext_cv_ProcedureView &
      0; // 0
  }

  declare class VBIDE$vbext_CodePaneview__vbext_cv_FullModuleView
    mixins VBIDE$vbext_CodePaneview {}
  declare class VBIDE$vbext_CodePaneview__vbext_cv_ProcedureView
    mixins VBIDE$vbext_CodePaneview {}

  declare class VBIDE$vbext_ComponentType {
    constructor(...args: empty): mixed;
    static +vbext_ct_ActiveXDesigner: Class<VBIDE$vbext_ComponentType__vbext_ct_ActiveXDesigner> &
      VBIDE$vbext_ComponentType__vbext_ct_ActiveXDesigner &
      11; // 11
    static +vbext_ct_ClassModule: Class<VBIDE$vbext_ComponentType__vbext_ct_ClassModule> &
      VBIDE$vbext_ComponentType__vbext_ct_ClassModule &
      2; // 2
    static +vbext_ct_Document: Class<VBIDE$vbext_ComponentType__vbext_ct_Document> &
      VBIDE$vbext_ComponentType__vbext_ct_Document &
      100; // 100
    static +vbext_ct_MSForm: Class<VBIDE$vbext_ComponentType__vbext_ct_MSForm> &
      VBIDE$vbext_ComponentType__vbext_ct_MSForm &
      3; // 3
    static +vbext_ct_StdModule: Class<VBIDE$vbext_ComponentType__vbext_ct_StdModule> &
      VBIDE$vbext_ComponentType__vbext_ct_StdModule &
      1; // 1
  }

  declare class VBIDE$vbext_ComponentType__vbext_ct_ActiveXDesigner
    mixins VBIDE$vbext_ComponentType {}
  declare class VBIDE$vbext_ComponentType__vbext_ct_ClassModule
    mixins VBIDE$vbext_ComponentType {}
  declare class VBIDE$vbext_ComponentType__vbext_ct_Document
    mixins VBIDE$vbext_ComponentType {}
  declare class VBIDE$vbext_ComponentType__vbext_ct_MSForm
    mixins VBIDE$vbext_ComponentType {}
  declare class VBIDE$vbext_ComponentType__vbext_ct_StdModule
    mixins VBIDE$vbext_ComponentType {}

  declare class VBIDE$vbext_ProcKind {
    constructor(...args: empty): mixed;
    static +vbext_pk_Get: Class<VBIDE$vbext_ProcKind__vbext_pk_Get> &
      VBIDE$vbext_ProcKind__vbext_pk_Get &
      3; // 3
    static +vbext_pk_Let: Class<VBIDE$vbext_ProcKind__vbext_pk_Let> &
      VBIDE$vbext_ProcKind__vbext_pk_Let &
      1; // 1
    static +vbext_pk_Proc: Class<VBIDE$vbext_ProcKind__vbext_pk_Proc> &
      VBIDE$vbext_ProcKind__vbext_pk_Proc &
      0; // 0
    static +vbext_pk_Set: Class<VBIDE$vbext_ProcKind__vbext_pk_Set> &
      VBIDE$vbext_ProcKind__vbext_pk_Set &
      2; // 2
  }

  declare class VBIDE$vbext_ProcKind__vbext_pk_Get
    mixins VBIDE$vbext_ProcKind {}
  declare class VBIDE$vbext_ProcKind__vbext_pk_Let
    mixins VBIDE$vbext_ProcKind {}
  declare class VBIDE$vbext_ProcKind__vbext_pk_Proc
    mixins VBIDE$vbext_ProcKind {}
  declare class VBIDE$vbext_ProcKind__vbext_pk_Set
    mixins VBIDE$vbext_ProcKind {}

  declare class VBIDE$vbext_ProjectProtection {
    constructor(...args: empty): mixed;
    static +vbext_pp_locked: Class<VBIDE$vbext_ProjectProtection__vbext_pp_locked> &
      VBIDE$vbext_ProjectProtection__vbext_pp_locked &
      1; // 1
    static +vbext_pp_none: Class<VBIDE$vbext_ProjectProtection__vbext_pp_none> &
      VBIDE$vbext_ProjectProtection__vbext_pp_none &
      0; // 0
  }

  declare class VBIDE$vbext_ProjectProtection__vbext_pp_locked
    mixins VBIDE$vbext_ProjectProtection {}
  declare class VBIDE$vbext_ProjectProtection__vbext_pp_none
    mixins VBIDE$vbext_ProjectProtection {}

  declare class VBIDE$vbext_ProjectType {
    constructor(...args: empty): mixed;
    static +vbext_pt_HostProject: Class<VBIDE$vbext_ProjectType__vbext_pt_HostProject> &
      VBIDE$vbext_ProjectType__vbext_pt_HostProject &
      100; // 100
    static +vbext_pt_StandAlone: Class<VBIDE$vbext_ProjectType__vbext_pt_StandAlone> &
      VBIDE$vbext_ProjectType__vbext_pt_StandAlone &
      101; // 101
  }

  declare class VBIDE$vbext_ProjectType__vbext_pt_HostProject
    mixins VBIDE$vbext_ProjectType {}
  declare class VBIDE$vbext_ProjectType__vbext_pt_StandAlone
    mixins VBIDE$vbext_ProjectType {}

  declare class VBIDE$vbext_RefKind {
    constructor(...args: empty): mixed;
    static +vbext_rk_Project: Class<VBIDE$vbext_RefKind__vbext_rk_Project> &
      VBIDE$vbext_RefKind__vbext_rk_Project &
      1; // 1
    static +vbext_rk_TypeLib: Class<VBIDE$vbext_RefKind__vbext_rk_TypeLib> &
      VBIDE$vbext_RefKind__vbext_rk_TypeLib &
      0; // 0
  }

  declare class VBIDE$vbext_RefKind__vbext_rk_Project
    mixins VBIDE$vbext_RefKind {}
  declare class VBIDE$vbext_RefKind__vbext_rk_TypeLib
    mixins VBIDE$vbext_RefKind {}

  declare class VBIDE$vbext_VBAMode {
    constructor(...args: empty): mixed;
    static +vbext_vm_Break: Class<VBIDE$vbext_VBAMode__vbext_vm_Break> &
      VBIDE$vbext_VBAMode__vbext_vm_Break &
      1; // 1
    static +vbext_vm_Design: Class<VBIDE$vbext_VBAMode__vbext_vm_Design> &
      VBIDE$vbext_VBAMode__vbext_vm_Design &
      2; // 2
    static +vbext_vm_Run: Class<VBIDE$vbext_VBAMode__vbext_vm_Run> &
      VBIDE$vbext_VBAMode__vbext_vm_Run &
      0; // 0
  }

  declare class VBIDE$vbext_VBAMode__vbext_vm_Break
    mixins VBIDE$vbext_VBAMode {}
  declare class VBIDE$vbext_VBAMode__vbext_vm_Design
    mixins VBIDE$vbext_VBAMode {}
  declare class VBIDE$vbext_VBAMode__vbext_vm_Run mixins VBIDE$vbext_VBAMode {}

  declare class VBIDE$vbext_WindowState {
    constructor(...args: empty): mixed;
    static +vbext_ws_Maximize: Class<VBIDE$vbext_WindowState__vbext_ws_Maximize> &
      VBIDE$vbext_WindowState__vbext_ws_Maximize &
      2; // 2
    static +vbext_ws_Minimize: Class<VBIDE$vbext_WindowState__vbext_ws_Minimize> &
      VBIDE$vbext_WindowState__vbext_ws_Minimize &
      1; // 1
    static +vbext_ws_Normal: Class<VBIDE$vbext_WindowState__vbext_ws_Normal> &
      VBIDE$vbext_WindowState__vbext_ws_Normal &
      0; // 0
  }

  declare class VBIDE$vbext_WindowState__vbext_ws_Maximize
    mixins VBIDE$vbext_WindowState {}
  declare class VBIDE$vbext_WindowState__vbext_ws_Minimize
    mixins VBIDE$vbext_WindowState {}
  declare class VBIDE$vbext_WindowState__vbext_ws_Normal
    mixins VBIDE$vbext_WindowState {}

  declare class VBIDE$vbext_WindowType {
    constructor(...args: empty): mixed;
    static +vbext_wt_Browser: Class<VBIDE$vbext_WindowType__vbext_wt_Browser> &
      VBIDE$vbext_WindowType__vbext_wt_Browser &
      2; // 2
    static +vbext_wt_CodeWindow: Class<VBIDE$vbext_WindowType__vbext_wt_CodeWindow> &
      VBIDE$vbext_WindowType__vbext_wt_CodeWindow &
      0; // 0
    static +vbext_wt_Designer: Class<VBIDE$vbext_WindowType__vbext_wt_Designer> &
      VBIDE$vbext_WindowType__vbext_wt_Designer &
      1; // 1
    static +vbext_wt_Find: Class<VBIDE$vbext_WindowType__vbext_wt_Find> &
      VBIDE$vbext_WindowType__vbext_wt_Find &
      8; // 8
    static +vbext_wt_FindReplace: Class<VBIDE$vbext_WindowType__vbext_wt_FindReplace> &
      VBIDE$vbext_WindowType__vbext_wt_FindReplace &
      9; // 9
    static +vbext_wt_Immediate: Class<VBIDE$vbext_WindowType__vbext_wt_Immediate> &
      VBIDE$vbext_WindowType__vbext_wt_Immediate &
      5; // 5
    static +vbext_wt_LinkedWindowFrame: Class<VBIDE$vbext_WindowType__vbext_wt_LinkedWindowFrame> &
      VBIDE$vbext_WindowType__vbext_wt_LinkedWindowFrame &
      11; // 11
    static +vbext_wt_Locals: Class<VBIDE$vbext_WindowType__vbext_wt_Locals> &
      VBIDE$vbext_WindowType__vbext_wt_Locals &
      4; // 4
    static +vbext_wt_MainWindow: Class<VBIDE$vbext_WindowType__vbext_wt_MainWindow> &
      VBIDE$vbext_WindowType__vbext_wt_MainWindow &
      12; // 12
    static +vbext_wt_ProjectWindow: Class<VBIDE$vbext_WindowType__vbext_wt_ProjectWindow> &
      VBIDE$vbext_WindowType__vbext_wt_ProjectWindow &
      6; // 6
    static +vbext_wt_PropertyWindow: Class<VBIDE$vbext_WindowType__vbext_wt_PropertyWindow> &
      VBIDE$vbext_WindowType__vbext_wt_PropertyWindow &
      7; // 7
    static +vbext_wt_Toolbox: Class<VBIDE$vbext_WindowType__vbext_wt_Toolbox> &
      VBIDE$vbext_WindowType__vbext_wt_Toolbox &
      10; // 10
    static +vbext_wt_ToolWindow: Class<VBIDE$vbext_WindowType__vbext_wt_ToolWindow> &
      VBIDE$vbext_WindowType__vbext_wt_ToolWindow &
      15; // 15
    static +vbext_wt_Watch: Class<VBIDE$vbext_WindowType__vbext_wt_Watch> &
      VBIDE$vbext_WindowType__vbext_wt_Watch &
      3; // 3
  }

  declare class VBIDE$vbext_WindowType__vbext_wt_Browser
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_CodeWindow
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Designer
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Find
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_FindReplace
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Immediate
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_LinkedWindowFrame
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Locals
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_MainWindow
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_ProjectWindow
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_PropertyWindow
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Toolbox
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_ToolWindow
    mixins VBIDE$vbext_WindowType {}
  declare class VBIDE$vbext_WindowType__vbext_wt_Watch
    mixins VBIDE$vbext_WindowType {}

  declare class VBIDE$vbextFileTypes {
    constructor(...args: empty): mixed;
    static +vbextFileTypeBinary: Class<VBIDE$vbextFileTypes__vbextFileTypeBinary> &
      VBIDE$vbextFileTypes__vbextFileTypeBinary &
      10; // 10
    static +vbextFileTypeClass: Class<VBIDE$vbextFileTypes__vbextFileTypeClass> &
      VBIDE$vbextFileTypes__vbextFileTypeClass &
      2; // 2
    static +vbextFileTypeDesigners: Class<VBIDE$vbextFileTypes__vbextFileTypeDesigners> &
      VBIDE$vbextFileTypes__vbextFileTypeDesigners &
      12; // 12
    static +vbextFileTypeDocObject: Class<VBIDE$vbextFileTypes__vbextFileTypeDocObject> &
      VBIDE$vbextFileTypes__vbextFileTypeDocObject &
      9; // 9
    static +vbextFileTypeExe: Class<VBIDE$vbextFileTypes__vbextFileTypeExe> &
      VBIDE$vbextFileTypes__vbextFileTypeExe &
      4; // 4
    static +vbextFileTypeForm: Class<VBIDE$vbextFileTypes__vbextFileTypeForm> &
      VBIDE$vbextFileTypes__vbextFileTypeForm &
      0; // 0
    static +vbextFileTypeFrx: Class<VBIDE$vbextFileTypes__vbextFileTypeFrx> &
      VBIDE$vbextFileTypes__vbextFileTypeFrx &
      5; // 5
    static +vbextFileTypeGroupProject: Class<VBIDE$vbextFileTypes__vbextFileTypeGroupProject> &
      VBIDE$vbextFileTypes__vbextFileTypeGroupProject &
      11; // 11
    static +vbextFileTypeModule: Class<VBIDE$vbextFileTypes__vbextFileTypeModule> &
      VBIDE$vbextFileTypes__vbextFileTypeModule &
      1; // 1
    static +vbextFileTypeProject: Class<VBIDE$vbextFileTypes__vbextFileTypeProject> &
      VBIDE$vbextFileTypes__vbextFileTypeProject &
      3; // 3
    static +vbextFileTypePropertyPage: Class<VBIDE$vbextFileTypes__vbextFileTypePropertyPage> &
      VBIDE$vbextFileTypes__vbextFileTypePropertyPage &
      8; // 8
    static +vbextFileTypeRes: Class<VBIDE$vbextFileTypes__vbextFileTypeRes> &
      VBIDE$vbextFileTypes__vbextFileTypeRes &
      6; // 6
    static +vbextFileTypeUserControl: Class<VBIDE$vbextFileTypes__vbextFileTypeUserControl> &
      VBIDE$vbextFileTypes__vbextFileTypeUserControl &
      7; // 7
  }

  declare class VBIDE$vbextFileTypes__vbextFileTypeBinary
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeClass
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeDesigners
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeDocObject
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeExe
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeForm
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeFrx
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeGroupProject
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeModule
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeProject
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypePropertyPage
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeRes
    mixins VBIDE$vbextFileTypes {}
  declare class VBIDE$vbextFileTypes__vbextFileTypeUserControl
    mixins VBIDE$vbextFileTypes {}

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
    +VBIDE$VBE: VBIDE$VBE;
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
    ProcBodyLine(ProcName: string, ProcKind: VBIDE$vbext_ProcKind): number;
    ProcCountLines(ProcName: string, ProcKind: VBIDE$vbext_ProcKind): number;
    ProcOfLine(Line: number, ProcKind: VBIDE$vbext_ProcKind): string;
    ProcStartLine(ProcName: string, ProcKind: VBIDE$vbext_ProcKind): number;
    ReplaceLine(Line: number, String: string): void;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare class VBIDE$CodePane {
    constructor(): this;
    VBIDE$CodeModule: VBIDE$CodeModule;
    CodePaneView: VBIDE$vbext_CodePaneview;
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
    +VBIDE$VBE: VBIDE$VBE;
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
    Add(ComponentType: VBIDE$vbext_ComponentType): VBIDE$Component;
    +VBIDE$Application: VBIDE$Application;
    +Count: number;
    Import(FileName: string): VBIDE$Component;
    Item(index: any): VBIDE$Component;
    +Parent: VBIDE$VBProject;
    Remove(VBIDE$Component: VBIDE$Component): void;
    +VBIDE$VBE: VBIDE$VBE;
    (index: any): VBIDE$Component;
  }

  declare class VBIDE$Events {
    constructor(): this;
    CommandBarEvents(CommandBarControl: any): VBIDE$CommandBarEvents;
    ReferencesEvents(VBIDE$VBProject: VBIDE$VBProject): VBIDE$ReferencesEvents;
  }

  declare interface VBIDE$LinkedWindows {
    Add(VBIDE$Window: VBIDE$Window): void;
    +Count: number;
    Item(index: any): VBIDE$Window;
    +Parent: VBIDE$Window;
    Remove(VBIDE$Window: VBIDE$Window): void;
    +VBIDE$VBE: VBIDE$VBE;
    (index: any): VBIDE$Window;
  }

  declare class VBIDE$ProjectTemplate {
    constructor(): this;
    VBIDE$Application: VBIDE$Application;
    Parent: VBIDE$Application;
  }

  declare interface VBIDE$Properties {
    +VBIDE$Application: VBIDE$Application;
    +Count: number;
    Item(index: any): VBIDE$Property;
    +Parent: any;
    +VBIDE$VBE: VBIDE$VBE;
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
    Type: VBIDE$vbext_RefKind;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$References {
    AddFromFile(FileName: string): VBIDE$Reference;
    AddFromGuid(Guid: string, Major: number, Minor: number): VBIDE$Reference;
    +Count: number;
    Item(index: any): VBIDE$Reference;
    +Parent: VBIDE$VBProject;
    Remove(VBIDE$Reference: VBIDE$Reference): void;
    +VBIDE$VBE: VBIDE$VBE;
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
    Type: VBIDE$vbext_ComponentType;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$VBComponents {
    Add(ComponentType: VBIDE$vbext_ComponentType): VBIDE$VBComponent;
    AddCustom(ProgId: string): VBIDE$VBComponent;

    /**
     * @param index [index=0]
     */
    AddMTDesigner(index?: number): VBIDE$VBComponent;
    +Count: number;
    Import(FileName: string): VBIDE$VBComponent;
    Item(index: any): VBIDE$VBComponent;
    +Parent: VBIDE$VBProject;
    Remove(VBIDE$VBComponent: VBIDE$VBComponent): void;
    +VBIDE$VBE: VBIDE$VBE;
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
    Mode: VBIDE$vbext_VBAMode;
    Name: string;
    Parent: VBIDE$Application;
    Protection: VBIDE$vbext_ProjectProtection;
    VBIDE$References: VBIDE$References;
    SaveAs(FileName: string): void;
    Saved: boolean;
    Type: VBIDE$vbext_ProjectType;
    VBIDE$VBComponents: VBIDE$VBComponents;
    VBIDE$VBE: VBIDE$VBE;
  }

  declare interface VBIDE$VBProjects {
    Add(Type: VBIDE$vbext_ProjectType): VBIDE$VBProject;
    +Count: number;
    Item(index: any): VBIDE$VBProject;
    Open(bstrPath: string): VBIDE$VBProject;
    +Parent: VBIDE$VBE;
    Remove(lpc: VBIDE$VBProject): void;
    +VBIDE$VBE: VBIDE$VBE;
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
    Type: VBIDE$vbext_WindowType;
    VBIDE$VBE: VBIDE$VBE;
    Visible: boolean;
    Width: number;
    WindowState: VBIDE$vbext_WindowState;
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
    +VBIDE$VBE: VBIDE$VBE;
    (index: any): VBIDE$Window;
  }
  declare interface ActiveXObject {
    on(
      obj: VBIDE$VBIDE$CommandBarEvents,
      event: "Click",
      argNames: ["CommandBarControl", "handled", "CancelDefault"],
      handler: (parameter: {
        +CommandBarControl: any,
        +handled: boolean,
        +CancelDefault: boolean
      }) => void
    ): void;
    on(
      obj: VBIDE$VBIDE$References,
      event: "ItemAdded" | "ItemRemoved",
      argNames: ["Reference"],
      handler: (parameter: {
        +VBIDE$Reference: VBIDE$VBIDE$Reference
      }) => void
    ): void;
    on(
      obj: VBIDE$VBIDE$ReferencesEvents,
      event: "ItemAdded" | "ItemRemoved",
      argNames: ["Reference"],
      handler: (parameter: {
        +VBIDE$Reference: VBIDE$VBIDE$Reference
      }) => void
    ): void;
  }
}
