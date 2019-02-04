declare module 'react-helmet-async' {
        import typeof * as React from 'react';

	import type Helmet, {
          HelmetData
        } from 'react-helmet';

	declare export default typeof Helmet

	declare export interface PopulatedContext {
helmet: HelmetData
} 
	declare interface ProviderProps {
context?: {}
} 
	declare export class HelmetProvider mixins React.Component<ProviderProps> {}
    }
