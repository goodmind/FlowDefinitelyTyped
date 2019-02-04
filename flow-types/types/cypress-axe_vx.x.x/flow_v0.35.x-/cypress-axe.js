declare module 'cypress-axe' {
        declare interface Cypress$Chainable<Subject> {
injectAxe(): void,
checkA11y(): void
} 
    }
