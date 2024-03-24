import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    detail: null,
  }),
  getters: {
    doubleCount: (state) => {
      return state.detail;
    },
  },
  actions: {
    updateUser(detail) {
      this.detail = detail;
    },
  },
});
