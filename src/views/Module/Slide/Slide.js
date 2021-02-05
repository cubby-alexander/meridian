import React, {useEffect, useRef} from "react";


import makeStyles from "@material-ui/core/styles/makeStyles";
import SlideBuilder from "../SlideBuilder/SlideBuilder.js";


import styles from "../jss/module";

const useStyles = makeStyles(styles);

export default function Slide(props) {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <h4 className={classes.slideTitle}>{props.title}</h4>
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