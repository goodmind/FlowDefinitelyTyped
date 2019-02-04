declare module 'falcor-http-datasource' {
        import typeof * as FalcorModel from 'falcor';

	
/**
 * A HttpDataSource object is a {@link DataSource} can be used to retrieve data from a remote JSONGraph object using the browser's XMLHttpRequest.
 */
declare class FalcorHttpDataSource$XMlHttpSource mixins FalcorModel.DataSource {
constructor(jsonGraphUrl: string, config?: any): this
}
	declare export {
          XMlHttpSource
        }

	declare export default typeof FalcorHttpDataSource$XMlHttpSource

    }
