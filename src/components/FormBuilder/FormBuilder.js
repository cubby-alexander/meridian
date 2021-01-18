import React from "react";
import Slide from "../Slide/Slide.js";

export default function FormBuilder(props) {
    return (
        <div>
            {props.html.map((htmlElement) => (
                <Slide
                    typeOfElement={htmlElement.typeOfElement}
                    content={htmlElement.content}
                    sectionTitle={htmlElement.sectionTitle}
                    tableTitle={htmlElement.tableTitle}
                />
            ))}
        </div>
    )
}