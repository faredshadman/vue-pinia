<template>
  <div class="about">
    <input v-model="input" />
    {{ input }}
    {{ x }}
    {{ y }}
    <div v-if="isLoading">loading</div>
    <div v-for="todo in todos" :key="todo.is">
      {{ todo.title }}
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMouse } from "../composables/mouse";
import { useTodos } from "../stores";
const store = useTodos();
const { x, y } = useMouse();
const { isLoading, todos, input } = storeToRefs(store);
</script>
