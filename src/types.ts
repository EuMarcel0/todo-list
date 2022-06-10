
export type recuderPerson = {
    id: string;
    name: string;
    email: string;
}
export type reducerAction = {
    type: string;
    payload?: {
        name: string;
        email: string;
    }
}