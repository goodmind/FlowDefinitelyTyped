declare module 'react-animate-on-scroll' {
        import typeof * as React from 'react';

	declare export interface ScrollAnimationProps {
animateIn?: string,
animateOut?: string,
offset?: number,
duration?: number,
delay?: number,
initiallyVisible?: boolean,
animateOnce?: boolean,
style?: {[key: string]: any},
scrollableParentSelector?: string,
className?: string
} 
	declare export default class ScrollAnimation mixins React.Component<ScrollAnimationProps> {
constructor(props: ScrollAnimationProps): this
}
    }
