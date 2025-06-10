import { defineStore } from "pinia"
import { computed } from "vue"
import { useStore } from "vuex"

export const useUserVuexStore = defineStore("userVuex", () => {
  const vuexStore = useStore()
  const vuexCountGetter = computed(() => vuexStore.getters["countModule/count"])

  const log = () => {
    console.log("vuexCountGetter: ", vuexCountGetter.value)
  }

  return { log }
})
