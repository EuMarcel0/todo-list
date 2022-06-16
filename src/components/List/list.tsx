/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { useState, useEffect } from 'react';
import { useTodoList, actions } from './reducerList';
import { BodyContainer, Container, InputsArea } from './style';
import { Button, Typography } from '@mui/material';
import { FormInputs } from '../Form/Form';
import { Box } from '@mui/system';
import { TableItems } from '../TableItems/TableItems';


export const PersonList = () => {

    const [nameState, dispatch] = useTodoList();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [validate, setValidate] = useState(false);
    const [tableItemstrue, setTableItemsTrue] = useState(false);

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
            setTableItemsTrue(true);
        } else if (name === '' && job === '') {
            setValidate(true);
        }
        setName('');
        setJob('');
    };

    const handleOrderList = () => {
        dispatch({
            type: actions.order
        });
    };

    const handleEnterSendInput = (event: React.KeyboardEvent) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            handleInputAdd();
        }
    };

    useEffect(() => {
        handleEnterSendInput;
        setValidate(false);
    }, [name, job]);

    return (
        <BodyContainer>
            <Typography variant='button'>Lista de tarefas</Typography>
            <InputsArea>
                <FormInputs
                    onKeyUp={handleEnterSendInput}
                    validate={validate}
                    error='Preenchimento de nome obrigatório'
                    value={name}
                    label='Informe seu nome...'
                    changeFunction={handleInputListName}
                />
                <FormInputs
                    onKeyUp={handleEnterSendInput}
                    validate={validate}
                    error='Preenchimento de tarefa obrigatório'
                    value={job}
                    label='Nome da tarefa...'
                    changeFunction={handleInputListJob}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '1ch',
                    mb: '2ch'
                }}
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
                <TableItems items={nameState} table={tableItemstrue}/>
            </Container>
        </BodyContainer>
    );
};