import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {createDataTopNamesTable} from "../../../HelpFunction/CreateDataTopNamesTable";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function BasicTable() {
    const [sortTable, setSortTable] = useState("quantityDown")

    const rows = [
        createDataTopNamesTable('Frozen yoghurt', 159, 6.0),
        createDataTopNamesTable('Ice cream sandwich', 237, 9.0),
        createDataTopNamesTable('Eclair', 262, 16.0),
        createDataTopNamesTable('Cupcake', 305, 3.7),
        createDataTopNamesTable('Gingerbread', 356, 16.0),
    ];

    useEffect(() => {
        drawTable();
    }, [sortTable])

    function drawTable() {
        return (rows.sort((a, b) => {
            if (sortTable === "quantityUp"){
               return a.nameQuantity - b.nameQuantity
           } else if (sortTable === "quantityDown"){
               return b.nameQuantity - a.nameQuantity
           } else if (sortTable === "percentageUp"){
               return a.namePercentage - b.namePercentage
           } else if (sortTable === "percentageDown"){
               return b.namePercentage - a.namePercentage
           }
        }).map((row) => (
            <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.nameQuantity}</TableCell>
                <TableCell align="right">{row.namePercentage}</TableCell>
            </TableRow>
        )))
    }

    function sortQuantity() {
        if (sortTable === "quantityDown") {
            setSortTable("quantityUp");
        } else if (sortTable === "quantityUp") {
            setSortTable("quantityDown");
        } else {
            setSortTable("quantityDown");
        }
    }

    function sortPercentage() {
        if (sortTable === "percentageDown") {
            setSortTable("percentageUp");
        } else if (sortTable === "percentageUp") {
            setSortTable("percentageDown");
        } else {
            setSortTable("percentageDown");
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Imię</TableCell>
                        <TableCell className="tHead" onClick={() => {
                            sortQuantity()
                        }} align="right">Ilość
                            {sortTable === "quantityDown" && <ArrowDownwardIcon/>}
                            {sortTable === "quantityUp" && <ArrowUpwardIcon/>}
                        </TableCell>
                        <TableCell className="tHead" onClick={() => {
                           sortPercentage()
                        }} align="right">%
                            {sortTable === "percentageDown" && <ArrowDownwardIcon/>}
                            {sortTable === "percentageUp" && <ArrowUpwardIcon/>}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {drawTable()}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
