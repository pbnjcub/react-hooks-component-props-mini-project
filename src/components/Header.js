import React from "react";

function RenderHeader(props) {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}

export default RenderHeader;