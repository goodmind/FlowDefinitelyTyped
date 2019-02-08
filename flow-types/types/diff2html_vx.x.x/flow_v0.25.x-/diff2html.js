export interface Diff2Html$Options {
  inputFormat?: string;
  outputFormat?: string;
  showFiles?: boolean;
  matching?: string;
  synchronisedScroll?: boolean;
  matchWordsThreshold?: number;
  matchingMaxComparisons?: number;
}

export interface Diff2Html$Line {
  content: string;
  type: string;
  oldNumber: number;
  newNumber: number;
}

export interface Diff2Html$Block {
  oldStartLine: number;
  oldStartLine2?: number;
  newStartLine: number;
  header: string;
  lines: Diff2Html$Line[];
}

export interface Diff2Html$Result {
  addedLines: number;
  deletedLines: number;
  isCombined: boolean;
  isGitDiff: boolean;
  oldName: string;
  newName: string;
  language: string;
  blocks: Diff2Html$Block[];
  oldMode?: string;
  newMode?: string;
  deletedFileMode?: string;
  newFileMode?: string;
  isDeleted?: boolean;
  isNew?: boolean;
  isCopy?: boolean;
  isRename?: boolean;
  unchangedPercentage?: number;
  changedPercentage?: number;
  checksumBefore?: string;
  checksumAfter?: string;
  mode?: string;
}

export interface Diff2Html$Diff2Html {
  getJsonFromDiff(
    input: string,
    configuration?: Diff2Html$Options
  ): Diff2Html$Result[];
  getPrettyHtml(input: any, configuration?: Diff2Html$Options): string;
  getPrettyHtmlFromJson(
    input: Diff2Html$Result[],
    configuration?: Diff2Html$Options
  ): string;
}
declare module "diff2html" {
  declare var d2h: {
    Diff2Html: Diff2Html$Diff2Html.Diff2Html$Diff2Html
  };
  declare export default typeof d2h;
}
