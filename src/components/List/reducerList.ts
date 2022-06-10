import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { recuderPerson, reducerAction } from '../../types'

export const actions = {
    adicionar: 'adicionar',
    delete: 'delete',
    order: 'order',
}

const initinalNameState: recuderPerson[] = [];

const handleSendName = (state: recuderPerson[], action: reducerAction) => {
    switch(action.type){
        case actions.adicionar:
            if(action.payload?.name){
                const newState = [...state];
                newState.push({
                    id: uuid(),
                    name: action.payload?.name,
                    email: action.payload?.email
                })
                return newState;
            }
        break; 
        case actions.delete:
            if(action.payload?.email){
                let newState = [...state];
                newState = newState.filter((item) => item.email !== action.payload?.email);
                return newState;
            }
        break;
        case actions.order:
            let newState = [...state];
            newState = newState.sort((a, b) => a.name > b.name? 1 : -1)
            return newState;
        break;
    }
    return state;
}

export const useTodoList = () => {
    return useReducer(handleSendName, initinalNameState);
}

