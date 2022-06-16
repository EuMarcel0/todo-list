/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';
import { TableItemsProps } from '../../types';

export const TableItems = ({ items, table }: TableItemsProps) => {

    const theme = useTheme();
    const belowMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={belowMd ? { minWidth: 400 } : { minWidth: 650 }} aria-label="list table">
                    {table && (
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Técnico</TableCell>
                                <TableCell align="left">Tarefa</TableCell>
                            </TableRow>
                        </TableHead>
                    )}
                    {items.map((item, index) => (
                        <TableBody key={index}>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">{item.name}</TableCell>
                                <TableCell align="left">{item.job}</TableCell>
                            </TableRow>
                        </TableBody>
                        ))
                    }
                </Table>
            </TableContainer>
        </Box>
    );
};