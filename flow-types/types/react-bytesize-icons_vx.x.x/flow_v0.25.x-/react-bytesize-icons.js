declare module "react-bytesize-icons" {
  import typeof * as React from "react";

  declare export type StrokeLinejoin = "round" | "bevel" | "miter" | "inherit";
  declare export type StrokeLinecap = "round" | "butt" | "square" | "inherit";
  declare type BytesizeIconsProps = {
    width?: number,
    height?: number,
    strokeWidth?: string,
    strokeLinejoin?: StrokeLinejoin,
    strokeLinecap?: StrokeLinecap,
    color?: string
  } & React.Props<any>;

  declare export class BytesizeIconComponent
    mixins React.Component<BytesizeIconsProps> {}
  declare export class Activity mixins BytesizeIconComponent {}
  declare export class Alert mixins BytesizeIconComponent {}
  declare export class Archive mixins BytesizeIconComponent {}
  declare export class ArrowBottom mixins BytesizeIconComponent {}
  declare export class ArrowLeft mixins BytesizeIconComponent {}
  declare export class ArrowRight mixins BytesizeIconComponent {}
  declare export class ArrowTop mixins BytesizeIconComponent {}
  declare export class Backwards mixins BytesizeIconComponent {}
  declare export class Ban mixins BytesizeIconComponent {}
  declare export class Bell mixins BytesizeIconComponent {}
  declare export class Bookmark mixins BytesizeIconComponent {}
  declare export class Camera mixins BytesizeIconComponent {}
  declare export class CaretBottom mixins BytesizeIconComponent {}
  declare export class CaretLeft mixins BytesizeIconComponent {}
  declare export class CaretRight mixins BytesizeIconComponent {}
  declare export class CaretTop mixins BytesizeIconComponent {}
  declare export class Cart mixins BytesizeIconComponent {}
  declare export class Checkmark mixins BytesizeIconComponent {}
  declare export class ChevronBottom mixins BytesizeIconComponent {}
  declare export class ChevronLeft mixins BytesizeIconComponent {}
  declare export class ChevronRight mixins BytesizeIconComponent {}
  declare export class ChevronTop mixins BytesizeIconComponent {}
  declare export class Clock mixins BytesizeIconComponent {}
  declare export class Close mixins BytesizeIconComponent {}
  declare export class Code mixins BytesizeIconComponent {}
  declare export class Compose mixins BytesizeIconComponent {}
  declare export class Creditcard mixins BytesizeIconComponent {}
  declare export class Download mixins BytesizeIconComponent {}
  declare export class Send mixins BytesizeIconComponent {}
  declare export class Edit mixins BytesizeIconComponent {}
  declare export class Eject mixins BytesizeIconComponent {}
  declare export class EllipsisHorizontal mixins BytesizeIconComponent {}
  declare export class EllipsisVertical mixins BytesizeIconComponent {}
  declare export class End mixins BytesizeIconComponent {}
  declare export class Export mixins BytesizeIconComponent {}
  declare export class External mixins BytesizeIconComponent {}
  declare export class Book mixins BytesizeIconComponent {}
  declare export class Calendar mixins BytesizeIconComponent {}
  declare export class Print mixins BytesizeIconComponent {}
  declare export class Eye mixins BytesizeIconComponent {}
  declare export class File mixins BytesizeIconComponent {}
  declare export class Fire mixins BytesizeIconComponent {}
  declare export class Flag mixins BytesizeIconComponent {}
  declare export class FolderOpen mixins BytesizeIconComponent {}
  declare export class Folder mixins BytesizeIconComponent {}
  declare export class Forwards mixins BytesizeIconComponent {}
  declare export class Gift mixins BytesizeIconComponent {}
  declare export class Github mixins BytesizeIconComponent {}
  declare export class Heart mixins BytesizeIconComponent {}
  declare export class Home mixins BytesizeIconComponent {}
  declare export class Import mixins BytesizeIconComponent {}
  declare export class Inbox mixins BytesizeIconComponent {}
  declare export class Info mixins BytesizeIconComponent {}
  declare export class Lightning mixins BytesizeIconComponent {}
  declare export class Link mixins BytesizeIconComponent {}
  declare export class Location mixins BytesizeIconComponent {}
  declare export class Lock mixins BytesizeIconComponent {}
  declare export class Mail mixins BytesizeIconComponent {}
  declare export class Menu mixins BytesizeIconComponent {}
  declare export class Message mixins BytesizeIconComponent {}
  declare export class Music mixins BytesizeIconComponent {}
  declare export class Mute mixins BytesizeIconComponent {}
  declare export class Options mixins BytesizeIconComponent {}
  declare export class Paperclip mixins BytesizeIconComponent {}
  declare export class Pause mixins BytesizeIconComponent {}
  declare export class Photo mixins BytesizeIconComponent {}
  declare export class Plus mixins BytesizeIconComponent {}
  declare export class Minus mixins BytesizeIconComponent {}
  declare export class Play mixins BytesizeIconComponent {}
  declare export class Portfolio mixins BytesizeIconComponent {}
  declare export class Reload mixins BytesizeIconComponent {}
  declare export class Reply mixins BytesizeIconComponent {}
  declare export class Search mixins BytesizeIconComponent {}
  declare export class Settings mixins BytesizeIconComponent {}
  declare export class Star mixins BytesizeIconComponent {}
  declare export class Start mixins BytesizeIconComponent {}
  declare export class Tag mixins BytesizeIconComponent {}
  declare export class Trash mixins BytesizeIconComponent {}
  declare export class Twitter mixins BytesizeIconComponent {}
  declare export class Unlock mixins BytesizeIconComponent {}
  declare export class Upload mixins BytesizeIconComponent {}
  declare export class User mixins BytesizeIconComponent {}
  declare export class Video mixins BytesizeIconComponent {}
  declare export class Volume mixins BytesizeIconComponent {}
  declare export class Work mixins BytesizeIconComponent {}
}
