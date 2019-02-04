declare module 'mjml-react' {
        import typeof * as React from 'react';

	declare class extensions$MjmlComment mixins React.Component<{
children: string
}> {}

declare class extensions$MjmlConditionalComment mixins React.Component<{
children: string,
condition: string
}> {}

declare class extensions$MjmlTrackingPixel mixins React.Component<{
src: string
}> {}

declare class extensions$MjmlYahooStyle mixins React.Component<{
children: string
}> {}
	
      declare var npm$namespace$utils: {
        namedEntityToHexCode: typeof utils$namedEntityToHexCode,
fixConditionalComment: typeof utils$fixConditionalComment,
useHttps: typeof utils$useHttps,
toMobileFontSize: typeof utils$toMobileFontSize,
addQueryParams: typeof utils$addQueryParams,
getTextAlign: typeof utils$getTextAlign,
        
      }
declare function utils$namedEntityToHexCode(html: string): string


declare function utils$fixConditionalComment(html: string, havingContent: string, newCondition: string): string


declare function utils$useHttps(url?: string): string | void


declare function utils$toMobileFontSize(sizeWithUnit: string): number


declare function utils$addQueryParams(url: string, params: {
[key: string]: any
}): string


declare type utils$TextAlignment = "left"
| "right"
| "center"
| "justify"
| "inherit";

declare function utils$getTextAlign(value: string, fallback?: utils$TextAlignment): utils$TextAlignment

	declare export function renderToMjml(email: React.ReactElement<any>): string

	declare export interface Mjml2HtmlOptions {
fonts?: {
[key: string]: string
},
keepComments?: boolean,
beautify?: boolean,
minify?: boolean,
validationLevel?: "strict" | "soft" | "skip",
filePath?: string
} 
	declare export function render(
email: React.ReactElement<any>,
options?: Mjml2HtmlOptions): {
html: string,
errors: Error[]
}

	declare export interface RequiredChildrenProps {
children: React.ReactNode
} 
	declare export interface PaddingProps {
padding?: string | number,
paddingTop?: string | number,
paddingRight?: string | number,
paddingBottom?: string | number,
paddingLeft?: string | number
} 
	declare export interface BorderProps {
border?: string,
borderBottom?: string,
borderLeft?: string,
borderTop?: string,
borderRight?: string,
borderRadius?: string | number
} 
	declare export interface ClassNameProps {
cssClass?: string
} 
	declare export interface HrefProps {
href?: string,
target?: string,
rel?: string
} 
	declare export interface MjmlProps {
lang?: string,
owa?: string
} 
	declare export class Mjml mixins React.Component<MjmlProps & RequiredChildrenProps> {}
	declare export class MjmlHead mixins React.Component<RequiredChildrenProps> {}
	declare export class MjmlAttributes mixins React.Component<RequiredChildrenProps> {}
	declare export class MjmlAll mixins React.Component<{
[key: string]: any,
children?: React.ReactNode
}> {}
	declare export class MjmlClass mixins React.Component<{
[key: string]: any,
children?: React.ReactNode,
name: string
}> {}
	declare export interface MjmlBreakpointProps {
width?: string | number
} 
	declare export class MjmlBreakpoint mixins React.Component<MjmlBreakpointProps> {}
	declare export interface MjmlBodyProps {
width?: number,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlBody mixins React.Component<RequiredChildrenProps & MjmlBodyProps & ClassNameProps> {}
	declare export interface MjmlFontProps {
href?: string,
name?: string
} 
	declare export class MjmlFont mixins React.Component<MjmlFontProps> {}
	declare export class MjmlPreview mixins React.Component<{
children: string
}> {}
	declare export class MjmlStyle mixins React.Component<{
children: string,
inline?: boolean
}> {}
	declare export class MjmlTitle mixins React.Component<{
children: string
}> {}
	declare export class MjmlAccordion mixins React.Component<RequiredChildrenProps & MjmlAccordionElementProps> {}
	declare export interface MjmlAccordionElementProps {
fontFamily?: string,
iconAlign?: string,
iconWrappedUrl?: string,
iconWrappedAlt?: string,
iconUnwrappedAlt?: string,
iconUnwrappedUrl?: string,
iconPosition?: "left" | "right",
iconHeight?: string,
iconWidth?: string,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlAccordionElement mixins React.Component<RequiredChildrenProps & MjmlAccordionElementProps & ClassNameProps> {}
	declare export interface MjmlAccordionTextProps {
color?: $ElementType<React.CSSProperties, "color">,
fontFamily?: string,
fontSize?: string | number,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlAccordionText mixins React.Component<RequiredChildrenProps & MjmlAccordionTextProps & PaddingProps & ClassNameProps> {}
	declare export interface MjmlAccordionTitleProps {
color?: $ElementType<React.CSSProperties, "color">,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
fontFamily?: string,
fontSize?: string | number
} 
	declare export class MjmlAccordionTitle mixins React.Component<RequiredChildrenProps & MjmlAccordionTitleProps & PaddingProps & ClassNameProps> {}
	declare export interface MjmlButtonProps {
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
fontStyle?: string,
fontSize?: string | number,
fontWeight?: number,
fontFamily?: string,
color?: $ElementType<React.CSSProperties, "color">,
textAlign?: $ElementType<React.CSSProperties, "textAlign">,
textDecoration?: string,
textTransform?: string,
align?: string,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
lineHeight?: string | number,
innerPadding?: string,
width?: string | number,
height?: string | number
} 
	declare export class MjmlButton mixins React.Component<RequiredChildrenProps & MjmlButtonProps & PaddingProps & ClassNameProps & HrefProps & BorderProps> {}
	declare export interface MjmlCarouselProps {
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
align?: string,
borderRadius?: string | number,
thumbnails?: "hidden" | "visible",
tbBorder?: $ElementType<React.CSSProperties, "border">,
tbBorderRadius?: $ElementType<React.CSSProperties, "borderRadius">,
tbHoverBorderColor?: string,
tbSelectedBorderColor?: string,
tbWidth?: string,
leftIcon?: string,
rightIcon?: string,
iconWidth?: string
} 
	declare export class MjmlCarousel mixins React.Component<RequiredChildrenProps & MjmlCarouselProps & ClassNameProps> {}
	declare export interface MjmlCarouselImageProps {
src?: string,
thumbnailsSrc?: string,
alt?: string,
title?: string
} 
	declare export class MjmlCarouselImage mixins React.Component<MjmlCarouselImageProps & ClassNameProps & HrefProps> {}
	declare export interface MjmlColumnProps {
width?: string | number,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlColumn mixins React.Component<RequiredChildrenProps & MjmlColumnProps & PaddingProps & ClassNameProps & BorderProps> {}
	declare export interface MjmlDividerProps {
borderColor?: $ElementType<React.CSSProperties, "borderColor">,
borderStyle?: $ElementType<React.CSSProperties, "borderStyle">,
borderWidth?: string | number,
width?: string | number,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlDivider mixins React.Component<MjmlDividerProps & ClassNameProps & PaddingProps> {}
	declare export interface MjmlGroupProps {
width?: string | number,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlGroup mixins React.Component<MjmlGroupProps & RequiredChildrenProps & ClassNameProps> {}
	declare export interface MjmlHeroProps {
width?: string | number,
height?: string | number,
mode?: "fluid-height" | "fixed-height",
backgroundWidth?: string,
backgroundHeight?: string,
backgroundUrl?: string,
backgroundPosition?: $ElementType<React.CSSProperties, "backgroundPosition">,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlHero mixins React.Component<MjmlHeroProps & ClassNameProps & PaddingProps> {}
	declare export interface MjmlImageProps {
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
border?: $ElementType<React.CSSProperties, "border">,
borderRadius?: string | number,
width?: string | number,
height?: string | number,
src?: string,
srcset?: string,
alt?: string,
align?: string,
title?: string,
fluidOnMobile?: string
} 
	declare export class MjmlImage mixins React.Component<MjmlImageProps & PaddingProps & ClassNameProps & HrefProps> {}
	declare export interface MjmlNavbarProps {
baseUrl?: string,
hamburger?: "hamburger",
align?: string,
icoOpen?: string,
icoClose?: string,
icoPadding?: string,
icoPaddingTop?: string,
icoPaddingRight?: string,
icoPaddingBottom?: string,
icoPaddingLeft?: string,
icoAlign?: string,
icoColor?: $ElementType<React.CSSProperties, "color">,
icoFontSize?: string,
icoTextTransform?: string,
icoTextDecoration?: string,
icoLineHeight?: string
} 
	declare export class MjmlNavbar mixins React.Component<MjmlNavbarProps & RequiredChildrenProps> {}
	declare export interface MjmlNavbarLinkProps {
color?: $ElementType<React.CSSProperties, "color">,
fontFamily?: string,
fontSize?: string | number,
fontStyle?: string,
fontWeight?: number,
lineHeight?: string | number,
textDecoration?: string,
textTransform?: string
} 
	declare export class MjmlNavbarLink mixins React.Component<MjmlNavbarLinkProps & HrefProps & PaddingProps> {}
	declare export class MjmlRaw mixins React.Component<RequiredChildrenProps> {}
	declare export interface MjmlSectionProps {
fullWidth?: boolean,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
backgroundUrl?: string,
backgroundRepeat?: $ElementType<React.CSSProperties, "backgroundRepeat">,
backgroundSize?: $ElementType<React.CSSProperties, "backgroundSize">,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
textAlign?: $ElementType<React.CSSProperties, "textAlign">,
direction?: "ltr" | "rtl"
} 
	declare export class MjmlSection mixins React.Component<MjmlSectionProps & RequiredChildrenProps & BorderProps & PaddingProps & ClassNameProps> {}
	declare export interface MjmlSocialProps {
borderRadius?: string | number,
fontFamily?: string,
fontSize?: string | number,
iconSize?: string,
iconHeight?: string,
lineHeight?: string | number,
mode?: "vertical" | "horizontal",
textDecoration?: string,
align?: string,
color?: $ElementType<React.CSSProperties, "color">,
innerPadding?: string,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlSocial mixins React.Component<MjmlSocialProps & PaddingProps> {}
	declare export interface MjmlSocialElementProps {
borderRadius?: string | number,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
fontFamily?: string,
fontSize?: string | number,
iconSize?: string,
iconHeight?: string,
lineHeight?: string | number,
mode?: "vertical" | "horizontal",
textDecoration?: string,
align?: string,
color?: $ElementType<React.CSSProperties, "color">,
name?: "facebook"
| "facebook-noshare"
| "twitter"
| "twitter-noshare"
| "google"
| "google-noshare"
| "pinterest"
| "pinterest-noshare"
| "linkedin"
| "linkedin-noshare"
| "tumblr"
| "tumblr-noshare"
| "xing"
| "xing-noshare"
| "github"
| "instagram"
| "web"
| "snapchat"
| "youtube"
| "vimeo"
| "medium"
| "soundcloud"
| "dribbble",
src?: string,
alt?: string
} 
	declare export class MjmlSocialElement mixins React.Component<MjmlSocialElementProps & RequiredChildrenProps & HrefProps & PaddingProps> {}
	declare export interface MjmlSpacerProps {
height?: string | number,
width?: string | number,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">
} 
	declare export class MjmlSpacer mixins React.Component<MjmlSpacerProps & BorderProps & PaddingProps & ClassNameProps> {}
	declare export interface MjmlTableProps {
color?: $ElementType<React.CSSProperties, "color">,
cellpadding?: string,
cellspacing?: string,
fontFamily?: string,
fontSize?: string | number,
fontStyle?: string,
lineHeight?: string | number,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
width?: string | number,
tableLayout?: "auto" | "fixed" | "initial" | "inherit"
} 
	declare export class MjmlTable mixins React.Component<MjmlTableProps & RequiredChildrenProps & PaddingProps> {}
	declare export interface MjmlTextProps {
color?: $ElementType<React.CSSProperties, "color">,
fontFamily?: string,
fontSize?: string | number,
fontStyle?: string,
fontWeight?: number,
lineHeight?: string,
letterSpacing?: string,
height?: string | number,
textDecoration?: string,
textTransform?: string,
align?: string,
containerBackgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">
} 
	declare export class MjmlText mixins React.Component<MjmlTextProps & RequiredChildrenProps & PaddingProps & ClassNameProps> {}
	declare export interface MjmlWrapperProps {
fullWidth?: boolean,
backgroundColor?: $ElementType<React.CSSProperties, "backgroundColor">,
backgroundUrl?: string,
backgroundRepeat?: $ElementType<React.CSSProperties, "backgroundRepeat">,
backgroundSize?: $ElementType<React.CSSProperties, "backgroundSize">,
verticalAlign?: $ElementType<React.CSSProperties, "verticalAlign">,
textAlign?: $ElementType<React.CSSProperties, "textAlign">
} 
	declare export class MjmlWrapper mixins React.Component<MjmlWrapperProps & RequiredChildrenProps & BorderProps & PaddingProps & ClassNameProps> {}
    }
