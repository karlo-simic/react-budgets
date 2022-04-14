import { configureStore } from "@reduxjs/toolkit";

import budgetsReducer from "./budgets-slice";
import modalsReducer from "./modals-slice";

const store = configureStore({
  reducer: { budgets: budgetsReducer, modals: modalsReducer },
});

export default store;
