declare module 'react-window-size' {
        import type {
          ComponentType
        } from 'react';

	declare export interface WindowSizeProps {
windowHeight: number,
windowWidth: number
} 
	declare export default function ComponentType<T>(ComposedComponent: ComponentType<T & WindowSizeProps>): ComponentType<T>

    }
