declare module "react-native-doc-viewer" {
  declare export function openDoc(
    files: Array<{
      url: string,
      fileName?: string,
      fileNameOptional?: string,
      cache?: boolean,
      fileType?: string
    }>,
    callback: (error: string, url: string) => void
  ): void;

  declare export function openDocb64(
    files: Array<{
      base64: string,
      fileName?: string,
      fileType?: string
    }>,
    callback: (error: string, url: string) => void
  ): void;

  declare export function openDocBinaryinUrl(
    files: Array<{
      url: string,
      fileName?: string,
      fileType?: string
    }>,
    callback: (error: string, url: string) => void
  ): void;

  declare export function playMovie(
    path: string,
    callback: (error: string, url: string) => void
  ): void;
}
