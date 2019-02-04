declare module 'react-holder' {
        import typeof * as React from 'react';

	declare type ReactHolderProp = {
width: string | number,
height: string | number,
updateOnResize: boolean,
theme?: string,
random?: boolean,
bg?: string,
fg?: string,
text?: string,
size?: number,
font?: string,
align?: string,
outline?: boolean,
lineWrap?: number
} & React.HTMLAttributes<ReactHolder>

	declare class ReactHolder mixins React.Component<ReactHolderProp> {}
	declare export default typeof ReactHolder

    }
