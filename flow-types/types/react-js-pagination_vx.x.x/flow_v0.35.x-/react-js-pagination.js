declare module 'react-js-pagination' {
        import typeof * as React from 'react';

	declare export interface ReactJsPaginationProps {
totalItemsCount: number,
onChange: (pageNumber: number) => void,
activePage: number,
itemsCountPerPage?: number,
pageRangeDisplayed?: number,
prevPageText?: string | React.ReactElement<any>,
nextPageText?: string | React.ReactElement<any>,
lastPageText?: string | React.ReactElement<any>,
firstPageText?: string | React.ReactElement<any>,
disabledClass?: string,
hideDisabled?: boolean,
hideNavigation?: boolean,
innerClass?: string,
itemClass?: string,
itemClassFirst?: string,
itemClassPrev?: string,
itemClassNext?: string,
itemClassLast?: string,
linkClass?: string,
activeClass?: string,
activeLinkClass?: string,
linkClassFirst?: string,
linkClassPrev?: string,
linkClassNext?: string,
linkClassLast?: string,
hideFirstLastPages?: boolean,
getPageUrl(): string
} 
	declare var Pagination: React.ClassicComponentClass<ReactJsPaginationProps>;
	declare export default typeof Pagination

    }
