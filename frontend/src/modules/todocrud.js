import { ref } from 'vue'

const getTodos = () => {
  const state = ref({
    todos: {}
  })

  const GetAllTodos = async () => {
    try {
      await fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        state.value.todos = data
       // debugger
      })
    }
    catch(error) {
      console.log(error)
    }
  }

  const newTodo = () => {
    fetch("http://localhost:3000/todos/new", { method: "POST"})
  }

  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE"})
      .then({})
  }

  const editTodo = (_id) => {
    const requestOptions = {
      method: "PUT"
    }
    fetch("http://localhost:3000/todos/update/" + _id, requestOptions)
      .then(res => res.body)
      .then(res => {console.log(res)})
  }


  return {
    state,
    GetAllTodos, 
    newTodo,
    deleteTodo,
    editTodo
  }
}

export default getTodos