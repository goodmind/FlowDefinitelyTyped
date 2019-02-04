declare module 'rc-switch' {
        import typeof * as React from 'react';

	declare export interface Props {
autoFocus?: boolean,
checked?: boolean,
checkedChildren: React.ReactNode,
className?: string,
defaultChecked?: boolean,
disabled?: boolean,
loadingIcon?: React.ReactNode,
onChange?: (checked: boolean) => void,
onClick?: (checked: boolean) => void,
prefixCls?: string,
tabIndex?: number,
unCheckedChildren: React.ReactNode
} 
	declare export default class Switch mixins React.Component<Props> {}
    }
