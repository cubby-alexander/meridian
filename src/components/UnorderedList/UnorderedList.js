import React, {useState} from "react";
import ListItem from "../ListItem/ListItem";


export default function UnorderedList(props) {
    var inputId = props.inputId;
    const [value, setInputId] = useState(0);
    return (<ul>
        {props.content.map((listItem, index) => {
            return <ListItem value={listItem} key={index}/>
        })}
    </ul>);
}
