declare module "w3c-generic-sensor" {
  declare class SensorErrorEvent mixins Event {
    constructor(type: string, errorEventInitDict: SensorErrorEventInit): this;
    error: Error;
  }
  declare type SensorErrorEventInit = {
    error: Error
  } & EventInit;

  declare class Sensor mixins EventTarget {
    activated: boolean;
    timestamp: number;
    start(): void;
    stop(): void;
    onreading: (ev: Event) => any;
    onactivate: (ev: Event) => any;
    onerror: (ev: SensorErrorEvent) => any;
    addEventListener(
      type: "reading" | "activate",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void;
    addEventListener(
      type: "error",
      listener: (ev: SensorErrorEvent) => any,
      useCapture?: boolean
    ): void;
  }
  declare interface SensorOptions {
    frequency?: number;
  }
  declare class Accelerometer mixins Sensor {
    constructor(options?: SensorOptions): this;
    x: number;
    y: number;
    z: number;
  }
  declare class LinearAccelerationSensor mixins Accelerometer {
    constructor(options?: SensorOptions): this;
  }
  declare class GravitySensor mixins Accelerometer {
    constructor(options?: SensorOptions): this;
  }
  declare class Gyroscope mixins Sensor {
    constructor(options?: SensorOptions): this;
    x: number;
    y: number;
    z: number;
  }
  declare class Magnetometer mixins Sensor {
    constructor(options?: SensorOptions): this;
    x: number;
    y: number;
    z: number;
  }
  declare class UncalibratedMagnetometer mixins Sensor {
    constructor(options?: SensorOptions): this;
    x: number;
    y: number;
    z: number;
    xBias: number;
    yBias: number;
    zBias: number;
  }
  declare type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;
  declare class OrientationSensor mixins Sensor {
    quaternion: number[];
    populateMatrix(targetMatrix: RotationMatrixType): void;
  }
  declare class AbsoluteOrientationSensor mixins OrientationSensor {
    constructor(options?: SensorOptions): this;
  }
  declare class RelativeOrientationSensor mixins OrientationSensor {
    constructor(options?: SensorOptions): this;
  }
}
