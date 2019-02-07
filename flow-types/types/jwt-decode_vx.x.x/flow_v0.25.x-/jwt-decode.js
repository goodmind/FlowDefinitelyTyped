declare module "jwt-decode" {
  declare interface JwtDecode$Options {
    header: boolean;
  }
  declare function JwtDecode<TTokenDto>(
    token: string,
    options?: JwtDecode$JwtDecode$Options
  ): TTokenDto;

  declare module.exports: typeof JwtDecode;
}
