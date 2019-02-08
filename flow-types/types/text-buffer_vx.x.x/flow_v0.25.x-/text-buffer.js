declare interface Structures$TextChange {
  newExtent: TextBuffer$Point;
  oldExtent: TextBuffer$Point;
  newRange: TextBuffer$Range;
  oldRange: TextBuffer$Range;
  newText: string;
  oldText: string;
  start: TextBuffer$Point;
}

declare interface Structures$BufferScanResult {
  buffer: TextBuffer$TextBuffer;
  lineText: string;
  match: RegExpExecArray;
  matchText: string;
  range: TextBuffer$Range;
  replace(replacementText: string): void;
  stop(): void;
  stopped: boolean;
}

declare type Structures$ContextualBufferScanResult = {
  leadingContextLines: string[],
  trailingContextLines: string[]
} & Structures$BufferScanResult;
declare interface Options$BufferLoad {
  /**
   * The file's encoding.
   */
  encoding?: string;

  /**
   * A function that returns a boolean indicating whether the buffer should
   * be destroyed if its file is deleted.
   */
  shouldDestroyOnFileDelete?: () => boolean;
}

declare interface Options$FindMarker {
  /**
   * Only include markers that start at the given Point.
   */
  startPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers that end at the given Point.
   */
  endPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers that start inside the given Range.
   */
  startsInRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers that end inside the given Range.
   */
  endsInRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers that contain the given Point, inclusive.
   */
  containsPoint?: TextBuffer$PointCompatible;

  /**
   * Only include markers that contain the given Range, inclusive.
   */
  containsRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers that start at the given row number.
   */
  startRow?: number;

  /**
   * Only include markers that end at the given row number.
   */
  endRow?: number;

  /**
   * Only include markers that intersect the given row number.
   */
  intersectsRow?: number;
}

declare interface Options$FindDisplayMarker {
  /**
   * Only include markers starting at this Point in buffer coordinates.
   */
  startBufferPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers ending at this Point in buffer coordinates.
   */
  endBufferPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers starting at this Point in screen coordinates.
   */
  startScreenPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers ending at this Point in screen coordinates.
   */
  endScreenPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers starting inside this Range in buffer coordinates.
   */
  startsInBufferRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers ending inside this Range in buffer coordinates.
   */
  endsInBufferRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers starting inside this Range in screen coordinates.
   */
  startsInScreenRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers ending inside this Range in screen coordinates.
   */
  endsInScreenRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers starting at this row in buffer coordinates.
   */
  startBufferRow?: number;

  /**
   * Only include markers ending at this row in buffer coordinates.
   */
  endBufferRow?: number;

  /**
   * Only include markers starting at this row in screen coordinates.
   */
  startScreenRow?: number;

  /**
   * Only include markers ending at this row in screen coordinates.
   */
  endScreenRow?: number;

  /**
   * Only include markers intersecting this Array of [startRow, endRow] in
   * buffer coordinates.
   */
  intersectsBufferRowRange?: [number, number];

  /**
   * Only include markers intersecting this Array of [startRow, endRow] in
   * screen coordinates.
   */
  intersectsScreenRowRange?: [number, number];

  /**
   * Only include markers containing this Range in buffer coordinates.
   */
  containsBufferRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers containing this Point in buffer coordinates.
   */
  containsBufferPosition?: TextBuffer$PointCompatible;

  /**
   * Only include markers contained in this Range in buffer coordinates.
   */
  containedInBufferRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers contained in this Range in screen coordinates.
   */
  containedInScreenRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers intersecting this Range in buffer coordinates.
   */
  intersectsBufferRange?: TextBuffer$RangeCompatible;

  /**
   * Only include markers intersecting this Range in screen coordinates.
   */
  intersectsScreenRange?: TextBuffer$RangeCompatible;
}

declare interface Options$CopyMarker {
  /**
   * Whether or not the marker should be tailed.
   */
  tailed?: boolean;

  /**
   * Creates the marker in a reversed orientation.
   */
  reversed?: boolean;

  /**
   * Determines the rules by which changes to the buffer invalidate the marker.
   */
  invalidate?: "never" | "surround" | "overlap" | "inside" | "touch";

  /**
   * Indicates whether insertions at the start or end of the marked range should
   * be interpreted as happening outside the marker.
   */
  exclusive?: boolean;

  /**
   * Custom properties to be associated with the marker.
   * @deprecated
   */
  properties?: { [key: string]: any };
}

declare interface Options$ScanContext {
  /**
   * The number of lines before the matched line to include in the results object.
   */
  leadingContextLineCount?: number;

  /**
   * The number of lines after the matched line to include in the results object.
   */
  trailingContextLineCount?: number;
}
declare interface Events$BufferWatchError {
  /**
   * The error object.
   */
  error: Error;

  /**
   * Call this function to indicate you have handled the error.
   * The error will not be thrown if this function is called.
   */
  handle(): void;
}

declare interface Events$FileSaved {
  /**
   * The path to which the buffer was saved.
   */
  path: string;
}

declare interface Events$MarkerChanged {
  /**
   * Point representing the former head position.
   */
  oldHeadPosition: TextBuffer$Point;

  /**
   * Point representing the new head position.
   */
  newHeadPosition: TextBuffer$Point;

  /**
   * Point representing the former tail position.
   */
  oldTailPosition: TextBuffer$Point;

  /**
   * Point representing the new tail position.
   */
  newTailPosition: TextBuffer$Point;

  /**
   * Boolean indicating whether the marker was valid before the change.
   */
  wasValid: boolean;

  /**
   * Boolean indicating whether the marker is now valid.
   */
  isValid: boolean;

  /**
   * Boolean indicating whether the marker had a tail before the change.
   */
  hadTail: boolean;

  /**
   * Boolean indicating whether the marker now has a tail.
   */
  hasTail: boolean;

  /**
   * Object containing the marker's custom properties before the change.
   * @deprecated
   */
  oldProperties: { [key: string]: any };

  /**
   * Object containing the marker's custom properties after the change.
   * @deprecated
   */
  newProperties: { [key: string]: any };

  /**
   * Boolean indicating whether this change was caused by a textual
   * change to the buffer or whether the marker was manipulated directly
   * via its public API.
   */
  textChanged: boolean;
}

declare interface Events$DisplayMarkerChanged {
  /**
   * Point representing the former head buffer position.
   */
  oldHeadBufferPosition: TextBuffer$Point;

  /**
   * Point representing the new head buffer position.
   */
  newHeadBufferPosition: TextBuffer$Point;
  oldTailBufferPosition: TextBuffer$Point;

  /**
   * Point representing the new tail buffer position.
   */
  newTailBufferPosition: TextBuffer$Point;

  /**
   * Point representing the former head screen position.
   */
  oldHeadScreenPosition: TextBuffer$Point;

  /**
   * Point representing the new head screen position.
   */
  newHeadScreenPosition: TextBuffer$Point;

  /**
   * Point representing the former tail screen position.
   */
  oldTailScreenPosition: TextBuffer$Point;

  /**
   * Point representing the new tail screen position.
   */
  newTailScreenPosition: TextBuffer$Point;

  /**
   * Boolean indicating whether the marker was valid before the change.
   */
  wasValid: boolean;

  /**
   * Boolean indicating whether the marker is now valid.
   */
  isValid: boolean;

  /**
   * Boolean indicating whether the marker had a tail before the change.
   */
  hadTail: boolean;

  /**
   * Boolean indicating whether the marker now has a tail
   */
  hasTail: boolean;

  /**
   * Object containing the marker's custom properties before the change.
   * @deprecated
   */
  oldProperties: { [key: string]: any };

  /**
   * Object containing the marker's custom properties after the change.
   * @deprecated
   */
  newProperties: { [key: string]: any };

  /**
   * Boolean indicating whether this change was caused by a textual change to the
   * buffer or whether the marker was manipulated directly via its public API.
   */
  textChanged: boolean;
}

declare interface Events$BufferChanging {
  /**
   * Range of the old text.
   */
  oldRange: TextBuffer$Range;
}

declare interface Events$BufferChanged {
  /**
   * Range of the old text.
   */
  oldRange: TextBuffer$Range;

  /**
   * Range of the new text.
   */
  newRange: TextBuffer$Range;

  /**
   * String containing the text that was replaced.
   */
  oldText: string;

  /**
   * String containing the text that was inserted.
   */
  newText: string;
}

declare interface Events$BufferStoppedChanging {
  changes: Structures$Structures$TextChange[];
}
/**
 * Represents a buffer annotation that remains logically stationary even as
 * the buffer changes.
 */
declare interface TextBuffer$Marker {
  id: number;
  tailed: boolean;
  reversed: boolean;
  valid: boolean;
  invalidate: string;
  properties: { [key: string]: any };

  /**
   * Creates and returns a new Marker with the same properties as this
   * marker.
   */
  copy(options?: Options$Options$CopyMarker): TextBuffer$Marker;

  /**
   * Destroys the marker, causing it to emit the "destroyed" event.
   */
  destroy(): void;

  /**
   * Invoke the given callback when the marker is destroyed.
   */
  onDidDestroy(callback: () => void): Disposable;

  /**
   * Invoke the given callback when the state of the marker changes.
   */
  onDidChange(
    callback: (event: Events$Events$MarkerChanged) => void
  ): Disposable;

  /**
   * Returns the current range of the marker. The range is immutable.
   */
  getRange(): TextBuffer$Range;

  /**
   * Returns a point representing the marker's current head position.
   */
  getHeadPosition(): TextBuffer$Point;

  /**
   * Returns a point representing the marker's current tail position.
   */
  getTailPosition(): TextBuffer$Point;

  /**
   * Returns a point representing the start position of the marker, which
   * could be the head or tail position, depending on its orientation.
   */
  getStartPosition(): TextBuffer$Point;

  /**
   * Returns a point representing the end position of the marker, which
   * could be the head or tail position, depending on its orientation.
   */
  getEndPosition(): TextBuffer$Point;

  /**
   * Returns a boolean indicating whether the head precedes the tail.
   */
  isReversed(): boolean;

  /**
   * Returns a boolean indicating whether the marker has a tail.
   */
  hasTail(): boolean;

  /**
   * Is the marker valid?
   */
  isValid(): boolean;

  /**
   * Is the marker destroyed?
   */
  isDestroyed(): boolean;

  /**
   * Returns a boolean indicating whether changes that occur exactly at
   * the marker's head or tail cause it to move.
   */
  isExclusive(): boolean;

  /**
   * Get the invalidation strategy for this marker.
   */
  getInvalidationStrategy(): string;

  /**
   * Sets the range of the marker.
   * Returns a boolean indicating whether or not the marker was updated.
   */
  setRange(
    range: TextBuffer$RangeCompatible,
    params?: {
      reversed?: boolean,
      exclusive?: boolean
    }
  ): boolean;

  /**
   * Sets the head position of the marker.
   * Returns a boolean indicating whether or not the marker was updated.
   */
  setHeadPosition(position: TextBuffer$PointCompatible): boolean;

  /**
   * Sets the tail position of the marker.
   * Returns a boolean indicating whether or not the marker was updated.
   */
  setTailPosition(position: TextBuffer$PointCompatible): boolean;

  /**
   * Removes the marker's tail.
   * Returns a boolean indicating whether or not the marker was updated.
   */
  clearTail(): boolean;

  /**
   * Plants the marker's tail at the current head position.
   * Returns a boolean indicating whether or not the marker was updated.
   */
  plantTail(): boolean;

  /**
   * Returns a boolean indicating whether this marker is equivalent to
   * another marker, meaning they have the same range and options.
   */
  isEqual(other: TextBuffer$Marker): boolean;

  /**
   * Compares this marker to another based on their ranges.
   * Returns "-1" if this marker precedes the argument.
   * Returns "0" if this marker is equivalent to the argument.
   * Returns "1" if this marker follows the argument.
   */
  compare(other: TextBuffer$Marker): number;
}

/**
 * Experimental: A container for a related set of markers.
 */
declare interface TextBuffer$MarkerLayer {
  /**
   * Create a copy of this layer with markers in the same state and locations.
   */
  copy(): TextBuffer$MarkerLayer;

  /**
   * Destroy this layer.
   */
  destroy(): boolean;

  /**
   * Remove all markers from this layer.
   */
  clear(): void;

  /**
   * Determine whether this layer has been destroyed.
   */
  isDestroyed(): boolean;

  /**
   * Get an existing marker by its id.
   */
  getMarker(id: number): TextBuffer$Marker | void;

  /**
   * Get all existing markers on the marker layer.
   */
  getMarkers(): TextBuffer$Marker[];

  /**
   * Get the number of markers in the marker layer.
   */
  getMarkerCount(): number;

  /**
   * Find markers in the layer conforming to the given parameters.
   */
  findMarkers(params: Options$Options$FindMarker): TextBuffer$Marker[];

  /**
   * Create a marker with the given range.
   */
  markRange(
    range: TextBuffer$RangeCompatible,
    options?: {
      reversed?: boolean,
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$Marker;

  /**
   * Create a marker at with its head at the given position with no tail.
   */
  markPosition(
    position: TextBuffer$PointCompatible,
    options?: {
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$Marker;

  /**
   * Subscribe to be notified asynchronously whenever markers are created,
   * updated, or destroyed on this layer.
   */
  onDidUpdate(callback: () => void): Disposable;

  /**
   * Subscribe to be notified synchronously whenever markers are created on
   * this layer.
   */
  onDidCreateMarker(callback: (marker: TextBuffer$Marker) => void): Disposable;

  /**
   * Subscribe to be notified synchronously when this layer is destroyed.
   */
  onDidDestroy(callback: () => void): Disposable;
}

/**
 * Represents a buffer annotation that remains logically stationary even as the
 * buffer changes. This is used to represent cursors, folds, snippet targets,
 * misspelled words, and anything else that needs to track a logical location
 * in the buffer over time.
 */
declare interface TextBuffer$DisplayMarker {
  /**
   * Destroys the marker, causing it to emit the 'destroyed' event. Once destroyed,
   * a marker cannot be restored by undo/redo operations.
   */
  destroy(): void;

  /**
   * Creates and returns a new DisplayMarker with the same properties as this marker.
   */
  copy(options?: Options$Options$CopyMarker): TextBuffer$DisplayMarker;

  /**
   * Invoke the given callback when the state of the marker changes.
   */
  onDidChange(
    callback: (event: Events$Events$DisplayMarkerChanged) => void
  ): Disposable;

  /**
   * Invoke the given callback when the marker is destroyed.
   */
  onDidDestroy(callback: () => void): Disposable;

  /**
   * Returns a boolean indicating whether the marker is valid. Markers can be
   * invalidated when a region surrounding them in the buffer is changed.
   */
  isValid(): boolean;

  /**
   * Returns a boolean indicating whether the marker has been destroyed. A marker
   * can be invalid without being destroyed, in which case undoing the invalidating
   * operation would restore the marker.
   */
  isDestroyed(): boolean;

  /**
   * Returns a boolean indicating whether the head precedes the tail.
   */
  isReversed(): boolean;

  /**
   * Returns a boolean indicating whether changes that occur exactly at the marker's
   * head or tail cause it to move.
   */
  isExclusive(): boolean;

  /**
   * Get the invalidation strategy for this marker.
   * Valid values include: never, surround, overlap, inside, and touch.
   */
  getInvalidationStrategy(): string;

  /**
   * Returns an Object containing any custom properties associated with the marker.
   */
  getProperties(): { [key: string]: any };

  /**
   * Merges an Object containing new properties into the marker's existing properties.
   */
  setProperties(properties: { [key: string]: any }): void;

  /**
   * Returns whether this marker matches the given parameters.
   */
  matchesProperties(attributes: Options$Options$FindDisplayMarker): boolean;

  /**
   * Compares this marker to another based on their ranges.
   */
  compare(other: TextBuffer$DisplayMarker): number;

  /**
   * Returns a boolean indicating whether this marker is equivalent to another
   * marker, meaning they have the same range and options.
   */
  isEqual(other: TextBuffer$DisplayMarker): boolean;

  /**
   * Gets the buffer range of this marker.
   */
  getBufferRange(): TextBuffer$Range;

  /**
   * Gets the screen range of this marker.
   */
  getScreenRange(): TextBuffer$Range;

  /**
   * Modifies the buffer range of this marker.
   */
  setBufferRange(
    bufferRange: TextBuffer$RangeCompatible,
    properties?: {
      reversed: boolean
    }
  ): void;

  /**
   * Modifies the screen range of this marker.
   */
  setScreenRange(
    screenRange: TextBuffer$RangeCompatible,
    options?: {
      reversed?: boolean,
      clipDirection?: "backward" | "forward" | "closest"
    }
  ): void;

  /**
   * Retrieves the screen position of the marker's start. This will always be
   * less than or equal to the result of DisplayMarker::getEndScreenPosition.
   */
  getStartScreenPosition(options?: {
    clipDirection: "backward" | "forward" | "closest"
  }): TextBuffer$Point;

  /**
   * Retrieves the screen position of the marker's end. This will always be
   * greater than or equal to the result of DisplayMarker::getStartScreenPosition.
   */
  getEndScreenPosition(options?: {
    clipDirection: "backward" | "forward" | "closest"
  }): TextBuffer$Point;

  /**
   * Retrieves the buffer position of the marker's head.
   */
  getHeadBufferPosition(): TextBuffer$Point;

  /**
   * Sets the buffer position of the marker's head.
   */
  setHeadBufferPosition(bufferPosition: TextBuffer$PointCompatible): void;

  /**
   * Retrieves the screen position of the marker's head.
   */
  getHeadScreenPosition(options?: {
    clipDirection: "backward" | "forward" | "closest"
  }): TextBuffer$Point;

  /**
   * Sets the screen position of the marker's head.
   */
  setHeadScreenPosition(
    screenPosition: TextBuffer$PointCompatible,
    options?: {
      clipDirection: "backward" | "forward" | "closest"
    }
  ): void;

  /**
   * Retrieves the buffer position of the marker's tail.
   */
  getTailBufferPosition(): TextBuffer$Point;

  /**
   * Sets the buffer position of the marker's tail.
   */
  setTailBufferPosition(bufferPosition: TextBuffer$PointCompatible): void;

  /**
   * Retrieves the screen position of the marker's tail.
   */
  getTailScreenPosition(options?: {
    clipDirection: "backward" | "forward" | "closest"
  }): TextBuffer$Point;

  /**
   * Sets the screen position of the marker's tail.
   */
  setTailScreenPosition(
    screenPosition: TextBuffer$PointCompatible,
    options?: {
      clipDirection: "backward" | "forward" | "closest"
    }
  ): void;

  /**
   * Retrieves the buffer position of the marker's start. This will always be less
   * than or equal to the result of DisplayMarker::getEndBufferPosition.
   */
  getStartBufferPosition(): TextBuffer$Point;

  /**
   * Retrieves the buffer position of the marker's end. This will always be greater
   * than or equal to the result of DisplayMarker::getStartBufferPosition.
   */
  getEndBufferPosition(): TextBuffer$Point;

  /**
   * Returns a boolean indicating whether the marker has a tail.
   */
  hasTail(): boolean;

  /**
   * Plants the marker's tail at the current head position. After calling the
   * marker's tail position will be its head position at the time of the call,
   * regardless of where the marker's head is moved.
   */
  plantTail(): void;

  /**
   * Removes the marker's tail. After calling the marker's head position will be
   * reported as its current tail position until the tail is planted again.
   */
  clearTail(): void;
}

/**
 * Experimental: A container for a related set of markers at the DisplayLayer level.
 * Wraps an underlying MarkerLayer on the TextBuffer.
 *
 * This API is experimental and subject to change on any release.
 */
declare interface TextBuffer$DisplayMarkerLayer {
  /**
   * Destroy this layer.
   */
  destroy(): void;

  /**
   * Destroy all markers in this layer.
   */
  clear(): void;

  /**
   * Determine whether this layer has been destroyed.
   */
  isDestroyed(): boolean;

  /**
   * Subscribe to be notified synchronously when this layer is destroyed.
   */
  onDidDestroy(callback: () => void): Disposable;

  /**
   * Subscribe to be notified asynchronously whenever markers are created, updated,
   * or destroyed on this layer. Prefer this method for optimal performance when
   * interacting with layers that could contain large numbers of markers.
   */
  onDidUpdate(callback: () => void): Disposable;

  /**
   * Subscribe to be notified synchronously whenever markers are created on this
   * layer. Avoid this method for optimal performance when interacting with layers
   * that could contain large numbers of markers.
   */
  onDidCreateMarker(
    callback: (marker: TextBuffer$DisplayMarker | TextBuffer$Marker) => void
  ): Disposable;

  /**
   * Create a marker with the given screen range.
   */
  markScreenRange(
    range: TextBuffer$RangeCompatible,
    options?: {
      reversed?: boolean,
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean,
      clipDirection?: "backward" | "forward" | "closest"
    }
  ): TextBuffer$DisplayMarker;

  /**
   * Create a marker on this layer with its head at the given screen position
   * and no tail.
   */
  markScreenPosition(
    screenPosition: TextBuffer$PointCompatible,
    options?: {
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean,
      clipDirection?: "backward" | "forward" | "closest"
    }
  ): TextBuffer$DisplayMarker;

  /**
   * Create a marker with the given buffer range.
   */
  markBufferRange(
    range: TextBuffer$RangeCompatible,
    options?: {
      reversed?: boolean,
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$DisplayMarker;

  /**
   * Create a marker on this layer with its head at the given buffer position
   * and no tail.
   */
  markBufferPosition(
    bufferPosition: TextBuffer$PointCompatible,
    options?: {
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$DisplayMarker;

  /**
   * Get an existing marker by its id.
   */
  getMarker(id: number): TextBuffer$DisplayMarker;

  /**
   * Get all markers in the layer.
   */
  getMarkers(): TextBuffer$DisplayMarker[];

  /**
   * Get the number of markers in the marker layer.
   */
  getMarkerCount(): number;

  /**
   * Find markers in the layer conforming to the given parameters.
   *
   * This method finds markers based on the given properties. Markers can be associated
   * with custom properties that will be compared with basic equality. In addition,
   * there are several special properties that will be compared with the range of the
   * markers rather than their properties.
   */
  findMarkers(
    properties: Options$Options$FindDisplayMarker
  ): TextBuffer$DisplayMarker[];
}

/**
 * Represents a point in a buffer in row/column coordinates.
 */
declare interface TextBuffer$Point {
  /**
   * A zero-indexed number representing the row of the Point.
   */
  row: number;

  /**
   * A zero-indexed number representing the column of the Point.
   */
  column: number;

  /**
   * Returns a new Point with the same row and column.
   */
  copy(): TextBuffer$Point;

  /**
   * Returns a new Point with the row and column negated.
   */
  negate(): TextBuffer$Point;

  /**
   * Compare another Point to this Point instance.
   * Returns -1 if this point precedes the argument.
   * Returns 0 if this point is equivalent to the argument.
   * Returns 1 if this point follows the argument.
   */
  compare(other: TextBuffer$PointCompatible): number;

  /**
   * Returns a boolean indicating whether this point has the same row and
   * column as the given Point.
   */
  isEqual(other: TextBuffer$PointCompatible): boolean;

  /**
   * Returns a Boolean indicating whether this point precedes the given Point.
   */
  isLessThan(other: TextBuffer$PointCompatible): boolean;

  /**
   * Returns a Boolean indicating whether this point precedes or is equal to
   * the given Point.
   */
  isLessThanOrEqual(other: TextBuffer$PointCompatible): boolean;

  /**
   * Returns a Boolean indicating whether this point follows the given Point.
   */
  isGreaterThan(other: TextBuffer$PointCompatible): boolean;

  /**
   * Returns a Boolean indicating whether this point follows or is equal to
   * the given Point.
   */
  isGreaterThanOrEqual(other: TextBuffer$PointCompatible): boolean;

  /**
   * Makes this point immutable and returns itself.
   */
  freeze(): $ReadOnly<TextBuffer$Point>;

  /**
   * Build and return a new point by adding the rows and columns of the
   * given point.
   */
  translate(other: TextBuffer$PointCompatible): TextBuffer$Point;

  /**
   * Build and return a new Point by traversing the rows and columns
   * specified by the given point.
   */
  traverse(other: TextBuffer$PointCompatible): TextBuffer$Point;

  /**
   * Returns an array of this point's row and column.
   */
  toArray(): [number, number];

  /**
   * Returns an array of this point's row and column.
   */
  serialize(): [number, number];

  /**
   * Returns a string representation of the point.
   */
  toString(): string;
}

/**
 * The static side to the Point class.
 */
declare interface TextBuffer$PointStatic {
  /**
   * Create a Point from an array containing two numbers representing the
   * row and column.
   */
  fromObject(
    object: TextBuffer$PointCompatible,
    copy?: boolean
  ): TextBuffer$Point;

  /**
   * Construct a Point object
   */
  new(row?: number, column?: number): TextBuffer$Point;

  /**
   * Returns the given Point that is earlier in the buffer.
   */
  min(
    point1: TextBuffer$PointCompatible,
    point2: TextBuffer$PointCompatible
  ): TextBuffer$Point;
}

/**
 * The types usable when constructing a point via the Point::fromObject method.
 */
declare type TextBuffer$PointCompatible =
  | TextBuffer$PointLike
  | [number, number];

/**
 * The interface that should be implemented for all "point-compatible" objects.
 */
declare interface TextBuffer$PointLike {
  /**
   * A zero-indexed number representing the row of the Point.
   */
  row: number;

  /**
   * A zero-indexed number representing the column of the Point.
   */
  column: number;
}

/**
 * Represents a region in a buffer in row/column coordinates.
 */
declare interface TextBuffer$Range {
  /**
   * A Point representing the start of the Range.
   */
  start: TextBuffer$PointLike;

  /**
   * A Point representing the end of the Range.
   */
  end: TextBuffer$PointLike;

  /**
   * Returns a new range with the same start and end positions.
   */
  copy(): TextBuffer$Range;

  /**
   * Returns a new range with the start and end positions negated.
   */
  negate(): TextBuffer$Range;

  /**
   * Returns a plain javascript object representation of the range.
   */
  serialize(): number[][];

  /**
   * Is the start position of this range equal to the end position?
   */
  isEmpty(): boolean;

  /**
   * Returns a boolean indicating whether this range starts and ends on the
   * same row.
   */
  isSingleLine(): boolean;

  /**
   * Get the number of rows in this range.
   */
  getRowCount(): number;

  /**
   * Returns an array of all rows in the range.
   */
  getRows(): number[];

  /**
   * Freezes the range and its start and end point so it becomes immutable
   * and returns itself.
   */
  freeze(): $ReadOnly<TextBuffer$Range>;

  /**
   * Returns a new range that contains this range and the given range.
   */
  union(other: TextBuffer$RangeLike): TextBuffer$Range;

  /**
   * Build and return a new range by translating this range's start and end
   * points by the given delta(s).
   */
  translate(
    startDelta: TextBuffer$PointCompatible,
    endDelta?: TextBuffer$PointCompatible
  ): TextBuffer$Range;

  /**
   * Build and return a new range by traversing this range's start and end
   * points by the given delta.
   */
  traverse(delta: TextBuffer$PointCompatible): TextBuffer$Range;

  /**
   * Compare two Ranges.
   * Returns -1 if this range starts before the argument or contains it.
   * Returns 0 if this range is equivalent to the argument.
   * Returns 1 if this range starts after the argument or is contained by it.
   */
  compare(otherRange: TextBuffer$RangeCompatible): number;

  /**
   * Returns a Boolean indicating whether this range has the same start and
   * end points as the given Range.
   */
  isEqual(otherRange: TextBuffer$RangeCompatible): boolean;

  /**
   * Returns a Boolean indicating whether this range starts and ends on the
   * same row as the argument.
   */
  coversSameRows(otherRange: TextBuffer$RangeLike): boolean;

  /**
   * Determines whether this range intersects with the argument.
   */
  intersectsWith(
    otherRange: TextBuffer$RangeLike,
    exclusive?: boolean
  ): boolean;

  /**
   * Returns a boolean indicating whether this range contains the given range.
   */
  containsRange(
    otherRange: TextBuffer$RangeCompatible,
    exclusive?: boolean
  ): boolean;

  /**
   * Returns a boolean indicating whether this range contains the given point.
   */
  containsPoint(
    point: TextBuffer$PointCompatible,
    exclusive?: boolean
  ): boolean;

  /**
   * Returns a boolean indicating whether this range intersects the given
   * row number.
   */
  intersectsRow(row: number): boolean;

  /**
   * Returns a boolean indicating whether this range intersects the row range
   * indicated by the given startRow and endRow numbers.
   */
  intersectsRowRange(startRow: number, endRow: number): boolean;

  /**
   * Returns a string representation of the range.
   */
  toString(): string;
}

/**
 * The static side to the Range class.
 */
declare interface TextBuffer$RangeStatic {
  /**
   * Convert any range-compatible object to a Range.
   */
  fromObject(
    object: TextBuffer$RangeCompatible,
    copy?: boolean
  ): TextBuffer$Range;

  /**
   * Construct a Range object.
   */
  new(
    pointA?: TextBuffer$PointCompatible,
    pointB?: TextBuffer$PointCompatible
  ): TextBuffer$Range;

  /**
   * Call this with the result of Range::serialize to construct a new Range.
   */
  deserialize(array: { [key: string]: any }): TextBuffer$Range;
}

/**
 * The types usable when constructing a range via the Range::fromObject method.
 */
declare type TextBuffer$RangeCompatible =
  | TextBuffer$RangeLike
  | [TextBuffer$PointLike, TextBuffer$PointLike]
  | [TextBuffer$PointLike, [number, number]]
  | [[number, number], TextBuffer$PointLike]
  | [[number, number], [number, number]];

/**
 * The interface that should be implemented for all "range-compatible" objects.
 */
declare interface TextBuffer$RangeLike {
  /**
   * A Point representing the start of the Range.
   */
  start: TextBuffer$PointLike;

  /**
   * A Point representing the end of the Range.
   */
  end: TextBuffer$PointLike;
}

/**
 * A mutable text container with undo/redo support and the ability to
 * annotate logical regions in the text.
 */
declare interface TextBuffer$TextBuffer {
  file: File;
  lines: string[];
  lineEndings: string[];
  stoppedChangingDelay: number;
  conflict: boolean;
  loaded: boolean;
  destroyed: boolean;
  refcount: number;
  id: string;

  /**
   * Schedules a 'did-stop-changing' emission. The event will be emitted between
   * now and TextBuffer::stoppedChangingDelay milliseconds in the future.
   */
  debouncedEmitDidStopChangingEvent(): void;

  /**
   * Destroys the buffer, emitting the 'did-destroy' prior to doing so.
   */
  destroy(): void;

  /**
   * Returns whether or not the given buffer is alive.
   */
  isAlive(): boolean;

  /**
   * Returns whether or not the given buffer has been destroyed.
   */
  isDestroyed(): boolean;

  /**
   * Returns whether or not this text buffer is currently retained.
   */
  isRetained(): boolean;

  /**
   * Retains the text buffer, preventing its destruction via TextBuffer::release.
   */
  retain(): TextBuffer$TextBuffer;

  /**
   * Release the text buffer, destroying it if there are no other retainers.
   */
  release(): TextBuffer$TextBuffer;

  /**
   * Invoke the given callback synchronously before the content of the buffer
   * changes.
   */
  onWillChange(
    callback: (event: Events$Events$BufferChanging) => void
  ): Disposable;

  /**
   * Invoke the given callback synchronously when the content of the buffer
   * changes. You should probably not be using this in packages.
   */
  onDidChange(
    callback: (event: Events$Events$BufferChanged) => void
  ): Disposable;

  /**
   * Invoke the given callback synchronously when a transaction finishes with
   * a list of all the changes in the transaction.
   */
  onDidChangeText(
    callback: (event: Events$Events$BufferStoppedChanging) => void
  ): Disposable;

  /**
   * Invoke the given callback asynchronously following one or more changes after
   * ::getStoppedChangingDelay milliseconds elapse without an additional change.
   */
  onDidStopChanging(
    callback: (event: Events$Events$BufferStoppedChanging) => void
  ): Disposable;

  /**
   * Invoke the given callback when the in-memory contents of the buffer become
   * in conflict with the contents of the file on disk.
   */
  onDidConflict(callback: () => void): Disposable;

  /**
   * Invoke the given callback if the value of ::isModified changes.
   */
  onDidChangeModified(callback: (modified: boolean) => void): Disposable;

  /**
   * Invoke the given callback when all marker ::onDidChange observers have been
   * notified following a change to the buffer.
   */
  onDidUpdateMarkers(callback: () => void): Disposable;
  onDidCreateMarker(callback: (marker: TextBuffer$Marker) => void): Disposable;

  /**
   * Invoke the given callback when the value of ::getPath changes.
   */
  onDidChangePath(callback: (path: string) => void): Disposable;

  /**
   * Invoke the given callback when the value of ::getEncoding changes.
   */
  onDidChangeEncoding(callback: (encoding: string) => void): Disposable;

  /**
   * Invoke the given callback before the buffer is saved to disk. If the
   * given callback returns a promise, then the buffer will not be saved until
   * the promise resolves.
   */
  onWillSave(callback: () => Promise<void> | void): Disposable;

  /**
   * Invoke the given callback after the buffer is saved to disk.
   */
  onDidSave(callback: (event: Events$Events$FileSaved) => void): Disposable;

  /**
   * Invoke the given callback after the file backing the buffer is deleted.
   */
  onDidDelete(callback: () => void): Disposable;

  /**
   * Invoke the given callback before the buffer is reloaded from the contents
   * of its file on disk.
   */
  onWillReload(callback: () => void): Disposable;

  /**
   * Invoke the given callback after the buffer is reloaded from the contents
   * of its file on disk.
   */
  onDidReload(callback: () => void): Disposable;

  /**
   * Invoke the given callback when the buffer is destroyed.
   */
  onDidDestroy(callback: () => void): Disposable;

  /**
   * Invoke the given callback when there is an error in watching the file.
   */
  onWillThrowWatchError(
    callback: (errorObject: Events$Events$BufferWatchError) => void
  ): Disposable;

  /**
   * Get the number of milliseconds that will elapse without a change before
   * ::onDidStopChanging observers are invoked following a change.
   */
  getStoppedChangingDelay(): number;

  /**
   * Performs the necessary work, then emits the 'did-stop-changing' event.
   */
  emitDidStopChangingEvent(): void;

  /**
   * Determine if the in-memory contents of the buffer differ from its contents
   * on disk.
   * If the buffer is unsaved, always returns true unless the buffer is empty.
   */
  isModified(): boolean;

  /**
   * Determine if the in-memory contents of the buffer conflict with the on-disk
   * contents of its associated file.
   */
  isInConflict(): boolean;

  /**
   * Get the path of the associated file.
   */
  getPath(): string | void;

  /**
   * Set the path for the buffer's associated file.
   */
  setPath(filePath: string): void;

  /**
   * Sets the character set encoding for this buffer.
   */
  setEncoding(encoding: string): void;

  /**
   * Returns the string encoding of this buffer.
   */
  getEncoding(): string;

  /**
   * Get the path of the associated file.
   */
  getUri(): string;

  /**
   * Identifies if the buffer belongs to multiple editors.
   */
  hasMultipleEditors(): boolean;

  /**
   * Determine whether the buffer is empty.
   */
  isEmpty(): boolean;

  /**
   * Get the entire text of the buffer.
   */
  getText(): string;

  /**
   * Get the text in a range.
   */
  getTextInRange(range: TextBuffer$RangeCompatible): string;

  /**
   * Get the text of all lines in the buffer, without their line endings.
   */
  getLines(): string[];

  /**
   * Get the text of the last line of the buffer, without its line ending.
   */
  getLastLine(): string;

  /**
   * Get the text of the line at the given row, without its line ending.
   */
  lineForRow(row: number): string | void;

  /**
   * Get the line ending for the given 0-indexed row.
   */
  lineEndingForRow(row: number): string | void;

  /**
   * Get the length of the line for the given 0-indexed row, without its line
   * ending.
   */
  lineLengthForRow(row: number): number;

  /**
   * Determine if the given row contains only whitespace.
   */
  isRowBlank(row: number): boolean;

  /**
   * Given a row, find the first preceding row that's not blank.
   * Returns a number or null if there's no preceding non-blank row.
   */
  previousNonBlankRow(startRow: number): number | null;

  /**
   * Given a row, find the next row that's not blank.
   * Returns a number or null if there's no next non-blank row.
   */
  nextNonBlankRow(startRow: number): number | null;

  /**
   * Replace the entire contents of the buffer with the given text.
   */
  setText(text: string): TextBuffer$Range;

  /**
   * Replace the current buffer contents by applying a diff based on the
   * given text.
   */
  setTextViaDiff(text: string): void;

  /**
   * Set the text in the given range.
   */
  setTextInRange(
    range: TextBuffer$RangeCompatible,
    text: string,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: "skip"
    }
  ): TextBuffer$Range;

  /**
   * Insert text at the given position.
   */
  insert(
    position: TextBuffer$PointCompatible,
    text: string,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: "skip"
    }
  ): TextBuffer$Range;

  /**
   * Append text to the end of the buffer.
   */
  append(
    text: string,
    options?: {
      normalizeLineEndings?: boolean,
      undo?: "skip"
    }
  ): TextBuffer$Range;

  /**
   * Delete the text in the given range.
   */
  delete(range: TextBuffer$RangeCompatible): TextBuffer$Range;

  /**
   * Delete the line associated with a specified row.
   */
  deleteRow(row: number): TextBuffer$Range;

  /**
   * Delete the lines associated with the specified row range.
   */
  deleteRows(startRow: number, endRow: number): TextBuffer$Range;

  /**
   * Create a layer to contain a set of related markers.
   */
  addMarkerLayer(options?: {
    maintainHistory?: boolean,
    persistent?: boolean
  }): TextBuffer$MarkerLayer;

  /**
   * Get a MarkerLayer by id.
   * Returns a MarkerLayer or `` if no layer exists with the given id.
   */
  getMarkerLayer(id: string): TextBuffer$MarkerLayer | void;

  /**
   * Get the default MarkerLayer.
   */
  getDefaultMarkerLayer(): TextBuffer$MarkerLayer;

  /**
   * Create a marker with the given range in the default marker layer.
   */
  markRange(
    range: TextBuffer$RangeCompatible,
    properties?: {
      reversed?: boolean,
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$Marker;

  /**
   * Create a marker at the given position with no tail in the default marker layer.
   */
  markPosition(
    position: TextBuffer$PointCompatible,
    options?: {
      invalidate?: "never" | "surround" | "overlap" | "inside" | "touch",
      exclusive?: boolean
    }
  ): TextBuffer$Marker;

  /**
   * Get all existing markers on the default marker layer.
   */
  getMarkers(): TextBuffer$Marker[];

  /**
   * Get an existing marker by its id from the default marker layer.
   */
  getMarker(id: number): TextBuffer$Marker;

  /**
   * Find markers conforming to the given parameters in the default marker layer.
   */
  findMarkers(params: Options$Options$FindMarker): TextBuffer$Marker[];

  /**
   * Get the number of markers in the default marker layer.
   */
  getMarkerCount(): number;

  /**
   * Undo the last operation. If a transaction is in progress, aborts it.
   */
  undo(): boolean;

  /**
   * Redo the last operation.
   */
  redo(): boolean;

  /**
   * Batch multiple operations as a single undo/redo step.
   */
  transact<T>(groupingInterval: number, fn: () => T): T;
  transact<T>(fn: () => T): T;

  /**
   * Call within a transaction to terminate the function's execution and
   * revert any changes performed up to the abortion.
   */
  abortTransaction(): void;

  /**
   * Clear the undo stack. When calling this method within a transaction,
   * the ::onDidChangeText event will not be triggered because the information
   * describing the changes is lost.
   */
  clearUndoStack(): void;

  /**
   * Create a pointer to the current state of the buffer for use with
   * ::revertToCheckpoint and ::groupChangesSinceCheckpoint.
   */
  createCheckpoint(): number;

  /**
   * Revert the buffer to the state it was in when the given checkpoint was created.
   * Returns a boolean indicating whether the operation succeeded.
   */
  revertToCheckpoint(checkpoint: number): boolean;

  /**
   * Group all changes since the given checkpoint into a single transaction for
   * purposes of undo/redo.
   * Returns a boolean indicating whether the operation succeeded.
   */
  groupChangesSinceCheckpoint(checkpoint: number): boolean;

  /**
   * Returns a list of changes since the given checkpoint.
   * If the given checkpoint is no longer present in the undo history, this method
   * will return an empty Array.
   */
  getChangesSinceCheckpoint(
    checkpoint: number
  ): Array<{
    /**
     * A Point representing where the change started.
     */
    start: TextBuffer$Point,

    /**
     * A Point representing the replaced extent.
     */
    oldExtent: TextBuffer$Point,

    /**
     * A Point representing the replacement extent.
     */
    newExtent: TextBuffer$Point,

    /**
     * A String representing the replacement text.
     */
    newText: string
  }>;

  /**
   * Scan regular expression matches in the entire buffer, calling the given
   * iterator function on each match.
   */
  scan(
    regex: RegExp,
    iterator: (params: Structures$Structures$BufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in the entire buffer, calling the given
   * iterator function on each match.
   */
  scan(
    regex: RegExp,
    options: Options$Options$ScanContext,
    iterator: (params: Structures$Structures$ContextualBufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in the entire buffer in reverse order,
   * calling the given iterator function on each match.
   */
  backwardsScan(
    regex: RegExp,
    iterator: (params: Structures$Structures$BufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in the entire buffer in reverse order,
   * calling the given iterator function on each match.
   */
  backwardsScan(
    regex: RegExp,
    options: Options$Options$ScanContext,
    iterator: (params: Structures$Structures$ContextualBufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in a given range , calling the given
   * iterator function on each match.
   */
  scanInRange(
    regex: RegExp,
    range: TextBuffer$RangeCompatible,
    iterator: (params: Structures$Structures$BufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in a given range , calling the given
   * iterator function on each match.
   */
  scanInRange(
    regex: RegExp,
    range: TextBuffer$RangeCompatible,
    options: Options$Options$ScanContext,
    iterator: (params: Structures$Structures$ContextualBufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in a given range in reverse order,
   * calling the given iterator function on each match.
   */
  backwardsScanInRange(
    regex: RegExp,
    range: TextBuffer$RangeCompatible,
    iterator: (params: Structures$Structures$BufferScanResult) => void
  ): void;

  /**
   * Scan regular expression matches in a given range in reverse order,
   * calling the given iterator function on each match.
   */
  backwardsScanInRange(
    regex: RegExp,
    range: TextBuffer$RangeCompatible,
    options: Options$Options$ScanContext,
    iterator: (params: Structures$Structures$ContextualBufferScanResult) => void
  ): void;

  /**
   * Replace all regular expression matches in the entire buffer.
   */
  replace(regex: RegExp, replacementText: string): number;

  /**
   * Get the range spanning from [0, 0] to ::getEndPosition.
   */
  getRange(): TextBuffer$Range;

  /**
   * Get the number of lines in the buffer.
   */
  getLineCount(): number;

  /**
   * Get the last 0-indexed row in the buffer.
   */
  getLastRow(): number;

  /**
   * Get the first position in the buffer, which is always [0, 0].
   */
  getFirstPosition(): TextBuffer$Point;

  /**
   * Get the maximal position in the buffer, where new text would be appended.
   */
  getEndPosition(): TextBuffer$Point;

  /**
   * Get the length of the buffer in characters.
   */
  getMaxCharacterIndex(): number;

  /**
   * Get the range for the given row.
   */
  rangeForRow(row: number, includeNewline: boolean): TextBuffer$Range;

  /**
   * Convert a position in the buffer in row/column coordinates to an absolute
   * character offset, inclusive of line ending characters.
   */
  characterIndexForPosition(
    position: TextBuffer$Point | [number, number]
  ): number;

  /**
   * Convert an absolute character offset, inclusive of newlines, to a position
   * in the buffer in row/column coordinates.
   */
  positionForCharacterIndex(offset: number): TextBuffer$Point;

  /**
   * Clip the given range so it starts and ends at valid positions.
   */
  clipRange(range: TextBuffer$RangeCompatible): TextBuffer$Range;

  /**
   * Clip the given point so it is at a valid position in the buffer.
   */
  clipPosition(position: TextBuffer$PointCompatible): TextBuffer$Point;

  /**
   * Save the buffer.
   */
  save(): Promise<void>;

  /**
   * Save the buffer at a specific path.
   */
  saveAs(filePath: string): Promise<void>;

  /**
   * Reload the buffer's contents from disk.
   */
  reload(): void;
}

/**
 * The static side to the TextBuffer class.
 */
declare interface TextBuffer$TextBufferStatic {
  TextBuffer$Point: TextBuffer$PointStatic;
  TextBuffer$Range: TextBuffer$RangeStatic;

  /**
   * Create a new buffer backed by the given file path.
   */
  load(
    source: string,
    params?: Options$Options$BufferLoad
  ): Promise<TextBuffer$TextBuffer>;

  /**
   * Create a new buffer backed by the given file path. For better performance,
   * use TextBuffer.load instead.
   */
  loadSync(
    filePath: string,
    params?: Options$Options$BufferLoad
  ): TextBuffer$TextBuffer;

  /**
   * Restore a TextBuffer based on an earlier state created using the
   * TextBuffer::serialize method.
   */
  deserialize(params: { [key: string]: any }): Promise<TextBuffer$TextBuffer>;

  /**
   * Create a new buffer with the given starting text.
   */
  new(text: string): TextBuffer$TextBuffer;

  /**
   * Create a new buffer with the given params.
   */
  new(params?: {
    /**
     * The initial string text of the buffer.
     */
    text?: string,

    /**
     * A function that returns a Boolean indicating whether the buffer should
     * be destroyed if its file is deleted.
     */
    shouldDestroyOnFileDelete?: () => boolean
  }): TextBuffer$TextBuffer;
}
declare module "global" {
}
declare module "text-buffer" {
  import type { Disposable } from "event-kit";

  import type { File } from "pathwatcher";

  declare var tb: TextBuffer$TextBuffer.TextBuffer$TextBufferStatic;
  declare module.exports: typeof tb;
}
