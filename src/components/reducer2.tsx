import { useReducer } from "react"

type reducerCount = {
    count: number;
}
type reducerAction = {
    type: string;
}

const actions = {
    add: 'adicionar',
    del: 'deletar',
    reset: 'resetar',
}

const initialCountState: reducerCount = {count: 0};

const handleCountTow = (state: reducerCount, action: reducerAction) => {
    switch(action.type){
        case actions.add:
            return{count: state.count + 1};
        break;
        case actions.del:
            if(state.count > 0){
                return{count: state.count - 1};
            }
        break;
        case actions.reset:
            return initialCountState;
        break;
    }
    return state;
}

export const ReducerTeste2 = () => {
    const[countState, countDispatch] = useReducer(handleCountTow, initialCountState);

    return(
        <div>
            Contador: {countState.count}
            <button onClick={() => countDispatch({type: actions.add})}>ADD</button>
            <button onClick={() => countDispatch({type: actions.del})}>DEL</button>
            <button onClick={() => countDispatch({type: actions.reset})}>RES</button>
        </div>
    );
}