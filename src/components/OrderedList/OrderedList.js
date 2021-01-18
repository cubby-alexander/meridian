import React, {useState} from "react";
import ListItem from "../ListItem/ListItem";


export default function OrderedList(props) {
    var inputId = props.inputId;
    const [value, setInputId] = useState(0);
    return (<ol>
        {props.content.map((listItem, index) => {
            return <ListItem props={listItem} key={listItem.key}/>
        })}
    </ol>);
}
