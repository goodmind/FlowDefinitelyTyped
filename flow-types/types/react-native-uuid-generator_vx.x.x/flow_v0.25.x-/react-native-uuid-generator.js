declare module "react-native-uuid-generator" {
  declare var npm$namespace$UUIDGenerator: {
    getRandomUUID: typeof UUIDGenerator$getRandomUUID
  };
  declare function UUIDGenerator$getRandomUUID(): Promise<string>;

  declare function UUIDGenerator$getRandomUUID(
    callback: (uuid: string) => void
  ): void;

  declare export default typeof UUIDGenerator;
}
