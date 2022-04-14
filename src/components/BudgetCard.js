import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { modalsActions } from "../store/modals-slice";

const getProgress = (percentage) => {
  if (percentage > 80 && percentage <= 100) return "warning";
  if (percentage > 100) return "danger";
  return "primary";
};

const BudgetCard = ({ budgetData }) => {
  const { budgetName, totalAmount, limit, id } = budgetData;

  const dispatch = useDispatch();

  const spentPercentage = (totalAmount / limit) * 100;

  const handleView = () => {
    dispatch(modalsActions.showBudgetModal(id));
  };

  const handleNewExpense = () => {
    dispatch(modalsActions.showNewExpenseModal(id));
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-wrap justify-content-between">
          <h5>{budgetName}</h5>
          <div className="d-flex gap-1">
            <h5>{`$${totalAmount}`}</h5>
            <p className="text-muted">{`/$${limit}`}</p>
          </div>
        </div>
        <ProgressBar
          variant={getProgress(spentPercentage)}
          now={spentPercentage}
        />
      </Card.Body>
      <Card.Footer className="text-end">
        <Button
          variant="outline-secondary"
          className="me-2"
          onClick={handleNewExpense}
        >
          Add Expense
        </Button>
        <Button variant="outline-primary" onClick={handleView}>
          View
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BudgetCard;
