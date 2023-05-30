import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => {
    return { toggle: false };
  },
  actions: {
    handleToggle() {
      this.toggle = !this.toggle;
    },
  },
});
