import React from "react";
import style from './style.css';

function TodoItems(props){
    const completedStyle = {
        fontstyle: "italic",
        color: " red",
        textdecoration: "line through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox"
             checked={props.item.completed}
             onChange={() => props.handleChange(props.item.id)} ></input>
             
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}
export default TodoItems