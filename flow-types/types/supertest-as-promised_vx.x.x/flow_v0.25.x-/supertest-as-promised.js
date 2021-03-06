declare module "supertest-as-promised" {
  import type { SuperTest, Response } from "supertest";

  import typeof * as superagent from "superagent";

  import typeof * as PromiseBluebird from "bluebird";

  declare function supertestAsPromised(
    app: any
  ): supertestAsPromised$SuperTest<supertestAsPromised$Test>;

  declare var npm$namespace$supertestAsPromised: {
    agent: typeof supertestAsPromised$agent
  };
  declare type supertestAsPromised$Request = {} & supertest.Request;

  declare type supertestAsPromised$Response = {} & supertest.Response;

  declare type supertestAsPromised$Test = {
    toPromise(): PromiseBluebird<supertestAsPromised$Response>,
    timeout(): Promise<supertestAsPromised$Response> & this
  } & supertest.Test &
    superagent.Request;

  declare function supertestAsPromised$agent(
    app?: any
  ): supertestAsPromised$SuperTest<supertestAsPromised$Test>;

  declare type supertestAsPromised$SuperTest<
    T: supertestAsPromised$Request
  > = {} & supertest.SuperTest<T>;

  declare export default typeof supertestAsPromised;
}
