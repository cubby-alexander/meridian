import React from "react";
import {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ModuleContext from "../ModuleContext";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../components/CustomButtons/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "../styles/contentTable";

const useStyles = makeStyles(styles);

export default function RowAddition(props) {
    const context = useContext(ModuleContext);
    const tableSlug = props.tableSlug;
    const contextTable = context.tables.find(table => table.slug === tableSlug);
    const classes = useStyles();

    function addRow() {
        if ("addedRows" in contextTable) {
            contextTable.addedRows = contextTable.addedRows + 1;
        } else {
            contextTable.addedRows = 1;
        }
        const newRowLength = contextTable.tableValues[0].length;
        const newRow = new Array(newRowLength).fill({default: "", current: "", mutable: true});
        contextTable.tableValues.push(newRow);
    }

    function removeRow() {
        contextTable.addedRows = contextTable.addedRows - 1;
        contextTable.tableValues.pop();
        console.log(context.tables.find(table => table.slug === tableSlug).tableValues)
    }

    return (
        <div className={classes.rowButtons}>
            <Button size="sm" round justIcon color="primary" onClick={addRow}>
                <AddIcon />
            </Button>
            {contextTable.addedRows > 0 ? (
                <Button size="sm" round justIcon color="danger" onClick={removeRow}>
                    <RemoveIcon />
                </Button>
            ) : null
            }
        </div>
    )
}