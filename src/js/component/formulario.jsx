
import React, {useState} from "react";


const Formulario=(props)=>{
    const [input, setImput]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addToDo(input)
        setInput("")
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="todo-form">
        <div class="input-group">
  <input onChange={(e)=>setImput(e.target.value)} type="text" className="todo-input" placeholder="Pon aqui la tarea..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button type="submit btn-outline-secondary" id="button-addon2">Agregar tarea</button>
</div></form>
        </>
    )
}
export default Formulario;