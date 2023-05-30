import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
export const useTodos = defineStore("todos", () => {
  const isLoading = ref(false);
  const todos = ref([]);
  const input = ref("salam");

  const fetchTodos = async () => {
    isLoading.value = true;
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    todos.value = data;
    isLoading.value = false;
  };
  onMounted(fetchTodos);
  return {
    isLoading,
    todos,
    fetchTodos,
    input,
  };
});
