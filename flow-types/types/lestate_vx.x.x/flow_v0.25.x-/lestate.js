declare module "lestate" {
  declare export interface LeState {
    set(newValue: {}): [
      {
        id: number,
        state: {}
      }
    ];
    get(): any;
    insert(newValue: {}): void;
    getDescription(): {};
    createListener(options: {
      id: number,
      selector(state: any): {},
      force?: boolean
    }): void;
  }
  declare export function createState(props?: {
    initialState: {}
  }): LeState;
}
