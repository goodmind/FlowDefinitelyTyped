declare module 'gulp-template' {
        import typeof * as _ from 'lodash';

	import typeof * as stream from 'stream';

	declare function gulpTemplate(data: any, options: _.TemplateOptions): stream.Transform

	declare var gulpTemplate: typeof npm$namespace$gulpTemplate;

      declare var npm$namespace$gulpTemplate: {
        precompile: typeof gulpTemplate$precompile,
        
        
        
        
      }
declare function gulpTemplate$precompile(options: _.TemplateOptions): stream.Transform

	declare export default typeof gulpTemplate

    }
