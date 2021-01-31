import React, {useEffect} from "react";
import Slide from "../Slide/Slide.js";

export default function FormBuilder(props) {

    useEffect(() => {
        if (props.slide !== 0) {
            console.log("scrolling")
            window.scrollTo({
                top: 230,
                left: 0,
                behavior: 'smooth'})
        } else {
            window.scrollTo(0, 0)
        }
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