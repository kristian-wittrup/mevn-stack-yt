<template>
  <div class="about">
    <h1 :class="{ active: isActive }">This is an about page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>

<style>
.active {
  color: red
}
</style>
