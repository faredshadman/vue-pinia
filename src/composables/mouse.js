import { ref } from "vue";
import { useEventListener } from "./eventListener";
export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  useEventListener(window, "mousemove", update);
  return {
    x,
    y,
  };
}
