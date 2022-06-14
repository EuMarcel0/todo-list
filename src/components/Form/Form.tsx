/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import { Box, TextField } from '@mui/material';
import { PropsForm } from '../../types';
 
export const FormInputs = ({value, label, validation, changeFunction } : PropsForm) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            mb:'1ch',
            mt:'2ch'
        }}
        >
            <TextField
                error={validation? validation : !validation}
                id="outlined-name"
                value={value}
                label={label}
                onChange={changeFunction}
            />
        </Box>
    );
};