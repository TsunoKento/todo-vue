<script setup lang="ts">
import { ref } from "vue";

const todoList = ref([
  { id: 1, title: "aaa" },
  { id: 2, title: "bbb" },
  { id: 3, title: "ccc" },
]);
</script>

<template>
  <h2>未完了</h2>
  <v-card class="mx-auto">
    <v-list :items="todoList" item-value="id" />
  </v-card>
</template>
