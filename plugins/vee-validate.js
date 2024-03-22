import { Field, ErrorMessage, Form } from "vee-validate";
import "./vee-validate-rules";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VForm", Form);
  nuxtApp.vueApp.component("Field", Field);
  nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
});
