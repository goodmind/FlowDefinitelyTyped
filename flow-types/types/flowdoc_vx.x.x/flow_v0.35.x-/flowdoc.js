declare module "flowdoc" {
    declare interface Flow$File {
        document: Flow$Document;
        settings: Flow$Settings;
        schemaVersion: Flow$SchemaVersion;
    }

    declare interface Flow$Document {
        id: string;
        name: string;
        type: $ElementType<Flow$Types, "DOCUMENT">;
        children: Flow$Page[];
    }

    declare type Flow$Page = {
        type: $ElementType<Flow$Types, "PAGE">,
        children: Array<
            | Flow$Screen
            | Flow$Image
            | Flow$Rectangle
            | Flow$Ellipse
            | Flow$Diamond
        >,
        backgroundColor: Flow$Color,
        startNodeID?: string
    } & Node;

    declare type Flow$Screen = {
        type: $ElementType<Flow$Types, "SCREEN">,
        children: Flow$Layer[],
        connections?: Flow$Connection[]
    } & Graphic;

    declare type Flow$Image = {
        type: $ElementType<Flow$Types, "IMAGE">,
        connections?: Flow$Connection[]
    } & Graphic;

    declare type Flow$Rectangle = {
        type: $ElementType<Flow$Types, "RECTANGLE">
    } & Shape;

    declare type Flow$Ellipse = {
        type: $ElementType<Flow$Types, "ELLIPSE">
    } & Shape;

    declare type Flow$Diamond = {
        type: $ElementType<Flow$Types, "DIAMOND">
    } & Shape;

    declare type Flow$Layer = {
        type:
            | $ElementType<Flow$Types, "LAYER">
            | $ElementType<Flow$Types, "HOTSPOT">,
        position: Flow$Point,
        size: Flow$Size,
        connections?: Flow$Connection[]
    } & Node;

    declare interface Flow$Connection {
        nodeID: string;
    }

    declare interface Flow$Settings {
        grid?: [number, number];
    }

    declare interface Flow$Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    declare interface Flow$FileAsset {
        fileName: string;
        dirPath: string;
    }

    declare type Flow$URLAsset = string;

    declare interface Flow$Point {
        x: number;
        y: number;
    }

    declare interface Flow$Size {
        h: number;
        w: number;
    }

    declare interface Flow$Types {
        DOCUMENT: "DOCUMENT";
        PAGE: "PAGE";
        SCREEN: "SCREEN";
        IMAGE: "IMAGE";
        RECTANGLE: "RECT";
        ELLIPSE: "ELLIPSE";
        DIAMOND: "DIAMOND";
        HOTSPOT: "HOTSPOT";
        LAYER: "LAYER";
    }

    declare type Flow$SchemaVersion = 1;
    declare type NodeType =
        | "DOCUMENT"
        | "PAGE"
        | "SCREEN"
        | "IMAGE"
        | "RECT"
        | "ELLIPSE"
        | "DIAMOND"
        | "HOTSPOT"
        | "LAYER";
    declare interface Node {
        id: string;
        name: string;
        type: NodeType;
    }
    declare type Shape = {
        position: Flow$Flow$Point,
        size: Flow$Flow$Size,
        connections?: Flow$Flow$Connection[]
    } & Node;

    declare type Graphic = {
        position: Flow$Flow$Point,
        size: Flow$Flow$Size,
        source: Flow$Flow$FileAsset | Flow$Flow$URLAsset
    } & Node;
}
