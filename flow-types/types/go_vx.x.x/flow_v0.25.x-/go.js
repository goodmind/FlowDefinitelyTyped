declare module "go" {
  /**
   * A number in place of a Margin object is treated as a uniform Margin with that thickness
   */
  declare type go$MarginLike = go$Margin | number;

  /**
   * A string in place of a Brush object is treated as a Solid Brush of that color.
   */
  declare type go$BrushLike = go$Brush | string;

  /**
   * A Key is the type of the unique identifier managed by Models for each node data object.
   */
  declare type go$Key = string | number;

  /**
   * Either name a property or get the value of a property from an object.
   */
  declare type go$PropertyAccessor = string | ((data: any, newval: any) => any);

  /**
   * A constructor
   */
  declare type go$Constructor = (...args: Array<any>) => Object;

  /**
   * An adornment is a special kind of Part that is associated with another Part,
   * the Adornment.adornedPart.
   * Adornments are normally associated with a particular GraphObject in the adorned part --
   * that is the value of .adornedObject.
   * However, the .adornedObject may be null, in which case the .adornedPart will also be null.
   */
  declare class go$Adornment mixins go$Part {
    /**
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if not supplied, the default Panel type is Panel.Position.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * Gets or sets the GraphObject that is adorned.
     */
    adornedObject: go$GraphObject;

    /**
     * This read-only property returns the Part that contains the adorned object.
     */
    adornedPart: go$Part;

    /**
     * This read-only property returns a Placeholder that this Adornment may contain in its visual tree.
     */
    placeholder: go$Placeholder;
  }

  /**
   * This class handles animations in a Diagram.  Each Diagram has one, the Diagram.animationManager.
   */
  declare class go$AnimationManager {
    /**
     * You do not normally need to create an instance of this class because one already exists as the Diagram.animationManager, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets the duration for animations, in milliseconds. The default value is 600 milliseconds.
     */
    duration: number;

    /**
     * This read-only property is true when the AnimationManager is currently animating.
     */
    isAnimating: boolean;

    /**
     * Gets or sets whether this AnimationManager operates. The default value is true.
     */
    isEnabled: boolean;

    /**
     * Gets or sets whether an animation is performed on an initial layout. The default value is true.
     */
    isInitial: boolean;

    /**
     * This read-only property is true when the animation manager is in the middle of an animation tick.
     */
    isTicking: boolean;

    /**
     * Stops any running animation and updates the Diagram to its final state.
     */
    stopAnimation(): void;
  }

  /**
   * The Diagram.commandHandler implements various
   * commands such as CommandHandler.deleteSelection or CommandHandler.redo.
   * The CommandHandler includes keyboard event handling to interpret
   * key presses as commands.
   */
  declare class go$CommandHandler {
    /**
     * The constructor produces a CommandHandler with the default key bindings.
     */
    constructor(): this;

    /**
     * Gets or sets a data object that is copied by .groupSelection when creating a new Group. The default value is null. The value must be an Object or null.
     */
    archetypeGroupData: any;

    /**
     * Gets or sets whether copySelection should also copy Links that connect with selected Nodes.
     */
    copiesConnectedLinks: boolean;

    /**
     * Gets or sets whether copySelection and copyToClipboard copy the node data property whose value is the containing group data's key. The default value is false.
     */
    copiesGroupKey: boolean;

    /**
     * Gets or sets whether copySelection and copyToClipboard copy the node data property whose value is the tree-parent node data's key. The default value is false.
     */
    copiesParentKey: boolean;

    /**
     * Gets or sets whether .copySelection should also copy subtrees. The default value is false.
     */
    copiesTree: boolean;

    /**
     * Gets or sets the Diagram.scale set by resetZoom. The default value is 1.0.
     */
    defaultScale: number;

    /**
     * Gets or sets whether .deleteSelection should also delete subtrees. The default value is false.
     */
    deletesTree: boolean;

    /**
     * Gets or sets whether .deleteSelection should also delete links that are connected with deleted nodes. The default value is true.
     */
    deletesConnectedLinks: boolean;

    /**
     * This read-only property returns the Diagram that is using this CommandHandler.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets the predicate that determines whether or not a node may become a member of a group. The default predicate is null, which is equivalent to simply returning true.
     */
    memberValidation: (g: go$Group, p: go$Part) => boolean;

    /**
     * Gets or sets the amount by which .decreaseZoom and .increaseZoom change the Diagram.scale. The default value is 1.05 (5%).
     */
    zoomFactor: number;

    /**
     * Make sure all of the unnested Parts in the given collection are removed from any containing Groups.
     * @param {go$Iterable<go$Part>} coll a collection of Parts.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} check whether to call .isValidMember to confirm that changing the Part to be a top-level Part is valid.
     */
    addTopLevelParts(coll: go$Iterable<go$Part>, check?: boolean): boolean;

    /**
     * This predicate controls whether the user can collapse expanded Groups.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and consider collapsing this particular Group.
     */
    canCollapseSubGraph(group?: go$Group): boolean;

    /**
     * This predicate controls whether the user can collapse expanded subtrees of Nodes.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} node if supplied, ignore the selection and consider collapsing this particular Node.
     */
    canCollapseTree(node?: go$Node): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .copySelection command.
     */
    canCopySelection(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .cutSelection command.
     */
    canCutSelection(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .decreaseZoom command.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} factor This defaults to 1/.zoomFactor.  The value should be less than one.
     */
    canDecreaseZoom(factor?: number): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .deleteSelection command.
     */
    canDeleteSelection(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .editTextBlock command.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} textblock the TextBlock to consider editing.
     */
    canEditTextBlock(textblock?: go$TextBlock): boolean;

    /**
     * This predicate controls whether the user can expand collapsed Groups.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and consider expanding this particular Group.
     */
    canExpandSubGraph(group?: go$Group): boolean;

    /**
     * This predicate controls whether the user can expand collapsed subtrees of Nodes.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} node if supplied, ignore the selection and consider expanding this particular Node.
     */
    canExpandTree(node?: go$Node): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .groupSelection command.
     */
    canGroupSelection(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .increaseZoom command.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} factor This defaults to .zoomFactor.  The value should be greater than one.
     */
    canIncreaseZoom(factor?: number): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .pasteSelection command.
     */
    canPasteSelection(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .redo command.
     */
    canRedo(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .resetZoom command.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} newscale This defaults to 1.  The value should be greater than zero.
     */
    canResetZoom(newscale?: number): boolean;

    /**
     * This predicate controls whether or not the user can invoke the scrollToPart command.
     * This returns false if there is no argument Part and there are no selected Parts.
     * @this {go$CommandHandler}
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} part This defaults to the first selected Part of Diagram.selection
     * @return {boolean} This returns true if Diagram.allowHorizontalScroll and Diagram.allowVerticalScroll are true.
     */
    canScrollToPart(part?: go$Part): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .selectAll command.
     */
    canSelectAll(): boolean;

    /**
 * This predicate controls whether or not the user can invoke the .showContextMenu command.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} obj a GraphObject or Diagram with a contextMenu defined.
If none is given, this method will use the first selected object, or else the Diagram.
 */
    canShowContextMenu(obj?: go$GraphObject | go$Diagram): boolean;

    /**
     * This predicate controls whether the user may stop the current tool.
     */
    canStopCommand(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .undo command.
     */
    canUndo(): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .ungroupSelection command.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and consider ungrouping this particular Group.
     */
    canUngroupSelection(group?: go$Group): boolean;

    /**
     * This predicate controls whether or not the user can invoke the .zoomToFit command.
     */
    canZoomToFit(): boolean;

    /**
     * Collapse all expanded selected Groups.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and collapse this particular Group.
     */
    collapseSubGraph(group?: go$Group): void;

    /**
     * Collapse all expanded selected Nodes.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} node if supplied, ignore the selection and collapse this particular Node subtree.
     */
    collapseTree(node?: go$Node): void;

    /**
     * Copy the currently selected parts, Diagram.selection, from the Diagram into the clipboard.
     */
    copySelection(): void;

    /**
     * This makes a copy of the given collection of Parts and stores it in a static variable acting as the clipboard.
     * @param {go$Iterable<go$Part>} coll A collection of Parts.
     */
    copyToClipboard(coll: go$Iterable<go$Part>): void;

    /**
     * Execute a .copySelection followed by a .deleteSelection.
     */
    cutSelection(): void;

    /**
     * Decrease the Diagram.scale by a given factor.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} factor This defaults to 1/.zoomFactor.  The value should be less than one.
     */
    decreaseZoom(factor?: number): void;

    /**
     * Delete the currently selected parts from the diagram.
     */
    deleteSelection(): void;

    /**
     * This is called by tools to handle keyboard commands.
     */
    doKeyDown(): void;

    /**
     * This is called by tools to handle keyboard commands.
     */
    doKeyUp(): void;

    /**
     * Start in-place editing of a TextBlock in the selected Part.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} textblock the TextBlock to start editing.
     */
    editTextBlock(textblock?: go$TextBlock): void;

    /**
     * Expand all collapsed selected Groups.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and expand this particular Group.
     */
    expandSubGraph(group?: go$Group): void;

    /**
     * Expand all collapsed selected Nodes.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} node if supplied, ignore the selection and collapse this particular Node subtree.
     */
    expandTree(node?: go$Node): void;

    /**
     * Add a copy of .archetypeGroupData and add it to the diagram's model to create a new Group and then add the selected Parts to that new group.
     */
    groupSelection(): void;

    /**
     * Increase the Diagram.scale by a given factor.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} factor This defaults to .zoomFactor.  The value should be greater than one.
     */
    increaseZoom(factor?: Number): void;

    /**
     * This predicate is called to determine whether a Node may be added as a member of a Group.
     * @param {go$Group} group this may be null if the node is being added as a top-level node.
     * @param {go$Part} part a Part, usually a Node, possibly another Group, but not a Link or an Adornment.
     */
    isValidMember(group: go$Group, part: go$Part): boolean;

    /**
     * If the clipboard holds a collection of Parts, and if the Model.dataFormat matches that stored in the clipboard, this makes a copy of the clipboard's parts and adds the copies to this Diagram.
     */
    pasteFromClipboard(): go$Set<go$Part>;

    /**
     * Copy the contents of the clipboard into this diagram, and make those new parts the new selection.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pos Point at which to center the newly pasted parts; if not present the parts are not moved.
     */
    pasteSelection(pos?: go$Point): void;

    /**
     * Call UndoManager.redo.
     */
    redo(): void;

    /**
     * Set the Diagram.scale to a new scale value, by default 1.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} newscale This defaults to 1.  The value should be greater than zero.
     */
    resetZoom(newscale?: number): void;

    /**
 * This command scrolls the diagram to make a highlighted or selected Part visible in the viewport.
 * Call this command repeatedly to cycle through the Diagram.highlighteds collection,
 * if there are any Parts in that collection, or else in the Diagram.selection collection,
 * scrolling to each one in turn.
 * <p>
 * This is normally invoked by the <code>Space</code> keyboard shortcut.
 * If there is no argument and there is no highlighted or selected Part, this command does nothing.
 * @expose
 * @this {go$CommandHandler}
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} part This defaults to the first highlighted Part of Diagram.highlighteds,
or, if there are no highlighted Parts, the first selected Part.
 */
    scrollToPart(part?: go$Part): void;

    /**
     * Select all of the selectable Parts in the diagram.
     */
    selectAll(): void;

    /**
 * Open the context menu of a given GraphObject.
 * The given GraphObject must have a GraphObject.contextMenu
 * defined in order to show anything.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} obj a GraphObject or Diagram with a contextMenu defined.
If none is given, this method will use the first selected object, or else the Diagram.
 */
    showContextMenu(obj?: go$GraphObject | go$Diagram): void;

    /**
     * Cancel the operation of the current tool.
     */
    stopCommand(): void;

    /**
     * Call UndoManager.undo.
     */
    undo(): void;

    /**
     * Remove the group from the diagram without removing its members from the diagram.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} group if supplied, ignore the selection and consider ungrouping this particular Group.
     */
    ungroupSelection(group?: go$Group): void;

    /**
     * Change the Diagram.scale so that the Diagram.documentBounds fits within the viewport.
     */
    zoomToFit(): void;
  }

  /**
   * A Diagram is associated with an HTML DIV element. Constructing a Diagram creates
   * an HTML Canvas element which it places inside of the given DIV element, in addition to several helper divs.
   * GoJS will manage the contents of this DIV, and the contents should not be modified otherwise,
   * though the given DIV may be styled (background, border, etc) and positioned as needed.
   */
  declare class go$Diagram {
    /**
 * Construct an empty Diagram for a particular DIV HTML element.
 * @param {HTMLDivElement} div A reference to a DIV HTML element in the DOM.
If no DIV is supplied one will be created in memory. The Diagram's Diagram.div property
can then be set later on.
 */
    constructor(div: HTMLDivElement): this;

    /**
 * Construct an empty Diagram for a particular DIV HTML element.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} div The ID of a DIV element in the DOM.
If no DIV identifier is supplied one will be created in memory. The Diagram's Diagram.div property
can then be set later on.
 */
    constructor(div?: string): this;

    /**
     * Gets or sets whether the user may copy to or paste parts from the internal clipboard.
     */
    allowClipboard: boolean;

    /**
     * Gets or sets whether the user may copy objects.
     */
    allowCopy: boolean;

    /**
     * Gets or sets whether the user may delete objects from the Diagram.
     */
    allowDelete: boolean;

    /**
     * Gets or sets whether the user may start a drag-and-drop in this Diagram, possibly dropping in a different element.
     */
    allowDragOut: boolean;

    /**
     * Gets or sets whether the user may end a drag-and-drop operation in this Diagram.
     */
    allowDrop: boolean;

    /**
     * Gets or sets whether the user may group parts together.
     */
    allowGroup: boolean;

    /**
     * Gets or sets whether the user is allowed to use the horizontal scrollbar.
     */
    allowHorizontalScroll: boolean;

    /**
     * Gets or sets whether the user may add parts to the Diagram.
     */
    allowInsert: boolean;

    /**
     * Gets or sets whether the user may draw new links.
     */
    allowLink: boolean;

    /**
     * Gets or sets whether the user may move objects.
     */
    allowMove: boolean;

    /**
     * Gets or sets whether the user may reconnect existing links.
     */
    allowRelink: boolean;

    /**
     * Gets or sets whether the user may reshape parts.
     */
    allowReshape: boolean;

    /**
     * Gets or sets whether the user may resize parts.
     */
    allowResize: boolean;

    /**
     * Gets or sets whether the user may rotate parts.
     */
    allowRotate: boolean;

    /**
     * Gets or sets whether the user may select objects.
     */
    allowSelect: boolean;

    /**
     * Gets or sets whether the user may do in-place text editing.
     */
    allowTextEdit: boolean;

    /**
     * Gets or sets whether the user may undo or redo any changes.
     */
    allowUndo: boolean;

    /**
     * Gets or sets whether the user may ungroup existing groups.
     */
    allowUngroup: boolean;

    /**
     * Gets or sets whether the user is allowed to use the vertical scrollbar.
     */
    allowVerticalScroll: boolean;

    /**
     * Gets or sets whether the user may zoom into or out of the Diagram.
     */
    allowZoom: boolean;

    /**
     * This read-only property returns the AnimationManager for this Diagram.
     */
    animationManager: go$AnimationManager;

    /**
     * Gets or sets the autoScale of the Diagram, controlling whether or not the Diagram's bounds automatically scale to fit the view.
     */
    autoScale: go$EnumValue;

    /**
     * Gets or sets the Margin (or number for a uniform Margin) that describes the Diagram's autoScrollRegion.
     */
    autoScrollRegion: go$MarginLike;

    /**
     * Gets or sets the function to execute when the user single-primary-clicks on the background of the Diagram.
     */
    click: (e: go$InputEvent) => void;

    /**
     * Gets or sets the CommandHandler for this Diagram.
     */
    commandHandler: go$CommandHandler;

    /**
     * Gets or sets the content alignment Spot of this Diagram, to be used in determining how parts are positioned when the .viewportBounds width or height is smaller than the .documentBounds.
     */
    contentAlignment: go$Spot;

    /**
     * Gets or sets the function to execute when the user single-secondary-clicks on the background of the Diagram.
     */
    contextClick: (e: go$InputEvent) => void;

    /**
     * This Adornment is shown when the use context clicks in the background.
     */
    contextMenu: go$Adornment;

    /**
     * Gets or sets the current cursor for the Diagram, overriding the .defaultCursor.
     */
    currentCursor: string;

    /**
     * Gets or sets the current tool for this Diagram that handles all input events.
     */
    currentTool: go$Tool;

    /**
     * Gets or sets the cursor to be used for the Diagram when no GraphObject specifies a different cursor.
     */
    defaultCursor: string;

    /**
     * Gets or sets the default tool for this Diagram that becomes the current tool when the current tool stops.
     */
    defaultTool: go$Tool;

    /**
     * Gets or sets the Diagram's HTMLDivElement, via an HTML Element ID.
     */
    div: HTMLDivElement;

    /**
     * This read-only property returns the model-coordinate bounds of the Diagram.
     */
    documentBounds: go$Rect;

    /**
     * Gets or sets the function to execute when the user double-primary-clicks on the background of the Diagram.
     */
    doubleClick: (e: go$InputEvent) => void;

    /**
     * Gets or sets the most recent mouse-down InputEvent that occurred.
     */
    firstInput: go$InputEvent;

    /**
     * Gets or sets a fixed bounding rectangle to be returned by .documentBounds and .computeBounds.
     */
    fixedBounds: go$Rect;

    /**
     * Gets or sets the scrollMode of the Diagram.
     */
    scrollMode: go$EnumValue;

    /**
     * Gets or sets the Margin (or number for a uniform Margin) that describes a scrollable area that surrounds the document bounds, allowing the user to scroll into empty space.
     */
    scrollMargin: go$MarginLike;

    /**
     * Gets or sets the function used to determine the position that this Diagram can be scrolled or moved to.
     */
    positionComputation: (d: go$Diagram, p: go$Point) => go$Point;

    /**
     * Gets or sets the function used to determine the scale that this Diagram can be set to.
     */
    scaleComputation: (d: go$Diagram, s: number) => number;

    /**
     * Gets or sets a Panel of type Panel.Grid acting as the background grid extending across the whole viewport of this diagram.
     */
    grid: go$Panel;

    /**
     * Gets or sets the default selection Adornment template, used to adorn selected Groups.
     */
    groupSelectionAdornmentTemplate: go$Adornment;

    /**
     * Gets or sets the default Group template used as the archetype for group data that is added to the .model.
     */
    groupTemplate: go$Group;

    /**
     * Gets or sets a Map mapping template names to Groups.
     */
    groupTemplateMap: go$Map<string, go$Group>;

    /**
     * Gets or sets whether the Diagram has a horizontal Scrollbar.
     */
    hasHorizontalScrollbar: boolean;

    /**
     * Gets or sets whether the Diagram has a vertical Scrollbar.
     */
    hasVerticalScrollbar: boolean;

    /**
     * This read-only property returns the read-only collection of highlighted Parts.
     */
    highlighteds: go$Set<go$Part>;

    /**
     * Gets or sets the initialAutoScale of the Diagram.
     */
    initialAutoScale: go$EnumValue;

    /**
     * Gets or sets the initial content alignment Spot of this Diagram, to be used in determining how parts are positioned initially relative to the viewport.
     */
    initialContentAlignment: go$Spot;

    /**
     * Gets or sets the spot in the document's area that should be coincident with the .initialViewportSpot of the viewport when the document is first initialized.
     */
    initialDocumentSpot: go$Spot;

    /**
     * Gets or sets the initial coordinates of this Diagram in the viewport, eventually setting the .position.
     */
    initialPosition: go$Point;

    /**
     * Gets or sets the initial scale of this Diagram in the viewport, eventually setting the .scale.
     */
    initialScale: number;

    /**
     * Gets or sets the spot in the viewport that should be coincident with the .initialDocumentSpot of the document when the document is first initialized.
     */
    initialViewportSpot: go$Spot;

    /**
     * Gets or sets whether the user may interact with the Diagram.
     */
    isEnabled: boolean;

    /**
     * Gets or sets whether the Diagram's Diagram.model is Model.isReadOnly.
     */
    isModelReadOnly: boolean;

    /**
     * Gets or sets whether this Diagram's state has been modified.
     */
    isModified: boolean;

    /**
     * Gets or sets whether mouse events initiated within the Diagram will be captured.
     */
    isMouseCaptured: boolean;

    /**
     * Gets or sets whether the Diagram may be modified by the user, while still allowing the user to scroll, zoom, and select.
     */
    isReadOnly: boolean;

    /**
     * Gets or sets whether the Diagram tree structure is defined by links going from the parent node to their children, or vice-versa.
     */
    isTreePathToChildren: boolean;

    /**
     * Gets or sets the last InputEvent that occurred.
     */
    lastInput: go$InputEvent;

    /**
     * Gets an iterator for this Diagram's Layers.
     */
    layers: go$Iterator<go$Layer>;

    /**
     * Gets or sets the Layout used to position all of the top-level nodes and links in this Diagram.
     */
    layout: go$Layout;

    /**
     * Returns an iterator of all Links in the Diagram.
     */
    links: go$Iterator<go$Link>;

    /**
     * Gets or sets the default selection Adornment template, used to adorn selected Links.
     */
    linkSelectionAdornmentTemplate: go$Adornment;

    /**
     * Gets or sets the default Link template used as the archetype for link data that is added to the .model.
     */
    linkTemplate: go$Link;

    /**
     * Gets or sets a Map mapping template names to Links.
     */
    linkTemplateMap: go$Map<string, go$Link>;

    /**
     * Gets or sets the largest value that .scale may take.
     */
    maxScale: number;

    /**
     * Gets or sets the maximum number of selected objects.
     */
    maxSelectionCount: number;

    /**
     * Gets or sets the smallest value greater than zero that .scale may take.
     */
    minScale: number;

    /**
     * Gets or sets the Model holding data corresponding to the data-bound nodes and links of this Diagram.
     */
    model: go$Model;

    /**
     * Gets or sets the function to execute when the user is dragging the selection in the background of the Diagram during a DraggingTool drag-and-drop, not over any GraphObjects.
     */
    mouseDragOver: (e: go$InputEvent) => void;

    /**
     * Gets or sets the function to execute when the user drops the selection in the background of the Diagram at the end of a DraggingTool drag-and-drop, not onto any GraphObjects.
     */
    mouseDrop: (e: go$InputEvent) => void;

    /**
     * Gets or sets the function to execute when the user holds the mouse stationary in the background of the Diagram while holding down a button, not over any GraphObjects.
     */
    mouseHold: (e: go$InputEvent) => void;

    /**
     * Gets or sets the function to execute when the user holds the mouse stationary in the background of the Diagram without holding down any buttons, not over any GraphObjects.
     */
    mouseHover: (e: go$InputEvent) => void;

    /**
     * Gets or sets the function to execute when the user moves the mouse in the background of the Diagram without holding down any buttons, not over any GraphObjects.
     */
    mouseOver: (e: go$InputEvent) => void;

    /**
     * Returns an iterator of all Nodes and Groups in the Diagram.
     */
    nodes: go$Iterator<go$Node>;

    /**
     * Gets or sets the default selection Adornment template, used to adorn selected Parts other than Groups or Links.
     */
    nodeSelectionAdornmentTemplate: go$Adornment;

    /**
     * Gets or sets the default Node template used as the archetype for node data that is added to the .model.
     */
    nodeTemplate: go$Part;

    /**
     * Gets or sets a Map mapping template names to Parts.
     */
    nodeTemplateMap: go$Map<string, go$Part>;

    /**
     * Gets or sets the Margin (or number for a uniform Margin) that describes the Diagram's padding, which controls how much extra space there is around the area occupied by the document.
     */
    padding: go$MarginLike;

    /**
     * Returns an iterator of all Parts in the Diagram that are not Nodes or Links or Adornments.
     */
    parts: go$Iterator<go$Part>;

    /**
     * Gets or sets the coordinates of this Diagram in the viewport.
     */
    position: go$Point;

    /**
     * Gets or sets the scale transform of this Diagram.
     */
    scale: number;

    /**
     * Gets or sets the distance in screen pixels that the horizontal scrollbar will scroll when scrolling by a line.
     */
    scrollHorizontalLineChange: number;

    /**
     * Gets or sets the distance in screen pixels that the vertical scrollbar will scroll when scrolling by a line.
     */
    scrollVerticalLineChange: number;

    /**
     * This read-only property returns the read-only collection of selected Parts.
     */
    selection: go$Set<go$Part>;

    /**
     * Gets or sets whether ChangedEvents are not recorded by the UndoManager.
     */
    skipsUndoManager: boolean;

    /**
     * This read-only property returns the ToolManager for this Diagram.
     */
    toolManager: go$ToolManager;

    /**
     * This Adornment is shown when the mouse stays motionless in the background.
     */
    toolTip: go$Adornment;

    /**
     * This read-only property returns the UndoManager for this Diagram, which actually belongs to the .model.
     */
    undoManager: go$UndoManager;

    /**
     * Gets or sets what kinds of graphs this diagram allows the user to draw.
     */
    validCycle: go$EnumValue;

    /**
     * This read-only property returns the bounds of the portion of the Diagram that is viewable from its HTML Canvas.
     */
    viewportBounds: go$Rect;

    /**
     * Gets or sets the point, in viewport coordinates, where changes to the .scale will keep the focus in the document.
     */
    zoomPoint: go$Point;

    /**
     * Adds a Part to the Layer that matches the Part's Part.layerName, or else to the default layer, which is named with the empty string.
     * @param {go$Part} part
     */
    add(part: go$Part): void;

    /**
     * Register an event handler that is called when there is a ChangedEvent.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    addChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * Register an event handler that is called when there is a DiagramEvent of a given name.
     * @param {string} name the name is normally capitalized, but this method uses case-insensitive comparison.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a DiagramEvent as its argument.
     */
    addDiagramListener(
      name: string,
      listener: (e: go$DiagramEvent) => void
    ): void;

    /**
     * Register an event handler that is called when there is a ChangedEvent for the Diagram's Model.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    addModelChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * Adds a Layer to the list of layers.
     * @param {go$Layer} layer The Layer to add.
     */
    addLayer(layer: go$Layer): void;

    /**
     * Adds a layer to the list of layers after a specified layer.
     * @param {go$Layer} layer The Layer to add.
     * @param {go$Layer} existingLayer The layer to insert after.
     */
    addLayerAfter(layer: go$Layer, existingLayer: go$Layer): void;

    /**
     * Adds a layer to the list of layers before a specified layer.
     * @param {go$Layer} layer The Layer to add.
     * @param {go$Layer} existingLayer The layer to insert before.
     */
    addLayerBefore(layer: go$Layer, existingLayer: go$Layer): void;

    /**
     * Aligns the Diagram's .position based on a desired document Spot and viewport Spot.
     * @param {go$Spot} documentspot
     * @param {go$Spot} viewportspot
     */
    alignDocument(documentspot: go$Spot, viewportspot: go$Spot): void;

    /**
     * Modifies the .position to show a given Rect of the Diagram by centering the viewport on that Rect.
     * @param {go$Rect} r
     */
    centerRect(r: go$Rect): void;

    /**
     * Removes all Parts from the Diagram, including unbound Parts and the background grid, and also clears out the Model and UndoManager.
     */
    clear(): void;

    /**
     * Remove highlights from all Parts.
     */
    clearHighlighteds(): void;

    /**
     * Deselect all selected Parts.
     */
    clearSelection(): void;

    /**
     * Commit the changes of the current transaction.
     * This just calls UndoManager.commitTransaction.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a descriptive name for the transaction.
     */
    commitTransaction(tname?: string): boolean;

    /**
     * This is called during a Diagram update to determine a new value for .documentBounds.
     */
    computeBounds(): go$Rect;

    /**
     * Find the union of the GraphObject.actualBounds of all of the Parts in the given collection.
     * @param {go$Iterable<go$Part>} coll a collection of Parts.
     */
    computePartsBounds(coll: go$Iterable<go$Part>): go$Rect;

    /**
     * Make a copy of a collection of Parts and return them in a Map mapping each original Part to its copy.
     * @param {go$Iterable<go$Part>} coll A List or a Set or Iterator of Parts.
     * @param {go$Diagram} diagram The destination diagram; if null, the copied parts are not added to this diagram.
     * @param {boolean} check Whether to check Part.canCopy on each part.
     */
    copyParts(
      coll: go$Iterable<go$Part>,
      diagram: go$Diagram,
      check: boolean
    ): void;

    /**
     * Updates the diagram immediately, then resets initialization flags so that actions taken in the argument function will be considered part of Diagram initialization, and will participate in initial layouts, .initialAutoScale, .initialContentAlignment, etc.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} func an optional function of actions to perform as part of another diagram initialization.
     */
    delayInitialization(func?: () => void): void;

    /**
     * Finds a layer with a given name.
     * @param {string} name
     */
    findLayer(name: string): go$Layer;

    /**
     * Look for a Link corresponding to a GraphLinksModel's link data object.
     * @param {Object} linkdata
     */
    findLinkForData(linkdata: Object): go$Link;

    /**
     * Return a collection of Links that are bound to data whose properties have values
     * that match those specified by the given example data.
     * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} examples
     */
    findLinksByExample(...examples: Array<Object>): go$Iterator<go$Link>;

    /**
     * Look for a Node or Group corresponding to a model's node data object.
     * @param {Object} nodedata
     */
    findNodeForData(nodedata: Object): go$Node;

    /**
     * Look for a Node or Group corresponding to a model's node data object's unique key.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key a string or number.
     */
    findNodeForKey(key: go$Key): go$Node;

    /**
     * Return a collection of Nodes and Groups that are bound to data whose properties have values
     * that match those specified by the given example data.
     * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} examples
     */
    findNodesByExample(...examples: Array<Object>): go$Iterator<go$Node>;

    /**
 * Find the front-most GraphObject at the given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 */
    findObjectAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean
    ): go$GraphObject;

    /**
 * Return a collection of the GraphObjects at the given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;

    /**
 * Returns a collection of all GraphObjects that are inside or that intersect a given Rect in document coordinates.
 * @param {go$Rect} r A Rect in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} partialInclusion Whether an object can match if it merely intersects the rectangular area (true) or
if it must be entirely inside the rectangular area (false).  The default value is false.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsIn(
      r: go$Rect,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsIn(
      r: go$Rect,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;

    /**
 * Returns a collection of all GraphObjects that are within a certain distance of a given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {number} dist The distance from the point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} partialInclusion Whether an object can match if it merely intersects the circular area (true) or
if it must be entirely inside the circular area (false).  The default value is true.
The default is true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsNear(
      p: go$Point,
      dist: number,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsNear(
      p: go$Point,
      dist: number,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;

    /**
     * This convenience function finds the front-most Part that is at a given point and that might be selectable.
     * @param {go$Point} p a Point in document coordinates.
     * @param {boolean} selectable Whether to only consider parts that are Part.selectable.
     */
    findPartAt(p: go$Point, selectable: boolean): go$Part;

    /**
     * Look for a Part, Node, Group, or Link corresponding to a Model's data object.
     * @param {Object} data
     */
    findPartForData(data: Object): go$Part;

    /**
     * Look for a Part or Node or Group corresponding to a model's data object's unique key.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key a string or number.
     */
    findPartForKey(key: go$Key): go$Part;

    /**
     * Returns an iterator of all Groups that are at top-level, in other words that are not themselves inside other Groups.
     */
    findTopLevelGroups(): go$Iterator<go$Group>;

    /**
     * Returns an iterator of all top-level Nodes that have no tree parents.
     */
    findTreeRoots(): go$Iterator<go$Node>;

    /**
     * Explicitly bring focus to the Diagram's canvas.
     */
    focus(): void;

    /**
     * This static function gets the Diagram that is attached to an HTML DIV element.
     * @param {HTMLDivElement} div
     */
    static fromDiv(div: HTMLDivElement): go$Diagram;

    /**
     * Make the given part the only highlighted part.
     * @param {go$Part} part
     */
    highlight(part: go$Part): void;

    /**
     * Highlight all of the Parts supplied in the given collection, and clear all other highlighted Parts.
     * @param {go$Iterable<go$Part> | Array<go$Part>} coll an Iterable of Parts
     */
    highlightCollection(coll: go$Iterable<go$Part> | Array<go$Part>): void;

    /**
     * This static function declares that a class (constructor function) derives from another class -- but please note that most classes do not support inheritance.
     * @param {Function} derivedclass
     * @param {Function} baseclass
     */
    static inherit(
      derivedclass: go$Constructor,
      baseclass: go$Constructor
    ): void;

    /**
     * Perform all invalid layouts.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} invalidateAll If true, this will explicitly set Layout.isValidLayout to false on each Layout in the diagram.
     */
    layoutDiagram(invalidateAll?: boolean): void;

    /**
     * Create an HTMLImageElement that contains a bitmap of the current Diagram.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} properties For details see the argument description of .makeImageData.
     */
    makeImage(properties?: {
      size?: go$Size,
      scale?: number,
      maxSize?: go$Size,
      position?: go$Point,
      parts?: go$Iterable<go$Part>,
      padding?: go$MarginLike,
      background?: go$BrushLike,
      showTemporary?: boolean,
      showGrid?: boolean,
      document?: Document,
      type?: string,
      details?: any
    }): HTMLImageElement;

    /**
     * Create a bitmap of the current Diagram encoded as a base64 string.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} properties a JavaScript object detailing optional arguments for image creation, to be passed to makeImageData.
     */
    makeImageData(properties?: {
      size?: go$Size,
      scale?: number,
      maxSize?: go$Size,
      position?: go$Point,
      parts?: go$Iterable<go$Part>,
      padding?: go$MarginLike,
      background?: go$BrushLike,
      showTemporary?: boolean,
      showGrid?: boolean,
      document?: Document,
      type?: string,
      details?: any
    }): string;

    /**
     * Create an SVGElement that contains a SVG rendering of the current Diagram.
     * By default this method returns a snapshot of the visible diagram, but optional arguments give more options.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} properties a JavaScript object detailing optional arguments for SVG creation.
     * @return {SVGElement}
     */
    makeSvg(properties?: {
      size?: go$Size,
      scale?: number,
      maxSize?: go$Size,
      position?: go$Point,
      parts?: go$Iterable<go$Part>,
      padding?: go$MarginLike,
      background?: go$BrushLike,
      showTemporary?: boolean,
      showGrid?: boolean,
      document?: Document,
      elementFinished?: (obj: go$GraphObject, elt: SVGElement) => void
    }): SVGElement;

    /**
     * Move a collection of Parts in this Diagram by a given offset.
     * @param {go$Iterable<go$Part>} coll A List or a Set or Iterator of Parts.
     * @param {go$Point} offset the X and Y change to be made to each Part, in document coordinates.
     * @param {boolean} check Whether to check Part.canMove on each part.
     */
    moveParts(
      coll: go$Iterable<go$Part>,
      offset: go$Point,
      check: boolean
    ): void;

    /**
     * Remove all of the Parts created from model data and then create them again.
     */
    rebuildParts(): void;

    /**
     * Removes a Part from its Layer, provided the Layer is in this Diagram.
     * @param {go$Part} part
     */
    remove(part: go$Part): void;

    /**
     * Unregister an event handler listener.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    removeChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * Unregister a DiagramEvent handler.
     * @param {string} name the name is normally capitalized, but this method uses case-insensitive comparison.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a DiagramEvent as its argument.
     */
    removeDiagramListener(
      name: string,
      listener: (e: go$DiagramEvent) => void
    ): void;

    /**
     * Unregister an event handler listener for the Diagram's Model.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    removeModelChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * Removes the given layer from the list of layers.
     * @param {go$Layer} layer
     */
    removeLayer(layer: go$Layer): void;

    /**
     * This method removes from this Diagram all of the Parts in a collection.
     * @param {go$Iterable<go$Part> | Array<go$Part>} coll A List or Set or Iterator of Parts.
     * @param {boolean} check Whether to check Part.canDelete on each part.
     */
    removeParts(
      coll: go$Iterable<go$Part> | Array<go$Part>,
      check: boolean
    ): void;

    /**
 * Requests that in the near-future the diagram makes sure all GraphObjects are arranged,
 * recomputes the document bounds, updates the scrollbars, and redraws the viewport.
 * Usage of this method is uncommon and may affect performance --
 * for efficiency do not call this method unless you have a well-defined need.
 * Normally, GoJS updates the diagram automatically, and completeing a transaction ensures an immediate update.
 * <p>
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} alwaysQueueUpdate If true the Diagram will queue another update,
even if an update is already occurring. The default value is false.
Side effects in an "InitialLayoutCompleted" DiagramEvent listener might necessitate setting this parameter.
 */
    requestUpdate(alwaysQueueUpdate?: boolean): void;

    /**
     * Rollback the current transaction, undoing any recorded changes.
     * This just calls UndoManager.rollbackTransaction.
     */
    rollbackTransaction(): boolean;

    /**
     * Scrolling function used by primarily by .commandHandler's CommandHandler.doKeyDown.
     * @param {string} unit A string representing the unit of the scroll operation. Can be 'pixel', 'line', or 'page'.
     * @param {string} dir The direction of the scroll operation. Can be 'up', 'down', 'left', or 'right'.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} dist An optional distance multiplier, for multiple pixels, lines, or pages. Default is 1.
     */
    scroll(unit: string, dir: string, dist?: number): void;

    /**
     * Modifies the .position to show a given Rect of the Diagram by centering the viewport on that Rect.
     * @param {go$Rect} r
     */
    scrollToRect(r: go$Rect): void;

    /**
 * Make the given object the only selected object.
 * @param {go$GraphObject} part a GraphObject that is already in a layer of this Diagram.
If the value is null, this does nothing.
 */
    select(part: go$Part): void;

    /**
     * Select all of the Parts supplied in the given collection.
     * @param {go$Iterable<go$Part> | Array<go$Part>} coll a List or Set of Parts to be selected.
     */
    selectCollection(coll: go$Iterable<go$Part> | Array<go$Part>): void;

    /**
     * This method sets a collection of properties according to the property/value pairs that have been set on the given Object,
     * in the same manner as GraphObject.make does when constructing a Diagram with an argument that is a simple JavaScript Object.
     */
    setProperties(props: Object): void;

    /**
     * Begin a transaction, where the changes are held by a Transaction object in the UndoManager.
     * This just calls UndoManager.startTransaction.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a descriptive name for the transaction.
     */
    startTransaction(tname?: string): boolean;

    /**
     * Given a Point in document coordinates, return a new Point in viewport coordinates.
     * @param {go$Point} p
     */
    transformDocToView(p: go$Point): go$Point;

    /**
     * Given a point in viewport coordinates, return a new point in document coordinates.
     * @param {go$Point} p
     */
    transformViewToDoc(p: go$Point): go$Point;

    /**
     * Update all of the data-bound properties of Nodes and Links in this diagram.
     */
    updateAllTargetBindings(): void;

    /**
     * Update all of the references to nodes in case they had been modified in the model without
     * properly notifying the model by calling GraphLinksModel.setGroupKeyForNodeData or
     * GraphLinksModel.setToKeyForLinkData or other similar methods.
     */
    updateAllRelationshipsFromData(): void;

    /**
     * Scales the Diagram to uniformly fit into the viewport.
     */
    zoomToFit(): void;

    /**
     * Modifies the .scale and .position of the Diagram so that the viewport displays a given document-coordinates rectangle.
     * @param {go$Rect} r rectangular bounds in document coordinates.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} scaling an optional value of either .Uniform (the default) or .UniformToFill.
     */
    zoomToRect(r: go$Rect, scaling?: go$EnumValue): void;

    /**
     * This value for Diagram.validCycle states that there are no restrictions on making cycles of links.
     */
    static CycleAll: go$EnumValue;

    /**
     * This value for Diagram.validCycle states that any number of destination links may go out of a node, but at most one source link may come into a node, and there are no directed cycles.
     */
    static CycleDestinationTree: go$EnumValue;

    /**
     * This value for Diagram.validCycle states that a valid link from a node will not produce a directed cycle in the graph.
     */
    static CycleNotDirected: go$EnumValue;

    /**
     * This value for Diagram.validCycle states that a valid link from a node will not produce an undirected cycle in the graph.
     */
    static CycleNotUndirected: go$EnumValue;

    /**
     * This value for Diagram.validCycle states that any number of source links may come into a node, but at most one destination link may go out of a node, and there are no directed cycles.
     */
    static CycleSourceTree: go$EnumValue;

    /**
     * The default autoScale type, used as the value of Diagram.autoScale: The Diagram does not attempt to scale its bounds to fit the view.
     */
    static None: go$EnumValue;

    /**
     * Diagrams with this autoScale type, used as the value of Diagram.autoScale, are scaled uniformly until the documentBounds fits in the view.
     */
    static Uniform: go$EnumValue;

    /**
     * Diagrams with this autoScale type, used as the value of Diagram.autoScale, are scaled uniformly until the documentBounds fits in the view.
     */
    static UniformToFill: go$EnumValue;

    /**
     * This value for Diagram.scrollMode states that the viewport constrains scrolling to the Diagram document bounds.
     */
    static DocumentScroll: go$EnumValue;

    /**
     * This value for Diagram.scrollMode states that the viewport does not constrain scrolling to the Diagram document bounds.
     */
    static InfiniteScroll: go$EnumValue;

    /**
     * This value for Diagram.treeCollapsePolicy states that only the Node.findTreeParentNode's Node.isTreeExpanded property determines whether a "child" node is visible.
     */
    static TreeParentCollapsed: go$EnumValue;

    /**
     * This value for Diagram.treeCollapsePolicy states that all of the Node.findNodesInto or Node.findNodesOutOf, depending on Diagram.isTreePathToChildren being true or false, need to be not Node.isTreeExpanded in order for a "child" node to be not visible.
     */
    static AllParentsCollapsed: go$EnumValue;
    treeCollapsePolicy: go$EnumValue;
    getRenderingHint(name: string): any;
    setRenderingHint(name: string, val: any): void;
    getInputOption(name: string): any;
    setInputOption(name: string, val: any): void;
    maybeUpdate(): void;
    reset(): void;
    simulatedMouseMove(
      e: Event,
      modelpt: go$Point,
      overdiag?: go$Diagram
    ): boolean;
    simulatedMouseUp(
      e: Event,
      other: go$Diagram,
      modelpt: go$Point,
      curdiag?: go$Diagram
    ): boolean;
  }

  /**
   * A DiagramEvent represents a more abstract event than an InputEvent.
   * They are raised on the Diagram class.
   * One can receive such events by registering a DiagramEvent listener on a Diagram
   * by calling Diagram.addDiagramListener.
   * Some DiagramEvents such as "ObjectSingleClicked" are normally
   * associated with InputEvents.
   * Some DiagramEvents such as "SelectionMoved" or "PartRotated" are associated with the
   * results of Tool-handled gestures or CommandHandler actions.
   * Some DiagramEvents are not necessarily associated with any input events at all,
   * such as "ViewportBoundsChanged", which can happen due to programmatic
   * changes to the Diagram.position and Diagram.scale properties.
   */
  declare class go$DiagramEvent {
    /**
     * The DiagramEvent class constructor produces an empty DiagramEvent.
     */
    constructor(): this;

    /**
     * Gets or sets whether any default actions associated with this diagram event should be avoided or cancelled.
     */
    cancel: boolean;

    /**
     * This read-only property returns the diagram associated with the event.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets the name of the kind of diagram event that this represents.
     */
    name: string;

    /**
     * Gets or sets an optional object that describes the change to the subject of the diagram event.
     */
    parameter: any;

    /**
     * Gets or sets an optional object that is the subject of the diagram event.
     */
    subject: any;
  }

  /**
   * This is the abstract base class for all graphical objects.
   */
  declare class go$GraphObject {
    /**
     * This is an abstract class, so you should not use this constructor.
     */
    constructor(): this;

    /**
     * Gets or sets the function to execute when the ActionTool is cancelled and this GraphObject's .isActionable is set to true.
     */
    actionCancel: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute on a mouse-down event when this GraphObject's .isActionable is set to true.
     */
    actionDown: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute on a mouse-move event when this GraphObject's .isActionable is set to true.
     */
    actionMove: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute on a mouse-up event when this GraphObject's .isActionable is set to true.
     */
    actionUp: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * This read-only property returns the bounds of this GraphObject in container coordinates.
     */
    actualBounds: go$Rect;

    /**
     * Gets or sets the alignment Spot of this GraphObject used in Panel layouts, to determine where in the area allocated by the panel this object should be placed.
     */
    alignment: go$Spot;

    /**
     * Gets or sets the spot on this GraphObject to be used as the alignment point in Spot and Fixed Panels.
     */
    alignmentFocus: go$Spot;

    /**
     * Gets or sets the angle transform, in degrees, of this GraphObject.
     */
    angle: number;

    /**
     * Gets or sets the areaBackground Brush (or CSS color string) of this GraphObject.
     */
    areaBackground: go$BrushLike;

    /**
     * Gets or sets the background Brush (or CSS color string) of this GraphObject, filling the rectangle of this object's local coordinate space.
     */
    background: go$BrushLike;

    /**
     * Gets or sets the function to execute when the user single-primary-clicks on this object.
     */
    click: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the column of this GraphObject if it is in a Table Panel.
     */
    column: number;

    /**
     * Gets or sets the number of columns spanned by this GraphObject if it is in a Table Panel.
     */
    columnSpan: number;

    /**
     * Gets or sets the function to execute when the user single-secondary-clicks on this object.
     */
    contextClick: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * This Adornment is shown upon a context click on this object.
     */
    contextMenu: go$Adornment;

    /**
     * Gets or sets the mouse cursor to use when the mouse is over this object with no mouse buttons pressed.
     */
    cursor: string;

    /**
     * Gets or sets the desired size of this GraphObject in local coordinates.
     */
    desiredSize: go$Size;

    /**
     * This read-only property returns the Diagram that this GraphObject is in, if it is.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets the function to execute when the user double-primary-clicks on this object.
     */
    doubleClick: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets how the direction of the last segment of a link coming from this port is computed when the node is rotated.
     */
    fromEndSegmentDirection: go$EnumValue;

    /**
     * Gets or sets the length of the last segment of a link coming from this port.
     */
    fromEndSegmentLength: number;

    /**
     * Gets or sets whether the user may draw Links from this port. The value must be either a boolean or null.
     */
    fromLinkable: boolean;

    /**
     * Gets or sets whether the user may draw duplicate Links from this port.
     */
    fromLinkableDuplicates: boolean;

    /**
     * Gets or sets whether the user may draw Links that connect from this port's Node.
     */
    fromLinkableSelfNode: boolean;

    /**
     * Gets or sets the maximum number of links that may come out of this port.
     */
    fromMaxLinks: number;

    /**
     * Gets or sets how far the end segment of a link coming from this port stops short of the actual port.
     */
    fromShortLength: number;

    /**
     * Gets or sets where a link should connect from this port.
     */
    fromSpot: go$Spot;

    /**
     * Gets or sets the desired height of this GraphObject in local coordinates.
     */
    height: number;

    /**
     * This property determines whether or not this GraphObject's events occur before all other events, including selection.
     */
    isActionable: boolean;

    /**
     * Gets or sets whether a GraphObject is the "main" object for some types of Panel.
     */
    isPanelMain: boolean;

    /**
     * This read-only property returns the GraphObject's containing Layer, if there is any.
     */
    layer: go$Layer;

    /**
     * Gets or sets the size of empty area around this GraphObject, as a Margin (or number for a uniform Margin), in the containing Panel coordinates.
     */
    margin: go$MarginLike;

    /**
     * Gets or sets the maximum size of this GraphObject in container coordinates (either a Panel or the document).
     */
    maxSize: go$Size;

    /**
     * This read-only property returns the measuredBounds of the GraphObject in container coordinates (either a Panel or the document).
     */
    measuredBounds: go$Rect;

    /**
     * Gets or sets the minimum size of this GraphObject in container coordinates (either a Panel or the document).
     */
    minSize: go$Size;

    /**
     * Gets or sets the function to execute when the user moves the mouse into this stationary object during a DraggingTool drag.
     */
    mouseDragEnter: (
      e: go$InputEvent,
      obj: go$GraphObject,
      prev: go$GraphObject
    ) => void;

    /**
     * Gets or sets the function to execute when the user moves the mouse out of this stationary object during a DraggingTool drag.
     */
    mouseDragLeave: (
      e: go$InputEvent,
      obj: go$GraphObject,
      prev: go$GraphObject
    ) => void;

    /**
     * Gets or sets the function to execute when a user drops the selection on this object at the end of a DraggingTool drag.
     */
    mouseDrop: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute when the user moves the mouse into this object without holding down any buttons.
     */
    mouseEnter: (
      e: go$InputEvent,
      obj: go$GraphObject,
      prev: go$GraphObject
    ) => void;

    /**
     * Gets or sets the function to execute when the user holds the mouse stationary in the background of the diagram while holding down a button over this object.
     */
    mouseHold: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute when the user holds the mouse stationary in the background of the diagram without holding down any buttons over this object.
     */
    mouseHover: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the function to execute when the user moves the mouse into this object without holding down any buttons.
     */
    mouseLeave: (
      e: go$InputEvent,
      obj: go$GraphObject,
      prev: go$GraphObject
    ) => void;

    /**
     * Gets or sets the function to execute when the user moves the mouse over this object without holding down any buttons.
     */
    mouseOver: (e: go$InputEvent, obj: go$GraphObject) => void;

    /**
     * Gets or sets the name for this object.
     */
    name: string;

    /**
     * This read-only property returns the natural bounding rectangle of this GraphObject in local coordinates, before any transformation by .scale or .angle, and before any resizing due to .minSize or .maxSize or .stretch.
     */
    naturalBounds: go$Rect;

    /**
     * Gets or sets the multiplicative opacity for this GraphObject and (if a Panel) all nested elements.
     */
    opacity: number;

    /**
     * This read-only property returns the GraphObject's containing Panel, or null if this object is not in a Panel.
     */
    panel: go$Panel;

    /**
     * This read-only property returns the Part containing this object, if any.
     */
    part: go$Part;

    /**
     * Gets or sets whether or not this GraphObject can be chosen by visual "find" methods such as Diagram.findObjectAt.
     */
    pickable: boolean;

    /**
     * Gets or sets an identifier for an object acting as a port on a Node.
     */
    portId: string;

    /**
     * Gets or sets the position of this GraphObject in container coordinates (either a Panel or the document).
     */
    position: go$Point;

    /**
     * Gets or sets the row of this GraphObject if it is in a Table Panel.
     */
    row: number;

    /**
     * Gets or sets the number of rows spanned by this GraphObject if it is in a Table Panel.
     */
    rowSpan: number;

    /**
     * Gets or sets the scale transform of this GraphObject.
     */
    scale: number;

    /**
     * Gets or sets the fractional distance along a segment of a GraphObject that is in a Link.
     */
    segmentFraction: number;

    /**
     * Gets or sets the segment index of a GraphObject that is in a Link.
     */
    segmentIndex: number;

    /**
     * Gets or sets the offset of a GraphObject that is in a Link from a point on a segment.
     */
    segmentOffset: go$Point;

    /**
     * Gets or sets the orientation of a GraphObject that is in a Link.
     */
    segmentOrientation: go$EnumValue;

    /**
     * Gets or sets the stretch of the GraphObject.
     */
    stretch: go$EnumValue;

    /**
     * Gets or sets how the direction of the last segment of a link going to this port is computed when the node is rotated.
     */
    toEndSegmentDirection: go$EnumValue;

    /**
     * Gets or sets the length of the last segment of a link going to this port.
     */
    toEndSegmentLength: number;

    /**
     * Gets or sets whether the user may draw Links to this port. The value must be either a boolean or null.
     */
    toLinkable: boolean;

    /**
     * Gets or sets whether the user may draw duplicate Links to this port.
     */
    toLinkableDuplicates: boolean;

    /**
     * Gets or sets whether the user may draw Links that connect to this port's Node.
     */
    toLinkableSelfNode: boolean;

    /**
     * Gets or sets the maximum number of links that may go into this port.
     */
    toMaxLinks: number;

    /**
     * This Adornment is shown when the mouse hovers over this object.
     */
    toolTip: go$Adornment;

    /**
     * Gets or sets how far the end segment of a link going to this port stops short of the actual port.
     */
    toShortLength: number;

    /**
     * Gets or sets where a link should connect to this port.
     */
    toSpot: go$Spot;

    /**
     * Gets or sets whether a GraphObject is visible.
     */
    visible: boolean;

    /**
     * Gets or sets the desired width of this GraphObject in local coordinates.
     */
    width: number;

    /**
     * Add a data-binding of a property on this GraphObject to a property on a data object.
     * @param {go$Binding} binding
     */
    bind(binding: go$Binding): void;

    /**
     * Creates a deep copy of this GraphObject and returns it.
     */
    copy(): go$GraphObject;

    /**
     * This static function defines a named function that GraphObject.make can use to build objects.
     * @param {string} name a capitalized name; must not be "" or "None"
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} func
     */
    static defineBuilder(
      name: string,
      func: (args: Array<any>) => Object
    ): void;

    /**
 * This static function returns the first argument from the arguments array passed
 * to a GraphObject.defineBuilder function by GraphObject.make.
 * By default this requires the first argument to be a string,
 * but you can provide a predicate to determine whether the argument is suitable.
 * @param {Array} args
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} defval the default value to return if the argument is optional and not present as the first argument
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred a predicate to determine the acceptability of the argument;
the default predicate checks whether the argument is a string
 * @return {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
    static takeBuilderArgument(
      args: Array<any>,
      defval?: any,
      pred?: (arg: any) => boolean
    ): any;

    /**
     * Returns the effective angle that the object is drawn at, in document coordinates.
     */
    getDocumentAngle(): number;

    /**
     * Returns the Point in document coordinates for a given Spot in this object's bounds.
     * @param {go$Spot} s a real Spot describing a location relative to the GraphObject.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} result an optional Point that is modified and returned.
     */
    getDocumentPoint(s: go$Spot, result?: go$Point): go$Point;

    /**
     * Returns the total scale that the object is drawn at, in document coordinates.
     */
    getDocumentScale(): number;

    /**
     * Given a Point in document coordinates, returns a new Point in local coordinates.
     * @param {go$Point} p a Point in document coordinates.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} result an optional Point that is modified and returned.
     */
    getLocalPoint(p: go$Point, result?: go$Point): go$Point;

    /**
 * This predicate is true if this object is an element, perhaps indirectly, of the given panel.
 * @param {go$GraphObject} panel or if it is contained by another panel that is contained by the given panel,
to any depth; false if the argument is null or is not a Panel.
 */
    isContainedBy(panel: go$GraphObject): boolean;

    /**
     * This predicate is true if this object is .visible and each of its visual containing panels are also visible.
     */
    isVisibleObject(): boolean;

    /**
     * This method sets a collection of properties according to the property/value pairs that have been set on the given Object,
     * in the same manner as GraphObject.make does when constructing a GraphObject with an argument that is a simple JavaScript Object.
     */
    setProperties(props: Object): void;

    /**
 * This static function builds an object given its class and additional arguments providing initial properties or GraphObjects that become Panel elements.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType" | string} type a class function or the name of a class in the "go" namespace,
or one of several predefined kinds of Panels: "Button", "TreeExpanderButton",
"SubGraphExpanderButton", or "ContextMenuButton".
 * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} initializers zero or more values that initialize the new object,
typically an Object with properties whose values that get set on the new object,
or a GraphObject that is added to a Panel,
or a Binding for one of the new object's properties,
or an EnumValue as the initial value of a single property of the new object that
is recognized to take that value,
or a string that is used as the value of a commonly set property.
 */
    static make(
      type: go$Constructor | string,
      ...initializers: Array<any>
    ): any;

    /**
     * GraphObjects with this as the value of GraphObject.stretch are stretched depending on the context they are used.
     */
    static Default: go$EnumValue;

    /**
     * GraphObjects with this as the value of GraphObject.stretch are scaled in both directions so as to fit exactly in the given bounds; there is no clipping but the aspect ratio may change, causing the object to appear stretched.
     */
    static Fill: go$EnumValue;

    /**
     * GraphObjects with this as the value of GraphObject.stretch are scaled as much as possible in the x-axis
     */
    static Horizontal: go$EnumValue;

    /**
     * GraphObjects with this as the value of GraphObject.stretch are not automatically scaled to fit in the given bounds; there may be clipping in one or both directions.
     */
    static None: go$EnumValue;

    /**
     * Pictures with this as the value of Picture.imageStretch are drawn with equal scale in both directions to fit the arranged (actual) bounds.
     */
    static Uniform: go$EnumValue;

    /**
     * Pictures with this as the value of Picture.imageStretch are drawn with equal scale in both directions to fit the larger side of the image bounds.
     */
    static UniformToFill: go$EnumValue;

    /**
     * GraphObjects with this as the value of GraphObject.stretch are scaled as much as possible in the y-axis
     */
    static Vertical: go$EnumValue;
    spanAllocation: (
      obj: go$GraphObject,
      r: go$RowColumnDefinition,
      n: number
    ) => number;
    cloneProtected(copy: go$GraphObject): void;
    static getBuilders(): go$Map<string, (args: Array<any>) => Object>;
  }

  /**
   * This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
   * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
   */
  declare class go$Group mixins go$Node {
    /**
     * Constructs an empty Group with no visual elements and no member parts; normally a Group will have some visual elements surrounding a Placeholder.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if not supplied, the default Panel type is Panel.Position.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * Gets or sets whether the size of the area of the Group's .placeholder should remain the same during a DraggingTool move until a drop occurs. The default value is false.
     */
    computesBoundsAfterDrag: boolean;

    /**
     * Gets or sets whether the bounds of a Group's Placeholder includes the bounds of member Links. The default value is true.
     */
    computesBoundsIncludingLinks: boolean;

    /**
     * Gets or sets whether the bounds of a Group's Placeholder includes the previous Group.location. The default value is false.
     */
    computesBoundsIncludingLocation: boolean;

    /**
     * Gets or sets whether drag-and-drop events may be bubbled up to this Group if not handled by member Parts.
     */
    handlesDragDropForMembers: boolean;

    /**
     * Gets or sets whether the subgraph contained by this group is expanded. The default value is true.
     */
    isSubGraphExpanded: boolean;

    /**
     * Gets or sets the Layout used to position all of the immediate member nodes and links in this group.
     */
    layout: go$Layout;

    /**
     * Gets or sets the function that is called after a member Part has been added to this Group.
     */
    memberAdded: (a: go$Group, b: go$Part) => void;

    /**
     * This read-only property returns an iterator over the member Parts of this Group.
     */
    memberParts: go$Iterator<go$Part>;

    /**
     * Gets or sets the function that is called after a member Part has been removed from this Group.
     */
    memberRemoved: (a: go$Group, b: go$Part) => void;

    /**
     * Gets or sets the predicate that determines whether or not a Part may become a member of this group.
     */
    memberValidation: (a: go$Group, b: go$Part) => boolean;

    /**
     * This read-only property returns a Placeholder that this group may contain in its visual tree.
     */
    placeholder: go$Placeholder;

    /**
     * Gets or sets the function that is called when .isSubGraphExpanded has changed value.
     */
    subGraphExpandedChanged: (a: go$Group) => void;

    /**
     * Gets or sets whether the user may ungroup this group.
     */
    ungroupable: boolean;

    /**
     * Gets or sets whether the subgraph starting at this group had been collapsed by a call to .expandSubGraph on the containing Group.
     */
    wasSubGraphExpanded: boolean;

    /**
     * Add the Parts in the given collection as members of this Group for those Parts for which CommandHandler.isValidMember returns true.
     * @param {go$Iterable<go$Part>} coll
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} check whether to call CommandHandler.isValidMember to confirm that it is valid to add the Part to be a member of this Group.
     */
    addMembers(coll: go$Iterable<go$Part>, check?: boolean): boolean;

    /**
     * See if the given collection of Parts contains non-Links all for which CommandHandler.isValidMember returns true.
     * @param {go$Iterable<go$Part>} coll
     */
    canAddMembers(coll: go$Iterable<go$Part>): boolean;

    /**
     * This predicate returns true if .ungroupable is true, if the layer's Layer.allowUngroup is true, and if the diagram's Diagram.allowUngroup is true.
     */
    canUngroup(): boolean;

    /**
     * Hide each of the member nodes and links of this group, and recursively collapse any member groups.
     */
    collapseSubGraph(): void;

    /**
     * Show each member node and link, and perhaps recursively expand nested subgraphs.
     */
    expandSubGraph(): void;

    /**
     * Returns an iterator over all of the Links that connect with this group or any node contained by this group,
     * in either direction, but that are not internal to this group.
     */
    findExternalLinksConnected(): go$Iterator<go$Link>;

    /**
     * Returns an iterator over all of the Nodes that are connected with this group or any node contained by this group,
     * by a link in either direction, but that are not internal to this group.
     */
    findExternalNodesConnected(): go$Iterator<go$Node>;

    /**
     * Return a collection of Parts that are all of the nodes and links that are members of this group, including inside nested groups, but excluding this group itself.
     */
    findSubGraphParts(): go$Set<go$Part>;

    /**
     * Move this Group and all of its member parts, recursively.
     * @param {go$Point} newpos a new Point in document coordinates.
     */
    move(newpos: go$Point): void;
  }

  /**
   * An InputEvent represents a mouse or keyboard event.
   * The principal properties hold information about a particular input event.
   * These properties include the .documentPoint at which a mouse event
   * occurred in document coordinates,
   * the corresponding point in view/element coordinates, .viewPoint,
   * the .key for keyboard events,
   * and the .modifiers and .button at the time.
   * Additional descriptive properties include .clickCount, .delta,
   * .timestamp, and the source event .event (if available).
   */
  declare class go$InputEvent {
    /**
     * The InputEvent class constructor produces an empty InputEvent.
     */
    constructor(): this;

    /**
     * Gets or sets whether the alt key is being held down.
     */
    alt: boolean;

    /**
     * Gets or sets whether the underlying .event is prevented from bubbling up the hierarchy of HTML elements outside of the Diagram and whether any default action is canceled.
     */
    bubbles: boolean;

    /**
     * Gets or sets the mouse button that caused this event.
     */
    button: number;

    /**
     * Gets or sets the buttons flag, descibing the set of mouse buttons current being held down.
     */
    buttons: number;

    /**
     * Gets or sets whether this event represents a click or a double-click.
     */
    clickCount: number;

    /**
     * Gets or sets whether the control key is being held down.
     */
    control: boolean;

    /**
     * Gets or sets the amount of change associated with a mouse-wheel rotation.
     */
    delta: number;

    /**
     * This read-only property returns the source diagram associated with the event.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets the point at which this input event occurred, in document coordinates.
     */
    documentPoint: go$Point;

    /**
     * Gets or sets whether the InputEvent represents a mouse-down or a key-down event.
     */
    down: boolean;

    /**
     * Gets or sets the platform's user-agent-supplied event for this event.
     */
    event: Event;

    /**
     * Gets or sets whether an InputEvent that applies to a GraphObject and bubbles up the chain of containing Panels is stopped from continuing up the chain.
     */
    handled: boolean;

    /**
     * This property is true when the InputEvent is caused by a touch event that registered more than one touch.
     */
    isMultiTouch: boolean;

    /**
     * This read-only property is true when the InputEvent is caused by a touch event.
     */
    isTouchEvent: boolean;

    /**
     * Gets or sets the key pressed or released as this event.
     */
    key: string;

    /**
     * Gets or sets whether the logical left mouse button is being held down.
     */
    left: boolean;

    /**
     * Gets or sets whether the meta key is being held down.
     */
    meta: boolean;

    /**
     * Gets or sets whether the logical middle mouse button is being held down.
     */
    middle: boolean;

    /**
     * Gets or sets the modifier keys that were used with the mouse or keyboard event.
     */
    modifiers: number;

    /**
     * Gets or sets whether the logical right mouse button is being held down.
     */
    right: boolean;

    /**
     * Gets or sets whether the shift key is being held down.
     */
    shift: boolean;

    /**
     * Gets or sets the diagram associated with the canvas that the event is currently targeting.
     */
    targetDiagram: go$Diagram;

    /**
     * Gets or sets the GraphObject that is at the current mouse point, if any.
     */
    targetObject: go$GraphObject;

    /**
     * Gets or sets the time at which the event occurred, in milliseconds.
     */
    timestamp: number;

    /**
     * Gets or sets whether the InputEvent represents a mouse-up or a key-up event.
     */
    up: boolean;

    /**
     * Gets or sets the point at which this input event occurred.
     */
    viewPoint: go$Point;

    /**
     * Make a copy of this InputEvent.
     */
    copy(): go$InputEvent;
    isMac: boolean;
  }

  /**
   * Layers are how named collections of Parts are drawn in front or behind other collections of Parts in a Diagram.
   * Layers can only contain Parts -- they cannot hold GraphObjects directly.
   */
  declare class go$Layer {
    /**
     * This constructs an empty Layer; you should set the .name before adding the Layer to a Diagram.
     */
    constructor(): this;

    /**
     * Gets or sets whether the user may copy objects in this layer.
     */
    allowCopy: boolean;

    /**
     * Gets or sets whether the user may delete objects in this layer.
     */
    allowDelete: boolean;

    /**
     * Gets or sets whether the user may group parts together in this layer.
     */
    allowGroup: boolean;

    /**
     * Gets or sets whether the user may draw new links in this layer.
     */
    allowLink: boolean;

    /**
     * Gets or sets whether the user may move objects in this layer.
     */
    allowMove: boolean;

    /**
     * Gets or sets whether the user may reconnect existing links in this layer.
     */
    allowRelink: boolean;

    /**
     * Gets or sets whether the user may reshape parts in this layer.
     */
    allowReshape: boolean;

    /**
     * Gets or sets whether the user may resize parts in this layer.
     */
    allowResize: boolean;

    /**
     * Gets or sets whether the user may rotate parts in this layer.
     */
    allowRotate: boolean;

    /**
     * Gets or sets whether the user may select objects in this layer.
     */
    allowSelect: boolean;

    /**
     * Gets or sets whether the user may do in-place text editing in this layer.
     */
    allowTextEdit: boolean;

    /**
     * Gets or sets whether the user may ungroup existing groups in this layer.
     */
    allowUngroup: boolean;

    /**
     * This read-only property returns the Diagram that is using this Layer.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets whether the objects in this layer are considered temporary.
     */
    isTemporary: boolean;

    /**
     * Gets or sets the name for this layer.
     */
    name: string;

    /**
     * Gets or sets the opacity for all parts in this layer.
     */
    opacity: number;

    /**
     * This read-only property returns an iterator for this Layer's Parts.
     */
    parts: go$Iterator<go$Part>;

    /**
     * This read-only property returns a backwards iterator for this Layer's Parts, for iterating over the parts in reverse order.
     */
    partsBackwards: go$Iterator<go$Part>;

    /**
     * Gets or sets whether methods such as .findObjectAt find any of the objects in this layer.
     */
    pickable: boolean;

    /**
     * Gets or sets whether the user may view any of the objects in this layer.
     */
    visible: boolean;

    /**
 * Find the front-most GraphObject in this layer at the given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 */
    findObjectAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean
    ): go$GraphObject;

    /**
 * Return a collection of the GraphObjects of this layer at the given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsAt(
      p: go$Point,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;

    /**
 * Returns a collection of all GraphObjects that are inside or that intersect a given Rect in document coordinates.
 * @param {go$Rect} r A Rect in document coordinates.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} partialInclusion Whether an object can match if it merely intersects the rectangular area (true) or
if it must be entirely inside the rectangular area (false).  The default value is false.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsIn(
      r: go$Rect,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsIn(
      r: go$Rect,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;

    /**
 * Returns a collection of all GraphObjects that are within a certain distance of a given point in document coordinates.
 * @param {go$Point} p A Point in document coordinates.
 * @param {number} dist The distance from the point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig A function taking a GraphObject and
returning a GraphObject, defaulting to the identity.
If this function returns null, the given GraphObject will not be included in the results.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred A function taking the GraphObject
returned by navig and returning true if that object should be returned,
defaulting to a predicate that always returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} partialInclusion Whether an object can match if it merely intersects the circular area (true) or
if it must be entirely inside the circular area (false).  The default value is true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} coll An optional collection (List or Set) to add the results to.
 */
    findObjectsNear(
      p: go$Point,
      dist: number,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$List<go$GraphObject>
    ): go$List<go$GraphObject>;
    findObjectsNear(
      p: go$Point,
      dist: number,
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean,
      partialInclusion?: boolean,
      coll?: go$Set<go$GraphObject>
    ): go$Set<go$GraphObject>;
  }

  /**
   * A Link is a Part that connects Nodes.
   * The link relationship is directional, going from Link.fromNode to Link.toNode.
   * A link can connect to a specific port element in a node, as named by the Link.fromPortId
   * and Link.toPortId properties.
   */
  declare class go$Link mixins go$Part {
    /**
     * Constructs an empty link that does not connect any nodes.
     */
    constructor(): this;

    /**
     * Gets or sets how the route is computed, including whether it uses the points of its old route to determine the new route.
     */
    adjusting: go$EnumValue;

    /**
     * Gets or sets how rounded the corners are for adjacent line segments when the .curve is .None .JumpGap, or .JumpOver and the two line segments are orthogonal to each other.
     */
    corner: number;

    /**
     * Gets or sets the way the path is generated from the route's points.
     */
    curve: go$EnumValue;

    /**
     * Gets or sets how far the control points are offset when the .curve is .Bezier or when there are multiple links between the same two ports.
     */
    curviness: number;

    /**
     * Gets or sets how the direction of the last segment is computed when the node is rotated.
     */
    fromEndSegmentDirection: go$EnumValue;

    /**
     * Gets or sets the length of the last segment.
     */
    fromEndSegmentLength: number;

    /**
     * Gets or sets the Node that this link comes from.
     */
    fromNode: go$Node;

    /**
     * This read-only property returns a GraphObject that is the "from" port that this link is connected from.
     */
    fromPort: go$GraphObject;

    /**
     * Gets or sets the function that is called after this Link changes which Node or port it connects from.
     */
    fromPortChanged: (a: go$Link, b: go$GraphObject, c: go$GraphObject) => void;

    /**
     * Gets or sets the identifier of the port that this link comes from.
     */
    fromPortId: string;

    /**
     * Gets or sets how far the end segment stops short of the actual port.
     */
    fromShortLength: number;

    /**
     * Gets or sets where this link should connect at the .fromPort.
     */
    fromSpot: go$Spot;

    /**
     * This read-only property returns the Geometry that is used by the .path, the link Shape based on the route points.
     */
    geometry: go$Geometry;

    /**
     * This read-only property is true when this Link has any label Nodes, Nodes that are owned by this Link and are arranged along its path.
     */
    isLabeledLink: boolean;

    /**
     * This read-only property true if .routing is a value that implies that the points of the route should be orthogonal, such that each point shares a common X or a common Y value with the immediately previous and next points.
     */
    isOrthogonal: boolean;

    /**
     * Gets or sets whether this Link is part of the tree for tree operations such as Node.findTreeChildrenNodes or Node.collapseTree.
     */
    isTreeLink: boolean;

    /**
     * This read-only property returns an iterator over the Nodes that act as labels on this Link.
     */
    labelNodes: go$Iterator<go$Node>;

    /**
     * This read-only property returns the angle of the path at the .midPoint.
     */
    midAngle: number;

    /**
     * This read-only property returns the point at the middle of the path.
     */
    midPoint: go$Point;

    /**
     * This read-only property returns the Shape representing the path of this Link.
     */
    path: go$Shape;

    /**
     * Gets or sets the List of Points in the route. Can also be set as an Array of numbers.
     */
    points: go$List<go$Point>;

    /**
     * This read-only property returns the number of points in the route.
     */
    pointsCount: number;

    /**
     * Gets or sets whether the user may reconnect an existing link at the "from" end.
     */
    relinkableFrom: boolean;

    /**
     * Gets or sets whether the user may reconnect an existing link at the "to" end.
     */
    relinkableTo: boolean;

    /**
     * Gets or sets whether the user may change the number of segments in this Link, if the link has straight segments.
     */
    resegmentable: boolean;

    /**
     * Gets or sets whether the link's path tries to avoid other nodes.
     */
    routing: go$EnumValue;

    /**
     * Gets or sets how far the control points are from the points of the route when .routing is .Orthogonal and .curve is .Bezier.
     */
    smoothness: number;

    /**
     * Gets or sets how far the control points are from the points of the route when .routing is .Orthogonal and .curve is .Bezier.
     */
    toEndSegmentDirection: go$EnumValue;

    /**
     * Gets or sets the length of the last segment.
     */
    toEndSegmentLength: number;

    /**
     * Gets or sets the Node that this link goes to.
     */
    toNode: go$Node;

    /**
     * This read-only property returns a GraphObject that is the "to" port that this link is connected to.
     */
    toPort: go$GraphObject;

    /**
     * Gets or sets the function that is called after this Link changes which Node or port it connects to.
     */
    toPortChanged: (a: go$Link, b: go$GraphObject, c: go$GraphObject) => void;

    /**
     * Gets or sets the identifier of the port that this link goes to.
     */
    toPortId: string;

    /**
     * Gets or sets how far the end segment stops short of the actual port.
     */
    toShortLength: number;

    /**
     * Gets or sets where this link should connect at the .toPort.
     */
    toSpot: go$Spot;

    /**
     * This predicate returns true if .relinkableFrom is true, if the layer's Layer.allowRelink is true, and if the diagram's Diagram.allowRelink is true.
     */
    canRelinkFrom(): boolean;

    /**
     * This predicate returns true if .relinkableTo is true, if the layer's Layer.allowRelink is true, and if the diagram's Diagram.allowRelink is true.
     */
    canRelinkTo(): boolean;

    /**
     * Remove all of the points from this link's route; this may only be called within an override of computePoints.
     */
    clearPoints(): void;

    /**
     * Add a point at the end of the route; this may only be called within an override of computePoints.
     * @param {go$Point} p The new point, which should not have infinite or NaN coordinate values, and which must not be modified afterwards.
     */
    addPoint(p: go$Point): void;

    /**
     * Insert a point at a particular position in the route, without replacing an existing point; this may only be called within an override of computePoints.
     * @param {number} i int  The zero-based index of the new point.
     * @param {go$Point} p The new point, which should not have infinite or NaN coordinate values, and which must not be modified afterwards.
     */
    insertPoint(i: number, p: go$Point): void;

    /**
     * Remove a particular point from the route; this may only be called within an override of computePoints.
     * @param {number} i int  The zero-based index of the point to extract.
     */
    removePoint(i: number): void;

    /**
     * Sets a particular point of the route; this may only be called within an override of computePoints.
     * @param {number} i int  The zero-based index of the desired point.
     * @param {go$Point} p The new point, which should not have infinite or NaN coordinate values, and which must not be modified afterwards.
     */
    setPoint(i: number, p: go$Point): void;

    /**
     * Returns the curve}, unless this link is supposed to pretend to be curved, as with reflexive links.
     */
    computeCurve(): go$EnumValue;

    /**
     * Returns the curviness, if it's a number,
     * or else a computed value based on how many links connect this pair of nodes/ports.
     */
    computeCurviness(): number;

    /**
     * Get the length of the end segment, typically a short distance, in document units.
     * For spot values that are Spot.isSide, this returns a computed value.
     * Depending on the <code>from</code> argument, this will return fromEndSegmentLength or toEndSegmentLength.
     * If the value is <code>NaN</code>, this will return the fromPort's GraphObject.fromEndSegmentLength
     * or the toPort's GraphObject.toEndSegmentLength.
     */
    computeEndSegmentLength(
      node: go$Node,
      port: go$GraphObject,
      spot: go$Spot,
      from: boolean
    ): number;

    /**
     * Find the approximate point of the other end of the link.
     * This is useful when computing the connection point when there is no specific spot, to have an idea of which general direction the link should be going.
     * By default this will return the center of the other port.
     */
    computeOtherPoint(othernode: go$Node, otherport: go$GraphObject): go$Point;

    /**
     * The code that constructs a new route by modifying the points.
     * It is only called by updateRoute, when needed.
     */
    computePoints(): boolean;

    /**
     * Returns the expected spacing between this link and others that connect this link's fromPort and toPort.
     * This calls computeThickness and also takes any "mid label"'s breadth into account.
     */
    computeSpacing(): number;

    /**
     * Get the Spot that describes how the end of the link should connect with the port.
     * Depending on the <code>from</code> argument, this will return fromSpot or toSpot.
     * If the value is Spot.isDefault, this will return the fromPort's GraphObject.fromSpot
     * or the toPort's GraphObject.toSpot.
     */
    computeSpot(from: boolean): go$Spot;

    /**
     * Returns the thickness of this link.
     * By default it uses the strokeWidth of the main element, assuming it's a Shape.
     */
    computeThickness(): number;

    /**
     * Find the index of the segment that is closest to a given point.
     * @param {go$Point} p the Point, in document coordinates.
     */
    findClosestSegment(p: go$Point): number;

    /**
     * Compute the direction in which a link should go from a given connection point.
     * @param {go$Node} node
     * @param {go$GraphObject} port the GraphObject representing a port on the node.
     * @param {go$Point} linkpoint the connection point, in document coordinates.
     * @param {go$Spot} spot a Spot value describing where the link should connect.
     * @param {boolean} from true if the link is coming out of the port; false if going to the port.
     * @param {boolean} ortho whether the link should have orthogonal segments.
     * @param {go$Node} othernode the node at the other end of the link.
     * @param {go$GraphObject} otherport the GraphObject port at the other end of the link.
     */
    getLinkDirection(
      node: go$Node,
      port: go$GraphObject,
      linkpoint: go$Point,
      spot: go$Spot,
      from: boolean,
      ortho: boolean,
      othernode: go$Node,
      otherport: go$GraphObject
    ): number;

    /**
     * Compute the point on a node/port at which the route of a link should end.
     * @param {go$Node} node
     * @param {go$GraphObject} port the GraphObject representing a port on the node.
     * @param {go$Spot} spot a Spot value describing where the link should connect.
     * @param {boolean} from true if the link is coming out of the port; false if going to the port.
     * @param {boolean} ortho whether the link should have orthogonal segments.
     * @param {go$Node} othernode the node at the other end of the link.
     * @param {go$GraphObject} otherport the GraphObject port at the other end of the link.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} result an optional Point that is modified and returned; otherwise it allocates and returns a new Point
     */
    getLinkPoint(
      node: go$Node,
      port: go$GraphObject,
      spot: go$Spot,
      from: boolean,
      ortho: boolean,
      othernode: go$Node,
      otherport: go$GraphObject,
      result?: go$Point
    ): go$Point;

    /**
 * Compute the intersection point for the edge of a particular port GraphObject, given a point, when no particular spot or side has been specified.
 * @param {go$Node} node
 * @param {go$GraphObject} port the GraphObject representing a port on the node.
 * @param {go$Point} focus the point in document coordinates to/from which the link should point,
normally the center of the port.
 * @param {go$Point} p often this point is far away from the node, to give a general direction,
particularly an orthogonal one.
 * @param {boolean} from true if the link is coming out of the port; false if going to the port.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} result an optional Point that is modified and returned; otherwise it allocates and returns a new Point
 */
    getLinkPointFromPoint(
      node: go$Node,
      port: go$GraphObject,
      focus: go$Point,
      p: go$Point,
      from: boolean,
      result?: go$Point
    ): go$Point;

    /**
     * Given a Node, return the node at the other end of this link.
     * @param {go$Node} node
     */
    getOtherNode(node: go$Node): go$Node;

    /**
     * Given a GraphObject that is a "port", return the port at the other end of this link.
     * @param {go$GraphObject} port
     */
    getOtherPort(port: go$GraphObject): go$GraphObject;

    /**
     * Gets a particular point of the route.
     * @param {number} i The zero-based index of the desired point.
     */
    getPoint(i: number): go$Point;

    /**
     * Returns true if an extra or a different point is needed based on curviness.
     */
    hasCurviness(): boolean;

    /**
     * Declare that the route (the points) of this Link need to be recomputed soon.
     * This causes updateRoute to be called, which will call computePoints
     * to perform the actual determination of the route.
     */
    invalidateRoute(): void;

    /**
     * Produce a Geometry given the points of this route,
     * depending on the value of curve and corner and perhaps other properties.
     */
    makeGeometry(): go$Geometry;

    /**
     * Move this link to a new position.
     * @param {go$Point} newpos
     */
    move(newpos: go$Point): void;

    /**
     * This method recomputes the route if the route is invalid, to make sure the points are up-to-date.
     * This method calls computePoints in order to calculate a new route.
     */
    updateRoute(): void;

    /**
     * Used as a value for Link.routing: each segment is horizontal or vertical, but the route tries to avoid crossing over nodes.
     */
    static AvoidsNodes: go$EnumValue;

    /**
     * Used as a value for Link.curve, to indicate that the link path uses Bezier curve segments.
     */
    static Bezier: go$EnumValue;

    /**
     * Used as a value for Link.adjusting, to indicate that the link route computation should keep the intermediate points of the previous route, just modifying the first and/or last points; if the routing is orthogonal, it will only modify the first two and/or last two points.
     */
    static End: go$EnumValue;

    /**
     * Used as a value for Link.curve, to indicate that orthogonal link segments will be discontinuous where they cross over other orthogonal link segments that have a Link.curve or JumpOver or JumpGap.
     */
    static JumpGap: go$EnumValue;

    /**
     * Used as a value for Link.curve, to indicate that orthogonal link segments will veer around where they cross over other orthogonal link segments that have a Link.curve or JumpOver or JumpGap.
     */
    static JumpOver: go$EnumValue;

    /**
     * This is the default value for Link.curve and Link.adjusting, to indicate that the path geometry consists of straight line segments and to indicate that the link route computation does not depend on any previous route points; this can also be used as a value for GraphObject.segmentOrientation to indicate that the object is never rotated along the link route -- its angle is unchanged.
     */
    static None: go$EnumValue;

    /**
     * Used as the default value for Link.routing: the route goes fairly straight between ports.
     */
    static Normal: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject turned to have the same angle as the route: the GraphObject's angle is always the same as the angle of the link's route at the segment where the GraphObject is attached; use this orientation for arrow heads.
     */
    static OrientAlong: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject being turned counter-clockwise to be perpendicular to the route: the GraphObject's angle is always 90 degrees less than the angle of the link's route at the segment where the GraphObject is attached.
     */
    static OrientMinus90: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject turned counter-clockwise to be perpendicular to the route, just like Link.OrientMinus90, but is never upside down: the GraphObject's angle always being 90 degrees less than the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.
     */
    static OrientMinus90Upright: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject's angle always being 180 degrees opposite from the angle of the link's route at the segment where the GraphObject is attached.
     */
    static OrientOpposite: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject is turned clockwise to be perpendicular to the route: the GraphObject's angle is always 90 degrees more than the angle of the link's route at the segment where the GraphObject is attached.
     */
    static OrientPlus90: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject turned clockwise to be perpendicular to the route, just like Link.OrientPlus90, but is never upside down: the GraphObject's angle always being 90 degrees more than the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.
     */
    static OrientPlus90Upright: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject turned to have the same angle as the route, just like Link.OrientAlong, but is never upside down: the GraphObject's angle always following the angle of the link's route at the segment where the GraphObject is attached; this is typically only used for TextBlocks or Panels that contain text.
     */
    static OrientUpright: go$EnumValue;

    /**
     * This value for GraphObject.segmentOrientation results in the GraphObject's angle always following the angle of the link's route at the segment where the GraphObject is attached, but never upside down and never angled more than +/- 45 degrees: when the route's angle is within 45 degrees of vertical (90 or 270 degrees), the GraphObject's angle is set to zero; this is typically only used for TextBlocks or Panels that contain text.
     */
    static OrientUpright45: go$EnumValue;

    /**
     * Used as a value for Link.routing: each segment is horizontal or vertical.
     */
    static Orthogonal: go$EnumValue;

    /**
     * Used as a value for Link.adjusting, to indicate that the link route computation should scale and rotate the intermediate points so that the link's shape looks approximately the same; if the routing is orthogonal, this value is treated as if it were Link.End.
     */
    static Scale: go$EnumValue;

    /**
     * Used as a value for Link.adjusting, to indicate that the link route computation should linearly interpolate the intermediate points so that the link's shape looks stretched; if the routing is orthogonal, this value is treated as if it were Link.End.
     */
    static Stretch: go$EnumValue;
    routeBounds: go$Rect;
    computeCorner(): number;
    computeShortLength(from: boolean): number;
    findMidLabel(): go$GraphObject;
    arrangeBundledLinks(links: Array<go$Link>, reroute: boolean): void;
    setPointAt(i: number, x: number, y: number): void;
    insertPointAt(i: number, x: number, y: number): void;
    addPointAt(x: number, y: number): void;
    invalidateGeometry(): void;
  }

  /**
   * A Node is a Part that may connect to other nodes with Links,
   * or that may be a member of a Group.
   * Group inherits from Node,
   * enabling nodes to logically contain other nodes and links.
   */
  declare class go$Node mixins go$Part {
    /**
     * Constructs an empty Node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if not supplied, the default Panel type is Panel.Position.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * Gets or sets whether this Node is to be avoided by Links whose Link.routing is Link.AvoidsNodes.
     */
    avoidable: boolean;

    /**
     * Gets or sets the Margin (or number for a uniform Margin) around this Node in which avoidable links will not be routed.
     */
    avoidableMargin: go$MarginLike;

    /**
     * This read-only property is true when this Node is a label node for a Link.
     */
    isLinkLabel: boolean;

    /**
     * Gets or sets whether the subtree graph starting at this node is expanded.
     */
    isTreeExpanded: boolean;

    /**
     * Gets whether this node has no tree children.
     */
    isTreeLeaf: boolean;

    /**
     * Gets or sets the Link for which this Node is acting as a smart label.
     */
    labeledLink: go$Link;

    /**
     * Gets or sets the function that is called after a Link has been connected with this Node.
     */
    linkConnected: (a: go$Node, b: go$Link, c: go$GraphObject) => void;

    /**
     * Gets or sets the function that is called after a Link has been disconnected from this Node.
     */
    linkDisconnected: (a: go$Node, b: go$Link, c: go$GraphObject) => void;

    /**
     * Gets or sets a predicate that determines whether or not a Link may be connected with this node; any of the arguments may be null.
     */
    linkValidation: (
      from: go$Node,
      fromPort: go$GraphObject,
      to: go$Node,
      toPort: go$GraphObject,
      link: go$Link
    ) => boolean;

    /**
     * This read-only property returns an iterator over all of the Links that are connected with this node.
     */
    linksConnected: go$Iterator<go$Link>;

    /**
     * This read-only property returns the primary GraphObject representing a port in this node.
     */
    port: go$GraphObject;

    /**
     * This read-only property returns an iterator over all of the GraphObjects in this node that act as ports.
     */
    ports: go$Iterator<go$GraphObject>;

    /**
     * Gets or sets how link points are computed when the port spot is a "side" spot.
     */
    portSpreading: go$EnumValue;

    /**
     * Gets or sets the function that is called when .isTreeExpanded has changed value.
     */
    treeExpandedChanged: (node: go$Node) => void;

    /**
     * Gets or sets whether the subtree graph starting at this node had been collapsed by a call to .expandTree on the parent node.
     */
    wasTreeExpanded: boolean;

    /**
 * Hide each child node and the connecting link, and recursively collapse each child node.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} level How many levels of the tree, starting at this node, to keep expanded if already expanded;
the default is 1, hiding all tree children of this node.  Values less than 1 are treated as 1.
 */
    collapseTree(level?: number): void;

    /**
 * Show each child node and the connecting link, and perhaps recursively expand their child nodes.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} level How many levels of the tree should be expanded;
the default is 2, showing all tree children of this node and potentially more.
Values less than 2 are treated as 2.
 */
    expandTree(level?: number): void;

    /**
     * Returns an iterator over all of the Links that go from this node to another node or vice-versa, perhaps limited to a given port id on this node and a port id on the other node.
     * @param {go$Node} othernode
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} otherpid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findLinksBetween(
      othernode: go$Node,
      pid?: string,
      otherpid?: string
    ): go$Iterator<go$Link>;

    /**
     * Returns an iterator over all of the Links that connect with this node in either direction, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findLinksConnected(pid?: string): go$Iterator<go$Link>;

    /**
     * Returns an iterator over all of the Links that go into this node, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findLinksInto(pid?: string): go$Iterator<go$Link>;

    /**
     * Returns an iterator over all of the Links that come out of this node, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findLinksOutOf(pid?: string): go$Iterator<go$Link>;

    /**
     * Returns an iterator over all of the Links that go from this node to another node, perhaps limited to a given port id on this node and a port id on the other node.
     * @param {go$Node} othernode
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} otherpid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findLinksTo(
      othernode: go$Node,
      pid?: string,
      otherpid?: string
    ): go$Iterator<go$Link>;

    /**
     * Returns an iterator over the Nodes that are connected with this node in either direction, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findNodesConnected(pid?: string): go$Iterator<go$Node>;

    /**
     * Returns an iterator over the Nodes that are connected with this node by links going into this node, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findNodesInto(pid?: string): go$Iterator<go$Node>;

    /**
     * Returns an iterator over the Nodes that are connected with this node by links coming out of this node, perhaps limited to the given port id on this node.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pid A port identifier string; if null the link's portId is ignored and all links are included in the search.
     */
    findNodesOutOf(pid?: string): go$Iterator<go$Node>;

    /**
     * Find a GraphObject with a given GraphObject.portId.
     * @param {string} pid
     */
    findPort(pid: string): go$GraphObject;

    /**
     * Returns an Iterator for the collection of Links that connect with the immediate tree children of this node.
     */
    findTreeChildrenLinks(): go$Iterator<go$Link>;

    /**
     * Returns an Iterator for the collection of Nodes that are the immediate tree children of this node.
     */
    findTreeChildrenNodes(): go$Iterator<go$Node>;

    /**
     * Return how deep this node is in a tree structure.
     * For tree root nodes, this returns zero.
     */
    findTreeLevel(): number;

    /**
     * Returns the Link that connects with the tree parent Node of this node if the graph is tree-structured, if there is such a link and Link.isTreeLink is true.
     */
    findTreeParentLink(): go$Link;

    /**
     * Returns the Node that is the tree parent of this node if the graph is tree-structured, if there is a parent.
     */
    findTreeParentNode(): go$Node;

    /**
 * Return a collection of Parts including this Node, all of the Links going to child Nodes, and all of their tree child nodes and links.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} level How many levels of the tree, starting at this node, to include;
the default is Infinity, including all tree children of this node.  Values less than 1 are treated as 1.
 */
    findTreeParts(level?: number): go$Set<go$Part>;

    /**
     * Return the Node that is at the root of the tree that this node is in, perhaps this node itself.
     */
    findTreeRoot(): go$Node;

    /**
     * This predicate is true if this node is a child of the given Node, perhaps indirectly as a descendant.
     * @param {go$Node} node the Node that might be a parent or ancestor of this node.
     */
    isInTreeOf(node: go$Node): boolean;

    /**
     * This value for GraphObject.fromEndSegmentDirection and GraphObject.toEndSegmentDirection indicates that the link's end segment angle stays the same even if the node is rotated.
     */
    static DirectionAbsolute: go$EnumValue;

    /**
     * This value for Link.fromEndSegmentDirection and Link.toEndSegmentDirection indicates that the real value is inherited from the corresponding connected port.
     */
    static DirectionDefault: go$EnumValue;

    /**
     * This value for GraphObject.fromEndSegmentDirection and GraphObject.toEndSegmentDirection indicates that the link's end segment angle is rotated to match the node's angle.
     */
    static DirectionRotatedNode: go$EnumValue;

    /**
     * This value for GraphObject.fromEndSegmentDirection and GraphObject.toEndSegmentDirection indicates that the link's end segment angle is rotated to match the node's angle, but only in increments of 90 degrees.
     */
    static DirectionRotatedNodeOrthogonal: go$EnumValue;

    /**
     * This value for Node.portSpreading indicates that links connecting with a port should be distributed evenly along the side(s) indicated by a Spot that is a "side" Spot.
     */
    static SpreadingEvenly: go$EnumValue;

    /**
     * This value for Node.portSpreading indicates that links connecting with a port should connect at a single point on the side(s) indicated by a Spot that is a "side" Spot.
     */
    static SpreadingNone: go$EnumValue;

    /**
     * This value for Node.portSpreading indicates that links connecting with a port should be packed together based on the link's shape's width on the side(s) indicated by a Spot that is a "side" Spot.
     */
    static SpreadingPacked: go$EnumValue;
    canAvoid(): boolean;
    findVisibleNode(): go$Node;
    getAvoidableRect(result: go$Rect): go$Rect;
    invalidateLinkBundle(
      other: go$Node,
      thisportid?: string,
      otherportid?: string
    ): void;
    invalidateConnectedLinks(): void;
  }

  /**
   * An Overview is a Diagram that displays all of a different diagram,
   * with a rectangular box showing the viewport displayed by that other diagram.
   * All you need to do is set Overview.observed.
   */
  declare class go$Overview mixins go$Diagram {
    /**
     * @param {HTMLDivElement} div A reference to a DIV element in the DOM.
     */
    constructor(div: HTMLDivElement): this;

    /**
     * @param {string} id A reference to a DIV by its ID as a string.
     */
    constructor(id?: string): this;

    /**
     * Gets or sets the rectangular Part that represents the viewport of the .observed Diagram.
     */
    box: go$Part;

    /**
     * Gets or sets whether this overview draws the temporary layers of the observed Diagram.
     */
    drawsTemporaryLayers: boolean;

    /**
     * Gets or sets the Diagram for which this Overview is displaying a model and showing its viewport into that model.
     */
    observed: go$Diagram;
  }

  /**
   * Palette extends the Diagram class to allow objects to be dragged and placed onto other Diagrams.
   * Its Diagram.layout is a GridLayout.
   * The Palette is Diagram.isReadOnly but to support drag-and-drop its Diagram.allowDragOut is true.
   */
  declare class go$Palette mixins go$Diagram {
    /**
     * @param {HTMLDivElement} div A reference to a DIV in the DOM.
     */
    constructor(div: HTMLDivElement): this;

    /**
     * @param {string} id A reference to a DIV by its ID as a string.
     */
    constructor(id?: string): this;
  }

  /**
   * A Panel is a GraphObject that holds other GraphObjects as its elements.
   * A Panel is responsible for sizing and positioning its elements.
   * Every Panel has a .type and establishes its own coordinate system. The .type of a Panel
   * determines how it will size and arrange its elements.
   */
  declare class go$Panel mixins go$GraphObject {
    /**
     * Constructs an empty Panel of the given .type.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type If not supplied, the default Panel type is Panel.Position.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * This read-only property returns the number of columns in this Panel if it is of .type Panel.Table.
     */
    columnCount: number;

    /**
     * Gets or sets how this Panel's columns deal with extra space if the Panel is of .type Panel.Table.
     */
    columnSizing: go$EnumValue;

    /**
     * Gets or sets the optional model data to which this panel is data-bound.
     */
    data: any;

    /**
     * Gets or sets the default alignment spot of this Panel, used as the alignment for an element when its GraphObject.alignment value is Spot.Default.
     */
    defaultAlignment: go$Spot;

    /**
     * Gets or sets the default dash array for a particular column's separator.
     */
    defaultColumnSeparatorDashArray: Array<number>;

    /**
     * Gets or sets the default Brush stroke (or CSS color string) for columns in a Table Panel provided a given column has a nonzero RowColumnDefinition.separatorStrokeWidth.
     */
    defaultColumnSeparatorStroke: go$BrushLike;

    /**
     * Gets or sets the default stroke width for a particular column's separator.
     */
    defaultColumnSeparatorStrokeWidth: number;

    /**
     * Gets or sets the default dash array for a particular row's separator.
     */
    defaultRowSeparatorDashArray: Array<number>;

    /**
     * Gets or sets the default Brush stroke (or CSS color string) for rows in a Table Panel provided a given row has a nonzero RowColumnDefinition.separatorStrokeWidth.
     */
    defaultRowSeparatorStroke: go$BrushLike;

    /**
     * Gets or sets the default stroke width for a particular row's separator.
     */
    defaultRowSeparatorStrokeWidth: number;

    /**
     * Gets or sets the additional padding for a particular row or column, a Margin (or number for a uniform Margin).
     */
    defaultSeparatorPadding: go$MarginLike;

    /**
     * Gets or sets the default stretch of this Panel, used as the stretch for an element when its GraphObject.stretch value is GraphObject.Default.
     */
    defaultStretch: go$EnumValue;

    /**
     * This read-only property returns an iterator over the collection of the GraphObjects that this panel manages.
     */
    elements: go$Iterator<go$GraphObject>;

    /**
     * Gets or sets the distance between lines in a .Grid panel.
     */
    gridCellSize: go$Size;

    /**
     * Gets or sets an origin point for the grid cells in a .Grid panel.
     */
    gridOrigin: go$Point;

    /**
     * Gets or sets a JavaScript Array of values or objects, each of which will be represented by a Panel as elements in this Panel.
     */
    itemArray: Array<any>;

    /**
     * Gets or sets the name of the item data property that returns a string describing that data's category, or a function that takes an item data object and returns that string; the default value is the name 'category'.
     */
    itemCategoryProperty: go$PropertyAccessor;

    /**
     * This read-only property returns the index of the item in the containing Panel's Panel.itemArray that this Panel represents.
     */
    itemIndex: number;

    /**
     * Gets or sets the default Panel template used as the archetype for item data that are in .itemArray.
     */
    itemTemplate: go$Panel;

    /**
     * Gets or sets a Map mapping template names to Panels.
     */
    itemTemplateMap: go$Map<string, go$Panel>;

    /**
     * Gets or sets the first column that this Panel of .type Panel.Table displays.
     */
    leftIndex: number;

    /**
     * Gets or sets the space between this Panel's border and its content, as a Margin (or number for a uniform Margin), depending on the type of panel.
     */
    padding: go$MarginLike;

    /**
     * This read-only property returns the number of row in this Panel if it is of .type Panel.Table.
     */
    rowCount: number;

    /**
     * Gets or sets how this Panel's rows deal with extra space if the Panel is of .type Panel.Table.
     */
    rowSizing: go$EnumValue;

    /**
     * Gets or sets the first row that this this Panel of .type Panel.Table displays.
     */
    topIndex: number;

    /**
     * Gets or sets the type of the Panel.
     */
    type: go$EnumValue;

    /**
     * Gets or sets how a .Viewbox panel will resize its content.
     */
    viewboxStretch: go$EnumValue;

    /**
     * Adds a GraphObject to the end of this Panel's list of elements, visually in front of all of the other elements.
     * @param {go$GraphObject} element A GraphObject.
     */
    add(element: go$GraphObject): void;

    /**
     * Creates a deep copy of this Panel and returns it.
     */
    copy(): go$Panel;

    /**
     * Returns the GraphObject in this Panel's list of elements at the specified index.
     * @param {number} idx a zero-based index
     */
    elt(idx: number): go$GraphObject;

    /**
     * Returns the cell at a given x-coordinate in local coordinates.
     * @param {number} x
     */
    findColumnForLocalX(x: number): number;

    /**
     * Returns the first immediate child element with GraphObject.isPanelMain set to true,
     * or if there is no such child element, just the first element.
     */
    findMainElement(): go$GraphObject;

    /**
     * Search the visual tree starting at this Panel for a GraphObject whose GraphObject.name is the given name.
     * @param {string} name The name to search for, using a case-sensitive string comparison.
     */
    findObject(name: string): go$GraphObject;

    /**
     * Return the Panel that was made for a particular data object in this panel's itemArray.
     * If this returns a Panel, its data property will be the argument data object.
     */
    findItemPanelForData(data: Object): go$Panel;

    /**
     * Returns the row at a given y-coordinate in local coordinates.
     * @param {number} y
     */
    findRowForLocalY(y: number): number;

    /**
     * Gets the RowColumnDefinition for a particular column in this Table Panel.
     * @param {number} idx the non-negative zero-based integer column index.
     */
    getColumnDefinition(idx: number): go$RowColumnDefinition;

    /**
     * Gets the RowColumnDefinition for a particular row in this Table Panel.
     * @param {number} idx the non-negative zero-based integer row index.
     */
    getRowDefinition(idx: number): go$RowColumnDefinition;

    /**
     * Adds a GraphObject to the Panel's list of elements at the specified index.
     * @param {number} index
     * @param {go$GraphObject} element A GraphObject.
     */
    insertAt(index: number, element: go$GraphObject): void;

    /**
     * Create and add new GraphObjects corresponding to and bound to the data in the .itemArray, after removing all existing elements from this Panel.
     */
    rebuildItemElements(): void;

    /**
     * Removes a GraphObject from this Panel's list of elements.
     * @param {go$GraphObject} element A GraphObject.
     */
    remove(element: go$GraphObject): void;

    /**
     * Removes an GraphObject from this Panel's list of elements at the specified index.
     * @param {number} idx
     */
    removeAt(idx: number): void;

    /**
     * Removes the RowColumnDefinition for a particular row in this Table Panel.
     * @param {number} idx the non-negative zero-based integer row index.
     */
    removeColumnDefinition(idx: number): void;

    /**
     * Removes the RowColumnDefinition for a particular row in this Table Panel.
     * @param {number} idx the non-negative zero-based integer row index.
     */
    removeRowDefinition(idx: number): void;

    /**
 * Re-evaluate all data bindings on this panel, in order to assign new property values to the GraphObjects in this visual tree based on this this object's .data property values.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} srcprop An optional source data property name:
when provided, only evaluates those Bindings that use that particular property;
when not provided or when it is the empty string, all bindings are evaluated.
 */
    updateTargetBindings(srcprop?: string): void;

    /**
     * This value for .type resizes the main element to fit around the other elements; the main element is the first GraphObject with GraphObject.isPanelMain set to true, or else the first GraphObject if none have that property set to true.
     */
    static Auto: go$EnumValue;

    /**
     * This value for .type is used to draw regular patterns of lines.
     */
    static Grid: go$EnumValue;

    /**
     * This value for .type lays out the elements horizontally with their GraphObject.alignment property dictating their alignment on the Y-axis.
     */
    static Horizontal: go$EnumValue;

    /**
     * This value for .type is used for Links and adornments that act as Links.
     */
    static go$Link: go$EnumValue;

    /**
     * The default .type arranges each element according to their GraphObject.position.
     */
    static Position: go$EnumValue;

    /**
     * This value for .type arranges GraphObjects about a main element using the GraphObject.alignment and GraphObject.alignmentFocus properties; the main element is the first GraphObject with GraphObject.isPanelMain set to true, or else the first GraphObject if none have that property set to true.
     */
    static go$Spot: go$EnumValue;

    /**
     * This value for .type arranges GraphObjects into rows and columns; set the GraphObject.row and GraphObject.column properties on each element.
     */
    static Table: go$EnumValue;

    /**
     * Organizational Panel type that is only valid inside of a Table panel.
     */
    static TableColumn: go$EnumValue;

    /**
     * Organizational Panel type that is only valid inside of a Table panel.
     */
    static TableRow: go$EnumValue;

    /**
     * This value for .type lays out the elements vertically with their GraphObject.alignment property dictating their alignment on the X-axis.
     */
    static Vertical: go$EnumValue;

    /**
     * This value for .type rescales a single GraphObject to fit inside the panel depending on the element's GraphObject.stretch property.
     */
    static Viewbox: go$EnumValue;
  }

  /**
   * This is the base class for all user-manipulated top-level objects.
   * Because it inherits from Panel, it is automatically a visual container
   * of other GraphObjects.
   * Because it thus also inherits from GraphObject, it also has properties such as
   * GraphObject.actualBounds, GraphObject.contextMenu, and GraphObject.visible.
   */
  declare class go$Part mixins go$Panel {
    /**
     * The constructor builds an empty Part.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if not supplied, the default Panel type is Panel.Position.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * This read-only property returns an iterator over all of the Adornments associated with this part.
     */
    adornments: go$Iterator<go$Adornment>;

    /**
     * Gets or sets the category of this part, typically used to distinguish different kinds of nodes or links.
     */
    category: string;

    /**
     * Gets or sets the Group of which this Part or Node is a member.
     */
    containingGroup: go$Group;

    /**
     * Gets or sets the function that is called after this Part has changed which Group it belongs to, if any.
     */
    containingGroupChanged: (
      member: go$Part,
      oldgrp: go$Group,
      newgrp: go$Group
    ) => void;

    /**
     * Gets or sets whether the user may copy this part.
     */
    copyable: boolean;

    /**
     * Gets or sets whether the user may delete this part.
     */
    deletable: boolean;

    /**
     * This read-only property returns the Diagram that this Part is in.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets the function used to determine the location that this Part can be dragged to.
     */
    dragComputation: (
      part: go$Part,
      oldloc: go$Point,
      newloc: go$Point
    ) => go$Point;

    /**
     * Gets or sets whether the user may group this part to be a member of a new Group.
     */
    groupable: boolean;

    /**
     * Gets or sets whether this Part may be animated.
     */
    isAnimated: boolean;

    /**
     * Gets or sets whether this Part is highlighted.
     */
    isHighlighted: boolean;

    /**
     * Gets or sets whether this Part is part of the document bounds.
     */
    isInDocumentBounds: boolean;

    /**
     * Gets or sets whether a Layout positions this Node or routes this Link.
     */
    isLayoutPositioned: boolean;

    /**
     * Gets or sets whether this Part is selected.
     */
    isSelected: boolean;

    /**
     * Gets or sets whether this part will draw shadows.
     */
    isShadowed: boolean;

    /**
     * Gets whether this part is not member of any Group node nor is it a label node for a Link.
     */
    isTopLevel: boolean;

    /**
     * This read-only property returns the Layer that this Part is in.
     */
    layer: go$Layer;

    /**
     * Gets or sets the function to execute when this part changes layers.
     */
    layerChanged: (
      part: go$Part,
      oldlayer: go$Layer,
      newlayer: go$Layer
    ) => void;

    /**
     * Gets or sets the layer name for this part.
     */
    layerName: string;

    /**
     * Gets or sets "Layout..." flags that control when the Layout that is responsible for this Part is invalidated.
     */
    layoutConditions: number;

    /**
     * Gets or sets the position of this part in document coordinates, based on the .locationSpot in this part's .locationObject.
     */
    location: go$Point;

    /**
     * This read-only property returns the GraphObject that determines the location of this Part.
     */
    locationObject: go$GraphObject;

    /**
     * Gets or sets the name of the GraphObject that provides the location of this Part.
     */
    locationObjectName: string;

    /**
     * Gets or sets the location Spot of this Node, the spot on the .locationObject that is used in positioning this part in the diagram.
     */
    locationSpot: go$Spot;

    /**
     * Gets or sets the maximum location of this Part to which the user may drag using the DraggingTool.
     */
    maxLocation: go$Point;

    /**
     * Gets or sets the minimum location of this Part to which the user may drag using the DraggingTool.
     */
    minLocation: go$Point;

    /**
     * Gets or sets whether the user may move this part.
     */
    movable: boolean;

    /**
     * Gets or sets whether the user may reshape this part.
     */
    reshapable: boolean;

    /**
     * Gets or sets whether the user may resize this part.
     */
    resizable: boolean;

    /**
     * Gets or sets the adornment template used to create a resize handle Adornment for this part.
     */
    resizeAdornmentTemplate: go$Adornment;

    /**
     * Gets or sets the width and height multiples used when resizing.
     */
    resizeCellSize: go$Size;

    /**
     * This read-only property returns the GraphObject that should get resize handles when this part is selected.
     */
    resizeObject: go$GraphObject;

    /**
     * Gets or sets the name of the GraphObject that should get a resize handle when this part is selected.
     */
    resizeObjectName: string;

    /**
     * Gets or sets whether the user may rotate this part.
     */
    rotatable: boolean;

    /**
     * Gets or sets the adornment template used to create a rotation handle Adornment for this part.
     */
    rotateAdornmentTemplate: go$Adornment;

    /**
     * This read-only property returns the GraphObject that should get rotate handles when this part is selected.
     */
    rotateObject: go$GraphObject;

    /**
     * Gets or sets the name of the GraphObject that should get a rotate handle when this part is selected.
     */
    rotateObjectName: string;

    /**
     * Gets or sets whether the user may select this part.
     */
    selectable: boolean;

    /**
     * Gets or sets whether a selection adornment is shown for this part when it is selected.
     */
    selectionAdorned: boolean;

    /**
     * Gets or sets the Adornment template used to create a selection handle for this Part.
     */
    selectionAdornmentTemplate: go$Adornment;

    /**
     * Gets or sets the function to execute when this part is selected or deselected.
     */
    selectionChanged: (p: go$Part) => void;

    /**
     * This read-only property returns the GraphObject that should get a selection handle when this part is selected.
     */
    selectionObject: go$GraphObject;

    /**
     * Gets or sets the name of the GraphObject that should get a selection handle when this part is selected.
     */
    selectionObjectName: string;

    /**
     * Gets or sets the numerical value that describes the shadow's blur.
     */
    shadowBlur: number;

    /**
     * Gets or sets the CSS string that describes a shadow color.
     */
    shadowColor: string;

    /**
     * Gets or sets the X and Y offset of this part's shadow.
     */
    shadowOffset: go$Point;

    /**
     * Gets or sets whether this GraphObject will be shadowed inside a Part that has Part.isShadowed set to true; default is null, meaning obey default shadow rules for Part.isShadowed.
     */
    shadowVisible: boolean;

    /**
     * Gets or sets a text string that is associated with this part.
     */
    text: string;

    /**
     * Gets or sets whether the user may do in-place text editing on TextBlocks in this part that have TextBlock.editable set to true.
     */
    textEditable: boolean;

    /**
     * Gets or sets the Z-ordering position of this Part within its Layer; default value is NaN which means "don't care".
     */
    zOrder: number;

    /**
     * Associate an Adornment with this Part, perhaps replacing any existing adornment.
     * @param {string} category a string identifying the kind or role of the given adornment for this Part.
     * @param {go$Adornment} ad
     */
    addAdornment(category: string, ad: go$Adornment): void;

    /**
     * This predicate returns true if .copyable is true, if the layer's Layer.allowCopy is true, and if the diagram's Diagram.allowCopy is true.
     */
    canCopy(): boolean;

    /**
     * This predicate returns true if .deletable is true, if the layer's Layer.allowDelete is true, and if the diagram's Diagram.allowDelete is true.
     */
    canDelete(): boolean;

    /**
     * This predicate returns true if .textEditable is true, if the layer's Layer.allowTextEdit is true, and if the diagram's Diagram.allowTextEdit is true.
     */
    canEdit(): boolean;

    /**
     * This predicate returns true if .groupable is true, if the layer's Layer.allowGroup is true, and if the diagram's Diagram.allowGroup is true.
     */
    canGroup(): boolean;

    /**
     * This predicate is called by Layout implementations to decide whether this Part should be positioned and might affect the positioning of other Parts.
     */
    canLayout(): boolean;

    /**
     * This predicate returns true if .movable is true, if the layer's Layer.allowMove is true, and if the diagram's Diagram.allowMove is true.
     */
    canMove(): boolean;

    /**
     * This predicate returns true if .reshapable is true, if the layer's Layer.allowReshape is true, and if the diagram's Diagram.allowReshape is true.
     */
    canReshape(): boolean;

    /**
     * This predicate returns true if .resizable is true, if the layer's Layer.allowResize is true, and if the diagram's Diagram.allowResize is true.
     */
    canResize(): boolean;

    /**
     * This predicate returns true if .rotatable is true, if the layer's Layer.allowRotate is true, and if the diagram's Diagram.allowRotate is true.
     */
    canRotate(): boolean;

    /**
     * This predicate returns true if .selectable is true, if the layer's Layer.allowSelect is true, and if the diagram's Diagram.allowSelect is true.
     */
    canSelect(): boolean;

    /**
     * Remove all adornments associated with this part.
     */
    clearAdornments(): void;

    /**
     * Measures if needed to make sure the GraphObject.measuredBounds and GraphObject.naturalBounds are all real numbers,
     * primarily to get the actual width and height.
     * GraphObject.actualBounds will get a real width and height, but the x and y values may continue to be <code>NaN</code>
     * if they were that way beforehand.
     */
    ensureBounds(): void;

    /**
     * Find an Adornment of a given category associated with this Part.
     * @param {string} category
     */
    findAdornment(category: string): go$Adornment;

    /**
     * Find the Group that contains both this part and another one.
     * @param {go$Part} other
     */
    findCommonContainingGroup(other: go$Part): go$Group;

    /**
     * Return how deep this part is in the hierarchy of nested Groups.
     * For top level parts, i.e. isTopLevel, this returns zero.
     */
    findSubGraphLevel(): number;

    /**
     * Gets the top-level Part for this part, which is itself when .isTopLevel is true.
     */
    findTopLevelPart(): go$Part;

    /**
 * Invalidate the Layout that is responsible for positioning this Part.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} condition the reason that the layout should be invalidated --
some combination of "Layout..." flag values;
if this argument is not supplied, any value of .layoutConditions other than Part.LayoutNone
will allow the layout to be invalidated.
 */
    invalidateLayout(condition?: number): void;

    /**
     * This predicate is true if this part is a member of the given Part, perhaps indirectly.
     * @param {go$Part} part
     */
    isMemberOf(part: go$Part): boolean;

    /**
     * This predicate is true if this Part can be seen.
     */
    isVisible(): boolean;

    /**
     * Move this part and any parts that are owned by this part to a new position.
     * @param {go$Point} newpos a new Point in document coordinates.
     */
    move(newpos: go$Point): void;

    /**
     * Move this part and any parts that are owned by this part to a new position.
     * @param {number} x the new X position in document coordinates.
     * @param {number} y the new Y position in document coordinates.
     */
    moveTo(x: number, y: number): void;

    /**
     * Remove any Adornment of the given category that may be associated with this Part.
     * @param {string} category a string identifying the kind or role of the given adornment for this Part.
     */
    removeAdornment(category: string): void;

    /**
     * This is responsible for creating any selection Adornment (if this Part .isSelected) and any tool adornments for this part.
     */
    updateAdornments(): void;

    /**
 * Re-evaluate all data bindings on this Part, in order to assign new property values to the GraphObjects in this visual tree based on this this object's .data property values.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} srcprop An optional source data property name:
when provided, only evaluates those Bindings that use that particular property;
when not provided or when it is the empty string, all bindings are evaluated.
 */
    updateTargetBindings(srcprop?: string): void;

    /**
     * Update all of the references to nodes in case they had been modified in the model without
     * properly notifying the model by calling GraphLinksModel.setGroupKeyForNodeData or
     * GraphLinksModel.setToKeyForLinkData or other similar methods.
     */
    updateRelationshipsFromData(): void;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Part is added to a Diagram or Group, it invalidates the Layout responsible for the Part.
     */
    static LayoutAdded: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Group has been laid out, it invalidates the Layout responsible for that Group; this flag is ignored for Parts that are not Groups.
     */
    static LayoutGroupLayout: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Part's GraphObject.visible becomes false, it invalidates the Layout responsible for the Part.
     */
    static LayoutHidden: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Node or simple Part's .category changes, it invalidates the Layout responsible for the Part; this flag is ignored for Parts that are Links.
     */
    static LayoutNodeReplaced: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Part's GraphObject.actualBounds changes size, it invalidates the Layout responsible for the Part; this flag is ignored for Parts that are Links.
     */
    static LayoutNodeSized: number;

    /**
     * This value may be used as the value of the Part.layoutConditions property to indicate that no operation on this Part causes invalidation of the Layout responsible for this Part.
     */
    static LayoutNone: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Part is removed from a Diagram or Group, it invalidates the Layout responsible for the Part.
     */
    static LayoutRemoved: number;

    /**
     * This flag may be combined with other "Layout" flags as the value of the Part.layoutConditions property to indicate that when a Part's GraphObject.visible becomes true, it invalidates the Layout responsible for the Part.
     */
    static LayoutShown: number;

    /**
     * This is the default value for the Part.layoutConditions property: the Layout responsible for the Part is invalidated when the Part is added or removed from the Diagram or Group or when it changes visibility or size or when a Group's layout has been performed.
     */
    static LayoutStandard: number;
  }

  /**
   * A Picture is a GraphObject that shows an image, video-frame, or Canvas element.
   * You can specify what to show by either setting the .source URL property
   * to a URL string or the .element property to an HTMLImageElement,
   * HTMLCanvasElement, or HTMLVideoElement.
   */
  declare class go$Picture mixins go$GraphObject {
    /**
     * The constructor creates a picture that shows nothing until the .source or .element is specified.
     */
    constructor(): this;

    /**
     * Gets or sets the Picture's HTML element, an Image or Video or Canvas element.
     */
    element: HTMLElement;

    /**
     * Gets or sets the function to call if an image fails to load.
     */
    errorFunction: (pic: go$Picture, e: Event) => void;

    /**
     * Gets or sets how the Picture's image is stretched within its bounding box.
     */
    imageStretch: go$EnumValue;

    /**
     * This read-only property returns the natural size of this picture as determined by its source's width and height.
     */
    naturalBounds: go$Rect;

    /**
     * Gets or sets the Picture's source URL, which can be any valid image (png, jpg, gif, etc) URL.
     */
    source: string;

    /**
     * Gets or sets a function that returns a value for image.crossOrigin, which is null by default.
     */
    sourceCrossOrigin: (pic: go$Picture) => string;

    /**
     * Gets or sets the rectangular area of the source image that this picture should display.
     */
    sourceRect: go$Rect;
    static clearCache(url?: string): void;
  }

  /**
   * If a Placeholder is in the visual tree of a Group, it represents the area of all of the member Parts of that Group.
   * If a Placeholder is in the visual tree of an Adornment, it represents the area of the Adornment.adornedObject.
   * It can only be used in the visual tree of a Group node or an Adornment.
   * There can be at most one Placeholder in a Group or an Adornment.
   */
  declare class go$Placeholder mixins go$GraphObject {
    /**
     * The only common initialize of a Placeholder is to set its .padding.
     */
    constructor(): this;

    /**
     * Gets or sets the padding as a Margin (or number for a uniform Margin) around the members of the Group or around the Adornment.adornedObject GraphObject.
     */
    padding: go$MarginLike;
  }

  /**
   * The RowColumnDefinition class describes constraints on a row or a column
   * in a Panel of type Panel.Table.
   * It also provides information about the actual layout after the
   * Table Panel has been arranged.
   */
  declare class go$RowColumnDefinition {
    /**
     * You do not need to use this constructor, because calls to Panel.getRowDefinition or Panel.getColumnDefinition will automatically create and remember a RowColumnDefinition for you.
     */
    constructor(): this;

    /**
     * This read-only property returns the usable row height or column width, after arrangement, that objects in this row or column can be placed within.
     */
    actual: number;

    /**
     * Gets or sets a default alignment for elements that are in this row or column.
     */
    alignment: go$Spot;

    /**
     * Gets or sets the background Brush (or CSS color string) for a particular row or column, which fills the entire span of the column, including any separatorPadding.
     */
    background: go$BrushLike;

    /**
     * Determines whether or not the background, if there is one, is in front of or behind the separators.
     */
    coversSeparators: boolean;

    /**
     * Gets or sets the row height.
     */
    height: number;

    /**
     * This read-only property returns which row or column this RowColumnDefinition describes in the .panel.
     */
    index: number;

    /**
     * This read-only property returns whether this describes a row or a column in the .panel.
     */
    isRow: boolean;

    /**
     * Gets or sets the maximum row height or column width.
     */
    maximum: number;

    /**
     * Gets or sets the minimum row height or column width.
     */
    minimum: number;

    /**
     * This read-only property returns the Panel that this row or column definition is in.
     */
    panel: go$Panel;

    /**
     * This read-only property returns the actual arranged row or column starting position, after arrangement.
     */
    position: number;

    /**
     * Gets or sets the dash array for dashing the spacing provided this row or column has a nonzero RowColumnDefinition.separatorStrokeWidth and non-null RowColumnDefinition.separatorStroke.
     */
    separatorDashArray: Array<number>;

    /**
     * Gets or sets the additional padding for a particular row or column, a Margin (or number for a uniform Margin).
     */
    separatorPadding: go$MarginLike;

    /**
     * Gets or sets the Brush (or CSS color string) for a particular row or column, provided that row or column has a nonzero RowColumnDefinition.separatorStrokeWidth.
     */
    separatorStroke: go$BrushLike;

    /**
     * Gets or sets the stroke width for a particular row or column's separator,
     */
    separatorStrokeWidth: number;

    /**
     * Gets or sets how this row or column deals with a Table Panel's extra space.
     */
    sizing: go$EnumValue;

    /**
     * Gets or sets the default stretch for elements that are in this row or column.
     */
    stretch: go$EnumValue;

    /**
     * This read-only property returns the total arranged row height or column width, after arrangement.
     */
    total: number;

    /**
     * Gets or sets the column width.
     */
    width: number;

    /**
     * Add a data-binding of a property on this object to a property on a data object.
     * @param {go$Binding} binding
     */
    bind(binding: go$Binding): void;

    /**
     * The default .sizing, which resolves to RowColumnDefinition.None or else the Table Panel's rowSizing and columnSizing if present.
     */
    static Default: go$EnumValue;

    /**
     * The default .sizing if none is specified on the Table Panel's rowSizing and columnSizing.
     */
    static None: go$EnumValue;

    /**
     * If a Table Panel is larger than all the rows then this .sizing grants this row and any others with the same value the extra space, apportioned proportionally between them
     */
    static ProportionalExtra: go$EnumValue;
    computeEffectiveSpacing(): number;
    computeEffectiveSpacingTop(): number;
  }

  /**
   * A Shape is a GraphObject that shows a geometric figure.
   * The Geometry determines what is drawn;
   * the properties .fill and .stroke
   * (and other stroke properties) determine how it is drawn.
   */
  declare class go$Shape mixins go$GraphObject {
    /**
     * A newly constructed Shape has a default .figure of "None", which constructs a rectangular geometry, and is filled and stroked with a black brush.
     */
    constructor(): this;

    /**
     * Gets or sets the figure name, used to construct a Geometry.
     */
    figure: string;

    /**
     * Gets or sets the Brush (or CSS color string) that describes the fill of the Shape.
     */
    fill: go$BrushLike;

    /**
     * Gets or sets the name of the kind of arrowhead that this shape should take when this shape is an element of a Link.
     */
    fromArrow: string;

    /**
     * Gets or sets the Shape's Geometry that defines the Shape's figure.
     */
    geometry: go$Geometry;

    /**
     * Gets or sets how the shape's geometry is proportionally created given its computed size.
     */
    geometryStretch: go$EnumValue;

    /**
     * When set, creates a Geometry and normalizes it from a given path string, then sets the Geometry on this Shape and offsets the GraphObject.position by an appropriate amount.
     */
    geometryString: string;

    /**
     * Gets or sets how frequently this shape should be drawn within a Grid Panel, in multiples of the Panel.gridCellSize.
     */
    interval: number;

    /**
     * Gets or sets the whether the .position denotes the panel coordinates of the geometry or of the stroked area.
     */
    isGeometryPositioned: boolean;

    /**
     * This read-only property returns the natural bounds of this Shape as determined by its .geometry's bounds.
     */
    naturalBounds: go$Rect;

    /**
     * Gets or sets a property for parameterizing the construction of a Geometry from a figure.
     */
    parameter1: number;

    /**
     * Gets or sets a property for parameterizing the construction of a Geometry from a figure.
     */
    parameter2: number;

    /**
     * Gets or sets the top-left Spot used by some Panels for determining where in the shape other objects may be placed.
     */
    spot1: go$Spot;

    /**
     * Gets or sets the bottom-right Spot used by some Panels for determining where in the shape other objects may be placed.
     */
    spot2: go$Spot;

    /**
     * Gets or sets the Brush (or CSS color string) that describes the stroke of the Shape.
     */
    stroke: go$BrushLike;

    /**
     * Gets or sets the style for the stroke's line cap.
     */
    strokeCap: string;

    /**
     * Gets or sets the dash array for creating dashed lines.
     */
    strokeDashArray: Array<number>;

    /**
     * Gets or sets the offset for dashed lines, used in the phase pattern.
     */
    strokeDashOffset: number;

    /**
     * Gets or sets the type of corner that will be drawn when two lines meet.
     */
    strokeJoin: string;

    /**
     * Gets or sets the style for the stroke's mitre limit ratio.
     */
    strokeMiterLimit: number;

    /**
     * Gets or sets a stroke's width.
     */
    strokeWidth: number;

    /**
     * Gets or sets the name of the kind of arrowhead that this shape should take when this shape is an element of a Link.
     */
    toArrow: string;

    /**
     * This static function returns a read-only Map of named geometry generators.
     * @return {go$Map} the keys are figure names; the values are either synonymed names or generator functions
     */
    static getFigureGenerators(): go$Map<
      string,
      (shape: go$Shape, width: number, height: number) => go$Geometry
    >;

    /**
     * This static function defines a named figure geometry generator for Shapes.
     * @param {string} name new figure name must start with an uppercase letter, and must not be "None"
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} func returns a Geometry for the given Shape, width, and height
     */
    static defineFigureGenerator(
      name: string,
      func: (shape: go$Shape, width: number, height: number) => go$Geometry
    ): void;

    /**
     * This static function defines a synonym for a named figure geometry generator.
     * @param {string} name the new figure name must start with an uppercase letter, and must not be "None"
     * @param {string} synonym an existing figure name
     */
    static defineFigureGenerator(name: string, synonym: string): void;

    /**
     * This static function returns a read-only Map of named arrowhead geometries.
     * @return {go$Map} the keys are arrowhead names; the values are Geometry objects
     */
    static getArrowheadGeometries(): go$Map<string, go$Geometry>;

    /**
     * This static function defines a named arrowhead geometry.
     * @param {string} name the new arrowhead name must start with an uppercase letter, and must not be "None"
     * @param {go$Geometry} geo the Geometry for the arrowhead
     */
    static defineArrowheadGeometry(name: string, geo: go$Geometry): void;

    /**
     * This static function defines a named arrowhead geometry.
     * @param {string} name the new arrowhead name must start with an uppercase letter, and must not be "None"
     * @param {string} pathstr a geometry path string that will be passed to Geometry.parse
     */
    static defineArrowheadGeometry(name: string, pathstr: string): void;
  }

  /**
   * A TextBlock is a GraphObject that displays a .text string in a given .font.
   */
  declare class go$TextBlock mixins go$GraphObject {
    /**
     * A newly constructed TextBlock has no string to show; if it did, it would draw the text, wrapping if needed, in the default font using a black stroke.
     */
    constructor(): this;

    /**
     * Gets or sets whether or not this TextBlock allows in-place editing of the .text string by the user with the help of the TextEditingTool.
     */
    editable: boolean;

    /**
     * Gets or sets the function to call if a text edit made with the TextEditingTool is invalid.
     */
    errorFunction: (
      tool: go$TextEditingTool,
      oldstr: string,
      newstr: string
    ) => void;

    /**
     * Gets or sets the current font settings.
     */
    font: string;

    /**
     * Gets or sets whether or not the text allows or displays multiple lines or embedded newlines.
     */
    isMultiline: boolean;

    /**
     * Gets or sets whether or not the text has a strikethrough line (line-through).
     */
    isStrikethrough: boolean;

    /**
     * Gets or sets whether or not the text is underlined.
     */
    isUnderline: boolean;

    /**
     * This read-only property returns the total number of lines in this TextBlock, including lines created from returns and wrapping.
     */
    lineCount: number;

    /**
     * Gets or sets the maximum number of lines that this TextBlock may display.
     */
    maxLines: number;

    /**
     * This read-only property returns the natural bounds of this TextBlock in local coordinates, as determined by its .font and .text string.
     */
    naturalBounds: go$Rect;

    /**
     * Gets or sets how text that is too long to display should be handled.
     */
    overflow: go$EnumValue;

    /**
     * Gets or sets the Brush (or CSS color string) that describes the stroke (color) of the .font.
     */
    stroke: go$BrushLike;

    /**
     * Gets or sets the current text string.
     */
    text: string;

    /**
     * Gets or sets the current text alignment property.
     */
    textAlign: string;

    /**
     * Gets or sets the HTMLElement that this TextBlock uses as its text editor in the TextEditingTool.
     */
    textEditor: HTMLElement;

    /**
     * Gets or sets the predicate that determines whether or not a string of text is valid.
     */
    textValidation: (
      tb: go$TextBlock,
      oldstr: string,
      newstr: string
    ) => boolean;

    /**
     * Gets or sets whether the text should be wrapped if it is too long to fit on one line.
     */
    wrap: go$EnumValue;

    /**
     * The TextBlock will not wrap its text.
     */
    static None: go$EnumValue;

    /**
     * Used as the default value for TextBlock.overflow: if the width is too small to display all text, the TextBlock will clip.
     */
    static OverflowClip: go$EnumValue;

    /**
     * Used as a value for TextBlock.overflow: if the width is too small to display all text, the TextBlock will display an ellipsis.
     */
    static OverflowEllipsis: go$EnumValue;

    /**
     * The TextBlock will wrap text and the width of the TextBlock will be the desiredSize's width, if any.
     */
    static WrapDesiredSize: go$EnumValue;

    /**
     * The TextBlock will wrap text, making the width of the TextBlock equal to the width of the longest line.
     */
    static WrapFit: go$EnumValue;
    spacingAbove: number;
    spacingBelow: number;
    static isValidFont(font: string): boolean;
    static getEllipsis(): string;
    static setEllipsis(val: string): void;
  }

  /**
   * A Brush holds color information and describes how to draw the inside
   * of a Shape or the stroke of a shape or a TextBlock or the
   * background of any GraphObject.
   * A Brush must not be modified once it has been assigned to a GraphObject,
   * such as the Shape.fill or TextBlock.stroke
   * or GraphObject.background.
   * However, a Brush may be shared by multiple GraphObjects.
   */
  declare class go$Brush {
    /**
     * Construct a Brush class of a given type.
     * @param {go$EnumValue} type one of the values  Brush.Solid, Brush.Linear, Brush.Radial, Brush.Pattern.
     */
    constructor(type: go$EnumValue): this;

    /**
     * Construct a solid color Brush that holds the given color information.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} color a well-formed CSS string describing a solid color brush; if not supplied uses 'black'.
     */
    constructor(color?: string): this;

    /**
     * Gets or sets the color of a solid Brush.
     */
    color: string;

    /**
     * Gets or sets a Map holding all of the color stops used in this gradient, where the key is a number, the fractional distance between zero and one (inclusive), and where the corresponding value is a color string.
     */
    colorStops: go$Map<number, string>;

    /**
     * Gets or sets the ending location for a linear or radial gradient.
     */
    end: go$Spot;

    /**
     * Gets or sets the radius of a radial brush at the end location.
     */
    endRadius: number;

    /**
     * Gets or sets the pattern of a brush of type Brush.Pattern, an HTMLImageElement or HTMLCanvasElement or HTMLVideoElement.
     */
    pattern: any;

    /**
     * Gets or sets the starting location for a linear or radial gradient.
     */
    start: go$Spot;

    /**
     * Gets or sets the radius of a radial brush at the start location.
     */
    startRadius: number;

    /**
     * Gets or sets the type of brush.
     */
    type: go$EnumValue;

    /**
     * Specify a particular color at a particular fraction of the distance.
     * If the  .type is Brush.Solid, change the type to Brush.Linear.
     * You should have a color stop at zero and a color stop at one.
     * You should not have duplicate color stop values at the same fractional distance.
     * @param {number} loc between zero and one, inclusive.
     * @param {string} color a CSS color string
     */
    addColorStop(loc: number, color: string): void;

    /**
     * Create a copy of this Brush, with the same values.
     */
    copy(): go$Brush;

    /**
     * This static function can be used to generate a random color string.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} min a number between zero and 255, defaults to 128.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} max a number between zero and 255, defaults to 255.
     */
    static randomColor(min?: number, max?: number): string;

    /**
     * For linear gradient brushes, used as the value for Brush.type.
     */
    static Linear: go$EnumValue;

    /**
     * For pattern brushes, used as the value for Brush.type.
     */
    static Pattern: go$EnumValue;

    /**
     * For radial gradient brushes, used as the value for Brush.type.
     */
    static Radial: go$EnumValue;

    /**
     * For simple, solid color brushes, used as the value for Brush.type.
     */
    static Solid: go$EnumValue;
    static isValidColor(color: string): boolean;
  }

  /**
   * The Geometry class is used to define the "shape" of a Shape.
   * A Geometry can be simple straight lines, rectangles, or ellipses.
   * A Geometry can also be an arbitrarily complex path, consisting of a list of PathFigures.
   * A Geometry must not be modified once it has been used by a Shape.
   * However, a Geometry may be shared by multiple Shapes.
   */
  declare class go$Geometry {
    /**
     * Construct an empty Geometry.
     * The geometry type must be one of the following values:
     * Geometry.Line, Geometry.Ellipse, Geometry.Rectangle, Geometry.Path.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type If not supplied, the default Geometry type is Geometry.Path.
     */
    constructor(type?: go$EnumValue): this;

    /**
     * This read-only property returns a rectangle that contains all points within the Geometry.
     */
    bounds: go$Rect;

    /**
     * Gets or sets the Shape.geometryStretch value the Shape should use by default.
     */
    defaultStretch: go$EnumValue;

    /**
     * Gets or sets the ending X coordinate of the Geometry if it is of type .Line, .Rectangle, or .Ellipse.
     */
    endX: number;

    /**
     * Gets or sets the ending Y coordinate of the Geometry if it is of type .Line, .Rectangle, or .Ellipse.
     */
    endY: number;

    /**
     * Gets or sets the List of PathFigures that describes the content of the path for Geometries of type .Path.
     */
    figures: go$List<go$PathFigure>;

    /**
     * Gets or sets the spot to use when the Shape.spot1 value is Spot.Default.
     */
    spot1: go$Spot;

    /**
     * Gets or sets the spot to use when the Shape.spot2 value is Spot.Default.
     */
    spot2: go$Spot;

    /**
     * Gets or sets the starting X coordinate of the Geometry if it is of type .Line, .Rectangle, or .Ellipse.
     */
    startX: number;

    /**
     * Gets or sets the starting Y coordinate of the Geometry if it is of type .Line, .Rectangle, or .Ellipse.
     */
    startY: number;

    /**
     * Gets or sets the type of the Geometry.
     */
    type: go$EnumValue;

    /**
     * Add a PathFigure to the figures list.
     * @param {go$PathFigure} figure a newly allocated unshared PathFigure that will become owned by this Geometry
     * @return {go$Geometry} this
     */
    add(figure: go$PathFigure): go$Geometry;

    /**
     * Computes the Geometry's bounds without adding an origin point, and returns those bounds as a rect.
     */
    computeBoundsWithoutOrigin(): go$Rect;

    /**
     * Create a copy of this Geometry, with the same values and figures.
     */
    copy(): go$Geometry;

    /**
     * Given a SVG or GoJS path string, returns a congruent path string with each PathFigure filled.
     * For instance, "M0 0 L22 22 L33 0" would become "F M0 0 L22 22 L33 0".
     * @param {string} str
     */
    static fillPath(str: string): string;

    /**
     * Normalizes the Geometry points in place by ensuring the top-left bounds of the geometry lines up with (0, 0), returning the Point (x, y) amount it was shifted.
     */
    normalize(): go$Point;

    /**
     * Offsets the Geometry in place by a given (x, y) amount
     * @param {number} x The x-axis offset factor.
     * @param {number} y The y-axis offset factor.
     * @return {go$Geometry} this
     */
    offset(x: number, y: number): go$Geometry;

    /**
 * Produce a Geometry from a string that uses an SVG-like compact path geometry syntax.
 * @param {string} str
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} filled whether figures should be filled.
If true, all PathFigures in the string will be filled regardless of the presence
of an "F" command or not.
If false, all PathFigures will determine their own filled state by the presence of an "F" command or not.
Default is false.
 */
    static parse(str: string, filled?: boolean): go$Geometry;

    /**
     * Rotates the Geometry in place by a given angle, with optional x and y values to rotate the geometry about.
     * If no x and y value are giving, (0, 0) is used as the rotation point.
     * @param {number} angle The angle to rotate by.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} x The optional X point to rotate the geometry about. If no point is given, this value is 0.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} y The optional Y point to rotate the geometry about. If no point is given, this value is 0.
     * @return {go$Geometry} this
     */
    rotate(angle: number, x?: number, y?: number): go$Geometry;

    /**
     * Scales the Geometry in place by a given (x, y) scale factor
     * @param {number} x The x-axis scale factor.
     * @param {number} y The y-axis scale factor.
     * @return {go$Geometry} this
     */
    scale(x: number, y: number): go$Geometry;

    /**
     * This static function can be used to write out a Geometry as a string
     * that can be read by Geometry.parse.
     * The string produced by this method is a superset of the SVG path
     * string rules that contains some additional GoJS-specific tokens.
     * See the <a href="../../intro/pictures.html">Introduction page on Geometry Parsing</a> for more details.
     * @param {go$Geometry} val
     */
    static stringify(val: go$Geometry): string;

    /**
     * For drawing an ellipse fitting within a rectangle; a value for Geometry.type.
     */
    static Ellipse: go$EnumValue;

    /**
     * For drawing a simple straight line; a value for Geometry.type.
     */
    static Line: go$EnumValue;

    /**
     * For drawing a complex path made of a list of PathFigures; a value for Geometry.type.
     */
    static Path: go$EnumValue;

    /**
     * For drawing a rectangle; a value for Geometry.type.
     */
    static Rectangle: go$EnumValue;
    equalsApprox(g: go$Geometry): boolean;
  }

  /**
   * A Margin represents a band of space outside or inside a rectangular area,
   * with possibly different values on each of the four sides.
   */
  declare class go$Margin {
    /**
     * If zero arguments are supplied, zero is used for all four sides.
     */
    constructor(): this;

    /**
     * If one argument is supplied, that number is used for all four sides.
     * @param {number} m the margin for all four sides.
     */
    constructor(m: number): this;

    /**
     * If two arguments are supplied, the top and bottom sides get the first value,
     * and the left and right sides get the second value.
     * @param {number} tb the margin for the top and bottom sides
     * @param {number} rl the margin for the right and left sides
     */
    constructor(tb: number, rl: number): this;

    /**
 * If there are four arguments, the numbers represent: top, right, bottom, left.
 * @param {number} t the margin for the top side;
  if not supplied, all sides are zero.
 * @param {number} r the margin for the right side;
if not supplied, all sides have the value of the first argument.
 * @param {number} b the margin for all bottom side;
if not supplied, the top and bottom get the value of the first argument,
and the right and left sides get the value of the second argument.
 * @param {number} l the margin for the left side;
must be supplied if the third argument was supplied.
 */
    constructor(t: number, r: number, b: number, l: number): this;

    /**
     * Gets or sets the bottom value of this margin.
     */
    bottom: number;

    /**
     * Gets or sets the left value of this margin.
     */
    left: number;

    /**
     * Gets or sets the right value of this margin.
     */
    right: number;

    /**
     * Gets or sets the top value of this margin.
     */
    top: number;

    /**
     * Create a copy of this Margin, with the same values.
     */
    copy(): go$Margin;

    /**
     * Indicates whether the given Margin is equal to this Margin.
     * @param {go$Margin} m The Margin to compare to this Margin.
     */
    equals(m: go$Margin): boolean;

    /**
     * Indicates whether the given margin is equal to this Margin.
     * @param {number} t top.
     * @param {number} r right.
     * @param {number} b bottom.
     * @param {number} l left.
     */
    equalTo(t: number, r: number, b: number, l: number): boolean;

    /**
     * True if this Margin has values that are real numbers and not infinity.
     */
    isReal(): boolean;

    /**
     * This static function can be used to read in a Margin from a string that was produced by Margin.stringify.
     * @param {string} str
     */
    static parse(str: string): go$Margin;

    /**
     * Modify this Margin so that its Top, Right, Bottom, and Left values are the same as the given Margin.
     * @param {go$Margin} m the Margin whose values are to be copied
     */
    set(m: go$Margin): go$Margin;

    /**
     * Modify this Size with new Width and Height values.
     * @param {number} w the width.
     * @param {number} h the height.
     */
    setTo(t: number, r: number, b: number, l: number): go$Margin;

    /**
     * This static function can be used to write out a Margin as a string that can be read by Margin.parse.
     * @param {go$Margin} val
     */
    static stringify(val: go$Margin): string;
    equalsApprox(m: go$Margin): boolean;
  }

  /**
   * A PathFigure represents a section of a Geometry.
   * It is a single connected series of
   * two-dimensional geometric PathSegments.
   */
  declare class go$PathFigure {
    /**
     * Constructs an empty figure.
     * The optional arguments specify the starting point of the figure.
     * You'll want to add a new instance of a PathFigure to the
     * Geometry.figures list of a Geometry.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} sx optional: the X coordinate of the start point (default is zero).
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} sy optional: the Y coordinate of the start point (default is zero).
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} filled optional: whether the figure is filled (default is true).
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} shadowed optional: whether the figure may be drawn with a shadow (default is true).
     */
    constructor(
      sx?: number,
      sy?: number,
      filled?: boolean,
      shadowed?: boolean
    ): this;

    /**
     * Gets or sets whether this PathFigure is drawn filled.
     */
    isFilled: boolean;

    /**
     * Gets or sets whether this PathFigure will render a shadow if one is defined.
     */
    isShadowed: boolean;

    /**
     * Gets or sets the List of PathSegments that define this PathFigure.
     */
    segments: go$List<go$PathSegment>;

    /**
     * Gets or sets the starting point X coordinate of the PathFigure.
     */
    startX: number;

    /**
     * Gets or sets the starting point Y coordinate of the PathFigure.
     */
    startY: number;

    /**
     * Add a PathSegment to the segments list.
     * @param {go$PathSegment} segment a newly allocated unshared PathSegment that will become owned by this PathFigure
     * @return {go$PathFigure} this
     */
    add(segment: go$PathSegment): go$PathFigure;

    /**
     * Create a copy of this PathFigure, with the same values and segments.
     */
    copy(): go$PathFigure;
    equalsApprox(f: go$PathFigure): boolean;
  }

  /**
   * A PathSegment represents a straight line or curved segment of a path between
   * two or more points that are part of a PathFigure.
   * A PathSegment must not be modified once its containing PathFigure's
   * Geometry has been assigned to a Shape.
   */
  declare class go$PathSegment {
    /**
 * Constructs a segment that goes nowhere unless you specify some Points.
 * @param {go$EnumValue} type
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} ex optional: the X coordinate of the end point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} ey optional: the Y coordinate of the end point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} x1 optional: the X coordinate of the first bezier control point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} y1 optional: the Y coordinate of the first bezier control point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} x2 optional: the X coordinate of the second cubic bezier control point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} y2 optional: the Y coordinate of the second cubic bezier control point,
or the large-arc-flag of an SvgArc.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} clockwise optional: whether an SvgArc goes clockwise or counterclockwise.
 */
    constructor(
      type: go$EnumValue,
      ex?: number,
      ey?: number,
      x1?: number,
      y1?: number,
      x2?: number,
      y2?: number,
      clockwise?: boolean
    ): this;

    /**
     * Gets or sets the center X value of the Arc for a PathSegment of type .Arc.
     */
    centerX: number;

    /**
     * Gets or sets the center Y value of the Arc for a PathSegment of type .Arc.
     */
    centerY: number;

    /**
     * Gets or sets the X coordinate of the end point for all kinds of PathSegment.
     */
    endX: number;

    /**
     * Gets or sets the Y coordinate of the end point for all kinds of PathSegment.
     */
    endY: number;

    /**
     * Gets or sets the sweep-flag for a PathSegment of type .SvgArc.
     */
    isClockwiseArc: boolean;

    /**
     * Gets or sets whether the path is closed after this PathSegment.
     */
    isClosed: boolean;

    /**
     * Gets or sets the large-arc-flag for a PathSegment of type .SvgArc.
     */
    isLargeArc: boolean;

    /**
     * Gets or sets the X value of the first control point for a PathSegment of type .Bezier or .QuadraticBezier.
     */
    point1X: number;

    /**
     * Gets or sets the Y value of the first control point for a PathSegment of type .Bezier or .QuadraticBezier.
     */
    point1Y: number;

    /**
     * Gets or sets the X value of the second control point for a PathSegment of type cubic .Bezier.
     */
    point2X: number;

    /**
     * Gets or sets the Y value of the second control point for a PathSegment of type cubic .Bezier.
     */
    point2Y: number;

    /**
     * Gets or sets the X value of the radius for a PathSegment of type .Arc.
     */
    radiusX: number;

    /**
     * Gets or sets the Y value of the radius for a PathSegment of type .Arc.
     */
    radiusY: number;

    /**
     * Gets or sets the starting angle for a PathSegment of type .Arc.
     */
    startAngle: number;

    /**
     * Gets or sets the length of angle in degrees, or amount of arc to "sweep" for a PathSegment of type .Arc.
     */
    sweepAngle: number;

    /**
     * Gets or sets the type of the PathSegment.
     */
    type: go$EnumValue;

    /**
     * Gets or sets the X-axis rotation for a PathSegment of type .SvgArc.
     */
    xAxisRotation: number;

    /**
     * Closes the path after this PathSegment.
     */
    close(): go$PathSegment;

    /**
     * Makes a copy of this PathSegment.
     */
    copy(): go$PathSegment;

    /**
     * For drawing an arc segment, a value for PathSegment.type.
     */
    static Arc: go$EnumValue;

    /**
     * For drawing a cubic bezier segment, a value for PathSegment.type.
     */
    static Bezier: go$EnumValue;

    /**
     * For drawing a straight line segment, a value for PathSegment.type.
     */
    static Line: go$EnumValue;

    /**
     * For beginning a new subpath, a value for PathSegment.type.
     */
    static Move: go$EnumValue;

    /**
     * For drawing a quadratic bezier segment, a value for PathSegment.type.
     */
    static QuadraticBezier: go$EnumValue;

    /**
     * For drawing an SVG arc segment, a value for PathSegment.type.
     */
    static SvgArc: go$EnumValue;
    equalsApprox(s: go$PathSegment): boolean;
  }

  /**
   * A Point represents an x- and y-coordinate pair in two-dimensional space.
   */
  declare class go$Point {
    /**
     * The default constructor produces the Point(0,0).
     */
    constructor(): this;

    /**
     * The two-argument constructor produces the Point(x, y).
     * @param {number} x
     * @param {number} y
     */
    constructor(x: number, y: number): this;

    /**
     * Gets or sets the x value of the Point.
     */
    x: number;

    /**
     * Gets or sets the y value of the Point.
     */
    y: number;

    /**
     * Modify this point so that is the sum of the current Point and the
     * x and y co-ordinates of the given Point.
     * @param {go$Point} p The Point to add to this Point.
     */
    add(p: go$Point): go$Point;

    /**
     * Create a copy of this Point, with the same values.
     */
    copy(): go$Point;

    /**
     * This static function returns the angle in degrees of the line from point P to point Q.
     * @param {number} px
     * @param {number} py
     * @param {number} qx
     * @param {number} qy
     */
    static direction(px: number, py: number, qx: number, qy: number): number;

    /**
     * Compute the angle from this Point to a given (px,py) point.
     * However, if the point is the same as this Point, the direction is zero.
     * @param {number} px
     * @param {number} py
     */
    direction(px: number, py: number): number;

    /**
     * Compute the angle from this Point to a given Point.
     * However, if the given Point is the same as this Point, the direction is zero.
     * @param {go$Point} p the other Point to which to measure the relative angle.
     */
    directionPoint(p: go$Point): number;

    /**
     * This static function returns the square of the distance from the point P
     * to the finite line segment from point A to point B.
     * @param {number} px
     * @param {number} py
     * @param {number} ax
     * @param {number} ay
     * @param {number} bx
     * @param {number} by
     */
    static distanceLineSegmentSquared(
      px: number,
      py: number,
      ax: number,
      ay: number,
      bx: number,
      by: number
    ): number;

    /**
     * Returns the square of the distance from this point to a given point (px, py).
     * @param {number} px
     * @param {number} py
     */
    distanceSquared(px: number, py: number): number;

    /**
     * This static function returns the square of the distance from the point P to the point Q.
     * @param {number} px
     * @param {number} py
     * @param {number} qx
     * @param {number} qy
     */
    static distanceSquared(
      px: number,
      py: number,
      qx: number,
      qy: number
    ): number;

    /**
     * Returns the square of the distance from this Point to a given Point.
     * @param {go$Point} p the other Point to measure to.
     */
    distanceSquaredPoint(p: go$Point): number;

    /**
 * Indicates whether the given Point is equal to this Point.
 * @param {go$Point} p The Point to compare to the current Point.
false otherwise.
 */
    equals(p: go$Point): boolean;

    /**
     * Indicates whether the given point (x, y) is equal to this Point.
     * @param {number} x
     * @param {number} y false otherwise.
     */
    equalTo(x: number, y: number): boolean;

    /**
     * True if this Point has X and Y values that are real numbers and not infinity.
     */
    isReal(): boolean;

    /**
     * Modify this Point so that its X and Y values have been normalized to a unit length.
     * However, if this Point is the origin (zero, zero), its length remains zero.
     */
    normalize(): go$Point;

    /**
     * Modify this point by shifting its values with the given DX and DY offsets.
     * @param {number} dx
     * @param {number} dy
     */
    offset(dx: number, dy: number): go$Point;

    /**
     * This static function can be used to read in a Point from a string that was produced by Point.stringify.
     * @param {string} str
     */
    static parse(str: string): go$Point;

    /**
     * Modify this point to be the closest point to this point that is on a finite line segment given by (px,py) and (qx,qy).
     * @param {number} px
     * @param {number} py
     * @param {number} qx
     * @param {number} qy
     */
    projectOntoLineSegment(
      px: number,
      py: number,
      qx: number,
      qy: number
    ): go$Point;

    /**
     * Modify this point to be the closest point to this point that is on a finite line segment given by P and Q.
     * @param {go$Point} p
     * @param {go$Point} q
     */
    projectOntoLineSegmentPoint(p: go$Point, q: go$Point): go$Point;

    /**
     * Modify this Point so that has been rotated about the origin by the given angle.
     * @param {number} angle an angle in degrees.
     */
    rotate(angle: number): go$Point;

    /**
     * Modify this Point so that its X and Y values have been scaled by given factors along the X and Y axes.
     * @param {number} sx
     * @param {number} sy
     */
    scale(sx: number, sy: number): go$Point;

    /**
     * Modify this Point so that its X and Y values are the same as the given Point.
     * @param {go$Point} p the given Point.
     */
    set(p: go$Point): go$Point;

    /**
     * Modify this Point so that its X and Y values correspond to a particular Spot
     * in a given Rect.
     * The result is meaningless if Spot.isNoSpot is true for the given Spot.
     * @param {go$Rect} r the Rect for which we are finding the point.
     * @param {go$Spot} spot the Spot; Spot.isSpot must be true for this Spot.
     */
    setRectSpot(r: go$Rect, spot: go$Spot): go$Point;

    /**
     * Modify this Point so that its X and Y values correspond to a particular Spot
     * in a given rectangle.
     * The result is meaningless if Spot.isNoSpot is true for the given Spot.
     * @param {number} x The X coordinate of the Rect for which we are finding the point.
     * @param {number} y The Y coordinate of the Rect for which we are finding the point.
     * @param {number} w The Width of the Rect for which we are finding the point.
     * @param {number} h The Height of the Rect for which we are finding the point.
     * @param {go$Spot} spot the Spot; Spot.isSpot must be true for this Spot.
     */
    setSpot(
      x: number,
      y: number,
      w: number,
      h: number,
      spot: go$Spot
    ): go$Point;

    /**
     * Modify this Point with new X and Y values.
     * @param {number} x
     * @param {number} y
     */
    setTo(x: number, y: number): go$Point;

    /**
     * Modify this point to be at the nearest point on an infinite grid,
     * given the grid's origin and size of each grid cell.
     * @param {number} originx
     * @param {number} originy
     * @param {number} cellwidth
     * @param {number} cellheight
     */
    snapToGrid(
      originx: number,
      originy: number,
      cellwidth: number,
      cellheight: number
    ): go$Point;

    /**
     * Modify this point to be at the nearest point on an infinite grid,
     * given the grid's origin and size of each grid cell.
     * @param {go$Point} origin
     * @param {go$Size} cellsize
     */
    snapToGridPoint(origin: go$Point, cellsize: go$Size): go$Point;

    /**
     * This static function can be used to write out a Point as a string that can be read by Point.parse.
     * @param {go$Point} val
     */
    static stringify(val: go$Point): string;

    /**
     * Modify this point so that is the difference of this Point and the
     * x and y co-ordinates of the given Point.
     * @param {go$Point} p The Point to subtract from the current Point.
     */
    subtract(p: go$Point): go$Point;
    equalsApprox(p: go$Point): boolean;
  }

  /**
   * A Rect describes a rectangular two-dimensional area as a top-left point (x and y values)
   * and a size (width and height values).
   */
  declare class go$Rect {
    /**
     * The default constructor (no argument) results in a Rect(0,0,0,0).
     */
    constructor(): this;

    /**
     * The constructor taking two Points produces a Rect that spans both points.
     * @param {go$Point} tl Top-left Point
     * @param {go$Point} br Bottom-right Point
     */
    constructor(tl: go$Point, br: go$Point): this;

    /**
     * The constructor taking a Point and a Size produces a Rect at that point with that size.
     * @param {go$Point} tl Top-left Point
     * @param {go$Point} sz Size
     */
    constructor(tl: go$Point, sz: go$Size): this;

    /**
     * The four-argument constructor takes four numbers for the x, y, width, height.
     * @param {number} x Top-left x value.
     * @param {number} y Top-left y value.
     * @param {number} w Width to be used; must be non-negative.
     * @param {number} h Height to be used; must be non-negative.
     */
    constructor(x: number, y: number, w: number, h: number): this;

    /**
     * Gets or sets the y-axis value of the bottom of the Rect.
     */
    bottom: number;

    /**
     * Gets or sets the Point at the center of this Rect.
     */
    center: go$Point;

    /**
     * Gets or sets the horizontal center X coordinate of the Rect.
     */
    centerX: number;

    /**
     * Gets or sets the vertical center Y coordinate of the Rect.
     */
    centerY: number;

    /**
     * Gets or sets the height of the Rect.
     */
    height: number;

    /**
     * Gets or sets the leftmost value of the Rect.
     */
    left: number;

    /**
     * Gets or sets the x- and y-axis position of the Rect as a Point.
     */
    position: go$Point;

    /**
     * Gets or sets the x-axis value of the right of the Rect.
     */
    right: number;

    /**
     * Gets or sets the width and height of the Rect as a Size.
     */
    size: go$Size;

    /**
     * Gets or sets the topmost value of the Rect.
     */
    top: number;

    /**
     * Gets or sets the width of the Rect.
     */
    width: number;

    /**
     * Gets or sets the top-left x coordinate of the Rect.
     */
    x: number;

    /**
     * Gets or sets the top-left y coordinate of the Rect.
     */
    y: number;

    /**
     * Modify this Rect by adding the given Margin to each side of the Rect.
     * @param {go$Margin} m The Margin to add to the Rect.
     */
    addMargin(m: go$Margin): go$Rect;

    /**
 * Indicates whether this Rect contains the given Point/Rect.
 * @param {number} x The X coordinate of the Point or Rect to include in the new bounds.
 * @param {number} y The Y coordinate of the Point or Rect to include in the new bounds.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} w The Width of the Rect to include in the new bounds, defaults to zero.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} h The Height of the Rect to include in the new bounds, defaults to zero.
false otherwise.
 */
    contains(x: number, y: number, w?: number, h?: number): boolean;

    /**
 * This static function indicates whether a Rect contains the given Point/Rect.
 * @param {number} rx The X coordinate of a Rect.
 * @param {number} ry The Y coordinate of a Rect.
 * @param {number} rw The Width of a Rect.
 * @param {number} rh The Height of a Rect.
 * @param {number} x The X coordinate of the Point or Rect that might be in the bounds (RX, RY, RW, RH).
 * @param {number} y The Y coordinate of the Point or Rect that might be in the bounds (RX, RY, RW, RH).
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} w The Width of the Rect to include in the new bounds, defaults to zero.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} h The Height of the Rect to include in the new bounds, defaults to zero.
false otherwise.
 */
    static contains(
      rx: number,
      ry: number,
      rw: number,
      rh: number,
      x: number,
      y: number,
      w?: number,
      h?: number
    ): boolean;

    /**
 * Indicates whether this Rect contains the given Point.
 * @param {go$Point} p The Point to check.
false otherwise.
 */
    containsPoint(p: go$Point): boolean;

    /**
 * Indicates whether this Rect contains the given Rect.
 * @param {go$Rect} r The Rect to check.
false otherwise.
 */
    containsRect(r: go$Rect): boolean;

    /**
     * Create a copy of this Rect, with the same values.
     */
    copy(): go$Rect;

    /**
 * Indicates whether the given Rect is equal to the current Rect.
 * @param {go$Rect} r The rectangle to compare to the current rectangle.
and height.
 */
    equals(r: go$Rect): boolean;

    /**
     * Indicates whether the given Rect is equal to the current Rect.
     * @param {number} x
     * @param {number} y
     * @param {number} w the width.
     * @param {number} h the height.
     */
    equalTo(x: number, y: number, w: number, h: number): boolean;

    /**
     * Modifies this Rect by adding some distance to each side of the Rect.
     * @param {number} t the amount to move the top side upwards; may be negative.
     * @param {number} r the amount to move the right side rightwards; may be negative.
     * @param {number} b the amount to move the bottom side downwards; may be negative.
     * @param {number} l the amount to move the left side leftwards; may be negative.
     */
    grow(t: number, r: number, b: number, l: number): go$Rect;

    /**
     * Modify this Rect so that its width and height are changed on all four sides,
     * equally on the left and right sides, and equally on the top and bottom sides.
     * When the arguments are negative, this operation deflates this Rect, but not beyond zero.
     * @param {number} w The additional width on each side, left and right; may be negative.
     * @param {number} h The additional height on each side, top and bottom; may be negative.
     */
    inflate(w: number, h: number): go$Rect;

    /**
     * Modify this Rect so that it is the intersection of this Rect and the rectangle
     * defined by x, y, w, h.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    intersect(x: number, y: number, w: number, h: number): go$Rect;

    /**
     * Modify this Rect so that it is the intersection of this Rect and the given Rect.
     * @param {go$Rect} r Rect to intersect with.
     */
    intersectRect(r: go$Rect): go$Rect;

    /**
     * This static function indicates whether a Rect partly or wholly overlaps the given Rect.
     * @param {number} rx The X coordinate of a Rect.
     * @param {number} ry The Y coordinate of a Rect.
     * @param {number} rw The Width of a Rect.
     * @param {number} rh The Height of a Rect.
     * @param {number} x The X coordinate of the Point or Rect that might overlap the bounds (RX, RY, RW, RH).
     * @param {number} y The Y coordinate of the Point or Rect that might overlap the bounds (RX, RY, RW, RH).
     * @param {number} w
     * @param {number} h
     */
    static intersects(
      rx: number,
      ry: number,
      rw: number,
      rh: number,
      x: number,
      y: number,
      w: number,
      h: number
    ): boolean;

    /**
     * Determine if this Rect partly or wholly overlaps the rectangle
     * defined by x, y, w, h.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    intersects(x: number, y: number, w: number, h: number): boolean;

    /**
     * Determine if a given Rect is partly or wholly inside of this Rect.
     * @param {go$Rect} r Rect to test intersection with.
     */
    intersectsRect(r: go$Rect): boolean;

    /**
     * True if this Rect has a Width and Height of zero.
     */
    isEmpty(): boolean;

    /**
     * True if this Rect has X, Y, Width, and Height values that are real numbers and not infinity.
     */
    isReal(): boolean;

    /**
     * Modify this Rect by shifting its values with the given DX and DY offsets.
     * @param {number} dx
     * @param {number} dy
     */
    offset(dx: number, dy: number): go$Rect;

    /**
     * This static function can be used to read in a Rect from a string that was produced by Rect.stringify.
     * @param {string} str
     */
    static parse(str: string): go$Rect;

    /**
     * Modify this Rect so that its X, Y, Width, and Height values are the same as the given Rect.
     * @param {go$Rect} r the given Rect.
     */
    set(r: go$Rect): go$Rect;

    /**
     * Modify this Rect so that its X and Y values are the same as the given Point.
     * @param {go$Point} p the given Point.
     */
    setPoint(p: go$Point): go$Rect;

    /**
     * Modify this Rect so that its Width and Height values are the same as the given Size.
     * @param {go$Size} s the given Size.
     */
    setSize(s: go$Size): go$Rect;

    /**
     * Modify this Rect so that a given Spot is at a given (x,y) point using this Rect's size.
     * Return this rectangle for which the spot is at that point, without modifying the size.
     * The result is meaningless if Spot.isNoSpot is true.
     * @param {number} x the point where the spot should be.
     * @param {number} y the point where the spot should be.
     * @param {go$Spot} spot a Spot; Spot.isSpot must be true.
     */
    setSpot(x: number, y: number, spot: go$Spot): go$Rect;

    /**
     * Modify this Rect with new X, Y, Width, and Height values.
     * @param {number} x
     * @param {number} y
     * @param {number} w the width.
     * @param {number} h the height.
     */
    setTo(x: number, y: number, w: number, h: number): go$Rect;

    /**
     * This static function can be used to write out a Rect as a string that can be read by Rect.parse.
     * @param {go$Rect} val
     */
    static stringify(val: go$Rect): string;

    /**
     * Modify this Rect by subtracting the given Margin from each side of the Rect.
     * @param {go$Margin} m The Margin to subtract from the Rect.
     */
    subtractMargin(m: go$Margin): go$Rect;

    /**
     * Modify this Rect to be exactly big enough to contain both the original Rect and the given rectangular area.
     * @param {number} x The X coordinate of the Point or Rect to include in the new bounds.
     * @param {number} y The Y coordinate of the Point or Rect to include in the new bounds.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} w The Width of the Rect to include in the new bounds, defaults to zero.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} h The Height of the Rect to include in the new bounds, defaults to zero.
     */
    union(x: number, y: number, w?: number, h?: number): go$Rect;

    /**
     * Modify this Rect to be exactly big enough to contain both the original Rect and the given Point.
     * @param {go$Point} p The Point to include in the new bounds.
     */
    unionPoint(p: go$Point): go$Rect;

    /**
     * Modify this Rect to be exactly big enough to contain this Rect and the given Rect.
     * @param {go$Rect} r The Rect to include in the new bounds.
     */
    unionRect(r: go$Rect): go$Rect;
    equalsApprox(r: go$Rect): boolean;
  }

  /**
   * A Size describes a width and a height in two-dimensional coordinates.
   * The width and height must both be non-negative.
   */
  declare class go$Size {
    /**
     * The default constructor produces the Size(0,0).
     */
    constructor(): this;

    /**
     * The two-argument constructor produces the Size(w,h).
     * @param {number} w this number must not be negative.
     * @param {number} h this number must not be negative.
     */
    constructor(w: number, h: number): this;

    /**
     * Gets or sets the height value of the Size.
     */
    height: number;

    /**
     * Gets or sets the width value of the Size.
     */
    width: number;

    /**
     * Create a copy of this Size, with the same values.
     */
    copy(): go$Size;

    /**
 * Indicates whether the given Size is equal to the current Size.
 * @param {go$Size} s The Size to compare to the current Size.
false otherwise.
 */
    equals(s: go$Size): boolean;

    /**
 * Indicates whether the given size is equal to this Size.
 * @param {number} w the width.
 * @param {number} h the height.
false otherwise.
 */
    equalTo(w: number, h: number): boolean;

    /**
     * True if this Size has Width and Height values that are real numbers and not infinity.
     */
    isReal(): boolean;

    /**
     * This static function can be used to read in a Size from a string that was produced by Size.stringify.
     * @param {string} str
     */
    static parse(str: string): go$Size;

    /**
     * Modify this Size so that its Width and Height values are the same as the given Size.
     * @param {go$Size} s the given Size.
     */
    set(s: go$Size): go$Size;

    /**
     * Modify this Size with new Width and Height values.
     * @param {number} w the width.
     * @param {number} h the height.
     */
    setTo(w: number, h: number): go$Size;

    /**
     * This static function can be used to write out a Size as a string that can be read by Size.parse.
     * @param {go$Size} val
     */
    static stringify(val: go$Size): string;
    equalsApprox(s: go$Size): boolean;
  }

  /**
   * A Spot represents a relative point from(0, 0) to(1, 1) within the bounds of
   * a rectangular area plus an absolute offset.
   */
  declare class go$Spot {
    /**
     * The default constructor produces the Spot(0, 0, 0, 0), at the top-left corner.
     */
    constructor(): this;

    /**
     * The two-argument constructor produces the Spot(x, y), where X and Y are fractional distances, between zero and one.
     * @param {number} x must be between zero and one, inclusive.
     * @param {number} y must be between zero and one, inclusive.
     */
    constructor(x: number, y: number): this;

    /**
     * The four-argument constructor produces the Spot(x, y, offx, offy), where X and Y are fractional distances, between zero and one, and OFFX and OFFY are additional absolute offsets.
     * @param {number} x must be between zero and one, inclusive.
     * @param {number} y must be between zero and one, inclusive.
     * @param {number} offx an offset along the X coordinates, may be negative.
     * @param {number} offy an offset along the Y coordinates, may be negative.
     */
    constructor(x: number, y: number, offx: number, offy: number): this;

    /**
     * Gets or sets the offsetX value of the Spot.
     */
    offsetX: number;

    /**
     * Gets or sets the offsetY value of the Spot.
     */
    offsetY: number;

    /**
     * Gets or sets the x value of the Spot, a fractional value between zero and one.
     */
    x: number;

    /**
     * Gets or sets the y value of the Spot, a fractional value between zero and one.
     */
    y: number;

    /**
     * Create a copy of this Spot, with the same values.
     */
    copy(): go$Spot;

    /**
     * Two spots are equal if all four property values are the same.
     * @param {go$Spot} spot The Spot to compare to the current Spot.
     */
    equals(spot: go$Spot): boolean;

    /**
     * This predicate is true if this Spot is a side that
     * includes the side(s) given by the argument Spot.
     * @param {go$Spot} side
     */
    includesSide(side: go$Spot): boolean;

    /**
     * True if this is a special spot referring to the default spot.
     */
    isDefault(): boolean;

    /**
     * True if this is an unspecific special spot, such as Spot.None or one of the sides.
     */
    isNoSpot(): boolean;

    /**
     * True if this is a special spot referring to one (or more) of the sides.
     */
    isSide(): boolean;

    /**
     * True if this is a specific spot, not a side nor Spot.None.
     */
    isSpot(): boolean;

    /**
     * Return a new spot that is opposite this spot.
     */
    opposite(): go$Spot;

    /**
     * This static function can be used to read in a Spot from a string that was produced by Spot.stringify.
     * @param {string} str
     */
    static parse(str: string): go$Spot;

    /**
     * Modify this Spot so that its X, Y, OffsetX, and OffsetY values are the same as the given Spot.
     * @param {go$Spot} s the given Spot.
     */
    set(s: go$Spot): go$Spot;

    /**
     * Modify this Spot with new X, Y, OffsetX, and OffsetY values.
     * @param {number} x
     * @param {number} y
     * @param {number} offx
     * @param {number} offy
     */
    setTo(x: number, y: number, offx: number, offy: number): go$Spot;

    /**
     * This static function can be used to write out a Spot as a string that can be read by Spot.parse.
     * @param {go$Spot} val
     */
    static stringify(val: go$Spot): string;

    /**
     * The set of points on all sides of the bounding rectangle.
     */
    static AllSides: go$Spot;

    /**
     * A synonym for Spot.BottomCenter.
     */
    static Bottom: go$Spot;

    /**
     * The specific point at the middle of the bottom side of bounding rectangle.
     */
    static BottomCenter: go$Spot;

    /**
     * The specific point at the bottom-left corner of the bounding rectangle.
     */
    static BottomLeft: go$Spot;

    /**
     * The set of points at the left or bottom sides of the bounding rectangle.
     */
    static BottomLeftSides: go$Spot;

    /**
     * The specific point at the bottom-right corner of the bounding rectangle.
     */
    static BottomRight: go$Spot;

    /**
     * The set of points at the right or bottom sides of the bounding rectangle.
     */
    static BottomRightSides: go$Spot;

    /**
     * The set of points at the bottom side of the bounding rectangle.
     */
    static BottomSide: go$Spot;

    /**
     * The specific point at the very center of the bounding rectangle.
     */
    static Center: go$Spot;

    /**
     * Use this value to indicate that the real spot value is inherited from elsewhere.
     */
    static Default: go$Spot;

    /**
     * A synonym for Spot.LeftCenter.
     */
    static Left: go$Spot;

    /**
     * The specific point at the middle of the left side of bounding rectangle.
     */
    static LeftCenter: go$Spot;

    /**
     * The set of points at the left or right sides of the bounding rectangle.
     */
    static LeftRightSides: go$Spot;

    /**
     * The set of points at the left side of the bounding rectangle.
     */
    static LeftSide: go$Spot;

    /**
     * A synonym for Spot.BottomCenter.
     */
    static MiddleBottom: go$Spot;

    /**
     * A synonym for Spot.LeftCenter.
     */
    static MiddleLeft: go$Spot;

    /**
     * A synonym for Spot.RightCenter.
     */
    static MiddleRight: go$Spot;

    /**
     * A synonym for Spot.TopCenter.
     */
    static MiddleTop: go$Spot;

    /**
     * Use this Spot value to indicate no particular spot -- code looking for a particular point on an element will need to do their own calculations to determine the desired point depending on the circumstances.
     */
    static None: go$Spot;

    /**
     * The set of points on all sides of bounding rectangle except bottom side.
     */
    static NotBottomSide: go$Spot;

    /**
     * The set of points on all sides of the bounding rectangle except left side.
     */
    static NotLeftSide: go$Spot;

    /**
     * The set of points on all sides of the bounding rectangle except right side.
     */
    static NotRightSide: go$Spot;

    /**
     * The set of points on all sides of the bounding rectangle except top side.
     */
    static NotTopSide: go$Spot;

    /**
     * A synonym for Spot.RightCenter.
     */
    static Right: go$Spot;

    /**
     * The specific point at the middle of the right side of bounding rectangle.
     */
    static RightCenter: go$Spot;

    /**
     * The set of points at the right side of the bounding rectangle.
     */
    static RightSide: go$Spot;

    /**
     * A synonym for Spot.TopCenter.
     */
    static Top: go$Spot;

    /**
     * The set of points at the top or bottom sides of the bounding rectangle.
     */
    static TopBottomSides: go$Spot;

    /**
     * The specific point at the center of the top side of the bounding rectangle.
     */
    static TopCenter: go$Spot;

    /**
     * The specific point at the top-left corner of the bounding rectangle.
     */
    static TopLeft: go$Spot;

    /**
     * The set of points at the top or left sides of the bounding rectangle.
     */
    static TopLeftSides: go$Spot;

    /**
     * The specific point at the top-right corner of the bounding rectangle.
     */
    static TopRight: go$Spot;

    /**
     * The set of points at the top or right sides of the bounding rectangle.
     */
    static TopRightSides: go$Spot;

    /**
     * The set of points at the top side of the bounding rectangle.
     */
    static TopSide: go$Spot;
  }

  /**
   * A Binding describes how to automatically set a property on a GraphObject
   * to a value of a property of data in the model.
   * The target property name and the data source property name are strings.
   * All name matching is case-sensitive.
   */
  declare class go$Binding {
    /**
 * The constructor creates an empty one-way binding.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} targetprop A string naming the target property on the target object.
If this is the empty string or not supplied, the whole GraphObject is used in the call to the conversion function,
which should modify the GraphObject directly.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} sourceprop A string naming the source property on the bound data object.
If this is the empty string, the whole Panel.data object is used.
If this argument is not supplied, the source property is assumed to be the same as the target property.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} conv A function converting the data property value to the value to set the target property.
If the function is null or not supplied, no conversion takes place.
 */
    constructor(
      targetprop?: string,
      sourceprop?: string,
      conv?: (a: any, b: any) => any
    ): this;

    /**
     * Gets or sets a converter function to apply to the GraphObject property value
     * in order to produce the value to set to a data property.
     * This conversion function is only used in a TwoWay binding,
     * when transferring a value from the target to the source.
     * The default value is null -- no conversion takes place.
     * Otherwise the value should be a function that takes one or two arguments
     * and returns the desired value.
     * However, the return value is ignored when the .sourceProperty
     * is the empty string.
     * The function is passed the value from the target
     * (the first argument) and the source Panel.data object (the second argument).
     * If the .sourceProperty is a property name, that property is set to
     * the function's return value.
     * If the .sourceProperty is the empty string, the function should
     * modify the second argument, which will be the source data object.
     */
    backConverter: (a: any, b: any) => any;

    /**
     * Gets or sets a converter function to apply to the data property value
     * in order to produce the value to set to the target property.
     * This conversion function is used in both OneWay and TwoWay bindings,
     * when transferring a value from the source to the target.
     * The default value is null -- no conversion takes place.
     * Otherwise the value should be a function that takes one or two arguments
     * and returns the desired value.
     * However, the return value is ignored when the .targetProperty
     * is the empty string.
     * The function is passed the value from the source
     * (the first argument) and the target GraphObject (the second argument).
     * If the .targetProperty is a property name, that property is set to
     * the function's return value.
     * If the .targetProperty is the empty string, the function should
     * modify the second argument, which will be the target object.
     */
    converter: (a: any, b: any) => any;

    /**
     * Gets or sets the directions and frequency in which the binding may be evaluated.
     * The default value is Binding.OneWay.
     * Binding.TwoWay is the other choice.
     * Use OneWay bindings to initialize GraphObject properties based on model data,
     * or to modify GraphObject properties when the model data changes will a call to Model.setDataProperty.
     * Use TwoWay bindings to keep model data in sync with changes to GraphObject properties.
     * For efficiency, avoid TwoWay bindings on GraphObject properties that do not change value in your app.
     * You should not have a TwoWay binding on a node data object's key property.
     */
    mode: go$EnumValue;

    /**
     * Gets or sets the name of the GraphObject that should act as a source object
     * whose property should be gotten by this data binding.
     * The default value is null, which uses the bound Panel.data as the source.
     * If the value is a string, it should be the name of a GraphObject in the
     * visual tree of the Panel that is bound to the data.
     * Use the empty string to refer to the root panel.
     */
    sourceName: string;

    /**
     * Gets or sets the name of the property to get from the bound data object,
     * the value of Panel.data.
     * The default value is the empty string, which results in setting the target
     * property to the whole data object, rather than to a property value of the data object.
     */
    sourceProperty: string;

    /**
     * Gets or sets the name of the property to be set on the target GraphObject.
     * The default value is the empty string; you normally set this to be the name of a property.
     */
    targetProperty: string;

    /**
     * Modify this Binding to set its .mode to be Binding.TwoWay, and
     * provide an optional conversion function to convert GraphObject property
     * values back to data values.
     * Use TwoWay bindings to keep model data in sync with changes to GraphObject properties.
     * For efficiency, avoid TwoWay bindings on GraphObject properties that do not change value in your app.
     * You should not have a TwoWay binding on a node data object's key property.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} backconv
     */
    makeTwoWay(backconv?: (a: any, b: any) => any): go$Binding;

    /**
 * Modify this Binding to set its .sourceName property so as to identify
 * a GraphObject in the visual tree of the bound Panel.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} srcname the GraphObject.name of an element in the visual tree of the bound Panel;
use an empty string to refer to the root panel of that visual tree.
 */
    ofObject(srcname?: string): go$Binding;

    /**
     * This static function can be used to create a function that parses
     * a string into an enumerated value, given the class that the enumeration values
     * are defined on and a default value if the string cannot be parsed successfully.
     * The normal usage is to pass the result of this function as the conversion function of a Binding.
     * This binding will try to parse the string that is the value of the bound data's "dataPropName" property.
     * If it is a legitimate enumerated value defined on the Link class, the conversion
     * function will return that value.
     * If the bound data's "dataPropName" property is not present or has an unrecognized value,
     * the Link.routing property gets the default value, Link.Normal.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} ctor the class constructor that defines the enumerated values that are being parsed.
     * @param {go$EnumValue} defval the default enumerated value to return if it fails to parse the given string.
     */
    static parseEnum(
      ctor: go$Constructor,
      defval: go$EnumValue
    ): (a: string) => go$EnumValue;

    /**
     * This static function can be used to convert an object to a string,
     * looking for commonly defined data properties, such as "text", "name", "key", or "id".
     * If none are found, this just calls toString() on it.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    static toString(val: any): string;

    /**
     * This value for Binding.mode uses data source values and sets GraphObject properties.
     */
    static OneWay: go$EnumValue;

    /**
     * This value for Binding.mode uses data source values and GraphObject properties and keeps them in sync.
     */
    static TwoWay: go$EnumValue;
    ofModel(): go$Binding;
  }

  /**
   * A ChangedEvent represents a change to an object, typically a GraphObject,
   * but also for model data, a Model, or a Diagram.
   * The most common case is for remembering the name of a property
   * and the before-and-after values for that property.
   * You can listen for changed events on the model using Model.addChangedListener
   * and on the Diagram using Diagram.addChangedListener.
   */
  declare class go$ChangedEvent {
    /**
     * The ChangedEvent class constructor produces an empty ChangedEvent object.
     */
    constructor(): this;

    /**
     * Gets or sets the nature of change that occurred.
     */
    change: go$EnumValue;

    /**
     * Gets or sets the Diagram that was modified.
     */
    diagram: go$Diagram;

    /**
     * This read-only property is true when this ChangeEvent is of type ChangedEvent.Transaction and represents the end of a transactional change.
     */
    isTransactionFinished: boolean;

    /**
     * Gets or sets the Model or TreeModel or GraphLinksModel that was modified.
     */
    model: go$Model;

    /**
     * This read-only property returns the name of the model change, reflecting a change to model data in addition to a change to the model itself.
     */
    modelChange: string;

    /**
     * Gets or sets an optional value associated with the new value.
     */
    newParam: any;

    /**
     * Gets or sets the next or current value that the property has.
     */
    newValue: any;

    /**
     * Gets or sets the Object that was modified.
     */
    object: any;

    /**
     * Gets or sets an optional value associated with the old value.
     */
    oldParam: any;

    /**
     * Gets or sets the previous or old value that the property had.
     */
    oldValue: any;

    /**
     * Gets or sets the name of the property change.
     */
    propertyName: go$PropertyAccessor;

    /**
     * This predicate returns true if you can call redo().
     */
    canRedo(): boolean;

    /**
     * This predicate returns true if you can call undo().
     */
    canUndo(): boolean;

    /**
     * Forget any object references that this ChangedEvent may have.
     */
    clear(): void;

    /**
     * Make a copy of this ChangedEvent.
     */
    copy(): go$ChangedEvent;

    /**
     * This is a convenient method to get the right parameter value, depending on the value of undo,
     * when implementing a state change as part of an undo or a redo.
     * @param {boolean} undo If true, returns the oldParam, otherwise returns the newParam.
     */
    getParam(undo: boolean): any;

    /**
     * This is a convenient method to get the right value, depending on the value of undo,
     * when implementing a state change as part of an undo or a redo.
     * @param {boolean} undo If true, returns the oldValue, otherwise returns the newValue.
     */
    getValue(undo: boolean): any;

    /**
     * Re-perform this object change after an undo().
     */
    redo(): void;

    /**
     * Reverse the effects of this object change.
     */
    undo(): void;

    /**
     * For inserting into collections, and used as the value for ChangedEvent.change.
     */
    static Insert: go$EnumValue;

    /**
     * For simple property changes, and used as the value for ChangedEvent.change.
     */
    static Property: go$EnumValue;

    /**
     * For removing from collections, and used as the value for ChangedEvent.change.
     */
    static Remove: go$EnumValue;

    /**
     * For informational events, such as transactions and undo/redo operations, and used as the value for ChangedEvent.change.
     */
    static go$Transaction: go$EnumValue;
  }

  /**
   * GraphLinksModels support links between nodes and grouping nodes and links into subgraphs.
   * GraphLinksModels hold node data and link data in separate arrays.
   * Node data is normally represented in a Diagram by instances of Node,
   * but they could be represented by simple Parts or by Groups.
   * Link data should be represented by instances of Link.
   */
  declare class go$GraphLinksModel mixins go$Model {
    /**
     * This constructs an empty GraphLinksModel unless one provides arguments as the initial data array values for the Model.nodeDataArray and GraphLinksModel.linkDataArray properties.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} nodedataarray an optional Array containing JavaScript objects to be represented by Nodes.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} linkdataarray an optional Array containing JavaScript objects to be represented by Links.
     */
    constructor(
      nodedataarray?: Array<Object>,
      linkdataarray?: Array<Object>
    ): this;

    /**
     * Gets or sets a data object that will be copied and added to the model as a new node data each time there
     * is a link reference (either the "to" or the "from" of a link data) to a node key that does not yet exist in the model.
     * The default value is null -- node data is not automatically copied and added to the model
     * when there is an unresolved reference in a link data.
     * The value must be an Object or null.
     * When adding or modifying a link data if there is a "from" or "to" key value for which Model.findNodeDataForKey returns null,
     * it will call Model.copyNodeData on this property value and Model.addNodeData on the result.
     */
    archetypeNodeData: any;

    /**
     * Gets or sets a function that makes a copy of a link data object.
     * You may need to set this property in order to ensure that a copied Link is bound
     * to data that does not share certain data structures between the original link data and the copied link data.
     * The value may be null in order to cause .copyLinkData to make a shallow copy of a JavaScript Object.
     * The default value is null.
     */
    copyLinkDataFunction: (obj: Object, model: go$GraphLinksModel) => Object;

    /**
     * Gets or sets the name of the data property that returns a string naming that data's category,
     * or a function that takes a link data object and returns that category string;
     * the default value is the name 'category'.
     * This is used by the diagram to distinguish between different kinds of links.
     * The name must not be null.
     */
    linkCategoryProperty: go$PropertyAccessor;

    /**
     * Gets or sets the array of link data objects that correspond to Links in the Diagram; the initial value is an empty Array.
     */
    linkDataArray: Array<Object>;

    /**
     * Gets or sets the name of the data property that returns
     * the key of the node data that the link data is coming from,
     * or a function that takes a link data object and returns that key;
     * the default value is the name 'from'.
     * The name must not be null.
     * If the value is an empty string,
     * .getFromKeyForLinkData will return undefined for all link data objects.
     */
    linkFromKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns the optional parameter naming a "port" element on the node that the link data is connected from,
     * or a function that takes a link data object and returns that string.
     * The default value is the empty string indicating that one cannot distinguish
     * different logical connection points for any links.
     * The name must not be null.
     */
    linkFromPortIdProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns a unique id number or string for each link data object, or a function taking a link data object and returning the key value; the default value is '', which causes the model NOT to assign unique identifiers automatically.
     */
    linkKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns
     * an array of keys of node data that are labels on that link data,
     * or a function that takes a link data object and returns such an array;
     * the default value is the empty string: ''.
     * The name must not be null.
     * If the value is an empty string,
     * .getLabelKeysForLinkData will return an empty array for all link data objects.
     * You will need to set this property in order to support nodes as link labels.
     */
    linkLabelKeysProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns
     * the key of the node data that the link data is going to,
     * or a function that takes a link data object and returns that key;
     * the default value is the name 'to'.
     * The name must not be null.
     */
    linkToKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns
     * the optional parameter naming a "port" element on the node that the link data is connected to,
     * or a function that takes a link data object and returns that string.
     * The default value is the empty string indicating that one cannot distinguish
     * different logical connection points for any links.
     * The name must not be null.
     */
    linkToPortIdProperty: go$PropertyAccessor;

    /**
     * Gets or sets a function that returns a unique id number or string for a link data object; the default value is null.
     */
    makeUniqueLinkKeyFunction: (model: go$Model, obj: Object) => go$Key;

    /**
     * Gets or sets the name of the property on node data that specifies
     * the string or number key of the group data that "owns" that node data,
     * or a function that takes a node data object and returns that group key.
     * the default value is the name 'group'.
     * The value must not be null.
     */
    nodeGroupKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the boolean property on node data that indicates
     * whether the data should be represented as a group of nodes and links or
     * as a simple node,
     * or a function that takes a node data object and returns true or false;
     * the default value is the name 'isGroup'.
     * The value must not be null.
     */
    nodeIsGroupProperty: go$PropertyAccessor;

    /**
     * Adds a node key value that identifies a node data acting as a new label node on the given link data.
     * This method only works if .linkLabelKeysProperty has been set to something other than an empty string.
     * @param {Object} linkdata a JavaScript object representing a link.
     * @param {string | number} key a number or string that is the key of the new label node.
     */
    addLabelKeyForLinkData(linkdata: Object, key: go$Key): void;

    /**
     * When you want to add a link to the diagram, call this method with a new data object.
     * This will add that data to the .linkDataArray and
     * notify all listeners that a new link data object has been inserted into the collection.
     * Presumably the link data object will already have its "from" and "to" node key references set,
     * but it is also possible to set them after the link data is in the model
     * by calling .setFromKeyForLinkData and .setToKeyForLinkData.
     * This operation does nothing if the link data is already part of this model's .linkDataArray.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    addLinkData(linkdata: Object): void;

    /**
     * Add to this model all of the link data held in an Array or in an Iterable of link data objects.
     * @param {go$Iterable<Object> | Array<Object>} coll a collection of link data objects to add to the .linkDataArray
     */
    addLinkDataCollection(coll: go$Iterable<Object> | Array<Object>): void;

    /**
     * Decide if a given link data is in this model.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    containsLinkData(linkdata: Object): boolean;

    /**
     * Make a copy of a link data object.
     * This uses the value of .copyLinkDataFunction to actually perform the copy,
     * unless it is null, in which case this method just makes a shallow copy of the JavaScript Object.
     * This does not modify the model -- the returned data object is not added to this model.
     * This assumes that the data's constructor can be called with no arguments.
     * This also makes sure there is no reference to either the "from" or the "to" node of the original data.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    copyLinkData(linkdata: Object): Object;

    /**
     * Given a number or string, find the link data object in this model
     * that uses the given value as its unique key.
     * Unless .linkKeyProperty is set to a non-empty string, this model
     * will not automatically assign unique key values for link data objects,
     * and thus this method will always return null.
     * The return value will be an Object or null.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key a string or a number.
     */
    findLinkDataForKey(key: go$Key): any;

    /**
     * Find the category of a given link data, a string naming the link template
     * that the Diagram should use to represent the link data.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getCategoryForLinkData(linkdata: Object): string;

    /**
     * From a link data retrieve a value uniquely identifying the node data
     * from which this link is connected.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getFromKeyForLinkData(linkdata: Object): go$Key;

    /**
     * From a link data retrieve a value identifying the port object of the node
     * from which this link is connected.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getFromPortIdForLinkData(linkdata: Object): string;

    /**
     * If there is a container group for the given node data, return the group's key.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    getGroupKeyForNodeData(nodedata: Object): go$Key;

    /**
     * Given a link data object return its unique key: a number or a string.
     * This returns undefined if there is no key value.
     * Unless .linkKeyProperty is set to a non-empty string, this model
     * will not automatically assign unique key values for link data objects.
     * It is possible to change the key for a link data object by calling .setKeyForLinkData.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getKeyForLinkData(linkdata: Object): go$Key;

    /**
     * Gets an Array of node key values that identify node data acting as labels on the given link data.
     * This method only works if .linkLabelKeysProperty has been set to something other than an empty string.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getLabelKeysForLinkData(linkdata: Object): Array<go$Key>;

    /**
     * From a link data retrieve a value uniquely identifying the node data
     * to which this link is connected.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getToKeyForLinkData(linkdata: Object): go$Key;

    /**
     * From a link data retrieve a value identifying the port object of the node
     * to which this link is connected.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    getToPortIdForLinkData(linkdata: Object): string;

    /**
     * See if the given node data should be represented as a group or as a simple node.
     * This value must not change as long as the node data is part of the model.
     * At the current time there is no <code>setIsGroupForNodeData</code> method.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    isGroupForNodeData(nodedata: Object): boolean;

    /**
     * This method is called when a link data object is added to the model to make sure that
     * .getKeyForLinkData returns a unique key value.
     * The key value should be unique within the set of data managed by this model:
     * .linkDataArray.
     * If the key is already in use, this will assign an unused number to the
     * .linkKeyProperty property on the data.
     * If you want to customize the way in which link data gets a unique key,
     * you can set the .makeUniqueKeyFunction functional property.
     * If the link data object is already in the model and you want to change its key value,
     * call .setKeyForLinkData and give it a new unique key value.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    makeLinkDataKeyUnique(linkdata: Object): void;

    /**
     * Removes a node key value that identifies a node data acting as a former label node on the given link data.
     * Removing a reference to a node data from the collection of link label keys
     * does not automatically remove any node data from the model.
     * This method only works if .linkLabelKeysProperty has been set to something other than an empty string.
     * @param {Object} linkdata a JavaScript object representing a link.
     * @param {string | number} key a number or string that is the key of the label node being removed from the link.
     */
    removeLabelKeyForLinkData(linkdata: Object, key: go$Key): void;

    /**
     * When you want to remove a link from the diagram, call this method with an existing link data object.
     * This will remove that data from the .linkDataArray and
     * notify all listeners that a link data object has been removed from the collection.
     * Removing a link data from a model does not automatically remove
     * any associated label node data from the model.
     * This operation does nothing if the link data is not present in the .linkDataArray.
     * @param {Object} linkdata a JavaScript object representing a link.
     */
    removeLinkData(linkdata: Object): void;

    /**
     * Remove from this model all of the link data held in an Array or in an Iterable of link data objects.
     * @param {go$Iterable<Object> | Array<Object>} coll a collection of link data objects to remove from the .linkDataArray
     */
    removeLinkDataCollection(coll: go$Iterable<Object> | Array<Object>): void;

    /**
     * Change the category of a given link data, a string naming the link template
     * that the Diagram should use to represent the link data.
     * Changing the link template for a link data will cause the existing Link
     * to be removed from the Diagram and be replaced with a new Link
     * created by copying the new link template and applying any data-bindings.
     * @param {Object} linkdata a JavaScript object representing a link.
     * @param {string} cat Must not be null.
     */
    setCategoryForLinkData(linkdata: Object, cat: string): void;

    /**
 * Change the node key that the given link data references as the
 * source of the link.
 * @param {Object} linkdata a JavaScript object representing a link.
 * @param {string | number | void} key This may be undefined if
the link should no longer come from any node.
 */
    setFromKeyForLinkData(linkdata: Object, key: go$Key): void;

    /**
 * Change the information that the given link data uses to identify the
 * particular "port" that the link is coming from.
 * @param {Object} linkdata a JavaScript object representing a link.
 * @param {string} portname This may be the empty string if
the link should no longer be associated with any particular "port".
 */
    setFromPortIdForLinkData(linkdata: Object, portname: string): void;

    /**
     * Change the container group for the given node data, given a key for the new group.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     * @param {string | number | void} key This may be undefined if there should be no containing group data.
     */
    setGroupKeyForNodeData(nodedata: Object, key: go$Key): void;

    /**
     * Change the unique key of a given link data that is already in this model.
     * The new key value must be unique -- i.e. not in use by another link data object.
     * You can call .findLinkDataForKey to check if a proposed new key is already in use.
     * If this is called when .linkKeyProperty is the empty string (i.e. its default value),
     * this method has no effect.
     * If this is called on a link data object that is not (yet) in this model,
     * this unconditionally modifies the property to the new key value.
     * @param {Object} linkdata a JavaScript object representing a link.
     * @param {string | number | void} key
     */
    setKeyForLinkData(linkdata: Object, key: go$Key): void;

    /**
     * Replaces an Array of node key values that identify node data acting as labels on the given link data.
     * This method only works if .linkLabelKeysProperty has been set to something other than an empty string.
     * @param {Object} linkdata a JavaScript object representing a link.
     * @param arr an Array of node keys; an empty Array if the property was not present.
     */
    setLabelKeysForLinkData(linkdata: Object, arr: Array<go$Key>): void;

    /**
 * Change the node key that the given link data references as the
 * destination of the link.
 * @param {Object} linkdata a JavaScript object representing a link.
 * @param {string | number | void} key This may be undefined if
the link should no longer go to any node.
 */
    setToKeyForLinkData(linkdata: Object, key: go$Key): void;

    /**
 * Change the information that the given link data uses to identify the
 * particular "port" that the link is going to.
 * @param {Object} linkdata a JavaScript object representing a link.
 * @param {string} portname This may be the empty string if
the link should no longer be associated with any particular "port".
 */
    setToPortIdForLinkData(linkdata: Object, portname: string): void;
  }

  declare class go$Model {
    /**
     * You probably don't want to call this constructor, because this class does not support links (relationships between nodes) or groups (nodes and links and subgraphs as nodes): instead, create instances of a subclass such as GraphLinksModel or TreeModel.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} nodedataarray an optional Array containing JavaScript objects to be represented by Parts.
     */
    constructor(nodedataarray?: Array<Object>): this;

    /**
     * Gets or sets whether the default behavior for copyNodeData makes copies of property values that are Arrays.
     */
    copiesArrays: boolean;

    /**
     * Gets or sets whether the default behavior for copyNodeData when copying Arrays also copies array items that are Objects.
     */
    copiesArrayObjects: boolean;

    /**
     * Gets or sets a function that makes a copy of a node data object; the default value is null, resulting in the standard behavior which is to make a shallow copy of the object.
     */
    copyNodeDataFunction: (obj: Object, model: go$Model) => Object;

    /**
     * Gets or sets the name of the format of the diagram data; the default value is the empty string.
     */
    dataFormat: string;

    /**
     * Gets or sets whether this model may be modified, such as adding nodes; by default this value is false.
     */
    isReadOnly: boolean;

    /**
     * Gets or sets a function that returns a unique id number or string for a node data object; the default value is null.
     */
    makeUniqueKeyFunction: (model: go$Model, obj: Object) => go$Key;

    /**
     * Gets a JavaScript Object that can hold programmer-defined property values for the model as a whole, rather than just for one node or one link; by default this is an object with no properties. The value must be an Object.
     */
    modelData: any;

    /**
     * Gets or sets the name of this model; the initial name is an empty string.
     */
    name: string;

    /**
     * Gets or sets the name of the node data property that returns a string naming that data's category, or a function that takes a node data object and returns the category name; the default value is the name 'category'.
     */
    nodeCategoryProperty: go$PropertyAccessor;

    /**
     * Gets or sets the array of node data objects that correspond to Nodes, Groups, or non-Link Parts in the Diagram; the initial value is an empty Array.
     */
    nodeDataArray: Array<Object>;

    /**
     * Gets or sets the name of the data property that returns a unique id number or string for each node data object, or a function taking a node data object and returning the key value; the default value is the name 'key'.
     */
    nodeKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets whether ChangedEvents are not recorded by the UndoManager; the initial and normal value is false.
     */
    skipsUndoManager: boolean;

    /**
     * Gets or sets the UndoManager for this Model; the default UndoManager has its UndoManager.isEnabled property set to false.
     */
    undoManager: go$UndoManager;

    /**
     * Add an item at the end of a data array that may be data bound by a Panel as its Panel.itemArray,
     * in a manner that can be undone/redone and that automatically updates any bindings.
     * This also calls .raiseChangedEvent to notify all listeners about the ChangedEvent.Insert.
     * If you want to add a new node or part to the diagram, call .addNodeData.
     * @param {Array<"NO PRINT IMPLEMENTED: JSDocAllType">} arr an Array that is the value of some Panel's Panel.itemArray.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val the new value to be pushed onto the array.
     */
    addArrayItem(arr: Array<any>, val: any): void;

    /**
     * Register an event handler that is called when there is a ChangedEvent for a modification of the Diagram, a Layer, or a GraphObject.
     * This registration does not raise a ChangedEvent.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    addChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * When you want to add a node or group to the diagram,
     * call this method with a new data object.
     * This will add that data to the .nodeDataArray and
     * notify all listeners that a new node data object has been inserted into the collection.
     * To remove a node from the diagram, you can remove its data object by calling .removeNodeData.
     * To add or remove an object or value from an item array, call .insertArrayItem or .removeArrayItem.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    addNodeData(nodedata: Object): void;

    /**
     * Add to this model all of the node data held in an Array or in an Iterable of node data objects.
     * @param {go$Iterable<Object> | Array<Object>} coll a collection of node data objects to add to the .nodeDataArray
     */
    addNodeDataCollection(coll: go$Iterable<Object> | Array<Object>): void;

    /**
 * Modify this model by applying the changes given in an "incremental" model change in JSON format
 * generated by toIncrementalJson.
 * Incremental changes must be applied in the same order that the changes occurred in the original model.
 * <p>
 * This requires the "incremental" property to be present and to be a number, as specified by toIncrementalJson.
 * All of the top-level properties in the JSON, such as nodeKeyProperty, must be the same as for this model.
 * @param {string | Object} s a String in JSON format containing modifications to be performed to the model,
or a JavaScript Object parsed from such a string
 */
    applyIncrementalJson(s: string | Object): void;

    /**
     * Clear out all references to any model data.
     * This also clears out the UndoManager, so this operation is not undoable.
     * This method is called by Diagram.clear; it does not notify any Diagrams or other listeners.
     * Instead of calling this method, you may prefer to set .nodeDataArray to an empty JavaScript Array.
     * If this model is a GraphLinksModel, you would also want to set GraphLinksModel.linkDataArray to a separate empty JavaScript Array.
     */
    clear(): void;

    /**
     * Copies properties from this model to the given model, which must be of the same class as this model.
     * @param {go$Model} copy
     */
    cloneProtected(copy: go$Model): void;

    /**
     * Commit the changes of the current transaction.
     * This just calls UndoManager.commitTransaction.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a descriptive name for the transaction.
     */
    commitTransaction(tname?: string): boolean;

    /**
     * Decide if a given node data is in this model.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    containsNodeData(nodedata: Object): boolean;

    /**
     * Creates an empty copy of this Model and returns it.
     * The data is not copied: nodeDataArray, modelData,
     * GraphLinksModel.linkDataArray, GraphLinksModel.archetypeNodeData.
     * Nor are any Changed listeners or the UndoManager.
     */
    copy(): go$Model;

    /**
     * Make a copy of a node data object.
     * This uses the value of .copyNodeDataFunction to actually perform the copy,
     * unless it is null, in which case this method just makes a shallow copy of the JavaScript Object.
     * This does not modify the model -- the returned data object is not added to this model.
     * This assumes that the data's constructor can be called with no arguments.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    copyNodeData(nodedata: Object): Object;

    /**
     * Given a number or string, find the node data in this model
     * that uses the given value as its unique key.
     * The return value will be an Object or null.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key a string or a number.
     */
    findNodeDataForKey(key: go$Key): any;

    /**
     * This static function parses a string in JSON format and constructs, initializes, and returns a model.
     * Note that properties with values that are functions are not written out by .toJson,
     * so reading in such a model will require constructing such a model, initializing its functional property values,
     * and explicitly passing it in as the second argument.
     * @param {string} s a String in JSON format containing all of the persistent properties of the model, or an Object already read from JSON text.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} model an optional model to be modified; if not supplied, it constructs and returns a new model whose name is specified by the "class" property.
     */
    static fromJson(s: string | Object, model?: go$Model): go$Model;

    /**
     * Find the category of a given node data, a string naming the node template
     * or group template or part template
     * that the Diagram should use to represent the node data.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    getCategoryForNodeData(nodedata: Object): string;

    /**
     * Given a node data object return its unique key: a number or a string.
     * This returns undefined if there is no key value.
     * It is possible to change the key for a node data object by calling .setKeyForNodeData.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    getKeyForNodeData(nodedata: Object): go$Key;

    /**
     * Add an item to a data array that may be data bound by a Panel as its Panel.itemArray,
     * given a new data value and the index at which to insert the new value, in a manner that can be undone/redone and that automatically updates any bindings.
     * This also calls .raiseChangedEvent to notify all listeners about the ChangedEvent.Insert.
     * If you want to add a new node or part to the diagram, call .addNodeData.
     * @param Array <*> arr an Array that is the value of some Panel's Panel.itemArray.
     * @param {number} idx the zero-based array index where the new value will be inserted; use -1 to push the new value on the end of the array.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val the new value to be inserted into the array.
     */
    insertArrayItem(arr: Array<any>, idx: number, val: any): void;

    /**
     * This method is called when a node data object is added to the model to make sure that
     * .getKeyForNodeData returns a unique key value.
     * The key value should be unique within the set of data managed by this model:
     * .nodeDataArray.
     * If the key is already in use, this will assign an unused number to the
     * .nodeKeyProperty property on the data.
     * If you want to customize the way in which node data gets a unique key,
     * you can set the .makeUniqueKeyFunction functional property.
     * If the node data object is already in the model and you want to change its key value,
     * call .setKeyForNodeData and give it a new unique key value.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    makeNodeDataKeyUnique(nodedata: Object): void;

    /**
     * Call this method to notify that the model or its objects have changed.
     * This constructs a ChangedEvent and calls all Changed listeners.
     * @param {go$EnumValue} change specifies the general nature of the change; typically the value is ChangedEvent.Property.
     * @param {string | "NO PRINT IMPLEMENTED: JSDocFunctionType"} propertyname names the property that was modified, or a function that takes an Object and returns the property value.
     * @param {Object} obj the object that was modified, typically a GraphObject, Diagram, or a Model.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} oldval the previous or older value.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} newval the next or newer value.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} oldparam an optional value that helps describe the older value.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} newparam an optional value that helps describe the newer value.
     */
    raiseChangedEvent(
      change: go$EnumValue,
      propertyname: go$PropertyAccessor,
      obj: Object,
      oldval: any,
      newval: any,
      oldparam?: any,
      newparam?: any
    ): void;

    /**
     * Call this method to notify about a data property having changed value.
     * This constructs a ChangedEvent and calls all Changed listeners.
     * You should call this method only if the property value actually changed.
     * This method is called by .setDataProperty.
     * @param {Object} data the data object whose property changed value.
     * @param {string | "NO PRINT IMPLEMENTED: JSDocFunctionType"} propertyname the name of the property, or a function that takes an Object and returns the property value.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} oldval the previous or old value for the property.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} newval the next or new value for the property.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} oldparam an optional value additionally describing the old value.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} newparam an optional value additionally describing the new value.
     */
    raiseDataChanged(
      data: Object,
      propertyname: go$PropertyAccessor,
      oldval: any,
      newval: any,
      oldparam?: any,
      newparam?: any
    ): void;

    /**
 * Remove an item from a data array that may be data bound by a Panel as its Panel.itemArray,
 * given the index at which to remove a data value, in a manner that can be undone/redone and that automatically updates any bindings.
 * This also calls .raiseChangedEvent to notify all listeners about the ChangedEvent.Remove.
 * If you want to remove a node from the diagram, call .removeNodeData.
 * Note that there is no version of this method that takes an item value instead of an index into the array.
 * Because item arrays may hold any JavaScript value, including numbers and strings, there may be duplicate entries with that value in the array.
 * To avoid ambiguity, removing an item from an array requires an index.
 * @param Array <*> arr an Array that is the value of some Panel's Panel.itemArray.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} idx the zero-based array index of the data item to be removed from the array;
if not supplied it will remove the last item of the array.
 */
    removeArrayItem(arr: Array<any>, idx?: number): void;

    /**
     * Unregister an event handler listener.
     * This deregistration does not raise a ChangedEvent.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} listener a function that takes a ChangedEvent as its argument.
     */
    removeChangedListener(listener: (e: go$ChangedEvent) => void): void;

    /**
     * When you want to remove a node or group from the diagram,
     * call this method with an existing data object.
     * This will remove that data from the .nodeDataArray and
     * notify all listeners that a node data object has been removed from the collection.
     * Removing a node data from a model does not automatically remove
     * any connected link data from the model.
     * Removing a node data that represents a group does not automatically remove
     * any member node data or link data from the model.
     * To add a node to the diagram, you can add its data object by calling .addNodeData.
     * To add or remove an object or value from an item array, call .insertArrayItem or .removeArrayItem.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     */
    removeNodeData(nodedata: Object): void;

    /**
     * Remove from this model all of the node data held in an Array or in an Iterable of node data objects.
     * @param {go$Iterable<Object> | Array<Object>} coll a collection of node data objects to remove from the .nodeDataArray
     */
    removeNodeDataCollection(coll: go$Iterable<Object> | Array<Object>): void;

    /**
     * Rollback the current transaction, undoing any recorded changes.
     * This just calls UndoManager.rollbackTransaction.
     */
    rollbackTransaction(): boolean;

    /**
     * Change the category of a given node data, a string naming the node template
     * or group template or part template
     * that the Diagram should use to represent the node data.
     * Changing the node template for a node data will cause the existing Node, Group, or Part
     * to be replaced with a new Node, Group, or Part
     * created by copying the new node template and applying any data-bindings.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     * @param {string} cat Must not be null.
     */
    setCategoryForNodeData(nodedata: Object, cat: string): void;

    /**
     * Change the value of some property of a node data, a link data, or an item data, given a string naming the property
     * and the new value, in a manner that can be undone/redone and that automatically updates any bindings.
     * This gets the old value of the property; if the value is the same as the new value, no side-effects occur.
     * @param {Object} data a JavaScript object representing a Node, Link, Group, simple Part, or item in a Panel.itemArray.
     * @param {string} propname a string that is not null or the empty string.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val the new value for the property.
     */
    setDataProperty(data: Object, propname: string, val: any): void;

    /**
     * Change the unique key of a given node data that is already in this model.
     * The new key value must be unique -- i.e. not in use by another node data object.
     * You can call .findNodeDataForKey to check if a proposed new key is already in use.
     * This operation will check all data objects in the model and replace all references
     * using the old key value with the new one.
     * If this is called on a node data object that is not (yet) in this model,
     * this unconditionally modifies the property to the new key value.
     * @param {Object} nodedata a JavaScript object representing a node, group, or non-link.
     * @param {string | number | void} key
     */
    setKeyForNodeData(nodedata: Object, key: go$Key): void;

    /**
     * Begin a transaction, where the changes are held by a Transaction object in the UndoManager.
     * This just calls UndoManager.startTransaction.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a descriptive name for the transaction.
     */
    startTransaction(tname?: string): boolean;

    /**
     * Produce a JSON-format string representing the changes in the most recent Transaction.
     * This writes out JSON for a model, but recording only changes in the given Transaction,
     * with the addition of the "incremental" property to mark it as different from a complete model.
     * Instead of the "nodeDataArray" property (and "linkDataArray" property for GraphLinksModels),
     * this will have "inserted...", "modified...", and "removed..." properties that are Arrays.
     * <p>
     * The "modifiedNodeData" Array holds JavaScript objects.
     * The "insertedNodeKeys" and "removedNodeKeys" Arrays hold keys (numbers or strings) of data,
     * not whole objects, that have been added and/or deleted.
     * <p>
     * The purpose of this method is to make it easier to send incremental changes to the server/database,
     * instead of sending the whole model.
     * <p>
     * For GraphLinksModels, this method requires that GraphLinksModel#linkKeyProperty is not an empty string.
     * The incremental JSON for GraphLinksModels will include "modifiedLinkData", "insertedLinkKeys", and "removedLinkKeys"
     * properties that are Arrays.
     * @param {go$ChangedEvent} e a Transaction ChangedEvent for which ChangedEvent.isTransactionFinished is true
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} classname for the written model, defaults to the name of the class of the model
     * @return {string}
     */
    toIncrementalJson(e: go$ChangedEvent, classname?: string): string;

    /**
 * Generate a string representation of the persistent data in this model, in JSON format.
 * Object properties that are not enumerable or whose names start with "_" are not written out.
 * Functions are not able to be written in JSON format, so any properties that have function values
 * will not be saved in the JSON string.
 * There must not be any circular references within the model data.
 * Any sharing of object references will be lost in the written JSON.
 * Most object classes cannot be serialized into JSON without special knowledge and processing at both ends.
 * The .toJson and Model.fromJson methods automatically do such processing for numbers that are NaN
 * and for objects that are of class Point, Size, Rect, Margin, Spot,
 * Brush (but not for brush patterns), and for Geometry.
 * However, we recommend that you use Binding converters (static functions named "parse" and "stringify")
 * to represent Points, Sizes, Rects, Margins, Spots, and Geometries as string values in your data, rather than as Objects.
 * This makes the JSON text smaller and simpler and easier to read.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} classname The optional name of the model class to use in the output;
for the standard models, this is their class name prefixed with "go.".
 */
    toJson(classname?: string): string;

    /**
 * Find a Part corresponding to the given data and
 * call its Panel.updateTargetBindings method, in each Diagram
 * that uses this Model.
 * @param {Object} data The data object in this model that was modified.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} srcpropname If not present or the empty string,
update all bindings on the target Part or item Panel;
otherwise update only those bindings using this source property name.
 */
    updateTargetBindings(data: Object, srcpropname?: string): void;
  }

  /**
   * A Transaction holds a list of ChangedEvents collected during a transaction,
   * as the value of the read-only .changes property.
   */
  declare class go$Transaction {
    /**
     * Construct an object holding an empty list of ChangedEvents and no .name.
     */
    constructor(): this;

    /**
     * This read-only property returns the list of ChangedEvents.
     */
    changes: go$List<go$ChangedEvent>;

    /**
     * Gets or sets whether we can add more ChangedEvents to this list of changes.
     */
    isComplete: boolean;

    /**
     * Gets or sets the transaction name for this collection of changes.
     */
    name: string;

    /**
     * This predicate returns true if you can call .redo, namely when .isComplete is true.
     */
    canRedo(): boolean;

    /**
     * This predicate returns true if you can call .undo, namely when .isComplete is true.
     */
    canUndo(): boolean;

    /**
     * Clear all of the saved changes.
     */
    clear(): void;

    /**
     * Re-perform these changes after an .undo.
     */
    redo(): void;

    /**
     * Undo all of the changes, in reverse order.
     */
    undo(): void;
  }

  /**
   * TreeModels support tree-structured graphs of nodes and links.
   * Each node can have at most one "tree parent"; cycles are not permitted.
   * The reference to the parent node's key is a property of the child node data.
   */
  declare class go$TreeModel mixins go$Model {
    /**
     * This constructs an empty TreeModel unless one provides arguments as the initial data array values for the Model.nodeDataArray property.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} nodedataarray an optional Array containing JavaScript objects to be represented by Nodes.
     */
    constructor(nodedataarray?: Array<Object>): this;

    /**
     * Gets or sets the name of the property on node data that specifies
     * the string or number key of the node data that acts as the "parent" for this "child" node data,
     * or a function that takes a node data object and returns that parent key;
     * the default value is the name 'parent'.
     * The value must not be null nor an empty string.
     */
    nodeParentKeyProperty: go$PropertyAccessor;

    /**
     * Gets or sets the name of the data property that returns a string describing that node data's parent link's category,
     * or a function that takes a node data object and returns its parent link's category string;
     * the default value is the name 'parentLinkCategory'.
     * This is used by the diagram to distinguish between different kinds of links.
     * The name must not be null.
     */
    parentLinkCategoryProperty: go$PropertyAccessor;

    /**
     * If there is a parent node for the given node data, return the parent's key.
     * @param {Object} nodedata a JavaScript object representing a node.
     */
    getParentKeyForNodeData(nodedata: Object): go$Key;

    /**
     * Find the category for the parent link of a given child node data, a string naming the link template
     * that the Diagram should use to represent the link.
     * @param {Object} childdata a JavaScript object representing a node data.
     */
    getParentLinkCategoryForNodeData(childdata: Object): string;

    /**
     * Change the parent node for the given node data, given a key for the new parent, or undefined if there should be no parent.
     * @param {Object} nodedata a JavaScript object representing a node.
     * @param {string | number | void} key This may be undefined if there should be no parent node data.
     */
    setParentKeyForNodeData(nodedata: Object, key: go$Key): void;

    /**
     * Change the category for the parent link of a given child node data, a string naming the link template
     * that the Diagram should use to represent the link.
     * Changing the link template will cause any existing Link
     * to be removed from the Diagram and replaced with a new Link
     * created by copying the new link template and applying any data-bindings.
     * @param {Object} childdata a JavaScript object representing a node data.
     * @param {string} cat Must not be null.
     */
    setParentLinkCategoryForNodeData(childdata: Object, cat: string): void;
  }

  /**
   * A Transaction holds a list of ChangedEvents collected during a transaction,
   * as the value of the read-only .changes property.
   */
  declare class go$UndoManager {
    /**
     * The constructor produces an empty UndoManager with no transaction history.
     */
    constructor(): this;

    /**
     * This read-only property returns the current Transaction for recording additional model change events.
     */
    currentTransaction: go$Transaction;

    /**
     * This read-only property returns the whole history, a list of all of the Transactions, each representing a transaction with some number of ChangedEvents.
     */
    history: go$List<go$Transaction>;

    /**
     * This read-only property returns the index into .history for the current undoable Transaction.
     */
    hisotryIndex: number;

    /**
     * Gets or sets whether this UndoManager records any changes.
     */
    isEnabled: boolean;

    /**
     * This property is true after the first call to .startTransaction and before a corresponding call to .commitTransaction or .rollbackTransaction.
     */
    isInTransaction: boolean;

    /**
     * This property is true during a call to .undo or .redo.
     */
    isUndoingRedoing: boolean;

    /**
     * Gets or sets the maximum number of transactions that this undo manager will remember.
     */
    maxHistoryLength: number;

    /**
     * This read-only property returns an iterator for all of the Models that this UndoManager is handling.
     */
    models: go$Iterator<go$Model>;

    /**
     * This read-only property returns a stack of ongoing transaction names.
     */
    nestedTransactionNames: go$List<string>;

    /**
     * This read-only property returns the current transaction level.
     */
    transactionLevel: number;

    /**
     * This read-only property returns the Transaction in the .history to be redone next.
     */
    transactionToRedo: go$Transaction;

    /**
     * This read-only property returns the Transaction in the .history to be undone next.
     */
    transactionToUndo: go$Transaction;

    /**
     * Make sure this UndoManager knows about a Model for which it may receive ChangedEvents when the given Model is changed.
     * @param {go$Model} model
     */
    addModel(model: go$Model): void;

    /**
     * This predicate returns true if you can call .redo.
     */
    canRedo(): boolean;

    /**
     * This predicate returns true if you can call .undo.
     */
    canUndo(): boolean;

    /**
     * Clear all of the Transactions and clear all other state, including any ongoing transaction without rolling back.
     */
    clear(): void;

    /**
     * Commit the current transaction started by a call to .startTransaction.
     * For convenience, this method is called by Model.commitTransaction and Diagram.commitTransaction.
     * If this call stops a top-level transaction,
     * we mark the .currentTransaction as complete (Transaction.isComplete),
     * we add the Transaction to the .history list,
     * and we return true.
     * Committing a transaction when there have been some undos without corresponding
     * redos will throw away the Transactions holding changes that happened
     * after the current state, before adding the new Transaction to the
     * .history list.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a short string describing the transaction, defaulting to the name given at the call to startTransaction
     */
    commitTransaction(tname?: string): boolean;

    /**
     * Maybe record a ChangedEvent in the .currentTransaction.
     * This calls .skipsEvent to see if this should ignore the change.
     * If .skipsEvent returns false, this creates a copy of the ChangedEvent
     * and adds it to the .currentTransaction.
     * If there is no .currentTransaction, this first creates and remembers it.
     * This method always ignores all changes while performing
     * an .undo or .redo.
     * This method is also a no-op if .isEnabled is false.
     * @param {go$ChangedEvent} e a ChangedEvent.
     */
    handleChanged(e: go$ChangedEvent): void;

    /**
     * Re-perform this object change after an .undo.
     */
    redo(): void;

    /**
     * Inform this UndoManager that it will no longer be receiving ChangedEvents
     * when the given Model is changed.
     * The model will no longer receive notifications about transactions and undo or redo operations.
     * You should not call this method during a transaction.
     * If you call this method between transactions when there is a transaction history,
     * you should be careful that there are no ChangedEvents referring to that model in any Transactions.
     * @param {go$Model} model A Model that this UndoManager should no longer manage.
     */
    removeModel(model: go$Model): void;

    /**
     * Rollback the current transaction started by a call to .startTransaction, undoing any changes.
     */
    rollbackTransaction(): boolean;

    /**
     * This predicate is called by .handleChanged to decide if a ChangedEvent
     * is not interesting enough to be remembered.
     * Transactional events (of change type ChangedEvent.Transaction) are always skipped.
     * Changed events for GraphObjects that are in Layer.isTemporary layers are also skipped.
     * Sometimes changed events do not even get to .handleChanged because
     * Model.skipsUndoManager or Diagram.skipsUndoManager is true.
     * @param {go$ChangedEvent} e the ChangedEvent received by .handleChanged.
     */
    skipsEvent(e: go$ChangedEvent): boolean;

    /**
     * Begin a transaction, where the changes are held by a Transaction object
     * as the value of .currentTransaction.
     * You must call either .commitTransaction or .rollbackTransaction afterwards.
     * For convenience, this method is called by Model.startTransaction and Diagram.startTransaction.
     * Transactions can be nested.
     * Starting or ending a nested transaction will return false.
     * Nested transactions will share the same Transaction list of ChangedEvents.
     * Starting a transaction will not necessarily cause .currentTransaction to be non-null.
     * A Transaction object is usually only created by .handleChanged when a ChangedEvent first occurs.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a short string describing the transaction.
     */
    startTransaction(tname?: string): boolean;

    /**
     * Reverse the effects of this object change.
     */
    undo(): void;
  }

  /**
   * This layout positions nodes in a circular arrangement.
   * This layout makes use of a LayoutNetwork of
   * CircularVertexes and CircularEdges that normally
   * correspond to the Nodes and Links of the Diagram.
   */
  declare class go$CircularLayout mixins go$Layout {
    /**
     * Constructs a CircularLayout with no Layout.network and with no owning Layout.diagram.
     */
    constructor(): this;

    /**
     * Returns the coordinates of the center of the laid-out ellipse.
     */
    actualCenter: go$Point;

    /**
     * This read-only property returns the effective spacing that may have been calculated by the layout.
     */
    actualSpacing: number;

    /**
     * This read-only property returns the effective X radius that may have been calculated by the layout.
     */
    actualXRadius: number;

    /**
     * This read-only property returns the effective Y radius that may have been calculated by the layout.
     */
    actualYRadius: number;

    /**
     * Gets or sets how the nodes are spaced.
     */
    arrangement: go$EnumValue;

    /**
     * Gets or sets the ratio of the arrangement's height to its width (1 for a circle, >1 for a vertically elongated ellipse).
     */
    aspectRatio: number;

    /**
     * Gets or sets the comparer which sorts the data when .sorting is set to CircularLayout.Ascending or CircularLayout.Descending.
     */
    comparer: (a: go$CircularVertex, b: go$CircularVertex) => number;

    /**
     * Gets or sets whether the nodes are arranged clockwise or counterclockwise.
     */
    direction: go$EnumValue;

    /**
     * Specifies how the diameter of nodes will be calculated.
     */
    nodeDiameterFormula: go$EnumValue;

    /**
     * Gets or sets the horizontal radius of the elliptical arrangement.
     */
    radius: number;

    /**
     * Gets or sets if and how the nodes are sorted.
     */
    sorting: go$EnumValue;

    /**
     * Gets or sets the distance between nodes (if .radius is NaN) or the minimum distance between nodes (if .radius is a number).
     */
    spacing: number;

    /**
     * Gets or sets the angle (in degrees, clockwise from the positive side of the X axis) of the first element.
     */
    startAngle: number;

    /**
     * Gets or sets the absolute angle (in degrees) between the first and last node.
     */
    sweepAngle: number;

    /**
     * Position each Node according to the Vertex position, and then position the Links.
     */
    commitLayout(): void;

    /**
     * Commit the position and routing of all edge links.
     */
    commitLinks(): void;

    /**
     * Commit the position of all vertex nodes.
     */
    commitNodes(): void;

    /**
     * Create a new LayoutNetwork of CircularVertexes and CircularEdges.
     */
    createNetwork(): go$CircularNetwork;

    /**
     * Assign the positions of the vertexes in the network.
     * @param {go$Diagram | go$Group | go$Iterable<go$Part>} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * Nodes are sorted using the .comparer, in ascending order; This value is used for CircularLayout.sorting.
     */
    static Ascending: go$EnumValue;

    /**
     * The ring is filled by alternating sides; the second node is counterclockwise from the first node; This value is used for CircularLayout.direction.
     */
    static BidirectionalLeft: go$EnumValue;

    /**
     * The ring is filled by alternating sides; the second node is clockwise from the first node; This value is used for CircularLayout.direction.
     */
    static BidirectionalRight: go$EnumValue;

    /**
     * The effective diameter is either the width or height of the node, whichever is larger; This will cause circular nodes to touch when CircularLayout.spacing is 0; This is ideal when the nodes are circular.
     */
    static Circular: go$EnumValue;

    /**
     * Rings are filled clockwise; This value is used for CircularLayout.direction.
     */
    static Clockwise: go$EnumValue;

    /**
     * The angular distance between the nodes is constant; This value is used for CircularLayout.arrangement.
     */
    static ConstantAngle: go$EnumValue;

    /**
     * The distance between the centers of the nodes is constant; This value is used for CircularLayout.arrangement.
     */
    static ConstantDistance: go$EnumValue;

    /**
     * The spacing between the idealized boundaries of the nodes is constant; This value is used for CircularLayout.arrangement.
     */
    static ConstantSpacing: go$EnumValue;

    /**
     * Rings are filled counterclockwise; This value is used for CircularLayout.direction.
     */
    static Counterclockwise: go$EnumValue;

    /**
     * Nodes are sorted using the .comparer, in reverse ascending (descending) order; This value is used for CircularLayout.sorting.
     */
    static Descending: go$EnumValue;

    /**
     * Nodes are arranged in the order given; This value is used for CircularLayout.sorting.
     */
    static Forwards: go$EnumValue;

    /**
     * Nodes are ordered to reduce link crossings; This value is used for CircularLayout.sorting.
     */
    static Optimized: go$EnumValue;

    /**
     * The vertices are arranged as close together as possible considering the CircularLayout.spacing, assuming the nodes are rectangular; This value is used for CircularLayout.arrangement.
     */
    static Packed: go$EnumValue;

    /**
     * The effective diameter is sqrt(width^2+height^2); The corners of square nodes will touch at 45 degrees when CircularLayout.spacing is 0; This value is used for CircularLayout.nodeDiameterFormula.
     */
    static Pythagorean: go$EnumValue;

    /**
     * Nodes are arranged in the reverse of the order given; This value is used for CircularLayout.sorting.
     */
    static Reverse: go$EnumValue;
  }

  declare class go$CircularNetwork mixins go$LayoutNetwork {}

  /**
   * This holds CircularLayout-specific information about Links.
   */
  declare class go$CircularEdge mixins go$LayoutEdge {}

  /**
   * This holds CircularLayout-specific information about Nodes.
   */
  declare class go$CircularVertex mixins go$LayoutVertex {
    /**
     * Gets or sets the value used as the vertex's angle.
     */
    actualAngle: number;

    /**
     * Gets or sets the value used as the vertex's diameter.
     */
    diameter: number;
  }

  /**
   * Force-directed layout treats the graph as if it were a system of physical
   * bodies with forces acting on them and between them.
   * The algorithm seeks a configuration of the bodies with locally minimal energy,
   * i.e. vertex positions such that the sum of the forces on each vertex is zero.
   */
  declare class go$ForceDirectedLayout mixins go$Layout {
    /**
     * Constructs a ForceDirectedLayout with no Layout.network and with no owning Layout.diagram.
     */
    constructor(): this;

    /**
     * Gets or sets the space between which the layout will position the connected graphs that together compose the network.
     */
    arrangementSpacing: go$Size;

    /**
     * Gets or sets whether .commitNodes should move all of the nodes so that the nodes all fit with the top-left corner at the Layout.arrangementOrigin.
     */
    arrangesToOrigin: boolean;

    /**
     * Gets or sets whether to call .addComments.
     */
    comments: boolean;

    /**
     * This read-only property returns the current iteration count, valid during a call to .doLayout.
     */
    currentIteration: number;

    /**
     * Gets or sets the default value computed by .electricalCharge.
     */
    defaultCommentElectricalCharge: number;

    /**
     * Gets or sets the default value computed by .springLength.
     */
    defaultCommentSpringLength: number;

    /**
     * Gets or sets the default value computed by .electricalCharge.
     */
    defaultElectricalCharge: number;

    /**
     * Gets or sets the default value computed by .gravitationalMass.
     */
    defaultGravitationalMass: number;

    /**
     * Gets or sets the default value computed by .springLength.
     */
    defaultSpringLength: number;

    /**
     * Gets or sets the default value computed by .springStiffness.
     */
    defaultSpringStiffness: number;

    /**
     * Gets or sets approximately how far a node must move in order for the iterations to continue.
     */
    epsilonDistance: number;

    /**
     * Gets or sets a threshold for the distance beyond which the electrical charge forces may be ignored.
     */
    infinityDistance: number;

    /**
     * Gets or sets the maximum number of iterations to perform when doing the force-directed auto layout.
     */
    maxIterations: number;

    /**
     * Gets or sets a random number generator with a random() method; set to null in order to use and reset an internal repeatable pseudo-random number generator.
     */
    randomNumberGenerator: {
      random: () => number
    };

    /**
     * Gets or sets whether the fromSpot and the toSpot of every Link should be set to Spot.Default.
     */
    setsPortSpots: boolean;

    /**
     * Find associated objects to be positioned along with the vertex.
     * @param {go$LayoutVertex} v
     */
    addComments(v: go$ForceDirectedVertex): void;

    /**
     * Position the Nodes according to the Vertex positions.
     */
    commitLayout(): void;

    /**
     * Commit the position and routing of all edge links.
     */
    commitLinks(): void;

    /**
     * Commit the position of all vertex nodes.
     */
    commitNodes(): void;

    /**
     * Create a new LayoutNetwork of ForceDirectedVertexes and ForceDirectedEdges.
     */
    createNetwork(): go$ForceDirectedNetwork;

    /**
     * Assign the positions of the vertexes in the network.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * Returns the charge of the vertex,
     * the value of ForceDirectedVertex.charge if it's a number,
     * or else the value of .defaultElectricalCharge.
     * @param {go$ForceDirectedVertex} v
     */
    electricalCharge(v: go$ForceDirectedVertex): number;

    /**
     * Returns the electrical field in the X direction acting on a vertex at the given point.
     *
     * Used to define an external electrical field at a point
     * independent of the vertex charges.
     * A vertex L is acted upon by a force in the X direction of magnitude
     * @param {number} x
     * @param {number} y
     */
    electricalFieldX(x: number, y: number): number;

    /**
     * Returns the electrical field in the Y direction acting on a vertex at the given point.
     *
     * Used to define an external electrical field at a point
     * independent of the vertex charges.
     * A vertex L is acted upon by a force in the Y direction of magnitude
     * @param {number} x
     * @param {number} y
     */
    electricalFieldY(x: number, y: number): number;

    /**
     * This returns the gravitational field in the X direction acting on a vertex at the given point.
     *
     * Used to define an external gravitational field at a point
     * independent of the vertex masses.
     * A vertex L is acted upon by a force in the X direction of magnitude
     * @param {number} x
     * @param {number} y
     */
    gravitationalFieldX(x: number, y: number): number;

    /**
     * This returns the gravitational field in the Y direction acting on a vertex at the given point.
     *
     * Used to define an external gravitational field at a point
     * independent of the vertex masses.
     * A vertex L is acted upon by a force in the Y direction of magnitude
     * @param {number} x
     * @param {number} y
     */
    gravitationalFieldY(x: number, y: number): number;

    /**
     * Returns the mass of the vertex,
     * the value of ForceDirectedVertex.mass if it's a number,
     * or else the value of .defaultGravitationalMass.
     * @param {go$ForceDirectedVertex} v
     */
    gravitationalMass(v: go$ForceDirectedVertex): number;

    /**
     * This predicate returns true if the vertex should not be moved
     * by the layout algorithm but still have an effect on nearby and connected vertexes.
     * The default implementation returns ForceDirectedVertex.isFixed.
     * @param {go$ForceDirectedVertex} v
     */
    isFixed(v: go$ForceDirectedVertex): boolean;

    /**
     * Maybe move a vertex that isFixed.
     * This is called each iteration on each such vertex.
     * By default this does nothing.
     */
    moveFixedVertex(v: go$ForceDirectedVertex): void;

    /**
     * Returns the length of the spring representing an edge.
     * The two vertexes connected by the edge E are acted upon by a force of magnitude
     * @param {go$ForceDirectedEdge} e
     */
    springLength(e: go$ForceDirectedEdge): number;

    /**
     * Returns the stiffness of the spring representing an edge.
     * The two vertexes connected by the edge E are acted upon by a force of magnitude
     * @param {go$ForceDirectedEdge} e
     */
    springStiffness(e: go$ForceDirectedEdge): number;
  }

  declare class go$ForceDirectedNetwork mixins go$LayoutNetwork {}

  /**
   * This holds ForceDirectedLayout-specific information about Links.
   */
  declare class go$ForceDirectedEdge mixins go$LayoutEdge {
    /**
     * Gets or sets the length of this edge.
     */
    length: number;

    /**
     * Gets or sets this edge's stiffness or resistence to compression or stretching.
     */
    stiffness: number;
  }

  /**
   * This holds ForceDirectedLayout-specific information about Nodes.
   */
  declare class go$ForceDirectedVertex mixins go$LayoutVertex {
    /**
     * Gets or sets the electrical charge for this vertex.
     */
    charge: number;

    /**
     * Gets or sets the cumulative force on the vertex in the X direction.
     */
    forceX: number;

    /**
     * Gets or sets the cumulative force on the vertex in the Y direction.
     */
    forceY: number;

    /**
     * Gets or sets whether the vertex may be moved by any forces.
     */
    isFixed: boolean;

    /**
     * Gets or sets the gravitational mass for this vertex.
     */
    mass: number;
  }

  /**
   * This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
   * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
   */
  declare class go$GridLayout mixins go$Layout {
    /**
     * This simple layout places all of the Parts in a grid-like arrangement, ordered, spaced apart,
     * and wrapping as needed.  It ignores any Links connecting the Nodes being laid out.
     */
    constructor(): this;

    /**
     * Gets or sets whether the Part.location or the position should be used to arrange each part.
     */
    alignment: go$EnumValue;

    /**
     * Gets or sets how to arrange the parts.
     */
    arrangement: go$EnumValue;

    /**
     * Gets or sets the minimum part size by which each part is positioned in the grid.
     */
    cellSize: go$Size;

    /**
     * Gets or sets the comparison function used to sort the parts.
     */
    comparer: (a: go$Part, b: go$Part) => number;

    /**
     * Gets or sets what order to place the parts.
     */
    sorting: go$EnumValue;

    /**
     * Gets or sets the minimum horizontal and vertical space between parts.
     */
    spacing: go$Size;

    /**
     * Gets or sets the maximum number of columns.
     */
    wrappingColumn: number;

    /**
     * Gets or sets the wrapping width.
     */
    wrappingWidth: number;

    /**
     * Assign the positions of the parts, ignoring any links.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * Lay out each child according to the sort order given by GridLayout.comparer; This value is used for GridLayout.sorting.
     */
    static Ascending: go$EnumValue;

    /**
     * Lay out each child in reverse sort order given by GridLayout.comparer; This value is used for GridLayout.sorting.
     */
    static Descending: go$EnumValue;

    /**
     * Lay out each child in the order in which they were found; This value is used for GridLayout.sorting.
     */
    static Forward: go$EnumValue;

    /**
     * Fill each row from left to right; This value is used for GridLayout.arrangement.
     */
    static LeftToRight: go$EnumValue;

    /**
     * Position the part's Part.location at a grid point; This value is used for GridLayout.alignment.
     */
    static Location: go$EnumValue;

    /**
     * Position the top-left corner of each part at a grid point; This value is used for GridLayout.alignment.
     */
    static Position: go$EnumValue;

    /**
     * Lay out each child in reverse order from which they were found; This value is used for GridLayout.sorting.
     */
    static Reverse: go$EnumValue;

    /**
     * Fill each row from right to left; This value is used for GridLayout.arrangement.
     */
    static RightToLeft: go$EnumValue;
  }

  /**
   * This arranges nodes into layers.
   * The method uses a hierarchical approach
   * for creating drawings of digraphs with nodes arranged in layers.
   * The layout algorithm consists of four-major steps: Cycle Removal,
   * Layer Assignment, Crossing Reduction, and Straightening and Packing.
   */
  declare class go$LayeredDigraphLayout mixins go$Layout {
    /**
     * Constructs a LayeredDigraphLayout with no Layout.network and with no owning Layout.diagram.
     */
    constructor(): this;

    /**
     * Gets or sets which aggressive option is being used to look for link crossings.
     */
    aggressiveOption: go$EnumValue;

    /**
     * Gets or sets the size of each column.
     */
    columnSpacing: number;

    /**
     * Gets or set which cycle removal option is used.
     */
    cycleRemoveOption: go$EnumValue;

    /**
     * Gets or sets the direction the graph grows towards.
     */
    direction: number;

    /**
     * Gets or sets which indices initialization option is being used.
     */
    initializeOption: go$EnumValue;

    /**
     * Gets or sets the number of iterations to be done.
     */
    iterations: number;

    /**
     * Gets or sets which layering option is being used.
     */
    layeringOption: go$EnumValue;

    /**
     * Gets or sets the size of each layer.
     */
    layerSpacing: number;

    /**
     * This read-only property returns the largest column value.
     */
    maxColumn: number;

    /**
     * This read-only property returns the largest index value.
     */
    maxIndex: number;

    /**
     * This read-only property returns the larges index layer.
     */
    maxIndexLayer: number;

    /**
     * This read-only property returns the largest layer value.
     */
    maxLayer: number;

    /**
     * This read-only property returns the smallest index layer.
     */
    minIndexLayer: number;

    /**
     * Gets or sets the options used by the straighten and pack function, The default value is LayeredDigraphLayout.PackAll.
     */
    packOption: number;

    /**
     * Gets or sets whether the FromSpot and ToSpot of each link should be set to values appropriate for the given value of LayeredDigraphLayout.direction.
     */
    setsPortSpots: boolean;

    /**
     * Assigns every vertex in the input network to a layer.
     */
    assignLayers(): void;

    /**
     * This overridable method is called by commitLayout
     * to support custom arrangement of bands or labels across each layout layer.
     * @param Array <*> layerRects an Array of Rects with the bounds of each of the "layers"
     * @param {go$Point} offset the position of the top-left corner of the banded area relative to the coordinates given by the layerRects
     */
    commitLayers(layerRects: Array<go$Rect>, offset: go$Point): void;

    /**
     * Updates the physical location of "real" nodes and links to reflect the layout.
     */
    commitLayout(): void;

    /**
     * Routes the links.
     */
    commitLinks(): void;

    /**
     * Lays out the nodes.
     */
    commitNodes(): void;

    /**
     * Create a new LayoutNetwork of LayeredDigraphVertexes and LayeredDigraphEdges.
     */
    createNetwork(): go$LayeredDigraphNetwork;

    /**
     * Assign the positions of the vertexes in the network.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * The faster, less aggressive, crossing reduction algorithm; a valid value for LayeredDigraphLayout.aggressiveOption.
     */
    static AggressiveLess: go$EnumValue;

    /**
     * The slower, more aggressive, crossing reduction algorithm, a valid value for LayeredDigraphLayout.aggressiveOption.
     */
    static AggressiveMore: go$EnumValue;

    /**
     * The fastest, but poorest, crossing reduction algorithm; a valid value for LayeredDigraphLayout.aggressiveOption.
     */
    static AggressiveNone: go$EnumValue;

    /**
     * Remove cycles using depth first cycle removal; a valid value of LayeredDigraphLayout.cycleRemoveOption.
     */
    static CycleDepthFirst: go$EnumValue;

    /**
     * Remove cycles using greedy cycle removal; a valid value of LayeredDigraphLayout.cycleRemoveOption.
     */
    static CycleGreedy: go$EnumValue;

    /**
     * Initialize using depth first in initialization; a valid value for LayeredDigraphLayout.initializeOption.
     */
    static InitDepthFirstIn: go$EnumValue;

    /**
     * Initialize using depth first out initialization; a valid value for LayeredDigraphLayout.initializeOption.
     */
    static InitDepthFirstOut: go$EnumValue;

    /**
     * Initialize using naive initialization; a valid value for LayeredDigraphLayout.initializeOption.
     */
    static InitNaive: go$EnumValue;

    /**
     * Assign layers using longest path sink layering; a valid value for LayeredDigraphLayout.layeringOption.
     */
    static LayerLongestPathSink: go$EnumValue;

    /**
     * Assign layers using longest path source layering; a valid value for LayeredDigraphLayout.layeringOption.
     */
    static LayerLongestPathSource: go$EnumValue;

    /**
     * Assign layers using optimal link length layering; A valid value for LayeredDigraphLayout.layeringOption.
     */
    static LayerOptimalLinkLength: go$EnumValue;

    /**
     * Enable all options for the LayeredDigraphLayout.packOption property; See also LayeredDigraphLayout.PackExpand, LayeredDigraphLayout.PackStraighten, and LayeredDigraphLayout.PackMedian.
     */
    static PackAll: number;

    /**
     * This option gives more chances for the packing algorithm to improve the network, but is very expensive in time for large networks; a valid value for LayeredDigraphLayout.packOption.
     */
    static PackExpand: number;

    /**
     * This option tries to have the packing algorithm center groups of nodes based on their relationships with nodes in other layers, a valid value for LayeredDigraphLayout.packOption.
     */
    static PackMedian: number;

    /**
     * Does minimal work in packing the nodes; a valid value for LayeredDigraphLayout.packOption.
     */
    static PackNone: number;

    /**
     * This option tries to have the packing algorithm straighten many of the links that cross layers, a valid value for LayeredDigraphLayout.packOption.
     */
    static PackStraighten: number;
    linkSpacing: number;
    nodeMinLayerSpace(v: go$LayeredDigraphVertex, tl: boolean): number;
    nodeMinColumnSpace(v: go$LayeredDigraphVertex, tl: boolean): number;
  }

  declare class go$LayeredDigraphNetwork mixins go$LayoutNetwork {}

  /**
   * This holds LayeredDigraphLayout-specific information about Link s.
   */
  declare class go$LayeredDigraphEdge mixins go$LayoutEdge {
    /**
     * True if the link is part of the depth first forest.
     */
    forest: boolean;

    /**
     * Approximate column offset of the from port of the link from the from node column used in straightening.
     */
    portFromColOffset: number;

    /**
     * Location of the port at the from node of the link.
     */
    portFromPos: number;

    /**
     * Approximate column offset of the to port of the link from the to node column used in straightening.
     */
    portToColOffset: number;

    /**
     * Location of the port at the to node of the link.
     */
    portToPos: number;

    /**
     * True if the link was reversed during cycle removal.
     */
    rev: boolean;

    /**
     * True if the link is part of the proper digraph.
     */
    valid: boolean;
  }

  /**
   * This holds LayeredDigraphLayout-specific information about Nodes.
   */
  declare class go$LayeredDigraphVertex mixins go$LayoutVertex {
    /**
     * The column to which the node is assigned.
     */
    column: number;

    /**
     * The connected component to which the node is assigned.
     */
    component: number;

    /**
     * The index to which the node is assigned.
     */
    index: number;

    /**
     * The layer to which the node is assigned.
     */
    layer: number;

    /**
     * Another LayeredDigraphVertex in the same layer that this node should be near.
     */
    near: go$LayeredDigraphVertex;
  }

  /**
   * This is the base class for all of the predefined diagram layout implementations.
   * They only arrange Parts (primarily Nodes and Links) in a Diagram,
   * not to GraphObjects in Panels (i.e. panel layout).
   */
  declare class go$Layout {
    /**
     * Create a minimal layout that only positions Nodes that do not have a location.
     */
    constructor(): this;

    /**
     * Gets or sets the top-left point for where the graph should be positioned when laid out.
     */
    arrangementOrigin: go$Point;

    /**
     * This read-only property returns the Diagram that owns this layout, if it is the value of Diagram.layout.
     */
    diagram: go$Diagram;

    /**
     * This read-only property returns the Group that uses this layout, if it is the value of a group's Group.layout.
     */
    group: go$Group;

    /**
     * Gets or sets whether this layout is performed on an initial layout.
     */
    isInitial: boolean;

    /**
     * Gets or sets whether this layout can be invalidated by .invalidateLayout.
     */
    isOngoing: boolean;

    /**
     * Gets or sets whether this layout be performed in real-time, before the end of a transaction.
     */
    isRealtime: boolean;

    /**
     * Gets or sets whether this layout routes Links.
     */
    isRouting: boolean;

    /**
     * Gets or sets whether this layout needs to be performed again.
     */
    isValidLayout: boolean;

    /**
     * Gets or sets whether this layout depends on the Diagram.viewportBounds's size.
     */
    isViewportSized: boolean;

    /**
     * Gets or sets the LayoutNetwork used by this Layout, if any.
     */
    network: go$LayoutNetwork;

    /**
     * Copies properties from this layout to the given layout, which must be of the same class as this layout.
     * @param {go$Layout} copy
     */
    cloneProtected(copy: go$Layout): void;

    /**
     * When using a LayoutNetwork, commit changes to the diagram by setting Node positions and by routing the Links.
     */
    commitLayout(): void;

    /**
     * Creates a copy of this Layout and returns it.
     */
    copy(): go$Layout;

    /**
     * Create a new LayoutNetwork of LayoutVertexes and LayoutEdges.
     */
    createNetwork(): go$LayoutNetwork;

    /**
     * Position all of the nodes that do not have an assigned Part.location in the manner of a simple rectangular array.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * If .isOngoing is true and if an initial layout has not yet been performed, set the .isValidLayout property to false, and ask to perform another layout in the near future.
     */
    invalidateLayout(): void;

    /**
     * Create and initialize a LayoutNetwork with the given nodes and links.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    makeNetwork(
      coll: go$Diagram | go$Group | go$Iterable<go$Part>
    ): go$LayoutNetwork;

    /**
     * When using a LayoutNetwork, update the "physical" node positionings and link routings.
     */
    updateParts(): void;
    collectParts(coll: go$Iterable<go$Part>): void;
  }

  /**
   * This provides an abstract view of a diagram as a
   * network (graph) of vertexes and directed edges.
   * The network contains vertexes and edges corresponding to Nodes and Links.
   */
  declare class go$LayoutNetwork {
    /**
     * This constructs an empty network.
     */
    constructor(): this;

    /**
     * Gets a collection of all of the LayoutEdges in this network.
     */
    edges: go$Set<go$LayoutEdge>;

    /**
     * This read-only property returns the Layout that uses this network of LayoutVertexes and LayoutEdges.
     */
    layout: go$Layout;

    /**
     * Gets a collection of all of the LayoutVertexes in this network.
     */
    vertexes: go$Set<go$LayoutVertex>;

    /**
     * Adds a LayoutEdge to the network.
     * @param {go$LayoutEdge} edge
     */
    addEdge(edge: go$LayoutEdge): void;

    /**
     * This convenience method makes sure there is a LayoutEdge in this network corresponding to a Link.
     * @param {go$Link} link
     * @param {go$Link} link
     */
    addLink(link: go$Link): go$LayoutEdge;

    /**
     * This convenience method makes sure there is a LayoutVertex in this network corresponding to a Node.
     * @param {go$Node} node
     */
    addNode(node: go$Node): go$LayoutVertex;

    /**
 * Creates a network of LayoutVertexes and LayoutEdges corresponding to the given Nodes and Links.
 * @param {go$Iterable<go$Part>} parts A collection of Nodes or Links.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} toplevelonly whether to skip Parts in the given collection that are contained by Groups; default is false.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred optional predicate to apply to each Part --
if it returns false do not include Vertex or Edge in the network for that Part;
default ignores link label nodes or links connecting with them
 */
    addParts(
      parts: go$Iterable<go$Part>,
      toplevelonly?: boolean,
      pred?: (part: go$Part) => boolean
    ): void;

    /**
     * Adds a LayoutVertex to the network.
     * @param {go$LayoutVertex} vertex
     */
    addVertex(vertex: go$LayoutVertex): void;

    /**
     * Allocate a new instance of LayoutEdge.
     */
    createEdge(): go$LayoutEdge;

    /**
     * Allocate a new instance of LayoutVertex.
     */
    createVertex(): go$LayoutVertex;

    /**
     * Deletes all vertexes and edges that have no Part associated with them.
     */
    deleteArtificialVertexes(): void;

    /**
     * Removes a LayoutEdge from the network.
     * @param {go$LayoutEdge} edge
     */
    deleteEdge(edge: go$LayoutEdge): void;

    /**
     * This convenience method deletes from this network any LayoutEdge corresponding to a Link.
     * @param {go$Link} link
     */
    deleteLink(link: go$Link): void;

    /**
     * This convenience method deletes any LayoutVertex corresponding to a Node.
     * @param {go$Node} node
     */
    deleteNode(node: go$Node): void;

    /**
     * Deletes all LayoutEdges whose "to vertex" and "from vertex" are the same vertex.
     */
    deleteSelfEdges(): void;

    /**
     * Removes a LayoutVertex from the network.
     * @param {go$LayoutVertex} vertex
     */
    deleteVertex(vertex: go$LayoutVertex): void;

    /**
     * Retrieve all of the Nodes and Links from the LayoutVertexes and LayoutEdges that are in this network.
     */
    findAllParts(): go$Set<go$Part>;

    /**
     * Returns the LayoutEdge that was constructed for the Link.
     * @param {go$Link} link
     */
    findEdge(link: go$Link): go$LayoutEdge;

    /**
     * Returns the LayoutVertex that was constructed for the Node.
     * @param {go$Node} node
     */
    findVertex(node: go$Node): go$LayoutVertex;

    /**
     * Links two vertexes already in the network and returns the created LayoutEdge.
     * @param {go$LayoutVertex} fromVertex
     * @param {go$LayoutVertex} toVertex
     * @param {go$Link} link
     */
    linkVertexes(
      fromVertex: go$LayoutVertex,
      toVertex: go$LayoutVertex,
      link: go$Link
    ): go$LayoutEdge;

    /**
     * Reverses the direction of a LayoutEdge in the network.
     * @param {go$LayoutEdge} edge
     */
    reverseEdge(edge: go$LayoutEdge): void;

    /**
     * Modify this network by splitting it up into separate subnetworks, each of which has all of its vertexes connected to each other, but not to any vertexes in any other subnetworks.
     */
    splitIntoSubNetworks(): go$List<go$LayoutNetwork>;
  }

  /**
   * An edge represents a link in a LayoutNetwork. It holds layout-specific data for the link.
   */
  declare class go$LayoutEdge {
    /**
     * This constructs an edge that does not know about any Link.
     */
    constructor(): this;

    /**
     * Gets or sets the model data, used only when virtualizing
     */
    data: any;

    /**
     * Gets or sets the LayoutVertex that this edge comes from.
     */
    fromVertex: go$LayoutVertex;

    /**
     * Gets or sets the Link associated with this edge, if any.
     */
    link: go$Link;

    /**
     * Gets or sets the LayoutNetwork that owns this edge.
     */
    network: go$LayoutNetwork;

    /**
     * Gets or sets the LayoutVertex that this edge goes to.
     */
    toVertex: go$LayoutVertex;

    /**
     * Commits the route of this edge to the corresponding Link, if any.
     */
    commit(): void;

    /**
     * Returns the edge's vertex at the other of this edge from the given vertex.
     * @param {go$LayoutVertex} v
     */
    getOtherVertex(v: go$LayoutVertex): void;
  }

  /**
   * A vertex represents a node in a LayoutNetwork. It holds layout-specific data for the node.
   */
  declare class go$LayoutVertex {
    /**
     * This constructs a vertex that does not know about any Node.
     */
    constructor(): this;

    /**
     * Gets or sets the Bounds of this vertex, in document coordinates.
     */
    bounds: go$Rect;

    /**
     * Gets or sets the center Point.x of this vertex, in document coordinates.
     */
    centerX: number;

    /**
     * Gets or sets the center Point.y of this vertex, in document coordinates.
     */
    centerY: number;

    /**
     * Gets or sets the model data, used only when virtualizing
     */
    data: any;

    /**
     * Gets an iterator for all of the edges that go out of this vertex.
     */
    destinationEdges: go$Iterator<go$LayoutEdge>;

    /**
     * Gets an iterator for all of the vertexes that are connected with edges going out of this vertex.
     */
    destinationVertexes: go$Iterator<go$LayoutVertex>;

    /**
     * Gets an iterator for all of the edges that are connected with this vertex in either direction.
     */
    edges: go$Iterator<go$LayoutEdge>;

    /**
     * This read-only property returns the total number of edges that are connected with this vertex in either direction.
     */
    edgesCount: number;

    /**
     * Gets or sets the offset of the .centerX and .centerY from the .bounds position.
     */
    focus: go$Point;

    /**
     * Gets or sets the relative X position of the "center" point, the focus.
     */
    focusX: number;

    /**
     * Gets or sets the relative Y position of the "center" point, the focus.
     */
    focusY: number;

    /**
     * Gets or sets the height of this vertex.
     */
    height: number;

    /**
     * Gets or sets the LayoutNetwork that owns this vertex.
     */
    network: go$LayoutNetwork;

    /**
     * Gets or sets the Node associated with this vertex, if any.
     */
    node: go$Node;

    /**
     * Gets an iterator for all of the edges that come into this vertex.
     */
    sourceEdges: go$Iterator<go$LayoutEdge>;

    /**
     * Gets an iterator for all of the vertexes that are connected with edges coming into this vertex.
     */
    sourceVertexes: go$Iterator<go$LayoutVertex>;

    /**
     * Gets an iterator for all of the vertexes that are connected in either direction with this vertex.
     */
    vertexes: go$Iterator<go$LayoutVertex>;

    /**
     * Gets or sets the width of this vertex.
     */
    width: number;

    /**
     * Gets or sets the left point of this vertex.
     */
    x: number;

    /**
     * Gets or sets the top point of this vertex.
     */
    y: number;

    /**
     * Adds a LayoutEdge to the list of successors (the edge will be going out from this vertex).
     * @param {go$LayoutEdge} edge
     */
    addDestinationEdge(edge: go$LayoutEdge): void;

    /**
     * Adds a LayoutEdge to the list of predecessors (the edge will be coming into this vertex).
     * @param {go$LayoutEdge} edge
     */
    addSourceEdge(edge: go$LayoutEdge): void;

    /**
     * Moves the Node corresponding to this vertex so that its position is at the current .bounds point.
     */
    commit(): void;

    /**
     * Deletes a LayoutEdge from the list of successors (the edge was going out from this vertex).
     * @param {go$LayoutEdge} edge
     */
    deleteDestinationEdge(edge: go$LayoutEdge): void;

    /**
     * Deletes a LayoutEdge from the list of predecessors (the edge was coming into this vertex).
     * @param {go$LayoutEdge} edge
     */
    deleteSourceEdge(edge: go$LayoutEdge): void;

    /**
     * This static function is used to compare the Part.text values of the .nodes of the argument LayoutVertexes.
     * @param {go$LayoutVertex} m
     * @param {go$LayoutVertex} n
     */
    static smartComparer(m: go$LayoutVertex, n: go$LayoutVertex): number;

    /**
     * This static function is used to compare the Part.text values of the .nodes of the argument LayoutVertexes.
     * @param {go$LayoutVertex} m
     * @param {go$LayoutVertex} n
     */
    static standardComparer(m: go$LayoutVertex, n: go$LayoutVertex): number;
  }

  /**
   * This layout positions nodes in a tree-like arrangement.
   */
  declare class go$TreeLayout mixins go$Layout {
    /**
     * Constructs a TreeLayout with no Layout.network and with no owning Layout.diagram.
     */
    constructor(): this;

    /**
     * Gets or sets the default alignment of parents relative to their children.
     */
    alignment: go$EnumValue;

    /**
     * Gets or sets the default alignment of parents relative to their children.
     */
    alternateAlignment: go$EnumValue;

    /**
     * Gets or sets the default direction for tree growth.
     */
    alternateAngle: number;

    /**
     * Gets or sets a limit on how broad a tree should be.
     */
    alternateBreadthLimit: number;

    /**
     * Gets or sets the spot that children nodes' ports get as their ToSpot The default value is Spot.Default.
     */
    alternateChildPortSpot: go$Spot;

    /**
     * Gets or sets the distance between a node and its comments.
     */
    alternateCommentMargin: number;

    /**
     * Gets or sets the distance between comments.
     */
    alternateCommentSpacing: number;

    /**
     * Gets or sets how closely to pack the child nodes of a subtree.
     */
    alternateCompaction: go$EnumValue;

    /**
     * Gets or sets the default comparison function used for sorting.
     */
    alternateComparer: (a: go$TreeVertex, b: go$TreeVertex) => number;

    /**
     * Gets or sets the object holding the default values for alternate layer TreeVertexes, used when the .treeStyle is .StyleAlternating or .StyleLastParents.
     */
    alternateDefaults: go$TreeVertex;

    /**
     * Gets or sets the distance between a parent node and its children.
     */
    alternateLayerSpacing: number;

    /**
     * Gets or sets the fraction of the node's depth for which the children's layer starts overlapped with the parent's layer.
     */
    alternateLayerSpacingParentOverlap: number;

    /**
     * Gets or sets the default indentation of the first child.
     */
    alternateNodeIndent: number;

    /**
     * Gets or sets the fraction of this node's breadth is added to .nodeIndent to determine any spacing at the start of the children.
     */
    alternateNodeIndentPastParent: number;

    /**
     * Gets or sets the distance between child nodes.
     */
    alternateNodeSpacing: number;

    /**
     * Gets or sets the spot that this node's port gets as its FromSpot.
     */
    alternatePortSpot: go$Spot;

    /**
     * Gets or sets the default indentation of the first child of each row, if the .alignment is not a "Center" alignment.
     */
    alternateRowIndent: number;

    /**
     * Gets or sets the distance between rows of children.
     */
    alternateRowSpacing: number;

    /**
     * Gets or sets whether the TreeLayout should set the ToSpot for each child node port.
     */
    alternateSetsChildPortSpot: boolean;

    /**
     * Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.
     */
    alternateSetsPortSpot: boolean;

    /**
     * Gets or sets the default Sorting policy.
     */
    alternateSorting: go$EnumValue;

    /**
     * Gets or sets the default direction for tree growth.
     */
    angle: number;

    /**
     * Gets or sets how .arrangeTrees should lay out the separate trees.
     */
    arrangement: go$EnumValue;

    /**
     * Gets or sets the space between which .arrangeTrees will position the trees.
     */
    arrangementSpacing: go$Size;

    /**
     * Gets or sets a limit on how broad a tree should be.
     */
    breadthLimit: number;

    /**
     * Gets or sets the spot that children nodes' ports get as their ToSpot.
     */
    childPortSpot: go$Spot;

    /**
     * Gets or sets the distance between a node and its comments.
     */
    commentMargin: number;

    /**
     * Gets or sets the distance between comments.
     */
    commentSpacing: number;

    /**
     * Gets or sets how closely to pack the child nodes of a subtree.
     */
    compaction: go$EnumValue;

    /**
     * Gets or sets whether to call .addComments.
     */
    comments: boolean;

    /**
     * Gets or sets the default comparison function used for sorting.
     */
    comparer: (a: go$TreeVertex, b: go$TreeVertex) => number;

    /**
     * Gets or sets the distance between a parent node and its children.
     */
    layerSpacing: number;

    /**
     * Gets or sets the fraction of the node's depth for which the children's layer starts overlapped with the parent's layer.
     */
    layerSpacingParentOverlap: number;

    /**
     * Gets or sets the manner in which the nodes are aligned in layers.
     */
    layerStyle: go$EnumValue;

    /**
     * Gets or sets the default indentation of the first child.
     */
    nodeIndent: number;

    /**
     * Gets or sets the fraction of this node's breadth is added to .nodeIndent to determine any spacing at the start of the children.
     */
    nodeIndentPastParent: number;

    /**
     * Gets or sets the distance between child nodes.
     */
    nodeSpacing: number;

    /**
     * Gets or sets how the tree should be constructed from the TreeEdges connecting TreeVertexes.
     */
    path: go$EnumValue;

    /**
     * Gets or sets the spot that this node's port gets as its FromSpot.
     */
    portSpot: go$Spot;

    /**
     * Gets or sets the object holding the default values for root TreeVertexes.
     */
    rootDefaults: go$TreeVertex;

    /**
     * Gets or sets the collection of root vertexes.
     */
    roots: go$Set<go$TreeVertex | go$Node>;

    /**
     * Gets or sets the default indentation of the first child of each row, if the .alignment is not a "Center" alignment.
     */
    rowIndent: number;

    /**
     * Gets or sets the distance between rows of children.
     */
    rowSpacing: number;

    /**
     * Gets or sets whether the TreeLayout should set the ToSpot for each child node port.
     */
    setsChildPortSpot: boolean;

    /**
     * Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.
     */
    setsPortSpot: boolean;

    /**
     * Gets or sets the default Sorting policy.
     */
    sorting: go$EnumValue;

    /**
     * Gets or sets the Style for the resulting trees.
     */
    treeStyle: go$EnumValue;

    /**
     * Find associated objects to be positioned along with the TreeVertex.
     * @param {go$LayoutVertex} v
     */
    addComments(v: go$TreeVertex): void;

    /**
     * Position each separate tree.
     */
    arrangeTrees(): void;

    /**
     * Assign final property values for a TreeVertex.
     * @param {go$LayoutVertex} v
     */
    assignTreeVertexValues(v: go$TreeVertex): void;

    /**
     * This overridable method is called by commitLayout if layerStyle is LayerUniform
     * to support custom arrangement of bands or labels across each layout layer.
     * @param Array <*> layerRects an Array of Rects with the bounds of each of the "layers"
     * @param {go$Point} offset the position of the top-left corner of the banded area relative to the coordinates given by the layerRects
     */
    commitLayers(layerRects: Array<go$Rect>, offset: go$Point): void;

    /**
     * Set the fromSpot and toSpot for each Vertex, position each Node according to the Vertex position, and then position the Links.
     */
    commitLayout(): void;

    /**
     * Commit the position and routing of all edge links.
     */
    commitLinks(): void;

    /**
     * Commit the position of all vertex nodes.
     */
    commitNodes(): void;

    /**
     * Create a new LayoutNetwork of TreeVertexes and TreeEdges.
     */
    createNetwork(): go$TreeNetwork;

    /**
     * Assign the positions of the vertexes in the network.
     * @param {(go$Diagram | go$Group | go$Iterable<go$Part>)} coll A Diagram or a Group or a collection of Parts.
     */
    doLayout(coll: go$Diagram | go$Group | go$Iterable<go$Part>): void;

    /**
     * Assign initial property values for a TreeVertex.
     * @param {go$LayoutVertex} v
     */
    initializeTreeVertexValues(v: go$TreeVertex): void;

    /**
     * Position and TreeVertex.comments around the vertex.
     * @param {go$LayoutVertex} v
     */
    layoutComments(v: go$TreeVertex): void;

    /**
     * The children are positioned in a bus, only on the bottom or right side of the parent; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentBottomRightBus: go$EnumValue;

    /**
     * The children are positioned in a bus on both sides of an "aisle" where the links to them go, with the last odd child (if any) placed at the end of the aisle in the middle.
     */
    static AlignmentBus: go$EnumValue;

    /**
     * Like TreeLayout.AlignmentBus with the children arranged on both sides of an "aisle" with any last odd child placed at the end of the aisle, but the children get an TreeVertex.angle that depends on which side of the aisle they were placed.
     */
    static AlignmentBusBranching: go$EnumValue;

    /**
     * The parent is centered at the middle of the range of its immediate child nodes; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentCenterChildren: go$EnumValue;

    /**
     * The parent is centered at the middle of the range of its child subtrees; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentCenterSubtrees: go$EnumValue;

    /**
     * The parent is positioned near the last of its children; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentEnd: go$EnumValue;

    /**
     * The parent is positioned near the first of its children; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentStart: go$EnumValue;

    /**
     * The children are positioned in a bus, only on the top or left side of the parent; This value is used for TreeLayout.alignment or TreeLayout.alternateAlignment.
     */
    static AlignmentTopLeftBus: go$EnumValue;

    /**
     * Do not move each root node, but position all of their descendants relative to their root; This value is used for TreeLayout.arrangement.
     */
    static ArrangementFixedRoots: go$EnumValue;

    /**
     * Position each tree in a non-overlapping fashion by increasing X coordinates, starting at the Layout.arrangementOrigin; This value is used for TreeLayout.arrangement.
     */
    static ArrangementHorizontal: go$EnumValue;

    /**
     * Position each tree in a non-overlapping fashion by increasing Y coordinates, starting at the Layout.arrangementOrigin; This value is used for TreeLayout.arrangement.
     */
    static ArrangementVertical: go$EnumValue;

    /**
     * A simple fitting of subtrees; This value is used for TreeLayout.compaction or TreeLayout.alternateCompaction.
     */
    static CompactionBlock: go$EnumValue;

    /**
     * Only simple placement of children next to each other, as determined by their subtree breadth; This value is used for TreeLayout.compaction or TreeLayout.alternateCompaction.
     */
    static CompactionNone: go$EnumValue;

    /**
     * This default value for TreeLayout.layerStyle causes each node takes up only the depth that it needs.
     */
    static LayerIndividual: go$EnumValue;

    /**
     * This value for TreeLayout.layerStyle causes all of the children of a parent node take up the same amount of depth -- this typically causes all cousins to be aligned.
     */
    static LayerSiblings: go$EnumValue;

    /**
     * This value for TreeLayout.layerStyle causes all nodes with the same TreeVertex.level throughout the tree take up the same amount of depth.
     */
    static LayerUniform: go$EnumValue;

    /**
     * This value for TreeLayout.path causes the value of Diagram.isTreePathToChildren to effectively choose either TreeLayout.PathDestination (if true) or TreeLayout.PathSource (if false).
     */
    static PathDefault: go$EnumValue;

    /**
     * The children of a TreeVertex are its LayoutVertex.destinationVertexes, the collection of connected LayoutEdge.toVertexes; This value is used for TreeLayout.path.
     */
    static PathDestination: go$EnumValue;

    /**
     * The children of a TreeVertex are its LayoutVertex.sourceVertexes, the collection of connected LayoutEdge.fromVertexes; This value is used for TreeLayout.path.
     */
    static PathSource: go$EnumValue;

    /**
     * Lay out each child according to the sort order given by TreeVertex.comparer; This value is used for TreeLayout.sorting or TreeLayout.alternateSorting.
     */
    static SortingAscending: go$EnumValue;

    /**
     * Lay out each child in reverse sort order given by TreeVertex.comparer; This value is used for TreeLayout.sorting or TreeLayout.alternateSorting.
     */
    static SortingDescending: go$EnumValue;

    /**
     * Lay out each child in the order in which they were found; This value is used for TreeLayout.sorting or TreeLayout.alternateSorting.
     */
    static SortingForwards: go$EnumValue;

    /**
     * Lay out each child in reverse order from which they were found; This value is used for TreeLayout.sorting or TreeLayout.alternateSorting.
     */
    static SortingReverse: go$EnumValue;

    /**
     * Alternate layers of the tree have different properties, typically including the angle; This value is used for TreeLayout.treeStyle.
     */
    static StyleAlternating: go$EnumValue;

    /**
     * Just like the standard layered tree style, except that the nodes with children but no grandchildren have alternate properties; This value is used for TreeLayout.treeStyle.
     */
    static StyleLastParents: go$EnumValue;

    /**
     * The normal tree style, where all of the children of each TreeVertex are lined up horizontally or vertically; This value is used for TreeLayout.treeStyle.
     */
    static StyleLayered: go$EnumValue;

    /**
     * All of the nodes get the alternate properties, except the root node gets the default properties; This value is used for TreeLayout.treeStyle.
     */
    static StyleRootOnly: go$EnumValue;
  }

  declare class go$TreeNetwork mixins go$LayoutNetwork {}

  /**
   * This holds TreeLayout-specific information about Links.
   */
  declare class go$TreeEdge mixins go$LayoutEdge {
    /**
     * Gets or sets a Point, relative to the parent node, that may be useful in routing this link.
     */
    relativePoint: go$Point;

    /**
     * Commits the position of the Link and routes it.
     */
    commit(): void;
  }

  /**
   * This holds TreeLayout-specific information about Nodes.
   */
  declare class go$TreeVertex mixins go$LayoutVertex {
    /**
     * Gets or sets how this parent node should be aligned relative to its children.
     */
    alignment: go$EnumValue;

    /**
     * Gets or sets the actual absolute angle at which this node should grow.
     */
    angle: number;

    /**
     * Gets or sets how broad a node and its descendants should be.
     */
    breadthLimit: number;

    /**
     * Gets or sets the spot that children nodes' ports get as their ToSpot, if .setsChildPortSpot is true and the node has only a single port.
     */
    childPortSpot: go$Spot;

    /**
     * Gets or sets the logical children for this node.
     */
    children: Array<go$TreeVertex>;

    /**
     * This read-only property returns the number of immediate children this node has.
     */
    childrenCount: number;

    /**
     * Gets or sets the space to leave between the node and the comments.
     */
    commentMargin: number;

    /**
     * Gets or sets an array of Nodes that will be positioned near this node.
     */
    comments: Array<go$Node>;

    /**
     * Gets or sets the space to leave between consecutive comments.
     */
    commentSpacing: number;

    /**
     * Gets or sets how the children of this node should be packed together.
     */
    compaction: go$EnumValue;

    /**
     * Gets or sets how the children should be sorted.
     */
    comparer: (a: go$TreeVertex, b: go$TreeVertex) => number;

    /**
     * Gets or sets the number of descendants this node has.
     */
    descendantCount: number;

    /**
     * Gets or sets whether this node has been initialized as part of TreeLayout.doLayout when building the tree structures.
     */
    initialized: boolean;

    /**
     * Gets or sets the distance between this node and its children.
     */
    layerSpacing: number;

    /**
     * Gets or sets the fraction of this node's depth that may overlap with the children's layer.
     */
    layerSpacingParentOverlap: number;

    /**
     * Gets or sets the number of single-parent ancestors this node has.
     */
    level: number;

    /**
     * Gets or sets the maximum number of children of any descendant of this node.
     */
    maxChildrenCount: number;

    /**
     * Gets or sets the maximum depth of the subtrees below this node.
     */
    maxGenerationCount: number;

    /**
     * Gets or sets the distance the first child should be indented.
     */
    nodeIndent: number;

    /**
     * Gets or sets whether the first child should be indented past the parent node's breadth.
     */
    nodeIndentPastParent: number;

    /**
     * Gets or sets the distance between child nodes.
     */
    nodeSpacing: number;

    /**
     * Gets or sets the logical parent for this node.
     */
    parent: go$TreeVertex;

    /**
     * Gets or sets the spot that this node's port gets as its FromSpot, if .setsPortSpot is true and the node has only a single port.
     */
    portSpot: go$Spot;

    /**
     * Gets or sets the position of this node relative to its parent node.
     */
    relativePosition: go$Point;

    /**
     * Gets or sets the distance the first child of each row should be indented.
     */
    rowIndent: number;

    /**
     * Gets or sets the distance between rows within one layer, all sharing the same parent.
     */
    rowSpacing: number;

    /**
     * Gets or sets whether the TreeLayout should set the ToSpot for each child node port.
     */
    setsChildPortSpot: boolean;

    /**
     * Gets or sets whether the TreeLayout should set the FromSpot for this parent node port.
     */
    setsPortSpot: boolean;

    /**
     * Gets or sets whether and in what order the children should be sorted.
     */
    sorting: go$EnumValue;

    /**
     * Gets or sets the offset of this parent node relative to its whole subtree.
     */
    subtreeOffset: go$Point;

    /**
     * Gets or sets the size of the subtree (including all descendants) parented by this node.
     */
    subtreeSize: go$Size;

    /**
     * Copy inherited properties from another TreeVertex to this one.
     * @param {go$TreeVertex} copy
     */
    copyInheritedPropertiesFrom(copy: go$TreeVertex): void;
  }

  /**
   * The ActionTool is responsible for handling and dispatching mouse events on GraphObjects
   * that have GraphObject.isActionable set to true.
   * This is how one implements "controls", such as buttons or sliders or knobs, as GraphObjects
   * that can be inside Parts without interfering with the standard tool behaviors.
   */
  declare class go$ActionTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.actionTool.
     */
    constructor(): this;

    /**
     * This tool can run when there is a mouse-down on an object with GraphObject.isActionable true or if the object is within a Panel that "isActionable".
     */
    canStart(): boolean;

    /**
     * Call the GraphObject.actionCancel event if defined on the current object.
     */
    doCancel(): void;

    /**
     * If there is a GraphObject found with GraphObject.isActionable set to true, call that object's GraphObject.actionDown event, if it exists.
     */
    doMouseDown(): void;

    /**
     * If this tool is active call GraphObject.actionMove, if it exists, on the active object.
     */
    doMouseMove(): void;

    /**
     * Calls the GraphObject.actionUp event if defined, then effectively calls Tool.standardMouseClick to perform the normal click behaviors, and then stops this tool.
     */
    doMouseUp(): void;
  }

  /**
   * The ClickCreatingTool lets the user create a node by clicking where they want the new node to be.
   * By default a double-click is required to start this tool;
   * set .isDoubleClick to false if you want a single-click to create a node.
   */
  declare class go$ClickCreatingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.clickCreatingTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets a data object that will be copied and added to the diagram's model each time this tool executes. The value must be an Object or null.
     */
    archetypeNodeData: any;

    /**
     * Gets or sets whether a double click rather than a single-click is required to insert a new Part at the mouse-up point.
     */
    isDoubleClick: boolean;

    /**
     * This tool can run when the diagram is not read-only and supports creating new nodes, and when there has been a click (or double-click if .isDoubleClick is true) in the background of the diagram (not on a Part), and .archetypeNodeData is an object that can be copied and added to the model.
     */
    canStart(): boolean;

    /**
     * Upon a click, call .insertPart and stop this tool.
     */
    doMouseUp(): void;

    /**
     * Create a node by adding a copy of the .archetypeNodeData object to the diagram's model, assign its Part.location to be the given point, and select the new part.
     * @param {go$Point} loc a Point in document coordinates.
     */
    insertPart(loc: go$Point): go$Part;
  }

  /**
   * The ClickSelectingTool selects and deselects Parts when there is a click.
   * It does this by calling Tool.standardMouseSelect.
   * It is also responsible for handling and dispatching click events on GraphObjects
   * by calling Tool.standardMouseClick.
   */
  declare class go$ClickSelectingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.clickSelectingTool.
     */
    constructor(): this;

    /**
     * This tool can run when there was a click.
     */
    canStart(): boolean;

    /**
     * Upon a click, this calls Tool.standardMouseSelect to change the Diagram.selection collection, then calls Tool.standardMouseClick to perform the normal click behaviors, and then stops this tool.
     */
    doMouseUp(): void;
  }

  /**
   * The ContextMenuTool is used to create and show a context menu.
   * It automatically disables any browser context menu.
   */
  declare class go$ContextMenuTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.contextMenuTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets the currently showing context menu, or null if there is none.
     */
    currentContextMenu: go$Adornment;

    /**
     * Gets or sets the GraphObject found at the mouse point that has a context menu.
     */
    currentObject: go$GraphObject;

    /**
     * This read-only property returns the original mouse-down point in document coordinates.
     */
    mouseDownPoint: go$Point;

    /**
     * Return true if it's a mouse right click that hasn't moved Tool.isBeyondDragSize and that is on a GraphObject with a GraphObject.contextMenu.
     */
    canStart(): boolean;

    /**
     * Do nothing, activation is special and relies on doMouseUp
     */
    doActivate(): void;

    /**
     * Handle mouse-enter, mouse-over, and mouse-leave events.
     */
    doMouseMove(): void;

    /**
     * If there is something found by .findObjectWithContextMenu, call .showContextMenu with that object's GraphObject.contextMenu or Diagram.contextMenu.
     */
    doMouseUp(): void;

    /**
     * Find a GraphObject at the current mouse point with a GraphObject.contextMenu, or return the Diagram if there is a Diagram.contextMenu.
     */
    findObjectWithContextMenu(): go$GraphObject | go$Diagram;

    /**
     * Hide any context menu.
     */
    hideContextMenu(): void;

    /**
     * Hide the default context menu.
     */
    hideDefaultContextMenu(): void;

    /**
     * This is called by .showContextMenu to position the context menu within the viewport.
     * @param {go$Adornment} contextmenu
     * @param {go$GraphObject} obj
     */
    positionContextMenu(contextmenu: go$Adornment, obj: go$GraphObject): void;

    /**
     * Show an Adornment as a context menu.
     * @param {go$Adornment} contextmenu
     * @param {go$GraphObject} obj
     */
    showContextMenu(contextmenu: go$Adornment, obj: go$GraphObject): void;

    /**
     * Show a series of HTML elements acting as a context menu.
     */
    showDefaultContextMenu(): void;
  }

  /**
   * This helper structure for DraggingTool holds the original location Point.
   */
  declare interface go$DraggingInfo {
    point: go$Point;
  }

  /**
   * The DraggingTool is used to move or copy selected parts with the mouse.
   * Dragging the selection moves parts for which Part.canMove is true.
   * If the user holds down the Control key, this tool will make a copy of the parts being dragged,
   * for those parts for which Part.canCopy is true.
   */
  declare class go$DraggingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.draggingTool, which you can modify.
     */
    constructor(): this;

    /**
     * This read-only property returns the collection of Parts that this tool has copied.
     */
    copiedParts: go$Map<go$Part, go$DraggingInfo>;

    /**
     * Gets or sets whether for a copying operation the extended selection is copied or only the selected parts.
     */
    copiesEffectiveCollection: boolean;

    /**
     * This read-only property returns the Part found at the mouse point.
     */
    currentPart: go$Part;

    /**
     * On touch gestures only, this property gets or sets the time in milliseconds for which the mouse must be stationary before this tool can be started.
     */
    delay: number;

    /**
     * This read-only property returns the collection of Parts being dragged.
     */
    draggedParts: go$Map<go$Part, go$DraggingInfo>;

    /**
     * Gets or sets whether the user can drag a single Link, disconnecting it from its connected nodes and possibly connecting it to valid ports when the link is dropped.
     */
    dragsLink: boolean;

    /**
     * Gets or sets whether moving or copying a node also includes all of the node's tree children and their descendants, along with the links to those additional nodes.
     */
    dragsTree: boolean;

    /**
     * Gets or sets the size of the grid cell used when snapping during a drag if the value of .isGridSnapEnabled is true.
     */
    gridSnapCellSize: go$Size;

    /**
     * Gets or sets the Spot that specifies what point in the grid cell dragged parts snap to, if the value of .isGridSnapEnabled is true.
     */
    gridSnapCellSpot: go$Spot;

    /**
     * Gets or sets the snapping grid's origin point, in document coordinates, if the value of .isGridSnapEnabled is true.
     */
    gridSnapOrigin: go$Point;

    /**
     * Gets or sets whether for any internal copying operation is permitted by control-drag-and-drop.
     */
    isCopyEnabled: boolean;

    /**
     * Gets or sets whether the DraggingTool snaps objects to grid points.
     */
    isGridSnapEnabled: boolean;

    /**
     * Gets or sets whether the DraggingTool snaps objects to grid points during the drag.
     */
    isGridSnapRealtime: boolean;

    /**
     * Gets or sets the mouse point from which parts start to move.
     */
    startPoint: go$Point;

    /**
     * This tool can run if the diagram allows selection and moves/copies/dragging-out, if the mouse has moved far enough away to be a drag and not a click, and if .findDraggablePart has found a selectable part at the mouse-down point.
     */
    canStart(): boolean;

    /**
     * Find the actual collection of nodes and links to be moved or copied, given an initial collection.
     * @param {go$Iterable<go$Part>} parts A Set or List of Parts.
     */
    computeEffectiveCollection(
      parts: go$Iterable<go$Part>
    ): go$Map<go$Part, go$DraggingInfo>;

    /**
     * This method computes the new location for a Node or simple Part, given a new desired location and an optional Map of dragged parts, taking any grid-snapping into consideration, any Part.dragComputation function, and any Part.minLocation and Part.maxLocation.
     * @param {go$Part} n
     * @param {go$Point} newloc
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} draggedparts an optional Map mapping Parts to JavaScript Objects that have a "point" property remembering the original location of that Part.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} result an optional Point that is modified and returned
     */
    computeMove(
      n: go$Part,
      newloc: go$Point,
      draggedparts?: go$Map<go$Part, go$DraggingInfo>,
      result?: go$Point
    ): go$Point;

    /**
     * Start the dragging operation.
     */
    doActivate(): void;

    /**
     * Abort any dragging operation.
     */
    doCancel(): void;

    /**
     * Stop the dragging operation by stopping the transaction and cleaning up any temporary state.
     */
    doDeactivate(): void;

    /**
 * Perform any additional side-effects during a drag, whether an internal move or copy or an external drag, that may affect the existing non-moved object(s).
 * @param {go$Point} pt a Point in document coordinates.
 * @param {go$GraphObject} obj the GraphObject at the point,
excluding what is being dragged or temporary objects;
the argument may be null if the drag is occurring in the background of the diagram.
Use GraphObject.part to get the Node or Part at the root of
the visual tree of the stationary object.
 */
    doDragOver(pt: go$Point, obj: go$GraphObject): void;

    /**
 * Perform any additional side-effects after a drop, whether an internal move or copy or an external drop, that may affect the existing non-moved object(s).
 * @param {go$Point} pt a Point in document coordinates.
 * @param {go$GraphObject} obj the GraphObject where the drop occurred,
excluding what was dropped or temporary objects;
the argument may be null if the drop occurred in the background of the diagram.
Use GraphObject.part to get the Node or Part at the root of
the visual tree of the stationary object.
 */
    doDropOnto(pt: go$Point, obj: go$GraphObject): void;

    /**
     * Handle switching between copying and moving modes as the Control key is pressed or released.
     */
    doKeyDown(): void;

    /**
     * Handle switching between copying and moving modes as the Control key is pressed or released.
     */
    doKeyUp(): void;

    /**
     * Move the .draggedParts (or if copying, the .copiedParts) to follow the current mouse point.
     */
    doMouseMove(): void;

    /**
     * On a mouse-up finish moving or copying the effective selection.
     */
    doMouseUp(): void;

    /**
     * Return the selectable and movable/copyable Part at the mouse-down point.
     */
    findDraggablePart(): go$Part;

    /**
     * This predicate is true when the diagram allows objects to be copied and inserted, and some object in the selection is copyable, and the user is holding down the Control key.
     */
    mayCopy(): boolean;

    /**
     * This predicate is true when the diagram allows objects to be moved, and some object in the selection is movable.
     */
    mayMove(): boolean;

    /**
     * Move a collection of Parts by a given offset.
     * @param {go$Map} parts a Map mapping Parts to JavaScript Objects that have a "point" property remembering the original location of that Part.
     * @param {go$Point} offset
     * @param {boolean} check Whether to check Part.canMove on each part.
     */
    moveParts(
      parts: go$Map<go$Part, go$DraggingInfo>,
      offset: go$Point,
      check: boolean
    ): void;

    /**
     * This override prevents the Control modifier unselecting an already selected part.
     */
    standardMouseSelect(): void;
  }

  /**
   * The DragSelectingTool lets the user select multiple parts with a rectangular area.
   * There is a temporary part, the .box,
   * that shows the current area encompassed between the mouse-down
   * point and the current mouse point.
   * The default drag selection box is a blue rectangle.
   * You can change the .box to customize its appearance -- see its documentation for an example.
   */
  declare class go$DragSelectingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.dragSelectingTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets the Part used as the "rubber-band selection box" that is stretched to follow the mouse, as feedback for what area will be passed to .selectInRect upon a mouse-up.
     */
    box: go$Part;

    /**
     * Gets or sets the time in milliseconds for which the mouse must be stationary before this tool can be started.
     */
    delay: number;

    /**
     * Gets or sets whether a selectable Part may be only partly or must be completely enclosed by the rectangle given to .selectInRect.
     */
    isPartialInclusion: boolean;

    /**
     * This tool can run when the diagram allows selection, there has been delay of at least .delay milliseconds after the mouse-down before a mouse-move, there has been a mouse-drag far enough away not to be a click, and there is no selectable part at the mouse-down point.
     */
    canStart(): boolean;

    /**
     * This just returns a Rect stretching from the mouse-down point to the current mouse point.
     */
    computeBoxBounds(): go$Rect;

    /**
     * Capture the mouse and show the .box.
     */
    doActivate(): void;

    /**
     * Release the mouse and remove any .box.
     */
    doDeactivate(): void;

    /**
     * Update the .box's position and size according to the value of .computeBoxBounds.
     */
    doMouseMove(): void;

    /**
     * Call .selectInRect with the value of a call to .computeBoxBounds.
     */
    doMouseUp(): void;

    /**
     * This method is called to select some parts within the area of a given rectangle.
     * @param {go$Rect} r
     */
    selectInRect(r: go$Rect): void;
  }

  /**
   * This abstract class is the base class for the LinkingTool and RelinkingTool classes.
   * This class includes properties for defining and accessing any temporary nodes and temporary link
   * that are used during any linking operation, as well as access to the existing diagram's nodes and link
   * (if any) that are involved with the linking operation.
   */
  declare class go$LinkingBaseTool mixins go$Tool {
    /**
     * Don't construct this directly -- this is an abstract class.
     */
    constructor(): this;

    /**
     * Gets whether the linking operation is in the forwards direction, connecting from the "From" port to the "To" port.
     */
    isForwards: boolean;

    /**
     * Gets or sets whether it is valid to have partly or completely unconnected links.
     */
    isUnconnectedLinkValid: boolean;

    /**
     * Gets or sets a predicate that determines whether or not a new link between two ports would be valid.
     */
    linkValidation: (
      fromNode: go$Node,
      fromPort: go$GraphObject,
      toNode: go$Node,
      toPort: go$GraphObject,
      link: go$Link
    ) => boolean;

    /**
     * Gets or sets the original Node from which the new link is being drawn or from which the .originalLink was connected when being relinked.
     */
    originalFromNode: go$Node;

    /**
     * Gets or sets the GraphObject that is the port in the .originalFromNode.
     */
    originalFromPort: go$GraphObject;

    /**
     * Gets or sets the original Link being reconnected by the RelinkingTool.
     */
    originalLink: go$Link;

    /**
     * Gets or sets the original Node to which the new link is being drawn or to which the .originalLink was connected when being relinked.
     */
    originalToNode: go$Node;

    /**
     * Gets or sets the GraphObject that is the port in the .originalToNode.
     */
    originalToPort: go$GraphObject;

    /**
     * Gets or sets the distance at which link snapping occurs.
     */
    portGravity: number;

    /**
     * Gets or sets a function that is called as the tool targets the nearest valid port.
     */
    portTargeted: (
      realNode: go$Node,
      realPort: go$GraphObject,
      tempNode: go$Node,
      tempPort: go$GraphObject,
      toend: boolean
    ) => void;

    /**
     * Gets or sets a proposed GraphObject port for connecting a link.
     */
    targetPort: go$GraphObject;

    /**
     * Gets or sets the temporary Node at the "from" end of the .temporaryLink while the user is drawing or reconnecting a link.
     */
    temporaryFromNode: go$Node;

    /**
     * Gets or sets the GraphObject that is the port at the "from" end of the .temporaryLink while the user is drawing or reconnecting a link.
     */
    temporaryFromPort: go$GraphObject;

    /**
     * Gets or sets the temporary Link that is shown while the user is drawing or reconnecting a link.
     */
    temporaryLink: go$Link;

    /**
     * Gets or sets the temporary Node at the "to" end of the .temporaryLink while the user is drawing or reconnecting a link.
     */
    temporaryToNode: go$Node;

    /**
     * Gets or sets the GraphObject that is the port at the "to" end of the .temporaryLink while the user is drawing or reconnecting a link.
     */
    temporaryToPort: go$GraphObject;

    /**
     * Make a temporary port look and act like a real one.
     * @param {go$Node} realnode
     * @param {go$GraphObject} realport
     * @param {go$Node} tempnode
     * @param {go$GraphObject} tempport
     * @param {boolean} toend
     */
    copyPortProperties(
      realnode: go$Node,
      realport: go$GraphObject,
      tempnode: go$Node,
      tempport: go$GraphObject,
      toend: boolean
    ): void;

    /**
     * Mouse movement results in a temporary node moving to where a valid target port is located, or to where the mouse is if there is no valid target port nearby.
     */
    doMouseMove(): void;

    /**
     * Find a port with which the user could complete a valid link.
     * @param {boolean} toend true if looking for a "to" port.
     */
    findTargetPort(toend: boolean): go$GraphObject;

    /**
     * This predicate is true if both argument ports are in the same Node.
     * @param {go$GraphObject} fromport
     * @param {go$GraphObject} toport
     */
    isInSameNode(fromport: go$GraphObject, toport: go$GraphObject): boolean;

    /**
     * This predicate is true if there is a link in the diagram going from the given port to the given port
     * @param {go$GraphObject} fromport
     * @param {go$GraphObject}
     */
    isLinked(fromport: go$GraphObject, toport: go$GraphObject): boolean;

    /**
     * Checks whether a proposed link would be valid according to Diagram.validCycle.
     * This does not distinguish between different ports on a node, so this method does not need to take port arguments.
     * This is called by isValidLink.
     * @param {go$Node} from
     * @param {go$Node} to
     * @param {go$Link} ignore may be null; this is useful during relinking to ignore the originalLink
     * @return {boolean}
     */
    isValidCycle(from: go$Node, to: go$Node, ignore: go$Link): boolean;

    /**
 * This predicate is true if it is permissible to connect a link from a given node/port.
 * @param {go$Node} fromnode
 * @param {go$GraphObject} fromport False if the node is in a Layer that does not Layer.allowLink.
False if the port's GraphObject.fromLinkable is either false or null.
False if the number of links connected to the port would exceed the port's GraphObject.fromMaxLinks.
Otherwise true.
 */
    isValidFrom(fromnode: go$Node, fromport: go$GraphObject): boolean;

    /**
 * This predicate should be true when it is logically valid to connect a new link from one node/port to another node/port.
 * @param {go$Node} fromnode the "from" Node.
 * @param {go$GraphObject} fromport the "from" GraphObject port.
 * @param {go$Node} tonode the "to" Node.
 * @param {go$GraphObject} toport the "to" GraphObject port.
False if .isValidFrom is false for the "from" node/port.
False if .isValidTo is false for the "to" node/port.
False if .isInSameNode is true unless GraphObject.fromLinkableSelfNode
and GraphObject.toLinkableSelfNode are true for the two ports.
False if .isLinked is true unless GraphObject.fromLinkableDuplicates
and GraphObject.toLinkableDuplicates are true for the two ports.
False if trying to link to the link's own label node(s).
If .linkValidation is a predicate and if it returns false, this predicate returns false.
Otherwise this predicate is true.
 */
    isValidLink(
      fromnode: go$Node,
      fromport: go$GraphObject,
      tonode: go$Node,
      toport: go$GraphObject
    ): boolean;

    /**
 * This predicate is true if it is permissible to connect a link to a given node/port.
 * @param {go$Node} tonode
 * @param {go$GraphObject} toport False if the node is in a Layer that does not Layer.allowLink.
False if the port's GraphObject.toLinkable is either false or null.
False if the number of links connected from the port would exceed the port's GraphObject.toMaxLinks.
Otherwise true.
 */
    isValidTo(tonode: go$Node, toport: go$GraphObject): boolean;

    /**
     * Reset a temporary port's properties to neutral values when there is no target port.
     * @param {go$Node} tempnode
     * @param {go$GraphObject} tempport
     * @param {boolean} toend
     */
    setNoTargetPortProperties(
      tempnode: go$Node,
      tempport: go$GraphObject,
      toend: boolean
    ): void;
  }

  /**
   */
  declare class go$LinkingTool mixins go$LinkingBaseTool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.linkingTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets an optional node data object representing a link label, that is copied by .insertLink and added to the GraphLinksModel when creating a new Link. The value must be an Object or null.
     */
    archetypeLabelNodeData: any;

    /**
     * Gets or sets a data object that is copied by .insertLink and added to the GraphLinksModel when creating a new Link. The value must be an Object or null.
     */
    archetypeLinkData: any;

    /**
     * Gets or sets the direction in which new links may be drawn.
     */
    direction: go$EnumValue;

    /**
     * Gets or sets the GraphObject at which .findLinkablePort should start its search.
     */
    startObject: go$GraphObject;

    /**
     * This tool can run when the diagram allows linking, the model is modifiable, the left-button mouse drag has moved far enough away to not be a click, and when .findLinkablePort has returned a valid port.
     */
    canStart(): boolean;

    /**
     * Start the linking operation.
     */
    doActivate(): void;

    /**
     * Finishing the linking operation stops the transaction, releases the mouse, and resets the cursor.
     */
    doDeactivate(): void;

    /**
     * A mouse-up ends the linking operation; if there is a valid .targetPort nearby, this adds a new Link by calling .insertLink.
     */
    doMouseUp(): void;

    /**
     * Return the GraphObject at the mouse-down point, if it is part of a node and if it is valid to link with it.
     */
    findLinkablePort(): go$GraphObject;

    /**
     * Make a copy of the .archetypeLinkData, set its node and port properties, and add it to the model.
     * @param {go$Node} fromnode
     * @param {go$GraphObject} fromport
     * @param {go$Node} tonode
     * @param {go$GraphObject} toport
     */
    insertLink(
      fromnode: go$Node,
      fromport: go$GraphObject,
      tonode: go$Node,
      toport: go$GraphObject
    ): go$Link;

    /**
     * This value for LinkingTool.direction indicates that users may draw new links backwards only.
     */
    static BackwardsOnly: go$EnumValue;

    /**
     * This value for LinkingTool.direction indicates that users may draw new links in either direction.
     */
    static Either: go$EnumValue;

    /**
     * This value for LinkingTool.direction indicates that users may draw new links forwards only.
     */
    static ForwardsOnly: go$EnumValue;
  }

  /**
   * The LinkReshapingTool is used to interactively change the route of a Link.
   * This tool makes use of an Adornment, shown when the adorned Link is selected,
   * that includes some number of reshape handles.
   * This tool conducts a transaction while the tool is active.
   * A successful reshaping will result in a "LinkReshaped" DiagramEvent and a "LinkReshaping" transaction.
   */
  declare class go$LinkReshapingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.linkReshapingTool, which you can modify.
     */
    constructor(): this;

    /**
     * This read-only property returns the Link that is being routed manually.
     */
    adornedLink: go$Link;

    /**
     * This read-only property returns the GraphObject that is the tool handle being dragged by the user.
     */
    handle: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a reshape handle at each movable point in the selected link's route.
     */
    handleArchetype: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a resegment handle at each mid point in the selected Link's route.
     */
    midHandleArchetype: go$GraphObject;

    /**
     * This read-only property returns the Point that was the original location of the handle that is being dragged to reshape the Link.
     */
    originalPoint: go$Point;

    /**
     * This read-only property returns the List of Points that was the original route of the Link that is being reshaped.
     */
    originalPoints: go$List<go$Point>;

    /**
     * This tool may run when there is a mouse-down event on a reshape handle.
     */
    canStart(): boolean;

    /**
     * This is called by .doMouseMove and .doMouseUp to limit the input point before calling .reshape.
     * @param {go$Point} p
     */
    computeReshape(p: go$Point): go$Point;

    /**
     * Start reshaping, if .findToolHandleAt finds a reshape handle at the mouse down point.
     */
    doActivate(): void;

    /**
     * Restore the link route to be the original points and stop this tool.
     */
    doCancel(): void;

    /**
     * This stops the current reshaping operation with the link route shaped the way it is.
     */
    doDeactivate(): void;

    /**
     * Call .reshape with a new point determined by the mouse to change the route of the .adornedLink.
     */
    doMouseMove(): void;

    /**
     * Reshape the route with a point based on the most recent mouse point by calling .reshape, and then raise a "LinkReshaped" DiagramEvent before stopping this tool.
     */
    doMouseUp(): void;

    /**
     * Get the permitted reshaping behavior for a particular reshape handle.
     * @param {go$GraphObject} obj a reshape handle in the "LinkReshaping" Adornment.
     */
    getReshapingBehavior(obj: go$GraphObject): go$EnumValue;

    /**
     * Set the permitted reshaping behavior for a particular reshape handle.
     * @param {go$GraphObject} obj a reshape handle in the "LinkReshaping" Adornment.
     * @param {go$EnumValue} behavior one of LinkReshapingTool.All, .Vertical, .Horizontal, or .None
     */
    setReshapingBehavior(obj: go$GraphObject, behavior: go$EnumValue): void;

    /**
     * Change the route of the .adornedLink by moving the point corresponding to the current .handle to be at the given Point.
     * @param {go$Point} newPoint
     */
    reshape(newPoint: go$Point): void;

    /**
     * Show an Adornment with reshape handles at each of the interesting points of the link's route, if the link is selected and visible and if Part.canReshape is true.
     * @param {go$Part} part
     */
    updateAdornments(part: go$Part): void;

    /**
     * Allow dragging in any direction.
     */
    static All: go$EnumValue;

    /**
     * Allow only horizontal (left-and-right) dragging.
     */
    static Horizontal: go$EnumValue;

    /**
     * Disallow dragging.
     */
    static None: go$EnumValue;

    /**
     * Allow only vertical (up-and-down) dragging.
     */
    static Vertical: go$EnumValue;
  }

  /**
   * The PanningTool supports manual panning, where the user can shift the
   * Diagram.position by dragging the mouse.
   */
  declare class go$PanningTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.panningTool.
     */
    constructor(): this;

    /**
     * Gets or sets whether panning actions will allow events to bubble instead of panning in the diagram.
     */
    bubbles: boolean;

    /**
     * This read-only property returns the Point that was the original value of Diagram.position when the panning operation started.
     */
    originalPosition: go$Point;

    /**
     * This tool can run when the diagram allows scrolling and the mouse has been dragged with the left button far enough away from the mouse-down point to avoid being a click.
     */
    canStart(): boolean;

    /**
     * Capture the mouse, change the diagram cursor, and remember the Diagram.position.
     */
    doActivate(): void;

    /**
     * Restore the Diagram.position to what it was when this tool activated.
     */
    doCancel(): void;

    /**
     * Release the mouse and restore the default diagram cursor.
     */
    doDeactivate(): void;

    /**
     * Modify the Diagram.position according to how much the mouse has moved.
     */
    doMouseMove(): void;

    /**
     * Modify the Diagram.position according to how much the mouse has moved.
     */
    doMouseUp(): void;
  }

  /**
   * The RelinkingTool allows the user to reconnect an existing Link
   * if the Link.relinkableTo and/or Link.relinkableFrom properties are true.
   */
  declare class go$RelinkingTool mixins go$LinkingBaseTool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.relinkingTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets a small GraphObject that is copied as a relinking handle for the selected link path at the "from" end of the link.
     */
    fromHandleArchetype: go$GraphObject;

    /**
     * This read-only property returns the GraphObject that is the tool handle being dragged by the user.
     */
    handle: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a relinking handle for the selected link path at the "to" end of the link.
     */
    toHandleArchetype: go$GraphObject;

    /**
     * This tool can run when the diagram allows relinking, the model is modifiable, and there is a relink handle at the mouse-down point.
     */
    canStart(): boolean;

    /**
     * Make a temporary link look and act like the real Link being relinked.
     * @param {go$Link} reallink
     * @param {go$Link} templink
     */
    copyLinkProperties(reallink: go$Link, templink: go$Link): void;

    /**
     * Start the relinking operation.
     */
    doActivate(): void;

    /**
     * Finishing the linking operation stops the transaction, releases the mouse, and resets the cursor.
     */
    doDeactivate(): void;

    /**
     * A mouse-up ends the relinking operation; if there is a valid .targetPort nearby, this modifies the old link to connect with the target port.
     */
    doMouseUp(): void;

    /**
     * Modify an existing Link to connect to a new node and port.
     * @param {go$Link} existinglink
     * @param {go$Node} newnode the Node to connect to or from.
     * @param {go$GraphObject} newport the GraphObject port to connect to or from.
     * @param {boolean} toend If true, this modifies the link's "to" node and port; otherwise it modifies the "from" node and port.
     */
    reconnectLink(
      existinglink: go$Link,
      newnode: go$Node,
      newport: go$GraphObject,
      toend: boolean
    ): boolean;

    /**
     * Show an Adornment for each end of the Link that the user may reconnect.
     * @param {go$Part} part
     */
    updateAdornments(part: go$Part): void;
  }

  /**
   * The ResizingTool is used to interactively change the size of a GraphObject
   * in the selected Part or Node.
   * This tool does not operate on Links.
   */
  declare class go$ResizingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.resizingTool, which you can modify.
     */
    constructor(): this;

    /**
     * This read-only property returns the GraphObject that is being resized.
     */
    adornedObject: go$GraphObject;

    /**
     * Gets or sets the width and height multiples with which the user must resize.
     */
    cellSize: go$Size;

    /**
     * This read-only property returns the GraphObject that is the tool handle being dragged by the user.
     */
    handle: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a resizing handle for the selected part.
     */
    handleArchetype: go$GraphObject;

    /**
     * Gets or sets whether the ResizingTool snaps object sizes to the diagram's background grid during the resize.
     */
    isGridSnapEnabled: boolean;

    /**
     * Gets or sets the maximum size to which the user can resize.
     */
    maxSize: go$Size;

    /**
     * Gets or sets the minimum size to which the user can resize.
     */
    minSize: go$Size;

    /**
     * This read-only property returns the Size that was the original value of the GraphObject.desiredSize of the element that is being resized.
     */
    originalDesiredSize: go$Size;

    /**
     * This read-only property returns the Point that was the original value of the Part.location of the Part that is being resized.
     */
    originalLocation: go$Point;

    /**
     * This tool may run when there is a mouse-down event on a resize handle, the diagram is not read-only and it allows resizing, the left mouse button is being used, and this tool's adornment's resize handle is at the current mouse point.
     */
    canStart(): boolean;

    /**
     * The size should be a multiple of the value returned by this method.
     */
    computeCellSize(): go$Size;

    /**
     * The effective maximum resizing size is the minimum of the .maxSize and the .adornedObject's GraphObject.maxSize.
     */
    computeMaxSize(): go$Size;

    /**
     * The effective minimum resizing size is the maximum of .minSize and the .adornedObject's GraphObject.minSize.
     */
    computeMinSize(): go$Size;

    /**
     * Given a Spot in the original bounds of the object being resized and a new Point, compute the new Rect.
     * @param {go$Point} newPoint a Point in local coordinates.
     * @param {go$Spot} spot the alignment spot of the handle being dragged.
     * @param {go$Size} min the result of the call to .computeMinSize.
     * @param {go$Size} max the result of the call to .computeMaxSize.
     * @param {go$Size} cell the result of the call to .computeCellSize.
     * @param {boolean} reshape true if the new size may change the aspect ratio from that of the natural bounds of the .adornedObject.
     */
    computeResize(
      newPoint: go$Point,
      spot: go$Spot,
      min: go$Size,
      max: go$Size,
      cell: go$Size,
      reshape: boolean
    ): go$Rect;

    /**
     * Capture the mouse, remember the object's original bounds, and start a transaction.\
     */
    doActivate(): void;

    /**
     * Restore the original GraphObject's size.
     */
    doCancel(): void;

    /**
     * Stop the current transaction and release the mouse.
     */
    doDeactivate(): void;

    /**
     * Call .resize with a new size determined by the current mouse point.
     */
    doMouseMove(): void;

    /**
     * Call .resize with the final bounds based on the most recent mouse point, commit the transaction, and raise the "PartResized" DiagramEvent.
     */
    doMouseUp(): void;

    /**
     * Change the size of the selected part's Part.resizeObject to have the given bounds.
     * @param {go$Rect} newr
     */
    resize(newr: go$Rect): void;

    /**
     * Show an Adornment with the resize handles at points along the edge of the bounds of the selected Part's Part.resizeObject.
     * @param {go$Part} part
     */
    updateAdornments(part: go$Part): void;
  }

  /**
   * The RotatingTool is used to interactively change the GraphObject.angle of a GraphObject.
   * This tool allows the user to rotate the Part.rotateObject of the selected Part.
   * Normally this works with Parts or Nodes; it does not make sense for Links.
   * The Part must be Part.rotatable, which is false by default.
   */
  declare class go$RotatingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.rotatingTool, which you can modify.
     */
    constructor(): this;

    /**
     * This read-only property returns the GraphObject that is being rotated.
     */
    adornedObject: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a rotation handle for the selected part.
     */
    handle: go$GraphObject;

    /**
     * Gets or sets a small GraphObject that is copied as a rotation handle for the selected part.
     */
    handleArchetype: go$GraphObject;

    /**
     * This read-only property returns the angle that was the original value of the GraphObject.angle of the GraphObject that is being rotated.
     */
    originalAngle: number;

    /**
     * Gets or sets the the closeness to a desired angle at which the angle is "snapped to".
     */
    snapAngleEpsilon: number;

    /**
     * Gets or sets the preferred angles for the selected object.
     */
    snapAngleMultiple: number;

    /**
     * This tool may run when there is a mouse-down event on a rotate handle, the diagram is not read-only and it allows rotation, the left mouse button is being used, and this tool's adornment's rotate handle is at the current mouse point.
     */
    canStart(): boolean;

    /**
     * Compute the new angle given a point.
     * @param {go$Point} newPoint
     */
    computeRotate(newPoint: go$Point): number;

    /**
     * Capture the mouse, remember the original GraphObject.angle, and start a transaction.
     */
    doActivate(): void;

    /**
     * Restore the original GraphObject.angle of the adorned object.
     */
    doCancel(): void;

    /**
     * Stop the current transaction and release the mouse.
     */
    doDeactivate(): void;

    /**
     * Call .rotate with a new angle determined by the current mouse point.
     */
    doMouseMove(): void;

    /**
     * Call .rotate with an angle based on the most recent mouse point, commit the transaction, and raise the "PartRotated" DiagramEvent.
     */
    doMouseUp(): void;

    /**
     * Change the angle of the selected part's Part.rotateObject.
     * @param {number} newangle
     */
    rotate(newangle: number): void;

    /**
     * Show an Adornment with a rotate handle at a point to the side of the adorned object if the part is selected and visible and if Part.canRotate() is true.
     * @param {go$Part} part
     */
    updateAdornments(part: go$Part): void;
  }

  /**
   * The TextEditingTool is used to let the user interactively edit text in place.
   * You do not normally need to create an instance of this tool
   * because one already exists as the ToolManager.clickSelectingTool.
   */
  declare class go$TextEditingTool mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the ToolManager.textEditingTool, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets the HTML element that edits the text.
     */
    currentTextEditor: Element;

    /**
     * Gets or sets the HTML element that edits the text.
     */
    defaultTextEditor: Element;

    /**
     * Gets or sets how user gestures can start in-place editing of text.
     */
    starting: go$EnumValue;

    /**
     * Gets or sets the TextBlock that is being edited.
     */
    textBlock: go$TextBlock;

    /**
     * Gets or sets the predicate that determines whether or not a string of text is valid.
     */
    textValidation: (
      tb: go$TextBlock,
      oldstr: string,
      newstr: string
    ) => boolean;

    /**
 * Finish editing by trying to accept the new text.
 * @param {go$EnumValue} reason The reason must be either TextEditingTool.LostFocus,
TextEditingTool.MouseDown, TextEditingTool.Tab, or TextEditingTool.Enter.
 */
    acceptText(reason: go$EnumValue): void;

    /**
     * This may run when there is a mouse-click on a TextBlock for which the TextBlock.editable property is true in a Part that Part.isSelected.
     */
    canStart(): boolean;

    /**
     * Start editing the text for a TextBlock.
     */
    doActivate(): void;

    /**
     * Abort any text editing operation.
     */
    doCancel(): void;

    /**
     * Release the mouse.
     */
    doDeactivate(): void;

    /**
     * A click (mouse up) calls TextEditingTool.doActivate if this tool is not already active and if TextEditingTool.canStart returns true.
     */
    doMouseDown(): void;

    /**
     * A click (mouse up) calls TextEditingTool.doActivate if this tool is not already active and if TextEditingTool.canStart returns true.
     */
    doMouseUp(): void;

    /**
     * This calls TextEditingTool.doActivate if there is a TextBlock supplied.
     */
    doStart(): void;

    /**
     * This predicate checks any TextBlock.textValidation predicate and this tool's .textValidation predicate to make sure the TextBlock.text property may be set to the new string.
     * @param {go$TextBlock} textblock the TextBlock that is being edited.
     * @param {string} oldstr the previous string value.
     * @param {string} newstr the proposed new string value.
     */
    isValidText(
      textblock: go$TextBlock,
      oldstr: string,
      newstr: string
    ): boolean;

    /**
     * The user has typed ENTER.
     */
    static Enter: go$EnumValue;

    /**
     * The text editing control has lost focus.
     */
    static LostFocus: go$EnumValue;

    /**
     * The user has clicked somewhere else in the diagram.
     */
    static MouseDown: go$EnumValue;

    /**
     * A single click on a TextBlock with TextBlock.editable property set to true will start in-place editing.
     */
    static SingleClick: go$EnumValue;

    /**
     * A single click on a TextBlock with TextBlock.editable property set to true will start in-place editing, but only if the Part that the TextBlock is in is already selected.
     */
    static SingleClickSelected: go$EnumValue;

    /**
     * The user has typed TAB.
     */
    static Tab: go$EnumValue;
  }

  /**
   * Tools handle mouse events and keyboard events.
   * The currently running tool, Diagram.currentTool, receives all input events from the Diagram.
   */
  declare class go$Tool {
    /**
     * Don't construct this directly -- this is an abstract class.
     */
    constructor(): this;

    /**
     * This read-only property returns the Diagram that owns this tool and for which this tool is handling input events.
     */
    diagram: go$Diagram;

    /**
     * Gets or sets whether this tool is started and is actively doing something.
     */
    isActive: boolean;

    /**
     * Gets or sets whether this tool can be started by a mouse event.
     */
    isEnabled: boolean;

    /**
     * Gets or sets the name of this tool.
     */
    name: string;

    /**
     * Gets or sets the name of the transaction to be committed by .stopTransaction; if null, the transaction will be rolled back.
     */
    transactionResult: string;

    /**
     * This is called to cancel any running "WaitAfter" timer.
     */
    cancelWaitAfter(): void;

    /**
     * This predicate is used by the ToolManager to decide if this tool can be started mode-lessly by mouse and touch events.
     */
    canStart(): boolean;

    /**
     * This predicate determines whether or not to allow pinch zooming from a multi-touch event.
     */
    canStartMultiTouch(): boolean;

    /**
     * This method is called by the diagram after setting Diagram.currentTool, to make the new tool active.
     */
    doActivate(): void;

    /**
     * The diagram will call this method when the user wishes to cancel the current tool's operation.
     */
    doCancel(): void;

    /**
     * This method is called by the diagram on the old tool when Diagram.currentTool is set to a new tool.
     */
    doDeactivate(): void;

    /**
     * The diagram will call this method upon a key down event.
     */
    doKeyDown(): void;

    /**
     * The diagram will call this method upon a key up event.
     */
    doKeyUp(): void;

    /**
     * The diagram will call this method upon a mouse down event.
     */
    doMouseDown(): void;

    /**
     * The diagram will call this method upon a mouse move event.
     */
    doMouseMove(): void;

    /**
     * The diagram will call this method upon a mouse up event.
     */
    doMouseUp(): void;

    /**
     * The diagram will call this method as the mouse wheel is rotated.
     */
    doMouseWheel(): void;

    /**
     * This method is called by the diagram when this tool becomes the current tool; you should not call this method.
     */
    doStart(): void;

    /**
     * This method is called by the diagram when this tool stops being the current tool; you should not call this method.
     */
    doStop(): void;

    /**
     * This is called a certain delay after a call to .standardWaitAfter if there has not been any call to .cancelWaitAfter.
     */
    doWaitAfter(): void;

    /**
     * This convenience function finds the front-most GraphObject that is at a given point and that is part of an Adornment that is of a given category.
     * @param {go$Point} p a Point in document coordinates.
     * @param {string} category the required Part.category of the Adornment.
     */
    findToolHandleAt(p: go$Point, category: string): go$GraphObject;

    /**
     * Return true when the last mouse point is far enough away from the first mouse down point to constitute a drag operation instead of just a potential click.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} first Point in view coordinates, defaults to Diagram.firstInput's InputEvent.viewPoint.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} last Point in view coordinates, defaults to Diagram.lastInput's InputEvent.viewPoint.
     */
    isBeyondDragSize(first?: go$Point, last?: go$Point): boolean;

    /**
 * Implement the standard behavior for mouse clicks, searching for and calling click handler functions on GraphObjects or on Diagram, and raising the corresponding DiagramEvent.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} navig An optional custom navigation
function to find target objects.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} pred An optional custom predicate
 */
    standardMouseClick(
      navig?: (obj: go$GraphObject) => go$GraphObject,
      pred?: (obj: go$GraphObject) => boolean
    ): void;

    /**
     * Implement the standard behavior for mouse enter, over, and leave events, where the mouse is moving but no button is pressed.
     */
    standardMouseOver(): void;

    /**
     * Implement the standard behavior for selecting parts with the mouse, depending on the control and shift modifier keys.
     */
    standardMouseSelect(): void;

    /**
     * Implement the standard behavior for mouse wheel events.
     */
    standardMouseWheel(): void;

    /**
     * Initiates pinch-zooming on multi-touch devices.
     */
    standardPinchZoomStart(): void;

    /**
     * Continues pinch-zooming (started by standardPinchZoomStart) on multi-touch devices.
     */
    standardPinchZoomMove(): void;

    /**
     * This is called to start a new timer to call .doWaitAfter after a given delay.
     * @param {number} delay in milliseconds
     */
    standardWaitAfter(delay: number): void;

    /**
     * Call Diagram.startTransaction with the given transaction name.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} tname a description of the transaction
     */
    startTransaction(tname?: string): boolean;

    /**
     * If the Diagram.currentTool is this tool, stop this tool and start the Diagram.defaultTool by making it be the new current tool.
     */
    stopTool(): void;

    /**
     * If .transactionResult is null, call Diagram.rollbackTransaction, otherwise call Diagram.commitTransaction.
     */
    stopTransaction(): boolean;

    /**
     * The diagram asks each tool to update any adornments the tool might use for a given part.
     * @param {go$Part} part
     */
    updateAdornments(part: go$Part): void;
  }

  /**
   * This special Tool is responsible for managing all of the Diagram's
   * mode-less tools.
   */
  declare class go$ToolManager mixins go$Tool {
    /**
     * You do not normally need to create an instance of this tool because one already exists as the Diagram.toolManager, which you can modify.
     */
    constructor(): this;

    /**
     * Gets or sets the mode-less ActionTool, normally one of the .mouseDownTools.
     */
    actionTool: go$ActionTool;

    /**
     * Gets or sets the mode-less ClickCreatingTool, normally one of the .mouseUpTools.
     */
    clickCreatingTool: go$ClickCreatingTool;

    /**
     * Gets or sets the mode-less ClickSelectingTool, normally one of the .mouseUpTools.
     */
    clickSelectingTool: go$ClickSelectingTool;

    /**
     * Gets or sets the mode-less ContextMenuTool, normally one of the .mouseUpTools.
     */
    contextMenuTool: go$ContextMenuTool;

    /**
     * This read-only property returns the currently showing tooltip, or null if there is none.
     */
    currentToolTip: go$Adornment;

    /**
     * Gets or sets the mode-less DraggingTool, normally one of the .mouseMoveTools.
     */
    draggingTool: go$DraggingTool;

    /**
     * Gets or sets the mode-less DragSelectingTool, normally one of the .mouseMoveTools.
     */
    dragSelectingTool: go$DragSelectingTool;

    /**
     * Gets or sets the distance in view coordinates within which a mouse down-and-up is considered a click and beyond which a mouse movement is considered a drag.
     */
    dragSize: go$Size;

    /**
     * Gets or sets the time between when the mouse stops moving and a hold event, in milliseconds.
     */
    holdDelay: number;

    /**
     * Gets or sets the time between when the mouse stops moving and a hover event, in milliseconds.
     */
    hoverDelay: number;

    /**
     * Gets or sets the mode-less LinkingTool, normally one of the .mouseMoveTools.
     */
    linkingTool: go$LinkingTool;

    /**
     * Gets or sets the mode-less LinkReshapingTool, normally one of the .mouseDownTools.
     */
    linkReshapingTool: go$LinkReshapingTool;

    /**
     * This read-only property returns the list of Tools that might be started upon a mouse-down event.
     */
    mouseDownTools: go$List<go$Tool>;

    /**
     * This read-only property returns the list of Tools that might be started upon a mouse-move event.
     */
    mouseMoveTools: go$List<go$Tool>;

    /**
     * This read-only property returns the list of Tools that might be started upon a mouse-up event.
     */
    mouseUpTools: go$List<go$Tool>;

    /**
     * Gets or sets the ToolManager's mouse wheel behavior.
     */
    mouseWheelBehavior: go$EnumValue;

    /**
     * Gets or sets the mode-less PanningTool, normally one of the .mouseMoveTools.
     */
    panningTool: go$PanningTool;

    /**
     * Gets or sets the mode-less RelinkingTool, normally one of the .mouseDownTools.
     */
    relinkingTool: go$RelinkingTool;

    /**
     * Gets or sets the mode-less ResizingTool, normally one of the .mouseDownTools.
     */
    resizingTool: go$ResizingTool;

    /**
     * Gets or sets the mode-less RotatingTool, normally one of the .mouseDownTools.
     */
    rotatingTool: go$RotatingTool;

    /**
     * Gets or sets the mode-less TextEditingTool, normally one of the .mouseUpTools.
     */
    textEditingTool: go$TextEditingTool;

    /**
     * This just calls CommandHandler.doKeyDown on the diagram's Diagram.commandHandler.
     */
    doKeyDown(): void;

    /**
     * This just calls CommandHandler.doKeyUp on the diagram's Diagram.commandHandler.
     */
    doKeyUp(): void;

    /**
     * Iterate over the .mouseDownTools list and start the first tool for which its Tool.canStart predicate returns true.
     */
    doMouseDown(): void;

    /**
     * Implement the standard behavior for mouse hover and mouse hold events, called by .doWaitAfter when the mouse has not moved for a period of time.
     */
    doMouseHover(): void;

    /**
     * Iterate over the .mouseMoveTools list and start the first tool for which its Tool.canStart predicate returns true.
     */
    doMouseMove(): void;

    /**
     * Iterate over the .mouseUpTools list and start the first tool for which its Tool.canStart predicate returns true.
     */
    doMouseUp(): void;

    /**
     * The diagram will call this method as the mouse wheel is rotated.
     */
    doMouseWheel(): void;

    /**
     * Implement the standard behavior for tooltips, called by .doWaitAfter when the mouse has not moved for a period of time.
     */
    doToolTip(): void;

    /**
     * Implement the standard behavior for when the mouse has not moved for a period of time.
     */
    doWaitAfter(): void;

    /**
     * Find a mouse tool of a given name.
     * @param {string} name
     */
    findTool(name: string): go$Tool;

    /**
     * Hide any tooltip.
     */
    hideToolTip(): void;

    /**
     * Initialize the three mouse tool lists with instances of the standard tools.
     */
    initializeStandardTools(): void;

    /**
     * This is called by .showToolTip to position the part within the viewport.
     * @param {go$Adornment} tooltip
     * @param {go$GraphObject} obj The GraphObject getting the tooltip.
     */
    positionToolTip(tooltip: go$Adornment, obj: go$GraphObject): void;

    /**
 * Replace a mouse tool of a given name with a new tool.
 * @param {string} name the type of tool, such as "Dragging" or "ClickSelecting".
 * @param {go$Tool} newtool If null, any tool that the search finds will just be removed
from the list in which it was found.
 */
    replaceTool(name: string, newtool: go$Tool): go$Tool;

    /**
     * Show a tooltip Adornment.
     * @param {go$Adornment} tooltip
     * @param {go$GraphObject} obj The GraphObject getting the tooltip; this is null if the tooltip is being shown for the diagram background.
     */
    showToolTip(tooltip: go$Adornment, obj: go$GraphObject): void;

    /**
     * This value for gestureBehavior indicates that the pointer/touch pinch gestures on the canvas intend to have no effect on the Diagram, but also no effect on the page.
     */
    static GestureCancel: go$EnumValue;

    /**
     * This value for gestureBehavior indicates that the pointer/touch pinch gestures on the canvas intend to have no effect on the Diagram, but will not be prevented, and may bubble up the page to have other effects (such as zooming the page).
     */
    static GestureNone: go$EnumValue;

    /**
     * This value for gestureBehavior indicates that the pointer/touch pinch gestures on the canvas intend to zoom the Diagram.
     */
    static GestureZoom: go$EnumValue;

    /**
     * This value for .mouseWheelBehavior indicates that the mouse wheel events are ignored, although scrolling or zooming by other means may still be allowed.
     */
    static WheelNone: go$EnumValue;

    /**
     * This default value for .mouseWheelBehavior indicates that mouse wheel events scroll the diagram.
     */
    static WheelScroll: go$EnumValue;

    /**
     * This value for .mouseWheelBehavior indicates that the mouse wheel events change the scale of the diagram.
     */
    static WheelZoom: go$EnumValue;
  }

  /**
   * This interface is implemented by the List, Set, and Map
   * classes; it provides the .iterator read-only property that returns an Iterator.
   */
  declare class go$Iterable<T> {
    /**
     * Gets an Iterator that can iterate over the items in the collection.
     */
    iterator: go$Iterator<T>;
  }

  /**
   * This interface defines properties and methods for iterating over a collection;
   * it provides the .next predicate and the .value read-only property.
   * Some Iterators also provide key property values along with each value.
   */
  declare class go$Iterator<T> mixins go$Iterable<T> {
    /**
     * This read-only property returns the total number of items in the iterated collection.
     */
    count: number;

    /**
     * Returns itself, which is convenient for code that expects an Iterable instead of an Iterator.
     */
    iterator: go$Iterator<T>;

    /**
     * This read-only property returns the current index to the item in the collection, assuming .next has just returned true.
     */
    key: any;

    /**
     * This read-only property returns the current item in the collection, assuming .next has just returned true.
     */
    value: T;

    /**
     * This is true if all invocations of the given predicate on items in the collection are true.
     * @param {(x: T) => boolean} pred
     */
    all(pred: (x: T) => boolean): boolean;

    /**
     * This is true if any invocation of the given predicate on items in the collection is true.
     * @param {(x: T) => boolean} pred
     */
    any(pred: (x: T) => boolean): boolean;

    /**
     * Call the given function on each item in the collection.
     * @param {(x: T) => void} func
     */
    each(func: (x: T) => void): void;

    /**
     * Call the given predicate on each item in the collection and for each item that it returns true, present the item in an iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} pred This function must not have any side-effects.
     */
    filter(pred: (x: T) => boolean): go$Iterator<T>;

    /**
     * Return the first item in the collection, or null if there is none.
     */
    first(): T;

    /**
     * Call this method to advance the iterator to the next item in the collection.
     */
    next(): boolean;

    /**
     * Start this iterator all over again.
     */
    reset(): void;
  }

  /**
   * An ordered iterable collection.
   * It optionally enforces the type of elements that may be added to the List.
   */
  declare class go$List<T> mixins go$Iterable<T> {
    /**
     * This creates a List that checks the type of the values to be instances of a particular kind of Object.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} type this must be a class function/constructor.
     */
    constructor(type: go$Constructor): this;

    /**
     * This creates a List that may check the types of the values.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if supplied, this must be one of: 'number', 'string', 'boolean', or 'function' for the value type.
     */
    constructor(type?: string): this;

    /**
     * This read-only property returns the length of the List.
     */
    count: number;

    /**
     * This read-only property returns the length of the List. ES6-like synonym for count.
     */
    size: number;

    /**
     * Gets an object that you can use for iterating over the List.
     */
    iterator: go$Iterator<T>;

    /**
     * Gets an object that you can use for iterating over the List in backwards order.
     */
    iteratorBackwards: go$Iterator<T>;

    /**
     * This read-only property returns the length of the List, a synonym for the .count property.
     */
    length: number;

    /**
     * Adds a given value to the end of the List.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    add(val: T): void;

    /**
     * Adds all of the values of a collection (either an Iterable or an Array) to the end of this List.
     * @param {go$Iterable<T> | Array<T>} coll
     */
    addAll(coll: go$Iterable<T> | Array<T>): go$List<T>;

    /**
     * This is true if all invocations of the given predicate on items in the collection are true.
     * @param {(x: T) => boolean} pred
     */
    all(pred: (x: T) => boolean): boolean;

    /**
     * This is true if any invocation of the given predicate on items in the collection is true.
     * @param {(x: T) => boolean} pred
     */
    any(pred: (x: T) => boolean): boolean;

    /**
     * Clears the List.
     */
    clear(): void;

    /**
     * Produce a new List holding, in order, all of the items of this List and then all of the items presented by the given Iterable.
     * Unlike Iterator.concat, this returns a List, not an Iterator.
     * @param {go$Iterable<T>} it An Iterable
     */
    concat<S>(it: go$Iterable<S>): go$List<S | T>;

    /**
     * Returns whether the given value is in this List.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    contains(val: T): boolean;

    /**
     * Makes a shallow copy of this List.
     */
    copy(): go$List<T>;

    /**
     * Removes a given value (if found) from the List. ES6-like synonym for remove.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    delete(val: T): boolean;

    /**
     * Call the given function on each item in the collection.
     * @param {(x: T) => void} func
     */
    each(func: (x: T) => void): void;

    /**
     * Returns the element at the given index.
     * @param {number} i
     */
    elt(i: number): T;

    /**
     * Call the given predicate on each item in the collection and for each item that it returns true, collect the item in a new List.
     * Unlike Iterator.filter, this returns a List, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} pred This function must not have any side-effects.
     */
    filter(pred: (x: T) => boolean): go$List<T>;

    /**
     * Returns the first item in the list, or null if there is none.
     */
    first(): T;

    /**
     * Returns the element at the given index. ES6-like synonym for elt.
     * @param {number} i
     */
    get(i: number): T;

    /**
     * Returns whether the given value is in this List. ES6-like synonym for contains.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    has(val: T): boolean;

    /**
     * Returns the index of the given value if it is in this List.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    indexOf(val: T): number;

    /**
     * Insert a value before the index i.
     * @param {number} i
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    insertAt(i: number, val: T): void;

    /**
     * Returns the last item in the list, or null if there is none.
     */
    last(): T;

    /**
     * Call the given function on each item in the collection and collect the results in a new List.
     * Unlike Iterator.map, this returns a List, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} func This function must not modify the collection.
     */
    map<S>(func: (x: T) => S): go$List<S>;

    /**
     * Returns the last item in the list and removes it from the list, or just return null if there is none.
     */
    pop(): T;

    /**
     * Add an item at the end of the list -- a synonym for add.
     */
    push(val: T): void;

    /**
     * Removes a given value (if found) from the List.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    remove(val: T): boolean;

    /**
     * Removes a value at a given index from the List.
     * @param {number} i
     */
    removeAt(i: number): void;

    /**
     * Removes a range of values from the List.
     * @param {number} to
     * @param {number} from
     */
    removeRange(to: number, from: number): void;

    /**
     * Reverse the order of items in this List.
     */
    reverse(): go$List<T>;

    /**
     * Set the element at the given index to a given value. ES6-like synonym for setElt.
     * @param {number} i
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    set(i: number, val: T): void;

    /**
     * Set the element at the given index to a given value.
     * @param {number} i
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    setElt(i: number, val: T): void;

    /**
     * Sort the List according to a comparison function.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} sortfunc the same kind of function as passed to Array.sort
     */
    sort(sortfunc: (a: T, b: T) => number): go$List<T>;

    /**
     * Produces a JavaScript Array from the contents of this List.
     */
    toArray(): Array<T>;

    /**
     * Converts the List to a Set.
     */
    toSet(): go$Set<T>;
  }

  /**
   * This is a structure used by Map to hold key-value pairs.
   */
  declare interface go$KeyValuePair<K, V> {
    key: K;
    value: V;
  }

  /**
   * An unordered iterable collection of key/value pairs that cannot contain two instances of the
   * same key.
   * It optionally enforces the type of the key and the type of the associated value.
   */
  declare class go$Map<K, V> mixins go$Iterator<go$KeyValuePair<K, V>> {
    /**
     * This creates a Map that may check the types of the keys and/or values.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} keytype if supplied, this must be a class function/constructor.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} valtype if supplied, this must be a class function/constructor.
     */
    constructor(keytype: go$Constructor, valtype: go$Constructor): this;

    /**
     * This creates a Map that may check the types of the keys and/or values.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} keytype if supplied, this must be one of: 'number' or 'string' for the key type.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} valtype if supplied, this must be a class function/constructor.
     */
    constructor(keytype: string, valtype: go$Constructor): this;

    /**
     * This creates a Map that may check the types of the keys and/or values.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} keytype if supplied, this must be a class function/constructor.
     * @param {string} valtype if supplied, this must be one of: 'number', 'string', 'boolean', or 'function' for the value type.
     */
    constructor(keytype: go$Constructor, valtype: string): this;

    /**
     * This creates a Map that may check the types of the keys and/or values.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} keytype if supplied, this must be one of: 'number' or 'string' for the key type.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} valtype if supplied, this must be one of: 'number', 'string', 'boolean', or 'function' for the value type.
     */
    constructor(keytype?: string, valtype?: string): this;

    /**
     * This read-only property returns the number of associations in the Map.
     */
    count: number;

    /**
     * Gets an object that you can use for iterating over the key-value pairs of the Map.
     */
    iterator: go$Iterator<go$KeyValuePair<K, V>>;

    /**
     * Gets an object that you can use for iterating over the keys in the Map.
     */
    iteratorKeys: go$Iterator<K>;

    /**
     * Gets an object that you can use for iterating over the values of the Map.
     */
    iteratorValues: go$Iterator<V>;

    /**
     * This read-only property returns the number of associations in the Map. ES6-like synonym for count.
     */
    size: number;

    /**
     * Adds a key-value association to the Map, or replaces the value associated with the key if the key was already present in the map.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    add(key: K, val: V): boolean;

    /**
     * Adds all of the key-value pairs of another Map to this Map.
     * @param {go$Iterable<go$KeyValuePair<K, V>> | Array} coll
     */
    addAll(
      coll: go$Iterable<go$KeyValuePair<K, V>> | Array<go$KeyValuePair<K, V>>
    ): go$Map<K, V>;

    /**
     * This is true if all invocations of the given predicate on key-value pairs in the collection are true.
     * @param {(x: Object) => boolean} pred
     */
    all(pred: (x: go$KeyValuePair<K, V>) => boolean): boolean;

    /**
     * This is true if any invocation of the given predicate on key-value pairs in the collection is true.
     * @param {(x: Object) => boolean} pred
     */
    any(pred: (x: go$KeyValuePair<K, V>) => boolean): boolean;

    /**
     * Clears the Map, removing all key-value associations.
     */
    clear(): void;

    /**
     * Produce a new Map that includes the key-value pairs of this Map and then adds the pairs of the given Iterator.
     * Unlike Iterator.concat, this returns a Map, not an Iterator.
     * @param {go$Iterable<go$KeyValuePair<K, V>>} it An Iterable
     */
    concat<W>(it: go$Iterable<go$KeyValuePair<K, W>>): go$Map<K, V | W>;

    /**
     * Returns whether the given key is in this Map.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    contains(key: K): boolean;

    /**
     * Makes a shallow copy of this Map.
     */
    copy(): go$Map<K, V>;

    /**
     * Removes a key (if found) from the Map. ES6-like synonym for remove.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    delete(key: K): boolean;

    /**
     * Call the given function on each key-value pair in the collection.
     * @param {(x: Object) => void} func
     */
    each(func: (x: go$KeyValuePair<K, V>) => void): void;

    /**
     * Call the given predicate on each key-value pair in the collection and for each pair that it returns true, add the key-value association in a new Map.
     * Unlike Iterator.filter, this returns a Map, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} pred This function must not have any side-effects.
     */
    filter(pred: (x: go$KeyValuePair<K, V>) => boolean): go$Map<K, V>;

    /**
     * Returns the first key-value pair in the collection, or null if there is none.
     */
    first(): go$KeyValuePair<K, V>;

    /**
     * Returns the value associated with a key. ES6-like synonym for getValue.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    get(key: K): V;

    /**
     * Returns the value associated with a key.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    getValue(key: K): V;

    /**
     * Returns whether the given key is in this Map. ES6-like synonym for contains.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    has(key: K): boolean;

    /**
     * Call the given function on each key-value pair in the collection and associate the key with the result of the function in a new Map.
     * Unlike Iterator.map, this returns a Map, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} func This function must not modify the collection.
     */
    map<S>(func: (x: go$KeyValuePair<K, V>) => S): go$Map<K, S>;

    /**
     * Removes a key (if found) from the Map.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     */
    remove(key: K): boolean;

    /**
     * Adds a key-value association to the Map, or replaces the value associated with the key if the key was already present in the map. ES6-like synonym for add.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} key
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    set(key: K, val: V): boolean;

    /**
     * Produces a JavaScript Array of key/value pair objects from the contents of this Map.
     */
    toArray(): Array<go$KeyValuePair<K, V>>;

    /**
     * Produces a Set that provides a read-only view onto the keys of this Map.
     */
    toKeySet(): go$Set<K>;
  }

  /**
   * An unordered iterable collection that cannot contain two instances of the same kind of value.
   * It optionally enforces the type of elements that may be added to the Set.
   */
  declare class go$Set<T> mixins go$Iterable<T> {
    /**
     * This creates a Set that checks the type of the values.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} type this must be a class function/constructor.
     */
    constructor(type: go$Constructor): this;

    /**
     * This creates a Set that may check the types of the values.
     * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} type if supplied, this must be one of: 'number' or 'string' for the key type.
     */
    constructor(type?: string): this;

    /**
     * This read-only property returns the number of elements in the Set.
     */
    count: number;

    /**
     * Gets an object that you can use for iterating over the Set.
     */
    iterator: go$Iterator<T>;

    /**
     * This read-only property returns the number of elements in the Set. ES6-like synonym for count.
     */
    size: number;

    /**
     * Adds a given value to the Set, if not already present.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    add(val: T): boolean;

    /**
     * Adds all of the values of a collection (either an Iterable or an Array) to this Set.
     * @param {go$Iterable<T> | Array<T>} coll
     */
    addAll(coll: go$Iterable<T> | Array<T>): go$Set<T>;

    /**
     * This is true if all invocations of the given predicate on items in the collection are true.
     * @param {(x: T) => boolean} pred
     */
    all(pred: (x: T) => boolean): boolean;

    /**
     * This is true if any invocation of the given predicate on items in the collection is true.
     * @param {(x: T) => boolean} pred
     */
    any(pred: (x: T) => boolean): boolean;

    /**
     * Clears the Set.
     */
    clear(): void;

    /**
     * Produce a new Set that contains items of this Set and then iterates over the items of the given Iterator.
     * Unlike Iterator.concat, this returns a Set, not an Iterator.
     * @param {go$Iterable<T>} it An Iterable
     */
    concat<S>(it: go$Iterable<S>): go$Set<S | T>;

    /**
     * Returns whether the given value is in this Set.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    contains(val: T): boolean;

    /**
     * Returns true if all of the values of a given collection are in this Set.
     * @param {go$Iterable<T>} coll
     */
    containsAll(coll: go$Iterable<T>): boolean;

    /**
     * Returns true if any of the values of a given collection are in this Set.
     * @param {go$Iterable<T>} coll
     */
    containsAny(coll: go$Iterable<T>): boolean;

    /**
     * Makes a shallow copy of this Set.
     */
    copy(): go$Set<T>;

    /**
     * Removes a value (if found) from the Set. ES6-like synonym for remove.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    delete(val: T): boolean;

    /**
     * Call the given function on each item in the collection.
     * @param {(x: T) => void} func
     */
    each(func: (x: T) => void): void;

    /**
     * Call the given predicate on each item in the collection and for each item that it returns true, collect the item in a new Set.
     * Unlike Iterator.filter, this returns a Set, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} pred This function must not have any side-effects.
     */
    filter(pred: (x: T) => boolean): go$Set<T>;

    /**
     * Returns the first item in the collection, or null if there is none.
     */
    first(): T;

    /**
     * Returns whether the given value is in this Set. ES6-like synonym for contains.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    has(val: T): boolean;

    /**
     * Call the given function on each item in the collection and collect the results in a new Set.
     * Unlike Iterator.map, this returns a Set, not an Iterator.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} func This function must not modify the collection.
     */
    map<S>(func: (x: T) => S): go$Set<S>;

    /**
     * Removes a value (if found) from the Set.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val
     */
    remove(val: T): boolean;

    /**
     * Removes all of the values of a collection from this Set.
     * @param {go$Iterable<T>} coll
     */
    removeAll(coll: go$Iterable<T>): go$Set<T>;

    /**
     * Removes all of the values of a collection from this Set.
     * @param {Array<T>} coll
     */
    removeAll(coll: Array<T>): go$Set<T>;

    /**
     * Removes from this Set all items that are not in the given collection.
     * @param {go$Iterable<T>} coll
     */
    retainAll(coll: go$Iterable<T>): go$Set<T>;

    /**
     * Produces a JavaScript Array from the contents of this Set.
     */
    toArray(): Array<T>;

    /**
     * Converts the Set to a List.
     */
    toList(): go$List<T>;
  }

  declare class go$EnumValue {}
  declare module.exports: typeof go;
}
