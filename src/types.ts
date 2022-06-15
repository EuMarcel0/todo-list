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
    changeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};