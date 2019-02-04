declare module 'react-show-more' {
        import typeof * as React from 'react';

	declare export interface ReactShowMoreProps {
lines?: number,
more?: string,
less?: string,
children?: string,
anchorClass?: string
} 
	declare var ShowMore: React.ClassicComponentClass<ReactShowMoreProps>;
	declare export default typeof ShowMore

    }
