<script setup lang="ts">
import { ref } from "vue";

const newTodo = ref("");

const todoRules = ref([
  (value: string) => {
    if (value) return true;

    return "新規TODOの入力は必須です。";
  },

  (value: string) => {
    if (value.length <= 50) return true;

    return "新規TODOは50文字以下で入力してください。";
  },
]);

const isNotValidError = ref(false);

const addTodo = async () => {
  if (isNotValidError.value) {
    await fetch("https://localhost:8000/api/todo");
  }
};
</script>

<template>
  <v-form @submit.prevent="addTodo()" v-model="isNotValidError">
    <v-row>
      <v-col cols="10" md="10">
        <v-text-field
          v-model="newTodo"
          label="新規TODO"
          counter
          maxlength="50"
          :rules="todoRules"
          required
        />
      </v-col>
      <v-col cols="2" md="2" class="mt-3">
        <v-btn type="submit" color="primary">追加</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
