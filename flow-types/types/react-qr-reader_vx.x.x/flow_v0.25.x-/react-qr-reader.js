declare module "react-qr-reader" {
  import typeof * as React from "react";

  declare interface QrReader$props {
    onScan: (data: string | null) => void;
    onError: (err: any) => void;
    onLoad?: () => void;
    onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    delay?: number | false;
    facingMode?: "user" | "environment";
    legacyMode?: boolean;
    resolution?: number;
    showViewFinder?: boolean;
    style?: any;
    className?: string;
  }
  declare class QrReader mixins React.Component<QrReader$QrReader$props> {}
  declare module.exports: typeof QrReader;
}
