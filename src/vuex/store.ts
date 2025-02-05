import { createStore } from "vuex";
import { countModule, type CountState } from "./module/countModule";
import { globalCount } from "./global/globalCount";
import { globalOrder } from "./global/globalOrder";
import { orderModule, type OrderState } from "./module/orderModule";

interface GlobalState {
  globalCount: typeof globalCount;
  globalOrder: typeof globalOrder;
}
export type State = GlobalState & { countModule?: CountState } & {
  orderModule?: OrderState;
};

export const store = createStore<State>({
  state: {
    globalCount,
    globalOrder,
  },
  getters: {
    globalCount(state) {
      return state.globalCount.globalCount;
    },
    globalOrder(state) {
      return state.globalOrder.globalOrder;
    },
  },
  actions: {
    incrementGlobalCount({ state }) {
      state.globalCount.globalCount++;
    },
  },
  modules: {
    countModule,
    orderModule,
  },
});
