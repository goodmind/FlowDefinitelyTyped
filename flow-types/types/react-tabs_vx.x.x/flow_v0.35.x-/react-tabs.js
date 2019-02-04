declare module 'react-tabs' {
        import typeof * as React from 'react';

	declare export interface TabsProps {
className?: string | Array<string> | {
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
} 
	declare export interface TabListProps {
className?: string | Array<string> | {
[name: string]: boolean
}
} 
	declare export interface TabProps {
className?: string | Array<string> | {
[name: string]: boolean
},
disabled?: boolean,
disabledClassName?: string,
selectedClassName?: string,
tabIndex?: string
} 
	declare export interface TabPanelProps {
className?: string | Array<string> | {
[name: string]: boolean
},
forceRender?: boolean,
selectedClassName?: string
} 
	declare export class Tabs mixins React.Component<TabsProps> {}
	declare export class TabList mixins React.Component<TabListProps> {}
	declare export class Tab mixins React.Component<TabProps> {}
	declare export class TabPanel mixins React.Component<TabPanelProps> {}
	declare export function resetIdCounter(): void

    }
