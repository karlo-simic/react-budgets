import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete }) => {
  const expensesElements = expenses.map((expense) => {
    return (
      <ExpenseItem expense={expense} key={expense.id} onDelete={onDelete} />
    );
  });

  return (
    <Card className="mb-3">
      <ListGroup variant="flush">{expensesElements}</ListGroup>
    </Card>
  );
};

export default ExpenseList;
