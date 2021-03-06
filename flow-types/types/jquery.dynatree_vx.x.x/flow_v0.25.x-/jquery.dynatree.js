declare module "jquery.dynatree" {
  declare interface JQueryUI$UI {
    dynatree: DynatreeNamespace;
  }
  declare interface JQuery {
    dynatree(options?: DynatreeOptions): DynaTree;
    dynatree(option?: string, ...rest: any[]): any;
  }
  declare interface DynaTree {
    activateKey(key: string): DynaTreeNode;
    count(): number;
    enable(): void;
    disable(): void;
    enableUpdate(enable: boolean): void;
    getActiveNode(): DynaTreeNode;
    getNodeByKey(key: string): DynaTreeNode;
    getPersistData(): any;
    getRoot(): DynaTreeNode;
    getSelectedNodes(stopOnParents: boolean): DynaTreeNode[];
    initialize(): void;
    isInitializing(): boolean;
    isReloading(): boolean;
    isUserEvent(): boolean;
    loadKeyPath(
      keyPath: string,
      callback: (node: DynaTreeNode, status: string) => void
    ): void;
    reactivate(setFocus: boolean): void;
    redraw(): void;
    reload(): void;
    renderInvisibleNodes(): void;
    selectKey(key: string, flag: string): DynaTreeNode;
    serializeArray(stopOnParents: boolean): any[];
    toDict(includeRoot?: boolean): any;
    visit(fn: (node: DynaTreeNode) => boolean, includeRoot?: boolean): void;
  }
  declare interface DynaTreeNode {
    data: DynaTreeDataModel;
    activate(): void;
    activateSilently(): void;
    addChild(nodeData: DynaTreeDataModel, beforeNode?: DynaTreeNode): void;
    addChild(nodeData: DynaTreeDataModel[], beforeNode?: DynaTreeNode): void;
    appendAjax(ajaxOptions: JQueryAjaxSettings): void;
    countChildren(): number;
    deactivate(): void;
    expand(flag: boolean): void;
    focus(): void;
    getChildren(): DynaTreeNode[];
    getEventTargetType(event: Event): string;
    getLevel(): number;
    getNextSibling(): DynaTreeNode;
    getParent(): DynaTreeNode;
    getPrevSibling(): DynaTreeNode;
    hasChildren(): boolean;
    isActive(): boolean;
    isChildOf(otherNode: DynaTreeNode): boolean;
    isDescendantOf(otherNode: DynaTreeNode): boolean;
    isExpanded(): boolean;
    isFirstSibling(): boolean;
    isFocused(): boolean;
    isLastSibling(): boolean;
    isLazy(): boolean;
    isLoading(): boolean;
    isSelected(): boolean;
    isStatusNode(): boolean;
    isVisible(): boolean;
    makeVisible(): boolean;
    move(targetNode: DynaTreeNode, mode: string): boolean;
    reload(force: boolean): void;
    reloadChildren(callback?: (node: DynaTreeNode, isOk: boolean) => any): void;
    remove(): void;
    removeChildren(): void;
    render(useEffects: boolean, includeInvisible: boolean): void;
    resetLazy(): void;
    scheduleAction(mode: string, ms: number): void;
    select(flag: boolean): void;
    setLazyNodeStatus(status: number): void;
    setTitle(title: string): void;
    sortChildren(
      cmp?: (a: DynaTreeNode, b: DynaTreeNode) => number,
      deep?: boolean
    ): void;
    toDict(recursive: boolean, callback?: (node: any) => any): any;
    toggleExpand(): void;
    toggleSelect(): void;
    visit(fn: (node: DynaTreeNode) => boolean, includeSelf: boolean): void;
    visitParents(
      fn: (node: DynaTreeNode) => boolean,
      includeSelf: boolean
    ): void;
  }
  declare interface DynatreeOptions {
    title?: string;
    minExpandLevel?: number;
    imagePath?: string;
    children?: DynaTreeDataModel[];
    initId?: string;
    initAjax?: JQueryAjaxSettings;
    autoFocus?: boolean;
    keyboard?: boolean;
    persist?: boolean;
    autoCollapse?: boolean;
    clickFolderMode?: number;
    activeVisible?: boolean;
    checkbox?: boolean;
    selectMode?: number;
    fx?: any;
    noLink?: boolean;
    debugLevel?: number;
    generateIds?: boolean;
    idPrefix?: string;
    keyPathSeparator?: string;
    cookieId?: string;
    dnd?: DynaTreeDNDOptions;
    ajaxDefaults?: DynaTreeAjaxOptions;
    strings?: DynaTreeStringsOptions;
    cookie?: DynaTreeCookieOptions;
    classNames?: DynatreeClassNamesOptions;
    onClick?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onDblClick?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onKeydown?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onKeypress?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onFocus?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onBlur?: (dtnode: DynaTreeNode, event: Event) => boolean;
    onQueryActivate?: (flag: string, dtnode: DynaTreeNode) => void;
    onQuerySelect?: (flag: string, dtnode: DynaTreeNode) => void;
    onQueryExpand?: (flag: string, dtnode: DynaTreeNode) => void;
    onPostInit?: (isReloading: boolean, isError: boolean) => void;
    onActivate?: (dtnode: DynaTreeNode) => void;
    onDeactivate?: (dtnode: DynaTreeNode) => void;
    onSelect?: (flag: string, dtnode: DynaTreeNode) => void;
    onExpand?: (flag: string, dtnode: DynaTreeNode) => void;
    onLazyRead?: (dtnode: DynaTreeNode) => void;
    onCustomRender?: (dtnode: DynaTreeNode) => void;
    onCreate?: (dtnode: DynaTreeNode, nodeSpan: any) => void;
    onRender?: (dtnode: DynaTreeNode, nodeSpan: any) => void;
    postProcess?: (data: any, dataType: any) => void;
  }
  declare interface DynaTreeDataModel {
    title: string;
    key?: string;
    isFolder?: boolean;
    isLazy?: boolean;
    tooltip?: string;
    href?: string;
    icon?: string;
    addClass?: string;
    noLink?: boolean;
    activate?: boolean;
    focus?: boolean;
    expand?: boolean;
    select?: boolean;
    hideCheckbox?: boolean;
    unselectable?: boolean;
    children?: DynaTreeDataModel[];
  }
  declare interface DynaTreeDNDOptions {
    autoExpandMS?: number;
    preventVoidMoves?: boolean;
    revert: boolean;
    onDragStart?: (sourceNode: any) => void;
    onDragStop?: (sourceNode: any) => void;
    onDragEnter?: (targetNode: any, sourceNode: any) => void;
    onDragOver?: (targetNode: any, sourceNode: any, hitMode: string) => void;
    onDrop?: (targetNode: any, sourceNode: any, hitMode: string) => void;
    onDragLeave?: (targetNode: any, sourceNode: any) => void;
  }
  declare interface DynaTreeCookieOptions {
    expires: any;
  }
  declare interface DynaTreeStringsOptions {
    loading?: string;
    loadError?: string;
  }
  declare interface DynaTreeAjaxOptions {
    cache?: boolean;
    timeout?: number;
    dataType?: string;
  }
  declare interface DynatreeClassNamesOptions {
    container?: string;
    node?: string;
    folder?: string;
    empty?: string;
    vline?: string;
    expander?: string;
    connector?: string;
    checkbox?: string;
    nodeIcon?: string;
    title?: string;
    noConnector?: string;
    nodeError?: string;
    nodeWait?: string;
    hidden?: string;
    combinedExpanderPrefix?: string;
    combinedIconPrefix?: string;
    hasChildren?: string;
    active?: string;
    selected?: string;
    expanded?: string;
    lazy?: string;
    focused?: string;
    partsel?: string;
    lastsib?: string;
  }
  declare interface DynatreeNamespace {
    getNode(element: HTMLElement): DynaTreeNode;
    getPersistData(cookieId: string, cookieOpts: DynaTreeCookieOptions): any;
    version: number;
  }
}
