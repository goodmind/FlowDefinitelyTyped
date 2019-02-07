declare module "env-editor" {
  declare export default function Editor(): Editor;

  declare export function get(editor: string): Editor;

  declare export function all(): Editor[];

  declare export interface Editor {
    id: string;
    name: string;
    bin: string;
    isTerminalEditor: boolean;
    paths: string[];
    keywords: string[];
  }
}
