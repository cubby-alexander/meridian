import React from "react";
import UnorderedList from "../../../components/UnorderedList/UnorderedList";
import OrderedList from "../../../components/OrderedList/OrderedList";
import ContentTable from "../ContentTable/ContentTable";
import ContentChecklist from "../ContentChecklist/ContentChecklist";

export default function SlideBuilder(props) {
    let htmlContent;

    switch (props.typeOfElement) {
        case "header":
            htmlContent = <h6>{props.content}</h6>;
            break;
        case "paragraph":
            htmlContent = <p>{props.content}</p>;
            break;
        case "unordered list":
            htmlContent = <UnorderedList content={props.content} />;
            break;
        case "ordered list":
            htmlContent = <OrderedList content={props.content} />;
            break;
        case "break":
            htmlContent = <br />;
            break;
        case "static-table":
            htmlContent = <ContentTable type={"static"} tableSlug={props.content} />
            break;
        case "input-table":
            htmlContent = <ContentTable type={"input"} tableSlug={props.content} />
            break;
        case "rendered-table":
            htmlContent = <ContentTable type={"rendered"} tableSlug={props.content} />
            break;
        case "checklist section":
            htmlContent = <ContentChecklist content={props.content} />
            break;
        case "static-checklist":
            htmlContent = <ContentChecklist content={props.content} type={"static"} />
            break;
        case "input-checklist":
            htmlContent = <ContentChecklist content={props.content} type={"input"} />
            break;
        case "rendered-checklist":
            htmlContent = <ContentChecklist content={props.content} type={"rendered"} />
            break;
        default:
            htmlContent = null;
            break;
        }
        return (
            <div>
                {htmlContent}
            </div>
            )
};