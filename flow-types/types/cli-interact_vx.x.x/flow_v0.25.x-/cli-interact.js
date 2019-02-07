declare module "cli-interact" {
  import type { BasicOptions } from "readline-sync";

  declare export interface ChoiceOptions {
    allowNoAnswer?: boolean;
    returnNumeric?: boolean;
  }
  declare export interface NumberOptions {
    allowNoAnswer?: boolean;
    requireInteger?: boolean;
  }
  declare export function getChar(
    promptText: string,
    allowedCharsAsString: string,
    flagAllowNoAnswer?: boolean
  ): string;

  declare export function getChoice(
    title: string,
    choices: string[],
    opts: ChoiceOptions & {
      returnNumeric: true
    }
  ): number;

  declare export function getChoice(
    title: string,
    choices: string[],
    opts?: ChoiceOptions
  ): string;

  declare export function getChoiceByChar(
    title: string,
    choices: string[],
    flagAllowNoAnswer?: boolean
  ): string;

  declare export function getInteger(promptText: string): number;

  declare export function getIPversion(flagAllowNoAnswer?: boolean): string;

  declare export function getNumber(
    promptText: string,
    opts?: boolean | NumberOptions
  ): number;

  declare export function getYesNo(
    title: string,
    flagAllowNoAnswer: true
  ): boolean | void;

  declare export function getYesNo(
    title: string,
    flagAllowNoAnswer?: false
  ): boolean;

  declare export function question(
    prompt: string,
    options?: BasicOptions
  ): string;
}
