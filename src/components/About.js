import React from "react"
// import PropImg from "./PropImg.js"
// import DefaultImg from "./DefaultImg"

function About(props) {
    const isImg = props.image
    return (
        <aside>
            {isImg ? <img src={props.image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo"/>}
            <p>{props.about}</p>
        </aside>
        
    )
}

export default About