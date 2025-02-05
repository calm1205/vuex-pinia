import { defineStore } from "pinia";
import { store as vuexStore } from "../vuex/store";
// import { useStore } from "vuex";

export const useUserStore = defineStore("user", {
  state: () => ({ name: "Eduardo" }),
  getters: {
    upperCaseName(state) {
      return state.name.toUpperCase();
    },
  },
  actions: {
    setName(name: string) {
      this.name = name;
    },
    getVuexRootCount() {
      return vuexStore.state.rootCount?.rootCount;
    },
    getVuexCountFromStore() {
      return vuexStore.state.countModule?.count;
    },
    getVuexCountFromUseStore() {
      // This will throw an error because useStore is not available here
      // const store = useStore();
      // return store.state.countModule?.count;
    },
    incrementVuexCount() {
      vuexStore.dispatch("countModule/increment");
    },
  },
});
