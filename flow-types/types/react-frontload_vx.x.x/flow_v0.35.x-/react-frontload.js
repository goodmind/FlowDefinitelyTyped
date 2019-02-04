declare module 'react-frontload' {
        import type {
          ComponentClass,ComponentType
        } from 'react';

	declare export interface FrontloadProps {
noServerRender?: boolean
} 
	declare export interface FrontloadConnectOptions {
noServerRender?: boolean,
onMount?: boolean,
onUpdate?: boolean
} 
	declare export var Frontload: ComponentClass<FrontloadProps>;
	declare export function frontloadConnect(
frontload: (props: any) => Promise<void>,
options?: FrontloadConnectOptions): <P>(Component: ComponentType<P>) => ComponentType<P>

	declare export function frontloadServerRender(
renderMarkup: (dryRun?: boolean) => string,
withLogging?: boolean): Promise<string>

    }
