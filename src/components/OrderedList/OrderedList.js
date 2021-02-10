import React from "react";
import ListItem from "../ListItem/ListItem";


export default function OrderedList(props) {
    return (<ol>
        {props.content.map((listItem, index) => {
            return <ListItem value={listItem} key={index}/>
        })}
    </ol>);
}
