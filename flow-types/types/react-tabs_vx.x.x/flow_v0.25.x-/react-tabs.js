declare module "react-tabs" {
  import typeof * as React from "react";

  declare type Omit<T, K: $Keys<T>> = Pick<T, Exclude<$Keys<T>, K>>;
  declare export type TabsProps = {
    className?:
      | string
      | string[]
      | {
          [name: string]: boolean
        },
    defaultFocus?: boolean,
    defaultIndex?: number,
    disabledTabClassName?: string,
    domRef?: (node?: HTMLElement) => void,
    forceRenderTabPanel?: boolean,
    onSelect?: (index: number, last: number, event: Event) => boolean | void,
    selectedIndex?: number,
    selectedTabClassName?: string,
    selectedTabPanelClassName?: string
  } & Omit<React.HTMLProps<HTMLDivElement>, "className" | "onSelect">;

  declare export type TabListProps = {
    className?:
      | string
      | string[]
      | {
          [name: string]: boolean
        }
  } & Omit<React.HTMLProps<HTMLUListElement>, "className">;

  declare export type TabProps = {
    className?:
      | string
      | string[]
      | {
          [name: string]: boolean
        },
    disabled?: boolean,
    disabledClassName?: string,
    selectedClassName?: string,
    tabIndex?: string
  } & Omit<React.HTMLProps<HTMLLIElement>, "className" | "tabIndex">;

  declare export type TabPanelProps = {
    className?:
      | string
      | string[]
      | {
          [name: string]: boolean
        },
    forceRender?: boolean,
    selectedClassName?: string
  } & Omit<React.HTMLProps<HTMLDivElement>, "className">;

  declare export class Tabs mixins React.Component<TabsProps> {}
  declare export class TabList mixins React.Component<TabListProps> {}
  declare export class Tab mixins React.Component<TabProps> {}
  declare export class TabPanel mixins React.Component<TabPanelProps> {}
  declare export function resetIdCounter(): void;
}
