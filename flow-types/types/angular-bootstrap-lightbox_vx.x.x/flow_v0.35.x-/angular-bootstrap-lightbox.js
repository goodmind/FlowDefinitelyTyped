declare module 'angular-bootstrap-lightbox' {
        declare export interface lightbox$ILightboxImageInfo {
url: string,
width: number,
height: number,
thumbUrl?: string,
caption?: string
} 

declare export interface lightbox$IImageDimensionLimits {
minWidth?: number,
minHeight?: number,
maxWidth?: number,
maxHeight?: number
} 

declare export interface lightbox$IImageDimensionParameter {
windowWidth: number,
windowHeight: number,
imageWidth: number,
imageHeight: number
} 

declare export interface lightbox$IModalDimensionsParameter {
windowWidth: number,
windowHeight: number,
imageDisplayWidth: number,
imageDisplayHeight: number
} 

declare export interface lightbox$IModalDimensions {
width: number,
height: number
} 

declare export interface lightbox$ILightbox {
openModal(images: lightbox$ILightboxImageInfo[], index: number): void
} 

declare export interface lightbox$ILightBoxProvider {
templateUrl: string,
calculateImageDimensionLimits: (
dimensions: lightbox$IImageDimensionParameter) => lightbox$IImageDimensionLimits,
calculateModalDimensions: (dimensions: lightbox$IModalDimensionsParameter) => lightbox$IModalDimensions
} 
    }
