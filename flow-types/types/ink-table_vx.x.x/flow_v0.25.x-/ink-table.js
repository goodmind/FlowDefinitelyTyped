declare module "ink-table" {
  import type { InkComponent, InkNode, StatelessComponent } from "ink";

  declare export interface TableProps {
    cell?: InkComponent;
    data?: $ReadOnlyArray<{ [key: string]: any }>;
    header?: InkComponent;
    padding?: number;
    skeleton?: InkComponent;
  }
  declare export var Cell: StatelessComponent<{
    children: InkNode
  }>;
  declare export var Header: StatelessComponent<{
    children: InkNode
  }>;
  declare export var Skeleton: StatelessComponent<{
    children: InkNode
  }>;
  declare var Table: StatelessComponent<TableProps>;
  declare export default typeof Table;
}
