import React, {useEffect} from "react";
import SlideBuilder from "../SlideBuilder/SlideBuilder.js";

export default function Slide(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            {props.html.map((htmlElement, index) => (
                <SlideBuilder
                    typeOfElement={htmlElement.typeOfElement}
                    content={htmlElement.content}
                    slide={index}
                    key={index}
                />
            ))}
        </div>
    )
}