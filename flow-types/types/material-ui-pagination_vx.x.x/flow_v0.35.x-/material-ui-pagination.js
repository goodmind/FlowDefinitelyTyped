declare module 'material-ui-pagination' {
        import typeof * as React from 'react';

	declare export interface PaginationProps {
total: number,
display: number,
current: number,
onChange(value: number): void
} 
	declare class Pagination mixins React.Component<PaginationProps, {}> {}
	declare export default typeof Pagination

    }
