declare module "semaphore" {
    declare function semaphore(
        capacity?: number
    ): semaphore$semaphore$Semaphore;

    declare interface semaphore$Task {
        (): void;
    }

    declare interface semaphore$Semaphore {
        capacity: number;
        available(n: number): boolean;
        take(task: semaphore$Task): void;
        take(n: number, task: semaphore$Task): void;
        leave(n?: number): void;
    }
    declare module.exports: typeof semaphore;
}
