/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { useState, useEffect } from 'react';
import { useTodoList, actions } from './reducerList';
import { MdRemoveCircle } from 'react-icons/md';
import { BodyContainer, Container,InputsArea,ListArea } from './style';
import { Button, Typography } from '@mui/material';
import { FormInputs } from '../Form/Form';
import { Box } from '@mui/system';


export const PersonList = () => {

    const [nameState, dispatch] = useTodoList();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleInputListName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputListJob = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJob(event.target.value);
    };

    const handleInputAdd = () => {
        if (name && job) {
            dispatch({
                type: actions.adicionar,
                payload: {
                    job: job,
                    name: name,
                }
            });
        } else {
            alert('Todos os campos são obrigatórios');
        }
        setName('');
        setJob('');
    };

    const handleOrderList = () => {
        dispatch({
            type: actions.order
        });
    };

    useEffect(() => {
        handleOrderList();
    }, [name]);

    return (
        <BodyContainer>
            <Typography variant='button'>Lista de tarefas</Typography>
            <InputsArea>
                <FormInputs
                    value={name}
                    label='Informe seu nome...'
                    changeFunction={handleInputListName}
                />
                <FormInputs
                    value={job}
                    label='Nome da tarefa...'
                    changeFunction={handleInputListJob}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '1ch',
                    mb:'2ch'}}
                >
                    <Button
                    fullWidth={false}
                    variant='contained'
                    onClick={handleInputAdd}
                    >
                        Adicionar
                    </Button>
                    <Button
                    fullWidth={false}
                    variant='contained'
                    onClick={handleOrderList}
                    >
                        Ordernar A-Z
                    </Button>
                </Box>
            </InputsArea>
            <Container >
                {nameState.map((item, index) => (
                    <ListArea key={index}>
                        <div className="itemName">{item.name}</div>
                        <div className="itemJob">{item.job}</div>
                        <MdRemoveCircle className="deleteButton" onClick={() => dispatch({
                            type: actions.delete,
                            payload: {
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
};