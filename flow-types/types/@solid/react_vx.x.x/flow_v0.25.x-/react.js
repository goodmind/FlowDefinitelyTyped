declare module "@solid/react" {
  import typeof * as React from "react";

  declare export interface LoginButtonProps {
    popup: string;
    className?: string;
  }
  declare export class LoginButton mixins React.Component<LoginButtonProps> {}
  declare export class LogoutButton
    mixins React.Component<{
        className?: string
      }> {}
  declare export type AuthButtonProps = {
    login: string,
    logout: string
  } & LoginButtonProps;

  declare export class AuthButton mixins React.Component<AuthButtonProps> {}
  declare export class LoggedIn mixins React.Component<> {}
  declare export class LoggedOut mixins React.Component<> {}
  declare export function useWebId(): string | null | void;

  declare export function useLoggedIn(): boolean | void;

  declare export function useLoggedOut(): boolean | void;

  declare export interface LDflexValue {
    toString: () => string;
  }
  declare export function useLDflexValue(
    expression: string
  ): LDflexValue | void;

  declare export function useLDflexList(expression: string): LDflexValue[];

  declare export function useLDflex(
    expression: string,
    listMode: true
  ): [LDflexValue[], boolean, Error | void];

  declare export function useLDflex(
    expression: string,
    listMode?: false
  ): [LDflexValue, boolean, Error | void];

  declare export class Value
    mixins React.Component<{
        src: string
      }> {}
  declare export interface ListProps {
    src: string;
    offset?: number;
    limit?: number;
    filter?: <T: LDflexValue>(
      item: LDflexValue,
      index: number,
      array: LDflexValue[]
    ) => boolean;
    container?: (items: React$Node) => React$Node;
    children?: (listItem: LDflexValue, index: number) => React$Node;
  }
  declare export class List mixins React.Component<ListProps> {}
  declare export class Image
    mixins React.Component<
        {
          src: string,
          defaultSrc?: string
        } & React.HTMLAttributes<HTMLImageElement>
      > {}
  declare export class Label
    mixins React.Component<{
        src: string
      }> {}
  declare export class Link
    mixins React.Component<
        {
          href: string
        } & React.HTMLAttributes<HTMLAnchorElement>
      > {}
  declare export class LiveUpdate
    mixins React.Component<{
        subscribe?: "*" | string | string[]
      }> {}
  declare export class Name
    mixins React.Component<{
        src: string
      }> {}
  declare export interface ActivityButtonProps {
    object?: string;
    activateText?: string;
    deactivateText?: string;
    shortName?: string;
    activateLabel?: string | [string, string, React.Node];
    deactivateLabel?: string | [string, string, React.Node];
  }
  declare export class ActivityButton
    mixins React.Component<
        ActivityButtonProps & React.HTMLAttributes<HTMLButtonElement>
      > {}
  declare export class Like mixins ActivityButton {}
  declare export class LikeButton mixins Like {}
  declare export class Dislike mixins ActivityButton {}
  declare export class DislikeButton mixins Dislike {}
  declare export class Follow mixins ActivityButton {}
  declare export class FollowButton mixins Follow {}
}
