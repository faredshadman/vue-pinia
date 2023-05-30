<template>
  <!-- <h1>Salam {{ counter.count }}</h1>
  <button @click="handleIncrement">Increment</button>
  <h1>{{ toggle.toggle }}</h1>
  <button @click="handleToggle">Toggle</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul> -->

  <h1>{{ compdata }}</h1>
  {{ num }}
  <input type="number" v-model="compdata" />

  <!-- <button @click="increId">Incre</button>
  <img :src="todo.thumbnailUrl" alt="Photo" />
  <h1>{{ todo.title }}</h1> -->
</template>

<script>
import { useCounterStore, useToggleStore } from "@/stores";
import { onMounted, onUnmounted, ref, computed } from "@vue/runtime-core";
export default {
  name: "HelloWorld",
  setup() {
    const controller = new AbortController();
    const id = ref(1);
    const num = ref(1);
    const todos = ref([]);
    const todo = ref({});
    const counter = useCounterStore();
    const toggle = useToggleStore();
    const increId = () => {
      id.value++;
    };
    const compdata = computed({
      get() {
        return num.value;
      },
      set(value) {
        num.value = value;
      },
    });
    const fetchTodoById = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((json) => {
          todo.value = json;
        });
    };
    // watchEffect(() => {
    //   fetchTodoById(id.value);
    // });

    onMounted(() => {
      fetchTodoById(id.value);
      // fetchTodos();
    });
    onUnmounted(() => {
      controller.abort();
    });
    const handleIncrement = () => {
      counter.increment();
    };
    const handleToggle = () => {
      toggle.handleToggle();
    };
    return {
      counter,
      handleIncrement,
      handleToggle,
      toggle,
      todos,
      todo,
      increId,
      compdata,
      num,
    };
  },
};
</script>
