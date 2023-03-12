import React from "react";
import Formulario from "./formulario.jsx";
import { useState } from "react";
import Item from "./item.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	const [todos, setTodos]=useState([]);
	const addToDo=(text)=>{
		let id=1;
		if(todos.length>0){
			id.todo=todos[0].id +1
		}
		let todo={id:id, text:text, completed:false}
		let newToDos=[todo, ...todos]
		console.log(todos)
		setTodos(newToDos)
	};
	return (
		<>
		<div class="container d-flex w-50 justify-content-center bg-light">
			<h1 className="container bg-light text-muted justify-content-center d-flex">todos</h1>
		</div>

		<div className="container d-flex w-50 justify-content-center bg-light">
				<p><Formulario addToDo={addToDo} /></p>
				
		</div>
		<div className="container d-flex w-50 justify-content-center bg-light p-5">
				
				{todos.map((todo)=>{
				return (<Item todo={todo}/>
				)
			})}
		</div>
		</>
  
	);
};

export default Home;
