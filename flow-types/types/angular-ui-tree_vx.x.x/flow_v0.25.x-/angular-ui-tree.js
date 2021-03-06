declare module "angular-ui-tree" {
  declare interface AngularUITree$IEventSourceInfo {
    cloneModel: any;
    index: number;
    nodeScope: AngularUITree$ITreeNodeScope;
    nodesScope: AngularUITree$ITreeNodeScope;
  }

  declare interface AngularUITree$IPosition {
    dirAx: number;
    dirX: number;
    dirY: number;
    distAxX: number;
    distAxY: number;
    distX: number;
    distY: number;
    lastDirX: number;
    lastDirY: number;
    lastX: number;
    lastY: number;
    moving: boolean;
    nowX: number;
    nowY: number;
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
  }

  declare interface AngularUITree$IEventInfo {
    dest: {
      index: number,
      nodesScope: AngularUITree$IParentTreeNodeScope
    };
    elements: any;
    pos: AngularUITree$IPosition;
    source: AngularUITree$IEventSourceInfo;
  }

  declare interface AngularUITree$IAcceptCallback {
    (
      source: AngularUITree$ITreeNodeScope,
      destination: AngularUITree$ITreeNodeScope,
      destinationIndex: number
    ): boolean;
  }

  declare interface AngularUITree$IDroppedCallback {
    (eventInfo: AngularUITree$IEventInfo): void;
  }

  declare interface AngularUITree$ICallbacks {
    accept: AngularUITree$IAcceptCallback;
    dragStart: AngularUITree$IDroppedCallback;
    dropped: AngularUITree$IDroppedCallback;
  }

  /**
   * Internal representation of node in the UI
   */
  declare type AngularUITree$ITreeNodeScope = {
    node: AngularUITree$ITreeNode
  } & ng.IScope;

  declare type AngularUITree$IParentTreeNodeScope = {
    isParent(nodeScope: AngularUITree$ITreeNodeScope): boolean
  } & AngularUITree$ITreeNodeScope;

  /**
   * Node in list
   */
  declare interface AngularUITree$ITreeNode {
    id: number | string;
    nodes: AngularUITree$ITreeNode[];
    title: string;
  }
}
