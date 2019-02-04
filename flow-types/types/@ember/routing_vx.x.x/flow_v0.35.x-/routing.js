declare module '@ember/routing' {
        declare export {
          Route
        }from '@ember/routing/route';

	declare export {
          Router
        }from '@ember/routing/router';

	import typeof RouterService from '@ember/routing/router-service';

	
	
	declare interface Registry {
"router": RouterService
} 
    }
