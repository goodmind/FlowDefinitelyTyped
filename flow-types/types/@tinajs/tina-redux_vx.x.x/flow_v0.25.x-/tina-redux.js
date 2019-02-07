declare module "@tinajs/tina-redux" {
  import type { Store, Dispatch } from "redux";

  declare type MapStateToProps = (state: any) => any;
  declare type mapDispatchToProps = (dispatch: Dispatch) => any;
  declare interface HOC {
    onLoad: () => void;
    onUnload: () => void;
    methods: { [key: string]: any };
  }
  declare class TinaRedux {
    constructor(reduxStore: Store): this;
    connect(mapState?: MapStateToProps, mapDispatch?: mapDispatchToProps): HOC;
  }
  declare module.exports: typeof TinaRedux;
}
