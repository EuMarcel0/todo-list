/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import { Box, TextField } from '@mui/material';
import { PropsForm } from '../../types';
 
export const FormInputs = ({value, label, validate, changeFunction } : PropsForm) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            mb:'1ch',
            mt:'1ch'
        }}
        >
            <TextField
                error={validate}
                id="outlined-name"
                value={value}
                label={label}
                onChange={changeFunction}
            />
        </Box>
    );
};