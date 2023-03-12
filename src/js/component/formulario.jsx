
import React, {useState} from "react";


const Formulario=(props)=>{
    const [input, setImput]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addToDo(input)
        setImput("")
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="rounded">       
            <input 
            value={input}
            onChange={(e)=>setImput(e.target.value)} 
            placeholder="Pon aqui la tarea..."/>
            
            <button type="submit btn-outline-secondary" className="todo-boton">Agregar tarea</button>
        </form>
        </>
    )
}
export default Formulario;