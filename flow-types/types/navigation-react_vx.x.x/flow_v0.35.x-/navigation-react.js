declare module 'navigation-react' {
        import type {
          StateNavigator
        } from 'navigation';

	import type {
          Component,HTMLProps
        } from 'react';

	
/**
 * Defines the Link Props contract
 */
declare export type LinkProps = {

/**
 * Indicates whether Links listen for navigate events
 */
lazy?: boolean,

/**
 * Determines the effect on browser history
 */
historyAction?: "add" | "replace" | "none",

/**
 * Handles Link click events
 */
navigating(e: MouseEvent, domId: string, link: string): boolean,

/**
 * The State Navigator
 */
stateNavigator?: StateNavigator
} & HTMLProps<HTMLAnchorElement>

	
/**
 * Defines the Refresh Link Props contract
 */
declare export type RefreshLinkProps = {

/**
 * The NavigationData to pass
 */
navigationData?: any,

/**
 * Indicates whether to include all the current NavigationData
 */
includeCurrentData?: boolean,

/**
 * The data to add from the current NavigationData
 */
currentDataKeys?: string,

/**
 * The Css Class to display when the Link is active
 */
activeCssClass?: string,

/**
 * Indicates whether the Link is disabled when active
 */
disableActive?: boolean
} & LinkProps

	
/**
 * Hyperlink Component the navigates to the current State
 */
declare export class RefreshLink mixins Component<RefreshLinkProps> {}
	
/**
 * Defines the Navigation Link Props contract
 */
declare export type NavigationLinkProps = {

/**
 * The key of the State to navigate to
 */
stateKey: string
} & RefreshLinkProps

	
/**
 * Hyperlink Component the navigates to a State
 */
declare export class NavigationLink mixins Component<NavigationLinkProps> {}
	
/**
 * Defines the Navigation Back Link Props contract
 */
declare export type NavigationBackLinkProps = {

/**
 * Starting at 1, The number of Crumb steps to go back
 */
distance: number
} & RefreshLinkProps

	
/**
 * Hyperlink Component the navigates back along the crumb trail
 */
declare export class NavigationBackLink mixins Component<NavigationBackLinkProps> {}
    }
