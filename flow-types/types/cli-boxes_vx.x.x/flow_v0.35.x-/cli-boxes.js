declare module 'cli-boxes' {
        declare module.exports: typeof boxes

	declare var boxes: boxes$boxes$Boxes;
	declare type boxes$BoxNames = "single"
| "double"
| "round"
| "single-double"
| "double-single"
| "classic";

declare type boxes$Boxes = Record<boxes$BoxNames, boxes$BoxDefinition>;

declare interface boxes$BoxDefinition {
topLeft: string,
topRight: string,
bottomRight: string,
bottomLeft: string,
vertical: string,
horizontal: string
} 
    }
