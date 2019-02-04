import typeof * as React from 'react';
import type {
          History
        } from 'history';
export interface StepObject {
id: string
} export interface WizardContext {
step: StepObject,
steps: StepObject[],
history: History,
next: () => void,
previous: () => void,
go: (n: number) => void,
push: (id?: string) => void,
replace: (id?: string) => void
} export interface WizardComponentProps {
wizard: WizardContext
} declare export function withWizard<P>(
component: React.ComponentType<P & WizardComponentProps>): React.ComponentType<P>
export interface WizardProps {
onNext?: (wizard: WizardContext) => void,
render?: (wizard: WizardContext) => React.ReactNode,
history?: History,
basename?: string
} declare export var Wizard: React.ComponentType<WizardProps>;export interface StepsProps {
step?: StepObject
} declare export var Steps: React.ComponentType<StepsProps>;export type StepProps = StepObject & ({
render?: (wizard: WizardContext) => React.ReactNode
} | {
children: (wizard: WizardContext) => React.ReactNode
});
/**
 * In addition to id, any additional props added to <Step> will be available on each step object.
 * This can be used to add names, descriptions, or other metadata to each step.
 * To use this feature globally in your project you need to augment the StepObject
 * @example declare module "react-albus" {
interface StepObject {
propName: string;
}
}
 */
declare export var Step: React.ComponentType<StepProps>;