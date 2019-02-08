declare module "react-native" {
  declare export interface DeviceEventEmitterStatic {
    addListener(
      event: "Accelerometer" | "Gyroscope" | "Magnetometer",
      callback: (data: {
        x: number,
        y: number,
        z: number
      }) => void
    ): EmitterSubscription;
    addListener(
      event: "Orientation",
      callback: (data: {
        azimuth: number,
        pitch: number,
        roll: number
      }) => void
    ): EmitterSubscription;
    addListener(
      event: "StepCounter",
      callback: (data: {
        steps: number
      }) => void
    ): EmitterSubscription;
    addListener(
      event: "Thermometer",
      callback: (data: {
        temp: number
      }) => void
    ): EmitterSubscription;
    addListener(
      event: "LightSensor",
      callback: (data: {
        light: number
      }) => void
    ): EmitterSubscription;
    addListener(
      event: "Proximity",
      callback: (data: {
        isNear: boolean,
        value: number,
        maxRange: number
      }) => void
    ): EmitterSubscription;
  }
  declare export interface NativeModulesStatic {
    SensorManager: SensorManager;
  }
}
declare module "react-native-sensor-manager" {
  declare export * from "react-native"

  declare interface SensorManager {
    startAccelerometer(delay: number): void;
    stopAccelerometer(): void;
    startGyroscope(delay: number): void;
    stopGyroscope(): void;
    startMagnetometer(delay: number): void;
    stopMagnetometer(): void;
    startStepCounter(delay: number): void;
    stopStepCounter(): void;
    startThermometer(delay: number): void;
    stopThermometer(): void;
    startMotionValue(delay: number): void;
    stopMotionValue(): void;
    startOrientation(delay: number): void;
    stopOrientation(): void;
    startProximity(delay: number): void;
    stopProximity(): void;
    startLightSensor(delay: number): void;
    stopLightSensor(): void;
  }
}
