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