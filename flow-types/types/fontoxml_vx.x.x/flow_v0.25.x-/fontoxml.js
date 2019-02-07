declare module "fontoxml" {
  declare export interface fontoxml$IInvocator {
    documentIds: string[];
    cmsBaseUrl: string;
    editSessionToken: string;
    user?: fontoxml$IUserInfo;
    workflow?: fontoxml$IWorkflowInfo;
    autosave?: boolean;
    heartbeat?: number;
  }

  declare export interface fontoxml$IWorkflowInfo {
    id: string;
    displayName: string;
  }

  declare export type fontoxml$IUserInfo = {
    roleId: string
  } & fontoxml$IWorkflowInfo;

  declare export interface fontoxml$IFontoMessageEventData {
    command: string;
    type: string;
    scope: com$fontoxml.fontoxml$IInvocator;
    metadata: any;
  }
}
