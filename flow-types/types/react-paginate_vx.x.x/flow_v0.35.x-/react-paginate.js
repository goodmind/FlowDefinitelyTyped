declare module 'react-paginate' {
        import typeof * as React from 'react';

	declare interface ReactPaginateProps {

/**
 * The total number of pages.
 */
pageCount: number,

/**
 * The range of pages displayed.
 */
pageRangeDisplayed: number,

/**
 * The number of pages to display for margins.
 */
marginPagesDisplayed: number,

/**
 * Label for the `previous` button.
 */
previousLabel?: React.ReactNode,

/**
 * Label for the `next` button.
 */
nextLabel?: React.ReactNode,

/**
 * Label for ellipsis.
 */
breakLabel?: string | React.ReactNode,

/**
 * The classname on tag `li` of the ellipsis element.
 */
breakClassName?: string,

/**
 * The classname on tag `a` of the ellipsis element.
 */
breakLinkClassName?: string,

/**
 * The method to call when a page is clicked. Exposes the current page object as an argument.
 */
onPageChange(selectedItem: {
selected: number
}): void,

/**
 * The initial page selected.
 */
initialPage?: number,

/**
 * To override selected page with parent prop.
 */
forcePage?: number,

/**
 * Disable onPageChange callback with initial page. Default: false
 */
disableInitialCallback?: boolean,

/**
 * The classname of the pagination container.
 */
containerClassName?: string,

/**
 * The classname on tag `li` of each page element.
 */
pageClassName?: string,

/**
 * The classname on tag `a` of each page element.
 */
pageLinkClassName?: string,

/**
 * The classname for the active page.
 */
activeClassName?: string,

/**
 * The classname for the active link.
 */
activeLinkClassName?: string,

/**
 * The classname on tag `li` of the `previous` button.
 */
previousClassName?: string,

/**
 * The classname on tag `li` of the `next` button.
 */
nextClassName?: string,

/**
 * The classname on tag `a` of the `previous` button.
 */
previousLinkClassName?: string,

/**
 * The classname on tag `a` of the `next` button.
 */
nextLinkClassName?: string,

/**
 * The classname for disabled `previous` and `next` buttons.
 */
disabledClassName?: string,

/**
 * The method is called to generate the href attribute value on tag a of each page element.
 */
hrefBuilder(pageIndex: number): void,

/**
 * Extra context to add to the aria-label HTML attribute.
 */
extraAriaContext?: string
} 
	declare var ReactPaginate: React.ComponentClass<ReactPaginateProps>;
	declare export default typeof ReactPaginate

    }
