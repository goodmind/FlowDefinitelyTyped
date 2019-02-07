declare module "react-avatar-editor" {
  import typeof * as React from "react";

  declare export interface ImageState {
    height: number;
    width: number;
    x: number;
    y: number;
    resource: ImageData;
  }
  declare export interface CroppedRect {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  declare export interface AvatarEditorProps {
    image: string | File;
    width?: number;
    height?: number;
    border?: number | number[];
    borderRadius?: number;
    color?: number[];
    style?: { [key: string]: any };
    scale?: number;
    position?: { [key: string]: any };
    rotate?: number;
    crossOrigin?: string;
    disableDrop?: boolean;
    onDropFile?: (event: DragEvent) => void;
    onLoadFailure?: (event: Event) => void;
    onLoadSuccess?: (imgInfo: ImageState) => void;
    onImageReady?: (event: Event) => void;
    onMouseUp?: () => void;
    onMouseMove?: (event: Event) => void;
    onImageChange?: () => void;
    onPositionChange?: () => void;
  }
  declare export default class AvatarEditor
    mixins React.Component<AvatarEditorProps, any> {
    getImage(): HTMLCanvasElement;
    getImageScaledToCanvas(): HTMLCanvasElement;
    getCroppingRect(): CroppedRect;
  }
}
