<template>
  <div>
    <h1>All Todos</h1>
    <button @click="newTodo()">New Todo - static</button>
    <br>
    <input type="text" placeholder="Author" v-model="state.newAuthor">
    <span> Test: {{ state.newAuthor }} </span>
    <br>
    <input type="text" placeholder="Todo" v-model="state.newTodoItem">
    <span> Test: {{ state.newTodoItem }} </span>

  <br>
  <br>  
  <br>
  <!-- SwaggerLogin button -->
  <button @click="swaggerLogin()">Swagger Login</button>
<!--   <div v-for="todo in state.todos" :key="todo.author">
      <h4>
        {{todo.author}}
        {{todo.name}}
        <br>
        {{todo.description}}
      </h4>
      <p>{{todo.todo}}</p>
      <p>inStock: {{todo.inStock}}</p>
      <p>Price: {{todo.price}}</p>
      
      <button @click="deleteTodo(todo._id)">Delete todo</button>
      <button @click="editTodo(todo._id)">Edit todo</button>
    </div> -->
     <div v-for="todo in state.todos" :key="todo._id">
      <router-link :to="`/todo/${todo._id}`">
        <h4>
          {{todo.author}}
        </h4>
        <p>
          {{todo.todo}}
        </p>
        
        <button @click="GetSpecificTodo(todo._id)">Edit todo</button>
      </router-link>
      <button @click="deleteTodo(todo._id)">Delete todo</button>
    </div> 
    
  </div>
</template>

<script setup>
import todocrud from '../modules/todocrud'
import { onMounted } from 'vue'

  //  export default {
  //    setup() {

      const { state, GetAllTodos, newTodo, deleteTodo, /* editTodo, */ swaggerLogin  } = todocrud()
      // REST API token added: swaggerLogin

      onMounted(() => {
        GetAllTodos()
      })

      // return { state, GetAllTodos, newTodo, deleteTodo, editTodo, swaggerLogin }
      // REST API token added: swaggerLogin
  //    },
   
    
  //  }
</script>

<style lang="scss" scoped>

</style>