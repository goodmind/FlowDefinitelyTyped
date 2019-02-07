declare module 'vuelidate' {
        import './vue';

	import './lib/validators';

	import type {
          Vuelidate
        } from './vuelidate';

	declare export default typeof Vuelidate

	declare export {
        validationMixin,Validation
      }from './vuelidate';

    }
