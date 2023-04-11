import { ref, computed } from 'vue'
import { useRoute , useRouter } from 'vue-router'

const getTodos = () => {

  const route = useRoute();
  const router = useRouter();

  const todoId = computed(() => route.params.id)
  //console.log("todoId: ", todoId)

  const state = ref({
    newAuthor: '',
    newTodoItem: '',
    todos: {},
   // token: null // for swaggerLogin
  })

  // swaggerLogin
  const swaggerLogin = async () => { // REST API token -- login button - send login info for exist user, and grab token
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({
          email: "kw@easv.dk",
          password: "12345678"
        }) 
      }
      await fetch("https://men-restapi-easv-s23.onrender.com/api/user/login", requestOptions)
      .then(res => res.json())
      .then(data => {
      // debugger
        //console.log("token offsite data : ", data.data.token)
        //state.value.token = data
        //console.log("token : ", state.value.token)
        
       // let lsToken = ref()
        localStorage.setItem("lsToken", data.data.token);
        // window.localStorage.setItem('lsToken')
       // console.log("test lsToken: ", lsToken )
        //console.log('lsStorage: ', localStorage)
       // console.log('lsToken: ', localStorage.lsToken)
      })
    }
    catch(error) {
      console.log(error) 
    } 
  }

  const GetAllTodos = async () => {
    try {
      // Get SMSJ MEN heroku stack
      await fetch("https://men-restapi-easv-s23.onrender.com/api/products")
      // await fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        state.value.todos = data
        // debugger
      })
    }
    catch(error) {
      console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  }
  
  const newTodo = () => { 
    const requestOptions = {
      method: "POST",
      // Added headers for SMSJ: MEN onrender.com
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.lsToken // state.value.token.data.token // REST API token - grab token from online
      },
      body: JSON.stringify({ // REST API token
        name: state.value.name,
        description: state.value.description,
        price: 100,
        inStock: true,
        id: "1"
      }) 
    }
      // fetch("http://localhost:3000/todos/new", 
    fetch("https://men-restapi-easv-s23.onrender.com/api/products/", requestOptions)
    .then(
      GetAllTodos()
    )
  }

  
    const deleteTodo = (_id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         "auth-token": localStorage.lsToken
      },
      body: JSON.stringify({
        name: todo.value.name,
        description: todo.value.description,
        price: 100,
        inStock: false
      }) 
    }
    fetch("https://men-restapi-easv-s23.onrender.com/api/products/" + _id, requestOptions)
      .then(GetAllTodos())
  }

  const editTodo = () => { 
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
         "auth-token": localStorage.lsToken
         // grab token from local storage
      },
      body: JSON.stringify({
        name: todo.value.name,
        description: todo.value.description,
        price: 100,
        inStock: false
      }) 
    }
    fetch("https://men-restapi-easv-s23.onrender.com/api/products/" + todoId.value, 
    requestOptions)
      .then(/** If you need something to happen put it here */)
      router.push('/todos')
  }




  const todo = ref({})
  const GetSpecificTodo = async () => {
    try {
      fetch("https://men-restapi-easv-s23.onrender.com/api/products/" + todoId.value)
        .then(res =>  res.json() ) 
        .then(data => {
          //debugger
            todo.value = data
        })
    }
    catch(error) {
      console.log(error)
    }
  }


  return {
    todo,
    todoId,
    GetSpecificTodo,
    state,
    GetAllTodos, 
    newTodo,
    deleteTodo,
    editTodo,
    swaggerLogin  
  }
}

export default getTodos


// import { ref, computed } from 'vue'
// import { useRoute , useRouter } from 'vue-router'

// const getTodos = () => {

//   const route = useRoute();
//   const router = useRouter();

//   const todoId = computed(() => route.params.id)
//   //console.log("todoId: ", todoId)

//   const state = ref({
//     newAuthor: '',
//     newTodoItem: '',
//     todos: {}
//   })

//   const GetAllTodos = async () => {
//     try {
//        await fetch("http://localhost:3000/todos")
//       .then(res => res.json())
//       .then(data => {
//         state.value.todos = data
//         // debugger
//       })
//     }
//     catch(error) {
//       console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
//     }
//   }
  
//   const newTodo = () => { 
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//         // "auth-token": state.token
//       },
//       body: JSON.stringify({
//         author: state.value.newAuthor,
//         todo: state.value.newTodoItem
//       }) 
//     }
//       fetch("http://localhost:3000/todos/new", 
//       requestOptions
//     )
//     .then(
//       GetAllTodos()
//     )
//   }
  

//   const deleteTodo = (_id) => {
//     fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE"})
//       .then(GetAllTodos())
//   }

//   const editTodo = () => { 
//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//         // "auth-token": state.token
//       },
//       body: JSON.stringify({
//         author: state.value.newAuthor,
//         todo: state.value.newTodoItem
//       }) 
//     }
//     fetch("http://localhost:3000/todos/update/" + todoId.value, 
//     requestOptions)
//      // .then(GetAllTodos())
//       .then(res =>  res.body ) // redundant
//       .then(res => {console.log(res)}) // redundant
//       router.push('/todos')
//   }




//   const todo = ref({})
//   const GetSpecificTodo = async () => {
//     try {
//       fetch("http://localhost:3000/todos")
//         .then(res =>  res.json() ) 
//         .then(data => {
//             todo.value = data.filter(t => t._id === todoId.value)
//         })
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }


//   return {
//     todo,
//     todoId,
//     GetSpecificTodo,
//     state,
//     GetAllTodos, 
//     newTodo,
//     deleteTodo,
//     editTodo
//   }
// }

// export default getTodos
