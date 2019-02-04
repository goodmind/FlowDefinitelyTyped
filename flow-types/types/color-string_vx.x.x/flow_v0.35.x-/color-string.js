declare module 'color-string' {
        declare export type Color = [number, number, number, number];
	declare export interface ColorDescriptor {
model: "rgb" | "hsl" | "hwb",
value: Color
} 
	declare export function get(colorString: string): ColorDescriptor | null

	
      declare var npm$namespace$get: {
        hsl: typeof get$hsl,
hwb: typeof get$hwb,
rgb: typeof get$rgb,
        
      }
declare function get$hsl(colorString: string): Color | null


declare function get$hwb(colorString: string): Color | null


declare function get$rgb(colorString: string): Color | null

	
      declare var npm$namespace$to: {
        hex: typeof to$hex,
rgb: typeof to$rgb,
keyword: typeof to$keyword,
hsl: typeof to$hsl,
hwb: typeof to$hwb,
        
      }
declare function to$hex(...args: Array<number | number[]>): string


declare function to$rgb(...args: Array<number | number[]>): string



      declare var npm$namespace$rgb: {
        percent: typeof rgb$percent,
        
      }
declare function rgb$percent(...args: Array<number | number[]>): string


declare function to$keyword(...args: Array<number | number[]>): string


declare function to$hsl(...args: Array<number | number[]>): string


declare function to$hwb(...args: Array<number | number[]>): string

    }
