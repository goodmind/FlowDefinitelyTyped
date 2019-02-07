declare module "suncalc" {
  declare export interface GetTimesResult {
    dawn: Date;
    dusk: Date;
    goldenHour: Date;
    goldenHourEnd: Date;
    nadir: Date;
    nauticalDawn: Date;
    nauticalDusk: Date;
    night: Date;
    nightEnd: Date;
    solarNoon: Date;
    sunrise: Date;
    sunriseEnd: Date;
    sunset: Date;
    sunsetStart: Date;
  }
  declare export interface GetSunPositionResult {
    altitude: number;
    azimuth: number;
  }
  declare export interface GetMoonPositionResult {
    altitude: number;
    azimuth: number;
    distance: number;
    parallacticAngle: number;
  }
  declare export interface GetMoonIlluminationResult {
    fraction: number;
    phase: number;
    angle: number;
  }
  declare export interface GetMoonTimes {
    rise: Date;
    set: Date;
    alwaysUp: boolean;
    alwaysDown: boolean;
  }
  declare export function getTimes(
    date: Date,
    latitude: number,
    longitude: number
  ): GetTimesResult;

  declare export function addTime(
    angleInDegrees: number,
    morningName: string,
    eveningName: string
  ): void;

  declare export function getPosition(
    timeAndDate: Date,
    latitude: number,
    longitude: number
  ): GetSunPositionResult;

  declare export function getMoonPosition(
    timeAndDate: Date,
    latitude: number,
    longitude: number
  ): GetMoonPositionResult;

  declare export function getMoonIllumination(
    timeAndDate: Date
  ): GetMoonIlluminationResult;

  declare export function getMoonTimes(
    date: Date,
    latitude: number,
    longitude: number,
    inUTC?: boolean
  ): GetMoonTimes;
}
