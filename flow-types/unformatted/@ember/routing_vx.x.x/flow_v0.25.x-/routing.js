declare module '@ember/routing' {
        declare export {
        default as Route
      }from '@ember/routing/route';

	declare export {
        default as Router
      }from '@ember/routing/router';

	import typeof RouterService from '@ember/routing/router-service';

	import '@ember/routing/-private/router-dsl';

	import '@ember/routing/-private/transition';

	declare interface Registry {
"router": RouterService
} 
    }
