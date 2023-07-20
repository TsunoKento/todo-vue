<script setup lang="ts">
import UncompletedTodoList from "../components/UncompletedTodoList.vue";
import AddTodo from "../components/AddTodo.vue";
</script>

<template>
  <v-container>
    <h1>TODO</h1>
    <AddTodo />
    <UncompletedTodoList />
  </v-container>
</template>
