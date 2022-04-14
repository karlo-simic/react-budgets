import ListGroup from "react-bootstrap/ListGroup";
import { Trash } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const ExpenseItem = ({ expense, onDelete }) => {
  const handleDelete = () => {
    onDelete(expense.id);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <h6 className="mb-0">{expense.expenseName}</h6>
      <div>
        <p className="mb-0 d-inline-block me-3">{`$${expense.amount}`}</p>
        <Button variant="outline-danger" onClick={handleDelete}>
          <Trash />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ExpenseItem;
