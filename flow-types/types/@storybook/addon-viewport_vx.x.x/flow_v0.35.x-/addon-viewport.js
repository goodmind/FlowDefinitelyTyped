declare module '@storybook/addon-viewport' {
        import type {
          StoryDecorator
        } from '@storybook/react';

	declare export type ViewportName = string;
	declare export interface ViewportProperties {
name: ViewportName,
styles: {
width?: string,
height?: string,
[styleName: string]: any
},
type?: "desktop" | "tablet" | "mobile" | string
} 
	declare export interface ViewportDecoratorOptions {

/**
 * Default viewport
 */
name?: ViewportName,

/**
 * Called whenever different viewport is selected from the dropdown
 */
onViewportChange: (change: {
viewport: ViewportProperties
}) => void
} 
	declare export interface ViewportDefinitions {
[viewportKey: string]: ViewportProperties
} 
	declare export type Viewport = ViewportName | ViewportDecoratorOptions;
	declare export interface ViewportConfiguration {
viewports?: ViewportDefinitions,
defaultViewport?: ViewportName
} 
	declare export var INITIAL_VIEWPORTS: ViewportDefinitions;
	declare export function configureViewport(configuration: ViewportConfiguration): void

	declare export function withViewport(viewport?: Viewport): StoryDecorator

    }
