import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../store/modals-slice";

const Header = () => {
  const dispatch = useDispatch();

  const budgets = useSelector((store) => store.budgets.budgets);

  const handleNewBudget = () => {
    dispatch(modalsActions.showNewBudgetModal());
  };

  const handleNewExpense = () => {
    dispatch(modalsActions.showNewExpenseModal());
  };

  return (
    <div className="d-flex justify-content-between flex-wrap my-4">
      <h4>Budgets</h4>
      <div>
        <Button variant="primary" className="me-2" onClick={handleNewBudget}>
          Add Budget
        </Button>
        <Button
          variant="outline-primary"
          disabled={budgets.length === 0}
          onClick={handleNewExpense}
        >
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default Header;
