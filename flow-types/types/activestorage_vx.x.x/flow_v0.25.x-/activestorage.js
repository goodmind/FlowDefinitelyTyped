declare module "activestorage" {
  declare export function start(): void;

  declare export class DirectUpload {
    id: number;
    file: File;
    url: string;
    constructor(file: File, url: string, delegate: DirectUploadDelegate): this;
    create(callback: (error: Error, blob: Blob) => void): void;
  }
  declare export interface DirectUploadDelegate {
    directUploadWillCreateBlobWithXHR?: (xhr: XMLHttpRequest) => void;
    directUploadWillStoreFileWithXHR?: (xhr: XMLHttpRequest) => void;
  }
  declare export interface Blob {
    byte_size: number;
    checksum: string;
    content_type: string;
    filename: string;
    signed_id: string;
  }
}
