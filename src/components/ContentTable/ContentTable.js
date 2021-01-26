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
    const [originalTableLength, setOriginalTableLength] = useState(props.content.tableValues.length);
    const context = useContext(ModuleContext);
    const tableSlug = props.tableSlug;
    const classes = useStyles();

    console.log(ModuleContext, context.tables.find(table => table.slug === tableSlug), table, originalTableLength);

    function addRow() {
        let newTable = [];
        const newRowLength = table[0].length;
        const newRow = new Array(newRowLength).fill({default: "", current: "Test"});
        table.map((row) => {
            newTable.push(row)
        });
        newTable.push(newRow);
        context.tables.find(table => table.slug === tableSlug).tableValues.push(newRow);
        setTable(newTable);
    }

    function removeRow() {
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
                    {table.length > originalTableLength ? (
                        <div onClick={e => removeRow()}>Remove a row</div>
                        ) : null
                    }
                </div>
                ) : null
            }

        </TableContainer>
    )
}