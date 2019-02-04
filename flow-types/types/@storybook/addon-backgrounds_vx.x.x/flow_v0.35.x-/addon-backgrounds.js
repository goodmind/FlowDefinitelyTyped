declare module '@storybook/addon-backgrounds' {
        import type {
          StoryDecorator
        } from '@storybook/react';

	declare export interface Background {
name: string,
value: string,
default?: boolean
} 
	declare export function withBackgrounds(backgrounds: Background[]): StoryDecorator

	declare function backgrounds(backgrounds: Background[]): StoryDecorator

	declare export default typeof backgrounds

    }
