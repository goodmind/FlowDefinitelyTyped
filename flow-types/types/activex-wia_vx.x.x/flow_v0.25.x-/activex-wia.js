declare module "activex-wia" {
  declare var npm$namespace$WIA: {
    CommandID: typeof WIA$CommandID,
    EventID: typeof WIA$EventID,
    FormatID: typeof WIA$FormatID,
    Miscellaneous: typeof WIA$Miscellaneous,
    WiaDeviceType: typeof WIA$WiaDeviceType,
    WiaEventFlag: typeof WIA$WiaEventFlag,
    WiaImageBias: typeof WIA$WiaImageBias,
    WiaImageIntent: typeof WIA$WiaImageIntent,
    WiaImagePropertyType: typeof WIA$WiaImagePropertyType,
    WiaItemFlag: typeof WIA$WiaItemFlag,
    WiaPropertyType: typeof WIA$WiaPropertyType,
    WiaSubType: typeof WIA$WiaSubType,
    CommonDialog: typeof WIA$CommonDialog,
    Device: typeof WIA$Device,
    DeviceCommand: typeof WIA$DeviceCommand,
    DeviceEvent: typeof WIA$DeviceEvent,
    DeviceInfo: typeof WIA$DeviceInfo,
    DeviceManager: typeof WIA$DeviceManager,
    Filter: typeof WIA$Filter,
    FilterInfo: typeof WIA$FilterInfo,
    ImageFile: typeof WIA$ImageFile,
    ImageProcess: typeof WIA$ImageProcess,
    Item: typeof WIA$Item,
    Property: typeof WIA$Property,
    Rational: typeof WIA$Rational
  };

  /**
   * String versions of globally unique identifiers (GUIDs) that identify common Device and Item commands.
   */

  declare var WIA$CommandID: {|
    +wiaCommandChangeDocument: "{04E725B0-ACAE-11D2-A093-00C04F72DC3C}", // "{04E725B0-ACAE-11D2-A093-00C04F72DC3C}"
    +wiaCommandDeleteAllItems: "{E208C170-ACAD-11D2-A093-00C04F72DC3C}", // "{E208C170-ACAD-11D2-A093-00C04F72DC3C}"
    +wiaCommandSynchronize: "{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}", // "{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}"
    +wiaCommandTakePicture: "{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}", // "{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}"
    +wiaCommandUnloadDocument: "{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}" // "{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}"
  |};

  /**
   * String versions of globally unique identifiers (GUIDs) that identify DeviceManager events.
   */

  declare var WIA$EventID: {|
    +wiaEventDeviceConnected: "{A28BBADE-64B6-11D2-A231-00C04FA31809}", // "{A28BBADE-64B6-11D2-A231-00C04FA31809}"
    +wiaEventDeviceDisconnected: "{143E4E83-6497-11D2-A231-00C04FA31809}", // "{143E4E83-6497-11D2-A231-00C04FA31809}"
    +wiaEventItemCreated: "{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}", // "{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}"
    +wiaEventItemDeleted: "{1D22A559-E14F-11D2-B326-00C04F68CE61}", // "{1D22A559-E14F-11D2-B326-00C04F68CE61}"
    +wiaEventScanEmailImage: "{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}", // "{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}"
    +wiaEventScanFaxImage: "{C00EB793-8C6E-11D2-977A-0000F87A926F}", // "{C00EB793-8C6E-11D2-977A-0000F87A926F}"
    +wiaEventScanFilmImage: "{9B2B662C-6185-438C-B68B-E39EE25E71CB}", // "{9B2B662C-6185-438C-B68B-E39EE25E71CB}"
    +wiaEventScanImage: "{A6C5A715-8C6E-11D2-977A-0000F87A926F}", // "{A6C5A715-8C6E-11D2-977A-0000F87A926F}"
    +wiaEventScanImage2: "{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}", // "{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}"
    +wiaEventScanImage3: "{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}", // "{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}"
    +wiaEventScanImage4: "{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}", // "{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}"
    +wiaEventScanOCRImage: "{9D095B89-37D6-4877-AFED-62A297DC6DBE}", // "{9D095B89-37D6-4877-AFED-62A297DC6DBE}"
    +wiaEventScanPrintImage: "{B441F425-8C6E-11D2-977A-0000F87A926F}" // "{B441F425-8C6E-11D2-977A-0000F87A926F}"
  |};

  /**
   * String versions of globally unique identifiers (GUIDs) that indicate the file format of an image.
   */

  declare var WIA$FormatID: {|
    +wiaFormatBMP: "{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}", // "{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}"
    +wiaFormatGIF: "{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}", // "{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}"
    +wiaFormatJPEG: "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}", // "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}"
    +wiaFormatPNG: "{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}", // "{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}"
    +wiaFormatTIFF: "{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}" // "{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}"
  |};

  /**
   * Miscellaneous string constants
   */

  declare var WIA$Miscellaneous: {|
    +wiaAnyDeviceID: "*", // "*"
    +wiaIDUnknown: "{00000000-0000-0000-0000-000000000000}" // "{00000000-0000-0000-0000-000000000000}"
  |};

  /**
   * The WiaDeviceType enumeration specifies the type of device attached to a user's computer. Use the Type property on the DeviceInfo object or the Device
   * object to obtain these values from the device.
   */

  declare var WIA$WiaDeviceType: {|
    +CameraDeviceType: 2, // 2
    +ScannerDeviceType: 1, // 1
    +UnspecifiedDeviceType: 0, // 0
    +VideoDeviceType: 3 // 3
  |};

  /**
   * A DeviceEvent's type is composed of bits from the WiaEventFlags enumeration. You can test a DeviceEvent's type by using the AND operation with
   * DeviceEvent.Type and a member from the WiaEventFlags enumeration.
   */

  declare var WIA$WiaEventFlag: {|
    +ActionEvent: 2, // 2
    +NotificationEvent: 1 // 1
  |};

  /**
   * The WiaImageBias enumeration helps specify what type of data the image is intended to represent.
   */

  declare var WIA$WiaImageBias: {|
    +MaximizeQuality: 131072, // 131072
    +MinimizeSize: 65536 // 65536
  |};

  /**
   * The WiaImageIntent enumeration helps specify what type of data the image is intended to represent.
   */

  declare var WIA$WiaImageIntent: {|
    +ColorIntent: 1, // 1
    +GrayscaleIntent: 2, // 2
    +TextIntent: 4, // 4
    +UnspecifiedIntent: 0 // 0
  |};

  /**
   * The WiaImagePropertyType enumeration specifies the type of the value of an image property. Image properties can be found in the Properties collection
   * of an ImageFile object.
   */

  declare var WIA$WiaImagePropertyType: {|
    +ByteImagePropertyType: 1001, // 1001
    +LongImagePropertyType: 1004, // 1004
    +RationalImagePropertyType: 1006, // 1006
    +StringImagePropertyType: 1002, // 1002
    +UndefinedImagePropertyType: 1000, // 1000
    +UnsignedIntegerImagePropertyType: 1003, // 1003
    +UnsignedLongImagePropertyType: 1005, // 1005
    +UnsignedRationalImagePropertyType: 1007, // 1007
    +VectorOfBytesImagePropertyType: 1101, // 1101
    +VectorOfLongsImagePropertyType: 1103, // 1103
    +VectorOfRationalsImagePropertyType: 1105, // 1105
    +VectorOfUndefinedImagePropertyType: 1100, // 1100
    +VectorOfUnsignedIntegersImagePropertyType: 1102, // 1102
    +VectorOfUnsignedLongsImagePropertyType: 1104, // 1104
    +VectorOfUnsignedRationalsImagePropertyType: 1106 // 1106
  |};

  /**
   * An Item's type is composed of bits from the WiaItemFlags enumeration. You can test an Item's type by using the AND operation with
   * Item.Properties("Item Flags") and a member from the WiaItemFlags enumeration.
   */

  declare var WIA$WiaItemFlag: {|
    +AnalyzeItemFlag: 16, // 16
    +AudioItemFlag: 32, // 32
    +BurstItemFlag: 2048, // 2048
    +DeletedItemFlag: 128, // 128
    +DeviceItemFlag: 64, // 64
    +DisconnectedItemFlag: 256, // 256
    +FileItemFlag: 2, // 2
    +FolderItemFlag: 4, // 4
    +FreeItemFlag: 0, // 0
    +GeneratedItemFlag: 16384, // 16384
    +HasAttachmentsItemFlag: 32768, // 32768
    +HPanoramaItemFlag: 512, // 512
    +ImageItemFlag: 1, // 1
    +RemovedItemFlag: -2147483648, // -2147483648
    +RootItemFlag: 8, // 8
    +StorageItemFlag: 4096, // 4096
    +TransferItemFlag: 8192, // 8192
    +VideoItemFlag: 65536, // 65536
    +VPanoramaItemFlag: 1024 // 1024
  |};

  /**
   * The WiaPropertyType enumeration specifies the type of the value of an item property. Item properties can be found in the Properties collection of a
   * Device or Item object.
   */

  declare var WIA$WiaPropertyType: {|
    +BooleanPropertyType: 1, // 1
    +BytePropertyType: 2, // 2
    +ClassIDPropertyType: 15, // 15
    +CurrencyPropertyType: 12, // 12
    +DatePropertyType: 13, // 13
    +DoublePropertyType: 11, // 11
    +ErrorCodePropertyType: 7, // 7
    +FileTimePropertyType: 14, // 14
    +HandlePropertyType: 18, // 18
    +IntegerPropertyType: 3, // 3
    +LargeIntegerPropertyType: 8, // 8
    +LongPropertyType: 5, // 5
    +ObjectPropertyType: 17, // 17
    +SinglePropertyType: 10, // 10
    +StringPropertyType: 16, // 16
    +UnsignedIntegerPropertyType: 4, // 4
    +UnsignedLargeIntegerPropertyType: 9, // 9
    +UnsignedLongPropertyType: 6, // 6
    +UnsupportedPropertyType: 0, // 0
    +VariantPropertyType: 19, // 19
    +VectorOfBooleansPropertyType: 101, // 101
    +VectorOfBytesPropertyType: 102, // 102
    +VectorOfClassIDsPropertyType: 115, // 115
    +VectorOfCurrenciesPropertyType: 112, // 112
    +VectorOfDatesPropertyType: 113, // 113
    +VectorOfDoublesPropertyType: 111, // 111
    +VectorOfErrorCodesPropertyType: 107, // 107
    +VectorOfFileTimesPropertyType: 114, // 114
    +VectorOfIntegersPropertyType: 103, // 103
    +VectorOfLargeIntegersPropertyType: 108, // 108
    +VectorOfLongsPropertyType: 105, // 105
    +VectorOfSinglesPropertyType: 110, // 110
    +VectorOfStringsPropertyType: 116, // 116
    +VectorOfUnsignedIntegersPropertyType: 104, // 104
    +VectorOfUnsignedLargeIntegersPropertyType: 109, // 109
    +VectorOfUnsignedLongsPropertyType: 106, // 106
    +VectorOfVariantsPropertyType: 119 // 119
  |};

  /**
   * The WiaSubType enumeration specifies more detail about the property value. Use the SubType property on the Property object to obtain these values for
   * the property.
   */

  declare var WIA$WiaSubType: {|
    +FlagSubType: 3, // 3
    +ListSubType: 2, // 2
    +RangeSubType: 1, // 1
    +UnspecifiedSubType: 0 // 0
  |};

  /**
   * The CommonDialog control is an invisible-at-runtime control that contains all the methods that display a User Interface. A CommonDialog control can be
   * created using "WIA.CommonDialog" in a call to CreateObject or by dropping a CommonDialog on a form.
   */
  declare class WIA$CommonDialog {
    constructor(): this;

    /**
     * Displays one or more dialog boxes that enable the user to acquire an image from a hardware device for image acquisition and returns an ImageFile
     * object on success, otherwise Nothing
     * @param [DeviceType=0]
     * @param [Intent=0]
     * @param [Bias=131072]
     * @param string [FormatID='{00000000-0000-0000-0000-000000000000}']
     * @param boolean [AlwaysSelectDevice=false]
     * @param boolean [UseCommonUI=true]
     * @param boolean [CancelError=false]
     */
    ShowAcquireImage(
      DeviceType?: $Values<typeof WIA$WiaDeviceType>,
      Intent?: $Values<typeof WIA$WiaImageIntent>,
      Bias?: $Values<typeof WIA$WiaImageBias>,
      FormatID?: string,
      AlwaysSelectDevice?: boolean,
      UseCommonUI?: boolean,
      CancelError?: boolean
    ): WIA$ImageFile | null;

    /**
     * Launches the Windows Scanner and Camera Wizard and returns Nothing. Future versions may return a collection of ImageFile objects.
     */
    ShowAcquisitionWizard(Device: WIA$Device): null;

    /**
     * Displays the properties dialog box for the specified Device
     * @param boolean [CancelError=false]
     */
    ShowDeviceProperties(Device: WIA$Device, CancelError?: boolean): void;

    /**
     * Displays the properties dialog box for the specified Item
     * @param boolean [CancelError=false]
     */
    ShowItemProperties(Item: WIA$Item, CancelError?: boolean): void;

    /**
     * Launches the Photo Printing Wizard with the absolute path of a specific file or Vector of absolute paths to files
     */
    ShowPhotoPrintingWizard(Files: string | WIA$Vector<string>): void;

    /**
     * Displays a dialog box that enables the user to select a hardware device for image acquisition. Returns the selected Device object on success,
     * otherwise Nothing
     * @param [DeviceType=0]
     * @param boolean [AlwaysSelectDevice=false]
     * @param boolean [CancelError=false]
     */
    ShowSelectDevice(
      DeviceType?: $Values<typeof WIA$WiaDeviceType>,
      AlwaysSelectDevice?: boolean,
      CancelError?: boolean
    ): WIA$Device | null;

    /**
     * Displays a dialog box that enables the user to select an item for transfer from a hardware device for image acquisition. Returns the selection as an
     * Items collection on success, otherwise Nothing
     * @param [Intent=0]
     * @param [Bias=131072]
     * @param boolean [SingleSelect=true]
     * @param boolean [UseCommonUI=true]
     * @param boolean [CancelError=false]
     */
    ShowSelectItems(
      Device: WIA$Device,
      Intent?: $Values<typeof WIA$WiaImageIntent>,
      Bias?: $Values<typeof WIA$WiaImageBias>,
      SingleSelect?: boolean,
      UseCommonUI?: boolean,
      CancelError?: boolean
    ): WIA$Items | null;

    /**
     * Displays a progress dialog box while transferring the specified Item to the local machine. See Item.Transfer for additional information.
     * @param string [FormatID='{00000000-0000-0000-0000-000000000000}']
     * @param boolean [CancelError=false]
     */
    ShowTransfer(
      Item: WIA$Item,
      FormatID?: string,
      CancelError?: boolean
    ): WIA$ImageFile;
  }

  /**
   * The Device object represents an active connection to an imaging device.
   */
  declare class WIA$Device {
    constructor(): this;

    /**
     * A collection of all commands for this imaging device
     */
    Commands: WIA$DeviceCommands;

    /**
     * Returns the DeviceID for this Device
     */
    DeviceID: string;

    /**
     * A collection of all events for this imaging device
     */
    Events: WIA$DeviceEvents;

    /**
     * Issues the command specified by CommandID to the imaging device. CommandIDs are device dependent. Valid CommandIDs for this Device are contained in
     * the Commands collection.
     */
    ExecuteCommand(CommandID: string): WIA$Item;

    /**
     * Returns the Item object specified by ItemID if it exists
     */
    GetItem(ItemID: string): WIA$Item;

    /**
     * A collection of all items for this imaging device
     */
    WIA$Items: WIA$Items;

    /**
     * A collection of all properties for this imaging device
     */
    WIA$Properties: WIA$Properties;

    /**
     * Returns the Type of Device
     */
    Type: $Values<typeof WIA$WiaDeviceType>;
  }

  /**
   * The DeviceCommand object describes a CommandID that can be used when calling ExecuteCommand on a Device or Item object.
   */
  declare class WIA$DeviceCommand {
    constructor(): this;

    /**
     * Returns the commandID for this Command
     */
    WIA$CommandID: string;

    /**
     * Returns the command Description
     */
    Description: string;

    /**
     * Returns the command Name
     */
    Name: string;
  }

  /**
   * The DeviceCommands object is a collection of all the supported DeviceCommands for an imaging device. See the Commands property of a Device or Item
   * object for more details on determining the collection of supported device commands.
   */
  declare interface WIA$DeviceCommands {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection by position
     */
    Item(Index: number): WIA$DeviceCommand;

    /**
     * Returns the specified item in the collection by position
     */
    (Index: number): WIA$DeviceCommand;
  }

  /**
   * The DeviceEvent object describes an EventID that can be used when calling RegisterEvent or RegisterPersistentEvent on a DeviceManager object.
   */
  declare class WIA$DeviceEvent {
    constructor(): this;

    /**
     * Returns the event Description
     */
    Description: string;

    /**
     * Returns the EventID for this Event
     */
    WIA$EventID: string;

    /**
     * Returns the event Name
     */
    Name: string;

    /**
     * Returns the Type of this Event
     */
    Type: $Values<typeof WIA$WiaEventFlag>;
  }

  /**
   * The DeviceEvents object is a collection of all the supported DeviceEvent for an imaging device. See the Events property of a Device object for more
   * details on determining the collection of supported device events.
   */
  declare interface WIA$DeviceEvents {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection by position
     */
    Item(Index: number): WIA$DeviceEvent;

    /**
     * Returns the specified item in the collection by position
     */
    (Index: number): WIA$DeviceEvent;
  }

  /**
   * The DeviceInfo object is a container that describes the unchanging (static) properties of an imaging device that is currently connected to the
   * computer.
   */
  declare class WIA$DeviceInfo {
    constructor(): this;

    /**
     * Establish a connection with this device and return a Device object
     */
    Connect(): WIA$Device;

    /**
     * Returns the DeviceID for this Device
     */
    DeviceID: string;

    /**
     * A collection of all properties for this imaging device that are applicable when the device is not connected
     */
    WIA$Properties: WIA$Properties;

    /**
     * Returns the Type of Device
     */
    Type: $Values<typeof WIA$WiaDeviceType>;
  }

  /**
   * The DeviceInfos object is a collection of all the imaging devices currently connected to the computer. See the DeviceInfos property on the
   * DeviceManager object for detail on accessing the DeviceInfos object.
   */
  declare interface WIA$DeviceInfos {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection either by position or Device ID
     */
    Item(Index: number | string): WIA$DeviceInfo;

    /**
     * Returns the specified item in the collection either by position or Device ID
     */
    (Index: number | string): WIA$DeviceInfo;
  }

  /**
   * The DeviceManager control is an invisible-at-runtime control that manages the imaging devices connected to the computer. A DeviceManager control can
   * be created using "WIA.DeviceManager" in a call to CreateObject or by dropping a DeviceManager on a form.
   */
  declare class WIA$DeviceManager {
    constructor(): this;

    /**
     * A collection of all imaging devices connected to this computer
     */
    WIA$DeviceInfos: WIA$DeviceInfos;

    /**
     * Registers the specified EventID for the specified DeviceID. If DeviceID is "*" then OnEvent will be called whenever the event specified occurs for any
     * device. Otherwise, OnEvent will only be called if the event specified occurs on the device specified.
     * @param string [DeviceID='*']
     */
    RegisterEvent(EventID: string, DeviceID?: string): void;

    /**
     * Registers the specified Command to launch when the specified EventID for the specified DeviceID occurs. Command can be either a ClassID or the full
     * path name and the appropriate command-line arguments needed to invoke the application.
     * @param string [DeviceID='*']
     */
    RegisterPersistentEvent(
      Command: string,
      Name: string,
      Description: string,
      Icon: string,
      EventID: string,
      DeviceID?: string
    ): void;

    /**
     * Unregisters the specified EventID for the specified DeviceID. UnregisterEvent should only be called for EventID and DeviceID for which you called
     * RegisterEvent.
     * @param string [DeviceID='*']
     */
    UnregisterEvent(EventID: string, DeviceID?: string): void;

    /**
     * Unregisters the specified Command for the specified EventID for the specified DeviceID. UnregisterPersistentEvent should only be called for the
     * Command, Name, Description, Icon, EventID and DeviceID for which you called RegisterPersistentEvent.
     * @param string [DeviceID='*']
     */
    UnregisterPersistentEvent(
      Command: string,
      Name: string,
      Description: string,
      Icon: string,
      EventID: string,
      DeviceID?: string
    ): void;
  }

  /**
   * The Filter object represents a unit of modification on an ImageFile. To use a Filter, add it to the Filters collection, then set the filter's
   * properties and finally use the Apply method of the ImageProcess object to filter an ImageFile.
   */
  declare class WIA$Filter {
    constructor(): this;

    /**
     * Returns a Description of what the filter does
     */
    Description: string;

    /**
     * Returns the FilterID for this Filter
     */
    FilterID: string;

    /**
     * Returns the Filter Name
     */
    Name: string;

    /**
     * A collection of all properties for this filter
     */
    WIA$Properties: WIA$Properties;
  }

  /**
   * The FilterInfo object is a container that describes a Filter object without requiring a Filter to be Added to the process chain. See the FilterInfos
   * property on the ImageProcess object for details on accessing FilterInfo objects.
   */
  declare class WIA$FilterInfo {
    constructor(): this;

    /**
     * Returns a technical Description of what the filter does and how to use it in a filter chain
     */
    Description: string;

    /**
     * Returns the FilterID for this filter
     */
    FilterID: string;

    /**
     * Returns the FilterInfo Name
     */
    Name: string;
  }

  /**
   * The FilterInfos object is a collection of all the available FilterInfo objects. See the FilterInfos property on the ImageProcess object for detail on
   * accessing the FilterInfos object.
   */
  declare interface WIA$FilterInfos {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection either by position or name
     */
    Item(Index: number | string): WIA$FilterInfo;

    /**
     * Returns the specified item in the collection either by position or name
     */
    (Index: number | string): WIA$FilterInfo;
  }

  /**
   * The Filters object is a collection of the Filters that will be applied to an ImageFile when you call the Apply method on the ImageProcess object.
   */
  declare interface WIA$Filters {
    /**
     * Appends/Inserts a new Filter of the specified FilterID into a Filter collection
     * @param number [Index=0]
     */
    Add(FilterID: string, Index?: number): void;

    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection by position or FilterID
     */
    Item(Index: number): WIA$Filter;

    /**
     * Removes the designated filter
     */
    Remove(Index: number): void;

    /**
     * Returns the specified item in the collection by position or FilterID
     */
    (Index: number): WIA$Filter;
  }

  /**
   * The Formats object is a collection of supported FormatIDs that you can use when calling Transfer on an Item object or ShowTransfer on a CommonDialog
   * object for this Item.
   */
  declare interface WIA$Formats {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection by position
     */
    Item(Index: number): string;

    /**
     * Returns the specified item in the collection by position
     */
    (Index: number): string;
  }

  /**
   * The ImageFile object is a container for images transferred to your computer when you call Transfer or ShowTransfer. It also supports image files
   * through LoadFile. An ImageFile object can be created using "WIA.ImageFile" in a call to CreateObject.
   */
  declare class WIA$ImageFile {
    constructor(): this;

    /**
     * Returns/Sets the current frame in the image
     */
    ActiveFrame: number;

    /**
     * Returns the raw image bits as a Vector of Long values
     */
    ARGBData: WIA$Vector<>;

    /**
     * Returns the raw image file as a Vector of Bytes
     */
    FileData: WIA$Vector<>;

    /**
     * Returns the file extension for this image file type
     */
    FileExtension: string;

    /**
     * Returns the FormatID for this file type
     */
    WIA$FormatID: string;

    /**
     * Returns the number of frames in the image
     */
    FrameCount: number;

    /**
     * Returns the Height of the image in pixels
     */
    Height: number;

    /**
     * Returns the Horizontal pixels per inch of the image
     */
    HorizontalResolution: number;

    /**
     * Indicates if the pixel format has an alpha component
     */
    IsAlphaPixelFormat: boolean;

    /**
     * Indicates whether the image is animated
     */
    IsAnimated: boolean;

    /**
     * Indicates if the pixel format is extended (16 bits/channel)
     */
    IsExtendedPixelFormat: boolean;

    /**
     * Indicates if the pixel data is an index into a palette or the actual color data
     */
    IsIndexedPixelFormat: boolean;

    /**
     * Loads the ImageFile object with the specified File
     */
    LoadFile(Filename: string): void;

    /**
     * Returns the depth of the pixels of the image in bits per pixel
     */
    PixelDepth: number;

    /**
     * A collection of all properties for this image
     */
    WIA$Properties: WIA$Properties;

    /**
     * Save the ImageFile object to the specified File
     */
    SaveFile(Filename: string): void;

    /**
     * Returns the Vertical pixels per inch of the image
     */
    VerticalResolution: number;

    /**
     * Returns the Width of the image in pixels
     */
    Width: number;
  }

  /**
   * The ImageProcess object manages the filter chain. An ImageProcess object can be created using "WIA.ImageProcess" in a call to CreateObject.
   */
  declare class WIA$ImageProcess {
    constructor(): this;

    /**
     * Takes the specified ImageFile and returns the new ImageFile with all the filters applied on success
     */
    Apply(Source: WIA$ImageFile): WIA$ImageFile;

    /**
     * A collection of all available filters
     */
    WIA$FilterInfos: WIA$FilterInfos;

    /**
     * A collection of the filters to be applied in this process
     */
    WIA$Filters: WIA$Filters;
  }

  /**
   * The Item object is a container for an item on an imaging device object. See the Items property on the Device or Item object for details on accessing
   * Item objects.
   */
  declare class WIA$Item {
    constructor(): this;

    /**
     * A collection of all commands for this item
     */
    Commands: WIA$DeviceCommands;

    /**
     * Issues the command specified by CommandID. CommandIDs are device dependent. Valid CommandIDs for this Item are contained in the Commands collection.
     */
    ExecuteCommand(CommandID: string): WIA$Item;

    /**
     * A collection of all supported format types for this item
     */
    WIA$Formats: WIA$Formats;

    /**
     * Returns the ItemID for this Item
     */
    ItemID: string;

    /**
     * A collection of all child items for this item
     */
    WIA$Items: WIA$Items;

    /**
     * A collection of all properties for this item
     */
    WIA$Properties: WIA$Properties;

    /**
     * Returns an ImageFile object, in this version, in the format specified in FormatID if supported, otherwise using the preferred format for this imaging
     * device. Future versions may return a collection of ImageFile objects.
     * @param string [FormatID='{00000000-0000-0000-0000-000000000000}']
     */
    Transfer(FormatID?: string): WIA$ImageFile;
  }

  /**
   * The Items object contains a collection of Item objects. See the Items property on the Device or Item object for details on accessing the Items object.
   */
  declare interface WIA$Items {
    /**
     * Adds a new Item with the specified Name and Flags. The Flags value is created by using the OR operation with members of the WiaItemFlags enumeration.
     */
    Add(Name: string, Flags: number): void;

    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Returns the specified item in the collection by position
     */
    Item(Index: number): WIA$Item;

    /**
     * Removes the designated Item
     */
    Remove(Index: number): void;

    /**
     * Returns the specified item in the collection by position
     */
    (Index: number): WIA$Item;
  }

  /**
   * The Properties object is a collection of all the Property objects associated with a given Device, DeviceInfo, Filter, ImageFile or Item object. See
   * the Properties property on any of these objects for detail on accessing the Properties object.
   */
  declare interface WIA$Properties {
    /**
     * Returns the number of members in the collection
     */
    +Count: number;

    /**
     * Indicates whether the specified Property exists in the collection
     */
    Exists(Index: number | string): boolean;

    /**
     * Returns the specified item in the collection either by position or name.
     */
    Item(Index: number | string): WIA$Property;

    /**
     * Returns the specified item in the collection either by position or name.
     */
    (Index: number | string): WIA$Property;
  }

  /**
   * The Property object is a container for a property associated with a Device, DeviceInfo, Filter, ImageFile or Item object. See the Properties property
   * on any of these objects for details on accessing Property objects.
   */
  declare class WIA$Property {
    constructor(): this;

    /**
     * Indicates whether the Property Value is read only
     */
    IsReadOnly: boolean;

    /**
     * Indicates whether the Property Value is a vector
     */
    IsVector: boolean;

    /**
     * Returns the Property Name
     */
    Name: string;

    /**
     * Returns the PropertyID of this Property
     */
    PropertyID: number;

    /**
     * Returns the SubType of the Property, if any
     */
    SubType: $Values<typeof WIA$WiaSubType>;

    /**
     * Returns the default Property Value if the SubType is not UnspecifiedSubType
     */
    SubTypeDefault: any;

    /**
     * Returns the maximum valid Property Value if the SubType is RangeSubType
     */
    SubTypeMax: number;

    /**
     * Returns the minimum valid Property Value if the SubType is RangeSubType
     */
    SubTypeMin: number;

    /**
     * Returns the step increment of Property Values if the SubType is RangeSubType
     */
    SubTypeStep: number;

    /**
     * Returns a Vector of valid Property Values if the SubType is ListSubType or valid flag Values that can be ored together if the SubType is FlagSubType
     */
    SubTypeValues: WIA$Vector<>;

    /**
     * Returns either a WiaPropertyType or a WiaImagePropertyType
     */
    Type: number;

    /**
     * Returns/Sets the Property Value
     */
    Value: any;
  }

  /**
   * The Rational object is a container for the rational values found in Exif tags. It is a supported element type of the Vector object and may be created
   * using "WIA.Rational" in a call to CreateObject.
   */
  declare class WIA$Rational {
    constructor(): this;

    /**
     * Returns/Sets the Rational Value Denominator
     */
    Denominator: number;

    /**
     * Returns/Sets the Rational Value Numerator
     */
    Numerator: number;

    /**
     * Returns the Rational Value as a Double
     */
    Value: number;
  }

  /**
   * The Vector object is a collection of values of the same type. It is used throughout the library in many different ways. The Vector object may be
   * created using "WIA.Vector" in a call to CreateObject.
   */
  declare interface WIA$Vector<TItem = any> {
    /**
     * If Index is not zero, Inserts a new element into the Vector collection before the specified Index. If Index is zero, Appends a new element to the
     * Vector collection.
     * @param number [Index=0]
     */
    Add(Value: TItem, Index?: number): void;

    /**
     * Returns/Sets the Vector of Bytes as an array of bytes
     */
    BinaryData: SafeArray;

    /**
     * Removes all elements.
     */
    Clear(): void;

    /**
     * Returns the number of members in the vector
     */
    +Count: number;

    /**
     * Returns/Sets the Vector of Integers from a Date
     */
    Date: VarDate;

    /**
     * Used to get the Thumbnail property of an ImageFile which is an image file, The thumbnail property of an Item which is RGB data, or creating an
     * ImageFile from raw ARGB data. Returns an ImageFile object on success. See the Picture method for more details.
     * @param number [Width=0]
     * @param number [Height=0]
     */
    ImageFile(Width?: number, Height?: number): WIA$ImageFile;

    /**
     * Returns the specified item in the vector by position
     */
    Item(Index: number): TItem;

    /**
     * If the Vector of Bytes contains an image file, then Width and Height are ignored. Otherwise a Vector of Bytes must be RGB data and a Vector of Longs
     * must be ARGB data. Returns a Picture object on success. See the ImageFile method for more details.
     * @param number [Width=0]
     * @param number [Height=0]
     */
    Picture(Width?: number, Height?: number): any;

    /**
     * Removes the designated element and returns it if successful
     */
    Remove(Index: number): TItem | null;

    /**
     * Stores the string Value into the Vector of Bytes including the NULL terminator. Value may be truncated unless Resizable is True. The string will be
     * stored as an ANSI string unless Unicode is True, in which case it will be stored as a Unicode string.
     * @param boolean [Resizable=true]
     * @param boolean [Unicode=true]
     */
    SetFromString(Value: string, Resizable?: boolean, Unicode?: boolean): void;

    /**
     * Returns a Vector of Bytes as a String
     * @param boolean [Unicode=true]
     */
    String(Unicode?: boolean): string;

    /**
     * Returns the specified item in the vector by position
     */
    (Index: number): TItem;
  }
  declare interface ActiveXObject {
    on(
      obj: WIA$DeviceManager,
      event: "OnEvent",
      argNames: ["EventID", "DeviceID", "ItemID"],
      handler: (parameter: {
        +EventID: string,
        +DeviceID: string,
        +ItemID: string
      }) => void
    ): void;
    set<TItem>(
      obj: WIA$Vector<TItem>,
      propertyName: "Item",
      parameterTypes: [number],
      newValue: TItem
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "WIA.CommonDialog": WIA$CommonDialog;
    "WIA.DeviceManager": WIA$DeviceManager;
    "WIA.ImageFile": WIA$ImageFile;
    "WIA.ImageProcess": WIA$ImageProcess;
    "WIA.Rational": WIA$Rational;
    "WIA.Vector": WIA$Vector<>;
  }
}
