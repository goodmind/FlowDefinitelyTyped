declare module "rappid" {
  import typeof * as joint from "jointjs";

  import typeof * as Backbone from "backbone";

  declare interface ui$Handle {
    name: string;
    position: string;
    icon: string;
  }

  declare class ui$SelectionView mixins Backbone.Model {
    paper: joint.dia.Paper;
    graph: joint.dia.Graph;
    model: Backbone.Collection<joint.dia.Cell>;
    constructor(opt: {
      paper: joint.dia.Paper,
      graph: joint.dia.Graph,
      model: Backbone.Collection<joint.dia.Cell>
    }): this;
    createSelectionBox(cellView: joint.dia.CellView): void;
    destroySelectionBox(cellView: joint.dia.CellView): void;
    startSelecting(evt: any): void;
    cancelSelection(): void;
    addHandle(handle: ui$Handle): void;
    removeHandle(name: string): void;
    changeHandle(name: string, handle: ui$Handle): void;
  }
}
