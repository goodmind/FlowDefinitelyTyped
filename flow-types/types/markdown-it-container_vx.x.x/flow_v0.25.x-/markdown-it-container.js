declare module "markdown-it-container" {
  declare var npm$namespace$markdownItContainer: {
    container_plugin: typeof markdownItContainer$container_plugin
  };
  declare interface markdownItContainer$ContainerOpts {
    marker?: string;
    validate?: (params: string) => boolean;
    render?: (
      tokens: Token[],
      index: number,
      options: any,
      env: any,
      self: Renderer
    ) => void;
  }

  declare function markdownItContainer$container_plugin(
    md: MarkdownIt,
    name: string,
    opts: markdownItContainer$ContainerOpts
  ): void;

  declare var MarkdownItContainer: typeof markdownItContainer$container_plugin;
  declare export default typeof MarkdownItContainer;
}
