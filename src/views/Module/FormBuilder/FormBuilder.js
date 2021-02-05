import React, {useEffect, useRef} from "react";
import Slide from "../Slide/Slide.js";

export default function FormBuilder(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            {props.html.map((htmlElement, index) => (
                <Slide
                    typeOfElement={htmlElement.typeOfElement}
                    content={htmlElement.content}
                    slide={index}
                    key={index}
                />
            ))}
        </div>
    )
}