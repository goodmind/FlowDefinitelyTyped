declare module 'react-document-meta' {
        import typeof * as React from 'react';

	declare export interface DocumentMetaProps {
+title?: string,
+description?: string,
+canonical?: string
} 
	declare class DocumentMeta mixins React.Component<DocumentMetaProps> {}
	declare export default typeof DocumentMeta

    }
