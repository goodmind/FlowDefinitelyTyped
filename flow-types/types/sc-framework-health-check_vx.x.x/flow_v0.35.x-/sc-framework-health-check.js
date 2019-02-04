declare module 'sc-framework-health-check' {
        import type {
          Express
        } from 'express';

	declare export function attach(worker: SCWorker, expressApp: Express): void

    }
