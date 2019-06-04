declare module "react-click-outside-hook" {
  declare export type HookReturnTuple = [
    (node?: Element | null) => void,
    boolean
  ];
  declare export function useClickOutside(): HookReturnTuple;
}
