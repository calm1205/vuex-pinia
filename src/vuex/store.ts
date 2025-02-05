import { createStore } from "vuex";
import { countModule, type CountState } from "./module/countModule";
import { rootCount } from "./root/rootCount";
import { rootOrder } from "./root/rootOrder";
import { orderModule, type OrderState } from "./module/orderModule";

interface RootState {
  rootCount: typeof rootCount;
  rootOrder: typeof rootOrder;
}
export type State = RootState & { countModule?: CountState } & {
  orderModule?: OrderState;
};

export const store = createStore<State>({
  state: {
    rootCount,
    rootOrder,
  },
  getters: {
    rootCount(state) {
      return state.rootCount.rootCount;
    },
    rootOrder(state) {
      return state.rootOrder.rootOrder;
    },
  },
  actions: {
    incrementRootCount({ state }) {
      state.rootCount.rootCount++;
    },
  },
  modules: {
    countModule,
    orderModule,
  },
});
