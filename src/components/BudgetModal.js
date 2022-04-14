import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";

import ExpenseList from "./ExpenseList";

import { useSelector, useDispatch } from "react-redux";
import { modalsActions } from "../store/modals-slice";
import { budgetsActions } from "../store/budgets-slice";

const BudgetModal = () => {
  const { show, id } = useSelector((state) => state.modals.budgetModal);

  const budget = useSelector((state) => {
    return state.budgets.budgets.find((budget) => budget.id === id);
  });

  const dispatch = useDispatch();

  if (!budget) return <></>;

  const handleClose = () => {
    dispatch(modalsActions.hideBudgetModal());
  };

  const handleNewExpense = () => {
    dispatch(modalsActions.showNewExpenseModal());
  };

  const handleDeleteExpense = (expenseId) => {
    dispatch(budgetsActions.deleteExpense({ budgetId: id, expenseId }));
  };

  const handleDeleteBudget = () => {
    dispatch(budgetsActions.deleteBudget(id));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{budget.budgetName}</Modal.Title>
        <Button variant="outline-danger" onClick={handleDeleteBudget}>
          <Trash />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <ExpenseList
          expenses={budget.expenses}
          onDelete={handleDeleteExpense}
        />
        <div className="d-flex gap-1 justify-content-end">
          <h5>{`$${budget.totalAmount}`}</h5>
          <p className="text-muted">{`/ $${budget.limit}`}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleNewExpense}>
          Add Expense
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BudgetModal;
