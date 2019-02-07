declare module "user-event" {
  declare export interface UserOpts {
    allAtOnce?: boolean;
    delay?: number;
  }
  declare var userEvent: {
    click: (element: Element | Window) => void,
    dblClick: (element: Element | Window) => void,
    type: (
      element: Element | Window,
      text: string,
      userOpts?: UserOpts
    ) => Promise<void>
  };
  declare export default typeof userEvent;
}
