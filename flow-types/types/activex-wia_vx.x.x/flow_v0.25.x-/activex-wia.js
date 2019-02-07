declare module "activex-wia" {
  /**
   * String versions of globally unique identifiers (GUIDs) that identify common Device and Item commands.
   */
  declare class WIA$CommandID {
    constructor(...args: empty): mixed;
    static +wiaCommandChangeDocument: Class<WIA$CommandID__wiaCommandChangeDocument> &
      WIA$CommandID__wiaCommandChangeDocument &
      "{04E725B0-ACAE-11D2-A093-00C04F72DC3C}"; // "{04E725B0-ACAE-11D2-A093-00C04F72DC3C}"
    static +wiaCommandDeleteAllItems: Class<WIA$CommandID__wiaCommandDeleteAllItems> &
      WIA$CommandID__wiaCommandDeleteAllItems &
      "{E208C170-ACAD-11D2-A093-00C04F72DC3C}"; // "{E208C170-ACAD-11D2-A093-00C04F72DC3C}"
    static +wiaCommandSynchronize: Class<WIA$CommandID__wiaCommandSynchronize> &
      WIA$CommandID__wiaCommandSynchronize &
      "{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}"; // "{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}"
    static +wiaCommandTakePicture: Class<WIA$CommandID__wiaCommandTakePicture> &
      WIA$CommandID__wiaCommandTakePicture &
      "{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}"; // "{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}"
    static +wiaCommandUnloadDocument: Class<WIA$CommandID__wiaCommandUnloadDocument> &
      WIA$CommandID__wiaCommandUnloadDocument &
      "{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}"; // "{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}"
  }

  declare class WIA$CommandID__wiaCommandChangeDocument mixins WIA$CommandID {}
  declare class WIA$CommandID__wiaCommandDeleteAllItems mixins WIA$CommandID {}
  declare class WIA$CommandID__wiaCommandSynchronize mixins WIA$CommandID {}
  declare class WIA$CommandID__wiaCommandTakePicture mixins WIA$CommandID {}
  declare class WIA$CommandID__wiaCommandUnloadDocument mixins WIA$CommandID {}

  /**
   * String versions of globally unique identifiers (GUIDs) that identify DeviceManager events.
   */
  declare class WIA$EventID {
    constructor(...args: empty): mixed;
    static +wiaEventDeviceConnected: Class<WIA$EventID__wiaEventDeviceConnected> &
      WIA$EventID__wiaEventDeviceConnected &
      "{A28BBADE-64B6-11D2-A231-00C04FA31809}"; // "{A28BBADE-64B6-11D2-A231-00C04FA31809}"
    static +wiaEventDeviceDisconnected: Class<WIA$EventID__wiaEventDeviceDisconnected> &
      WIA$EventID__wiaEventDeviceDisconnected &
      "{143E4E83-6497-11D2-A231-00C04FA31809}"; // "{143E4E83-6497-11D2-A231-00C04FA31809}"
    static +wiaEventItemCreated: Class<WIA$EventID__wiaEventItemCreated> &
      WIA$EventID__wiaEventItemCreated &
      "{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}"; // "{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}"
    static +wiaEventItemDeleted: Class<WIA$EventID__wiaEventItemDeleted> &
      WIA$EventID__wiaEventItemDeleted &
      "{1D22A559-E14F-11D2-B326-00C04F68CE61}"; // "{1D22A559-E14F-11D2-B326-00C04F68CE61}"
    static +wiaEventScanEmailImage: Class<WIA$EventID__wiaEventScanEmailImage> &
      WIA$EventID__wiaEventScanEmailImage &
      "{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}"; // "{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}"
    static +wiaEventScanFaxImage: Class<WIA$EventID__wiaEventScanFaxImage> &
      WIA$EventID__wiaEventScanFaxImage &
      "{C00EB793-8C6E-11D2-977A-0000F87A926F}"; // "{C00EB793-8C6E-11D2-977A-0000F87A926F}"
    static +wiaEventScanFilmImage: Class<WIA$EventID__wiaEventScanFilmImage> &
      WIA$EventID__wiaEventScanFilmImage &
      "{9B2B662C-6185-438C-B68B-E39EE25E71CB}"; // "{9B2B662C-6185-438C-B68B-E39EE25E71CB}"
    static +wiaEventScanImage: Class<WIA$EventID__wiaEventScanImage> &
      WIA$EventID__wiaEventScanImage &
      "{A6C5A715-8C6E-11D2-977A-0000F87A926F}"; // "{A6C5A715-8C6E-11D2-977A-0000F87A926F}"
    static +wiaEventScanImage2: Class<WIA$EventID__wiaEventScanImage2> &
      WIA$EventID__wiaEventScanImage2 &
      "{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}"; // "{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}"
    static +wiaEventScanImage3: Class<WIA$EventID__wiaEventScanImage3> &
      WIA$EventID__wiaEventScanImage3 &
      "{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}"; // "{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}"
    static +wiaEventScanImage4: Class<WIA$EventID__wiaEventScanImage4> &
      WIA$EventID__wiaEventScanImage4 &
      "{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}"; // "{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}"
    static +wiaEventScanOCRImage: Class<WIA$EventID__wiaEventScanOCRImage> &
      WIA$EventID__wiaEventScanOCRImage &
      "{9D095B89-37D6-4877-AFED-62A297DC6DBE}"; // "{9D095B89-37D6-4877-AFED-62A297DC6DBE}"
    static +wiaEventScanPrintImage: Class<WIA$EventID__wiaEventScanPrintImage> &
      WIA$EventID__wiaEventScanPrintImage &
      "{B441F425-8C6E-11D2-977A-0000F87A926F}"; // "{B441F425-8C6E-11D2-977A-0000F87A926F}"
  }

  declare class WIA$EventID__wiaEventDeviceConnected mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventDeviceDisconnected mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventItemCreated mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventItemDeleted mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanEmailImage mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanFaxImage mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanFilmImage mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanImage mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanImage2 mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanImage3 mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanImage4 mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanOCRImage mixins WIA$EventID {}
  declare class WIA$EventID__wiaEventScanPrintImage mixins WIA$EventID {}

  /**
   * String versions of globally unique identifiers (GUIDs) that indicate the file format of an image.
   */
  declare class WIA$FormatID {
    constructor(...args: empty): mixed;
    static +wiaFormatBMP: Class<WIA$FormatID__wiaFormatBMP> &
      WIA$FormatID__wiaFormatBMP &
      "{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}"; // "{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}"
    static +wiaFormatGIF: Class<WIA$FormatID__wiaFormatGIF> &
      WIA$FormatID__wiaFormatGIF &
      "{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}"; // "{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}"
    static +wiaFormatJPEG: Class<WIA$FormatID__wiaFormatJPEG> &
      WIA$FormatID__wiaFormatJPEG &
      "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}"; // "{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}"
    static +wiaFormatPNG: Class<WIA$FormatID__wiaFormatPNG> &
      WIA$FormatID__wiaFormatPNG &
      "{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}"; // "{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}"
    static +wiaFormatTIFF: Class<WIA$FormatID__wiaFormatTIFF> &
      WIA$FormatID__wiaFormatTIFF &
      "{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}"; // "{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}"
  }

  declare class WIA$FormatID__wiaFormatBMP mixins WIA$FormatID {}
  declare class WIA$FormatID__wiaFormatGIF mixins WIA$FormatID {}
  declare class WIA$FormatID__wiaFormatJPEG mixins WIA$FormatID {}
  declare class WIA$FormatID__wiaFormatPNG mixins WIA$FormatID {}
  declare class WIA$FormatID__wiaFormatTIFF mixins WIA$FormatID {}

  /**
   * Miscellaneous string constants
   */
  declare class WIA$Miscellaneous {
    constructor(...args: empty): mixed;
    static +wiaAnyDeviceID: Class<WIA$Miscellaneous__wiaAnyDeviceID> &
      WIA$Miscellaneous__wiaAnyDeviceID &
      "*"; // "*"
    static +wiaIDUnknown: Class<WIA$Miscellaneous__wiaIDUnknown> &
      WIA$Miscellaneous__wiaIDUnknown &
      "{00000000-0000-0000-0000-000000000000}"; // "{00000000-0000-0000-0000-000000000000}"
  }

  declare class WIA$Miscellaneous__wiaAnyDeviceID mixins WIA$Miscellaneous {}
  declare class WIA$Miscellaneous__wiaIDUnknown mixins WIA$Miscellaneous {}

  /**
   * The WiaDeviceType enumeration specifies the type of device attached to a user's computer. Use the Type property on the DeviceInfo object or the Device
   * object to obtain these values from the device.
   */
  declare class WIA$WiaDeviceType {
    constructor(...args: empty): mixed;
    static +CameraDeviceType: Class<WIA$WiaDeviceType__CameraDeviceType> &
      WIA$WiaDeviceType__CameraDeviceType &
      2; // 2
    static +ScannerDeviceType: Class<WIA$WiaDeviceType__ScannerDeviceType> &
      WIA$WiaDeviceType__ScannerDeviceType &
      1; // 1
    static +UnspecifiedDeviceType: Class<WIA$WiaDeviceType__UnspecifiedDeviceType> &
      WIA$WiaDeviceType__UnspecifiedDeviceType &
      0; // 0
    static +VideoDeviceType: Class<WIA$WiaDeviceType__VideoDeviceType> &
      WIA$WiaDeviceType__VideoDeviceType &
      3; // 3
  }

  declare class WIA$WiaDeviceType__CameraDeviceType mixins WIA$WiaDeviceType {}
  declare class WIA$WiaDeviceType__ScannerDeviceType mixins WIA$WiaDeviceType {}
  declare class WIA$WiaDeviceType__UnspecifiedDeviceType
    mixins WIA$WiaDeviceType {}
  declare class WIA$WiaDeviceType__VideoDeviceType mixins WIA$WiaDeviceType {}

  /**
   * A DeviceEvent's type is composed of bits from the WiaEventFlags enumeration. You can test a DeviceEvent's type by using the AND operation with
   * DeviceEvent.Type and a member from the WiaEventFlags enumeration.
   */
  declare class WIA$WiaEventFlag {
    constructor(...args: empty): mixed;
    static +ActionEvent: Class<WIA$WiaEventFlag__ActionEvent> &
      WIA$WiaEventFlag__ActionEvent &
      2; // 2
    static +NotificationEvent: Class<WIA$WiaEventFlag__NotificationEvent> &
      WIA$WiaEventFlag__NotificationEvent &
      1; // 1
  }

  declare class WIA$WiaEventFlag__ActionEvent mixins WIA$WiaEventFlag {}
  declare class WIA$WiaEventFlag__NotificationEvent mixins WIA$WiaEventFlag {}

  /**
   * The WiaImageBias enumeration helps specify what type of data the image is intended to represent.
   */
  declare class WIA$WiaImageBias {
    constructor(...args: empty): mixed;
    static +MaximizeQuality: Class<WIA$WiaImageBias__MaximizeQuality> &
      WIA$WiaImageBias__MaximizeQuality &
      131072; // 131072
    static +MinimizeSize: Class<WIA$WiaImageBias__MinimizeSize> &
      WIA$WiaImageBias__MinimizeSize &
      65536; // 65536
  }

  declare class WIA$WiaImageBias__MaximizeQuality mixins WIA$WiaImageBias {}
  declare class WIA$WiaImageBias__MinimizeSize mixins WIA$WiaImageBias {}

  /**
   * The WiaImageIntent enumeration helps specify what type of data the image is intended to represent.
   */
  declare class WIA$WiaImageIntent {
    constructor(...args: empty): mixed;
    static +ColorIntent: Class<WIA$WiaImageIntent__ColorIntent> &
      WIA$WiaImageIntent__ColorIntent &
      1; // 1
    static +GrayscaleIntent: Class<WIA$WiaImageIntent__GrayscaleIntent> &
      WIA$WiaImageIntent__GrayscaleIntent &
      2; // 2
    static +TextIntent: Class<WIA$WiaImageIntent__TextIntent> &
      WIA$WiaImageIntent__TextIntent &
      4; // 4
    static +UnspecifiedIntent: Class<WIA$WiaImageIntent__UnspecifiedIntent> &
      WIA$WiaImageIntent__UnspecifiedIntent &
      0; // 0
  }

  declare class WIA$WiaImageIntent__ColorIntent mixins WIA$WiaImageIntent {}
  declare class WIA$WiaImageIntent__GrayscaleIntent mixins WIA$WiaImageIntent {}
  declare class WIA$WiaImageIntent__TextIntent mixins WIA$WiaImageIntent {}
  declare class WIA$WiaImageIntent__UnspecifiedIntent
    mixins WIA$WiaImageIntent {}

  /**
   * The WiaImagePropertyType enumeration specifies the type of the value of an image property. Image properties can be found in the Properties collection
   * of an ImageFile object.
   */
  declare class WIA$WiaImagePropertyType {
    constructor(...args: empty): mixed;
    static +ByteImagePropertyType: Class<WIA$WiaImagePropertyType__ByteImagePropertyType> &
      WIA$WiaImagePropertyType__ByteImagePropertyType &
      1001; // 1001
    static +LongImagePropertyType: Class<WIA$WiaImagePropertyType__LongImagePropertyType> &
      WIA$WiaImagePropertyType__LongImagePropertyType &
      1004; // 1004
    static +RationalImagePropertyType: Class<WIA$WiaImagePropertyType__RationalImagePropertyType> &
      WIA$WiaImagePropertyType__RationalImagePropertyType &
      1006; // 1006
    static +StringImagePropertyType: Class<WIA$WiaImagePropertyType__StringImagePropertyType> &
      WIA$WiaImagePropertyType__StringImagePropertyType &
      1002; // 1002
    static +UndefinedImagePropertyType: Class<WIA$WiaImagePropertyType__UndefinedImagePropertyType> &
      WIA$WiaImagePropertyType__UndefinedImagePropertyType &
      1000; // 1000
    static +UnsignedIntegerImagePropertyType: Class<WIA$WiaImagePropertyType__UnsignedIntegerImagePropertyType> &
      WIA$WiaImagePropertyType__UnsignedIntegerImagePropertyType &
      1003; // 1003
    static +UnsignedLongImagePropertyType: Class<WIA$WiaImagePropertyType__UnsignedLongImagePropertyType> &
      WIA$WiaImagePropertyType__UnsignedLongImagePropertyType &
      1005; // 1005
    static +UnsignedRationalImagePropertyType: Class<WIA$WiaImagePropertyType__UnsignedRationalImagePropertyType> &
      WIA$WiaImagePropertyType__UnsignedRationalImagePropertyType &
      1007; // 1007
    static +VectorOfBytesImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfBytesImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfBytesImagePropertyType &
      1101; // 1101
    static +VectorOfLongsImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfLongsImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfLongsImagePropertyType &
      1103; // 1103
    static +VectorOfRationalsImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfRationalsImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfRationalsImagePropertyType &
      1105; // 1105
    static +VectorOfUndefinedImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfUndefinedImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfUndefinedImagePropertyType &
      1100; // 1100
    static +VectorOfUnsignedIntegersImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfUnsignedIntegersImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfUnsignedIntegersImagePropertyType &
      1102; // 1102
    static +VectorOfUnsignedLongsImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfUnsignedLongsImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfUnsignedLongsImagePropertyType &
      1104; // 1104
    static +VectorOfUnsignedRationalsImagePropertyType: Class<WIA$WiaImagePropertyType__VectorOfUnsignedRationalsImagePropertyType> &
      WIA$WiaImagePropertyType__VectorOfUnsignedRationalsImagePropertyType &
      1106; // 1106
  }

  declare class WIA$WiaImagePropertyType__ByteImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__LongImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__RationalImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__StringImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__UndefinedImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__UnsignedIntegerImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__UnsignedLongImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__UnsignedRationalImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfBytesImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfLongsImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfRationalsImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfUndefinedImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfUnsignedIntegersImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfUnsignedLongsImagePropertyType
    mixins WIA$WiaImagePropertyType {}
  declare class WIA$WiaImagePropertyType__VectorOfUnsignedRationalsImagePropertyType
    mixins WIA$WiaImagePropertyType {}

  /**
   * An Item's type is composed of bits from the WiaItemFlags enumeration. You can test an Item's type by using the AND operation with
   * Item.Properties("Item Flags") and a member from the WiaItemFlags enumeration.
   */
  declare class WIA$WiaItemFlag {
    constructor(...args: empty): mixed;
    static +AnalyzeItemFlag: Class<WIA$WiaItemFlag__AnalyzeItemFlag> &
      WIA$WiaItemFlag__AnalyzeItemFlag &
      16; // 16
    static +AudioItemFlag: Class<WIA$WiaItemFlag__AudioItemFlag> &
      WIA$WiaItemFlag__AudioItemFlag &
      32; // 32
    static +BurstItemFlag: Class<WIA$WiaItemFlag__BurstItemFlag> &
      WIA$WiaItemFlag__BurstItemFlag &
      2048; // 2048
    static +DeletedItemFlag: Class<WIA$WiaItemFlag__DeletedItemFlag> &
      WIA$WiaItemFlag__DeletedItemFlag &
      128; // 128
    static +DeviceItemFlag: Class<WIA$WiaItemFlag__DeviceItemFlag> &
      WIA$WiaItemFlag__DeviceItemFlag &
      64; // 64
    static +DisconnectedItemFlag: Class<WIA$WiaItemFlag__DisconnectedItemFlag> &
      WIA$WiaItemFlag__DisconnectedItemFlag &
      256; // 256
    static +FileItemFlag: Class<WIA$WiaItemFlag__FileItemFlag> &
      WIA$WiaItemFlag__FileItemFlag &
      2; // 2
    static +FolderItemFlag: Class<WIA$WiaItemFlag__FolderItemFlag> &
      WIA$WiaItemFlag__FolderItemFlag &
      4; // 4
    static +FreeItemFlag: Class<WIA$WiaItemFlag__FreeItemFlag> &
      WIA$WiaItemFlag__FreeItemFlag &
      0; // 0
    static +GeneratedItemFlag: Class<WIA$WiaItemFlag__GeneratedItemFlag> &
      WIA$WiaItemFlag__GeneratedItemFlag &
      16384; // 16384
    static +HasAttachmentsItemFlag: Class<WIA$WiaItemFlag__HasAttachmentsItemFlag> &
      WIA$WiaItemFlag__HasAttachmentsItemFlag &
      32768; // 32768
    static +HPanoramaItemFlag: Class<WIA$WiaItemFlag__HPanoramaItemFlag> &
      WIA$WiaItemFlag__HPanoramaItemFlag &
      512; // 512
    static +ImageItemFlag: Class<WIA$WiaItemFlag__ImageItemFlag> &
      WIA$WiaItemFlag__ImageItemFlag &
      1; // 1
    static +RemovedItemFlag: Class<WIA$WiaItemFlag__RemovedItemFlag> &
      WIA$WiaItemFlag__RemovedItemFlag &
      -2147483648; // -2147483648
    static +RootItemFlag: Class<WIA$WiaItemFlag__RootItemFlag> &
      WIA$WiaItemFlag__RootItemFlag &
      8; // 8
    static +StorageItemFlag: Class<WIA$WiaItemFlag__StorageItemFlag> &
      WIA$WiaItemFlag__StorageItemFlag &
      4096; // 4096
    static +TransferItemFlag: Class<WIA$WiaItemFlag__TransferItemFlag> &
      WIA$WiaItemFlag__TransferItemFlag &
      8192; // 8192
    static +VideoItemFlag: Class<WIA$WiaItemFlag__VideoItemFlag> &
      WIA$WiaItemFlag__VideoItemFlag &
      65536; // 65536
    static +VPanoramaItemFlag: Class<WIA$WiaItemFlag__VPanoramaItemFlag> &
      WIA$WiaItemFlag__VPanoramaItemFlag &
      1024; // 1024
  }

  declare class WIA$WiaItemFlag__AnalyzeItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__AudioItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__BurstItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__DeletedItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__DeviceItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__DisconnectedItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__FileItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__FolderItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__FreeItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__GeneratedItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__HasAttachmentsItemFlag
    mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__HPanoramaItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__ImageItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__RemovedItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__RootItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__StorageItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__TransferItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__VideoItemFlag mixins WIA$WiaItemFlag {}
  declare class WIA$WiaItemFlag__VPanoramaItemFlag mixins WIA$WiaItemFlag {}

  /**
   * The WiaPropertyType enumeration specifies the type of the value of an item property. Item properties can be found in the Properties collection of a
   * Device or Item object.
   */
  declare class WIA$WiaPropertyType {
    constructor(...args: empty): mixed;
    static +BooleanPropertyType: Class<WIA$WiaPropertyType__BooleanPropertyType> &
      WIA$WiaPropertyType__BooleanPropertyType &
      1; // 1
    static +BytePropertyType: Class<WIA$WiaPropertyType__BytePropertyType> &
      WIA$WiaPropertyType__BytePropertyType &
      2; // 2
    static +ClassIDPropertyType: Class<WIA$WiaPropertyType__ClassIDPropertyType> &
      WIA$WiaPropertyType__ClassIDPropertyType &
      15; // 15
    static +CurrencyPropertyType: Class<WIA$WiaPropertyType__CurrencyPropertyType> &
      WIA$WiaPropertyType__CurrencyPropertyType &
      12; // 12
    static +DatePropertyType: Class<WIA$WiaPropertyType__DatePropertyType> &
      WIA$WiaPropertyType__DatePropertyType &
      13; // 13
    static +DoublePropertyType: Class<WIA$WiaPropertyType__DoublePropertyType> &
      WIA$WiaPropertyType__DoublePropertyType &
      11; // 11
    static +ErrorCodePropertyType: Class<WIA$WiaPropertyType__ErrorCodePropertyType> &
      WIA$WiaPropertyType__ErrorCodePropertyType &
      7; // 7
    static +FileTimePropertyType: Class<WIA$WiaPropertyType__FileTimePropertyType> &
      WIA$WiaPropertyType__FileTimePropertyType &
      14; // 14
    static +HandlePropertyType: Class<WIA$WiaPropertyType__HandlePropertyType> &
      WIA$WiaPropertyType__HandlePropertyType &
      18; // 18
    static +IntegerPropertyType: Class<WIA$WiaPropertyType__IntegerPropertyType> &
      WIA$WiaPropertyType__IntegerPropertyType &
      3; // 3
    static +LargeIntegerPropertyType: Class<WIA$WiaPropertyType__LargeIntegerPropertyType> &
      WIA$WiaPropertyType__LargeIntegerPropertyType &
      8; // 8
    static +LongPropertyType: Class<WIA$WiaPropertyType__LongPropertyType> &
      WIA$WiaPropertyType__LongPropertyType &
      5; // 5
    static +ObjectPropertyType: Class<WIA$WiaPropertyType__ObjectPropertyType> &
      WIA$WiaPropertyType__ObjectPropertyType &
      17; // 17
    static +SinglePropertyType: Class<WIA$WiaPropertyType__SinglePropertyType> &
      WIA$WiaPropertyType__SinglePropertyType &
      10; // 10
    static +StringPropertyType: Class<WIA$WiaPropertyType__StringPropertyType> &
      WIA$WiaPropertyType__StringPropertyType &
      16; // 16
    static +UnsignedIntegerPropertyType: Class<WIA$WiaPropertyType__UnsignedIntegerPropertyType> &
      WIA$WiaPropertyType__UnsignedIntegerPropertyType &
      4; // 4
    static +UnsignedLargeIntegerPropertyType: Class<WIA$WiaPropertyType__UnsignedLargeIntegerPropertyType> &
      WIA$WiaPropertyType__UnsignedLargeIntegerPropertyType &
      9; // 9
    static +UnsignedLongPropertyType: Class<WIA$WiaPropertyType__UnsignedLongPropertyType> &
      WIA$WiaPropertyType__UnsignedLongPropertyType &
      6; // 6
    static +UnsupportedPropertyType: Class<WIA$WiaPropertyType__UnsupportedPropertyType> &
      WIA$WiaPropertyType__UnsupportedPropertyType &
      0; // 0
    static +VariantPropertyType: Class<WIA$WiaPropertyType__VariantPropertyType> &
      WIA$WiaPropertyType__VariantPropertyType &
      19; // 19
    static +VectorOfBooleansPropertyType: Class<WIA$WiaPropertyType__VectorOfBooleansPropertyType> &
      WIA$WiaPropertyType__VectorOfBooleansPropertyType &
      101; // 101
    static +VectorOfBytesPropertyType: Class<WIA$WiaPropertyType__VectorOfBytesPropertyType> &
      WIA$WiaPropertyType__VectorOfBytesPropertyType &
      102; // 102
    static +VectorOfClassIDsPropertyType: Class<WIA$WiaPropertyType__VectorOfClassIDsPropertyType> &
      WIA$WiaPropertyType__VectorOfClassIDsPropertyType &
      115; // 115
    static +VectorOfCurrenciesPropertyType: Class<WIA$WiaPropertyType__VectorOfCurrenciesPropertyType> &
      WIA$WiaPropertyType__VectorOfCurrenciesPropertyType &
      112; // 112
    static +VectorOfDatesPropertyType: Class<WIA$WiaPropertyType__VectorOfDatesPropertyType> &
      WIA$WiaPropertyType__VectorOfDatesPropertyType &
      113; // 113
    static +VectorOfDoublesPropertyType: Class<WIA$WiaPropertyType__VectorOfDoublesPropertyType> &
      WIA$WiaPropertyType__VectorOfDoublesPropertyType &
      111; // 111
    static +VectorOfErrorCodesPropertyType: Class<WIA$WiaPropertyType__VectorOfErrorCodesPropertyType> &
      WIA$WiaPropertyType__VectorOfErrorCodesPropertyType &
      107; // 107
    static +VectorOfFileTimesPropertyType: Class<WIA$WiaPropertyType__VectorOfFileTimesPropertyType> &
      WIA$WiaPropertyType__VectorOfFileTimesPropertyType &
      114; // 114
    static +VectorOfIntegersPropertyType: Class<WIA$WiaPropertyType__VectorOfIntegersPropertyType> &
      WIA$WiaPropertyType__VectorOfIntegersPropertyType &
      103; // 103
    static +VectorOfLargeIntegersPropertyType: Class<WIA$WiaPropertyType__VectorOfLargeIntegersPropertyType> &
      WIA$WiaPropertyType__VectorOfLargeIntegersPropertyType &
      108; // 108
    static +VectorOfLongsPropertyType: Class<WIA$WiaPropertyType__VectorOfLongsPropertyType> &
      WIA$WiaPropertyType__VectorOfLongsPropertyType &
      105; // 105
    static +VectorOfSinglesPropertyType: Class<WIA$WiaPropertyType__VectorOfSinglesPropertyType> &
      WIA$WiaPropertyType__VectorOfSinglesPropertyType &
      110; // 110
    static +VectorOfStringsPropertyType: Class<WIA$WiaPropertyType__VectorOfStringsPropertyType> &
      WIA$WiaPropertyType__VectorOfStringsPropertyType &
      116; // 116
    static +VectorOfUnsignedIntegersPropertyType: Class<WIA$WiaPropertyType__VectorOfUnsignedIntegersPropertyType> &
      WIA$WiaPropertyType__VectorOfUnsignedIntegersPropertyType &
      104; // 104
    static +VectorOfUnsignedLargeIntegersPropertyType: Class<WIA$WiaPropertyType__VectorOfUnsignedLargeIntegersPropertyType> &
      WIA$WiaPropertyType__VectorOfUnsignedLargeIntegersPropertyType &
      109; // 109
    static +VectorOfUnsignedLongsPropertyType: Class<WIA$WiaPropertyType__VectorOfUnsignedLongsPropertyType> &
      WIA$WiaPropertyType__VectorOfUnsignedLongsPropertyType &
      106; // 106
    static +VectorOfVariantsPropertyType: Class<WIA$WiaPropertyType__VectorOfVariantsPropertyType> &
      WIA$WiaPropertyType__VectorOfVariantsPropertyType &
      119; // 119
  }

  declare class WIA$WiaPropertyType__BooleanPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__BytePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__ClassIDPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__CurrencyPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__DatePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__DoublePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__ErrorCodePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__FileTimePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__HandlePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__IntegerPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__LargeIntegerPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__LongPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__ObjectPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__SinglePropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__StringPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__UnsignedIntegerPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__UnsignedLargeIntegerPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__UnsignedLongPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__UnsupportedPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VariantPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfBooleansPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfBytesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfClassIDsPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfCurrenciesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfDatesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfDoublesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfErrorCodesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfFileTimesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfIntegersPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfLargeIntegersPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfLongsPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfSinglesPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfStringsPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfUnsignedIntegersPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfUnsignedLargeIntegersPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfUnsignedLongsPropertyType
    mixins WIA$WiaPropertyType {}
  declare class WIA$WiaPropertyType__VectorOfVariantsPropertyType
    mixins WIA$WiaPropertyType {}

  /**
   * The WiaSubType enumeration specifies more detail about the property value. Use the SubType property on the Property object to obtain these values for
   * the property.
   */
  declare class WIA$WiaSubType {
    constructor(...args: empty): mixed;
    static +FlagSubType: Class<WIA$WiaSubType__FlagSubType> &
      WIA$WiaSubType__FlagSubType &
      3; // 3
    static +ListSubType: Class<WIA$WiaSubType__ListSubType> &
      WIA$WiaSubType__ListSubType &
      2; // 2
    static +RangeSubType: Class<WIA$WiaSubType__RangeSubType> &
      WIA$WiaSubType__RangeSubType &
      1; // 1
    static +UnspecifiedSubType: Class<WIA$WiaSubType__UnspecifiedSubType> &
      WIA$WiaSubType__UnspecifiedSubType &
      0; // 0
  }

  declare class WIA$WiaSubType__FlagSubType mixins WIA$WiaSubType {}
  declare class WIA$WiaSubType__ListSubType mixins WIA$WiaSubType {}
  declare class WIA$WiaSubType__RangeSubType mixins WIA$WiaSubType {}
  declare class WIA$WiaSubType__UnspecifiedSubType mixins WIA$WiaSubType {}

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
      DeviceType?: WIA$WiaDeviceType,
      Intent?: WIA$WiaImageIntent,
      Bias?: WIA$WiaImageBias,
      WIA$FormatID?: string,
      AlwaysSelectDevice?: boolean,
      UseCommonUI?: boolean,
      CancelError?: boolean
    ): WIA$ImageFile | null;

    /**
     * Launches the Windows Scanner and Camera Wizard and returns Nothing. Future versions may return a collection of ImageFile objects.
     */
    ShowAcquisitionWizard(WIA$Device: WIA$Device): null;

    /**
     * Displays the properties dialog box for the specified Device
     * @param boolean [CancelError=false]
     */
    ShowDeviceProperties(WIA$Device: WIA$Device, CancelError?: boolean): void;

    /**
     * Displays the properties dialog box for the specified Item
     * @param boolean [CancelError=false]
     */
    ShowItemProperties(WIA$Item: WIA$Item, CancelError?: boolean): void;

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
      DeviceType?: WIA$WiaDeviceType,
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
      WIA$Device: WIA$Device,
      Intent?: WIA$WiaImageIntent,
      Bias?: WIA$WiaImageBias,
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
      WIA$Item: WIA$Item,
      WIA$FormatID?: string,
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
    ExecuteCommand(WIA$CommandID: string): WIA$Item;

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
    Type: WIA$WiaDeviceType;
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
    WIA$Item(Index: number): WIA$DeviceCommand;

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
    Type: WIA$WiaEventFlag;
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
    WIA$Item(Index: number): WIA$DeviceEvent;

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
    Type: WIA$WiaDeviceType;
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
    WIA$Item(Index: number | string): WIA$DeviceInfo;

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
    RegisterEvent(WIA$EventID: string, DeviceID?: string): void;

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
      WIA$EventID: string,
      DeviceID?: string
    ): void;

    /**
     * Unregisters the specified EventID for the specified DeviceID. UnregisterEvent should only be called for EventID and DeviceID for which you called
     * RegisterEvent.
     * @param string [DeviceID='*']
     */
    UnregisterEvent(WIA$EventID: string, DeviceID?: string): void;

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
      WIA$EventID: string,
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
    WIA$Item(Index: number | string): WIA$FilterInfo;

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
    WIA$Item(Index: number): WIA$Filter;

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
    WIA$Item(Index: number): string;

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
    ARGBData: WIA$Vector;

    /**
     * Returns the raw image file as a Vector of Bytes
     */
    FileData: WIA$Vector;

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
    ExecuteCommand(WIA$CommandID: string): WIA$Item;

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
    Transfer(WIA$FormatID?: string): WIA$ImageFile;
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
    WIA$Item(Index: number): WIA$Item;

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
    WIA$Item(Index: number | string): WIA$Property;

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
    SubType: WIA$WiaSubType;

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
    SubTypeValues: WIA$Vector;

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
    WIA$ImageFile(Width?: number, Height?: number): WIA$ImageFile;

    /**
     * Returns the specified item in the vector by position
     */
    WIA$Item(Index: number): TItem;

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
      obj: WIA$WIA$DeviceManager,
      event: "OnEvent",
      argNames: ["EventID", "DeviceID", "ItemID"],
      handler: (parameter: {
        +WIA$EventID: string,
        +DeviceID: string,
        +ItemID: string
      }) => void
    ): void;
    set<TItem>(
      obj: WIA$WIA$Vector<TItem>,
      propertyName: "Item",
      parameterTypes: [number],
      newValue: TItem
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "WIA.CommonDialog": WIA$WIA$CommonDialog;
    "WIA.DeviceManager": WIA$WIA$DeviceManager;
    "WIA.ImageFile": WIA$WIA$ImageFile;
    "WIA.ImageProcess": WIA$WIA$ImageProcess;
    "WIA.Rational": WIA$WIA$Rational;
    "WIA.Vector": WIA$WIA$Vector;
  }
}
