import React from "react"
import PropImg from "./PropImg"
import DefaultImg from "./DefaultImg"



function RenderAbout(props) {
    return (
        <aside>
            {props.image ? <PropImg src={props.image}/> : <DefaultImg />}
        </aside>
    )
}

export default RenderAbout