declare module "keypress.js" {
  declare export interface ListenerDefaults {
    keys: string;
    prevent_default: boolean;
    prevent_repeat: boolean;
    is_unordered: boolean;
    is_counting: boolean;
    is_exclusive: boolean;
    is_solitary: boolean;
    is_sequence: boolean;
  }
  declare export interface Combo {
    keys?: string;
    on_keydown?: (event?: KeyboardEvent, count?: number) => any;
    on_keyup?: (event?: KeyboardEvent) => any;
    on_release?: (event?: KeyboardEvent) => any;
    this?: Element;
    prevent_default?: boolean;
    prevent_repeat?: boolean;
    is_unordered?: boolean;
    is_counting?: boolean;
    is_exclusive?: boolean;
    is_sequence?: boolean;
    is_solitary?: boolean;
  }
  declare export class Listener {
    constructor(element?: Element, defaults?: ListenerDefaults): this;
    simple_combo(
      keys: string,
      on_keydown_callback: (event?: KeyboardEvent, count?: number) => any
    ): void;
    counting_combo(
      keys: string,
      on_count_callback: (event?: KeyboardEvent, count?: number) => any
    ): void;
    sequence_combo(
      keys: string,
      callback: (event?: KeyboardEvent, count?: number) => any
    ): void;
    register_combo(combo: Combo): Combo;
    unregister_combo(combo: Combo | string): void;
    register_many(combos: Combo[]): Combo[];
    unregister_many(combos: Combo[] | string[]): void;
    get_registered_combos(): Combo[];
    destroy(): void;
    reset(): void;
    listen(): void;
    stop_listening(): void;
  }
}
