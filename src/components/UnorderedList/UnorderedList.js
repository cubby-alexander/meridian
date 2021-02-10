import React from "react";
import ListItem from "../ListItem/ListItem";


export default function UnorderedList(props) {
    return (<ul>
        {props.content.map((listItem, index) => {
            return <ListItem value={listItem} key={index}/>
        })}
    </ul>);
}
