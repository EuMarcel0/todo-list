
export type recuderPerson = {
    id: string;
    name: string;
    job: string;
}
export type reducerAction = {
    type: string;
    payload?: {
        name: string;
        job: string;
    }
}