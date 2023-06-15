import React from "react";
import Formulario from "./formulario.jsx";
import { useState, useEffect } from "react";
import Item from "./item.jsx"
import { addTodoInServer, getTodos } from "../methods.js";

const Home = () => {
	const [todos, setTodos]=useState([]);
	useEffect (()=>{
		const updateTodos = async()=>{
			const todosFromService = await getTodos()
			setTodos(todosFromService)

		}
		updateTodos()
	},[])

	const addTodo=(text)=>{
		let id = [];		
		let todo={id:id, label: text, completed:false}
		addTodoInServer(todo)
		let newTodos=[...todos, todo]
		console.log(newTodos)
		setTodos(newTodos)
	
		};
		const removeTodo=(id)=>{
			let updatedTodos= todos.filter((todo)=>todo.id !==id);
			setTodos(updatedTodos);
	};
	return (
		<>
		<div class ="container text-secondary  d-flex w-50 bg-light">
			<h1 className="container bg-light text-muted justify-content-center d-flex">toDo</h1>
		</div>

		<div className="container d-flex w-50 justify-content-center bg-light">
				<p><Formulario addToDo={addTodo} /></p>
								
		</div>
		<div className="container body w-50 p-5 bg-light">
				
				{todos.map((todo)=>{
				return (<Item removeTodo={removeTodo} todo={todo} key={todo.id}/>
				)
			})}
		</div>
		<div className="container footer text-secondary  d-flex w-50 bg-light">
			<p>Tareas pendientes {todos.length}</p>
		</div>
		</>
  
	);
};

export default Home;
