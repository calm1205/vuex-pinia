import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { store } from "./vuex/store"
import { createPinia } from "pinia"

const pinia = createPinia()
const app = createApp(App)

function setupPinia() {
  return { vuexStore: store }
}
pinia.use(setupPinia)
app.use(store)
app.use(pinia)
app.mount("#app")
