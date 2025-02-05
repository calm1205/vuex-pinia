<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import {
  mapGetters as mapVuexGetters,
  mapActions as mapVuexActions,
} from "vuex";
import { mapState, mapActions } from "pinia";
import { useUserStore } from "./pinia/user";
import { store } from "./vuex/store";

export default {
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(useUserStore, [
      "getVuexCountFromStore",
      "getVuexCountFromUseStore",
      "incrementVuexCount",
    ]),
    ...mapVuexActions("countModule", ["increment"]),
    logState() {
      console.log("[pinia] name: ", this.name);
      console.log(
        "[pinia] vuex count from store: ",
        this.getVuexCountFromStore()
      );
      console.log(
        "[pinia] vuex count from useStore: ",
        this.getVuexCountFromUseStore()
      );
      console.log("[vuex] countModule count: ", store.state.countModule?.count);
      console.log(
        "[vuex] $store count: ",
        this.$store.state.countModule?.count
      );
    },
  },
  computed: {
    ...mapState(useUserStore, ["name"]),
    ...mapVuexGetters("countModule", ["count"]),
  },
  mounted() {
    this.logState();
  },
};
</script>

<template>
  <section>
    <HelloWorld msg="Vite + Vue" />
    <p>count is {{ count }}</p>
    <button @click="increment">increment vuex count</button>
    <button @click="incrementVuexCount">increment vuex count from pinia</button>
    <button @click="logState">show log</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
