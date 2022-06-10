import { useState, useEffect } from "react";
import { useTodoList, actions } from './reducerList';
import { Container, ListArea } from "./style";


export const PersonList = () => {
    
    const[nameState, dispatch] = useTodoList();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    
    const handleInputListName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleInputListEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleInputAdd = () => {
        if(name && email){
            dispatch({
                type: actions.adicionar,
                payload: {
                    email: email,
                    name: name,
                }
            })
        }else{
            alert('Todos os campos são obrigatórios')
        }
        setName('');
        setEmail('');
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
        <div className="container">
            <div className="listAddArea">
                <input type="text" value={name} onChange={handleInputListName}/>
                <input type="text" value={email} onChange={handleInputListEmail}/>
                <button onClick={handleInputAdd}>Adicionar</button>
                <button onClick={handleOrderList}>Ordernar A-Z</button>
            </div>
            <div className="listArea">
                <Container >
                    {nameState.map((item, index) => (
                        <ListArea key={index}>
                            <div>{index + 1}</div>
                            <div>{item.name}</div> 
                            <div>{item.email}</div>
                            <button onClick={() => dispatch({
                                type: actions.delete,
                                payload:{
                                    email: item.email,
                                    name: item.name
                                }
                            })}>Deletar</button>
                        </ListArea>     
                    ))}
                </Container>
            </div>
        </div>
    );
}