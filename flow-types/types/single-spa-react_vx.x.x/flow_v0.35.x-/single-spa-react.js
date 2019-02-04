declare module 'single-spa-react' {
        import typeof * as React from 'react';

	import typeof * as ReactDOM from 'react-dom';

	declare module.exports: typeof SingleSpaReact

	declare function SingleSpaReact(
opts: SingleSpaReact$SingleSpaReact$Options): SingleSpaReact$SingleSpaReact$Lifecycles

	declare interface SingleSpaReact$Options {
React: typeof React,
ReactDOM: typeof ReactDOM,
rootComponent?: React.ComponentClass<any, any>,
loadRootComponent?: () => Promise<React.ComponentClass<any, any>>,
domElementGetter?: () => Element,
suppressComponentDidCatchWarning?: boolean,
parcelCanUpdate?: boolean
} 

declare interface SingleSpaReact$Lifecycles {
bootstrap: (props: any) => Promise<void>,
mount: (props: any) => Promise<void>,
unmount: (props: any) => Promise<void>
} 
    }
