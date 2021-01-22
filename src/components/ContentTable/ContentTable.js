import React from "react";
import {useState} from "react";

import {makeStyles} from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRowBuilder from "./TableRowBuilder/TableRowBuilder";
import TableBody from "@material-ui/core/TableBody";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);

export default function ContentTable(props) {
    const [table, setTable] = useState(props.content.table);
    const classes = useStyles();

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
                <TableHead>
                    <TableRowBuilder row={table[0]} class={"head"} />
                </TableHead>
                <TableBody>
                    {table.map((row, index) => (
                        index !== 0 ?
                            (<TableRowBuilder row={row} class={"body"} />)
                            : null
                    ))}
                </TableBody>
            </Table>
            <div onClick={e => addRow()}>I JUST NEED TO TEST SOMETHING</div>
        </TableContainer>
    )
}