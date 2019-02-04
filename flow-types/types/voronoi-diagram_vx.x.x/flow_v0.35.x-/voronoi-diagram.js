declare module 'voronoi-diagram' {
        declare type voronoi$Point = number[];

declare type voronoi$Cell = number[];

declare interface voronoi$VoronoiDiagram {
cells: voronoi$Cell[],
positions: voronoi$Point[]
} 
	declare function voronoi(points: voronoi$voronoi$Point[]): voronoi$voronoi$VoronoiDiagram

	declare module.exports: typeof voronoi

    }
