declare module "d3" {
  declare export function slider(): Slider;

  declare interface Slider {
    (sel: d3.Selection<any>): void;
    min(): number;
    min(val: number): Slider;
    max(): number;
    max(val: number): Slider;
    step(): number;
    step(val: number): Slider;
    animate(): boolean | number;
    animate(val: boolean | number): Slider;
    orientation(): string;
    orientation(val: string): Slider;
    axis(): boolean | d3.svg.Axis;
    axis(val: boolean | d3.svg.Axis): Slider;
    margin(): number;
    margin(val: number): Slider;
    value(): any;
    value(val: any): Slider;
    snap(): boolean;
    snap(val: boolean): Slider;
    scale(): any;
    scale(val: any): Slider;
    on(
      evt: "slide" | "slideend",
      callback: (evt: any, val: any) => void
    ): Slider;
  }
}
declare module "d3.slider" {
  import typeof * as d3 from "d3";
}
