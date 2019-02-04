declare module 'wallpaper' {
        declare export function get(): Promise<string>

	declare export function set(imagePath: string, options?: WallpaperOptions): Promise<void>

	declare export interface WallpaperOptions {
scale?: "fill" | "fit" | "stretch" | "center"
} 
    }
