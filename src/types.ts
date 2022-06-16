/* eslint-disable linebreak-style */


// Types para o componente ReducerList

export type recuderPerson = {
    id: string;
    name: string;
    job: string;
};
export type reducerAction = {
    type: string;
    payload?: {
        name: string;
        job: string;
    };
};

//Types para o componente Form

export type PropsForm = {
    value: string;
    label: string;
    validate?: boolean;
    error: string;
    changeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (event: React.KeyboardEvent) => void;
};

//Type para para passar o array de items dos intpus para o component TableItems

export type TableItemsProps = {
    items: recuderPerson[];
    table: boolean;
}