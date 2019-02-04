declare module 'ember-feature-flags' {
        import typeof Ember from 'ember';

	declare export default type Features = {
setup(features: {
[key: string]: boolean
}): void,
enable(feature: string): void,
disable(feature: string): void,
isEnabled(feature: string): boolean
} & Ember.Service

    }
