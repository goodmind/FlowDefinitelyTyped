declare module 'react-swipe' {
        import typeof * as React from 'react';

	declare class ReactSwipe mixins React.Component<ReactSwipe$ReactSwipe$Props> {
prev(): void;
next(): void;
getPos(): number;
getNumSlides(): number;
slide(index: number, duration: number): void
}
	declare interface ReactSwipe$Style {
container: React.CSSProperties,
wrapper: React.CSSProperties,
child: React.CSSProperties
} 

declare interface ReactSwipe$Props {
id?: string,
swipeOptions?: SwipeOptions,
style?: ReactSwipe$Style,
className?: string
} 
	declare module.exports: typeof ReactSwipe

    }
