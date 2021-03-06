declare module "sarif" {
  /**
   * Static Analysis Results Format (SARIF) Version 2.0.0-csd.2.beta-2018-10-10 JSON Schema:
   * a standard format for the output of static analysis tools.
   */
  declare export interface Log {
    /**
     * The URI of the JSON schema corresponding to the version.
     */
    $schema?: string;

    /**
     * The SARIF format version of this log file.
     */
    Log$version: Log$Log$version;

    /**
     * The set of runs contained in this log file.
     */
    runs: Run[];
  }
  declare type Log$version = "2.0.0-csd.2.beta.2018-10-10";

  /**
   * A file relevant to a tool invocation or to a result.
   */
  declare export interface Attachment {
    /**
     * A message describing the role played by the attachment.
     */
    description?: Message;

    /**
     * The location of the attachment.
     */
    fileLocation: FileLocation;

    /**
     * An array of rectangles specifying areas of interest within the image.
     */
    rectangles?: Rectangle[];

    /**
     * An array of regions of interest within the attachment.
     */
    regions?: Region[];
  }

  /**
   * A set of threadFlows which together describe a pattern of code execution relevant to detecting a result.
   */
  declare export interface CodeFlow {
    /**
     * A message relevant to the code flow.
     */
    message?: Message;

    /**
     * An array of one or more unique threadFlow objects, each of which describes the progress of a program through
     * a thread of execution.
     */
    threadFlows: ThreadFlow[];

    /**
     * Key/value pairs that provide additional information about the code flow.
     */
    properties?: PropertyBag;
  }

  /**
   * Describes how a converter transformed the output of a static analysis tool from the analysis tool's native output
   * format into the SARIF format.
   */
  declare export interface Conversion {
    /**
     * The locations of the analysis tool's per-run log files.
     */
    analysisToolLogFiles?: FileLocation[];

    /**
     * An invocation object that describes the invocation of the converter.
     */
    invocation?: Invocation;

    /**
     * A tool object that describes the converter.
     */
    tool: Tool;

    /**
     * Key/value pairs that provide additional information about the conversion.
     */
    properties?: PropertyBag;
  }

  /**
   * Represents a directed edge in a graph.
   */
  declare export interface Edge {
    /**
     * A string that uniquely identifies the edge within its graph.
     */
    id: string;

    /**
     * A short description of the edge.
     */
    label?: Message;

    /**
     * Identifies the source node (the node at which the edge starts).
     */
    sourceNodeId: string;

    /**
     * Identifies the target node (the node at which the edge ends).
     */
    targetNodeId: string;

    /**
     * Key/value pairs that provide additional information about the edge.
     */
    properties?: PropertyBag;
  }

  /**
   * Represents the traversal of a single edge during a graph traversal.
   */
  declare export interface EdgeTraversal {
    /**
     * Identifies the edge being traversed.
     */
    edgeId: string;

    /**
     * The values of relevant expressions after the edge has been traversed.
     */
    finalState?: {
      [key: string]: string
    };

    /**
     * A message to display to the user as the edge is traversed.
     */
    message?: Message;

    /**
     * The number of edge traversals necessary to return from a nested graph.
     */
    stepOverEdgeCount?: number;

    /**
     * Key/value pairs that provide additional information about the edge traversal.
     */
    properties?: PropertyBag;
  }

  /**
   * TBD
   */
  declare export interface Exception {
    /**
     * An array of exception objects each of which is considered a cause of this exception.
     */
    innerExceptions?: Exception[];

    /**
     * A string that identifies the kind of exception, for example, the fully qualified type name of an object that
     * was thrown, or the symbolic name of a signal.
     */
    kind?: string;

    /**
     * A message that describes the exception.
     */
    message?: Message;

    /**
     * The sequence of function calls leading to the exception.
     */
    stack?: Stack;

    /**
     * Key/value pairs that provide additional information about the exception
     */
    properties?: PropertyBag;
  }

  /**
   * References to external files that should be inlined with the content of a root log file.
   */
  declare export interface ExternalFiles {
    /**
     * The location of a file containing a run.conversion object to be merged with the root log file.
     */
    conversion?: FileLocation;

    /**
     * The location of a file containing a run.files object to be merged with the root log file.
     */
    files?: FileLocation;

    /**
     * The location of a file containing a run.graphs object to be merged with the root log file.
     */
    graphs?: FileLocation;

    /**
     * An array of locations of files containing arrays of run.invocation objects to be merged with the root log
     * file.
     */
    invocations?: FileLocation[];

    /**
     * The location of a file containing a run.logicalLocations object to be merged with the root log file.
     */
    logicalLocations?: FileLocation;

    /**
     * The location of a file containing a run.resources object to be merged with the root log file.
     */
    resources?: FileLocation;

    /**
     * An array of locations of files containins arrays of run.result objects to be merged with the root log file.
     */
    results?: FileLocation[];

    /**
     * Key/value pairs that provide additional information about the external files
     */
    properties?: PropertyBag;
  }

  /**
   * A single file. In some cases, this file might be nested within another file.
   */
  declare export interface File {
    /**
     * The contents of the file.
     */
    contents?: FileContent;

    /**
     * Specifies the encoding for a file object that refers to a text file.
     */
    encoding?: string;

    /**
     * The location of the file.
     */
    fileLocation?: FileLocation;

    /**
     * A dictionary, each of whose keys is the name of a hash function and each of whose values is the hashed value
     * of the file produced by the specified hash function.
     */
    hashes?: {
      [key: string]: string
    };

    /**
     * The Coordinated Universal Time (UTC) date and time at which the file was most recently modified. See
     * "Date/time properties" in the SARIF spec for the required format.
     */
    lastModifiedTimeUtc?: string;

    /**
     * The length of the file in bytes.
     */
    length?: number;

    /**
     * The MIME type (RFC 2045) of the file.
     */
    mimeType?: string;

    /**
     * The offset in bytes of the file within its containing file.
     */
    offset?: number;

    /**
     * Identifies the key of the immediate parent of the file, if this file is nested.
     */
    parentKey?: string;

    /**
     * The role or roles played by the file in the analysis.
     */
    File$roles?: File$File$roles[];

    /**
     * Key/value pairs that provide additional information about the file.
     */
    properties?: PropertyBag;
  }
  declare type File$roles =
    | "analysisTarget"
    | "attachment"
    | "responseFile"
    | "resultFile"
    | "standardStream"
    | "traceFile"
    | "unmodifiedFile"
    | "modifiedFile"
    | "addedFile"
    | "deletedFile"
    | "renamedFile"
    | "uncontrolledFile";

  /**
   * A change to a single file.
   */
  declare export interface FileChange {
    /**
     * The location of the file to change.
     */
    fileLocation: FileLocation;

    /**
     * An array of replacement objects, each of which represents the replacement of a single region in a single file
     * specified by 'fileLocation'.
     */
    replacements: Replacement[];

    /**
     * Key/value pairs that provide additional information about the file change.
     */
    properties?: PropertyBag;
  }

  /**
   * Represents content from an external file.
   */
  declare export interface FileContent {
    /**
     * MIME Base64-encoded content from a binary file, or from a text file in its original encoding.
     */
    binary?: string;

    /**
     * UTF-8-encoded content from a text file.
     */
    text?: string;

    /**
     * Key/value pairs that provide additional information about the external file.
     */
    properties?: PropertyBag;
  }

  /**
   * Specifies the location of a file.
   */
  declare export interface FileLocation {
    /**
     * A string containing a valid relative or absolute URI.
     */
    uri: string;

    /**
     * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri"
     * property is interpreted.
     */
    uriBaseId?: string;

    /**
     * Key/value pairs that provide additional information about the file location.
     */
    properties?: PropertyBag;
  }

  /**
   * A proposed fix for the problem represented by a result object. A fix specifies a set of file to modify. For each
   * file, it specifies a set of bytes to remove, and provides a set of new bytes to replace them.
   */
  declare export interface Fix {
    /**
     * A message that describes the proposed fix, enabling viewers to present the proposed change to an end user.
     */
    description?: Message;

    /**
     * One or more file changes that comprise a fix for a result.
     */
    fileChanges: FileChange[];

    /**
     * Key/value pairs that provide additional information about the fix.
     */
    properties?: PropertyBag;
  }

  /**
   * A network of nodes and directed edges that describes some aspect of the structure of the code (for example, a
   * call graph).
   */
  declare export interface Graph {
    /**
     * A description of the graph.
     */
    description?: Message;

    /**
     * An array of edge objects representing the edges of the graph.
     */
    edges: Edge[];

    /**
     * A string that uniquely identifies the graph within a run.graphs or result.graphs array.
     */
    id: string;

    /**
     * An array of node objects representing the nodes of the graph.
     */
    nodes: Node[];

    /**
     * Key/value pairs that provide additional information about the graph.
     */
    properties?: PropertyBag;
  }

  /**
   * Represents a path through a graph.
   */
  declare export interface GraphTraversal {
    /**
     * A description of this graph traversal.
     */
    description?: Message;

    /**
     * The sequences of edges traversed by this graph traversal.
     */
    edgeTraversals: EdgeTraversal[];

    /**
     * A string that uniquely identifies that graph being traversed.
     */
    graphId: string;

    /**
     * Values of relevant expressions at the start of the graph traversal.
     */
    initialState?: {
      [key: string]: string
    };

    /**
     * Key/value pairs that provide additional information about the graph traversal.
     */
    properties?: PropertyBag;
  }

  /**
   * The runtime environment of the analysis tool run.
   */
  declare export interface Invocation {
    /**
     * The account that ran the analysis tool.
     */
    account?: string;

    /**
     * An array of strings, containing in order the command line arguments passed to the tool from the operating
     * system.
     */
    arguments?: string[];

    /**
     * A set of files relevant to the invocation of the tool.
     */
    attachments?: Attachment[];

    /**
     * The command line used to invoke the tool.
     */
    commandLine?: string;

    /**
     * A list of conditions detected by the tool that are relevant to the tool's configuration.
     */
    configurationNotifications?: Notification[];

    /**
     * The Coordinated Universal Time (UTC) date and time at which the run ended. See "Date/time properties" in the
     * SARIF spec for the required format.
     */
    endTimeUtc?: string;

    /**
     * The environment variables associated with the analysis tool process, expressed as key/value pairs.
     */
    environmentVariables?: {
      [key: string]: string
    };

    /**
     * An absolute URI specifying the location of the analysis tool's executable.
     */
    executableLocation?: FileLocation;

    /**
     * The process exit code.
     */
    exitCode?: number;

    /**
     * The reason for the process exit.
     */
    exitCodeDescription?: string;

    /**
     * The name of the signal that caused the process to exit.
     */
    exitSignalName?: string;

    /**
     * The numeric value of the signal that caused the process to exit.
     */
    exitSignalNumber?: number;

    /**
     * The machine that hosted the analysis tool run.
     */
    machine?: string;

    /**
     * The process id for the analysis tool run.
     */
    processId?: number;

    /**
     * The reason given by the operating system that the process failed to start.
     */
    processStartFailureMessage?: string;

    /**
     * The locations of any response files specified on the tool's command line.
     */
    responseFiles?: FileLocation[];

    /**
     * The Coordinated Universal Time (UTC) date and time at which the run started. See "Date/time properties" in
     * the SARIF spec for the required format.
     */
    startTimeUtc?: string;

    /**
     * A file containing the standard error stream from the process that was invoked.
     */
    stderr?: FileLocation;

    /**
     * A file containing the standard input stream to the process that was invoked.
     */
    stdin?: FileLocation;

    /**
     * A file containing the standard output stream from the process that was invoked.
     */
    stdout?: FileLocation;

    /**
     * A file containing the interleaved standard output and standard error stream from the process that was
     * invoked.
     */
    stdoutStderr?: FileLocation;

    /**
     * A value indicating whether the tool's execution completed successfully.
     */
    toolExecutionSuccessful?: boolean;

    /**
     * A list of runtime conditions detected by the tool during the analysis.
     */
    toolNotifications?: Notification[];

    /**
     * The working directory for the analysis tool run.
     */
    workingDirectory?: FileLocation;

    /**
     * Key/value pairs that provide additional information about the invocation.
     */
    properties?: PropertyBag;
  }

  /**
   * A location within a programming artifact.
   */
  declare export interface Location {
    /**
     * A set of regions relevant to the location.
     */
    annotations?: Region[];

    /**
     * The human-readable fully qualified name of the logical location. If run.logicalLocations is present, this
     * value matches a property name within that object, from which further information about the logical location
     * can be obtained.
     */
    fullyQualifiedLogicalName?: string;

    /**
     * A message relevant to the location.
     */
    message?: Message;

    /**
     * Identifies the file and region.
     */
    physicalLocation?: PhysicalLocation;

    /**
     * Key/value pairs that provide additional information about the location.
     */
    properties?: PropertyBag;
  }

  /**
   * A logical location of a construct that produced a result.
   */
  declare export interface LogicalLocation {
    /**
     * The machine-readable name for the logical location, such as a mangled function name provided by a C++
     * compiler that encodes calling convention, return type and other details along with the function name.
     */
    decoratedName?: string;

    /**
     * The human-readable fully qualified name of the logical location.
     */
    fullyQualifiedName?: string;

    /**
     * The type of construct this logicalLocationComponent refers to. Should be one of 'function', 'member',
     * 'module', 'namespace', 'package', 'parameter', 'resource', 'returnType', 'type', or 'variable', if any of
     * those accurately describe the construct.
     */
    kind?: string;

    /**
     * Identifies the construct in which the result occurred. For example, this property might contain the name of a
     * class or a method.
     */
    name?: string;

    /**
     * Identifies the key of the immediate parent of the construct in which the result was detected. For example,
     * this property might point to a logical location that represents the namespace that holds a type.
     */
    parentKey?: string;

    /**
     * Key/value pairs that provide additional information about the logical location.
     */
    properties?: PropertyBag;
  }

  /**
   * Encapsulates a message intended to be read by the end user.
   */
  declare export interface Message {
    /**
     * An array of strings to substitute into the message string.
     */
    arguments?: string[];

    /**
     * The resource id for a plain text message string.
     */
    messageId?: string;

    /**
     * The resource id for a rich text message string.
     */
    richMessageId?: string;

    /**
     * A rich text message string.
     */
    richText?: string;

    /**
     * A plain text message string.
     */
    text?: string;

    /**
     * Key/value pairs that provide additional information about the message.
     */
    properties?: PropertyBag;
  }

  /**
   * Represents a node in a graph.
   */
  declare export interface Node {
    /**
     * Array of child nodes.
     */
    children?: Node[];

    /**
     * A string that uniquely identifies the node within its graph.
     */
    id: string;

    /**
     * A short description of the node.
     */
    label?: Message;

    /**
     * A code location associated with the node.
     */
    location?: Location;

    /**
     * Key/value pairs that provide additional information about the node.
     */
    properties?: PropertyBag;
  }

  /**
   * Describes a condition relevant to the tool itself, as opposed to being relevant to a target being analyzed by the
   * tool.
   */
  declare export interface Notification {
    /**
     * The runtime exception, if any, relevant to this notification.
     */
    exception?: Exception;

    /**
     * An identifier for the condition that was encountered.
     */
    id?: string;

    /**
     * A value specifying the severity level of the notification.
     */
    Result$level?: Notification$Result$level;

    /**
     * A message that describes the condition that was encountered.
     */
    message: Message;

    /**
     * The file and region relevant to this notification.
     */
    physicalLocation?: PhysicalLocation;

    /**
     * The stable, unique identifier of the rule (if any) to which this notification is relevant. This member can be
     * used to retrieve rule metadata from the rules dictionary, if it exists.
     */
    ruleId?: string;

    /**
     * The thread identifier of the code that generated the notification.
     */
    threadId?: number;

    /**
     * The Coordinated Universal Time (UTC) date and time at which the analysis tool generated the notification.
     */
    timeUtc?: string;

    /**
     * Key/value pairs that provide additional information about the notification.
     */
    properties?: PropertyBag;
  }
  declare type Notification$level = "note" | "warning" | "error";

  /**
   * A physical location relevant to a result. Specifies a reference to a programming artifact together with a range
   * of bytes or characters within that artifact.
   */
  declare export interface PhysicalLocation {
    /**
     * Specifies a portion of the file that encloses the region. Allows a viewer to display additional context
     * around the region.
     */
    contextRegion?: Region;

    /**
     * The location of the file.
     */
    fileLocation: FileLocation;

    /**
     * Value that distinguishes this physical location from all other physical locations in this run object.
     */
    id?: number;

    /**
     * Specifies a portion of the file.
     */
    region?: Region;

    /**
     * Key/value pairs that provide additional information about the physical location.
     */
    properties?: PropertyBag;
  }

  /**
   * Key/value pairs that provide additional information about the object.
   */
  declare export interface PropertyBag {
    /**
     * A set of distinct strings that provide additional information.
     */
    tags?: string[];

    /**
     * Additional Properties
     */
    [key: string]: any;
  }

  /**
   * An area within an image.
   */
  declare export interface Rectangle {
    /**
     * The Y coordinate of the bottom edge of the rectangle, measured in the image's natural units.
     */
    bottom?: number;

    /**
     * The X coordinate of the left edge of the rectangle, measured in the image's natural units.
     */
    left?: number;

    /**
     * A message relevant to the rectangle.
     */
    message?: Message;

    /**
     * The X coordinate of the right edge of the rectangle, measured in the image's natural units.
     */
    right?: number;

    /**
     * The Y coordinate of the top edge of the rectangle, measured in the image's natural units.
     */
    top?: number;

    /**
     * Key/value pairs that provide additional information about the rectangle.
     */
    properties?: PropertyBag;
  }

  /**
   * A region within a file where a result was detected.
   */
  declare export interface Region {
    /**
     * The length of the region in bytes.
     */
    byteLength?: number;

    /**
     * The zero-based offset from the beginning of the file of the first byte in the region.
     */
    byteOffset?: number;

    /**
     * The length of the region in characters.
     */
    charLength?: number;

    /**
     * The zero-based offset from the beginning of the file of the first character in the region.
     */
    charOffset?: number;

    /**
     * The column number of the character following the end of the region.
     */
    endColumn?: number;

    /**
     * The line number of the last character in the region.
     */
    endLine?: number;

    /**
     * A message relevant to the region.
     */
    message?: Message;

    /**
     * The portion of the file contents within the specified region.
     */
    snippet?: FileContent;

    /**
     * The column number of the first character in the region.
     */
    startColumn?: number;

    /**
     * The line number of the first character in the region.
     */
    startLine?: number;

    /**
     * Key/value pairs that provide additional information about the region.
     */
    properties?: PropertyBag;
  }

  /**
   * The replacement of a single region of a file.
   */
  declare export interface Replacement {
    /**
     * The region of the file to delete.
     */
    deletedRegion: Region;

    /**
     * The content to insert at the location specified by the 'deletedRegion' property.
     */
    insertedContent?: FileContent;

    /**
     * Key/value pairs that provide additional information about the replacement.
     */
    properties?: PropertyBag;
  }

  /**
   * Container for items that require localization.
   */
  declare export interface Resources {
    /**
     * A dictionary, each of whose keys is a resource identifier and each of whose values is a localized string.
     */
    messageStrings?: {
      [key: string]: string
    };

    /**
     * A dictionary, each of whose keys is a string and each of whose values is a 'rule' object, that describe all
     * rules associated with an analysis tool or a specific run of an analysis tool.
     */
    rules?: {
      [key: string]: Rule
    };
  }

  /**
   * A result produced by an analysis tool.
   */
  declare export interface Result {
    /**
     * Identifies the file that the analysis tool was instructed to scan. This need not be the same as the file
     * where the result actually occurred.
     */
    analysisTarget?: FileLocation;

    /**
     * A set of files relevant to the result.
     */
    attachments?: Attachment[];

    /**
     * The state of a result relative to a baseline of a previous run.
     */
    Result$baselineState?: Result$Result$baselineState;

    /**
     * An array of 'codeFlow' objects relevant to the result.
     */
    codeFlows?: CodeFlow[];

    /**
     * An array of physicalLocation objects which specify the portions of an analysis tool's output that a converter
     * transformed into the result object.
     */
    conversionProvenance?: PhysicalLocation[];

    /**
     * A stable, unique identifier for the equivalence class of logically identical results to which this result
     * belongs, in the form of a GUID.
     */
    correlationGuid?: string;

    /**
     * A set of strings each of which individually defines a stable, unique identity for the result.
     */
    fingerprints?: {
      [key: string]: string
    };

    /**
     * An array of 'fix' objects, each of which represents a proposed fix to the problem indicated by the result.
     */
    fixes?: Fix[];

    /**
     * A dictionary, each of whose keys is the id of a graph and each of whose values is a 'graph' object with that
     * id.
     */
    graphs?: {
      [key: string]: Graph
    };

    /**
     * An array of one or more unique 'graphTraversal' objects.
     */
    graphTraversals?: GraphTraversal[];

    /**
     * A stable, unique identifer for the result in the form of a GUID.
     */
    instanceGuid?: string;

    /**
     * A value specifying the severity level of the result.
     */
    Notification$level?: Result$Notification$level;

    /**
     * One or more locations where the result occurred. Specify only one location unless the problem indicated by
     * the result can only be corrected by making a change at every specified location.
     */
    locations?: Location[];

    /**
     * A message that describes the result. The first sentence of the message only will be displayed when visible
     * space is limited.
     */
    message?: Message;

    /**
     * A positive integer specifying the number of times this logically unique result was observed in this run.
     */
    occurrenceCount?: number;

    /**
     * A set of strings that contribute to the stable, unique identity of the result.
     */
    partialFingerprints?: {
      [key: string]: string
    };

    /**
     * A set of locations relevant to this result.
     */
    relatedLocations?: Location[];

    /**
     * The stable, unique identifier of the rule (if any) to which this notification is relevant. This member can be
     * used to retrieve rule metadata from the rules dictionary, if it exists.
     */
    ruleId?: string;

    /**
     * An array of 'stack' objects relevant to the result.
     */
    stacks?: Stack[];

    /**
     * A set of flags indicating one or more suppression conditions.
     */
    Result$suppressionStates?: Result$Result$suppressionStates[];

    /**
     * The URIs of the work items associated with this result
     */
    workItemUris?: string[];

    /**
     * Key/value pairs that provide additional information about the result.
     */
    properties?: PropertyBag;
  }
  declare type Result$level = "note" | "warning" | "error";

  declare type Result$suppressionStates =
    | "suppressedInSource"
    | "suppressedExternally";

  declare type Result$baselineState = "new" | "existing" | "absent";

  /**
   * Describes an analysis rule.
   */
  declare export interface Rule {
    /**
     * Information about the rule that can be configured at runtime.
     */
    configuration?: RuleConfiguration;

    /**
     * A description of the rule. Should, as far as possible, provide details sufficient to enable resolution of any
     * problem indicated by the result.
     */
    fullDescription?: Message;

    /**
     * Provides the primary documentation for the rule, useful when there is no online documentation.
     */
    help?: Message;

    /**
     * A URI where the primary documentation for the rule can be found.
     */
    helpUri?: string;

    /**
     * A stable, opaque identifier for the rule.
     */
    id?: string;

    /**
     * A set of name/value pairs with arbitrary names. The value within each name/value pair consists of plain text
     * interspersed with placeholders, which can be used to construct a message in combination with an arbitrary
     * number of additional string arguments.
     */
    messageStrings?: {
      [key: string]: string
    };

    /**
     * A rule identifier that is understandable to an end user.
     */
    name?: Message;

    /**
     * A set of name/value pairs with arbitrary names. The value within each name/value pair consists of rich text
     * interspersed with placeholders, which can be used to construct a message in combination with an arbitrary
     * number of additional string arguments.
     */
    richMessageStrings?: {
      [key: string]: string
    };

    /**
     * A concise description of the rule. Should be a single sentence that is understandable when visible space is
     * limited to a single line of text.
     */
    shortDescription?: Message;

    /**
     * Key/value pairs that provide additional information about the rule.
     */
    properties?: PropertyBag;
  }

  /**
   * Information about a rule that can be configured at runtime.
   */
  declare export interface RuleConfiguration {
    /**
     * Specifies the default severity level of the result.
     */
    RuleConfiguration$defaultLevel?: RuleConfiguration$RuleConfiguration$defaultLevel;

    /**
     * Specifies whether the rule will be evaluated during the scan.
     */
    enabled?: boolean;

    /**
     * Contains configuration information specific to this rule.
     */
    parameters?: PropertyBag;

    /**
     * Key/value pairs that provide additional information about the rule configuration.
     */
    properties?: PropertyBag;
  }
  declare type RuleConfiguration$defaultLevel =
    | "note"
    | "warning"
    | "error"
    | "open";

  /**
   * Describes a single run of an analysis tool, and contains the output of that run.
   */
  declare export interface Run {
    /**
     * Automation details that describe the aggregate of runs to which this run belongs.
     */
    aggregateIds?: RunAutomationDetails[];

    /**
     * The hardware architecture for which the run was targeted.
     */
    architecture?: string;

    /**
     * The 'instanceGuid' property of a previous SARIF 'run' that comprises the baseline that was used to compute
     * result 'baselineState' properties for the run.
     */
    baselineInstanceGuid?: string;

    /**
     * Specifies the unit in which the tool measures columns.
     */
    Run$columnKind?: Run$Run$columnKind;

    /**
     * A conversion object that describes how a converter transformed an analysis tool's native output format into
     * the SARIF format.
     */
    conversion?: Conversion;

    /**
     * Specifies the default encoding for any file object that refers to a text file.
     */
    defaultFileEncoding?: string;

    /**
     * A dictionary, each of whose keys is a URI and each of whose values is a file object.
     */
    files?: {
      [key: string]: File
    };

    /**
     * A dictionary, each of whose keys is the id of a graph and each of whose values is a 'graph' object with that
     * id.
     */
    graphs?: {
      [key: string]: Graph
    };

    /**
     * Automation details that describe this run.
     */
    id?: RunAutomationDetails;

    /**
     * Describes the invocation of the analysis tool.
     */
    invocations?: Invocation[];

    /**
     * A dictionary, each of whose keys specifies a logical location such as a namespace, type or function.
     */
    logicalLocations?: {
      [key: string]: LogicalLocation
    };

    /**
     * The file location specified by each uriBaseId symbol on the machine where the tool originally ran.
     */
    originalUriBaseIds?: {
      [key: string]: FileLocation
    };

    /**
     * The string used to replace sensitive information in a redaction-aware property.
     */
    redactionToken?: string;

    /**
     * Items that can be localized, such as message strings and rule metadata.
     */
    resources?: Resources;

    /**
     * The set of results contained in an SARIF log. The results array can be omitted when a run is solely exporting
     * rules metadata. It must be present (but may be empty) if a log file represents an actual scan.
     */
    results?: Result[];

    /**
     * The MIME type of all rich text message properties in the run. Default: "text/markdown;variant=GFM"
     */
    richMessageMimeType?: string;

    /**
     * Information about the tool or tool pipeline that generated the results in this run. A run can only contain
     * results produced by a single tool or tool pipeline. A run can aggregate results from multiple log files, as
     * long as context around the tool run (tool command-line arguments and the like) is identical for all
     * aggregated files.
     */
    tool: Tool;

    /**
     * Specifies the revision in version control of the files that were scanned.
     */
    versionControlProvenance?: VersionControlDetails[];

    /**
     * Key/value pairs that provide additional information about the run.
     */
    properties?: PropertyBag;
  }
  declare type Run$columnKind = "utf16CodeUnits" | "unicodeCodePoints";

  /**
   * Information that describes a run's identity and role within an engineering system process.
   */
  declare export interface RunAutomationDetails {
    /**
     * A stable, unique identifier for the equivalence class of runs to which this object's containing run object
     * belongs in the form of a GUID.
     */
    correlationGuid?: string;

    /**
     * A description of the identity and role played within the engineering system by this object's containing run
     * object.
     */
    description?: Message;

    /**
     * A stable, unique identifer for this object's containing run object in the form of a GUID.
     */
    instanceGuid?: string;

    /**
     * A hierarchical string that uniquely identifies this object's containing run object.
     */
    instanceId?: string;

    /**
     * Key/value pairs that provide additional information about the run automation details.
     */
    properties?: PropertyBag;
  }

  /**
   * A call stack that is relevant to a result.
   */
  declare export interface Stack {
    /**
     * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that
     * comprise the call stack.
     */
    frames: StackFrame[];

    /**
     * A message relevant to this call stack.
     */
    message?: Message;

    /**
     * Key/value pairs that provide additional information about the stack.
     */
    properties?: PropertyBag;
  }

  /**
   * A function call within a stack trace.
   */
  declare export interface StackFrame {
    /**
     * The address of the method or function that is executing.
     */
    address?: number;

    /**
     * The location to which this stack frame refers.
     */
    location?: Location;

    /**
     * The name of the module that contains the code of this stack frame.
     */
    module?: string;

    /**
     * The offset from the method or function that is executing.
     */
    offset?: number;

    /**
     * The parameters of the call that is executing.
     */
    parameters?: string[];

    /**
     * The thread identifier of the stack frame.
     */
    threadId?: number;

    /**
     * Key/value pairs that provide additional information about the stack frame.
     */
    properties?: PropertyBag;
  }

  /**
   * TBD
   */
  declare export interface ThreadFlow {
    /**
     * An string that uniquely identifies the threadFlow within the codeFlow in which it occurs.
     */
    id?: string;

    /**
     * A temporally ordered array of 'threadFlowLocation' objects, each of which describes a location visited by the
     * tool while producing the result.
     */
    locations: ThreadFlowLocation[];

    /**
     * A message relevant to the thread flow.
     */
    message?: Message;

    /**
     * Key/value pairs that provide additional information about the thread flow.
     */
    properties?: PropertyBag;
  }

  /**
   * A location visited by an analysis tool while simulating or monitoring the execution of a program.
   */
  declare export interface ThreadFlowLocation {
    /**
     * An integer representing the temporal order in which execution reached this location.
     */
    executionOrder?: number;

    /**
     * The Coordinated Universal Time (UTC) date and time at which this location was executed.
     */
    executionTimeUtc?: string;

    /**
     * Specifies the importance of this location in understanding the code flow in which it occurs. The order from
     * most to least important is "essential", "important", "unimportant". Default: "important".
     */
    ThreadFlowLocation$importance?: ThreadFlowLocation$ThreadFlowLocation$importance;

    /**
     * A string describing the type of this location.
     */
    kind?: string;

    /**
     * The code location.
     */
    location?: Location;

    /**
     * The name of the module that contains the code that is executing.
     */
    module?: string;

    /**
     * An integer representing a containment hierarchy within the thread flow
     */
    nestingLevel?: number;

    /**
     * The call stack leading to this location.
     */
    stack?: Stack;

    /**
     * A dictionary, each of whose keys specifies a variable or expression, the associated value of which represents
     * the variable or expression value. For an annotation of kind 'continuation', for example, this dictionary
     * might hold the current assumed values of a set of global variables.
     */
    state?: {
      [key: string]: string
    };

    /**
     * Key/value pairs that provide additional information about the threadflow location.
     */
    properties?: PropertyBag;
  }
  declare type ThreadFlowLocation$importance =
    | "important"
    | "essential"
    | "unimportant";

  /**
   * The analysis tool that was run.
   */
  declare export interface Tool {
    /**
     * The absolute URI from which the tool can be downloaded.
     */
    downloadUri?: string;

    /**
     * The binary version of the tool's primary executable file (for operating systems such as Windows that provide
     * that information).
     */
    fileVersion?: string;

    /**
     * The name of the tool along with its version and any other useful identifying information, such as its locale.
     */
    fullName?: string;

    /**
     * The tool language (expressed as an ISO 649 two-letter lowercase culture code) and region (expressed as an ISO
     * 3166 two-letter uppercase subculture code associated with a country or region).
     */
    language?: string;

    /**
     * The name of the tool.
     */
    name: string;

    /**
     * A version that uniquely identifies the SARIF logging component that generated this file, if it is versioned
     * separately from the tool.
     */
    sarifLoggerVersion?: string;

    /**
     * The tool version in the format specified by Semantic Versioning 2.0.
     */
    semanticVersion?: string;

    /**
     * The tool version, in whatever format the tool natively provides.
     */
    Log$version?: string;

    /**
     * Key/value pairs that provide additional information about the tool.
     */
    properties?: PropertyBag;
  }

  /**
   * TBD
   */
  declare export interface VersionControlDetails {
    /**
     * A Coordinated Universal Time (UTC) date and time that can be used to synchronize an enlistment to the state
     * of the repository at that time.
     */
    asOfTimeUtc?: string;

    /**
     * The name of a branch containing the revision.
     */
    branch?: string;

    /**
     * The absolute URI of the repository.
     */
    repositoryUri: string;

    /**
     * A string that uniquely and permanently identifies the revision within the repository.
     */
    revisionId?: string;

    /**
     * A tag that has been applied to the revision.
     */
    revisionTag?: string;

    /**
     * Key/value pairs that provide additional information about the version control details.
     */
    properties?: PropertyBag;
  }
}
