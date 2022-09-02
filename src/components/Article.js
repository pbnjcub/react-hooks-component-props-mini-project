import React from "react";
import DefaultDate from "./DefaultDate"
import PropDate from "./PropDate"


function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            {props.date ? <PropDate date={props.date} /> : <DefaultDate />}
            <p>{props.preview}</p>
        </article>
    )
}

export default Article