import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
const Item=(props)=>{
    const{todo, removeTodo}=props
    return(
        <>
        <div className="row w-100 border border-dark p-2 rounded bg-white my-3">
            <div className="col-11">{props.todo.label}</div>
            <div className="col-1"><AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)}/></div>                 
            
        </div>
        </>
    )
}
export default Item;