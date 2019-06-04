declare module "b64-lite" {
  declare export function btoa(source: string): string;

  declare export function toBase64(source: string): string;

  declare export function atob(encoded: string): string;

  declare export function fromBase64(encoded: string): string;
}
