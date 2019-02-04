declare module 'react-image-gallery' {
        import typeof * as React from 'react';

	declare export interface ReactImageGalleryItem {
original?: string,
thumbnail?: string,
originalClass?: string,
thumbnailClass?: string,
renderItem(item?: ReactImageGalleryItem): React.ReactNode,
renderThumbInner(item?: ReactImageGalleryItem): React.ReactNode,
originalAlt?: string,
thumbnailAlt?: string,
originalTitle?: string,
thumbnailTitle?: string,
thumbnailLabel?: string,
description?: string,
srcSet?: string,
sizes?: string
} 
	declare export interface ReactImageGalleryProps {
items: ReactImageGalleryItem[],
infinite?: boolean,
lazyLoad?: boolean,
showNav?: boolean,
showThumbnails?: boolean,
thumbnailPosition?: "top" | "right" | "bottom" | "left",
showFullscreenButton?: boolean,
useBrowserFullscreen?: boolean,
showPlayButton?: boolean,
showBullets?: boolean,
showIndex?: boolean,
autoPlay?: boolean,
disableThumbnailScroll?: boolean,
slideOnThumbnailHover?: boolean,
disableArrowKeys?: boolean,
disableSwipe?: boolean,
defaultImage?: string,
indexSeparator?: string,
slideDuration?: number,
swipingTransitionDuration?: number,
slideInterval?: number,
flickThreshold?: number,
swipeThreshold?: number,
stopPropagation?: boolean,
preventDefaultTouchmoveEvent?: boolean,
startIndex?: number,
onImageError?: (event: React.ReactEventHandler<HTMLImageElement>) => void,
onThumbnailError?: (event: React.ReactEventHandler<HTMLImageElement>) => void,
onThumbnailClick?: (event: React.MouseEventHandler<HTMLAnchorElement>, index: number) => void,
onImageLoad?: (event: React.ReactEventHandler<HTMLImageElement>) => void,
onSlide?: (currentIndex: number) => void,
onScreenChange?: (fullScreenElement: Element) => void,
onPause?: (currentIndex: number) => void,
onPlay?: (currentIndex: number) => void,
onClick?: (event: React.MouseEventHandler<HTMLDivElement>) => void,
onTouchMove?: (event: React.TouchEventHandler<HTMLDivElement>) => void,
onTouchEnd?: (event: React.TouchEventHandler<HTMLDivElement>) => void,
onTouchStart?: (event: React.TouchEventHandler<HTMLDivElement>) => void,
onMouseOver?: (event: React.MouseEventHandler<HTMLDivElement>) => void,
onMouseLeave?: (event: React.MouseEventHandler<HTMLDivElement>) => void,
renderCustomControls?: () => React.ReactNode,
renderItem?: (item: ReactImageGalleryItem) => React.ReactNode,
renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode,
renderLeftNav?: (
onClick: React.MouseEventHandler<HTMLElement>,
isDisabled: boolean) => React.ReactNode,
renderRightNav?: (
onClick: React.MouseEventHandler<HTMLElement>,
isDisabled: boolean) => React.ReactNode,
renderPlayPauseButton?: (
onClick: React.MouseEventHandler<HTMLElement>,
isPlaying: boolean) => React.ReactNode,
renderFullscreenButton?: (
onClick: React.MouseEventHandler<HTMLElement>,
isFullscreen: boolean) => React.ReactNode
} 
	declare class ReactImageGallery mixins React.Component<ReactImageGalleryProps> {
play: (callback?: boolean) => void;
pause: (callback?: boolean) => void;
fullScreen: () => void;
exitFullScreen: () => void;
slideToIndex: (index: number) => void;
getCurrentIndex: () => number
}
	declare export default typeof ReactImageGallery

    }
