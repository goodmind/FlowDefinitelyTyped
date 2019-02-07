declare module "phonegap-plugin-barcodescanner" {
  declare interface CordovaPlugins {
    barcodeScanner: phonegapBarcode$phonegapBarcode$BarcodeScanner;
  }
  declare interface phonegapBarcode$BarcodeScanResult {
    text: string;
    format: string;
    cancelled: boolean;
  }

  declare interface phonegapBarcode$BarcodeScanOptions {
    preferFrontCamera?: boolean;
    showFlipCameraButton?: boolean;
    showTorchButton?: boolean;
    torchOn?: boolean;
    saveHistory?: boolean;
    resultDisplayDuration?: number;
    disableAnimations: boolean;
    prompt?: string;
    formats?: string;
    orientation?: "landscape" | "portrait";
    disableSuccessBeep?: boolean;
  }

  declare interface phonegapBarcode$EncodingType {
    TEXT_TYPE: any;
    EMAIL_TYPE: any;
    PHONE_TYPE: any;
    SMS_TYPE: any;
  }

  declare interface phonegapBarcode$BarcodeScanner {
    scan: (
      success: (result: phonegapBarcode$BarcodeScanResult) => any,
      failure?: (err: any) => any,
      opts?: phonegapBarcode$BarcodeScanOptions
    ) => void;
    encode: (
      encodingType: phonegapBarcode$EncodingType,
      data: string,
      success: (result: any) => any,
      failure?: (err: any) => any
    ) => void;
    Encode: phonegapBarcode$EncodingType;
  }
}
