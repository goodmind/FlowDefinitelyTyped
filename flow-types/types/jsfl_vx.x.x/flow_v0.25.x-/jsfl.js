declare module "jsfl" {
  declare interface FlashPoint {
    x: number;
    y: number;
  }
  declare type FlashPoint3D = {
    z: number
  } & FlashPoint;

  declare interface FlashRectangle {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
  declare interface FlashMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
  }
  declare interface FlashFilter {
    angle: number;
    blurX: number;
    blurY: number;
    brightness: number;
    color: any;
    contrast: number;
    distance: number;
    enabled: boolean;
    hideObject: boolean;
    highlightColor: any;
    hue: number;
    inner: boolean;
    knockout: boolean;
    name: string;
    quality: string;
    saturation: number;
    shadowColor: any;
    strength: number;
    type: string;
  }
  declare interface FlashDocument {
    addDataToDocument(name: string, type: string, data: any): void;
    addDataToSelection(name: string, type: string, data: any): void;
    addFilter(filterName: string): void;
    addItem(position: FlashPoint, item: FlashItem): boolean;
    addNewLine(startPoint: FlashPoint, endpoint: FlashPoint): void;
    addNewOval(
      boundingRectangle: FlashRectangle,
      bSuppressFill?: boolean,
      bSuppressStroke?: boolean
    ): void;
    addNewPrimitiveOval(
      boundingRectangle: FlashRectangle,
      bSpupressFill?: boolean,
      bSuppressStroke?: boolean
    ): void;
    addNewRectangle(
      boundingRectangle: FlashRectangle,
      roundness: number,
      bSuppressFill?: boolean,
      bSuppressStroke?: boolean
    ): void;
    addNewPrimitiveRectangle(
      boundingRectangle: FlashRectangle,
      roundness: number,
      bSuppressFill?: boolean,
      bSuppressStroke?: boolean
    ): void;
    addNewPublishProfile(profileName?: string): void;
    addNewScene(name: string): boolean;
    addNewText(boundingRectangle: FlashRectangle, text?: string): void;
    align(alignmode: string, bUseDocumentBounds?: boolean): void;
    allowScreens(): void;

    /**
     * Arranges the selection on the Stage. "back", "backward", "forward", and "front"
     */
    arrange(arrangeMode: string): void;

    /**
     * Performs a break-apart operation on the current
     */
    breakApart(): void;

    /**
     * Indicates whether the Edit Symbols menu and
     */
    canEditSymbol(): boolean;

    /**
     * Determines whether you can use the
     */
    canRevert(): boolean;

    /**
     * Determines whether you can use the
     */
    canTestMovie(): boolean;

    /**
     * Determines whether you can use the
     */
    canTestScene(): boolean;

    /**
     * Changes the index of the filter in the Filter list.
     */
    changeFilterOrder(oldIndex: number, newIndex: number): void;

    /**
     * Copies the current selection from the document
     */
    clipCopy(): void;

    /**
     * Cuts the current selection from the document
     */
    clipCut(): void;

    /**
     * Pastes the contents of the Clipboard into the document.
     */
    clipPaste(bInPlace?: boolean): void;

    /**
     * Closes the specified document.
     */
    close(bPromptToSaveChanges?: boolean): void;

    /**
     * Converts lines to fills on the selected objects.
     */
    convertLinesToFills(): void;

    /**
     * Converts the selected Stage item(s) to a new
     */
    convertToSymbol(
      type: string,
      name: string,
      registrationPoint: string
    ): FlashSymbolInstance;

    /**
     * Uses the top selected drawing object to crop all
     */
    crop(): void;

    /**
     * Method; Invokes the Debug Movie command on the document.
     */
    debugMovie(abortIfErrorsExist?: boolean): void;

    /**
     * Deletes the envelope (bounding box that
     */
    deleteEnvelope(): boolean;

    /**
     * Deletes the currently active profile, if there is
     */
    deletePublishProfile(): boolean;

    /**
     * Deletes the current scene (Timeline object), and
     */
    deleteScene(): boolean;

    /**
     * Deletes the current selection on the Stage.
     */
    deleteSelection(): void;

    /**
     * Disables all filters on the selected objects.
     */
    disableAllFilters(): void;

    /**
     * Disables the specified filter in the Filters list.
     */
    disableFilter(filterIndex: number): void;

    /**
     * Disables all filters except the one at the specified
     */
    disableOtherFilters(enabledFilterIndex: number): void;

    /**
     * Distributes the selection.
     */
    distribute(distributemode: string, bUseDocumentBounds?: boolean): void;

    /**
     * Performs a distribute-to-layers operation on the
     */
    distributeToLayers(): void;

    /**
     * Checks the document for persistent data with the
     */
    documentHasData(name: string): boolean;

    /**
     * Duplicates the currently active profile and gives
     */
    duplicatePublishProfile(profileName?: string): number;

    /**
     * Makes a copy of the currently selected scene,
     */
    duplicateScene(): boolean;

    /**
     * Duplicates the selection on the Stage.
     */
    duplicateSelection(): void;

    /**
     * Makes the specified scene the currently selected
     */
    editScene(index: number): void;

    /**
     * Enables all the filters on the Filters list for the
     */
    enableAllFilters(): void;

    /**
     * Enables the specified filter for the selected
     */
    enableFilter(filterIndex: number): void;

    /**
     * Switches the authoring tool into the editing mode
     */
    enterEditMode(editMode?: string): void;

    /**
     * Exits from symbol-editing mode and returns
     */
    exitEditMode(): void;

    /**
     * Exports the document as one or more PNG files.
     */
    exportPNG(
      fileURI: string,
      bCurrentPNGSettings?: boolean,
      bCurrentFrame?: boolean
    ): boolean;

    /**
     * Exports the currently active profile to an XML
     */
    exportPublishProfile(fileURI: string): void;

    /**
     * returns a string that specifies, in XML format, the specified profile. If you don't pass a value for profileName, the current profile is exported.
     */
    exportPublishProfileString(profileName?: string): string;

    /**
     * Exports the document in the Flash SWF format.
     */
    exportSWF(fileURI: string, bCurrentSettings?: boolean): void;

    /**
     * Identical to retrieving the value of the To Stage
     */
    getAlignToDocument(): boolean;

    /**
     * Returns a string that specifies the blending mode
     */
    getBlendMode(): string;

    /**
     * Retrieves the fill object of the selected shape, or
     */
    getCustomFill(objectToFill?: string): FlashFill;

    /**
     * Returns the stroke object of the selected shape,
     */
    getCustomStroke(locationOfStroke?: string): FlashStroke;

    /**
     * Retrieves the value of the specified data.
     */
    getDataFromDocument(name: string): any;

    /**
     * Gets the specified Element property for the
     */
    getElementProperty(propertyName: string): any;

    /**
     * Gets a specified TextAttrs property of the
     */
    getElementTextAttr(
      attrName: string,
      startIndex?: number,
      endIndex?: number
    ): FlashTextAttrs;

    /**
     * Returns an array that contains the list of filters
     */
    getFilters(): FlashFilter[];

    /**
     * Returns a string containing the XML metadata
     */
    getMetadata(): string;

    /**
     * returns the mobile XML settings for the document.
     */
    getMobileSettings(): string;

    /**
     * Returns a string that represents the targeted
     */
    getPlayerVersion(): string;

    /**
     * Gets the bounding rectangle of the current
     */
    getSelectionRect(): FlashRectangle;

    /**
     * Gets the currently selected text.
     */
    getTextString(startIndex?: number, endIndex?: number): string;

    /**
     * Retrieves the current Timeline object in the
     */
    getTimeline(): FlashTimeline;

    /**
     * gets the location of the transformation point of the current selection. You can use the transformation point for commutations such as rotate and skew.
     */
    getTransformationPoint(): FlashPoint;

    /**
     * Converts the current selection to a group.
     */
    group(): void;

    /**
     * Imports a file into the document.
     */
    importFile(fileURI: string, importToLibrary?: boolean): void;

    /**
     * Imports a profile from a file.
     */
    importPublishProfile(fileURI: string): number;

    /**
     * imports an XML string that represents a publish profile and sets it as the current profile. To generate an XML string to import, use document.exportPublishProfileString() before using this method.
     */
    importPublishProfileString(xmlString: string): number;

    /**
     * Imports a SWF file into the document.
     */
    importSWF(fileURI: string): void;

    /**
     * creates an intersection drawing object from all selected drawing objects. This method returns false if there are no drawing objects selected, or if any of the selected items are not drawing objects.
     */
    intersect(): boolean;

    /**
     * loads a cue point XML file. The format and DTD of the XML file is the same as the one imported and exported by the Cue Points Property inspector. The return value is the same as the string serialized in the Cue Point property of the object containing the instance of an FLVPlayback Component.
     */
    loadCuepointXML(uri: string): any[];

    /**
     * Makes the size of the selected objects the same.
     */
    match(
      bWidth: boolean,
      bHeight: boolean,
      bUseDocumentBounds?: boolean
    ): void;

    /**
     * Performs a mouse click from the Selection tool.
     */
    mouseClick(
      position: FlashPoint,
      bToggleSel: boolean,
      bShiftSel: boolean
    ): void;

    /**
     * Performs a double mouse click from the
     */
    mouseDblClk(
      position: FlashPoint,
      bAltDown: boolean,
      bShiftDown: boolean,
      bShiftSelect: boolean
    ): void;

    /**
     * If the selection contains at least one path with at
     */
    moveSelectedBezierPointsBy(delta: FlashPoint): void;

    /**
     * Moves selected objects by a specified distance.
     */
    moveSelectionBy(distanceToMove: FlashPoint): void;

    /**
     * Optimizes smoothing for the current selection,
     */
    optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void;

    /**
     * Publishes the document according to the active
     */
    publish(): void;

    /**
     * uses the top selected drawing object to punch through all selected drawing objects underneath it. This method returns false if there are no drawing objects selected or if any of the selected items are not drawing objects.
     */
    punch(): boolean;

    /**
     * Removes all filters from the selected object(s).
     */
    removeAllFilters(): void;

    /**
     * Removes persistent data with the specified
     */
    removeDataFromDocument(name: string): void;

    /**
     * Removes persistent data with the specified
     */
    removeDataFromSelection(name: string): void;

    /**
     * Removes the specified filter from the Filters list
     */
    removeFilter(filterIndex: number): void;

    /**
     * Renames the current profile.
     */
    renamePublishProfile(profileNewName?: string): boolean;

    /**
     * Renames the currently selected scene in the
     */
    renameScene(name: string): boolean;

    /**
     * Moves the specified scene before another
     */
    reorderScene(sceneToMove: number, sceneToPutItBefore: number): void;

    /**
     * Sets all values in the Property inspector to
     */
    resetOvalObject(): void;

    /**
     * Sets all values in the Property inspector to
     */
    resetRectangleObject(): void;

    /**
     * Resets the transformation matrix; equivalent to
     */
    resetTransformation(): void;

    /**
     * Method; reverts the specified document to its previously saved version. This method is equivalent to selecting File > Revert.
     */
    revert(): void;

    /**
     * applies a 3D rotation to the selection. This method is available only for movie clips.
     */
    rotate3DSelection(
      xyzCoordinate: FlashPoint3D,
      bGlobalTransform: boolean
    ): void;

    /**
     * Rotates the selection by a specified number of
     */
    rotateSelection(angle: number, rotationPoint?: string): void;

    /**
     * Saves the document in its default location;
     */
    save(bOkToSaveAs?: boolean): boolean;

    /**
     * saves and compacts the file. This method is equivalent to selecting File > Save and Compact.
     */
    saveAndCompact(bOkToSaveAs?: boolean): boolean;

    /**
     * Scales the selection by a specified amount;
     */
    scaleSelection(xScale: number, yScale: number, whichCorner?: string): void;

    /**
     * Selects all items on the Stage; equivalent to
     */
    selectAll(): void;

    /**
     * Deselects any selected items.
     */
    selectNone(): void;

    /**
     * Sets the preferences for document.align(),
     */
    setAlignToDocument(bToStage?: boolean): void;

    /**
     * Sets the blending mode for the selected objects.
     */
    setBlendMode(mode: string): void;

    /**
     * Sets the fill settings for the Tools panel, Property
     */
    setCustomFill(fill: FlashFill): void;

    /**
     * Sets the stroke settings for the Tools panel,
     */
    setCustomStroke(stroke: FlashStroke): void;

    /**
     * Sets the specified Element property on selected
     */
    setElementProperty(property: string, value: number): void;

    /**
     * Sets the specified TextAttrs property of the
     */
    setElementTextAttr(
      attrName: string,
      attrValue: FlashTextAttrs,
      startIndex?: number,
      endIndex?: number
    ): boolean;

    /**
     * Changes the fill color of the selection to the
     */
    setFillColor(color: any): void;

    /**
     * Sets a specified filter property for the currently
     */
    setFilterProperty(property: string, filterIndex: number, value: any): void;

    /**
     * Applies filters to the selected objects .
     */
    setFilters(filterArray: FlashFilter[]): void;

    /**
     * Sets the opacity of the instance.
     */
    setInstanceAlpha(opacity: number): void;

    /**
     * Sets the brightness for the instance.
     */
    setInstanceBrightness(brightness: number): void;

    /**
     * Sets the tint for the instance.
     */
    setInstanceTint(color: any, strength: number): void;

    /**
     * Sets the XML metadata for the specified
     */
    setMetadata(strMetadata: string): boolean;

    /**
     * Sets the value of an XML settings string in a
     */
    setMobileSettings(xmlString: string): boolean;

    /**
     * Specifies a value for a specified property of
     */
    setOvalObjectProperty(propertyName: string, value: any): void;

    /**
     * Sets the version of the Flash Player targeted by
     */
    setPlayerVersion(version: string): boolean;

    /**
     * Specifies a value for a specified property of
     */
    setRectangleObjectProperty(propertyName: string, value: any): void;

    /**
     * Moves and resizes the selection in a single
     */
    setSelectionBounds(
      boundingRectangle: FlashRectangle,
      bContactSensitiveSelection?: boolean
    ): void;

    /**
     * Draws a rectangular selection marquee relative
     */
    setSelectionRect(
      rect: FlashRectangle,
      bReplaceCurrentSelection?: boolean,
      bContactSensitiveSelection?: boolean
    ): void;

    /**
     * Specifies the vanishing point for viewing 3D objects.
     */
    setStageVanishingPoint(point: FlashPoint): void;
    setStageViewAngle(angle: number): void;

    /**
     * Sets the color, width, and style of the selected
     */
    setStroke(color: any, size: number, strokeType: string): void;

    /**
     * Changes the stroke color of the selection to the
     */
    setStrokeColor(color: any): void;

    /**
     * Changes the stroke size of the selection to the
     */
    setStrokeSize(size: number): void;

    /**
     * Changes the stroke style of the selection to the
     */
    setStrokeStyle(strokeType: string): void;

    /**
     * Changes the bounding rectangle for the selected
     */
    setTextRectangle(boundingRectangle: FlashRectangle): boolean;

    /**
     * Sets the text selection of the currently selected
     */
    setTextSelection(startIndex: number, endIndex: number): boolean;

    /**
     * Inserts a string of text.
     */
    setTextString(
      text: string,
      startIndex?: number,
      endIndex?: number
    ): boolean;

    /**
     * Moves the transformation point of the current
     */
    setTransformationPoint(transformationPoint: FlashPoint): void;

    /**
     * Skews the selection by a specified amount.
     */
    skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void;

    /**
     * Smooths the curve of each selected fill outline or
     */
    smoothSelection(): void;

    /**
     * Spaces the objects in the selection evenly.
     */
    space(direction: string, bUseDocumentBounds?: boolean): void;

    /**
     * Straightens the currently selected strokes;
     */
    straightenSelection(): void;

    /**
     * Swaps the current selection with the specified
     */
    swapElement(name: string): void;

    /**
     * Swaps the Stroke and Fill colors.
     */
    swapStrokeAndFill(): void;

    /**
     * Executes a Test Movie operation on the
     */
    testMovie(): void;

    /**
     * Executes a Test Scene operation on the current
     */
    testScene(): void;

    /**
     * Performs a trace bitmap on the current selection;
     */
    traceBitmap(
      threshold: number,
      minimumArea: number,
      curveFit: string,
      cornerThreshold: string
    ): void;
    transformSelection(a: number, b: number, c: number, d: number): void;
    unGroup(): void;
    union(): void;
    unlockAllElements(): void;
    xmlPanel(fileURI: string): any;
    accName: string;
    as3AutoDeclare: boolean;
    as3Dialect: string;
    as3ExportFrame: number;
    as3StrictMode: boolean;
    as3WarningsMode: boolean;
    asVersion: number;
    autoLabel: boolean;
    backgroundColor: any;
    currentPublishProfile: string;
    currentTimeline: FlashTimeline;
    description: string;
    docClass: any;
    forceSimple: boolean;
    frameRate: number;
    height: number;
    id: number;
    library: FlashLibrary;
    livePreview: boolean;
    name: string;
    path: string;
    pathURI: string;
    publishProfiles: string[];

    /**
     * Read-only; the current ScreenOutline object for the
     * An array of the selected objects in the document.
     */
    selection: FlashElement[];

    /**
     * A Boolean value that specifies whether the object
     */
    silent: boolean;

    /**
     * Read-only; an array of Timeline objects (see
     */
    timelines: FlashTimeline[];

    /**
     * Read-only; a Matrix object.
     */
    viewMatrix: FlashMatrix;

    /**
     * An integer that specifies the width of the document
     */
    width: number;

    /**
     * Specifies the zoom percent of the Stage at author
     */
    zoomFactor: number;
  }
  declare interface FlashText {
    getTextAttr(): void;
    getTextString(): void;
    setTextAttr(): void;
    setTextString(): void;
    accName: string;
    antiAliasSharpness: number;
    antiAliasThickness: number;
    autoExpand: boolean;
    border: boolean;
    description: string;
    embeddedCharacters: string;
  }
  declare type FlashTextAttrs = {
    aliasText: boolean,
    alignment: string,
    autoKern: boolean,
    bold: boolean,
    characterPosition: string,
    characterSpacing: number,
    face: string,
    fillColor: any,
    indent: number,
    italic: boolean,
    leftMargin: number,
    letterSpacing: number,
    lineSpacing: number,
    rightMargin: number,
    rotation: boolean,
    size: number,
    target: string,
    url: string
  } & FlashText;

  declare interface FlashFLfile {
    copy(fileURI: string, copyURI: string): boolean;
    createFolder(folderURI: string): boolean;
    exists(fileURI: string): boolean;
    getAttributes(fileOrFolderURI: string): string;
    getCreationDate(fileOrFolderURI: string): string;
    getCreationDateObj(fileOrFolderURI: string): Date;
    getModificationDate(fileOrFolderURI: string): string;
    getModificationDateObj(fileOrFolderURI: string): Date;
    getSize(fileURI: string): number;
    listFolder(folderURI: string, filesOrDirectories?: boolean): string[];
    platformPathToURI(fileName: string): string;
    read(fileOrFolderURI: string): string;
    remove(fileOrFolderURI: string): boolean;
    setAttributes(fileURI: string, strAttrs: string): boolean;
    uriToPlatformPath(fileURI: string): string;
    write(
      fileURI: string,
      textToWrite: string,
      strAppendMode?: string
    ): boolean;
  }
  declare interface FlashSoundItem {
    exportToFile(fileURI: string): boolean;
    bitRate: string;
    bits: string;
    compressionType: string;
    convertStereoToMono: boolean;
    fileLastModifiedDate: string;
    originalCompressionType: string;
    quality: string;
    sampleRate: string;
    sourceFileExists: boolean;
  }
  declare interface FlashInstance {
    instanceType?: string;
    libraryItem?: FlashItem;
  }
  declare interface _FlashBitmap {
    width: any;
    height: any;
    depth: any;
    bits: any;
    cTab?: string[];
  }
  declare interface FlashBitmapInstance {
    getBits(): _FlashBitmap;
    setBits(bitmap: _FlashBitmap): void;
    hPixels: number;
    vPixels: number;
  }
  declare interface FlashCompiledClipInstance {
    accName: string;
    actionScript: string;
    description: string;
    forceSimple: boolean;
    shortcut: string;
    silent: boolean;
    tabIndex: number;
  }
  declare interface FlashSymbolInstance {
    accName: string;
    actionScript: string;
    backgroundColor: string;
    bitmapRenderMode: string;
    blendMode: string;
    buttonTracking: string;
    cacheAsBitmap: boolean;
    colorAlphaAmount: number;
    colorAlphaPercent: number;
    colorBlueAmount: number;
    colorBluePercent: number;
    colorGreenAmount: number;
    colorGreenPercent: number;
    colorMode: string;
    colorRedAmount: number;
    colorRedPercent: number;
    description: string;
    filters: FlashFilter[];
    firstFrame: number;
    forceSimple: boolean;
    loop: string;
    shortcut: string;
    silent: boolean;
    symbolType: string;
    tabIndex: number;
    useBackgroundColor: boolean;
    visible: boolean;
  }
  declare interface FlashComponentInstance {
    parameters: any[];
  }

  /**
   * The Shape object is a subclass of the Element object. The Shape object provides more precise control
   * than the drawing APIs when manipulating or creating geometry on the Stage. This control is necessary
   * so that scripts can create useful effects and other drawing commands (seeElement object).
   * All Shape methods and properties that change a shape or any of its subordinate parts must be placed between
   * shape.beginEdit() and shape.endEdit() calls to function correctly.
   */
  declare type FlashShape = {
    getCubicSegmentPoints(cubicSegmentIndex: number): FlashPoint[],
    beginEdit(): void,
    deleteEdge(index: number): void,
    endEdit(): void,
    contours: FlashContour[],
    edges: FlashEdge[],
    isDrawingObject: boolean,
    isGroup: boolean,
    isOvalObject: boolean,
    isRectangleObject: boolean,
    members: FlashShape[],
    numCubicSegments: number,
    vertices: FlashVertex[]
  } & FlashOval;

  declare type FlashElement = {
    getPersistentData(name: string): any,
    getTransformationPoint(): FlashPoint,
    hasPersistentData(name: string): boolean,
    removePersistentData(name: string): void,
    setPersistentData(name: string, type: string, value: any): void,
    setTransformationPoint(transformationPoint: FlashPoint): void,
    depth: number,

    /**
     * Read-only property; a string that represents the type of the specified element.
     * The value is one of the following: "shape", "text", "instance", or "shapeObj".
     * A "shapeObj" is created with an extensible tool.
     */
    elementType: string,
    height: number,
    layer: FlashLayer,
    left: number,
    locked: boolean,
    matrix: FlashMatrix,
    name: string,
    rotation: number,
    scaleX: number,
    scaleY: number,
    selected: boolean,
    skewX: number,
    skewY: number,
    top: number,
    transformX: number,
    transformY: number,
    width: number,
    x: number,
    y: number
  } & FlashInstance &
    FlashBitmapInstance &
    FlashCompiledClipInstance &
    FlashSymbolInstance &
    FlashComponentInstance &
    FlashShape;

  declare interface FlashFrame {
    getCustomEase(): void;
    setCustomEase(): void;
    actionScript: any;
    duration: any;
    elements: FlashElement[];
    hasCustomEase: any;
    labelType: any;
    motionTweenOrientToPath: any;
    motionTweenRotate: any;
    motionTweenRotateTimes: any;
    motionTweenScale: any;
    motionTweenSnap: any;
    motionTweenSync: any;
    name: any;
    shapeTweenBlend: any;
    soundEffect: any;
    soundLibraryItem: FlashSoundItem;
    soundLoop: any;
    soundLoopMode: any;
    soundName: any;
    soundSync: any;
    startFrame: any;
    tweenEasing: any;
    tweenType: any;
    useSingleEaseCurve: any;
  }
  declare interface FlashSymbolItem {
    convertToCompiledClip(): void;
    exportSWC(outputURI: string): void;
    exportSWF(outputURI: string): void;
    scalingGrid: boolean;
    scalingGridRect: FlashRectangle;
    sourceAutoUpdate: boolean;
    sourceFilePath: string;
    sourceLibraryName: string;
    symbolType: string;
    timeline: FlashTimeline;
  }
  declare interface FlashFolderItem {}
  declare interface FlashFontItem {
    bitmap: boolean;
    bold: boolean;
    embeddedCharacters: string;
    embedRanges: string;
    embedVariantGlyphs: boolean;
    font: string;
    isDefineFont4Symbol: boolean;
    italic: boolean;
    size: number;
  }
  declare interface FlashVideoItem {
    exportToFLV(fileURI: string): boolean;
    fileLastModifiedDate: string;
    sourceFileExists: boolean;
    sourceFileIsCurrent: boolean;
    sourceFilePath: string;
    videoType: string;
  }
  declare interface FlashBitmapItem {
    exportToFile(fileURI: string): boolean;
    allowSmoothing: boolean;
    compressionType: string;
    fileLastModifiedDate: string;
    originalCompressionType: string;
    sourceFileExists: boolean;
    sourceFileIsCurrent: boolean;
    sourceFilePath: string;
    useDeblocking: boolean;
    useImportedJPEGQuality: boolean;
  }
  declare type FlashItem = {
    addData(name: string, type: string, data: any): void,
    getData(name: string): any,
    hasData(name: string): boolean,
    removeData(name: string): void,

    /**
     * Read-only; a string that specifies the type of element.  "undefined", "component", "movie clip", "graphic", "button", "folder", "font", "sound", "bitmap", "compiled clip", "screen", or "video"
     */
    itemType: string,
    linkageBaseClass: string,
    linkageClassName: string,
    linkageExportForAS: boolean,
    linkageExportForRS: boolean,
    linkageExportInFirstFrame: boolean,
    linkageIdentifier: string,
    linkageImportForRS: boolean,
    linkageURL: string,

    /**
     * A string that specifies the name of the library item, which includes the folder structure.
     */
    name: string
  } & FlashSymbolItem &
    FlashFolderItem &
    FlashFontItem &
    FlashSoundItem &
    FlashVideoItem &
    FlashBitmapItem &
    FlashBitmapItem;

  declare interface FlashLayer {
    color: any;
    frameCount: number;
    frames: FlashFrame[];
    height: number;
    layerType: string;
    locked: boolean;
    name: string;
    outline: boolean;
    parentLayer: FlashLayer;
    visible: boolean;
  }
  declare interface FlashLibrary {
    addItemToDocument(position: FlashPoint, namePath?: string): boolean;

    /**
     * "video", "movie clip", "button", "graphic", "bitmap", "screen", and "folder"
     */
    addNewItem(type: string, namePath?: string): boolean;
    deleteItem(namePath?: string): boolean;

    /**
     * Method; makes a copy of the currently selected or specified item. The new item has a default name (such as item copy) and is set as the currently selected item. If more than one item is selected, the command fails.
     */
    duplicateItem(namePath: string): boolean;
    editItem(namePath?: string): boolean;
    expandFolder(
      bExpand: boolean,
      bRecurseNestedParents?: boolean,
      namePath?: string
    ): boolean;
    findItemIndex(namePath: string): number;
    getItemProperty(property: string): string;
    getItemType(namePath?: string): string;

    /**
     * An array of values for all currently selected items in the library.
     */
    getSelectedItems(): FlashItem[];
    importEmbeddedSWF(
      linkageName: string,
      swfData: any[],
      libName?: string
    ): void;
    itemExists(namePath: string): boolean;
    moveToFolder(
      folderPath: string,
      itemToMove?: string,
      bReplace?: boolean
    ): boolean;

    /**
     * Method; creates a new folder with the specified name, or a default name ("untitled folder #" ) if no folderName parameter is provided, in the currently selected folder.
     */
    newFolder(folderPath?: string): boolean;

    /**
     * Method; renames the currently selected library item in the Library panel.
     */
    renameItem(name: string): boolean;

    /**
     * Method; selects or deselects all items in the library.
     */
    selectAll(bSelectAll?: boolean): void;

    /**
     * Method; selects a specified library item.
     */
    selectItem(
      namePath: string,
      bReplaceCurrentSelection?: boolean,
      bSelect?: boolean
    ): boolean;

    /**
     * Method; deselects all the library items.
     */
    selectNone(): void;

    /**
     * Method; sets the property for all selected library items (ignoring folders).
     */
    setItemProperty(property: string, value: any): void;

    /**
     * Method; updates the specified item.
     */
    updateItem(namePath: string): boolean;

    /**
     * Property; an array of item objects in the library.
     */
    items: FlashItem[];
  }
  declare interface FlashMath {
    /**
     * Method; performs a matrix concatenation and returns the result.
     */
    concatMatrix(mat1: FlashMatrix, mat2: FlashMatrix): FlashMatrix;

    /**
     * A Matrix object that is the inverse of the original matrix.
     */
    invertMatrix(mat: FlashMatrix): FlashMatrix;

    /**
     * A floating-point value that represents the distance between the points.
     */
    pointDistance(pt1: FlashPoint, pt2: FlashPoint): number;
  }
  declare interface FlashOutputPanel {
    /**
     * Method; clears the contents of the Output panel. You can use this method in a batch processing application to clear a list of errors, or to save them incrementally by using this method withoutputPanel.save().
     */
    clear(): void;
    save(
      fileURI: string,
      bAppendToFile?: boolean,
      bUseSystemEncoding?: boolean
    ): void;
    trace(message: string): void;
  }

  /**
   * The HalfEdge object is the directed side of the edge of a Shape object.
   * An edge has two half edges. You can transverse the contours of a shape by "walking around"
   * these half edges. For example, starting from a half edge, you can trace all the half edges
   * around a contour of a shape, and return to the original half edge.  Half edges are ordered.
   * One half edge represents one side of the edge; the other half edge represents the other side.
   */
  declare interface FlashHalfEdge {
    getEdge(): FlashEdge;
    getNext(): FlashHalfEdge;
    getOppositeHalfEdge(): FlashHalfEdge;
    getPrev(): FlashHalfEdge;
    getVertex(): FlashVertex;
    id: number;
    index: number;
  }

  /**
   * The Oval object is a shape that is drawn using the Oval Primitive tool. To determine if an item is an Oval object, use shape.isOvalObject.
   */
  declare interface FlashOval {
    /**
     * Read-only property; a Boolean value that specifies whether the Close Path check box in the Property inspector is selected. If the start angle and end angle values for the object are the same, setting this property has no effect until the values change. To set this value, use document.setOvalObjectProperty().
     */
    closePath: boolean;

    /**
     * Read-only property; a float value that specifies the end angle of the Oval object. Acceptable values are from 0 to 360.
     */
    endAngle: number;

    /**
     * Read-only property; a float value that specifies the inner radius of the Oval object as a percentage. Acceptable values are from 0 to 99.
     */
    innerRadius: number;

    /**
     * Read-only property; a float value that specifies the start angle of the Oval object. Acceptable values are from 0 to 360. To set this value, use document.setOvalObjectProperty().
     */
    startAngle: number;
  }

  /**
   * This object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. To retrieve a Fill object, use document.getCustomFill().
   */
  declare interface FlashFill {
    bitmapIsClipped: boolean;
    bitmapPath: string;

    /**
     * Property; the color of the fill, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     */
    color: any;

    /**
     * Property; an array of colors in the gradient, expressed as integers. This property is available only if the value of the fill.style property is either "radialGradient" or "linearGradient". See fill.style
     */
    colorArray: any[];
    focalPoint: number;
    linearRGB: boolean;
    matrix: FlashMatrix;
    overflow: string;
    posArray: number[];
    style: string;
  }
  declare interface FlashContour {
    getHalfEdge(): FlashHalfEdge;
    fill: FlashFill;
    interior: boolean;
    orientation: number;
  }
  declare interface FlashStroke {
    breakAtCorners: boolean;
    capType: string;
    color: any;
    curve: string;
    dash1: number;
    dash2: number;
    density: string;
    dotSize: string;
    dotSpace: number;
    hatchThickness: string;
    jiggle: string;
    joinType: string;
    length: string;
    miterLimit: number;
    pattern: string;
    rotate: string;
    scaleType: string;
    shapeFill: FlashFill;
    space: string;
    strokeHinting: boolean;
    style: string;
    thickness: number;
    variation: string;
    waveHeight: string;
    waveLength: string;
  }
  declare interface FlashEdge {
    getControl(i: number): FlashPoint;
    getHalfEdge(index: number): FlashHalfEdge;
    setControl(index: number, x: number, y: number): void;
    splitEdge(t: number): void;
    cubicSegmentIndex: number;
    id: number;
    isLine: boolean;
    stroke: FlashStroke;
  }
  declare interface FlashVertex {
    getHalfEdge(): FlashHalfEdge;
    setLocation(x: number, y: number): void;
    x: number;
    y: number;
  }
  declare interface FlashTimeline {
    /**
     * Adds a motion guide layer above the current layer and attaches the current layer to the newly added guide layer.
     */
    addMotionGuide(): number;

    /**
     * Adds a new layer to the document and makes it the current layer.
     */
    addNewLayer(name?: string, layerType?: string, bAddAbove?: boolean): void;

    /**
     * Deletes all the contents from a frame or range of frames on the current layer.
     */
    clearFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Converts a keyframe to a regular frame and deletes its contents on the current layer.
     */
    clearKeyframes(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Converts frames to blank keyframes on the current layer.
     */
    convertToBlankKeyframes(
      startFrameIndex?: number,
      endFrameIndex?: number
    ): void;

    /**
     * Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer.
     */
    convertToKeyframes(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Copies a range of frames on the current layer to the clipboard.
     */
    copyFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Copies a range of Timeline layers to the clipboard.
     */
    copyLayers(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Copies motion on selected frames, either from a motion tween or from frame - by - frame animation, so it can be applied to other frames.
     */
    copyMotion(): void;

    /**
     * Copies motion on selected frames, either from a motion tween or from frame - by - frame animation, to the clipboard as ActionScript 3.0 code.
     */
    copyMotionAsAS3(): void;

    /**
     * Creates a new motion object at a designated start and end frame.
     */
    createMotionObject(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Sets the frame.tweenType property to motion for each selected keyframe on the current layer, and converts each frame's contents to a single symbol instance if necessary.
     */
    createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Cuts a range of frames on the current layer from the timeline and saves them to the clipboard.
     */
    cutFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Cuts a range of Timeline layers and saves them to the clipboard.
     */
    cutLayers(startLayerIndex?: number, endLayerIndex?: number): void;

    /**
     * Deletes a layer.
     */
    deleteLayer(index: number): void;

    /**
     * Duplicates the selected layers or specified layers.
     */
    duplicateLayers(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Expands or collapses the specified folder or folders.
     */
    expandFolder(
      bExpand: boolean,
      bRecurseNestedParents?: boolean,
      index?: number
    ): void;

    /**
     * Finds an array of indexes for the layers with the given name.
     */
    findLayerIndex(name: string): number[];

    /**
     * Retrieves the specified property's value for the selected frames.
     */
    getFrameProperty(
      property: string,
      startframeIndex?: number,
      endFrameIndex?: number
    ): any;

    /**
     * Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline(View > Guides > Show Guides).
     */
    getGuidelines(): string;

    /**
     * Retrieves the specified property's value for the selected layers.
     */
    getLayerProperty(property: string): any;

    /**
     * Retrieves the currently selected frames in an array.
     */
    getSelectedFrames(): FlashFrame[];

    /**
     * Retrieves the zero - based index values of the currently selected layers.
     */
    getSelectedLayers(): FlashLayer[];

    /**
     * Inserts a blank keyframe at the specified frame index; if the index is not specified, inserts the blank keyframe by using the playhead / selection.
     */
    insertBlankKeyframe(frameNumIndex?: number): void;

    /**
     * Inserts the specified number of frames at the given frame number.
     */
    insertFrames(
      numFrames?: number,
      bAllLayers?: boolean,
      frameNumIndex?: number
    ): void;

    /**
     * Inserts a keyframe at the specified frame.
     */
    insertKeyframe(frameNumIndex?: number): void;

    /**
     * Pastes the range of frames from the clipboard into the specified frames.
     */
    pasteFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Pastes copied layers to the Timeline above the specified layer index.
     */
    pasteLayers(layerIndex: number): number;

    /**
     * Pastes the range of motion frames retrieved by
     */
    pasteMotion(): void;

    /**
     * Deletes the frame.
     */
    removeFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Removes the motion object created with timeline.createMotionObject(), and converts the frame(s) to static frames.
     */
    removeMotionObject(startFrame: number, endFrame: number): void;

    /**
     * Moves the first specified layer before or after the second specified layer.
     */
    reorderLayer(
      layerToMove: number,
      layerToPutItBy: number,
      bAddBefore?: boolean
    ): void;

    /**
     * Reverses a range of frames.
     */
    reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Selects all the frames in the current timeline.
     */
    selectAllFrames(): void;

    /**
     * Sets the property of the Frame object for the selected frames.
     */
    setFrameProperty(
      property: string,
      value: any,
      startFrameIndex?: number,
      endFrameIndex?: number
    ): void;

    /**
     * Replaces the guide lines for the timeline with the information specified.
     */
    setGuidelines(xmlString: string): boolean;

    /**
     * Sets the specified property on all the selected layers to a specified value.
     */
    setLayerProperty(
      property: string,
      value: any,
      layersToChange?: string
    ): void;

    /**
     * Selects a range of frames in the current layer or sets the selected frames to the selection array passed into this method.
     */
    setSelectedFrames(
      startFrameIndex: number,
      endFrameIndex: number,
      bReplaceCurrentSelection?: boolean
    ): void;
    setSelectedFrames(
      selectionList: number[],
      bReplaceCurrentSelection?: boolean
    ): void;

    /**
     * Sets the layer to be selected; also makes the specified layer the current layer.
     */
    setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void;

    /**
     * Shows the layer masking during authoring by locking the mask and masked layers.
     */
    showLayerMasking(layer: number): void;

    /**
     * Starts automatic playback of the timeline if it is not currently playing.
     */
    startPlayback(): void;

    /**
     * Stops autoumatic playback of the timeline if it is currently playing.
     */
    stopPlayback(): void;

    /**
     * A zero-based index for the frame at the current
     */
    currentFrame: number;

    /**
     * A zero-based index for the currently active layer.
     */
    currentLayer: number;

    /**
     * Read-only; an integer that represents the number of
     */
    frameCount: number;

    /**
     * Read-only; an integer that represents the number of
     */
    layerCount: number;

    /**
     * Read-only; an array of layer objects.
     */
    layers: FlashLayer[];

    /**
     * A string that represents the name of the current
     */
    name: string;
    libraryItem: FlashItem;
  }
  declare interface FlashPath {
    addCubicCurve(
      xAnchor: number,
      yAnchor: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number
    ): void;
    addCurve(
      xAnchor: number,
      yAnchor: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number
    ): void;
    addPoint(x: number, y: number): void;
    clear(): void;
    close(): void;
    void: any;
    makeShape(bSupressFill?: boolean, bSupressStroke?: boolean): void;
    newContour(): void;
    nPts: number;
  }
  declare interface FlashDrawingLayer {
    beginDraw(persistentDraw?: boolean): void;
    beginFrame(): void;
    cubicCurveTo(
      x1Ctrl: number,
      y1Ctrl: number,
      x2Ctl: number,
      y2Ctl: number,
      xEnd: number,
      yEnd: number
    ): void;
    curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void;
    drawPath(path: FlashPath): void;
    endDraw(): void;
    endFrame(): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    newPath(): void;
    setColor(color: any): void;
    setFill(): void;
    setStroke(): void;
  }
  declare interface FlashXMLUI {
    accept(): void;
    cancel(): void;
    get(): void;
    getControlItemElement(): void;
    getEnabled(): void;
    getVisible(): void;
    set(): void;
    setControItemElement(): void;
    setControItemElements(): void;
    setEnabled(): void;
    setVisible(): void;
  }
  declare interface FlashActionsPanel {
    getClassForObject(): void;
    getScriptAssistMode(): void;
    getSelectedText(): void;
    getText(): void;
    hasSelection(): void;
    replaceSelectedText(): void;
    setScriptAssistMode(): void;
    setSelection(): void;
    setText(): void;
  }
  declare interface FlashCompilerErrors {
    clear(): void;
    save(): void;
  }
  declare interface FlashComponentsPanel {
    addItemToDocument(): void;
    reload(): void;
  }
  declare interface FlashPresetPanel {
    addNewItem(): void;
    applyPreset(): void;
    deleteFolder(): void;
    deleteItem(): void;
    expandFolder(): void;
    exportItem(): void;
    findItemIndex(): void;
    getSelectedItems(): void;
    importItem(): void;
    moveToFolder(): void;
    newFolder(): void;
    renameItem(): void;
    selectItem(): void;
  }
  declare interface FlashSwfPanel {
    call(): void;
    setFocus(): void;
    name: any;
    path: any;
  }
  declare interface FlashTools {
    constraintPoint(): void;
    getKeyDown(): void;
    setCreatingBbox(): void;
    setCursor(): void;
    snapPoint(): void;
    activeTool: any;
    altIsDown: any;
    ctlIsDown: any;
    mouseIsDown: any;
    penDownLoc: any;
    penLoc: any;
    shiftIsDown: any;
    toolObjs: any;
  }
  declare class SpriteSheetExporter {
    addBitmap(item: FlashItem): void;
    addSymbol(
      item: FlashItem,
      name?: string,
      beginFrame?: number,
      endFrame?: number
    ): void;
    algorithm: string;
    allowRotate: boolean;
    allowTrimming: boolean;
    app: string;
    autoSize: boolean;
    beginExport(): void;
    borderPadding: number;
    canBorderPad: boolean;
    canRotate: boolean;
    canTrim: boolean;
    canShapePad: boolean;
    canStackDuplicateFrames: boolean;
    changeSymbol(): void;
    exportSpriteSheet(
      fileURL: string,
      option: Object,
      writeMetaData?: boolean
    ): string;
    format: string;
    image: string;
    layoutFormat: string;
    maxSheetHeight: number;
    maxSheetWidth: number;
    overflowed: boolean;
    removeBitmap(): void;
    removeSymbol(): void;
    shapePadding: number;
    sheetHeight: number;
    sheetWidth: number;
    stackDuplicateFrames: boolean;
    version: string;
  }
  declare interface FlashFL {
    addEventListener(eventType: any, callbackFunction: any): void;
    browseForFileURL(
      browseType: any,
      title?: any,
      previewArea?: any,
      fileFilter?: any
    ): void;
    browseForFolderURL(description: string): void;
    clearPublishCache(): void;
    clipCopyString(string: string): void;
    closeAll(bPromptToSave?: boolean): void;
    closeAllPlayerDocuments(): boolean;
    closeDocument(
      documentObject: FlashDocument,
      bPromptToSaveChanges?: boolean
    ): void;

    /**
     * A string that specifies the type of document to create. Acceptable values are "timeline", "presentation", and "application". The default value is "timeline", which has the same effect as choosing File > New > Flash File (ActionScript 3.0). This parameter is optional.
     */
    createDocument(document?: string): FlashDocument;
    exportPublishProfileString(ucfURI: string, profileName: string): string;
    fileExists(fileURI: string): boolean;
    findDocumentDOM(id: number): FlashDocument;
    findDocumentIndex(name: string): number[];
    findObjectInDocByName(
      instanceName: string,
      document: FlashDocument
    ): {
      keyframe: FlashFrame,
      layer: FlashLayer,
      timeline: FlashTimeline,
      parent: any
    }[];

    /**
     * elementType = "shape", "text", "instance", or "shapeObj".
     */
    findObjectInDocByType(elementType: string, document: FlashDocument): any[];
    getAppMemoryInfo(memType: number): void;
    getDocumentDOM(): FlashDocument;
    getSwfPanel(): void;
    isFontInstalled(): void;
    mapPlayerURL(URI: string, returnMBCS?: boolean): string;

    /**
     * Method; opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus. For a user, the effect is the same as selecting File > Open and then selecting a file. If the specified file is already open, the window that contains the document comes to the front. The window that contains the specified file becomes the currently selected document.
     */
    openDocument(fileURI: string): FlashDocument;
    openScript(
      fileURI: string,
      createExtension?: string,
      className?: string
    ): void;
    quit(bPromptIfNeeded?: boolean): void;
    reloadTools(): void;

    /**
     * documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", and "frameChanged".
     */
    removeEventListener(eventType: string): boolean;
    resetAS3PackagePaths(): void;
    resetPackagePaths(): void;
    revertDocument(document: FlashDocument): void;
    runScript(fileURI: string, funcName?: Function, args?: any[]): any;
    saveAll(): void;
    saveDocument(document: FlashDocument, fileURI?: string): boolean;
    saveDocumentAs(document: FlashDocument): boolean;

    /**
     * Method; enables selection or editing of an element. Generally, you will use this method on objects returned by fl.findObjectInDocByName() or fl.findObjectInDocByType().
     */
    selectElement(elementObject: FlashElement, editMode: boolean): boolean;

    /**
     * "arrow","bezierSelect","freeXform","fillXform","lasso","pen","penplus","penminus","penmodify","text","line","rect","oval","rectPrimitive","ovalPrimitive","polystar","pencil","brush","inkBottle","bucket","eyeDropper","eraser","hand", and "magnifier".
     */
    selectTool(toolName: string): void;
    selectActiveWindow(document: FlashDocument, bActivateFrame?: boolean): void;
    showIdleMessage(show: boolean): void;
    toggleBreakpoint(): void;
    trace(message: any): void;
    actionsPanel: FlashActionsPanel;
    as3PackagePaths: string;
    compilerErrors: FlashCompilerErrors;
    componentsPanel: FlashComponentsPanel;
    configDirectory: string;
    configURI: string;
    contactSensitiveSelection: boolean;
    createNewDocList: string[];
    createNewDocListType: string[];
    createNewTemplateList: string[];
    documents: FlashDocument[];
    drawingLayer: FlashDrawingLayer;
    externalLibraryPath: string;
    flexSDKPath: string;
    installedPlayers: any[];
    languageCode: string;
    libraryPath: string;
    Math: FlashMath;
    mruRecentFileList: string[];
    mruRecentFileListType: string[];
    packagePaths: string[];
    publishCacheDiskSizeMax: number;
    publishCacheEnabled: boolean;
    publishCacheMemoryEntrySizeLimit: number;
    publishCacheMemorySizeMax: number;
    objectDrawingMode: number;
    outputPanel: FlashOutputPanel;
    presetPanel: FlashPresetPanel;
    scriptURI: string;
    sourcePath: string;
    swfPanels: FlashSwfPanel[];
    tools: FlashTools[];
    version: string;
    xmlui: FlashXMLUI;
  }
  declare var fl: FlashFL;
  declare var FLfile: FlashFLfile;
  declare function alert(alertText: string): void;

  declare function confirm(strAlert: string): boolean;

  declare function prompt(promptMsg: string, text?: string): string;
}
