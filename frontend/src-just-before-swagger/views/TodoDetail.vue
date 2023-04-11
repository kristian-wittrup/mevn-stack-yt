<template>
  <div>
    <h1>Editing a ToDo</h1>

    <div v-for="item in todo" :key="item._id">
      Author: <h4>{{item.author}}</h4>
      Todo Item: <p>{{item.todo}}</p>
    </div>

    <hr>

    <input type="text" placeholder="Author" v-model="state.newAuthor">
    <span> Test: {{ state.newAuthor }} </span>
    <br>
    <input type="text" placeholder="Todo" v-model="state.newTodoItem">
    <span> Test: {{ state.newTodoItem }} </span>
    <br>
    <button @click="editTodo(todoId)">Update Item</button>

      <input type="file" name="" id="">
    <hr>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import todocrud from '../modules/todocrud'

// export default {
//   setup() {

    const { editTodo, state, GetSpecificTodo, todo, todoId } = todocrud()
      
    onMounted(() => {
      GetSpecificTodo()
    })
    //GetSpecificTodo()
    
    // return { editTodo, state, GetSpecificTodo, todo, todoId  }
//   }
// }
</script>

<style lang="scss" scoped>

</style>