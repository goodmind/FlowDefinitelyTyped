declare module "servicenow-london" {
  declare var GlideRecord: ScopedGlideRecord;
  declare var GlideRecordSecure: ScopedGlideRecord;
  declare var RP: RenderProperties;
  declare var current: ScopedGlideRecord;
  declare var email: GlideEmailOutbound;
  declare var g_processor: GlideScriptedProcessor;
  declare var g_request: GlideServletRequest;
  declare var g_response: GlideServletResponse;
  declare var gs: GlideSystem;
  declare var previous: ScopedGlideRecord;
}
