declare module '@feathersjs/configuration' {
        import type {
          Application
        } from '@feathersjs/feathers';

	declare export default function feathersConfiguration(): <T>(app: Application<T>) => Application<T>

    }
