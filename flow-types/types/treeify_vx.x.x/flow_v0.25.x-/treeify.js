declare module "treeify" {
  declare export interface TreeObject {
    [k: string]: TreeValue;
  }
  declare export type TreeValue = string | TreeObject;
  declare export function asTree(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean
  ): string;

  declare export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    lineCallback: (line: string) => void
  ): string;

  declare export function asLines(
    treeObj: TreeObject,
    showValues: boolean,
    hideFunctions: boolean,
    lineCallback: (line: string) => void
  ): string;
}
