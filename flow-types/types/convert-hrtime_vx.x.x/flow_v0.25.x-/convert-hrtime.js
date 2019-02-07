declare module "convert-hrtime" {
  declare module.exports: typeof convertHrtime;

  declare function convertHrtime(
    hrtime: [number, number]
  ): convertHrtime$convertHrtime$HRTime;

  declare interface convertHrtime$HRTime {
    seconds: number;
    milliseconds: number;
    nanoseconds: number;
  }
}
