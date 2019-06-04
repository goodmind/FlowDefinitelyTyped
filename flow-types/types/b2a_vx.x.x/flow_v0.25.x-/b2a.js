declare module "b2a" {
  /**
   * Converts base64 string back into original text
   */
  declare function atob(base64: string): string;

  /**
   * Converts text into base64 string
   */
  declare function btoa(text: string): string;

  declare export { atob, btoa };
}
