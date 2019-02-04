declare module "factory-girl" {
    declare var factory: factory$factory$Static;
    declare interface factory$Static {
        /**
         * Associate the factory to other model
         */
        assoc(model: string, attributes: string): any;

        /**
         * Associate the factory to a model that's not persisted
         */
        assocAttrs(name: string, key?: string, attributes?: any): any;

        /**
         * Associate the factory to multiple other models
         */
        assocMany(model: string, num: number, attributes: string): any[];

        /**
         * Generates and returns model attributes as an object hash instead of the model instance
         */
        attrs<T>(name: string, attrs?: $Shape<T>): Promise<T>;

        /**
         * Generates and returns a collection of model attributes as an object hash instead of the model instance
         */
        attrsMany<T>(
            name: string,
            num: number,
            attrs?: Array<$Shape<T>>
        ): Promise<T[]>;

        /**
         * Builds a new model instance that is not persisted
         */
        build<T>(name: string, attrs?: $Shape<T>): Promise<T>;

        /**
         * Builds an array of model instances that are persisted
         */
        buildMany<T>(
            name: string,
            num: number,
            attrs?: $Shape<T>
        ): Promise<T[]>;
        buildMany<T>(name: string, attrs?: Array<$Shape<T>>): Promise<T[]>;

        /**
         * Destroys all of the created models
         */
        cleanUp(): void;

        /**
         * Builds a new model instance that is persisted
         */
        create<T>(name: string, attrs?: $Shape<T>): Promise<T>;

        /**
         * Builds an array of model instances that are persisted
         */
        createMany<T>(
            name: string,
            num: number,
            attrs?: $Shape<T>,
            buildOptions?: factory$Options<T>
        ): Promise<T[]>;
        createMany<T>(
            name: string,
            attrs?: Array<$Shape<T>>,
            buildOptions?: factory$Options<T>
        ): Promise<T[]>;

        /**
         * Define a new factory with a set of options
         */
        define<T>(
            name: string,
            model: any,
            attrs: T,
            options?: factory$Options<T>
        ): void;

        /**
         * Extends a factory
         */
        extend(
            parent: string,
            name: string,
            initializer: any,
            options?: factory$Options<any>
        ): any;

        /**
         * Generate values sequentially inside a factory
         */
        seq<T>(name: string, fn: (sequence: number) => T): T;

        /**
         * Register an adapter, either as default or tied to a specific model
         */
        setAdapter(adapter: any, name?: string): void;
    }

    declare interface factory$Options<T> {
        afterBuild?: factory$Hook<T>;
        afterCreate?: factory$Hook<T>;
    }

    declare type factory$Hook<T> = (
        model: any,
        attrs: T[],
        options: any
    ) => void;
    declare module.exports: typeof factory;
}
