declare module "smart-truncate" {
  declare export function smartTruncate(
    text: string,
    length: number,
    options?: {
      position?: number,
      mark?: string
    }
  ): string;
}
