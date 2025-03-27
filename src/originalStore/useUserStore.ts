import { readonly, ref } from "vue"
import { store as vuexStore } from "../vuex/store"

interface User {
  id: number
  name: string
  email: string
}

// Storeとして利用するためにcomposableの外で定義
const userState = ref<User>()

/** 自作したUserStore */
export const useUserStore = () => {
  // readonlyで参照のみ可能に
  const state = readonly(userState).value

  // ユーザー情報をセット
  const setUserState = (user: User) => (userState.value = user)

  // Vuexのカウントを取得
  const getVuexCount = () => {
    // const vuexStore = useStore() // これは使えない setup関数内 or component内で使う
    const vuexCount = vuexStore?.state.countModule?.count
    return vuexCount
  }

  return { state, setUserState, getVuexCount }
}
