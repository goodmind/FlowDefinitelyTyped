declare module 'inquirer-npm-name' {
        import type {
          Inquirer,Answers,Question
        } from 'inquirer';

	declare function askName(
name: string | Question,
inquirer: Inquirer): Promise<{
[key: string]: string
}>

	declare module.exports: typeof askName

    }
