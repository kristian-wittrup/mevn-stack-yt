<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todos" v-show="isAuthenticated">Todos</router-link> |
    <router-link to="/about" >About</router-link> <!-- v-show="userLoggedIn" -->
  </nav>
  <!-- test login start -->
    <button @click="logIn()"> Login </button>
    <button @click="logOut()"> LogOut </button>
    <p>
      Logged in: {{ isAuthenticated }}
    </p>
  <!-- test login end -->
   <router-view/>
</template>

<script setup>
// Entire setup for login test
import useUsers from './modules/users'

const {  isAuthenticated,  logIn, logOut } = useUsers()
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
