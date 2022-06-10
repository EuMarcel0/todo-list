import { useReducer } from 'react';
import style from './reducer.module.css';

type reducerState = {
    number: number;
}
type reducerAction = {
    type: string;
}

const initialState: reducerState = {number: 0};

const handleCountSate = (state: reducerState, action: reducerAction) => {
    switch (action.type){
        case 'ADD':
            return{number: state.number + 1};
        break;
        case 'DEL':
            if(state.number > 0){
                return{number: state.number - 1};
            }
        break;
        case 'RESET':
            return initialState;
        break;
    }
    return state;
}

export const ReducerTest = () => {
    const[state, stateDispatch] = useReducer(handleCountSate, initialState);

    return(
        <>
            <div>
                Count: {state.number}
            </div>
            <button onClick={() => stateDispatch({type: 'ADD'})}>+</button>
            <button onClick={() => stateDispatch({type: 'DEL'})}>-</button>
            <button onClick={() => stateDispatch({type: 'RESET'})}>Resetar</button>
        </>
    );
}