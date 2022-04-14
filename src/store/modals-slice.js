import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budgetModal: {
    show: false,
    id: null,
  },
  newBudgetModal: {
    show: false,
  },
  newExpenseModal: {
    show: false,
    id: null,
  },
};

const modalsSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    showBudgetModal(state, action) {
      state.budgetModal = {
        show: true,
        id: action.payload,
      };
    },
    hideBudgetModal(state) {
      state.budgetModal = initialState.budgetModal;
    },

    showNewBudgetModal(state, action) {
      state.newBudgetModal = {
        show: true,
      };
    },
    hideNewBudgetModal(state) {
      state.newBudgetModal = initialState.newBudgetModal;
    },

    showNewExpenseModal(state, action) {
      state.newExpenseModal = {
        show: true,
        id: action.payload,
      };
    },
    hideNewExpenseModal(state) {
      state.newExpenseModal = initialState.newExpenseModal;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice.reducer;
