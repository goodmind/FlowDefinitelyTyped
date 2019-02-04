declare module 'react-inlinesvg' {
        import type {
          ComponentType,ReactNode
        } from 'react';

	declare export type RequestError = {
isHttpError: boolean,
status: number
} & Error

	declare export type InlineSVGError = {
name: "InlineSVGError",
isSupportedBrowser: boolean,
isConfigurationError: boolean,
isUnsupportedBrowserError: boolean,
message: string
} & Error

	declare export interface Props {
baseURL?: string,
cacheGetRequests?: boolean,
children?: ReactNode,
className?: string,
preloader?: ReactNode,
src: URL | string,
style?: {[key: string]: any},
uniqueHash?: string,
uniquifyIDs?: boolean,
onError(error: RequestError | InlineSVGError): void,
onLoad(src: URL | string, isCached: boolean): void,
supportTest(): void,
wrapper(): ReactNode
} 
	declare var InlineSVG: ComponentType<Props>;
	declare export default typeof InlineSVG

    }
