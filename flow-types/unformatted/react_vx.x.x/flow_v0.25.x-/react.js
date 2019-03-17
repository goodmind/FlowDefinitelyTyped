declare module 'global' {
        declare type JSX$Element = {} & React$ReactElement<any, any>


declare type JSX$ElementClass = {
render(): React$Node
} & React$Component<any>


declare interface JSX$ElementAttributesProperty {
props: {}
} 

declare interface JSX$ElementChildrenAttribute {
children: {}
} 

declare type JSX$LibraryManagedAttributes<C, P> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type JSX$IntrinsicAttributes = {} & React$Attributes


declare type JSX$IntrinsicClassAttributes<T> = {} & React$ClassAttributes<T>


declare interface JSX$IntrinsicElements {
a: React$DetailedHTMLProps<React$AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
abbr: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
address: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
area: React$DetailedHTMLProps<React$AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>,
article: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
aside: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
audio: React$DetailedHTMLProps<React$AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>,
b: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
base: React$DetailedHTMLProps<React$BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>,
bdi: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
bdo: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
big: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
blockquote: React$DetailedHTMLProps<React$BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>,
body: React$DetailedHTMLProps<React$HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>,
br: React$DetailedHTMLProps<React$HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
button: React$DetailedHTMLProps<React$ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
canvas: React$DetailedHTMLProps<React$CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>,
caption: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
cite: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
code: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
col: React$DetailedHTMLProps<React$ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
colgroup: React$DetailedHTMLProps<React$ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
data: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
datalist: React$DetailedHTMLProps<React$HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>,
dd: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
del: React$DetailedHTMLProps<React$DelHTMLAttributes<HTMLElement>, HTMLElement>,
details: React$DetailedHTMLProps<React$DetailsHTMLAttributes<HTMLElement>, HTMLElement>,
dfn: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
dialog: React$DetailedHTMLProps<React$DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>,
div: React$DetailedHTMLProps<React$HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
dl: React$DetailedHTMLProps<React$HTMLAttributes<HTMLDListElement>, HTMLDListElement>,
dt: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
em: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
embed: React$DetailedHTMLProps<React$EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>,
fieldset: React$DetailedHTMLProps<React$FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>,
figcaption: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
figure: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
footer: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
form: React$DetailedHTMLProps<React$FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
h1: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h2: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h3: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h4: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h5: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h6: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
head: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>,
header: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
hgroup: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
hr: React$DetailedHTMLProps<React$HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
html: React$DetailedHTMLProps<React$HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>,
i: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
iframe: React$DetailedHTMLProps<React$IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
img: React$DetailedHTMLProps<React$ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
input: React$DetailedHTMLProps<React$InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
ins: React$DetailedHTMLProps<React$InsHTMLAttributes<HTMLModElement>, HTMLModElement>,
kbd: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
keygen: React$DetailedHTMLProps<React$KeygenHTMLAttributes<HTMLElement>, HTMLElement>,
label: React$DetailedHTMLProps<React$LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
legend: React$DetailedHTMLProps<React$HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>,
li: React$DetailedHTMLProps<React$LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
link: React$DetailedHTMLProps<React$LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
main: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
map: React$DetailedHTMLProps<React$MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>,
mark: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
menu: React$DetailedHTMLProps<React$MenuHTMLAttributes<HTMLElement>, HTMLElement>,
menuitem: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
meta: React$DetailedHTMLProps<React$MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>,
meter: React$DetailedHTMLProps<React$MeterHTMLAttributes<HTMLElement>, HTMLElement>,
nav: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
noindex: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
noscript: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
object: React$DetailedHTMLProps<React$ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>,
ol: React$DetailedHTMLProps<React$OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
optgroup: React$DetailedHTMLProps<React$OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>,
option: React$DetailedHTMLProps<React$OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
output: React$DetailedHTMLProps<React$OutputHTMLAttributes<HTMLElement>, HTMLElement>,
p: React$DetailedHTMLProps<React$HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
param: React$DetailedHTMLProps<React$ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>,
picture: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
pre: React$DetailedHTMLProps<React$HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
progress: React$DetailedHTMLProps<React$ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>,
q: React$DetailedHTMLProps<React$QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
rp: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
rt: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
ruby: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
s: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
samp: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
script: React$DetailedHTMLProps<React$ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>,
section: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
select: React$DetailedHTMLProps<React$SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
small: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
source: React$DetailedHTMLProps<React$SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>,
span: React$DetailedHTMLProps<React$HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
strong: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
style: React$DetailedHTMLProps<React$StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>,
sub: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
summary: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
sup: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
table: React$DetailedHTMLProps<React$TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
tbody: React$DetailedHTMLProps<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
td: React$DetailedHTMLProps<React$TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
textarea: React$DetailedHTMLProps<React$TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
tfoot: React$DetailedHTMLProps<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
th: React$DetailedHTMLProps<React$ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>,
thead: React$DetailedHTMLProps<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
time: React$DetailedHTMLProps<React$TimeHTMLAttributes<HTMLElement>, HTMLElement>,
title: React$DetailedHTMLProps<React$HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>,
tr: React$DetailedHTMLProps<React$HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>,
track: React$DetailedHTMLProps<React$TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>,
u: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
ul: React$DetailedHTMLProps<React$HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
"var": React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
video: React$DetailedHTMLProps<React$VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
wbr: React$DetailedHTMLProps<React$HTMLAttributes<HTMLElement>, HTMLElement>,
webview: React$DetailedHTMLProps<React$WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>,
svg: React$SVGProps<SVGSVGElement>,
animate: React$SVGProps<SVGElement>,
animateMotion: React$SVGProps<SVGElement>,
animateTransform: React$SVGProps<SVGElement>,
circle: React$SVGProps<SVGCircleElement>,
clipPath: React$SVGProps<SVGClipPathElement>,
defs: React$SVGProps<SVGDefsElement>,
desc: React$SVGProps<SVGDescElement>,
ellipse: React$SVGProps<SVGEllipseElement>,
feBlend: React$SVGProps<SVGFEBlendElement>,
feColorMatrix: React$SVGProps<SVGFEColorMatrixElement>,
feComponentTransfer: React$SVGProps<SVGFEComponentTransferElement>,
feComposite: React$SVGProps<SVGFECompositeElement>,
feConvolveMatrix: React$SVGProps<SVGFEConvolveMatrixElement>,
feDiffuseLighting: React$SVGProps<SVGFEDiffuseLightingElement>,
feDisplacementMap: React$SVGProps<SVGFEDisplacementMapElement>,
feDistantLight: React$SVGProps<SVGFEDistantLightElement>,
feFlood: React$SVGProps<SVGFEFloodElement>,
feFuncA: React$SVGProps<SVGFEFuncAElement>,
feFuncB: React$SVGProps<SVGFEFuncBElement>,
feFuncG: React$SVGProps<SVGFEFuncGElement>,
feFuncR: React$SVGProps<SVGFEFuncRElement>,
feGaussianBlur: React$SVGProps<SVGFEGaussianBlurElement>,
feImage: React$SVGProps<SVGFEImageElement>,
feMerge: React$SVGProps<SVGFEMergeElement>,
feMergeNode: React$SVGProps<SVGFEMergeNodeElement>,
feMorphology: React$SVGProps<SVGFEMorphologyElement>,
feOffset: React$SVGProps<SVGFEOffsetElement>,
fePointLight: React$SVGProps<SVGFEPointLightElement>,
feSpecularLighting: React$SVGProps<SVGFESpecularLightingElement>,
feSpotLight: React$SVGProps<SVGFESpotLightElement>,
feTile: React$SVGProps<SVGFETileElement>,
feTurbulence: React$SVGProps<SVGFETurbulenceElement>,
filter: React$SVGProps<SVGFilterElement>,
foreignObject: React$SVGProps<SVGForeignObjectElement>,
g: React$SVGProps<SVGGElement>,
image: React$SVGProps<SVGImageElement>,
line: React$SVGProps<SVGLineElement>,
linearGradient: React$SVGProps<SVGLinearGradientElement>,
marker: React$SVGProps<SVGMarkerElement>,
mask: React$SVGProps<SVGMaskElement>,
metadata: React$SVGProps<SVGMetadataElement>,
mpath: React$SVGProps<SVGElement>,
path: React$SVGProps<SVGPathElement>,
pattern: React$SVGProps<SVGPatternElement>,
polygon: React$SVGProps<SVGPolygonElement>,
polyline: React$SVGProps<SVGPolylineElement>,
radialGradient: React$SVGProps<SVGRadialGradientElement>,
rect: React$SVGProps<SVGRectElement>,
stop: React$SVGProps<SVGStopElement>,
switch: React$SVGProps<SVGSwitchElement>,
symbol: React$SVGProps<SVGSymbolElement>,
text: React$SVGProps<SVGTextElement>,
textPath: React$SVGProps<SVGTextPathElement>,
tspan: React$SVGProps<SVGTSpanElement>,
use: React$SVGProps<SVGUseElement>,
view: React$SVGProps<SVGViewElement>
} 
    }
declare module 'react' {
        import typeof * as CSS from 'csstype';

	import typeof * as PropTypes from 'prop-types';

	declare type NativeAnimationEvent = React$AnimationEvent;
	declare type NativeClipboardEvent = React$ClipboardEvent;
	declare type NativeCompositionEvent = React$CompositionEvent;
	declare type NativeDragEvent = React$DragEvent;
	declare type NativeFocusEvent = React$FocusEvent;
	declare type NativeKeyboardEvent = React$KeyboardEvent;
	declare type NativeMouseEvent = React$MouseEvent;
	declare type NativeTouchEvent = React$TouchEvent;
	declare type NativePointerEvent = React$PointerEvent;
	declare type NativeTransitionEvent = React$TransitionEvent;
	declare type NativeUIEvent = React$UIEvent;
	declare type NativeWheelEvent = React$WheelEvent;
	declare export default typeof React

	declare var React: typeof npm$namespace$React;

      declare var npm$namespace$React: {
        createFactory: typeof React$createFactory,
createElement: typeof React$createElement,
cloneElement: typeof React$cloneElement,
createContext: typeof React$createContext,
isValidElement: typeof React$isValidElement,
createRef: typeof React$createRef,
forwardRef: typeof React$forwardRef,
memo: typeof React$memo,
lazy: typeof React$lazy,
useContext: typeof React$useContext,
useState: typeof React$useState,
useReducer: typeof React$useReducer,
useRef: typeof React$useRef,
useLayoutEffect: typeof React$useLayoutEffect,
useEffect: typeof React$useEffect,
useImperativeHandle: typeof React$useImperativeHandle,
useCallback: typeof React$useCallback,
useMemo: typeof React$useMemo,
useDebugValue: typeof React$useDebugValue,
        Children: typeof React$Children,
Fragment: typeof React$Fragment,
StrictMode: typeof React$StrictMode,
Suspense: typeof React$Suspense,
version: typeof React$version,
        
        Component: typeof React$Component,
PureComponent: typeof React$PureComponent,
        
      }
declare type React$ElementType<P= any> = $ElementType<$ObjMapi<JSX$IntrinsicElements, <K>(K) => /* Flow doesn't support conditional types, use $Call utility type */ any>, $Keys<JSX$IntrinsicElements>> | React$ComponentType<P>;


/**
 * @deprecated Please use `ElementType`
 */
declare type React$ReactType<P= any> = React$ElementType<P>;

declare type React$ComponentType<P= {}> = React$ComponentClass<P> | React$FunctionComponent<P>;

declare type React$JSXElementConstructor<P> = ((props: P) => React$ReactElement<> | null) | ((props: P) => React$Component<P, any>);

declare type React$Key = string | number;

declare interface React$RefObject<T> {
+current: T | null
} 

declare type React$Ref<T> = $PropertyType<{
bivarianceHack(instance: T | null): void
}, "bivarianceHack"> | React$RefObject<T> | null;

declare type React$LegacyRef<T> = string | React$Ref<T>;

declare type React$ComponentState = any;

declare interface React$Attributes {
key?: React$Key
} 

declare type React$RefAttributes<T> = {
ref?: React$Ref<T>
} & React$Attributes


declare type React$ClassAttributes<T> = {
ref?: React$LegacyRef<T>
} & React$Attributes


declare interface React$ReactElement<P= any, T: string | React$JSXElementConstructor<any>= string | React$JSXElementConstructor<any>> {
type: T,
props: P,
key: React$Key | null
} 

declare type React$ReactComponentElement<T: $Keys<JSX$IntrinsicElements> | React$JSXElementConstructor<any>, P= Pick<React$ComponentProps<T>, Exclude<$Keys<React$ComponentProps<T>>, "key" | "ref">>> = {} & React$ReactElement<P, T>



/**
 * @deprecated Please use `FunctionComponentElement`
 */
declare type React$SFCElement<P> = React$FunctionComponentElement<P>;

declare type React$FunctionComponentElement<P> = {
ref?: /* Flow doesn't support conditional types, use $Call utility type */ any
} & React$ReactElement<P, React$FunctionComponent<P>>


declare type React$CElement<P, T: React$Component<P, React$ComponentState>> = React$ComponentElement<P, T>;

declare type React$ComponentElement<P, T: React$Component<P, React$ComponentState>> = {
ref?: React$LegacyRef<T>
} & React$ReactElement<P, React$ComponentClass<P>>


declare type React$ClassicElement<P> = React$CElement<P, React$ClassicComponent<P, React$ComponentState>>;

declare type React$DOMElement<P: React$HTMLAttributes<T> | React$SVGAttributes<T>, T: JSX$Element> = {
ref: React$LegacyRef<T>
} & React$ReactElement<P, string>


declare type React$ReactHTMLElement<T: HTMLElement> = {} & React$DetailedReactHTMLElement<React$AllHTMLAttributes<T>, T>


declare type React$DetailedReactHTMLElement<P: React$HTMLAttributes<T>, T: HTMLElement> = {
type: $Keys<React$ReactHTML>
} & React$DOMElement<P, T>


declare type React$ReactSVGElement = {
type: $Keys<React$ReactSVG>
} & React$DOMElement<React$SVGAttributes<SVGElement>, SVGElement>


declare type React$ReactPortal = {
key: React$Key | null,
children: Node
} & React$ReactElement<>


declare type React$Factory<P> = (props?: React$Attributes & P, ...children: Node[]) => React$ReactElement<P>;


/**
 * @deprecated Please use `FunctionComponentFactory`
 */
declare type React$SFCFactory<P> = React$FunctionComponentFactory<P>;

declare type React$FunctionComponentFactory<P> = (
props?: React$Attributes & P,
...children: Node[]) => React$FunctionComponentElement<P>;

declare type React$ComponentFactory<P, T: React$Component<P, React$ComponentState>> = (
props?: React$ClassAttributes<T> & P,
...children: Node[]) => React$CElement<P, T>;

declare type React$CFactory<P, T: React$Component<P, React$ComponentState>> = React$ComponentFactory<P, T>;

declare type React$ClassicFactory<P> = React$CFactory<P, React$ClassicComponent<P, React$ComponentState>>;

declare type React$DOMFactory<P: React$DOMAttributes<T>, T: JSX$Element> = (
props?: React$ClassAttributes<T> & P | null,
...children: Node[]) => React$DOMElement<P, T>;

declare type React$HTMLFactory<T: HTMLElement> = {} & React$DetailedHTMLFactory<React$AllHTMLAttributes<T>, T>


declare type React$DetailedHTMLFactory<P: React$HTMLAttributes<T>, T: HTMLElement> = {
(props?: React$ClassAttributes<T> & P | null, ...children: Node[]): React$DetailedReactHTMLElement<P, T>
} & React$DOMFactory<P, T>


declare type React$SVGFactory = {
(props?: React$ClassAttributes<SVGElement> & React$SVGAttributes<SVGElement> | null, ...children: Node[]): React$ReactSVGElement
} & React$DOMFactory<React$SVGAttributes<SVGElement>, SVGElement>


declare type React$ReactText = string | number;

declare type React$ReactChild = React$ReactElement<> | React$ReactText;

declare type React$ReactNodeArray = {} & Array<Node>


declare type React$ReactFragment = {} | React$ReactNodeArray;

declare type React$ReactNode = React$ReactChild
| React$ReactFragment
| React$ReactPortal
| boolean
| null
| void;

declare function React$createFactory<T: HTMLElement>(type: $Keys<React$ReactHTML>): React$HTMLFactory<T>


declare function React$createFactory(type: $Keys<React$ReactSVG>): React$SVGFactory


declare function React$createFactory<P: React$DOMAttributes<T>, T: JSX$Element>(
type: string): React$DOMFactory<P, T>


declare function React$createFactory<P>(type: React$FunctionComponent<P>): React$FunctionComponentFactory<P>


declare function React$createFactory<P>(
type: React$ClassType<P, React$ClassicComponent<P, React$ComponentState>, React$ClassicComponentClass<P>>): React$CFactory<P, React$ClassicComponent<P, React$ComponentState>>


declare function React$createFactory<P, T: React$Component<P, React$ComponentState>, C: React$ComponentClass<P>>(
type: React$ClassType<P, T, C>): React$CFactory<P, T>


declare function React$createFactory<P>(type: React$ComponentClass<P>): React$Factory<P>


declare function React$createElement(
type: "input",
props?: React$InputHTMLAttributes<HTMLInputElement> & React$ClassAttributes<HTMLInputElement> | null,
...children: Node[]): React$DetailedReactHTMLElement<React$InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


declare function React$createElement<P: React$HTMLAttributes<T>, T: HTMLElement>(
type: $Keys<React$ReactHTML>,
props?: React$ClassAttributes<T> & P | null,
...children: Node[]): React$DetailedReactHTMLElement<P, T>


declare function React$createElement<P: React$SVGAttributes<T>, T: SVGElement>(
type: $Keys<React$ReactSVG>,
props?: React$ClassAttributes<T> & P | null,
...children: Node[]): React$ReactSVGElement


declare function React$createElement<P: React$DOMAttributes<T>, T: JSX$Element>(
type: string,
props?: React$ClassAttributes<T> & P | null,
...children: Node[]): React$DOMElement<P, T>


declare function React$createElement<P: {}>(
type: React$FunctionComponent<P>,
props?: React$Attributes & P | null,
...children: Node[]): React$FunctionComponentElement<P>


declare function React$createElement<P: {}>(
type: React$ClassType<P, React$ClassicComponent<P, React$ComponentState>, React$ClassicComponentClass<P>>,
props?: React$ClassAttributes<React$ClassicComponent<P, React$ComponentState>> & P | null,
...children: Node[]): React$CElement<P, React$ClassicComponent<P, React$ComponentState>>


declare function React$createElement<P: {}, T: React$Component<P, React$ComponentState>, C: React$ComponentClass<P>>(
type: React$ClassType<P, T, C>,
props?: React$ClassAttributes<T> & P | null,
...children: Node[]): React$CElement<P, T>


declare function React$createElement<P: {}>(
type: React$FunctionComponent<P> | React$ComponentClass<P> | string,
props?: React$Attributes & P | null,
...children: Node[]): React$ReactElement<P>


declare function React$cloneElement<P: React$HTMLAttributes<T>, T: HTMLElement>(
element: React$DetailedReactHTMLElement<P, T>,
props?: P,
...children: Node[]): React$DetailedReactHTMLElement<P, T>


declare function React$cloneElement<P: React$HTMLAttributes<T>, T: HTMLElement>(
element: React$ReactHTMLElement<T>,
props?: P,
...children: Node[]): React$ReactHTMLElement<T>


declare function React$cloneElement<P: React$SVGAttributes<T>, T: SVGElement>(
element: React$ReactSVGElement,
props?: P,
...children: Node[]): React$ReactSVGElement


declare function React$cloneElement<P: React$DOMAttributes<T>, T: JSX$Element>(
element: React$DOMElement<P, T>,
props?: React$DOMAttributes<T> & P,
...children: Node[]): React$DOMElement<P, T>


declare function React$cloneElement<P>(
element: React$FunctionComponentElement<P>,
props?: $Shape<P> & React$Attributes,
...children: Node[]): React$FunctionComponentElement<P>


declare function React$cloneElement<P, T: React$Component<P, React$ComponentState>>(
element: React$CElement<P, T>,
props?: $Shape<P> & React$ClassAttributes<T>,
...children: Node[]): React$CElement<P, T>


declare function React$cloneElement<P>(
element: React$ReactElement<P>,
props?: $Shape<P> & React$Attributes,
...children: Node[]): React$ReactElement<P>


declare interface React$ProviderProps<T> {
value: T,
children?: Node
} 

declare interface React$ConsumerProps<T> {
children: (value: T) => Node,
unstable_observedBits?: number
} 

declare interface React$ExoticComponent<P= {}> {

/**
 * **NOTE**: Exotic components are not callable.
 */
(props: P): (React$ReactElement<> | null),
+$$typeof: Symbol
} 

declare type React$NamedExoticComponent<P= {}> = {
displayName?: string
} & React$ExoticComponent<P>


declare type React$ProviderExoticComponent<P> = {
propTypes?: React$WeakValidationMap<P>
} & React$ExoticComponent<P>


declare type React$ContextType<C: React$Context<any>> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$Provider<T> = React$ProviderExoticComponent<React$ProviderProps<T>>;

declare type React$Consumer<T> = React$ExoticComponent<React$ConsumerProps<T>>;

declare interface React$Context<T> {
Provider: React$Provider<T>,
Consumer: React$Consumer<T>,
displayName?: string
} 

declare function React$createContext<T>(
defaultValue: T,
calculateChangedBits?: (prev: T, next: T) => number): React$Context<T>


declare function React$isValidElement<P>(object: {} | null | void): boolean


declare var React$Children: React$ReactChildren;

declare var React$Fragment: React$ExoticComponent<{
children?: Node
}>;

declare var React$StrictMode: React$ExoticComponent<{
children?: Node
}>;

declare interface React$SuspenseProps {
children?: Node,

/**
 * A fallback react tree to show when a Suspense child (like React.lazy) suspends
 */
fallback: $NonMaybeType<Node> | null
} 


/**
 * This feature is not yet available for server-side rendering.
 * Suspense support will be added in a later release.
 */
declare var React$Suspense: React$ExoticComponent<React$SuspenseProps>;

declare var React$version: string;

declare type React$ReactInstance = React$Component<any> | JSX$Element;

declare class React$Component<P, S>  {

/**
 * If set, `this.context` will be set at runtime to the current value of the given Context.
 * 
 * Usage:
 * 
 * ```ts
 *          * type MyContext = number
 *          * const Ctx = React.createContext<MyContext>(0)
 *          *
 *          * class Foo extends React.Component {
 *          *   static contextType = Ctx
 *          *   context!: React.ContextType<typeof Ctx>
 *          *   render () {
 *          *     return <>My context's value: {this.context}</>;
 *          *   }
 *          * }
 *          * ```
 * @see https://reactjs.org/docs/context.html#classcontexttype
 */
static contextType: React$Context<any>;

/**
 * If using the new style context, re-declare this in your class to be the
 * `React.ContextType` of your `static contextType`.
 * 
 * ```ts
 *          * static contextType = MyContext
 *          * context!: React.ContextType<typeof MyContext>
 *          * ```
 * @deprecated if used without a type annotation, or without static contextType
 * @see https://reactjs.org/docs/legacy-context.html
 */
context: any;
constructor(props: $ReadOnly<P>): this;

/**
 * @deprecated
 * @see https://reactjs.org/docs/legacy-context.html
 */
constructor(props: P, context?: any): this;
setState<K: $Keys<S>>(
state: ((prevState: $ReadOnly<S>, props: $ReadOnly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
callback?: () => void): void;
forceUpdate(callBack?: () => void): void;
render(): Node;
props: $ReadOnly<P> & $ReadOnly<{
children?: Node
}>;
state: $ReadOnly<S>;

/**
 * @deprecated https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
 */
refs: {
[key: string]: React$ReactInstance
}
}

declare class React$PureComponent<P= {}, S= {}, SS= any> mixins React$Component<P, S, SS> {}

declare type React$ClassicComponent<P= {}, S= {}> = {
replaceState(nextState: S, callback?: () => void): void,
isMounted(): boolean,
getInitialState?: () => S
} & React$Component<P, S>


declare interface React$ChildContextProvider<CC> {
getChildContext(): CC
} 


/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
declare type React$SFC<P= {}> = React$FunctionComponent<P>;


/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
declare type React$StatelessComponent<P= {}> = React$FunctionComponent<P>;

declare type React$FC<P= {}> = React$FunctionComponent<P>;

declare interface React$FunctionComponent<P= {}> {
(props: React$PropsWithChildren<P>, context?: any): React$ReactElement<> | null,
propTypes?: React$WeakValidationMap<P>,
contextTypes?: React$ValidationMap<any>,
defaultProps?: $Shape<P>,
displayName?: string
} 

declare interface React$RefForwardingComponent<T, P= {}> {
(props: React$PropsWithChildren<P>, ref: React$Ref<T>): React$ReactElement<> | null,
propTypes?: React$WeakValidationMap<P>,
contextTypes?: React$ValidationMap<any>,
defaultProps?: $Shape<P>,
displayName?: string
} 

declare type React$ComponentClass<P= {}, S= React$ComponentState> = {
new (props: P, context?: any): React$Component<P, S>,
propTypes?: React$WeakValidationMap<P>,
contextType?: React$Context<any>,
contextTypes?: React$ValidationMap<any>,
childContextTypes?: React$ValidationMap<any>,
defaultProps?: $Shape<P>,
displayName?: string
} & React$StaticLifecycle<P, S>


declare type React$ClassicComponentClass<P= {}> = {
new (props: P, context?: any): React$ClassicComponent<P, React$ComponentState>,
getDefaultProps?: () => P
} & React$ComponentClass<P>



/**
 * We use an intersection type to infer multiple type parameters from
 * a single argument, which is useful for many top-level API defs.
 * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
 */
declare type React$ClassType<P, T: React$Component<P, React$ComponentState>, C: React$ComponentClass<P>> = C & ((props: P, context?: any) => T);

declare type React$ComponentLifecycle<P, S, SS= any> = {

/**
 * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
 */
componentDidMount?: () => void,

/**
 * Called to determine whether the change in props and state should trigger a re-render.
 * 
 * `Component` always returns true.
 * `PureComponent` implements a shallow comparison on props and state and returns true if any
 * props or states have changed.
 * 
 * If false is returned, `Component#render`, `componentWillUpdate`
 * and `componentDidUpdate` will not be called.
 */
shouldComponentUpdate?: (nextProps: $ReadOnly<P>, nextState: $ReadOnly<S>, nextContext: any) => boolean,

/**
 * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
 * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
 */
componentWillUnmount?: () => void,

/**
 * Catches exceptions generated in descendant components. Unhandled exceptions will cause
 * the entire component tree to unmount.
 */
componentDidCatch?: (error: Error, errorInfo: React$ErrorInfo) => void
} & React$NewLifecycle<P, S, SS> & React$DeprecatedLifecycle<P, S>


declare interface React$StaticLifecycle<P, S> {
getDerivedStateFromProps?: React$GetDerivedStateFromProps<P, S>,
getDerivedStateFromError?: React$GetDerivedStateFromError<P, S>
} 

declare type React$GetDerivedStateFromProps<P, S> = (nextProps: $ReadOnly<P>, prevState: S) => $Shape<S> | null;

declare type React$GetDerivedStateFromError<P, S> = (error: any) => $Shape<S> | null;

declare interface React$NewLifecycle<P, S, SS> {

/**
 * Runs before React applies the result of `render` to the document, and
 * returns an object to be given to componentDidUpdate. Useful for saving
 * things such as scroll position before `render` causes changes to it.
 * 
 * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
 * lifecycle events from running.
 */
getSnapshotBeforeUpdate?: (prevProps: $ReadOnly<P>, prevState: $ReadOnly<S>) => SS | null,

/**
 * Called immediately after updating occurs. Not called for the initial render.
 * 
 * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
 */
componentDidUpdate?: (prevProps: $ReadOnly<P>, prevState: $ReadOnly<S>, snapshot?: SS) => void
} 

declare interface React$DeprecatedLifecycle<P, S> {

/**
 * Called immediately before mounting occurs, and before `Component#render`.
 * Avoid introducing any side-effects or subscriptions in this method.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
componentWillMount?: () => void,

/**
 * Called immediately before mounting occurs, and before `Component#render`.
 * Avoid introducing any side-effects or subscriptions in this method.
 * 
 * This method will not stop working in React 17.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use componentDidMount or the constructor instead
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
UNSAFE_componentWillMount?: () => void,

/**
 * Called when the component may be receiving new props.
 * React may call this even if props have not changed, so be sure to compare new and existing
 * props if you only want to handle changes.
 * 
 * Calling `Component#setState` generally does not trigger this method.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
componentWillReceiveProps?: (nextProps: $ReadOnly<P>, nextContext: any) => void,

/**
 * Called when the component may be receiving new props.
 * React may call this even if props have not changed, so be sure to compare new and existing
 * props if you only want to handle changes.
 * 
 * Calling `Component#setState` generally does not trigger this method.
 * 
 * This method will not stop working in React 17.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use static getDerivedStateFromProps instead
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
UNSAFE_componentWillReceiveProps?: (nextProps: $ReadOnly<P>, nextContext: any) => void,

/**
 * Called immediately before rendering when new props or state is received. Not called for the initial render.
 * 
 * Note: You cannot call `Component#setState` here.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
componentWillUpdate?: (nextProps: $ReadOnly<P>, nextState: $ReadOnly<S>, nextContext: any) => void,

/**
 * Called immediately before rendering when new props or state is received. Not called for the initial render.
 * 
 * Note: You cannot call `Component#setState` here.
 * 
 * This method will not stop working in React 17.
 * 
 * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
 * prevents this from being invoked.
 * @deprecated 16.3, use getSnapshotBeforeUpdate instead
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
 */
UNSAFE_componentWillUpdate?: (nextProps: $ReadOnly<P>, nextState: $ReadOnly<S>, nextContext: any) => void
} 

declare type React$Mixin<P, S> = {
mixins?: Array<React$Mixin<P, S>>,
statics?: {
[key: string]: any
},
displayName?: string,
propTypes?: React$ValidationMap<any>,
contextTypes?: React$ValidationMap<any>,
childContextTypes?: React$ValidationMap<any>,
getDefaultProps?: () => P,
getInitialState?: () => S
} & React$ComponentLifecycle<P, S>


declare type React$ComponentSpec<P, S> = {
render(): Node,
[propertyName: string]: any
} & React$Mixin<P, S>


declare function React$createRef<T>(): React$RefObject<T>


declare type React$ForwardRefExoticComponent<P> = {
defaultProps?: $Shape<P>
} & React$NamedExoticComponent<P>


declare function React$forwardRef<T, P>(
Component: React$RefForwardingComponent<T, P>): React$ForwardRefExoticComponent<React$PropsWithoutRef<P> & React$RefAttributes<T>>



/**
 * Ensures that the props do not include ref at all
 */
declare type React$PropsWithoutRef<P> = /* Flow doesn't support conditional types, use $Call utility type */ any;


/**
 * Ensures that the props do not include string ref, which cannot be forwarded
 */
declare type React$PropsWithRef<P> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$PropsWithChildren<P> = P & {
children?: Node
};


/**
 * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
 * or ComponentPropsWithoutRef when refs are not supported.
 */
declare type React$ComponentProps<T: $Keys<JSX$IntrinsicElements> | React$JSXElementConstructor<any>> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$ComponentPropsWithRef<T: React$ElementType<>> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$ComponentPropsWithoutRef<T: React$ElementType<>> = React$PropsWithoutRef<React$ComponentProps<T>>;

declare type React$MemoExoticComponent<T: React$ComponentType<any>> = {
+type: T
} & React$NamedExoticComponent<React$ComponentPropsWithRef<T>>


declare function React$memo<P: {[key: string]: any}>(
Component: React$SFC<P>,
propsAreEqual?: (
prevProps: $ReadOnly<React$PropsWithChildren<P>>,
nextProps: $ReadOnly<React$PropsWithChildren<P>>) => boolean): React$NamedExoticComponent<P>


declare function React$memo<T: React$ComponentType<any>>(
Component: T,
propsAreEqual?: (
prevProps: $ReadOnly<React$ComponentProps<T>>,
nextProps: $ReadOnly<React$ComponentProps<T>>) => boolean): React$MemoExoticComponent<T>


declare type React$LazyExoticComponent<T: React$ComponentType<any>> = {
+_result: T
} & React$ExoticComponent<React$ComponentPropsWithRef<T>>


declare function React$lazy<T: React$ComponentType<any>>(
factory: () => Promise<{
default: T
}>): React$LazyExoticComponent<T>


declare type React$SetStateAction<S> = S | ((prevState: S) => S);

declare type React$Dispatch<A> = (value: A) => void;

declare type React$Reducer<S, A> = (prevState: S, action: A) => S;

declare type React$ReducerState<R: React$Reducer<any, any>> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$ReducerAction<R: React$Reducer<any, any>> = /* Flow doesn't support conditional types, use $Call utility type */ any;

declare type React$DependencyList = $ReadOnlyArray<any>;

declare type React$EffectCallback = () => (void | (() => void | void));

declare interface React$MutableRefObject<T> {
current: T
} 


/**
 * Accepts a context object (the value returned from `React.createContext`) and returns the current
 * context value, as given by the nearest context provider for the given context.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */
declare function React$useContext<T>(context: React$Context<T>): T



/**
 * Returns a stateful value, and a function to update it.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
declare function React$useState<S>(initialState: S | (() => S)): [S, React$Dispatch<React$SetStateAction<S>>]



/**
 * Returns a stateful value, and a function to update it.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
declare function React$useState<S>(): [S | void, React$Dispatch<React$SetStateAction<S | void>>]



/**
 * An alternative to `useState`.
 * 
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
declare function React$useReducer<R: React$Reducer<any, any>, I>(
reducer: R,
initializerArg: I & React$ReducerState<R>,
initializer: (arg: I & React$ReducerState<R>) => React$ReducerState<R>): [React$ReducerState<R>, React$Dispatch<React$ReducerAction<R>>]



/**
 * An alternative to `useState`.
 * 
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
declare function React$useReducer<R: React$Reducer<any, any>, I>(
reducer: R,
initializerArg: I,
initializer: (arg: I) => React$ReducerState<R>): [React$ReducerState<R>, React$Dispatch<React$ReducerAction<R>>]



/**
 * An alternative to `useState`.
 * 
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
declare function React$useReducer<R: React$Reducer<any, any>>(
reducer: R,
initialState: React$ReducerState<R>,
initializer?: void): [React$ReducerState<R>, React$Dispatch<React$ReducerAction<R>>]



/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 * 
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */
declare function React$useRef<T>(initialValue: T): React$MutableRefObject<T>



/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 * 
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 * 
 * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
 * of the generic argument.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */
declare function React$useRef<T>(initialValue: T | null): React$RefObject<T>



/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 * 
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */
declare function React$useRef<T>(): React$MutableRefObject<T | void>



/**
 * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
 * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
 * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
 * 
 * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
 * 
 * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
 * `componentDidMount` and `componentDidUpdate`.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
declare function React$useLayoutEffect(effect: React$EffectCallback, deps?: React$DependencyList): void



/**
 * Accepts a function that contains imperative, possibly effectful code.
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
declare function React$useEffect(effect: React$EffectCallback, deps?: React$DependencyList): void



/**
 * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
 * `ref`. As always, imperative code using refs should be avoided in most cases.
 * 
 * `useImperativeHandle` should be used with `React.forwardRef`.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */
declare function React$useImperativeHandle<T, R: T>(
ref: React$Ref<T> | void,
init: () => R,
deps?: React$DependencyList): void



/**
 * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
 * has changed.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */
declare function React$useCallback<T: (...args: any[]) => any>(callback: T, deps: React$DependencyList): T



/**
 * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
 * 
 * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
 * the second argument.
 * 
 * ```ts
 *      * function expensive () { ... }
 *      *
 *      * function Component () {
 *      *   const expensiveResult = useMemo(expensive, [expensive])
 *      *   return ...
 *      * }
 *      * ```
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */
declare function React$useMemo<T>(factory: () => T, deps: React$DependencyList | void): T



/**
 * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
 * 
 * NOTE: We don’t recommend adding debug values to every custom hook.
 * It’s most valuable for custom hooks that are part of shared libraries.
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */
declare function React$useDebugValue<T>(value: T, format?: (value: T) => any): void


declare interface React$BaseSyntheticEvent<E= {[key: string]: any}, C= any, T= any> {
nativeEvent: E,
currentTarget: C,
target: T,
bubbles: boolean,
cancelable: boolean,
defaultPrevented: boolean,
eventPhase: number,
isTrusted: boolean,
preventDefault(): void,
isDefaultPrevented(): boolean,
stopPropagation(): void,
isPropagationStopped(): boolean,
persist(): void,
timeStamp: number,
type: string
} 


/**
 * currentTarget - a reference to the element on which the event listener is registered.
 * 
 * target - a reference to the element from which the event was originally dispatched.
 * This might be a child element to the element on which the event listener is registered.
 * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
 */
declare type React$SyntheticEvent<T= JSX$Element, E= Event> = {} & React$BaseSyntheticEvent<E, EventTarget & T, EventTarget>


declare type React$ClipboardEvent<T= JSX$Element> = {
clipboardData: DataTransfer
} & React$SyntheticEvent<T, NativeClipboardEvent>


declare type React$CompositionEvent<T= JSX$Element> = {
data: string
} & React$SyntheticEvent<T, NativeCompositionEvent>


declare type React$DragEvent<T= JSX$Element> = {
dataTransfer: DataTransfer
} & React$MouseEvent<T, NativeDragEvent>


declare type React$PointerEvent<T= JSX$Element> = {
pointerId: number,
pressure: number,
tiltX: number,
tiltY: number,
width: number,
height: number,
pointerType: "mouse" | "pen" | "touch",
isPrimary: boolean
} & React$MouseEvent<T, NativePointerEvent>


declare type React$FocusEvent<T= JSX$Element> = {
relatedTarget: EventTarget,
target: EventTarget & T
} & React$SyntheticEvent<T, NativeFocusEvent>


declare type React$FormEvent<T= JSX$Element> = {} & React$SyntheticEvent<T>


declare type React$InvalidEvent<T= JSX$Element> = {
target: EventTarget & T
} & React$SyntheticEvent<T>


declare type React$ChangeEvent<T= JSX$Element> = {
target: EventTarget & T
} & React$SyntheticEvent<T>


declare type React$KeyboardEvent<T= JSX$Element> = {
altKey: boolean,
charCode: number,
ctrlKey: boolean,

/**
 * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
 */
getModifierState(key: string): boolean,

/**
 * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
 */
key: string,
keyCode: number,
locale: string,
location: number,
metaKey: boolean,
repeat: boolean,
shiftKey: boolean,
which: number
} & React$SyntheticEvent<T, NativeKeyboardEvent>


declare type React$MouseEvent<T= JSX$Element, E= NativeMouseEvent> = {
altKey: boolean,
button: number,
buttons: number,
clientX: number,
clientY: number,
ctrlKey: boolean,

/**
 * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
 */
getModifierState(key: string): boolean,
metaKey: boolean,
movementX: number,
movementY: number,
pageX: number,
pageY: number,
relatedTarget: EventTarget,
screenX: number,
screenY: number,
shiftKey: boolean
} & React$SyntheticEvent<T, E>


declare type React$TouchEvent<T= JSX$Element> = {
altKey: boolean,
changedTouches: React$TouchList,
ctrlKey: boolean,

/**
 * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
 */
getModifierState(key: string): boolean,
metaKey: boolean,
shiftKey: boolean,
targetTouches: React$TouchList,
touches: React$TouchList
} & React$SyntheticEvent<T, NativeTouchEvent>


declare type React$UIEvent<T= JSX$Element> = {
detail: number,
view: React$AbstractView
} & React$SyntheticEvent<T, NativeUIEvent>


declare type React$WheelEvent<T= JSX$Element> = {
deltaMode: number,
deltaX: number,
deltaY: number,
deltaZ: number
} & React$MouseEvent<T, NativeWheelEvent>


declare type React$AnimationEvent<T= JSX$Element> = {
animationName: string,
elapsedTime: number,
pseudoElement: string
} & React$SyntheticEvent<T, NativeAnimationEvent>


declare type React$TransitionEvent<T= JSX$Element> = {
elapsedTime: number,
propertyName: string,
pseudoElement: string
} & React$SyntheticEvent<T, NativeTransitionEvent>


declare type React$EventHandler<E: React$SyntheticEvent<any>> = $PropertyType<{
bivarianceHack(event: E): void
}, "bivarianceHack">;

declare type React$ReactEventHandler<T= JSX$Element> = React$EventHandler<React$SyntheticEvent<T>>;

declare type React$ClipboardEventHandler<T= JSX$Element> = React$EventHandler<React$ClipboardEvent<T>>;

declare type React$CompositionEventHandler<T= JSX$Element> = React$EventHandler<React$CompositionEvent<T>>;

declare type React$DragEventHandler<T= JSX$Element> = React$EventHandler<React$DragEvent<T>>;

declare type React$FocusEventHandler<T= JSX$Element> = React$EventHandler<React$FocusEvent<T>>;

declare type React$FormEventHandler<T= JSX$Element> = React$EventHandler<React$FormEvent<T>>;

declare type React$ChangeEventHandler<T= JSX$Element> = React$EventHandler<React$ChangeEvent<T>>;

declare type React$KeyboardEventHandler<T= JSX$Element> = React$EventHandler<React$KeyboardEvent<T>>;

declare type React$MouseEventHandler<T= JSX$Element> = React$EventHandler<React$MouseEvent<T>>;

declare type React$TouchEventHandler<T= JSX$Element> = React$EventHandler<React$TouchEvent<T>>;

declare type React$PointerEventHandler<T= JSX$Element> = React$EventHandler<React$PointerEvent<T>>;

declare type React$UIEventHandler<T= JSX$Element> = React$EventHandler<React$UIEvent<T>>;

declare type React$WheelEventHandler<T= JSX$Element> = React$EventHandler<React$WheelEvent<T>>;

declare type React$AnimationEventHandler<T= JSX$Element> = React$EventHandler<React$AnimationEvent<T>>;

declare type React$TransitionEventHandler<T= JSX$Element> = React$EventHandler<React$TransitionEvent<T>>;


/**
 * @deprecated . This was used to allow clients to pass `ref` and `key`
 * to `createElement`, which is no longer necessary due to intersection
 * types. If you need to declare a props object before passing it to
 * `createElement` or a factory, use `ClassAttributes<T>`:
 * 
 * ```ts
 *      * var b: Button | null;
 *      * var props: ButtonProps & ClassAttributes<Button> = {
 *      *     ref: b => button = b, // ok!
 *      *     label: "I'm a Button"
 *      * };
 *      * ```
 */
declare interface React$Props<T> {
children?: Node,
key?: React$Key,
ref?: React$LegacyRef<T>
} 

declare type React$HTMLProps<T> = {} & React$AllHTMLAttributes<T> & React$ClassAttributes<T>


declare type React$DetailedHTMLProps<E: React$HTMLAttributes<T>, T> = React$ClassAttributes<T> & E;

declare type React$SVGProps<T> = {} & React$SVGAttributes<T> & React$ClassAttributes<T>


declare interface React$DOMAttributes<T> {
children?: Node,
dangerouslySetInnerHTML?: {
__html: string
},
onCopy?: React$ClipboardEventHandler<T>,
onCopyCapture?: React$ClipboardEventHandler<T>,
onCut?: React$ClipboardEventHandler<T>,
onCutCapture?: React$ClipboardEventHandler<T>,
onPaste?: React$ClipboardEventHandler<T>,
onPasteCapture?: React$ClipboardEventHandler<T>,
onCompositionEnd?: React$CompositionEventHandler<T>,
onCompositionEndCapture?: React$CompositionEventHandler<T>,
onCompositionStart?: React$CompositionEventHandler<T>,
onCompositionStartCapture?: React$CompositionEventHandler<T>,
onCompositionUpdate?: React$CompositionEventHandler<T>,
onCompositionUpdateCapture?: React$CompositionEventHandler<T>,
onFocus?: React$FocusEventHandler<T>,
onFocusCapture?: React$FocusEventHandler<T>,
onBlur?: React$FocusEventHandler<T>,
onBlurCapture?: React$FocusEventHandler<T>,
onChange?: React$FormEventHandler<T>,
onChangeCapture?: React$FormEventHandler<T>,
onBeforeInput?: React$FormEventHandler<T>,
onBeforeInputCapture?: React$FormEventHandler<T>,
onInput?: React$FormEventHandler<T>,
onInputCapture?: React$FormEventHandler<T>,
onReset?: React$FormEventHandler<T>,
onResetCapture?: React$FormEventHandler<T>,
onSubmit?: React$FormEventHandler<T>,
onSubmitCapture?: React$FormEventHandler<T>,
onInvalid?: React$FormEventHandler<T>,
onInvalidCapture?: React$FormEventHandler<T>,
onLoad?: React$ReactEventHandler<T>,
onLoadCapture?: React$ReactEventHandler<T>,
onError?: React$ReactEventHandler<T>,
onErrorCapture?: React$ReactEventHandler<T>,
onKeyDown?: React$KeyboardEventHandler<T>,
onKeyDownCapture?: React$KeyboardEventHandler<T>,
onKeyPress?: React$KeyboardEventHandler<T>,
onKeyPressCapture?: React$KeyboardEventHandler<T>,
onKeyUp?: React$KeyboardEventHandler<T>,
onKeyUpCapture?: React$KeyboardEventHandler<T>,
onAbort?: React$ReactEventHandler<T>,
onAbortCapture?: React$ReactEventHandler<T>,
onCanPlay?: React$ReactEventHandler<T>,
onCanPlayCapture?: React$ReactEventHandler<T>,
onCanPlayThrough?: React$ReactEventHandler<T>,
onCanPlayThroughCapture?: React$ReactEventHandler<T>,
onDurationChange?: React$ReactEventHandler<T>,
onDurationChangeCapture?: React$ReactEventHandler<T>,
onEmptied?: React$ReactEventHandler<T>,
onEmptiedCapture?: React$ReactEventHandler<T>,
onEncrypted?: React$ReactEventHandler<T>,
onEncryptedCapture?: React$ReactEventHandler<T>,
onEnded?: React$ReactEventHandler<T>,
onEndedCapture?: React$ReactEventHandler<T>,
onLoadedData?: React$ReactEventHandler<T>,
onLoadedDataCapture?: React$ReactEventHandler<T>,
onLoadedMetadata?: React$ReactEventHandler<T>,
onLoadedMetadataCapture?: React$ReactEventHandler<T>,
onLoadStart?: React$ReactEventHandler<T>,
onLoadStartCapture?: React$ReactEventHandler<T>,
onPause?: React$ReactEventHandler<T>,
onPauseCapture?: React$ReactEventHandler<T>,
onPlay?: React$ReactEventHandler<T>,
onPlayCapture?: React$ReactEventHandler<T>,
onPlaying?: React$ReactEventHandler<T>,
onPlayingCapture?: React$ReactEventHandler<T>,
onProgress?: React$ReactEventHandler<T>,
onProgressCapture?: React$ReactEventHandler<T>,
onRateChange?: React$ReactEventHandler<T>,
onRateChangeCapture?: React$ReactEventHandler<T>,
onSeeked?: React$ReactEventHandler<T>,
onSeekedCapture?: React$ReactEventHandler<T>,
onSeeking?: React$ReactEventHandler<T>,
onSeekingCapture?: React$ReactEventHandler<T>,
onStalled?: React$ReactEventHandler<T>,
onStalledCapture?: React$ReactEventHandler<T>,
onSuspend?: React$ReactEventHandler<T>,
onSuspendCapture?: React$ReactEventHandler<T>,
onTimeUpdate?: React$ReactEventHandler<T>,
onTimeUpdateCapture?: React$ReactEventHandler<T>,
onVolumeChange?: React$ReactEventHandler<T>,
onVolumeChangeCapture?: React$ReactEventHandler<T>,
onWaiting?: React$ReactEventHandler<T>,
onWaitingCapture?: React$ReactEventHandler<T>,
onClick?: React$MouseEventHandler<T>,
onClickCapture?: React$MouseEventHandler<T>,
onContextMenu?: React$MouseEventHandler<T>,
onContextMenuCapture?: React$MouseEventHandler<T>,
onDoubleClick?: React$MouseEventHandler<T>,
onDoubleClickCapture?: React$MouseEventHandler<T>,
onDrag?: React$DragEventHandler<T>,
onDragCapture?: React$DragEventHandler<T>,
onDragEnd?: React$DragEventHandler<T>,
onDragEndCapture?: React$DragEventHandler<T>,
onDragEnter?: React$DragEventHandler<T>,
onDragEnterCapture?: React$DragEventHandler<T>,
onDragExit?: React$DragEventHandler<T>,
onDragExitCapture?: React$DragEventHandler<T>,
onDragLeave?: React$DragEventHandler<T>,
onDragLeaveCapture?: React$DragEventHandler<T>,
onDragOver?: React$DragEventHandler<T>,
onDragOverCapture?: React$DragEventHandler<T>,
onDragStart?: React$DragEventHandler<T>,
onDragStartCapture?: React$DragEventHandler<T>,
onDrop?: React$DragEventHandler<T>,
onDropCapture?: React$DragEventHandler<T>,
onMouseDown?: React$MouseEventHandler<T>,
onMouseDownCapture?: React$MouseEventHandler<T>,
onMouseEnter?: React$MouseEventHandler<T>,
onMouseLeave?: React$MouseEventHandler<T>,
onMouseMove?: React$MouseEventHandler<T>,
onMouseMoveCapture?: React$MouseEventHandler<T>,
onMouseOut?: React$MouseEventHandler<T>,
onMouseOutCapture?: React$MouseEventHandler<T>,
onMouseOver?: React$MouseEventHandler<T>,
onMouseOverCapture?: React$MouseEventHandler<T>,
onMouseUp?: React$MouseEventHandler<T>,
onMouseUpCapture?: React$MouseEventHandler<T>,
onSelect?: React$ReactEventHandler<T>,
onSelectCapture?: React$ReactEventHandler<T>,
onTouchCancel?: React$TouchEventHandler<T>,
onTouchCancelCapture?: React$TouchEventHandler<T>,
onTouchEnd?: React$TouchEventHandler<T>,
onTouchEndCapture?: React$TouchEventHandler<T>,
onTouchMove?: React$TouchEventHandler<T>,
onTouchMoveCapture?: React$TouchEventHandler<T>,
onTouchStart?: React$TouchEventHandler<T>,
onTouchStartCapture?: React$TouchEventHandler<T>,
onPointerDown?: React$PointerEventHandler<T>,
onPointerDownCapture?: React$PointerEventHandler<T>,
onPointerMove?: React$PointerEventHandler<T>,
onPointerMoveCapture?: React$PointerEventHandler<T>,
onPointerUp?: React$PointerEventHandler<T>,
onPointerUpCapture?: React$PointerEventHandler<T>,
onPointerCancel?: React$PointerEventHandler<T>,
onPointerCancelCapture?: React$PointerEventHandler<T>,
onPointerEnter?: React$PointerEventHandler<T>,
onPointerEnterCapture?: React$PointerEventHandler<T>,
onPointerLeave?: React$PointerEventHandler<T>,
onPointerLeaveCapture?: React$PointerEventHandler<T>,
onPointerOver?: React$PointerEventHandler<T>,
onPointerOverCapture?: React$PointerEventHandler<T>,
onPointerOut?: React$PointerEventHandler<T>,
onPointerOutCapture?: React$PointerEventHandler<T>,
onGotPointerCapture?: React$PointerEventHandler<T>,
onGotPointerCaptureCapture?: React$PointerEventHandler<T>,
onLostPointerCapture?: React$PointerEventHandler<T>,
onLostPointerCaptureCapture?: React$PointerEventHandler<T>,
onScroll?: React$UIEventHandler<T>,
onScrollCapture?: React$UIEventHandler<T>,
onWheel?: React$WheelEventHandler<T>,
onWheelCapture?: React$WheelEventHandler<T>,
onAnimationStart?: React$AnimationEventHandler<T>,
onAnimationStartCapture?: React$AnimationEventHandler<T>,
onAnimationEnd?: React$AnimationEventHandler<T>,
onAnimationEndCapture?: React$AnimationEventHandler<T>,
onAnimationIteration?: React$AnimationEventHandler<T>,
onAnimationIterationCapture?: React$AnimationEventHandler<T>,
onTransitionEnd?: React$TransitionEventHandler<T>,
onTransitionEndCapture?: React$TransitionEventHandler<T>
} 

declare export type React$CSSProperties = {} & CSS.Properties<string | number>


declare type React$HTMLAttributes<T> = {
defaultChecked?: boolean,
defaultValue?: string | string[],
suppressContentEditableWarning?: boolean,
suppressHydrationWarning?: boolean,
accessKey?: string,
className?: string,
contentEditable?: boolean,
contextMenu?: string,
dir?: string,
draggable?: boolean,
hidden?: boolean,
id?: string,
lang?: string,
placeholder?: string,
slot?: string,
spellCheck?: boolean,
style?: React$CSSProperties,
tabIndex?: number,
title?: string,
inputMode?: string,
is?: string,
radioGroup?: string,
role?: string,
about?: string,
datatype?: string,
inlist?: any,
prefix?: string,
property?: string,
resource?: string,
typeof?: string,
vocab?: string,
autoCapitalize?: string,
autoCorrect?: string,
autoSave?: string,
color?: string,
itemProp?: string,
itemScope?: boolean,
itemType?: string,
itemID?: string,
itemRef?: string,
results?: number,
security?: string,
unselectable?: "on" | "off",

/**
 * Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 */
"aria-activedescendant"?: string,

/**
 * Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 */
"aria-atomic"?: boolean | "false" | "true",

/**
 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
 * presented if they are made.
 */
"aria-autocomplete"?: "none" | "inline" | "list" | "both",

/**
 * Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 */
"aria-busy"?: boolean | "false" | "true",

/**
 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
 * @see aria-pressed
 * @see aria-selected.
 */
"aria-checked"?: boolean | "false" | "mixed" | "true",

/**
 * Defines the total number of columns in a table, grid, or treegrid.
 * @see aria-colindex.
 */
"aria-colcount"?: number,

/**
 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
 * @see aria-colcount
 * @see aria-colspan.
 */
"aria-colindex"?: number,

/**
 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
 * @see aria-colindex
 * @see aria-rowspan.
 */
"aria-colspan"?: number,

/**
 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
 * @see aria-owns.
 */
"aria-controls"?: string,

/**
 * Indicates the element that represents the current item within a container or set of related elements.
 */
"aria-current"?: boolean
| "false"
| "true"
| "page"
| "step"
| "location"
| "date"
| "time",

/**
 * Identifies the element (or elements) that describes the object.
 * @see aria-labelledby
 */
"aria-describedby"?: string,

/**
 * Identifies the element that provides a detailed, extended description for the object.
 * @see aria-describedby.
 */
"aria-details"?: string,

/**
 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
 * @see aria-hidden
 * @see aria-readonly.
 */
"aria-disabled"?: boolean | "false" | "true",

/**
 * Indicates what functions can be performed when a dragged object is released on the drop target.
 * @deprecated in ARIA 1.1
 */
"aria-dropeffect"?: "none"
| "copy"
| "execute"
| "link"
| "move"
| "popup",

/**
 * Identifies the element that provides an error message for the object.
 * @see aria-invalid
 * @see aria-describedby.
 */
"aria-errormessage"?: string,

/**
 * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 */
"aria-expanded"?: boolean | "false" | "true",

/**
 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
 * allows assistive technology to override the general default of reading in document source order.
 */
"aria-flowto"?: string,

/**
 * Indicates an element's "grabbed" state in a drag-and-drop operation.
 * @deprecated in ARIA 1.1
 */
"aria-grabbed"?: boolean | "false" | "true",

/**
 * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 */
"aria-haspopup"?: boolean
| "false"
| "true"
| "menu"
| "listbox"
| "tree"
| "grid"
| "dialog",

/**
 * Indicates whether the element is exposed to an accessibility API.
 * @see aria-disabled.
 */
"aria-hidden"?: boolean | "false" | "true",

/**
 * Indicates the entered value does not conform to the format expected by the application.
 * @see aria-errormessage.
 */
"aria-invalid"?: boolean
| "false"
| "true"
| "grammar"
| "spelling",

/**
 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 */
"aria-keyshortcuts"?: string,

/**
 * Defines a string value that labels the current element.
 * @see aria-labelledby.
 */
"aria-label"?: string,

/**
 * Identifies the element (or elements) that labels the current element.
 * @see aria-describedby.
 */
"aria-labelledby"?: string,

/**
 * Defines the hierarchical level of an element within a structure.
 */
"aria-level"?: number,

/**
 * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 */
"aria-live"?: "off" | "assertive" | "polite",

/**
 * Indicates whether an element is modal when displayed.
 */
"aria-modal"?: boolean | "false" | "true",

/**
 * Indicates whether a text box accepts multiple lines of input or only a single line.
 */
"aria-multiline"?: boolean | "false" | "true",

/**
 * Indicates that the user may select more than one item from the current selectable descendants.
 */
"aria-multiselectable"?: boolean | "false" | "true",

/**
 * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 */
"aria-orientation"?: "horizontal" | "vertical",

/**
 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
 * @see aria-controls.
 */
"aria-owns"?: string,

/**
 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
 * A hint could be a sample value or a brief description of the expected format.
 */
"aria-placeholder"?: string,

/**
 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
 * @see aria-setsize.
 */
"aria-posinset"?: number,

/**
 * Indicates the current "pressed" state of toggle buttons.
 * @see aria-checked
 * @see aria-selected.
 */
"aria-pressed"?: boolean | "false" | "mixed" | "true",

/**
 * Indicates that the element is not editable, but is otherwise operable.
 * @see aria-disabled.
 */
"aria-readonly"?: boolean | "false" | "true",

/**
 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
 * @see aria-atomic.
 */
"aria-relevant"?: "additions"
| "additions text"
| "all"
| "removals"
| "text",

/**
 * Indicates that user input is required on the element before a form may be submitted.
 */
"aria-required"?: boolean | "false" | "true",

/**
 * Defines a human-readable, author-localized description for the role of an element.
 */
"aria-roledescription"?: string,

/**
 * Defines the total number of rows in a table, grid, or treegrid.
 * @see aria-rowindex.
 */
"aria-rowcount"?: number,

/**
 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
 * @see aria-rowcount
 * @see aria-rowspan.
 */
"aria-rowindex"?: number,

/**
 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
 * @see aria-rowindex
 * @see aria-colspan.
 */
"aria-rowspan"?: number,

/**
 * Indicates the current "selected" state of various widgets.
 * @see aria-checked
 * @see aria-pressed.
 */
"aria-selected"?: boolean | "false" | "true",

/**
 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
 * @see aria-posinset.
 */
"aria-setsize"?: number,

/**
 * Indicates if items in a table or grid are sorted in ascending or descending order.
 */
"aria-sort"?: "none" | "ascending" | "descending" | "other",

/**
 * Defines the maximum allowed value for a range widget.
 */
"aria-valuemax"?: number,

/**
 * Defines the minimum allowed value for a range widget.
 */
"aria-valuemin"?: number,

/**
 * Defines the current value for a range widget.
 * @see aria-valuetext.
 */
"aria-valuenow"?: number,

/**
 * Defines the human readable text alternative of aria-valuenow for a range widget.
 */
"aria-valuetext"?: string
} & React$DOMAttributes<T>


declare type React$AllHTMLAttributes<T> = {
accept?: string,
acceptCharset?: string,
action?: string,
allowFullScreen?: boolean,
allowTransparency?: boolean,
alt?: string,
as?: string,
async?: boolean,
autoComplete?: string,
autoFocus?: boolean,
autoPlay?: boolean,
capture?: boolean | string,
cellPadding?: number | string,
cellSpacing?: number | string,
charSet?: string,
challenge?: string,
checked?: boolean,
cite?: string,
classID?: string,
cols?: number,
colSpan?: number,
content?: string,
controls?: boolean,
coords?: string,
crossOrigin?: string,
data?: string,
dateTime?: string,
default?: boolean,
defer?: boolean,
disabled?: boolean,
download?: any,
encType?: string,
form?: string,
formAction?: string,
formEncType?: string,
formMethod?: string,
formNoValidate?: boolean,
formTarget?: string,
frameBorder?: number | string,
headers?: string,
height?: number | string,
high?: number,
href?: string,
hrefLang?: string,
htmlFor?: string,
httpEquiv?: string,
integrity?: string,
keyParams?: string,
keyType?: string,
kind?: string,
label?: string,
list?: string,
loop?: boolean,
low?: number,
manifest?: string,
marginHeight?: number,
marginWidth?: number,
max?: number | string,
maxLength?: number,
media?: string,
mediaGroup?: string,
method?: string,
min?: number | string,
minLength?: number,
multiple?: boolean,
muted?: boolean,
name?: string,
nonce?: string,
noValidate?: boolean,
open?: boolean,
optimum?: number,
pattern?: string,
placeholder?: string,
playsInline?: boolean,
poster?: string,
preload?: string,
readOnly?: boolean,
rel?: string,
required?: boolean,
reversed?: boolean,
rows?: number,
rowSpan?: number,
sandbox?: string,
scope?: string,
scoped?: boolean,
scrolling?: string,
seamless?: boolean,
selected?: boolean,
shape?: string,
size?: number,
sizes?: string,
span?: number,
src?: string,
srcDoc?: string,
srcLang?: string,
srcSet?: string,
start?: number,
step?: number | string,
summary?: string,
target?: string,
type?: string,
useMap?: string,
value?: string | string[] | number,
width?: number | string,
wmode?: string,
wrap?: string
} & React$HTMLAttributes<T>


declare type React$AnchorHTMLAttributes<T> = {
download?: any,
href?: string,
hrefLang?: string,
media?: string,
rel?: string,
target?: string,
type?: string,
referrerPolicy?: string
} & React$HTMLAttributes<T>


declare type React$AudioHTMLAttributes<T> = {} & React$MediaHTMLAttributes<T>


declare type React$AreaHTMLAttributes<T> = {
alt?: string,
coords?: string,
download?: any,
href?: string,
hrefLang?: string,
media?: string,
rel?: string,
shape?: string,
target?: string
} & React$HTMLAttributes<T>


declare type React$BaseHTMLAttributes<T> = {
href?: string,
target?: string
} & React$HTMLAttributes<T>


declare type React$BlockquoteHTMLAttributes<T> = {
cite?: string
} & React$HTMLAttributes<T>


declare type React$ButtonHTMLAttributes<T> = {
autoFocus?: boolean,
disabled?: boolean,
form?: string,
formAction?: string,
formEncType?: string,
formMethod?: string,
formNoValidate?: boolean,
formTarget?: string,
name?: string,
type?: string,
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$CanvasHTMLAttributes<T> = {
height?: number | string,
width?: number | string
} & React$HTMLAttributes<T>


declare type React$ColHTMLAttributes<T> = {
span?: number,
width?: number | string
} & React$HTMLAttributes<T>


declare type React$ColgroupHTMLAttributes<T> = {
span?: number
} & React$HTMLAttributes<T>


declare type React$DetailsHTMLAttributes<T> = {
open?: boolean
} & React$HTMLAttributes<T>


declare type React$DelHTMLAttributes<T> = {
cite?: string,
dateTime?: string
} & React$HTMLAttributes<T>


declare type React$DialogHTMLAttributes<T> = {
open?: boolean
} & React$HTMLAttributes<T>


declare type React$EmbedHTMLAttributes<T> = {
height?: number | string,
src?: string,
type?: string,
width?: number | string
} & React$HTMLAttributes<T>


declare type React$FieldsetHTMLAttributes<T> = {
disabled?: boolean,
form?: string,
name?: string
} & React$HTMLAttributes<T>


declare type React$FormHTMLAttributes<T> = {
acceptCharset?: string,
action?: string,
autoComplete?: string,
encType?: string,
method?: string,
name?: string,
noValidate?: boolean,
target?: string
} & React$HTMLAttributes<T>


declare type React$HtmlHTMLAttributes<T> = {
manifest?: string
} & React$HTMLAttributes<T>


declare type React$IframeHTMLAttributes<T> = {
allow?: string,
allowFullScreen?: boolean,
allowTransparency?: boolean,
frameBorder?: number | string,
height?: number | string,
marginHeight?: number,
marginWidth?: number,
name?: string,
sandbox?: string,
scrolling?: string,
seamless?: boolean,
src?: string,
srcDoc?: string,
width?: number | string
} & React$HTMLAttributes<T>


declare type React$ImgHTMLAttributes<T> = {
alt?: string,
crossOrigin?: "anonymous" | "use-credentials" | "",
decoding?: "async" | "auto" | "sync",
height?: number | string,
sizes?: string,
src?: string,
srcSet?: string,
useMap?: string,
width?: number | string
} & React$HTMLAttributes<T>


declare type React$InsHTMLAttributes<T> = {
cite?: string,
dateTime?: string
} & React$HTMLAttributes<T>


declare type React$InputHTMLAttributes<T> = {
accept?: string,
alt?: string,
autoComplete?: string,
autoFocus?: boolean,
capture?: boolean | string,
checked?: boolean,
crossOrigin?: string,
disabled?: boolean,
form?: string,
formAction?: string,
formEncType?: string,
formMethod?: string,
formNoValidate?: boolean,
formTarget?: string,
height?: number | string,
list?: string,
max?: number | string,
maxLength?: number,
min?: number | string,
minLength?: number,
multiple?: boolean,
name?: string,
pattern?: string,
placeholder?: string,
readOnly?: boolean,
required?: boolean,
size?: number,
src?: string,
step?: number | string,
type?: string,
value?: string | string[] | number,
width?: number | string,
onChange?: React$ChangeEventHandler<T>
} & React$HTMLAttributes<T>


declare type React$KeygenHTMLAttributes<T> = {
autoFocus?: boolean,
challenge?: string,
disabled?: boolean,
form?: string,
keyType?: string,
keyParams?: string,
name?: string
} & React$HTMLAttributes<T>


declare type React$LabelHTMLAttributes<T> = {
form?: string,
htmlFor?: string
} & React$HTMLAttributes<T>


declare type React$LiHTMLAttributes<T> = {
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$LinkHTMLAttributes<T> = {
as?: string,
crossOrigin?: string,
href?: string,
hrefLang?: string,
integrity?: string,
media?: string,
rel?: string,
sizes?: string,
type?: string
} & React$HTMLAttributes<T>


declare type React$MapHTMLAttributes<T> = {
name?: string
} & React$HTMLAttributes<T>


declare type React$MenuHTMLAttributes<T> = {
type?: string
} & React$HTMLAttributes<T>


declare type React$MediaHTMLAttributes<T> = {
autoPlay?: boolean,
controls?: boolean,
controlsList?: string,
crossOrigin?: string,
loop?: boolean,
mediaGroup?: string,
muted?: boolean,
playsinline?: boolean,
preload?: string,
src?: string
} & React$HTMLAttributes<T>


declare type React$MetaHTMLAttributes<T> = {
charSet?: string,
content?: string,
httpEquiv?: string,
name?: string
} & React$HTMLAttributes<T>


declare type React$MeterHTMLAttributes<T> = {
form?: string,
high?: number,
low?: number,
max?: number | string,
min?: number | string,
optimum?: number,
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$QuoteHTMLAttributes<T> = {
cite?: string
} & React$HTMLAttributes<T>


declare type React$ObjectHTMLAttributes<T> = {
classID?: string,
data?: string,
form?: string,
height?: number | string,
name?: string,
type?: string,
useMap?: string,
width?: number | string,
wmode?: string
} & React$HTMLAttributes<T>


declare type React$OlHTMLAttributes<T> = {
reversed?: boolean,
start?: number,
type?: "1"
| "a"
| "A"
| "i"
| "I"
} & React$HTMLAttributes<T>


declare type React$OptgroupHTMLAttributes<T> = {
disabled?: boolean,
label?: string
} & React$HTMLAttributes<T>


declare type React$OptionHTMLAttributes<T> = {
disabled?: boolean,
label?: string,
selected?: boolean,
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$OutputHTMLAttributes<T> = {
form?: string,
htmlFor?: string,
name?: string
} & React$HTMLAttributes<T>


declare type React$ParamHTMLAttributes<T> = {
name?: string,
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$ProgressHTMLAttributes<T> = {
max?: number | string,
value?: string | string[] | number
} & React$HTMLAttributes<T>


declare type React$ScriptHTMLAttributes<T> = {
async?: boolean,
charSet?: string,
crossOrigin?: string,
defer?: boolean,
integrity?: string,
noModule?: boolean,
nonce?: string,
src?: string,
type?: string
} & React$HTMLAttributes<T>


declare type React$SelectHTMLAttributes<T> = {
autoComplete?: string,
autoFocus?: boolean,
disabled?: boolean,
form?: string,
multiple?: boolean,
name?: string,
required?: boolean,
size?: number,
value?: string | string[] | number,
onChange?: React$ChangeEventHandler<T>
} & React$HTMLAttributes<T>


declare type React$SourceHTMLAttributes<T> = {
media?: string,
sizes?: string,
src?: string,
srcSet?: string,
type?: string
} & React$HTMLAttributes<T>


declare type React$StyleHTMLAttributes<T> = {
media?: string,
nonce?: string,
scoped?: boolean,
type?: string
} & React$HTMLAttributes<T>


declare type React$TableHTMLAttributes<T> = {
cellPadding?: number | string,
cellSpacing?: number | string,
summary?: string
} & React$HTMLAttributes<T>


declare type React$TextareaHTMLAttributes<T> = {
autoComplete?: string,
autoFocus?: boolean,
cols?: number,
dirName?: string,
disabled?: boolean,
form?: string,
maxLength?: number,
minLength?: number,
name?: string,
placeholder?: string,
readOnly?: boolean,
required?: boolean,
rows?: number,
value?: string | string[] | number,
wrap?: string,
onChange?: React$ChangeEventHandler<T>
} & React$HTMLAttributes<T>


declare type React$TdHTMLAttributes<T> = {
align?: "left"
| "center"
| "right"
| "justify"
| "char",
colSpan?: number,
headers?: string,
rowSpan?: number,
scope?: string
} & React$HTMLAttributes<T>


declare type React$ThHTMLAttributes<T> = {
align?: "left"
| "center"
| "right"
| "justify"
| "char",
colSpan?: number,
headers?: string,
rowSpan?: number,
scope?: string
} & React$HTMLAttributes<T>


declare type React$TimeHTMLAttributes<T> = {
dateTime?: string
} & React$HTMLAttributes<T>


declare type React$TrackHTMLAttributes<T> = {
default?: boolean,
kind?: string,
label?: string,
src?: string,
srcLang?: string
} & React$HTMLAttributes<T>


declare type React$VideoHTMLAttributes<T> = {
height?: number | string,
playsInline?: boolean,
poster?: string,
width?: number | string
} & React$MediaHTMLAttributes<T>


declare type React$SVGAttributes<T> = {
className?: string,
color?: string,
height?: number | string,
id?: string,
lang?: string,
max?: number | string,
media?: string,
method?: string,
min?: number | string,
name?: string,
style?: React$CSSProperties,
target?: string,
type?: string,
width?: number | string,
role?: string,
tabIndex?: number,
accentHeight?: number | string,
accumulate?: "none" | "sum",
additive?: "replace" | "sum",
alignmentBaseline?: "auto"
| "baseline"
| "before-edge"
| "text-before-edge"
| "middle"
| "central"
| "after-edge"
| "text-after-edge"
| "ideographic"
| "alphabetic"
| "hanging"
| "mathematical"
| "inherit",
allowReorder?: "no" | "yes",
alphabetic?: number | string,
amplitude?: number | string,
arabicForm?: "initial" | "medial" | "terminal" | "isolated",
ascent?: number | string,
attributeName?: string,
attributeType?: string,
autoReverse?: number | string,
azimuth?: number | string,
baseFrequency?: number | string,
baselineShift?: number | string,
baseProfile?: number | string,
bbox?: number | string,
begin?: number | string,
bias?: number | string,
by?: number | string,
calcMode?: number | string,
capHeight?: number | string,
clip?: number | string,
clipPath?: string,
clipPathUnits?: number | string,
clipRule?: number | string,
colorInterpolation?: number | string,
colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit",
colorProfile?: number | string,
colorRendering?: number | string,
contentScriptType?: number | string,
contentStyleType?: number | string,
cursor?: number | string,
cx?: number | string,
cy?: number | string,
d?: string,
decelerate?: number | string,
descent?: number | string,
diffuseConstant?: number | string,
direction?: number | string,
display?: number | string,
divisor?: number | string,
dominantBaseline?: number | string,
dur?: number | string,
dx?: number | string,
dy?: number | string,
edgeMode?: number | string,
elevation?: number | string,
enableBackground?: number | string,
end?: number | string,
exponent?: number | string,
externalResourcesRequired?: number | string,
fill?: string,
fillOpacity?: number | string,
fillRule?: "nonzero" | "evenodd" | "inherit",
filter?: string,
filterRes?: number | string,
filterUnits?: number | string,
floodColor?: number | string,
floodOpacity?: number | string,
focusable?: number | string,
fontFamily?: string,
fontSize?: number | string,
fontSizeAdjust?: number | string,
fontStretch?: number | string,
fontStyle?: number | string,
fontVariant?: number | string,
fontWeight?: number | string,
format?: number | string,
from?: number | string,
fx?: number | string,
fy?: number | string,
g1?: number | string,
g2?: number | string,
glyphName?: number | string,
glyphOrientationHorizontal?: number | string,
glyphOrientationVertical?: number | string,
glyphRef?: number | string,
gradientTransform?: string,
gradientUnits?: string,
hanging?: number | string,
horizAdvX?: number | string,
horizOriginX?: number | string,
href?: string,
ideographic?: number | string,
imageRendering?: number | string,
in2?: number | string,
in?: string,
intercept?: number | string,
k1?: number | string,
k2?: number | string,
k3?: number | string,
k4?: number | string,
k?: number | string,
kernelMatrix?: number | string,
kernelUnitLength?: number | string,
kerning?: number | string,
keyPoints?: number | string,
keySplines?: number | string,
keyTimes?: number | string,
lengthAdjust?: number | string,
letterSpacing?: number | string,
lightingColor?: number | string,
limitingConeAngle?: number | string,
local?: number | string,
markerEnd?: string,
markerHeight?: number | string,
markerMid?: string,
markerStart?: string,
markerUnits?: number | string,
markerWidth?: number | string,
mask?: string,
maskContentUnits?: number | string,
maskUnits?: number | string,
mathematical?: number | string,
mode?: number | string,
numOctaves?: number | string,
offset?: number | string,
opacity?: number | string,
operator?: number | string,
order?: number | string,
orient?: number | string,
orientation?: number | string,
origin?: number | string,
overflow?: number | string,
overlinePosition?: number | string,
overlineThickness?: number | string,
paintOrder?: number | string,
panose1?: number | string,
pathLength?: number | string,
patternContentUnits?: string,
patternTransform?: number | string,
patternUnits?: string,
pointerEvents?: number | string,
points?: string,
pointsAtX?: number | string,
pointsAtY?: number | string,
pointsAtZ?: number | string,
preserveAlpha?: number | string,
preserveAspectRatio?: string,
primitiveUnits?: number | string,
r?: number | string,
radius?: number | string,
refX?: number | string,
refY?: number | string,
renderingIntent?: number | string,
repeatCount?: number | string,
repeatDur?: number | string,
requiredExtensions?: number | string,
requiredFeatures?: number | string,
restart?: number | string,
result?: string,
rotate?: number | string,
rx?: number | string,
ry?: number | string,
scale?: number | string,
seed?: number | string,
shapeRendering?: number | string,
slope?: number | string,
spacing?: number | string,
specularConstant?: number | string,
specularExponent?: number | string,
speed?: number | string,
spreadMethod?: string,
startOffset?: number | string,
stdDeviation?: number | string,
stemh?: number | string,
stemv?: number | string,
stitchTiles?: number | string,
stopColor?: string,
stopOpacity?: number | string,
strikethroughPosition?: number | string,
strikethroughThickness?: number | string,
string?: number | string,
stroke?: string,
strokeDasharray?: string | number,
strokeDashoffset?: string | number,
strokeLinecap?: "butt" | "round" | "square" | "inherit",
strokeLinejoin?: "miter" | "round" | "bevel" | "inherit",
strokeMiterlimit?: number | string,
strokeOpacity?: number | string,
strokeWidth?: number | string,
surfaceScale?: number | string,
systemLanguage?: number | string,
tableValues?: number | string,
targetX?: number | string,
targetY?: number | string,
textAnchor?: string,
textDecoration?: number | string,
textLength?: number | string,
textRendering?: number | string,
to?: number | string,
transform?: string,
u1?: number | string,
u2?: number | string,
underlinePosition?: number | string,
underlineThickness?: number | string,
unicode?: number | string,
unicodeBidi?: number | string,
unicodeRange?: number | string,
unitsPerEm?: number | string,
vAlphabetic?: number | string,
values?: string,
vectorEffect?: number | string,
version?: string,
vertAdvY?: number | string,
vertOriginX?: number | string,
vertOriginY?: number | string,
vHanging?: number | string,
vIdeographic?: number | string,
viewBox?: string,
viewTarget?: number | string,
visibility?: number | string,
vMathematical?: number | string,
widths?: number | string,
wordSpacing?: number | string,
writingMode?: number | string,
x1?: number | string,
x2?: number | string,
x?: number | string,
xChannelSelector?: string,
xHeight?: number | string,
xlinkActuate?: string,
xlinkArcrole?: string,
xlinkHref?: string,
xlinkRole?: string,
xlinkShow?: string,
xlinkTitle?: string,
xlinkType?: string,
xmlBase?: string,
xmlLang?: string,
xmlns?: string,
xmlnsXlink?: string,
xmlSpace?: string,
y1?: number | string,
y2?: number | string,
y?: number | string,
yChannelSelector?: string,
z?: number | string,
zoomAndPan?: string
} & React$DOMAttributes<T>


declare type React$WebViewHTMLAttributes<T> = {
allowFullScreen?: boolean,
allowpopups?: boolean,
autoFocus?: boolean,
autosize?: boolean,
blinkfeatures?: string,
disableblinkfeatures?: string,
disableguestresize?: boolean,
disablewebsecurity?: boolean,
guestinstance?: string,
httpreferrer?: string,
nodeintegration?: boolean,
partition?: string,
plugins?: boolean,
preload?: string,
src?: string,
useragent?: string,
webpreferences?: string
} & React$HTMLAttributes<T>


declare interface React$ReactHTML {
a: React$DetailedHTMLFactory<React$AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
abbr: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
address: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
area: React$DetailedHTMLFactory<React$AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>,
article: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
aside: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
audio: React$DetailedHTMLFactory<React$AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>,
b: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
base: React$DetailedHTMLFactory<React$BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>,
bdi: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
bdo: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
big: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
blockquote: React$DetailedHTMLFactory<React$BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>,
body: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>,
br: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
button: React$DetailedHTMLFactory<React$ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
canvas: React$DetailedHTMLFactory<React$CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>,
caption: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
cite: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
code: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
col: React$DetailedHTMLFactory<React$ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
colgroup: React$DetailedHTMLFactory<React$ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
data: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
datalist: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>,
dd: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
del: React$DetailedHTMLFactory<React$DelHTMLAttributes<HTMLElement>, HTMLElement>,
details: React$DetailedHTMLFactory<React$DetailsHTMLAttributes<HTMLElement>, HTMLElement>,
dfn: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
dialog: React$DetailedHTMLFactory<React$DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>,
div: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
dl: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLDListElement>, HTMLDListElement>,
dt: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
em: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
embed: React$DetailedHTMLFactory<React$EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>,
fieldset: React$DetailedHTMLFactory<React$FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>,
figcaption: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
figure: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
footer: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
form: React$DetailedHTMLFactory<React$FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
h1: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h2: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h3: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h4: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h5: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
h6: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
head: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLHeadElement>,
header: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
hgroup: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
hr: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
html: React$DetailedHTMLFactory<React$HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>,
i: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
iframe: React$DetailedHTMLFactory<React$IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
img: React$DetailedHTMLFactory<React$ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
input: React$DetailedHTMLFactory<React$InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
ins: React$DetailedHTMLFactory<React$InsHTMLAttributes<HTMLModElement>, HTMLModElement>,
kbd: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
keygen: React$DetailedHTMLFactory<React$KeygenHTMLAttributes<HTMLElement>, HTMLElement>,
label: React$DetailedHTMLFactory<React$LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
legend: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>,
li: React$DetailedHTMLFactory<React$LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
link: React$DetailedHTMLFactory<React$LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
main: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
map: React$DetailedHTMLFactory<React$MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>,
mark: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
menu: React$DetailedHTMLFactory<React$MenuHTMLAttributes<HTMLElement>, HTMLElement>,
menuitem: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
meta: React$DetailedHTMLFactory<React$MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>,
meter: React$DetailedHTMLFactory<React$MeterHTMLAttributes<HTMLElement>, HTMLElement>,
nav: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
noscript: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
object: React$DetailedHTMLFactory<React$ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>,
ol: React$DetailedHTMLFactory<React$OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
optgroup: React$DetailedHTMLFactory<React$OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>,
option: React$DetailedHTMLFactory<React$OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
output: React$DetailedHTMLFactory<React$OutputHTMLAttributes<HTMLElement>, HTMLElement>,
p: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
param: React$DetailedHTMLFactory<React$ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>,
picture: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
pre: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
progress: React$DetailedHTMLFactory<React$ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>,
q: React$DetailedHTMLFactory<React$QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
rp: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
rt: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
ruby: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
s: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
samp: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
script: React$DetailedHTMLFactory<React$ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>,
section: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
select: React$DetailedHTMLFactory<React$SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
small: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
source: React$DetailedHTMLFactory<React$SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>,
span: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
strong: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
style: React$DetailedHTMLFactory<React$StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>,
sub: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
summary: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
sup: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
table: React$DetailedHTMLFactory<React$TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
tbody: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
td: React$DetailedHTMLFactory<React$TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
textarea: React$DetailedHTMLFactory<React$TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
tfoot: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
th: React$DetailedHTMLFactory<React$ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>,
thead: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
time: React$DetailedHTMLFactory<React$TimeHTMLAttributes<HTMLElement>, HTMLElement>,
title: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>,
tr: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>,
track: React$DetailedHTMLFactory<React$TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>,
u: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
ul: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
"var": React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
video: React$DetailedHTMLFactory<React$VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
wbr: React$DetailedHTMLFactory<React$HTMLAttributes<HTMLElement>, HTMLElement>,
webview: React$DetailedHTMLFactory<React$WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>
} 

declare interface React$ReactSVG {
animate: React$SVGFactory,
circle: React$SVGFactory,
clipPath: React$SVGFactory,
defs: React$SVGFactory,
desc: React$SVGFactory,
ellipse: React$SVGFactory,
feBlend: React$SVGFactory,
feColorMatrix: React$SVGFactory,
feComponentTransfer: React$SVGFactory,
feComposite: React$SVGFactory,
feConvolveMatrix: React$SVGFactory,
feDiffuseLighting: React$SVGFactory,
feDisplacementMap: React$SVGFactory,
feDistantLight: React$SVGFactory,
feDropShadow: React$SVGFactory,
feFlood: React$SVGFactory,
feFuncA: React$SVGFactory,
feFuncB: React$SVGFactory,
feFuncG: React$SVGFactory,
feFuncR: React$SVGFactory,
feGaussianBlur: React$SVGFactory,
feImage: React$SVGFactory,
feMerge: React$SVGFactory,
feMergeNode: React$SVGFactory,
feMorphology: React$SVGFactory,
feOffset: React$SVGFactory,
fePointLight: React$SVGFactory,
feSpecularLighting: React$SVGFactory,
feSpotLight: React$SVGFactory,
feTile: React$SVGFactory,
feTurbulence: React$SVGFactory,
filter: React$SVGFactory,
foreignObject: React$SVGFactory,
g: React$SVGFactory,
image: React$SVGFactory,
line: React$SVGFactory,
linearGradient: React$SVGFactory,
marker: React$SVGFactory,
mask: React$SVGFactory,
metadata: React$SVGFactory,
path: React$SVGFactory,
pattern: React$SVGFactory,
polygon: React$SVGFactory,
polyline: React$SVGFactory,
radialGradient: React$SVGFactory,
rect: React$SVGFactory,
stop: React$SVGFactory,
svg: React$SVGFactory,
switch: React$SVGFactory,
symbol: React$SVGFactory,
text: React$SVGFactory,
textPath: React$SVGFactory,
tspan: React$SVGFactory,
use: React$SVGFactory,
view: React$SVGFactory
} 

declare type React$ReactDOM = {} & React$ReactHTML & React$ReactSVG


declare type React$Validator<T> = PropTypes.Validator<T>;

declare type React$Requireable<T> = PropTypes.Requireable<T>;

declare type React$ValidationMap<T> = PropTypes.ValidationMap<T>;

declare type React$WeakValidationMap<T> = $ObjMapi<T, <K>(K) => /* Flow doesn't support conditional types, use $Call utility type */ any>;

declare interface React$ReactPropTypes {
any: typeof PropTypes.any,
array: typeof PropTypes.array,
bool: typeof PropTypes.bool,
func: typeof PropTypes.func,
number: typeof PropTypes.number,
object: typeof PropTypes.object,
string: typeof PropTypes.string,
node: typeof PropTypes.node,
element: typeof PropTypes.element,
instanceOf: typeof PropTypes.instanceOf,
oneOf: typeof PropTypes.oneOf,
oneOfType: typeof PropTypes.oneOfType,
arrayOf: typeof PropTypes.arrayOf,
objectOf: typeof PropTypes.objectOf,
shape: typeof PropTypes.shape,
exact: typeof PropTypes.exact
} 

declare interface React$ReactChildren {
map<T, C>(children: C | C[], fn: (child: C, index: number) => T): T[],
forEach<C>(children: C | C[], fn: (child: C, index: number) => void): void,
count(children: any): number,
only<C>(
children: C): /* Flow doesn't support conditional types, use $Call utility type */ any,
toArray<C>(children: C | C[]): C[]
} 

declare interface React$AbstractView {
styleMedia: StyleMedia,
document: Document
} 

declare interface React$Touch {
identifier: number,
target: EventTarget,
screenX: number,
screenY: number,
clientX: number,
clientY: number,
pageX: number,
pageY: number
} 

declare interface React$TouchList {
[index: number]: React$Touch,
length: number,
item(index: number): React$Touch,
identifiedTouch(identifier: number): React$Touch
} 

declare interface React$ErrorInfo {

/**
 * Captures which component contained the exception, and its ancestors.
 */
componentStack: string
} 
	declare type IsExactlyAny<T> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare type MergePropTypes<P, T> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare type Defaultize<P, D> = /* Flow doesn't support conditional types, use $Call utility type */ any;
	declare type ReactManagedAttributes<C, P> = /* Flow doesn't support conditional types, use $Call utility type */ any;
    }
