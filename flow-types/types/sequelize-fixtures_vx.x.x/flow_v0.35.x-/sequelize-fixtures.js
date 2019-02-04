declare module 'sequelize-fixtures' {
        import typeof * as Sequelize from 'sequelize';

	declare interface SequelizeFixtures$Options {
encoding?: string,
log?: (message: string) => void,
transaction?: Sequelize.Transaction,
transformFixtureDataFn?: (data: any) => any,
modifyFixtureDataFn?: (data: any) => any
} 

declare interface SequelizeFixtures$SequelizeFixturesStatic {
loadFile(file: string, models: any, options?: SequelizeFixtures$Options): Promise<any>,
loadFiles(
files: string[],
models: any,
options?: SequelizeFixtures$Options): Promise<any>,
loadFixture(fixture: any, models: any, options?: SequelizeFixtures$Options): Promise<any>,
loadFixtures(
fixtures: any[],
models: any,
options?: SequelizeFixtures$Options): Promise<any>
} 
	declare var sequelizeFixtures: SequelizeFixtures$SequelizeFixtures$SequelizeFixturesStatic;
	declare module.exports: typeof sequelizeFixtures

    }
