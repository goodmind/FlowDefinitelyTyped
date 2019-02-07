declare module "cypress-axe" {
  declare interface Cypress$Chainable<Subject = any> {
    injectAxe(): void;
    checkA11y(): void;
  }
}
