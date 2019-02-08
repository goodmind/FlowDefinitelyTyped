declare interface mgoAngularWizard$WizardHandler {
  wizard(name?: string): mgoAngularWizard$Wizard;
  addWizard(name: string, wizard: mgoAngularWizard$Wizard): void;
  removeWizard(name: string): void;
}

declare interface mgoAngularWizard$Wizard {
  next(nextHandler?: () => boolean): void;
  previous(): void;
  cancel: () => void;
  goTo(step: number | string): void;
  finish(): void;
  reset: () => void;
  addStep: (step: mgoAngularWizard$WzStep) => void;
  currentStep: () => mgoAngularWizard$WzStep;
  currentStepNumber(): number;
  currentStepDescription: () => string;
  currentStepTitle: () => string;
  getEnabledSteps(): mgoAngularWizard$WzStep[];
}

declare interface mgoAngularWizard$WzStep {
  canenter: (...args: any[]) => boolean;
  canexit: (...args: any[]) => boolean;
  description: string;
  selected: boolean;
  title: string;
  wzData: any;
  wzTitle: string;
}
declare module "angular" {
}
declare module "angular-wizard" {
  import typeof * as angular from "angular";
}
