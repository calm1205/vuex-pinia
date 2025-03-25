import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore2 = defineStore("user2", () => {
  const vuexStore = ref()

  const callVuex = () => {
    return vuexStore.value.countModule.count
  }

  return { callVuex }
})
