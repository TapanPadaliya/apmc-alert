import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    detail: null,
    apmc: [],
  }),
  getters: {
    getUser: (state) => {
      return state.detail;
    },
    getApmc: (state) => {
      return state.apmc;
    },
  },
  actions: {
    updateUser(detail) {
      this.detail = detail;
    },
    aadToAPMC(detail) {
      this.apmc.push(detail);
    },
    removeFromApmc(detail) {
      this.apmc = [];
    },
  },
});
