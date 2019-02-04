declare module 'react-sticky' {
        import typeof * as React from 'react';

	declare export var StickyContainer: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>>;
	declare export interface StickyChildArgs {
style: React.CSSProperties,
isSticky: boolean,
wasSticky: boolean,
distanceFromTop: number,
distanceFromBottom: number,
calculatedHeight: number
} 
	declare export interface StickyProps {
children: (args: StickyChildArgs) => React.ReactElement<any>,
relative?: boolean,
isActive?: boolean,
className?: string,
style?: any,
stickyClassName?: string,
stickyStyle?: any,
topOffset?: number,
bottomOffset?: number,
onStickyStateChange(isSticky: boolean): void,
disableCompensation?: boolean,
disableHardwareAcceleration?: boolean
} 
	declare export var Sticky: React.ComponentClass<StickyProps>;
    }
