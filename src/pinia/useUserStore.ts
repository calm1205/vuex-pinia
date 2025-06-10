import { defineStore } from "pinia"
import { store as vuexStore } from "../vuex/store"

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "pinia user",
  }),
  getters: {
    upperCaseName(state) {
      return state.name.toUpperCase()
    },
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
    getVuexRootCount() {
      return vuexStore.state.rootCount?.rootCount
    },
    getVuexCountFromStore() {
      return vuexStore.state.countModule?.count
    },
    getVuexCountFromPiniaPlugin() {
      return this.vuexStore.state.countModule?.count
    },
    incrementVuexCount() {
      vuexStore.dispatch("countModule/increment")
    },
  },
})
