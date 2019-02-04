declare module 'gapi.client.slides' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        presentations: typeof client$presentations,
      }

/**
 * Load Google Slides API v1
 */
declare function client$load(name: "slides", version: "v1"): PromiseLike<void>


declare function client$load(name: "slides", version: "v1", callback: () => any): void


declare var client$presentations: slides$slides$PresentationsResource;

declare interface slides$AffineTransform {

/**
 * The X coordinate scaling element.
 */
scaleX?: number,

/**
 * The Y coordinate scaling element.
 */
scaleY?: number,

/**
 * The X coordinate shearing element.
 */
shearX?: number,

/**
 * The Y coordinate shearing element.
 */
shearY?: number,

/**
 * The X coordinate translation element.
 */
translateX?: number,

/**
 * The Y coordinate translation element.
 */
translateY?: number,

/**
 * The units for translate elements.
 */
unit?: string
} 

declare interface slides$AutoText {

/**
 * The rendered content of this auto text, if available.
 */
content?: string,

/**
 * The styling applied to this auto text.
 */
style?: slides$TextStyle,

/**
 * The type of this auto text.
 */
type?: string
} 

declare interface slides$BatchUpdatePresentationRequest {

/**
 * A list of updates to apply to the presentation.
 */
requests?: slides$Request[],

/**
 * Provides control over how write requests are executed.
 */
writeControl?: slides$WriteControl
} 

declare interface slides$BatchUpdatePresentationResponse {

/**
 * The presentation the updates were applied to.
 */
presentationId?: string,

/**
 * The reply of the updates.  This maps 1:1 with the updates, although
 * replies to some requests may be empty.
 */
replies?: slides$Response[]
} 

declare interface slides$Bullet {

/**
 * The paragraph specific text style applied to this bullet.
 */
bulletStyle?: slides$TextStyle,

/**
 * The rendered bullet glyph for this paragraph.
 */
glyph?: string,

/**
 * The ID of the list this paragraph belongs to.
 */
listId?: string,

/**
 * The nesting level of this paragraph in the list.
 */
nestingLevel?: number
} 

declare interface slides$ColorScheme {

/**
 * The ThemeColorType and corresponding concrete color pairs.
 */
colors?: slides$ThemeColorPair[]
} 

declare interface slides$ColorStop {

/**
 * The alpha value of this color in the gradient band. Defaults to 1.0,
 * fully opaque.
 */
alpha?: number,

/**
 * The color of the gradient stop.
 */
color?: slides$OpaqueColor,

/**
 * The relative position of the color stop in the gradient band measured
 * in percentage. The value should be in the interval [0.0, 1.0].
 */
position?: number
} 

declare interface slides$CreateImageRequest {

/**
 * The element properties for the image.
 * 
 * When the aspect ratio of the provided size does not match the image aspect
 * ratio, the image is scaled and centered with respect to the size in order
 * to maintain aspect ratio. The provided transform is applied after this
 * operation.
 */
elementProperties?: slides$PageElementProperties,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string,

/**
 * The image URL.
 * 
 * The image is fetched once at insertion time and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size,
 * cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
 * format.
 * 
 * The provided URL can be at maximum 2K bytes large.
 */
url?: string
} 

declare interface slides$CreateImageResponse {

/**
 * The object ID of the created image.
 */
objectId?: string
} 

declare interface slides$CreateLineRequest {

/**
 * The element properties for the line.
 */
elementProperties?: slides$PageElementProperties,

/**
 * The category of line to be created.
 */
lineCategory?: string,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string
} 

declare interface slides$CreateLineResponse {

/**
 * The object ID of the created line.
 */
objectId?: string
} 

declare interface slides$CreateParagraphBulletsRequest {

/**
 * The kinds of bullet glyphs to be used. Defaults to the
 * `BULLET_DISC_CIRCLE_SQUARE` preset.
 */
bulletPreset?: string,

/**
 * The optional table cell location if the text to be modified is in a table
 * cell. If present, the object_id must refer to a table.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The object ID of the shape or table containing the text to add bullets to.
 */
objectId?: string,

/**
 * The range of text to apply the bullet presets to, based on TextElement indexes.
 */
textRange?: slides$Range
} 

declare interface slides$CreateShapeRequest {

/**
 * The element properties for the shape.
 */
elementProperties?: slides$PageElementProperties,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * If empty, a unique identifier will be generated.
 */
objectId?: string,

/**
 * The shape type.
 */
shapeType?: string
} 

declare interface slides$CreateShapeResponse {

/**
 * The object ID of the created shape.
 */
objectId?: string
} 

declare interface slides$CreateSheetsChartRequest {

/**
 * The ID of the specific chart in the Google Sheets spreadsheet.
 */
chartId?: number,

/**
 * The element properties for the chart.
 * 
 * When the aspect ratio of the provided size does not match the chart aspect
 * ratio, the chart is scaled and centered with respect to the size in order
 * to maintain aspect ratio. The provided transform is applied after this
 * operation.
 */
elementProperties?: slides$PageElementProperties,

/**
 * The mode with which the chart is linked to the source spreadsheet. When
 * not specified, the chart will be an image that is not linked.
 */
linkingMode?: string,

/**
 * A user-supplied object ID.
 * 
 * If specified, the ID must be unique among all pages and page elements in
 * the presentation. The ID should start with a word character [a-zA-Z0-9_]
 * and then followed by any number of the following characters [a-zA-Z0-9_-:].
 * The length of the ID should not be less than 5 or greater than 50.
 * If empty, a unique identifier will be generated.
 */
objectId?: string,

/**
 * The ID of the Google Sheets spreadsheet that contains the chart.
 */
spreadsheetId?: string
} 

declare interface slides$CreateSheetsChartResponse {

/**
 * The object ID of the created chart.
 */
objectId?: string
} 

declare interface slides$CreateSlideRequest {

/**
 * The optional zero-based index indicating where to insert the slides.
 * 
 * If you don't specify an index, the new slide is created at the end.
 */
insertionIndex?: number,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string,

/**
 * An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s)
 * that will be created on the new slide from that specified layout. Can only
 * be used when `slide_layout_reference` is specified.
 */
placeholderIdMappings?: slides$LayoutPlaceholderIdMapping[],

/**
 * Layout reference of the slide to be inserted, based on the &#42;current
 * master&#42;, which is one of the following:
 * 
 * - The master of the previous slide index.
 * - The master of the first slide, if the insertion_index is zero.
 * - The first master in the presentation, if there are no slides.
 * 
 * If the LayoutReference is not found in the current master, a 400 bad
 * request error is returned.
 * 
 * If you don't specify a layout reference, then the new slide will use the
 * predefined layout `BLANK`.
 */
slideLayoutReference?: slides$LayoutReference
} 

declare interface slides$CreateSlideResponse {

/**
 * The object ID of the created slide.
 */
objectId?: string
} 

declare interface slides$CreateTableRequest {

/**
 * Number of columns in the table.
 */
columns?: number,

/**
 * The element properties for the table.
 * 
 * The table will be created at the provided size, subject to a minimum size.
 * If no size is provided, the table will be automatically sized.
 * 
 * Table transforms must have a scale of 1 and no shear components. If no
 * transform is provided, the table will be centered on the page.
 */
elementProperties?: slides$PageElementProperties,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string,

/**
 * Number of rows in the table.
 */
rows?: number
} 

declare interface slides$CreateTableResponse {

/**
 * The object ID of the created table.
 */
objectId?: string
} 

declare interface slides$CreateVideoRequest {

/**
 * The element properties for the video.
 */
elementProperties?: slides$PageElementProperties,

/**
 * The video source's unique identifier for this video.
 * 
 * e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0,
 * the ID is 7U3axjORYZ0.
 */
id?: string,

/**
 * A user-supplied object ID.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string,

/**
 * The video source.
 */
source?: string
} 

declare interface slides$CreateVideoResponse {

/**
 * The object ID of the created video.
 */
objectId?: string
} 

declare interface slides$CropProperties {

/**
 * The rotation angle of the crop window around its center, in radians.
 * Rotation angle is applied after the offset.
 */
angle?: number,

/**
 * The offset specifies the bottom edge of the crop rectangle that is located
 * above the original bounding rectangle bottom edge, relative to the object's
 * original height.
 */
bottomOffset?: number,

/**
 * The offset specifies the left edge of the crop rectangle that is located to
 * the right of the original bounding rectangle left edge, relative to the
 * object's original width.
 */
leftOffset?: number,

/**
 * The offset specifies the right edge of the crop rectangle that is located
 * to the left of the original bounding rectangle right edge, relative to the
 * object's original width.
 */
rightOffset?: number,

/**
 * The offset specifies the top edge of the crop rectangle that is located
 * below the original bounding rectangle top edge, relative to the object's
 * original height.
 */
topOffset?: number
} 

declare interface slides$DeleteObjectRequest {

/**
 * The object ID of the page or page element to delete.
 * 
 * If after a delete operation a group contains
 * only 1 or no page elements, the group is also deleted.
 * 
 * If a placeholder is deleted on a layout, any empty inheriting shapes are
 * also deleted.
 */
objectId?: string
} 

declare interface slides$DeleteParagraphBulletsRequest {

/**
 * The optional table cell location if the text to be modified is in a table
 * cell. If present, the object_id must refer to a table.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The object ID of the shape or table containing the text to delete bullets
 * from.
 */
objectId?: string,

/**
 * The range of text to delete bullets from, based on TextElement indexes.
 */
textRange?: slides$Range
} 

declare interface slides$DeleteTableColumnRequest {

/**
 * The reference table cell location from which a column will be deleted.
 * 
 * The column this cell spans will be deleted. If this is a merged cell,
 * multiple columns will be deleted. If no columns remain in the table after
 * this deletion, the whole table is deleted.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The table to delete columns from.
 */
tableObjectId?: string
} 

declare interface slides$DeleteTableRowRequest {

/**
 * The reference table cell location from which a row will be deleted.
 * 
 * The row this cell spans will be deleted. If this is a merged cell, multiple
 * rows will be deleted. If no rows remain in the table after this deletion,
 * the whole table is deleted.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The table to delete rows from.
 */
tableObjectId?: string
} 

declare interface slides$DeleteTextRequest {

/**
 * The optional table cell location if the text is to be deleted from a table
 * cell. If present, the object_id must refer to a table.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The object ID of the shape or table from which the text will be deleted.
 */
objectId?: string,

/**
 * The range of text to delete, based on TextElement indexes.
 * 
 * There is always an implicit newline character at the end of a shape's or
 * table cell's text that cannot be deleted. `Range.Type.ALL` will use the
 * correct bounds, but care must be taken when specifying explicit bounds for
 * range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text
 * is "ABC", followed by an implicit newline, then the maximum value is 2 for
 * `text_range.start_index` and 3 for `text_range.end_index`.
 * 
 * Deleting text that crosses a paragraph boundary may result in changes
 * to paragraph styles and lists as the two paragraphs are merged.
 * 
 * Ranges that include only one code unit of a surrogate pair are expanded to
 * include both code units.
 */
textRange?: slides$Range
} 

declare interface slides$Dimension {

/**
 * The magnitude.
 */
magnitude?: number,

/**
 * The units for magnitude.
 */
unit?: string
} 

declare interface slides$DuplicateObjectRequest {

/**
 * The ID of the object to duplicate.
 */
objectId?: string,

/**
 * The object being duplicated may contain other objects, for example when
 * duplicating a slide or a group page element. This map defines how the IDs
 * of duplicated objects are generated: the keys are the IDs of the original
 * objects and its values are the IDs that will be assigned to the
 * corresponding duplicate object. The ID of the source object's duplicate
 * may be specified in this map as well, using the same value of the
 * `object_id` field as a key and the newly desired ID as the value.
 * 
 * All keys must correspond to existing IDs in the presentation. All values
 * must be unique in the presentation and must start with an alphanumeric
 * character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining
 * characters may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or
 * greater than 50.
 * 
 * If any IDs of source objects are omitted from the map, a new random ID will
 * be assigned. If the map is empty or unset, all duplicate objects will
 * receive a new random ID.
 */
objectIds?: Record<string, string>
} 

declare interface slides$DuplicateObjectResponse {

/**
 * The ID of the new duplicate object.
 */
objectId?: string
} 

declare interface slides$Group {

/**
 * The collection of elements in the group. The minimum size of a group is 2.
 */
children?: slides$PageElement[]
} 

declare interface slides$Image {

/**
 * An URL to an image with a default lifetime of 30 minutes.
 * This URL is tagged with the account of the requester. Anyone with the URL
 * effectively accesses the image as the original requester. Access to the
 * image may be lost if the presentation's sharing settings change.
 */
contentUrl?: string,

/**
 * The properties of the image.
 */
imageProperties?: slides$ImageProperties
} 

declare interface slides$ImageProperties {

/**
 * The brightness effect of the image. The value should be in the interval
 * [-1.0, 1.0], where 0 means no effect. This property is read-only.
 */
brightness?: number,

/**
 * The contrast effect of the image. The value should be in the interval
 * [-1.0, 1.0], where 0 means no effect. This property is read-only.
 */
contrast?: number,

/**
 * The crop properties of the image. If not set, the image is not cropped.
 * This property is read-only.
 */
cropProperties?: slides$CropProperties,

/**
 * The hyperlink destination of the image. If unset, there is no link.
 */
link?: slides$Link,

/**
 * The outline of the image. If not set, the the image has no outline.
 */
outline?: slides$Outline,

/**
 * The recolor effect of the image. If not set, the image is not recolored.
 * This property is read-only.
 */
recolor?: slides$Recolor,

/**
 * The shadow of the image. If not set, the image has no shadow. This property
 * is read-only.
 */
shadow?: slides$Shadow,

/**
 * The transparency effect of the image. The value should be in the interval
 * [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
 * This property is read-only.
 */
transparency?: number
} 

declare interface slides$InsertTableColumnsRequest {

/**
 * The reference table cell location from which columns will be inserted.
 * 
 * A new column will be inserted to the left (or right) of the column where
 * the reference cell is. If the reference cell is a merged cell, a new
 * column will be inserted to the left (or right) of the merged cell.
 */
cellLocation?: slides$TableCellLocation,

/**
 * Whether to insert new columns to the right of the reference cell location.
 * 
 * - `True`: insert to the right.
 * - `False`: insert to the left.
 */
insertRight?: boolean,

/**
 * The number of columns to be inserted. Maximum 20 per request.
 */
number?: number,

/**
 * The table to insert columns into.
 */
tableObjectId?: string
} 

declare interface slides$InsertTableRowsRequest {

/**
 * The reference table cell location from which rows will be inserted.
 * 
 * A new row will be inserted above (or below) the row where the reference
 * cell is. If the reference cell is a merged cell, a new row will be
 * inserted above (or below) the merged cell.
 */
cellLocation?: slides$TableCellLocation,

/**
 * Whether to insert new rows below the reference cell location.
 * 
 * - `True`: insert below the cell.
 * - `False`: insert above the cell.
 */
insertBelow?: boolean,

/**
 * The number of rows to be inserted. Maximum 20 per request.
 */
number?: number,

/**
 * The table to insert rows into.
 */
tableObjectId?: string
} 

declare interface slides$InsertTextRequest {

/**
 * The optional table cell location if the text is to be inserted into a table
 * cell. If present, the object_id must refer to a table.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The index where the text will be inserted, in Unicode code units, based
 * on TextElement indexes.
 * 
 * The index is zero-based and is computed from the start of the string.
 * The index may be adjusted to prevent insertions inside Unicode grapheme
 * clusters. In these cases, the text will be inserted immediately after the
 * grapheme cluster.
 */
insertionIndex?: number,

/**
 * The object ID of the shape or table where the text will be inserted.
 */
objectId?: string,

/**
 * The text to be inserted.
 * 
 * Inserting a newline character will implicitly create a new
 * ParagraphMarker at that index.
 * The paragraph style of the new paragraph will be copied from the paragraph
 * at the current insertion index, including lists and bullets.
 * 
 * Text styles for inserted text will be determined automatically, generally
 * preserving the styling of neighboring text. In most cases, the text will be
 * added to the TextRun that exists at the
 * insertion index.
 * 
 * Some control characters (U+0000-U+0008, U+000C-U+001F) and characters
 * from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF)
 * will be stripped out of the inserted text.
 */
text?: string
} 

declare interface slides$LayoutPlaceholderIdMapping {

/**
 * The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a
 * predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder
 * with index 0 and a BODY placeholder with index 0.
 */
layoutPlaceholder?: slides$Placeholder,

/**
 * The object ID of the placeholder on a layout that will be applied
 * to a slide.
 */
layoutPlaceholderObjectId?: string,

/**
 * A user-supplied object ID for the placeholder identified above that to be
 * created onto a slide.
 * 
 * If you specify an ID, it must be unique among all pages and page elements
 * in the presentation. The ID must start with an alphanumeric character or an
 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
 * may include those as well as a hyphen or colon (matches regex
 * `[a-zA-Z0-9_-:]`).
 * The length of the ID must not be less than 5 or greater than 50.
 * 
 * If you don't specify an ID, a unique one is generated.
 */
objectId?: string
} 

declare interface slides$LayoutProperties {

/**
 * The human-readable name of the layout.
 */
displayName?: string,

/**
 * The object ID of the master that this layout is based on.
 */
masterObjectId?: string,

/**
 * The name of the layout.
 */
name?: string
} 

declare interface slides$LayoutReference {

/**
 * Layout ID: the object ID of one of the layouts in the presentation.
 */
layoutId?: string,

/**
 * Predefined layout.
 */
predefinedLayout?: string
} 

declare interface slides$Line {

/**
 * The properties of the line.
 */
lineProperties?: slides$LineProperties,

/**
 * The type of the line.
 */
lineType?: string
} 

declare interface slides$LineFill {

/**
 * Solid color fill.
 */
solidFill?: slides$SolidFill
} 

declare interface slides$LineProperties {

/**
 * The dash style of the line.
 */
dashStyle?: string,

/**
 * The style of the arrow at the end of the line.
 */
endArrow?: string,

/**
 * The fill of the line. The default line fill matches the defaults for new
 * lines created in the Slides editor.
 */
lineFill?: slides$LineFill,

/**
 * The hyperlink destination of the line. If unset, there is no link.
 */
link?: slides$Link,

/**
 * The style of the arrow at the beginning of the line.
 */
startArrow?: string,

/**
 * The thickness of the line.
 */
weight?: slides$Dimension
} 

declare interface slides$Link {

/**
 * If set, indicates this is a link to the specific page in this
 * presentation with this ID. A page with this ID may not exist.
 */
pageObjectId?: string,

/**
 * If set, indicates this is a link to a slide in this presentation,
 * addressed by its position.
 */
relativeLink?: string,

/**
 * If set, indicates this is a link to the slide at this zero-based index
 * in the presentation. There may not be a slide at this index.
 */
slideIndex?: number,

/**
 * If set, indicates this is a link to the external web page at this URL.
 */
url?: string
} 

declare interface slides$List {

/**
 * The ID of the list.
 */
listId?: string,

/**
 * A map of nesting levels to the properties of bullets at the associated
 * level. A list has at most nine levels of nesting, so the possible values
 * for the keys of this map are 0 through 8, inclusive.
 */
nestingLevel?: Record<string, slides$NestingLevel>
} 

declare interface slides$MasterProperties {

/**
 * The human-readable name of the master.
 */
displayName?: string
} 

declare interface slides$NestingLevel {

/**
 * The style of a bullet at this level of nesting.
 */
bulletStyle?: slides$TextStyle
} 

declare interface slides$NotesProperties {

/**
 * The object ID of the shape on this notes page that contains the speaker
 * notes for the corresponding slide.
 * The actual shape may not always exist on the notes page. Inserting text
 * using this object ID will automatically create the shape. In this case, the
 * actual shape may have different object ID. The `GetPresentation` or
 * `GetPage` action will always return the latest object ID.
 */
speakerNotesObjectId?: string
} 

declare interface slides$OpaqueColor {

/**
 * An opaque RGB color.
 */
rgbColor?: slides$RgbColor,

/**
 * An opaque theme color.
 */
themeColor?: string
} 

declare interface slides$OptionalColor {

/**
 * If set, this will be used as an opaque color. If unset, this represents
 * a transparent color.
 */
opaqueColor?: slides$OpaqueColor
} 

declare interface slides$Outline {

/**
 * The dash style of the outline.
 */
dashStyle?: string,

/**
 * The fill of the outline.
 */
outlineFill?: slides$OutlineFill,

/**
 * The outline property state.
 * 
 * Updating the the outline on a page element will implicitly update this
 * field to`RENDERED`, unless another value is specified in the same request.
 * To have no outline on a page element, set this field to `NOT_RENDERED`. In
 * this case, any other outline fields set in the same request will be
 * ignored.
 */
propertyState?: string,

/**
 * The thickness of the outline.
 */
weight?: slides$Dimension
} 

declare interface slides$OutlineFill {

/**
 * Solid color fill.
 */
solidFill?: slides$SolidFill
} 

declare interface slides$Page {

/**
 * Layout specific properties. Only set if page_type = LAYOUT.
 */
layoutProperties?: slides$LayoutProperties,

/**
 * Master specific properties. Only set if page_type = MASTER.
 */
masterProperties?: slides$MasterProperties,

/**
 * Notes specific properties. Only set if page_type = NOTES.
 */
notesProperties?: slides$NotesProperties,

/**
 * The object ID for this page. Object IDs used by
 * Page and
 * PageElement share the same namespace.
 */
objectId?: string,

/**
 * The page elements rendered on the page.
 */
pageElements?: slides$PageElement[],

/**
 * The properties of the page.
 */
pageProperties?: slides$PageProperties,

/**
 * The type of the page.
 */
pageType?: string,

/**
 * The revision ID of the presentation containing this page. Can be used in
 * update requests to assert that the presentation revision hasn't changed
 * since the last read operation. Only populated if the user has edit access
 * to the presentation.
 * 
 * The format of the revision ID may change over time, so it should be treated
 * opaquely. A returned revision ID is only guaranteed to be valid for 24
 * hours after it has been returned and cannot be shared across users. If the
 * revision ID is unchanged between calls, then the presentation has not
 * changed. Conversely, a changed ID (for the same presentation and user)
 * usually means the presentation has been updated; however, a changed ID can
 * also be due to internal factors such as ID format changes.
 */
revisionId?: string,

/**
 * Slide specific properties. Only set if page_type = SLIDE.
 */
slideProperties?: slides$SlideProperties
} 

declare interface slides$PageBackgroundFill {

/**
 * The background fill property state.
 * 
 * Updating the fill on a page will implicitly update this field to
 * `RENDERED`, unless another value is specified in the same request. To
 * have no fill on a page, set this field to `NOT_RENDERED`. In this case,
 * any other fill fields set in the same request will be ignored.
 */
propertyState?: string,

/**
 * Solid color fill.
 */
solidFill?: slides$SolidFill,

/**
 * Stretched picture fill.
 */
stretchedPictureFill?: slides$StretchedPictureFill
} 

declare interface slides$PageElement {

/**
 * The description of the page element. Combined with title to display alt
 * text.
 */
description?: string,

/**
 * A collection of page elements joined as a single unit.
 */
elementGroup?: slides$Group,

/**
 * An image page element.
 */
image?: slides$Image,

/**
 * A line page element.
 */
line?: slides$Line,

/**
 * The object ID for this page element. Object IDs used by
 * google.apps.slides.v1.Page and
 * google.apps.slides.v1.PageElement share the same namespace.
 */
objectId?: string,

/**
 * A generic shape.
 */
shape?: slides$Shape,

/**
 * A linked chart embedded from Google Sheets. Unlinked charts are
 * represented as images.
 */
sheetsChart?: slides$SheetsChart,

/**
 * The size of the page element.
 */
size?: slides$Size,

/**
 * A table page element.
 */
table?: slides$Table,

/**
 * The title of the page element. Combined with description to display alt
 * text.
 */
title?: string,

/**
 * The transform of the page element.
 * 
 * The visual appearance of the page element is determined by its absolute
 * transform. To compute the absolute transform, preconcatenate a page
 * element's transform with the transforms of all of its parent groups. If the
 * page element is not in a group, its absolute transform is the same as the
 * value in this field.
 * 
 * The initial transform for the newly created Group is always the identity transform.
 */
transform?: slides$AffineTransform,

/**
 * A video page element.
 */
video?: slides$Video,

/**
 * A word art page element.
 */
wordArt?: slides$WordArt
} 

declare interface slides$PageElementProperties {

/**
 * The object ID of the page where the element is located.
 */
pageObjectId?: string,

/**
 * The size of the element.
 */
size?: slides$Size,

/**
 * The transform for the element.
 */
transform?: slides$AffineTransform
} 

declare interface slides$PageProperties {

/**
 * The color scheme of the page. If unset, the color scheme is inherited from
 * a parent page. If the page has no parent, the color scheme uses a default
 * Slides color scheme. This field is read-only.
 */
colorScheme?: slides$ColorScheme,

/**
 * The background fill of the page. If unset, the background fill is inherited
 * from a parent page if it exists. If the page has no parent, then the
 * background fill defaults to the corresponding fill in the Slides editor.
 */
pageBackgroundFill?: slides$PageBackgroundFill
} 

declare interface slides$ParagraphMarker {

/**
 * The bullet for this paragraph. If not present, the paragraph does not
 * belong to a list.
 */
bullet?: slides$Bullet,

/**
 * The paragraph's style
 */
style?: slides$ParagraphStyle
} 

declare interface slides$ParagraphStyle {

/**
 * The text alignment for this paragraph.
 */
alignment?: string,

/**
 * The text direction of this paragraph. If unset, the value defaults to
 * LEFT_TO_RIGHT since
 * text direction is not inherited.
 */
direction?: string,

/**
 * The amount indentation for the paragraph on the side that corresponds to
 * the end of the text, based on the current text direction. If unset, the
 * value is inherited from the parent.
 */
indentEnd?: slides$Dimension,

/**
 * The amount of indentation for the start of the first line of the paragraph.
 * If unset, the value is inherited from the parent.
 */
indentFirstLine?: slides$Dimension,

/**
 * The amount indentation for the paragraph on the side that corresponds to
 * the start of the text, based on the current text direction. If unset, the
 * value is inherited from the parent.
 */
indentStart?: slides$Dimension,

/**
 * The amount of space between lines, as a percentage of normal, where normal
 * is represented as 100.0. If unset, the value is inherited from the parent.
 */
lineSpacing?: number,

/**
 * The amount of extra space above the paragraph. If unset, the value is
 * inherited from the parent.
 */
spaceAbove?: slides$Dimension,

/**
 * The amount of extra space above the paragraph. If unset, the value is
 * inherited from the parent.
 */
spaceBelow?: slides$Dimension,

/**
 * The spacing mode for the paragraph.
 */
spacingMode?: string
} 

declare interface slides$Placeholder {

/**
 * The index of the placeholder. If the same placeholder types are present in
 * the same page, they would have different index values.
 */
index?: number,

/**
 * The object ID of this shape's parent placeholder.
 * If unset, the parent placeholder shape does not exist, so the shape does
 * not inherit properties from any other shape.
 */
parentObjectId?: string,

/**
 * The type of the placeholder.
 */
type?: string
} 

declare interface slides$Presentation {

/**
 * The layouts in the presentation. A layout is a template that determines
 * how content is arranged and styled on the slides that inherit from that
 * layout.
 */
layouts?: slides$Page[],

/**
 * The locale of the presentation, as an IETF BCP 47 language tag.
 */
locale?: string,

/**
 * The slide masters in the presentation. A slide master contains all common
 * page elements and the common properties for a set of layouts. They serve
 * three purposes:
 * 
 * - Placeholder shapes on a master contain the default text styles and shape
 * properties of all placeholder shapes on pages that use that master.
 * - The master page properties define the common page properties inherited by
 * its layouts.
 * - Any other shapes on the master slide will appear on all slides using that
 * master, regardless of their layout.
 */
masters?: slides$Page[],

/**
 * The notes master in the presentation. It serves three purposes:
 * 
 * - Placeholder shapes on a notes master contain the default text styles and
 * shape properties of all placeholder shapes on notes pages. Specifically,
 * a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a
 * `BODY` placeholder shape contains the speaker notes.
 * - The notes master page properties define the common page properties
 * inherited by all notes pages.
 * - Any other shapes on the notes master will appear on all notes pages.
 * 
 * The notes master is read-only.
 */
notesMaster?: slides$Page,

/**
 * The size of pages in the presentation.
 */
pageSize?: slides$Size,

/**
 * The ID of the presentation.
 */
presentationId?: string,

/**
 * The revision ID of the presentation. Can be used in update requests
 * to assert that the presentation revision hasn't changed since the last
 * read operation. Only populated if the user has edit access to the
 * presentation.
 * 
 * The format of the revision ID may change over time, so it should be treated
 * opaquely. A returned revision ID is only guaranteed to be valid for 24
 * hours after it has been returned and cannot be shared across users. If the
 * revision ID is unchanged between calls, then the presentation has not
 * changed. Conversely, a changed ID (for the same presentation and user)
 * usually means the presentation has been updated; however, a changed ID can
 * also be due to internal factors such as ID format changes.
 */
revisionId?: string,

/**
 * The slides in the presentation.
 * A slide inherits properties from a slide layout.
 */
slides?: slides$Page[],

/**
 * The title of the presentation.
 */
title?: string
} 

declare interface slides$Range {

/**
 * The optional zero-based index of the end of the collection.
 * Required for `FIXED_RANGE` ranges.
 */
endIndex?: number,

/**
 * The optional zero-based index of the beginning of the collection.
 * Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
 */
startIndex?: number,

/**
 * The type of range.
 */
type?: string
} 

declare interface slides$Recolor {

/**
 * The name of the recolor effect.
 * 
 * The name is determined from the `recolor_stops` by matching the gradient
 * against the colors in the page's current color scheme. This property is
 * read-only.
 */
name?: string,

/**
 * The recolor effect is represented by a gradient, which is a list of color
 * stops.
 * 
 * The colors in the gradient will replace the corresponding colors at
 * the same position in the color palette and apply to the image. This
 * property is read-only.
 */
recolorStops?: slides$ColorStop[]
} 

declare interface slides$RefreshSheetsChartRequest {

/**
 * The object ID of the chart to refresh.
 */
objectId?: string
} 

declare interface slides$ReplaceAllShapesWithImageRequest {

/**
 * If set, this request will replace all of the shapes that contain the
 * given text.
 */
containsText?: slides$SubstringMatchCriteria,

/**
 * The image URL.
 * 
 * The image is fetched once at insertion time and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size,
 * cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
 * format.
 * 
 * The provided URL can be at maximum 2K bytes large.
 */
imageUrl?: string,

/**
 * If non-empty, limits the matches to page elements only on the given pages.
 * 
 * Returns a 400 bad request error if given the page object ID of a
 * notes page or a
 * notes master, or if a
 * page with that object ID doesn't exist in the presentation.
 */
pageObjectIds?: string[],

/**
 * The replace method.
 */
replaceMethod?: string
} 

declare interface slides$ReplaceAllShapesWithImageResponse {

/**
 * The number of shapes replaced with images.
 */
occurrencesChanged?: number
} 

declare interface slides$ReplaceAllShapesWithSheetsChartRequest {

/**
 * The ID of the specific chart in the Google Sheets spreadsheet.
 */
chartId?: number,

/**
 * The criteria that the shapes must match in order to be replaced. The
 * request will replace all of the shapes that contain the given text.
 */
containsText?: slides$SubstringMatchCriteria,

/**
 * The mode with which the chart is linked to the source spreadsheet. When
 * not specified, the chart will be an image that is not linked.
 */
linkingMode?: string,

/**
 * If non-empty, limits the matches to page elements only on the given pages.
 * 
 * Returns a 400 bad request error if given the page object ID of a
 * notes page or a
 * notes master, or if a
 * page with that object ID doesn't exist in the presentation.
 */
pageObjectIds?: string[],

/**
 * The ID of the Google Sheets spreadsheet that contains the chart.
 */
spreadsheetId?: string
} 

declare interface slides$ReplaceAllShapesWithSheetsChartResponse {

/**
 * The number of shapes replaced with charts.
 */
occurrencesChanged?: number
} 

declare interface slides$ReplaceAllTextRequest {

/**
 * Finds text in a shape matching this substring.
 */
containsText?: slides$SubstringMatchCriteria,

/**
 * If non-empty, limits the matches to page elements only on the given pages.
 * 
 * Returns a 400 bad request error if given the page object ID of a
 * notes master,
 * or if a page with that object ID doesn't exist in the presentation.
 */
pageObjectIds?: string[],

/**
 * The text that will replace the matched text.
 */
replaceText?: string
} 

declare interface slides$ReplaceAllTextResponse {

/**
 * The number of occurrences changed by replacing all text.
 */
occurrencesChanged?: number
} 

declare interface slides$Request {

/**
 * Creates an image.
 */
createImage?: slides$CreateImageRequest,

/**
 * Creates a line.
 */
createLine?: slides$CreateLineRequest,

/**
 * Creates bullets for paragraphs.
 */
createParagraphBullets?: slides$CreateParagraphBulletsRequest,

/**
 * Creates a new shape.
 */
createShape?: slides$CreateShapeRequest,

/**
 * Creates an embedded Google Sheets chart.
 */
createSheetsChart?: slides$CreateSheetsChartRequest,

/**
 * Creates a new slide.
 */
createSlide?: slides$CreateSlideRequest,

/**
 * Creates a new table.
 */
createTable?: slides$CreateTableRequest,

/**
 * Creates a video.
 */
createVideo?: slides$CreateVideoRequest,

/**
 * Deletes a page or page element from the presentation.
 */
deleteObject?: slides$DeleteObjectRequest,

/**
 * Deletes bullets from paragraphs.
 */
deleteParagraphBullets?: slides$DeleteParagraphBulletsRequest,

/**
 * Deletes a column from a table.
 */
deleteTableColumn?: slides$DeleteTableColumnRequest,

/**
 * Deletes a row from a table.
 */
deleteTableRow?: slides$DeleteTableRowRequest,

/**
 * Deletes text from a shape or a table cell.
 */
deleteText?: slides$DeleteTextRequest,

/**
 * Duplicates a slide or page element.
 */
duplicateObject?: slides$DuplicateObjectRequest,

/**
 * Inserts columns into a table.
 */
insertTableColumns?: slides$InsertTableColumnsRequest,

/**
 * Inserts rows into a table.
 */
insertTableRows?: slides$InsertTableRowsRequest,

/**
 * Inserts text into a shape or table cell.
 */
insertText?: slides$InsertTextRequest,

/**
 * Refreshes a Google Sheets chart.
 */
refreshSheetsChart?: slides$RefreshSheetsChartRequest,

/**
 * Replaces all shapes matching some criteria with an image.
 */
replaceAllShapesWithImage?: slides$ReplaceAllShapesWithImageRequest,

/**
 * Replaces all shapes matching some criteria with a Google Sheets chart.
 */
replaceAllShapesWithSheetsChart?: slides$ReplaceAllShapesWithSheetsChartRequest,

/**
 * Replaces all instances of specified text.
 */
replaceAllText?: slides$ReplaceAllTextRequest,

/**
 * Updates the properties of an Image.
 */
updateImageProperties?: slides$UpdateImagePropertiesRequest,

/**
 * Updates the properties of a Line.
 */
updateLineProperties?: slides$UpdateLinePropertiesRequest,

/**
 * Updates the transform of a page element.
 */
updatePageElementTransform?: slides$UpdatePageElementTransformRequest,

/**
 * Updates the properties of a Page.
 */
updatePageProperties?: slides$UpdatePagePropertiesRequest,

/**
 * Updates the styling of paragraphs within a Shape or Table.
 */
updateParagraphStyle?: slides$UpdateParagraphStyleRequest,

/**
 * Updates the properties of a Shape.
 */
updateShapeProperties?: slides$UpdateShapePropertiesRequest,

/**
 * Updates the position of a set of slides in the presentation.
 */
updateSlidesPosition?: slides$UpdateSlidesPositionRequest,

/**
 * Updates the properties of a TableCell.
 */
updateTableCellProperties?: slides$UpdateTableCellPropertiesRequest,

/**
 * Updates the styling of text within a Shape or Table.
 */
updateTextStyle?: slides$UpdateTextStyleRequest,

/**
 * Updates the properties of a Video.
 */
updateVideoProperties?: slides$UpdateVideoPropertiesRequest
} 

declare interface slides$Response {

/**
 * The result of creating an image.
 */
createImage?: slides$CreateImageResponse,

/**
 * The result of creating a line.
 */
createLine?: slides$CreateLineResponse,

/**
 * The result of creating a shape.
 */
createShape?: slides$CreateShapeResponse,

/**
 * The result of creating a Google Sheets chart.
 */
createSheetsChart?: slides$CreateSheetsChartResponse,

/**
 * The result of creating a slide.
 */
createSlide?: slides$CreateSlideResponse,

/**
 * The result of creating a table.
 */
createTable?: slides$CreateTableResponse,

/**
 * The result of creating a video.
 */
createVideo?: slides$CreateVideoResponse,

/**
 * The result of duplicating an object.
 */
duplicateObject?: slides$DuplicateObjectResponse,

/**
 * The result of replacing all shapes matching some criteria with an
 * image.
 */
replaceAllShapesWithImage?: slides$ReplaceAllShapesWithImageResponse,

/**
 * The result of replacing all shapes matching some criteria with a Google
 * Sheets chart.
 */
replaceAllShapesWithSheetsChart?: slides$ReplaceAllShapesWithSheetsChartResponse,

/**
 * The result of replacing text.
 */
replaceAllText?: slides$ReplaceAllTextResponse
} 

declare interface slides$RgbColor {

/**
 * The blue component of the color, from 0.0 to 1.0.
 */
blue?: number,

/**
 * The green component of the color, from 0.0 to 1.0.
 */
green?: number,

/**
 * The red component of the color, from 0.0 to 1.0.
 */
red?: number
} 

declare interface slides$Shadow {

/**
 * The alignment point of the shadow, that sets the origin for translate,
 * scale and skew of the shadow.
 */
alignment?: string,

/**
 * The alpha of the shadow's color, from 0.0 to 1.0.
 */
alpha?: number,

/**
 * The radius of the shadow blur. The larger the radius, the more diffuse the
 * shadow becomes.
 */
blurRadius?: slides$Dimension,

/**
 * The shadow color value.
 */
color?: slides$OpaqueColor,

/**
 * The shadow property state.
 * 
 * Updating the the shadow on a page element will implicitly update this field
 * to `RENDERED`, unless another value is specified in the same request. To
 * have no shadow on a page element, set this field to `NOT_RENDERED`. In this
 * case, any other shadow fields set in the same request will be ignored.
 */
propertyState?: string,

/**
 * Whether the shadow should rotate with the shape.
 */
rotateWithShape?: boolean,

/**
 * Transform that encodes the translate, scale, and skew of the shadow,
 * relative to the alignment position.
 */
transform?: slides$AffineTransform,

/**
 * The type of the shadow.
 */
type?: string
} 

declare interface slides$Shape {

/**
 * Placeholders are shapes that are inherit from corresponding placeholders on
 * layouts and masters.
 * 
 * If set, the shape is a placeholder shape and any inherited properties
 * can be resolved by looking at the parent placeholder identified by the
 * Placeholder.parent_object_id field.
 */
placeholder?: slides$Placeholder,

/**
 * The properties of the shape.
 */
shapeProperties?: slides$ShapeProperties,

/**
 * The type of the shape.
 */
shapeType?: string,

/**
 * The text content of the shape.
 */
text?: slides$TextContent
} 

declare interface slides$ShapeBackgroundFill {

/**
 * The background fill property state.
 * 
 * Updating the the fill on a shape will implicitly update this field to
 * `RENDERED`, unless another value is specified in the same request. To
 * have no fill on a shape, set this field to `NOT_RENDERED`. In this case,
 * any other fill fields set in the same request will be ignored.
 */
propertyState?: string,

/**
 * Solid color fill.
 */
solidFill?: slides$SolidFill
} 

declare interface slides$ShapeProperties {

/**
 * The hyperlink destination of the shape. If unset, there is no link. Links
 * are not inherited from parent placeholders.
 */
link?: slides$Link,

/**
 * The outline of the shape. If unset, the outline is inherited from a
 * parent placeholder if it exists. If the shape has no parent, then the
 * default outline depends on the shape type, matching the defaults for
 * new shapes created in the Slides editor.
 */
outline?: slides$Outline,

/**
 * The shadow properties of the shape. If unset, the shadow is inherited from
 * a parent placeholder if it exists. If the shape has no parent, then the
 * default shadow matches the defaults for new shapes created in the Slides
 * editor. This property is read-only.
 */
shadow?: slides$Shadow,

/**
 * The background fill of the shape. If unset, the background fill is
 * inherited from a parent placeholder if it exists. If the shape has no
 * parent, then the default background fill depends on the shape type,
 * matching the defaults for new shapes created in the Slides editor.
 */
shapeBackgroundFill?: slides$ShapeBackgroundFill
} 

declare interface slides$SheetsChart {

/**
 * The ID of the specific chart in the Google Sheets spreadsheet that is
 * embedded.
 */
chartId?: number,

/**
 * The URL of an image of the embedded chart, with a default lifetime of 30
 * minutes. This URL is tagged with the account of the requester. Anyone with
 * the URL effectively accesses the image as the original requester. Access to
 * the image may be lost if the presentation's sharing settings change.
 */
contentUrl?: string,

/**
 * The properties of the Sheets chart.
 */
sheetsChartProperties?: slides$SheetsChartProperties,

/**
 * The ID of the Google Sheets spreadsheet that contains the source chart.
 */
spreadsheetId?: string
} 

declare interface slides$SheetsChartProperties {

/**
 * The properties of the embedded chart image.
 */
chartImageProperties?: slides$ImageProperties
} 

declare interface slides$Size {

/**
 * The height of the object.
 */
height?: slides$Dimension,

/**
 * The width of the object.
 */
width?: slides$Dimension
} 

declare interface slides$SlideProperties {

/**
 * The object ID of the layout that this slide is based on.
 */
layoutObjectId?: string,

/**
 * The object ID of the master that this slide is based on.
 */
masterObjectId?: string,

/**
 * The notes page that this slide is associated with. It defines the visual
 * appearance of a notes page when printing or exporting slides with speaker
 * notes. A notes page inherits properties from the
 * notes master.
 * The placeholder shape with type BODY on the notes page contains the speaker
 * notes for this slide. The ID of this shape is identified by the
 * speakerNotesObjectId field.
 * The notes page is read-only except for the text content and styles of the
 * speaker notes shape.
 */
notesPage?: slides$Page
} 

declare interface slides$SolidFill {

/**
 * The fraction of this `color` that should be applied to the pixel.
 * That is, the final pixel color is defined by the equation:
 * 
 * pixel color = alpha &#42; (color) + (1.0 - alpha) &#42; (background color)
 * 
 * This means that a value of 1.0 corresponds to a solid color, whereas
 * a value of 0.0 corresponds to a completely transparent color.
 */
alpha?: number,

/**
 * The color value of the solid fill.
 */
color?: slides$OpaqueColor
} 

declare interface slides$StretchedPictureFill {

/**
 * Reading the content_url:
 * 
 * An URL to a picture with a default lifetime of 30 minutes.
 * This URL is tagged with the account of the requester. Anyone with the URL
 * effectively accesses the picture as the original requester. Access to the
 * picture may be lost if the presentation's sharing settings change.
 * 
 * Writing the content_url:
 * 
 * The picture is fetched once at insertion time and a copy is stored for
 * display inside the presentation. Pictures must be less than 50MB in size,
 * cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
 * format.
 * 
 * The provided URL can be at maximum 2K bytes large.
 */
contentUrl?: string,

/**
 * The original size of the picture fill. This field is read-only.
 */
size?: slides$Size
} 

declare interface slides$SubstringMatchCriteria {

/**
 * Indicates whether the search should respect case:
 * 
 * - `True`: the search is case sensitive.
 * - `False`: the search is case insensitive.
 */
matchCase?: boolean,

/**
 * The text to search for in the shape or table.
 */
text?: string
} 

declare interface slides$Table {

/**
 * Number of columns in the table.
 */
columns?: number,

/**
 * Number of rows in the table.
 */
rows?: number,

/**
 * Properties of each column.
 */
tableColumns?: slides$TableColumnProperties[],

/**
 * Properties and contents of each row.
 * 
 * Cells that span multiple rows are contained in only one of these rows and
 * have a row_span greater
 * than 1.
 */
tableRows?: slides$TableRow[]
} 

declare interface slides$TableCell {

/**
 * Column span of the cell.
 */
columnSpan?: number,

/**
 * The location of the cell within the table.
 */
location?: slides$TableCellLocation,

/**
 * Row span of the cell.
 */
rowSpan?: number,

/**
 * The properties of the table cell.
 */
tableCellProperties?: slides$TableCellProperties,

/**
 * The text content of the cell.
 */
text?: slides$TextContent
} 

declare interface slides$TableCellBackgroundFill {

/**
 * The background fill property state.
 * 
 * Updating the the fill on a table cell will implicitly update this field
 * to `RENDERED`, unless another value is specified in the same request. To
 * have no fill on a table cell, set this field to `NOT_RENDERED`. In this
 * case, any other fill fields set in the same request will be ignored.
 */
propertyState?: string,

/**
 * Solid color fill.
 */
solidFill?: slides$SolidFill
} 

declare interface slides$TableCellLocation {

/**
 * The 0-based column index.
 */
columnIndex?: number,

/**
 * The 0-based row index.
 */
rowIndex?: number
} 

declare interface slides$TableCellProperties {

/**
 * The background fill of the table cell. The default fill matches the fill
 * for newly created table cells in the Slides editor.
 */
tableCellBackgroundFill?: slides$TableCellBackgroundFill
} 

declare interface slides$TableColumnProperties {

/**
 * Width of a column.
 */
columnWidth?: slides$Dimension
} 

declare interface slides$TableRange {

/**
 * The column span of the table range.
 */
columnSpan?: number,

/**
 * The starting location of the table range.
 */
location?: slides$TableCellLocation,

/**
 * The row span of the table range.
 */
rowSpan?: number
} 

declare interface slides$TableRow {

/**
 * Height of a row.
 */
rowHeight?: slides$Dimension,

/**
 * Properties and contents of each cell.
 * 
 * Cells that span multiple columns are represented only once with a
 * column_span greater
 * than 1. As a result, the length of this collection does not always match
 * the number of columns of the entire table.
 */
tableCells?: slides$TableCell[]
} 

declare interface slides$TextContent {

/**
 * The bulleted lists contained in this text, keyed by list ID.
 */
lists?: Record<string, slides$List>,

/**
 * The text contents broken down into its component parts, including styling
 * information. This property is read-only.
 */
textElements?: slides$TextElement[]
} 

declare interface slides$TextElement {

/**
 * A TextElement representing a spot in the text that is dynamically
 * replaced with content that can change over time.
 */
autoText?: slides$AutoText,

/**
 * The zero-based end index of this text element, exclusive, in Unicode code
 * units.
 */
endIndex?: number,

/**
 * A marker representing the beginning of a new paragraph.
 * 
 * The `start_index` and `end_index` of this TextElement represent the
 * range of the paragraph. Other TextElements with an index range contained
 * inside this paragraph's range are considered to be part of this
 * paragraph. The range of indices of two separate paragraphs will never
 * overlap.
 */
paragraphMarker?: slides$ParagraphMarker,

/**
 * The zero-based start index of this text element, in Unicode code units.
 */
startIndex?: number,

/**
 * A TextElement representing a run of text where all of the characters
 * in the run have the same TextStyle.
 * 
 * The `start_index` and `end_index` of TextRuns will always be fully
 * contained in the index range of a single `paragraph_marker` TextElement.
 * In other words, a TextRun will never span multiple paragraphs.
 */
textRun?: slides$TextRun
} 

declare interface slides$TextRun {

/**
 * The text of this run.
 */
content?: string,

/**
 * The styling applied to this run.
 */
style?: slides$TextStyle
} 

declare interface slides$TextStyle {

/**
 * The background color of the text. If set, the color is either opaque or
 * transparent, depending on if the `opaque_color` field in it is set.
 */
backgroundColor?: slides$OptionalColor,

/**
 * The text's vertical offset from its normal position.
 * 
 * Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
 * rendered in a smaller font size, computed based on the `font_size` field.
 * The `font_size` itself is not affected by changes in this field.
 */
baselineOffset?: string,

/**
 * Whether or not the text is rendered as bold.
 */
bold?: boolean,

/**
 * The font family of the text.
 * 
 * The font family can be any font from the Font menu in Slides or from
 * [Google Fonts] (https://fonts.google.com/). If the font name is
 * unrecognized, the text is rendered in `Arial`.
 * 
 * Some fonts can affect the weight of the text. If an update request
 * specifies values for both `font_family` and `bold`, the explicitly-set
 * `bold` value is used.
 */
fontFamily?: string,

/**
 * The size of the text's font. When read, the `font_size` will specified in
 * points.
 */
fontSize?: slides$Dimension,

/**
 * The color of the text itself. If set, the color is either opaque or
 * transparent, depending on if the `opaque_color` field in it is set.
 */
foregroundColor?: slides$OptionalColor,

/**
 * Whether or not the text is italicized.
 */
italic?: boolean,

/**
 * The hyperlink destination of the text. If unset, there is no link. Links
 * are not inherited from parent text.
 * 
 * Changing the link in an update request causes some other changes to the
 * text style of the range:
 * 
 * &#42; When setting a link, the text foreground color will be set to
 * ThemeColorType.HYPERLINK and the text will
 * be underlined. If these fields are modified in the same
 * request, those values will be used instead of the link defaults.
 * &#42; Setting a link on a text range that overlaps with an existing link will
 * also update the existing link to point to the new URL.
 * &#42; Links are not settable on newline characters. As a result, setting a link
 * on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
 * will separate the newline character(s) into their own text runs. The
 * link will be applied separately to the runs before and after the newline.
 * &#42; Removing a link will update the text style of the range to match the
 * style of the preceding text (or the default text styles if the preceding
 * text is another link) unless different styles are being set in the same
 * request.
 */
link?: slides$Link,

/**
 * Whether or not the text is in small capital letters.
 */
smallCaps?: boolean,

/**
 * Whether or not the text is struck through.
 */
strikethrough?: boolean,

/**
 * Whether or not the text is underlined.
 */
underline?: boolean,

/**
 * The font family and rendered weight of the text.
 * 
 * This field is an extension of `font_family` meant to support explicit font
 * weights without breaking backwards compatibility. As such, when reading the
 * style of a range of text, the value of `weighted_font_family#font_family`
 * will always be equal to that of `font_family`. However, when writing, if
 * both fields are included in the field mask (either explicitly or through
 * the wildcard `"&#42;"`), their values are reconciled as follows:
 * 
 * &#42; If `font_family` is set and `weighted_font_family` is not, the value of
 * `font_family` is applied with weight `400` ("normal").
 * &#42; If both fields are set, the value of `font_family` must match that of
 * `weighted_font_family#font_family`. If so, the font family and weight of
 * `weighted_font_family` is applied. Otherwise, a 400 bad request error is
 * returned.
 * &#42; If `weighted_font_family` is set and `font_family` is not, the font
 * family and weight of `weighted_font_family` is applied.
 * &#42; If neither field is set, the font family and weight of the text inherit
 * from the parent. Note that these properties cannot inherit separately
 * from each other.
 * 
 * If an update request specifies values for both `weighted_font_family` and
 * `bold`, the `weighted_font_family` is applied first, then `bold`.
 * 
 * If `weighted_font_family#weight` is not set, it defaults to `400`.
 * 
 * If `weighted_font_family` is set, then `weighted_font_family#font_family`
 * must also be set with a non-empty value. Otherwise, a 400 bad request error
 * is returned.
 */
weightedFontFamily?: slides$WeightedFontFamily
} 

declare interface slides$ThemeColorPair {

/**
 * The concrete color corresponding to the theme color type above.
 */
color?: slides$RgbColor,

/**
 * The type of the theme color.
 */
type?: string
} 

declare interface slides$Thumbnail {

/**
 * The content URL of the thumbnail image.
 * 
 * The URL to the image has a default lifetime of 30 minutes.
 * This URL is tagged with the account of the requester. Anyone with the URL
 * effectively accesses the image as the original requester. Access to the
 * image may be lost if the presentation's sharing settings change.
 * The mime type of the thumbnail image is the same as specified in the
 * `GetPageThumbnailRequest`.
 */
contentUrl?: string,

/**
 * The positive height in pixels of the thumbnail image.
 */
height?: number,

/**
 * The positive width in pixels of the thumbnail image.
 */
width?: number
} 

declare interface slides$UpdateImagePropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `imageProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the image outline color, set `fields` to
 * `"outline.outlineFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The image properties to update.
 */
imageProperties?: slides$ImageProperties,

/**
 * The object ID of the image the updates are applied to.
 */
objectId?: string
} 

declare interface slides$UpdateLinePropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `lineProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the line solid fill color, set `fields` to
 * `"lineFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The line properties to update.
 */
lineProperties?: slides$LineProperties,

/**
 * The object ID of the line the update is applied to.
 */
objectId?: string
} 

declare interface slides$UpdatePageElementTransformRequest {

/**
 * The apply mode of the transform update.
 */
applyMode?: string,

/**
 * The object ID of the page element to update.
 */
objectId?: string,

/**
 * The input transform matrix used to update the page element.
 */
transform?: slides$AffineTransform
} 

declare interface slides$UpdatePagePropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `pageProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the page background solid fill color, set `fields`
 * to `"pageBackgroundFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the page the update is applied to.
 */
objectId?: string,

/**
 * The page properties to update.
 */
pageProperties?: slides$PageProperties
} 

declare interface slides$UpdateParagraphStyleRequest {

/**
 * The location of the cell in the table containing the paragraph(s) to
 * style. If `object_id` refers to a table, `cell_location` must have a value.
 * Otherwise, it must not.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `style` is implied and
 * should not be specified. A single `"&#42;"` can be used as short-hand for
 * listing every field.
 * 
 * For example, to update the paragraph alignment, set `fields` to
 * `"alignment"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the shape or table with the text to be styled.
 */
objectId?: string,

/**
 * The paragraph's style.
 */
style?: slides$ParagraphStyle,

/**
 * The range of text containing the paragraph(s) to style.
 */
textRange?: slides$Range
} 

declare interface slides$UpdateShapePropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `shapeProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the shape background solid fill color, set `fields`
 * to `"shapeBackgroundFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the shape the updates are applied to.
 */
objectId?: string,

/**
 * The shape properties to update.
 */
shapeProperties?: slides$ShapeProperties
} 

declare interface slides$UpdateSlidesPositionRequest {

/**
 * The index where the slides should be inserted, based on the slide
 * arrangement before the move takes place. Must be between zero and the
 * number of slides in the presentation, inclusive.
 */
insertionIndex?: number,

/**
 * The IDs of the slides in the presentation that should be moved.
 * The slides in this list must be in existing presentation order, without
 * duplicates.
 */
slideObjectIds?: string[]
} 

declare interface slides$UpdateTableCellPropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `tableCellProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the table cell background solid fill color, set
 * `fields` to `"tableCellBackgroundFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the table.
 */
objectId?: string,

/**
 * The table cell properties to update.
 */
tableCellProperties?: slides$TableCellProperties,

/**
 * The table range representing the subset of the table to which the updates
 * are applied. If a table range is not specified, the updates will apply to
 * the entire table.
 */
tableRange?: slides$TableRange
} 

declare interface slides$UpdateTextStyleRequest {

/**
 * The location of the cell in the table containing the text to style. If
 * `object_id` refers to a table, `cell_location` must have a value.
 * Otherwise, it must not.
 */
cellLocation?: slides$TableCellLocation,

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `style` is implied and
 * should not be specified. A single `"&#42;"` can be used as short-hand for
 * listing every field.
 * 
 * For example, to update the text style to bold, set `fields` to `"bold"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the shape or table with the text to be styled.
 */
objectId?: string,

/**
 * The style(s) to set on the text.
 * 
 * If the value for a particular style matches that of the parent, that style
 * will be set to inherit.
 * 
 * Certain text style changes may cause other changes meant to mirror the
 * behavior of the Slides editor. See the documentation of
 * TextStyle for more information.
 */
style?: slides$TextStyle,

/**
 * The range of text to style.
 * 
 * The range may be extended to include adjacent newlines.
 * 
 * If the range fully contains a paragraph belonging to a list, the
 * paragraph's bullet is also updated with the matching text style.
 */
textRange?: slides$Range
} 

declare interface slides$UpdateVideoPropertiesRequest {

/**
 * The fields that should be updated.
 * 
 * At least one field must be specified. The root `videoProperties` is
 * implied and should not be specified. A single `"&#42;"` can be used as
 * short-hand for listing every field.
 * 
 * For example to update the video outline color, set `fields` to
 * `"outline.outlineFill.solidFill.color"`.
 * 
 * To reset a property to its default value, include its field name in the
 * field mask but leave the field itself unset.
 */
fields?: string,

/**
 * The object ID of the video the updates are applied to.
 */
objectId?: string,

/**
 * The video properties to update.
 */
videoProperties?: slides$VideoProperties
} 

declare interface slides$Video {

/**
 * The video source's unique identifier for this video.
 */
id?: string,

/**
 * The video source.
 */
source?: string,

/**
 * An URL to a video. The URL is valid as long as the source video
 * exists and sharing settings do not change.
 */
url?: string,

/**
 * The properties of the video.
 */
videoProperties?: slides$VideoProperties
} 

declare interface slides$VideoProperties {

/**
 * The outline of the video. The default outline matches the defaults for new
 * videos created in the Slides editor.
 */
outline?: slides$Outline
} 

declare interface slides$WeightedFontFamily {

/**
 * The font family of the text.
 * 
 * The font family can be any font from the Font menu in Slides or from
 * [Google Fonts] (https://fonts.google.com/). If the font name is
 * unrecognized, the text is rendered in `Arial`.
 */
fontFamily?: string,

/**
 * The rendered weight of the text. This field can have any value that is a
 * multiple of `100` between `100` and `900`, inclusive. This range
 * corresponds to the numerical values described in the CSS 2.1
 * Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness),
 * with non-numerical values disallowed. Weights greater than or equal to
 * `700` are considered bold, and weights less than `700`are not bold. The
 * default value is `400` ("normal").
 */
weight?: number
} 

declare interface slides$WordArt {

/**
 * The text rendered as word art.
 */
renderedText?: string
} 

declare interface slides$WriteControl {

/**
 * The revision ID of the presentation required for the write request. If
 * specified and the `required_revision_id` doesn't exactly match the
 * presentation's current `revision_id`, the request will not be processed and
 * will return a 400 bad request error.
 */
requiredRevisionId?: string
} 

declare interface slides$PagesResource {

/**
 * Gets the latest version of the specified page in the presentation.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The object ID of the page to retrieve.
 */
pageObjectId: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * The ID of the presentation to retrieve.
 */
presentationId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$slides$Request<slides$Page>,

/**
 * Generates a thumbnail of the latest version of the specified page in the
 * presentation and returns a URL to the thumbnail image.
 */
getThumbnail(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The object ID of the page whose thumbnail to retrieve.
 */
pageObjectId: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * The ID of the presentation to retrieve.
 */
presentationId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The optional mime type of the thumbnail image.
 * 
 * If you don't specify the mime type, the default mime type will be PNG.
 */
"thumbnailProperties.mimeType"?: string,

/**
 * The optional thumbnail image size.
 * 
 * If you don't specify the size, the server chooses a default size of the
 * image.
 */
"thumbnailProperties.thumbnailSize"?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$slides$Request<slides$Thumbnail>
} 

declare interface slides$PresentationsResource {

/**
 * Applies one or more updates to the presentation.
 * 
 * Each request is validated before
 * being applied. If any request is not valid, then the entire request will
 * fail and nothing will be applied.
 * 
 * Some requests have replies to
 * give you some information about how they are applied. Other requests do
 * not need to return information; these each return an empty reply.
 * The order of replies matches that of the requests.
 * 
 * For example, suppose you call batchUpdate with four updates, and only the
 * third one returns information. The response would have two empty replies:
 * the reply to the third request, and another empty reply, in that order.
 * 
 * Because other users may be editing the presentation, the presentation
 * might not exactly reflect your changes: your changes may
 * be altered with respect to collaborator changes. If there are no
 * collaborators, the presentation should reflect your changes. In any case,
 * the updates in your request are guaranteed to be applied together
 * atomically.
 */
batchUpdate(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * The presentation to apply the updates to.
 */
presentationId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$slides$Request<slides$BatchUpdatePresentationResponse>,

/**
 * Creates a new presentation using the title given in the request. Other
 * fields in the request are ignored.
 * Returns the created presentation.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$slides$Request<slides$Presentation>,

/**
 * Gets the latest version of the specified presentation.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * The ID of the presentation to retrieve.
 */
presentationId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$slides$Request<slides$Presentation>,
pages: slides$PagesResource
} 
    }
