declare module "webvr-api" {
  declare type VRDisplayEventReason_dt_alias =
    | "mounted"
    | "navigation"
    | "requested"
    | "unmounted";
  declare type VREye_dt_alias = "left" | "right";
  declare type VRDisplay = {
    /**
     * Dictionary of capabilities describing the VRDisplay.
     */
    +capabilities: VRDisplayCapabilities,

    /**
     * z-depth defining the far plane of the eye view frustum
     * enables mapping of values in the render target depth
     * attachment to scene coordinates. Initially set to 10000.0.
     */
    depthFar: number,

    /**
     * z-depth defining the near plane of the eye view frustum
     * enables mapping of values in the render target depth
     * attachment to scene coordinates. Initially set to 0.01.
     */
    depthNear: number,

    /**
     * An identifier for this distinct VRDisplay. Used as an
     * association point in the Gamepad API.
     */
    +displayId: number,

    /**
     * A display name, a user-readable name identifying it.
     */
    +displayName: string,
    +isConnected: boolean,
    +isPresenting: boolean,

    /**
     * If this VRDisplay supports room-scale experiences, the optional
     * stage attribute contains details on the room-scale parameters.
     */
    +stageParameters: VRStageParameters | null,

    /**
     * Passing the value returned by `requestAnimationFrame` to
     * `cancelAnimationFrame` will unregister the callback.
     */
    cancelAnimationFrame(handle: number): void,

    /**
     * Stops presenting to the VRDisplay.
     */
    exitPresent(): Promise<void>,
    getEyeParameters(whichEye: VREye_dt_alias): VREyeParameters,

    /**
     * Populates the passed VRFrameData with the information required to render
     * the current frame.
     */
    getFrameData(frameData: VRFrameData): boolean,

    /**
     * Get the layers currently being presented.
     */
    getLayers(): VRLayer[],

    /**
 * @deprecated Return a VRPose containing the future predicted pose of the VRDisplay
when the current frame will be presented. The value returned will not
change until JavaScript has returned control to the browser.

The VRPose will contain the position, orientation, velocity,
and acceleration of each of these properties.
 */
    getPose(): VRPose,

    /**
     * Return the current instantaneous pose of the VRDisplay, with no
     * prediction applied.
     */
    getImmediatePose(): VRPose,

    /**
     * The callback passed to `requestAnimationFrame` will be called
     * any time a new frame should be rendered. When the VRDisplay is
     * presenting the callback will be called at the native refresh
     * rate of the HMD. When not presenting this function acts
     * identically to how window.requestAnimationFrame acts. Content should
     * make no assumptions of frame rate or vsync behavior as the HMD runs
     * asynchronously from other displays and at differing refresh rates.
     */
    requestAnimationFrame(callback: FrameRequestCallback): number,

    /**
     * Begin presenting to the VRDisplay. Must be called in response to a user gesture.
     * Repeat calls while already presenting will update the VRLayers being displayed.
     */
    requestPresent(layers: VRLayer[]): Promise<void>,

    /**
     * Reset the pose for this display, treating its current position and
     * orientation as the "origin/zero" values. VRPose.position,
     * VRPose.orientation, and VRStageParameters.sittingToStandingTransform may be
     * updated when calling resetPose(). This should be called in only
     * sitting-space experiences.
     */
    resetPose(): void,

    /**
     * The VRLayer provided to the VRDisplay will be captured and presented
     * in the HMD. Calling this function has the same effect on the source
     * canvas as any other operation that uses its source image, and canvases
     * created without preserveDrawingBuffer set to true will be cleared.
     */
    submitFrame(pose?: VRPose): void
  } & EventTarget;

  declare var VRDisplay: {
    prototype: VRDisplay,
    new(): VRDisplay
  };
  declare interface VRLayer {
    leftBounds?: number[] | Float32Array | null;
    rightBounds?: number[] | Float32Array | null;
    source?: HTMLCanvasElement | null;
  }
  declare interface VRDisplayCapabilities {
    +canPresent: boolean;
    +hasExternalDisplay: boolean;
    +hasOrientation: boolean;
    +hasPosition: boolean;
    +maxLayers: number;
  }
  declare var VRDisplayCapabilities: {
    prototype: VRDisplayCapabilities,
    new(): VRDisplayCapabilities
  };
  declare interface VREyeParameters {
    /**
     * @deprecated
     */
    +fieldOfView: VRFieldOfView;
    +offset: Float32Array;
    +renderHeight: number;
    +renderWidth: number;
  }
  declare var VREyeParameters: {
    prototype: VREyeParameters,
    new(): VREyeParameters
  };
  declare interface VRFieldOfView {
    +downDegrees: number;
    +leftDegrees: number;
    +rightDegrees: number;
    +upDegrees: number;
  }
  declare var VRFieldOfView: {
    prototype: VRFieldOfView,
    new(): VRFieldOfView
  };
  declare interface VRFrameData {
    +leftProjectionMatrix: Float32Array;
    +leftViewMatrix: Float32Array;
    +pose: VRPose;
    +rightProjectionMatrix: Float32Array;
    +rightViewMatrix: Float32Array;
    +timestamp: number;
  }
  declare var VRFrameData: {
    prototype: VRFrameData,
    new(): VRFrameData
  };
  declare interface VRPose {
    +angularAcceleration: Float32Array | null;
    +angularVelocity: Float32Array | null;
    +linearAcceleration: Float32Array | null;
    +linearVelocity: Float32Array | null;
    +orientation: Float32Array | null;
    +position: Float32Array | null;
    +timestamp: number;
  }
  declare var VRPose: {
    prototype: VRPose,
    new(): VRPose
  };
  declare interface VRStageParameters {
    sittingToStandingTransform?: Float32Array;
    sizeX?: number;
    sizeY?: number;
  }
  declare interface Navigator {
    getVRDisplays(): Promise<VRDisplay[]>;
    +activeVRDisplays: $ReadOnlyArray<VRDisplay>;
  }
  declare type VRDisplayEventInit = {
    display: VRDisplay,
    reason?: VRDisplayEventReason_dt_alias
  } & EventInit;

  declare type VRDisplayEvent = {
    +display: VRDisplay,
    +reason: VRDisplayEventReason_dt_alias | null
  } & Event;

  declare var VRDisplayEvent: {
    prototype: VRDisplayEvent,
    new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent
  };
  declare interface Window {
    onvrdisplayactivate: ((ev: Event) => any) | null;
    onvrdisplayblur: ((ev: Event) => any) | null;
    onvrdisplayconnect: ((ev: Event) => any) | null;
    onvrdisplaydeactivate: ((ev: Event) => any) | null;
    onvrdisplaydisconnect: ((ev: Event) => any) | null;
    onvrdisplayfocus: ((ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((ev: Event) => any) | null;
    onvrdisplaypresentchange: ((ev: Event) => any) | null;
    addEventListener(
      type: "vrdisplayactivate",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplayblur",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplayconnect",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplaydeactivate",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplaydisconnect",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplayfocus",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplaypointerrestricted",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplaypointerunrestricted",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "vrdisplaypresentchange",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
  }
  declare interface Gamepad {
    +displayId: number;
  }
}
