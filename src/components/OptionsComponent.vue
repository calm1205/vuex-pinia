<script lang="ts">
import { useUserStore } from "../originalStore/useUserStore"

const userStore = useUserStore()

export default {
  name: "OptionsComponent",
  data() {
    return {
      dataMsg: "Hello, Options API!",
    }
  },
  props: {
    title: String,
  },
  emits: ["event-msg"],
  computed: {
    user() {
      return userStore.state
    },
  },
  methods: {
    eventMsg() {
      this.$emit("event-msg", "Hello, Options API!")
    },
    setUserState() {
      userStore.setUserState({ id: 1, name: "Options API", email: "" })
    },
  },
}
</script>

<template>
  <p>name: {{ dataMsg }}</p>
  <p>props: {{ title }}</p>
  <button @click="eventMsg">Options Component</button>
  <button @click="setUserState">set user</button>
  <p>user: {{ user }}</p>
</template>
