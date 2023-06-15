//ver lista de tareas

export const getTodos =async()=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr',
   {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
  const data = await resp.json()
  return data
}

//CREAR TAREA

export const addTodo =async(task)=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "POST",
      body: JSON.stringify(task) ,
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    return data
}

//actualizar tarea

export const upDateTodos =async(todos)=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    return data
}



    

   

    