<script>
export default {
  name: "OptionsComponent",
  data() {
    return {
      dataMsg: "Hello, Options API!",
    };
  },
  props: {
    title: String,
  },
  emits: ["event-msg"],
  methods: {
    eventMsg() {
      this.$emit("event-msg", "Hello, Options API!");
    },
  },
};
</script>

<template>
  <p>name: {{ dataMsg }}</p>
  <p>props: {{ title }}</p>
  <button @click="eventMsg">Options Component</button>
</template>
