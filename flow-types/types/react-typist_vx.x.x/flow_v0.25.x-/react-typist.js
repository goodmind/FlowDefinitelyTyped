declare module "react-typist" {
  import typeof * as React from "react";

  declare var TreeView: typeof npm$namespace$TreeView;

  declare var npm$namespace$TreeView: {
    Delay: typeof TreeView$Delay,
    Backspace: typeof TreeView$Backspace
  };
  declare interface TreeView$CursorProps {
    show?: boolean;
    blink?: boolean;
    element?: string;
    hideWhenDone?: boolean;
    hideWhenDoneDelay?: number;
  }

  declare interface TreeView$CurrentTextProps {
    line: string;
    lineIdx: number;
    character: string;
    charIdx: number;
    defDelayGenerator: (mn: number, st: number) => (...params: any) => number;
  }

  declare interface TreeView$DelayProps {
    ms: number;
  }

  declare class TreeView$Delay mixins React.Component<TreeView$DelayProps> {}

  declare interface TreeView$BackSpaceProps {
    count?: number;
    delay?: number;
  }

  declare class TreeView$Backspace
    mixins React.Component<TreeView$BackSpaceProps> {}
  declare export interface TreeViewProps {
    className?: string;
    avgTypingDelay?: number;
    stdTypingDelay?: number;
    startDelay?: number;
    cursor?: TreeView$CursorProps;
    onCharacterTyped?: (char: string, charIndex: number) => void;
    onLineTyped?: (line: string, lineIndex: number) => void;
    onTypingDone?: () => void;
    delayGenerator?: (
      mean: number,
      std: number,
      current: TreeView$CurrentTextProps
    ) => number;
  }
  declare export class TreeView mixins React.Component<TreeViewProps> {}
  declare export default typeof TreeView;
}
