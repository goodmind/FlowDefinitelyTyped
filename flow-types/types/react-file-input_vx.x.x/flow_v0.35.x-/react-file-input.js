declare module 'react-file-input' {
        declare interface FileInputProps {
name: string,
className: string,
accept: string,
placeholder: string,
disabled?: boolean,
onChange: (event: React.SyntheticEvent<any>) => void
} 
	declare class FileInput mixins React.Component<FileInputProps> {}
	declare module.exports: typeof FileInput

    }
