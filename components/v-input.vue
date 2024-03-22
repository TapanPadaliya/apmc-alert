<template>
  <Field
    class="appearance-none rounded border border-white/50 text-black focus:appearance-none"
    :name="name"
    :rules="rules"
    :value="value"
    v-bind="$attrs"
    @input="$emit('update:value', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    value: { type: [String, Number], default: null },
    rules: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "name",
    },
  },
  emits: ["update:value"],
};
</script>
