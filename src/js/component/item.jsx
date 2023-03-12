import React from "react";

const Item=(props)=>{
    return(
        <>
        <div>
            {props.todo.text}
        </div>
        </>
    )
}
export default Item;