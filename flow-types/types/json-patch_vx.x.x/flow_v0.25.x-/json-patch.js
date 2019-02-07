declare module "json-patch" {
  declare var npm$namespace$jsonpatch: {
    apply: typeof jsonpatch$apply,
    compile: typeof jsonpatch$compile
  };
  declare type jsonpatch$OpPatch =
    | jsonpatch$AddPatch
    | jsonpatch$RemovePatch
    | jsonpatch$ReplacePatch
    | jsonpatch$MovePatch
    | jsonpatch$CopyPatch
    | jsonpatch$TestPatch;

  declare interface jsonpatch$Patch {
    path: string;
  }

  declare type jsonpatch$AddPatch = {
    op: "add",
    value: any
  } & jsonpatch$Patch;

  declare type jsonpatch$RemovePatch = {
    op: "remove"
  } & jsonpatch$Patch;

  declare type jsonpatch$ReplacePatch = {
    op: "replace",
    value: any
  } & jsonpatch$Patch;

  declare type jsonpatch$MovePatch = {
    op: "move",
    from: string
  } & jsonpatch$Patch;

  declare type jsonpatch$CopyPatch = {
    op: "copy",
    from: string
  } & jsonpatch$Patch;

  declare type jsonpatch$TestPatch = {
    op: "test",
    value: any
  } & jsonpatch$Patch;

  declare function jsonpatch$apply(
    document: any,
    patches: jsonpatch$OpPatch[]
  ): any;

  declare function jsonpatch$compile(
    patches: jsonpatch$OpPatch[]
  ): (document: any) => any;

  declare class jsonpatch$JSONPatchError mixins Error {}

  declare class jsonpatch$InvalidPointerError mixins Error {}

  declare class jsonpatch$InvalidPatchError mixins jsonpatch$JSONPatchError {}

  declare class jsonpatch$PatchConflictError mixins jsonpatch$JSONPatchError {}

  declare class jsonpatch$PatchTestFailed mixins Error {}
  declare module.exports: typeof jsonpatch;
}
