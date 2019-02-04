declare module 'theming' {
        import typeof * as React from 'react';

	declare export type Channel = string;
	declare export type Theme = {[key: string]: any} | ((outerTheme: {[key: string]: any}) => {[key: string]: any});
	declare export var channel: "__THEMING__";
	
/**
 * Returns a component with an already passed Theme listening on the default channel
 */
declare export function withTheme<P>(
component: React.ComponentType<P & {
theme: Theme
}>): React.ComponentType<Pick<P, Exclude<$Keys<P>, "theme">>>

	declare export interface ThemeProviderProps {
theme: Theme,
children?: React.ReactElement<any>
} 
	
/**
 * Provide a theme to an entire react component listening on the default channel
 */
declare export class ThemeProvider mixins React.Component<ThemeProviderProps> {}
	declare export type SubscriptionId = number;
	declare export interface Broadcast<T: Theme> {
getState(): T,
subscribe(callback: () => void): SubscriptionId,
unsubscribe(id: SubscriptionId): void
} 
	declare export type ContextWithTheme<C: string> = Record<C, Broadcast<Theme>>;
	declare export interface ThemeListener<C: string> {
initial(context: ContextWithTheme<C>): Theme,
subscribe(context: ContextWithTheme<C>, callback: (theme: Theme) => void): SubscriptionId,
unsubscribe(context: ContextWithTheme<C>, id: SubscriptionId): void,
contextTypes: React.ValidationMap<C>
} 
	
/**
 * ThemeListener for the default channel
 */
declare export var themeListener: ThemeListener<typeof channel>;
	declare export interface Theming<C: string> {
channel: C,
withTheme: typeof withTheme,
ThemeProvider: ThemeProvider,
themeListener: ThemeListener<C>
} 
	
/**
 * creates a new Theming on the given channel
 */
declare export function createTheming<C: string>(customChannel?: C): Theming<C>

    }
