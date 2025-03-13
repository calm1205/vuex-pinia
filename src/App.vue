<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import OptionsComponent from "./components/OptionsComponent.vue"
import { mapGetters as mapVuexGetters, mapActions as mapVuexActions } from "vuex"
import { mapState, mapActions } from "pinia"
import { useUserStore } from "./pinia/user"
import { store } from "./vuex/store"

export default {
  components: {
    HelloWorld,
    OptionsComponent,
  },
  methods: {
    ...mapActions(useUserStore, [
      "getVuexRootCount",
      "getVuexCountFromStore",
      "getVuexCountFromUseStore",
      "getVuexCountFromPiniaPlugin",
      "incrementVuexCount",
    ]),
    ...mapVuexActions(["incrementRootCount"]),
    ...mapVuexActions("countModule", ["increment"]),
    logState() {
      this.logPinia()
      this.logVuex()
      console.log("==============================")
    },
    logPinia() {
      console.group("[pinia]")
      console.log("name: ", this.name)
      console.log("vuex root count: ", this.getVuexRootCount())
      console.log("vuex count from store: ", this.getVuexCountFromStore())
      console.log("vuex count from useStore: ", this.getVuexCountFromUseStore())
      console.log("vuex count from pinia plugin: ", this.getVuexCountFromPiniaPlugin())
      console.groupEnd()
    },
    logVuex() {
      console.group("[vuex]")
      console.log("rootCount: ", store.getters.rootCount)
      console.log("countModule count: ", store.state.countModule?.count)
      console.log("$store count: ", this.$store.state.countModule?.count)
      console.groupEnd()
    },
  },
  computed: {
    ...mapState(useUserStore, ["name"]),
    ...mapVuexGetters(["rootCount"]),
    ...mapVuexGetters("countModule", ["count"]),
  },
  mounted() {
    this.logState()
  },
}
</script>

<template>
  <section>
    <HelloWorld msg="Vite + Vue" />
    <OptionsComponent title="hoge" @event-msg="logVuex" />
    <p>count is {{ count }}</p>
    <p>rootCount is {{ rootCount }}</p>
    <button @click="increment">increment vuex count</button>
    <button @click="incrementVuexCount">increment vuex count from pinia</button>
    <button @click="incrementRootCount">increment vuex root count</button>
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
