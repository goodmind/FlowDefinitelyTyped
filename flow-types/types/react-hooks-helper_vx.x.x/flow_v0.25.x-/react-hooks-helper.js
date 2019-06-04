declare module "react-hooks-helper" {
  declare export interface NavigationProps {
    next: () => void;
    previous?: () => void;
    go?: (step: number | string) => void;
    play?: () => void;
    pause?: () => void;
  }
  declare export interface UseStepParams {
    initialStep?: number;
    autoAdvanceDuration?: number;
    steps: string[] | number;
  }
  declare export interface UseStepResponse {
    autoAdvanceDuration: number;
    isPaused: boolean;
    index: number;
    step: number;
    navigation: NavigationProps;
  }
  declare export function useStep(params: UseStepParams): UseStepResponse;

  declare export interface FormTarget {
    target: {
      name: string,
      value: any,
      type?: string,
      checked?: boolean
    };
  }
  declare export type SetForm = (
    event:
      | React$SyntheticEvent<HTMLInputElement>
      | React$ChangeEvent<HTMLInputElement>
      | FormTarget
  ) => void;
  declare export function useForm<T>(defaultFormConfig: T): [T, SetForm];
}
