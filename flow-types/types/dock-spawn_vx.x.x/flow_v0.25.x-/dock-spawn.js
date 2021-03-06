declare module "dock-spawn" {
  /**
   * Dock manager manages all the dock panels in a hierarchy, similar to Visual Studio.
   * It owns an HTMLDivElement inside which all panels are docked.
   * Initially the document manager takes up the central space and acts as the root node.
   */
  declare class dockspawn$DockManager {
    context: dockspawn$DockManagerContext;
    constructor(element: HTMLDivElement): this;
    initialize(): void;
    rebuildLayout(node: dockspawn$DockNode): void;
    invalidate(): void;
    resize(width: number, height: number): void;

    /**
     * Reset the dock model. This happens when state is loaded from JSON.
     */
    setModel(model: dockspawn$DockModel): void;
    setRootNode(node: dockspawn$DockNode): void;

    /**
     * Dock the [dialog] to the left of the [referenceNode] node
     */
    dockDialogLeft(
      referenceNode: dockspawn$DockNode,
      dialog: dockspawn$Dialog
    ): dockspawn$DockNode;

    /**
     * Dock the [dialog] to the right of the [referenceNode] node
     */
    dockDialogRight(
      referenceNode: dockspawn$DockNode,
      dialog: dockspawn$Dialog
    ): dockspawn$DockNode;

    /**
     * Dock the [dialog] above the [referenceNode] node
     */
    dockDialogUp(
      referenceNode: dockspawn$DockNode,
      dialog: dockspawn$Dialog
    ): dockspawn$DockNode;

    /**
     * Dock the [dialog] below the [referenceNode] node
     */
    dockDialogDown(
      referenceNode: dockspawn$DockNode,
      dialog: dockspawn$Dialog
    ): dockspawn$DockNode;

    /**
     * Dock the [dialog] as a tab inside the [referenceNode] node
     */
    dockDialogFill(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer
    ): dockspawn$DockNode;

    /**
     * Dock the [container] to the left of the [referenceNode] node
     */
    dockLeft(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer,
      ratio: number
    ): dockspawn$DockNode;

    /**
     * Dock the [container] to the right of the [referenceNode] node
     */
    dockRight(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer,
      ratio: number
    ): dockspawn$DockNode;

    /**
     * Dock the [container] above the [referenceNode] node
     */
    dockUp(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer,
      ratio: number
    ): dockspawn$DockNode;

    /**
     * Dock the [container] below the [referenceNode] node
     */
    dockDown(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer,
      ratio: number
    ): dockspawn$DockNode;

    /**
     * Dock the [container] as a tab inside the [referenceNode] node
     */
    dockFill(
      referenceNode: dockspawn$DockNode,
      container: dockspawn$PanelContainer
    ): dockspawn$DockNode;
    suspendLayout(): void;
    resumeLayout(): void;
    saveState(): string;
    loadState(state: string): void;
  }

  declare class dockspawn$DockManagerContext {
    dockManager: dockspawn$DockManager;
    model: dockspawn$DockModel;
    documentManagerView: dockspawn$DocumentManagerContainer;
    constructor(dockManager: dockspawn$DockManager): this;
  }

  declare class dockspawn$DockModel {
    rootNode: dockspawn$DockNode;
    documentManagerNode: dockspawn$DockNode;
  }

  declare class dockspawn$DockNode {
    constructor(container: dockspawn$PanelContainer): this;
    detachFromParent(): void;
  }

  /**
   * Tab Host control contains tabs known as TabPages.
   * The tab strip can be aligned in different orientations
   */
  declare class dockspawn$TabHost {
    tabStripDirection: dockspawn$TabStripDirection;
    displayCloseButton: boolean;
    pages: dockspawn$TabPage[];
    hostElement: HTMLDivElement;
    tabListElement: HTMLDivElement;
    separatorElement: HTMLDivElement;
    contentElement: HTMLDivElement;
    constructor(
      tabStripDirection?: dockspawn$TabStripDirection,
      displayCloseButton?: boolean
    ): this;
    setActiveTab(container: dockspawn$PanelContainer): void;

    /**
     * Set the selected TabPage.
     */
    onTabPageSelected(page: dockspawn$TabPage): void;
    resize(width: number, height: number): void;
  }

  declare class dockspawn$TabPage {
    constructor(
      host: dockspawn$TabHost,
      container: dockspawn$PanelContainer
    ): this;
  }

  declare class dockspawn$TabStripDirection {
    constructor(...args: empty): mixed;
    static +DIRECTION_TOP: Class<dockspawn$TabStripDirection__DIRECTION_TOP> &
      dockspawn$TabStripDirection__DIRECTION_TOP &
      0; // 0
    static +DIRECTION_BOTTOM: Class<dockspawn$TabStripDirection__DIRECTION_BOTTOM> &
      dockspawn$TabStripDirection__DIRECTION_BOTTOM &
      1; // 1
    static +DIRECTION_LEFT: Class<dockspawn$TabStripDirection__DIRECTION_LEFT> &
      dockspawn$TabStripDirection__DIRECTION_LEFT &
      2; // 2
    static +DIRECTION_RIGHT: Class<dockspawn$TabStripDirection__DIRECTION_RIGHT> &
      dockspawn$TabStripDirection__DIRECTION_RIGHT &
      3; // 3
  }

  declare class dockspawn$TabStripDirection__DIRECTION_TOP
    mixins dockspawn$TabStripDirection {}
  declare class dockspawn$TabStripDirection__DIRECTION_BOTTOM
    mixins dockspawn$TabStripDirection {}
  declare class dockspawn$TabStripDirection__DIRECTION_LEFT
    mixins dockspawn$TabStripDirection {}
  declare class dockspawn$TabStripDirection__DIRECTION_RIGHT
    mixins dockspawn$TabStripDirection {}

  declare class dockspawn$FillDockContainer {
    tabOrientation: dockspawn$TabStripDirection;
    element: HTMLDivElement;
    tabHost: dockspawn$TabHost;
    dockManager: dockspawn$DockManager;
    name: string;
    containerType: string;
    minimumAllowedChildNodes: number;
    constructor(
      dockManager: dockspawn$DockManager,
      tabStripDirection?: dockspawn$TabStripDirection
    ): this;
  }

  /**
   * The document manager is then central area of the dock layout hierarchy.
   * This is where more important panels are placed (e.g. the text editor in an IDE,
   * 3D view in a modelling package etc
   */
  declare class dockspawn$DocumentManagerContainer
    mixins dockspawn$FillDockContainer {
    selectedTab: dockspawn$TabPage;
    constructor(dockManager: dockspawn$DockManager): this;
    saveState(state: string): void;
  }

  declare class dockspawn$PanelContainer {
    width: number;
    height: number;
    constructor(
      element: HTMLElement,
      dockManager: dockspawn$DockManager,
      title?: string
    ): this;
    setTitle(title: string): void;
    setTitleIcon(iconName: string): void;
  }

  declare class dockspawn$Dialog {
    static fromElement(
      id: string,
      dockManager: dockspawn$DockManager
    ): dockspawn$Dialog;
    constructor(
      panel: dockspawn$PanelContainer,
      dockManager: dockspawn$DockManager
    ): this;
    setPosition(x: number, y: number): void;
    resize(width: number, height: number): void;
    setTitle(title: string): void;
    setTitleIcon(iconName: string): void;
    bringToFront(): void;
  }
}
