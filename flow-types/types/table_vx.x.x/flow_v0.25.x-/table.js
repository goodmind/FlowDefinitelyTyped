declare module "table" {
  declare export type BorderType = "honeywell" | "norc" | "ramac" | "void";
  declare export interface ColumnConfig {
    alignment?: "left" | "center" | "right";
    width?: number;
    truncate?: number;
    paddingLeft?: number;
    paddingRight?: number;
  }
  declare export interface JoinStruct {
    topBody?: string;
    topJoin?: string;
    topLeft?: string;
    topRight?: string;
    bottomBody?: string;
    bottomJoin?: string;
    bottomLeft?: string;
    bottomRight?: string;
    bodyLeft?: string;
    bodyRight?: string;
    bodyJoin?: string;
    joinBody?: string;
    joinLeft?: string;
    joinRight?: string;
    joinJoin?: string;
  }
  declare export interface TableUserConfig {
    columns?: {
      [index: number]: ColumnConfig
    };
    drawHorizontalLine?: (index: number, size: number) => boolean;
    border?: JoinStruct;
    columnDefault?: ColumnConfig;
    columnCount?: number;
  }
  declare export function table(
    data: any[],
    userConfig?: TableUserConfig
  ): string;

  declare export function createStream(
    userConfig: TableUserConfig
  ): {
    write: string[]
  };

  declare export function getBorderCharacters(
    templateName: BorderType
  ): JoinStruct;
}
