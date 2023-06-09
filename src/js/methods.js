//ver lista de tareas

const getTodos =async()=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr',
   {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
  const data = await resp.json()
  console.log(data)
}

//CREAR TAREA

const addTodo =async(task)=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "POST",
      body: JSON.stringify(task) ,
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    console.log(data)
}

//actualizar tarea

const upDateTodos =async(todos)=>{
  const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    console.log(data)
}



    

   

    