declare module "lls" {
  declare interface LargeLocalStorageInterfaces$LargeLocalStorageService {
    new(
      options: LargeLocalStorageInterfaces$Options
    ): LargeLocalStorageInterfaces$LargeLocalStorageService;
    initialized: LargeLocalStorageInterfaces$Promise<number>;

    /**
     * Gets all of the attachments for a document.
     */
    getAllAttachments(
      docKey?: string
    ): LargeLocalStorageInterfaces$Promise<LargeLocalStorageInterfaces$Entry[]>;

    /**
     * Gets all attachments URLs for a document.
     */
    getAllAttachmentURLs(
      docKey?: string
    ): LargeLocalStorageInterfaces$Promise<LargeLocalStorageInterfaces$Entry[]>;

    /**
     * Get the attachment identified by attachKey
     */
    getAttachment(attachKey: string): LargeLocalStorageInterfaces$Promise<any>;

    /**
     * Get the attachment identified by docKey and attachKey
     */
    getAttachment(
      docKey: string,
      attachKey: string
    ): LargeLocalStorageInterfaces$Promise<any>;

    /**
     * Get the URL for a given attachment.
     */
    getAttachmentURL(
      attachKey: string
    ): LargeLocalStorageInterfaces$Promise<string>;

    /**
     * Get the URL for a given attachment.
     */
    getAttachmentURL(
      docKey: string,
      attachKey: string
    ): LargeLocalStorageInterfaces$Promise<string>;

    /**
     * Returns the actual capacity of the storage or -1 if it is unknown.
     */
    getCapacity(): number;

    /**
     * Get the contents of a document identified by docKey
     */
    getContents(docKey: string): LargeLocalStorageInterfaces$Promise<any>;

    /**
     * List all attachments under a given key. List all documents if no key is provided.
     */
    ls(docKey?: string): LargeLocalStorageInterfaces$Promise<string[]>;

    /**
     * Whether or not LLS is ready to store data. The initialized property can be used to await initialization.
     */
    ready(): boolean;

    /**
     * Revoke the attachment URL as required by the underlying storage system.
     */
    revokeAttachmentURL(url: string): void;

    /**
     * Remove the specified document and all of its attachments.
     */
    rm(docKey?: string): LargeLocalStorageInterfaces$Promise<any>;

    /**
     * Remove an attachment from a document.
     */
    rmAttachment(
      docKey: string,
      attachKey: string
    ): LargeLocalStorageInterfaces$Promise<void>;

    /**
     * Set an attachment for a given document. Identified by attachKey.
     */
    setAttachment(
      attachKey: string,
      attachment: any
    ): LargeLocalStorageInterfaces$Promise<void>;

    /**
     * Set an attachment for a given document. Identified by docKey and attachKey.
     */
    setAttachment(
      docKey: string,
      attachKey: string,
      attachment: any
    ): LargeLocalStorageInterfaces$Promise<void>;

    /**
     * Set the contents identified by docKey to data. The document will be created if it does not exist.
     */
    setContents(
      docKey: string,
      data: any
    ): LargeLocalStorageInterfaces$Promise<void>;
  }

  declare interface LargeLocalStorageInterfaces$Options {
    /**
     * Desired capacity in bytes.
     */
    size: number;

    /**
     * Optional name for your LLS database. Defaults to lls. This is the name given to the underlying IndexedDB or WebSQL DB or FSAPI Folder. LLS's with different names are independent.
     */
    name?: string;

    /**
     * Force LLS to use a specific storage implementation: 'IndexedDB' or 'WebSQL' or 'FilesystemAPI'.
     */
    forceProvider?: string;
  }

  declare interface LargeLocalStorageInterfaces$Entry {
    data: any;
    docKey: string;
    attachKey: string;
    url: string;
  }

  declare interface LargeLocalStorageInterfaces$Promise<T> {
    then<U>(
      onFulfilled?: (value: T) => U | LargeLocalStorageInterfaces$Promise<U>,
      onRejected?: (error: any) => U | LargeLocalStorageInterfaces$Promise<U>
    ): LargeLocalStorageInterfaces$Promise<U>;
    then<U>(
      onFulfilled?: (value: T) => U | LargeLocalStorageInterfaces$Promise<U>,
      onRejected?: (error: any) => void
    ): LargeLocalStorageInterfaces$Promise<U>;
    catch<U>(
      onRejected?: (error: any) => U | LargeLocalStorageInterfaces$Promise<U>
    ): LargeLocalStorageInterfaces$Promise<U>;
  }
  declare var LargeLocalStorage: LargeLocalStorageInterfaces$LargeLocalStorageInterfaces$LargeLocalStorageService;
  declare module.exports: typeof LargeLocalStorage;
}
