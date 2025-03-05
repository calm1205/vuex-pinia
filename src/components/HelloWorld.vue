<script setup lang="ts">
import { useUserStore } from "../pinia/user"
const store = useUserStore()
const msg = store.name
</script>

<template>
  <h1>name: {{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
