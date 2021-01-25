import React from "react";
import Slide from "../Slide/Slide.js";

export default function FormBuilder(props) {
    return (
        <div>
            {props.html.map((htmlElement, index) => (
                <Slide
                    typeOfElement={htmlElement.typeOfElement}
                    content={htmlElement.content}
                    key={index}
                    dynamic={props.dynamic}
                />
            ))}
        </div>
    )
}