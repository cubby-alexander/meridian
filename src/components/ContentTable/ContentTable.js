import React from "react";
import {useState} from "react";

import {makeStyles} from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);

export default function ContentTable(props) {
    const [table, setTable] = useState(props.content.table);
    const classes = useStyles();
    function parseTableArray(arrayFromDB) {
        let tableHead = <TableHead>
            <TableRow>
                {arrayFromDB[0].map((cell) => (
                    <TableCell classes={{root: classes.tableHeader}}>{cell}</TableCell>
                ))}
            </TableRow>
        </TableHead>;
        let tableBody = <TableBody>
            {arrayFromDB.map((row, index) => (
                index !== 0 ?
                    (<TableRow>
                        {row.map((cell) => (
                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">{cell}</TableCell>
                        ))}
                    </TableRow>)
                    : null
            ))}
        </TableBody>;
        return [tableHead, tableBody]
    }

    function addRow() {
        let newTable = [];
        const newRowLength = table[0].length;
        const newRow = new Array(newRowLength).fill('');
        table.map((row) => {
            newTable.push(row)
        });
        newTable.push(newRow);
        setTable(newTable);
    }

    return (
        <TableContainer>
            <h6 className={classes.tableTitle}>{props.content.tableTitle}</h6>
            <Table>
                {parseTableArray(table)}
            </Table>
            <div onClick={e => addRow()}>Test Authentication</div>
        </TableContainer>
    )
}