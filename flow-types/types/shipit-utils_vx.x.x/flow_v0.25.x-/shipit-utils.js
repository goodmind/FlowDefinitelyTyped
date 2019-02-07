declare module "shipit-utils" {
  declare export type GruntOrShipit = typeof shipit | {};
  declare export type EmptyCallback = () => void;
  declare export function equalValues(value: any[]): void;

  declare export function getShipit(
    gruntOrShipit: GruntOrShipit
  ): typeof shipit;

  declare export function getShipit(
    gruntOrShipit: GruntOrShipit
  ): typeof shipit;

  declare export function registerTask(
    gruntOrShipit: GruntOrShipit,
    name: string,
    dependenciesOrTask: string[] | EmptyCallback
  ): typeof shipit;

  declare export function runTask(gruntOrShipit: {}): void;
}
