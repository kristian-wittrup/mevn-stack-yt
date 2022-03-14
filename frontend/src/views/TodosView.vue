<template>
  <div>
    <div v-for="todo in state.todos" :key="todo.author">
      <h4>
        {{todo.author}}
      </h4>
       <p>
        {{todo.todo}}
      </p>
      <button @click="deleteTodo(todo._id)">Delete todo</button>
      <button @click="editTodo(todo._id)">Edit todo</button>
    </div>
    <button @click="newTodo()">New Todo - static</button>
  </div>
</template>

<script>
import todocrud from '../modules/todocrud'
import { onMounted } from 'vue'

  export default {
    setup() {

      const { state, GetAllTodos, newTodo, deleteTodo, editTodo  } = todocrud()

      onMounted(() => {
        GetAllTodos()
      })

      return { state, GetAllTodos, newTodo, deleteTodo, editTodo }
    },
   
    
  }
</script>

<style lang="scss" scoped>

</style>