declare module 'makeup-expander' {
        declare interface Expander$Options {
autoCollapse?: boolean,
collapseOnClickOut?: boolean,
collapseOnFocusOut?: boolean,
collapseOnMouseOut?: boolean,
contentSelector?: string,
expandOnClick?: boolean,
expandOnFocus?: boolean,
expandOnHover?: boolean,
focusManagement?: string | null,
hostSelector?: string
} 
	declare class Expander  {
constructor(el: HTMLElement, selectedOptions?: Expander$Expander$Options): this;
collapseOnClickOut: boolean;
collapseOnFocusOut: boolean;
collapseOnMouseOut: boolean;
expandOnClick: boolean;
expandOnFocus: boolean;
expandOnHover: boolean;
collapse(): void;
expand(isKeyboard: boolean): void;
isExpanded(): boolean;
toggle(): void
}
	declare module.exports: typeof Expander

    }
