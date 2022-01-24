import React from "react";

function joke(props){
    return(
        <div>
            <h3>questions: {props.question}</h3>
            <h3>answeres: {props.punchline}</h3>
        </div>

    )
}
export default joke;