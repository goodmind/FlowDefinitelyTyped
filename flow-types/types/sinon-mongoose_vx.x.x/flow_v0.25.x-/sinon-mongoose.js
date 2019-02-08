declare module "sinon" {
  declare export interface SinonStub {
    /**
     * When called, the stub will create a new stub to represent a mongoose chained function.
     */
    chain(name: string): SinonStub;
  }
}
declare module "sinon-mongoose" {
  import typeof * as s from "sinon";
}
