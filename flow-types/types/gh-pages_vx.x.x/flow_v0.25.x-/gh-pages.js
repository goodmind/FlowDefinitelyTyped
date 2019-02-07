declare module "gh-pages" {
  declare export interface PublishOptions {
    add?: boolean;
    branch?: string;
    dest?: string;
    dotfiles?: boolean;
    git?: string;
    message?: string;
    only?: string;
    push?: boolean;
    remote?: string;
    repo?: string;
    silent?: boolean;
    src?: string | string[];
    tag?: string;
    user?: null | {
      name: string,
      email: string
    };
  }
  declare export function publish(
    basePath: string,
    callback: (err: any) => void
  ): void;

  declare export function publish(
    basePath: string,
    config: PublishOptions,
    callback?: (err: any) => void
  ): void;
}
