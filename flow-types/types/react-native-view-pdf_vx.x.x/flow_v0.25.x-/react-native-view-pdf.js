declare module "react-native-view-pdf" {
  import typeof * as React from "react";

  declare type HTTPMethod =
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE"
    | "PATCH";
  declare interface URLProps {
    method?: HTTPMethod;
    headers?: {
      [key: string]: string
    };
    body?: string;
  }
  declare export interface PDFViewProps {
    onError?: (error: Error) => void;
    onLoad?: () => void;
    onPageChanged?: (page: number, pageCount: number) => void;
    onScrolled?: (offset: number) => void;
    resource: string;
    resourceType?: "url" | "base64" | "file";
    fileFrom?: "bundle" | "documentsDirectory";
    urlProps?: URLProps;
    textEncoding?: "utf-8" | "utf-16";
    fadeInDuration?: number;
    [key: string]: any;
  }
  declare class PDFView mixins React.Component<PDFViewProps> {}
  declare export default typeof PDFView;
}
