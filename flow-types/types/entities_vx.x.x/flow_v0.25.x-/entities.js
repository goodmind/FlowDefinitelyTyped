declare module "entities" {
  declare export function decode(data: string, level?: number): string;

  declare export function decodeStrict(data: string, level?: number): string;

  declare export function encode(data: string, level?: number): string;

  declare export function decodeXML(str: string): string;

  declare export function decodeXMLStrict(str: string): string;

  declare export function encodeXML(data: string): string;

  declare export function decodeHTML(str: string): string;

  declare export function decodeHTMLStrict(str: string): string;

  declare export function encodeHTML(data: string): string;

  declare export function decodeHTML4(str: string): string;

  declare export function decodeHTML4Strict(str: string): string;

  declare export function encodeHTML4(data: string): string;

  declare export function decodeHTML5(str: string): string;

  declare export function decodeHTML5Strict(str: string): string;

  declare export function encodeHTML5(data: string): string;

  declare export function escape(data: string): string;
}
