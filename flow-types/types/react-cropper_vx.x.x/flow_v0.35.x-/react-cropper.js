declare module 'react-cropper' {
        import typeof * as cropperjs from 'cropperjs';

	import typeof * as React from 'react';

	declare type ReactCropperProps = cropperjs.CropperOptions & React.HTMLProps<HTMLImageElement>;
	declare class ReactCropper mixins React.Component<ReactCropperProps> {
on(eventname: string, callback: () => void): void
}
	declare export default typeof ReactCropper

    }
