<script lang="ts">
import { mapState, mapActions } from "pinia"
import { useUserStore } from "./pinia/useUserStore"
import { useUserVuexStore } from "./pinia/useUserVuexStore"

export default {
  methods: {
    ...mapActions(useUserStore, ["getVuexRootCount"]),
    ...mapActions(useUserVuexStore, ["log"]),
    logState() {
      this.logPinia()
      this.logVuex()
      console.log("==============================")
    },
    logPinia() {
      console.group("[pinia]")
      console.log("vuex count: ", this.log())
      console.groupEnd()
    },
    logVuex() {
      console.group("[vuex]")
      console.groupEnd()
    },
  },
  computed: {
    ...mapState(useUserStore, ["name"]),
  },
}
</script>

<template>
  <section>
    <button @click="logState">show log</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
