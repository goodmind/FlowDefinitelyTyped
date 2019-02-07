declare module "enzyme-to-json" {
  import type { ReactWrapper, ShallowWrapper } from "enzyme";

  declare export default function toJson<P, S>(
    wrapper: ShallowWrapper<P, S> | ReactWrapper<P, S> | Cheerio
  ): { [key: string]: any };
}
