import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../utils/helpers";

const sumExpensesAmount = (expenses) => {
  return expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
};

const initialState = {
  budgets: [],
};

const budgetsSlice = createSlice({
  name: "Budgets",
  initialState,
  reducers: {
    addBudget(state, action) {
      const { budgetName, limit } = action.payload;

      if (!budgetName || !limit) return state;

      const newBudget = {
        id: generateId(),
        budgetName,
        limit,
        totalAmount: 0,
        expenses: [],
      };

      state.budgets.push(newBudget);
    },
    addExpense(state, action) {
      const { budgetId, expenseName, amount } = action.payload;

      if (!budgetId || !expenseName || !amount) return state;

      const budget = state.budgets.find((budget) => budget.id === budgetId);

      budget.expenses.push({
        id: generateId(),
        expenseName,
        amount,
      });

      budget.totalAmount = sumExpensesAmount(budget.expenses);
    },
    deleteExpense(state, action) {
      const { budgetId, expenseId } = action.payload;

      const budget = state.budgets.find((budget) => budget.id === budgetId);

      budget.expenses = budget.expenses.filter(
        (expense) => expense.id !== expenseId
      );

      budget.totalAmount = sumExpensesAmount(budget.expenses);
    },
    deleteBudget(state, action) {
      state.budgets = state.budgets.filter(
        (budget) => budget.id !== action.payload
      );
    },
    setBudgets(state, action) {
      state.budgets = action.payload;
    },
  },
});

export const budgetsActions = budgetsSlice.actions;
export default budgetsSlice.reducer;
