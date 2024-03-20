//import Vue from 'vue'
import vayuVue from "vayu-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vayuVue);
  nuxtApp.provide("global", nuxtApp.vueApp.config.globalProperties);
});
