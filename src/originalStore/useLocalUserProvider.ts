import { provide, readonly, ref, type InjectionKey, type Ref } from "vue"

interface User {
  id: number
  name: string
}

export const localUserKey = Symbol("local-user") as InjectionKey<{
  userState: Ref<User | undefined>
  setUserState: (user: User) => void
}>

export const useLocalUserProvider = () => {
  const userState = ref<User>({ id: 0, name: "hoge" })

  const setUserState = (user: User) => {
    console.log("setUserState", user)
    userState.value = user
  }

  provide(localUserKey, {
    userState: readonly(userState),
    setUserState,
  })
}
