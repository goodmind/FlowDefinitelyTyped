declare module "react-kawaii" {
  import typeof * as React from "react";

  declare export type KawaiiMood =
    | "sad"
    | "shocked"
    | "happy"
    | "blissful"
    | "lovestruck"
    | "excited"
    | "ko";
  declare export interface KawaiiProps {
    size?: number;
    color?: string;
    mood?: KawaiiMood;
  }
  declare export var SpeechBubble: React.ComponentType<KawaiiProps>;
  declare export var Mug: React.ComponentType<KawaiiProps>;
  declare export var Browser: React.ComponentType<KawaiiProps>;
  declare export var Ghost: React.ComponentType<KawaiiProps>;
  declare export var Cat: React.ComponentType<KawaiiProps>;
  declare export var IceCream: React.ComponentType<KawaiiProps>;
  declare export var CreditCard: React.ComponentType<KawaiiProps>;
  declare export var File: React.ComponentType<KawaiiProps>;
  declare export var Backpack: React.ComponentType<KawaiiProps>;
  declare export var Planet: React.ComponentType<KawaiiProps>;
}
