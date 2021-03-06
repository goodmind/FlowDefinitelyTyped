declare module "html-pdf" {
  import typeof * as fs from "fs";

  declare export interface CreateOptions {
    directory?: string;
    height?: string;
    width?: string;
    format?: "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid";
    orientation?: "portrait" | "landscape";
    border?:
      | string
      | {
          top?: string,
          right?: string,
          bottom?: string,
          left?: string
        };
    header?: {
      height?: string,
      contents?: string
    };
    footer?: {
      height?: string,
      contents?: {
        first?: string,
        [page: number]: string,
        default?: string,
        last?: string
      }
    };
    base?: string;
    zoomFactor?: string;
    type?: "png" | "jpeg" | "pdf";
    quality?: string;
    phantomPath?: string;
    phantomArgs?: string[];
    script?: string;
    timeout?: number;
    httpHeaders?: {
      [header: string]: string
    };
  }
  declare export interface FileInfo {
    filename: string;
  }
  declare export interface CreateResult {
    toBuffer(callback: (err: Error, buffer: Buffer) => void): void;
    toFile(callback: (err: Error, res: FileInfo) => void): void;
    toFile(
      filename?: string,
      callback?: (err: Error, res: FileInfo) => void
    ): void;
    toStream(callback: (err: Error, stream: fs.ReadStream) => void): void;
  }
  declare export function create(
    html: string,
    options?: CreateOptions
  ): CreateResult;
}
