import { useState, useEffect } from "react";
import { useTodoList, actions } from './reducerList';
import { MdRemoveCircle } from 'react-icons/md';
import { 
    BodyContainer,
    Container,
    InputsArea,
    ListArea 
} from "./style";


export const PersonList = () => {
    
    const[nameState, dispatch] = useTodoList();
    const[name, setName] = useState('');
    const[job, setJob] = useState('');
    
    const handleInputListName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleInputListEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJob(event.target.value);
    }

    const handleInputAdd = () => {
        if(name && job){
            dispatch({
                type: actions.adicionar,
                payload: {
                    job: job,
                    name: name,
                }
            })
        }else{
            alert('Todos os campos são obrigatórios')
        }
        setName('');
        setJob('');
    }

    const handleOrderList = () => {
        dispatch({
            type: actions.order
        })
    }
    
    useEffect(() => {
        handleOrderList()
    }, [name])

    return(
        <BodyContainer>
            <InputsArea>
                <input type="text" value={name} onChange={handleInputListName}/>
                <input type="text" value={job} onChange={handleInputListEmail}/>
                <button onClick={handleInputAdd}>Adicionar</button>
                <button onClick={handleOrderList}>Ordernar A-Z</button>
            </InputsArea>
                <Container >
                    {nameState.map((item, index) => (
                        <ListArea key={index}>
                            <div className="itemName">{item.name}</div> 
                            <div className="itemJob">{item.job}</div>
                            <MdRemoveCircle className="deleteButton" onClick={() => dispatch({
                                type: actions.delete,
                                payload:{
                                    job: item.job,
                                    name: item.name
                                }
                            })}>Deletar
                            </MdRemoveCircle>
                        </ListArea>     
                    ))}
                </Container>
        </BodyContainer>
    );
}