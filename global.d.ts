// typescript에서 파일 경로로 import하기 위해 선언하는 type module들

declare module '*.png' {
    export default String;
}

declare module '*.jpg' {
    export default String;
}

interface FormDataValue {
    uri: string;
    name: string;
    type: string;
    props: string;
}

interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
}