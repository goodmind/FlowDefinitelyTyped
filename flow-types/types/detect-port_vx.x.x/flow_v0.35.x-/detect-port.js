declare module "detect-port" {
    declare interface DetectPort {
        (port: number, callback: (err: Error, _port: number) => void): void;
        (port: number): Promise<number>;
    }
    declare var detectPort: DetectPort;
    declare module.exports: typeof detectPort;
}
