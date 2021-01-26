import React from "react";
import {useState, useContext} from "react";

import {makeStyles} from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRowBuilder from "./TableRowBuilder/TableRowBuilder";
import TableBody from "@material-ui/core/TableBody";
import styles from "assets/jss/material-kit-react/views/modulePage.js";
import ModuleContext from "../../views/Module/ModuleContext";

const useStyles = makeStyles(styles);

export default function ContentTable(props) {
    const [table, setTable] = useState(props.content.tableValues);
    const context = useContext(ModuleContext);
    const tableSlug = props.tableSlug;
    const classes = useStyles();

    console.log(context.tables.find(table => table.slug === tableSlug), table);

    function initializeInputs() {
        let tableContext = context.tables.find(table => table.slug === tableSlug);
        if ("inputsInitialized" in tableContext) {
            return null
        } else {
            tableContext.tableValues.forEach((row) => {
                row.forEach((cell) => {
                    cell.current = cell.default;
                })
            })
            tableContext.inputsInitialized = true;
        }
        console.log(tableContext)
    }

    function addRow() {
        let tableContext = context.tables.find(table => table.slug === tableSlug);
        if ("addedRows" in tableContext) {
            tableContext.addedRows = tableContext.addedRows + 1;
        } else {
            tableContext.addedRows = 1;
        }
        let newTable = [];
        const newRowLength = table[0].length;
        const newRow = new Array(newRowLength).fill({default: "", current: "", mutable: true});
        table.map((row) => {
            newTable.push(row)
        });
        newTable.push(newRow);
        tableContext.tableValues.push(newRow);
        setTable(newTable);
    }

    function removeRow() {
        let tableContext = context.tables.find(table => table.slug === tableSlug);
        tableContext.addedRows = tableContext.addedRows - 1;
        let newTable = [];
        table.map((row) => {
            newTable.push(row)
        });
        newTable.pop();
        context.tables.find(table => table.slug === tableSlug).tableValues.pop();
        console.log(context.tables.find(table => table.slug === tableSlug).tableValues)
        setTable(newTable);
    }

    return (
        <TableContainer>
            {initializeInputs()}
            <h6 className={classes.tableTitle}>{props.content.tableTitle}</h6>
            <Table>
                <TableHead>
                    <TableRowBuilder row={table[0]} rowId={0} type={"static"} class={"head"} />
                </TableHead>
                <TableBody>
                    {table.map((row, index) => (
                        index !== 0 ?
                            (<TableRowBuilder row={row} rowId={index} type={props.type} class={"body"} />)
                            : null
                    ))}
                </TableBody>
            </Table>
            {props.type === "input" ? (
                <div>
                    <div onClick={e => addRow()}>Add a row</div>
                    {context.tables.find(table => table.slug === tableSlug).addedRows > 0 ? (
                        <div onClick={e => removeRow()}>Remove last row</div>
                        ) : null
                    }
                </div>
                ) : null
            }

        </TableContainer>
    )
}