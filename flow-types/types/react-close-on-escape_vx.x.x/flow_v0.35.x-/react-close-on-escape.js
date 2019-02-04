declare module 'react-close-on-escape' {
        import typeof * as React from 'react';

	declare export interface CloseOnEscapeProps {

/**
 * Callback triggered by pressing ESC
 */
onEscape(): void
} 
	declare export default class CloseOnEscape mixins React.Component<CloseOnEscapeProps> {}
    }
