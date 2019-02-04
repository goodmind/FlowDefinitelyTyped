declare module 'react-dotdotdot' {
        import type {
          ComponentType
        } from 'react';

	declare interface DotDotDotProps {
clamp: number | string | boolean,
useNativeClamp?: boolean,
splitOnChars?: string[],
animate?: boolean,
truncationChar?: string,
truncationHTML?: string,
tagName?: string
} 
	declare var Dotdotdot: ComponentType<DotDotDotProps>;
	declare module.exports: typeof Dotdotdot

    }
