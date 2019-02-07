declare module "correlation-id" {
  declare export function withId(id: string, work: () => void): void;

  declare export function withId(work: () => void): void;

  declare export function bindId<T: (...p: any[]) => any>(
    id: string,
    work: T
  ): T;

  declare export function bindId<T: (...p: any[]) => any>(work: T): T;

  declare export function getId(): string | void;
}
