declare module "storybook-readme" {
  declare export type Renderable = React$ComponentType<> | React$Node;
  declare export type RenderFunction = () => Renderable | Renderable[];
  declare export type Readme = string | string[];
  declare export type DecoratorPattern = (
    story: RenderFunction,
    context: {
      kind: string,
      story: string
    }
  ) => Renderable | null;
  declare export type HOCPattern = (story: RenderFunction) => Renderable | null;
  declare export function withReadme(readme: Readme): DecoratorPattern;

  declare export function withReadme(
    readme: Readme,
    story: RenderFunction
  ): RenderFunction;

  declare export interface CustomComponents {
    PreviewComponent: (props: {
      children: React$Node
    }) => React$Node;
    FooterComponent: (props: {
      children: React$Node
    }) => React$Node;
  }
  declare export function withDocs(
    custom: CustomComponents
  ): (readme: Readme) => HOCPattern;

  declare export function withDocs(
    readme: Readme,
    story: RenderFunction
  ): RenderFunction;

  declare export function withDocs(readme: Readme): DecoratorPattern;

  declare var withDocs: typeof npm$namespace$withDocs;

  declare var npm$namespace$withDocs: {
    addFooterDocs: typeof withDocs$addFooterDocs
  };
  declare function withDocs$addFooterDocs(footerDoc: string): void;

  declare export function doc(readme: string): RenderFunction;
}
