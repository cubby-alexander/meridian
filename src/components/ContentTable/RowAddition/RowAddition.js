import React from "react";
import {useContext} from "react";
import ModuleContext from "../../../views/Module/ModuleContext";

export default function RowAddition(props) {
    const context = useContext(ModuleContext);
    const tableSlug = props.tableSlug;
    const contextTable = context.tables.find(table => table.slug === tableSlug);

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
        contextTable.pop();
        console.log(context.tables.find(table => table.slug === tableSlug).tableValues)
    }

    return (
        <div>
            <div onClick={e => addRow()}>Add a row</div>
            {contextTable.addedRows > 0 ? (
                <div onClick={e => removeRow()}>Remove last row</div>
            ) : null
            }
        </div>
    )
}