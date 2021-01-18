import React from "react";

export default function ListItem(props) {
    return (
        <li key={props.key}>{props.value}</li>
    )
}