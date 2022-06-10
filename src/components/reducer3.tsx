import { useReducer, useState } from "react";
import {recuderPerson, reducerAction} from '../types';
import { v4 as uuid } from "uuid";


const initinalNameState: recuderPerson[] = [];

const actions = {
    adicionar: 'adicionar',
    delete: 'delete',
    order: 'order',
}

const handleSendName = (state: recuderPerson[], action: reducerAction) => {
    switch(action.type){
        case actions.adicionar:
            if(action.payload?.name){
                state.push({
                    id: uuid(),
                    name: action.payload.name,
                    email: action.payload.email
                })
            }
        break; 
        case actions.delete:
            state = state.filter((item) => item.email !== action.payload?.email);
        break;
        case actions.order:
            state = state.sort((a, b) => a.name > b.name? 1 : -1)
        break;
    }
    return state;
}


export const PersonList = () => {
    
    const[nameState, nameDispatch] = useReducer(handleSendName, initinalNameState);
    const[name, setName] = useState('')
    
    const handleInputList= (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return(
        <div className="container">
            <div className="listAddArea">
                <input type="text" value={name} onChange={handleInputList}/>
                <button onClick={() => nameDispatch({type: actions.adicionar})}>Adicionar</button>
                <button onClick={() => nameDispatch({type: actions.delete})}>Deletar</button>
            </div>
            <div className="listArea">
                {nameState.map((item, index) => (
                    <ul key={index}>
                        <li>{item.name}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}