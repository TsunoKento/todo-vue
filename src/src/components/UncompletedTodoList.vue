<script setup lang="ts">
import apiClient from "@/http-common";
import { Ref } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

interface Todo {
  id: number;
  title: string;
}

const todoList: Ref<Todo[] | undefined> = ref();

onMounted(async () => {
  const response = await apiClient.get("/api/todos");
  todoList.value = response.data.data;
});
</script>

<template>
  <h2>未完了</h2>
  <v-card class="mx-auto" v-if="todoList">
    <v-list :items="todoList" item-value="id" />
  </v-card>
</template>
