import { Field, ErrorMessage, Form } from "vee-validate";
import { defineRule } from "vee-validate";
import {
  required,
  email,
  min,
  alpha_dash,
  max,
  numeric,
  is,
  confirmed,
  url,
} from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  // Define rules
  defineRule("required", required);
  defineRule("email", email);
  defineRule("alpha_dash", alpha_dash);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("numeric", numeric);
  defineRule("is", is);
  defineRule("url", url);
  defineRule("confirmed", confirmed);

  // Register Form Components
  nuxtApp.vueApp.component("VForm", Form);
  nuxtApp.vueApp.component("Field", Field);
  nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
});
