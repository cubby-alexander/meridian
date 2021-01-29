import React from "react";
import {useState} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCellBuilder from "../TableCellBuilder/TableCellBuilder";

export default function TableRowBuilder(props) {
    const [tableSlug, setTableSlug] = useState(props.tableSlug);
    console.log(props.row);

    if ((props.type === "static" || props.type === "rendered") && props.row.every((cell) => {
        return cell.default === "";
    })) {
        return null
    } else {
        return (
            <TableRow>
                {props.row.map((cell, index) => (
                    <TableCellBuilder
                        component="th"
                        scope={props.class === "body" ? ("row") : null}
                        class={props.class}
                        cellType={props.type}
                        tableSlug={props.tableSlug}
                        rowId={props.rowId}
                        cellId={index}
                        value={cell}
                    />
                ))}
            </TableRow>
        )
    }
}