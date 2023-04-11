<template>
  <div>
    <h1>Editing a ToDo</h1>
    <p>{{ todo.name }}</p>
    <p>{{ todo.description }}</p>
   <!--  <div v-for="item in todo" :key="item._id">
      Author: <h4>{{item.name}}</h4>
      Todo Item: <p>{{item.description}}</p>
    </div> -->

    <hr>

    <input type="text" placeholder="Author" v-model="todo.name">
    <span> Test: {{ todo.name }} </span>
    <br>
    <input type="text" placeholder="Todo" v-model="todo.description">
    <span> Test: {{ todo.description }} </span>
    <br>
    <button @click="editTodo(todoId)">Update Item</button>

      <input type="file" name="" id="">
    <hr>
  </div>
</template>

<script setup>
import todocrud from '../modules/todocrud'

// export default {
//   setup() {

    const { editTodo, /* state, */ GetSpecificTodo, todo, todoId } = todocrud()
      
    GetSpecificTodo()
    
    // return { editTodo, state, GetSpecificTodo, todo, todoId  }
//   }
// }
</script>

<style lang="scss" scoped>

</style>