declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { ComponentCustomProperties } from "vue"
import { State } from "./vuex/store"
import { Store } from "vuex"

declare module "vue" {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module "pinia" {
  interface PiniaCustomProperties {
    vuexStore: any
  }
}
