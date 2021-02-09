import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import SlideBuilder from "../SlideBuilder/SlideBuilder.js";
import styles from "../styles/module";

class Slide extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {
        const classes = this.props;
        return (
            <div>
                <h4 className={classes.slideTitle}>{this.props.title}</h4>
                {this.props.html.map((htmlElement, index) => (
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
}

export default withStyles(styles) (Slide);