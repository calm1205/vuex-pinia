<script setup lang="ts">
import { useUserStore } from "../pinia/useUserStore"
import { inject } from "vue"
import { localUserKey } from "../originalStore/useLocalUserProvider"

const store = useUserStore()
const msg = store.name

const localUser = inject(localUserKey)
if (localUser) localUser.userState.value = { id: 3, name: "piyo" } // readonlyなので上書きできない。
</script>

<template>
  <h1>name: {{ msg }}</h1>
  <p>local user: {{ localUser?.userState.value?.name }}</p>
  <button @click="localUser?.setUserState({ id: 2, name: 'fuga' })">set local user</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
